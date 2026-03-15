import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // ── Fondamenti Normativi ──
  {
    categoria: "Fondamenti Normativi",
    domanda: "Qual è la normativa di riferimento per il calcolo del compenso dell'avvocato?",
    risposta: "Il compenso dell'avvocato è disciplinato dal D.M. 10 marzo 2014, n. 55, come modificato dal D.M. 13 agosto 2022, n. 147, emanati ai sensi dell'art. 13, comma 6, della Legge 31 dicembre 2012, n. 247 (ordinamento della professione forense). I parametri si applicano alle prestazioni professionali esaurite dopo il 23 ottobre 2022.",
    fonti: [
      { label: "D.M. 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
      { label: "D.M. 147/2022", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147" },
    ],
  },
  {
    categoria: "Fondamenti Normativi",
    domanda: "Quando si applicano i parametri forensi?",
    risposta: "I parametri si applicano quando il compenso non è stato determinato all'atto dell'incarico o successivamente in forma scritta, in caso di liquidazione giudiziale del compenso, oppure nei casi in cui la prestazione professionale è resa nell'interesse di terzi o per prestazioni d'ufficio previste dalla legge. Non si applicano quando esiste un accordo scritto tra avvocato e cliente.",
    fonti: [
      { label: "Art. 1 DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Fondamenti Normativi",
    domanda: "Qual è la differenza tra i parametri 2014 e quelli aggiornati al 2022?",
    risposta: "Il D.M. 147/2022 ha introdotto tre modifiche principali: (1) aggiornamento dei valori medi tabellari al costo della vita (circa +5%); (2) soppressione delle parole «di regola» per ridurre la discrezionalità giudiziale; (3) introduzione di un'unica percentuale del 50% sia per gli aumenti massimi (prima 80%, 100% per la fase istruttoria) sia per le diminuzioni massime dei valori medi.",
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
    risposta: "Sì, il compenso si calcola separatamente per ciascuna fase effettivamente svolta. Se una fase non viene espletata (ad esempio la fase istruttoria in un procedimento che si conclude in limine), il relativo compenso non è dovuto. Per ciascuna fase si seleziona un valore tra il minimo, il medio e il massimo previsti dalla tabella.",
    fonti: [
      { label: "Art. 4, c. 1 DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },

  // ── Calcolo e Formula ──
  {
    categoria: "Calcolo e Formula",
    domanda: "Come si calcola il compenso totale dell'avvocato?",
    risposta: "La formula è: (1) si sommano i valori delle fasi effettivamente svolte per ottenere il compenso base; (2) si applicano gli eventuali aumenti; (3) si applicano le eventuali riduzioni; (4) si aggiunge il rimborso spese generali del 15%; (5) si calcola la CPA (4% del compenso); (6) si applica l'IVA al 22% su compenso, spese imponibili e CPA; (7) eventuale ritenuta d'acconto del 20%.",
    fonti: [
      { label: "Artt. 2-4 DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Calcolo e Formula",
    domanda: "Cosa sono le spese generali del 15%?",
    risposta: "L'art. 2 del D.M. 55/2014 prevede che oltre al compenso, all'avvocato è dovuto un rimborso forfettario per le spese generali pari al 15% del compenso. Si tratta di una percentuale forfettaria che copre le spese di studio, segreteria, utenze e altre spese non documentabili.",
    fonti: [
      { label: "Art. 2 DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Calcolo e Formula",
    domanda: "Qual è la differenza tra valori minimi, medi e massimi?",
    risposta: "Le tabelle allegate al D.M. indicano solo i valori medi per ciascuna fase e scaglione. I valori minimi e massimi si ottengono applicando al valore medio le variazioni previste dall'art. 4, comma 1: diminuzione fino al 50% (valore minimo) e aumento fino al 50% (valore massimo). Il giudice può quindi liquidare un importo compreso tra il -50% e il +50% del valore medio.",
    fonti: [
      { label: "Art. 4, c. 1 DM 55/2014 (mod. DM 147/2022)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147" },
    ],
  },

  // ── Aumenti ──
  {
    categoria: "Aumenti e Riduzioni",
    domanda: "Quando si applica l'aumento per pluralità di parti?",
    risposta: "L'art. 4, comma 2 prevede un aumento quando l'avvocato assiste più soggetti con la stessa posizione processuale. L'aumento è pari al 20% per ogni parte aggiuntiva fino a 10 parti, e del 10% per ogni parte oltre la decima. Ad esempio: 2 parti = +20%, 5 parti = +80%, 12 parti = +200%.",
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
    risposta: "Le principali riduzioni sono: assenza di questioni di fatto e diritto (fino al 30%); condotte ostative della parte (fino al 50%); responsabilità ex art. 96 c.p.c. (riduzione fissa del 75%); pronunce in rito (riduzione fissa del 50%); gratuito patrocinio ex art. 130 D.P.R. 115/2002 (riduzione fissa del 50%); praticante abilitato (dal 5% al 50%).",
    fonti: [
      { label: "Art. 4, cc. 4, 7, 9 DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },

  // ── Scaglioni e Competenze ──
  {
    categoria: "Scaglioni e Competenze",
    domanda: "Come si determina lo scaglione di valore della causa?",
    risposta: "Lo scaglione si individua in base al valore della causa determinato secondo le regole processuali (artt. 10 e ss. c.p.c.). Le tabelle prevedono 13 scaglioni da «fino a 1.100 euro» a «oltre 32.000.000 euro», più 4 scaglioni per le cause di valore indeterminabile (bassa, media, alta complessità e valore non determinabile).",
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
    domanda: "Perché per il T.A.R. e il Consiglio di Stato le fasi sono diverse?",
    risposta: "I procedimenti davanti al T.A.R. e al Consiglio di Stato hanno una struttura processuale diversa rispetto al rito ordinario civile. Le tabelle prevedono fasi specifiche (cautelare ed esecutiva con codici 72 e 74) che riflettono le peculiarità del processo amministrativo, come la fase cautelare che ha un ruolo più rilevante.",
    fonti: [
      { label: "Tabelle DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },

  // ── Accessori e Spese ──
  {
    categoria: "Accessori e Spese",
    domanda: "Cos'è la CPA (Cassa Previdenza Avvocati)?",
    risposta: "La CPA è il contributo integrativo obbligatorio dovuto alla Cassa Nazionale di Previdenza e Assistenza Forense, pari al 4% del compenso. Viene addebitato in fattura al cliente in aggiunta al compenso ed è soggetto a IVA.",
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
    risposta: "La ritenuta d'acconto del 20% si applica quando il cliente è un sostituto d'imposta (società, enti, professionisti con dipendenti). Si calcola sul compenso e sulle spese generali, escluse CPA, IVA e spese documentate. Non si applica se il cliente è un privato consumatore.",
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
    domanda: "Il risultato del calcolatore è vincolante?",
    risposta: "No, il calcolatore fornisce una stima indicativa basata sui parametri tabellari. Il compenso effettivo può essere diverso in base all'accordo tra avvocato e cliente (art. 13 L. 247/2012) o alla liquidazione del giudice, che tiene conto della complessità, dell'importanza e dei risultati conseguiti.",
    fonti: [
      { label: "Art. 13 L. 247/2012", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247" },
    ],
  },
  {
    categoria: "Utilizzo del Calcolatore",
    domanda: "Come si usano i valori personalizzati per le fasi?",
    risposta: "Per ogni fase è possibile selezionare Minimo, Medio o Massimo dalla tabella, oppure inserire un valore personalizzato. Il valore personalizzato è utile quando si conosce l'importo esatto liquidato dal giudice o concordato con il cliente, anche se diverso dai parametri tabellari.",
  },
  {
    categoria: "Utilizzo del Calcolatore",
    domanda: "Posso usare il calcolatore per cause di valore indeterminabile?",
    risposta: "Sì, il calcolatore prevede 4 scaglioni specifici per le cause di valore indeterminabile: bassa complessità (equiparata allo scaglione 26.001-52.000 euro), media complessità (media aritmetica), alta complessità (equiparata allo scaglione 52.001-260.000 euro) e valore non determinabile.",
    fonti: [
      { label: "Art. 5, c. 6 DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  // ── Costi e Casistica (PAA-driven) ──
  {
    categoria: "Costi e Casistica",
    domanda: "Quanto costa un avvocato per una causa civile?",
    risposta: "Il costo dipende dal valore della causa e dalla complessità del procedimento. Per una causa di valore fino a \u20ac 5.200 il compenso medio totale (tutte le fasi) è circa \u20ac 2.552. Per cause da \u20ac 26.001 a \u20ac 52.000 il compenso medio è circa \u20ac 7.616. A questi importi vanno aggiunte le spese generali (15%), la CPA (4%) e l'IVA (22%), per un totale lordo superiore di circa il 45% rispetto al compenso netto.",
    fonti: [
      { label: "Tabella II DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Costi e Casistica",
    domanda: "Come si calcola la parcella per un decreto ingiuntivo?",
    risposta: "Per i procedimenti monitori (decreto ingiuntivo) si applicano solo due fasi: studio della controversia e fase introduttiva (Tab. VIII DM 147/2022). Ad esempio, per un decreto ingiuntivo di valore da \u20ac 5.201 a \u20ac 26.000, il compenso medio è: studio \u20ac 236 + introduttiva \u20ac 425 = \u20ac 661, a cui aggiungere spese generali, CPA e IVA.",
    fonti: [
      { label: "Tab. VIII DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Costi e Casistica",
    domanda: "Quanto costa un avvocato per una separazione o divorzio?",
    risposta: "Per la separazione consensuale o il divorzio congiunto si applicano i parametri della volontaria giurisdizione (Tab. VII). Per una causa di valore da \u20ac 5.201 a \u20ac 26.000 il compenso medio totale è circa \u20ac 1.265. Per la separazione giudiziale o il divorzio contenzioso si applicano i parametri del Tribunale ordinario (Tab. II), con importi significativamente più elevati.",
    fonti: [
      { label: "Tab. VII DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Costi e Casistica",
    domanda: "Quanto costa un'ora di consulenza con un avvocato?",
    risposta: "Il DM 147/2022 ha introdotto la possibilità di pattuire il compenso a tempo. L'art. 22-bis prevede un parametro indicativo da un minimo di \u20ac 200,00 a un massimo di \u20ac 500,00 per ciascuna ora o frazione di ora superiore a 30 minuti. Si tratta di un riferimento orientativo: il compenso orario effettivo può essere liberamente concordato tra le parti.",
    fonti: [
      { label: "Art. 22-bis DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  // ── Verifica e Contestazione ──
  {
    categoria: "Verifica e Contestazione",
    domanda: "Come sapere se la parcella dell'avvocato è giusta?",
    risposta: "Confronta le singole voci della parcella con i parametri del DM 147/2022 per lo scaglione e la competenza corretti. Verifica che le fasi addebitate corrispondano ad attività effettivamente svolte, che le spese generali siano al 15%, la CPA al 4% e l'IVA al 22%. Se il compenso è stato pattuito per iscritto, fa fede l'accordo. In caso di dubbi, richiedi chiarimenti scritti all'avvocato prima di procedere.",
    fonti: [
      { label: "Art. 4 DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
      { label: "Art. 13 L. 247/2012", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247" },
    ],
  },
  {
    categoria: "Verifica e Contestazione",
    domanda: "Cosa fare se la parcella dell'avvocato è troppo alta?",
    risposta: "Invia una contestazione scritta all'avvocato motivando l'eccessività e proponendo una rideterminazione. Se l'avvocato agisce per il recupero del credito, può richiedere il parere di congruità al Consiglio dell'Ordine e ottenere un decreto ingiuntivo (art. 636 c.p.c.). Il cliente può opporsi entro 40 giorni: il giudice liquida il compenso secondo equità (art. 2233 c.c.), usando i parametri ministeriali come riferimento.",
    fonti: [
      { label: "Art. 636 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art636" },
      { label: "Art. 2233 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2233" },
    ],
  },
  {
    categoria: "Verifica e Contestazione",
    domanda: "L'avvocato è obbligato a dare il preventivo?",
    risposta: "Sì. L'art. 13, comma 5, della L. 247/2012 prevede che l'avvocato debba comunicare al cliente il grado di complessità dell'incarico e gli oneri ipotizzabili. Il preventivo deve essere reso in forma scritta se richiesto dal cliente. In mancanza di accordo scritto, i compensi vengono liquidati secondo i parametri DM 55/2014.",
    fonti: [
      { label: "Art. 13, c. 5, L. 247/2012", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247" },
    ],
  },
  {
    categoria: "Verifica e Contestazione",
    domanda: "Cosa succede se non pago l'avvocato?",
    risposta: "L'avvocato può agire in giudizio per il recupero del credito. Può ottenere un decreto ingiuntivo provvisoriamente esecutivo sulla base del parere di congruità del Consiglio dell'Ordine (art. 636 c.p.c.). Il mancato pagamento comporta interessi moratori e spese legali aggiuntive a carico del cliente inadempiente.",
    fonti: [
      { label: "Art. 636 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art636" },
    ],
  },
  // ── Equo Compenso ──
  {
    categoria: "Equo Compenso",
    domanda: "Cos'è l'equo compenso per gli avvocati?",
    risposta: "La L. 49/2023 garantisce che il compenso degli avvocati sia proporzionato alla qualità e quantità del lavoro svolto e conforme ai parametri DM 55/2014. Si applica ai rapporti con banche, assicurazioni, imprese con oltre 50 dipendenti o ricavi superiori a 10 milioni di euro, e con la Pubblica Amministrazione. Clausole che prevedono compensi inferiori ai parametri sono nulle.",
    fonti: [
      { label: "L. 49/2023", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2023-04-21;49" },
    ],
  },
];
