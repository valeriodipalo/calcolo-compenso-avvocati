// Dati completi degli interessi legali aggiornati al 2026
// Fonte: Art. 1284 Codice Civile e Decreti MEF annuali

export interface TassoLegale {
  dal: string; // ISO date YYYY-MM-DD
  al: string | null; // null = in vigore
  tasso: number; // percentuale annua
  norma: string;
  gu?: string; // riferimento Gazzetta Ufficiale
}

// Tabella storica completa dei tassi di interesse legale dal 1942
export const tassiStorici: TassoLegale[] = [
  { dal: "1942-04-21", al: "1990-12-15", tasso: 5.0, norma: "Art. 1284 cod. civ. (testo originario)" },
  { dal: "1990-12-16", al: "1996-12-31", tasso: 10.0, norma: "L. 353/1990 e L. 408/1990" },
  { dal: "1997-01-01", al: "1998-12-31", tasso: 5.0, norma: "L. 662/1996, art. 2, c. 185" },
  { dal: "1999-01-01", al: "2000-12-31", tasso: 2.5, norma: "DM Tesoro 10/12/1998", gu: "n. 289 del 11/12/1998" },
  { dal: "2001-01-01", al: "2001-12-31", tasso: 3.5, norma: "DM Tesoro 11/12/2000", gu: "n. 292 del 15/12/2000" },
  { dal: "2002-01-01", al: "2003-12-31", tasso: 3.0, norma: "DM Economia 11/12/2001", gu: "n. 290 del 14/12/2001" },
  { dal: "2004-01-01", al: "2007-12-31", tasso: 2.5, norma: "DM Economia 01/12/2003", gu: "n. 286 del 10/12/2003" },
  { dal: "2008-01-01", al: "2009-12-31", tasso: 3.0, norma: "DM Economia 12/12/2007", gu: "n. 291 del 15/12/2007" },
  { dal: "2010-01-01", al: "2010-12-31", tasso: 1.0, norma: "DM Economia 04/12/2009", gu: "n. 291 del 15/12/2009" },
  { dal: "2011-01-01", al: "2011-12-31", tasso: 1.5, norma: "DM Economia 07/12/2010", gu: "n. 292 del 15/12/2010" },
  { dal: "2012-01-01", al: "2013-12-31", tasso: 2.5, norma: "DM Economia 12/12/2011", gu: "n. 291 del 15/12/2011" },
  { dal: "2014-01-01", al: "2014-12-31", tasso: 1.0, norma: "DM Economia 12/12/2013", gu: "n. 292 del 14/12/2013" },
  { dal: "2015-01-01", al: "2015-12-31", tasso: 0.5, norma: "DM Economia 11/12/2014", gu: "n. 290 del 15/12/2014" },
  { dal: "2016-01-01", al: "2016-12-31", tasso: 0.2, norma: "DM Economia 11/12/2015", gu: "n. 291 del 15/12/2015" },
  { dal: "2017-01-01", al: "2017-12-31", tasso: 0.1, norma: "DM Economia 07/12/2016", gu: "n. 291 del 14/12/2016" },
  { dal: "2018-01-01", al: "2018-12-31", tasso: 0.3, norma: "DM Economia 13/12/2017", gu: "n. 292 del 15/12/2017" },
  { dal: "2019-01-01", al: "2019-12-31", tasso: 0.8, norma: "DM Economia 12/12/2018", gu: "n. 291 del 15/12/2018" },
  { dal: "2020-01-01", al: "2020-12-31", tasso: 0.05, norma: "DM Economia 12/12/2019", gu: "n. 293 del 14/12/2019" },
  { dal: "2021-01-01", al: "2021-12-31", tasso: 0.01, norma: "DM Economia 11/12/2020", gu: "n. 310 del 15/12/2020" },
  { dal: "2022-01-01", al: "2022-12-31", tasso: 1.25, norma: "DM Economia 13/12/2021", gu: "n. 297 del 15/12/2021" },
  { dal: "2023-01-01", al: "2023-12-31", tasso: 5.0, norma: "DM Economia 13/12/2022", gu: "n. 292 del 15/12/2022" },
  { dal: "2024-01-01", al: "2024-12-31", tasso: 2.5, norma: "DM Economia 29/11/2023", gu: "n. 288 del 11/12/2023" },
  { dal: "2025-01-01", al: "2025-12-31", tasso: 2.0, norma: "DM Economia 10/12/2024", gu: "n. 294 del 16/12/2024" },
  { dal: "2026-01-01", al: null, tasso: 1.6, norma: "DM Economia 10/12/2025", gu: "n. 289 del 13/12/2025" },
];

