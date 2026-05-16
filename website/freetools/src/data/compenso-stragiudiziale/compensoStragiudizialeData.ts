import type {
  ToolSection,
  NormativaRiferimento,
  CircolareMinisteriale,
} from "@/types/tool";

// ──────────────────────────────────────────────────────────────
// Tipi
// ──────────────────────────────────────────────────────────────

export type ModalitaCalcolo = "tabellare" | "percentuale";

export type LivelloCompenso = "minimo" | "medio" | "massimo";

export interface ScaglioneTabellare {
  id: string;
  /** Limite inferiore in euro (incluso) */
  da: number;
  /** Limite superiore in euro (incluso). Null per "oltre" */
  a: number | null;
  /** Parametro medio in euro */
  medio: number;
  /** Valore minimo: medio × 0,5 (art. 19 D.M. 55/2014 post 147/2022) */
  minimo: number;
  /** Valore massimo: medio × 1,5 */
  massimo: number;
  /** Etichetta leggibile dello scaglione */
  label: string;
}

export interface ScaglionePercentuale {
  id: string;
  da: number;
  a: number | null;
  /** Aliquota percentuale (es. 3 = 3%) */
  percentuale: number;
  label: string;
}

export interface InputCompenso {
  valore: number;
  modalità: ModalitaCalcolo;
  livello: LivelloCompenso;
  /** Aumento o riduzione manuale rispetto al parametro medio, in % (-50 / +50 ai sensi art. 19) */
  variazionePerc: number;
  /** Ulteriore valutazione soggettiva (incremento aggiuntivo, 0-50%) */
  ulterioreValutazione: number;
  /** Includi spese generali forfettarie 15% (art. 2 D.M. 55/2014) */
  includiSpeseGenerali: boolean;
  /** Aliquota spese generali (default 15) */
  percSpeseGenerali: number;
  /** Spese imponibili (es. trasferta art. 27) */
  speseImponibili: number;
  /** Spese esenti (es. marche da bollo, anticipazioni in nome e per conto del cliente) */
  speseEsenti: number;
  /** CPA Cassa Forense 4% */
  includiCPA: boolean;
  /** IVA 22% */
  includiIVA: boolean;
  /** Ritenuta d'acconto 20% sui compensi (non sulla CPA né sull'IVA) */
  includiRitenuta: boolean;
}

export interface RisultatoCompenso {
  scaglione: ScaglioneTabellare | null;
  scaglionePercentuale: ScaglionePercentuale | null;
  compensoBaseTabellare: number;
  compensoConVariazione: number;
  ulterioreValutazione: number;
  compensoFinale: number;
  speseGenerali: number;
  speseImponibili: number;
  imponibileFiscale: number;
  cpa: number;
  imponibileIVA: number;
  iva: number;
  ritenuta: number;
  speseEsenti: number;
  totaleFattura: number;
  nettoAPagare: number;
}

// ──────────────────────────────────────────────────────────────
// Tabella 25 — D.M. 147/2022 (vigente dal 23/10/2022)
// Sezione I — scaglioni a valori fissi fino a € 520.000
// ──────────────────────────────────────────────────────────────

export const SCAGLIONI_DM_147_2022: ScaglioneTabellare[] = [
  {
    id: "s1",
    da: 0.01,
    a: 1100,
    medio: 284,
    minimo: 142,
    massimo: 426,
    label: "Da € 0,01 a € 1.100",
  },
  {
    id: "s2",
    da: 1100.01,
    a: 5200,
    medio: 1276,
    minimo: 638,
    massimo: 1914,
    label: "Da € 1.100,01 a € 5.200",
  },
  {
    id: "s3",
    da: 5200.01,
    a: 26000,
    medio: 1985,
    minimo: 992.5,
    massimo: 2977.5,
    label: "Da € 5.200,01 a € 26.000",
  },
  {
    id: "s4",
    da: 26000.01,
    a: 52000,
    medio: 2410,
    minimo: 1205,
    massimo: 3615,
    label: "Da € 26.000,01 a € 52.000",
  },
  {
    id: "s5",
    da: 52000.01,
    a: 260000,
    medio: 4536,
    minimo: 2268,
    massimo: 6804,
    label: "Da € 52.000,01 a € 260.000",
  },
  {
    id: "s6",
    da: 260000.01,
    a: 520000,
    medio: 6164,
    minimo: 3082,
    massimo: 9246,
    label: "Da € 260.000,01 a € 520.000",
  },
];

