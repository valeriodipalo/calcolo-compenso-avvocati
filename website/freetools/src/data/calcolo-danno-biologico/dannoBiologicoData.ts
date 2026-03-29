// Dati per il calcolo del danno biologico
// Fonti: Art. 139 CdA (micropermanenti), Tabelle Milano 2024, TUN D.P.R. 12/2025, D.Lgs. 38/2000 (INAIL)

import type { NormativaRiferimento } from "@/types/tool";

// ============================================================
// Sezioni sidebar
// ============================================================
export const sections = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "definizione", label: "Cos'è il Danno Biologico" },
  { id: "micropermanenti", label: "Micropermanenti" },
  { id: "macropermanenti", label: "Macropermanenti" },
  { id: "tabella-unica-nazionale", label: "TUN 2025" },
  { id: "invalidita-temporanea", label: "Invalidità Temporanea" },
  { id: "danno-morale", label: "Danno Morale" },
  { id: "inail", label: "INAIL" },
  { id: "tabelle", label: "Tabelle di Riferimento" },
  { id: "fonti", label: "Fonti e Riferimenti" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];

// ============================================================
// Normativa di riferimento
// ============================================================
export const normativaRiferimento: NormativaRiferimento[] = [
  {
    norma: "Art. 2059 Codice Civile",
    descrizione:
      "Risarcimento del danno non patrimoniale: risarcibile solo nei casi determinati dalla legge",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059",
  },
  {
    norma: "D.Lgs. 7 settembre 2005, n. 209 (Codice Assicurazioni)",
    descrizione:
      "Art. 138: danno biologico per lesioni di non lieve entità (macropermanenti). Art. 139: danno biologico per lesioni di lieve entità (micropermanenti 1-9%)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209",
  },
  {
    norma: "D.P.R. 13 gennaio 2025, n. 12",
    descrizione:
      "Tabella Unica Nazionale per il risarcimento del danno non patrimoniale da macropermanenti (in vigore dal 5 marzo 2025)",
    url: "https://www.gazzettaufficiale.it/eli/id/2025/02/18/25G00019/SG",
  },
  {
    norma: "Tabelle Milano 2024 — Prot. P.7646_24",
    descrizione:
      "Criteri orientativi per la liquidazione del danno non patrimoniale del Tribunale di Milano",
    url: "https://tribunale-milano.giustizia.it/cmsresources/cms/documents/P._7646_24.pdf",
  },
  {
    norma: "D.M. 18 luglio 2025 (aggiornamento ISTAT micropermanenti)",
    descrizione:
      "Aggiornamento annuale del punto base micropermanenti e dell'ITT giornaliero per l'anno 2026",
    url: "https://www.gazzettaufficiale.it/eli/id/2025/07/18/25A04567/SG",
  },
  {
    norma: "D.Lgs. 23 febbraio 2000, n. 38",
    descrizione:
      "Disposizioni in materia di assicurazione contro gli infortuni sul lavoro e le malattie professionali (sistema INAIL danno biologico)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38",
  },
  {
    norma: "L. 8 marzo 2017, n. 24 (Legge Gelli-Bianco)",
    descrizione:
      "Art. 7, comma 4: applicazione delle tabelle del CdA alla responsabilità sanitaria",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-03-08;24",
  },
];

// ============================================================
// Interfaces
// ============================================================

export interface MicropermanentiConfig {
  puntoBase2024: number;
  puntoBase2026: number;
  ittGiornaliero2024: number;
  ittGiornaliero2026: number;
  personalizzazioneMax: number;
}

export interface MilanoConfig {
  puntoBiologico: number;
  incrementoSofferenza: number;
  totalePunto: number;
  ittGiornaliero100: number;
  ittBiologico: number;
  ittSofferenza: number;
  personalizzazioneMax: number;
}

export interface TUNConfig {
  valoreBasePunto: number;
  ittGiornaliero: number;
  personalizzazioneMax: number;
  inVigoreDal: string;
}

export interface INAILConfig {
  franchigiaMax: number;
  capitaleMin: number;
  capitaleMax: number;
  renditaMin: number;
}

export interface CoefficienteMoltiplicatore {
  punti: number;
  coefficiente: number;
}

export interface RisultatoCalcolo {
  dannoPermanente: number;
  dannoTemporaneo: number;
  personalizzazioneImporto: number;
  totale: number;
  dettaglio: {
    puntoBase: number;
    coefficiente: number;
    demoltiplicatoreEta: number;
    ittGiornaliero: number;
    giorniITT: number;
    giorniITP: number;
    percentualeITP: number;
    personalizzazionePercentuale: number;
    personalizzazioneMaxConsentita: number;
    modalita: string;
  };
}

export interface TabellaRigaMicropermanenti {
  punti: number;
  coefficiente: number;
  valorePunto2024: number;
  valorePunto2026: number;
  importo2024Eta30: number;
  importo2026Eta30: number;
}

