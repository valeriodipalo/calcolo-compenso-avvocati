// Dati per il calcolo del risarcimento INAIL
// Fonti: T.U. 1124/1965, D.Lgs. 38/2000, D.M. 12/07/2000, D.M. 45/2019, D.M. 85/2025, Circ. INAIL 37/2025 e 45/2025

import type { NormativaRiferimento, CircolareMinisteriale } from "@/types/tool";

// ============================================================
// Sezioni sidebar
// ============================================================
export const sections = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "soglie", label: "Le 3 soglie di invalidità" },
  { id: "inabilita-temporanea", label: "Inabilità temporanea" },
  { id: "indennizzo-capitale", label: "Indennizzo in capitale (6-15%)" },
  { id: "indennizzo-rendita", label: "Indennizzo in rendita (16-100%)" },
  { id: "tabella-coefficienti", label: "Tabella coefficienti" },
  { id: "quota-integrativa", label: "Quote integrative familiari" },
  { id: "tabella-menomazioni", label: "Tabella menomazioni" },
  { id: "punti-comuni", label: "Quanti soldi per N punti" },
  { id: "rivalutazione-2026", label: "Rivalutazione 2026" },
  { id: "prestazioni-accessorie", label: "Prestazioni accessorie" },
  { id: "danno-differenziale", label: "Danno differenziale" },
  { id: "casi-particolari", label: "Casi particolari" },
  { id: "procedura", label: "Procedura e tempi" },
  { id: "tassazione", label: "Tassazione" },
  { id: "fonti", label: "Fonti e Riferimenti" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];

// ============================================================
// Normativa di riferimento
// ============================================================
export const normativaRiferimento: NormativaRiferimento[] = [
  {
    norma: "D.P.R. 30 giugno 1965, n. 1124 (T.U. INAIL)",
    descrizione:
      "Testo Unico delle disposizioni per l'assicurazione obbligatoria contro gli infortuni sul lavoro e le malattie professionali. Artt. 2 (definizione infortunio), 10 (danno differenziale), 13 (retribuzione), 39 (capitalizzazione rendite), 66 (prestazioni), 68 (indennità temporanea), 77 (quote integrative), 91 (revisione).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1965-06-30;1124",
  },
  {
    norma: "D.Lgs. 23 febbraio 2000, n. 38",
    descrizione:
      "Riforma dell'assicurazione INAIL: introduzione del danno biologico (art. 13), rivalutazione annuale automatica delle rendite (art. 11), infortunio in itinere (art. 12).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38",
  },
  {
    norma: "D.M. 12 luglio 2000",
    descrizione:
      "Approvazione delle tabelle danno biologico: tabella delle menomazioni (allegato 4, circa 400 voci), tabella indennizzo in capitale (allegato 5), tabella dei coefficienti per la quota patrimoniale (allegato 6).",
    url: "https://www.gazzettaufficiale.it/eli/id/2000/07/25/000A9926/sg",
  },
  {
    norma: "D.M. 23 aprile 2019, n. 45",
    descrizione:
      "Nuova tabella unisex di indennizzo del danno biologico in capitale (6-15%), in vigore per eventi dal 1° gennaio 2019. Aumenti mediamente +40% rispetto alle tabelle precedenti. Punto INAIL base 2019: € 1.430,68.",
    url: "https://www.lavoro.gov.it/documenti-e-norme/normative/Documents/2019/DM-45-del-23042019",
  },
  {
    norma: "D.M. 27 marzo 2009",
    descrizione:
      "Aumento straordinario dell'8,68% degli indennizzi per danno biologico (capitale e rendita), in attesa del meccanismo di rivalutazione automatica.",
    url: "https://www.lavoro.gov.it/documenti-e-norme/normative/Documents/2009/20090327_DI.pdf",
  },
  {
    norma: "D.M. 14 febbraio 2014",
    descrizione:
      "Aumento straordinario del 7,57% degli indennizzi per danno biologico (capitale e rendita), cumulativo rispetto al D.M. 2009.",
    url: "https://www.normattiva.it",
  },
  {
    norma: "D.M. 20 giugno 2025, n. 85",
    descrizione:
      "Rivalutazione annuale dello 0,8% degli indennizzi del danno biologico (capitale e quota biologica della rendita), con decorrenza 1° luglio 2025, sulla base della variazione media annua dell'indice ISTAT FOI 2023-2024.",
    url: "https://www.lavoro.gov.it/media/90764",
  },
  {
    norma: "Legge 30 dicembre 2018, n. 145 (Legge di Bilancio 2019), art. 1 cc. 1121-1126",
    descrizione:
      "Base legislativa del D.M. 45/2019: nuova tabella unisex con incremento medio +40%.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2018-12-30;145",
  },
  {
    norma: "Legge 28 dicembre 2015, n. 208, art. 1 c. 303",
    descrizione:
      "Introduzione del meccanismo di rivalutazione automatica annuale (dal 1° luglio di ogni anno) degli indennizzi del danno biologico, sulla base dell'indice ISTAT FOI.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2015-12-28;208",
  },
  {
    norma: "Legge 3 dicembre 1999, n. 493",
    descrizione:
      "Istituzione dell'assicurazione obbligatoria INAIL contro gli infortuni in ambito domestico, per chi svolge in via esclusiva attività di lavoro domestico tra 18 e 67 anni.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1999-12-03;493",
  },
  {
    norma: "D.P.R. 29 settembre 1973, n. 601, art. 6",
    descrizione:
      "Esenzione IRPEF delle rendite INAIL per inabilità permanente, per morte e prestazioni accessorie (APC, assegno funerario, assegno incollocabilità).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;601~art6",
  },
];

