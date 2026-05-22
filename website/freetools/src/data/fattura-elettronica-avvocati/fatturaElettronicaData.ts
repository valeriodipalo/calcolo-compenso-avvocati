import type { ToolSection, NormativaRiferimento } from "@/types/tool";

// ============================================================
// Types
// ============================================================

export type RegimeFiscale = "ordinario" | "forfettario";
export type TipoCliente = "impresa" | "PA" | "privato" | "UE_B2B" | "extraUE";

export interface InputFattura {
  regime: RegimeFiscale;
  tipoCliente: TipoCliente;
  compenso: number;
  speseImponibili: number; // Spese che entrano nella base IVA
  speseEsentiArt15: number; // Anticipazioni in nome e per conto
  gratuitoPatrocinio?: boolean;
}

export interface RisultatoFattura {
  // Input echo
  compenso: number;
  speseImponibili: number;
  speseEsentiArt15: number;
  speseGenerali: number; // 15% del compenso
  // Imponibili
  imponibileCpa: number;
  imponibileIva: number;
  imponibileRitenuta: number;
  // Tributi e contributi
  cpa: number; // 4%
  iva: number; // 22% se regime ordinario
  ritenuta: number; // 20% se cliente sostituto
  bollo: number; // €2 se fattura senza IVA > €77,47
  // Totali
  totaleFattura: number;
  nettoAPagare: number;
  // Suggerimenti automatici
  tipoDocumentoSuggerito: string;
  naturaIvaSuggerita: string;
  modalitaPagamentoSuggerita: string;
  diciturePagrafiche: string[];
}

// Tipi documento (TD)
export interface CodiceTD {
  codice: string;
  descrizione: string;
  usoAvvocato: string;
  rilevanza: "alta" | "media" | "bassa";
}

// Natura IVA (N)
export interface CodiceN {
  codice: string;
  descrizione: string;
  usoAvvocato: string;
  riferimentoNormativo: string;
}

// Modalità pagamento (MP)
export interface CodiceMP {
  codice: string;
  descrizione: string;
  usoAvvocato: string;
}

// ============================================================
// Constants
// ============================================================

export const ALIQUOTA_SPESE_GENERALI = 0.15; // art. 13 c. 10 L. 247/2012
export const ALIQUOTA_CPA = 0.04; // art. 11 L. 576/1980
export const ALIQUOTA_IVA = 0.22; // art. 16 DPR 633/72
export const ALIQUOTA_RITENUTA = 0.20; // art. 25 DPR 600/73
export const SOGLIA_BOLLO = 77.47; // art. 13 Tariffa DPR 642/72
export const IMPORTO_BOLLO = 2.0;

// ============================================================
// Calculation
// ============================================================

