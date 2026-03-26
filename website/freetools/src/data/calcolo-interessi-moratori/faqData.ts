import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // --- CALCOLO ---
  {
    categoria: "Calcolo",
    domanda: "Come si calcolano gli interessi moratori?",
    risposta:
      "La formula è I = Capitale x Tasso x Giorni / 36.500. Il tasso è quello pubblicato dal MEF per il semestre in corso (BCE + 8%). Per il 1 semestre 2026 il tasso è 10,15%.",
    fonti: [
      { label: "Art. 5 D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art5" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Qual è la formula per calcolare gli interessi di mora?",
    risposta:
      "La formula è I = C x T x G / 36.500, dove C è il capitale, T il tasso moratorio (es. 10,15), G i giorni di ritardo. Il divisore 36.500 equivale a 365 giorni x 100.",
    fonti: [
      { label: "Art. 5 D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art5" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Come calcolare gli interessi moratori su più semestri?",
    risposta:
      "Se il ritardo attraversa il 1 luglio o il 1 gennaio, occorre calcolare separatamente i periodi con i rispettivi tassi semestrali e sommare i risultati. Il calcolatore effettua questa suddivisione automaticamente.",
    fonti: [
      { label: "Art. 5, c. 2, D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art5" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Si applicano interessi sugli interessi (anatocismo)?",
    risposta:
      "No, gli interessi moratori ex D.Lgs. 231/2002 non si capitalizzano. Il calcolo è sempre in regime di capitalizzazione semplice. L'anatocismo è vietato dall'art. 1283 c.c. salvo eccezioni tassative.",
    fonti: [
      { label: "Art. 1283 cod. civ.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1283" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Come si inseriscono gli interessi moratori in fattura?",
    risposta:
      "Come riga separata esclusa da IVA (art. 15 DPR 633/72), con codice natura N1 nella fattura elettronica (tipo documento TD01 o TD05). L'indennità forfettaria di 40 euro va come ulteriore riga separata, anch'essa con natura N1.",
    fonti: [
      { label: "Art. 15 DPR 633/72", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633~art15" },
    ],
  },
  // --- TASSI ---
  {
    categoria: "Tassi",
    domanda: "Qual è il tasso di interesse moratorio per il 2026?",
    risposta:
      "Per il 1 semestre 2026 il tasso è 10,15% (BCE 2,15% + 8% di maggiorazione). Pubblicato sul comunicato MEF in Gazzetta Ufficiale n. 15 del 20/01/2026.",
    fonti: [
      { label: "Comunicato MEF, GU 20/01/2026", url: "https://www.gazzettaufficiale.it/eli/id/2026/01/20/26A00172/sg" },
    ],
  },
  {
    categoria: "Tassi",
    domanda: "Quanto è il tasso di mora attuale?",
    risposta:
      "Dal 01/01/2026 al 30/06/2026: 10,15%. Per i prodotti agricoli e agroalimentari il tasso sale a 14,15% (+4% di maggiorazione aggiuntiva ex D.Lgs. 198/2021).",
    fonti: [
      { label: "Art. 5 D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art5" },
      { label: "Art. 4 D.Lgs. 198/2021", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2021-11-08;198" },
    ],
  },
  {
    categoria: "Tassi",
    domanda: "Qual è il tasso legale di interesse per la mora?",
    risposta:
      "Dipende dal tipo di obbligazione. Nelle transazioni commerciali (B2B e PA): 10,15% (H1 2026). Nelle obbligazioni civili tra privati: 1,60% (tasso legale ex art. 1284 c.c.).",
    fonti: [
      { label: "Art. 1284 cod. civ.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284" },
      { label: "Art. 5 D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art5" },
    ],
  },
  {
    categoria: "Tassi",
    domanda: "Come cambia il tasso moratorio nel tempo?",
    risposta:
      "Il tasso BCE viene aggiornato semestralmente (1 gennaio e 1 luglio). Il MEF pubblica il comunicato in Gazzetta Ufficiale. La maggiorazione di 8 punti percentuali è fissa dal 1 gennaio 2013 (era 7% fino al 31/12/2012).",
    fonti: [
      { label: "Art. 5 D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art5" },
    ],
  },
  {
    categoria: "Tassi",
    domanda: "Qual è la differenza tra tasso legale e tasso moratorio?",
    risposta:
      "Il tasso legale (1,60% nel 2026, art. 1284 c.c.) si applica alle obbligazioni civili ordinarie. Il tasso moratorio (10,15%, D.Lgs. 231/2002) si applica ai ritardi nelle transazioni commerciali. Dalla proposizione della domanda giudiziale, anche le obbligazioni civili possono passare al tasso commerciale (art. 1284, comma 4).",
    fonti: [
      { label: "Art. 1284 cod. civ.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284" },
      { label: "Art. 5 D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art5" },
    ],
  },
  // --- DEFINIZIONE ---
  {
    categoria: "Definizione",
    domanda: "Che cosa sono gli interessi di mora?",
    risposta:
      "Sono una forma di risarcimento automatico dovuto dal debitore al creditore per il ritardo nel pagamento di un debito. Nelle transazioni commerciali sono regolati dal D.Lgs. 231/2002, nelle obbligazioni ordinarie dall'art. 1224 c.c.",
    fonti: [
      { label: "Art. 1224 cod. civ.", url: "https://www.brocardi.it/codice-civile/libro-quarto/titolo-i/capo-iii/art1224.html" },
      { label: "D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231" },
    ],
  },
  {
    categoria: "Definizione",
    domanda: "Qual è la differenza tra interessi di mora e interessi moratori?",
    risposta:
      "Nessuna differenza sostanziale. \"Interessi di mora\" e \"interessi moratori\" sono sinonimi utilizzati indistintamente nella prassi e nella legislazione.",
    fonti: [
      { label: "D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231" },
    ],
  },
  {
    categoria: "Definizione",
    domanda: "Quali sono gli interessi di mora per ritardato pagamento?",
    risposta:
      "Per le transazioni commerciali (B2B, PA): tasso BCE + 8% (10,15% nel H1 2026). Per obbligazioni tra privati: tasso legale (1,60%). Per prodotti agricoli e agroalimentari: tasso commerciale + 4% (14,15%).",
    fonti: [
      { label: "D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231" },
      { label: "Art. 1224 cod. civ.", url: "https://www.brocardi.it/codice-civile/libro-quarto/titolo-i/capo-iii/art1224.html" },
      { label: "D.Lgs. 198/2021", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2021-11-08;198" },
    ],
  },
  // --- DECORRENZA ---
  {
    categoria: "Decorrenza",
    domanda: "Da quando scattano gli interessi di mora?",
    risposta:
      "Automaticamente dal giorno successivo alla scadenza del termine di pagamento, senza necessità di messa in mora formale (art. 4 D.Lgs. 231/2002). Il termine base è di 30 giorni dalla ricezione della fattura o dalla consegna della merce.",
    fonti: [
      { label: "Art. 4 D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art4" },
    ],
  },
  {
    categoria: "Decorrenza",
    domanda: "Quando sono dovuti gli interessi moratori tra privati?",
    risposta:
      "Dal giorno della mora (art. 1224 c.c.). Per i privati, a differenza delle transazioni commerciali, può essere necessaria la messa in mora (art. 1219 c.c.) salvo eccezioni, come nel caso di obbligazioni a termine o di illecito.",
    fonti: [
      { label: "Art. 1224 cod. civ.", url: "https://www.brocardi.it/codice-civile/libro-quarto/titolo-i/capo-iii/art1224.html" },
    ],
  },
  {
    categoria: "Decorrenza",
    domanda: "Il creditore deve provare il danno per ottenere gli interessi moratori?",
    risposta:
      "No. Sia nel D.Lgs. 231/2002 che nell'art. 1224 c.c., gli interessi moratori sono dovuti automaticamente, senza necessità di provare il danno subito. Costituiscono un risarcimento presunto per legge.",
    fonti: [
      { label: "Art. 1224, c. 1, cod. civ.", url: "https://www.brocardi.it/codice-civile/libro-quarto/titolo-i/capo-iii/art1224.html" },
    ],
  },
  // --- CASI PARTICOLARI ---
  {
    categoria: "Casi particolari",
    domanda: "Cosa succede se non pago gli interessi di mora?",
    risposta:
      "Il creditore può agire in giudizio per il recupero del capitale, degli interessi moratori e dei 40 euro forfettari. Dalla proposizione della domanda giudiziale, il tasso sale automaticamente al livello commerciale (art. 1284, comma 4, c.c.).",
    fonti: [
      { label: "Art. 6 D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art6" },
      { label: "Art. 1284 cod. civ.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284" },
    ],
  },
  {
    categoria: "Casi particolari",
    domanda: "Gli interessi moratori si applicano anche alla PA?",
    risposta:
      "Sì, e il tasso è inderogabile: la Pubblica Amministrazione non può pattuire un tasso inferiore a quello legale. Il termine massimo di pagamento per la PA è di 60 giorni.",
    fonti: [
      { label: "Art. 4 D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art4" },
    ],
  },
  {
    categoria: "Casi particolari",
    domanda: "Come funzionano gli interessi moratori sui pagamenti rateali?",
    risposta:
      "Si calcolano solo sulla rata scaduta e non pagata, non sull'intero importo contrattuale (art. 4, comma 7, D.Lgs. 231/2002). Ogni rata scaduta genera autonomamente interessi moratori.",
    fonti: [
      { label: "Art. 4, c. 7, D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art4" },
    ],
  },
  {
    categoria: "Casi particolari",
    domanda: "Si possono pattuire interessi moratori diversi dal tasso legale?",
    risposta:
      "Nelle transazioni B2B: sì, purché non siano gravemente iniqui (art. 7 D.Lgs. 231/2002). Nelle transazioni con la PA: no, il tasso è inderogabile e non può essere inferiore a quello previsto dalla legge.",
    fonti: [
      { label: "Art. 5, Art. 7 D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art5" },
    ],
  },
  // --- FATTURA E ASPETTI FISCALI ---
  {
    categoria: "Fattura e aspetti fiscali",
    domanda: "Gli interessi moratori sono soggetti a IVA?",
    risposta:
      "No, sono esclusi dall'IVA ai sensi dell'art. 15 del DPR 633/72. Nella fattura elettronica vanno indicati con codice natura N1 e aliquota 0%.",
    fonti: [
      { label: "Art. 15 DPR 633/72", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633~art15" },
    ],
  },
  {
    categoria: "Fattura e aspetti fiscali",
    domanda: "Come si addebita l'indennità forfettaria di 40 euro?",
    risposta:
      "Come riga separata in fattura o nota di debito, esclusa da IVA (codice natura N1). Si cumula con gli interessi moratori ed è dovuta automaticamente per ogni fattura pagata in ritardo, senza necessità di messa in mora.",
    fonti: [
      { label: "Art. 6 D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art6" },
    ],
  },
];