// ──────────────────────────────────────────────────────────────
// Tabella 25 — D.M. 55/2014 originale (storica, vigente fino al 22/10/2022)
// ──────────────────────────────────────────────────────────────

export const SCAGLIONI_DM_55_2014_STORICI: ScaglioneTabellare[] = [
  {
    id: "h1",
    da: 0.01,
    a: 1100,
    medio: 270,
    minimo: 135,
    massimo: 405,
    label: "Da € 0,01 a € 1.100",
  },
  {
    id: "h2",
    da: 1100.01,
    a: 5200,
    medio: 1215,
    minimo: 607.5,
    massimo: 1822.5,
    label: "Da € 1.100,01 a € 5.200",
  },
  {
    id: "h3",
    da: 5200.01,
    a: 26000,
    medio: 1890,
    minimo: 945,
    massimo: 2835,
    label: "Da € 5.200,01 a € 26.000",
  },
  {
    id: "h4",
    da: 26000.01,
    a: 52000,
    medio: 2295,
    minimo: 1147.5,
    massimo: 3442.5,
    label: "Da € 26.000,01 a € 52.000",
  },
  {
    id: "h5",
    da: 52000.01,
    a: 260000,
    medio: 4320,
    minimo: 2160,
    massimo: 6480,
    label: "Da € 52.000,01 a € 260.000",
  },
  {
    id: "h6",
    da: 260000.01,
    a: 520000,
    medio: 5870,
    minimo: 2935,
    massimo: 8805,
    label: "Da € 260.000,01 a € 520.000",
  },
];

// ──────────────────────────────────────────────────────────────
// Sezioni II e III — percentuali per valori > € 520.000
// (D.M. 147/2022, Tabella 25, sezioni II e III)
// ──────────────────────────────────────────────────────────────

export const SCAGLIONI_PERCENTUALI: ScaglionePercentuale[] = [
  { id: "p1", da: 520000.01, a: 2000000, percentuale: 3.0, label: "Da € 520.000,01 a € 2.000.000" },
  { id: "p2", da: 2000000.01, a: 4000000, percentuale: 2.75, label: "Da € 2.000.000,01 a € 4.000.000" },
  { id: "p3", da: 4000000.01, a: 6000000, percentuale: 2.5, label: "Da € 4.000.000,01 a € 6.000.000" },
  { id: "p4", da: 6000000.01, a: 8000000, percentuale: 2.25, label: "Da € 6.000.000,01 a € 8.000.000" },
  { id: "p5", da: 8000000.01, a: 10000000, percentuale: 2.0, label: "Da € 8.000.000,01 a € 10.000.000" },
  { id: "p6", da: 10000000.01, a: 12000000, percentuale: 1.75, label: "Da € 10.000.000,01 a € 12.000.000" },
  { id: "p7", da: 12000000.01, a: 14000000, percentuale: 1.5, label: "Da € 12.000.000,01 a € 14.000.000" },
  { id: "p8", da: 14000000.01, a: 16000000, percentuale: 1.25, label: "Da € 14.000.000,01 a € 16.000.000" },
  { id: "p9", da: 16000000.01, a: 18000000, percentuale: 1.0, label: "Da € 16.000.000,01 a € 18.000.000" },
  { id: "p10", da: 18000000.01, a: 20000000, percentuale: 0.75, label: "Da € 18.000.000,01 a € 20.000.000" },
  { id: "p11", da: 20000000.01, a: 22000000, percentuale: 0.5, label: "Da € 20.000.000,01 a € 22.000.000" },
  { id: "p12", da: 22000000.01, a: null, percentuale: 0.25, label: "Oltre € 22.000.000" },
];

// ──────────────────────────────────────────────────────────────
// Valore indeterminabile — opzioni speciali (art. 21 D.M. 55/2014)
// ──────────────────────────────────────────────────────────────

export interface ValoreIndeterminabile {
  id: string;
  label: string;
  /** Valore di riferimento per la selezione dello scaglione */
  valoreFittizio: number;
  descrizione: string;
}

