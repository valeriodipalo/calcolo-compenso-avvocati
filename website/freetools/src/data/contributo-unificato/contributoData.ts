// Dati completi del Contributo Unificato aggiornati al 2026
// Fonte: DPR 115/2002 e successive modificazioni

export interface Scaglione {
  min: number;
  max: number | null; // null = illimitato
  label: string;
  importo: number;
}

// Art. 13 comma 1 DPR 115/2002 - Processo Civile
export const scaglioniCivile: Scaglione[] = [
  { min: 0, max: 1100, label: "Fino a \u20AC 1.100,00", importo: 43 },
  { min: 1100.01, max: 5200, label: "Da \u20AC 1.100,01 a \u20AC 5.200,00", importo: 98 },
  { min: 5200.01, max: 26000, label: "Da \u20AC 5.200,01 a \u20AC 26.000,00", importo: 237 },
  { min: 26000.01, max: 52000, label: "Da \u20AC 26.000,01 a \u20AC 52.000,00", importo: 518 },
  { min: 52000.01, max: 260000, label: "Da \u20AC 52.000,01 a \u20AC 260.000,00", importo: 759 },
  { min: 260000.01, max: 520000, label: "Da \u20AC 260.000,01 a \u20AC 520.000,00", importo: 1214 },
  { min: 520000.01, max: null, label: "Oltre \u20AC 520.000,00", importo: 1686 },
];

// Art. 13 comma 6-quater DPR 115/2002 - Processo Tributario
export const scaglioniTributario: Scaglione[] = [
  { min: 0, max: 2582.28, label: "Fino a \u20AC 2.582,28", importo: 30 },
  { min: 2582.29, max: 5000, label: "Da \u20AC 2.582,29 a \u20AC 5.000,00", importo: 60 },
  { min: 5000.01, max: 25000, label: "Da \u20AC 5.000,01 a \u20AC 25.000,00", importo: 120 },
  { min: 25000.01, max: 75000, label: "Da \u20AC 25.000,01 a \u20AC 75.000,00", importo: 250 },
  { min: 75000.01, max: 200000, label: "Da \u20AC 75.000,01 a \u20AC 200.000,00", importo: 500 },
  { min: 200000.01, max: null, label: "Oltre \u20AC 200.000,00", importo: 1500 },
];

// Art. 13 comma 6-bis DPR 115/2002 - Processo Amministrativo (Appalti)
export const scaglioniAmministrativoAppalti: Scaglione[] = [
  { min: 0, max: 200000, label: "Fino a \u20AC 200.000,00", importo: 2000 },
  { min: 200000.01, max: 1000000, label: "Da \u20AC 200.000,01 a \u20AC 1.000.000,00", importo: 4000 },
  { min: 1000000.01, max: null, label: "Oltre \u20AC 1.000.000,00", importo: 6000 },
];

export type TipoProcesso = "civile" | "tributario" | "amministrativo" | "amministrativo_appalti";
export type GradoGiudizio = "primo" | "impugnazione" | "cassazione";
export type TipoValore = "determinato" | "indeterminabile" | "non_indicato";

export interface RisultatoCalcolo {
  importoBase: number;
  importoFinale: number;
  scaglione: string;
  note: string[];
  riferimentoNormativo: string;
}

