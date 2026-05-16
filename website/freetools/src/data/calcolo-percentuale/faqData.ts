import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // ───────────────────────────────────────────────────────────
  // Categoria A: Come si calcola
  // ───────────────────────────────────────────────────────────
  {
    categoria: "Come si calcola",
    domanda: "Come si calcola la percentuale di un numero?",
    risposta:
      "Si applica la formula «Parte = Totale × (Percentuale / 100)». In pratica, si trasforma la percentuale in decimale (dividendo per 100) e si moltiplica per il numero. Esempio: il 20% di 50 → 50 × 0,20 = 10. È il calcolo percentuale più comune ed è alla base di tutti gli altri.",
    fonti: [
      {
        label: "Treccani — Enciclopedia della Matematica",
        url: "https://www.treccani.it/enciclopedia/percentuale_(Enciclopedia-della-Matematica)/",
      },
    ],
  },
  {
    categoria: "Come si calcola",
    domanda: "Come si fa a fare il calcolo della percentuale?",
    risposta:
      "Tutto si riconduce alla proporzione «Parte : Totale = Percentuale : 100». Se devi trovare la parte (X% di N) moltiplica il totale per la percentuale e dividi per 100. Se devi trovare la percentuale (V su N = ?%), dividi V per N e moltiplica per 100. Se devi trovare il totale (V è il P% di quanto?), dividi V per la percentuale in decimale.",
    fonti: [
      {
        label: "Wikipedia — Percentuale",
        url: "https://it.wikipedia.org/wiki/Percentuale",
      },
    ],
  },
  {
    categoria: "Come si calcola",
    domanda: "Come si calcola il 30% di un importo?",
    risposta:
      "Moltiplica l'importo per 0,30 (cioè 30 ÷ 100). Esempio: il 30% di 200 € si ottiene così → 200 × 0,30 = 60 €. In alternativa, calcola il 10% (sposta la virgola di una posizione) e moltiplica per 3: il 10% di 200 è 20, e 20 × 3 = 60.",
    fonti: [
      {
        label: "Treccani — Percentuale",
        url: "https://www.treccani.it/enciclopedia/percentuale_(Enciclopedia-della-Matematica)/",
      },
    ],
  },
  {
    categoria: "Come si calcola",
    domanda: "Qual è il 30% di 50 €?",
    risposta:
      "50 × 0,30 = 15 €. Quindi il 30% di 50 € è 15 €. Per il calcolo a mente: il 10% di 50 è 5, e 5 × 3 = 15.",
    fonti: [
      {
        label: "Wikipedia — Percentuale",
        url: "https://it.wikipedia.org/wiki/Percentuale",
      },
    ],
  },
  {
    categoria: "Come si calcola",
    domanda: "Come si calcola il 30% con la calcolatrice?",
    risposta:
      "Su una calcolatrice classica: digita il numero, premi «×», digita 30, premi «÷», digita 100, premi «=». Sulle calcolatrici con tasto «%»: digita ad esempio «150 × 30 %» e premi «=» → la calcolatrice esegue automaticamente la divisione per 100 e restituisce 45. Su smartphone funziona anche dell'app calcolatrice nativa.",
    fonti: [
      {
        label: "chimica-online.it — Come si calcola il 30%",
        url: "https://www.chimica-online.it/come-quando-perche/come-si-calcola-il-30-per-cento.htm",
      },
    ],
  },
  {
    categoria: "Come si calcola",
    domanda: "Come posso calcolare le percentuali velocemente a mente?",
    risposta:
      "Usa le scorciatoie: il 10% si ottiene spostando la virgola di una posizione a sinistra, il 5% è la metà del 10%, il 25% è dividere per 4, il 50% è dividere per 2. Trucco potente: a% di b = b% di a (commutatività): il 4% di 75 è uguale al 75% di 4 = 3, molto più rapido!",
    fonti: [
      {
        label: "Geopop — Trucchi per calcolare percentuali",
        url: "https://www.geopop.it/come-calcolare-le-percentuali-in-modo-facile-tutti-i-trucchi-matematici/",
      },
    ],
  },
  // ───────────────────────────────────────────────────────────
  // Categoria B: Tra due numeri / Inversa
  // ───────────────────────────────────────────────────────────
  {
    categoria: "Tra due numeri",
    domanda: "Come si calcola la percentuale di 75 su 300?",
    risposta:
      "Si applica la formula dell'incidenza: «% = (Parte / Totale) × 100». Quindi (75 ÷ 300) × 100 = 0,25 × 100 = 25%. 75 rappresenta il 25% di 300, ovvero un quarto del totale.",
    fonti: [
      {
        label: "Testbusters — Guida pratica al calcolo percentuale",
        url: "https://www.testbusters.it/blog/pillole-didattiche/guida-pratica-come-calcolare-una-percentuale",
      },
    ],
  },
  {
    categoria: "Tra due numeri",
    domanda: "Qual è la percentuale di 21 su 30?",
    risposta:
      "(21 ÷ 30) × 100 = 0,7 × 100 = 70%. Quindi 21 rappresenta il 70% di 30. È il calcolo tipico per convertire un voto in trentesimi in percentuale: un 21/30 corrisponde al 70% del massimo.",
    fonti: [
      {
        label: "Testbusters — Calcolo percentuale",
        url: "https://www.testbusters.it/blog/pillole-didattiche/guida-pratica-come-calcolare-una-percentuale",
      },
    ],
  },
  {
    categoria: "Tra due numeri",
    domanda: "Come si calcola la percentuale di un numero rispetto al totale?",
    risposta:
      "Dividi il numero (parte) per il totale e moltiplica per 100: «% = (Parte / Totale) × 100». Esempio: spendi 80 € su un budget di 320 € → (80 ÷ 320) × 100 = 25%. È il calcolo dell'incidenza percentuale, utile per ripartire spese, valutare l'impatto di una voce sul totale, calcolare quote.",
    fonti: [
      {
        label: "Treccani",
        url: "https://www.treccani.it/enciclopedia/percentuale_(Enciclopedia-della-Matematica)/",
      },
    ],
  },
  {
    categoria: "Tra due numeri",
    domanda: "Cos'è il calcolo della percentuale inversa?",
    risposta:
      "Si chiama percentuale inversa quando conosci la parte e la percentuale, e vuoi trovare il totale. Formula: «Totale = Parte / (Percentuale / 100)». Esempio: 30 è il 15% di quanto? → 30 ÷ 0,15 = 200. Tipico caso: dato un importo IVA e l'aliquota, ricavare l'imponibile (es. IVA 220 € al 22% → imponibile 220 ÷ 0,22 = 1.000 €).",
    fonti: [
      {
        label: "avvocatoandreani.it — Calcolo percentuale inverso",
        url: "https://www.avvocatoandreani.it/servizi/calcolo-percentuale.php",
      },
    ],
  },
  {
    categoria: "Tra due numeri",
    domanda: "Come si calcola la variazione percentuale tra due numeri?",
    risposta:
      "Formula: «Var% = ((Valore finale − Valore iniziale) / Valore iniziale) × 100». Se positiva è un aumento, se negativa una diminuzione. Esempio: da 80 a 92 → ((92 − 80) ÷ 80) × 100 = +15%. Da 50 a 35 → ((35 − 50) ÷ 50) × 100 = −30%. Si usa molto nelle analisi statistiche comparative anno-su-anno o mese-su-mese.",
    fonti: [
      {
        label: "Skuola.net — Variazione percentuale",
        url: "https://www.skuola.net/matematica/algebra/come-calcolare-variazione-percentuale-guida-esempi-pratici.html",
      },
    ],
  },
  // ───────────────────────────────────────────────────────────
  // Categoria C: Sconti e aumenti
  // ───────────────────────────────────────────────────────────
  {
    categoria: "Sconti e aumenti",
    domanda: "Come si calcola lo sconto in percentuale?",
    risposta:
      "Per uno sconto del p% su un prezzo, il prezzo finale è «Finale = Prezzo × (1 − p/100)». Esempio: 80 € con sconto 20% → 80 × 0,80 = 64 € (risparmio di 16 €). Per calcolare quanto risparmi: «Risparmio = Prezzo × (p / 100)» = 80 × 0,20 = 16 €.",
    fonti: [
      {
        label: "avvocatoandreani.it — Calcolo percentuale (sezione Decremento)",
        url: "https://www.avvocatoandreani.it/servizi/calcolo-percentuale.php",
      },
    ],
  },
  {
    categoria: "Sconti e aumenti",
    domanda: "Perché 30% + 20% non fa 50% di sconto?",
    risposta:
      "Perché gli sconti successivi si moltiplicano, non si sommano. Su 100 €: primo sconto 30% → restano 70 €. Secondo sconto 20% applicato sui 70 € → restano 56 €. Sconto totale: 1 − (0,70 × 0,80) = 1 − 0,56 = 44%, NON 50%. Formula generale per due sconti: «Sconto_tot = 1 − (1 − s₁/100) × (1 − s₂/100)».",
    fonti: [
      {
        label: "Wikipedia — Sconto",
        url: "https://it.wikipedia.org/wiki/Sconto",
      },
    ],
  },
  {
    categoria: "Sconti e aumenti",
    domanda: "Se aumento del 30% e poi diminuisco del 30%, torno al valore iniziale?",
    risposta:
      "No, mai. Esempio: 100 → +30% = 130 → −30% di 130 = 91. Si perde sempre il 9%. Il motivo: l'aumento si applica al valore iniziale (100) mentre la diminuzione successiva si applica sul valore aumentato (130), quindi su una base diversa. Questa asimmetria vale in entrambi i sensi (perdita poi guadagno della stessa %).",
    fonti: [
      {
        label: "Wikipedia — Percentuale",
        url: "https://it.wikipedia.org/wiki/Percentuale",
      },
    ],
  },
  {
    categoria: "Sconti e aumenti",
    domanda: "Come si calcola un aumento percentuale?",
    risposta:
      "Formula: «Nuovo = Iniziale × (1 + percentuale/100)». Esempio: aumento del 15% su 80 → 80 × 1,15 = 92. Per calcolare solo l'incremento (quanto cresce in assoluto): «Incremento = Iniziale × percentuale/100» = 80 × 0,15 = 12. Tipico per ricarichi commerciali, aumenti di prezzo, indicizzazioni.",
    fonti: [
      {
        label: "Treccani",
        url: "https://www.treccani.it/enciclopedia/percentuale_(Enciclopedia-della-Matematica)/",
      },
    ],
  },
  // ───────────────────────────────────────────────────────────
  // Categoria D: IVA e fiscalità
  // ───────────────────────────────────────────────────────────
  {
    categoria: "IVA e fiscalità",
    domanda: "Come si aggiunge l'IVA al 22% a un importo netto?",
    risposta:
      "Moltiplica il netto per 1,22. Esempio: netto 100 € → 100 × 1,22 = 122 € lordi. Per le altre aliquote: IVA 10% → × 1,10; IVA 5% → × 1,05; IVA 4% → × 1,04. La formula generale è «Lordo = Netto × (1 + aliquota/100)». Disciplina IVA: art. 16 del D.P.R. 633/1972.",
    fonti: [
      {
        label: "D.P.R. 633/1972 — Normattiva",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633",
      },
      {
        label: "Fiscozen — Guida scorporo IVA",
        url: "https://www.fiscozen.it/guide/scorporo-iva-22/",
      },
    ],
  },
  {
    categoria: "IVA e fiscalità",
    domanda: "Come si scorpora l'IVA da un prezzo lordo?",
    risposta:
      "Dividi il lordo per (1 + aliquota/100). Per IVA 22%: «Netto = Lordo ÷ 1,22». Esempio: lordo 122 € → netto 100 €. Attenzione: NON sottrarre il 22% dal lordo (122 × 0,78 = 95,16 € è SBAGLIATO). Il coefficiente rapido di scorporo per IVA 22% è 0,8197 (cioè 1 ÷ 1,22). Per scorpori frequenti puoi usare il nostro tool dedicato Scorporo IVA.",
    fonti: [
      {
        label: "Fiscozen — Scorporo IVA 22%",
        url: "https://www.fiscozen.it/guide/scorporo-iva-22/",
      },
    ],
  },
  {
    categoria: "IVA e fiscalità",
    domanda: "Come si calcola la CPA del 4% sulla parcella dell'avvocato?",
    risposta:
      "La CPA (Cassa Previdenza Avvocati) è il 4% del compenso imponibile, che comprende compenso + spese forfettarie 15% (DM 147/2022), escluse le spese vive documentate. Esempio: compenso 1.000 € + spese forfettarie 150 € = base 1.150 € → CPA = 1.150 × 0,04 = 46 €. La CPA va poi inclusa nell'imponibile IVA al 22%.",
    fonti: [
      {
        label: "Cassa Forense — Vademecum fiscale",
        url: "https://www.cassaforense.it/media/2a3gkril/vademecum-fiscalita-versione-completa.pdf",
      },
      {
        label: "Ordine Avvocati Milano — Parametri DM 147/2022",
        url: "https://www.ordineavvocatimilano.it/it/i-parametri-forensi-aggiornati-dal-dm-13-agosto-2022-n-147/p592",
      },
    ],
  },
  // ───────────────────────────────────────────────────────────
  // Categoria E: Concetti avanzati
  // ───────────────────────────────────────────────────────────
  {
    categoria: "Concetti avanzati",
    domanda: "Qual è la differenza tra punti percentuali e percentuale relativa?",
    risposta:
      "I punti percentuali (pp) misurano la differenza aritmetica tra due percentuali: passare dal 5% al 7% = +2 punti percentuali. La percentuale relativa misura quanto è variata la percentuale rispetto al valore di partenza: da 5% a 7% è un aumento relativo del 40% (perché 2 ÷ 5 × 100 = 40). Sono concetti diversi e spesso confusi nella stampa finanziaria.",
    fonti: [
      {
        label: "Wikipedia — Punto percentuale",
        url: "https://it.wikipedia.org/wiki/Punto_percentuale",
      },
    ],
  },
  {
    categoria: "Concetti avanzati",
    domanda: "Qual è la differenza tra margine e markup?",
    risposta:
      "Il margine si calcola sul prezzo di vendita: «Margine% = ((Prezzo − Costo) / Prezzo) × 100». Il markup si calcola sul costo: «Markup% = ((Prezzo − Costo) / Costo) × 100». Esempio: costo 60 €, prezzo 100 € → Margine 40%, Markup 66,7%. Sono numeri diversi e producono pricing diversi se confusi.",
    fonti: [
      {
        label: "Gocardless — Markup vs Margin",
        url: "https://gocardless.com/en-us/guides/posts/markup-vs-margin-whats-the-difference/",
      },
    ],
  },
  {
    categoria: "Concetti avanzati",
    domanda: "Come calcolo la percentuale in Excel e Google Sheets?",
    risposta:
      "Per il 20% di A1 scrivi «=A1*20%» oppure «=A1*0,2». Per la percentuale tra due valori «=A1/B1» con cella formattata come percentuale. Per la variazione percentuale «=(B1-A1)/A1» con formato %. Per aggiungere IVA 22% «=A1*1,22», per scorporare IVA 22% «=A1/1,22». Per arrotondare a 2 decimali avvolgi la formula con ARROTONDA: «=ARROTONDA(formula;2)».",
    fonti: [
      {
        label: "Microsoft Support — Excel percentuali",
        url: "https://support.microsoft.com/it-it/office/calcolare-le-percentuali-6b5506e9-125a-4aba-a638-d6b40e603981",
      },
    ],
  },
];