// ============================================================
// Circolari INAIL
// ============================================================
export const circolariMinisteriali: CircolareMinisteriale[] = [
  {
    circolare: "Circ. INAIL n. 57 del 4 agosto 2000",
    descrizione:
      "Prima circolare attuativa del sistema danno biologico (D.Lgs. 38/2000): introduzione del concetto di Punto INAIL, criteri di applicazione delle tre tabelle.",
    url: "https://www.inail.it",
  },
  {
    circolare: "Circ. INAIL n. 37 del 31 marzo 2009",
    descrizione: "Attuazione dell'aumento straordinario +8,68% del D.M. 27 marzo 2009.",
    url: "https://www.inail.it",
  },
  {
    circolare: "Circ. INAIL n. 26 del 9 maggio 2014",
    descrizione: "Attuazione dell'aumento straordinario +7,57% del D.M. 14 febbraio 2014.",
    url: "https://www.inail.it",
  },
  {
    circolare: "Circ. INAIL n. 27 dell'11 ottobre 2019",
    descrizione:
      "Decorrenza e ambito di applicazione della nuova tabella unisex DM 45/2019 (eventi e malattie professionali denunciate dal 1° gennaio 2019).",
    url: "https://www.inail.it",
  },
  {
    circolare: "Circ. INAIL n. 37 del 20 giugno 2025",
    descrizione:
      "Rivalutazione 2025 delle prestazioni economiche INAIL: retribuzioni di riferimento (minimale € 20.426,70, massimale € 37.935,30), APC (€ 672,72/mese), assegno funerario (€ 12.342,84), assegni continuativi, infortuni domestici (€ 395,00).",
    url: "https://www.inail.it",
  },
  {
    circolare: "Circ. INAIL n. 45 del 1° agosto 2025",
    descrizione:
      "Rivalutazione +0,8% degli indennizzi per danno biologico (capitale e quota biologica della rendita), in attuazione del D.M. 85/2025, con decorrenza 1° luglio 2025.",
    url: "https://www.inail.it",
  },
  {
    circolare: "Circ. INAIL n. 46 dell'8 settembre 2025",
    descrizione:
      "Revisione dei coefficienti di capitalizzazione delle rendite INAIL (art. 39 T.U. 1124/1965), utili per il calcolo del danno differenziale.",
    url: "https://www.inail.it",
  },
  {
    circolare: "Circ. INAIL n. 55 dell'11 dicembre 2025",
    descrizione:
      "Estensione dell'età di fruizione dell'assegno di incollocabilità da 65 a 67 anni, con decorrenza 1° gennaio 2026.",
    url: "https://www.inail.it",
  },
];

// ============================================================
// Tipi
// ============================================================
export interface FasciaEta {
  id: string;
  label: string;
  etaMin: number;
  etaMax: number;
}

export type CodiceFascia =
  | "fino20"
  | "21-25"
  | "26-30"
  | "31-35"
  | "36-40"
  | "41-45"
  | "46-50"
  | "51-55"
  | "56-60"
  | "61-65"
  | "66+";

export const fasceEta: FasciaEta[] = [
  { id: "fino20", label: "Fino a 20 anni", etaMin: 0, etaMax: 20 },
  { id: "21-25", label: "Da 21 a 25 anni", etaMin: 21, etaMax: 25 },
  { id: "26-30", label: "Da 26 a 30 anni", etaMin: 26, etaMax: 30 },
  { id: "31-35", label: "Da 31 a 35 anni", etaMin: 31, etaMax: 35 },
  { id: "36-40", label: "Da 36 a 40 anni", etaMin: 36, etaMax: 40 },
  { id: "41-45", label: "Da 41 a 45 anni", etaMin: 41, etaMax: 45 },
  { id: "46-50", label: "Da 46 a 50 anni", etaMin: 46, etaMax: 50 },
  { id: "51-55", label: "Da 51 a 55 anni", etaMin: 51, etaMax: 55 },
  { id: "56-60", label: "Da 56 a 60 anni", etaMin: 56, etaMax: 60 },
  { id: "61-65", label: "Da 61 a 65 anni", etaMin: 61, etaMax: 65 },
  { id: "66+", label: "66 anni e oltre", etaMin: 66, etaMax: 120 },
];

export function getFasciaFromEta(eta: number): CodiceFascia {
  if (eta <= 20) return "fino20";
  if (eta <= 25) return "21-25";
  if (eta <= 30) return "26-30";
  if (eta <= 35) return "31-35";
  if (eta <= 40) return "36-40";
  if (eta <= 45) return "41-45";
  if (eta <= 50) return "46-50";
  if (eta <= 55) return "51-55";
  if (eta <= 60) return "56-60";
  if (eta <= 65) return "61-65";
  return "66+";
}

