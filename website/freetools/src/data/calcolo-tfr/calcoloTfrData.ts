import type {
  NormativaRiferimento,
  CircolareMinisteriale,
  ToolSection,
} from "@/types/tool";

// =============================================================================
// TIPI
// =============================================================================

export type CategoriaLavoratore = "privato" | "pubblico" | "colf";
export type ModalitaTassazione = "lordo" | "separata" | "ordinaria";

export interface InputCalcoloTfr {
  categoria: CategoriaLavoratore;
  ralAnnua: number;
  anni: number;
  mesi: number;
  imponibilePrevidenziale?: number;
  tassoRivalutazioneAnnuaStimato: number;
  anticipazioniRicevute?: number;
}

export interface RisultatoCalcoloTfr {
  quotaAnnuale: number;
  tfrLordoAnniInteri: number;
  tfrLordoMesiParziali: number;
  tfrLordoAccantonato: number;
  contributoIvs: number;
  rivalutazioneStimata: number;
  impostaSostitutivaSuRivalutazione: number;
  tfrLordoConRivalutazione: number;
  redditoDiRiferimento: number;
  aliquotaMediaIrpef: number;
  detrazioneTfr: number;
  impostaTfrSeparata: number;
  tfrNetto: number;
  anticipazioneMassima: number;
  mesiComputabili: number;
  divisoreUtilizzato: number;
  sogliaRalPubblici: boolean;
}

// =============================================================================
// COSTANTI (fonti normative nel raw-research.md)
// =============================================================================

/** Divisore ex art. 2120 c.c. per TFR settore privato */
export const DIVISORE_TFR_PRIVATO = 13.5;

/** Aliquota TFR settore pubblico (DPCM 20/12/1999 — 6,91% RAL) */
export const ALIQUOTA_TFR_PUBBLICO = 0.0691;

/** Contributo IVS 0,5% ex art. 3 L. 297/1982 (su imponibile previdenziale) */
export const CONTRIBUTO_IVS = 0.005;

/** Tasso fisso rivalutazione annuale (art. 2120 c. 4 c.c.) */
export const TASSO_RIVALUTAZIONE_FISSO = 0.015;

/** Quota variazione ISTAT FOI applicata alla rivalutazione (art. 2120 c. 4 c.c.) */
export const QUOTA_FOI_RIVALUTAZIONE = 0.75;

/** Imposta sostitutiva sulla rivalutazione TFR (L. 190/2014 art. 1 c. 623) */
export const IMPOSTA_SOSTITUTIVA_RIVALUTAZIONE = 0.17;

/** Soglia massima RAL per TFR pubblici (L. 147/2013 art. 1 c. 484) */
export const SOGLIA_RAL_PUBBLICI = 240000;

/** Percentuale massima anticipabile ex art. 2120 c. 6 c.c. */
export const PERCENTUALE_MAX_ANTICIPAZIONE = 0.7;

/** Anni minimi di servizio per anticipazione ex art. 2120 c. 6 c.c. */
export const ANNI_MINIMI_ANTICIPAZIONE = 8;

/** Imposta sostitutiva anticipazione prima casa (prassi AdE) */
export const IMPOSTA_ANTICIPAZIONE_PRIMA_CASA = 0.23;

// =============================================================================
// SCAGLIONI IRPEF (per tassazione separata TFR)
// =============================================================================

export interface ScaglioneIrpef {
  limite: number;
  aliquota: number;
}

/** IRPEF 2024-2025 — D.Lgs. 216/2023 confermato da L. 207/2024 */
export const SCAGLIONI_IRPEF_2024_2025: ScaglioneIrpef[] = [
  { limite: 28000, aliquota: 0.23 },
  { limite: 50000, aliquota: 0.35 },
  { limite: Infinity, aliquota: 0.43 },
];

/** IRPEF 2026 — Legge di Bilancio 2026 (secondo scaglione ridotto al 33%) */
export const SCAGLIONI_IRPEF_2026: ScaglioneIrpef[] = [
  { limite: 28000, aliquota: 0.23 },
  { limite: 50000, aliquota: 0.33 },
  { limite: Infinity, aliquota: 0.43 },
];

/** Calcola imposta IRPEF lorda con scaglioni progressivi */
export function calcolaIrpefLorda(reddito: number, scaglioni: ScaglioneIrpef[]): number {
  let imposta = 0;
  let precedente = 0;
  for (const s of scaglioni) {
    if (reddito <= 0) break;
    const imponibileScaglione = Math.min(reddito, s.limite - precedente);
    if (imponibileScaglione > 0) {
      imposta += imponibileScaglione * s.aliquota;
      reddito -= imponibileScaglione;
    }
    precedente = s.limite;
  }
  return imposta;
}

