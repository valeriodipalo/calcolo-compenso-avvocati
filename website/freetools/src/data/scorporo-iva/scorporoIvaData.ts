import type {
  ToolSection,
  NormativaRiferimento,
} from "@/types/tool";

// ──────────────────────────────────────────────────────────────
// Tipi
// ──────────────────────────────────────────────────────────────

export type ModoScorporo = "scorporo" | "aggiungi";
export type AliquotaIva = 4 | 5 | 10 | 22;

export interface RisultatoScorporo {
  modo: ModoScorporo;
  aliquota: number;
  divisore: number;
  importoInserito: number;
  imponibile: number;
  iva: number;
  totale: number;
}

export interface AliquotaInfo {
  valore: AliquotaIva | number;
  etichetta: string;
  divisore: number;
  tipo: string;
  tabella: string;
  categorieTipiche: string[];
  normativa: string;
}

// ──────────────────────────────────────────────────────────────
// Aliquote IVA 2026
// ──────────────────────────────────────────────────────────────

export const ALIQUOTE_IVA: AliquotaInfo[] = [
  {
    valore: 22,
    etichetta: "22% — Ordinaria",
    divisore: 1.22,
    tipo: "Ordinaria",
    tabella: "Regola generale (residuale)",
    categorieTipiche: [
      "Servizi professionali (avvocati, commercialisti, consulenti)",
      "Beni di consumo non agevolati",
      "Ristorazione e intrattenimento",
      "Energia elettrica non domestica",
      "Carburanti",
      "Prodotti editoriali digitali",
      "Prestazioni alberghiere di lusso",
    ],
    normativa: "Art. 16, c.1 DPR 633/1972 — L. 228/2012",
  },
  {
    valore: 10,
    etichetta: "10% — Ridotta",
    divisore: 1.10,
    tipo: "Ridotta",
    tabella: "Tabella A, Parte III",
    categorieTipiche: [
      "Energia elettrica uso domestico",
      "Gas metano uso domestico",
      "Medicinali da banco (OTC)",
      "Trasporto di persone",
      "Somministrazione alimenti e bevande",
      "Servizi turistici e alberghieri",
      "Ristrutturazioni edilizie",
      "Spettacoli teatrali e cinematografici",
    ],
    normativa: "Art. 16, c.2 DPR 633/1972 — Tabella A Parte III",
  },
  {
    valore: 5,
    etichetta: "5% — Super-ridotta",
    divisore: 1.05,
    tipo: "Super-ridotta",
    tabella: "Tabella A, Parte II-bis",
    categorieTipiche: [
      "Dispositivi medici CND",
      "DPI sanitari (mascherine, guanti, tute)",
      "Prestazioni socio-sanitarie",
      "Servizi educativi imprese sociali",
      "Assorbenti igienici e pannolini",
      "Tartufi e alcuni prodotti biologici",
    ],
    normativa: "L. 178/2020, art. 1 c. 452-453 — Tabella A Parte II-bis",
  },
  {
    valore: 4,
    etichetta: "4% — Minima",
    divisore: 1.04,
    tipo: "Minima",
    tabella: "Tabella A, Parte II",
    categorieTipiche: [
      "Pane, pasta, latte fresco",
      "Frutta e verdura fresca",
      "Libri e periodici cartacei",
      "Giornali e riviste",
      "Ausili per persone con disabilita",
      "Prima casa (cessioni)",
      "Mense aziendali e scolastiche",
    ],
    normativa: "Art. 16, c.2 DPR 633/1972 — Tabella A Parte II",
  },
];

// ──────────────────────────────────────────────────────────────
// Storia Aliquote IVA Italia (1973-2026)
// ──────────────────────────────────────────────────────────────

export interface StoricoAliquota {
  anno: string;
  aliquotaOrdinaria: string;
  variazione: string;
  norma: string;
}

export const STORIA_ALIQUOTE: StoricoAliquota[] = [
  {
    anno: "1973 (1 gen)",
    aliquotaOrdinaria: "12%",
    variazione: "Introduzione IVA",
    norma: "DPR 633/1972",
  },
  {
    anno: "1977",
    aliquotaOrdinaria: "14%",
    variazione: "+2%",
    norma: "L. 31/1977",
  },
  {
    anno: "1980",
    aliquotaOrdinaria: "15%",
    variazione: "+1%",
    norma: "L. 889/1980",
  },
  {
    anno: "1982",
    aliquotaOrdinaria: "18%",
    variazione: "+3%",
    norma: "L. 697/1982",
  },
  {
    anno: "1988",
    aliquotaOrdinaria: "19%",
    variazione: "+1%",
    norma: "L. 67/1988",
  },
  {
    anno: "1997",
    aliquotaOrdinaria: "20%",
    variazione: "+1%",
    norma: "L. 662/1996",
  },
  {
    anno: "2011 (17 set)",
    aliquotaOrdinaria: "21%",
    variazione: "+1%",
    norma: "DL 138/2011",
  },
  {
    anno: "2013 (1 ott)",
    aliquotaOrdinaria: "22%",
    variazione: "+1%",
    norma: "L. 228/2012",
  },
  {
    anno: "2016-2026",
    aliquotaOrdinaria: "22%",
    variazione: "Stabile",
    norma: "Clausole salvaguardia abrogate",
  },
];