// ============================================================
// Tabella indennizzo in capitale UOMINI 6-15% (eventi 2014-2018)
// Fonte: DM 12/07/2000 + rivalutazione 2009 (+8,68%) + 2014 (+7,57%)
// Valori finali in euro (post DM 14 febbraio 2014)
// ============================================================
export const tabellaCapitaleUomini: Record<CodiceFascia, Record<number, number>> = {
  "fino20": {
    6: 5796.23, 7: 7184.95, 8: 8694.33, 9: 10324.57, 10: 12075.45,
    11: 14611.41, 12: 17388.76, 13: 20407.61, 14: 23667.98, 15: 27169.85,
  },
  "21-25": {
    6: 5506.42, 7: 6825.70, 8: 8259.61, 9: 9808.34, 10: 11471.68,
    11: 13880.83, 12: 16519.32, 13: 19387.24, 14: 22484.57, 15: 25811.35,
  },
  "26-30": {
    6: 5216.60, 7: 6466.45, 8: 7824.89, 9: 9292.11, 10: 10867.90,
    11: 13150.27, 12: 15649.88, 13: 18366.85, 14: 21301.18, 15: 24452.87,
  },
  "31-35": {
    6: 4926.79, 7: 6107.20, 8: 7390.19, 9: 8775.89, 10: 10264.14,
    11: 12419.69, 12: 14780.44, 13: 17346.47, 14: 20117.78, 15: 23094.37,
  },
  "36-40": {
    6: 4636.98, 7: 5747.96, 8: 6955.47, 9: 8259.65, 10: 9660.36,
    11: 11689.13, 12: 13911.01, 13: 16326.10, 14: 18934.39, 15: 21735.88,
  },
  "41-45": {
    6: 4347.18, 7: 5388.71, 8: 6520.75, 9: 7743.42, 10: 9056.59,
    11: 10958.55, 12: 13041.57, 13: 15305.71, 14: 17750.98, 15: 20377.38,
  },
  "46-50": {
    6: 4057.37, 7: 5029.46, 8: 6086.03, 9: 7227.20, 10: 8452.81,
    11: 10227.99, 12: 12172.13, 13: 14285.33, 14: 16567.58, 15: 19018.90,
  },
  "51-55": {
    6: 3767.55, 7: 4670.22, 8: 5651.31, 9: 6710.97, 10: 7849.05,
    11: 9497.41, 12: 11302.69, 13: 13264.95, 14: 15384.19, 15: 17660.40,
  },
  "56-60": {
    6: 3477.74, 7: 4310.97, 8: 5216.60, 9: 6194.74, 10: 7245.27,
    11: 8766.85, 12: 10433.26, 13: 12244.57, 14: 14200.78, 15: 16301.91,
  },
  "61-65": {
    6: 3187.93, 7: 3951.72, 8: 4781.89, 9: 5678.52, 10: 6641.50,
    11: 8036.27, 12: 9563.82, 13: 11224.19, 14: 13017.39, 15: 14943.41,
  },
  "66+": {
    6: 2898.11, 7: 3592.47, 8: 4347.17, 9: 5162.29, 10: 6037.72,
    11: 7305.71, 12: 8694.38, 13: 10203.81, 14: 11833.99, 15: 13584.93,
  },
};

// ============================================================
// Tabella indennizzo in capitale DONNE 6-15% (eventi 2014-2018)
// Fonte: DM 12/07/2000 + 2009 +8,68% + 2014 +7,57%
// ============================================================
export const tabellaCapitaleDonne: Record<CodiceFascia, Record<number, number>> = {
  "fino20": {
    6: 6093.85, 7: 7818.92, 8: 9418.88, 9: 11139.68, 10: 12981.13,
    11: 15607.53, 12: 18475.57, 13: 21585.00, 14: 24935.93, 15: 28528.37,
  },
  "21-25": {
    6: 6022.66, 7: 7427.97, 8: 8947.93, 9: 10582.70, 10: 12332.07,
    11: 14827.15, 12: 17551.80, 13: 20505.75, 14: 23689.14, 15: 27101.95,
  },
  "26-30": {
    6: 5705.67, 7: 7037.03, 8: 8476.99, 9: 10025.71, 10: 11683.02,
    11: 14046.77, 12: 16628.02, 13: 19426.50, 14: 22442.34, 15: 25675.53,
  },
  "31-35": {
    6: 5388.69, 7: 6646.09, 8: 8006.04, 9: 9468.72, 10: 11033.96,
    11: 13266.39, 12: 15704.23, 13: 18347.24, 14: 21195.55, 15: 24249.11,
  },
  "36-40": {
    6: 5071.71, 7: 6255.14, 8: 7535.11, 9: 8911.74, 10: 10384.90,
    11: 12486.03, 12: 14780.46, 13: 17267.99, 14: 19948.74, 15: 22822.69,
  },
  "41-45": {
    6: 4754.73, 7: 5864.19, 8: 7064.16, 9: 8354.76, 10: 9735.85,
    11: 11705.65, 12: 13856.68, 13: 16188.75, 14: 18701.95, 15: 21396.27,
  },
  "46-50": {
    6: 4437.75, 7: 5473.25, 8: 6593.21, 9: 7797.77, 10: 9086.79,
    11: 10925.27, 12: 12932.90, 13: 15109.50, 14: 17455.15, 15: 19969.86,
  },
  "51-55": {
    6: 4120.76, 7: 5082.30, 8: 6122.27, 9: 7240.79, 10: 8437.73,
    11: 10144.89, 12: 12009.13, 13: 14030.25, 14: 16208.36, 15: 18543.44,
  },
  "56-60": {
    6: 3803.78, 7: 4691.35, 8: 5651.32, 9: 6683.81, 10: 7788.68,
    11: 9364.51, 12: 11085.34, 13: 12951.00, 14: 14961.56, 15: 17117.02,
  },
  "61-65": {
    6: 3486.80, 7: 4300.40, 8: 5180.39, 9: 6126.82, 10: 7139.62,
    11: 8584.14, 12: 10161.56, 13: 11871.75, 14: 13714.77, 15: 15690.60,
  },
  "66+": {
    6: 3169.82, 7: 3909.47, 8: 4709.44, 9: 5569.84, 10: 6490.56,
    11: 7803.77, 12: 9237.79, 13: 10792.50, 14: 12467.96, 15: 14264.18,
  },
};