// =============================================================================
// DETRAZIONE TFR (D.M. 20/03/2008 — tabella vigente al 2026)
// =============================================================================

/** Detrazione d'imposta sul TFR in base al reddito di riferimento */
export function calcolaDetrazioneTfr(redditoDiRiferimento: number): number {
  if (redditoDiRiferimento <= 7500) {
    return 70;
  }
  if (redditoDiRiferimento <= 28000) {
    return 50 + (20 * (28000 - redditoDiRiferimento)) / 20500;
  }
  if (redditoDiRiferimento <= 30000) {
    return (50 * (30000 - redditoDiRiferimento)) / 2000;
  }
  return 0;
}

// =============================================================================
// FUNZIONE DI CALCOLO PRINCIPALE
// =============================================================================

export function calcolaTfr(input: InputCalcoloTfr): RisultatoCalcoloTfr {
  const {
    categoria,
    ralAnnua,
    anni,
    mesi,
    imponibilePrevidenziale,
    tassoRivalutazioneAnnuaStimato,
    anticipazioniRicevute = 0,
  } = input;

  // Regola 15 giorni: frazioni ≥ 15 gg contano come mese intero (art. 2120 c. 1 c.c.)
  const mesiComputabili = mesi;
  const anniEquivalenti = anni + mesiComputabili / 12;

  // Soglia RAL pubblici (L. 147/2013 art. 1 c. 484)
  const sogliaApplicata = categoria === "pubblico" && ralAnnua > SOGLIA_RAL_PUBBLICI;
  const ralEffettiva = sogliaApplicata ? SOGLIA_RAL_PUBBLICI : ralAnnua;

  // Quota annuale
  let quotaAnnuale: number;
  let divisoreUtilizzato: number;
  if (categoria === "pubblico") {
    quotaAnnuale = ralEffettiva * ALIQUOTA_TFR_PUBBLICO;
    divisoreUtilizzato = 1 / ALIQUOTA_TFR_PUBBLICO;
  } else {
    quotaAnnuale = ralEffettiva / DIVISORE_TFR_PRIVATO;
    divisoreUtilizzato = DIVISORE_TFR_PRIVATO;
  }

  // TFR lordo per anni interi e frazioni mensili
  const tfrLordoAnniInteri = quotaAnnuale * anni;
  const tfrLordoMesiParziali = (quotaAnnuale * mesiComputabili) / 12;
  let tfrLordoAccantonato = tfrLordoAnniInteri + tfrLordoMesiParziali;

  // Contributo IVS 0,5% sull'imponibile previdenziale (L. 297/1982 art. 3)
  const basePerContributoIvs = imponibilePrevidenziale ?? ralEffettiva;
  const contributoIvsAnnuo = basePerContributoIvs * CONTRIBUTO_IVS;
  const contributoIvsTotale = contributoIvsAnnuo * anniEquivalenti;
  tfrLordoAccantonato = Math.max(0, tfrLordoAccantonato - contributoIvsTotale);

  // Rivalutazione stimata su base composta
  // Si applica solo alle quote degli anni precedenti, non a quella dell'anno corrente
  let rivalutazioneStimata = 0;
  if (anni >= 1 && tassoRivalutazioneAnnuaStimato > 0) {
    let fondo = 0;
    for (let a = 0; a < anni; a++) {
      fondo = fondo * (1 + tassoRivalutazioneAnnuaStimato) + quotaAnnuale - contributoIvsAnnuo;
    }
    const fondoSemplice =
      (quotaAnnuale - contributoIvsAnnuo) * anni + tfrLordoMesiParziali;
    rivalutazioneStimata = Math.max(0, fondo - fondoSemplice + tfrLordoMesiParziali);
    // Calcolo più conservativo: differenza tra fondo composto e quote semplici
    rivalutazioneStimata = fondo - ((quotaAnnuale - contributoIvsAnnuo) * anni);
    tfrLordoAccantonato = fondo + tfrLordoMesiParziali;
  }

  // Imposta sostitutiva 17% sulla rivalutazione (L. 190/2014)
  const impostaSostitutivaSuRivalutazione =
    rivalutazioneStimata * IMPOSTA_SOSTITUTIVA_RIVALUTAZIONE;

  const tfrLordoConRivalutazione = tfrLordoAccantonato;

  // Sottrai anticipazioni già ricevute
  const tfrDisponibile = Math.max(0, tfrLordoConRivalutazione - anticipazioniRicevute);

  // Tassazione separata (art. 19 TUIR)
  // Base imponibile IRPEF = TFR lordo - rivalutazioni già tassate separatamente
  const baseImponibileIrpef = tfrDisponibile - rivalutazioneStimata;

  // Reddito di riferimento: (TFR × 12) / anni
  // Per frazioni di anno usiamo la formula equivalente (TFR × 144) / mesi
  const mesiTotali = anni * 12 + mesiComputabili;
  const redditoDiRiferimento =
    mesiTotali > 0 ? (baseImponibileIrpef * 144) / mesiTotali : 0;

  // Aliquota media: usiamo scaglioni 2026 come default (l'AdE ricalcola con media 5 anni)
  const irpefSuRedditoRiferimento = calcolaIrpefLorda(
    redditoDiRiferimento,
    SCAGLIONI_IRPEF_2026,
  );
  const aliquotaMediaIrpef =
    redditoDiRiferimento > 0 ? irpefSuRedditoRiferimento / redditoDiRiferimento : 0;

  // Detrazione d'imposta
  const detrazioneBase = calcolaDetrazioneTfr(redditoDiRiferimento);
  // Detrazione rapportata ai mesi di servizio (convenzione D.M. 20.03.2008)
  const detrazioneTfr = (detrazioneBase * Math.min(mesiTotali, 12)) / 12;

  // Imposta TFR = base imponibile × aliquota media − detrazioni
  const impostaLorda = baseImponibileIrpef * aliquotaMediaIrpef;
  const impostaTfrSeparata = Math.max(0, impostaLorda - detrazioneTfr);

  // TFR netto = TFR disponibile − imposta separata − imposta sostitutiva su rivalutazione
  const tfrNetto =
    tfrDisponibile - impostaTfrSeparata - impostaSostitutivaSuRivalutazione;

  // Anticipazione massima (art. 2120 c. 6 c.c.): 70% se ≥ 8 anni di servizio
  const anticipazioneMassima =
    anniEquivalenti >= ANNI_MINIMI_ANTICIPAZIONE
      ? tfrLordoConRivalutazione * PERCENTUALE_MAX_ANTICIPAZIONE
      : 0;

  return {
    quotaAnnuale,
    tfrLordoAnniInteri,
    tfrLordoMesiParziali,
    tfrLordoAccantonato: tfrLordoConRivalutazione - rivalutazioneStimata,
    contributoIvs: contributoIvsTotale,
    rivalutazioneStimata,
    impostaSostitutivaSuRivalutazione,
    tfrLordoConRivalutazione,
    redditoDiRiferimento,
    aliquotaMediaIrpef,
    detrazioneTfr,
    impostaTfrSeparata,
    tfrNetto,
    anticipazioneMassima,
    mesiComputabili,
    divisoreUtilizzato,
    sogliaRalPubblici: sogliaApplicata,
  };
}