export interface TabellaRigaMilano {
  punti: number;
  biologico: number;
  sofferenza: number;
  totale: number;
}

export interface TabellaRigaINAIL {
  fascia: string;
  percentuale: string;
  tipologia: string;
  descrizione: string;
}

// ============================================================
// Micropermanenti (Art. 139 CdA)
// ============================================================
export const micropermanentiData: MicropermanentiConfig = {
  puntoBase2024: 947.3,
  puntoBase2026: 963.4,
  ittGiornaliero2024: 55.45,
  ittGiornaliero2026: 56.18,
  personalizzazioneMax: 20,
};

// ============================================================
// Coefficienti moltiplicatori micropermanenti (Art. 139 CdA)
// ============================================================
export const coefficientiMoltiplicatori: CoefficienteMoltiplicatore[] = [
  { punti: 1, coefficiente: 1.0 },
  { punti: 2, coefficiente: 1.1 },
  { punti: 3, coefficiente: 1.2 },
  { punti: 4, coefficiente: 1.3 },
  { punti: 5, coefficiente: 1.5 },
  { punti: 6, coefficiente: 1.7 },
  { punti: 7, coefficiente: 1.9 },
  { punti: 8, coefficiente: 2.1 },
  { punti: 9, coefficiente: 2.3 },
];

// ============================================================
// Tabelle Milano 2024
// ============================================================
export const milanoData: MilanoConfig = {
  puntoBiologico: 1393.28,
  incrementoSofferenza: 348.32,
  totalePunto: 1741.6,
  ittGiornaliero100: 115.0,
  ittBiologico: 84.0,
  ittSofferenza: 31.0,
  personalizzazioneMax: 50,
};

// ============================================================
// TUN 2025 (D.P.R. 12/2025)
// ============================================================
export const tunData: TUNConfig = {
  valoreBasePunto: 947.3,
  ittGiornaliero: 39.37,
  personalizzazioneMax: 30,
  inVigoreDal: "2025-03-05",
};

// ============================================================
// INAIL (D.Lgs. 38/2000)
// ============================================================
export const inailData: INAILConfig = {
  franchigiaMax: 5,
  capitaleMin: 6,
  capitaleMax: 15,
  renditaMin: 16,
};

// ============================================================
// Demoltiplicatore età (Art. 139 CdA)
// Riduzione dello 0.5% per ogni anno di età a partire dall'11°
// ============================================================
export function calcolaDemoltiplicatoreEta(eta: number): number {
  if (eta <= 10) return 1.0;
  const anniOltre10 = eta - 10;
  const riduzione = anniOltre10 * 0.005;
  return Math.max(0.1, 1.0 - riduzione);
}

// ============================================================
// Funzione di calcolo principale
// ============================================================
export function calcolaDannoBiologico(params: {
  modalita: "micropermanenti" | "milano" | "tun";
  punti: number;
  eta: number;
  giorniITT: number;
  giorniITP: number;
  percentualeITP: number;
  personalizzazione: number;
}): RisultatoCalcolo {
  const {
    modalita,
    punti,
    eta,
    giorniITT,
    giorniITP,
    percentualeITP,
    personalizzazione,
  } = params;

  let dannoPermanente = 0;
  let dannoTemporaneo = 0;
  let personalizzazioneImporto = 0;
  let puntoBase = 0;
  let coefficiente = 1;
  let demoltiplicatore = 1;
  let ittGiornaliero = 0;
  let personalizzazioneMax = 0;

  switch (modalita) {
    case "micropermanenti": {
      // Formula Art. 139 CdA:
      // Danno permanente = puntoBase * coefficienteMoltiplicatore * punti * demoltiplicatoreEtà
      puntoBase = micropermanentiData.puntoBase2026;
      ittGiornaliero = micropermanentiData.ittGiornaliero2026;
      personalizzazioneMax = micropermanentiData.personalizzazioneMax;

      const puntiClamped = Math.min(Math.max(punti, 1), 9);
      const coeff = coefficientiMoltiplicatori.find(
        (c) => c.punti === puntiClamped
      );
      coefficiente = coeff ? coeff.coefficiente : 1.0;
      demoltiplicatore = calcolaDemoltiplicatoreEta(eta);

      dannoPermanente =
        puntoBase * coefficiente * puntiClamped * demoltiplicatore;
      break;
    }

    case "milano": {
      // Tabelle Milano 2024:
      // Danno permanente = totalePunto * punti (punto variabile in base alla gravità)
      puntoBase = milanoData.totalePunto;
      ittGiornaliero = milanoData.ittGiornaliero100;
      personalizzazioneMax = milanoData.personalizzazioneMax;
      coefficiente = 1;
      demoltiplicatore = 1;

      dannoPermanente = puntoBase * punti;
      break;
    }

    case "tun": {
      // TUN 2025 (D.P.R. 12/2025):
      // Danno permanente = valoreBasePunto * punti
      puntoBase = tunData.valoreBasePunto;
      ittGiornaliero = tunData.ittGiornaliero;
      personalizzazioneMax = tunData.personalizzazioneMax;
      coefficiente = 1;
      demoltiplicatore = 1;

      dannoPermanente = puntoBase * punti;
      break;
    }
  }

  // Danno temporaneo: ITT + ITP
  const importoITT = ittGiornaliero * giorniITT;
  const importoITP = ittGiornaliero * giorniITP * (percentualeITP / 100);
  dannoTemporaneo = importoITT + importoITP;

  // Personalizzazione (capped al massimo consentito)
  const personalizzazioneCapped = Math.min(
    personalizzazione,
    personalizzazioneMax
  );
  const baseLordoPersonalizzabile = dannoPermanente + dannoTemporaneo;
  personalizzazioneImporto =
    baseLordoPersonalizzabile * (personalizzazioneCapped / 100);

  const totale = dannoPermanente + dannoTemporaneo + personalizzazioneImporto;

  return {
    dannoPermanente: Math.round(dannoPermanente * 100) / 100,
    dannoTemporaneo: Math.round(dannoTemporaneo * 100) / 100,
    personalizzazioneImporto:
      Math.round(personalizzazioneImporto * 100) / 100,
    totale: Math.round(totale * 100) / 100,
    dettaglio: {
      puntoBase,
      coefficiente,
      demoltiplicatoreEta: demoltiplicatore,
      ittGiornaliero,
      giorniITT,
      giorniITP,
      percentualeITP,
      personalizzazionePercentuale: personalizzazioneCapped,
      personalizzazioneMaxConsentita: personalizzazioneMax,
      modalita,
    },
  };
}

