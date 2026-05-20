import type { NormativaRiferimento, ToolSection } from "@/types/tool";

/* ═══════════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════════ */

export type RegimeProcessuale = "vecchio" | "cartabia";

export type ScenarioCalcolo =
  | "memorie183" // Vecchio rito: 183 c. 6 — 30+30+20 dall'udienza
  | "comparse190" // Vecchio rito: 190 — 60+20 dalla rimessione
  | "memorie171ter" // Cartabia: 171-ter — 40+20+10 a ritroso dall'udienza
  | "note189" // Cartabia: 189 trattazione scritta — 60+30+15 a ritroso
  | "discussione275bis"; // Cartabia: 275-bis discussione orale — 30+15 a ritroso

export type ModalitaSabato = "prudenziale" | "cassazione";

export interface ScenarioConfig {
  id: ScenarioCalcolo;
  regime: RegimeProcessuale;
  label: string;
  shortLabel: string;
  articolo: string;
  url: string;
  /** Direzione: forward = +giorni; backward = -giorni (a ritroso) */
  direzione: "avanti" | "ritroso";
  /** Etichetta del campo data (dies a quo o data dell'udienza) */
  inputLabel: string;
  inputHelp: string;
  /** Tappe del calcolo (giorni dall'udienza/rimessione, in valore assoluto) */
  tappe: ScenarioTappa[];
}

export interface ScenarioTappa {
  /** Etichetta della tappa */
  label: string;
  /** Numero di giorni (in avanti o a ritroso a seconda dello scenario) */
  giorni: number;
  /** Se true, il termine è consequenziale (decorre dalla scadenza del precedente) */
  consequenziale?: boolean;
  /** Articolo specifico */
  articolo: string;
}

export interface RisultatoTappa {
  label: string;
  articolo: string;
  dataScadenza: Date;
  dataOriginaleSenzaProroga: Date;
  giornoSettimana: string;
  prorogaApplicata: "nessuna" | "sabato" | "festivo" | "ritroso-sabato" | "ritroso-festivo";
  giornoOriginale?: string;
  giorniSospesi: number;
  giorniDallaPartenza: number;
}

export interface RisultatoCalcolo {
  scenario: ScenarioConfig;
  dataPartenza: Date;
  tappe: RisultatoTappa[];
  sospensioneFerialeAttiva: boolean;
  modalitaSabato: ModalitaSabato;
}

/* ═══════════════════════════════════════════════════════════════
   Configurazione scenari
   ═══════════════════════════════════════════════════════════════ */

const URL_ART_183 = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art183";
const URL_ART_190 = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art190";
const URL_ART_171_BIS = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art171bis";
const URL_ART_171_TER = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art171ter";
const URL_ART_189 = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art189";
const URL_ART_275_BIS = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art275bis";
const URL_ART_155 = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155";
const URL_ART_153 = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art153";
const URL_L_742_1969 = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742!vig=";
const URL_DLGS_149_2022 = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149!vig=";
const URL_DLGS_164_2024 = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-10-31;164!vig=";
const URL_DL_132_2014 = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132!vig=";

export const URLS = {
  art155: URL_ART_155,
  art153: URL_ART_153,
  art171bis: URL_ART_171_BIS,
  art171ter: URL_ART_171_TER,
  art183: URL_ART_183,
  art189: URL_ART_189,
  art190: URL_ART_190,
  art275bis: URL_ART_275_BIS,
  L742_1969: URL_L_742_1969,
  dlgs149_2022: URL_DLGS_149_2022,
  dlgs164_2024: URL_DLGS_164_2024,
  dl132_2014: URL_DL_132_2014,
};