// =============================================================================
// ESEMPI PRATICI (precalcolati per la pagina)
// =============================================================================

export interface EsempioPratico {
  titolo: string;
  ral: number;
  anni: number;
  categoria: CategoriaLavoratore;
  quotaAnnuale: number;
  tfrLordoSemplice: number;
  rivalutazioneStimata: number;
  tfrLordoTotale: number;
  tfrNetto: number;
  aliquotaMedia: number;
}

function esempio(
  titolo: string,
  ral: number,
  anni: number,
  categoria: CategoriaLavoratore = "privato",
  tassoRiv = 0.028,
): EsempioPratico {
  const r = calcolaTfr({
    categoria,
    ralAnnua: ral,
    anni,
    mesi: 0,
    tassoRivalutazioneAnnuaStimato: tassoRiv,
  });
  return {
    titolo,
    ral,
    anni,
    categoria,
    quotaAnnuale: r.quotaAnnuale,
    tfrLordoSemplice: r.tfrLordoAnniInteri,
    rivalutazioneStimata: r.rivalutazioneStimata,
    tfrLordoTotale: r.tfrLordoConRivalutazione,
    tfrNetto: r.tfrNetto,
    aliquotaMedia: r.aliquotaMediaIrpef,
  };
}

export const ESEMPI_PRATICI: EsempioPratico[] = [
  esempio("Impiegato 5 anni — RAL 20.000 €", 20000, 5, "privato"),
  esempio("Impiegato 10 anni — RAL 30.000 €", 30000, 10, "privato"),
  esempio("Quadro 20 anni — RAL 50.000 €", 50000, 20, "privato"),
  esempio("Dirigente pubblico 15 anni — RAL 60.000 €", 60000, 15, "pubblico"),
  esempio("Colf/badante 3 anni — RAL 12.000 €", 12000, 3, "colf"),
];