// ============================================================
// Tabella micropermanenti (per display)
// ============================================================
export const tabellaMicropermanenti: TabellaRigaMicropermanenti[] =
  coefficientiMoltiplicatori.map((c) => {
    const demo30 = calcolaDemoltiplicatoreEta(30);
    return {
      punti: c.punti,
      coefficiente: c.coefficiente,
      valorePunto2024:
        Math.round(
          micropermanentiData.puntoBase2024 * c.coefficiente * 100
        ) / 100,
      valorePunto2026:
        Math.round(
          micropermanentiData.puntoBase2026 * c.coefficiente * 100
        ) / 100,
      importo2024Eta30:
        Math.round(
          micropermanentiData.puntoBase2024 *
            c.coefficiente *
            c.punti *
            demo30 *
            100
        ) / 100,
      importo2026Eta30:
        Math.round(
          micropermanentiData.puntoBase2026 *
            c.coefficiente *
            c.punti *
            demo30 *
            100
        ) / 100,
    };
  });

// ============================================================
// Tabella Milano 2024 (per display)
// ============================================================
export const tabellaMilano2024: TabellaRigaMilano[] = [
  {
    punti: 1,
    biologico: 1393.28,
    sofferenza: 348.32,
    totale: 1741.6,
  },
  {
    punti: 5,
    biologico: 6966.4,
    sofferenza: 1741.6,
    totale: 8708.0,
  },
  {
    punti: 10,
    biologico: 13932.8,
    sofferenza: 3483.2,
    totale: 17416.0,
  },
  {
    punti: 20,
    biologico: 27865.6,
    sofferenza: 6966.4,
    totale: 34832.0,
  },
  {
    punti: 30,
    biologico: 41798.4,
    sofferenza: 10449.6,
    totale: 52248.0,
  },
  {
    punti: 50,
    biologico: 69664.0,
    sofferenza: 17416.0,
    totale: 87080.0,
  },
  {
    punti: 70,
    biologico: 97529.6,
    sofferenza: 24382.4,
    totale: 121912.0,
  },
  {
    punti: 100,
    biologico: 139328.0,
    sofferenza: 34832.0,
    totale: 174160.0,
  },
];

// ============================================================
// Tabella INAIL (per display)
// ============================================================
export const tabellaINAIL: TabellaRigaINAIL[] = [
  {
    fascia: "Franchigia",
    percentuale: "1% – 5%",
    tipologia: "Nessun indennizzo",
    descrizione:
      "Le menomazioni inferiori al 6% non danno diritto ad alcun indennizzo INAIL per il danno biologico",
  },
  {
    fascia: "Indennizzo in capitale",
    percentuale: "6% – 15%",
    tipologia: "Somma una tantum",
    descrizione:
      "L'INAIL eroga un indennizzo in capitale (somma una tantum) calcolato in base alla Tabella delle menomazioni e ai coefficienti previsti dal D.M. 12 luglio 2000",
  },
  {
    fascia: "Rendita vitalizia",
    percentuale: "16% – 100%",
    tipologia: "Rendita mensile",
    descrizione:
      "Dal 16% di invalidità, l'INAIL eroga una rendita vitalizia composta da una quota per il danno biologico e una quota per le conseguenze patrimoniali",
  },
];
