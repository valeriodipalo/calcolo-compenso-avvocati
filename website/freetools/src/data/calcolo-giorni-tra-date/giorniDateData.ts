// Dati e logica del calcolatore "Calcolo Giorni tra Date"
// Fonti: art. 155 c.p.c., art. 2963 c.c., L. 260/1949, L. 742/1969, L. 151/2025

import type { NormativaRiferimento, CircolareMinisteriale, ToolSection } from "@/types/tool";

// ---------------------------------------------------------------------------
// Tipi
// ---------------------------------------------------------------------------

export type ModalitaConteggio =
  | "tutti"            // tutti i giorni (calendario)
  | "senza-domeniche"  // esclude solo domeniche
  | "senza-weekend"    // esclude sabati e domeniche
  | "senza-festivi"    // esclude domeniche + festività (non sabati)
  | "lavorativi";      // esclude sabati + domeniche + festività (feriali in senso stretto)

export type Operazione = "aggiungi" | "sottrai";

export interface RisultatoGiorni {
  giorniTotali: number;
  breakdown: {
    anni: number;
    mesi: number;
    settimane: number;
    giorni: number;
  };
  dettaglio: {
    sabati: number;
    domeniche: number;
    festivi: number;
    lavorativi: number;
  };
  dataIniziale: string;
  dataFinale: string;
  includiDiesAQuo: boolean;
  modalita: ModalitaConteggio;
}

export interface RisultatoAggiungi {
  dataRisultante: string;
  giornoSettimana: string;
  operazione: Operazione;
  giorniApplicati: number;
  dataBase: string;
  soloLavorativi: boolean;
}

export interface Festivita {
  data: string; // YYYY-MM-DD
  nome: string;
  fonte: string;
}

// ---------------------------------------------------------------------------
// Festività nazionali italiane 2024-2028 (verificate con algoritmo di Gauss
// per le mobili e L. 260/1949, L. 151/2025 per le fisse)
// ---------------------------------------------------------------------------