export function calcolaFattura(input: InputFattura): RisultatoFattura {
  const {
    regime,
    tipoCliente,
    compenso,
    speseImponibili,
    speseEsentiArt15,
    gratuitoPatrocinio = false,
  } = input;

  // 1. Spese generali 15% sul compenso
  const speseGenerali = compenso * ALIQUOTA_SPESE_GENERALI;

  // 2. Imponibile CPA = compenso + spese generali + spese imponibili (NO art. 15)
  const imponibileCpa = compenso + speseGenerali + speseImponibili;
  const cpa = imponibileCpa * ALIQUOTA_CPA;

  // 3. Calcolo IVA (solo regime ordinario)
  let imponibileIva = 0;
  let iva = 0;
  if (regime === "ordinario") {
    imponibileIva = compenso + speseGenerali + speseImponibili + cpa;
    iva = imponibileIva * ALIQUOTA_IVA;
  }

  // 4. Calcolo ritenuta (solo regime ordinario + cliente sostituto d'imposta)
  const clienteSostituto =
    tipoCliente === "impresa" ||
    tipoCliente === "PA" ||
    tipoCliente === "UE_B2B";
  let imponibileRitenuta = 0;
  let ritenuta = 0;
  if (regime === "ordinario" && clienteSostituto) {
    imponibileRitenuta = compenso + speseGenerali + speseImponibili;
    ritenuta = imponibileRitenuta * ALIQUOTA_RITENUTA;
  }

  // 5. Imposta di bollo €2 se fattura senza IVA > €77,47
  let bollo = 0;
  if (regime === "forfettario") {
    const importoSenzaIva = compenso + speseGenerali + speseImponibili + cpa;
    if (importoSenzaIva > SOGLIA_BOLLO) {
      bollo = IMPORTO_BOLLO;
    }
  }

  // 6. Totali
  const totaleFattura =
    compenso +
    speseGenerali +
    speseImponibili +
    cpa +
    iva +
    speseEsentiArt15 +
    bollo;
  const nettoAPagare = totaleFattura - ritenuta;

  // 7. Suggerimenti automatici
  const tipoDocumentoSuggerito = "TD01 — Fattura";

  let naturaIvaSuggerita = "—";
  if (regime === "forfettario") {
    naturaIvaSuggerita = "N2.2 (operazioni non soggette IVA - regime forfettario)";
  } else if (tipoCliente === "UE_B2B") {
    naturaIvaSuggerita = "N6.9 (reverse charge cliente UE)";
  } else if (tipoCliente === "extraUE") {
    naturaIvaSuggerita = "N2.1 (operazioni non soggette - art. 7-ter)";
  }

  let modalitaPagamentoSuggerita = "MP05 — Bonifico";
  if (tipoCliente === "PA") {
    modalitaPagamentoSuggerita = "MP05 — Bonifico (oppure MP23 PagoPA se richiesto)";
  }

  // 8. Diciture obbligatorie
  const diciturePagrafiche: string[] = [];
  if (regime === "forfettario") {
    diciturePagrafiche.push(
      "Operazione non soggetta a IVA ex art. 1, commi 54-89, L. 190/2014 - Regime forfettario"
    );
    diciturePagrafiche.push(
      "Non soggetta a ritenuta d'acconto ex art. 1, comma 67, L. 190/2014"
    );
  }
  if (regime === "ordinario" && tipoCliente === "PA") {
    diciturePagrafiche.push(
      "Operazione non soggetta a scissione dei pagamenti ai sensi dell'art. 17-ter, comma 1-sexies, DPR 633/1972 (D.L. 87/2018)"
    );
  }
  if (gratuitoPatrocinio) {
    diciturePagrafiche.push(
      "Patrocinio a spese dello Stato ex artt. 82-83 DPR 115/2002"
    );
  }
  if (bollo > 0) {
    diciturePagrafiche.push(
      "Imposta di bollo da €2,00 assolta in modo virtuale ex D.M. 17/06/2014"
    );
  }

  return {
    compenso,
    speseImponibili,
    speseEsentiArt15,
    speseGenerali,
    imponibileCpa,
    imponibileIva,
    imponibileRitenuta,
    cpa,
    iva,
    ritenuta,
    bollo,
    totaleFattura,
    nettoAPagare,
    tipoDocumentoSuggerito,
    naturaIvaSuggerita,
    modalitaPagamentoSuggerita,
    diciturePagrafiche,
  };
}

// ============================================================
// Tabelle Codici
// ============================================================

export const codiciTD: CodiceTD[] = [
  {
    codice: "TD01",
    descrizione: "Fattura",
    usoAvvocato: "Principale — fattura per prestazioni professionali (anche verso PA)",
    rilevanza: "alta",
  },
  {
    codice: "TD02",
    descrizione: "Acconto/anticipo su fattura",
    usoAvvocato: "Incasso di acconti, poi seguito da TD01 a saldo",
    rilevanza: "media",
  },
  {
    codice: "TD03",
    descrizione: "Acconto/anticipo su parcella",
    usoAvvocato: "Acconti specifici per liberi professionisti",
    rilevanza: "media",
  },
  {
    codice: "TD04",
    descrizione: "Nota di credito",
    usoAvvocato: "Storno totale o parziale di fattura precedente (art. 26 DPR 633/72)",
    rilevanza: "alta",
  },
  {
    codice: "TD05",
    descrizione: "Nota di debito",
    usoAvvocato: "Rettifica in aumento imponibile o IVA",
    rilevanza: "bassa",
  },
  {
    codice: "TD06",
    descrizione: "Parcella",
    usoAvvocato: "Storicamente per parcella professionale; oggi TD01 è preferito",
    rilevanza: "media",
  },
  {
    codice: "TD16",
    descrizione: "Integrazione reverse charge interno",
    usoAvvocato: "Autofattura per inversione contabile nazionale (raro)",
    rilevanza: "bassa",
  },
  {
    codice: "TD17",
    descrizione: "Autofattura acquisto servizi estero",
    usoAvvocato: "Avvocato che riceve servizi da fornitore estero (es. consulenti UE)",
    rilevanza: "media",
  },
  {
    codice: "TD18",
    descrizione: "Autofattura acquisto beni intra-UE",
    usoAvvocato: "Acquisti di beni da fornitori UE oltre soglia (raro)",
    rilevanza: "bassa",
  },
  {
    codice: "TD19",
    descrizione: "Autofattura ex art. 17 c. 2",
    usoAvvocato: "Acquisti da non residenti senza stabile organizzazione",
    rilevanza: "bassa",
  },
  {
    codice: "TD20",
    descrizione: "Autofattura art. 6 D.Lgs. 471/97",
    usoAvvocato: "Regolarizzazione fattura non ricevuta dal fornitore",
    rilevanza: "media",
  },
  {
    codice: "TD24",
    descrizione: "Fattura differita lett. a)",
    usoAvvocato: "Per prestazioni documentate da atti riepilogativi (raro per avvocato)",
    rilevanza: "bassa",
  },
  {
    codice: "TD28",
    descrizione: "Acquisti da San Marino con IVA",
    usoAvvocato: "Marginale per attività forense",
    rilevanza: "bassa",
  },
];

