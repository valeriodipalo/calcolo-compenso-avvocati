import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // ── Calcolo e Composizione ──
  {
    categoria: "Calcolo e Composizione",
    domanda: "Come si calcola la fattura di un avvocato?",
    risposta:
      "La fattura si calcola partendo dal compenso professionale, aggiungendo le spese forfettarie (15% del compenso, art. 2 DM 55/2014), il contributo integrativo Cassa Forense CPA (4% su compenso + forfettarie), l'IVA al 22% sull'imponibile e sottraendo la ritenuta d'acconto del 20% sul compenso e le spese forfettarie. Le spese anticipate (es. contributo unificato) vanno aggiunte fuori dall'imponibile IVA.",
    fonti: [
      { label: "DM 55/2014, art. 2", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
      { label: "DPR 633/72, art. 15", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633" },
    ],
  },
  {
    categoria: "Calcolo e Composizione",
    domanda: "Cosa significa il 15% nella fattura dell'avvocato?",
    risposta:
      "Il 15% indica le spese forfettarie (o rimborso spese generali) riconosciute all'avvocato dall'art. 2 del DM 55/2014. Si calcolano come il 15% del compenso totale e sono dovute automaticamente, senza obbligo di documentazione analitica. Coprono le spese generali di studio (affitto, utenze, segreteria, cancelleria).",
    fonti: [
      { label: "DM 55/2014, art. 2", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
      { label: "Cass. Civ. 28/2024", url: "https://ildiritto.it/professioni/spese-forfettarie-avvocato-mai-sotto-il-15/" },
    ],
  },
  {
    categoria: "Calcolo e Composizione",
    domanda: "Qual è la differenza tra compenso, onorario e parcella?",
    risposta:
      "Dopo l'abolizione delle tariffe forensi (DL 1/2012), non si parla più di «diritti e onorari» ma di compenso unico per la prestazione professionale, determinato secondo i parametri forensi del DM 55/2014. La parcella (o notula) è il documento che l'avvocato presenta al cliente con il dettaglio delle voci; la fattura è il documento fiscale obbligatorio per legge.",
    fonti: [
      { label: "DL 1/2012, art. 9", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2012-01-24;1" },
      { label: "DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Calcolo e Composizione",
    domanda: "Quanto è l'IVA sulla fattura dell'avvocato?",
    risposta:
      "L'IVA sulle prestazioni professionali dell'avvocato in regime ordinario è del 22%, come previsto dall'art. 16 del DPR 633/72. L'IVA si applica sulla somma di compenso, spese forfettarie 15%, CPA 4% e spese imponibili. Le spese anticipate in nome e per conto del cliente (es. contributo unificato, marche da bollo) sono escluse dalla base imponibile IVA ai sensi dell'art. 15 DPR 633/72.",
    fonti: [
      { label: "DPR 633/72, art. 16", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633" },
      { label: "DPR 633/72, art. 15", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633" },
    ],
  },
  {
    categoria: "Calcolo e Composizione",
    domanda: "Come si calcola la ritenuta d'acconto nella fattura dell'avvocato?",
    risposta:
      "La ritenuta d'acconto è pari al 20% e si calcola sulla somma del compenso professionale e delle spese forfettarie (15%), come disposto dall'art. 25 del DPR 600/73. Non si applica sulla CPA, sull'IVA, sulle spese anticipate né sulle spese imponibili. La ritenuta riduce l'importo che il cliente versa all'avvocato (netto a pagare) ma non il totale fattura.",
    fonti: [
      { label: "DPR 600/73, art. 25", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600" },
    ],
  },
  // ── Emissione e Procedura ──
  {
    categoria: "Emissione e Procedura",
    domanda: "Come deve emettere la fattura un avvocato?",
    risposta:
      "Dal 1° gennaio 2024, tutti gli avvocati (compresi i forfettari) devono emettere fattura elettronica in formato XML tramite il Sistema di Interscambio (SdI). La fattura deve contenere: dati dell'avvocato e del cliente, numero progressivo, data, descrizione della prestazione, compenso, spese forfettarie, CPA, IVA (se in ordinario), ritenuta d'acconto e spese anticipate.",
    fonti: [
      { label: "D.Lgs. 127/2015", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2015-08-05;127" },
    ],
  },
  {
    categoria: "Emissione e Procedura",
    domanda: "L'avvocato emette fattura o parcella?",
    risposta:
      "L'avvocato emette la fattura (documento fiscale obbligatorio) e, separatamente, può redigere la parcella o notula (documento descrittivo delle attività svolte con il dettaglio dei compensi per fase). La parcella non sostituisce la fattura ai fini fiscali. In pratica, molti avvocati incorporano il dettaglio della parcella direttamente nella fattura.",
    fonti: [
      { label: "Art. 21 DPR 633/72", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633" },
    ],
  },
  {
    categoria: "Emissione e Procedura",
    domanda: "La fattura dell'avvocato deve essere intestata al cliente o a chi paga?",
    risposta:
      "La fattura deve essere intestata al soggetto che ha ricevuto la prestazione professionale (il cliente/committente), non a chi materialmente effettua il pagamento. Se il pagamento è eseguito da un terzo, la fattura resta intestata al cliente e il pagamento del terzo non ha rilevanza ai fini della fatturazione.",
    fonti: [
      { label: "Art. 21 DPR 633/72", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633" },
    ],
  },
  {
    categoria: "Emissione e Procedura",
    domanda: "Come si gestisce la fattura di acconto e saldo dell'avvocato?",
    risposta:
      "Ogni volta che l'avvocato riceve un pagamento, anche in acconto, è tenuto a emettere fattura (art. 6 DPR 633/72). La fattura di acconto indica l'importo parziale ricevuto con le relative voci (CPA, IVA, ritenuta proporzionali). La fattura a saldo completa il compenso totale, detraendo gli acconti già fatturati.",
    fonti: [
      { label: "Art. 6 DPR 633/72", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633" },
    ],
  },
  // ── Regime Fiscale ──
  {
    categoria: "Regime Fiscale",
    domanda: "Come si calcola la fattura dell'avvocato in regime forfettario?",
    risposta:
      "In regime forfettario (L. 190/2014), la fattura non include IVA (operazione esclusa art. 1, comma 58) né ritenuta d'acconto (comma 67). Le voci sono: compenso + spese forfettarie 15% + CPA 4% + spese anticipate. Se il totale supera €77,47, si applica la marca da bollo di €2 (addebitabile al cliente). Il riferimento normativo va indicato in fattura.",
    fonti: [
      { label: "L. 190/2014, art. 1", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190" },
      { label: "DPR 642/72, art. 13", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;642" },
    ],
  },
  {
    categoria: "Regime Fiscale",
    domanda: "Qual è la differenza tra fattura in regime ordinario e forfettario?",
    risposta:
      "In regime ordinario la fattura include IVA al 22% e ritenuta d'acconto al 20%. In regime forfettario (L. 190/2014) non si applica né IVA né ritenuta; il contributo CPA 4% è comunque dovuto. Il forfettario deve apporre marca da bollo di €2 sulle fatture superiori a €77,47. Il compenso, le spese forfettarie 15% e la CPA 4% sono presenti in entrambi i regimi.",
    fonti: [
      { label: "L. 190/2014, commi 54-89", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190" },
    ],
  },
  {
    categoria: "Regime Fiscale",
    domanda: "L'avvocato forfettario deve addebitare la CPA al cliente?",
    risposta:
      "Sì, il contributo integrativo Cassa Forense (CPA) del 4% è dovuto anche dagli avvocati in regime forfettario. La CPA non è soggetta a IVA nel forfettario e si calcola sempre su compenso + spese forfettarie 15%. L'obbligo di versamento alla Cassa Forense è previsto dall'art. 11 della L. 247/2012, indipendentemente dal regime fiscale adottato.",
    fonti: [
      { label: "L. 247/2012, art. 11", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247" },
    ],
  },
  // ── Aspetti Specifici ──
  {
    categoria: "Aspetti Specifici",
    domanda: "Lo split payment si applica alla fattura dell'avvocato verso la PA?",
    risposta:
      "No. Dal 1° luglio 2017, il D.L. 50/2017 ha escluso dallo split payment tutti i professionisti i cui compensi sono assoggettati a ritenuta d'acconto (art. 25 DPR 600/73). Poiché i compensi degli avvocati sono soggetti a ritenuta del 20%, gli avvocati non applicano lo split payment nelle fatture verso la PA. L'IVA viene incassata normalmente e la PA trattiene solo la ritenuta.",
    fonti: [
      { label: "D.L. 50/2017, art. 1", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2017-04-24;50" },
      { label: "DPR 633/72, art. 17-ter", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633" },
    ],
  },
  {
    categoria: "Aspetti Specifici",
    domanda: "Quando si applica la marca da bollo sulla fattura dell'avvocato?",
    risposta:
      "La marca da bollo di €2 si applica sulle fatture esenti da IVA (regime forfettario) il cui importo supera €77,47, come previsto dal DPR 642/72. L'avvocato può addebitare il costo della marca al cliente. Per la fattura elettronica, il bollo è virtuale e si versa trimestralmente tramite il portale dell'Agenzia delle Entrate.",
    fonti: [
      { label: "DPR 642/72, art. 13", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;642" },
    ],
  },
  {
    categoria: "Aspetti Specifici",
    domanda: "Come si calcola la fattura inversa (scorporo) dell'avvocato?",
    risposta:
      "Il calcolo inverso permette di risalire dal totale fattura (o dal netto a pagare) al compenso base dell'avvocato. In regime ordinario, dal totale si sottraggo le spese anticipate, si divide per 1,22 (per togliere l'IVA), si sottraggono le spese imponibili, e si divide per il fattore (1 + 0,15) × (1 + 0,04) = 1,196 per ottenere il compenso netto.",
    fonti: [
      { label: "DPR 633/72", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633" },
    ],
  },
  {
    categoria: "Aspetti Specifici",
    domanda: "Quali spese vanno escluse dalla base imponibile IVA nella fattura dell'avvocato?",
    risposta:
      "Le spese anticipate in nome e per conto del cliente sono escluse dalla base imponibile IVA ai sensi dell'art. 15 del DPR 633/72. Tipiche spese anticipate: contributo unificato, marche da bollo, diritti di copia, spese di notifica, tassa di registro. Queste vanno indicate separatamente in fattura come «spese anticipate art. 15 DPR 633/72».",
    fonti: [
      { label: "DPR 633/72, art. 15", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633" },
    ],
  },
  {
    categoria: "Aspetti Specifici",
    domanda: "Chi paga l'IVA all'avvocato: il cliente o il soccombente?",
    risposta:
      "L'IVA è dovuta dal cliente che riceve la prestazione, come parte del compenso complessivo. Nelle cause con condanna alle spese, il soccombente rimborsa anche l'IVA al vincitore se quest'ultimo non può detrarla (soggetto privato). Se il vincitore è un soggetto IVA con diritto a detrazione, l'IVA non viene rimborsata dal soccombente.",
    fonti: [
      { label: "Cass. SS.UU. 5765/2006", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633" },
    ],
  },
  {
    categoria: "Emissione e Procedura",
    domanda: "Qual è la differenza tra fattura e fattura proforma dell'avvocato?",
    risposta:
      "La fattura proforma (o parcella proforma) è un documento non fiscale che l'avvocato invia al cliente prima dell'emissione della fattura vera e propria. Serve a comunicare gli importi dovuti senza generare obblighi IVA o di registrazione. Solo dopo il pagamento (o l'accordo del cliente), l'avvocato emette la fattura elettronica definitiva con valore fiscale. La fattura proforma ha le stesse voci della fattura finale (compenso, forfettarie, CPA, IVA, ritenuta) ma è priva di numero progressivo obbligatorio.",
    fonti: [
      { label: "Art. 6 DPR 633/72", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633" },
    ],
  },
  // ── Fattura Elettronica ──
  {
    categoria: "Fattura Elettronica",
    domanda: "L'avvocato è obbligato alla fattura elettronica?",
    risposta:
      "Sì, dal 1° gennaio 2024 l'obbligo di fatturazione elettronica si estende a tutti i soggetti IVA, compresi i forfettari (che dal 1° luglio 2022 erano già obbligati sopra i €25.000 di ricavi). La fattura va trasmessa in formato XML al SdI entro 12 giorni dalla data dell'operazione.",
    fonti: [
      { label: "D.Lgs. 127/2015", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2015-08-05;127" },
    ],
  },
  {
    categoria: "Fattura Elettronica",
    domanda: "Quale codice natura IVA usa l'avvocato forfettario in fattura elettronica?",
    risposta:
      "L'avvocato in regime forfettario utilizza il codice natura N2.2 (operazioni non soggette — altri casi) nella fattura elettronica, con la dicitura: «Operazione effettuata ai sensi dell'art. 1, commi 54-89, L. 190/2014 — regime forfettario». Le spese anticipate art. 15 vanno indicate con codice natura N1 (escluse art. 15).",
    fonti: [
      { label: "Provv. Agenzia Entrate 89757/2018", url: "https://www.agenziaentrate.gov.it" },
    ],
  },
  {
    categoria: "Fattura Elettronica",
    domanda: "Come si indica il bollo virtuale nella fattura elettronica dell'avvocato?",
    risposta:
      "Nella fattura elettronica, il bollo virtuale si indica compilando il blocco «DatiBollo» con «BolloVirtuale = SI» e «ImportoBollo = 2.00». L'importo può essere addebitato al cliente come voce separata in fattura. Il versamento cumulativo avviene trimestralmente tramite il portale Fatture e Corrispettivi dell'Agenzia delle Entrate.",
    fonti: [
      { label: "DM 17/06/2014", url: "https://www.agenziaentrate.gov.it" },
    ],
  },
  // ── Normativa ──
  {
    categoria: "Normativa",
    domanda: "Quale legge disciplina le spese forfettarie dell'avvocato al 15%?",
    risposta:
      "Le spese forfettarie sono disciplinate dall'art. 2, comma 2, del DM 10 marzo 2014, n. 55 (parametri forensi), che stabilisce: «Oltre al compenso e al rimborso delle spese documentate, all'avvocato è dovuta una somma per rimborso delle spese forfettarie pari al 15% del compenso totale». La Cassazione (ord. 28/2024) ha confermato che il 15% è misura fissa e inderogabile.",
    fonti: [
      { label: "DM 55/2014, art. 2", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
  {
    categoria: "Normativa",
    domanda: "Qual è il riferimento normativo per la CPA del 4%?",
    risposta:
      "Il contributo integrativo alla Cassa Nazionale di Previdenza e Assistenza Forense (CPA) è previsto dall'art. 11 della L. 31 dicembre 2012, n. 247 (Nuova disciplina dell'ordinamento della professione forense). L'aliquota del 4% è stabilita dal regolamento della Cassa Forense ed è obbligatoria per tutti gli iscritti all'Albo.",
    fonti: [
      { label: "L. 247/2012, art. 11", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247" },
    ],
  },
  {
    categoria: "Normativa",
    domanda: "L'avvocato è obbligato a fornire un preventivo scritto?",
    risposta:
      "Sì, l'art. 13, comma 5, della L. 247/2012 prevede che l'avvocato debba comunicare al cliente, al conferimento dell'incarico, «la prevedibile misura del costo della prestazione, distinguendo fra oneri, spese, anche forfettarie, e compenso professionale». L'art. 27 del Codice Deontologico Forense impone il preventivo in forma scritta su richiesta del cliente.",
    fonti: [
      { label: "L. 247/2012, art. 13", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247" },
    ],
  },
  {
    categoria: "Normativa",
    domanda: "Cosa succede se la parcella dell'avvocato sembra troppo alta?",
    risposta:
      "Se il cliente ritiene eccessivo il compenso, può chiedere al Consiglio dell'Ordine degli Avvocati competente di esprimere un parere di congruità (art. 29 L. 247/2012). Il parere verifica che gli importi rispettino i parametri forensi del DM 55/2014. In alternativa, il giudice può ridurre il compenso in sede di liquidazione giudiziale.",
    fonti: [
      { label: "L. 247/2012, art. 29", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247" },
      { label: "DM 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
    ],
  },
];