export function calcolaContributo(
  tipoProcesso: TipoProcesso,
  gradoGiudizio: GradoGiudizio,
  tipoValore: TipoValore,
  valore: number,
  riduzione50: boolean
): RisultatoCalcolo {
  let importoBase = 0;
  let scaglione = "";
  const note: string[] = [];
  let riferimento = "";

  if (tipoProcesso === "civile") {
    if (tipoValore === "indeterminabile") {
      importoBase = 518;
      scaglione = "Valore indeterminabile";
      riferimento = "Art. 13, c. 1, lett. d), DPR 115/2002";
    } else if (tipoValore === "non_indicato") {
      importoBase = 1686;
      scaglione = "Valore non indicato (scaglione massimo)";
      riferimento = "Art. 13, c. 6, DPR 115/2002";
      note.push("In caso di mancata dichiarazione di valore si applica lo scaglione massimo.");
    } else {
      const s = scaglioniCivile.find(
        (s) => valore >= s.min && (s.max === null || valore <= s.max)
      );
      if (s) {
        importoBase = s.importo;
        scaglione = s.label;
        riferimento = "Art. 13, c. 1, DPR 115/2002";
      }
    }

    let moltiplicatore = 1;
    if (gradoGiudizio === "impugnazione") {
      moltiplicatore = 1.5;
      note.push("Importo aumentato del 50% per giudizio di impugnazione (art. 13, c. 1-bis).");
    } else if (gradoGiudizio === "cassazione") {
      moltiplicatore = 2;
      note.push("Importo raddoppiato per ricorso in Cassazione (art. 13, c. 1-bis).");
    }

    let importoFinale = importoBase * moltiplicatore;

    if (riduzione50 && tipoValore === "determinato") {
      importoFinale = importoFinale / 2;
      note.push("Riduzione del 50% applicata (art. 13, c. 3, DPR 115/2002).");
    }

    return {
      importoBase,
      importoFinale: Math.round(importoFinale * 100) / 100,
      scaglione,
      note,
      riferimentoNormativo: riferimento,
    };
  }

  if (tipoProcesso === "tributario") {
    if (tipoValore === "indeterminabile") {
      importoBase = 120;
      scaglione = "Valore indeterminabile";
      riferimento = "Art. 13, c. 6-quater, lett. c), DPR 115/2002";
    } else if (tipoValore === "non_indicato") {
      importoBase = 1500;
      scaglione = "Valore non indicato (importo massimo)";
      riferimento = "Art. 13, c. 6-quater, DPR 115/2002";
      note.push("In caso di mancata dichiarazione di valore si applica l'importo massimo.");
    } else {
      const s = scaglioniTributario.find(
        (s) => valore >= s.min && (s.max === null || valore <= s.max)
      );
      if (s) {
        importoBase = s.importo;
        scaglione = s.label;
        riferimento = "Art. 13, c. 6-quater, DPR 115/2002";
      }
    }

    if (gradoGiudizio === "cassazione") {
      if (tipoValore === "determinato") {
        const sc = scaglioniCivile.find(
          (s) => valore >= s.min && (s.max === null || valore <= s.max)
        );
        if (sc) {
          importoBase = sc.importo * 2;
          scaglione = sc.label + " (importi processo civile)";
        }
      } else {
        importoBase = 1686 * 2;
        scaglione = "Cassazione tributaria (importi processo civile)";
      }
      riferimento = "Art. 261, DPR 115/2002";
      note.push("Per il ricorso in Cassazione in materia tributaria si applicano gli importi del processo civile raddoppiati (art. 261 DPR 115/2002).");
    }

    return {
      importoBase: tipoProcesso === "tributario" && gradoGiudizio !== "cassazione" ? importoBase : importoBase / 2,
      importoFinale: importoBase,
      scaglione,
      note,
      riferimentoNormativo: riferimento,
    };
  }

  if (tipoProcesso === "amministrativo_appalti") {
    if (tipoValore === "indeterminabile" || tipoValore === "non_indicato") {
      importoBase = 2000;
      scaglione = "Valore indeterminabile/non indicato";
      riferimento = "Art. 13, c. 6-bis, DPR 115/2002";
    } else {
      const s = scaglioniAmministrativoAppalti.find(
        (s) => valore >= s.min && (s.max === null || valore <= s.max)
      );
      if (s) {
        importoBase = s.importo;
        scaglione = s.label;
        riferimento = "Art. 13, c. 6-bis, DPR 115/2002";
      }
    }

    let moltiplicatore = 1;
    if (gradoGiudizio === "impugnazione") {
      moltiplicatore = 1.5;
      note.push("Importo aumentato del 50% per giudizio di impugnazione.");
    } else if (gradoGiudizio === "cassazione") {
      moltiplicatore = 2;
      note.push("Importo raddoppiato per ricorso in Cassazione.");
    }

    return {
      importoBase,
      importoFinale: importoBase * moltiplicatore,
      scaglione,
      note,
      riferimentoNormativo: riferimento,
    };
  }

  // Amministrativo generico (importo fisso)
  importoBase = 650;
  scaglione = "Importo fisso";
  riferimento = "Art. 13, c. 6-bis, DPR 115/2002";

  let moltiplicatore = 1;
  if (gradoGiudizio === "impugnazione") {
    moltiplicatore = 1.5;
    note.push("Importo aumentato del 50% per giudizio di impugnazione.");
  } else if (gradoGiudizio === "cassazione") {
    moltiplicatore = 2;
    note.push("Importo raddoppiato per ricorso in Cassazione.");
  }

  return {
    importoBase,
    importoFinale: importoBase * moltiplicatore,
    scaglione,
    note,
    riferimentoNormativo: riferimento,
  };
}

