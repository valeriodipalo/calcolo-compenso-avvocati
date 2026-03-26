// Dati completi degli interessi moratori aggiornati al 2026
// Fonte: D.Lgs. 231/2002, TuttoCamere, Comunicati MEF

export interface TassoMoratorio {
  dal: string; // ISO date YYYY-MM-DD
  al: string | null; // null = in vigore
  tassoBce: number; // tasso BCE rifinanziamento principale
  maggiorazione: number; // 7% pre-2013, 8% post-2013
  totale: number; // tassoBce + maggiorazione
}

export interface RisultatoMoratori {
  totaleInteressi: number;
  importoForfettario: number;
  totaleConForfettario: number;
  dettaglio: {
    dal: string;
    al: string;
    tasso: number;
    giorni: number;
    capitale: number;
    interessi: number;
  }[];
}

export interface TassoLegale {
  dal: string; // ISO date YYYY-MM-DD
  al: string | null;
  tasso: number;
  norma: string;
}

// Tabella storica completa dei tassi moratori dal 2002 al 2026
// Verificata su TuttoCamere + Comunicati MEF su Gazzetta Ufficiale
export const tassiMoratori: TassoMoratorio[] = [
  { dal: "2002-08-08", al: "2002-12-31", tassoBce: 3.35, maggiorazione: 7.00, totale: 10.35 },
  { dal: "2003-01-01", al: "2003-06-30", tassoBce: 2.85, maggiorazione: 7.00, totale: 9.85 },
  { dal: "2003-07-01", al: "2003-12-31", tassoBce: 2.10, maggiorazione: 7.00, totale: 9.10 },
  { dal: "2004-01-01", al: "2004-06-30", tassoBce: 2.02, maggiorazione: 7.00, totale: 9.02 },
  { dal: "2004-07-01", al: "2004-12-31", tassoBce: 2.01, maggiorazione: 7.00, totale: 9.01 },
  { dal: "2005-01-01", al: "2005-06-30", tassoBce: 2.09, maggiorazione: 7.00, totale: 9.09 },
  { dal: "2005-07-01", al: "2005-12-31", tassoBce: 2.05, maggiorazione: 7.00, totale: 9.05 },
  { dal: "2006-01-01", al: "2006-06-30", tassoBce: 2.25, maggiorazione: 7.00, totale: 9.25 },
  { dal: "2006-07-01", al: "2006-12-31", tassoBce: 2.83, maggiorazione: 7.00, totale: 9.83 },
  { dal: "2007-01-01", al: "2007-06-30", tassoBce: 3.58, maggiorazione: 7.00, totale: 10.58 },
  { dal: "2007-07-01", al: "2007-12-31", tassoBce: 4.07, maggiorazione: 7.00, totale: 11.07 },
  { dal: "2008-01-01", al: "2008-06-30", tassoBce: 4.20, maggiorazione: 7.00, totale: 11.20 },
  { dal: "2008-07-01", al: "2008-12-31", tassoBce: 4.10, maggiorazione: 7.00, totale: 11.10 },
  { dal: "2009-01-01", al: "2009-06-30", tassoBce: 2.50, maggiorazione: 7.00, totale: 9.50 },
  { dal: "2009-07-01", al: "2009-12-31", tassoBce: 1.00, maggiorazione: 7.00, totale: 8.00 },
  { dal: "2010-01-01", al: "2010-06-30", tassoBce: 1.00, maggiorazione: 7.00, totale: 8.00 },
  { dal: "2010-07-01", al: "2010-12-31", tassoBce: 1.00, maggiorazione: 7.00, totale: 8.00 },
  { dal: "2011-01-01", al: "2011-06-30", tassoBce: 1.00, maggiorazione: 7.00, totale: 8.00 },
  { dal: "2011-07-01", al: "2011-12-31", tassoBce: 1.25, maggiorazione: 7.00, totale: 8.25 },
  { dal: "2012-01-01", al: "2012-06-30", tassoBce: 1.00, maggiorazione: 7.00, totale: 8.00 },
  { dal: "2012-07-01", al: "2012-12-31", tassoBce: 1.00, maggiorazione: 7.00, totale: 8.00 },
  { dal: "2013-01-01", al: "2013-06-30", tassoBce: 0.75, maggiorazione: 8.00, totale: 8.75 },
  { dal: "2013-07-01", al: "2013-12-31", tassoBce: 0.50, maggiorazione: 8.00, totale: 8.50 },
  { dal: "2014-01-01", al: "2014-06-30", tassoBce: 0.25, maggiorazione: 8.00, totale: 8.25 },
  { dal: "2014-07-01", al: "2014-12-31", tassoBce: 0.15, maggiorazione: 8.00, totale: 8.15 },
  { dal: "2015-01-01", al: "2015-06-30", tassoBce: 0.05, maggiorazione: 8.00, totale: 8.05 },
  { dal: "2015-07-01", al: "2015-12-31", tassoBce: 0.05, maggiorazione: 8.00, totale: 8.05 },
  { dal: "2016-01-01", al: "2016-06-30", tassoBce: 0.05, maggiorazione: 8.00, totale: 8.05 },
  { dal: "2016-07-01", al: "2016-12-31", tassoBce: 0.00, maggiorazione: 8.00, totale: 8.00 },
  { dal: "2017-01-01", al: "2017-06-30", tassoBce: 0.00, maggiorazione: 8.00, totale: 8.00 },
  { dal: "2017-07-01", al: "2017-12-31", tassoBce: 0.00, maggiorazione: 8.00, totale: 8.00 },
  { dal: "2018-01-01", al: "2018-06-30", tassoBce: 0.00, maggiorazione: 8.00, totale: 8.00 },
  { dal: "2018-07-01", al: "2018-12-31", tassoBce: 0.00, maggiorazione: 8.00, totale: 8.00 },
  { dal: "2019-01-01", al: "2019-06-30", tassoBce: 0.00, maggiorazione: 8.00, totale: 8.00 },
  { dal: "2019-07-01", al: "2019-12-31", tassoBce: 0.00, maggiorazione: 8.00, totale: 8.00 },
  { dal: "2020-01-01", al: "2020-06-30", tassoBce: 0.00, maggiorazione: 8.00, totale: 8.00 },
  { dal: "2020-07-01", al: "2020-12-31", tassoBce: 0.00, maggiorazione: 8.00, totale: 8.00 },
  { dal: "2021-01-01", al: "2021-06-30", tassoBce: 0.00, maggiorazione: 8.00, totale: 8.00 },
  { dal: "2021-07-01", al: "2021-12-31", tassoBce: 0.00, maggiorazione: 8.00, totale: 8.00 },
  { dal: "2022-01-01", al: "2022-06-30", tassoBce: 0.00, maggiorazione: 8.00, totale: 8.00 },
  { dal: "2022-07-01", al: "2022-12-31", tassoBce: 0.50, maggiorazione: 8.00, totale: 8.50 },
  { dal: "2023-01-01", al: "2023-06-30", tassoBce: 2.50, maggiorazione: 8.00, totale: 10.50 },
  { dal: "2023-07-01", al: "2023-12-31", tassoBce: 4.00, maggiorazione: 8.00, totale: 12.00 },
  { dal: "2024-01-01", al: "2024-06-30", tassoBce: 4.50, maggiorazione: 8.00, totale: 12.50 },
  { dal: "2024-07-01", al: "2024-12-31", tassoBce: 4.25, maggiorazione: 8.00, totale: 12.25 },
  { dal: "2025-01-01", al: "2025-06-30", tassoBce: 3.15, maggiorazione: 8.00, totale: 11.15 },
  { dal: "2025-07-01", al: "2025-12-31", tassoBce: 2.15, maggiorazione: 8.00, totale: 10.15 },
  { dal: "2026-01-01", al: null, tassoBce: 2.15, maggiorazione: 8.00, totale: 10.15 },
];

