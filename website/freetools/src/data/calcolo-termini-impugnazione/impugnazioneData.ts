import type { NormativaRiferimento, ToolSection } from "@/types/tool";

/* ─── Types ─── */

export type Procedimento = "civile" | "amministrativo" | "tributario";
export type TipoImpugnazione = "appello" | "cassazione" | "revocazione" | "opposizione-terzo";
export type TipoDecorrenza = "notifica" | "pubblicazione" | "scoperta-vizi";

export interface TermineConfig {
  procedimento: Procedimento;
  tipo: TipoImpugnazione;
  decorrenza: TipoDecorrenza;
  /** Termine breve in giorni, oppure null se non applicabile */
  termineBreveGiorni: number | null;
  /** Termine lungo in mesi, oppure null se non applicabile */
  termineLungoMesi: number | null;
  /** Articolo di riferimento normativo */
  articolo: string;
  /** URL Normattiva */
  url: string;
}

export interface RisultatoCalcolo {
  dataScadenza: Date;
  giorniRimanenti: number;
  sospensioneApplicata: boolean;
  periodoSospensione: { dal: Date; al: Date } | null;
  prorogaFestivo: boolean;
  dataOriginale: Date;
  articolo: string;
  url: string;
  label: string;
}

/* ─── Configurazione termini ─── */