export const procedimentiEsenti = [
  { procedimento: "Interdizione e inabilitazione", riferimento: "Art. 10, c. 3, DPR 115/2002" },
  { procedimento: "Amministrazione di sostegno", riferimento: "Art. 10, c. 3, DPR 115/2002" },
  { procedimento: "Procedimenti relativi a minori, interdetti e inabilitati", riferimento: "Art. 10, c. 3, DPR 115/2002" },
  { procedimento: "Assenza e dichiarazione di morte presunta", riferimento: "Art. 10, c. 3, DPR 115/2002" },
  { procedimento: "Rettifica dello stato civile", riferimento: "Art. 10, c. 1, DPR 115/2002" },
  { procedimento: "Integrazione scolastica (handicap fisici o sensoriali)", riferimento: "Art. 10, c. 1, DPR 115/2002" },
  { procedimento: "Materia tavolare", riferimento: "Art. 10, c. 1, DPR 115/2002" },
  { procedimento: "Equa riparazione (Legge Pinto - L. 89/2001)", riferimento: "Art. 10, c. 1, DPR 115/2002" },
  { procedimento: "Assegni per il mantenimento della prole (anche esecutivo, opposizione e cautelare)", riferimento: "Art. 10, c. 2, DPR 115/2002" },
  { procedimento: "Azione civile in sede penale (condanna generica)", riferimento: "Art. 12, c. 1, DPR 115/2002" },
  { procedimento: "Insinuazione tempestiva e tardiva al passivo fallimentare", riferimento: "Circ. Min. Giustizia 3/2002" },
  { procedimento: "Controversie individuali di lavoro (reddito < \u20AC 40.978,92)", riferimento: "Art. 9, c. 1-bis, DPR 115/2002" },
  { procedimento: "Controversie previdenza e assistenza obbligatorie (reddito < \u20AC 40.978,92)", riferimento: "Art. 9, c. 1-bis, DPR 115/2002" },
  { procedimento: "Esecuzione di sentenze/ordinanze relative a giudizi di lavoro", riferimento: "Circ. Min. Giustizia 10/2012" },
  { procedimento: "Ordini di protezione contro abusi familiari", riferimento: "Art. 10, DPR 115/2002" },
  { procedimento: "Responsabilità genitoriale figli nati fuori dal matrimonio", riferimento: "Circ. Min. Giustizia 19/12/2024" },
  { procedimento: "Modifica condizioni separazione/divorzio relativa solo alla prole", riferimento: "Circ. Min. Giustizia 19/12/2024" },
  { procedimento: "Ricerca telematica beni da pignorare (post notifica titolo e precetto)", riferimento: "Art. 13, c. 1-quinquies, DPR 115/2002" },
];

