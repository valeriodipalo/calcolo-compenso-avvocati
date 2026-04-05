import type { NormativaRiferimento, ToolSection } from "@/types/tool";

/* ═══════════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════════ */

export type ModalitaCalcolo = "giorni" | "mesi";
export type DirezioneCalcolo = "avanti" | "ritroso";
export type TipoSospensione = "nessuna" | "post2015" | "pre2015";

export interface TerminePreimpostato {
  id: string;
  label: string;
  articolo: string;
  url: string;
  giorni: number | null;
  mesi: number | null;
  direzione: DirezioneCalcolo;
  libero: boolean;
  gruppo: string;
  /** Per termini multipli consecutivi (es. 171-ter: 40/20/10) */
  giorniMultipli?: number[];
}

export interface RisultatoCalcolo {
  dataScadenza: Date;
  giorniRimanenti: number;
  sospensioneApplicata: boolean;
  periodoSospensione: { dal: Date; al: Date } | null;
  giorniSospesi: number;
  prorogaFestivo: boolean;
  dataOriginale: Date;
  articolo: string;
  url: string;
  label: string;
}

export interface RisultatoMultiplo {
  risultati: RisultatoCalcolo[];
  label: string;
}

/* ═══════════════════════════════════════════════════════════════
   Termini preimpostati — Riforma Cartabia (D.Lgs. 149/2022)
   ═══════════════════════════════════════════════════════════════ */