// ============================================================
// Tabella indennizzo in RENDITA annua 16-100% (eventi 2014-2018)
// Fonte: DM 12/07/2000 + rivalutazione 2009 (+8,68%) + 2014 (+7,57%)
// Uguale per uomini e donne; quota biologica della rendita
// ============================================================
export const tabellaRenditaBiologica: Record<number, number> = {
  16: 1207.55, 17: 1328.30, 18: 1449.06, 19: 1569.81, 20: 1690.57,
  21: 1811.32, 22: 1932.08, 23: 2052.83, 24: 2173.59, 25: 2294.34,
  26: 2415.10, 27: 2535.85, 28: 2656.61, 29: 2777.36, 30: 2958.50,
  31: 3139.63, 32: 3320.76, 33: 3501.89, 34: 3683.03, 35: 3864.16,
  36: 4045.29, 37: 4226.42, 38: 4407.56, 39: 4588.69, 40: 4830.20,
  41: 5071.71, 42: 5313.22, 43: 5554.73, 44: 5796.24, 45: 6037.75,
  46: 6279.26, 47: 6520.77, 48: 6762.28, 49: 7003.79, 50: 7245.30,
  51: 7486.81, 52: 7728.32, 53: 7969.83, 54: 8211.34, 55: 8452.85,
  56: 8694.36, 57: 8935.86, 58: 9177.37, 59: 9418.88, 60: 9660.39,
  61: 9901.90, 62: 10143.41, 63: 10384.92, 64: 10626.43, 65: 10867.94,
  66: 11049.08, 67: 11230.21, 68: 11411.34, 69: 11592.47, 70: 11773.61,
  71: 11954.74, 72: 12135.87, 73: 12317.00, 74: 12498.14, 75: 12679.27,
  76: 12860.40, 77: 13041.53, 78: 13222.67, 79: 13403.80, 80: 13584.93,
  81: 13766.06, 82: 13947.19, 83: 14128.33, 84: 14309.46, 85: 14490.59,
  86: 14671.72, 87: 14852.86, 88: 15033.99, 89: 15215.12, 90: 15396.25,
  91: 15577.39, 92: 15758.52, 93: 15939.65, 94: 16120.78, 95: 16301.92,
  96: 16483.05, 97: 16664.18, 98: 16845.31, 99: 17026.45, 100: 17207.58,
};

// ============================================================
// Tabella coefficienti danno patrimoniale (DM 12/07/2000 allegato 6)
// ============================================================
export interface CoefficienteFascia {
  fasciaPercentuale: string;
  grado: "A" | "B" | "C" | "D";
  coefficiente: number;
  descrizione: string;
}

export const tabellaCoefficienti: CoefficienteFascia[] = [
  {
    fasciaPercentuale: "16% - 20%",
    grado: "A",
    coefficiente: 0.4,
    descrizione: "Menomazione non grave: non pregiudica l'attività svolta né quelle della categoria",
  },
  {
    fasciaPercentuale: "21% - 25%",
    grado: "A",
    coefficiente: 0.5,
    descrizione: "Menomazione non grave (limite superiore)",
  },
  {
    fasciaPercentuale: "26% - 35%",
    grado: "B",
    coefficiente: 0.6,
    descrizione: "Menomazione grave: pregiudica l'attività svolta, consente attività della categoria",
  },
  {
    fasciaPercentuale: "36% - 50%",
    grado: "B",
    coefficiente: 0.7,
    descrizione: "Menomazione grave (limite superiore)",
  },
  {
    fasciaPercentuale: "51% - 70%",
    grado: "C",
    coefficiente: 0.8,
    descrizione: "Menomazione molto grave: consente solo attività diverse dalla categoria",
  },
  {
    fasciaPercentuale: "71% - 85%",
    grado: "C",
    coefficiente: 0.9,
    descrizione: "Menomazione molto grave (limite superiore)",
  },
  {
    fasciaPercentuale: "86% - 100%",
    grado: "D",
    coefficiente: 1.0,
    descrizione: "Menomazione impeditiva: impedisce qualunque attività lavorativa",
  },
];