export const VALORI_INDETERMINABILI: ValoreIndeterminabile[] = [
  {
    id: "ind-bassa",
    label: "Valore indeterminabile — complessità bassa",
    valoreFittizio: 50000,
    descrizione: "Scaglione € 26.000 - € 52.000 (art. 21 c. 7 D.M. 55/2014)",
  },
  {
    id: "ind-media",
    label: "Valore indeterminabile — complessità media",
    valoreFittizio: 150000,
    descrizione: "Media aritmetica delle fasce € 26.000-52.000 e € 52.000-260.000",
  },
  {
    id: "ind-alta",
    label: "Valore indeterminabile — complessità alta",
    valoreFittizio: 250000,
    descrizione: "Scaglione € 52.000 - € 260.000 (art. 21 c. 7 D.M. 55/2014)",
  },
  {
    id: "ind-particolare",
    label: "Valore indeterminabile — particolare importanza",
    valoreFittizio: 520000,
    descrizione: "Scaglione fino a € 520.000 (art. 21 c. 7 secondo periodo)",
  },
];

// ──────────────────────────────────────────────────────────────
// Tipologie di attività stragiudiziale
// ──────────────────────────────────────────────────────────────

export interface TipoAttivitaStragiudiziale {
  id: string;
  nome: string;
  descrizione: string;
  riferimento: string;
  noteFiscali: string;
}

