import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORIA: Calcolo e Formula
  // ─────────────────────────────────────────────────────────────────────────
  {
    categoria: "Calcolo",
    domanda: "Come si calcola l'IRPEF nel 2026?",
    risposta:
      "L'IRPEF 2026 si calcola applicando al reddito complessivo (al netto degli oneri deducibili ex art. 10 TUIR) le tre aliquote per scaglioni previste dall'art. 11 TUIR: 23% fino a 28.000 €, 33% da 28.001 a 50.000 €, 43% oltre 50.000 €. L'aliquota maggiore si applica solo alla parte di reddito che eccede lo scaglione precedente — è il principio della tassazione progressiva. Per ottenere l'IRPEF netta si sottraggono dall'imposta lorda le detrazioni per tipologia di reddito (art. 13 TUIR), per carichi di famiglia (art. 12) e per oneri (artt. 15, 16, 16-bis, 16-ter). Vanno poi aggiunte le addizionali regionali e comunali.",
    fonti: [
      {
        label: "Art. 11 TUIR",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto:1986-12-22;917~art11",
      },
      {
        label: "Agenzia delle Entrate — Calcolo IRPEF",
        url: "https://www.agenziaentrate.gov.it/portale/imposta-sul-reddito-delle-persone-fisiche-irpef-/aliquote-e-calcolo-dell-irpef",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "L'aliquota del 33% si applica a tutto il mio stipendio se guadagno più di 28.000 €?",
    risposta:
      "No, è un errore molto comune. L'IRPEF è progressiva per scaglioni: l'aliquota del 33% si applica solo alla parte di reddito che eccede 28.000 €. Esempio: se guadagni 35.000 € all'anno, paghi il 23% sui primi 28.000 € (= 6.440 €) e il 33% solo sui restanti 7.000 € (= 2.310 €), per un totale di 8.750 € di IRPEF lorda. L'aliquota media risulta circa il 25%, non il 33%. Solo l'aliquota marginale (cioè quella applicata all'ultimo euro guadagnato) è il 33%.",
    fonti: [
      {
        label: "Art. 11 TUIR",
        url: "https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art11.html",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Quanto pago di IRPEF su un reddito di 14.000 euro?",
    risposta:
      "Su un reddito imponibile di 14.000 € l'IRPEF lorda è 14.000 × 23% = 3.220 €. Tuttavia, se sei un lavoratore dipendente, la detrazione base ex art. 13, c.1, lett. a) TUIR è 1.955 € (pari al massimo per redditi fino a 15.000 €), oltre alle eventuali altre detrazioni (familiari a carico, oneri detraibili al 19%). L'IRPEF netta sarà quindi significativamente inferiore. Per redditi sotto la no tax area (8.500 € per dipendenti e pensionati, 5.500 € per autonomi) l'imposta si azzera grazie alla compensazione integrale tra IRPEF lorda e detrazione base.",
    fonti: [
      {
        label: "Art. 13 TUIR — detrazioni per reddito",
        url: "https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art13.html",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Come si calcola l'IRPEF mensile in busta paga?",
    risposta:
      "Il sostituto d'imposta (datore di lavoro o ente erogatore della pensione, ex art. 23 DPR 600/1973) calcola l'IRPEF mensile ragguagliando gli scaglioni annui al periodo, cioè dividendoli per 12. Per il 2026: il primo scaglione mensile è fino a 2.333,33 €/mese al 23% (28.000/12); il secondo da 2.333,34 a 4.166,67 €/mese al 33% (50.000/12); il terzo oltre al 43%. Le detrazioni vengono applicate in proporzione ai giorni di lavoro nel mese. A fine anno (o alla cessazione del rapporto) il sostituto effettua il conguaglio sulla base del reddito complessivo effettivo.",
    fonti: [
      {
        label: "Art. 23 DPR 600/1973",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1973-09-29;600~art23",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Come si calcola l'IRPEF netta?",
    risposta:
      "L'IRPEF netta è l'imposta effettivamente dovuta dopo l'applicazione delle detrazioni. Si parte dal reddito complessivo, si sottraggono gli oneri deducibili (art. 10 TUIR) per ottenere il reddito imponibile, si calcola l'IRPEF lorda applicando le aliquote per scaglioni (art. 11), poi si sottraggono le detrazioni per tipo di reddito (art. 13), per familiari a carico (art. 12), per oneri al 19% (art. 15) e altre detrazioni eventualmente spettanti. Il risultato non può mai essere negativo (incapienza): se le detrazioni superano l'imposta lorda, la parte eccedente non è rimborsabile.",
    fonti: [
      {
        label: "Art. 11 c. 3 TUIR",
        url: "https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art11.html",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORIA: Aliquote 2026
  // ─────────────────────────────────────────────────────────────────────────
  {
    categoria: "Aliquote 2026",
    domanda: "Quali sono le aliquote IRPEF 2026?",
    risposta:
      "Dal 1° gennaio 2026, per effetto della Legge 30 dicembre 2025, n. 199 (Legge di Bilancio 2026), le aliquote IRPEF sono tre: 23% fino a 28.000 €; 33% da 28.001 a 50.000 €; 43% oltre 50.000 €. La novità rispetto al 2025 è la riduzione dell'aliquota del secondo scaglione dal 35% al 33%, modificata all'art. 11, comma 1, lett. b) del TUIR. Le aliquote del 23% e del 43% restano invariate.",
    fonti: [
      {
        label: "Legge 199/2025 (Bilancio 2026)",
        url: "https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2025-12-30&atto.codiceRedazionale=25G00212",
      },
      {
        label: "Agenzia Entrate — Aliquote IRPEF",
        url: "https://www.agenziaentrate.gov.it/portale/imposta-sul-reddito-delle-persone-fisiche-irpef-/aliquote-e-calcolo-dell-irpef",
      },
    ],
  },
  {
    categoria: "Aliquote 2026",
    domanda: "Quando entra in vigore l'aliquota IRPEF al 33%?",
    risposta:
      "L'aliquota del 33% per il secondo scaglione (redditi tra 28.001 e 50.000 €) si applica a partire dal 1° gennaio 2026, per il periodo d'imposta 2026. I primi effetti pratici si vedono nelle buste paga di gennaio 2026 e nelle dichiarazioni dei redditi presentate nel 2027 (modello 730/2027 e REDDITI PF 2027). Per il periodo d'imposta 2025 vale ancora l'aliquota del 35%.",
    fonti: [
      {
        label: "Legge 199/2025",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-12-30;199",
      },
    ],
  },
  {
    categoria: "Aliquote 2026",
    domanda: "Chi guadagna di più dalla riforma IRPEF 2026?",
    risposta:
      "Il beneficio massimo della riforma (440 € annui di risparmio sull'IRPEF lorda) spetta a chi ha un reddito imponibile compreso tra 50.000 e 200.000 €, perché lo scaglione intermedio viene sfruttato per intero (22.000 € × 2% = 440 €). Per redditi tra 28.000 e 50.000 € il risparmio è proporzionale: 0,02 × (reddito − 28.000). Sotto i 28.000 € non c'è alcun risparmio. Oltre i 200.000 € il beneficio viene sterilizzato dal nuovo comma 5-bis dell'art. 16-ter TUIR, che riduce di 440 € le detrazioni al 19% per oneri.",
    fonti: [
      {
        label: "Legge 199/2025 art. 1 c. 3-4",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-12-30;199",
      },
    ],
  },
  {
    categoria: "Aliquote 2026",
    domanda: "Quali erano le aliquote IRPEF nel 2024-2025?",
    risposta:
      "Nel 2024-2025 le aliquote IRPEF erano tre: 23% fino a 28.000 €; 35% da 28.001 a 50.000 €; 43% oltre 50.000 €. Il passaggio a tre scaglioni avvenne con il D.Lgs. 216/2023 (per il solo 2024) e fu reso strutturale dalla Legge 207/2024 (Legge di Bilancio 2025). Rispetto al 2022-2023 i primi due scaglioni (23% fino a 15.000 € e 25% da 15.001 a 28.000 €) furono accorpati in un unico scaglione al 23% fino a 28.000 €.",
    fonti: [
      {
        label: "D.Lgs. 216/2023",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2023-12-30;216",
      },
      {
        label: "Legge 207/2024 (Bilancio 2025)",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2024-12-30;207",
      },
    ],
  },
  {
    categoria: "Aliquote 2026",
    domanda: "Cosa cambia nell'IRPEF 2026 rispetto al 2025?",
    risposta:
      "Cambia solo l'aliquota del secondo scaglione, ridotta dal 35% al 33%. La struttura a tre scaglioni resta identica, così come l'aliquota del primo scaglione (23%) e del terzo (43%). Il risparmio massimo è di 440 € annui per i redditi superiori a 50.000 € (fino a 200.000 €, oltre cui il beneficio è sterilizzato). Tutte le detrazioni base ex art. 13 TUIR (lavoro dipendente, pensione, autonomo) e gli oneri detraibili restano invariati.",
    fonti: [
      {
        label: "Legge 199/2025",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-12-30;199",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORIA: Detrazioni e No Tax Area
  // ─────────────────────────────────────────────────────────────────────────
  {
    categoria: "Detrazioni e no tax area",
    domanda: "Cos'è la no tax area IRPEF nel 2026?",
    risposta:
      "La no tax area è la fascia di reddito entro cui l'IRPEF netta è zero, grazie all'effetto compensativo delle detrazioni di base ex art. 13 TUIR. Nel 2026: 8.500 € per lavoratori dipendenti e pensionati (parificati dal 2024 grazie al D.Lgs. 216/2023, che ha innalzato la detrazione lavoro dipendente da 1.880 a 1.955 €), 5.500 € per lavoratori autonomi. Non è un'esenzione normativa in senso tecnico, ma il risultato matematico dell'equilibrio tra aliquota del 23% e detrazione di base (es. 8.500 × 23% = 1.955 €, esattamente compensato dalla detrazione massima).",
    fonti: [
      {
        label: "Art. 13 TUIR",
        url: "https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art13.html",
      },
      {
        label: "D.Lgs. 216/2023",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2023-12-30;216",
      },
    ],
  },
  {
    categoria: "Detrazioni e no tax area",
    domanda: "A quanto ammonta la detrazione per lavoro dipendente 2026?",
    risposta:
      "Per il 2026, la detrazione lavoro dipendente ex art. 13, c.1 TUIR è: 1.955 € per reddito complessivo (RC) fino a 15.000 € (con minimo 690 € o 1.380 € per rapporti a tempo determinato); per 15.000 < RC ≤ 28.000 € la formula è 1.910 + 1.190 × (28.000 − RC)/13.000; per 28.000 < RC ≤ 50.000 € è 1.910 × (50.000 − RC)/22.000; oltre 50.000 € nessuna detrazione. È prevista una maggiorazione di 65 € per redditi tra 25.000 e 35.000 € (art. 13, c. 1.1).",
    fonti: [
      {
        label: "Art. 13 TUIR",
        url: "https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art13.html",
      },
    ],
  },
  {
    categoria: "Detrazioni e no tax area",
    domanda: "Quali sono le detrazioni per pensionati nel 2026?",
    risposta:
      "Le detrazioni per redditi di pensione (art. 13, c. 3 TUIR) per il 2026 sono: 1.955 € per pensione fino a 8.500 € (minimo 713 €, rapportata ai giorni); decrescenti linearmente da 1.955 a 700 € per redditi da 8.500 a 28.000 €; ulteriormente decrescenti da 700 € a zero per redditi da 28.000 a 50.000 €. Oltre 50.000 € non spetta alcuna detrazione. Dalla riforma 2024 (D.Lgs. 216/2023), pensionati e lavoratori dipendenti hanno la stessa no tax area di 8.500 €.",
    fonti: [
      {
        label: "Art. 13 c. 3 TUIR",
        url: "https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art13.html",
      },
    ],
  },
  {
    categoria: "Detrazioni e no tax area",
    domanda: "Cos'è il trattamento integrativo IRPEF e l'ulteriore detrazione?",
    risposta:
      "Sono misure aggiuntive per ridurre il cuneo fiscale sui redditi da lavoro dipendente, introdotte dalla Legge di Bilancio 2025 (L. 207/2024) e in vigore anche nel 2026. Il bonus aggiuntivo spetta ai dipendenti con RC fino a 20.000 €: 7,1% del reddito da lavoro se reddito ≤ 8.500 €; 5,3% tra 8.500 e 15.000 €; 4,8% tra 15.000 e 20.000 €. L'ulteriore detrazione spetta invece a chi ha RC tra 20.000 e 40.000 €: 1.000 € pieni fino a 32.000 €; decrescenti tra 32.000 e 40.000 € (1.000 × (40.000 − RC)/8.000); zero oltre.",
    fonti: [
      {
        label: "Legge 207/2024",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2024-12-30;207",
      },
    ],
  },
  {
    categoria: "Detrazioni e no tax area",
    domanda: "Qual è la differenza tra deduzione e detrazione?",
    risposta:
      "Le deduzioni (art. 10 TUIR) riducono il reddito imponibile prima del calcolo dell'imposta lorda. Esempi: contributi previdenziali obbligatori, deduzione per abitazione principale (rendita catastale), assegno al coniuge da separazione. Le detrazioni invece riducono direttamente l'imposta lorda. Esempi: spese sanitarie al 19% (art. 15 TUIR), detrazioni per familiari (art. 12), detrazioni per tipo di reddito (art. 13). Una deduzione di 1.000 € su un'aliquota del 33% genera 330 € di risparmio; una detrazione di 1.000 € genera 1.000 € di risparmio (purché ci sia capienza nell'imposta lorda).",
    fonti: [
      {
        label: "Art. 10 TUIR",
        url: "https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art10.html",
      },
      {
        label: "Artt. 12-16-bis TUIR",
        url: "https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art13.html",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORIA: Addizionali
  // ─────────────────────────────────────────────────────────────────────────
  {
    categoria: "Addizionali",
    domanda: "Come si calcolano le addizionali IRPEF regionali e comunali nel 2026?",
    risposta:
      "Le addizionali si applicano sulla stessa base imponibile dell'IRPEF statale. L'addizionale regionale (D.Lgs. 446/1997) ha aliquota base statale dello 0,9%, aumentabile dalle Regioni fino al 3,33% — varia molto: 1,23% in Lombardia, Veneto, Sicilia (aliquota unica), fino a 3,33% in Lazio o Piemonte (per regioni in disavanzo sanitario). L'addizionale comunale (D.Lgs. 360/1998) può arrivare fino allo 0,8% (1% per Roma Capitale) e i Comuni possono fissare soglie di esenzione per i redditi più bassi. Per il regime transitorio 2025-2028, le Regioni possono mantenere i vecchi 4 scaglioni o adottare i nuovi 3 o un'aliquota unica.",
    fonti: [
      {
        label: "D.Lgs. 446/1997",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-15;446",
      },
      {
        label: "D.Lgs. 360/1998",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-09-28;360",
      },
    ],
  },
  {
    categoria: "Addizionali",
    domanda: "Le addizionali IRPEF si pagano anche sotto la no tax area?",
    risposta:
      "In genere no. Sotto la no tax area (dove l'IRPEF netta è zero) non sono dovute le addizionali, perché manca la base imponibile effettivamente tassata. I Comuni possono inoltre stabilire soglie di esenzione specifiche per i redditi più bassi. Tuttavia la disciplina puntuale dipende dalla normativa regionale e comunale: è sempre opportuno verificare le delibere annuali di Regione e Comune di residenza al 1° gennaio dell'anno di riferimento.",
    fonti: [
      {
        label: "D.Lgs. 360/1998",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-09-28;360",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORIA: Versamenti e Sanzioni
  // ─────────────────────────────────────────────────────────────────────────
  {
    categoria: "Versamenti e sanzioni",
    domanda: "Quali sono le scadenze per pagare l'IRPEF 2026?",
    risposta:
      "Per il 2026: il saldo IRPEF e il primo acconto vanno versati entro il 30 giugno (oppure entro 30 giorni successivi con maggiorazione dello 0,40%). Il secondo acconto entro il 30 novembre, sempre in un'unica soluzione (non rateizzabile). Periodo di sospensione: 1-20 agosto (le scadenze in questo intervallo slittano al 20 agosto senza maggiorazioni). Il pagamento si effettua con il modello F24, utilizzando i codici tributo 4001 (saldo), 4033 (primo acconto) e 4034 (secondo acconto).",
    fonti: [
      {
        label: "Agenzia Entrate — Scadenze fiscali",
        url: "https://www.agenziaentrate.gov.it/portale/scadenzario",
      },
    ],
  },
  {
    categoria: "Versamenti e sanzioni",
    domanda: "Cosa succede se non pago l'IRPEF in tempo?",
    risposta:
      "Si applica la sanzione del 25% dell'imposta non versata (art. 13 D.Lgs. 471/1997 come modificato dal D.Lgs. 87/2024, applicabile alle violazioni dal 1° settembre 2024). Se il pagamento avviene entro 90 giorni la sanzione è ridotta al 12,5%. Per i primi 15 giorni di ritardo la sanzione è ulteriormente ridotta a 0,083% per ogni giorno (cosiddetto ravvedimento sprint). Si aggiungono gli interessi legali (1,60% annuo nel 2026). Utilizzando il ravvedimento operoso le sanzioni possono essere ulteriormente ridotte: 1,25% (entro 30 gg), 1,39% (entro 90 gg), 3,125% (entro 1 anno), 3,571% (entro 2 anni), 4,167% (oltre).",
    fonti: [
      {
        label: "D.Lgs. 471/1997",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;471",
      },
      {
        label: "D.Lgs. 87/2024 (riforma sanzioni)",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87",
      },
    ],
  },
  {
    categoria: "Versamenti e sanzioni",
    domanda: "Sono esonerato dalla dichiarazione dei redditi 2026?",
    risposta:
      "L'esonero spetta a chi rientra in soglie specifiche per tipologia di reddito: terreni e/o fabbricati fino a 500 €; lavoro dipendente o pensione fino a 8.000 € (con periodo di lavoro/pensione non inferiore a 365 giorni); redditi assimilati con detrazione non rapportata (es. lavoro occasionale) fino a 4.800 €; attività sportive dilettantistiche fino a 30.658,28 €. L'esonero non si applica se devi restituire il bonus IRPEF o se hai esercitato la rivalsa per assistenza fiscale. È sempre consigliabile presentare la dichiarazione se hai oneri detraibili (mediche, mutuo, ecc.) per recuperare l'IRPEF anche se esoneratomi sei.",
    fonti: [
      {
        label: "Agenzia Entrate — Esonero dichiarazione",
        url: "https://www.agenziaentrate.gov.it/portale/web/guest/dichiarazioni",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORIA: Concetti e storia
  // ─────────────────────────────────────────────────────────────────────────
  {
    categoria: "Concetti e storia",
    domanda: "Cosa si intende per aliquota media e aliquota marginale?",
    risposta:
      "L'aliquota media è il rapporto tra l'imposta dovuta e il reddito imponibile (es. su 35.000 € con IRPEF lorda 8.750 €: 8.750/35.000 = 25%). L'aliquota marginale è invece l'aliquota dello scaglione in cui ricade l'ultima porzione di reddito (per 35.000 € nel 2026 è il 33%). L'aliquota media è sempre inferiore alla marginale, perché gli scaglioni inferiori vengono tassati con aliquote più basse. Esiste anche l'aliquota marginale effettiva, più alta della legale, che tiene conto della riduzione delle detrazioni al crescere del reddito (un fenomeno particolarmente rilevante nelle fasce 15.000-28.000 € e 35.000-40.000 €).",
    fonti: [
      {
        label: "MEF — Riforma IRPEF",
        url: "https://www.mef.gov.it/inevidenza/Riforma-fiscale-le-novita-IRPEF/",
      },
    ],
  },
  {
    categoria: "Concetti e storia",
    domanda: "L'IRPEF e le tasse sono la stessa cosa?",
    risposta:
      "Non esattamente. L'IRPEF (Imposta sul Reddito delle Persone Fisiche) è una delle imposte dirette personali ed è l'imposta principale sul reddito delle persone fisiche in Italia, disciplinata dal TUIR (DPR 917/1986). Le tasse, in senso ampio, includono anche imposte indirette (IVA, registro, bollo), tributi locali (IMU, TARI), addizionali regionali/comunali e contributi previdenziali. L'IRPEF è l'espressione diretta del principio di progressività sancito dall'art. 53 Cost., che impone l'imposizione in base alla capacità contributiva.",
    fonti: [
      {
        label: "Art. 1 TUIR",
        url: "https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art1.html",
      },
    ],
  },
  {
    categoria: "Concetti e storia",
    domanda: "Cosa è cambiato nell'IRPEF dal 2022 ad oggi?",
    risposta:
      "L'IRPEF ha subito tre riforme negli ultimi anni. Nel 2022 (L. 234/2021): passaggio da 5 a 4 scaglioni con aliquote 23%/25%/35%/43%, e rimodulazione delle detrazioni art. 13 TUIR. Nel 2024 (D.Lgs. 216/2023): riduzione temporanea a 3 scaglioni (23%/35%/43%) con accorpamento dei primi due, e innalzamento della detrazione lavoro dipendente da 1.880 a 1.955 € (no tax area dipendenti a 8.500 €). Nel 2025 (L. 207/2024): stabilizzazione strutturale dei 3 scaglioni e introduzione del bonus aggiuntivo + ulteriore detrazione. Nel 2026 (L. 199/2025): riduzione del secondo scaglione dal 35% al 33%, con risparmio massimo di 440 € annui.",
    fonti: [
      {
        label: "Legge 234/2021",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2021-12-30;234",
      },
      {
        label: "D.Lgs. 216/2023",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2023-12-30;216",
      },
      {
        label: "Legge 199/2025",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-12-30;199",
      },
    ],
  },
];
