import rawData from "./feeData.json";

// ── Types ──────────────────────────────────────────────────────────

export interface PhaseData {
  code: number;
  enabled: boolean;
  min: number;
  med: number;
  max: number;
}

export type ValueMode = "min" | "med" | "max" | "custom";

export interface PhaseSelection {
  code: number;
  checked: boolean;
  mode: ValueMode;
  customValue: number;
}

export interface Competenza {
  value: number;
  label: string;
  group: "giurisdizione" | "materia";
}

export interface Scaglione {
  value: number;
  label: string;
}

export interface Aumento {
  id: string;
  label: string;
  reference: string;
  enabled: boolean;
  pct: number;
  customValue?: number;
  minPct?: number;
  maxPct?: number;
  basis: "total" | "decisionale" | "introduttiva";
  numParti?: number;
}

export interface Riduzione {
  id: string;
  label: string;
  reference: string;
  enabled: boolean;
  pct: number;
  minPct?: number;
  maxPct?: number;
  fixed?: boolean;
}

export interface SpeseState {
  speseEsenti: number;
  speseTrasferta: number;
  speseNonEsenti: number;
  speseGeneraliEnabled: boolean;
  speseGeneraliPct: number;
}

export interface AccessoriState {
  cpaEnabled: boolean;
  ivaEnabled: boolean;
  ritenutaEnabled: boolean;
}

export interface CalcResult {
  base: number;
  phaseValues: { code: number; name: string; value: number }[];
  aumenti: { label: string; value: number }[];
  riduzioni: { label: string; value: number }[];
  totalAumenti: number;
  totalRiduzioni: number;
  adjustedBase: number;
  speseGenerali: number;
  compenso: number;
  speseEsenti: number;
  speseTrasferta: number;
  speseNonEsenti: number;
  taxableExpenses: number;
  cpa: number;
  iva: number;
  ritenutaAcconto: number;
  totale: number;
  netto: number;
}

// ── Constants ──────────────────────────────────────────────────────

export const CPA_RATE = 0.04;
export const IVA_RATE = 0.22;
export const RITENUTA_RATE = 0.20;
export const DEFAULT_SPESE_GENERALI_PCT = 15;

export const PHASE_NAMES: Record<number, string> = {
  0: "Compenso",
  10: "Studio della controversia",
  20: "Fase introduttiva",
  25: "Fase cautelare",
  30: "Fase istruttoria / trattazione",
  40: "Fase decisionale",
  50: "Fase esecutiva",
  70: "Fase esecutiva",
  72: "Fase cautelare",
  74: "Fase esecutiva",
  80: "Fase decisionale",
  99: "Compenso",
};

// ── Competenze ─────────────────────────────────────────────────────

export const COMPETENZE: Competenza[] = [
  { value: 100, label: "Giudice di pace", group: "giurisdizione" },
  { value: 110, label: "Giudizi di cognizione innanzi al tribunale", group: "giurisdizione" },
  { value: 200, label: "Corte dei Conti", group: "giurisdizione" },
  { value: 210, label: "Corte d'Appello", group: "giurisdizione" },
  { value: 220, label: "Corte di Cassazione", group: "giurisdizione" },
  { value: 230, label: "Magistrature superiori", group: "giurisdizione" },
  { value: 240, label: "Corte Costituzionale", group: "giurisdizione" },
  { value: 250, label: "Corte Europea", group: "giurisdizione" },
  { value: 260, label: "Corte di Giustizia UE", group: "giurisdizione" },
  { value: 320, label: "T.A.R.", group: "giurisdizione" },
  { value: 330, label: "Consiglio di Stato", group: "giurisdizione" },
  { value: 335, label: "Consiglio di Giustizia Amministrativa Sicilia", group: "giurisdizione" },
  { value: 340, label: "Commissioni Tributarie Provinciali", group: "giurisdizione" },
  { value: 350, label: "Commissioni Tributarie Regionali", group: "giurisdizione" },
  { value: 370, label: "Arbitrati", group: "giurisdizione" },
  { value: 120, label: "Esecuzioni individuali e concorsuali", group: "materia" },
  { value: 130, label: "Procedimenti speciali e cautelari", group: "materia" },
  { value: 140, label: "Affari di volontaria giurisdizione", group: "materia" },
  { value: 150, label: "Precetto", group: "materia" },
  { value: 160, label: "Volontaria giurisdizione", group: "materia" },
  { value: 170, label: "Iscrizione ipotecaria", group: "materia" },
  { value: 180, label: "Procedimenti monitori", group: "materia" },
  { value: 190, label: "Opposizione a decreto ingiuntivo", group: "materia" },
  { value: 270, label: "Procedimenti di istruzione preventiva", group: "materia" },
  { value: 280, label: "Ricorso per ingiunzione Tribunale amministrativo", group: "materia" },
  { value: 290, label: "Proced. risoluzione alternativa controversie (ADR/Negoziazione/Mediazione)", group: "materia" },
  { value: 300, label: "Assistenza in materia di contrattualistica pubblica", group: "materia" },
  { value: 310, label: "Assistenza in materia di contrattualistica privata", group: "materia" },
  { value: 390, label: "Consulenza stragiudiziale", group: "materia" },
];

