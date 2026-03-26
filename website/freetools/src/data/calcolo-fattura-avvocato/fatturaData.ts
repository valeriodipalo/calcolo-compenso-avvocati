import type { ToolSection, NormativaRiferimento } from "@/types/tool";

// ============================================================
// Types
// ============================================================

export type RegimeFiscale = "ordinario" | "forfettario";

export interface InputFattura {
  compenso: number;
  speseAnticipate: number; // esenti IVA art. 15 DPR 633/72
  speseImponibili: number; // soggette a IVA
  regime: RegimeFiscale;
  splitPayment: boolean;
  percentualeForfettarie: number; // default 15%
}

export interface RisultatoFattura {
  compenso: number;
  speseForfettarie: number;
  percentualeForfettarie: number;
  cpa: number;
  imponibileIva: number;
  iva: number;
  speseAnticipate: number;
  speseImponibili: number;
  totaleFattura: number;
  ritenuta: number;
  nettoAPagare: number;
  marcaDaBollo: number;
  regime: RegimeFiscale;
  splitPayment: boolean;
}

export interface InputInverso {
  importo: number;
  tipoImporto: "totale" | "netto";
  speseAnticipate: number;
  speseImponibili: number;
  regime: RegimeFiscale;
  splitPayment: boolean;
  percentualeForfettarie: number;
}

// ============================================================
// Constants
// ============================================================

export const ALIQUOTA_FORFETTARIE = 0.15; // 15% - art. 2 DM 55/2014
export const ALIQUOTA_CPA = 0.04; // 4% - L. 247/2012, art. 11
export const ALIQUOTA_IVA = 0.22; // 22% - DPR 633/72, art. 16
export const ALIQUOTA_RITENUTA = 0.20; // 20% - DPR 600/73, art. 25
export const SOGLIA_BOLLO = 77.47; // €77,47 - DPR 642/72
export const IMPORTO_BOLLO = 2.0; // €2,00

// ============================================================
// Calcolo Diretto (Forward)
// ============================================================

export function calcolaFattura(input: InputFattura): RisultatoFattura {
  const {
    compenso,
    speseAnticipate,
    speseImponibili,
    regime,
    splitPayment,
    percentualeForfettarie,
  } = input;

  const percForf = percentualeForfettarie / 100;
  const speseForfettarie = compenso * percForf;
  const cpa = (compenso + speseForfettarie) * ALIQUOTA_CPA;

  if (regime === "ordinario") {
    const imponibileIva = compenso + speseForfettarie + cpa + speseImponibili;
    const iva = imponibileIva * ALIQUOTA_IVA;
    const totaleFattura = imponibileIva + iva + speseAnticipate;

    // Ritenuta: 20% su compenso + spese forfettarie
    const baseRitenuta = compenso + speseForfettarie;
    const ritenuta = baseRitenuta * ALIQUOTA_RITENUTA;

    // Split payment: IVA versata direttamente dalla PA
    const nettoAPagare = splitPayment
      ? totaleFattura - iva - ritenuta
      : totaleFattura - ritenuta;

    return {
      compenso,
      speseForfettarie,
      percentualeForfettarie,
      cpa,
      imponibileIva,
      iva,
      speseAnticipate,
      speseImponibili,
      totaleFattura,
      ritenuta,
      nettoAPagare,
      marcaDaBollo: 0,
      regime,
      splitPayment,
    };
  }

  // Regime forfettario: no IVA, no ritenuta
  const imponibileIva = 0;
  const iva = 0;
  const ritenuta = 0;
  const totaleSenzaBollo = compenso + speseForfettarie + cpa + speseImponibili + speseAnticipate;
  const marcaDaBollo = totaleSenzaBollo > SOGLIA_BOLLO ? IMPORTO_BOLLO : 0;
  const totaleFattura = totaleSenzaBollo + marcaDaBollo;

  return {
    compenso,
    speseForfettarie,
    percentualeForfettarie,
    cpa,
    imponibileIva,
    iva,
    speseAnticipate,
    speseImponibili,
    totaleFattura,
    ritenuta,
    nettoAPagare: totaleFattura,
    marcaDaBollo,
    regime,
    splitPayment: false,
  };
}

// ============================================================
// Calcolo Inverso (Reverse / Scorporo)
// ============================================================