export const TIPI_ATTIVITA: TipoAttivitaStragiudiziale[] = [
  {
    id: "parere",
    nome: "Parere stragiudiziale",
    descrizione:
      "Consulenza scritta, parere motivato su una questione giuridica controversa, valutazione preventiva del rischio di contenzioso.",
    riferimento: "Tabella 25 D.M. 55/2014 — scaglione in base al valore della controversia oggetto del parere",
    noteFiscali:
      "Rientra a pieno titolo nei compensi professionali. Soggetto a CPA 4%, IVA 22% e ritenuta 20% se reso a sostituto d'imposta.",
  },
  {
    id: "transazione",
    nome: "Transazione stragiudiziale",
    descrizione:
      "Negoziazione con la controparte ed eventuale redazione di un accordo transattivo che evita o chiude la lite.",
    riferimento: "Tabella 25 D.M. 55/2014 — valore = importo oggetto della transazione",
    noteFiscali:
      "Se la transazione segue una trattativa lunga è frequente applicare valutazioni soggettive significative (fino a +50% sul medio).",
  },
  {
    id: "contratto",
    nome: "Redazione contratto",
    descrizione:
      "Stesura di contratti (compravendita, locazione, somministrazione, mandato, ecc.) con eventuale assistenza nelle trattative.",
    riferimento: "Tabella 25 D.M. 55/2014 — valore = corrispettivo o valore del bene/diritto oggetto del contratto",
    noteFiscali:
      "Le spese di registrazione sono spese esenti (anticipate in nome e per conto del cliente).",
  },
  {
    id: "consulenza",
    nome: "Consulenza continuativa",
    descrizione:
      "Assistenza periodica (mensile, trimestrale) a imprese o privati per questioni ricorrenti. Tipicamente regolata con accordo scritto e fattura forfettaria.",
    riferimento: "Compenso liberamente pattuibile ex art. 13 c. 3 L. 247/2012, parametri solo in via sussidiaria",
    noteFiscali:
      "Spesso fatturata a forfait mensile. CPA, IVA e ritenuta come per le altre prestazioni stragiudiziali.",
  },
  {
    id: "mediazione",
    nome: "Mediazione (D.Lgs. 28/2010)",
    descrizione:
      "Procedura di mediazione civile e commerciale. L'avvocato assiste il cliente nelle sessioni; in caso di accordo, redige il verbale di conciliazione.",
    riferimento:
      "Art. 20 c. 1-bis D.M. 55/2014 — tabella specifica; in caso di accordo, compenso aumentato del 30%.",
    noteFiscali:
      "Quando l'attività è svolta dietro nomina del giudice in regime di patrocinio a spese dello Stato, si applicano le tariffe ridotte ex D.M. Giustizia 1 agosto 2023.",
  },
  {
    id: "negoziazione",
    nome: "Negoziazione assistita (D.L. 132/2014)",
    descrizione:
      "Procedura di negoziazione tra avvocati per dirimere una controversia senza ricorrere al giudice (obbligatoria in alcune materie).",
    riferimento:
      "Tabella 25 D.M. 55/2014 in base al valore della controversia; compenso aumentato in caso di accordo concluso.",
    noteFiscali:
      "L'accordo redatto e autenticato dagli avvocati ha efficacia esecutiva e costituisce titolo per l'iscrizione di ipoteca giudiziale.",
  },
  {
    id: "recupero-crediti",
    nome: "Recupero crediti stragiudiziale",
    descrizione:
      "Attività di diffida, sollecito, trattativa di rientro con il debitore. Spesso fase preparatoria del decreto ingiuntivo.",
    riferimento: "Tabella 25 D.M. 55/2014 — valore = importo del credito da recuperare",
    noteFiscali:
      "Se il credito viene recuperato in via stragiudiziale, le spese legali costituiscono danno emergente recuperabile dal debitore (Cass. SS.UU. 24481/2020).",
  },
  {
    id: "concorsuale",
    nome: "Assistenza in procedure concorsuali stragiudiziali",
    descrizione:
      "Piani attestati di risanamento, accordi di ristrutturazione, composizione negoziata della crisi (D.Lgs. 14/2019, CCII).",
    riferimento:
      "Art. 21 c. 2 D.M. 55/2014 — il valore è il credito del cliente creditore o il passivo del cliente debitore.",
    noteFiscali:
      "Per il debitore la base è il passivo complessivo; per il creditore il proprio credito ammesso.",
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
    titolo: "Confusione tra D.M. 55/2014 e D.M. 147/2022",
    descrizione:
      "Molte calcolatrici online riportano ancora i valori del D.M. 55/2014 originale (es. € 270 per scaglione fino a € 1.100). Dal 23 ottobre 2022 si applica il D.M. 147/2022 con valori più alti (€ 284 per lo stesso scaglione). Verificare sempre la data di aggiornamento della tabella usata.",
  },
  {
    titolo: "Aumento del +80% al posto del +50%",
    descrizione:
      "Il D.M. 55/2014 originale prevedeva la variazione fino al +80% del parametro medio. Il D.M. 147/2022 ha uniformato la variazione a ±50%. Applicare ancora il +80% espone a contestazioni e a riduzioni in sede di liquidazione giudiziale.",
  },
  {
    titolo: "Omissione delle spese generali 15%",
    descrizione:
      "Le spese generali forfettarie (art. 2 D.M. 55/2014) sono dovute anche quando il compenso è stato pattuito con il cliente in via convenzionale. Sono spesso dimenticate nelle parcelle, riducendo ingiustificatamente il compenso percepito.",
  },
  {
    titolo: "Errato calcolo del CPA sull'IVA",
    descrizione:
      "Il contributo Cassa Forense 4% si calcola sul compenso lordo (compenso + spese generali + spese imponibili). L'IVA 22% si calcola sull'imponibile inclusivo del CPA. Invertire l'ordine produce un calcolo errato del totale fattura.",
  },
  {
    titolo: "Spese esenti trattate come imponibili",
    descrizione:
      "Le anticipazioni in nome e per conto del cliente (es. marche da bollo, diritti di copia, registrazioni) sono spese esenti ex art. 15 c. 1 n. 3 D.P.R. 633/1972: non concorrono all'imponibile IVA. Inserirle come spese imponibili gonfia ingiustificatamente IVA e CPA.",
  },
  {
    titolo: "Ritenuta d'acconto applicata anche su CPA e spese esenti",
    descrizione:
      "La ritenuta d'acconto del 20% (art. 25 D.P.R. 600/1973) si calcola solo sul compenso e sulle spese imponibili, NON sul CPA né sulle spese esenti. Calcolarla sul totale fattura è un errore frequente che si traduce in versamento d'imposta in eccesso da parte del sostituto.",
  },
  {
    titolo: "Mancato preventivo scritto (L. 124/2017)",
    descrizione:
      "Dal 2017 il preventivo scritto è obbligatorio. La mancata consegna non priva l'avvocato del diritto al compenso (sempre dovuto secondo i parametri), ma costituisce illecito disciplinare e priva il professionista di un titolo contrattuale opponibile al cliente.",
  },
  {
    titolo: "Applicare le tariffe stragiudiziali a un'attività poi sfociata in giudizio",
    descrizione:
      "Quando un incarico stragiudiziale evolve in giudiziale, le due fasi vanno fatturate separatamente: la fase stragiudiziale con i parametri stragiudiziali (Tab. 25), il giudizio con le tabelle giudiziali (Tab. 1-24). Non duplicare l'attività né riassorbire automaticamente la stragiudiziale nel giudiziale.",
  },
];

