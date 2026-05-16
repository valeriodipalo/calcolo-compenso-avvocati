import type {
  NormativaRiferimento,
  CircolareMinisteriale,
  ToolSection,
} from "@/types/tool";

// =============================================================================
// TIPI
// =============================================================================

export type AnnoImposta = 2024 | 2025 | 2026;
export type TipoReddito = "dipendente" | "pensione" | "autonomo" | "altro";

export interface ScaglioneIrpef {
  /** Soglia superiore dello scaglione in euro (Infinity per l'ultimo) */
  limite: number;
  /** Aliquota in decimale (0,23 = 23%) */
  aliquota: number;
}

export interface DettaglioScaglione {
  scaglione: string;
  redditoNelloScaglione: number;
  aliquota: number;
  imposta: number;
}

export interface InputCalcoloIrpef {
  redditoLordo: number;
  tipoReddito: TipoReddito;
  oneriDeducibili: number;
  giorniLavoro?: number;
  aliquotaRegionale: number;
  aliquotaComunale: number;
  anno: AnnoImposta;
  applicaUlterioreDetrazione: boolean;
}

export interface RisultatoCalcoloIrpef {
  redditoComplessivo: number;
  redditoImponibile: number;
  irpefLorda: number;
  dettaglioScaglioni: DettaglioScaglione[];
  detrazioneBase: number;
  ulterioreDetrazione: number;
  detrazioniTotali: number;
  irpefNetta: number;
  addizionaleRegionale: number;
  addizionaleComunale: number;
  totaleImposte: number;
  redditoNetto: number;
  aliquotaMediaLorda: number;
  aliquotaMediaNetta: number;
  aliquotaMarginale: number;
  irpefLorda2025?: number;
  risparmioVs2025?: number;
}

// =============================================================================
// SCAGLIONI IRPEF — fonti normative
// =============================================================================

/**
 * IRPEF 2026 — Legge 30 dicembre 2025, n. 199 (Legge di Bilancio 2026)
 * Modifica art. 11, comma 1, lettera b) TUIR: aliquota secondo scaglione 35% -> 33%
 * GU Serie Generale n. 301 del 30 dicembre 2025, Suppl. Ord. n. 42
 */
export const SCAGLIONI_IRPEF_2026: ScaglioneIrpef[] = [
  { limite: 28000, aliquota: 0.23 },
  { limite: 50000, aliquota: 0.33 },
  { limite: Infinity, aliquota: 0.43 },
];

/**
 * IRPEF 2024-2025 — D.Lgs. 216/2023 (2024) confermato strutturalmente da L. 207/2024 (2025)
 * Passaggio da 4 a 3 scaglioni con accorpamento dei primi due
 */
export const SCAGLIONI_IRPEF_2024_2025: ScaglioneIrpef[] = [
  { limite: 28000, aliquota: 0.23 },
  { limite: 50000, aliquota: 0.35 },
  { limite: Infinity, aliquota: 0.43 },
];

/** Mappa scaglioni per anno */
export function scaglioniPerAnno(anno: AnnoImposta): ScaglioneIrpef[] {
  return anno === 2026 ? SCAGLIONI_IRPEF_2026 : SCAGLIONI_IRPEF_2024_2025;
}

// =============================================================================
// TABELLA STORICA ALIQUOTE (per LegalTable)
// =============================================================================

export interface RegimeStorico {
  periodo: string;
  scaglioni: number;
  descrizione: string;
  fonte: string;
}