// ──────────────────────────────────────────────────────────────
// Esempi verificati per aliquota
// ──────────────────────────────────────────────────────────────

export interface EsempioScorporo {
  lordo: number;
  imponibile: number;
  iva: number;
  aliquota: number;
}

export const ESEMPI_22: EsempioScorporo[] = [
  { lordo: 122, imponibile: 100, iva: 22, aliquota: 22 },
  { lordo: 610, imponibile: 500, iva: 110, aliquota: 22 },
  { lordo: 1000, imponibile: 819.67, iva: 180.33, aliquota: 22 },
  { lordo: 1220, imponibile: 1000, iva: 220, aliquota: 22 },
  { lordo: 2440, imponibile: 2000, iva: 440, aliquota: 22 },
  { lordo: 12200, imponibile: 10000, iva: 2200, aliquota: 22 },
];

export const ESEMPI_10: EsempioScorporo[] = [
  { lordo: 110, imponibile: 100, iva: 10, aliquota: 10 },
  { lordo: 550, imponibile: 500, iva: 50, aliquota: 10 },
  { lordo: 1100, imponibile: 1000, iva: 100, aliquota: 10 },
  { lordo: 7320, imponibile: 6654.55, iva: 665.45, aliquota: 10 },
];

export const ESEMPI_5: EsempioScorporo[] = [
  { lordo: 105, imponibile: 100, iva: 5, aliquota: 5 },
  { lordo: 525, imponibile: 500, iva: 25, aliquota: 5 },
  { lordo: 1050, imponibile: 1000, iva: 50, aliquota: 5 },
];

export const ESEMPI_4: EsempioScorporo[] = [
  { lordo: 104, imponibile: 100, iva: 4, aliquota: 4 },
  { lordo: 520, imponibile: 500, iva: 20, aliquota: 4 },
  { lordo: 1040, imponibile: 1000, iva: 40, aliquota: 4 },
];

// ──────────────────────────────────────────────────────────────
// Funzioni di calcolo
// ──────────────────────────────────────────────────────────────

/**
 * Scorporo IVA: dato un importo lordo e l'aliquota, estrae imponibile e IVA.
 * Formula: Imponibile = Lordo / (1 + aliquota/100); IVA = Lordo - Imponibile.
 */
export function scorporaIva(
  lordo: number,
  aliquota: number
): RisultatoScorporo {
  const divisore = 1 + aliquota / 100;
  const imponibile = lordo / divisore;
  const iva = lordo - imponibile;
  return {
    modo: "scorporo",
    aliquota,
    divisore,
    importoInserito: lordo,
    imponibile: arrotonda(imponibile),
    iva: arrotonda(iva),
    totale: arrotonda(lordo),
  };
}

/**
 * Applicazione IVA (aggiungi): dato un importo netto e l'aliquota,
 * calcola IVA e totale lordo. Formula: IVA = Netto × aliquota/100; Totale = Netto + IVA.
 */
export function aggiungiIva(
  netto: number,
  aliquota: number
): RisultatoScorporo {
  const divisore = 1 + aliquota / 100;
  const iva = (netto * aliquota) / 100;
  const totale = netto + iva;
  return {
    modo: "aggiungi",
    aliquota,
    divisore,
    importoInserito: netto,
    imponibile: arrotonda(netto),
    iva: arrotonda(iva),
    totale: arrotonda(totale),
  };
}

/**
 * Calcolo diretto dell'IVA da importo lordo (senza passare per imponibile).
 * Formula: IVA = (Lordo × aliquota) / (100 + aliquota).
 * Utile per ventilazione commercianti al dettaglio e verifiche contabili.
 */
export function calcolaIvaDiretta(lordo: number, aliquota: number): number {
  return arrotonda((lordo * aliquota) / (100 + aliquota));
}

function arrotonda(n: number): number {
  return Math.round(n * 100) / 100;
}

// ──────────────────────────────────────────────────────────────
// Normativa di Riferimento
// ──────────────────────────────────────────────────────────────