export const procedimentiFissi = [
  { procedimento: "Separazione/divorzio giudiziale (contenzioso)", importo: 98, nota: "No marca \u20AC 27", riferimento: "Art. 13, c. 1, lett. b)" },
  { procedimento: "Separazione consensuale/divorzio congiunto", importo: 43, nota: "No marca \u20AC 27", riferimento: "Art. 13, c. 1, lett. a)" },
  { procedimento: "Cumulo separazione + divorzio (congiunto)", importo: 86, nota: "\u20AC 43 + \u20AC 43", riferimento: "Art. 473-bis.49 c.p.c." },
  { procedimento: "Cumulo separazione + divorzio (contenzioso)", importo: 196, nota: "\u20AC 98 + \u20AC 98", riferimento: "Art. 473-bis.49 c.p.c." },
  { procedimento: "Modifica condizioni separazione/divorzio (contenzioso)", importo: 98, nota: "No marca \u20AC 27", riferimento: "Art. 13, c. 1, lett. b)" },
  { procedimento: "Modifica condizioni separazione/divorzio (congiunta)", importo: 43, nota: "No marca \u20AC 27", riferimento: "Art. 13, c. 1, lett. a)" },
  { procedimento: "Volontaria giurisdizione", importo: 98, nota: "", riferimento: "Art. 13, c. 1, lett. b)" },
  { procedimento: "Esecuzione immobiliare", importo: 278, nota: "", riferimento: "Art. 13, c. 2" },
  { procedimento: "Esecuzione mobiliare (valore < \u20AC 2.500)", importo: 43, nota: "", riferimento: "Art. 13, c. 2" },
  { procedimento: "Esecuzione mobiliare (valore \u2265 \u20AC 2.500)", importo: 139, nota: "", riferimento: "Art. 13, c. 2" },
  { procedimento: "Esecuzione per consegna/rilascio/fare/non fare", importo: 139, nota: "", riferimento: "Art. 13, c. 2" },
  { procedimento: "Opposizione atti esecutivi", importo: 168, nota: "", riferimento: "Art. 13, c. 2" },
  { procedimento: "Ricerca telematica beni (pre-precetto)", importo: 43, nota: "No marca \u20AC 27", riferimento: "Art. 13, c. 1-quinquies" },
  { procedimento: "Pubblicità portale vendite pubbliche", importo: 100, nota: "Per ciascun lotto", riferimento: "Art. 18-bis" },
  { procedimento: "Istanza di fallimento / liquidazione giudiziale", importo: 98, nota: "", riferimento: "Art. 13, c. 1, lett. b)" },
  { procedimento: "Procedura fallimentare (dalla sentenza alla chiusura)", importo: 851, nota: "", riferimento: "Art. 13, c. 5" },
  { procedimento: "Previdenza e assistenza (reddito > \u20AC 40.978,92)", importo: 43, nota: "Misura fissa", riferimento: "Art. 9, c. 1-bis" },
  { procedimento: "Ricorso al TAR e Consiglio di Stato", importo: 650, nota: "", riferimento: "Art. 13, c. 6-bis" },
  { procedimento: "Ricorso straordinario al Presidente della Repubblica", importo: 650, nota: "", riferimento: "Art. 13, c. 6-bis" },
  { procedimento: "Ricorso esecuzione/ottemperanza (amm.vo)", importo: 300, nota: "", riferimento: "Art. 13, c. 6-bis" },
  { procedimento: "Riti abbreviati (Titolo V, Libro IV CPA)", importo: 1800, nota: "", riferimento: "Art. 13, c. 6-bis" },
  { procedimento: "Accesso atti e silenzio PA", importo: 300, nota: "", riferimento: "Art. 13, c. 6-bis" },
];