// Tassi di interesse legale per la modalita "tra privati" (art. 1224 c.c.)
export const tassiLegali: TassoLegale[] = [
  { dal: "2002-01-01", al: "2003-12-31", tasso: 3.0, norma: "DM Economia 11/12/2001" },
  { dal: "2004-01-01", al: "2007-12-31", tasso: 2.5, norma: "DM Economia 01/12/2003" },
  { dal: "2008-01-01", al: "2009-12-31", tasso: 3.0, norma: "DM Economia 12/12/2007" },
  { dal: "2010-01-01", al: "2010-12-31", tasso: 1.0, norma: "DM Economia 04/12/2009" },
  { dal: "2011-01-01", al: "2011-12-31", tasso: 1.5, norma: "DM Economia 07/12/2010" },
  { dal: "2012-01-01", al: "2013-12-31", tasso: 2.5, norma: "DM Economia 12/12/2011" },
  { dal: "2014-01-01", al: "2014-12-31", tasso: 1.0, norma: "DM Economia 12/12/2013" },
  { dal: "2015-01-01", al: "2015-12-31", tasso: 0.5, norma: "DM Economia 11/12/2014" },
  { dal: "2016-01-01", al: "2016-12-31", tasso: 0.2, norma: "DM Economia 11/12/2015" },
  { dal: "2017-01-01", al: "2017-12-31", tasso: 0.1, norma: "DM Economia 07/12/2016" },
  { dal: "2018-01-01", al: "2018-12-31", tasso: 0.3, norma: "DM Economia 13/12/2017" },
  { dal: "2019-01-01", al: "2019-12-31", tasso: 0.8, norma: "DM Economia 12/12/2018" },
  { dal: "2020-01-01", al: "2020-12-31", tasso: 0.05, norma: "DM Economia 12/12/2019" },
  { dal: "2021-01-01", al: "2021-12-31", tasso: 0.01, norma: "DM Economia 11/12/2020" },
  { dal: "2022-01-01", al: "2022-12-31", tasso: 1.25, norma: "DM Economia 13/12/2021" },
  { dal: "2023-01-01", al: "2023-12-31", tasso: 5.0, norma: "DM Economia 13/12/2022" },
  { dal: "2024-01-01", al: "2024-12-31", tasso: 2.5, norma: "DM Economia 29/11/2023" },
  { dal: "2025-01-01", al: "2025-12-31", tasso: 2.0, norma: "DM Economia 10/12/2024" },
  { dal: "2026-01-01", al: null, tasso: 1.6, norma: "DM Economia 10/12/2025" },
];