export const ALIQUOTE_STORICHE: RegimeStorico[] = [
  {
    periodo: "1974-1982",
    scaglioni: 32,
    descrizione: "32 aliquote dal 10% al 72%",
    fonte: "DPR 597/1973",
  },
  {
    periodo: "1983-1988",
    scaglioni: 9,
    descrizione: "9 aliquote dal 18% al 65%",
    fonte: "Riforma Goria",
  },
  {
    periodo: "1989-2002",
    scaglioni: 7,
    descrizione: "7 aliquote dal 10% al 50%",
    fonte: "Riforme anni '90",
  },
  {
    periodo: "2003-2006",
    scaglioni: 5,
    descrizione: "23% / 33% / 39% / 45% (Riforma Tremonti)",
    fonte: "L. 80/2003",
  },
  {
    periodo: "2007-2021",
    scaglioni: 5,
    descrizione: "23% / 27% / 38% / 41% / 43%",
    fonte: "L. 296/2006",
  },
  {
    periodo: "2022-2023",
    scaglioni: 4,
    descrizione: "23% / 25% / 35% / 43%",
    fonte: "L. 234/2021",
  },
  {
    periodo: "2024-2025",
    scaglioni: 3,
    descrizione: "23% / 35% / 43%",
    fonte: "D.Lgs. 216/2023 + L. 207/2024",
  },
  {
    periodo: "Dal 2026",
    scaglioni: 3,
    descrizione: "23% / 33% / 43%",
    fonte: "L. 199/2025",
  },
];

// =============================================================================
// FORMULE DETRAZIONI ART. 13 TUIR
// =============================================================================

/**
 * Detrazione per redditi di lavoro dipendente — art. 13, comma 1 TUIR
 * Importi confermati post D.Lgs. 216/2023 (no tax area dipendenti a 8.500 €)
 */
export function detrazioneLavoroDipendente(reddito: number, giorni = 365): number {
  if (reddito <= 0) return 0;
  let detrazione: number;
  if (reddito <= 15000) {
    detrazione = 1955;
  } else if (reddito <= 28000) {
    detrazione = 1910 + 1190 * ((28000 - reddito) / 13000);
  } else if (reddito <= 50000) {
    detrazione = 1910 * ((50000 - reddito) / 22000);
  } else {
    return 0;
  }
  // Maggiorazione 65 € se 25.000 < RC <= 35.000 (art. 13 c. 1.1)
  if (reddito > 25000 && reddito <= 35000) {
    detrazione += 65;
  }
  return (detrazione * giorni) / 365;
}

/**
 * Detrazione per redditi di pensione — art. 13, comma 3 TUIR
 * No tax area pensionati 8.500 € (parificata dal 2024)
 */
export function detrazionePensione(reddito: number, giorni = 365): number {
  if (reddito <= 0) return 0;
  let detrazione: number;
  if (reddito <= 8500) {
    detrazione = 1955;
  } else if (reddito <= 28000) {
    detrazione = 700 + (1955 - 700) * ((28000 - reddito) / (28000 - 8500));
  } else if (reddito <= 50000) {
    detrazione = 700 * ((50000 - reddito) / 22000);
  } else {
    return 0;
  }
  return (detrazione * giorni) / 365;
}

/**
 * Detrazione per lavoro autonomo e altri redditi — art. 13, comma 5 TUIR
 * No tax area autonomi 5.500 €
 */
export function detrazioneAutonomo(reddito: number, giorni = 365): number {
  if (reddito <= 0) return 0;
  let detrazione: number;
  if (reddito <= 5500) {
    detrazione = 1265;
  } else if (reddito <= 28000) {
    detrazione = 500 + 765 * ((28000 - reddito) / 22500);
  } else if (reddito <= 50000) {
    detrazione = 500 * ((50000 - reddito) / 22000);
  } else {
    return 0;
  }
  // Maggiorazione 50 € se 11.000 < RC <= 17.000 (art. 13 c. 5-ter)
  if (reddito > 11000 && reddito <= 17000) {
    detrazione += 50;
  }
  return (detrazione * giorni) / 365;
}

/**
 * Ulteriore detrazione lavoro dipendente — L. 207/2024 art. 1 c. 6
 * Solo per redditi 20.000 < RC <= 40.000 €
 */
export function ulterioreDetrazione(reddito: number): number {
  if (reddito <= 20000) return 0;
  if (reddito <= 32000) return 1000;
  if (reddito <= 40000) return 1000 * ((40000 - reddito) / 8000);
  return 0;
}

