import type {
  NormativaRiferimento,
  ToolSection,
} from "@/types/tool";

// ============================================================
// Types
// ============================================================

export type ModalitaCalcolo =
  | "parte"
  | "incidenza"
  | "totale"
  | "variazione"
  | "aumento"
  | "sconto"
  | "sconti-successivi";

export interface ConversioneRow {
  percentuale: string;
  frazione: string;
  decimale: string;
  esempio: string;
  trucco: string;
}

export interface AliquotaIva {
  aliquota: number;
  coefficienteAggiunta: string;
  coefficienteScorporo: string;
  norma: string;
  casiTipici: string;
}

export interface ScaglionoIrpef {
  scaglione: string;
  reddito: string;
  aliquota: string;
}

export interface ErroreComune {
  titolo: string;
  spiegazione: string;
  esempio: string;
}

export interface TruccoMentale {
  titolo: string;
  descrizione: string;
  esempio: string;
}

export interface FormulaExcel {
  calcolo: string;
  formula: string;
  esempio: string;
}

export interface EsempioWorked {
  problema: string;
  formula: string;
  calcolo: string;
  risultato: string;
}

export interface CasoProfessionale {
  categoria: string;
  descrizione: string;
}

export interface RisultatoCalcolo {
  modalita: ModalitaCalcolo;
  valore: number;
  formula: string;
  passaggi: string[];
  extra?: Record<string, number>;
}

// ============================================================
// Tabella conversioni notevoli (percentuali ↔ frazioni ↔ decimali)
// ============================================================

export const conversioniNotevoli: ConversioneRow[] = [
  {
    percentuale: "1%",
    frazione: "1/100",
    decimale: "0,01",
    esempio: "1% di 1.000 = 10",
    trucco: "Sposta la virgola di 2 posizioni a sinistra",
  },
  {
    percentuale: "5%",
    frazione: "1/20",
    decimale: "0,05",
    esempio: "5% di 200 = 10",
    trucco: "Metà del 10%",
  },
  {
    percentuale: "10%",
    frazione: "1/10",
    decimale: "0,10",
    esempio: "10% di 250 = 25",
    trucco: "Sposta la virgola di 1 posizione a sinistra",
  },
  {
    percentuale: "12,5%",
    frazione: "1/8",
    decimale: "0,125",
    esempio: "12,5% di 200 = 25",
    trucco: "Dividi per 8",
  },
  {
    percentuale: "15%",
    frazione: "3/20",
    decimale: "0,15",
    esempio: "15% di 80 = 12",
    trucco: "10% + 5% (utile per le mance)",
  },
  {
    percentuale: "20%",
    frazione: "1/5",
    decimale: "0,20",
    esempio: "20% di 150 = 30",
    trucco: "Dividi per 5",
  },
  {
    percentuale: "25%",
    frazione: "1/4",
    decimale: "0,25",
    esempio: "25% di 400 = 100",
    trucco: "Dividi per 4",
  },
  {
    percentuale: "33,33%",
    frazione: "1/3",
    decimale: "0,333…",
    esempio: "33,33% di 300 = 100",
    trucco: "Dividi per 3",
  },
  {
    percentuale: "50%",
    frazione: "1/2",
    decimale: "0,50",
    esempio: "50% di 60 = 30",
    trucco: "Dividi per 2 (la metà)",
  },
  {
    percentuale: "66,67%",
    frazione: "2/3",
    decimale: "0,667…",
    esempio: "66,67% di 300 = 200",
    trucco: "Calcola 33,33% e moltiplica per 2",
  },
  {
    percentuale: "75%",
    frazione: "3/4",
    decimale: "0,75",
    esempio: "75% di 120 = 90",
    trucco: "25% × 3 oppure 100% − 25%",
  },
  {
    percentuale: "100%",
    frazione: "1/1",
    decimale: "1,00",
    esempio: "100% di N = N",
    trucco: "Il numero stesso",
  },
];

// ============================================================
// Aliquote IVA 2026 (D.P.R. 633/1972)
// ============================================================