export const codiciN: CodiceN[] = [
  {
    codice: "N1",
    descrizione: "Escluse ex art. 15 DPR 633/72",
    usoAvvocato:
      "Anticipazioni in nome e per conto del cliente: contributo unificato, marche da bollo per CU, diritti di copia, spese di notifica",
    riferimentoNormativo: "Art. 15 c. 1 n. 3 DPR 633/72",
  },
  {
    codice: "N2.1",
    descrizione: "Non soggette ex artt. 7-7septies (territorialità)",
    usoAvvocato: "Prestazioni a cliente extra-UE soggetto passivo (B2B)",
    riferimentoNormativo: "Artt. 7-7septies DPR 633/72",
  },
  {
    codice: "N2.2",
    descrizione: "Non soggette - altri casi",
    usoAvvocato:
      "REGIME FORFETTARIO: codice da usare su tutte le fatture dell'avvocato forfettario",
    riferimentoNormativo: "Art. 1 cc. 54-89 L. 190/2014",
  },
  {
    codice: "N3.1",
    descrizione: "Non imponibili - esportazioni extra-UE",
    usoAvvocato: "Servizi resi fisicamente fuori dall'Italia in Paesi extra-UE",
    riferimentoNormativo: "Art. 8 c. 1 lett. a DPR 633/72",
  },
  {
    codice: "N3.5",
    descrizione: "Non imponibili - lettere di intento",
    usoAvvocato: "Cliente esportatore abituale con dichiarazione di intento",
    riferimentoNormativo: "Art. 8 c. 1 lett. c DPR 633/72",
  },
  {
    codice: "N4",
    descrizione: "Esenti ex art. 10 DPR 633/72",
    usoAvvocato: "Rarissimo per l'avvocato (semmai docenze di formazione)",
    riferimentoNormativo: "Art. 10 DPR 633/72",
  },
  {
    codice: "N6.3",
    descrizione: "Reverse charge - subappalto edile",
    usoAvvocato: "Consulenze legali a subappaltatori del settore edile",
    riferimentoNormativo: "Art. 17 c. 6 lett. a DPR 633/72",
  },
  {
    codice: "N6.7",
    descrizione: "Reverse charge - prestazioni settore edile",
    usoAvvocato: "Servizi legali connessi a pulizia, demolizione, impianti edili",
    riferimentoNormativo: "Art. 17 c. 6 DPR 633/72",
  },
  {
    codice: "N6.9",
    descrizione: "Altri casi di reverse charge",
    usoAvvocato: "CLIENTE UE B2B: servizi a soggetto passivo IVA stabilito in altro Stato UE",
    riferimentoNormativo: "Art. 7-ter DPR 633/72",
  },
  {
    codice: "N7",
    descrizione: "IVA assolta in altro Stato UE (regime OSS)",
    usoAvvocato:
      "Servizi B2C a consumatori UE oltre soglia €10.000/anno tramite regime OSS",
    riferimentoNormativo: "Direttiva 2017/2455/UE",
  },
];