export const TAR_CDS_COMPETENZE = [320, 330, 335];
export const CASSAZIONE_COMPETENZE = [220];

// ── Scaglioni ──────────────────────────────────────────────────────

export const SCAGLIONI: Scaglione[] = [
  { value: 10, label: "Fino a 1.100,00" },
  { value: 20, label: "Da 1.100,01 a 5.200,00" },
  { value: 30, label: "Da 5.200,01 a 26.000,00" },
  { value: 40, label: "Da 26.000,01 a 52.000,00" },
  { value: 50, label: "Da 52.000,01 a 260.000,00" },
  { value: 60, label: "Da 260.000,01 a 520.000,00" },
  { value: 70, label: "Da 520.000,01 a 1.000.000,00" },
  { value: 80, label: "Da 1.000.000,01 a 2.000.000,00" },
  { value: 90, label: "Da 2.000.000,01 a 4.000.000,00" },
  { value: 100, label: "Da 4.000.000,01 a 8.000.000,00" },
  { value: 110, label: "Da 8.000.000,01 a 16.000.000,00" },
  { value: 120, label: "Da 16.000.000,01 a 32.000.000,00" },
  { value: 130, label: "Oltre 32.000.000,00" },
  { value: 901, label: "Causa di valore indeterminabile - Bassa" },
  { value: 902, label: "Causa di valore indeterminabile - Media" },
  { value: 903, label: "Causa di valore indeterminabile - Alta" },
  { value: 910, label: "Causa di valore non determinabile" },
];

// ── Fee Data Access ────────────────────────────────────────────────

const feeData = rawData as Record<string, Record<string, PhaseData[]>>;

export function getPhases(competenza: number, scaglione: number): PhaseData[] {
  const comp = feeData[String(competenza)];
  if (!comp) return [];
  return comp[String(scaglione)] || [];
}

export function getAvailableScaglioni(competenza: number): number[] {
  const comp = feeData[String(competenza)];
  if (!comp) return [];
  return Object.keys(comp).map(Number).sort((a, b) => a - b);
}

// ── Default Aumenti & Riduzioni ────────────────────────────────────

export function getDefaultAumenti(): Aumento[] {
  return [
    { id: "PiuParti", label: "Numero parti", reference: "art. 4, c.2", enabled: false, pct: 0, basis: "total", numParti: 1 },
    { id: "Conciliazione", label: "Conciliazione", reference: "art. 4, c.6", enabled: false, pct: 25, basis: "decisionale" },
    { id: "ClassAction", label: "Class action", reference: "art. 4, c.10", enabled: false, pct: 300, basis: "total" },
    { id: "Fondatezza", label: "Manifesta fondatezza", reference: "art. 4, c.8", enabled: false, pct: 33, basis: "total" },
    { id: "Importanza", label: "Ulteriore valutazione", reference: "art. 4, c.1", enabled: false, pct: 0, basis: "total", customValue: 0 },
    { id: "PredPct", label: "Predisposizioni x Pct", reference: "art. 4, c.1bis", enabled: false, pct: 30, basis: "total" },
    { id: "MotiviAggiunti", label: "Motivi aggiunti", reference: "art. 4, c.10bis", enabled: false, pct: 50, basis: "introduttiva" },
    { id: "RicorsoIncidentale", label: "Ricorso incidentale", reference: "art. 4, c.10bis", enabled: false, pct: 20, basis: "introduttiva" },
    { id: "Memoria378", label: "Memoria 378 c.p.c.", reference: "art. 4, c.10bis", enabled: false, pct: 40, basis: "decisionale" },
  ];
}

