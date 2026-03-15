// Dati per il calcolo del danno non patrimoniale
// Fonti: Tabelle Milano 2024, TUN D.P.R. 12/2025, Art. 139 CdA

// ============================================================
// Sezioni sidebar
// ============================================================
export const sections = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "definizione", label: "Definizione" },
  { id: "tipologie", label: "Tipologie di Danno" },
  { id: "tabelle-milano", label: "Tabelle Milano 2024" },
  { id: "tabella-unica-nazionale", label: "TUN 2025" },
  { id: "micropermanenti", label: "Micropermanenti" },
  { id: "come-si-calcola", label: "Come si Calcola" },
  { id: "personalizzazione", label: "Personalizzazione" },
  { id: "perdita-parentale", label: "Perdita Parentale" },
  { id: "prova-del-danno", label: "Prova del Danno" },
  { id: "novita-2025", label: "Novità 2025-2026" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];

// ============================================================
// Normativa di riferimento
// ============================================================
export const normativaRiferimento = [
  {
    norma: "Art. 2059 Codice Civile",
    descrizione: "Risarcimento del danno non patrimoniale: risarcibile solo nei casi determinati dalla legge",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059",
  },
  {
    norma: "Art. 2043 Codice Civile",
    descrizione: "Risarcimento per fatto illecito: qualunque fatto doloso o colposo che cagiona danno ingiusto",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2043",
  },
  {
    norma: "D.Lgs. 7 settembre 2005, n. 209 (Codice Assicurazioni)",
    descrizione: "Artt. 138-139: danno biologico per lesioni di lieve e non lieve entità",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209",
  },
  {
    norma: "D.P.R. 13 gennaio 2025, n. 12",
    descrizione: "Tabella Unica Nazionale per il risarcimento del danno non patrimoniale (macropermanenti)",
    url: "https://www.gazzettaufficiale.it/eli/id/2025/02/18/25G00019/SG",
  },
  {
    norma: "Tabelle Milano 2024 — Prot. P.7646_24",
    descrizione: "Criteri orientativi per la liquidazione del danno non patrimoniale del Tribunale di Milano",
    url: "https://tribunale-milano.giustizia.it/cmsresources/cms/documents/P._7646_24.pdf",
  },
  {
    norma: "Tabelle Roma 2025",
    descrizione: "Criteri del Tribunale di Roma per la liquidazione del danno da perdita parentale",
    url: "https://www.tribunale.roma.it/allegatinews/A_71100.pdf",
  },
];

// ============================================================
// Interfaces
// ============================================================
export interface MicropermanentiConfig {
  puntoBase2025: number;
  puntoBase2026: number;
  ittGiornaliero: number;
  personalizzazioneMax: number;
}

export interface MilanoConfig {
  puntoBiologico: number;
  incrementoSofferenza: number;
  totalePunto: number;
  ittGiornaliero100: number;
  ittBiologico: number;
  ittSofferenza: number;
  personalizzazioneMax: number;
  rivalutazioneIstat: number;
}

export interface TUNConfig {
  valoreBasePunto: number;
  ittGiornaliero: number;
  personalizzazioneMax: number;
  inVigoreDal: string;
}

export interface PerditaParentaleRow {
  relazione: string;
  min: number;
  max: number;
  puntiMax?: number;
  valorePunto?: number;
}

// ============================================================
// Micropermanenti (Art. 139 CdA)
// ============================================================
export const micropermanentiData: MicropermanentiConfig = {
  puntoBase2025: 957.07,
  puntoBase2026: 963.40,
  ittGiornaliero: 56.18,
  personalizzazioneMax: 20,
};

// ============================================================
// Tabelle Milano 2024
// ============================================================
export const milanoData: MilanoConfig = {
  puntoBiologico: 1393.28,
  incrementoSofferenza: 348.32,
  totalePunto: 1741.60,
  ittGiornaliero100: 115.00,
  ittBiologico: 84.00,
  ittSofferenza: 31.00,
  personalizzazioneMax: 50,
  rivalutazioneIstat: 16.2268,
};

// ============================================================
// TUN 2025 (D.P.R. 12/2025)
// ============================================================
export const tunData: TUNConfig = {
  valoreBasePunto: 947.30,
  ittGiornaliero: 39.37,
  personalizzazioneMax: 30,
  inVigoreDal: "2025-03-05",
};

// ============================================================
// Perdita Parentale Milano 2024
// ============================================================
export const perditaParentaleMilano: PerditaParentaleRow[] = [
  { relazione: "Coniuge/convivente", min: 195551.59, max: 391103.18, puntiMax: 118, valorePunto: 3911.00 },
  { relazione: "Genitore per figlio", min: 195551.59, max: 391103.18, puntiMax: 118, valorePunto: 3911.00 },
  { relazione: "Figlio per genitore", min: 195551.59, max: 391103.18, puntiMax: 118, valorePunto: 3911.00 },
  { relazione: "Fratello/Sorella", min: 28301.23, max: 169830.60, puntiMax: 116, valorePunto: 3911.00 },
  { relazione: "Nonno/Nipote", min: 28301.23, max: 169830.60, puntiMax: 116, valorePunto: 3911.00 },
];

// ============================================================
// Perdita Parentale Roma 2025
// ============================================================
export const perditaParentaleRoma: PerditaParentaleRow[] = [
  { relazione: "Coniuge/convivente", min: 168000.00, max: 336000.00 },
  { relazione: "Genitore per figlio", min: 168000.00, max: 336000.00 },
  { relazione: "Figlio per genitore", min: 168000.00, max: 336000.00 },
  { relazione: "Fratello/Sorella", min: 24000.00, max: 144000.00 },
  { relazione: "Nonno/Nipote", min: 24000.00, max: 144000.00 },
];

// ============================================================
// Tabella valori punto Milano 2024 (esempi per scaglioni)
// ============================================================
export const tabelleMilano2024 = [
  { punti: 1, biologico: 1393.28, sofferenza: 348.32, totale: 1741.60 },
  { punti: 5, biologico: 6966.40, sofferenza: 1741.60, totale: 8708.00 },
  { punti: 10, biologico: 13932.80, sofferenza: 3483.20, totale: 17416.00 },
  { punti: 20, biologico: 27865.60, sofferenza: 6966.40, totale: 34832.00 },
  { punti: 30, biologico: 41798.40, sofferenza: 10449.60, totale: 52248.00 },
  { punti: 50, biologico: 69664.00, sofferenza: 17416.00, totale: 87080.00 },
  { punti: 70, biologico: 97529.60, sofferenza: 24382.40, totale: 121912.00 },
  { punti: 100, biologico: 139328.00, sofferenza: 34832.00, totale: 174160.00 },
];