// Tasso moratorio per una data specifica
export function getTassoMoratorioPerData(data: Date): number {
  for (let i = tassiMoratori.length - 1; i >= 0; i--) {
    const t = tassiMoratori[i];
    if (data >= new Date(t.dal)) return t.totale;
  }
  return 10.35; // fallback: primo tasso disponibile
}

// Tasso legale per una data specifica
function getTassoLegalePerData(data: Date): number {
  for (let i = tassiLegali.length - 1; i >= 0; i--) {
    const t = tassiLegali[i];
    if (data >= new Date(t.dal)) return t.tasso;
  }
  return 3.0; // fallback
}

// Differenza in giorni tra due date
function diffGiorni(a: Date, b: Date): number {
  const ms = b.getTime() - a.getTime();
  return Math.round(ms / 86_400_000);
}

// Suddivide un intervallo in sotto-periodi in base ai cambi di tasso moratorio
function splitPeriodiMoratori(inizio: Date, fine: Date, agricolo: boolean): { dal: Date; al: Date; tasso: number; giorni: number }[] {
  const periodi: { dal: Date; al: Date; tasso: number; giorni: number }[] = [];
  let cursor = new Date(inizio);

  while (cursor < fine) {
    const tassoBase = getTassoMoratorioPerData(cursor);
    const tasso = agricolo ? tassoBase + 4 : tassoBase;
    // Trova la fine di questo tasso
    let finePeriodoTasso = new Date(fine);
    for (const t of tassiMoratori) {
      const inizioTasso = new Date(t.dal);
      if (inizioTasso > cursor && inizioTasso < finePeriodoTasso) {
        finePeriodoTasso = inizioTasso;
        break;
      }
    }
    const giorni = diffGiorni(cursor, finePeriodoTasso);
    if (giorni > 0) {
      periodi.push({ dal: new Date(cursor), al: new Date(finePeriodoTasso), tasso, giorni });
    }
    cursor = new Date(finePeriodoTasso);
  }

  return periodi;
}

