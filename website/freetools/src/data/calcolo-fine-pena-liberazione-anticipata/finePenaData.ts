// Dati e logica del calcolatore "Calcolo Fine Pena con Liberazione Anticipata"
// Fonti: art. 54 L. 354/1975 (O.P.), art. 4 D.L. 146/2013, art. 5 D.L. 92/2024,
// art. 656 c.p.p. c. 10-bis, Corte Cost. sent. 201/2025

import type { NormativaRiferimento, ToolSection } from "@/types/tool";

// ---------------------------------------------------------------------------
// Costanti normative
// ---------------------------------------------------------------------------

/** Detrazione ordinaria per semestre di pena scontata (art. 54 c. 1 O.P.) */
export const GIORNI_LA_ORDINARIA = 45;

/** Detrazione speciale per semestre nel biennio 2013-2015 (art. 4 D.L. 146/2013) */
export const GIORNI_LA_SPECIALE = 75;

/** Inizio finestra applicabilità retroattiva LA speciale */
export const LA_SPECIALE_START = "2010-01-01";

/** Fine finestra LA speciale (2 anni dall'entrata in vigore D.L. 146/2013) */
export const LA_SPECIALE_END = "2015-12-23";

/** Durata di un semestre in giorni — approssimazione di 6 mesi calendariali (182 ≈ 6 × 30,44) */
export const GIORNI_PER_SEMESTRE = 182;

// ---------------------------------------------------------------------------
// Tipi
// ---------------------------------------------------------------------------

export interface PeriodoData {
  dal: string; // ISO YYYY-MM-DD
  al: string; // ISO YYYY-MM-DD
}

export interface DurataPena {
  anni: number;
  mesi: number;
  giorni: number;
}

export interface InputCalcoloFinePena {
  durata: DurataPena;
  inizioDetenzione: string; // YYYY-MM-DD
  calcolaLA: boolean;
  soloSemestriCompleti: boolean;
  applicaLaSpeciale: boolean; // toggle utente (l'applicazione effettiva dipende dal periodo)
  calcolaFinoAl?: string; // optional cutoff date; if empty -> fine pena virtuale
  periodiScontati: PeriodoData[]; // presofferto, custodia cautelare, domiciliari, ecc.
  interruzioni: PeriodoData[]; // periodi che NON computano (salute, ricovero, ecc.)
}

export interface SemestreDettaglio {
  numero: number;
  dataInizio: string;
  dataFine: string;
  giorniDetrazione: number;
  tipo: "ordinaria" | "speciale" | "mista";
}

export interface RisultatoCalcolo {
  finePenaNominale: string; // senza LA
  finePenaConLA: string; // con LA (effettiva o virtuale)
  finePenaVirtuale: boolean; // true se nessun calcolaFinoAl specificato
  durataTotaleGiorni: number;
  giorniGiaScontati: number;
  giorniInterruzioni: number;
  semestriCompleti: number;
  giorniDetrazione: number;
  dettaglioSemestri: SemestreDettaglio[];
  scontoTotaleMesi: number; // arrotondato in mesi
  scontoTotaleGiorni: number;
}

// ---------------------------------------------------------------------------
// Utility di parsing e date
// ---------------------------------------------------------------------------

const MS_PER_DAY = 86_400_000;

function parseISO(date: string): Date {
  // Inserzione del fuso orario locale per evitare drift UTC
  const [y, m, d] = date.split("-").map((n) => parseInt(n, 10));
  return new Date(y, m - 1, d);
}