export function calcolaInverso(input: InputInverso): RisultatoFattura {
  const {
    importo,
    tipoImporto,
    speseAnticipate,
    speseImponibili,
    regime,
    splitPayment,
    percentualeForfettarie,
  } = input;

  const percForf = percentualeForfettarie / 100;

  if (regime === "ordinario") {
    // Factor: compenso × (1 + percForf) × (1 + CPA) = base before IVA (minus speseImponibili)
    // Imponibile = compenso × (1+percForf) × (1+CPA) + speseImponibili
    // IVA = Imponibile × 0.22
    // Totale = Imponibile × 1.22 + speseAnticipate
    // Ritenuta = compenso × (1+percForf) × 0.20
    // Netto = Totale - Ritenuta (or Totale - IVA - Ritenuta for split)

    const k = (1 + percForf) * (1 + ALIQUOTA_CPA); // multiplier from compenso to base

    if (tipoImporto === "totale") {
      // Totale = (compenso × k + speseImponibili) × (1 + IVA) + speseAnticipate
      // compenso × k = (Totale - speseAnticipate) / (1+IVA) - speseImponibili
      const imponibile = (importo - speseAnticipate) / (1 + ALIQUOTA_IVA);
      const compensoK = imponibile - speseImponibili;
      const compenso = compensoK / k;

      return calcolaFattura({
        compenso: Math.max(0, compenso),
        speseAnticipate,
        speseImponibili,
        regime,
        splitPayment,
        percentualeForfettarie,
      });
    }

    // tipoImporto === "netto"
    // Netto = Totale - Ritenuta
    // Netto = (compenso×k + speseImponibili)×1.22 + speseAnticipate - compenso×(1+percForf)×0.20
    // If split: Netto = (compenso×k + speseImponibili)×1.22 + speseAnticipate - IVA - Ritenuta
    //         = (compenso×k + speseImponibili) + speseAnticipate - compenso×(1+percForf)×0.20

    if (splitPayment) {
      // Netto = (compenso×k + speseImponibili) + speseAnticipate - compenso×(1+percForf)×0.20
      // Netto - speseAnticipate - speseImponibili = compenso × (k - (1+percForf)×0.20)
      const factor = k - (1 + percForf) * ALIQUOTA_RITENUTA;
      const compenso = (importo - speseAnticipate - speseImponibili) / factor;
      return calcolaFattura({
        compenso: Math.max(0, compenso),
        speseAnticipate,
        speseImponibili,
        regime,
        splitPayment,
        percentualeForfettarie,
      });
    }

    // No split: Netto = (compenso×k + speseImponibili)×1.22 + speseAnticipate - compenso×(1+percForf)×0.20
    const factorK = k * (1 + ALIQUOTA_IVA) - (1 + percForf) * ALIQUOTA_RITENUTA;
    const compenso = (importo - speseAnticipate - speseImponibili * (1 + ALIQUOTA_IVA)) / factorK;

    return calcolaFattura({
      compenso: Math.max(0, compenso),
      speseAnticipate,
      speseImponibili,
      regime,
      splitPayment,
      percentualeForfettarie,
    });
  }

  // Forfettario inverso: Totale = compenso×(1+percForf)×(1+CPA) + speseImponibili + speseAnticipate + bollo
  // Netto = Totale (no ritenuta in forfettario)
  const k = (1 + percForf) * (1 + ALIQUOTA_CPA);
  // Try without bollo first, then check
  let compenso = (importo - speseAnticipate - speseImponibili) / k;
  const totaleSenzaBollo = compenso * k + speseImponibili + speseAnticipate;
  if (totaleSenzaBollo > SOGLIA_BOLLO) {
    compenso = (importo - speseAnticipate - speseImponibili - IMPORTO_BOLLO) / k;
  }

  return calcolaFattura({
    compenso: Math.max(0, compenso),
    speseAnticipate,
    speseImponibili,
    regime,
    splitPayment: false,
    percentualeForfettarie,
  });
}

// ============================================================
// Normativa di Riferimento
// ============================================================

export const normativaRiferimento: NormativaRiferimento[] = [
  {
    norma: "D.P.R. 26 ottobre 1972, n. 633",
    descrizione:
      "Testo Unico IVA — art. 15 (esclusioni dalla base imponibile per spese anticipate), art. 16 (aliquota 22%), art. 17-ter (split payment PA)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633",
  },
  {
    norma: "D.P.R. 29 settembre 1973, n. 600",
    descrizione:
      "Accertamento imposte sui redditi — art. 25 (ritenuta d'acconto 20% sui compensi professionali)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600",
  },
  {
    norma: "D.M. 10 marzo 2014, n. 55",
    descrizione:
      "Parametri forensi — art. 2 (rimborso spese forfettarie nella misura del 15% del compenso totale)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55",
  },
  {
    norma: "L. 31 dicembre 2012, n. 247",
    descrizione:
      "Nuova disciplina dell'ordinamento della professione forense — art. 11 (contributo integrativo Cassa Forense 4%)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247",
  },
  {
    norma: "L. 23 dicembre 2014, n. 190",
    descrizione:
      "Regime forfettario — art. 1, commi 54-89 (esclusione IVA, esclusione ritenuta, marca da bollo €2)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190",
  },
  {
    norma: "D.P.R. 26 ottobre 1972, n. 642",
    descrizione:
      "Imposta di bollo — art. 13 (marca da bollo €2 su fatture esenti IVA superiori a €77,47)",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;642",
  },
  {
    norma: "Art. 2233 Codice Civile",
    descrizione:
      "Determinazione del compenso professionale — accordo tra le parti, in mancanza parametri forensi",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262",
  },
];

// ============================================================
// Sections (sidebar navigation)
// ============================================================

export const sections: ToolSection[] = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "cose-fattura", label: "Cos'è la Fattura" },
  { id: "composizione", label: "Composizione" },
  { id: "spese-forfettarie", label: "Spese Forfettarie 15%" },
  { id: "cpa", label: "CPA 4%" },
  { id: "iva", label: "IVA 22%" },
  { id: "ritenuta", label: "Ritenuta 20%" },
  { id: "calcolo-inverso", label: "Calcolo Inverso" },
  { id: "regime-forfettario", label: "Regime Forfettario" },
  { id: "regime-ordinario", label: "Regime Ordinario" },
  { id: "split-payment", label: "Split Payment PA" },
  { id: "marca-bollo", label: "Marca da Bollo" },
  { id: "fattura-elettronica", label: "Fattura Elettronica" },
  { id: "fonti", label: "Fonti" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];