export const aliquoteIva: AliquotaIva[] = [
  {
    aliquota: 4,
    coefficienteAggiunta: "× 1,04",
    coefficienteScorporo: "÷ 1,04 (≈ × 0,9615)",
    norma: "D.P.R. 633/1972, Tabella A, Parte II",
    casiTipici:
      "Beni di prima necessità, pane, latte, libri, alcuni prodotti agricoli",
  },
  {
    aliquota: 5,
    coefficienteAggiunta: "× 1,05",
    coefficienteScorporo: "÷ 1,05 (≈ × 0,9524)",
    norma: "D.P.R. 633/1972, Tabella A, Parte II-bis",
    casiTipici:
      "Erbe officinali, prodotti per l'igiene femminile, alcuni servizi sociali",
  },
  {
    aliquota: 10,
    coefficienteAggiunta: "× 1,10",
    coefficienteScorporo: "÷ 1,10 (≈ × 0,9091)",
    norma: "D.P.R. 633/1972, Tabella A, Parte III",
    casiTipici:
      "Servizi turistici, ristorazione, alcuni alimenti, edilizia agevolata",
  },
  {
    aliquota: 22,
    coefficienteAggiunta: "× 1,22",
    coefficienteScorporo: "÷ 1,22 (≈ × 0,8197)",
    norma: "D.P.R. 633/1972, art. 16",
    casiTipici: "Aliquota ordinaria — default per beni e servizi",
  },
];

// ============================================================
// Scaglioni IRPEF 2026 (riforma 2024 consolidata)
// ============================================================

export const scaglioniIrpef: ScaglionoIrpef[] = [
  { scaglione: "1°", reddito: "Fino a 28.000 €", aliquota: "23%" },
  { scaglione: "2°", reddito: "Da 28.001 € a 50.000 €", aliquota: "35%" },
  { scaglione: "3°", reddito: "Oltre 50.000 €", aliquota: "43%" },
];

// ============================================================
// Esempi pratici worked (per la sezione "Esempi risolti")
// ============================================================

export const esempiWorked: EsempioWorked[] = [
  {
    problema: "20% di 150 €",
    formula: "Parte = Totale × (% / 100)",
    calcolo: "150 × 0,20",
    risultato: "30 €",
  },
  {
    problema: "7,5% di 129,90 €",
    formula: "Parte = Totale × (% / 100)",
    calcolo: "129,90 × 0,075",
    risultato: "9,74 € (arrotondato)",
  },
  {
    problema: "22% di 1.000 € (IVA su netto)",
    formula: "IVA = Imponibile × 0,22",
    calcolo: "1.000 × 0,22",
    risultato: "220 € (lordo 1.220 €)",
  },
  {
    problema: "15 è che % di 60?",
    formula: "% = (Parte / Totale) × 100",
    calcolo: "(15 ÷ 60) × 100",
    risultato: "25%",
  },
  {
    problema: "75 su 300 — qual è la percentuale?",
    formula: "% = (Parte / Totale) × 100",
    calcolo: "(75 ÷ 300) × 100",
    risultato: "25%",
  },
  {
    problema: "21 su 30 — qual è la percentuale?",
    formula: "% = (Parte / Totale) × 100",
    calcolo: "(21 ÷ 30) × 100",
    risultato: "70%",
  },
  {
    problema: "30 è il 15% di quanto?",
    formula: "Totale = Parte / (% / 100)",
    calcolo: "30 ÷ 0,15",
    risultato: "200",
  },
  {
    problema: "Da 80 a 92 — variazione percentuale",
    formula: "Var% = ((Nuovo − Vecchio) / Vecchio) × 100",
    calcolo: "((92 − 80) ÷ 80) × 100",
    risultato: "+15%",
  },
  {
    problema: "Sconto 30% su 80 €",
    formula: "Finale = Prezzo × (1 − % / 100)",
    calcolo: "80 × 0,70",
    risultato: "56 € (risparmio 24 €)",
  },
  {
    problema: "Sconti 30% + 20% su 100 €",
    formula: "Finale = Prezzo × (1 − s₁) × (1 − s₂)",
    calcolo: "100 × 0,70 × 0,80",
    risultato: "56 € (sconto reale 44%, non 50%)",
  },
];

// ============================================================
// Errori comuni
// ============================================================