// =============================================================================
// VOCI DELLA RETRIBUZIONE UTILE (art. 2120 c. 2 c.c.)
// =============================================================================

export const VOCI_RETRIBUZIONE_UTILE = {
  incluse: [
    "Paga base, minimo contrattuale o stipendio",
    "Tredicesima mensilità (e quattordicesima se prevista da CCNL)",
    "Contingenza e scatti di anzianità",
    "Superminimi ad personam e superminimi collettivi",
    "Premi di produzione e premi di rendimento corrisposti periodicamente",
    "Provvigioni e partecipazioni agli utili",
    "Straordinari prestati con continuità (non occasionali)",
    "Maggiorazioni per turni, lavori disagiati, festività",
    "Indennità di mensa in forma fissa",
    "Prestazioni in natura (fringe benefits, auto aziendale, alloggio)",
    "Importi per festività non godute",
    "Premi per polizze assicurative stipulate a favore del lavoratore",
  ],
  escluse: [
    "Rimborsi spese e rimborsi chilometrici",
    "Indennità sostitutiva del preavviso (Cass. n. 1581/2022)",
    "Compensi per straordinario prestato occasionalmente",
    "Indennità sostitutiva ferie e permessi non goduti",
    "Somme a titolo di risarcimento (transazioni, sentenze)",
    "Una tantum occasionali e premi discrezionali",
    "Contributi versati a fondi pensione complementari (D.Lgs. 252/2005)",
    "Contributi ai fondi assistenziali integrativi",
    "Indennità di trasferta",
    "Borse di studio erogate dal datore di lavoro",
  ],
  controverse: [
    "Indennità per ferie non godute (giurisprudenza contrastante)",
  ],
} as const;

// =============================================================================
// CAUSALI ANTICIPAZIONE (art. 2120 c. 8 c.c. + L. 53/2000)
// =============================================================================

export interface CausaleAnticipazione {
  causale: string;
  base: string;
  documentazione: string;
  tassazione: string;
}

export const CAUSALI_ANTICIPAZIONE: CausaleAnticipazione[] = [
  {
    causale: "Spese sanitarie straordinarie per terapie e interventi",
    base: "Art. 2120 c. 8 lett. a) c.c.",
    documentazione: "Certificazione SSN o struttura pubblica competente",
    tassazione: "Tassazione separata (art. 19 TUIR) o ritenuta 23%",
  },
  {
    causale: "Acquisto prima casa di abitazione per sé o per i figli",
    base: "Art. 2120 c. 8 lett. b) c.c. (esteso da Corte Cost. 142/1991 ad acquisti in itinere)",
    documentazione: "Atto notarile o documentazione compravendita",
    tassazione: "Ritenuta 23% a titolo di imposta sostitutiva",
  },
  {
    causale: "Spese durante congedo parentale o malattia del bambino",
    base: "Art. 7 L. 53/2000 + D.Lgs. 151/2001",
    documentazione: "Preavviso 15 giorni, attestazione del congedo",
    tassazione: "Tassazione separata ordinaria",
  },
  {
    causale: "Formazione e formazione continua (congedi formativi)",
    base: "Art. 5 L. 53/2000",
    documentazione: "Preavviso 30 giorni, documentazione del corso",
    tassazione: "Tassazione separata ordinaria",
  },
];

// =============================================================================
// SOGLIE PAGAMENTO RATEALE TFR PUBBLICI (L. 147/2013 art. 1 c. 484)
// =============================================================================

export interface SogliaPagamentoPubblici {
  sogliaImporto: string;
  modalita: string;
  tempi: string;
}

export const SOGLIE_PAGAMENTO_PUBBLICI: SogliaPagamentoPubblici[] = [
  {
    sogliaImporto: "Fino a 50.000 €",
    modalita: "Unica soluzione",
    tempi: "12 mesi dalla cessazione del rapporto",
  },
  {
    sogliaImporto: "Da 50.000,01 € a 100.000 €",
    modalita: "Due rate annuali (prima rata 50.000 €, saldo)",
    tempi: "Prima rata dopo 12 mesi, saldo dopo 24 mesi",
  },
  {
    sogliaImporto: "Oltre 100.000 €",
    modalita: "Tre rate annuali (prima e seconda rata 50.000 €, saldo)",
    tempi: "Rate dopo 12, 24 e 36 mesi dalla cessazione",
  },
];