export const terminiConfig: TermineConfig[] = [
  // === CIVILE ===
  { procedimento: "civile", tipo: "appello", decorrenza: "notifica", termineBreveGiorni: 30, termineLungoMesi: null, articolo: "Art. 325, c. 1, CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art325" },
  { procedimento: "civile", tipo: "appello", decorrenza: "pubblicazione", termineBreveGiorni: null, termineLungoMesi: 6, articolo: "Art. 327 CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art327" },
  { procedimento: "civile", tipo: "cassazione", decorrenza: "notifica", termineBreveGiorni: 60, termineLungoMesi: null, articolo: "Art. 325, c. 2, CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art325" },
  { procedimento: "civile", tipo: "cassazione", decorrenza: "pubblicazione", termineBreveGiorni: null, termineLungoMesi: 6, articolo: "Art. 327 CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art327" },
  { procedimento: "civile", tipo: "revocazione", decorrenza: "notifica", termineBreveGiorni: 30, termineLungoMesi: null, articolo: "Art. 325, c. 1, CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art325" },
  { procedimento: "civile", tipo: "revocazione", decorrenza: "pubblicazione", termineBreveGiorni: null, termineLungoMesi: 6, articolo: "Art. 327 CPC (nn. 4, 5 art. 395)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art327" },
  { procedimento: "civile", tipo: "revocazione", decorrenza: "scoperta-vizi", termineBreveGiorni: 30, termineLungoMesi: null, articolo: "Art. 325, c. 1, CPC (nn. 1, 2, 3, 6 art. 395)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art395" },
  { procedimento: "civile", tipo: "opposizione-terzo", decorrenza: "scoperta-vizi", termineBreveGiorni: 30, termineLungoMesi: null, articolo: "Art. 325, c. 1, CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art404" },

  // === AMMINISTRATIVO ===
  { procedimento: "amministrativo", tipo: "appello", decorrenza: "notifica", termineBreveGiorni: 60, termineLungoMesi: null, articolo: "Art. 92 CPA (D.Lgs. 104/2010)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-07-02;104~art92" },
  { procedimento: "amministrativo", tipo: "appello", decorrenza: "pubblicazione", termineBreveGiorni: null, termineLungoMesi: 6, articolo: "Art. 92 CPA (D.Lgs. 104/2010)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-07-02;104~art92" },
  { procedimento: "amministrativo", tipo: "cassazione", decorrenza: "notifica", termineBreveGiorni: 60, termineLungoMesi: null, articolo: "Art. 92 CPA", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-07-02;104~art92" },
  { procedimento: "amministrativo", tipo: "cassazione", decorrenza: "pubblicazione", termineBreveGiorni: null, termineLungoMesi: 6, articolo: "Art. 92 CPA", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-07-02;104~art92" },
  { procedimento: "amministrativo", tipo: "revocazione", decorrenza: "scoperta-vizi", termineBreveGiorni: 60, termineLungoMesi: null, articolo: "Art. 92 CPA (nn. 1, 2, 3, 6 art. 395)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-07-02;104~art92" },
  { procedimento: "amministrativo", tipo: "revocazione", decorrenza: "pubblicazione", termineBreveGiorni: null, termineLungoMesi: 6, articolo: "Art. 92 CPA (nn. 4, 5 art. 395)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-07-02;104~art92" },
  { procedimento: "amministrativo", tipo: "opposizione-terzo", decorrenza: "scoperta-vizi", termineBreveGiorni: 60, termineLungoMesi: null, articolo: "Art. 92 CPA", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-07-02;104~art92" },

  // === TRIBUTARIO ===
  { procedimento: "tributario", tipo: "appello", decorrenza: "notifica", termineBreveGiorni: 60, termineLungoMesi: null, articolo: "Art. 38, c. 3, D.Lgs. 546/92", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546~art38" },
  { procedimento: "tributario", tipo: "appello", decorrenza: "pubblicazione", termineBreveGiorni: null, termineLungoMesi: 6, articolo: "Art. 38, c. 3, D.Lgs. 546/92", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546~art38" },
  { procedimento: "tributario", tipo: "cassazione", decorrenza: "notifica", termineBreveGiorni: 60, termineLungoMesi: null, articolo: "Art. 51 D.Lgs. 546/92", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546~art51" },
  { procedimento: "tributario", tipo: "cassazione", decorrenza: "pubblicazione", termineBreveGiorni: null, termineLungoMesi: 6, articolo: "Art. 51 D.Lgs. 546/92", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546~art51" },
  { procedimento: "tributario", tipo: "revocazione", decorrenza: "scoperta-vizi", termineBreveGiorni: 60, termineLungoMesi: null, articolo: "Art. 64 D.Lgs. 546/92", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546~art64" },
  { procedimento: "tributario", tipo: "revocazione", decorrenza: "pubblicazione", termineBreveGiorni: null, termineLungoMesi: 6, articolo: "Art. 64 D.Lgs. 546/92", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546~art64" },
  { procedimento: "tributario", tipo: "opposizione-terzo", decorrenza: "scoperta-vizi", termineBreveGiorni: 60, termineLungoMesi: null, articolo: "Art. 64 D.Lgs. 546/92", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546~art64" },
];

/* ─── Tabelle riepilogative per il contenuto editoriale ─── */

export const tabellaCivile = [
  ["Appello", "30 giorni", "6 mesi", "Art. 325, c. 1 e art. 327 CPC"],
  ["Ricorso per Cassazione", "60 giorni", "6 mesi", "Art. 325, c. 2 e art. 327 CPC"],
  ["Revocazione (nn. 4, 5 art. 395)", "30 giorni", "6 mesi", "Art. 325, c. 1 e art. 327 CPC"],
  ["Revocazione (nn. 1, 2, 3, 6 art. 395)", "30 giorni dalla scoperta", "—", "Art. 325, c. 1 CPC"],
  ["Opposizione di Terzo (art. 404, c. 2)", "30 giorni dalla scoperta", "—", "Art. 325, c. 1 CPC"],
];

export const tabellaAmministrativo = [
  ["Appello al Consiglio di Stato", "60 giorni", "6 mesi", "Art. 92 CPA"],
  ["Ricorso per Cassazione", "60 giorni", "6 mesi", "Art. 92 CPA"],
  ["Revocazione (nn. 4, 5 art. 395)", "60 giorni", "6 mesi", "Art. 92 CPA"],
  ["Revocazione (nn. 1, 2, 3, 6 art. 395)", "60 giorni dalla scoperta", "—", "Art. 92 CPA"],
  ["Opposizione di Terzo", "60 giorni dalla scoperta", "—", "Art. 92 CPA"],
];

export const tabellaTributario = [
  ["Appello (Corte Giustizia Tributaria)", "60 giorni", "6 mesi", "Art. 38, c. 3, D.Lgs. 546/92"],
  ["Ricorso per Cassazione", "60 giorni", "6 mesi", "Art. 51 D.Lgs. 546/92"],
  ["Revocazione", "60 giorni", "6 mesi", "Art. 64 D.Lgs. 546/92"],
  ["Opposizione di Terzo", "60 giorni dalla scoperta", "—", "Art. 64 D.Lgs. 546/92"],
];

/* ─── Festività italiane ─── */

function getFesteItaliane(anno: number): Set<string> {
  const feste = new Set<string>();
  const fissi = [
    [1, 1], [1, 6], [4, 25], [5, 1], [6, 2],
    [8, 15], [11, 1], [12, 8], [12, 25], [12, 26],
  ];
  for (const [m, d] of fissi) {
    feste.add(`${anno}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`);
  }
  // Pasqua e Lunedì dell'Angelo (algoritmo di Gauss)
  const a = anno % 19;
  const b = Math.floor(anno / 100);
  const c = anno % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mesePasqua = Math.floor((h + l - 7 * m + 114) / 31);
  const giornoPasqua = ((h + l - 7 * m + 114) % 31) + 1;
  const pasqua = new Date(anno, mesePasqua - 1, giornoPasqua);
  feste.add(formatISO(pasqua));
  const lunediAngelo = new Date(pasqua);
  lunediAngelo.setDate(lunediAngelo.getDate() + 1);
  feste.add(formatISO(lunediAngelo));
  return feste;
}

function formatISO(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function isFestivo(d: Date, feste: Set<string>): boolean {
  const giorno = d.getDay(); // 0 = domenica, 6 = sabato
  if (giorno === 0 || giorno === 6) return true;
  return feste.has(formatISO(d));
}

function primoGiornoNonFestivo(d: Date, feste: Set<string>): Date {
  const result = new Date(d);
  while (isFestivo(result, feste)) {
    result.setDate(result.getDate() + 1);
  }
  return result;
}

/* ─── Sospensione feriale ─── */

interface PeriodoSospensione {
  dal: Date;
  al: Date;
}

function getSospensioneFeriale(anno: number): PeriodoSospensione {
  return { dal: new Date(anno, 7, 1), al: new Date(anno, 7, 31) }; // 1-31 agosto
}

function giorniSospensione(dataInizio: Date, dataFine: Date, sospensione: PeriodoSospensione): number {
  const inizioSosp = sospensione.dal.getTime();
  const fineSosp = sospensione.al.getTime();
  const inizio = dataInizio.getTime();
  const fine = dataFine.getTime();

  if (fine < inizioSosp || inizio > fineSosp) return 0;

  const overlapStart = Math.max(inizio, inizioSosp);
  const overlapEnd = Math.min(fine, fineSosp);
  return Math.floor((overlapEnd - overlapStart) / (1000 * 60 * 60 * 24)) + 1;
}

/* ─── Calcolo del termine ─── */

export function calcolaTermine(
  procedimento: Procedimento,
  tipo: TipoImpugnazione,
  decorrenza: TipoDecorrenza,
  dataDecorrenza: Date,
  applicaSospensione: boolean,
): RisultatoCalcolo | null {
  const config = terminiConfig.find(
    (c) => c.procedimento === procedimento && c.tipo === tipo && c.decorrenza === decorrenza,
  );
  if (!config) return null;

  let label: string;
  if (decorrenza === "notifica") {
    label = `Termine breve: ${config.termineBreveGiorni} giorni dalla notifica`;
  } else if (decorrenza === "pubblicazione") {
    label = `Termine lungo: ${config.termineLungoMesi} mesi dalla pubblicazione`;
  } else {
    label = `${config.termineBreveGiorni} giorni dalla scoperta dei vizi`;
  }

  let scadenza: Date;
  const annoDecorrenza = dataDecorrenza.getFullYear();
  const feste = getFesteItaliane(annoDecorrenza);
  const festeAnnoSucc = getFesteItaliane(annoDecorrenza + 1);
  const tutteFeste = new Set([...feste, ...festeAnnoSucc]);

  if (config.termineBreveGiorni !== null) {
    // Calcolo a giorni (ex numeratio dierum): si esclude il dies a quo
    scadenza = new Date(dataDecorrenza);
    let giorniDaAggiungere = config.termineBreveGiorni;

    if (applicaSospensione) {
      const sospensione = getSospensioneFeriale(annoDecorrenza);
      const sosp2 = getSospensioneFeriale(annoDecorrenza + 1);

      // Aggiungo i giorni uno alla volta, saltando i periodi di sospensione
      let contatore = 0;
      const cursore = new Date(dataDecorrenza);
      cursore.setDate(cursore.getDate() + 1); // esclude dies a quo

      while (contatore < giorniDaAggiungere) {
        const curTime = cursore.getTime();
        const inSosp1 = curTime >= sospensione.dal.getTime() && curTime <= sospensione.al.getTime();
        const inSosp2 = curTime >= sosp2.dal.getTime() && curTime <= sosp2.al.getTime();

        if (!inSosp1 && !inSosp2) {
          contatore++;
        }
        if (contatore < giorniDaAggiungere) {
          cursore.setDate(cursore.getDate() + 1);
        }
      }
      scadenza = new Date(cursore);
    } else {
      scadenza.setDate(scadenza.getDate() + giorniDaAggiungere);
    }
  } else if (config.termineLungoMesi !== null) {
    // Calcolo a mesi (ex nominatione dierum)
    scadenza = new Date(dataDecorrenza);
    scadenza.setMonth(scadenza.getMonth() + config.termineLungoMesi);

    // Se il giorno non esiste nel mese finale, prendi l'ultimo giorno
    if (scadenza.getDate() !== dataDecorrenza.getDate()) {
      scadenza.setDate(0); // ultimo giorno del mese precedente
    }

    if (applicaSospensione) {
      const sospensione = getSospensioneFeriale(annoDecorrenza);
      const sosp2 = getSospensioneFeriale(annoDecorrenza + 1);
      const gg1 = giorniSospensione(dataDecorrenza, scadenza, sospensione);
      const gg2 = giorniSospensione(dataDecorrenza, scadenza, sosp2);
      scadenza.setDate(scadenza.getDate() + gg1 + gg2);
    }
  } else {
    return null;
  }

  const dataOriginale = new Date(scadenza);
  const prorogaFestivo = isFestivo(scadenza, tutteFeste);
  if (prorogaFestivo) {
    scadenza = primoGiornoNonFestivo(scadenza, tutteFeste);
  }

  const oggi = new Date();
  oggi.setHours(0, 0, 0, 0);
  const diffMs = scadenza.getTime() - oggi.getTime();
  const giorniRimanenti = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  const sospensione = getSospensioneFeriale(annoDecorrenza);
  const sospensioneApplicata = applicaSospensione && (
    giorniSospensione(dataDecorrenza, scadenza, sospensione) > 0 ||
    giorniSospensione(dataDecorrenza, scadenza, getSospensioneFeriale(annoDecorrenza + 1)) > 0
  );

  return {
    dataScadenza: scadenza,
    giorniRimanenti,
    sospensioneApplicata,
    periodoSospensione: sospensioneApplicata ? sospensione : null,
    prorogaFestivo,
    dataOriginale,
    articolo: config.articolo,
    url: config.url,
    label,
  };
}

/* ─── Labels per UI ─── */

export const procedimentoLabels: Record<Procedimento, string> = {
  civile: "Civile",
  amministrativo: "Amministrativo",
  tributario: "Tributario",
};

export const tipoLabels: Record<TipoImpugnazione, string> = {
  appello: "Appello",
  cassazione: "Ricorso per Cassazione",
  revocazione: "Revocazione",
  "opposizione-terzo": "Opposizione di Terzo",
};

export const decorrenzaLabels: Record<TipoDecorrenza, string> = {
  notifica: "Data di notifica della sentenza",
  pubblicazione: "Data di pubblicazione della sentenza",
  "scoperta-vizi": "Data di scoperta dei vizi",
};

/** Restituisce le decorrenze disponibili per una data combinazione */
export function getDecorrenzeDisponibili(procedimento: Procedimento, tipo: TipoImpugnazione): TipoDecorrenza[] {
  return terminiConfig
    .filter((c) => c.procedimento === procedimento && c.tipo === tipo)
    .map((c) => c.decorrenza);
}

/* ─── Normativa ─── */

export const normativaRiferimento: NormativaRiferimento[] = [
  { norma: "Art. 325 CPC", descrizione: "Termini per le impugnazioni — termine breve di 30 giorni (appello, revocazione, opposizione di terzo) e 60 giorni (cassazione)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art325" },
  { norma: "Art. 326 CPC", descrizione: "Decorrenza dei termini — dalla notificazione della sentenza", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art326" },
  { norma: "Art. 327 CPC", descrizione: "Decadenza dall'impugnazione — termine lungo di 6 mesi dalla pubblicazione", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art327" },
  { norma: "Art. 155 CPC", descrizione: "Computo dei termini — esclusione dies a quo, proroga sabato e festivi", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" },
  { norma: "Art. 395 CPC", descrizione: "Casi di revocazione delle sentenze", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art395" },
  { norma: "Art. 404 CPC", descrizione: "Casi di opposizione di terzo", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art404" },
  { norma: "Art. 92 CPA (D.Lgs. 104/2010)", descrizione: "Termini per le impugnazioni nel processo amministrativo", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-07-02;104~art92" },
  { norma: "Artt. 38, 51, 64 D.Lgs. 546/1992", descrizione: "Termini per le impugnazioni nel processo tributario", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546" },
  { norma: "L. 742/1969", descrizione: "Sospensione feriale dei termini processuali (1°-31 agosto)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742" },
  { norma: "D.L. 132/2014 conv. L. 162/2014", descrizione: "Modifica del periodo di sospensione feriale (dal 2015: 1-31 agosto)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132" },
  { norma: "L. 69/2009, art. 58", descrizione: "Riduzione del termine lungo da 1 anno a 6 mesi (giudizi dal 4 luglio 2009)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2009-06-18;69~art58" },
  { norma: "D.Lgs. 149/2022 (Riforma Cartabia)", descrizione: "Riforma del processo civile — modifiche alla decorrenza del termine breve", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149" },
  { norma: "Art. 6, L. 604/1966", descrizione: "Termini per l'impugnazione del licenziamento (60 giorni + 180 giorni)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1966-07-15;604~art6" },
  { norma: "Art. 1137 Codice Civile", descrizione: "Impugnazione delle delibere condominiali (30 giorni)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1137" },
];

/* ─── Sezioni della pagina ─── */

export const sections: ToolSection[] = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "cosa-sono", label: "Cosa Sono" },
  { id: "processo-civile", label: "Processo Civile" },
  { id: "processo-amministrativo", label: "Processo Amministrativo" },
  { id: "processo-tributario", label: "Processo Tributario" },
  { id: "come-si-calcolano", label: "Come si Calcolano" },
  { id: "sospensione-feriale", label: "Sospensione Feriale" },
  { id: "riforma-cartabia", label: "Riforma Cartabia" },
  { id: "impugnazione-licenziamento", label: "Licenziamento" },
  { id: "impugnazioni-speciali", label: "Impugnazioni Speciali" },
  { id: "passaggio-giudicato", label: "Passaggio in Giudicato" },
  { id: "esempi-pratici", label: "Esempi Pratici" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
  { id: "fonti", label: "Fonti" },
];