/**
 * Detrazione base per tipo di reddito
 */
export function detrazioneBasePerTipo(
  tipo: TipoReddito,
  reddito: number,
  giorni = 365,
): number {
  switch (tipo) {
    case "dipendente":
      return detrazioneLavoroDipendente(reddito, giorni);
    case "pensione":
      return detrazionePensione(reddito, giorni);
    case "autonomo":
      return detrazioneAutonomo(reddito, giorni);
    default:
      return 0;
  }
}

// =============================================================================
// CALCOLO IRPEF LORDA PROGRESSIVA
// =============================================================================

export interface CalcoloLordaResult {
  imposta: number;
  dettaglio: DettaglioScaglione[];
  aliquotaMarginale: number;
}

export function calcolaIrpefLorda(
  redditoImponibile: number,
  scaglioni: ScaglioneIrpef[],
): CalcoloLordaResult {
  if (redditoImponibile <= 0) {
    return { imposta: 0, dettaglio: [], aliquotaMarginale: 0 };
  }
  let imposta = 0;
  let limiteInf = 0;
  let aliquotaMarginale = 0;
  const dettaglio: DettaglioScaglione[] = [];
  for (const s of scaglioni) {
    if (redditoImponibile <= limiteInf) break;
    const limiteSup = Math.min(s.limite, redditoImponibile);
    const redditoNelloScaglione = limiteSup - limiteInf;
    const impostaScaglione = redditoNelloScaglione * s.aliquota;
    imposta += impostaScaglione;
    aliquotaMarginale = s.aliquota;
    const etichetta =
      s.limite === Infinity
        ? `Oltre ${formatLimite(limiteInf)} €`
        : `Da ${formatLimite(limiteInf + 0.01)} a ${formatLimite(s.limite)} €`;
    dettaglio.push({
      scaglione: limiteInf === 0 ? `Fino a ${formatLimite(s.limite)} €` : etichetta,
      redditoNelloScaglione,
      aliquota: s.aliquota,
      imposta: impostaScaglione,
    });
    limiteInf = s.limite;
  }
  return { imposta, dettaglio, aliquotaMarginale };
}

function formatLimite(n: number): string {
  return new Intl.NumberFormat("it-IT", { maximumFractionDigits: 0 }).format(
    Math.round(n),
  );
}

// =============================================================================
// CALCOLO COMPLETO IRPEF
// =============================================================================

export function calcolaIrpef(input: InputCalcoloIrpef): RisultatoCalcoloIrpef {
  const {
    redditoLordo,
    tipoReddito,
    oneriDeducibili,
    giorniLavoro = 365,
    aliquotaRegionale,
    aliquotaComunale,
    anno,
    applicaUlterioreDetrazione,
  } = input;

  const redditoComplessivo = Math.max(0, redditoLordo);
  const redditoImponibile = Math.max(0, redditoComplessivo - Math.max(0, oneriDeducibili));

  const scaglioni = scaglioniPerAnno(anno);
  const calcLorda = calcolaIrpefLorda(redditoImponibile, scaglioni);

  const detrazioneBase = detrazioneBasePerTipo(
    tipoReddito,
    redditoComplessivo,
    giorniLavoro,
  );

  const ulterDetrazione =
    applicaUlterioreDetrazione && tipoReddito === "dipendente"
      ? ulterioreDetrazione(redditoComplessivo)
      : 0;

  const detrazioniTotali = detrazioneBase + ulterDetrazione;
  const irpefNetta = Math.max(0, calcLorda.imposta - detrazioniTotali);

  // Addizionali calcolate sull'imponibile (semplificazione: aliquota proporzionale)
  const addizionaleRegionale =
    irpefNetta > 0 ? redditoImponibile * (aliquotaRegionale / 100) : 0;
  const addizionaleComunale =
    irpefNetta > 0 ? redditoImponibile * (aliquotaComunale / 100) : 0;

  const totaleImposte = irpefNetta + addizionaleRegionale + addizionaleComunale;
  const redditoNetto = redditoComplessivo - totaleImposte;

  // Confronto con 2025
  let irpefLorda2025: number | undefined;
  let risparmioVs2025: number | undefined;
  if (anno === 2026) {
    const calc2025 = calcolaIrpefLorda(redditoImponibile, SCAGLIONI_IRPEF_2024_2025);
    irpefLorda2025 = calc2025.imposta;
    risparmioVs2025 = calc2025.imposta - calcLorda.imposta;
  }

  return {
    redditoComplessivo,
    redditoImponibile,
    irpefLorda: calcLorda.imposta,
    dettaglioScaglioni: calcLorda.dettaglio,
    detrazioneBase,
    ulterioreDetrazione: ulterDetrazione,
    detrazioniTotali,
    irpefNetta,
    addizionaleRegionale,
    addizionaleComunale,
    totaleImposte,
    redditoNetto,
    aliquotaMediaLorda:
      redditoImponibile > 0 ? (calcLorda.imposta / redditoImponibile) * 100 : 0,
    aliquotaMediaNetta:
      redditoComplessivo > 0 ? (totaleImposte / redditoComplessivo) * 100 : 0,
    aliquotaMarginale: calcLorda.aliquotaMarginale * 100,
    irpefLorda2025,
    risparmioVs2025,
  };
}