// Tasso di interesse legale per un dato giorno
export function getTassoPerData(data: Date): number {
  for (let i = tassiStorici.length - 1; i >= 0; i--) {
    const t = tassiStorici[i];
    if (data >= new Date(t.dal)) return t.tasso;
  }
  return 5.0; // fallback: tasso originario
}

// Differenza in giorni tra due date (anno civile, non commerciale)
function diffGiorni(a: Date, b: Date): number {
  const ms = b.getTime() - a.getTime();
  return Math.round(ms / 86_400_000);
}

// Suddivide un intervallo in sotto-periodi in base ai cambi di tasso
function splitPeriodiPerTasso(inizio: Date, fine: Date): { dal: Date; al: Date; tasso: number; giorni: number }[] {
  const periodi: { dal: Date; al: Date; tasso: number; giorni: number }[] = [];
  let cursor = new Date(inizio);

  while (cursor < fine) {
    const tasso = getTassoPerData(cursor);
    // Trova la fine di questo tasso
    let finePerioroTasso = new Date(fine);
    for (const t of tassiStorici) {
      const inizioTasso = new Date(t.dal);
      if (inizioTasso > cursor && inizioTasso < finePerioroTasso) {
        finePerioroTasso = inizioTasso;
        break;
      }
    }
    const giorni = diffGiorni(cursor, finePerioroTasso);
    if (giorni > 0) {
      periodi.push({ dal: new Date(cursor), al: new Date(finePerioroTasso), tasso, giorni });
    }
    cursor = new Date(finePerioroTasso);
  }

  return periodi;
}

export interface RisultatoInteressi {
  totaleInteressi: number;
  montante: number;
  dettaglio: {
    dal: string;
    al: string;
    tasso: number;
    giorni: number;
    capitale: number;
    interessi: number;
  }[];
}

type TipoCapitalizzazione = "nessuna" | "trimestrale" | "semestrale" | "annuale";

// Date fisse di capitalizzazione
function getDateCapitalizzazione(tipo: TipoCapitalizzazione, inizio: Date, fine: Date): Date[] {
  if (tipo === "nessuna") return [];
  const mesi = tipo === "trimestrale" ? 3 : tipo === "semestrale" ? 6 : 12;
  const date: Date[] = [];

  // Partenza dalle date fisse: 1 gen, 1 apr, 1 lug, 1 ott (trim) / 1 gen, 1 lug (sem) / 1 gen (ann)
  const mesiInizio = tipo === "trimestrale" ? [0, 3, 6, 9] : tipo === "semestrale" ? [0, 6] : [0];

  let anno = inizio.getFullYear();
  while (anno <= fine.getFullYear() + 1) {
    for (const m of mesiInizio) {
      const d = new Date(anno, m, 1);
      if (d > inizio && d < fine) {
        date.push(d);
      }
    }
    anno++;
  }
  return date;
}