export function getDefaultRiduzioni(): Riduzione[] {
  return [
    { id: "AssenzaQfd", label: "Assenza questioni di fatto e diritto", reference: "art. 4, c.4", enabled: false, pct: 30, minPct: 1, maxPct: 30 },
    { id: "Ritardo", label: "Condotte ostative", reference: "art. 4, c.7", enabled: false, pct: 50, minPct: 1, maxPct: 50 },
    { id: "RespProc", label: "Resp. art. 96 cpc", reference: "art. 4, c.9", enabled: false, pct: 75, fixed: true },
    { id: "Pronunce", label: "Pronunce in rito", reference: "art. 4, c.9", enabled: false, pct: 50, fixed: true },
    { id: "GP", label: "Gratuito patrocinio", reference: "art. 130 Dpr 115/02", enabled: false, pct: 50, fixed: true },
    { id: "Praticante", label: "Praticante abilitato", reference: "art. 9", enabled: false, pct: 50, minPct: 5, maxPct: 50 },
  ];
}

// ── Calculation Engine ─────────────────────────────────────────────

function getPhaseValue(phase: PhaseData, selection: PhaseSelection): number {
  if (!selection.checked) return 0;
  switch (selection.mode) {
    case "min": return phase.min;
    case "med": return phase.med;
    case "max": return phase.max;
    case "custom": return selection.customValue;
    default: return phase.med;
  }
}

export function calculatePiuPartiPct(numParti: number): number {
  if (numParti <= 1) return 0;
  if (numParti <= 10) return (numParti - 1) * 20;
  return 9 * 20 + (numParti - 10) * 10;
}

export function calculate(
  phases: PhaseData[],
  selections: PhaseSelection[],
  aumenti: Aumento[],
  riduzioni: Riduzione[],
  spese: SpeseState,
  accessori: AccessoriState,
): CalcResult {
  const phaseValues: { code: number; name: string; value: number }[] = [];
  let base = 0;
  let decisionale = 0;
  let introduttiva = 0;

  for (const phase of phases) {
    const sel = selections.find(s => s.code === phase.code);
    if (!sel) continue;
    const val = getPhaseValue(phase, sel);
    phaseValues.push({
      code: phase.code,
      name: PHASE_NAMES[phase.code] || `Fase ${phase.code}`,
      value: val,
    });
    base += val;
    if (phase.code === 40 || phase.code === 80) decisionale += val;
    if (phase.code === 20) introduttiva += val;
  }

  const aumentiDetails: { label: string; value: number }[] = [];
  let totalAumenti = 0;

  for (const a of aumenti) {
    if (!a.enabled) continue;
    let basisValue = base;
    if (a.basis === "decisionale") basisValue = decisionale;
    if (a.basis === "introduttiva") basisValue = introduttiva;

    let value: number;
    if (a.id === "PiuParti") {
      const pct = calculatePiuPartiPct(a.numParti || 1);
      value = basisValue * pct / 100;
    } else if (a.id === "Importanza" && a.customValue !== undefined) {
      value = a.customValue;
    } else {
      value = basisValue * a.pct / 100;
    }

    if (value !== 0) {
      aumentiDetails.push({ label: a.label, value });
      totalAumenti += value;
    }
  }

  const riduzioniDetails: { label: string; value: number }[] = [];
  let totalRiduzioni = 0;

  for (const r of riduzioni) {
    if (!r.enabled) continue;
    const value = base * r.pct / 100;
    if (value !== 0) {
      riduzioniDetails.push({ label: r.label, value });
      totalRiduzioni += value;
    }
  }

  const adjustedBase = Math.max(0, base + totalAumenti - totalRiduzioni);
  const speseGenerali = spese.speseGeneraliEnabled
    ? adjustedBase * spese.speseGeneraliPct / 100
    : 0;
  const compenso = adjustedBase + speseGenerali;
  const taxableExpenses = spese.speseTrasferta + spese.speseNonEsenti;
  const cpa = accessori.cpaEnabled ? compenso * CPA_RATE : 0;
  const iva = accessori.ivaEnabled ? (compenso + taxableExpenses + cpa) * IVA_RATE : 0;
  const ritenutaAcconto = accessori.ritenutaEnabled ? compenso * RITENUTA_RATE : 0;
  const totale = compenso + taxableExpenses + cpa + iva + spese.speseEsenti;
  const netto = totale - ritenutaAcconto;

  return {
    base, phaseValues, aumenti: aumentiDetails, riduzioni: riduzioniDetails,
    totalAumenti, totalRiduzioni, adjustedBase, speseGenerali, compenso,
    speseEsenti: spese.speseEsenti, speseTrasferta: spese.speseTrasferta,
    speseNonEsenti: spese.speseNonEsenti, taxableExpenses, cpa, iva,
    ritenutaAcconto, totale, netto,
  };
}