function toISO(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function addDays(d: Date, days: number): Date {
  const r = new Date(d.getTime());
  r.setDate(r.getDate() + days);
  return r;
}

function diffDays(a: Date, b: Date): number {
  return Math.round((b.getTime() - a.getTime()) / MS_PER_DAY);
}

/**
 * Converte durata in giorni totali secondo il calendario comune (art. 14 c.p.).
 * Le pene temporanee si computano "secondo il calendario comune": anni, mesi e
 * giorni si sommano calendarialmente (gli anni bisestili contano un giorno in piu).
 */
export function durataInGiorni(d: DurataPena, inizioISO: string): number {
  const inizio = parseISO(inizioISO);
  const fine = new Date(inizio.getTime());
  fine.setFullYear(fine.getFullYear() + d.anni);
  fine.setMonth(fine.getMonth() + d.mesi);
  fine.setDate(fine.getDate() + d.giorni);
  return diffDays(inizio, fine);
}

/** Verifica se un periodo rientra nella finestra LA speciale */
function isPeriodoInLASpeciale(dalISO: string, alISO: string): boolean {
  return dalISO <= LA_SPECIALE_END && alISO >= LA_SPECIALE_START;
}

/** Sovrapposizione (in giorni) tra due intervalli [a1,a2] e [b1,b2] */
function sovrapposizioneGiorni(
  a1: Date,
  a2: Date,
  b1: Date,
  b2: Date,
): number {
  const start = a1 > b1 ? a1 : b1;
  const end = a2 < b2 ? a2 : b2;
  if (end < start) return 0;
  return diffDays(start, end) + 1;
}

// ---------------------------------------------------------------------------
// Algoritmo principale
// ---------------------------------------------------------------------------

/**
 * Calcola il fine pena con liberazione anticipata.
 *
 * Algoritmo:
 * 1. Calcola durata totale della pena in giorni.
 * 2. Calcola fine pena nominale = inizio detenzione + durata totale.
 * 3. Se LA non richiesta -> ritorna solo nominale (al netto di periodi scontati).
 * 4. Costruisce timeline dei periodi di "pena scontata" (detenzione + presofferto - interruzioni).
 * 5. Suddivide in semestri (modalita "solo completi" vs "cumulo frazioni").
 * 6. Per ogni semestre applica GIORNI_LA_ORDINARIA (o GIORNI_LA_SPECIALE se rientra 2013-2015).
 * 7. Calcola fine pena con LA = fine pena nominale - giorni detrazione totali.
 */
export function calcolaFinePena(input: InputCalcoloFinePena): RisultatoCalcolo {
  const inizio = parseISO(input.inizioDetenzione);
  const durataTot = durataInGiorni(input.durata, input.inizioDetenzione);

  // Fine pena nominale: inizio + durata - 1 (le date sono inclusive, come da art. 14 c.p.)
  const finePenaNomDate = addDays(inizio, durataTot - 1);
  const finePenaNominale = toISO(finePenaNomDate);

  // Giorni gia' scontati (presofferto in custodia cautelare/domiciliari)
  const giorniGiaScontati = input.periodiScontati.reduce((acc, p) => {
    const a = parseISO(p.dal);
    const b = parseISO(p.al);
    return acc + (b >= a ? diffDays(a, b) + 1 : 0);
  }, 0);

  // Giorni di interruzione (non computabili)
  const giorniInterruzioni = input.interruzioni.reduce((acc, p) => {
    const a = parseISO(p.dal);
    const b = parseISO(p.al);
    return acc + (b >= a ? diffDays(a, b) + 1 : 0);
  }, 0);

  // Se LA non e' richiesta, ritorna risultato base
  if (!input.calcolaLA) {
    return {
      finePenaNominale,
      finePenaConLA: finePenaNominale,
      finePenaVirtuale: !input.calcolaFinoAl,
      durataTotaleGiorni: durataTot,
      giorniGiaScontati,
      giorniInterruzioni,
      semestriCompleti: 0,
      giorniDetrazione: 0,
      dettaglioSemestri: [],
      scontoTotaleMesi: 0,
      scontoTotaleGiorni: 0,
    };
  }

  // Data limite per il conteggio dei semestri.
  // Se l'utente specifica "calcola fino al", uso quella data;
  // altrimenti fine pena virtuale = fine pena nominale.
  const dataLimite = input.calcolaFinoAl
    ? parseISO(input.calcolaFinoAl)
    : finePenaNomDate;

  // Costruisco la timeline dei semestri di pena scontata.
  // Includo il presofferto (i periodi scontati precedenti all'inizio della detenzione effettiva).
  const dettaglioSemestri: SemestreDettaglio[] = [];

  // Punto di partenza del primo semestre:
  // se ci sono periodi scontati antecedenti l'inizio detenzione, parto dal primo presofferto.
  const periodiOrdinati = [...input.periodiScontati]
    .map((p) => ({ dal: parseISO(p.dal), al: parseISO(p.al) }))
    .filter((p) => p.al >= p.dal)
    .sort((a, b) => a.dal.getTime() - b.dal.getTime());

  let cursore: Date;
  if (periodiOrdinati.length > 0 && periodiOrdinati[0].dal < inizio) {
    cursore = periodiOrdinati[0].dal;
  } else {
    cursore = inizio;
  }

  const interruzioniOrdinate = [...input.interruzioni]
    .map((p) => ({ dal: parseISO(p.dal), al: parseISO(p.al) }))
    .filter((p) => p.al >= p.dal)
    .sort((a, b) => a.dal.getTime() - b.dal.getTime());

  let semestreNum = 0;
  let giorniNetti = 0; // contatore giorni netti scontati nel semestre corrente
  let inizioSemestre: Date = cursore;
  const safetyLimit = 1000; // max 500 anni di semestri — protezione anti-loop

  while (cursore <= dataLimite && semestreNum < safetyLimit) {
    // Avanza giorno per giorno, contando solo i giorni non in interruzione
    const inInterruzione = interruzioniOrdinate.some(
      (i) => cursore >= i.dal && cursore <= i.al,
    );

    if (inInterruzione) {
      if (input.soloSemestriCompleti && giorniNetti > 0) {
        // Modalita "solo semestri completi": l'interruzione azzera il conteggio
        giorniNetti = 0;
        // Sposto inizio semestre dopo la fine dell'interruzione corrente
        const interr = interruzioniOrdinate.find(
          (i) => cursore >= i.dal && cursore <= i.al,
        );
        if (interr) {
          cursore = addDays(interr.al, 1);
          inizioSemestre = new Date(cursore.getTime());
          continue;
        }
      }
      // Modalita "cumulo frazioni": semplicemente saltiamo il giorno
      cursore = addDays(cursore, 1);
      continue;
    }

    giorniNetti += 1;

    if (giorniNetti >= GIORNI_PER_SEMESTRE) {
      // Semestre completo!
      semestreNum += 1;
      const fineSemestre = new Date(cursore.getTime());
      const dalISO = toISO(inizioSemestre);
      const alISO = toISO(fineSemestre);

      // Determino la detrazione (ordinaria o speciale)
      const dentroLASpeciale = isPeriodoInLASpeciale(dalISO, alISO);
      const giorni =
        input.applicaLaSpeciale && dentroLASpeciale
          ? GIORNI_LA_SPECIALE
          : GIORNI_LA_ORDINARIA;
      const tipo: SemestreDettaglio["tipo"] =
        input.applicaLaSpeciale && dentroLASpeciale ? "speciale" : "ordinaria";

      dettaglioSemestri.push({
        numero: semestreNum,
        dataInizio: dalISO,
        dataFine: alISO,
        giorniDetrazione: giorni,
        tipo,
      });

      giorniNetti = 0;
      cursore = addDays(cursore, 1);
      inizioSemestre = new Date(cursore.getTime());
      continue;
    }

    cursore = addDays(cursore, 1);
  }

  const giorniDetrazione = dettaglioSemestri.reduce(
    (a, s) => a + s.giorniDetrazione,
    0,
  );
  const finePenaConLADate = addDays(finePenaNomDate, -giorniDetrazione);

  return {
    finePenaNominale,
    finePenaConLA: toISO(finePenaConLADate),
    finePenaVirtuale: !input.calcolaFinoAl,
    durataTotaleGiorni: durataTot,
    giorniGiaScontati,
    giorniInterruzioni,
    semestriCompleti: dettaglioSemestri.length,
    giorniDetrazione,
    dettaglioSemestri,
    scontoTotaleMesi: Math.round((giorniDetrazione / 30) * 10) / 10,
    scontoTotaleGiorni: giorniDetrazione,
  };
}

// ---------------------------------------------------------------------------
// Normativa di riferimento
// ---------------------------------------------------------------------------

export const normativaRiferimento: NormativaRiferimento[] = [
  {
    norma: "Art. 27, comma 3, Costituzione",
    descrizione:
      "Finalita rieducativa della pena. Fondamento costituzionale dei benefici penitenziari premiali.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione",
  },
  {
    norma: "Art. 54 L. 354/1975 (Ordinamento Penitenziario)",
    descrizione:
      "Liberazione anticipata: 45 giorni per semestre di pena scontata. Computa anche custodia cautelare e detenzione domiciliare.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art54",
  },
  {
    norma: "Art. 4-bis L. 354/1975 (O.P.)",
    descrizione:
      "Reati ostativi: condannati esclusi dalla liberazione anticipata speciale e da altri benefici premiali.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art4bis",
  },
  {
    norma: "Art. 69-bis L. 354/1975 (O.P.)",
    descrizione:
      "Procedimento di concessione della liberazione anticipata: ordinanza del magistrato di sorveglianza.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art69bis",
  },
  {
    norma: "Art. 4 D.L. 146/2013 (conv. L. 10/2014)",
    descrizione:
      "Liberazione anticipata speciale: 75 giorni per semestre nel biennio 23/12/2013-23/12/2015, con retroattivita al 1/1/2010.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2013-12-23;146~art4",
  },
  {
    norma: "Art. 5 D.L. 92/2024 (conv. L. 112/2024)",
    descrizione:
      "Riforma 2024 (decreto carcere): accertamento d'ufficio del magistrato di sorveglianza nei 90 giorni antecedenti il fine pena. Parzialmente incostituzionale (Corte Cost. 201/2025).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2024-07-04;92~art5",
  },
  {
    norma: "Art. 656 c.p.p., comma 10-bis",
    descrizione:
      "Obbligo del PM di indicare nell'ordine di esecuzione la pena da espiare con le detrazioni (fine pena virtuale).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:codice.procedura.penale:1988-09-22;447~art656",
  },
  {
    norma: "Corte Costituzionale sent. 201/2025",
    descrizione:
      "Dichiarata incostituzionale parte della riforma 2024: ripristinato il diritto del condannato di chiedere la LA semestre per semestre.",
    url: "https://www.cortecostituzionale.it/scheda-pronuncia/2025/201",
  },
  {
    norma: "Art. 30-ter L. 354/1975 (O.P.)",
    descrizione:
      "Permessi premio. La pena detratta ai sensi dell'art. 54 si considera scontata per la maturazione della soglia.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art30ter",
  },
  {
    norma: "Art. 47 L. 354/1975 (O.P.)",
    descrizione:
      "Affidamento in prova al servizio sociale. Soglia di pena residua: 4 anni (o 3 anni per recidivi).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art47",
  },
  {
    norma: "Art. 47-ter L. 354/1975 (O.P.)",
    descrizione:
      "Detenzione domiciliare. Concorre al computo della pena scontata ai fini della liberazione anticipata.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art47ter",
  },
  {
    norma: "Art. 50 L. 354/1975 (O.P.)",
    descrizione:
      "Semilibertà. Soglia: meta della pena (due terzi per pene ostative; 20 anni per ergastolo).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art50",
  },
  {
    norma: "Art. 176 c.p.",
    descrizione:
      "Liberazione condizionale. Soglia: 30 mesi e meta pena (3/4 per recidivi); 26 anni per ergastolo.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:codice.penale:1930-10-19;1398~art176",
  },
];

// ---------------------------------------------------------------------------
// Sections per side-nav (devono matchare gli id di <SectionTitle id="..." />)
// ---------------------------------------------------------------------------

export const sections: ToolSection[] = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "che-cos-e", label: "Cos'e la LA?" },
  { id: "come-si-calcola", label: "Come si calcola" },
  { id: "45-o-75-giorni", label: "45 o 75 giorni?" },
  { id: "fine-pena-virtuale", label: "Fine pena virtuale" },
  { id: "periodi-conteggiabili", label: "Periodi conteggiabili" },
  { id: "interruzioni", label: "Interruzioni della pena" },
  { id: "procedura", label: "Come si richiede" },
  { id: "riforma-2024", label: "Riforma 2024 + Corte Cost." },
  { id: "reati-esclusi", label: "Reati esclusi (4-bis)" },
  { id: "esempi", label: "Esempi pratici" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
  { id: "fonti", label: "Fonti e Riferimenti" },
];
