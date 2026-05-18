import type {
  ToolSection,
  NormativaRiferimento,
  CircolareMinisteriale,
} from "@/types/tool";

// ──────────────────────────────────────────────────────────────
// Tipi
// ──────────────────────────────────────────────────────────────

export type FaseProcessuale = "studio" | "introduttiva" | "istruttoria" | "decisionale";

export type LivelloFase = "minimo" | "medio" | "massimo";

export interface ValoreFase {
  /** Valore minimo: medio × 0,5 */
  min: number;
  /** Valore medio (parametro Tabella 15) */
  med: number;
  /** Valore massimo: medio × 1,5 */
  max: number;
}

export interface CompetenzaPenale {
  id: string;
  /** Nome della competenza per UI e SEO */
  nome: string;
  /** Descrizione breve */
  descrizione: string;
  /** Le 4 fasi del procedimento. null = fase non prevista per questa competenza */
  fasi: {
    studio: ValoreFase | null;
    introduttiva: ValoreFase | null;
    istruttoria: ValoreFase | null;
    decisionale: ValoreFase | null;
  };
  /** Totale valore medio (somma fasi previste) */
  totaleMedio: number;
  /** Totale minimo */
  totaleMin: number;
  /** Totale massimo */
  totaleMax: number;
  /** Note specifiche (es. "Fase istruttoria non prevista") */
  note?: string;
}

export interface InputCompensoPenale {
  competenzaId: string;
  /** Quali fasi includere nel calcolo */
  fasiAttive: {
    studio: boolean;
    introduttiva: boolean;
    istruttoria: boolean;
    decisionale: boolean;
  };
  /** Livello per ciascuna fase */
  livelloFasi: {
    studio: LivelloFase;
    introduttiva: LivelloFase;
    istruttoria: LivelloFase;
    decisionale: LivelloFase;
  };
  /** Valutazione soggettiva (-50% a +50%) — art. 12 c. 1 D.M. 55/2014 */
  valutazioneSoggettiva: number;
  /** Numero parti/imputati tutelati (1-20) — art. 8 D.M. 55/2014 */
  numeroParti: number;
  /** Gratuito patrocinio penale: -1/3 ex art. 106-bis DPR 115/2002 */
  gratuitoPatrocinio: boolean;
  /** Inammissibilità/improcedibilità: -50% ex art. 4 c. 9 */
  inammissibilita: boolean;
  /** Atti telematici navigabili: +30% ex art. 4 c. 1-bis */
  attiTelematici: boolean;
  /** Spese imponibili (trasferta art. 27, perizie) */
  speseImponibili: number;
  /** Spese esenti (anticipazioni per conto cliente, bolli) */
  speseEsenti: number;
  /** Spese generali forfettarie (default 15% art. 2) */
  includiSpeseGenerali: boolean;
  percSpeseGenerali: number;
  /** CPA 4% Cassa Forense */
  includiCPA: boolean;
  /** IVA 22% */
  includiIVA: boolean;
  /** Ritenuta d'acconto 20% */
  includiRitenuta: boolean;
}