// Calcolo principale degli interessi legali
export function calcolaInteressiLegali(
  capitale: number,
  dataInizio: Date,
  dataFine: Date,
  capitalizzazione: TipoCapitalizzazione = "nessuna"
): RisultatoInteressi {
  if (dataFine <= dataInizio || capitale <= 0) {
    return { totaleInteressi: 0, montante: capitale, dettaglio: [] };
  }

  const dettaglio: RisultatoInteressi["dettaglio"] = [];

  if (capitalizzazione === "nessuna") {
    // Interesse semplice: I = C x S x N / 36500
    const periodi = splitPeriodiPerTasso(dataInizio, dataFine);
    let totale = 0;
    for (const p of periodi) {
      const interessi = (capitale * p.tasso * p.giorni) / 36500;
      totale += interessi;
      dettaglio.push({
        dal: p.dal.toISOString().slice(0, 10),
        al: p.al.toISOString().slice(0, 10),
        tasso: p.tasso,
        giorni: p.giorni,
        capitale,
        interessi: Math.round(interessi * 100) / 100,
      });
    }
    return {
      totaleInteressi: Math.round(totale * 100) / 100,
      montante: Math.round((capitale + totale) * 100) / 100,
      dettaglio,
    };
  }

  // Con capitalizzazione
  const dateCapit = getDateCapitalizzazione(capitalizzazione, dataInizio, dataFine);
  const breakpoints = [dataInizio, ...dateCapit, dataFine];
  let capitaleCorrente = capitale;
  let totaleInteressi = 0;

  for (let i = 0; i < breakpoints.length - 1; i++) {
    const periodi = splitPeriodiPerTasso(breakpoints[i], breakpoints[i + 1]);
    let interessiPeriodo = 0;
    for (const p of periodi) {
      const interessi = (capitaleCorrente * p.tasso * p.giorni) / 36500;
      interessiPeriodo += interessi;
      dettaglio.push({
        dal: p.dal.toISOString().slice(0, 10),
        al: p.al.toISOString().slice(0, 10),
        tasso: p.tasso,
        giorni: p.giorni,
        capitale: Math.round(capitaleCorrente * 100) / 100,
        interessi: Math.round(interessi * 100) / 100,
      });
    }
    totaleInteressi += interessiPeriodo;
    // Capitalizza alla fine del periodo (se non e l'ultimo breakpoint)
    if (i < breakpoints.length - 2) {
      capitaleCorrente += interessiPeriodo;
    }
  }

  return {
    totaleInteressi: Math.round(totaleInteressi * 100) / 100,
    montante: Math.round((capitaleCorrente + (totaleInteressi - (capitaleCorrente - capitale))) * 100) / 100,
    dettaglio,
  };
}

// Normativa di riferimento
export const normativaRiferimento = [
  {
    norma: "Art. 1284 Codice Civile",
    descrizione: "Saggio degli interessi legali: determinazione annuale da parte del MEF",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284",
  },
  {
    norma: "Art. 1282 Codice Civile",
    descrizione: "Interessi nelle obbligazioni pecuniarie: decorrenza automatica per crediti liquidi ed esigibili",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1282",
  },
  {
    norma: "Art. 1283 Codice Civile",
    descrizione: "Anatocismo: capitalizzazione degli interessi scaduti (almeno 6 mesi, domanda giudiziale)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1283",
  },
  {
    norma: "D.Lgs. 9 ottobre 2002, n. 231",
    descrizione: "Ritardi di pagamento nelle transazioni commerciali: tasso BCE + 8 punti percentuali",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231",
  },
  {
    norma: "L. 23 dicembre 1996, n. 662",
    descrizione: "Art. 2, c. 185: riforma dell'art. 1284 c.c. con aggiornamento annuale del tasso",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1996-12-23;662",
  },
  {
    norma: "D.L. 12 settembre 2014, n. 132",
    descrizione: "Art. 17: introduzione commi 4 e 5 dell'art. 1284 c.c. (interessi moratori in corso di causa)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132",
  },
  {
    norma: "DM Economia 10 dicembre 2025",
    descrizione: "Tasso di interesse legale per il 2026 fissato all'1,60% in ragione d'anno",
    url: "https://www.gazzettaufficiale.it/eli/id/2025/12/13/25A06705/sg",
  },
];

// Circolari ministeriali
export const circolariMinisteriali = [
  {
    circolare: "Risoluzione AE n. 296/E del 14/07/2008",
    descrizione: "Ravvedimento operoso e anni bisestili: il divisore resta 36500 anche negli anni bisestili",
    url: "https://www.agenziaentrate.gov.it/portale/documents/20143/0/Risoluzione_14_07_2008_296.pdf",
  },
];

// Sezioni per la sidebar di navigazione (l'ordine deve corrispondere al contenuto della pagina)
export const sections = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "tasso-2026", label: "Tasso 2026" },
  { id: "tabella-tassi", label: "Tabella Tassi Storici" },
  { id: "come-si-calcolano", label: "Come si Calcolano" },
  { id: "legali-vs-moratori", label: "Legali vs Moratori" },
  { id: "anatocismo", label: "Anatocismo" },
  { id: "applicazioni", label: "Applicazioni Pratiche" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];
