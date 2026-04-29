import type {
  ToolSection,
  NormativaRiferimento,
  CircolareMinisteriale,
} from "@/types/tool";

// ──────────────────────────────────────────────────────────────
// Tipi
// ──────────────────────────────────────────────────────────────

export type RegimeRavvedimento = "previgente" | "nuovo";

export type TierRavvedimento =
  | "sprint"
  | "breve"
  | "intermedio"
  | "lungo"
  | "ultrannuale"
  | "lunghissimo";

export type CodiceTributoRavvedimento = {
  id: string;
  imposta: string;
  codiceImposta: string;
  codiceSanzione: string;
  codiceInteressi: string;
  sezione: "Erario" | "IMU" | "Regioni";
  rateizzabile?: boolean;
};

export interface InputRavvedimento {
  tipoTributoId: string;
  imposta: number;
  dataScadenza: Date;
  dataVersamento: Date;
}

export interface BreakdownInteressi {
  periodo: string;
  giorni: number;
  tasso: number;
  importo: number;
}

export interface RisultatoRavvedimento {
  giorniRitardo: number;
  regime: RegimeRavvedimento;
  tier: TierRavvedimento;
  tierLabel: string;
  sanzioneEdittale: number;
  sanzionePerc: number;
  sanzione: number;
  interessiTotali: number;
  interessiBreakdown: BreakdownInteressi[];
  imposta: number;
  totale: number;
  codici: CodiceTributoRavvedimento | null;
  riduzioneFrazione: string;
}

// ──────────────────────────────────────────────────────────────
// Tabella tasso interesse legale (art. 1284 c.c.)
// ──────────────────────────────────────────────────────────────

export const TASSI_INTERESSE_LEGALE: { anno: number; tasso: number; decreto: string }[] = [
  { anno: 2026, tasso: 0.016, decreto: "D.M. 10 dicembre 2025 (GU n. 289 del 13/12/2025)" },
  { anno: 2025, tasso: 0.02, decreto: "D.M. 10 dicembre 2024" },
  { anno: 2024, tasso: 0.025, decreto: "D.M. 29 novembre 2023" },
  { anno: 2023, tasso: 0.05, decreto: "D.M. 13 dicembre 2022" },
  { anno: 2022, tasso: 0.0125, decreto: "D.M. 13 dicembre 2021" },
  { anno: 2021, tasso: 0.0001, decreto: "D.M. 11 dicembre 2020" },
  { anno: 2020, tasso: 0.0005, decreto: "D.M. 12 dicembre 2019" },
  { anno: 2019, tasso: 0.008, decreto: "D.M. 12 dicembre 2018" },
  { anno: 2018, tasso: 0.003, decreto: "D.M. 14 dicembre 2017" },
  { anno: 2017, tasso: 0.001, decreto: "D.M. 15 dicembre 2016" },
  { anno: 2016, tasso: 0.002, decreto: "D.M. 11 dicembre 2015" },
  { anno: 2015, tasso: 0.005, decreto: "D.M. 10 dicembre 2014" },
];

// Lookup helper for the calculator
const tassiMap: Record<number, number> = TASSI_INTERESSE_LEGALE.reduce(
  (acc, { anno, tasso }) => ({ ...acc, [anno]: tasso }),
  {} as Record<number, number>,
);

// ──────────────────────────────────────────────────────────────
// Tabelle sanzioni
// ──────────────────────────────────────────────────────────────

export interface RigaSanzioni {
  tier: TierRavvedimento;
  label: string;
  giorniLabel: string;
  riduzione: string;
  sanzioneRidotta: string;
  riferimento: string;
}