export const codiciMP: CodiceMP[] = [
  { codice: "MP01", descrizione: "Contanti", usoAvvocato: "Operazioni di importo ridotto entro la soglia (€5.000 nel 2026)" },
  { codice: "MP02", descrizione: "Assegno", usoAvvocato: "Pagamento con assegno bancario o circolare (in disuso per importi alti)" },
  { codice: "MP05", descrizione: "Bonifico", usoAvvocato: "PIÙ FREQUENTE per parcelle professionali" },
  { codice: "MP08", descrizione: "Carta di pagamento", usoAvvocato: "Carta di credito, debito, prepagata, PostePay" },
  { codice: "MP09", descrizione: "RID (Addebito diretto)", usoAvvocato: "Pagamenti ricorrenti (consulenze continuative)" },
  { codice: "MP12", descrizione: "RIBA", usoAvvocato: "Ricevuta bancaria (per imprese)" },
  { codice: "MP19", descrizione: "SEPA Direct Debit", usoAvvocato: "Variante SEPA del RID" },
  { codice: "MP20", descrizione: "SEPA Direct Debit CORE", usoAvvocato: "SEPA per clienti retail" },
  { codice: "MP21", descrizione: "SEPA Direct Debit B2B", usoAvvocato: "SEPA tra imprese" },
  { codice: "MP23", descrizione: "PagoPA", usoAvvocato: "Pagamenti alla/dalla PA (gratuito patrocinio)" },
];

// ============================================================
// Normativa
// ============================================================

export const normativaRiferimento: NormativaRiferimento[] = [
  {
    norma: "Legge 24/12/2007, n. 244",
    descrizione: "Art. 1, commi 209-214: origine dell'obbligo di fatturazione elettronica verso la Pubblica Amministrazione (Finanziaria 2008)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2007-12-24;244",
  },
  {
    norma: "D.M. 7 marzo 2008",
    descrizione: "Decreto attuativo che istituisce il Sistema di Interscambio (SDI) gestito da Sogei",
    url: "https://www.gazzettaufficiale.it/eli/id/2008/05/03/08A02884/sg",
  },
  {
    norma: "D.M. 3 aprile 2013, n. 55",
    descrizione: "Regolamento organico in materia di emissione, trasmissione e ricevimento della fattura elettronica verso la PA",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.economia.e.finanze:decreto:2013-04-03;55",
  },
  {
    norma: "D.L. 24/04/2014, n. 66",
    descrizione: "Estende l'obbligo di FE a tutte le amministrazioni centrali e locali (Decreto IRPEF)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-04-24;66",
  },
  {
    norma: "D.M. 17 giugno 2014",
    descrizione: "Disciplina della conservazione sostitutiva dei documenti informatici, comprese le fatture elettroniche",
    url: "https://www.gazzettaufficiale.it/eli/id/2014/06/26/14A04778/sg",
  },
  {
    norma: "D.Lgs. 5/08/2015, n. 127",
    descrizione: "Estensione della fatturazione elettronica ai rapporti tra privati con regime opzionale (poi obbligatorio dal 1/1/2019)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2015-08-05;127",
  },
  {
    norma: "L. 27/12/2017, n. 205",
    descrizione: "Legge di Bilancio 2018 — art. 1 c. 909: obbligo generalizzato FE tra privati dal 1° gennaio 2019",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-12-27;205",
  },
  {
    norma: "Provv. AdE 89757/2018",
    descrizione: "Specifiche tecniche del formato XML della fattura elettronica (aggiornate alla versione 1.9.1 dal 15/05/2026)",
    url: "https://www.agenziaentrate.gov.it/portale/web/guest/aree-tematiche/fatturazione-elettronica",
  },
  {
    norma: "D.M. 28 dicembre 2018",
    descrizione: "Disciplina dell'imposta di bollo assolta in modo virtuale sulle fatture elettroniche",
    url: "https://www.gazzettaufficiale.it/eli/id/2019/01/07/19A00047/sg",
  },
  {
    norma: "D.L. 12/07/2018, n. 87",
    descrizione: "Decreto Dignità — art. 12: introduzione del comma 1-sexies all'art. 17-ter DPR 633/72, che abolisce lo split payment per i professionisti soggetti a ritenuta (decorrenza 14/07/2018)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2018-07-12;87",
  },
  {
    norma: "D.L. 30/04/2022, n. 36",
    descrizione: "Art. 18: estensione graduale dell'obbligo di FE ai contribuenti in regime forfettario (dal 1/7/2022 sopra 25.000€, dal 1/1/2024 tutti)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2022-04-30;36",
  },
  {
    norma: "D.Lgs. 8/01/2024, n. 1",
    descrizione: "Riforma adempimenti tributari — incide sui termini di conservazione delle fatture elettroniche",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-01-08;1",
  },
  {
    norma: "D.Lgs. 12/02/2024, n. 13",
    descrizione: "Accertamento tributario e concordato preventivo biennale — valorizza i dati delle fatture elettroniche per l'analisi del rischio",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-02-12;13",
  },
  {
    norma: "D.Lgs. 14/06/2024, n. 87",
    descrizione: "Revisione del sistema sanzionatorio tributario — riduzione sanzioni FE dal 90-180% al 70% imposta (decorrenza 1/9/2024)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87",
  },
  {
    norma: "DPR 26/10/1972, n. 633",
    descrizione: "Testo Unico IVA — art. 21 (fatturazione), art. 6 (effettuazione operazioni), art. 17-ter (split payment), art. 25 (modalità di assolvimento)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633",
  },
  {
    norma: "DPR 29/09/1973, n. 600",
    descrizione: "Art. 25: ritenuta d'acconto del 20% sui compensi di lavoro autonomo",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1973-09-29;600",
  },
  {
    norma: "DPR 26/10/1972, n. 642",
    descrizione: "Disciplina dell'imposta di bollo — art. 13 Tariffa Parte I: bollo €2,00 sulle fatture non soggette a IVA oltre €77,47",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;642",
  },
  {
    norma: "DPR 30/05/2002, n. 115",
    descrizione: "Testo Unico Spese di Giustizia — artt. 82-83 (liquidazione e decreto di pagamento gratuito patrocinio), art. 130 (riduzione 50% nel processo penale)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115",
  },
  {
    norma: "L. 20/09/1980, n. 576",
    descrizione: "Istituzione della Cassa Forense — art. 11: contributo integrativo (rivalsa) al 4% sul volume d'affari IVA",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1980-09-20;576",
  },
  {
    norma: "L. 31/12/2012, n. 247",
    descrizione: "Nuovo ordinamento forense — art. 13 c. 10: spese generali al 15% sul compenso totale dovute sia al cliente sia in sede di liquidazione giudiziale",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247",
  },
  {
    norma: "D.M. 13/08/2022, n. 147",
    descrizione: "Aggiornamento dei parametri forensi (sostituisce le tabelle del D.M. 55/2014) — mantiene la previsione delle spese generali al 15%",
    url: "https://www.gazzettaufficiale.it/eli/id/2022/10/12/22G00153/sg",
  },
  {
    norma: "L. 27/12/2014, n. 190",
    descrizione: "Regime forfettario — art. 1 cc. 54-89 (disciplina), c. 67 (esonero dalla ritenuta d'acconto)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-27;190",
  },
];