// ──────────────────────────────────────────────────────────────
// Esempi pratici
// ──────────────────────────────────────────────────────────────

export interface EsempioCompenso {
  titolo: string;
  descrizione: string;
  valore: number;
  scaglione: string;
  compensoBase: number;
  variazione: string;
  speseGenerali: number;
  cpa: number;
  iva: number;
  totale: number;
}

export const ESEMPI_COMPENSO: EsempioCompenso[] = [
  {
    titolo: "Esempio 1 — Parere stragiudiziale (controversia € 15.000)",
    descrizione:
      "Redazione di parere scritto motivato su una controversia di valore € 15.000. Compenso medio, accessori inclusi.",
    valore: 15000,
    scaglione: "€ 5.200,01 - € 26.000",
    compensoBase: 1985,
    variazione: "Medio (nessuna variazione)",
    speseGenerali: 297.75,
    cpa: 91.31,
    iva: 522.13,
    totale: 2896.19,
  },
  {
    titolo: "Esempio 2 — Transazione stragiudiziale (€ 100.000) con +30%",
    descrizione:
      "Negoziazione e conclusione di transazione con la controparte per controversia di € 100.000. Aumento del 30% per complessità della trattativa.",
    valore: 100000,
    scaglione: "€ 52.000,01 - € 260.000",
    compensoBase: 4536,
    variazione: "+30% sul medio = € 5.896,80",
    speseGenerali: 884.52,
    cpa: 271.25,
    iva: 1551.27,
    totale: 8603.84,
  },
  {
    titolo: "Esempio 3 — Bene amministrato € 600.000 (modalità percentuale 3%)",
    descrizione:
      "Compenso per gestione amministrativa di patrimonio di € 600.000 in modalità percentuale (art. 21 D.M. 55/2014). Aliquota 3% sullo scaglione € 520.000-€ 2.000.000.",
    valore: 600000,
    scaglione: "Sezione II — 3% del valore (€ 520k - € 2M)",
    compensoBase: 18000,
    variazione: "Percentuale piena (3% × 600.000)",
    speseGenerali: 2700,
    cpa: 828,
    iva: 4735.16,
    totale: 26263.16,
  },
];

// ──────────────────────────────────────────────────────────────
// Logica di calcolo
// ──────────────────────────────────────────────────────────────

function trovaScaglioneTabellare(valore: number): ScaglioneTabellare | null {
  for (const s of SCAGLIONI_DM_147_2022) {
    if (s.a === null) {
      if (valore >= s.da) return s;
    } else if (valore >= s.da && valore <= s.a) {
      return s;
    }
  }
  return null;
}

function trovaScaglionePercentuale(valore: number): ScaglionePercentuale | null {
  for (const s of SCAGLIONI_PERCENTUALI) {
    if (s.a === null) {
      if (valore >= s.da) return s;
    } else if (valore >= s.da && valore <= s.a) {
      return s;
    }
  }
  return null;
}

function arrotonda(n: number): number {
  return Math.round(n * 100) / 100;
}