/** Regime nuovo: violazioni dal 1° settembre 2024 (D.Lgs. 87/2024) */
export const SANZIONI_REGIME_NUOVO: RigaSanzioni[] = [
  {
    tier: "sprint",
    label: "Sprint",
    giorniLabel: "1 - 14 giorni",
    riduzione: "1/15 di 1/10 di 12,5%",
    sanzioneRidotta: "0,0833% × giorni (max 1,166%)",
    riferimento: "Art. 13, c. 1, lett. a) D.Lgs. 472/97",
  },
  {
    tier: "breve",
    label: "Breve",
    giorniLabel: "15 - 30 giorni",
    riduzione: "1/10 di 12,5%",
    sanzioneRidotta: "1,2500%",
    riferimento: "Art. 13, c. 1, lett. a) D.Lgs. 472/97",
  },
  {
    tier: "intermedio",
    label: "Intermedio",
    giorniLabel: "31 - 90 giorni",
    riduzione: "1/9 di 12,5%",
    sanzioneRidotta: "1,3889%",
    riferimento: "Art. 13, c. 1, lett. a-bis)",
  },
  {
    tier: "lungo",
    label: "Lungo",
    giorniLabel: "91 giorni → termine dichiarazione (o 1 anno)",
    riduzione: "1/8 di 25%",
    sanzioneRidotta: "3,1250%",
    riferimento: "Art. 13, c. 1, lett. b)",
  },
  {
    tier: "ultrannuale",
    label: "Ultrannuale",
    giorniLabel: "Oltre termine dichiarazione (o oltre 1 anno)",
    riduzione: "1/7 di 25%",
    sanzioneRidotta: "3,5714%",
    riferimento: "Art. 13, c. 1, lett. b-bis)",
  },
];

/** Regime previgente: violazioni fino al 31 agosto 2024 (D.Lgs. 158/2015) */
export const SANZIONI_REGIME_PREVIGENTE: RigaSanzioni[] = [
  {
    tier: "sprint",
    label: "Sprint",
    giorniLabel: "1 - 14 giorni",
    riduzione: "1/15 di 1/10 di 15%",
    sanzioneRidotta: "0,1% × giorni (max 1,4%)",
    riferimento: "Art. 13, c. 1, lett. a) D.Lgs. 472/97",
  },
  {
    tier: "breve",
    label: "Breve",
    giorniLabel: "15 - 30 giorni",
    riduzione: "1/10 di 15%",
    sanzioneRidotta: "1,5000%",
    riferimento: "Art. 13, c. 1, lett. a)",
  },
  {
    tier: "intermedio",
    label: "Intermedio",
    giorniLabel: "31 - 90 giorni",
    riduzione: "1/9 di 15%",
    sanzioneRidotta: "1,6667%",
    riferimento: "Art. 13, c. 1, lett. a-bis)",
  },
  {
    tier: "lungo",
    label: "Lungo",
    giorniLabel: "91 giorni → termine dichiarazione",
    riduzione: "1/8 di 30%",
    sanzioneRidotta: "3,7500%",
    riferimento: "Art. 13, c. 1, lett. b)",
  },
  {
    tier: "ultrannuale",
    label: "Ultrannuale",
    giorniLabel: "Entro dichiarazione successiva",
    riduzione: "1/7 di 30%",
    sanzioneRidotta: "4,2857%",
    riferimento: "Art. 13, c. 1, lett. b-bis)",
  },
  {
    tier: "lunghissimo",
    label: "Lunghissimo",
    giorniLabel: "Oltre dichiarazione successiva (oltre 2 anni)",
    riduzione: "1/6 di 30%",
    sanzioneRidotta: "5,0000%",
    riferimento: "Art. 13, c. 1, lett. b-ter)",
  },
];

/** Tabella sprint giornaliera (1-14 giorni) per entrambi i regimi */
export const SPRINT_GIORNALIERO: { giorni: number; nuovo: number; previgente: number }[] = [
  { giorni: 1, nuovo: 0.000833, previgente: 0.001 },
  { giorni: 2, nuovo: 0.001667, previgente: 0.002 },
  { giorni: 3, nuovo: 0.0025, previgente: 0.003 },
  { giorni: 4, nuovo: 0.003333, previgente: 0.004 },
  { giorni: 5, nuovo: 0.004167, previgente: 0.005 },
  { giorni: 6, nuovo: 0.005, previgente: 0.006 },
  { giorni: 7, nuovo: 0.005833, previgente: 0.007 },
  { giorni: 8, nuovo: 0.006667, previgente: 0.008 },
  { giorni: 9, nuovo: 0.0075, previgente: 0.009 },
  { giorni: 10, nuovo: 0.008333, previgente: 0.01 },
  { giorni: 11, nuovo: 0.009167, previgente: 0.011 },
  { giorni: 12, nuovo: 0.01, previgente: 0.012 },
  { giorni: 13, nuovo: 0.010833, previgente: 0.013 },
  { giorni: 14, nuovo: 0.011667, previgente: 0.014 },
];

// ──────────────────────────────────────────────────────────────
// Codici tributo F24 per il ravvedimento
// ──────────────────────────────────────────────────────────────