// =============================================================================
// ESEMPI PRATICI PER LA TABELLA WORKED EXAMPLES
// =============================================================================

export interface EsempioPratico {
  reddito: number;
  irpef2025: number;
  irpef2026: number;
  risparmio: number;
}

export const ESEMPI_PRATICI: EsempioPratico[] = (() => {
  const redditi = [15000, 20000, 25000, 28000, 30000, 35000, 40000, 45000, 50000, 60000, 75000, 100000];
  return redditi.map((r) => {
    const t2025 = calcolaIrpefLorda(r, SCAGLIONI_IRPEF_2024_2025).imposta;
    const t2026 = calcolaIrpefLorda(r, SCAGLIONI_IRPEF_2026).imposta;
    return {
      reddito: r,
      irpef2025: t2025,
      irpef2026: t2026,
      risparmio: t2025 - t2026,
    };
  });
})();

// =============================================================================
// NO TAX AREA E SOGLIE ESONERO
// =============================================================================

export interface NoTaxAreaItem {
  categoria: string;
  soglia: number;
  detrazioneBase: number;
  descrizione: string;
}

export const NO_TAX_AREA: NoTaxAreaItem[] = [
  {
    categoria: "Lavoratori dipendenti",
    soglia: 8500,
    detrazioneBase: 1955,
    descrizione: "Parificata a pensionati dal 2024 (D.Lgs. 216/2023)",
  },
  {
    categoria: "Pensionati",
    soglia: 8500,
    detrazioneBase: 1955,
    descrizione: "Detrazione minima 713 € rapportata ai giorni",
  },
  {
    categoria: "Lavoratori autonomi",
    soglia: 5500,
    detrazioneBase: 1265,
    descrizione: "Soglia inferiore per scelta del legislatore",
  },
];

export interface EsonereDichiarazione {
  tipologia: string;
  soglia: number;
  note: string;
}

export const ESONERI_DICHIARAZIONE: EsonereDichiarazione[] = [
  { tipologia: "Terreni e/o fabbricati", soglia: 500, note: "Esclusi assoluti" },
  { tipologia: "Lavoro dipendente (anche con altri redditi)", soglia: 8000, note: "Periodo non inferiore a 365 gg" },
  { tipologia: "Pensione (anche con altri redditi)", soglia: 8000, note: "Periodo non inferiore a 365 gg" },
  { tipologia: "Pensione 7.500 + terreni 185,92 + prima casa", soglia: 7685.92, note: "Solo con combinazione esatta" },
  { tipologia: "Assegno mantenimento coniuge (escluso figli)", soglia: 8000, note: "Esente fino alla soglia" },
  { tipologia: "Redditi assimilati a lavoro dipendente (occasionali)", soglia: 4800, note: "Detrazione non rapportata al periodo" },
  { tipologia: "Attività sportive dilettantistiche", soglia: 30658.28, note: "Regime fiscale speciale" },
];