export function calcolaCompensoStragiudiziale(input: InputCompenso): RisultatoCompenso {
  const {
    valore,
    modalità,
    livello,
    variazionePerc,
    ulterioreValutazione,
    includiSpeseGenerali,
    percSpeseGenerali,
    speseImponibili,
    speseEsenti,
    includiCPA,
    includiIVA,
    includiRitenuta,
  } = input;

  let compensoBaseTabellare = 0;
  let scaglione: ScaglioneTabellare | null = null;
  let scaglionePercentuale: ScaglionePercentuale | null = null;

  // Per valori fino a € 520.000 → sezione I tabellare
  // Per valori oltre € 520.000 → sezione II/III percentuale (sempre)
  if (modalità === "percentuale" || valore > 520000) {
    scaglionePercentuale = trovaScaglionePercentuale(valore);
    if (scaglionePercentuale) {
      compensoBaseTabellare = (valore * scaglionePercentuale.percentuale) / 100;
    } else if (modalità === "percentuale" && valore > 0 && valore <= 520000) {
      // Modalità percentuale su patrimoni amministrati di valore <= 520k: max 5% del valore (art. 19/21)
      compensoBaseTabellare = (valore * 5) / 100;
    }
  } else {
    scaglione = trovaScaglioneTabellare(valore);
    if (scaglione) {
      if (livello === "minimo") compensoBaseTabellare = scaglione.minimo;
      else if (livello === "massimo") compensoBaseTabellare = scaglione.massimo;
      else compensoBaseTabellare = scaglione.medio;
    }
  }

  // Variazione manuale rispetto al base (limitata a ±50% ai sensi art. 19 post D.M. 147/2022)
  const variazioneLimitata = Math.max(-50, Math.min(50, variazionePerc));
  const compensoConVariazione = compensoBaseTabellare * (1 + variazioneLimitata / 100);

  // Ulteriore valutazione soggettiva (0-50%)
  const ulterioreValutazionePerc = Math.max(0, Math.min(50, ulterioreValutazione));
  const ulterioreValutazioneImporto = compensoConVariazione * (ulterioreValutazionePerc / 100);
  const compensoFinale = compensoConVariazione + ulterioreValutazioneImporto;

  // Spese generali forfettarie 15% (art. 2 D.M. 55/2014)
  const percSpese = Math.max(0, Math.min(25, percSpeseGenerali || 15));
  const speseGenerali = includiSpeseGenerali ? (compensoFinale * percSpese) / 100 : 0;

  const speseImponibiliNum = Math.max(0, speseImponibili || 0);
  const speseEsentiNum = Math.max(0, speseEsenti || 0);

  // Imponibile fiscale = compenso + spese generali + spese imponibili (no spese esenti)
  const imponibileFiscale = compensoFinale + speseGenerali + speseImponibiliNum;

  // CPA 4% sul compenso lordo (escluso CPA, IVA e spese esenti)
  const cpa = includiCPA ? (imponibileFiscale * 4) / 100 : 0;

  // Imponibile IVA = imponibile fiscale + CPA
  const imponibileIVA = imponibileFiscale + cpa;

  // IVA 22%
  const iva = includiIVA ? (imponibileIVA * 22) / 100 : 0;

  // Ritenuta d'acconto 20% (solo su compenso + spese imponibili, NON su CPA né spese esenti)
  const baseRitenuta = compensoFinale + speseImponibiliNum;
  const ritenuta = includiRitenuta ? (baseRitenuta * 20) / 100 : 0;

  // Totale fattura = imponibile IVA + IVA + spese esenti
  const totaleFattura = imponibileIVA + iva + speseEsentiNum;

  // Netto a pagare = totale fattura - ritenuta
  const nettoAPagare = totaleFattura - ritenuta;

  return {
    scaglione,
    scaglionePercentuale,
    compensoBaseTabellare: arrotonda(compensoBaseTabellare),
    compensoConVariazione: arrotonda(compensoConVariazione),
    ulterioreValutazione: arrotonda(ulterioreValutazioneImporto),
    compensoFinale: arrotonda(compensoFinale),
    speseGenerali: arrotonda(speseGenerali),
    speseImponibili: arrotonda(speseImponibiliNum),
    imponibileFiscale: arrotonda(imponibileFiscale),
    cpa: arrotonda(cpa),
    imponibileIVA: arrotonda(imponibileIVA),
    iva: arrotonda(iva),
    ritenuta: arrotonda(ritenuta),
    speseEsenti: arrotonda(speseEsentiNum),
    totaleFattura: arrotonda(totaleFattura),
    nettoAPagare: arrotonda(nettoAPagare),
  };
}

// ──────────────────────────────────────────────────────────────
// Normativa di riferimento
// ──────────────────────────────────────────────────────────────

