// Dati per il calcolo della rivalutazione monetaria ISTAT
// Fonte: ISTAT – Indice FOI al netto dei tabacchi, Art. 1284 c.c.

import { tassiStorici, getTassoPerData, type TassoLegale } from "@/data/calcolo-interessi-legali/interessiData";
import type { NormativaRiferimento, ToolSection } from "@/types/tool";

export { tassiStorici, getTassoPerData, type TassoLegale };

// Variazione annua percentuale dell'indice FOI (Famiglie Operai e Impiegati)
// al netto dei tabacchi. Fonte: ISTAT — Gazzetta Ufficiale
export interface VariazioneFOI {
  anno: number;
  variazione: number; // percentuale, es. 2.5 = +2,5%
}

export const variazioniFOI: VariazioneFOI[] = [
  { anno: 1996, variazione: 3.9 },
  { anno: 1997, variazione: 1.7 },
  { anno: 1998, variazione: 1.8 },
  { anno: 1999, variazione: 1.6 },
  { anno: 2000, variazione: 2.6 },
  { anno: 2001, variazione: 2.7 },
  { anno: 2002, variazione: 2.5 },
  { anno: 2003, variazione: 2.5 },
  { anno: 2004, variazione: 2.0 },
  { anno: 2005, variazione: 1.7 },
  { anno: 2006, variazione: 2.0 },
  { anno: 2007, variazione: 1.7 },
  { anno: 2008, variazione: 3.3 },
  { anno: 2009, variazione: 0.8 },
  { anno: 2010, variazione: 1.5 },
  { anno: 2011, variazione: 2.7 },
  { anno: 2012, variazione: 3.0 },
  { anno: 2013, variazione: 1.2 },
  { anno: 2014, variazione: 0.2 },
  { anno: 2015, variazione: -0.1 },
  { anno: 2016, variazione: -0.1 },
  { anno: 2017, variazione: 1.2 },
  { anno: 2018, variazione: 1.1 },
  { anno: 2019, variazione: 0.5 },
  { anno: 2020, variazione: -0.2 },
  { anno: 2021, variazione: 1.9 },
  { anno: 2022, variazione: 8.1 },
  { anno: 2023, variazione: 5.7 },
  { anno: 2024, variazione: 1.0 },
  { anno: 2025, variazione: 1.0 },
];

export type ModalitaCalcolo = "rivalutazione-interessi" | "solo-rivalutazione" | "solo-interessi";

export interface DettaglioAnnuale {
  anno: number;
  dal: string;
  al: string;
  capitaleInizioAnno: number;
  variazioneFOI: number;
  rivalutazioneAnno: number;
  capitaleRivalutato: number;
  tassoInteresse: number;
  giorniInteresse: number;
  interessiAnno: number;
}

export interface RisultatoRivalutazione {
  capitaleIniziale: number;
  capitaleRivalutato: number;
  rivalutazioneTotale: number;
  interessiTotali: number;
  totaleComplessivo: number;
  percentualeRivalutazione: number;
  dettaglio: DettaglioAnnuale[];
}

function diffGiorni(a: Date, b: Date): number {
  return Math.round((b.getTime() - a.getTime()) / 86_400_000);
}

function getVariazioneFOI(anno: number): number {
  const found = variazioniFOI.find(v => v.anno === anno);
  return found ? found.variazione : 0;
}