export function getCoefficiente(percentuale: number): number {
  if (percentuale >= 16 && percentuale <= 20) return 0.4;
  if (percentuale >= 21 && percentuale <= 25) return 0.5;
  if (percentuale >= 26 && percentuale <= 35) return 0.6;
  if (percentuale >= 36 && percentuale <= 50) return 0.7;
  if (percentuale >= 51 && percentuale <= 70) return 0.8;
  if (percentuale >= 71 && percentuale <= 85) return 0.9;
  if (percentuale >= 86) return 1.0;
  return 0;
}

// ============================================================
// Costanti 2025 (Circ. INAIL 37/2025 e 45/2025)
// ============================================================
export const COSTANTI_2025 = {
  // Retribuzione di riferimento settore industria
  retribuzioneMediaGiornaliera: 97.27,
  retribuzioneMinimaAnnua: 20426.70,
  retribuzioneMassimaAnnua: 37935.30,
  // Settore agricoltura
  retribuzioneAgricolturaSubordinatoTD: 30834.39,
  retribuzioneAgricolturaMinimaGiornaliera: 50.99,
  // Coefficiente rivalutazione 2025
  coefficienteRivalutazioneRendite2025: 1.0084,
  // Coefficiente rivalutazione 2025 del danno biologico (DM 85/2025)
  coefficienteDannoBiologico2025: 1.008,
  // Coefficiente cumulato dal 2019 al 2025 (per tabella unisex DM 45/2019)
  coefficienteCumulato2019_2025: 1.174,
  // Quota integrativa per familiare a carico (art. 77 T.U.)
  quotaIntegrativaPercentuale: 0.05,
  // Soglie
  sogliaFranchigia: 5,
  sogliaCapitaleMin: 6,
  sogliaCapitaleMax: 15,
  sogliaRenditaMin: 16,
  sogliaInvaliditaMax: 100,
};

// ============================================================
// Prestazioni accessorie 2025
// ============================================================
export interface PrestazioneAccessoria {
  nome: string;
  importo: number;
  unita: string;
  fonte: string;
  descrizione: string;
}

export const prestazioniAccessorie2025: PrestazioneAccessoria[] = [
  {
    nome: "Assegno per Assistenza Personale Continuativa (APC)",
    importo: 672.72,
    unita: "mensile",
    fonte: "Circ. INAIL 37/2025",
    descrizione:
      "Spetta al titolare di rendita 100% con menomazioni che richiedono assistenza continua. Esente IRPEF.",
  },
  {
    nome: "Assegno funerario",
    importo: 12342.84,
    unita: "una tantum",
    fonte: "Circ. INAIL 37/2025",
    descrizione: "Erogato in caso di morte per infortunio o malattia professionale, agli aventi diritto.",
  },
  {
    nome: "Prestazione una tantum infortuni domestici (6-15%)",
    importo: 395.0,
    unita: "una tantum",
    fonte: "Circ. INAIL 37/2025",
    descrizione: "Per inabilità permanente compresa tra il 6% e il 15% in ambito domestico (L. 493/1999).",
  },
  {
    nome: "Assegno di incollocabilità (dal 1/7/2025)",
    importo: 308.23,
    unita: "mensile",
    fonte: "Circ. INAIL 37/2025",
    descrizione: "Per titolari di rendita non collocabili al lavoro. Limite età: 67 anni dal 1/1/2026.",
  },
];

// ============================================================
// Assegni continuativi mensili 2025
// ============================================================
export interface AssegnoContinuativo {
  fasciaInvalidita: string;
  importo: number;
}

export const assegniContinuativi2025: AssegnoContinuativo[] = [
  { fasciaInvalidita: "50% - 59%", importo: 377.46 },
  { fasciaInvalidita: "60% - 79%", importo: 529.59 },
  { fasciaInvalidita: "80% - 89%", importo: 983.27 },
  { fasciaInvalidita: "90% - 100%", importo: 1514.87 },
  { fasciaInvalidita: "100% + APC", importo: 2188.44 },
];

// ============================================================
// Esempi tabella menomazioni (DM 12/07/2000 allegato 4)
// Per finalità divulgative — la tabella completa contiene ~400 voci
// ============================================================
export interface MenomazioneEsempio {
  categoria: string;
  menomazione: string;
  percentuale: string;
}