// =============================================================================
// ADDIZIONALI INDICATIVE PER REGIONE 2026 (range)
// =============================================================================

export interface AddizionaleRegione {
  regione: string;
  range: string;
  note: string;
}

export const ADDIZIONALI_REGIONALI: AddizionaleRegione[] = [
  { regione: "Abruzzo", range: "1,73%", note: "Aliquota base maggiorata per piano sanitario" },
  { regione: "Basilicata", range: "1,23% - 2,03%", note: "Progressiva per scaglioni" },
  { regione: "Calabria", range: "2,03%", note: "Aliquota unica massima per disavanzo sanitario" },
  { regione: "Campania", range: "1,23% - 2,03%", note: "Progressiva" },
  { regione: "Emilia-Romagna", range: "1,33% - 2,03%", note: "Progressiva con esenzione redditi bassi" },
  { regione: "Friuli-Venezia Giulia", range: "0,70% - 1,23%", note: "Riduzione per redditi sotto 15.000 €" },
  { regione: "Lazio", range: "1,73% - 3,33%", note: "Massima 3,33% per disavanzo sanitario" },
  { regione: "Liguria", range: "1,23% - 2,33%", note: "Progressiva" },
  { regione: "Lombardia", range: "1,23%", note: "Aliquota unica proporzionale" },
  { regione: "Marche", range: "1,23% - 1,73%", note: "Progressiva" },
  { regione: "Molise", range: "2,03%", note: "Aliquota maggiorata per disavanzo" },
  { regione: "Piemonte", range: "1,62% - 3,33%", note: "Massima per disavanzo sanitario" },
  { regione: "Puglia", range: "1,33% - 1,73%", note: "Progressiva" },
  { regione: "Sardegna", range: "1,23% - 1,73%", note: "Progressiva" },
  { regione: "Sicilia", range: "1,23%", note: "Aliquota unica" },
  { regione: "Toscana", range: "1,42% - 3,33%", note: "Massima per scaglione superiore" },
  { regione: "Trento (P.A.)", range: "1,23%", note: "Provincia autonoma" },
  { regione: "Bolzano (P.A.)", range: "1,23%", note: "Provincia autonoma con detrazioni speciali" },
  { regione: "Umbria", range: "1,23% - 1,83%", note: "Progressiva" },
  { regione: "Valle d'Aosta", range: "1,23%", note: "Aliquota unica" },
  { regione: "Veneto", range: "1,23%", note: "Aliquota unica proporzionale" },
];

// =============================================================================
// CODICI TRIBUTO F24
// =============================================================================

export interface CodiceTributoF24 {
  codice: string;
  descrizione: string;
  scadenza: string;
}

export const CODICI_F24_IRPEF: CodiceTributoF24[] = [
  { codice: "4001", descrizione: "IRPEF — saldo dichiarazione", scadenza: "30 giugno" },
  { codice: "4033", descrizione: "IRPEF — primo acconto", scadenza: "30 giugno" },
  { codice: "4034", descrizione: "IRPEF — secondo acconto", scadenza: "30 novembre" },
  { codice: "1989", descrizione: "Interessi su ravvedimento IRPEF", scadenza: "Contestuale al pagamento" },
  { codice: "8901", descrizione: "Sanzioni su ravvedimento IRPEF", scadenza: "Contestuale al pagamento" },
];

// =============================================================================
// NORMATIVA DI RIFERIMENTO
// =============================================================================