// Suddivide un intervallo in sotto-periodi in base ai cambi di tasso legale
function splitPeriodiLegali(inizio: Date, fine: Date): { dal: Date; al: Date; tasso: number; giorni: number }[] {
  const periodi: { dal: Date; al: Date; tasso: number; giorni: number }[] = [];
  let cursor = new Date(inizio);

  while (cursor < fine) {
    const tasso = getTassoLegalePerData(cursor);
    let finePeriodoTasso = new Date(fine);
    for (const t of tassiLegali) {
      const inizioTasso = new Date(t.dal);
      if (inizioTasso > cursor && inizioTasso < finePeriodoTasso) {
        finePeriodoTasso = inizioTasso;
        break;
      }
    }
    const giorni = diffGiorni(cursor, finePeriodoTasso);
    if (giorni > 0) {
      periodi.push({ dal: new Date(cursor), al: new Date(finePeriodoTasso), tasso, giorni });
    }
    cursor = new Date(finePeriodoTasso);
  }

  return periodi;
}

export interface OpzioniCalcolo {
  modo: "commerciale" | "privati" | "fisso";
  agricolo?: boolean;
  tassoFisso?: number;
  includiForfe?: boolean;
}

// Calcolo principale degli interessi moratori
export function calcolaInteressiMoratori(
  capitale: number,
  dataInizio: Date,
  dataFine: Date,
  opzioni: OpzioniCalcolo
): RisultatoMoratori {
  if (dataFine <= dataInizio || capitale <= 0) {
    return { totaleInteressi: 0, importoForfettario: 0, totaleConForfettario: 0, dettaglio: [] };
  }

  const dettaglio: RisultatoMoratori["dettaglio"] = [];
  let totaleInteressi = 0;

  if (opzioni.modo === "fisso" && opzioni.tassoFisso !== undefined) {
    // Tasso fisso: un solo periodo
    const giorni = diffGiorni(dataInizio, dataFine);
    const interessi = (capitale * opzioni.tassoFisso * giorni) / 36500;
    totaleInteressi = interessi;
    dettaglio.push({
      dal: dataInizio.toISOString().slice(0, 10),
      al: dataFine.toISOString().slice(0, 10),
      tasso: opzioni.tassoFisso,
      giorni,
      capitale,
      interessi: Math.round(interessi * 100) / 100,
    });
  } else if (opzioni.modo === "privati") {
    // Tra privati: usa tasso legale
    const periodi = splitPeriodiLegali(dataInizio, dataFine);
    for (const p of periodi) {
      const interessi = (capitale * p.tasso * p.giorni) / 36500;
      totaleInteressi += interessi;
      dettaglio.push({
        dal: p.dal.toISOString().slice(0, 10),
        al: p.al.toISOString().slice(0, 10),
        tasso: p.tasso,
        giorni: p.giorni,
        capitale,
        interessi: Math.round(interessi * 100) / 100,
      });
    }
  } else {
    // Commerciale: usa tassi moratori semestrali
    const periodi = splitPeriodiMoratori(dataInizio, dataFine, opzioni.agricolo ?? false);
    for (const p of periodi) {
      const interessi = (capitale * p.tasso * p.giorni) / 36500;
      totaleInteressi += interessi;
      dettaglio.push({
        dal: p.dal.toISOString().slice(0, 10),
        al: p.al.toISOString().slice(0, 10),
        tasso: p.tasso,
        giorni: p.giorni,
        capitale,
        interessi: Math.round(interessi * 100) / 100,
      });
    }
  }

  totaleInteressi = Math.round(totaleInteressi * 100) / 100;
  const importoForfettario = opzioni.modo === "commerciale" && opzioni.includiForfe ? 40 : 0;
  const totaleConForfettario = Math.round((totaleInteressi + importoForfettario) * 100) / 100;

  return { totaleInteressi, importoForfettario, totaleConForfettario, dettaglio };
}

