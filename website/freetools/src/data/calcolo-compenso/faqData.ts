import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // ── Fondamenti Normativi ──
  {
    categoria: "Fondamenti Normativi",
    domanda: "Qual \u00e8 la normativa di riferimento per il calcolo del compenso dell'avvocato?",
    risposta: "Il compenso dell'avvocato \u00e8 disciplinato dal D.M. 10 marzo 2014, n. 55, come modificato dal D.M. 13 agosto 2022, n. 147, emanati ai sensi dell'art. 13, comma 6, della Legge 31 dicembre 2012, n. 247 (ordinamento della professione forense). I parametri si applicano alle prestazioni professionali esaurite dopo il 23 ottobre 2022.",
    fonti: [
      { label: "D.M. 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
      { label: "D.M. 147/2022", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147" },
    ],
  },
  {
    categoria: "Fondamenti Normativi",
    domanda: "Quando si applicano i parametri forensi?",
    risposta: "I parametri si applicano quando il compenso non \u00e8 stato determinato all'atto dell'incarico o successivamente in forma scritta, in caso di liquidazione giudiziale del compenso, oppure nei casi in cui la prestazione professionale \u00e8 resa nell'interesse di terzi o per prestazioni d'ufficio previste dalla legge. Non si applicano quando esiste un accordo scritto tra avvocato e cliente.",
    fonti: [
      { label: "Art. 1 DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Fondamenti Normativi",
    domanda: "Qual \u00e8 la differenza tra i parametri 2014 e quelli aggiornati al 2022?",
    risposta: "Il D.M. 147/2022 ha introdotto tre modifiche principali: (1) aggiornamento dei valori medi tabellari al costo della vita (circa +5%); (2) soppressione delle parole \u00abdi regola\u00bb per ridurre la discrezionalit\u00e0 giudiziale; (3) introduzione di un'unica percentuale del 50% sia per gli aumenti massimi (prima 80%, 100% per la fase istruttoria) sia per le diminuzioni massime dei valori medi.",
    fonti: [
      { label: "D.M. 147/2022", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147" },
    ],
  },

  // ── Fasi del Procedimento ──
  {
    categoria: "Fasi del Procedimento",
    domanda: "Quali sono le fasi del procedimento per il calcolo del compenso?",
    risposta: "Il D.M. 55/2014 individua quattro fasi: (1) Studio della controversia: esame e studio degli atti, ricerche giurisprudenziali, consultazioni con il cliente; (2) Fase introduttiva: redazione dell'atto introduttivo, iscrizione a ruolo, notificazioni; (3) Fase istruttoria/trattazione: richieste istruttorie, udienze, memorie, esame documenti; (4) Fase decisionale: precisazione delle conclusioni, comparse conclusionali, repliche e sentenza.",
    fonti: [
      { label: "Art. 4 DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Fasi del Procedimento",
    domanda: "Il compenso va calcolato per ogni singola fase?",
    risposta: "S\u00ec, il compenso si calcola separatamente per ciascuna fase effettivamente svolta. Se una fase non viene espletata (ad esempio la fase istruttoria in un procedimento che si conclude in limine), il relativo compenso non \u00e8 dovuto. Per ciascuna fase si seleziona un valore tra il minimo, il medio e il massimo previsti dalla tabella.",
    fonti: [
      { label: "Art. 4, c. 1 DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },

  // ── Calcolo e Formula ──
  {
    categoria: "Calcolo e Formula",
    domanda: "Come si calcola il compenso totale dell'avvocato?",
    risposta: "La formula \u00e8: (1) si sommano i valori delle fasi effettivamente svolte per ottenere il compenso base; (2) si applicano gli eventuali aumenti; (3) si applicano le eventuali riduzioni; (4) si aggiunge il rimborso spese generali del 15%; (5) si calcola la CPA (4% del compenso); (6) si applica l'IVA al 22% su compenso, spese imponibili e CPA; (7) eventuale ritenuta d'acconto del 20%.",
    fonti: [
      { label: "Artt. 2-4 DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Calcolo e Formula",
    domanda: "Cosa sono le spese generali del 15%?",
    risposta: "L'art. 2 del D.M. 55/2014 prevede che oltre al compenso, all'avvocato \u00e8 dovuto un rimborso forfettario per le spese generali pari al 15% del compenso. Si tratta di una percentuale forfettaria che copre le spese di studio, segreteria, utenze e altre spese non documentabili.",
    fonti: [
      { label: "Art. 2 DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Calcolo e Formula",
    domanda: "Qual \u00e8 la differenza tra valori minimi, medi e massimi?",
    risposta: "Le tabelle allegate al D.M. indicano solo i valori medi per ciascuna fase e scaglione. I valori minimi e massimi si ottengono applicando al valore medio le variazioni previste dall'art. 4, comma 1: diminuzione fino al 50% (valore minimo) e aumento fino al 50% (valore massimo). Il giudice pu\u00f2 quindi liquidare un importo compreso tra il -50% e il +50% del valore medio.",
    fonti: [
      { label: "Art. 4, c. 1 DM 55/2014 (mod. DM 147/2022)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147" },
    ],
  },

  // ── Aumenti ──
  {
    categoria: "Aumenti e Riduzioni",
    domanda: "Quando si applica l'aumento per pluralit\u00e0 di parti?",
    risposta: "L'art. 4, comma 2 prevede un aumento quando l'avvocato assiste pi\u00f9 soggetti con la stessa posizione processuale. L'aumento \u00e8 pari al 20% per ogni parte aggiuntiva fino a 10 parti, e del 10% per ogni parte oltre la decima. Ad esempio: 2 parti = +20%, 5 parti = +80%, 12 parti = +200%.",
    fonti: [
      { label: "Art. 4, c. 2 DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Aumenti e Riduzioni",
    domanda: "Come funziona l'aumento per conciliazione?",
    risposta: "L'art. 4, comma 6 prevede un aumento fino al 25% del compenso della fase decisionale quando la controversia si conclude con una conciliazione giudiziale o una transazione. L'aumento si applica solo sul valore della fase decisionale, non sull'intero compenso.",
    fonti: [
      { label: "Art. 4, c. 6 DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Aumenti e Riduzioni",
    domanda: "Quali sono le riduzioni previste dal DM 55/2014?",
    risposta: "Le principali riduzioni sono: assenza di questioni di fatto e diritto (fino al 30%); condotte ostative della parte (fino al 50%); responsabilit\u00e0 ex art. 96 c.p.c. (riduzione fissa del 75%); pronunce in rito (riduzione fissa del 50%); gratuito patrocinio ex art. 130 D.P.R. 115/2002 (riduzione fissa del 50%); praticante abilitato (dal 5% al 50%).",
    fonti: [
      { label: "Art. 4, cc. 4, 7, 9 DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },

  // ── Scaglioni e Competenze ──
  {
    categoria: "Scaglioni e Competenze",
    domanda: "Come si determina lo scaglione di valore della causa?",
    risposta: "Lo scaglione si individua in base al valore della causa determinato secondo le regole processuali (artt. 10 e ss. c.p.c.). Le tabelle prevedono 13 scaglioni da \u00abfino a 1.100 euro\u00bb a \u00aboltre 32.000.000 euro\u00bb, pi\u00f9 4 scaglioni per le cause di valore indeterminabile (bassa, media, alta complessit\u00e0 e valore non determinabile).",
    fonti: [
      { label: "Tabelle DM 55/2014 (agg. DM 147/2022)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147" },
    ],
  },
  {
    categoria: "Scaglioni e Competenze",
    domanda: "Quali giurisdizioni sono coperte dal calcolatore?",
    risposta: "Il calcolatore copre 29 competenze suddivise per giurisdizione (Giudice di pace, Tribunale, Corte d'Appello, Cassazione, Corte dei Conti, Magistrature superiori, Corte Costituzionale, Corte Europea, Corte di Giustizia UE, T.A.R., Consiglio di Stato, Commissioni Tributarie, Arbitrati) e per materia (esecuzioni, procedimenti speciali, volontaria giurisdizione, precetto, monitori, ADR/mediazione, contrattualistica pubblica e privata, consulenza stragiudiziale).",
    fonti: [
      { label: "Tabelle DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Scaglioni e Competenze",
    domanda: "Perch\u00e9 per il T.A.R. e il Consiglio di Stato le fasi sono diverse?",
    risposta: "I procedimenti davanti al T.A.R. e al Consiglio di Stato hanno una struttura processuale diversa rispetto al rito ordinario civile. Le tabelle prevedono fasi specifiche (cautelare ed esecutiva con codici 72 e 74) che riflettono le peculiarit\u00e0 del processo amministrativo, come la fase cautelare che ha un ruolo pi\u00f9 rilevante.",
    fonti: [
      { label: "Tabelle DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },

  // ── Accessori e Spese ──
  {
    categoria: "Accessori e Spese",
    domanda: "Cos'\u00e8 la CPA (Cassa Previdenza Avvocati)?",
    risposta: "La CPA \u00e8 il contributo integrativo obbligatorio dovuto alla Cassa Nazionale di Previdenza e Assistenza Forense, pari al 4% del compenso. Viene addebitato in fattura al cliente in aggiunta al compenso ed \u00e8 soggetto a IVA.",
    fonti: [
      { label: "L. 247/2012, art. 11", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247" },
    ],
  },
  {
    categoria: "Accessori e Spese",
    domanda: "Come si calcola l'IVA sulla parcella dell'avvocato?",
    risposta: "L'IVA al 22% si applica sulla somma di: compenso professionale (incluse spese generali), spese imponibili (trasferta e altre spese non esenti) e CPA. Le spese esenti ai sensi dell'art. 15 del D.P.R. 633/72 (marche, contributo unificato, diritti di copia) non sono soggette a IVA.",
    fonti: [
      { label: "D.P.R. 633/1972", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633" },
    ],
  },
  {
    categoria: "Accessori e Spese",
    domanda: "Quando si applica la ritenuta d'acconto?",
    risposta: "La ritenuta d'acconto del 20% si applica quando il cliente \u00e8 un sostituto d'imposta (societ\u00e0, enti, professionisti con dipendenti). Si calcola sul compenso e sulle spese generali, escluse CPA, IVA e spese documentate. Non si applica se il cliente \u00e8 un privato consumatore.",
    fonti: [
      { label: "D.P.R. 600/1973, art. 25", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600" },
    ],
  },
  {
    categoria: "Accessori e Spese",
    domanda: "Quali spese sono esenti IVA nella parcella dell'avvocato?",
    risposta: "Sono esenti IVA le spese anticipate in nome e per conto del cliente ai sensi dell'art. 15 del D.P.R. 633/72, come il contributo unificato, le marche da bollo, i diritti di copia e notifica, e i diritti di cancelleria. Queste spese vanno indicate separatamente in fattura.",
    fonti: [
      { label: "Art. 15 D.P.R. 633/72", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633" },
    ],
  },

  // ── Utilizzo del Calcolatore ──
  {
    categoria: "Utilizzo del Calcolatore",
    domanda: "Il risultato del calcolatore \u00e8 vincolante?",
    risposta: "No, il calcolatore fornisce una stima indicativa basata sui parametri tabellari. Il compenso effettivo pu\u00f2 essere diverso in base all'accordo tra avvocato e cliente (art. 13 L. 247/2012) o alla liquidazione del giudice, che tiene conto della complessit\u00e0, dell'importanza e dei risultati conseguiti.",
    fonti: [
      { label: "Art. 13 L. 247/2012", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247" },
    ],
  },
  {
    categoria: "Utilizzo del Calcolatore",
    domanda: "Come si usano i valori personalizzati per le fasi?",
    risposta: "Per ogni fase \u00e8 possibile selezionare Minimo, Medio o Massimo dalla tabella, oppure inserire un valore personalizzato. Il valore personalizzato \u00e8 utile quando si conosce l'importo esatto liquidato dal giudice o concordato con il cliente, anche se diverso dai parametri tabellari.",
  },
  {
    categoria: "Utilizzo del Calcolatore",
    domanda: "Posso usare il calcolatore per cause di valore indeterminabile?",
    risposta: "S\u00ec, il calcolatore prevede 4 scaglioni specifici per le cause di valore indeterminabile: bassa complessit\u00e0 (equiparata allo scaglione 26.001-52.000 euro), media complessit\u00e0 (media aritmetica), alta complessit\u00e0 (equiparata allo scaglione 52.001-260.000 euro) e valore non determinabile.",
    fonti: [
      { label: "Art. 5, c. 6 DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
];