export const menomazioniEsempi: MenomazioneEsempio[] = [
  { categoria: "Arti superiori", menomazione: "Perdita anatomica o funzionale di una mano", percentuale: "60% - 70%" },
  { categoria: "Arti superiori", menomazione: "Sindrome del tunnel carpale (cod. 163)", percentuale: "fino a 7%" },
  { categoria: "Arti superiori", menomazione: "Esiti di frattura del polso con limitazione funzionale", percentuale: "5% - 12%" },
  { categoria: "Arti inferiori", menomazione: "Protesi d'anca con buona funzionalità", percentuale: "33% - 34%" },
  { categoria: "Arti inferiori", menomazione: "Esiti di frattura tibiale con limitazione", percentuale: "8% - 15%" },
  { categoria: "Colonna vertebrale", menomazione: "Frattura corpo di una vertebra con deformazione", percentuale: "fino a 6%" },
  { categoria: "Colonna vertebrale", menomazione: "Ernia discale lombare con deficit neurologici", percentuale: "fino a 12%" },
  { categoria: "Apparato uditivo", menomazione: "Sordità completa bilaterale", percentuale: "60%" },
  { categoria: "Apparato uditivo", menomazione: "Sordità monolaterale completa", percentuale: "15%" },
  { categoria: "Apparato uditivo", menomazione: "Ipoacusia bilaterale grave (da rumore)", percentuale: "fino a 50%" },
  { categoria: "Apparato visivo", menomazione: "Perdita totale della facoltà visiva di un occhio", percentuale: "35%" },
  { categoria: "Apparato visivo", menomazione: "Cecità bilaterale (perdita totale visus)", percentuale: "85% - 100%" },
  { categoria: "Apparato respiratorio", menomazione: "Mesotelioma pleurico (asbesto-correlato)", percentuale: "60% - 100%" },
  { categoria: "Apparato cardio-circolatorio", menomazione: "Ipertensione con ipertrofia ventricolare grave", percentuale: "fino a 50%" },
  { categoria: "Sistema nervoso", menomazione: "Esiti di trauma cranico con disturbi cognitivi medi", percentuale: "20% - 40%" },
  { categoria: "Apparato dentario", menomazione: "Perdita di più elementi dentari (oltre 6)", percentuale: "5% - 12%" },
  { categoria: "Cute", menomazione: "Esiti cicatriziali deturpanti viso", percentuale: "10% - 25%" },
];

// ============================================================
// Esempi "Quanti soldi sono N punti?" — per la sezione interattiva
// Valori medi (uomo, fascia età 36-40, evento 2014-2018; oppure rendita per ≥16%)
// ============================================================
export interface EsempioPunti {
  punti: number;
  tipo: "franchigia" | "capitale" | "rendita";
  importoEsempio: number;
  unita: string;
  descrizione: string;
}

export const esempiPuntiComuni: EsempioPunti[] = [
  {
    punti: 5,
    tipo: "franchigia",
    importoEsempio: 0,
    unita: "una tantum",
    descrizione: "Nessun indennizzo (franchigia art. 13 D.Lgs. 38/2000)",
  },
  {
    punti: 6,
    tipo: "capitale",
    importoEsempio: 4636.98,
    unita: "una tantum esente IRPEF",
    descrizione: "Uomo 36-40 anni, evento 2014-2018. Per eventi post 2019: + ~40% (€ 6.500 ca.)",
  },
  {
    punti: 7,
    tipo: "capitale",
    importoEsempio: 5747.96,
    unita: "una tantum esente IRPEF",
    descrizione: "Uomo 36-40 anni, evento 2014-2018. Per eventi post 2019: + ~40%",
  },
  {
    punti: 10,
    tipo: "capitale",
    importoEsempio: 9660.36,
    unita: "una tantum esente IRPEF",
    descrizione: "Uomo 36-40 anni, evento 2014-2018. Valore medio 2025 unisex: ~€ 8.967",
  },
  {
    punti: 11,
    tipo: "capitale",
    importoEsempio: 11689.13,
    unita: "una tantum esente IRPEF",
    descrizione: "Uomo 36-40 anni, evento 2014-2018. Per eventi post 2019: + ~40%",
  },
  {
    punti: 12,
    tipo: "capitale",
    importoEsempio: 13911.01,
    unita: "una tantum esente IRPEF",
    descrizione: "Uomo 36-40 anni, evento 2014-2018",
  },
  {
    punti: 15,
    tipo: "capitale",
    importoEsempio: 21735.88,
    unita: "una tantum esente IRPEF",
    descrizione: "Massimo indennizzo in capitale (soglia 15%). Oltre, si passa alla rendita.",
  },
  {
    punti: 16,
    tipo: "rendita",
    importoEsempio: 1217.21,
    unita: "annua + quota patrimoniale",
    descrizione: "Quota biologica annua. Aggiungere quota patrimoniale = retribuzione × 0,16 × 0,4 (coeff. A)",
  },
  {
    punti: 18,
    tipo: "rendita",
    importoEsempio: 1461.69,
    unita: "annua + quota patrimoniale",
    descrizione: "Quota biologica annua. Coefficiente A = 0,4",
  },
  {
    punti: 20,
    tipo: "rendita",
    importoEsempio: 1704.09,
    unita: "annua + quota patrimoniale",
    descrizione: "Quota biologica annua. Coefficiente A = 0,4. Es. retrib. €30k: quota patr. €2.400/anno",
  },
  {
    punti: 25,
    tipo: "rendita",
    importoEsempio: 2312.69,
    unita: "annua + quota patrimoniale",
    descrizione: "Quota biologica annua. Coefficiente A = 0,5 (limite superiore fascia A)",
  },
];

