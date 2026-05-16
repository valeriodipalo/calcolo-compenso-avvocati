import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // ──────────────────────────────────────────────────────────────
  // Calcolo
  // ──────────────────────────────────────────────────────────────
  {
    categoria: "Calcolo",
    domanda: "Come si calcola il compenso dell'avvocato per attività stragiudiziale?",
    risposta:
      "Si individua lo scaglione della Tabella 25 del D.M. 55/2014 (come modificato dal D.M. 147/2022) in base al valore dell'affare, si applica il parametro medio (oppure minimo o massimo, con variazione fino a ±50% ex art. 19), si aggiungono le spese generali forfettarie del 15% (art. 2), eventuali spese imponibili (trasferta art. 27) ed esenti, e infine gli accessori: CPA Cassa Forense 4%, IVA 22%, ritenuta d'acconto 20% se il cliente è sostituto d'imposta. Per valori superiori a € 520.000 si applicano le percentuali decrescenti delle sezioni II e III della tabella, dal 3% allo 0,25%.",
    fonti: [
      { label: "D.M. 55/2014 (Normattiva)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
      { label: "D.M. 147/2022 (Normattiva)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Quale tabella si applica oggi: D.M. 55/2014 o D.M. 147/2022?",
    risposta:
      "Dal 23 ottobre 2022 si applica il D.M. 147/2022 con i valori aggiornati. L'art. 6 del decreto stabilisce il criterio del tempus regit prestationem: i nuovi parametri valgono per le prestazioni professionali esaurite successivamente all'entrata in vigore. Per attività concluse prima del 23/10/2022 si applicano ancora i valori del D.M. 55/2014 originale (eventualmente come modificato dal D.M. 37/2018).",
    fonti: [
      { label: "GU n. 236 del 08/10/2022", url: "https://www.gazzettaufficiale.it/eli/id/2022/10/08/22G00154/sg" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Il parametro è il compenso o il valore della causa?",
    risposta:
      "Il parametro è il compenso medio espresso in euro nella Tabella 25, non il valore della causa. Esempio: per uno scaglione € 5.200-€ 26.000 il parametro medio è € 1.985 (D.M. 147/2022), indipendentemente dal valore esatto della controversia all'interno dello scaglione. Per valori > € 520.000 invece il parametro è espresso come percentuale del valore (3%, 2,75% ecc.).",
    fonti: [
      { label: "Art. 18 D.M. 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art18" },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // Importi e Tariffe
  // ──────────────────────────────────────────────────────────────
  {
    categoria: "Importi e Tariffe",
    domanda: "Quali sono le tariffe per un avvocato in attività stragiudiziale?",
    risposta:
      "I parametri D.M. 147/2022 prevedono compensi medi che vanno da € 284 per controversie fino a € 1.100 fino a € 6.164 per controversie fino a € 520.000. Per affari di valore superiore si applicano percentuali decrescenti dal 3% allo 0,25%. Il compenso medio può variare in più o in meno fino al 50% (art. 19), e su di esso si aggiungono spese generali (15%), CPA (4%), IVA (22%) e ritenuta (20%) ove applicabile.",
    fonti: [
      { label: "Tabella 25 D.M. 55/2014 (Normattiva)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Importi e Tariffe",
    domanda: "Quanto costa un parere stragiudiziale dell'avvocato?",
    risposta:
      "Il costo dipende dal valore della controversia oggetto del parere. Per una controversia di € 15.000 il parametro medio è € 1.985; con spese generali (15%), CPA (4%) e IVA (22%) il costo lordo per il cliente è di circa € 2.900. Per controversie minori (entro € 1.100) il parametro scende a € 284 con un totale lordo intorno ai € 415. Si tratta di parametri orientativi: il compenso effettivo può essere pattuito liberamente con il cliente, anche in misura forfettaria.",
    fonti: [
      { label: "D.M. 147/2022 (Normattiva)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147" },
    ],
  },
  {
    categoria: "Importi e Tariffe",
    domanda: "Quanto costa la parcella dell'avvocato per una fase stragiudiziale?",
    risposta:
      "Dipende dal valore dell'affare. Per la maggior parte delle controversie di importo medio (€ 5.000-€ 50.000), il compenso medio si colloca tra € 1.276 e € 2.410 oltre accessori. Per controversie superiori a € 50.000 si supera spesso la soglia dei € 4.500. Il compenso può essere ridotto fino al 50% per attività di limitata complessità o aumentato fino al 50% per pratiche particolarmente complesse o di lunga durata.",
    fonti: [
      { label: "Tabella 25 D.M. 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Importi e Tariffe",
    domanda: "Esistono compensi minimi obbligatori per l'attività stragiudiziale?",
    risposta:
      "No. Dal D.L. 1/2012 (decreto liberalizzazioni) sono state abolite le tariffe forensi inderogabili. I parametri ministeriali sono criteri di riferimento sussidiari, applicabili in mancanza di accordo scritto sul compenso o in sede di liquidazione giudiziale. L'avvocato e il cliente possono concordare liberamente il compenso, anche in misura forfettaria, percentuale o a tempo, purché nel rispetto del principio di adeguatezza ex art. 2233 c.c.",
    fonti: [
      { label: "Art. 13 L. 247/2012", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247" },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // Aumenti e Riduzioni
  // ──────────────────────────────────────────────────────────────
  {
    categoria: "Aumenti e Riduzioni",
    domanda: "Quali aumenti e riduzioni posso applicare al parametro medio?",
    risposta:
      "Dal 23 ottobre 2022 (D.M. 147/2022), l'art. 19 del D.M. 55/2014 prevede una variazione uniforme fino a ±50% del parametro medio. In precedenza era prevista una riduzione fino al 50% e un aumento fino all'80% (con punte del 100% per la fase istruttoria). La riduzione si applica per pratiche di limitata complessità o brevità, mentre l'aumento per affari complessi, di lunga durata, di particolare rilevanza o che richiedono competenze specialistiche.",
    fonti: [
      { label: "Art. 19 D.M. 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art19" },
    ],
  },
  {
    categoria: "Aumenti e Riduzioni",
    domanda: "L'aumento del +80% è ancora applicabile?",
    risposta:
      "No, non più. Il D.M. 147/2022 ha uniformato il margine di variazione a ±50% del parametro medio per tutte le tipologie di attività, eliminando il precedente aumento fino all'80% (e fino al 100% per la fase istruttoria). Attenzione: molte fonti online riportano ancora il vecchio range -50%/+80%; verificare sempre la data di aggiornamento. In sede di contenzioso, applicare il +80% post 23/10/2022 espone a riduzioni in liquidazione giudiziale.",
    fonti: [
      { label: "D.M. 147/2022 art. 4", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147" },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // Spese e Fattura
  // ──────────────────────────────────────────────────────────────
  {
    categoria: "Spese e Fattura",
    domanda: "Le spese generali del 15% sono sempre dovute?",
    risposta:
      "Sì. L'art. 2 del D.M. 55/2014 prevede che le spese generali forfettarie siano dovute nella misura fissa del 15% sul compenso, anche quando il compenso stesso è stato pattuito con il cliente in via convenzionale. Sono un'integrazione automatica del compenso a copertura forfettaria dei costi di studio non documentati. Erano state abolite dal D.M. 140/2012 e reintrodotte dal nuovo ordinamento forense (L. 247/2012).",
    fonti: [
      { label: "Art. 2 D.M. 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art2" },
    ],
  },
  {
    categoria: "Spese e Fattura",
    domanda: "Qual è la differenza tra spese imponibili ed esenti?",
    risposta:
      "Le spese imponibili (es. spese di trasferta art. 27, costi tecnici, perizie di parte) concorrono all'imponibile IVA e CPA. Le spese esenti (anticipazioni in nome e per conto del cliente: marche da bollo, diritti di copia, registrazioni, ecc.) sono esenti IVA ex art. 15 c. 1 n. 3 D.P.R. 633/1972 e non concorrono né al CPA né all'imponibile IVA. Devono essere documentate e analiticamente distinte in fattura.",
    fonti: [
      { label: "Art. 27 D.M. 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art27" },
      { label: "Art. 15 D.P.R. 633/1972", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633~art15" },
    ],
  },
  {
    categoria: "Spese e Fattura",
    domanda: "Come si calcola CPA, IVA e ritenuta d'acconto?",
    risposta:
      "Si procede nell'ordine: (1) Imponibile = Compenso + Spese generali 15% + Spese imponibili; (2) CPA 4% calcolato sull'imponibile; (3) Imponibile IVA = Imponibile + CPA; (4) IVA 22% sull'imponibile IVA; (5) Ritenuta d'acconto 20% sul Compenso + Spese imponibili (non su CPA, non su IVA, non su spese esenti); (6) Totale fattura = Imponibile IVA + IVA + Spese esenti; (7) Netto a pagare = Totale - Ritenuta.",
    fonti: [
      { label: "Art. 25 D.P.R. 600/1973", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600~art25" },
    ],
  },
  {
    categoria: "Spese e Fattura",
    domanda: "Quando si applica la ritenuta d'acconto del 20%?",
    risposta:
      "Si applica quando il cliente è un sostituto d'imposta (società di capitali, società di persone in regime ordinario, enti pubblici, condominii, altri professionisti, ecc.). Non si applica se il cliente è un privato consumatore. La ritenuta è calcolata sul compenso lordo + spese imponibili, mai sulle spese esenti né su CPA e IVA. Il sostituto trattiene il 20% e lo versa con codice tributo 1040.",
    fonti: [
      { label: "Art. 25 D.P.R. 600/1973", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600~art25" },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // Recuperabilità Spese
  // ──────────────────────────────────────────────────────────────
  {
    categoria: "Recuperabilità Spese",
    domanda: "Chi paga le spese legali nella fase stragiudiziale?",
    risposta:
      "In via diretta paga il cliente che ha conferito l'incarico all'avvocato. Tuttavia, le Sezioni Unite della Cassazione (sentenza n. 24481/2020) hanno chiarito che le spese legali sostenute in fase stragiudiziale possono essere recuperate dal soccombente come 'danno emergente' nel successivo giudizio civile, a condizione che siano provate documentalmente, necessarie e funzionali alla tutela del diritto. Il recupero non avviene automaticamente: va specificamente domandato e provato.",
    fonti: [
      { label: "Cass. SS.UU. 24481/2020", url: "https://www.cortedicassazione.it/cassazione-resources/resources/cms/documents/24481_11_2020.pdf" },
    ],
  },
  {
    categoria: "Recuperabilità Spese",
    domanda: "Si possono ottenere in giudizio le spese stragiudiziali pagate al proprio avvocato?",
    risposta:
      "Sì, ma a determinate condizioni. La Cassazione richiede che le spese siano: (a) documentate con fattura e quietanza; (b) necessarie ai fini della tutela del diritto; (c) ragionevoli e proporzionate, anche con riferimento ai parametri D.M. 55/2014. Non basta esibire la fattura: occorre dimostrare l'utilità concreta dell'attività stragiudiziale rispetto al giudizio. Le spese da semplice consulenza preventiva non sempre vengono riconosciute.",
    fonti: [
      { label: "Cass. SS.UU. 24481/2020", url: "https://www.cortedicassazione.it/" },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // Casi Particolari
  // ──────────────────────────────────────────────────────────────
  {
    categoria: "Casi Particolari",
    domanda: "Come si determina il valore di un affare di valore indeterminabile?",
    risposta:
      "L'art. 21 c. 7 del D.M. 55/2014 stabilisce che gli affari di valore indeterminabile si considerano di regola compresi tra € 26.000 e € 260.000, tenuto conto dell'oggetto e della complessità. Per gli affari di particolare importanza (per oggetto, complessità delle questioni giuridiche, rilevanza dei risultati), il valore di riferimento sale fino a € 520.000. La scelta dello scaglione esatto richiede una valutazione motivata caso per caso.",
    fonti: [
      { label: "Art. 21 D.M. 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art21" },
      { label: "Cass. SS.UU. 19427/2018", url: "https://www.cortedicassazione.it/" },
    ],
  },
  {
    categoria: "Casi Particolari",
    domanda: "Qual è il compenso per la procedura di mediazione?",
    risposta:
      "L'art. 20 c. 1-bis del D.M. 55/2014 prevede una tabella specifica per la mediazione, con parametri commisurati alle fasi della procedura (attivazione, mediazione, eventuale post-accordo). In caso di conclusione positiva con accordo, il compenso è aumentato del 30%. Nei casi di patrocinio a spese dello Stato si applica il D.M. Giustizia 1 agosto 2023, che prevede una riduzione del 50% rispetto ai parametri ordinari.",
    fonti: [
      { label: "D.Lgs. 28/2010 (Mediazione)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-03-04;28" },
    ],
  },
  {
    categoria: "Casi Particolari",
    domanda: "Quanto costa l'avvocato per una transazione stragiudiziale?",
    risposta:
      "Il compenso è determinato sulla base del valore oggetto della transazione, applicando i parametri della Tabella 25. Per una transazione di € 100.000 il parametro medio è € 4.536, ma è frequente applicare aumenti significativi (fino al 50%) per la complessità della negoziazione. In caso di accordo, alcuni avvocati pattuiscono compensi a successo (palmario) entro i limiti dell'art. 13 c. 3 L. 247/2012.",
    fonti: [
      { label: "Art. 13 L. 247/2012", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247" },
    ],
  },
  {
    categoria: "Casi Particolari",
    domanda: "Si può pattuire un compenso percentuale sul valore della controversia?",
    risposta:
      "Sì, ma con limiti. L'art. 13 c. 4 della L. 247/2012 vieta il patto di quota lite puro (compenso esclusivamente proporzionale al risultato in beni in natura), ma consente la pattuizione di un compenso percentuale entro limiti di adeguatezza e proporzionalità. Per i beni amministrati, l'art. 19 del D.M. 55/2014 fissa un tetto del 5% del valore. La forma scritta è obbligatoria.",
    fonti: [
      { label: "Art. 13 L. 247/2012", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247" },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // Confronto e Distinzioni
  // ──────────────────────────────────────────────────────────────
  {
    categoria: "Confronto e Distinzioni",
    domanda: "Qual è la differenza tra compenso stragiudiziale e compenso giudiziale?",
    risposta:
      "Il compenso giudiziale è riferito all'attività processuale e si calcola sulla base delle tabelle 1-24 del D.M. 55/2014 articolate per fasi processuali (studio, introduttiva, istruttoria, decisionale). Il compenso stragiudiziale (Tabella 25) si riferisce ad attività svolte fuori dal processo (consulenze, pareri, transazioni, redazione contratti). Quando un'attività stragiudiziale sfocia in giudizio, le due fasi vanno fatturate separatamente con tabelle distinte.",
    fonti: [
      { label: "D.M. 55/2014 (Normattiva)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Confronto e Distinzioni",
    domanda: "Il preventivo scritto è obbligatorio per l'avvocato?",
    risposta:
      "Sì. La L. 124/2017 (art. 1 c. 150) ha modificato l'art. 13 c. 5 della L. 247/2012 rendendo obbligatorio il preventivo scritto sin dal momento del conferimento dell'incarico. Il preventivo deve indicare gli oneri ipotizzabili dal conferimento alla conclusione dell'incarico. La mancata consegna non priva l'avvocato del compenso (sempre dovuto secondo i parametri in mancanza di accordo scritto), ma costituisce illecito disciplinare e priva il professionista di un titolo contrattuale opponibile al cliente.",
    fonti: [
      { label: "L. 124/2017 art. 1 c. 150", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-08-04;124" },
    ],
  },
];