export const normativaRiferimento: NormativaRiferimento[] = [
  {
    norma: "DPR 22 dicembre 1986, n. 917 — TUIR",
    descrizione:
      "Testo Unico delle Imposte sui Redditi. Disciplina organica dell'IRPEF: presupposto (art. 1), categorie di reddito (art. 6), reddito complessivo (art. 8), oneri deducibili (art. 10), aliquote e scaglioni (art. 11), detrazioni per familiari (art. 12), detrazioni per reddito (art. 13), oneri detraibili (artt. 15-16-bis), riordino detrazioni per redditi elevati (art. 16-ter).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1986-12-22;917",
  },
  {
    norma: "Legge 30 dicembre 2025, n. 199 (Legge di Bilancio 2026)",
    descrizione:
      "Modifica all'art. 11, comma 1, lettera b) TUIR: aliquota del secondo scaglione IRPEF ridotta dal 35% al 33% per redditi tra 28.001 e 50.000 euro. Introduzione del comma 5-bis dell'art. 16-ter TUIR (riduzione forfettaria 440 € detrazioni oneri per redditi oltre 200.000 €). Pubblicata in GU Serie Generale n. 301 del 30/12/2025, Suppl. Ord. n. 42.",
    url: "https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2025-12-30&atto.codiceRedazionale=25G00212",
  },
  {
    norma: "D.Lgs. 30 dicembre 2023, n. 216",
    descrizione:
      "Decreto attuativo della legge delega per la riforma fiscale. Riduzione temporanea da 4 a 3 scaglioni IRPEF per il solo 2024, con accorpamento dei primi due scaglioni (23% fino a 28.000 €). Elevazione della detrazione lavoro dipendente da 1.880 a 1.955 €, estendendo la no tax area dipendenti a 8.500 €.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2023-12-30;216",
  },
  {
    norma: "Legge 30 dicembre 2024, n. 207 (Legge di Bilancio 2025)",
    descrizione:
      "Stabilizzazione strutturale dal 2025 del sistema a 3 scaglioni IRPEF (23/35/43%). Introduzione del bonus aggiuntivo in busta paga (7,1% / 5,3% / 4,8% per redditi fino a 20.000 €) e dell'ulteriore detrazione lavoro dipendente (1.000 € per RC 20.000-32.000 €, decrescente fino a 40.000 €). Nuovo art. 16-ter TUIR (riordino detrazioni oneri per RC > 75.000 €).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2024-12-30;207",
  },
  {
    norma: "DPR 29 settembre 1973, n. 600",
    descrizione:
      "Disposizioni comuni in materia di accertamento delle imposte sui redditi. Art. 23 — Ritenute alla fonte sui redditi di lavoro dipendente da parte del sostituto d'imposta, con applicazione delle aliquote IRPEF mensili (scaglioni annui ÷ 12) e conguaglio di fine anno.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1973-09-29;600",
  },
  {
    norma: "D.Lgs. 15 dicembre 1997, n. 446",
    descrizione:
      "Istituzione dell'addizionale regionale all'IRPEF (art. 50). Aliquota base statale 0,9%, aumento facoltativo dalle Regioni fino al 3,33%. Versata alla Regione di domicilio fiscale al 1° gennaio.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-15;446",
  },
  {
    norma: "D.Lgs. 28 settembre 1998, n. 360",
    descrizione:
      "Istituzione dell'addizionale comunale all'IRPEF. Aliquota massima 0,8% (1% per Roma Capitale). I Comuni possono prevedere soglie di esenzione per i redditi più bassi.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-09-28;360",
  },
  {
    norma: "Legge 30 dicembre 2021, n. 234 (Legge di Bilancio 2022)",
    descrizione:
      "Prima grande riforma IRPEF degli anni 2020: riduzione da 5 a 4 scaglioni con aliquote 23% / 25% / 35% / 43%. Rimodulazione delle detrazioni per lavoro dipendente, pensione e lavoro autonomo. Vigente nel biennio 2022-2023.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2021-12-30;234",
  },
  {
    norma: "D.Lgs. 18 dicembre 1997, n. 471",
    descrizione:
      "Disciplina delle sanzioni amministrative tributarie. Art. 13 — sanzione del 25% per omesso, insufficiente o tardivo versamento IRPEF (era 30% fino al 31/08/2024; ridotta dal D.Lgs. 87/2024). Sanzione 12,5% per versamento entro 90 giorni; 0,083% per giorno entro 15 giorni.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;471",
  },
  {
    norma: "D.Lgs. 14 giugno 2024, n. 87 — Riforma del sistema sanzionatorio tributario",
    descrizione:
      "Attuazione della legge delega di riforma fiscale. Riduce le sanzioni per omesso/tardivo versamento (dal 30% al 25%) e ridefinisce le aliquote del ravvedimento operoso. Applicabile alle violazioni commesse dal 1° settembre 2024.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87",
  },
];