export const erroriComuni: ErroreComune[] = [
  {
    titolo: "Confondere punti percentuali e percentuale relativa",
    spiegazione:
      "Sono due concetti diversi. I punti percentuali (pp) misurano la differenza aritmetica fra due percentuali; la percentuale relativa misura quanto è cambiata la percentuale rispetto al valore di partenza.",
    esempio:
      "Il tasso passa dal 5% al 7%. Sono +2 punti percentuali ma è anche un aumento relativo del 40% (perché 2/5 × 100 = 40).",
  },
  {
    titolo: "Sommare sconti successivi invece di comporli",
    spiegazione:
      "Due sconti applicati in sequenza NON si sommano. Vanno moltiplicati i fattori (1 − s/100).",
    esempio:
      "Sconto 30% + 20% su 100 €: 100 × 0,70 × 0,80 = 56 € → sconto reale 44%, NON 50%.",
  },
  {
    titolo: "+30% poi −30% non torna al valore iniziale",
    spiegazione:
      "Aumento e diminuzione percentuale si applicano su basi diverse, quindi non si annullano. Si perde sempre una quota.",
    esempio: "100 → +30% = 130 → −30% di 130 = 91. Si perde il 9%.",
  },
  {
    titolo: "Applicare la percentuale alla base sbagliata",
    spiegazione:
      "Lo sconto si applica al prezzo lordo; l'IVA si calcola sul netto. Confondere lordo e netto produce errori sistematici nelle fatture.",
    esempio:
      "Sconto 10% applicato dopo l'IVA invece che sul netto: cambia l'importo finale.",
  },
  {
    titolo: "Scorporo IVA fatto come Lordo × 0,78",
    spiegazione:
      "Lo scorporo dell'IVA 22% NON è una sottrazione del 22% dal lordo: bisogna dividere il lordo per 1,22 (coefficiente 0,8197).",
    esempio:
      "Lordo 122 € → scorporo corretto: 122 ÷ 1,22 = 100 €. Sbagliato: 122 × 0,78 = 95,16 €.",
  },
  {
    titolo: "Arrotondamenti intermedi che si accumulano",
    spiegazione:
      "Nei calcoli finanziari arrotonda solo alla fine. Arrotondare a ogni passaggio intermedio fa accumulare l'errore e produce differenze rilevanti.",
    esempio:
      "Calcolo del 7,5% di 129,90 € → 9,7425. Se arrotondi prima a 9,74 e poi sommi 100 volte, accumuli 0,25 € di errore.",
  },
  {
    titolo: "Confondere margine e markup",
    spiegazione:
      "Il margine si calcola sul prezzo di vendita, il markup sul costo. Sono numeri diversi e producono pricing diversi.",
    esempio:
      "Costo 60 €, prezzo 100 € → Margine = 40%, Markup = 66,7%. Confonderli porta a errori di listino.",
  },
];

// ============================================================
// Trucchi per il calcolo mentale rapido
// ============================================================

export const trucchiMentali: TruccoMentale[] = [
  {
    titolo: "10% di N",
    descrizione: "Sposta la virgola di una posizione a sinistra",
    esempio: "10% di 250 = 25,0",
  },
  {
    titolo: "5% di N",
    descrizione: "La metà del 10%",
    esempio: "5% di 80 = 4 (perché 10% = 8, e 8 ÷ 2 = 4)",
  },
  {
    titolo: "1% di N",
    descrizione: "Sposta la virgola di due posizioni a sinistra",
    esempio: "1% di 250 = 2,5",
  },
  {
    titolo: "25% di N",
    descrizione: "Dividi per 4",
    esempio: "25% di 200 = 50",
  },
  {
    titolo: "50% di N",
    descrizione: "Dividi per 2 (la metà)",
    esempio: "50% di 84 = 42",
  },
  {
    titolo: "75% di N",
    descrizione: "Calcola 25% e moltiplica per 3, oppure 100% − 25%",
    esempio: "75% di 80 = 60 (perché 25% = 20, e 20 × 3 = 60)",
  },
  {
    titolo: "15% di N (utile per le mance)",
    descrizione: "Somma 10% + 5% (la metà del 10%)",
    esempio: "15% di 80 = 8 + 4 = 12",
  },
  {
    titolo: "Trucco dello scambio: a% di b = b% di a",
    descrizione:
      "Per la commutatività della moltiplicazione, scambiare i due numeri dà lo stesso risultato — spesso uno dei due è più facile da calcolare a mente",
    esempio:
      "Il 4% di 75 è uguale al 75% di 4 = 3 (molto più rapido!)",
  },
  {
    titolo: "11% / 12% / 13% di N",
    descrizione: "10% + 1% / 2% / 3% (sposta la virgola e somma)",
    esempio: "13% di 200 = 20 + 6 = 26",
  },
  {
    titolo: "40% di N",
    descrizione: "Calcola il 10% e moltiplica per 4 (oppure 50% − 10%)",
    esempio: "40% di 75 = 7,5 × 4 = 30",
  },
];