export const normativaRiferimento = [
  { norma: "D.P.R. 30 maggio 2002, n. 115", descrizione: "Testo Unico delle disposizioni legislative e regolamentari in materia di spese di giustizia (artt. 9-18)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115" },
  { norma: "D.L. 132/2014", descrizione: "Decreto giustizia, conv. L. 162/2014 (art. 19, c. 1, lett. d)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132" },
  { norma: "D.L. 90/2014", descrizione: "Misure urgenti per la semplificazione, conv. L. 114/2014 (art. 53)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-06-24;90!vig=" },
  { norma: "L. 147/2013", descrizione: "Legge di stabilità 2014 (art. 1, c. 598, lett. a)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2013-12-27;147!vig=" },
  { norma: "L. 228/2012", descrizione: "Legge di stabilità 2013 (art. 1, cc. 17, 25, 27)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-24-12;228!vig=" },
  { norma: "D.L. 98/2011", descrizione: "Stabilizzazione finanziaria, conv. L. 111/2011 (art. 37)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2011-07-06;98" },
  { norma: "D.Lgs. 149/2022", descrizione: "Riforma Cartabia - Riforma del processo civile", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149" },
  { norma: "D.Lgs. 164/2024", descrizione: "Modifiche al codice di procedura civile", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-10-31;164" },
  { norma: "L. 207/2024", descrizione: "Legge di bilancio 2025 (art. 14, c. 3.1 e art. 248, c. 3-bis)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2024;207~art1!vig=" },
];

export const circolariMinisteriali = [
  { circolare: "Circ. Min. Giustizia 17/3/2023", descrizione: "Contributo unificato per il procedimento semplificato di cognizione", url: "https://i2.res.24o.it/pdf2010/Editrice/ILSOLE24ORE/QUOTIDIANI_VERTICALI/Online/_Oggetti_Embedded/Documenti/2023/04/13/Min-Giustizia-circolare-17-3-2023-contributo.pdf" },
  { circolare: "Circ. Min. Giustizia 19/3/2024", descrizione: "Riscossione del contributo unificato - pagamento con PagoPA", url: "https://www.giustizia.it/giustizia/it/mg_1_8_1.page?contentId=SDC464940" },
  { circolare: "Circ. Min. Giustizia 27/3/2024", descrizione: "Contributo unificato per le opposizioni a decreto ingiuntivo", url: "https://www.giustizia.it/giustizia/it/mg_1_8_1.page?contentId=SDC466008" },
  { circolare: "Circ. Min. Giustizia 19/12/2024", descrizione: "CU nei procedimenti di separazione, divorzio, responsabilità genitoriale", url: "https://www.giustizia.it/giustizia/it/mg_1_8_1.page?contentId=SDC1453657" },
  { circolare: "Circ. Min. Giustizia 24/3/2025", descrizione: "Nuove disposizioni sull'omesso pagamento del CU (art. 14, c. 3.1)", url: "https://www.giustizia.it/giustizia/it/mg_1_40_0.page?contentId=IGC1450602" },
  { circolare: "Circ. Min. Giustizia 24/4/2025", descrizione: "Iscrizione a ruolo e ammissione al patrocinio a spese dello Stato", url: "https://www.giustizia.it/giustizia/it/mg_1_8_1.page?contentId=SDC1454004" },
];

export const sections = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "cos-e", label: "Cos'è il CU" },
  { id: "tabella", label: "Tabella e Scaglioni" },
  { id: "civile", label: "Processo Civile" },
  { id: "decreto-ingiuntivo", label: "Decreto Ingiuntivo" },
  { id: "riduzione", label: "Riduzione 50%" },
  { id: "aumenti", label: "Aumenti" },
  { id: "tributario", label: "Processo Tributario" },
  { id: "amministrativo", label: "Processo Amm.vo" },
  { id: "esecutivi", label: "Proc. Esecutivi" },
  { id: "pignoramento", label: "Pignoramento" },
  { id: "famiglia", label: "Famiglia" },
  { id: "giudice-di-pace", label: "Giudice di Pace" },
  { id: "fissi", label: "Contributo Fisso" },
  { id: "esenzioni", label: "Esenzioni" },
  { id: "sanzioni", label: "Sanzioni" },
  { id: "pagamento", label: "Pagamento" },
  { id: "rimborso", label: "Rimborso" },
  { id: "novita-2025", label: "Novità 2025" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];