export const festivitaNazionali: Festivita[] = [
  // 2024
  { data: "2024-01-01", nome: "Capodanno", fonte: "L. 260/1949" },
  { data: "2024-01-06", nome: "Epifania", fonte: "L. 260/1949" },
  { data: "2024-03-31", nome: "Pasqua", fonte: "Calendario liturgico" },
  { data: "2024-04-01", nome: "Lunedì dell'Angelo", fonte: "L. 260/1949" },
  { data: "2024-04-25", nome: "Festa della Liberazione", fonte: "L. 260/1949" },
  { data: "2024-05-01", nome: "Festa del Lavoro", fonte: "L. 260/1949" },
  { data: "2024-06-02", nome: "Festa della Repubblica", fonte: "L. 336/2000" },
  { data: "2024-08-15", nome: "Ferragosto", fonte: "L. 260/1949" },
  { data: "2024-11-01", nome: "Ognissanti", fonte: "L. 260/1949" },
  { data: "2024-12-08", nome: "Immacolata Concezione", fonte: "L. 260/1949" },
  { data: "2024-12-25", nome: "Natale", fonte: "L. 260/1949" },
  { data: "2024-12-26", nome: "Santo Stefano", fonte: "L. 260/1949" },
  // 2025
  { data: "2025-01-01", nome: "Capodanno", fonte: "L. 260/1949" },
  { data: "2025-01-06", nome: "Epifania", fonte: "L. 260/1949" },
  { data: "2025-04-20", nome: "Pasqua", fonte: "Calendario liturgico" },
  { data: "2025-04-21", nome: "Lunedì dell'Angelo", fonte: "L. 260/1949" },
  { data: "2025-04-25", nome: "Festa della Liberazione", fonte: "L. 260/1949" },
  { data: "2025-05-01", nome: "Festa del Lavoro", fonte: "L. 260/1949" },
  { data: "2025-06-02", nome: "Festa della Repubblica", fonte: "L. 336/2000" },
  { data: "2025-08-15", nome: "Ferragosto", fonte: "L. 260/1949" },
  { data: "2025-11-01", nome: "Ognissanti", fonte: "L. 260/1949" },
  { data: "2025-12-08", nome: "Immacolata Concezione", fonte: "L. 260/1949" },
  { data: "2025-12-25", nome: "Natale", fonte: "L. 260/1949" },
  { data: "2025-12-26", nome: "Santo Stefano", fonte: "L. 260/1949" },
  // 2026 — nuova festività San Francesco d'Assisi (L. 151/2025)
  { data: "2026-01-01", nome: "Capodanno", fonte: "L. 260/1949" },
  { data: "2026-01-06", nome: "Epifania", fonte: "L. 260/1949" },
  { data: "2026-04-05", nome: "Pasqua", fonte: "Calendario liturgico" },
  { data: "2026-04-06", nome: "Lunedì dell'Angelo", fonte: "L. 260/1949" },
  { data: "2026-04-25", nome: "Festa della Liberazione", fonte: "L. 260/1949" },
  { data: "2026-05-01", nome: "Festa del Lavoro", fonte: "L. 260/1949" },
  { data: "2026-06-02", nome: "Festa della Repubblica", fonte: "L. 336/2000" },
  { data: "2026-08-15", nome: "Ferragosto", fonte: "L. 260/1949" },
  { data: "2026-10-04", nome: "San Francesco d'Assisi", fonte: "L. 151/2025 (nuova)" },
  { data: "2026-11-01", nome: "Ognissanti", fonte: "L. 260/1949" },
  { data: "2026-12-08", nome: "Immacolata Concezione", fonte: "L. 260/1949" },
  { data: "2026-12-25", nome: "Natale", fonte: "L. 260/1949" },
  { data: "2026-12-26", nome: "Santo Stefano", fonte: "L. 260/1949" },
  // 2027
  { data: "2027-01-01", nome: "Capodanno", fonte: "L. 260/1949" },
  { data: "2027-01-06", nome: "Epifania", fonte: "L. 260/1949" },
  { data: "2027-03-28", nome: "Pasqua", fonte: "Calendario liturgico" },
  { data: "2027-03-29", nome: "Lunedì dell'Angelo", fonte: "L. 260/1949" },
  { data: "2027-04-25", nome: "Festa della Liberazione", fonte: "L. 260/1949" },
  { data: "2027-05-01", nome: "Festa del Lavoro", fonte: "L. 260/1949" },
  { data: "2027-06-02", nome: "Festa della Repubblica", fonte: "L. 336/2000" },
  { data: "2027-08-15", nome: "Ferragosto", fonte: "L. 260/1949" },
  { data: "2027-10-04", nome: "San Francesco d'Assisi", fonte: "L. 151/2025" },
  { data: "2027-11-01", nome: "Ognissanti", fonte: "L. 260/1949" },
  { data: "2027-12-08", nome: "Immacolata Concezione", fonte: "L. 260/1949" },
  { data: "2027-12-25", nome: "Natale", fonte: "L. 260/1949" },
  { data: "2027-12-26", nome: "Santo Stefano", fonte: "L. 260/1949" },
  // 2028 (anno bisestile)
  { data: "2028-01-01", nome: "Capodanno", fonte: "L. 260/1949" },
  { data: "2028-01-06", nome: "Epifania", fonte: "L. 260/1949" },
  { data: "2028-04-16", nome: "Pasqua", fonte: "Calendario liturgico" },
  { data: "2028-04-17", nome: "Lunedì dell'Angelo", fonte: "L. 260/1949" },
  { data: "2028-04-25", nome: "Festa della Liberazione", fonte: "L. 260/1949" },
  { data: "2028-05-01", nome: "Festa del Lavoro", fonte: "L. 260/1949" },
  { data: "2028-06-02", nome: "Festa della Repubblica", fonte: "L. 336/2000" },
  { data: "2028-08-15", nome: "Ferragosto", fonte: "L. 260/1949" },
  { data: "2028-10-04", nome: "San Francesco d'Assisi", fonte: "L. 151/2025" },
  { data: "2028-11-01", nome: "Ognissanti", fonte: "L. 260/1949" },
  { data: "2028-12-08", nome: "Immacolata Concezione", fonte: "L. 260/1949" },
  { data: "2028-12-25", nome: "Natale", fonte: "L. 260/1949" },
  { data: "2028-12-26", nome: "Santo Stefano", fonte: "L. 260/1949" },
];

// Set delle festività per lookup O(1)
const festivitaSet = new Set(festivitaNazionali.map((f) => f.data));

// ---------------------------------------------------------------------------
// Helpers data
// ---------------------------------------------------------------------------

const giorniSettimana = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
];