export const SCENARI: ScenarioConfig[] = [
  {
    id: "memorie183",
    regime: "vecchio",
    label: "Memorie ex art. 183 c. 6 c.p.c. (vecchio rito)",
    shortLabel: "Memorie 183 (30+30+20)",
    articolo: "Art. 183 c. 6 c.p.c.",
    url: URL_ART_183,
    direzione: "avanti",
    inputLabel: "Data dell'udienza di prima comparizione",
    inputHelp: "Per i procedimenti instaurati prima del 28/02/2023. I termini sono consequenziali e decorrono dall'udienza ex art. 183.",
    tappe: [
      { label: "1ª memoria — precisazioni e modifiche", giorni: 30, articolo: "Art. 183 c. 6 n. 1" },
      { label: "2ª memoria — repliche, prove e documenti", giorni: 30, consequenziale: true, articolo: "Art. 183 c. 6 n. 2" },
      { label: "3ª memoria — prova contraria", giorni: 20, consequenziale: true, articolo: "Art. 183 c. 6 n. 3" },
    ],
  },
  {
    id: "comparse190",
    regime: "vecchio",
    label: "Comparse conclusionali e repliche ex art. 190 c.p.c. (vecchio rito)",
    shortLabel: "Comparse 190 (60+20)",
    articolo: "Art. 190 c.p.c.",
    url: URL_ART_190,
    direzione: "avanti",
    inputLabel: "Data di rimessione della causa al collegio",
    inputHelp: "Per i procedimenti instaurati prima del 28/02/2023. Termini consequenziali dalla rimessione.",
    tappe: [
      { label: "Comparsa conclusionale", giorni: 60, articolo: "Art. 190 c. 1" },
      { label: "Memoria di replica", giorni: 20, consequenziale: true, articolo: "Art. 190 c. 1" },
    ],
  },
  {
    id: "memorie171ter",
    regime: "cartabia",
    label: "Memorie integrative ex art. 171-ter c.p.c. (Cartabia)",
    shortLabel: "Memorie integrative 171-ter (40/20/10)",
    articolo: "Art. 171-ter c.p.c.",
    url: URL_ART_171_TER,
    direzione: "ritroso",
    inputLabel: "Data dell'udienza ex art. 183",
    inputHelp: "Per i procedimenti instaurati dal 28/02/2023. I termini si calcolano a ritroso dall'udienza fissata in citazione (o dal decreto ex art. 171-bis c. 3).",
    tappe: [
      { label: "1ª memoria integrativa", giorni: 40, articolo: "Art. 171-ter n. 1" },
      { label: "2ª memoria integrativa", giorni: 20, articolo: "Art. 171-ter n. 2" },
      { label: "3ª memoria integrativa", giorni: 10, articolo: "Art. 171-ter n. 3" },
    ],
  },
  {
    id: "note189",
    regime: "cartabia",
    label: "Trattazione scritta ex art. 189 c.p.c. (Cartabia)",
    shortLabel: "Note 189 (60/30/15)",
    articolo: "Art. 189 c.p.c.",
    url: URL_ART_189,
    direzione: "ritroso",
    inputLabel: "Data dell'udienza di rimessione al collegio",
    inputHelp: "Termini massimi ('non superiore a') a ritroso dall'udienza collegiale. Il giudice può ridurli.",
    tappe: [
      { label: "Note di precisazione delle conclusioni", giorni: 60, articolo: "Art. 189 n. 1" },
      { label: "Comparsa conclusionale", giorni: 30, articolo: "Art. 189 n. 2" },
      { label: "Memoria di replica", giorni: 15, articolo: "Art. 189 n. 3" },
    ],
  },
  {
    id: "discussione275bis",
    regime: "cartabia",
    label: "Discussione orale ex art. 275-bis c.p.c. (Cartabia)",
    shortLabel: "Discussione orale 275-bis (30/15)",
    articolo: "Art. 275-bis c.p.c.",
    url: URL_ART_275_BIS,
    direzione: "ritroso",
    inputLabel: "Data dell'udienza di discussione",
    inputHelp: "Termini massimi a ritroso quando il giudice dispone la discussione orale (collegiale o monocratica). Nessuna memoria di replica.",
    tappe: [
      { label: "Note di precisazione delle conclusioni", giorni: 30, articolo: "Art. 275-bis c. 1" },
      { label: "Note conclusionali", giorni: 15, articolo: "Art. 275-bis c. 1" },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   Festività italiane (Pasqua + fissi)
   ═══════════════════════════════════════════════════════════════ */

function calcolaPasqua(anno: number): Date {
  // Algoritmo di Gauss
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
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(anno, month - 1, day);
}

function getFestivitaSet(anno: number): Set<string> {
  const s = new Set<string>();
  const fissi: [number, number][] = [
    [1, 1], [1, 6], [4, 25], [5, 1], [6, 2],
    [8, 15], [11, 1], [12, 8], [12, 25], [12, 26],
  ];
  for (const [m, d] of fissi) {
    s.add(formatYMD(new Date(anno, m - 1, d)));
  }
  // Lunedì dell'Angelo (lunedì dopo Pasqua)
  const pasqua = calcolaPasqua(anno);
  const lunediAngelo = new Date(pasqua);
  lunediAngelo.setDate(pasqua.getDate() + 1);
  s.add(formatYMD(lunediAngelo));
  return s;
}

function formatYMD(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function isFestivo(d: Date, festeCache: Map<number, Set<string>>): boolean {
  const dow = d.getDay();
  if (dow === 0) return true; // domenica
  const anno = d.getFullYear();
  if (!festeCache.has(anno)) festeCache.set(anno, getFestivitaSet(anno));
  return festeCache.get(anno)!.has(formatYMD(d));
}

function isSabato(d: Date): boolean {
  return d.getDay() === 6;
}

/* ═══════════════════════════════════════════════════════════════
   Sospensione feriale (1°-31 agosto, dal 2015 in poi)
   ═══════════════════════════════════════════════════════════════ */

function periodoFerialeAnno(anno: number): { dal: Date; al: Date } {
  // Dal 1° agosto al 31 agosto (post 2015)
  return {
    dal: new Date(anno, 7, 1),
    al: new Date(anno, 7, 31),
  };
}

function giorniInSospensione(daData: Date, aData: Date): number {
  // Conta i giorni inclusi nel periodo feriale tra daData (esclusa) e aData (inclusa)
  if (aData <= daData) return 0;
  let totale = 0;
  const annoInizio = daData.getFullYear();
  const annoFine = aData.getFullYear();
  for (let anno = annoInizio; anno <= annoFine; anno++) {
    const { dal, al } = periodoFerialeAnno(anno);
    const startEff = daData > dal ? new Date(daData) : new Date(dal);
    if (startEff.getTime() === daData.getTime()) {
      // daData è esclusa → partiamo dal giorno dopo
      startEff.setDate(startEff.getDate() + 1);
    }
    const endEff = aData < al ? aData : al;
    if (startEff <= endEff) {
      const diff = Math.floor((endEff.getTime() - startEff.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      totale += Math.max(0, diff);
    }
  }
  return totale;
}

/* ═══════════════════════════════════════════════════════════════
   Algoritmo principale di calcolo
   ═══════════════════════════════════════════════════════════════ */

function addGiorni(base: Date, giorni: number, direzione: "avanti" | "ritroso"): Date {
  const r = new Date(base.getFullYear(), base.getMonth(), base.getDate());
  r.setDate(r.getDate() + (direzione === "avanti" ? giorni : -giorni));
  return r;
}

function applicaProrogaFestivo(
  data: Date,
  direzione: "avanti" | "ritroso",
  festeCache: Map<number, Set<string>>
): { data: Date; tipo: RisultatoTappa["prorogaApplicata"]; originale?: string } {
  const dataOriginale = new Date(data);
  let cursor = new Date(data);
  let tipo: RisultatoTappa["prorogaApplicata"] = "nessuna";

  if (direzione === "avanti") {
    // Art. 155 c. 4: proroga al primo giorno seguente non festivo
    // Art. 155 c. 5: proroga si applica anche al sabato per atti fuori udienza
    while (isFestivo(cursor, festeCache) || isSabato(cursor)) {
      if (isFestivo(cursor, festeCache)) tipo = tipo === "nessuna" ? "festivo" : tipo;
      else if (isSabato(cursor)) tipo = tipo === "nessuna" ? "sabato" : tipo;
      cursor.setDate(cursor.getDate() + 1);
    }
  } else {
    // Termine a ritroso: regola cautelativa — sposta al primo giorno feriale precedente
    while (isFestivo(cursor, festeCache) || isSabato(cursor)) {
      if (isFestivo(cursor, festeCache)) tipo = tipo === "nessuna" ? "ritroso-festivo" : tipo;
      else if (isSabato(cursor)) tipo = tipo === "nessuna" ? "ritroso-sabato" : tipo;
      cursor.setDate(cursor.getDate() - 1);
    }
  }

  if (cursor.getTime() === dataOriginale.getTime()) {
    return { data: cursor, tipo: "nessuna" };
  }
  return {
    data: cursor,
    tipo,
    originale: nomeGiorno(dataOriginale),
  };
}

function applicaSospensione(
  dataPartenza: Date,
  giorni: number,
  direzione: "avanti" | "ritroso",
  attiva: boolean
): { dataFinale: Date; giorniSospesi: number } {
  if (!attiva) {
    return { dataFinale: addGiorni(dataPartenza, giorni, direzione), giorniSospesi: 0 };
  }

  // Algoritmo iterativo: aggiungiamo/togliamo i giorni saltando quelli del periodo feriale
  let cursor = new Date(dataPartenza.getFullYear(), dataPartenza.getMonth(), dataPartenza.getDate());
  let rimanenti = giorni;
  let giorniSospesi = 0;
  const step = direzione === "avanti" ? 1 : -1;

  while (rimanenti > 0) {
    cursor.setDate(cursor.getDate() + step);
    if (isFeriale(cursor)) {
      giorniSospesi++;
    } else {
      rimanenti--;
    }
  }

  return { dataFinale: cursor, giorniSospesi };
}

function isFeriale(d: Date): boolean {
  // True se il giorno cade nel periodo feriale 1°-31 agosto
  return d.getMonth() === 7; // agosto
}

function nomeGiorno(d: Date): string {
  return new Intl.DateTimeFormat("it-IT", { weekday: "long" }).format(d);
}

export function calcolaScadenze(
  scenarioId: ScenarioCalcolo,
  dataPartenza: Date,
  opts: {
    sospensioneFeriale: boolean;
    modalitaSabato: ModalitaSabato;
  }
): RisultatoCalcolo {
  const scenario = SCENARI.find((s) => s.id === scenarioId);
  if (!scenario) throw new Error(`Scenario non trovato: ${scenarioId}`);

  const festeCache = new Map<number, Set<string>>();
  const tappe: RisultatoTappa[] = [];

  // base = punto di partenza per il calcolo del termine corrente
  // Per termini consequenziali (vecchio rito), la base cambia di volta in volta.
  // Per termini a ritroso (Cartabia), la base è sempre dataPartenza (l'udienza).
  let base = new Date(dataPartenza.getFullYear(), dataPartenza.getMonth(), dataPartenza.getDate());

  let cumulativo = 0;
  for (let i = 0; i < scenario.tappe.length; i++) {
    const tappa = scenario.tappe[i];

    let basePerCalcolo: Date;
    let giorniDaApplicare: number;

    if (scenario.direzione === "ritroso") {
      // A ritroso: tutti i termini partono dalla data dell'udienza
      basePerCalcolo = dataPartenza;
      giorniDaApplicare = tappa.giorni;
      cumulativo = tappa.giorni;
    } else if (tappa.consequenziale && i > 0) {
      // Vecchio rito consequenziale: il termine successivo decorre dalla scadenza del precedente
      if (opts.modalitaSabato === "cassazione") {
        // Modalità Cassazione 13201/2006: dies a quo dal termine POSTICIPATO
        basePerCalcolo = tappe[i - 1].dataScadenza;
      } else {
        // Modalità prudenziale: dies a quo dal termine SENZA proroga
        basePerCalcolo = tappe[i - 1].dataOriginaleSenzaProroga;
      }
      giorniDaApplicare = tappa.giorni;
      cumulativo += tappa.giorni;
    } else {
      basePerCalcolo = base;
      giorniDaApplicare = tappa.giorni;
      cumulativo = tappa.giorni;
    }

    // 1) Applichiamo i giorni con eventuale sospensione feriale
    const { dataFinale, giorniSospesi } = applicaSospensione(
      basePerCalcolo,
      giorniDaApplicare,
      scenario.direzione,
      opts.sospensioneFeriale
    );

    // 2) Applichiamo proroga per sabato/festivi sulla data finale
    const proroga = applicaProrogaFestivo(dataFinale, scenario.direzione, festeCache);

    tappe.push({
      label: tappa.label,
      articolo: tappa.articolo,
      dataScadenza: proroga.data,
      dataOriginaleSenzaProroga: dataFinale,
      giornoSettimana: nomeGiorno(proroga.data),
      prorogaApplicata: proroga.tipo,
      giornoOriginale: proroga.originale,
      giorniSospesi,
      giorniDallaPartenza: cumulativo,
    });
  }

  return {
    scenario,
    dataPartenza,
    tappe,
    sospensioneFerialeAttiva: opts.sospensioneFeriale,
    modalitaSabato: opts.modalitaSabato,
  };
}

/* ═══════════════════════════════════════════════════════════════
   Tabelle per contenuto editoriale
   ═══════════════════════════════════════════════════════════════ */

export const tabellaConfrontoRegimi = [
  ["Memorie integrative", "Art. 183 c. 6 (30+30+20)", "Art. 171-ter (40+20+10)", "Da dietro l'udienza"],
  ["Note pc + conclusionali + repliche", "Art. 190 (60+20)", "Art. 189 (60+30+15)", "Aggiunta delle note pc"],
  ["Discussione orale", "Discussione orale ex art. 275", "Art. 275-bis (30+15)", "Niente repliche"],
  ["Decorrenza memorie integrative", "Dall'udienza (in avanti)", "A ritroso dall'udienza", "Inversione logica"],
  ["Concessione termini memorie", "Su richiesta del giudice", "Ex lege, automatica", "Più certezza"],
  ["Riducibilità dei termini", "Sì (art. 190 c. 2: min 20 gg)", "171-ter NO; 189/275-bis SÌ", "Differenze per atto"],
];

export const tabellaVecchioRito = [
  ["Memoria 183 c. 6 n. 1", "30 giorni dall'udienza", "Art. 183 c. 6 n. 1 c.p.c."],
  ["Memoria 183 c. 6 n. 2", "30 giorni dalla scadenza della 1ª", "Art. 183 c. 6 n. 2 c.p.c."],
  ["Memoria 183 c. 6 n. 3", "20 giorni dalla scadenza della 2ª", "Art. 183 c. 6 n. 3 c.p.c."],
  ["Comparsa conclusionale", "60 giorni dalla rimessione", "Art. 190 c. 1 c.p.c."],
  ["Memoria di replica", "20 giorni dalla scadenza della comparsa", "Art. 190 c. 1 c.p.c."],
];

export const tabellaCartabia = [
  ["1ª memoria integrativa", "40 giorni prima dell'udienza", "Art. 171-ter n. 1 c.p.c."],
  ["2ª memoria integrativa", "20 giorni prima dell'udienza", "Art. 171-ter n. 2 c.p.c."],
  ["3ª memoria integrativa", "10 giorni prima dell'udienza", "Art. 171-ter n. 3 c.p.c."],
  ["Note di precisazione conclusioni", "non oltre 60 giorni prima dell'udienza coll.", "Art. 189 n. 1 c.p.c."],
  ["Comparsa conclusionale", "non oltre 30 giorni prima dell'udienza coll.", "Art. 189 n. 2 c.p.c."],
  ["Memoria di replica", "non oltre 15 giorni prima dell'udienza coll.", "Art. 189 n. 3 c.p.c."],
  ["Note pc (275-bis)", "non oltre 30 giorni prima della discussione", "Art. 275-bis c. 1 c.p.c."],
  ["Note conclusionali (275-bis)", "non oltre 15 giorni prima della discussione", "Art. 275-bis c. 1 c.p.c."],
];

export const tabellaArt155 = [
  ["Comma 1", "Si esclude il giorno o l'ora iniziali (dies a quo non computatur)"],
  ["Comma 2", "Per termini a mesi o anni si osserva il calendario comune"],
  ["Comma 3", "I giorni festivi si computano nel termine"],
  ["Comma 4", "Se la scadenza è festiva, si proroga al primo giorno seguente non festivo"],
  ["Comma 5", "La proroga si applica anche al sabato per gli atti processuali fuori udienza"],
  ["Comma 6", "Il sabato resta lavorativo per udienze e attività giudiziaria interna"],
];

export const tabellaRiducibilitaTermini = [
  ["Art. 183 c. 6 (vecchio)", "Perentori, 30+30+20", "NO — il giudice può negare, ma se concede deve rispettare i termini"],
  ["Art. 190 c. 2 (vecchio)", "Perentori, max 60+20", "SÌ — riducibili dal giudice fino a min 20 giorni"],
  ["Art. 171-ter (Cartabia)", "Legali, 40+20+10", "NO — termini fissi inderogabili in riduzione"],
  ["Art. 189 (Cartabia)", "'non superiore a' 60+30+15", "SÌ — riducibili dal giudice nei limiti del diritto di difesa"],
  ["Art. 275-bis (Cartabia)", "'non superiore a' 30+15", "SÌ — riducibili dal giudice"],
];

/* ═══════════════════════════════════════════════════════════════
   Normativa di riferimento
   ═══════════════════════════════════════════════════════════════ */

export const normativaRiferimento: NormativaRiferimento[] = [
  { norma: "Art. 155 c.p.c.", descrizione: "Computo dei termini processuali (dies a quo, festivi, sabato).", url: URL_ART_155 },
  { norma: "Art. 153 c. 2 c.p.c.", descrizione: "Improrogabilità dei termini perentori e rimessione in termini per causa non imputabile.", url: URL_ART_153 },
  { norma: "Art. 171-bis c.p.c.", descrizione: "Verifiche preliminari del giudice e fissazione/differimento udienza ex art. 183 (Cartabia).", url: URL_ART_171_BIS },
  { norma: "Art. 171-ter c.p.c.", descrizione: "Memorie integrative a ritroso 40-20-10 giorni prima dell'udienza ex art. 183 (Cartabia).", url: URL_ART_171_TER },
  { norma: "Art. 183 c. 6 c.p.c.", descrizione: "Triplo termine 30+30+20 per memorie (regime vecchio rito, ancora applicabile ai procedimenti ante 28/02/2023).", url: URL_ART_183 },
  { norma: "Art. 189 c.p.c.", descrizione: "Note di precisazione conclusioni, comparse conclusionali e memorie di replica a ritroso (Cartabia).", url: URL_ART_189 },
  { norma: "Art. 190 c.p.c.", descrizione: "Comparse conclusionali 60 gg + repliche 20 gg dalla rimessione (regime vecchio rito).", url: URL_ART_190 },
  { norma: "Art. 275-bis c.p.c.", descrizione: "Decisione a seguito di discussione orale: note pc 30 gg + note conclusionali 15 gg a ritroso (Cartabia).", url: URL_ART_275_BIS },
  { norma: "L. 7/10/1969, n. 742", descrizione: "Sospensione feriale dei termini processuali (1°-31 agosto dopo D.L. 132/2014 conv. L. 162/2014).", url: URL_L_742_1969 },
  { norma: "D.L. 12/09/2014, n. 132", descrizione: "Ha ridotto il periodo di sospensione feriale al periodo 1°-31 agosto (conv. con mod. dalla L. 162/2014).", url: URL_DL_132_2014 },
  { norma: "D.Lgs. 10/10/2022, n. 149", descrizione: "Riforma Cartabia del processo civile — abrogazione del 'triplo termine' ex art. 183 c. 6 e introduzione degli artt. 171-bis, 171-ter, 189 (nuovo) e 275-bis. Efficacia dal 28/02/2023.", url: URL_DLGS_149_2022 },
  { norma: "D.Lgs. 31/10/2024, n. 164", descrizione: "Correttivo della Riforma Cartabia — chiarisce la decorrenza dei termini ex art. 171-ter mediante il nuovo art. 171-bis c. 5.", url: URL_DLGS_164_2024 },
];

/* ═══════════════════════════════════════════════════════════════
   Sezioni per sidebar
   ═══════════════════════════════════════════════════════════════ */

export const sections: ToolSection[] = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "quale-regime", label: "Quale regime si applica?" },
  { id: "memorie-183", label: "Memorie 183 c. 6 (vecchio)" },
  { id: "comparse-190", label: "Comparse 190 (vecchio)" },
  { id: "memorie-171-ter", label: "Memorie integrative 171-ter" },
  { id: "note-189", label: "Note e conclusionali 189" },
  { id: "discussione-275-bis", label: "Discussione orale 275-bis" },
  { id: "computo-termini", label: "Computo art. 155 c.p.c." },
  { id: "sabato-plurimi", label: "Sabato e termini plurimi" },
  { id: "sospensione-feriale", label: "Sospensione feriale" },
  { id: "decorrenza", label: "Decorrenza e dies a quo" },
  { id: "tardivita", label: "Tardività e rimessione" },
  { id: "poteri-giudice", label: "Riducibilità dei termini" },
  { id: "tabella-riepilogo", label: "Tabella riepilogativa" },
  { id: "faq", label: "FAQ" },
  { id: "fonti-riferimenti", label: "Fonti e Riferimenti" },
  { id: "normativa", label: "Normativa" },
];