// ============================================================
// Sections (sidebar navigation)
// ============================================================

export const sections: ToolSection[] = [
  { id: "calcolatore", label: "Calcolatore Parcella" },
  { id: "obbligo", label: "Obbligo e Soggetti" },
  { id: "forfettario", label: "Regime Forfettario" },
  { id: "compilazione", label: "Come si Compila" },
  { id: "tipi-documento", label: "Codici Tipo Documento (TD)" },
  { id: "natura-iva", label: "Codici Natura IVA (N)" },
  { id: "modalita-pagamento", label: "Codici Modalità Pagamento (MP)" },
  { id: "fatturazione-pa", label: "Fatturazione alla PA" },
  { id: "gratuito-patrocinio", label: "Gratuito Patrocinio" },
  { id: "cliente-estero", label: "Cliente Estero" },
  { id: "pro-forma", label: "Pro-forma e Avviso di Parcella" },
  { id: "nota-credito", label: "Nota di Credito (TD04)" },
  { id: "trasmissione-sdi", label: "Trasmissione tramite SDI" },
  { id: "conservazione", label: "Conservazione" },
  { id: "sanzioni", label: "Sanzioni 2024-2026" },
  { id: "aggiornamenti-2026", label: "Aggiornamenti 2026" },
  { id: "errori-comuni", label: "Errori Comuni" },
  { id: "faq", label: "FAQ" },
  { id: "fonti", label: "Fonti e Riferimenti" },
  { id: "normativa", label: "Normativa" },
];