// =============================================================================
// TABELLA DETRAZIONI TFR (D.M. 20/03/2008)
// =============================================================================

export interface RigaDetrazione {
  fascia: string;
  detrazione: string;
}

export const TABELLA_DETRAZIONI_TFR: RigaDetrazione[] = [
  {
    fascia: "RR fino a 7.500 €",
    detrazione: "70 € (fissi, rapportati ai mesi di servizio)",
  },
  {
    fascia: "RR da 7.500,01 € a 28.000 €",
    detrazione: "50 € + 20 € × (28.000 − RR) / 20.500",
  },
  {
    fascia: "RR da 28.000,01 € a 30.000 €",
    detrazione: "50 € × (30.000 − RR) / 2.000",
  },
  {
    fascia: "RR oltre 30.000 €",
    detrazione: "Nessuna detrazione",
  },
];

// =============================================================================
// SCAGLIONI IRPEF — TABELLA ANNI DIVERSI (per contenuto pagina)
// =============================================================================

export interface RigaScaglioneIrpef {
  anni: string;
  scaglione1: string;
  scaglione2: string;
  scaglione3: string;
}

export const SCAGLIONI_IRPEF_STORICI: RigaScaglioneIrpef[] = [
  {
    anni: "2024 — 2025",
    scaglione1: "fino a 28.000 € → 23%",
    scaglione2: "28.001 — 50.000 € → 35%",
    scaglione3: "oltre 50.000 € → 43%",
  },
  {
    anni: "2026",
    scaglione1: "fino a 28.000 € → 23%",
    scaglione2: "28.001 — 50.000 € → 33%",
    scaglione3: "oltre 50.000 € → 43%",
  },
];

// =============================================================================
// NORMATIVA DI RIFERIMENTO
// =============================================================================

export const normativaRiferimento: NormativaRiferimento[] = [
  {
    norma: "Art. 2120 Codice Civile",
    descrizione:
      "Disciplina generale del TFR: formula di calcolo (quota / 13,5), retribuzione utile, rivalutazione 1,5% + 75% FOI, anticipazione (8 anni, 70%, causali).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262",
  },
  {
    norma: "Legge 29 maggio 1982, n. 297",
    descrizione:
      "Riforma del TFR — sostituzione dell'indennità di anzianità, introduzione della rivalutazione annua, istituzione Fondo di Garanzia INPS, contributo aggiuntivo IVS 0,5%.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1982-05-29;297",
  },
  {
    norma: "Art. 19 DPR 22 dicembre 1986, n. 917 (TUIR)",
    descrizione:
      "Tassazione separata del TFR — reddito di riferimento, aliquota media quinquennio, riliquidazione Agenzia delle Entrate.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1986-12-22;917~art19",
  },
  {
    norma: "D.Lgs. 5 dicembre 2005, n. 252",
    descrizione:
      "Disciplina delle forme pensionistiche complementari — silenzio-assenso, destinazione TFR a fondi pensione, tassazione agevolata 15%-9%.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-12-05;252",
  },
  {
    norma: "Legge 23 dicembre 2014, n. 190 (Legge di Stabilità 2015)",
    descrizione:
      "Art. 1 c. 26-34: Qu.I.R. (TFR in busta paga), sperimentazione 01/03/2015 – 30/06/2018. Art. 1 c. 623: aliquota imposta sostitutiva rivalutazione elevata al 17%.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190",
  },
  {
    norma: "Legge 27 dicembre 2013, n. 147 (Legge di Stabilità 2014)",
    descrizione:
      "Art. 1 c. 484: soglia massima di 240.000 € sulla retribuzione considerata base di calcolo del TFR per i dipendenti pubblici e pagamento rateale (50k/100k).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2013-12-27;147",
  },
  {
    norma: "DPCM 20 dicembre 1999",
    descrizione:
      "Attuazione dell'art. 2 c. 5-8 L. 335/1995 — estensione del TFR ai dipendenti pubblici assunti dal 31/12/2000 (aliquota 6,91%).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.del.consiglio.dei.ministri:1999-12-20",
  },
  {
    norma: "Legge 8 marzo 2000, n. 53",
    descrizione:
      "Ampliamento delle causali di anticipazione TFR — congedi parentali (art. 7), formazione e formazione continua (art. 5).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2000-03-08;53",
  },
  {
    norma: "D.Lgs. 30 dicembre 2023, n. 216 (Riforma IRPEF 2024)",
    descrizione:
      "Revisione del sistema di tassazione IRPEF — riduzione a tre scaglioni (23% / 35% / 43%) applicabile anche alla tassazione separata del TFR.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2023-12-30;216",
  },
  {
    norma: "Art. 2948 comma 5 Codice Civile",
    descrizione:
      "Prescrizione quinquennale del diritto al TFR dalla data di cessazione del rapporto di lavoro.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2948",
  },
  {
    norma: "Corte Costituzionale, sent. 27 giugno 2023, n. 130",
    descrizione:
      "Dichiarata irragionevolezza costituzionale dei ritardi nell'erogazione del TFR/TFS ai dipendenti pubblici — obbligo di accelerazione.",
    url: "https://www.cortecostituzionale.it/actionSchedaPronuncia.do?anno=2023&numero=130",
  },
];