// ============================================================
// Formule per Excel e Google Sheets
// ============================================================

export const formuleExcel: FormulaExcel[] = [
  {
    calcolo: "Percentuale di un numero (20% di A1)",
    formula: "=A1*20%",
    esempio: "Oppure =A1*0,2 — entrambe equivalenti",
  },
  {
    calcolo: "Quale percentuale è A1 di B1",
    formula: "=A1/B1",
    esempio: "Formatta la cella come percentuale per vedere il %",
  },
  {
    calcolo: "Variazione percentuale da A1 a B1",
    formula: "=(B1-A1)/A1",
    esempio: "Formato cella: percentuale (1 o 2 decimali)",
  },
  {
    calcolo: "Aggiungere IVA 22% all'importo in A1",
    formula: "=A1*1,22",
    esempio: "Per IVA 10% usa *1,10; per 4% usa *1,04",
  },
  {
    calcolo: "Scorporare IVA 22% dal lordo in A1",
    formula: "=A1/1,22",
    esempio: "Per IVA 10% usa /1,10; per 4% usa /1,04",
  },
  {
    calcolo: "Applicare sconto B1% al prezzo A1",
    formula: "=A1*(1-B1/100)",
    esempio: "Se B1 è già formattato come %: =A1*(1-B1)",
  },
  {
    calcolo: "Sconti successivi 30% e 20% su A1",
    formula: "=A1*0,7*0,8",
    esempio: "Risultato: 56% del prezzo originale (sconto reale 44%)",
  },
  {
    calcolo: "Arrotondamento a 2 decimali",
    formula: "=ARROTONDA(formula;2)",
    esempio: "Es. =ARROTONDA(A1*0,075;2) per centesimi di euro",
  },
];

// ============================================================
// Casi d'uso professionali
// ============================================================

export const casiProfessionali: CasoProfessionale[] = [
  {
    categoria: "Fattura avvocato",
    descrizione:
      "Spese forfettarie 15% (DM 147/2022), CPA 4% (Cassa Forense), IVA 22% sul compenso più spese imponibili più CPA, ritenuta d'acconto 20% (art. 25 DPR 600/1973).",
  },
  {
    categoria: "Margine commerciale",
    descrizione:
      "Margine = (Prezzo − Costo) / Prezzo × 100. Markup = (Prezzo − Costo) / Costo × 100. Su costo 60 € e prezzo 100 € → Margine 40%, Markup 66,7%.",
  },
  {
    categoria: "Interesse semplice",
    descrizione:
      "I = (Capitale × tasso% × tempo) / 100. Su 1.000 € al 5% per 1 anno → interesse 50 €. Base di calcolo del TAEG per i finanziamenti.",
  },
  {
    categoria: "Voto in 30esimi → percentuale",
    descrizione:
      "Conversione: 18/30 = 60%, 24/30 = 80%, 27/30 = 90%, 30/30 = 100%. Utile per calcolare medie ponderate ECTS o per le università straniere.",
  },
  {
    categoria: "Affluenza elettorale",
    descrizione:
      "Affluenza = (votanti / aventi diritto) × 100. La soglia di sbarramento del 4% al Parlamento è la percentuale minima per accedere al riparto dei seggi.",
  },
  {
    categoria: "Ravvedimento operoso",
    descrizione:
      "Sanzioni ridotte a frazione del 25% (post D.Lgs. 87/2024): 1/10 per sprint, 1/9 entro 30 gg, 1/8 entro 90 gg, 1/7 entro l'anno, 1/6 oltre l'anno. Vedi anche il tool dedicato.",
  },
];