// ── Formatting ─────────────────────────────────────────────────────

export const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value);

// ── Normativa di Riferimento ───────────────────────────────────────

export const normativaRiferimento = [
  {
    norma: "D.M. 10 marzo 2014, n. 55",
    descrizione: "Parametri per la liquidazione dei compensi per la professione forense",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55",
  },
  {
    norma: "D.M. 8 marzo 2018, n. 37",
    descrizione: "Primo aggiornamento parametri forensi (introduzione Tab. XXV-bis mediazione)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2018-03-08;37",
  },
  {
    norma: "D.M. 13 agosto 2022, n. 147",
    descrizione: "Aggiornamento vigente dei parametri forensi (in vigore dal 23/10/2022)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147",
  },
  {
    norma: "L. 31 dicembre 2012, n. 247",
    descrizione: "Nuova disciplina dell'ordinamento della professione forense (art. 13, c. 6)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247",
  },
  {
    norma: "L. 21 aprile 2023, n. 49",
    descrizione: "Disposizioni in materia di equo compenso delle prestazioni professionali",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2023-04-21;49",
  },
  {
    norma: "Art. 2233 c.c.",
    descrizione: "Compenso per prestazioni di opera intellettuale",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2233",
  },
  {
    norma: "D.P.R. 30 maggio 2002, n. 115",
    descrizione: "Testo unico spese di giustizia (gratuito patrocinio)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115",
  },
];

export const circolariMinisteriali = [
  {
    circolare: "G.U. n. 236 del 08/10/2022",
    descrizione: "Pubblicazione DM 147/2022 — nuovi parametri forensi in vigore dal 23/10/2022",
    url: "https://www.gazzettaufficiale.it/eli/id/2022/10/08/22G00155/sg",
  },
  {
    circolare: "G.U. n. 77 del 02/04/2014",
    descrizione: "Pubblicazione DM 55/2014 — parametri forensi originari in vigore dal 03/04/2014",
    url: "https://www.gazzettaufficiale.it/eli/id/2014/04/02/14G00063/sg",
  },
];

// ── Sidebar Sections ───────────────────────────────────────────────

export const sections = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "parametri-forensi", label: "Parametri Forensi" },
  { id: "come-si-calcola", label: "Come si Calcola" },
  { id: "fasi-processuali", label: "Fasi Processuali" },
  { id: "tabelle-parametri", label: "Tabelle Parametri" },
  { id: "scaglioni", label: "Scaglioni di Valore" },
  { id: "aumenti-riduzioni", label: "Aumenti e Riduzioni" },
  { id: "spese-accessori", label: "Spese e Accessori" },
  { id: "esempio-calcolo", label: "Esempio di Calcolo" },
  { id: "stragiudiziale", label: "Stragiudiziale" },
  { id: "valore-indeterminabile", label: "Valore Indeterminabile" },
  { id: "cause-oltre-520k", label: "Cause > \u20AC 520.000" },
  { id: "mediazione-negoziazione", label: "Mediazione e Negoziazione" },
  { id: "equo-compenso", label: "Equo Compenso" },
  { id: "verifica-parcella", label: "Verifica Parcella" },
  { id: "novita-2022", label: "Novit\u00e0 DM 147/2022" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];