export function isoFromDate(d: Date): string {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const g = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${g}`;
}

function dateFromIso(iso: string): Date {
  const [y, m, g] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, g));
}

export function getGiornoSettimana(iso: string): string {
  const d = dateFromIso(iso);
  return giorniSettimana[d.getUTCDay()];
}

export function isFestivo(iso: string): boolean {
  const d = dateFromIso(iso);
  if (d.getUTCDay() === 0) return true; // domenica
  return festivitaSet.has(iso);
}

function isSabato(iso: string): boolean {
  return dateFromIso(iso).getUTCDay() === 6;
}

function isDomenica(iso: string): boolean {
  return dateFromIso(iso).getUTCDay() === 0;
}

function isFestivitaNazionale(iso: string): boolean {
  return festivitaSet.has(iso);
}

function diffGiorniNaturali(inizioIso: string, fineIso: string): number {
  const inizio = dateFromIso(inizioIso);
  const fine = dateFromIso(fineIso);
  return Math.round((fine.getTime() - inizio.getTime()) / 86_400_000);
}

function addGiorni(iso: string, n: number): string {
  const d = dateFromIso(iso);
  d.setUTCDate(d.getUTCDate() + n);
  return isoFromDate(d);
}

function iterateDays(inizioIso: string, fineIso: string): string[] {
  const giorni: string[] = [];
  let cursor = inizioIso;
  while (cursor <= fineIso) {
    giorni.push(cursor);
    cursor = addGiorni(cursor, 1);
  }
  return giorni;
}

// ---------------------------------------------------------------------------
// Calcolo principale: giorni tra due date
// ---------------------------------------------------------------------------

export function calcolaGiorniTraDate(
  dataIniziale: string,
  dataFinale: string,
  modalita: ModalitaConteggio,
  includiDiesAQuo: boolean
): RisultatoGiorni | null {
  if (!dataIniziale || !dataFinale) return null;
  if (dataFinale < dataIniziale) return null;

  // Rispetto del principio "dies a quo non computatur" salvo override
  const primoGiornoComputato = includiDiesAQuo ? dataIniziale : addGiorni(dataIniziale, 1);
  if (primoGiornoComputato > dataFinale) {
    return {
      giorniTotali: 0,
      breakdown: { anni: 0, mesi: 0, settimane: 0, giorni: 0 },
      dettaglio: { sabati: 0, domeniche: 0, festivi: 0, lavorativi: 0 },
      dataIniziale,
      dataFinale,
      includiDiesAQuo,
      modalita,
    };
  }

  const giorni = iterateDays(primoGiornoComputato, dataFinale);
  let sabati = 0;
  let domeniche = 0;
  let festiviNonDomenicali = 0;
  let lavorativi = 0;
  let conteggiati = 0;

  for (const g of giorni) {
    const sab = isSabato(g);
    const dom = isDomenica(g);
    const fest = isFestivitaNazionale(g);
    if (sab) sabati++;
    if (dom) domeniche++;
    if (fest && !dom) festiviNonDomenicali++;
    if (!sab && !dom && !fest) lavorativi++;

    switch (modalita) {
      case "tutti":
        conteggiati++;
        break;
      case "senza-domeniche":
        if (!dom) conteggiati++;
        break;
      case "senza-weekend":
        if (!sab && !dom) conteggiati++;
        break;
      case "senza-festivi":
        if (!dom && !fest) conteggiati++;
        break;
      case "lavorativi":
        if (!sab && !dom && !fest) conteggiati++;
        break;
    }
  }

  const breakdown = calcolaBreakdown(dataIniziale, dataFinale, includiDiesAQuo);

  return {
    giorniTotali: conteggiati,
    breakdown,
    dettaglio: {
      sabati,
      domeniche,
      festivi: festiviNonDomenicali,
      lavorativi,
    },
    dataIniziale,
    dataFinale,
    includiDiesAQuo,
    modalita,
  };
}

// Breakdown anni/mesi/settimane/giorni secondo art. 2963 c.c.
// (ex nominatione dierum: si osserva il calendario comune)
function calcolaBreakdown(
  dataIniziale: string,
  dataFinale: string,
  includiDiesAQuo: boolean
): { anni: number; mesi: number; settimane: number; giorni: number } {
  const inizio = dateFromIso(includiDiesAQuo ? dataIniziale : addGiorni(dataIniziale, 1));
  const fine = dateFromIso(dataFinale);

  let anni = fine.getUTCFullYear() - inizio.getUTCFullYear();
  let mesi = fine.getUTCMonth() - inizio.getUTCMonth();
  let giorni = fine.getUTCDate() - inizio.getUTCDate();

  if (giorni < 0) {
    mesi -= 1;
    // Giorni del mese precedente al mese finale
    const meseParziale = new Date(Date.UTC(fine.getUTCFullYear(), fine.getUTCMonth(), 0));
    giorni += meseParziale.getUTCDate();
  }
  if (mesi < 0) {
    anni -= 1;
    mesi += 12;
  }

  const settimane = Math.floor(giorni / 7);
  const giorniResidui = giorni % 7;

  return { anni, mesi, settimane, giorni: giorniResidui };
}

// ---------------------------------------------------------------------------
// Calcolo a ritroso: aggiungi o sottrai giorni da una data
// ---------------------------------------------------------------------------

export function calcolaAggiungiGiorni(
  dataBase: string,
  numeroGiorni: number,
  operazione: Operazione,
  soloLavorativi: boolean
): RisultatoAggiungi | null {
  if (!dataBase || numeroGiorni < 0) return null;

  const segno = operazione === "aggiungi" ? 1 : -1;

  if (!soloLavorativi) {
    const risultato = addGiorni(dataBase, segno * numeroGiorni);
    return {
      dataRisultante: risultato,
      giornoSettimana: getGiornoSettimana(risultato),
      operazione,
      giorniApplicati: numeroGiorni,
      dataBase,
      soloLavorativi: false,
    };
  }

  // Solo lavorativi: salta sabati, domeniche e festività
  let cursor = dataBase;
  let contati = 0;
  let tentativi = 0;
  const maxTentativi = numeroGiorni * 3 + 30;
  while (contati < numeroGiorni && tentativi < maxTentativi) {
    cursor = addGiorni(cursor, segno);
    tentativi++;
    if (!isSabato(cursor) && !isDomenica(cursor) && !isFestivitaNazionale(cursor)) {
      contati++;
    }
  }

  return {
    dataRisultante: cursor,
    giornoSettimana: getGiornoSettimana(cursor),
    operazione,
    giorniApplicati: numeroGiorni,
    dataBase,
    soloLavorativi: true,
  };
}

// ---------------------------------------------------------------------------
// Calcolo con sospensione feriale (1-31 agosto) — uso processuale
// ---------------------------------------------------------------------------

export interface RisultatoTermineLibero {
  dataScadenza: string;
  giornoSettimana: string;
  sospensioneApplicata: boolean;
  giorniSospesi: number;
  prorogaFestiva: boolean;
  dataScadenzaTeorica: string;
}

export function calcolaTermineConSospensione(
  dataInizio: string,
  giorni: number,
  applicaSospensioneFeriale: boolean
): RisultatoTermineLibero | null {
  if (!dataInizio || giorni <= 0) return null;

  // Dies a quo non computatur: inizia dal giorno successivo
  let cursor = addGiorni(dataInizio, 1);
  let contati = 0;
  let giorniSospesi = 0;

  while (contati < giorni) {
    const d = dateFromIso(cursor);
    const mese = d.getUTCMonth(); // 7 = agosto
    const giornoMese = d.getUTCDate();
    const inSospensione = applicaSospensioneFeriale && mese === 7 && giornoMese >= 1 && giornoMese <= 31;
    if (inSospensione) {
      giorniSospesi++;
      cursor = addGiorni(cursor, 1);
      continue;
    }
    contati++;
    if (contati < giorni) {
      cursor = addGiorni(cursor, 1);
    }
  }

  const dataScadenzaTeorica = cursor;
  let dataScadenza = cursor;
  let prorogaFestiva = false;
  while (isFestivo(dataScadenza)) {
    dataScadenza = addGiorni(dataScadenza, 1);
    prorogaFestiva = true;
  }

  return {
    dataScadenza,
    giornoSettimana: getGiornoSettimana(dataScadenza),
    sospensioneApplicata: giorniSospesi > 0,
    giorniSospesi,
    prorogaFestiva,
    dataScadenzaTeorica,
  };
}

// ---------------------------------------------------------------------------
// Normativa di riferimento
// ---------------------------------------------------------------------------

export const normativaRiferimento: NormativaRiferimento[] = [
  {
    norma: "Art. 155 Codice di Procedura Civile",
    descrizione: "Computo dei termini processuali: dies a quo escluso, dies ad quem incluso, proroga al primo giorno non festivo successivo.",
    url: "https://www.brocardi.it/codice-di-procedura-civile/libro-primo/titolo-vi/capo-ii/art155.html",
  },
  {
    norma: "Art. 2963 Codice Civile",
    descrizione: "Computo dei termini di prescrizione secondo il calendario comune. Principio analogo all'art. 155 c.p.c. per i termini sostanziali.",
    url: "https://www.brocardi.it/codice-civile/libro-sesto/titolo-v/capo-i/sezione-iv/art2963.html",
  },
  {
    norma: "Art. 163 bis Codice di Procedura Civile",
    descrizione: "Termini liberi per la comparizione: minimo 120 giorni liberi in Italia, 150 all'estero. Esempio classico di giorni liberi.",
    url: "https://www.brocardi.it/codice-di-procedura-civile/libro-secondo/titolo-i/capo-i/sezione-i/art163bis.html",
  },
  {
    norma: "Art. 325 Codice di Procedura Civile",
    descrizione: "Termini di impugnazione: 30 giorni per appello, 60 giorni per ricorso per Cassazione.",
    url: "https://www.brocardi.it/codice-di-procedura-civile/libro-secondo/titolo-iii/capo-i/art325.html",
  },
  {
    norma: "Legge 7 ottobre 1969, n. 742",
    descrizione: "Sospensione feriale dei termini processuali dal 1° al 31 agosto di ciascun anno (come modificata dalla L. 162/2014).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742",
  },
  {
    norma: "D.L. 12 settembre 2014, n. 132 (conv. L. 162/2014)",
    descrizione: "Riduzione della sospensione feriale da 46 giorni (1/8-15/9) a 31 giorni (1/8-31/8) a decorrere dal 2015.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132",
  },
  {
    norma: "Legge 27 maggio 1949, n. 260",
    descrizione: "Disposizioni in materia di ricorrenze festive: elenco delle festività civili nazionali in Italia.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1949-05-27;260",
  },
  {
    norma: "Legge 20 novembre 2000, n. 336",
    descrizione: "Ripristino del 2 giugno quale data fissa della Festa della Repubblica.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2000-11-20;336",
  },
  {
    norma: "Legge 8 ottobre 2025, n. 151 (NUOVA dal 2026)",
    descrizione: "Istituzione della festa nazionale di San Francesco d'Assisi, patrono d'Italia, il 4 ottobre di ogni anno. Entrata in vigore: 1° gennaio 2026.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-10-08;151",
  },
  {
    norma: "Art. 641 Codice di Procedura Civile",
    descrizione: "Termine di 40 giorni per proporre opposizione al decreto ingiuntivo, decorrenti dalla notifica.",
    url: "https://www.brocardi.it/codice-di-procedura-civile/libro-quarto/titolo-i/capo-i/art644.html",
  },
  {
    norma: "Art. 4 Legge 392/1978 (Equo Canone)",
    descrizione: "Preavviso di 6 mesi per il recesso del conduttore nelle locazioni abitative.",
    url: "https://www.brocardi.it/legge-equo-canone/titolo-i/capo-i/art4.html",
  },
];

// ---------------------------------------------------------------------------
// Circolari e fonti secondarie
// ---------------------------------------------------------------------------

export const circolariMinisteriali: CircolareMinisteriale[] = [
  {
    circolare: "L. 151/2025 — GU n. 236 del 10/10/2025",
    descrizione: "Pubblicazione in Gazzetta Ufficiale della legge che istituisce la festa nazionale di San Francesco d'Assisi (4 ottobre).",
    url: "https://www.gazzettaufficiale.it/eli/id/2025/10/10/25G00153/sg",
  },
  {
    circolare: "Cass. Civ. Sez. III, sent. n. 14767 del 30/06/2014",
    descrizione: "La proroga al primo giorno non festivo si applica anche ai termini a ritroso, ma opera all'indietro (non in avanti).",
    url: "https://www.expartecreditoris.it/provvedimenti/computo-dei-termini-a-ritroso-si-individua-il-dies-ad-quem-e-non-il-dies-a-quo",
  },
  {
    circolare: "Corte Cost., sent. n. 75/2019",
    descrizione: "Notifica PEC dopo le 21: per il mittente la notifica si perfeziona entro le 24 dello stesso giorno; per il destinatario alle 7 del giorno successivo.",
    url: "https://www.cortecostituzionale.it",
  },
];

// ---------------------------------------------------------------------------
// Sezioni per la sidebar di navigazione
// ---------------------------------------------------------------------------

export const sections: ToolSection[] = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "come-funziona", label: "Come Funziona" },
  { id: "tipologie-giorni", label: "Tipologie di Giorni" },
  { id: "termini-processuali", label: "Termini Processuali" },
  { id: "sospensione-feriale", label: "Sospensione Feriale" },
  { id: "termini-ritroso", label: "Termini a Ritroso" },
  { id: "festivita", label: "Festività 2025-2027" },
  { id: "applicazioni", label: "Applicazioni Pratiche" },
  { id: "excel", label: "Formule Excel" },
  { id: "errori-comuni", label: "Errori Comuni" },
  { id: "fonti", label: "Fonti" },
  { id: "faq", label: "FAQ" },
];
