import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // ─── CALCOLO (5 items) ─────────────────────────────────────
  {
    categoria: "Calcolo",
    domanda: "Come si calcola il danno biologico?",
    risposta:
      "Il calcolo del danno biologico dipende dalla percentuale di invalidità permanente accertata dal medico legale. Per le micropermanenti (1-9%) si applica la formula dell'art. 139 del Codice delle Assicurazioni Private: punto base (€ 963,40 nel 2026) moltiplicato per il coefficiente più che proporzionale e per il demoltiplicatore in base all'età. Per le macropermanenti (10-100%) si utilizza la Tabella Unica Nazionale (punto base € 947,30) o le Tabelle di Milano (punto base € 1.741,60). In entrambi i casi, al danno permanente si somma l'invalidità temporanea e l'eventuale personalizzazione.",
    fonti: [
      {
        label: "Art. 139 D.Lgs. 209/2005",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Qual è la formula per le micropermanenti (1-9 punti)?",
    risposta:
      "La formula delle micropermanenti è: Danno permanente = Punto base × Coefficiente moltiplicatore × Punti di invalidità × Demoltiplicatore per età. Il punto base 2026 è € 963,40, i coefficienti vanno da 1,0 (1 punto) a 2,3 (9 punti) e il demoltiplicatore riduce l'importo dello 0,5% per ogni anno di età a partire dall'undicesimo. Al risultato si somma l'invalidità temporanea totale (ITT a € 56,18/giorno) e parziale (ITP proporzionale), più un'eventuale personalizzazione fino al 20%.",
    fonti: [
      {
        label: "Art. 139 D.Lgs. 209/2005",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Quanti soldi sono 5 punti di invalidità?",
    risposta:
      "Con 5 punti di invalidità permanente (micropermanente), applicando il punto base 2026 di € 963,40, il coefficiente moltiplicatore di 1,5 e un demoltiplicatore per un soggetto di 35 anni (0,875), il danno biologico permanente è di circa € 6.322. Aggiungendo l'invalidità temporanea (ad esempio 45 giorni di ITT a € 56,18 = € 2.528,10) e una personalizzazione del 10%, si raggiunge un importo complessivo indicativo di circa € 9.735. L'importo effettivo varia sempre in base all'età e ai giorni di inabilità.",
    fonti: [
      {
        label: "Art. 139 D.Lgs. 209/2005",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Come funziona il demoltiplicatore per età?",
    risposta:
      "Il demoltiplicatore per età è un meccanismo previsto dall'art. 139 del Codice delle Assicurazioni che riduce il risarcimento in funzione dell'età del danneggiato. La riduzione è pari allo 0,5% per ogni anno di età a partire dall'undicesimo anno. Ad esempio, un soggetto di 30 anni ha un demoltiplicatore di 0,90 (riduzione del 10%), mentre un soggetto di 50 anni ha un demoltiplicatore di 0,80 (riduzione del 20%). La ratio è che la menomazione incide per un periodo residuo di vita più breve nei soggetti più anziani.",
    fonti: [
      {
        label: "Art. 139 D.Lgs. 209/2005",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Quali strumenti esistono per calcolare il danno biologico?",
    risposta:
      "Il calcolo del danno biologico può essere effettuato con calcolatori online che implementano le formule di legge e le tabelle giurisprudenziali. I parametri necessari sono: la percentuale di invalidità permanente, l'età del danneggiato, i giorni di inabilità temporanea totale e parziale, e la percentuale di personalizzazione. È fondamentale selezionare la tabella corretta in base al tipo di danno: art. 139 CdA per le micropermanenti, Tabelle di Milano o TUN per le macropermanenti. Il risultato fornisce un orientamento, ma la liquidazione definitiva spetta al giudice.",
    fonti: [
      {
        label: "Tabelle Milano 2024",
        url: "https://tribunale-milano.giustizia.it/cmsresources/cms/documents/P._7646_24.pdf",
      },
    ],
  },

  // ─── NORMATIVA (4 items) ───────────────────────────────────
  {
    categoria: "Normativa",
    domanda: "Quali sono le norme che regolano il danno biologico?",
    risposta:
      "Il danno biologico è disciplinato da un quadro normativo articolato. L'art. 2059 c.c. prevede il risarcimento del danno non patrimoniale nei casi determinati dalla legge. Gli artt. 138 e 139 del D.Lgs. 209/2005 (Codice delle Assicurazioni Private) regolano rispettivamente le macropermanenti e le micropermanenti per sinistri stradali e responsabilità medica. Il D.P.R. 12/2025 ha introdotto la Tabella Unica Nazionale per le macropermanenti. Il D.Lgs. 38/2000 disciplina il danno biologico in ambito INAIL. La Legge Gelli-Bianco (L. 24/2017) estende l'applicazione delle tabelle del CdA alla responsabilità sanitaria.",
    fonti: [
      {
        label: "Art. 2059 c.c.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059",
      },
      {
        label: "D.Lgs. 209/2005",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209",
      },
    ],
  },
  {
    categoria: "Normativa",
    domanda: "Cos'è la Tabella Unica Nazionale (TUN) 2025?",
    risposta:
      "La Tabella Unica Nazionale è stata introdotta dal D.P.R. 13 gennaio 2025, n. 12, in attuazione dell'art. 138 del Codice delle Assicurazioni Private. È in vigore dal 5 marzo 2025 e ha carattere normativo vincolante per le macropermanenti (invalidità dal 10% al 100%) derivanti da sinistri stradali e responsabilità sanitaria. Il valore base del punto è € 947,30, l'ITT giornaliero è € 39,37 e la personalizzazione massima è del 30%. Rappresenta il primo tentativo legislativo di uniformare la liquidazione del danno biologico su tutto il territorio nazionale.",
    fonti: [
      {
        label: "D.P.R. 12/2025",
        url: "https://www.gazzettaufficiale.it/eli/id/2025/02/18/25G00019/SG",
      },
    ],
  },
  {
    categoria: "Normativa",
    domanda: "L'art. 139 del Codice delle Assicurazioni cosa prevede?",
    risposta:
      "L'art. 139 del D.Lgs. 209/2005 disciplina il risarcimento del danno biologico per lesioni di lieve entità (micropermanenti, 1-9% di invalidità). Stabilisce che il risarcimento è calcolato con un punto base aggiornato annualmente dal MEF in base alla variazione ISTAT, moltiplicato per coefficienti più che proporzionali all'aumento dei punti di invalidità. Prevede inoltre un importo giornaliero per l'inabilità temporanea e una possibilità di personalizzazione equitativa fino al 20%. Per il 2026 il punto base è € 963,40 e l'ITT giornaliero è € 56,18.",
    fonti: [
      {
        label: "Art. 139 D.Lgs. 209/2005",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209",
      },
    ],
  },
  {
    categoria: "Normativa",
    domanda: "Qual è la differenza tra Tabelle Milano e TUN?",
    risposta:
      "Le differenze principali sono quattro. Natura giuridica: Milano è giurisprudenziale (para-normativa per Cass. 12408/2011), la TUN è normativa vincolante. Valori: Milano prevede un punto totale di € 1.741,60, la TUN di € 947,30. Personalizzazione: Milano fino al 50%, TUN fino al 30%. Ambito di applicazione: la TUN si applica obbligatoriamente a sinistri stradali e responsabilità medica per le macropermanenti; Milano resta il riferimento prevalente per tutti gli altri illeciti civili (infortuni sul lavoro, cadute, ecc.).",
    fonti: [
      {
        label: "Tabelle Milano 2024",
        url: "https://tribunale-milano.giustizia.it/cmsresources/cms/documents/P._7646_24.pdf",
      },
      {
        label: "D.P.R. 12/2025",
        url: "https://www.gazzettaufficiale.it/eli/id/2025/02/18/25G00019/SG",
      },
    ],
  },

  // ─── TIPOLOGIE (4 items) ───────────────────────────────────
  {
    categoria: "Tipologie",
    domanda: "Qual è la differenza tra micropermanenti e macropermanenti?",
    risposta:
      "Le micropermanenti sono lesioni con invalidità permanente compresa tra l'1% e il 9%, disciplinate dall'art. 139 del Codice delle Assicurazioni con una formula tabellare specifica e personalizzazione massima del 20%. Le macropermanenti comportano un'invalidità dal 10% al 100% e sono liquidate secondo la Tabella Unica Nazionale (D.P.R. 12/2025) per sinistri stradali e responsabilità medica, oppure secondo le Tabelle di Milano per gli altri illeciti. I valori del punto e le possibilità di personalizzazione differiscono significativamente tra i due sistemi.",
    fonti: [
      {
        label: "Artt. 138-139 D.Lgs. 209/2005",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209",
      },
    ],
  },
  {
    categoria: "Tipologie",
    domanda: "Cos'è l'invalidità temporanea e come si distingue dalla permanente?",
    risposta:
      "L'invalidità temporanea è il periodo durante il quale il danneggiato subisce una limitazione funzionale destinata a risolversi nel tempo. Si distingue in: inabilità temporanea totale (ITT), quando il soggetto non può svolgere alcuna attività, e inabilità temporanea parziale (ITP), quando può svolgere solo parzialmente le proprie attività. L'invalidità permanente, invece, è la menomazione residua che persiste dopo la stabilizzazione clinica. Entrambe le componenti concorrono a formare il risarcimento complessivo del danno biologico.",
    fonti: [
      {
        label: "Art. 139 D.Lgs. 209/2005",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209",
      },
    ],
  },
  {
    categoria: "Tipologie",
    domanda: "Qual è il rapporto tra danno biologico e danno morale?",
    risposta:
      "Dopo le sentenze gemelle delle Sezioni Unite del 2008 (Cass. 26972-26975/2008), il danno non patrimoniale è una categoria unitaria. Il danno biologico è la lesione dell'integrità psicofisica accertabile con CTU medico-legale, mentre il danno morale è la sofferenza interiore soggettiva. Non sono voci autonome ma aspetti descrittivi dello stesso pregiudizio. Nelle Tabelle di Milano il danno morale è incluso come incremento per sofferenza (€ 348,32 per punto), nella TUN è compreso nel valore base del punto. La personalizzazione consente di adeguare il risarcimento alla specificità della sofferenza morale.",
    fonti: [
      {
        label: "Cass. SS.UU. 26972/2008",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059",
      },
    ],
  },
  {
    categoria: "Tipologie",
    domanda: "Cos'è il danno biologico psichico?",
    risposta:
      "Il danno biologico psichico è la lesione dell'integrità psicologica del soggetto, accertata mediante perizia medico-legale e psichiatrica. Comprende disturbi come il disturbo post-traumatico da stress (DPTS), depressione reattiva, disturbi d'ansia e altre patologie psichiche causalmente collegabili all'evento lesivo. Viene quantificato in punti di invalidità permanente secondo le tabelle medico-legali e risarcito con gli stessi criteri del danno biologico fisico. La sua prova richiede una CTU psichiatrica che ne attesti la natura, l'entità e il nesso causale con l'evento.",
    fonti: [
      {
        label: "Art. 138 D.Lgs. 209/2005",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209",
      },
    ],
  },

  // ─── PROCEDURA (4 items) ───────────────────────────────────
  {
    categoria: "Procedura",
    domanda: "Come si ottiene il risarcimento del danno biologico?",
    risposta:
      "Per ottenere il risarcimento del danno biologico occorre seguire un percorso articolato. Dopo l'evento lesivo, bisogna raccogliere tutta la documentazione medica (referti, cartelle cliniche, certificati). Si procede quindi con una perizia medico-legale che quantifica la percentuale di invalidità permanente e i giorni di invalidità temporanea. Si avvia poi la fase stragiudiziale con la richiesta risarcitoria al responsabile o alla sua assicurazione. In caso di mancato accordo, si può ricorrere alla negoziazione assistita o alla mediazione, e infine al giudizio civile ordinario.",
    fonti: [
      {
        label: "Art. 148 D.Lgs. 209/2005",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209",
      },
    ],
  },
  {
    categoria: "Procedura",
    domanda: "Quali sono i tempi per ottenere il risarcimento?",
    risposta:
      "I tempi variano significativamente. Per i sinistri stradali, l'art. 148 del CdA prevede che l'assicurazione formuli un'offerta entro 60 giorni dalla richiesta (90 giorni se ci sono lesioni personali). La fase stragiudiziale può durare da 3 a 12 mesi. Se si va in giudizio, i tempi dipendono dal tribunale competente e dalla complessità della causa, con una media di 2-4 anni in primo grado. La prescrizione ordinaria per il risarcimento del danno biologico è di 5 anni dal fatto illecito (2 anni per i sinistri stradali).",
    fonti: [
      {
        label: "Art. 148 D.Lgs. 209/2005",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209",
      },
      {
        label: "Art. 2947 c.c.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2947",
      },
    ],
  },
  {
    categoria: "Procedura",
    domanda: "Cos'è la CTU medico-legale e quando è necessaria?",
    risposta:
      "La Consulenza Tecnica d'Ufficio (CTU) medico-legale è la perizia disposta dal giudice per accertare l'entità del danno biologico. Il consulente nominato (medico legale) visita il danneggiato, esamina la documentazione clinica e quantifica la percentuale di invalidità permanente e i giorni di invalidità temporanea. La CTU è necessaria in ogni causa risarcitoria in cui sia contestata l'entità del danno biologico. In fase stragiudiziale, il danneggiato può avvalersi di una CTP (Consulenza Tecnica di Parte) per supportare la propria richiesta.",
    fonti: [
      {
        label: "Art. 61 c.p.c.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art61",
      },
    ],
  },
  {
    categoria: "Procedura",
    domanda: "Cos'è la personalizzazione del danno e come si ottiene?",
    risposta:
      "La personalizzazione è l'aumento del risarcimento tabellare che il giudice può disporre per adeguare la liquidazione alle circostanze specifiche del caso concreto. I limiti massimi sono: 20% per le micropermanenti (art. 139 CdA), 30% per la TUN 2025, 50% per le Tabelle di Milano. Per ottenere la personalizzazione occorre allegare e provare circostanze particolari, come l'incidenza della menomazione sull'attività lavorativa, la compromissione di attività sportive o ludiche, l'età del danneggiato e l'impatto sulla vita di relazione.",
    fonti: [
      {
        label: "Art. 139 D.Lgs. 209/2005",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209",
      },
    ],
  },

  // ─── CASI PARTICOLARI (3 items) ────────────────────────────
  {
    categoria: "Casi Particolari",
    domanda: "Come funziona il danno biologico INAIL per infortunio sul lavoro?",
    risposta:
      "Il sistema INAIL (D.Lgs. 38/2000) prevede tre fasce di indennizzo per il danno biologico da infortunio sul lavoro o malattia professionale. Per invalidità inferiore al 6% si applica una franchigia e non è previsto alcun indennizzo. Tra il 6% e il 15% viene erogato un indennizzo in capitale (somma una tantum) calcolato secondo la Tabella delle menomazioni. Dal 16% in poi si ha diritto a una rendita vitalizia composta da una quota per il danno biologico e una quota per le conseguenze patrimoniali. Il lavoratore può comunque chiedere al datore il risarcimento del danno differenziale ai sensi degli artt. 2059 e 2087 c.c.",
    fonti: [
      {
        label: "D.Lgs. 38/2000",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38",
      },
      {
        label: "Art. 2087 c.c.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2087",
      },
    ],
  },
  {
    categoria: "Casi Particolari",
    domanda: "Come si calcola il danno biologico da incidente stradale?",
    risposta:
      "Per gli incidenti stradali, il danno biologico è disciplinato dal Codice delle Assicurazioni Private (D.Lgs. 209/2005). Se l'invalidità permanente è compresa tra l'1% e il 9% si applica l'art. 139 con la formula delle micropermanenti (punto base 2026: € 963,40). Se l'invalidità è pari o superiore al 10% si applica la Tabella Unica Nazionale (D.P.R. 12/2025, punto base € 947,30) in vigore dal 5 marzo 2025. La procedura risarcitoria segue l'azione diretta contro l'assicurazione (art. 149 CdA per l'indennizzo diretto o art. 144 CdA per l'azione ordinaria).",
    fonti: [
      {
        label: "Artt. 138-139 D.Lgs. 209/2005",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209",
      },
      {
        label: "D.P.R. 12/2025",
        url: "https://www.gazzettaufficiale.it/eli/id/2025/02/18/25G00019/SG",
      },
    ],
  },
  {
    categoria: "Casi Particolari",
    domanda: "Il danno biologico da responsabilità medica come si risarcisce?",
    risposta:
      "Il danno biologico da responsabilità medica (malasanità) segue le regole della Legge Gelli-Bianco (L. 24/2017), che all'art. 7, comma 4, prevede l'applicazione delle tabelle del Codice delle Assicurazioni. Per le micropermanenti (1-9%) si applica l'art. 139 CdA, per le macropermanenti (10-100%) si applica la TUN (D.P.R. 12/2025). Prima di agire in giudizio è obbligatorio il tentativo di conciliazione (art. 8 L. 24/2017) tramite consulenza tecnica preventiva ex art. 696-bis c.p.c. o mediazione. La prescrizione è decennale per la responsabilità contrattuale della struttura sanitaria e quinquennale per quella extracontrattuale del medico.",
    fonti: [
      {
        label: "Art. 7 L. 24/2017",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-03-08;24",
      },
      {
        label: "D.P.R. 12/2025",
        url: "https://www.gazzettaufficiale.it/eli/id/2025/02/18/25G00019/SG",
      },
    ],
  },
];