// =============================================================================
// CIRCOLARI MINISTERIALI E PRASSI
// =============================================================================

export const circolariMinisteriali: CircolareMinisteriale[] = [
  {
    circolare: "Agenzia delle Entrate — Aliquote e calcolo dell'IRPEF",
    descrizione:
      "Pagina ufficiale dell'Agenzia delle Entrate sul calcolo IRPEF. Aggiornata con la riduzione 35% → 33% del secondo scaglione introdotta dalla Legge di Bilancio 2026. Contiene la tabella aliquote vigenti e gli esempi di calcolo dell'imposta lorda.",
    url: "https://www.agenziaentrate.gov.it/portale/imposta-sul-reddito-delle-persone-fisiche-irpef-/aliquote-e-calcolo-dell-irpef",
  },
  {
    circolare: "MEF — Nota illustrativa Riforma IRPEF 2022",
    descrizione:
      "Documento del Ministero dell'Economia e delle Finanze del 19 gennaio 2022 che illustra gli obiettivi e gli effetti della riforma IRPEF: riduzione del cuneo fiscale, attenuazione delle aliquote marginali effettive nella fascia 28.000-55.000 €, semplificazione del sistema.",
    url: "https://www.mef.gov.it/inevidenza/Riforma-fiscale-le-novita-IRPEF/",
  },
  {
    circolare: "Modello REDDITI PF 2026 — Istruzioni Agenzia Entrate",
    descrizione:
      "Istruzioni ufficiali per la compilazione del modello REDDITI Persone Fisiche relativo al periodo d'imposta 2025 (presentato nel 2026). Quadri RN (calcolo IRPEF), RB (fabbricati), RC (lavoro dipendente), RP (oneri detraibili).",
    url: "https://www.agenziaentrate.gov.it/portale/web/guest/dichiarazioni",
  },
  {
    circolare: "Modello 730/2026 — Istruzioni Agenzia Entrate",
    descrizione:
      "Modello dichiarazione semplificata per lavoratori dipendenti e pensionati. Include le novità delle aliquote 2025 e le anticipazioni della riforma 2026 da utilizzare per la simulazione.",
    url: "https://www.agenziaentrate.gov.it/portale/web/guest/dichiarazioni/modello-730",
  },
];

// =============================================================================
// SECTIONS (sidebar nav)
// =============================================================================

export const sections: ToolSection[] = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "cose-irpef", label: "Cos'è l'IRPEF" },
  { id: "aliquote-2026", label: "Aliquote 2026" },
  { id: "tabella-storica", label: "Tabella storica" },
  { id: "come-si-calcola", label: "Come si calcola" },
  { id: "esempi-pratici", label: "Esempi pratici" },
  { id: "novita-2026", label: "Novità Legge di Bilancio 2026" },
  { id: "aliquota-media-marginale", label: "Aliquota media e marginale" },
  { id: "detrazioni", label: "Detrazioni di base" },
  { id: "no-tax-area", label: "No tax area" },
  { id: "addizionali", label: "Addizionali regionali e comunali" },
  { id: "busta-paga", label: "IRPEF in busta paga" },
  { id: "esonero", label: "Esonero dalla dichiarazione" },
  { id: "versamenti", label: "Versamenti F24" },
  { id: "sanzioni", label: "Sanzioni e ravvedimento" },
  { id: "errori-comuni", label: "Errori comuni" },
  { id: "fonti", label: "Fonti e riferimenti" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];