// ============================================================
// Funzione di calcolo principale
// ============================================================
export interface InputCalcolo {
  percentualeInvalidita: number;
  eta: number;
  sesso: "M" | "F";
  retribuzioneAnnua: number;
  numeroFamiliari: number;
  annoEvento: number; // 2014 (pre-2019) o 2019 (post-2019, tabella unisex)
  applicaRivalutazione2025: boolean;
}

export interface RisultatoCalcolo {
  scenario: "franchigia" | "capitale" | "rendita" | "errore";
  // Per capitale (6-15%)
  capitaleBase?: number;
  capitaleRivalutato?: number;
  // Per rendita (16-100%)
  quotaBiologicaAnnua?: number;
  quotaPatrimonialeAnnua?: number;
  quotaIntegrativaAnnua?: number;
  renditaTotaleAnnua?: number;
  renditaTotaleMensile?: number;
  coefficiente?: number;
  retribuzioneApplicata?: number;
  fasciaApplicata?: string;
  // Generali
  messaggio: string;
  dettaglio: string[];
}

export function calcolaRisarcimentoInail(input: InputCalcolo): RisultatoCalcolo {
  const {
    percentualeInvalidita,
    eta,
    sesso,
    retribuzioneAnnua,
    numeroFamiliari,
    annoEvento,
    applicaRivalutazione2025,
  } = input;

  const dettaglio: string[] = [];

  // Validazione
  if (percentualeInvalidita < 0 || percentualeInvalidita > 100) {
    return {
      scenario: "errore",
      messaggio: "La percentuale di invalidità deve essere tra 0 e 100",
      dettaglio: [],
    };
  }

  // SOGLIA 1: FRANCHIGIA <6%
  if (percentualeInvalidita < 6) {
    return {
      scenario: "franchigia",
      messaggio:
        "Nessun indennizzo INAIL dovuto. La franchigia si applica alle menomazioni inferiori al 6% (art. 13 D.Lgs. 38/2000). Resta salva l'azione civile contro il datore di lavoro se vi è responsabilità ex art. 2087 c.c.",
      dettaglio: [
        `Percentuale invalidità: ${percentualeInvalidita}%`,
        "Soglia minima per indennizzo: 6%",
        "Eventuale azione civile per responsabilità datoriale",
      ],
    };
  }

  // SOGLIA 2: CAPITALE 6-15%
  if (percentualeInvalidita >= 6 && percentualeInvalidita <= 15) {
    const puntiInteri = Math.round(percentualeInvalidita);
    const fascia = getFasciaFromEta(eta);
    const tabella = sesso === "M" ? tabellaCapitaleUomini : tabellaCapitaleDonne;
    const capitaleBase = tabella[fascia][puntiInteri];

    if (capitaleBase === undefined) {
      return {
        scenario: "errore",
        messaggio: "Errore nel calcolo: percentuale non valida nella tabella capitale",
        dettaglio: [],
      };
    }

    dettaglio.push(`Tabella DM 12/07/2000 + rivalutazione DM 2009 (+8,68%) + DM 2014 (+7,57%)`);
    dettaglio.push(`Sesso: ${sesso === "M" ? "Uomo" : "Donna"} | Fascia età: ${fascia} | Grado: ${puntiInteri}%`);
    dettaglio.push(`Capitale base (eventi 2014-2018): € ${capitaleBase.toLocaleString("it-IT", { minimumFractionDigits: 2 })}`);

    let capitaleFinale = capitaleBase;

    // Se evento post-2019, applicare il fattore cumulato (~+17,4% sui valori 2014, più i +40% del DM 45/2019)
    if (annoEvento >= 2019) {
      // Il DM 45/2019 ha introdotto una tabella unisex con valori mediamente +40% rispetto alla 2014
      // (già comprensiva delle rivalutazioni 2008+2014). Approssimazione applicata: +40% sul valore 2014.
      const fattorePost2019 = 1.4;
      capitaleFinale = capitaleBase * fattorePost2019;
      dettaglio.push(`Fattore DM 45/2019 (unisex, +40% medio): × 1,40 → € ${capitaleFinale.toLocaleString("it-IT", { minimumFractionDigits: 2 })}`);

      // Aggiungere rivalutazioni 2023 (+8,1%) e 2024 (+5,4%) se l'evento è successivo
      if (annoEvento >= 2023) {
        capitaleFinale = capitaleFinale * 1.081;
        dettaglio.push(`Rivalutazione 2023 (+8,1%): × 1,081 → € ${capitaleFinale.toLocaleString("it-IT", { minimumFractionDigits: 2 })}`);
      }
      if (annoEvento >= 2024) {
        capitaleFinale = capitaleFinale * 1.054;
        dettaglio.push(`Rivalutazione 2024 (+5,4%): × 1,054 → € ${capitaleFinale.toLocaleString("it-IT", { minimumFractionDigits: 2 })}`);
      }
    }

    // Rivalutazione 2025 (DM 85/2025): +0,8% se provvedimento post 1/7/2025
    if (applicaRivalutazione2025) {
      capitaleFinale = capitaleFinale * COSTANTI_2025.coefficienteDannoBiologico2025;
      dettaglio.push(`Rivalutazione 2025 (+0,8%, DM 85/2025): × 1,008 → € ${capitaleFinale.toLocaleString("it-IT", { minimumFractionDigits: 2 })}`);
    }

    return {
      scenario: "capitale",
      capitaleBase,
      capitaleRivalutato: Math.round(capitaleFinale * 100) / 100,
      messaggio: `Indennizzo in capitale: € ${capitaleFinale.toLocaleString("it-IT", { minimumFractionDigits: 2 })} (esente IRPEF, art. 6 DPR 601/1973). Erogato in un'unica soluzione.`,
      dettaglio,
    };
  }

  // SOGLIA 3: RENDITA 16-100%
  const puntiInteri = Math.round(percentualeInvalidita);

  // Quota biologica
  let quotaBiologicaAnnua = tabellaRenditaBiologica[puntiInteri];
  if (quotaBiologicaAnnua === undefined) {
    return {
      scenario: "errore",
      messaggio: "Errore: grado non valido per la tabella rendita",
      dettaglio: [],
    };
  }

  dettaglio.push(`SCENARIO: Rendita vitalizia (≥16%, art. 13 D.Lgs. 38/2000)`);
  dettaglio.push(`Quota biologica annua (Tab. rendita ${puntiInteri}%): € ${quotaBiologicaAnnua.toLocaleString("it-IT", { minimumFractionDigits: 2 })}`);

  // Rivalutazione 2025 della quota biologica
  if (applicaRivalutazione2025) {
    quotaBiologicaAnnua = quotaBiologicaAnnua * COSTANTI_2025.coefficienteDannoBiologico2025;
    dettaglio.push(`Rivalutazione +0,8% (DM 85/2025): × 1,008 → € ${quotaBiologicaAnnua.toLocaleString("it-IT", { minimumFractionDigits: 2 })}`);
  }

  // Quota patrimoniale
  // Applicare minimale e massimale
  let retribuzioneApplicata = retribuzioneAnnua;
  if (retribuzioneAnnua < COSTANTI_2025.retribuzioneMinimaAnnua) {
    retribuzioneApplicata = COSTANTI_2025.retribuzioneMinimaAnnua;
    dettaglio.push(`Retribuzione (€ ${retribuzioneAnnua.toLocaleString("it-IT")}) sotto il minimale: applicato minimale 2025 € ${retribuzioneApplicata.toLocaleString("it-IT")}`);
  } else if (retribuzioneAnnua > COSTANTI_2025.retribuzioneMassimaAnnua) {
    retribuzioneApplicata = COSTANTI_2025.retribuzioneMassimaAnnua;
    dettaglio.push(`Retribuzione (€ ${retribuzioneAnnua.toLocaleString("it-IT")}) sopra il massimale: applicato massimale 2025 € ${retribuzioneApplicata.toLocaleString("it-IT")}`);
  }

  const coefficiente = getCoefficiente(puntiInteri);
  const fasciaApplicata = tabellaCoefficienti.find(c => coefficiente === c.coefficiente)?.fasciaPercentuale ?? "—";

  const quotaPatrimonialeBase = retribuzioneApplicata * (puntiInteri / 100) * coefficiente;
  dettaglio.push(`Coefficiente fascia "${fasciaApplicata}" (DM 12/07/2000 all. 6): ${coefficiente}`);
  dettaglio.push(`Quota patrimoniale annua = Retrib. × Grado × Coeff = € ${retribuzioneApplicata.toLocaleString("it-IT")} × ${(puntiInteri / 100).toFixed(2)} × ${coefficiente} = € ${quotaPatrimonialeBase.toLocaleString("it-IT", { minimumFractionDigits: 2 })}`);

  // Quote integrative familiari (art. 77 T.U.) — solo su quota patrimoniale
  const quotaIntegrativaAnnua = quotaPatrimonialeBase * (COSTANTI_2025.quotaIntegrativaPercentuale * numeroFamiliari);
  if (numeroFamiliari > 0) {
    dettaglio.push(`Quote integrative art. 77 T.U.: ${numeroFamiliari} × 5% sulla quota patrimoniale = € ${quotaIntegrativaAnnua.toLocaleString("it-IT", { minimumFractionDigits: 2 })}`);
  }

  const renditaTotaleAnnua = quotaBiologicaAnnua + quotaPatrimonialeBase + quotaIntegrativaAnnua;
  const renditaTotaleMensile = renditaTotaleAnnua / 12;

  return {
    scenario: "rendita",
    quotaBiologicaAnnua: Math.round(quotaBiologicaAnnua * 100) / 100,
    quotaPatrimonialeAnnua: Math.round(quotaPatrimonialeBase * 100) / 100,
    quotaIntegrativaAnnua: Math.round(quotaIntegrativaAnnua * 100) / 100,
    renditaTotaleAnnua: Math.round(renditaTotaleAnnua * 100) / 100,
    renditaTotaleMensile: Math.round(renditaTotaleMensile * 100) / 100,
    coefficiente,
    retribuzioneApplicata,
    fasciaApplicata,
    messaggio: `Rendita vitalizia annua: € ${renditaTotaleAnnua.toLocaleString("it-IT", { minimumFractionDigits: 2 })} (esente IRPEF). Mensile: € ${renditaTotaleMensile.toLocaleString("it-IT", { minimumFractionDigits: 2 })}.`,
    dettaglio,
  };
}