// =============================================================================
// CIRCOLARI E PRASSI (Agenzia Entrate, INPS, Ministero)
// =============================================================================

export const circolariMinisteriali: CircolareMinisteriale[] = [
  {
    circolare: "Circolare INPDAP 1° agosto 2002, n. 30",
    descrizione:
      "Disciplina applicativa del TFR per i dipendenti pubblici (aliquota 6,91%, modalità di calcolo).",
    url: "https://www.gazzettaufficiale.it/eli/id/2002/08/30/02A10831/sg",
  },
  {
    circolare: "Circolare INPS 17 settembre 2015, n. 154",
    descrizione:
      "Istruzioni operative aggiornate per il calcolo e l'erogazione del TFR ai dipendenti pubblici, con modalità di rateizzazione.",
    url: "https://www.inps.it/bussola/VisualizzaDoc.aspx?sVirtualURL=/Circolari/Circolare%20numero%20154%20del%2017-09-2015.htm",
  },
  {
    circolare: "Messaggio INPS 20 febbraio 2024, n. 755",
    descrizione:
      "Applicazione dei nuovi scaglioni IRPEF 2024 (riforma D.Lgs. 216/2023) alle prestazioni previdenziali e al calcolo dell'imposta sul TFR.",
    url: "https://www.inps.it/it/it/inps-comunica/atti/circolari-messaggi-e-normativa/dettaglio.circolari-e-messaggi.2024.02.messaggio-numero-755-del-20-02-2024_14484.html",
  },
  {
    circolare: "Circolare Agenzia Entrate 9 gennaio 1998, n. 3/E",
    descrizione:
      "Esclusione del TFR (reddito a tassazione separata) dalla base imponibile delle addizionali regionale e comunale IRPEF.",
    url: "https://www.agenziaentrate.gov.it",
  },
  {
    circolare: "D.M. 20 marzo 2008",
    descrizione:
      "Detrazioni d'imposta applicabili sul TFR in tassazione separata — tabella in vigore al 2026.",
    url: "https://www.gazzettaufficiale.it",
  },
];

// =============================================================================
// SEZIONI DELLA PAGINA (per sidebar navigation)
// =============================================================================

export const sections: ToolSection[] = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "cose-tfr", label: "Cos'è il TFR" },
  { id: "come-si-calcola", label: "Come si calcola" },
  { id: "retribuzione-utile", label: "Retribuzione utile" },
  { id: "contributo-ivs", label: "Contributo IVS 0,5%" },
  { id: "rivalutazione", label: "Rivalutazione ISTAT" },
  { id: "tassazione", label: "Tassazione separata" },
  { id: "anticipazione", label: "Anticipazione" },
  { id: "quir", label: "TFR in busta paga (Qu.I.R.)" },
  { id: "dipendenti-pubblici", label: "Dipendenti pubblici" },
  { id: "colf-badanti", label: "Colf e badanti" },
  { id: "previdenza-complementare", label: "Previdenza complementare" },
  { id: "fondo-garanzia", label: "Fondo di Garanzia INPS" },
  { id: "assenze", label: "TFR e assenze" },
  { id: "prescrizione", label: "Prescrizione" },
  { id: "esempi", label: "Esempi pratici" },
  { id: "errori-comuni", label: "Errori comuni" },
  { id: "fonti", label: "Fonti e riferimenti" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];