// ============================================================
// Calcolo functions
// ============================================================

export interface ParamsParte {
  totale: number;
  percentuale: number;
}

export interface ParamsIncidenza {
  parte: number;
  totale: number;
}

export interface ParamsTotale {
  parte: number;
  percentuale: number;
}

export interface ParamsVariazione {
  vecchio: number;
  nuovo: number;
}

export interface ParamsAumento {
  iniziale: number;
  percentuale: number;
  tipo: "aumento" | "diminuzione";
}

export interface ParamsSconto {
  prezzo: number;
  sconto: number;
}

export interface ParamsScontiSuccessivi {
  prezzo: number;
  sconto1: number;
  sconto2: number;
  sconto3?: number;
}

/** Formatta un numero in formato italiano (virgola decimale, punto migliaia) */
function fmtIt(n: number, decimali = 2): string {
  return new Intl.NumberFormat("it-IT", {
    minimumFractionDigits: decimali,
    maximumFractionDigits: decimali,
  }).format(n);
}

/** Calcolo della parte: X% di N */
export function calcolaParte(p: ParamsParte): RisultatoCalcolo {
  const valore = (p.totale * p.percentuale) / 100;
  return {
    modalita: "parte",
    valore,
    formula: "Parte = Totale × (% / 100)",
    passaggi: [
      `Trasforma la percentuale in decimale: ${fmtIt(p.percentuale)}% ÷ 100 = ${fmtIt(p.percentuale / 100, 4)}`,
      `Moltiplica il totale per il decimale: ${fmtIt(p.totale)} × ${fmtIt(p.percentuale / 100, 4)} = ${fmtIt(valore, 4)}`,
    ],
  };
}

/** Calcolo dell'incidenza: V su N = quanti % */
export function calcolaIncidenza(p: ParamsIncidenza): RisultatoCalcolo {
  if (p.totale === 0) {
    return {
      modalita: "incidenza",
      valore: 0,
      formula: "% = (Parte / Totale) × 100",
      passaggi: ["Errore: il totale non può essere zero (divisione impossibile)."],
    };
  }
  const valore = (p.parte / p.totale) * 100;
  return {
    modalita: "incidenza",
    valore,
    formula: "% = (Parte / Totale) × 100",
    passaggi: [
      `Dividi la parte per il totale: ${fmtIt(p.parte)} ÷ ${fmtIt(p.totale)} = ${fmtIt(p.parte / p.totale, 4)}`,
      `Moltiplica per 100 per ottenere la percentuale: ${fmtIt(p.parte / p.totale, 4)} × 100 = ${fmtIt(valore, 4)}%`,
    ],
  };
}

/** Calcolo del totale (percentuale inversa): V è il p% di quanto? */
export function calcolaTotale(p: ParamsTotale): RisultatoCalcolo {
  if (p.percentuale === 0) {
    return {
      modalita: "totale",
      valore: 0,
      formula: "Totale = Parte / (% / 100)",
      passaggi: ["Errore: la percentuale non può essere zero."],
    };
  }
  const valore = p.parte / (p.percentuale / 100);
  return {
    modalita: "totale",
    valore,
    formula: "Totale = Parte / (% / 100)",
    passaggi: [
      `Trasforma la percentuale in decimale: ${fmtIt(p.percentuale)}% ÷ 100 = ${fmtIt(p.percentuale / 100, 4)}`,
      `Dividi la parte per il decimale: ${fmtIt(p.parte)} ÷ ${fmtIt(p.percentuale / 100, 4)} = ${fmtIt(valore, 4)}`,
    ],
  };
}