export const terminiPreimpostati: TerminePreimpostato[] = [
  // --- Fase introduttiva ---
  { id: "163bis", label: "Termine a comparire (art. 163-bis)", articolo: "Art. 163-bis CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art163bis", giorni: 120, mesi: null, direzione: "avanti", libero: true, gruppo: "Fase introduttiva" },
  { id: "165", label: "Iscrizione a ruolo (art. 165)", articolo: "Art. 165 CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art165", giorni: 10, mesi: null, direzione: "avanti", libero: false, gruppo: "Fase introduttiva" },
  { id: "166", label: "Costituzione convenuto (art. 166)", articolo: "Art. 166 CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art166", giorni: 70, mesi: null, direzione: "ritroso", libero: false, gruppo: "Fase introduttiva" },

  // --- Trattazione e memorie ---
  { id: "171ter", label: "Memorie integrative 171-ter (40/20/10)", articolo: "Art. 171-ter CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149", giorni: null, mesi: null, direzione: "ritroso", libero: false, gruppo: "Trattazione", giorniMultipli: [40, 20, 10] },
  { id: "189", label: "Conclusionali e repliche 189 (40/20/10)", articolo: "Art. 189 CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art189", giorni: null, mesi: null, direzione: "ritroso", libero: false, gruppo: "Trattazione", giorniMultipli: [40, 20, 10] },
  { id: "275bis", label: "Discussione orale 275-bis (30/15)", articolo: "Art. 275-bis CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art275bis", giorni: null, mesi: null, direzione: "ritroso", libero: false, gruppo: "Trattazione", giorniMultipli: [30, 15] },

  // --- Procedimenti familiari ---
  { id: "473bis17", label: "Proc. familiare 473-bis.17 (20/10/5)", articolo: "Art. 473-bis.17 CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149", giorni: null, mesi: null, direzione: "ritroso", libero: false, gruppo: "Procedimenti familiari", giorniMultipli: [20, 10, 5] },
  { id: "473bis28", label: "Conclusionali familiari 473-bis.28 (60/30/15)", articolo: "Art. 473-bis.28 CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149", giorni: null, mesi: null, direzione: "ritroso", libero: false, gruppo: "Procedimenti familiari", giorniMultipli: [60, 30, 15] },

  // --- Impugnazioni ---
  { id: "325-appello", label: "Appello — termine breve (art. 325 c.1)", articolo: "Art. 325, c. 1, CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art325", giorni: 30, mesi: null, direzione: "avanti", libero: false, gruppo: "Impugnazioni" },
  { id: "325-cassazione", label: "Cassazione — termine breve (art. 325 c.2)", articolo: "Art. 325, c. 2, CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art325", giorni: 60, mesi: null, direzione: "avanti", libero: false, gruppo: "Impugnazioni" },
  { id: "327", label: "Termine lungo impugnazione (art. 327)", articolo: "Art. 327 CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art327", giorni: null, mesi: 6, direzione: "avanti", libero: false, gruppo: "Impugnazioni" },

  // --- Decreto ingiuntivo e esecuzioni ---
  { id: "641", label: "Opposizione decreto ingiuntivo (art. 641)", articolo: "Art. 641 CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art641", giorni: 40, mesi: null, direzione: "avanti", libero: false, gruppo: "Decreto ingiuntivo ed esecuzioni" },
  { id: "644", label: "Efficacia decreto ingiuntivo (art. 644)", articolo: "Art. 644 CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art644", giorni: 60, mesi: null, direzione: "avanti", libero: false, gruppo: "Decreto ingiuntivo ed esecuzioni" },
  { id: "481", label: "Scadenza precetto (art. 481)", articolo: "Art. 481 CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art481", giorni: 90, mesi: null, direzione: "avanti", libero: false, gruppo: "Decreto ingiuntivo ed esecuzioni" },
  { id: "617", label: "Opposizione atti esecutivi (art. 617)", articolo: "Art. 617 CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art617", giorni: 20, mesi: null, direzione: "avanti", libero: false, gruppo: "Decreto ingiuntivo ed esecuzioni" },

  // --- Rito del lavoro ---
  { id: "416", label: "Costituzione convenuto lavoro (art. 416)", articolo: "Art. 416 CPC", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art416", giorni: 10, mesi: null, direzione: "ritroso", libero: false, gruppo: "Rito del lavoro" },
];

/* ═══════════════════════════════════════════════════════════════
   Tabelle per contenuto editoriale
   ═══════════════════════════════════════════════════════════════ */

export const tabellaTerminiCartabia = [
  ["Art. 163-bis", "Termine a comparire", "90 giorni", "120 giorni", "+30 giorni"],
  ["Art. 165", "Iscrizione a ruolo", "Contestuale", "10 giorni da notifica", "NUOVO"],
  ["Art. 166", "Costituzione convenuto", "20 giorni prima udienza", "70 giorni prima udienza", "+50 giorni"],
  ["Art. 171-ter", "Memorie integrative", "—", "40/20/10 giorni", "NUOVO"],
  ["Art. 189", "Conclusionali e repliche", "60/20 giorni (art. 190)", "40/20/10 giorni", "MODIFICATO"],
  ["Art. 275-bis", "Proc. semplificato", "—", "30/15 giorni", "NUOVO"],
  ["Art. 325", "Impugnazioni", "30 gg (60 cass.)", "30 gg (60 cass.)", "STABILE"],
  ["Art. 473-bis.17", "Proc. familiari", "—", "20/10/5 giorni", "NUOVO"],
  ["Art. 473-bis.28", "Conclusionali familiari", "—", "60/30/15 giorni", "NUOVO"],
];

export const tabellaPrimoGrado = [
  ["Termine a comparire", "120 giorni (liberi)", "Art. 163-bis CPC"],
  ["Iscrizione a ruolo (attore)", "10 giorni da notifica", "Art. 165 CPC"],
  ["Costituzione convenuto", "70 giorni prima dell'udienza", "Art. 166 CPC"],
  ["1ª memoria integrativa", "40 giorni prima dell'udienza", "Art. 171-ter CPC"],
  ["2ª memoria integrativa", "20 giorni prima dell'udienza", "Art. 171-ter CPC"],
  ["3ª memoria integrativa", "10 giorni prima dell'udienza", "Art. 171-ter CPC"],
  ["Conclusionali", "40 giorni prima della decisione", "Art. 189 CPC"],
  ["Repliche", "20 giorni prima della decisione", "Art. 189 CPC"],
  ["Memorie di replica", "10 giorni prima della decisione", "Art. 189 CPC"],
];

export const tabellaEsecuzioni = [
  ["Scadenza precetto", "90 giorni", "Art. 481 CPC"],
  ["Efficacia pignoramento", "45 giorni", "Art. 497 CPC"],
  ["Istanza vendita (dilatorio)", "10 giorni", "Art. 501 CPC"],
  ["Iscrizione ruolo pign. mobiliare", "15 giorni", "Art. 518 CPC"],
  ["Iscrizione ruolo pign. autoveicoli", "30 giorni", "Art. 521-bis CPC"],
  ["Iscrizione ruolo pign. presso terzi", "30 giorni", "Art. 543 CPC"],
  ["Iscrizione ruolo pign. immobiliare", "15 giorni", "Art. 557 CPC"],
  ["Deposito doc. catastale", "45 giorni", "Art. 567 CPC"],
  ["Opposizione atti esecutivi", "20 giorni", "Art. 617 CPC"],
  ["Opposizione decreto ingiuntivo", "40 giorni", "Art. 641 CPC"],
  ["Perdita efficacia decreto ing.", "60 giorni", "Art. 644 CPC"],
];

export const tabellaFestivi = [
  ["1° gennaio", "Capodanno"],
  ["6 gennaio", "Epifania"],
  ["Lunedì dopo Pasqua", "Lunedì dell'Angelo"],
  ["25 aprile", "Festa della Liberazione"],
  ["1° maggio", "Festa del Lavoro"],
  ["2 giugno", "Festa della Repubblica"],
  ["15 agosto", "Ferragosto (Assunzione)"],
  ["1° novembre", "Ognissanti"],
  ["8 dicembre", "Immacolata Concezione"],
  ["25 dicembre", "Natale"],
  ["26 dicembre", "Santo Stefano"],
];

/* ═══════════════════════════════════════════════════════════════
   Festività italiane
   ═══════════════════════════════════════════════════════════════ */

function getFesteItaliane(anno: number): Set<string> {
  const feste = new Set<string>();
  const fissi = [
    [1, 1], [1, 6], [4, 25], [5, 1], [6, 2],
    [8, 15], [11, 1], [12, 8], [12, 25], [12, 26],
  ];
  for (const [m, d] of fissi) {
    feste.add(`${anno}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`);
  }
  const a = anno % 19;
  const b = Math.floor(anno / 100);
  const c = anno % 100;
  const dd = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - dd - g + 15) % 30;
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
  const giorno = d.getDay();
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

function primoGiornoNonFestivoIndietro(d: Date, feste: Set<string>): Date {
  const result = new Date(d);
  while (isFestivo(result, feste)) {
    result.setDate(result.getDate() - 1);
  }
  return result;
}

/* ═══════════════════════════════════════════════════════════════
   Sospensione feriale
   ═══════════════════════════════════════════════════════════════ */

interface PeriodoSospensione {
  dal: Date;
  al: Date;
}

function getSospensione(anno: number, tipo: TipoSospensione): PeriodoSospensione | null {
  if (tipo === "nessuna") return null;
  if (tipo === "post2015") return { dal: new Date(anno, 7, 1), al: new Date(anno, 7, 31) };
  return { dal: new Date(anno, 7, 1), al: new Date(anno, 8, 15) };
}

function isInSospensione(d: Date, sosp: PeriodoSospensione | null): boolean {
  if (!sosp) return false;
  const t = d.getTime();
  return t >= sosp.dal.getTime() && t <= sosp.al.getTime();
}

/* ═══════════════════════════════════════════════════════════════
   Calcolo del termine — Avanti (a giorni)
   ═══════════════════════════════════════════════════════════════ */

function calcolaAvanti(
  dataInizio: Date,
  numGiorni: number,
  tipoSosp: TipoSospensione,
  libero: boolean,
): { scadenza: Date; giorniSospesi: number; periodoSospensione: PeriodoSospensione | null } {
  const anno = dataInizio.getFullYear();
  const sosp1 = getSospensione(anno, tipoSosp);
  const sosp2 = getSospensione(anno + 1, tipoSosp);

  const cursore = new Date(dataInizio);
  cursore.setDate(cursore.getDate() + 1); // esclude dies a quo

  let contatore = 0;
  let giorniSospesi = 0;

  while (contatore < numGiorni) {
    const inSosp = isInSospensione(cursore, sosp1) || isInSospensione(cursore, sosp2);
    if (inSosp) {
      giorniSospesi++;
    } else {
      contatore++;
    }
    if (contatore < numGiorni) {
      cursore.setDate(cursore.getDate() + 1);
    }
  }

  // Per termini liberi, aggiungiamo un giorno (dies ad quem non si conta)
  if (libero) {
    cursore.setDate(cursore.getDate() + 1);
  }

  const periodoSospensione = giorniSospesi > 0 ? (sosp1 || sosp2) : null;
  return { scadenza: new Date(cursore), giorniSospesi, periodoSospensione };
}

/* ═══════════════════════════════════════════════════════════════
   Calcolo del termine — Avanti (a mesi)
   ═══════════════════════════════════════════════════════════════ */

function calcolaAvantiMesi(
  dataInizio: Date,
  numMesi: number,
  tipoSosp: TipoSospensione,
): { scadenza: Date; giorniSospesi: number; periodoSospensione: PeriodoSospensione | null } {
  const scadenza = new Date(dataInizio);
  scadenza.setMonth(scadenza.getMonth() + numMesi);

  if (scadenza.getDate() !== dataInizio.getDate()) {
    scadenza.setDate(0);
  }

  const anno = dataInizio.getFullYear();
  const sosp1 = getSospensione(anno, tipoSosp);
  const sosp2 = getSospensione(anno + 1, tipoSosp);

  let giorniSospesi = 0;
  if (sosp1) {
    const inizioSosp = sosp1.dal.getTime();
    const fineSosp = sosp1.al.getTime();
    const inizio = dataInizio.getTime();
    const fine = scadenza.getTime();
    if (fine >= inizioSosp && inizio <= fineSosp) {
      const overlapStart = Math.max(inizio, inizioSosp);
      const overlapEnd = Math.min(fine, fineSosp);
      giorniSospesi += Math.floor((overlapEnd - overlapStart) / (1000 * 60 * 60 * 24)) + 1;
    }
  }
  if (sosp2) {
    const inizioSosp = sosp2.dal.getTime();
    const fineSosp = sosp2.al.getTime();
    const inizio = dataInizio.getTime();
    const fine = scadenza.getTime();
    if (fine >= inizioSosp && inizio <= fineSosp) {
      const overlapStart = Math.max(inizio, inizioSosp);
      const overlapEnd = Math.min(fine, fineSosp);
      giorniSospesi += Math.floor((overlapEnd - overlapStart) / (1000 * 60 * 60 * 24)) + 1;
    }
  }

  scadenza.setDate(scadenza.getDate() + giorniSospesi);
  const periodoSospensione = giorniSospesi > 0 ? (sosp1 || sosp2) : null;
  return { scadenza, giorniSospesi, periodoSospensione };
}

/* ═══════════════════════════════════════════════════════════════
   Calcolo del termine — A ritroso (a giorni)
   ═══════════════════════════════════════════════════════════════ */

function calcolaRitroso(
  dataUdienza: Date,
  numGiorni: number,
  tipoSosp: TipoSospensione,
): { scadenza: Date; giorniSospesi: number; periodoSospensione: PeriodoSospensione | null } {
  const anno = dataUdienza.getFullYear();
  const sosp1 = getSospensione(anno, tipoSosp);
  const sosp2 = getSospensione(anno - 1, tipoSosp);

  const cursore = new Date(dataUdienza);
  cursore.setDate(cursore.getDate() - 1); // esclude la data dell'udienza

  let contatore = 0;
  let giorniSospesi = 0;

  while (contatore < numGiorni) {
    const inSosp = isInSospensione(cursore, sosp1) || isInSospensione(cursore, sosp2);
    if (inSosp) {
      giorniSospesi++;
    } else {
      contatore++;
    }
    if (contatore < numGiorni) {
      cursore.setDate(cursore.getDate() - 1);
    }
  }

  const periodoSospensione = giorniSospesi > 0 ? (sosp1 || sosp2) : null;
  return { scadenza: new Date(cursore), giorniSospesi, periodoSospensione };
}

/* ═══════════════════════════════════════════════════════════════
   Calcolo principale (singolo termine)
   ═══════════════════════════════════════════════════════════════ */

export function calcolaTermine(
  dataInput: Date,
  numGiorni: number | null,
  numMesi: number | null,
  direzione: DirezioneCalcolo,
  tipoSosp: TipoSospensione,
  libero: boolean,
): RisultatoCalcolo | null {
  if (numGiorni === null && numMesi === null) return null;

  let scadenzaRaw: Date;
  let giorniSospesi: number;
  let periodoSospensione: PeriodoSospensione | null;

  if (numGiorni !== null) {
    if (direzione === "avanti") {
      const r = calcolaAvanti(dataInput, numGiorni, tipoSosp, libero);
      scadenzaRaw = r.scadenza;
      giorniSospesi = r.giorniSospesi;
      periodoSospensione = r.periodoSospensione;
    } else {
      const r = calcolaRitroso(dataInput, numGiorni, tipoSosp);
      scadenzaRaw = r.scadenza;
      giorniSospesi = r.giorniSospesi;
      periodoSospensione = r.periodoSospensione;
    }
  } else {
    const r = calcolaAvantiMesi(dataInput, numMesi!, tipoSosp);
    scadenzaRaw = r.scadenza;
    giorniSospesi = r.giorniSospesi;
    periodoSospensione = r.periodoSospensione;
  }

  const anno = scadenzaRaw.getFullYear();
  const feste = new Set([
    ...getFesteItaliane(anno),
    ...getFesteItaliane(anno + 1),
    ...getFesteItaliane(anno - 1),
  ]);

  const dataOriginale = new Date(scadenzaRaw);
  const prorogaFestivo = isFestivo(scadenzaRaw, feste);

  if (prorogaFestivo) {
    if (direzione === "ritroso") {
      scadenzaRaw = primoGiornoNonFestivoIndietro(scadenzaRaw, feste);
    } else {
      scadenzaRaw = primoGiornoNonFestivo(scadenzaRaw, feste);
    }
  }

  const oggi = new Date();
  oggi.setHours(0, 0, 0, 0);
  const diffMs = scadenzaRaw.getTime() - oggi.getTime();
  const giorniRimanenti = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  const tipoTermine = numGiorni !== null
    ? `${numGiorni} giorni${libero ? " (liberi)" : ""}`
    : `${numMesi} mesi`;
  const label = direzione === "ritroso"
    ? `Termine: ${tipoTermine} prima dell'udienza`
    : `Termine: ${tipoTermine} dalla data indicata`;

  return {
    dataScadenza: scadenzaRaw,
    giorniRimanenti,
    sospensioneApplicata: giorniSospesi > 0,
    periodoSospensione,
    giorniSospesi,
    prorogaFestivo,
    dataOriginale,
    articolo: "",
    url: "",
    label,
  };
}

/* ═══════════════════════════════════════════════════════════════
   Calcolo multiplo (per termini consecutivi 171-ter, 189, ecc.)
   ═══════════════════════════════════════════════════════════════ */

export function calcolaTerminiMultipli(
  dataUdienza: Date,
  giorniArray: number[],
  tipoSosp: TipoSospensione,
  articolo: string,
  url: string,
): RisultatoCalcolo[] {
  return giorniArray.map((gg, idx) => {
    const r = calcolaTermine(dataUdienza, gg, null, "ritroso", tipoSosp, false);
    if (!r) return null;
    r.articolo = articolo;
    r.url = url;
    r.label = `${idx + 1}ª scadenza: ${gg} giorni prima dell'udienza`;
    return r;
  }).filter((r): r is RisultatoCalcolo => r !== null);
}

/* ═══════════════════════════════════════════════════════════════
   Normativa di riferimento
   ═══════════════════════════════════════════════════════════════ */

export const normativaRiferimento: NormativaRiferimento[] = [
  { norma: "Art. 155 CPC", descrizione: "Computo dei termini processuali — esclusione dies a quo, proroga sabato e festivi, calendario comune per mesi/anni", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" },
  { norma: "Artt. 152-154 CPC", descrizione: "Perentorietà dei termini, sospensione/interruzione, rimessione in termini, proroga", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art152" },
  { norma: "Art. 163-bis CPC", descrizione: "Termine a comparire — 120 giorni liberi prima dell'udienza (post riforma Cartabia)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art163bis" },
  { norma: "Art. 166 CPC", descrizione: "Costituzione del convenuto — 70 giorni prima dell'udienza", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art166" },
  { norma: "Art. 171-ter CPC", descrizione: "Memorie integrative — 40, 20 e 10 giorni prima dell'udienza (Riforma Cartabia)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149" },
  { norma: "Art. 189 CPC", descrizione: "Precisazione delle conclusioni e repliche — 40, 20, 10 giorni", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art189" },
  { norma: "Art. 325-327 CPC", descrizione: "Termini per le impugnazioni — breve (30/60 giorni) e lungo (6 mesi)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art325" },
  { norma: "L. 742/1969", descrizione: "Sospensione feriale dei termini processuali — 1°-31 agosto di ciascun anno", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742!vig=" },
  { norma: "D.L. 132/2014, conv. L. 162/2014", descrizione: "Modifica del periodo di sospensione feriale da 1° ago–15 set a 1°–31 agosto (dal 2015)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto-legge:2014-09-12;132!vig=" },
  { norma: "L. 263/2005", descrizione: "Introduzione commi 5-6 art. 155 CPC — equiparazione sabato a festivo per atti fuori udienza", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2005-12-28;263" },
  { norma: "D.Lgs. 149/2022 (Riforma Cartabia)", descrizione: "Riforma del processo civile — nuovi termini processuali, in vigore dal 28 febbraio 2023", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149!vig=" },
  { norma: "L. 260/1949", descrizione: "Disposizioni in materia di giorni festivi nazionali", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1949-03-27;260!vig=" },
  { norma: "D.Lgs. 546/1992", descrizione: "Processo tributario — sospensione feriale senza eccezioni", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546!vig=" },
  { norma: "Artt. 172-176 CPP", descrizione: "Computo dei termini nel processo penale — regole analoghe al civile", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1988-09-22;447" },
];

/* ═══════════════════════════════════════════════════════════════
   Sezioni della pagina (per SideNav)
   ═══════════════════════════════════════════════════════════════ */

export const sections: ToolSection[] = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "computo-termini", label: "Computo dei Termini" },
  { id: "calcolo-giorni", label: "Calcolo a Giorni" },
  { id: "calcolo-mesi", label: "Calcolo a Mesi" },
  { id: "termini-liberi", label: "Termini Liberi" },
  { id: "sabato-festivi", label: "Sabato e Festivi" },
  { id: "calcolo-ritroso", label: "Calcolo a Ritroso" },
  { id: "sospensione-feriale", label: "Sospensione Feriale" },
  { id: "riforma-cartabia", label: "Riforma Cartabia" },
  { id: "tabella-termini", label: "Tabella Termini" },
  { id: "esecuzioni", label: "Esecuzioni" },
  { id: "penale-tributario", label: "Penale e Tributario" },
  { id: "errori-comuni", label: "Errori Comuni" },
  { id: "fonti", label: "Fonti e Riferimenti" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];