export const normativaRiferimento: NormativaRiferimento[] = [
  {
    norma: "DPR 26 ottobre 1972, n. 633 — Art. 13",
    descrizione:
      "Base imponibile IVA: l'ammontare complessivo dei corrispettivi dovuti al cedente o prestatore.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art13",
  },
  {
    norma: "DPR 26 ottobre 1972, n. 633 — Art. 16",
    descrizione:
      "Aliquote IVA: ordinaria 22%, ridotte 4%, 5% e 10% per categorie specifiche (Tabella A).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art16",
  },
  {
    norma: "DPR 26 ottobre 1972, n. 633 — Art. 18",
    descrizione:
      "Rivalsa dell'imposta: obbligo di addebito dell'IVA al cessionario o committente.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art18",
  },
  {
    norma: "DPR 26 ottobre 1972, n. 633 — Art. 21",
    descrizione:
      "Fatturazione: indicazione separata di imponibile, aliquota e imposta, arrotondamento al centesimo.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art21",
  },
  {
    norma: "DPR 26 ottobre 1972, n. 633 — Art. 10",
    descrizione:
      "Operazioni esenti da IVA: servizi finanziari, assicurativi, sanitari, alcune operazioni immobiliari.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art10",
  },
  {
    norma: "DPR 26 ottobre 1972, n. 633 — Art. 17-ter",
    descrizione:
      "Split payment (scissione dei pagamenti): IVA versata direttamente dalla PA all'Erario.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art17ter",
  },
  {
    norma: "DPR 26 ottobre 1972, n. 633 — Art. 17, c. 5-7",
    descrizione:
      "Reverse charge (inversione contabile): assolvimento IVA a carico del cessionario.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art17",
  },
  {
    norma: "DPR 26 ottobre 1972, n. 633 — Art. 24, c.3",
    descrizione:
      "Ventilazione IVA per commercianti al dettaglio con più aliquote (alimentare, tessile, igienico).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art24",
  },
  {
    norma: "L. 24 dicembre 2012, n. 228 (Legge Stabilita 2013)",
    descrizione:
      "Art. 40: aumento aliquota ordinaria IVA dal 21% al 22% con decorrenza 1° ottobre 2013.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-24;228",
  },
  {
    norma: "DL 13 agosto 2011, n. 138",
    descrizione:
      "Aumento aliquota ordinaria IVA dal 20% al 21%, con decorrenza 17 settembre 2011.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2011-08-13;138",
  },
  {
    norma: "L. 30 dicembre 2020, n. 178 (Legge Bilancio 2021)",
    descrizione:
      "Art. 1, c. 452-453: introduzione strutturale dell'aliquota 5% (dispositivi medici, DPI, socio-sanitari).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2020-12-30;178",
  },
  {
    norma: "Direttiva 2006/112/CE",
    descrizione:
      "Sistema comune dell'IVA a livello europeo. Armonizzazione delle aliquote negli Stati membri.",
    url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32006L0112",
  },
  {
    norma: "Direttiva 2022/542/UE",
    descrizione:
      "Aggiornamento aliquote ridotte e super-ridotte. Nuove categorie di beni e servizi sostenibili.",
    url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32022L0542",
  },
  {
    norma: "DPR 29 settembre 1973, n. 600 — Art. 25",
    descrizione:
      "Ritenuta d'acconto 20% sui compensi di lavoro autonomo (rilevante per scorporo parcelle avvocati).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1973-09-29;600~art25",
  },
  {
    norma: "L. 20 settembre 1980, n. 576 — Art. 11",
    descrizione:
      "Contributo integrativo CPA 4% per avvocati: base imponibile IVA comprende anche la CPA.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1980-09-20;576",
  },
  {
    norma: "DM 10 marzo 2014, n. 55",
    descrizione:
      "Parametri forensi: spese generali forfettarie 15% (Art. 2, c.2) - base IVA per parcelle avvocato.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55",
  },
  {
    norma: "L. 23 dicembre 2014, n. 190 — Art. 1, c. 54-89",
    descrizione:
      "Regime forfettario: contribuenti non soggetti IVA, non addebitano né detraggono l'imposta.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190",
  },
];

// ──────────────────────────────────────────────────────────────
// Sezioni (sidebar nav)
// ──────────────────────────────────────────────────────────────

export const sections: ToolSection[] = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "cose-scorporo-iva", label: "Cos'è lo Scorporo IVA" },
  { id: "formula", label: "Formula e Metodi" },
  { id: "aliquote-iva", label: "Aliquote IVA 2026" },
  { id: "scorporo-22", label: "Scorporo al 22%" },
  { id: "scorporo-10", label: "Scorporo al 10%" },
  { id: "scorporo-5", label: "Scorporo al 5%" },
  { id: "scorporo-4", label: "Scorporo al 4%" },
  { id: "scorporo-fattura", label: "Scorporo in Fattura" },
  { id: "scorporo-avvocati", label: "Scorporo Avvocati" },
  { id: "casi-particolari", label: "Casi Particolari" },
  { id: "scorporo-excel", label: "Scorporo con Excel" },
  { id: "storia-aliquote", label: "Storia Aliquote" },
  { id: "errori-comuni", label: "Errori Comuni" },
  { id: "fonti", label: "Fonti e Riferimenti" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];