// Normativa di riferimento
export const normativaRiferimento = [
  {
    norma: "D.Lgs. 9 ottobre 2002, n. 231",
    descrizione: "Disciplina interessi moratori nelle transazioni commerciali. Attuazione direttiva 2000/35/CE",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231",
  },
  {
    norma: "Art. 4 D.Lgs. 231/2002",
    descrizione: "Decorrenza automatica interessi, termini 30/60 gg, regime B2B vs PA",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art4",
  },
  {
    norma: "Art. 5 D.Lgs. 231/2002",
    descrizione: "Determinazione tasso moratorio: tasso BCE + 8 punti percentuali, aggiornamento semestrale",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art5",
  },
  {
    norma: "Art. 6 D.Lgs. 231/2002",
    descrizione: "Risarcimento forfettario di 40 euro, automatico e cumulativo con gli interessi",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art6",
  },
  {
    norma: "Art. 7 D.Lgs. 231/2002",
    descrizione: "Limiti alla libertà contrattuale, nullità delle clausole gravemente inique",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art7",
  },
  {
    norma: "D.Lgs. 9 novembre 2012, n. 192",
    descrizione: "Modifica D.Lgs. 231/2002: maggiorazione innalzata da 7% a 8% dal 01/01/2013",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2012-11-09;192",
  },
  {
    norma: "D.Lgs. 8 novembre 2021, n. 198",
    descrizione: "Prodotti agricoli e agroalimentari: maggiorazione aggiuntiva di +4%, termini 30/60 gg",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2021-11-08;198",
  },
  {
    norma: "Art. 1224 Codice Civile",
    descrizione: "Interessi moratori nelle obbligazioni civili ordinarie tra privati",
    url: "https://www.brocardi.it/codice-civile/libro-quarto/titolo-i/capo-iii/art1224.html",
  },
  {
    norma: "Art. 1284 Codice Civile",
    descrizione: "Tasso di interesse legale ordinario (1,60% dal 01/01/2026). Comma 4: tasso maggiorato in giudizio",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284",
  },
  {
    norma: "Art. 15 DPR 633/72",
    descrizione: "Esclusione degli interessi moratori dalla base imponibile IVA",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633~art15",
  },
];

// Circolari e risoluzioni
export const circolariMinisteriali = [
  {
    circolare: "Comunicato MEF, GU n. 15 del 20/01/2026",
    descrizione: "Tasso moratorio H1 2026: BCE 2,15% + 8% = 10,15%",
    url: "https://www.gazzettaufficiale.it/eli/id/2026/01/20/26A00172/sg",
  },
  {
    circolare: "Risoluzione AE n. 296/E del 14/07/2008",
    descrizione: "Il divisore resta 36.500 anche negli anni bisestili",
    url: "https://www.agenziaentrate.gov.it/portale/documents/20143/0/Risoluzione_14_07_2008_296.pdf",
  },
];

// Sezioni per la sidebar di navigazione
export const sections = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "cosa-sono", label: "Cosa Sono" },
  { id: "normativa", label: "Normativa" },
  { id: "come-calcolare", label: "Come si Calcolano" },
  { id: "tasso-2026", label: "Tasso 2026" },
  { id: "tabella-storica", label: "Tabella Storica" },
  { id: "decorrenza", label: "Decorrenza" },
  { id: "tra-privati", label: "Tra Privati" },
  { id: "differenza-legali-moratori", label: "Legali vs Moratori" },
  { id: "in-fattura", label: "In Fattura" },
  { id: "prodotti-agricoli", label: "Prodotti Agricoli" },
  { id: "importo-forfettario", label: "Forfettario 40 euro" },
  { id: "fonti", label: "Fonti" },
  { id: "faq", label: "FAQ" },
];