export interface RisultatoCompensoPenale {
  competenza: CompetenzaPenale | null;
  compensoPerFase: {
    studio: number;
    introduttiva: number;
    istruttoria: number;
    decisionale: number;
  };
  compensoBase: number;
  valutazioneSoggettiva: number;
  compensoConValutazione: number;
  aumentoPluralita: number;
  aumentoAttiTelematici: number;
  compensoConAumenti: number;
  riduzioneGratuitoPatrocinio: number;
  riduzioneInammissibilita: number;
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
// Tabella 15 — D.M. 147/2022 (vigente dal 23/10/2022)
// Valori medi verificati contro GU n. 236 del 8/10/2022
// Min = medio × 0,5; Max = medio × 1,5
// ──────────────────────────────────────────────────────────────

const fase = (med: number): ValoreFase => ({
  min: Math.round(med * 0.5 * 100) / 100,
  med,
  max: Math.round(med * 1.5 * 100) / 100,
});

function buildCompetenza(
  id: string,
  nome: string,
  descrizione: string,
  fasiMedi: {
    studio: number | null;
    introduttiva: number | null;
    istruttoria: number | null;
    decisionale: number | null;
  },
  note?: string
): CompetenzaPenale {
  const fasi = {
    studio: fasiMedi.studio != null ? fase(fasiMedi.studio) : null,
    introduttiva: fasiMedi.introduttiva != null ? fase(fasiMedi.introduttiva) : null,
    istruttoria: fasiMedi.istruttoria != null ? fase(fasiMedi.istruttoria) : null,
    decisionale: fasiMedi.decisionale != null ? fase(fasiMedi.decisionale) : null,
  };
  let totaleMedio = 0;
  let totaleMin = 0;
  let totaleMax = 0;
  (["studio", "introduttiva", "istruttoria", "decisionale"] as const).forEach((k) => {
    if (fasi[k]) {
      totaleMedio += fasi[k]!.med;
      totaleMin += fasi[k]!.min;
      totaleMax += fasi[k]!.max;
    }
  });
  return {
    id,
    nome,
    descrizione,
    fasi,
    totaleMedio,
    totaleMin: Math.round(totaleMin * 100) / 100,
    totaleMax: Math.round(totaleMax * 100) / 100,
    note,
  };
}

export const COMPETENZE_PENALI: CompetenzaPenale[] = [
  buildCompetenza(
    "giudice-pace",
    "Giudice di Pace (penale)",
    "Procedimenti penali davanti al Giudice di Pace per reati di minore entità (D.Lgs. 274/2000).",
    { studio: 378, introduttiva: 473, istruttoria: 756, decisionale: 662 }
  ),
  buildCompetenza(
    "indagini-preliminari",
    "Indagini preliminari",
    "Attività difensiva svolta nella fase delle indagini preliminari, inclusi interrogatori e atti del PM (artt. 326 ss. c.p.p.). Per la convalida dell'arresto si applica questa voce ai sensi del CNF Parere 18/2025.",
    { studio: 851, introduttiva: 662, istruttoria: 1040, decisionale: 1229 }
  ),
  buildCompetenza(
    "indagini-difensive",
    "Indagini difensive",
    "Attività investigativa svolta dal difensore ex L. 397/2000 e artt. 391-bis ss. c.p.p. (ricerca prove, audizione testimoni, sopralluoghi).",
    { studio: 851, introduttiva: null, istruttoria: 1418, decisionale: null },
    "Le fasi introduttiva e decisionale non sono previste per questa attività."
  ),
  buildCompetenza(
    "cautelari-personali",
    "Misure cautelari personali",
    "Procedimenti per misure cautelari personali (custodia in carcere, arresti domiciliari, obbligo di dimora) ex artt. 272 ss. c.p.p.",
    { studio: 378, introduttiva: 1229, istruttoria: null, decisionale: 1418 },
    "Fase istruttoria non prevista."
  ),
  buildCompetenza(
    "cautelari-reali",
    "Misure cautelari reali",
    "Procedimenti per sequestro conservativo, sequestro preventivo e sequestro probatorio ex artt. 316 ss. c.p.p.",
    { studio: 378, introduttiva: 1229, istruttoria: null, decisionale: 1418 },
    "Fase istruttoria non prevista."
  ),
  buildCompetenza(
    "gip-gup",
    "GIP / GUP",
    "Procedimenti davanti al Giudice per le Indagini Preliminari o al Giudice dell'Udienza Preliminare, inclusi riti speciali (abbreviato, patteggiamento).",
    { studio: 851, introduttiva: 919, istruttoria: 1418, decisionale: 1418 }
  ),
  buildCompetenza(
    "tribunale-monocratico",
    "Tribunale Monocratico",
    "Procedimenti penali davanti al Tribunale in composizione monocratica (reati con pena fino a 10 anni, salvo eccezioni art. 33-ter c.p.p.).",
    { studio: 473, introduttiva: 567, istruttoria: 1134, decisionale: 1418 }
  ),
  buildCompetenza(
    "tribunale-collegiale",
    "Tribunale Collegiale",
    "Procedimenti penali davanti al Tribunale in composizione collegiale (reati più gravi, art. 33-bis c.p.p.).",
    { studio: 473, introduttiva: 756, istruttoria: 1418, decisionale: 1418 }
  ),
  buildCompetenza(
    "corte-assise",
    "Corte di Assise",
    "Procedimenti davanti alla Corte di Assise per i reati più gravi (ergastolo, pene oltre 24 anni, delitti specifici art. 5 c.p.p.).",
    { studio: 756, introduttiva: 1418, istruttoria: 2363, decisionale: 2835 }
  ),
  buildCompetenza(
    "tribunale-sorveglianza",
    "Tribunale di Sorveglianza",
    "Procedimenti davanti al Tribunale di Sorveglianza per misure alternative alla detenzione, liberazione condizionale, riabilitazione.",
    { studio: 473, introduttiva: 945, istruttoria: 1418, decisionale: 1418 }
  ),
  buildCompetenza(
    "magistrato-sorveglianza",
    "Magistrato di Sorveglianza",
    "Procedimenti monocratici davanti al Magistrato di Sorveglianza (permessi premio, liberazione anticipata, applicazione misure).",
    { studio: 315, introduttiva: 378, istruttoria: null, decisionale: 945 },
    "Fase istruttoria non prevista."
  ),
  buildCompetenza(
    "corte-appello",
    "Corte di Appello (penale)",
    "Giudizio di appello davanti alla Corte di Appello per sentenze del Tribunale.",
    { studio: 473, introduttiva: 945, istruttoria: 1418, decisionale: 1418 }
  ),
  buildCompetenza(
    "corte-assise-appello",
    "Corte di Assise d'Appello",
    "Giudizio di appello davanti alla Corte di Assise d'Appello per sentenze della Corte di Assise.",
    { studio: 756, introduttiva: 1985, istruttoria: 2268, decisionale: 2336 }
  ),
  buildCompetenza(
    "cassazione",
    "Corte di Cassazione (penale)",
    "Giudizio di legittimità davanti alla Corte Suprema di Cassazione (ricorso ex artt. 606 ss. c.p.p.).",
    { studio: 945, introduttiva: 2646, istruttoria: null, decisionale: 2741 },
    "Fase istruttoria non prevista (giudizio di legittimità)."
  ),
];

// ──────────────────────────────────────────────────────────────
// Definizioni delle 4 fasi (art. 12 c. 3 D.M. 55/2014, testo verbatim)
// ──────────────────────────────────────────────────────────────

export interface DefinizioneFase {
  fase: FaseProcessuale;
  nome: string;
  descrizione: string;
  attivita: string[];
}

export const DEFINIZIONI_FASI: DefinizioneFase[] = [
  {
    fase: "studio",
    nome: "Fase di Studio (compresa l'attività investigativa)",
    descrizione:
      "Comprende l'esame e lo studio degli atti, le ispezioni dei luoghi, la iniziale ricerca di documenti, le consultazioni con il cliente, i colleghi o i consulenti, le relazioni o i pareri, scritti o orali, resi in momento antecedente alla fase introduttiva.",
    attivita: [
      "Esame e studio degli atti processuali",
      "Ispezioni dei luoghi",
      "Iniziale ricerca di documenti",
      "Consultazioni con il cliente, colleghi o consulenti",
      "Pareri scritti o orali antecedenti la fase introduttiva",
    ],
  },
  {
    fase: "introduttiva",
    nome: "Fase Introduttiva del Giudizio",
    descrizione:
      "Comprende tutti gli atti introduttivi del procedimento penale, dalla denuncia querela fino alla costituzione di parte civile e all'intervento del responsabile civile.",
    attivita: [
      "Esposti, denunce, querele",
      "Istanze, richieste, dichiarazioni",
      "Opposizioni, ricorsi, impugnazioni",
      "Memorie iniziali",
      "Intervento del responsabile civile",
      "Citazione del responsabile civile",
    ],
  },
  {
    fase: "istruttoria",
    nome: "Fase Istruttoria o Dibattimentale",
    descrizione:
      "Comprende tutte le attività difensive funzionali alla ricerca dei mezzi di prova e alla formazione della prova, sia in udienza pubblica che in camera di consiglio.",
    attivita: [
      "Richieste, scritti, partecipazioni o assistenze",
      "Atti istruttori procedimentali o processuali",
      "Liste, citazioni di testimoni e relative notificazioni",
      "Esame dei consulenti, testimoni, indagati o imputati",
      "Attività in udienza pubblica o camera di consiglio",
    ],
  },
  {
    fase: "decisionale",
    nome: "Fase Decisionale",
    descrizione:
      "Comprende le difese orali o scritte, le repliche e l'assistenza alla discussione delle altre parti processuali, sia in camera di consiglio che in udienza pubblica.",
    attivita: [
      "Difese orali o scritte",
      "Repliche",
      "Assistenza alla discussione delle altre parti",
      "Discussione in camera di consiglio o udienza pubblica",
    ],
  },
];

// ──────────────────────────────────────────────────────────────
// Calcolo aumenti pluralità imputati (art. 8 D.M. 55/2014)
// ──────────────────────────────────────────────────────────────

/** Restituisce la percentuale di aumento complessiva per N parti (1-20). */
export function aumentoPluralitaImputati(numeroParti: number): number {
  if (numeroParti <= 1) return 0;
  const n = Math.min(20, Math.max(1, Math.floor(numeroParti)));
  if (n <= 10) {
    return (n - 1) * 20;
  }
  return 10 * 20 - 20 + (n - 10) * 5;
}

// ──────────────────────────────────────────────────────────────
// Funzione di calcolo principale
// ──────────────────────────────────────────────────────────────

export function calcolaCompensoPenale(input: InputCompensoPenale): RisultatoCompensoPenale | null {
  const competenza = COMPETENZE_PENALI.find((c) => c.id === input.competenzaId);
  if (!competenza) {
    return null;
  }

  const valoreFase = (
    fase: FaseProcessuale,
    livello: LivelloFase,
    attiva: boolean
  ): number => {
    if (!attiva) return 0;
    const f = competenza.fasi[fase];
    if (!f) return 0;
    return f[livello === "minimo" ? "min" : livello === "massimo" ? "max" : "med"];
  };

  const compensoPerFase = {
    studio: valoreFase("studio", input.livelloFasi.studio, input.fasiAttive.studio),
    introduttiva: valoreFase(
      "introduttiva",
      input.livelloFasi.introduttiva,
      input.fasiAttive.introduttiva
    ),
    istruttoria: valoreFase(
      "istruttoria",
      input.livelloFasi.istruttoria,
      input.fasiAttive.istruttoria
    ),
    decisionale: valoreFase(
      "decisionale",
      input.livelloFasi.decisionale,
      input.fasiAttive.decisionale
    ),
  };

  const compensoBase =
    compensoPerFase.studio +
    compensoPerFase.introduttiva +
    compensoPerFase.istruttoria +
    compensoPerFase.decisionale;

  // Valutazione soggettiva: ±50%
  const valSog = Math.max(-50, Math.min(50, input.valutazioneSoggettiva));
  const valutazioneSoggettiva = compensoBase * (valSog / 100);
  const compensoConValutazione = compensoBase + valutazioneSoggettiva;

  // Aumento pluralità imputati (art. 8 D.M. 55/2014)
  const percPluralita = aumentoPluralitaImputati(input.numeroParti);
  const aumentoPluralita = compensoConValutazione * (percPluralita / 100);

  // Aumento atti telematici navigabili (art. 4 c. 1-bis, +30%)
  const aumentoAttiTelematici = input.attiTelematici ? compensoConValutazione * 0.3 : 0;

  const compensoConAumenti =
    compensoConValutazione + aumentoPluralita + aumentoAttiTelematici;

  // Riduzione gratuito patrocinio penale: -1/3 (art. 106-bis DPR 115/2002)
  const riduzioneGratuitoPatrocinio = input.gratuitoPatrocinio
    ? compensoConAumenti / 3
    : 0;

  // Riduzione inammissibilità/improcedibilità: -50% (art. 4 c. 9)
  const riduzioneInammissibilita = input.inammissibilita
    ? (compensoConAumenti - riduzioneGratuitoPatrocinio) * 0.5
    : 0;

  const compensoFinale =
    compensoConAumenti - riduzioneGratuitoPatrocinio - riduzioneInammissibilita;

  // Spese generali (15% di default)
  const percSG = Math.max(0, Math.min(100, input.percSpeseGenerali));
  const speseGenerali = input.includiSpeseGenerali
    ? compensoFinale * (percSG / 100)
    : 0;

  // Spese
  const speseImponibili = Math.max(0, input.speseImponibili);
  const speseEsenti = Math.max(0, input.speseEsenti);

  // Imponibile fiscale = compenso + spese generali + spese imponibili
  const imponibileFiscale = compensoFinale + speseGenerali + speseImponibili;

  // CPA 4% sull'imponibile fiscale
  const cpa = input.includiCPA ? imponibileFiscale * 0.04 : 0;

  // Imponibile IVA = imponibile fiscale + CPA
  const imponibileIVA = imponibileFiscale + cpa;

  // IVA 22%
  const iva = input.includiIVA ? imponibileIVA * 0.22 : 0;

  // Totale fattura = imponibile IVA + IVA + spese esenti
  const totaleFattura = imponibileIVA + iva + speseEsenti;

  // Ritenuta d'acconto 20% su compenso + spese generali + spese imponibili
  const ritenuta = input.includiRitenuta ? imponibileFiscale * 0.2 : 0;

  // Netto a pagare = totale fattura − ritenuta
  const nettoAPagare = totaleFattura - ritenuta;

  return {
    competenza,
    compensoPerFase,
    compensoBase,
    valutazioneSoggettiva,
    compensoConValutazione,
    aumentoPluralita,
    aumentoAttiTelematici,
    compensoConAumenti,
    riduzioneGratuitoPatrocinio,
    riduzioneInammissibilita,
    compensoFinale,
    speseGenerali,
    speseImponibili,
    imponibileFiscale,
    cpa,
    imponibileIVA,
    iva,
    ritenuta,
    speseEsenti,
    totaleFattura,
    nettoAPagare,
  };
}

// ──────────────────────────────────────────────────────────────
// Errori comuni nella parcella penale
// ──────────────────────────────────────────────────────────────

export interface ErroreComune {
  titolo: string;
  descrizione: string;
}

export const ERRORI_COMUNI: ErroreComune[] = [
  {
    titolo: "Confondere la riduzione del gratuito patrocinio penale (-1/3) con quella civile (-1/2)",
    descrizione:
      "Nel processo penale la riduzione del compenso per il gratuito patrocinio è di un terzo (33,33%) ex art. 106-bis DPR 115/2002. Nei giudizi civili, amministrativi e tributari la riduzione è invece della metà (50%) ex art. 130 DPR 115/2002. Applicare il -50% nel penale produce una sottostima del compenso.",
  },
  {
    titolo: "Dimenticare il preventivo scritto obbligatorio",
    descrizione:
      "L'art. 13 c. 4 L. 247/2012, come modificato dall'art. 1 c. 150 L. 124/2017, impone all'avvocato di consegnare al cliente un preventivo scritto al momento del conferimento dell'incarico, indipendentemente dalla richiesta. La mancanza non priva del compenso, ma costituisce illecito disciplinare.",
  },
  {
    titolo: "Utilizzare i parametri del D.M. 55/2014 pre-2022 per prestazioni recenti",
    descrizione:
      "Dal 23 ottobre 2022 si applicano i valori aggiornati dal D.M. 147/2022 (+50% medio sui parametri originari). La Cassazione, con ord. n. 33482 del 14/11/2022, ha chiarito che i valori previgenti si applicano solo alle prestazioni esaurite prima del 23/10/2022. Per attività successive vanno usati i nuovi valori.",
  },
  {
    titolo: "Ridurre il compenso sotto il minimo tabellare",
    descrizione:
      "Con la modifica del D.M. 37/2018 (sostituzione di «di regola» con «in ogni caso»), i limiti del -50% sono diventati inderogabili. La Cassazione, con ord. n. 29925 del 12/11/2025, ha confermato che il giudice non può scendere sotto il minimo nemmeno con valutazione discrezionale. Vecchie parcelle che applicano riduzioni superiori espongono a impugnazione.",
  },
  {
    titolo: "Calcolare le spese generali sull'importo sbagliato",
    descrizione:
      "Le spese generali al 15% (art. 2 D.M. 55/2014) si calcolano sul compenso al netto di aumenti e riduzioni, NON sull'imponibile fiscale né sulle spese esenti o di trasferta. Concorrono poi all'imponibile per CPA, IVA e ritenuta. Un errore frequente è applicare il 15% sul totale (compenso + accessori), gonfiando il dovuto.",
  },
  {
    titolo: "Applicare la ritenuta d'acconto sulla CPA o sull'IVA",
    descrizione:
      "La ritenuta d'acconto al 20% (art. 25 DPR 600/1973) si applica solo sul compenso, sulle spese generali e sulle spese imponibili (es. trasferta). NON si applica né sulla CPA né sull'IVA né sulle spese esenti (anticipazioni in nome e per conto del cliente).",
  },
  {
    titolo: "Confondere avvocato d'ufficio con gratuito patrocinio",
    descrizione:
      "L'avvocato d'ufficio (art. 97 c.p.p.) è nominato dal giudice quando l'imputato non ha difensore di fiducia: il compenso è dovuto direttamente dall'imputato. Solo se l'imputato viene ammesso al gratuito patrocinio, lo Stato paga (con riduzione di 1/3). In caso di mancato pagamento, l'avvocato d'ufficio può recuperare il credito presso l'Erario solo previa verifica dell'inesigibilità dal cliente.",
  },
  {
    titolo: "Non applicare l'aumento per pluralità di imputati",
    descrizione:
      "L'art. 8 D.M. 55/2014 prevede un aumento del 20% per ogni imputato oltre il primo, fino a 10 (+180% per 10 imputati), poi +5% per ciascuno dall'11° al 20°. La regola si applica anche quando si difende un solo imputato contro più parti, se la prestazione comporta l'esame di situazioni distinte. Molti avvocati dimenticano questo aumento, sottostimando la parcella.",
  },
];

// ──────────────────────────────────────────────────────────────
// Normativa di riferimento
// ──────────────────────────────────────────────────────────────

export const normativaRiferimento: NormativaRiferimento[] = [
  {
    norma: "L. 31 dicembre 2012 n. 247",
    descrizione:
      "Nuova disciplina dell'ordinamento della professione forense. L'art. 13 c. 6 delega al Ministero della Giustizia l'adozione biennale dei parametri.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247",
  },
  {
    norma: "D.M. 10 marzo 2014 n. 55",
    descrizione:
      "Regolamento dei parametri forensi (testo originario). Tabella 15 dedicata ai compensi penali. Art. 2 (spese generali 15%), art. 8 (pluralità imputati), art. 12 (criteri e fasi penali), art. 15 e 27 (trasferte).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55",
  },
  {
    norma: "D.M. 8 marzo 2018 n. 37",
    descrizione:
      "Modifica al D.M. 55/2014: sostituisce «di regola» con «in ogni caso» agli artt. 4 c. 1, 12 c. 1, 19 c. 1, rendendo inderogabili i limiti del ±50%.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2018-03-08;37",
  },
  {
    norma: "D.M. 13 agosto 2022 n. 147",
    descrizione:
      "Aggiornamento dei parametri forensi (+50% medio sui valori D.M. 55/2014). Introduce l'art. 22-bis (compenso orario €200-500). In vigore dal 23/10/2022. Pubblicato in GU n. 236 del 8/10/2022.",
    url: "https://www.gazzettaufficiale.it/eli/id/2022/10/08/22G00157/SG",
  },
  {
    norma: "DPR 30 maggio 2002 n. 115",
    descrizione:
      "Testo Unico delle disposizioni in materia di spese di giustizia. Art. 76 (limite reddito gratuito patrocinio), art. 82-83 (liquidazione compensi), art. 91 (penale), art. 106-bis (riduzione 1/3 nel penale), art. 130 (riduzione 1/2 nel civile).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115",
  },
  {
    norma: "L. 11 febbraio 1992 n. 141",
    descrizione:
      "Disciplina previdenziale degli avvocati. Art. 11: contributo integrativo Cassa Forense 4% sul compenso.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1992-02-11;141",
  },
  {
    norma: "DPR 26 ottobre 1972 n. 633",
    descrizione:
      "Disciplina IVA. Art. 15 (spese non imponibili), art. 22 (operazioni non imponibili). Aliquota ordinaria 22% sul compenso.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633",
  },
  {
    norma: "DPR 29 settembre 1973 n. 600",
    descrizione:
      "Disciplina dell'accertamento delle imposte sui redditi. Art. 25: ritenuta d'acconto 20% sui compensi professionali corrisposti da sostituti d'imposta.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600",
  },
  {
    norma: "L. 4 agosto 2017 n. 124",
    descrizione:
      "Legge annuale per il mercato e la concorrenza. Art. 1 c. 150 modifica l'art. 13 c. 4 L. 247/2012, rendendo obbligatorio il preventivo scritto.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-08-04;124",
  },
  {
    norma: "D.M. Interno 8 gennaio 2024",
    descrizione:
      "Aggiornamento del limite di reddito per l'ammissione al gratuito patrocinio: € 12.838,01 (GU n. 31 del 7/2/2024). Aumento di € 1.032,91 per ciascun familiare convivente.",
    url: "https://www.gazzettaufficiale.it/eli/id/2024/02/07/24A00567/sg",
  },
];

export const circolariMinisteriali: CircolareMinisteriale[] = [
  {
    circolare: "CNF Parere n. 18 del 27 marzo 2025",
    descrizione:
      "Criteri per la determinazione dei compensi dell'avvocato in sede di udienza di convalida dell'arresto e richiesta di misura cautelare. Non esiste voce autonoma in Tabella 15: si applica la voce «Indagini preliminari» nella fascia medio-alta.",
    url: "https://www.consiglionazionaleforense.it/parametri",
  },
  {
    circolare: "Cass. Civ. ord. n. 29925 del 12 novembre 2025",
    descrizione:
      "Inderogabilità dei valori minimi tabellari. Il giudice non può scendere sotto il minimo nemmeno con valutazione discrezionale. Il sistema dei parametri esprime una valutazione politico-legislativa funzionale alla tutela del diritto di difesa.",
    url: "https://www.misterlex.it/cassazione-civile/2025/29925/",
  },
  {
    circolare: "Cass. Civ. ord. n. 33482 del 14 novembre 2022",
    descrizione:
      "Disciplina transitoria del D.M. 147/2022. I parametri previgenti si applicano alle prestazioni esaurite prima del 23 ottobre 2022. I nuovi valori si applicano alle prestazioni concluse dopo.",
    url: "https://www.cortedicassazione.it",
  },
];

// ──────────────────────────────────────────────────────────────
// Sezioni per la sidebar di navigazione
// ──────────────────────────────────────────────────────────────

export const sections: ToolSection[] = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "come-si-calcola", label: "Come si calcola" },
  { id: "le-quattro-fasi", label: "Le 4 fasi del processo" },
  { id: "tabella-15", label: "Tabella 15 D.M. 147/2022" },
  { id: "compensi-per-competenza", label: "Compensi per competenza" },
  { id: "aumenti-riduzioni", label: "Aumenti e riduzioni" },
  { id: "gratuito-patrocinio", label: "Gratuito patrocinio penale" },
  { id: "spese-accessori", label: "Spese e accessori" },
  { id: "avvocato-ufficio", label: "Avvocato d'ufficio vs fiducia" },
  { id: "riti-speciali", label: "Riti speciali" },
  { id: "convalida-arresto", label: "Convalida arresto" },
  { id: "cassazione-recente", label: "Cassazione recente" },
  { id: "errori-comuni", label: "Errori comuni" },
  { id: "riforma-2026", label: "Riforma 2026" },
  { id: "fonti", label: "Fonti istituzionali" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];