export const CODICI_TRIBUTO_RAVVEDIMENTO: CodiceTributoRavvedimento[] = [
  {
    id: "irpef-saldo",
    imposta: "IRPEF saldo",
    codiceImposta: "4001",
    codiceSanzione: "8901",
    codiceInteressi: "1989",
    sezione: "Erario",
    rateizzabile: true,
  },
  {
    id: "irpef-acconto-1",
    imposta: "IRPEF acconto 1ª rata",
    codiceImposta: "4033",
    codiceSanzione: "8901",
    codiceInteressi: "1989",
    sezione: "Erario",
  },
  {
    id: "irpef-acconto-2",
    imposta: "IRPEF acconto 2ª rata",
    codiceImposta: "4034",
    codiceSanzione: "8901",
    codiceInteressi: "1989",
    sezione: "Erario",
  },
  {
    id: "ires-saldo",
    imposta: "IRES saldo",
    codiceImposta: "2003",
    codiceSanzione: "8918",
    codiceInteressi: "1990",
    sezione: "Erario",
  },
  {
    id: "ires-acconto-1",
    imposta: "IRES acconto 1ª rata",
    codiceImposta: "2001",
    codiceSanzione: "8918",
    codiceInteressi: "1990",
    sezione: "Erario",
  },
  {
    id: "ires-acconto-2",
    imposta: "IRES acconto 2ª rata",
    codiceImposta: "2002",
    codiceSanzione: "8918",
    codiceInteressi: "1990",
    sezione: "Erario",
  },
  {
    id: "irap-saldo",
    imposta: "IRAP saldo",
    codiceImposta: "3800",
    codiceSanzione: "8907",
    codiceInteressi: "1993",
    sezione: "Regioni",
  },
  {
    id: "irap-acconto-1",
    imposta: "IRAP acconto 1ª rata",
    codiceImposta: "3812",
    codiceSanzione: "8907",
    codiceInteressi: "1993",
    sezione: "Regioni",
  },
  {
    id: "iva-mensile",
    imposta: "IVA mensile (gen-dic)",
    codiceImposta: "6001-6012",
    codiceSanzione: "8904",
    codiceInteressi: "1991",
    sezione: "Erario",
  },
  {
    id: "iva-trimestrale",
    imposta: "IVA trimestrale (1°-4° trimestre)",
    codiceImposta: "6031-6034",
    codiceSanzione: "8904",
    codiceInteressi: "1991",
    sezione: "Erario",
  },
  {
    id: "iva-annuale",
    imposta: "IVA saldo annuale",
    codiceImposta: "6099",
    codiceSanzione: "8904",
    codiceInteressi: "1991",
    sezione: "Erario",
    rateizzabile: true,
  },
  {
    id: "ritenute-dipendente",
    imposta: "Ritenute lavoro dipendente",
    codiceImposta: "1001",
    codiceSanzione: "8906",
    codiceInteressi: "1982",
    sezione: "Erario",
  },
  {
    id: "ritenute-autonomo",
    imposta: "Ritenute lavoro autonomo (20%)",
    codiceImposta: "1040",
    codiceSanzione: "8906",
    codiceInteressi: "1982",
    sezione: "Erario",
  },
  {
    id: "cedolare-saldo",
    imposta: "Cedolare secca saldo",
    codiceImposta: "1842",
    codiceSanzione: "8913",
    codiceInteressi: "1992",
    sezione: "Erario",
  },
  {
    id: "cedolare-acconto-1",
    imposta: "Cedolare secca acconto 1ª",
    codiceImposta: "1840",
    codiceSanzione: "8913",
    codiceInteressi: "1992",
    sezione: "Erario",
  },
  {
    id: "cedolare-acconto-2",
    imposta: "Cedolare secca acconto 2ª",
    codiceImposta: "1841",
    codiceSanzione: "8913",
    codiceInteressi: "1992",
    sezione: "Erario",
  },
  {
    id: "forfettario-saldo",
    imposta: "Imposta sostitutiva forfettario - saldo",
    codiceImposta: "1792",
    codiceSanzione: "8944",
    codiceInteressi: "1944",
    sezione: "Erario",
  },
  {
    id: "forfettario-acconto-1",
    imposta: "Imposta sostitutiva forfettario - acc. 1ª",
    codiceImposta: "1790",
    codiceSanzione: "8944",
    codiceInteressi: "1944",
    sezione: "Erario",
  },
  {
    id: "forfettario-acconto-2",
    imposta: "Imposta sostitutiva forfettario - acc. 2ª",
    codiceImposta: "1791",
    codiceSanzione: "8944",
    codiceInteressi: "1944",
    sezione: "Erario",
  },
  {
    id: "imu-abitazione",
    imposta: "IMU abitazione principale (cat. A/1, A/8, A/9)",
    codiceImposta: "3912",
    codiceSanzione: "3923",
    codiceInteressi: "3924",
    sezione: "IMU",
  },
  {
    id: "imu-altri-fabbricati",
    imposta: "IMU altri fabbricati",
    codiceImposta: "3918",
    codiceSanzione: "3923",
    codiceInteressi: "3924",
    sezione: "IMU",
  },
  {
    id: "imu-aree-fabbricabili",
    imposta: "IMU aree fabbricabili",
    codiceImposta: "3916",
    codiceSanzione: "3923",
    codiceInteressi: "3924",
    sezione: "IMU",
  },
  {
    id: "imu-terreni",
    imposta: "IMU terreni agricoli",
    codiceImposta: "3914",
    codiceSanzione: "3923",
    codiceInteressi: "3924",
    sezione: "IMU",
  },
];