/** Variazione percentuale tra due valori */
export function calcolaVariazione(p: ParamsVariazione): RisultatoCalcolo {
  if (p.vecchio === 0) {
    return {
      modalita: "variazione",
      valore: 0,
      formula: "Var% = ((Nuovo − Vecchio) / Vecchio) × 100",
      passaggi: ["Errore: il valore iniziale non può essere zero."],
    };
  }
  const delta = p.nuovo - p.vecchio;
  const valore = (delta / p.vecchio) * 100;
  return {
    modalita: "variazione",
    valore,
    formula: "Var% = ((Nuovo − Vecchio) / Vecchio) × 100",
    passaggi: [
      `Calcola la differenza: ${fmtIt(p.nuovo)} − ${fmtIt(p.vecchio)} = ${fmtIt(delta)}`,
      `Dividi per il valore iniziale: ${fmtIt(delta)} ÷ ${fmtIt(p.vecchio)} = ${fmtIt(delta / p.vecchio, 4)}`,
      `Moltiplica per 100: ${fmtIt(delta / p.vecchio, 4)} × 100 = ${fmtIt(valore, 4)}%`,
    ],
    extra: { delta },
  };
}

/** Aumento o diminuzione percentuale */
export function calcolaAumento(p: ParamsAumento): RisultatoCalcolo {
  const fattore = p.tipo === "aumento" ? 1 + p.percentuale / 100 : 1 - p.percentuale / 100;
  const valore = p.iniziale * fattore;
  const delta = valore - p.iniziale;
  const segno = p.tipo === "aumento" ? "+" : "−";
  return {
    modalita: "aumento",
    valore,
    formula:
      p.tipo === "aumento"
        ? "Nuovo = Iniziale × (1 + % / 100)"
        : "Nuovo = Iniziale × (1 − % / 100)",
    passaggi: [
      `Calcola il fattore: 1 ${segno} ${fmtIt(p.percentuale)} / 100 = ${fmtIt(fattore, 4)}`,
      `Moltiplica il valore iniziale per il fattore: ${fmtIt(p.iniziale)} × ${fmtIt(fattore, 4)} = ${fmtIt(valore, 4)}`,
      `Variazione assoluta: ${segno} ${fmtIt(Math.abs(delta), 4)}`,
    ],
    extra: { delta },
  };
}

/** Calcolo dello sconto */
export function calcolaSconto(p: ParamsSconto): RisultatoCalcolo {
  const importoSconto = (p.prezzo * p.sconto) / 100;
  const valore = p.prezzo - importoSconto;
  return {
    modalita: "sconto",
    valore,
    formula: "Finale = Prezzo × (1 − % / 100)   |   Risparmio = Prezzo × (% / 100)",
    passaggi: [
      `Importo dello sconto: ${fmtIt(p.prezzo)} × ${fmtIt(p.sconto / 100, 4)} = ${fmtIt(importoSconto, 4)}`,
      `Prezzo finale: ${fmtIt(p.prezzo)} − ${fmtIt(importoSconto, 4)} = ${fmtIt(valore, 4)}`,
    ],
    extra: { risparmio: importoSconto },
  };
}

/** Sconti successivi (composti) */
export function calcolaScontiSuccessivi(p: ParamsScontiSuccessivi): RisultatoCalcolo {
  const f1 = 1 - p.sconto1 / 100;
  const f2 = 1 - p.sconto2 / 100;
  const f3 = p.sconto3 ? 1 - p.sconto3 / 100 : 1;
  const fattoreTotale = f1 * f2 * f3;
  const valore = p.prezzo * fattoreTotale;
  const scontoReale = (1 - fattoreTotale) * 100;
  const risparmio = p.prezzo - valore;
  const passaggi = [
    `Trasforma ogni sconto in fattore residuo:`,
    `  ${fmtIt(p.sconto1)}% → 1 − ${fmtIt(p.sconto1 / 100, 4)} = ${fmtIt(f1, 4)}`,
    `  ${fmtIt(p.sconto2)}% → 1 − ${fmtIt(p.sconto2 / 100, 4)} = ${fmtIt(f2, 4)}`,
  ];
  if (p.sconto3) {
    passaggi.push(`  ${fmtIt(p.sconto3)}% → 1 − ${fmtIt(p.sconto3 / 100, 4)} = ${fmtIt(f3, 4)}`);
  }
  passaggi.push(
    `Moltiplica i fattori: ${fmtIt(f1, 4)} × ${fmtIt(f2, 4)}${p.sconto3 ? ` × ${fmtIt(f3, 4)}` : ""} = ${fmtIt(fattoreTotale, 4)}`,
  );
  passaggi.push(`Prezzo finale: ${fmtIt(p.prezzo)} × ${fmtIt(fattoreTotale, 4)} = ${fmtIt(valore, 4)}`);
  passaggi.push(`Sconto reale: ${fmtIt(scontoReale, 2)}% (NON la somma dei singoli sconti)`);
  return {
    modalita: "sconti-successivi",
    valore,
    formula: "Finale = Prezzo × (1 − s₁/100) × (1 − s₂/100) × …",
    passaggi,
    extra: { scontoReale, risparmio, fattoreTotale },
  };
}

