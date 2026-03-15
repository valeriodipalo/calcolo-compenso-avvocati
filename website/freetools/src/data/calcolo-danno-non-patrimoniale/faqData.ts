import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // --- DEFINIZIONE E TIPOLOGIE ---
  {
    categoria: "Definizione e Tipologie",
    domanda: "Cos'è il danno non patrimoniale?",
    risposta:
      "Il danno non patrimoniale è il pregiudizio che colpisce interessi non economici della persona, quali la salute, la dignità, la vita di relazione e gli affetti familiari. L'art. 2059 c.c. ne limita la risarcibilità ai casi previsti dalla legge. Le Sezioni Unite della Cassazione (sentenze nn. 26972-26975/2008) hanno chiarito che si tratta di una categoria unitaria comprensiva di danno biologico, morale ed esistenziale, risarcibile quando sia leso un diritto inviolabile della persona costituzionalmente garantito.",
    fonti: [
      { label: "Art. 2059 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059" },
      { label: "Cass. SS.UU. 26972/2008", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059" },
    ],
  },
  {
    categoria: "Definizione e Tipologie",
    domanda: "Qual è la differenza tra danno patrimoniale e danno non patrimoniale?",
    risposta:
      "Il danno patrimoniale riguarda la lesione di beni economicamente valutabili (danno emergente e lucro cessante, art. 1223 c.c.) e si risarcisce integralmente sulla base della perdita subita e del mancato guadagno. Il danno non patrimoniale, invece, colpisce beni immateriali della persona (salute, dignità, affetti) e viene liquidato in via equitativa con l'ausilio di tabelle (Milano, TUN) poiché non esiste un mercato di riferimento.",
    fonti: [
      { label: "Art. 2059 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059" },
      { label: "Art. 1223 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1223" },
    ],
  },
  {
    categoria: "Definizione e Tipologie",
    domanda: "Cosa comprende il danno non patrimoniale?",
    risposta:
      "Dopo le sentenze gemelle del 2008 (Cass. SS.UU. 26972-26975/2008), il danno non patrimoniale è una categoria unitaria che comprende: danno biologico (lesione dell'integrità psicofisica accertabile con CTU medico-legale), danno morale (sofferenza interiore soggettiva), danno esistenziale (alterazione delle abitudini di vita) e danno da perdita parentale (pregiudizio per la morte di un congiunto). Non si tratta di voci autonome ma di aspetti descrittivi del medesimo pregiudizio.",
    fonti: [
      { label: "Cass. SS.UU. 26972/2008", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059" },
    ],
  },
  {
    categoria: "Definizione e Tipologie",
    domanda: "Quando è risarcibile il danno non patrimoniale?",
    risposta:
      "Il danno non patrimoniale è risarcibile in tre ipotesi: (1) quando deriva da un reato (art. 185 c.p.); (2) quando una norma di legge ne prevede espressamente il risarcimento (es. artt. 138-139 D.Lgs. 209/2005 per sinistri stradali, art. 89 c.p.c. per responsabilità processuale aggravata); (3) quando il fatto illecito lede un diritto inviolabile della persona riconosciuto dalla Costituzione (interpretazione costituzionalmente orientata dell'art. 2059 c.c.).",
    fonti: [
      { label: "Art. 2059 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059" },
      { label: "Art. 185 c.p.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1930-10-19;1398~art185" },
    ],
  },
  // --- CALCOLO E TABELLE ---
  {
    categoria: "Calcolo e Tabelle",
    domanda: "Come si calcola il danno non patrimoniale?",
    risposta:
      "Il metodo di calcolo dipende dalla gravità della lesione. Per le micropermanenti (1-9% di invalidità) si applica la formula dell'art. 139 CdA con punto base aggiornato annualmente dal MEF. Per le macropermanenti (10-100%), dal 5 marzo 2025 si utilizza la Tabella Unica Nazionale (D.P.R. 12/2025) che ha carattere normativo vincolante; in alternativa, molti tribunali continuano a utilizzare le Tabelle di Milano come parametro equitativo. In tutti i casi la liquidazione è tabellare e può essere personalizzata dal giudice.",
    fonti: [
      { label: "Art. 139 D.Lgs. 209/2005", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" },
      { label: "D.P.R. 12/2025", url: "https://www.gazzettaufficiale.it/eli/id/2025/02/18/25G00019/SG" },
    ],
  },
  {
    categoria: "Calcolo e Tabelle",
    domanda: "Cosa sono le Tabelle di Milano?",
    risposta:
      "Le Tabelle di Milano sono criteri orientativi per la liquidazione del danno non patrimoniale elaborati dall'Osservatorio sulla Giustizia Civile del Tribunale di Milano. La Cassazione (sent. 12408/2011) le ha elevate a parametro para-normativo di riferimento per tutti i giudici di merito. L'edizione 2024 prevede un punto base di € 1.741,60 (biologico € 1.393,28 + sofferenza € 348,32), con personalizzazione fino al 50%. Restano applicabili quando il giudice le ritenga più congrue rispetto alla TUN.",
    fonti: [
      { label: "Tabelle Milano 2024", url: "https://tribunale-milano.giustizia.it/cmsresources/cms/documents/P._7646_24.pdf" },
    ],
  },
  {
    categoria: "Calcolo e Tabelle",
    domanda: "Cos'è la Tabella Unica Nazionale 2025?",
    risposta:
      "La Tabella Unica Nazionale (TUN) è stata introdotta dal D.P.R. 13 gennaio 2025, n. 12, in attuazione dell'art. 138 del Codice delle Assicurazioni Private (D.Lgs. 209/2005). È in vigore dal 5 marzo 2025 e ha carattere normativo vincolante per le macropermanenti (invalidità dal 10% al 100%). Il valore base del punto è € 947,30, l'ITT giornaliero è € 39,37 e la personalizzazione massima è del 30%.",
    fonti: [
      { label: "D.P.R. 12/2025", url: "https://www.gazzettaufficiale.it/eli/id/2025/02/18/25G00019/SG" },
    ],
  },
  {
    categoria: "Calcolo e Tabelle",
    domanda: "Qual è la differenza tra Tabelle Milano e TUN?",
    risposta:
      "Le differenze principali sono: (1) Natura: Milano è giurisprudenziale (para-normativa), TUN è normativa vincolante; (2) Valori: Milano prevede un punto base di € 1.741,60, TUN di € 947,30; (3) Personalizzazione: Milano fino al 50%, TUN fino al 30%; (4) Ambito: la TUN si applica obbligatoriamente alle macropermanenti da sinistri stradali e responsabilità medica; Milano resta il riferimento prevalente per tutti gli altri illeciti (lavoro, cadute, ecc.).",
    fonti: [
      { label: "Tabelle Milano 2024", url: "https://tribunale-milano.giustizia.it/cmsresources/cms/documents/P._7646_24.pdf" },
      { label: "D.P.R. 12/2025", url: "https://www.gazzettaufficiale.it/eli/id/2025/02/18/25G00019/SG" },
    ],
  },
  // --- MICROPERMANENTI E MACROPERMANENTI ---
  {
    categoria: "Micropermanenti e Macropermanenti",
    domanda: "Quanti soldi sono 7 punti di invalidità?",
    risposta:
      "Con 7 punti di invalidità permanente (micropermanente), applicando la formula dell'art. 139 CdA con il punto base 2026 di € 963,40 e un soggetto di 40 anni (demoltiplicatore 0,80), il danno biologico è di circa € 5.395. Aggiungendo l'ITT e la personalizzazione massima del 20%, l'importo complessivo può variare indicativamente tra € 6.700 e € 7.500, a seconda dei giorni di inabilità temporanea.",
    fonti: [
      { label: "Art. 139 D.Lgs. 209/2005", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" },
    ],
  },
  {
    categoria: "Micropermanenti e Macropermanenti",
    domanda: "Quanto valgono 9 punti di invalidità?",
    risposta:
      "Con 9 punti di invalidità permanente (il massimo delle micropermanenti), il danno biologico base con il punto 2026 (€ 963,40) per un soggetto di 40 anni è di circa € 6.937. Sommando l'ITT (ad esempio 60 giorni a € 56,18 = € 3.370,80) e la personalizzazione massima del 20%, l'importo totale può raggiungere circa € 8.600-9.500.",
    fonti: [
      { label: "Art. 139 D.Lgs. 209/2005", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" },
    ],
  },
  {
    categoria: "Micropermanenti e Macropermanenti",
    domanda: "Cosa sono le micropermanenti?",
    risposta:
      "Le micropermanenti sono lesioni di lieve entità con invalidità permanente compresa tra l'1% e il 9%. La loro liquidazione è disciplinata dall'art. 139 del Codice delle Assicurazioni Private (D.Lgs. 209/2005). Il punto base è aggiornato annualmente con decreto del MEF in base alla variazione ISTAT. Per il 2026 il valore è di € 963,40 con possibilità di personalizzazione fino al 20% in presenza di specifiche circostanze soggettive.",
    fonti: [
      { label: "Art. 139 D.Lgs. 209/2005", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" },
    ],
  },
  {
    categoria: "Micropermanenti e Macropermanenti",
    domanda: "Cosa sono le macropermanenti?",
    risposta:
      "Le macropermanenti sono lesioni con invalidità permanente dal 10% al 100%, disciplinate dall'art. 138 del Codice delle Assicurazioni. Dal 5 marzo 2025, la loro liquidazione è regolata dalla Tabella Unica Nazionale (D.P.R. 12/2025) con punto base di € 947,30 e personalizzazione fino al 30%. Per gli illeciti diversi da sinistri stradali e responsabilità medica, molti tribunali applicano ancora le Tabelle di Milano con punto base di € 1.741,60.",
    fonti: [
      { label: "Art. 138 D.Lgs. 209/2005", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" },
      { label: "D.P.R. 12/2025", url: "https://www.gazzettaufficiale.it/eli/id/2025/02/18/25G00019/SG" },
    ],
  },
  {
    categoria: "Micropermanenti e Macropermanenti",
    domanda: "Qual è l'importo giornaliero per l'inabilità temporanea (ITT)?",
    risposta:
      "L'importo giornaliero per l'inabilità temporanea totale (ITT) varia a seconda della tabella applicata: micropermanenti (art. 139 CdA) € 56,18 al giorno; Tabelle Milano 2024 € 115,00 al giorno (di cui € 84 per danno biologico e € 31 per sofferenza); Tabella Unica Nazionale 2025 € 39,37 al giorno. Per l'inabilità temporanea parziale (ITP), l'importo si riduce in proporzione alla percentuale di incapacità.",
    fonti: [
      { label: "Art. 139 D.Lgs. 209/2005", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" },
      { label: "Tabelle Milano 2024", url: "https://tribunale-milano.giustizia.it/cmsresources/cms/documents/P._7646_24.pdf" },
    ],
  },
  // --- COMPONENTI DEL DANNO ---
  {
    categoria: "Componenti del Danno",
    domanda: "Come si calcola il danno morale?",
    risposta:
      "Dopo le sentenze del 2008, il danno morale (sofferenza interiore soggettiva) non è una voce autonoma ma è incluso nel risarcimento unitario del danno non patrimoniale. Nelle Tabelle di Milano è incorporato come \"incremento per sofferenza\" (€ 348,32 per punto nel 2024). Nella TUN 2025 è compreso nel valore base del punto. La personalizzazione consente di adeguare il risarcimento alla specificità della sofferenza morale del caso concreto.",
    fonti: [
      { label: "Cass. SS.UU. 26972/2008", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059" },
    ],
  },
  {
    categoria: "Componenti del Danno",
    domanda: "Il danno esistenziale è risarcibile autonomamente?",
    risposta:
      "No. Le Sezioni Unite del 2008 (Cass. 26972/2008) hanno escluso l'autonomia del danno esistenziale come categoria a sé stante. Il pregiudizio alle attività realizzatrici della persona rientra nella personalizzazione del danno non patrimoniale unitariamente considerato. Il giudice ne tiene conto aumentando il risarcimento base entro i limiti della personalizzazione (20% micropermanenti, 30% TUN, 50% Milano).",
    fonti: [
      { label: "Cass. SS.UU. 26972/2008", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059" },
    ],
  },
  {
    categoria: "Componenti del Danno",
    domanda: "Cos'è il danno catastrofale?",
    risposta:
      "Il danno catastrofale (o catastrofico) è il pregiudizio sofferto dalla vittima nel periodo intercorrente tra la lesione e la morte, quando la vittima è rimasta cosciente della propria condizione terminale. La Cassazione (sent. 35228/2022) ha riconosciuto che questo danno è trasmissibile iure hereditatis agli eredi e deve essere liquidato con criteri equitativi che tengano conto dell'intensità della sofferenza e della durata dell'agonia cosciente.",
    fonti: [
      { label: "Cass. 35228/2022", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059" },
    ],
  },
  {
    categoria: "Componenti del Danno",
    domanda: "Cos'è il danno da perdita parentale?",
    risposta:
      "Il danno da perdita parentale (o danno da lutto) è il pregiudizio sofferto iure proprio dai familiari superstiti per la morte di un congiunto. Le Tabelle di Milano 2024 prevedono valori compresi tra € 195.551,59 e € 391.103,18 per i congiunti più stretti (coniuge, genitore, figlio) e tra € 28.301,23 e € 169.830,60 per fratelli e nonni. La liquidazione è basata su un sistema a punti che tiene conto di età, convivenza, composizione del nucleo familiare e qualità del rapporto.",
    fonti: [
      { label: "Tabelle Milano 2024", url: "https://tribunale-milano.giustizia.it/cmsresources/cms/documents/P._7646_24.pdf" },
    ],
  },
  // --- PERSONALIZZAZIONE E PROVA ---
  {
    categoria: "Personalizzazione e Prova",
    domanda: "Cos'è la personalizzazione del danno?",
    risposta:
      "La personalizzazione è l'aumento del risarcimento tabellare che il giudice può disporre per adeguare la liquidazione alle peculiarità del caso concreto. I limiti massimi variano: 20% per le micropermanenti (art. 139 CdA), 30% per la TUN 2025, 50% per le Tabelle di Milano. I criteri di personalizzazione includono l'età, la professione, le attività sportive/ludiche compromesse, la convivenza con le conseguenze invalidanti e l'impatto sulla vita di relazione.",
    fonti: [
      { label: "Art. 139 D.Lgs. 209/2005", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" },
    ],
  },
  {
    categoria: "Personalizzazione e Prova",
    domanda: "Come si prova il danno non patrimoniale?",
    risposta:
      "La prova del danno non patrimoniale segue il principio dell'allegazione e della dimostrazione. Il danno biologico si prova con la CTU medico-legale che accerta la percentuale di invalidità. Il danno morale e le componenti personalizzabili possono essere provati anche mediante presunzioni semplici (art. 2729 c.c.), documentazione sanitaria, testimonianze, perizie psicologiche e ogni altro elemento idoneo a dimostrare la sofferenza e l'alterazione delle condizioni di vita.",
    fonti: [
      { label: "Art. 2729 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2729" },
    ],
  },
  {
    categoria: "Personalizzazione e Prova",
    domanda: "Quanto paga l'assicurazione per il danno non patrimoniale?",
    risposta:
      "L'importo liquidato dall'assicurazione dipende da molteplici fattori: la gravità della lesione (percentuale di invalidità), l'età del danneggiato, i giorni di inabilità temporanea e la tabella applicabile. Le compagnie assicurative in fase stragiudiziale tendono ad offrire importi inferiori ai valori tabellari. È sempre consigliabile verificare la congruità dell'offerta con un calcolo basato sulle tabelle vigenti prima di accettare.",
    fonti: [
      { label: "Art. 148 D.Lgs. 209/2005", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" },
    ],
  },
  // --- NOVITÀ 2025-2026 ---
  {
    categoria: "Novità 2025-2026",
    domanda: "Cosa cambia con la Tabella Unica Nazionale 2025?",
    risposta:
      "La TUN (D.P.R. 12/2025, in vigore dal 5 marzo 2025) introduce per la prima volta una tabella normativa vincolante per la liquidazione delle macropermanenti (10-100%). Le principali novità sono: valore del punto base di € 947,30 (inferiore a Milano), personalizzazione massima del 30% (contro il 50% di Milano), ITT giornaliero di € 39,37. Si applica obbligatoriamente ai sinistri stradali e alla responsabilità sanitaria (art. 7 L. 24/2017, Legge Gelli).",
    fonti: [
      { label: "D.P.R. 12/2025", url: "https://www.gazzettaufficiale.it/eli/id/2025/02/18/25G00019/SG" },
    ],
  },
  {
    categoria: "Novità 2025-2026",
    domanda: "La TUN si applica ai sinistri anteriori al 5 marzo 2025?",
    risposta:
      "In linea di principio no: la TUN si applica ai sinistri verificatisi dal 5 marzo 2025 in poi. Tuttavia, la Cassazione (sent. 11319/2025) ha ammesso che il giudice possa utilizzare la TUN in via equitativa anche per sinistri anteriori, come parametro di riferimento per la liquidazione, soprattutto quando i valori risultino più favorevoli al danneggiato. La questione è ancora oggetto di dibattito giurisprudenziale.",
    fonti: [
      { label: "D.P.R. 12/2025", url: "https://www.gazzettaufficiale.it/eli/id/2025/02/18/25G00019/SG" },
    ],
  },
  {
    categoria: "Novità 2025-2026",
    domanda: "Quali sono gli aggiornamenti ISTAT 2026 per il danno non patrimoniale?",
    risposta:
      "Per il 2026, l'aggiornamento ISTAT prevede una rivalutazione dell'1,7%. Il punto base delle micropermanenti (art. 139 CdA) passa da € 957,07 del 2025 a € 963,40. L'ITT giornaliero resta fissato a € 56,18. Le Tabelle di Milano 2024 hanno già incorporato una rivalutazione ISTAT del 16,2268% rispetto all'edizione 2021. La TUN sarà soggetta ad aggiornamento periodico.",
    fonti: [
      { label: "Art. 139 D.Lgs. 209/2005", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" },
    ],
  },
  {
    categoria: "Novità 2025-2026",
    domanda: "La TUN si applica alla responsabilità medica?",
    risposta:
      "Sì. L'art. 7, comma 4, della Legge Gelli-Bianco (L. 24/2017) prevede che il danno biologico conseguente all'attività sanitaria sia risarcito sulla base delle tabelle di cui agli artt. 138 e 139 del Codice delle Assicurazioni. Pertanto, la TUN si applica anche ai casi di responsabilità medica per macropermanenti (≥10%), mentre l'art. 139 continua a disciplinare le micropermanenti (1-9%).",
    fonti: [
      { label: "Art. 7 L. 24/2017", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-03-08;24" },
    ],
  },
  {
    categoria: "Novità 2025-2026",
    domanda: "Come funziona il danno INAIL per infortunio sul lavoro?",
    risposta:
      "Il sistema INAIL prevede tre fasce: per invalidità inferiore al 6% si applica una franchigia (nessun indennizzo); tra il 6% e il 15% viene erogato un indennizzo in capitale una tantum; dal 16% in poi si ha diritto a una rendita vitalizia. Il risarcimento INAIL copre solo il danno biologico da lavoro (D.Lgs. 38/2000). Il danno non patrimoniale eccedente (differenziale) può essere chiesto al datore di lavoro ai sensi degli artt. 2059 e 2087 c.c.",
    fonti: [
      { label: "D.Lgs. 38/2000", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38" },
      { label: "Art. 2087 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2087" },
    ],
  },
];