// ──────────────────────────────────────────────────────────────
// Logica di calcolo
// ──────────────────────────────────────────────────────────────

const CUTOFF_RIFORMA = new Date("2024-09-01");

function arrotonda(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * Calcola il numero di giorni tra due date (la data di scadenza esclusa,
 * la data di versamento inclusa). Un versamento il giorno successivo alla
 * scadenza è 1 giorno di ritardo.
 */
function giorniTra(scadenza: Date, versamento: Date): number {
  const ms = versamento.getTime() - scadenza.getTime();
  return Math.max(0, Math.round(ms / (1000 * 60 * 60 * 24)));
}

/** Calcola gli interessi pro-rata anno applicando il tasso vigente di ciascun anno. */
function calcolaInteressiProRata(
  imposta: number,
  scadenza: Date,
  versamento: Date,
): { totale: number; breakdown: BreakdownInteressi[] } {
  const breakdown: BreakdownInteressi[] = [];
  let totale = 0;

  // Inizio: giorno successivo alla scadenza
  const inizio = new Date(scadenza);
  inizio.setDate(inizio.getDate() + 1);

  if (inizio >= versamento) {
    return { totale: 0, breakdown };
  }

  let cursore = new Date(inizio);
  while (cursore < versamento) {
    const anno = cursore.getFullYear();
    const fineAnno = new Date(anno, 11, 31, 23, 59, 59);
    const finePeriodo = fineAnno < versamento ? fineAnno : versamento;

    const giorni =
      Math.round(
        (finePeriodo.getTime() - cursore.getTime()) / (1000 * 60 * 60 * 24),
      ) + (finePeriodo === versamento ? 0 : 1);

    const tasso = tassiMap[anno] ?? 0.016;
    const importo = (imposta * tasso * giorni) / 36500;

    breakdown.push({
      periodo: `${cursore.toLocaleDateString("it-IT")} → ${finePeriodo.toLocaleDateString("it-IT")}`,
      giorni,
      tasso,
      importo: arrotonda(importo),
    });
    totale += importo;

    cursore = new Date(anno + 1, 0, 1);
  }

  return { totale: arrotonda(totale), breakdown };
}

export function calcolaRavvedimento(input: InputRavvedimento): RisultatoRavvedimento {
  const { tipoTributoId, imposta, dataScadenza, dataVersamento } = input;

  const giorniRitardo = giorniTra(dataScadenza, dataVersamento);
  const isPostReform = dataScadenza >= CUTOFF_RIFORMA;
  const regime: RegimeRavvedimento = isPostReform ? "nuovo" : "previgente";

  const sanzioneEdittale = isPostReform ? 0.25 : 0.30;
  const sanzioneBaseRidotta = isPostReform ? 0.125 : 0.15;

  let sanzionePerc = 0;
  let tier: TierRavvedimento = "sprint";
  let tierLabel = "";
  let riduzioneFrazione = "";

  if (giorniRitardo === 0) {
    return {
      giorniRitardo: 0,
      regime,
      tier: "sprint",
      tierLabel: "Nessun ritardo",
      sanzioneEdittale,
      sanzionePerc: 0,
      sanzione: 0,
      interessiTotali: 0,
      interessiBreakdown: [],
      imposta,
      totale: imposta,
      codici: CODICI_TRIBUTO_RAVVEDIMENTO.find((c) => c.id === tipoTributoId) ?? null,
      riduzioneFrazione: "—",
    };
  }

  if (giorniRitardo <= 14) {
    sanzionePerc = (sanzioneBaseRidotta / 150) * giorniRitardo;
    tier = "sprint";
    tierLabel = "Ravvedimento sprint";
    riduzioneFrazione = `1/15 × giorni × 1/10 di ${(sanzioneBaseRidotta * 100).toFixed(1)}%`;
  } else if (giorniRitardo <= 30) {
    sanzionePerc = sanzioneBaseRidotta / 10;
    tier = "breve";
    tierLabel = "Ravvedimento breve";
    riduzioneFrazione = `1/10 di ${(sanzioneBaseRidotta * 100).toFixed(1)}%`;
  } else if (giorniRitardo <= 90) {
    sanzionePerc = sanzioneBaseRidotta / 9;
    tier = "intermedio";
    tierLabel = "Ravvedimento intermedio";
    riduzioneFrazione = `1/9 di ${(sanzioneBaseRidotta * 100).toFixed(1)}%`;
  } else if (giorniRitardo <= 365) {
    sanzionePerc = sanzioneEdittale / 8;
    tier = "lungo";
    tierLabel = "Ravvedimento lungo";
    riduzioneFrazione = `1/8 di ${(sanzioneEdittale * 100).toFixed(0)}%`;
  } else if (isPostReform || giorniRitardo <= 730) {
    sanzionePerc = sanzioneEdittale / 7;
    tier = "ultrannuale";
    tierLabel = "Ravvedimento ultrannuale";
    riduzioneFrazione = `1/7 di ${(sanzioneEdittale * 100).toFixed(0)}%`;
  } else {
    sanzionePerc = sanzioneEdittale / 6;
    tier = "lunghissimo";
    tierLabel = "Ravvedimento lunghissimo";
    riduzioneFrazione = `1/6 di ${(sanzioneEdittale * 100).toFixed(0)}%`;
  }

  const sanzione = imposta * sanzionePerc;
  const { totale: interessiTotali, breakdown: interessiBreakdown } = calcolaInteressiProRata(
    imposta,
    dataScadenza,
    dataVersamento,
  );
  const codici = CODICI_TRIBUTO_RAVVEDIMENTO.find((c) => c.id === tipoTributoId) ?? null;

  return {
    giorniRitardo,
    regime,
    tier,
    tierLabel,
    sanzioneEdittale,
    sanzionePerc,
    sanzione: arrotonda(sanzione),
    interessiTotali,
    interessiBreakdown,
    imposta: arrotonda(imposta),
    totale: arrotonda(imposta + sanzione + interessiTotali),
    codici,
    riduzioneFrazione,
  };
}

// ──────────────────────────────────────────────────────────────
// Esempi pratici (per la sezione "Esempi")
// ──────────────────────────────────────────────────────────────

export interface EsempioRavvedimento {
  titolo: string;
  descrizione: string;
  imposta: number;
  scadenza: string;
  versamento: string;
  giorniRitardo: number;
  regime: string;
  tier: string;
  formula: string;
  sanzione: number;
  interessi: number;
  totale: number;
}

export const ESEMPI_RAVVEDIMENTO: EsempioRavvedimento[] = [
  {
    titolo: "Esempio 1 — Ravvedimento sprint IVA (regime nuovo)",
    descrizione:
      "Soggetto IVA trimestrale versa con 8 giorni di ritardo nel 2025.",
    imposta: 1500,
    scadenza: "15/01/2025",
    versamento: "23/01/2025",
    giorniRitardo: 8,
    regime: "Nuovo (post 1/9/2024)",
    tier: "Sprint (1-14 giorni)",
    formula: "1.500 × 0,0833% × 8 = 9,996 €",
    sanzione: 10.0,
    interessi: 0.66,
    totale: 1510.66,
  },
  {
    titolo: "Esempio 2 — Ravvedimento breve IVA (regime nuovo)",
    descrizione:
      "Omesso versamento IVA mensile con 25 giorni di ritardo (violazione post-1/9/2024).",
    imposta: 5000,
    scadenza: "30/09/2024",
    versamento: "25/10/2024",
    giorniRitardo: 25,
    regime: "Nuovo (post 1/9/2024)",
    tier: "Breve (15-30 giorni)",
    formula: "5.000 × 1,25% = 62,50 €",
    sanzione: 62.5,
    interessi: 8.56,
    totale: 5071.06,
  },
  {
    titolo: "Esempio 3 — Cross-year IRPEF (split tasso 2025/2026)",
    descrizione:
      "Saldo IRPEF non versato al 30/11/2024, ravvedimento il 20/06/2026 (567 giorni — ultrannuale).",
    imposta: 3000,
    scadenza: "30/11/2024",
    versamento: "20/06/2026",
    giorniRitardo: 567,
    regime: "Nuovo (post 1/9/2024)",
    tier: "Ultrannuale (oltre 1 anno)",
    formula: "3.000 × 1/7 × 25% = 107,14 €",
    sanzione: 107.14,
    interessi: 88.86,
    totale: 3196.0,
  },
  {
    titolo: "Esempio 4 — Ravvedimento ultrannuale IRES (regime previgente)",
    descrizione:
      "Saldo IRES omesso al 30/06/2023, ravvedimento il 31/08/2024 (regime pre-riforma).",
    imposta: 10000,
    scadenza: "30/06/2023",
    versamento: "31/08/2024",
    giorniRitardo: 428,
    regime: "Previgente (fino al 31/8/2024)",
    tier: "Ultrannuale (entro dichiarazione successiva)",
    formula: "10.000 × 1/7 × 30% = 428,57 €",
    sanzione: 428.57,
    interessi: 419.17,
    totale: 10847.74,
  },
];

// ──────────────────────────────────────────────────────────────
// Errori comuni
// ──────────────────────────────────────────────────────────────

export interface ErroreComune {
  titolo: string;
  descrizione: string;
}

export const ERRORI_COMUNI: ErroreComune[] = [
  {
    titolo: "F24 senza separazione delle tre voci",
    descrizione:
      "Imposta, sanzione e interessi devono essere indicati con tre codici tributo distinti nello stesso F24, non cumulati su un unico codice. La separazione è prescritta dall'art. 13, c. 1-bis del D.Lgs. 472/1997.",
  },
  {
    titolo: "Codici tributo errati o obsoleti",
    descrizione:
      "Usare il codice del versamento ordinario per la sanzione (es. 4001 al posto di 8901 per IRPEF) impedisce il riconoscimento del ravvedimento. Verificare sempre i codici sull'elenco ufficiale dell'Agenzia delle Entrate.",
  },
  {
    titolo: "Mancato calcolo pro-rata degli interessi cross-year",
    descrizione:
      "Quando il ritardo attraversa il 1° gennaio si devono applicare i tassi vigenti in ciascun anno (es. 2,00% per i giorni 2025 + 1,60% per i giorni 2026). Usare un tasso unico produce un calcolo errato.",
  },
  {
    titolo: "Confusione tra dichiarazione tardiva e omessa",
    descrizione:
      "Dichiarazione tardiva = entro 90 giorni dalla scadenza, ravvedibile con sanzione 1/10 del minimo. Oltre 90 giorni la dichiarazione è omessa: non è più ravvedibile nella sua componente dichiarativa, restano sanzioni del 120% (o 75% entro termine accertamento).",
  },
  {
    titolo: "Tentativo di ravvedimento dopo avviso bonario",
    descrizione:
      "Una volta ricevuto l'avviso bonario per una violazione, il ravvedimento è precluso per quella specifica violazione. Resta possibile la definizione agevolata dell'avviso (sanzione ridotta a 1/3 = 10%).",
  },
  {
    titolo: "Ravvedimento sui contributi INPS",
    descrizione:
      "I contributi previdenziali (Gestione Separata, IVS, contributi obbligatori) NON sono ravvedibili ex art. 13 D.Lgs. 472/1997. Esiste un regime parallelo INPS di autodenuncia con riduzione delle sanzioni civili.",
  },
  {
    titolo: "Pagamento in date distinte",
    descrizione:
      "Il ravvedimento richiede il pagamento contestuale delle tre voci (imposta + sanzione + interessi). Pagare la sanzione il giorno successivo all'imposta espone al rischio di contestazioni. Usare un unico modello F24, una sola operazione.",
  },
];

// ──────────────────────────────────────────────────────────────
// Normativa di riferimento
// ──────────────────────────────────────────────────────────────

export const normativaRiferimento: NormativaRiferimento[] = [
  {
    norma: "Art. 13 D.Lgs. 18 dicembre 1997, n. 472",
    descrizione:
      "Disciplina del ravvedimento operoso: presupposti, riduzioni sanzionatorie, cause ostative, ravvedimento parziale (art. 13-bis).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art13",
  },
  {
    norma: "Art. 13 D.Lgs. 18 dicembre 1997, n. 471",
    descrizione:
      "Sanzioni amministrative per omessi e tardivi versamenti: base 25% (post 1/9/2024) o 30% (pre), ridotta del 50% per ritardi entro 90 giorni e ulteriormente ridotta a 1/15 per giorno entro 14 giorni.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;471~art13",
  },
  {
    norma: "Art. 12 D.Lgs. 472/1997",
    descrizione:
      "Cumulo giuridico delle sanzioni: dal D.Lgs. 87/2024 esteso al ravvedimento operoso, escluso per omessi versamenti e indebite compensazioni.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art12",
  },
  {
    norma: "Art. 15 D.Lgs. 471/1997",
    descrizione:
      "Sanzione per omessa presentazione del modello F24 a saldo zero: € 100 (€ 50 se entro 5 giorni). Riducibile in ravvedimento operoso.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;471~art15",
  },
  {
    norma: "D.Lgs. 14 giugno 2024, n. 87 (Decreto Sanzioni)",
    descrizione:
      "Riforma del sistema sanzionatorio tributario: applicabile alle violazioni commesse dal 1° settembre 2024. Riduce la sanzione base dal 30% al 25% e introduce nuove riduzioni procedurali (1/6, 1/5, 1/4) coordinate con il contraddittorio preventivo.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87",
  },
  {
    norma: "D.Lgs. 24 settembre 2015, n. 158",
    descrizione:
      "Riforma delle sanzioni tributarie 2015: introduzione della riduzione al 50% per ritardi entro 90 giorni e ampliamento dei termini del ravvedimento.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2015-09-24;158",
  },
  {
    norma: "Legge 29 dicembre 1990, n. 408 — Art. 14",
    descrizione:
      "Prima introduzione dell'istituto del ravvedimento operoso nell'ordinamento tributario italiano (poi superato dal D.Lgs. 472/1997).",
    url: "https://www.gazzettaufficiale.it/eli/id/1990/12/31/090G0498/sg",
  },
  {
    norma: "Art. 1284 Codice Civile",
    descrizione:
      "Saggio degli interessi legali: determinato annualmente con decreto MEF entro il 15 dicembre. Per il 2026 fissato al 1,60%.",
    url: "https://www.brocardi.it/codice-civile/libro-quarto/titolo-i/capo-vii/sezione-i/art1284.html",
  },
  {
    norma: "D.M. 10 dicembre 2025 — MEF",
    descrizione:
      "Decreto del Ministro dell'Economia e delle Finanze che fissa il saggio degli interessi legali al 1,60% annuo dal 1° gennaio 2026 (G.U. n. 289 del 13 dicembre 2025).",
    url: "https://www.gazzettaufficiale.it/eli/id/2025/12/13/25A06705/sg",
  },
  {
    norma: "Art. 6-bis L. 27 luglio 2000, n. 212 (Statuto del Contribuente)",
    descrizione:
      "Contraddittorio preventivo generalizzato sugli atti autonomamente impugnabili. La comunicazione dello schema d'atto NON è più causa ostativa al ravvedimento (post D.Lgs. 87/2024).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2000-07-27;212",
  },
  {
    norma: "Artt. 36-bis e 36-ter DPR 29 settembre 1973, n. 600",
    descrizione:
      "Avviso bonario da controllo automatizzato (36-bis) e formale (36-ter) delle dichiarazioni: la notifica costituisce causa ostativa al ravvedimento per le violazioni rilevate.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600",
  },
  {
    norma: "Art. 54-bis DPR 26 ottobre 1972, n. 633",
    descrizione:
      "Avviso bonario IVA da controllo automatizzato. Causa ostativa al ravvedimento sulle violazioni IVA comunicate.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633",
  },
  {
    norma: "D.Lgs. 19 giugno 1997, n. 218",
    descrizione:
      "Accertamento con adesione e acquiescenza. Istituti deflattivi alternativi al ravvedimento dopo notifica di atti accertativi.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-06-19;218",
  },
];

// ──────────────────────────────────────────────────────────────
// Circolari ministeriali
// ──────────────────────────────────────────────────────────────

export const circolariMinisteriali: CircolareMinisteriale[] = [
  {
    circolare: "Circ. Agenzia Entrate n. 180/E del 10 luglio 1998",
    descrizione:
      "Definisce la nozione di «constatazione» della violazione come causa ostativa: richiede la formale notifica al contribuente.",
    url: "https://def.finanze.it/DocTribFrontend/RegistrazioneAttiServlet?annoTesto=1998&numeroTesto=180&tipoTesto=CIR",
  },
  {
    circolare: "Circ. Agenzia Entrate n. 27/E del 2 agosto 2013",
    descrizione:
      "Versamento entro 30 giorni e maggiorazione 0,40%: chiarimenti sul perfezionamento del ravvedimento e sulle modalità di calcolo.",
    url: "https://www.agenziaentrate.gov.it/portale/web/guest/normativa-e-prassi/circolari",
  },
  {
    circolare: "Circ. Agenzia Entrate n. 6/E del 19 febbraio 2015",
    descrizione:
      "Modifiche da Legge di Stabilità 2015: ampliamento del ravvedimento operoso a due anni, introduzione delle nuove fasce 1/9 e 1/7.",
    url: "https://www.agenziaentrate.gov.it/portale/web/guest/normativa-e-prassi/circolari",
  },
  {
    circolare: "Circ. Agenzia Entrate n. 12/E del 2024",
    descrizione:
      "Estensione del ravvedimento operoso alla Certificazione Unica (CU): possibilità di sanare errori e omissioni con sanzioni ridotte.",
    url: "https://www.agenziaentrate.gov.it/portale/web/guest/normativa-e-prassi/circolari",
  },
  {
    circolare: "Circ. Agenzia Entrate n. 54/E del 19 giugno 2002",
    descrizione:
      "Regolarizzazione del modello F24 a saldo zero non presentato: sanzioni ridotte e modalità procedurali per il ravvedimento.",
    url: "https://www.agenziaentrate.gov.it/portale/web/guest/normativa-e-prassi/circolari",
  },
  {
    circolare: "Risposta Interpello Agenzia Entrate n. 297 del 18 aprile 2023",
    descrizione:
      "F24 a zero presentato tardivamente: la presentazione retroattiva convalida la compensazione orizzontale.",
    url: "https://www.agenziaentrate.gov.it/portale/web/guest/risposte-interpello",
  },
  {
    circolare: "Cassazione Sez. Trib. ordinanza n. 17521 del 30 giugno 2025",
    descrizione:
      "La constatazione della violazione costituisce causa ostativa al ravvedimento solo se notificata formalmente al contribuente. Conferma indirizzo della Circolare 180/E/1998.",
    url: "https://ntplusdiritto.ilsole24ore.com/art/ravvedimento-operoso-no-ripetibilita-somme-versate-titolo-sanzioni-AIbRNtqB",
  },
];

// ──────────────────────────────────────────────────────────────
// Sezioni (sidebar nav) — ORDINE = ordine pagina
// ──────────────────────────────────────────────────────────────

export const sections: ToolSection[] = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "cose-ravvedimento", label: "Cos'è il ravvedimento" },
  { id: "evoluzione-storica", label: "Evoluzione storica" },
  { id: "come-si-calcola", label: "Come si calcola" },
  { id: "sanzioni-2026", label: "Sanzioni 2026 (post riforma)" },
  { id: "sanzioni-previgenti", label: "Sanzioni regime previgente" },
  { id: "ravvedimento-sprint", label: "Ravvedimento sprint" },
  { id: "tasso-legale", label: "Tasso interesse legale" },
  { id: "tipi-ravvedimento", label: "Tipi di ravvedimento" },
  { id: "ravvedimento-imposta", label: "Per imposta" },
  { id: "codici-tributo", label: "Codici tributo F24" },
  { id: "cause-ostative", label: "Cause ostative" },
  { id: "cumulo-giuridico", label: "Cumulo giuridico" },
  { id: "f24-saldo-zero", label: "F24 saldo zero" },
  { id: "dichiarazione-tardiva", label: "Dichiarazione tardiva" },
  { id: "esempi-pratici", label: "Esempi pratici" },
  { id: "errori-comuni", label: "Errori comuni" },
  { id: "altri-istituti", label: "Altri istituti deflattivi" },
  { id: "fonti", label: "Fonti e Riferimenti" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];