export const normativaRiferimento: NormativaRiferimento[] = [
  {
    norma: "D.M. 10 marzo 2014, n. 55 (Parametri forensi)",
    descrizione:
      "Regolamento per la liquidazione dei compensi per la professione forense ai sensi dell'art. 13 c. 6 L. 247/2012. Tabella 25: prestazioni di assistenza stragiudiziale. G.U. n. 77 del 02/04/2014. In vigore dal 03/04/2014.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55",
  },
  {
    norma: "D.M. 13 agosto 2022, n. 147",
    descrizione:
      "Regolamento recante modifiche al D.M. 55/2014. Aggiorna le tabelle di circa il 5% e uniforma la variazione del compenso a ±50% del parametro medio. G.U. n. 236 del 08/10/2022. In vigore dal 23/10/2022 (applicabile alle prestazioni esaurite dopo questa data).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147",
  },
  {
    norma: "D.M. 8 marzo 2018, n. 37",
    descrizione:
      "Primo aggiornamento delle tabelle del D.M. 55/2014. G.U. n. 96 del 26/04/2018. In vigore dal 27/04/2018.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2018-03-08;37",
  },
  {
    norma: "Art. 13 L. 31 dicembre 2012, n. 247",
    descrizione:
      "Nuovo ordinamento forense. Il comma 6 contiene la delega al Ministro della Giustizia per la determinazione dei parametri dei compensi forensi, applicabili in mancanza di accordo scritto. G.U. n. 15 del 18/01/2013.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247",
  },
  {
    norma: "Art. 1 c. 150 L. 4 agosto 2017, n. 124 (Legge concorrenza)",
    descrizione:
      "Obbligo di preventivo scritto per l'avvocato: il professionista deve indicare gli oneri ipotizzabili dal momento del conferimento dell'incarico fino alla conclusione della prestazione. G.U. n. 189 del 14/08/2017.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-08-04;124",
  },
  {
    norma: "Art. 2 D.M. 55/2014 — Spese generali",
    descrizione:
      "Le spese generali forfettarie sono determinate nella misura fissa del 15% del compenso, oltre alle spese effettivamente sostenute e documentate. Dovute anche se il compenso è stato pattuito.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art2",
  },
  {
    norma: "Art. 19 D.M. 55/2014 — Variazioni",
    descrizione:
      "I parametri medi possono essere aumentati o diminuiti, di regola, fino al 50% (uniforme post D.M. 147/2022; in origine -50%/+80% e fino al 100% per la fase istruttoria).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art19",
  },
  {
    norma: "Art. 21 D.M. 55/2014 — Determinazione del valore",
    descrizione:
      "Criteri per la determinazione del valore dell'affare nell'attività stragiudiziale (7 commi). Comprende procedure concorsuali, successioni, affari amministrativi e tributari, valore indeterminabile (€ 26.000-€ 260.000) e particolare importanza (fino a € 520.000).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art21",
  },
  {
    norma: "Art. 27 D.M. 55/2014 — Spese di trasferta",
    descrizione:
      "Disciplina del rimborso delle spese di trasferta per l'attività stragiudiziale. Soggette alla stessa disciplina fiscale del compenso del professionista.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art27",
  },
  {
    norma: "Art. 18 D.M. 55/2014 — Rinvio alla Tabella 25",
    descrizione:
      "Per l'attività stragiudiziale i compensi sono determinati con riferimento alla Tabella 25 allegata al decreto, in base al valore dell'affare.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art18",
  },
  {
    norma: "Art. 16 D.P.R. 26 ottobre 1972, n. 633 (IVA)",
    descrizione:
      "Aliquota ordinaria IVA al 22%, applicabile alle prestazioni professionali dell'avvocato. Il calcolo IVA include CPA tra gli oneri.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633~art16",
  },
  {
    norma: "Art. 25 D.P.R. 29 settembre 1973, n. 600",
    descrizione:
      "Ritenuta d'acconto del 20% sui compensi per prestazioni di lavoro autonomo corrisposti da sostituti d'imposta (società, enti, professionisti, condominii).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600~art25",
  },
  {
    norma: "Art. 11 L. 31 dicembre 2012, n. 247 — CPA Cassa Forense",
    descrizione:
      "Contributo previdenziale Cassa Forense (CPA) al 4% sul compenso lordo. Addebito in fattura al cliente, base imponibile IVA.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247~art11",
  },
  {
    norma: "D.Lgs. 4 marzo 2010, n. 28 (Mediazione)",
    descrizione:
      "Disciplina della mediazione civile e commerciale. Compensi dell'avvocato nelle procedure di mediazione regolati da tabella specifica (D.M. 150/2023, art. 20 c. 1-bis D.M. 55/2014).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-03-04;28",
  },
  {
    norma: "D.L. 12 settembre 2014, n. 132 (conv. L. 162/2014) — Negoziazione assistita",
    descrizione:
      "Procedura di negoziazione assistita tra avvocati. Obbligatoria in determinate materie (separazione, divorzio, risarcimenti da circolazione stradale, recupero crediti < € 50.000).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132",
  },
];