// Calcolo rivalutazione monetaria secondo il metodo Cassazione SS.UU. 1712/1995
// La rivalutazione è calcolata anno per anno sul capitale iniziale (non composta)
// Gli interessi sono calcolati sulla somma via via rivalutata
export function calcolaRivalutazione(
  capitale: number,
  dataInizio: Date,
  dataFine: Date,
  modo: ModalitaCalcolo,
  percentualeApplicazione: number = 100
): RisultatoRivalutazione {
  if (dataFine <= dataInizio || capitale <= 0) {
    return {
      capitaleIniziale: capitale,
      capitaleRivalutato: capitale,
      rivalutazioneTotale: 0,
      interessiTotali: 0,
      totaleComplessivo: capitale,
      percentualeRivalutazione: 0,
      dettaglio: [],
    };
  }

  const dettaglio: DettaglioAnnuale[] = [];
  const annoInizio = dataInizio.getFullYear();
  const annoFine = dataFine.getFullYear();
  let rivalutazioneCumulativa = 0;
  let interessiTotali = 0;

  for (let anno = annoInizio; anno <= annoFine; anno++) {
    const inizioAnno = anno === annoInizio
      ? dataInizio
      : new Date(anno, 0, 1);
    const fineAnno = anno === annoFine
      ? dataFine
      : new Date(anno + 1, 0, 1);

    const giorniNellAnno = diffGiorni(new Date(anno, 0, 1), new Date(anno + 1, 0, 1));
    const giorniEffettivi = diffGiorni(inizioAnno, fineAnno);
    const variazione = getVariazioneFOI(anno);

    let rivalutazioneAnno = 0;
    if (modo !== "solo-interessi") {
      const variazioneProporzionata = (variazione * giorniEffettivi) / giorniNellAnno;
      rivalutazioneAnno = capitale * (variazioneProporzionata / 100) * (percentualeApplicazione / 100);
      rivalutazioneCumulativa += rivalutazioneAnno;
    }

    const capitaleRivalutato = capitale + rivalutazioneCumulativa;

    let interessiAnno = 0;
    let tassoMedio = 0;
    if (modo !== "solo-rivalutazione") {
      let cursor = new Date(inizioAnno);
      const endOfYear = new Date(fineAnno);
      let totGiorni = 0;
      while (cursor < endOfYear) {
        const tasso = getTassoPerData(cursor);
        let finePeriodo = new Date(endOfYear);
        for (const t of tassiStorici) {
          const d = new Date(t.dal);
          if (d > cursor && d < finePeriodo) {
            finePeriodo = d;
            break;
          }
        }
        const giorni = diffGiorni(cursor, finePeriodo);
        if (giorni > 0) {
          const capitalePerInteressi = modo === "solo-interessi" ? capitale : capitaleRivalutato;
          interessiAnno += (capitalePerInteressi * tasso * giorni) / 36500;
          tassoMedio += tasso * giorni;
          totGiorni += giorni;
        }
        cursor = new Date(finePeriodo);
      }
      tassoMedio = totGiorni > 0 ? tassoMedio / totGiorni : 0;
      interessiTotali += interessiAnno;
    }

    dettaglio.push({
      anno,
      dal: inizioAnno.toISOString().slice(0, 10),
      al: fineAnno.toISOString().slice(0, 10),
      capitaleInizioAnno: Math.round((capitale + (rivalutazioneCumulativa - rivalutazioneAnno)) * 100) / 100,
      variazioneFOI: variazione,
      rivalutazioneAnno: Math.round(rivalutazioneAnno * 100) / 100,
      capitaleRivalutato: Math.round(capitaleRivalutato * 100) / 100,
      tassoInteresse: Math.round(tassoMedio * 1000) / 1000,
      giorniInteresse: giorniEffettivi,
      interessiAnno: Math.round(interessiAnno * 100) / 100,
    });
  }

  const capitaleFinale = capitale + rivalutazioneCumulativa;
  return {
    capitaleIniziale: capitale,
    capitaleRivalutato: Math.round(capitaleFinale * 100) / 100,
    rivalutazioneTotale: Math.round(rivalutazioneCumulativa * 100) / 100,
    interessiTotali: Math.round(interessiTotali * 100) / 100,
    totaleComplessivo: Math.round((capitaleFinale + interessiTotali) * 100) / 100,
    percentualeRivalutazione: Math.round((rivalutazioneCumulativa / capitale) * 10000) / 100,
    dettaglio,
  };
}

export const normativaRiferimento: NormativaRiferimento[] = [
  {
    norma: "Art. 1224 Codice Civile",
    descrizione: "Danni nelle obbligazioni pecuniarie: interessi moratori e risarcimento del maggior danno da svalutazione",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1224",
  },
  {
    norma: "Art. 1277 Codice Civile",
    descrizione: "Principio nominalistico: i debiti pecuniari si estinguono per il valore nominale della moneta",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1277",
  },
  {
    norma: "Art. 1284 Codice Civile",
    descrizione: "Saggio degli interessi legali: determinazione annuale dal MEF (2026: 1,60%)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284",
  },
  {
    norma: "Art. 429, comma 3, c.p.c.",
    descrizione: "Crediti di lavoro: rivalutazione automatica e interessi legali dal giorno della maturazione del diritto",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1973-10-11;533~art429",
  },
  {
    norma: "Art. 2120 Codice Civile",
    descrizione: "TFR: rivalutazione annuale con tasso fisso 1,5% + 75% variazione FOI ISTAT",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120",
  },
  {
    norma: "L. 27 luglio 1978, n. 392",
    descrizione: "Equo canone: aggiornamento ISTAT del canone di locazione (art. 32, max 75% variazione FOI)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1978-07-27;392",
  },
  {
    norma: "L. 1° dicembre 1970, n. 898",
    descrizione: "Divorzio: adeguamento automatico dell'assegno con riferimento agli indici ISTAT (art. 5, comma 7)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1970-12-01;898",
  },
  {
    norma: "Art. 1283 Codice Civile",
    descrizione: "Anatocismo: divieto di capitalizzazione degli interessi salvo domanda giudiziale o usi normativi",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1283",
  },
  {
    norma: "DM Economia 10 dicembre 2025",
    descrizione: "Tasso di interesse legale per il 2026 fissato all'1,60% in ragione d'anno",
    url: "https://www.gazzettaufficiale.it/eli/id/2025/12/13/25A06705/sg",
  },
];

export const sections: ToolSection[] = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "cose-la-rivalutazione", label: "Cos'è la Rivalutazione" },
  { id: "come-si-calcola", label: "Come si Calcola" },
  { id: "indici-istat", label: "Indici ISTAT FOI" },
  { id: "tabella-tassi", label: "Tabella Tassi Interesse" },
  { id: "rivalutazione-interessi", label: "Rivalutazione e Interessi" },
  { id: "debiti-valuta-valore", label: "Debiti di Valuta vs Valore" },
  { id: "applicazioni", label: "Applicazioni Pratiche" },
  { id: "errori-comuni", label: "Errori Comuni" },
  { id: "novita-2026", label: "Novità 2026" },
  { id: "fonti", label: "Fonti e Riferimenti" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];