// ============================================================
// Normativa di riferimento
// ============================================================

export const normativaRiferimento: NormativaRiferimento[] = [
  {
    norma: "D.P.R. 26 ottobre 1972, n. 633 (art. 16)",
    descrizione:
      "Istituzione e disciplina dell'IVA. Art. 16: aliquota ordinaria 22%. Tabella A: aliquote ridotte 4%, 5%, 10%.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633",
  },
  {
    norma: "D.M. 13 agosto 2022, n. 147",
    descrizione:
      "Parametri forensi 2022 — definisce le spese generali forfettarie nella misura del 15% del compenso (art. 2, c. 2). Base per il calcolo della parcella avvocato.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.ministeriale:2022-08-13;147",
  },
  {
    norma: "D.P.R. 29 settembre 1973, n. 600 (art. 25)",
    descrizione:
      "Ritenuta d'acconto del 20% sui compensi corrisposti ai professionisti per prestazioni di lavoro autonomo (es. parcella avvocato).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600",
  },
  {
    norma: "D.Lgs. 18 dicembre 1997, n. 472 (art. 13)",
    descrizione:
      "Ravvedimento operoso — sanzioni ridotte applicate come frazione del minimo edittale in funzione del tempo intercorso. Modificato dal D.Lgs. 87/2024.",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472",
  },
  {
    norma: "D.P.R. 22 dicembre 1986, n. 917 (TUIR, artt. 11 e ss.)",
    descrizione:
      "Testo Unico Imposte sui Redditi. Disciplina degli scaglioni IRPEF e delle aliquote progressive applicate al reddito complessivo (riforma 2024 consolidata per il 2026).",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1986-12-22;917",
  },
];

// ============================================================
// Fonti autorevoli (per la sezione "Fonti e Riferimenti")
// ============================================================

export interface FonteAutorevole {
  categoria: string;
  label: string;
  url: string;
  descrizione: string;
}