// ──────────────────────────────────────────────────────────────
// Circolari ministeriali e pronunce di legittimità
// ──────────────────────────────────────────────────────────────

export const circolariMinisteriali: CircolareMinisteriale[] = [
  {
    circolare: "Cass. SS.UU. n. 24481 del 03 novembre 2020",
    descrizione:
      "Le spese legali sostenute dal cliente nella fase stragiudiziale costituiscono danno emergente recuperabile dal soccombente in giudizio, a condizione che siano comprovate, necessarie e utili ai fini della tutela del diritto.",
    url: "https://www.cortedicassazione.it/cassazione-resources/resources/cms/documents/24481_11_2020.pdf",
  },
  {
    circolare: "Cass. SS.UU. n. 19427 del 21 luglio 2018",
    descrizione:
      "Cause di valore indeterminabile: lo scaglione di riferimento è quello indicato dall'art. 21 c. 7 D.M. 55/2014 (€ 26.000-€ 260.000), salvo che la particolare importanza giustifichi lo scaglione fino a € 520.000.",
    url: "https://www.cortedicassazione.it/",
  },
  {
    circolare: "Relazione illustrativa Ministero della Giustizia al D.M. 147/2022",
    descrizione:
      "Aggiornamento dei parametri forensi 'in media' del 5% in coerenza con l'andamento ISTAT 2014-2022. Uniformazione a ±50% del margine di variazione dei valori medi.",
    url: "https://www.giustizia.it/giustizia/it/mg_2_7_8.page",
  },
  {
    circolare: "Consiglio Nazionale Forense — Pareri su compenso stragiudiziale",
    descrizione:
      "Linee guida del CNF sull'applicazione dei parametri stragiudiziali, prassi interpretativa per le tipologie di attività non espressamente tabellate.",
    url: "https://www.consiglionazionaleforense.it/parametri",
  },
  {
    circolare: "D.M. Giustizia 1 agosto 2023 (Liquidazione patrocinio a spese dello Stato in mediazione)",
    descrizione:
      "Compensi dell'avvocato per l'assistenza in procedure di mediazione e negoziazione in regime di gratuito patrocinio. Riduzione del 50% rispetto ai parametri ordinari.",
    url: "https://www.gazzettaufficiale.it/eli/id/2023/08/04/23A04404/sg",
  },
];

// ──────────────────────────────────────────────────────────────
// Sezioni (sidebar nav) — ORDINE = ordine pagina
// ──────────────────────────────────────────────────────────────

export const sections: ToolSection[] = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "cose-compenso-stragiudiziale", label: "Cos'è il compenso stragiudiziale" },
  { id: "evoluzione-storica", label: "Evoluzione normativa" },
  { id: "tabella-147-2022", label: "Tabella 25 D.M. 147/2022" },
  { id: "confronto-tabelle", label: "Confronto storico" },
  { id: "come-si-calcola", label: "Come si calcola" },
  { id: "percentuali-oltre-520k", label: "Valori oltre € 520.000" },
  { id: "valore-affare", label: "Valore dell'affare (art. 21)" },
  { id: "valore-indeterminabile", label: "Valore indeterminabile" },
  { id: "aumenti-riduzioni", label: "Aumenti e riduzioni" },
  { id: "spese-generali", label: "Spese generali 15%" },
  { id: "spese-esenti-trasferta", label: "Spese esenti e trasferta" },
  { id: "accessori-fiscali", label: "CPA, IVA, ritenuta" },
  { id: "tipi-attività", label: "Tipi di attività" },
  { id: "stragiudiziale-vs-giudiziale", label: "Stragiudiziale vs giudiziale" },
  { id: "chi-paga-spese", label: "Chi paga le spese" },
  { id: "preventivo-obbligatorio", label: "Preventivo obbligatorio" },
  { id: "esempi-pratici", label: "Esempi pratici" },
  { id: "errori-comuni", label: "Errori comuni" },
  { id: "fonti", label: "Fonti e riferimenti" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];
