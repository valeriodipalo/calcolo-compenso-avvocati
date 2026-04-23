import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // ─── CALCOLO ───
  {
    categoria: "Calcolo",
    domanda: "Come si calcola lo scorporo dell'IVA al 22%?",
    risposta:
      "Si divide il totale lordo per 1,22. Esempio: 1.220 € lordi / 1,22 = 1.000 € di imponibile. L'IVA è la differenza fra lordo e imponibile: 1.220 − 1.000 = 220 €. Il divisore 1,22 deriva dalla somma di 1 (cioè 100% della base imponibile) più l'aliquota decimale 0,22. Questa è la formula più immediata ed è matematicamente equivalente alla proporzione 100 : 122 = imponibile : lordo.",
    fonti: [
      {
        label: "Art. 16 DPR 633/1972 (Normattiva)",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art16",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Qual è il divisore per lo scorporo IVA al 10%?",
    risposta:
      "Il divisore è 1,10. Per scorporare l'IVA al 10% si divide il totale lordo per 1,10. Esempio: 550 € / 1,10 = 500 € di imponibile, IVA pari a 50 €. L'aliquota del 10% si applica ai beni e servizi elencati nella Tabella A Parte III del DPR 633/1972 (energia elettrica domestica, trasporto persone, medicinali da banco, somministrazione alimenti, ristrutturazioni).",
    fonti: [
      {
        label: "Tabella A DPR 633/1972",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Come scorporare l'IVA al 4%?",
    risposta:
      "Si divide il totale lordo per 1,04. Esempio: 104 € lordi / 1,04 = 100 € di imponibile, IVA pari a 4 €. L'aliquota del 4% si applica ai beni di prima necessità elencati nella Tabella A Parte II del DPR 633/1972 (alimentari di base, libri e periodici cartacei, giornali, ausili per persone con disabilita).",
    fonti: [
      {
        label: "Tabella A Parte II DPR 633/1972",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Come scorporare l'IVA al 5%?",
    risposta:
      "Si divide il totale lordo per 1,05. Esempio: 105 € / 1,05 = 100 € di imponibile, IVA pari a 5 €. L'aliquota del 5% è stata introdotta strutturalmente dalla Legge di Bilancio 2021 (L. 178/2020, art. 1 c. 452-453) ed è elencata nella Tabella A Parte II-bis. Si applica a dispositivi medici, DPI sanitari, alcune prestazioni socio-sanitarie, assorbenti igienici, pannolini e taluni servizi di imprese sociali.",
    fonti: [
      {
        label: "L. 178/2020 (Normattiva)",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2020-12-30;178",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Qual è la formula generale dello scorporo IVA?",
    risposta:
      "La formula generale è: Imponibile = Lordo / (1 + Aliquota/100). L'IVA si ricava per differenza: IVA = Lordo − Imponibile. In alternativa, l'IVA può essere calcolata direttamente con: IVA = (Lordo × Aliquota) / (100 + Aliquota). Il metodo della proporzione è matematicamente equivalente: 100 : (100 + aliquota) = imponibile : lordo.",
    fonti: [
      {
        label: "Art. 21 DPR 633/1972",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art21",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Qual è il coefficiente di scorporo per l'IVA al 22%?",
    risposta:
      "Il coefficiente (o divisore) è 1,22. Si ottiene aggiungendo 1 (cioè 100% della base imponibile) all'aliquota decimale 0,22. Dividendo il totale lordo per 1,22 si ottiene direttamente l'imponibile, senza passaggi intermedi. Per le altre aliquote i coefficienti sono: 1,10 per il 10%, 1,05 per il 5% e 1,04 per il 4%.",
    fonti: [
      {
        label: "Art. 16 DPR 633/1972",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art16",
      },
    ],
  },

  // ─── ERRORI ───
  {
    categoria: "Errori",
    domanda: "Posso sottrarre il 22% direttamente dal totale lordo?",
    risposta:
      "No, è un errore comune. Sottrarre 1.000 − 22% = 780 € è sbagliato perché l'IVA si calcola sulla base imponibile netta, non sul lordo. Il corretto imponibile di 1.000 € lordi al 22% è 819,67 €, con IVA di 180,33 €. Il 22% viene applicato al netto (819,67 × 22% = 180,33), non al lordo. Questo errore si verifica spesso quando si pensa all'IVA come a un semplice 'sconto' da togliere.",
    fonti: [
      { label: "Art. 13 DPR 633/1972", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art13" },
    ],
  },
  {
    categoria: "Errori",
    domanda: "Devo dividere per 22 o per 1,22 per scorporare l'IVA al 22%?",
    risposta:
      "Si divide per 1,22, mai per 22. Dividere per 22 dà un risultato errato e privo di senso fiscale (1.220 / 22 = 55,45 €). Il divisore corretto è sempre '1 più l'aliquota decimale': 1,22 per il 22%, 1,10 per il 10%, 1,05 per il 5%, 1,04 per il 4%. La confusione deriva dal voler applicare direttamente la percentuale come divisore, ma la matematica dell'IVA richiede il coefficiente moltiplicativo (1 + aliquota).",
    fonti: [
      { label: "Art. 16 DPR 633/1972", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art16" },
    ],
  },
  {
    categoria: "Errori",
    domanda: "Qual è la differenza tra scorporo e applicazione dell'IVA?",
    risposta:
      "Scorporo: si parte dal lordo (con IVA) e si ricava il netto, dividendo per (1 + aliquota). Applicazione (o 'aggiungere IVA'): si parte dal netto e si calcola il lordo, moltiplicando per (1 + aliquota). Sono operazioni inverse. Errore ricorrente: moltiplicare il lordo per 1,22 equivale a calcolare 'IVA su IVA' e produce un risultato errato. Lo scorporo serve per verificare fatture ricevute o emettere fatture da scontrini; l'applicazione serve per stabilire prezzi di vendita a partire dal costo netto.",
    fonti: [
      { label: "Art. 18 DPR 633/1972 (rivalsa)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art18" },
    ],
  },

  // ─── PRATICA ───
  {
    categoria: "Pratica",
    domanda: "Come scorporare l'IVA con una calcolatrice?",
    risposta:
      "Procedura passo-passo: (1) inserire il totale lordo; (2) premere il tasto di divisione (÷); (3) digitare il divisore dell'aliquota (1,22 per 22%; 1,10 per 10%; 1,05 per 5%; 1,04 per 4%); (4) premere '='. Il risultato è l'imponibile netto. Per ottenere l'IVA, sottrarre l'imponibile dal lordo. Esempio: 1.220 ÷ 1,22 = 1.000 → imponibile; 1.220 − 1.000 = 220 → IVA.",
    fonti: [],
  },
  {
    categoria: "Pratica",
    domanda: "Come scorporare l'IVA in Excel?",
    risposta:
      "Usare la formula =A1/1.22 per IVA al 22% (sostituire con 1.10 per 10%, 1.05 per 5%, 1.04 per 4%), dove A1 contiene il totale lordo. Per calcolare l'IVA: =A1-B1 dove B1 è la cella con l'imponibile. Formula generica con aliquota in C1 (espressa come numero, es. 22): =A1/(1+C1/100). Attenzione alla notazione: in Excel si usa il punto come separatore decimale (1.22), non la virgola (1,22) salvo impostazione regionale italiana.",
    fonti: [],
  },
  {
    categoria: "Pratica",
    domanda: "Come procedere con fattura multi-aliquota?",
    risposta:
      "Si scorpora riga per riga, applicando a ciascuna riga l'aliquota specifica della voce. Poi si sommano gli imponibili e le IVA calcolate separatamente. Esempio: fattura con 800 € al 22% + 200 € al 10% → riga 1: 800/1,22 = 655,74 imp + 144,26 IVA; riga 2: 200/1,10 = 181,82 imp + 18,18 IVA; totali: 837,56 imponibile + 162,44 IVA = 1.000 lordi. Questo schema è obbligatorio per la corretta ripartizione nei registri IVA e nella dichiarazione annuale.",
    fonti: [
      { label: "Art. 21 DPR 633/1972", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art21" },
    ],
  },
  {
    categoria: "Pratica",
    domanda: "Come gestire gli arrotondamenti in fattura (centesimi ballerini)?",
    risposta:
      "L'art. 21 DPR 633/1972 impone l'arrotondamento al centesimo di euro. Se il calcolo genera una frazione di centesimo, si arrotonda secondo la regola matematica (5 o superiore per eccesso). In caso di discrepanza di ±0,01 € fra (imponibile + IVA) e totale, si inserisce una riga di arrotondamento qualificata come non imponibile per quadrare il documento. Questo problema si presenta frequentemente in fatture multi-aliquota o con importi al di sotto dell'euro.",
    fonti: [
      { label: "Art. 21 DPR 633/1972", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art21" },
    ],
  },

  // ─── DOCUMENTI ───
  {
    categoria: "Documenti",
    domanda: "Cos'è una fattura di scorporo?",
    risposta:
      "In senso tecnico non esiste una 'fattura di scorporo' autonoma: si tratta di una normale fattura in cui, partendo da un totale pattuito al lordo (ad esempio il corrispettivo di uno scontrino), si scorpora l'IVA indicandola separatamente. L'art. 21 DPR 633/1972 impone sempre di esporre distintamente imponibile, aliquota e imposta. Il termine 'scorporo' indica quindi l'operazione di calcolo, non un tipo particolare di documento.",
    fonti: [
      { label: "Art. 21 DPR 633/1972", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art21" },
    ],
  },
  {
    categoria: "Documenti",
    domanda: "Come si scorpora l'IVA da uno scontrino elettronico?",
    risposta:
      "Lo scontrino elettronico (documento commerciale) non espone l'IVA separatamente, mostrando solo il totale ivato e l'aliquota applicata. Se il cliente richiede fattura, il commerciante scorpora l'IVA dal totale dello scontrino applicando il divisore corrispondente all'aliquota del bene/servizio venduto. Il documento così composto (TD01 in formato XML) indica imponibile, aliquota e imposta in modo separato, rispettando l'art. 21 DPR 633/1972.",
    fonti: [
      { label: "Agenzia delle Entrate - Documento commerciale", url: "https://www.agenziaentrate.gov.it" },
    ],
  },

  // ─── CASI PARTICOLARI ───
  {
    categoria: "Casi particolari",
    domanda: "Lo scorporo IVA si applica in regime forfettario?",
    risposta:
      "No. I contribuenti in regime forfettario (art. 1 c. 54-89 L. 190/2014) non sono soggetti IVA: non la addebitano in fattura né la detraggono sugli acquisti. Per loro lo scorporo IVA non si applica. Se un forfettario riceve una fattura da un fornitore IVA ordinario, registrerà il costo al lordo come intera spesa deducibile forfettariamente (coefficiente di redditività). Dal 2024 anche i forfettari emettono fatture elettroniche, ma con codice natura N2.2 (operazione non soggetta).",
    fonti: [
      { label: "L. 190/2014 art. 1 c. 54-89", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190" },
    ],
  },
  {
    categoria: "Casi particolari",
    domanda: "Cos'è lo split payment e come influisce sullo scorporo IVA?",
    risposta:
      "Lo split payment (art. 17-ter DPR 633/1972) si applica alle fatture alla Pubblica Amministrazione: il fornitore espone regolarmente l'IVA in fattura, ma l'ente pubblico paga al fornitore solo l'imponibile e versa l'IVA direttamente all'Erario. Lo scorporo tecnico resta identico a quello ordinario; cambia solo il flusso finanziario. Importante: gli avvocati e gli altri professionisti soggetti a ritenuta d'acconto sono esclusi dallo split payment (DL 50/2017) e fatturano con le modalità ordinarie.",
    fonti: [
      { label: "Art. 17-ter DPR 633/1972", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art17ter" },
    ],
  },
  {
    categoria: "Casi particolari",
    domanda: "Come funziona lo scorporo IVA nel reverse charge?",
    risposta:
      "Nel reverse charge (inversione contabile, art. 17 c. 5-7 DPR 633/1972) il cedente emette la fattura SENZA IVA, indicando l'annotazione 'inversione contabile'. L'acquirente integra la fattura calcolando autonomamente l'IVA applicabile secondo l'aliquota italiana e la registra sia fra le fatture emesse (attive, ai fini del versamento) sia fra quelle ricevute (passive, ai fini della detrazione). Lo scorporo classico non si applica perché in origine la fattura non contiene IVA da scorporare; si tratta di 'applicazione' dell'IVA da parte dell'acquirente.",
    fonti: [
      { label: "Art. 17 DPR 633/1972", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art17" },
    ],
  },

  // ─── AVVOCATI ───
  {
    categoria: "Avvocati",
    domanda: "Come si scorpora l'IVA da una parcella avvocato?",
    risposta:
      "La parcella include Compenso + Spese Generali 15% + CPA 4% + IVA 22% (e ritenuta 20% se ricorre). Per risalire al compenso netto da un totale ivato senza ritenuta: Compenso = Totale / 1,4518 (cioè 1,19 × 1,22). Con ritenuta già detratta dal netto a pagare: Compenso = Netto / 1,2218. Esempio: totale 2.440 € / 1,4518 = 1.680,67 € di compenso. Le spese generali 15% e la CPA 4% vanno aggiunte nell'ordine corretto prima di applicare l'IVA.",
    fonti: [
      { label: "DM 55/2014 (Parametri forensi)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
      { label: "L. 576/1980 art. 11 (CPA)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1980-09-20;576" },
    ],
  },
  {
    categoria: "Avvocati",
    domanda: "L'IVA si calcola anche sulla CPA 4% dell'avvocato?",
    risposta:
      "Si. Secondo l'art. 11 L. 576/1980, il contributo integrativo CPA concorre alla base imponibile IVA. Quindi l'IVA al 22% si applica sulla somma (Compenso + Spese Generali 15% + CPA 4%). La ritenuta d'acconto 20% (art. 25 DPR 600/1973) si applica invece solo su (Compenso + Spese Generali), mai su CPA né su IVA. Questo è un tratto peculiare del regime IVA dei professionisti iscritti a casse di previdenza private.",
    fonti: [
      { label: "L. 576/1980 art. 11", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1980-09-20;576" },
      { label: "Art. 25 DPR 600/1973", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1973-09-29;600~art25" },
    ],
  },

  // ─── STORIA ───
  {
    categoria: "Storia",
    domanda: "Quando l'aliquota IVA ordinaria è stata portata al 22%?",
    risposta:
      "Il 1° ottobre 2013 con la Legge di Stabilita 2013 (L. 228/2012, art. 40). Prima era al 21% dal 17 settembre 2011 (DL 138/2011). La storia completa dell'aliquota ordinaria: 12% (1973, introduzione IVA) → 14% (1977) → 15% (1980) → 18% (1982) → 19% (1988) → 20% (1997) → 21% (2011) → 22% (2013). Dal 2016 l'aliquota è stabile al 22%, con le clausole di salvaguardia (che avrebbero dovuto portarla al 25% nel 2018) definitivamente abrogate dalle leggi di bilancio successive.",
    fonti: [
      { label: "L. 228/2012", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-24;228" },
      { label: "DL 138/2011", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2011-08-13;138" },
    ],
  },
];