export const fontiAutorevoli: FonteAutorevole[] = [
  {
    categoria: "Definizione matematica",
    label: "Treccani — Enciclopedia della Matematica, voce «Percentuale»",
    url: "https://www.treccani.it/enciclopedia/percentuale_(Enciclopedia-della-Matematica)/",
    descrizione:
      "Definizione formale della percentuale come rapporto in centesimi e impostazione della proporzione fondamentale.",
  },
  {
    categoria: "Etimologia",
    label: "Treccani — Vocabolario, voce «centum»",
    url: "https://www.treccani.it/vocabolario/centum/",
    descrizione:
      "Etimologia del termine percentuale dal latino tardo per centum e diffusione del concetto «ogni cento».",
  },
  {
    categoria: "Definizioni e simbolo",
    label: "Wikipedia — Punto percentuale",
    url: "https://it.wikipedia.org/wiki/Punto_percentuale",
    descrizione:
      "Distinzione formale tra punti percentuali (pp) e variazione percentuale relativa, con esempi e casi di confusione.",
  },
  {
    categoria: "IVA e fiscalità",
    label: "Commissione europea — Regole IVA Italia",
    url: "https://vat-one-stop-shop.ec.europa.eu/national-vat-rules/italy-vat-rules_en",
    descrizione:
      "Quadro istituzionale delle aliquote IVA vigenti in Italia (22% ordinaria, 10%, 5%, 4% ridotte).",
  },
  {
    categoria: "IVA — scorporo pratico",
    label: "Fiscozen — Guida allo scorporo IVA 22%",
    url: "https://www.fiscozen.it/guide/scorporo-iva-22/",
    descrizione:
      "Coefficienti rapidi di scorporo (0,8197 per IVA 22%), errori comuni e formule pratiche per la fatturazione.",
  },
  {
    categoria: "Avvocatura — fiscalità",
    label: "Cassa Forense — Vademecum fiscale (PDF)",
    url: "https://www.cassaforense.it/media/2a3gkril/vademecum-fiscalita-versione-completa.pdf",
    descrizione:
      "Disciplina della CPA (Cassa Previdenza Avvocati) al 4% e regime fiscale completo della professione forense.",
  },
  {
    categoria: "Parametri forensi",
    label: "Ordine Avvocati Milano — Parametri DM 147/2022",
    url: "https://www.ordineavvocatimilano.it/it/i-parametri-forensi-aggiornati-dal-dm-13-agosto-2022-n-147/p592",
    descrizione:
      "Spese forfettarie 15% e parametri di liquidazione del compenso forense.",
  },
  {
    categoria: "Excel e fogli di calcolo",
    label: "Microsoft Support — Calcolare percentuali in Excel",
    url: "https://support.microsoft.com/it-it/office/calcolare-le-percentuali-6b5506e9-125a-4aba-a638-d6b40e603981",
    descrizione:
      "Guida ufficiale Microsoft alle formule percentuali in Excel, con sintassi italiana.",
  },
  {
    categoria: "Calcolo mentale",
    label: "Geopop — Trucchi rapidi per calcolare percentuali",
    url: "https://www.geopop.it/come-calcolare-le-percentuali-in-modo-facile-tutti-i-trucchi-matematici/",
    descrizione:
      "Trucchi divulgativi per il calcolo mentale, basati sulla scomposizione decimale.",
  },
  {
    categoria: "Arrotondamenti",
    label: "Università di Padova — Arrotondamenti numerici (PDF)",
    url: "https://www.math.unipd.it/~marcov/pdf/rounding.pdf",
    descrizione:
      "Trattazione matematica degli errori di arrotondamento in catena, con esempi di accumulo.",
  },
  {
    categoria: "Margine vs Markup",
    label: "Gocardless — Margine vs Markup spiegato",
    url: "https://gocardless.com/en-us/guides/posts/markup-vs-margin-whats-the-difference/",
    descrizione:
      "Differenza tra margine percentuale (sul prezzo) e markup (sul costo) con esempi numerici.",
  },
  {
    categoria: "Didattica e scuola",
    label: "Orizzonte Scuola — Frequenza minima 75%",
    url: "https://www.orizzontescuola.it/frequenza-alunni-e-limite-assenze-come-si-calcola-quando-si-rischia-la-non-ammissione-casi-in-deroga-e-quando-non-si-boccia-guida/",
    descrizione:
      "Esempio di applicazione delle percentuali in ambito scolastico (frequenza minima annuale per la validità).",
  },
];

// ============================================================
// Sections (sidebar navigation)
// ============================================================

export const sections: ToolSection[] = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "cose-percentuale", label: "Cos'è una percentuale" },
  { id: "storia", label: "Etimologia e storia" },
  { id: "tabella-conversioni", label: "Tabella conversioni" },
  { id: "formule-base", label: "Le 4 formule base" },
  { id: "percentuale-numero", label: "Percentuale di un numero" },
  { id: "incidenza", label: "Quale % è un numero di un altro" },
  { id: "percentuale-inversa", label: "Trovare il totale (inversa)" },
  { id: "variazione", label: "Variazione percentuale" },
  { id: "aumento-diminuzione", label: "Aumento e diminuzione" },
  { id: "sconto", label: "Calcolo dello sconto" },
  { id: "sconti-successivi", label: "Sconti successivi" },
  { id: "punti-percentuali", label: "Punti % vs % relativa" },
  { id: "iva-scorporo", label: "IVA e scorporo" },
  { id: "casi-uso", label: "Casi d'uso pratici" },
  { id: "excel", label: "Excel e Google Sheets" },
  { id: "trucchi-mentali", label: "Trucchi mentali" },
  { id: "errori-comuni", label: "Errori comuni" },
  { id: "fonti", label: "Fonti e riferimenti" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];
