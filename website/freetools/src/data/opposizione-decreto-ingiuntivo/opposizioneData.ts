import type { NormativaRiferimento, ToolSection } from "@/types/tool";

/* ─── Types ─── */

export type TipoProcedimento =
  | "ordinario"
  | "lavoro"
  | "ue"
  | "extra-ue"
  | "abbreviato"
  | "aumentato";

export interface RisultatoCalcolo {
  /** Data ultima utile per la notifica dell'opposizione */
  dataScadenza: Date;
  /** Giorni residui da oggi alla scadenza */
  giorniRimanenti: number;
  /** True se è stata applicata la sospensione feriale */
  sospensioneApplicata: boolean;
  /** Giorni di sospensione effettivamente applicati */
  giorniSospensionePieno: number;
  /** True se la scadenza è stata prorogata per festivo/sabato */
  prorogaFestivo: boolean;
  /** Data di scadenza prima della proroga per festivo */
  dataOriginale: Date;
  /** Termine base applicato (in giorni) */
  terminiGiorni: number;
  /** Forma dell'atto richiesta */
  formaAtto: "citazione" | "ricorso";
  /** Avvisi e note */
  note: string[];
  /** Data limite per iscrizione a ruolo dell'opponente */
  dataIscrizioneRuolo: Date;
  /** Articolo principale di riferimento */
  articolo: string;
  /** URL Normattiva */
  url: string;
  /** Etichetta del termine */
  label: string;
}

/* ─── Tabelle riepilogative ─── */

export const tabellaTerminiPrincipali = [
  ["Termine ordinario (Italia)", "40 giorni", "Atto di citazione", "Art. 641 c.p.c."],
  ["Crediti di lavoro o rito locatizio", "40 giorni", "Ricorso depositato in cancelleria", "Art. 641 c.p.c. + art. 447-bis"],
  ["Debitore residente in altro Stato UE", "50 giorni (riducibile a 20)", "Atto di citazione", "Art. 641, c. 3, c.p.c."],
  ["Debitore residente in Stato extra-UE", "60 giorni (tra 30 e 120)", "Atto di citazione", "Art. 641, c. 3, c.p.c."],
  ["Termine ridotto per giusti motivi", "10-39 giorni (minimo 10)", "Atto di citazione", "Art. 641, c. 2, c.p.c."],
  ["Termine aumentato per giusti motivi", "41-60 giorni (massimo 60)", "Atto di citazione", "Art. 641, c. 2, c.p.c."],
];

export const tabellaContributoUnificato = [
  ["Fino a 1.100 €", "43 €", "21,50 €"],
  ["1.101 - 5.200 €", "98 €", "49,00 €"],
  ["5.201 - 26.000 €", "237 €", "118,50 €"],
  ["26.001 - 52.000 €", "518 €", "259,00 €"],
  ["52.001 - 260.000 €", "759 €", "379,50 €"],
  ["260.001 - 520.000 €", "1.214 €", "607,00 €"],
  ["Oltre 520.000 €", "1.686 €", "843,00 €"],
  ["Valore indeterminabile", "518 €", "259,00 €"],
];

export const tabellaTerminiCostituzione = [
  ["Iscrizione a ruolo dell'opponente", "10 giorni dalla notifica dell'atto di citazione", "Art. 165 c.p.c."],
  ["Iscrizione a ruolo con termine a comparire abbreviato", "5 giorni dalla notifica", "Art. 165, c. 1, c.p.c."],
  ["Termini liberi tra notifica e udienza (Italia)", "Non meno di 120 giorni", "Art. 163-bis c.p.c."],
  ["Termini liberi tra notifica e udienza (estero)", "Non meno di 150 giorni", "Art. 163-bis c.p.c."],
  ["Costituzione del creditore opposto (comparsa)", "Almeno 70 giorni prima dell'udienza", "Art. 166 c.p.c."],
  ["Decreto di verifiche preliminari del giudice", "Entro 15 giorni dalla scadenza costituzione opposto", "Art. 171-bis c.p.c."],
];

export const tabellaMotiviOpposizione = [
  ["Vizi formali", "Irregolarità o nullità della notifica del DI", "Artt. 137-149 c.p.c."],
  ["Vizi formali", "Incompetenza del giudice (territoriale, valore, materia)", "Artt. 38-50 c.p.c."],
  ["Vizi formali", "Difetto delle condizioni di ammissibilità ex art. 633", "Art. 633 c.p.c."],
  ["Vizi sostanziali", "Pagamento già effettuato (totale o parziale)", "Art. 1188 c.c."],
  ["Vizi sostanziali", "Prescrizione del credito", "Artt. 2934-2956 c.c."],
  ["Vizi sostanziali", "Compensazione con controcredito", "Artt. 1241-1252 c.c."],
  ["Vizi del titolo", "Nullità del contratto", "Artt. 1418-1424 c.c."],
  ["Vizi del titolo", "Clausole abusive (consumatore)", "Artt. 33-38 Cod. Cons."],
  ["Eccezioni", "Inadempimento del creditore (exceptio inadimpleti)", "Art. 1460 c.c."],
  ["Eccezioni", "Eccezione di prescrizione", "Art. 2938 c.c."],
];

export const tabellaConfrontoCartabia = [
  ["Termine ordinario opposizione", "40 giorni (art. 641)", "40 giorni (art. 641) — invariato"],
  ["Forma dell'atto in rito ordinario", "Atto di citazione (art. 645)", "Atto di citazione (art. 645) — invariato"],
  ["Termine minimo comparizione (Italia)", "90 giorni (post L. 218/2011)", "120 giorni (art. 163-bis post-Cartabia)"],
  ["Costituzione opposto", "20 giorni prima dell'udienza", "70 giorni prima dell'udienza (art. 166)"],
  ["Mediazione obbligatoria in opposizione", "Su orientamento Cass. SS.UU. 19596/2020", "Codificata nell'art. 5-bis D.Lgs. 28/2010"],
  ["Onere mediazione", "Su creditore opposto (giurisprudenziale)", "Su creditore opposto (legge — art. 5-bis)"],
  ["Verifiche preliminari del giudice", "Non strutturate", "Art. 171-bis (post-correttivo D.Lgs. 164/2024)"],
  ["Memorie integrative", "Art. 183, c. 6, c.p.c.", "Art. 171-ter — termini collegati al decreto 171-bis"],
  ["Pagamento CU", "Diritti, F23, contanti, telematico", "Solo PagoPA telematico (dal 1° gennaio 2023)"],
  ["Rito semplificato applicabile a opposizione", "Non previsto", "Art. 281-decies (post-correttivo)"],
];

/* ─── Festività italiane ─── */

function getFesteItaliane(anno: number): Set<string> {
  const feste = new Set<string>();
  const fissi: [number, number][] = [
    [1, 1], [1, 6], [4, 25], [5, 1], [6, 2],
    [8, 15], [11, 1], [12, 8], [12, 25], [12, 26],
  ];
  // San Francesco d'Assisi - festa nazionale dal 2026 (L. 151/2025)
  if (anno >= 2026) fissi.push([10, 4]);
  for (const [m, d] of fissi) {
    feste.add(`${anno}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`);
  }
  // Pasqua e Lunedì dell'Angelo (algoritmo di Gauss)
  const a = anno % 19;
  const b = Math.floor(anno / 100);
  const c = anno % 100;
  const dd = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - dd - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mesePasqua = Math.floor((h + l - 7 * m + 114) / 31);
  const giornoPasqua = ((h + l - 7 * m + 114) % 31) + 1;
  const pasqua = new Date(anno, mesePasqua - 1, giornoPasqua);
  feste.add(formatISO(pasqua));
  const lunediAngelo = new Date(pasqua);
  lunediAngelo.setDate(lunediAngelo.getDate() + 1);
  feste.add(formatISO(lunediAngelo));
  return feste;
}

function formatISO(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function isFestivo(d: Date, feste: Set<string>): boolean {
  const giorno = d.getDay(); // 0 = domenica, 6 = sabato
  if (giorno === 0 || giorno === 6) return true;
  return feste.has(formatISO(d));
}

function primoGiornoNonFestivo(d: Date, feste: Set<string>): Date {
  const result = new Date(d);
  while (isFestivo(result, feste)) {
    result.setDate(result.getDate() + 1);
  }
  return result;
}

/* ─── Calcolo del termine ─── */

export interface CalcoloInput {
  /** Tipo di procedimento (determina termine base e regole) */
  tipoProcedimento: TipoProcedimento;
  /** Data di notifica del decreto ingiuntivo */
  dataNotifica: Date;
  /** Termine custom in giorni (solo per abbreviato/aumentato) */
  giorniCustom?: number;
  /** Applicare la sospensione feriale? (default true tranne lavoro) */
  applicaSospensione: boolean;
}

/**
 * Calcola la data di scadenza per l'opposizione a decreto ingiuntivo
 * applicando le regole di:
 *  - Art. 641 c.p.c. (termine base 40 gg, varianti UE/extra-UE/abbreviato)
 *  - Art. 155 c.p.c. (esclusione dies a quo, proroga sabato/festivo)
 *  - L. 742/1969 (sospensione feriale 1-31 agosto, esclusa lavoro)
 *
 * Il calcolo procede giorno per giorno saltando i giorni di sospensione feriale
 * (se applicabile), poi proroga al primo giorno non festivo se la scadenza cade
 * di sabato, domenica o festivo.
 */
export function calcolaScadenzaOpposizione(input: CalcoloInput): RisultatoCalcolo {
  const { tipoProcedimento, dataNotifica, giorniCustom, applicaSospensione } = input;

  // Determina termine base in giorni
  let terminiGiorni: number;
  let articolo: string;
  let url: string;
  let label: string;
  let formaAtto: "citazione" | "ricorso";
  const note: string[] = [];

  switch (tipoProcedimento) {
    case "ordinario":
      terminiGiorni = 40;
      articolo = "Art. 641, c. 1, c.p.c.";
      url = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art641";
      label = "Termine ordinario: 40 giorni dalla notifica del decreto ingiuntivo";
      formaAtto = "citazione";
      break;
    case "lavoro":
      terminiGiorni = 40;
      articolo = "Art. 641, c. 1, c.p.c. + art. 447-bis c.p.c.";
      url = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art641";
      label = "Termine di 40 giorni - rito speciale (lavoro/locazione)";
      formaAtto = "ricorso";
      note.push("Forma dell'atto: ricorso da depositare in cancelleria entro 40 giorni (non basta la notifica).");
      note.push("La sospensione feriale 1-31 agosto NON si applica (controversie escluse dalla L. 742/1969).");
      break;
    case "ue":
      terminiGiorni = 50;
      articolo = "Art. 641, c. 3, c.p.c.";
      url = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art641";
      label = "Termine di 50 giorni - debitore in altro Stato UE";
      formaAtto = "citazione";
      break;
    case "extra-ue":
      terminiGiorni = 60;
      articolo = "Art. 641, c. 4, c.p.c.";
      url = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art641";
      label = "Termine di 60 giorni - debitore in Stato extra-UE";
      formaAtto = "citazione";
      note.push("Il giudice puo modulare il termine tra un minimo di 30 e un massimo di 120 giorni.");
      break;
    case "abbreviato":
      terminiGiorni = giorniCustom ?? 10;
      if (terminiGiorni < 10) terminiGiorni = 10;
      if (terminiGiorni > 39) terminiGiorni = 39;
      articolo = "Art. 641, c. 2, c.p.c. (termine ridotto per giusti motivi)";
      url = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art641";
      label = `Termine ridotto a ${terminiGiorni} giorni - giusti motivi`;
      formaAtto = "citazione";
      note.push("Il termine deve essere stato espressamente abbreviato dal giudice nel decreto ingiuntivo.");
      break;
    case "aumentato":
      terminiGiorni = giorniCustom ?? 60;
      if (terminiGiorni < 41) terminiGiorni = 41;
      if (terminiGiorni > 60) terminiGiorni = 60;
      articolo = "Art. 641, c. 2, c.p.c. (termine aumentato per giusti motivi)";
      url = "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art641";
      label = `Termine aumentato a ${terminiGiorni} giorni - giusti motivi`;
      formaAtto = "citazione";
      break;
  }

  // Determina se applicare la sospensione feriale
  // Lavoro: MAI, indipendentemente dal flag
  const sospensioneEffettiva = tipoProcedimento === "lavoro" ? false : applicaSospensione;

  // Feste italiane
  const annoBase = dataNotifica.getFullYear();
  const feste = getFesteItaliane(annoBase);
  const festeAnnoSucc = getFesteItaliane(annoBase + 1);
  const tutteFeste = new Set([...feste, ...festeAnnoSucc]);

  // Calcolo del dies ad quem
  // Art. 155 c.p.c.: si esclude il dies a quo
  const cursore = new Date(dataNotifica);
  cursore.setDate(cursore.getDate() + 1); // dies a quo escluso

  let contatore = 0;
  let giorniSospensione = 0;
  const sospensione1 = { dal: new Date(annoBase, 7, 1), al: new Date(annoBase, 7, 31) };
  const sospensione2 = { dal: new Date(annoBase + 1, 7, 1), al: new Date(annoBase + 1, 7, 31) };

  while (contatore < terminiGiorni) {
    const t = cursore.getTime();
    const inSosp = sospensioneEffettiva && (
      (t >= sospensione1.dal.getTime() && t <= sospensione1.al.getTime()) ||
      (t >= sospensione2.dal.getTime() && t <= sospensione2.al.getTime())
    );

    if (inSosp) {
      giorniSospensione++;
    } else {
      contatore++;
    }
    if (contatore < terminiGiorni) {
      cursore.setDate(cursore.getDate() + 1);
    }
  }

  const dataOriginale = new Date(cursore);
  const prorogaFestivo = isFestivo(cursore, tutteFeste);
  const dataScadenza = prorogaFestivo ? primoGiornoNonFestivo(cursore, tutteFeste) : new Date(cursore);

  // Giorni rimanenti
  const oggi = new Date();
  oggi.setHours(0, 0, 0, 0);
  const giorniRimanenti = Math.ceil((dataScadenza.getTime() - oggi.getTime()) / (1000 * 60 * 60 * 24));

  // Iscrizione a ruolo: 10 giorni dalla notifica (art. 165 c.p.c.)
  // Per le opposizioni, il termine è 10 giorni dalla notifica dell'atto di opposizione
  // Stima: 10 giorni dalla data di scadenza (assumendo notifica all'ultimo giorno)
  const dataIscrizioneRuolo = new Date(dataScadenza);
  dataIscrizioneRuolo.setDate(dataIscrizioneRuolo.getDate() + 10);

  // Note contestuali
  if (giorniRimanenti < 0) {
    note.push("Termine gia scaduto. Verifica la possibilita di opposizione tardiva ex art. 650 c.p.c. (irregolarita notifica, caso fortuito, forza maggiore) entro 10 giorni dal primo atto di esecuzione.");
  } else if (giorniRimanenti <= 7 && giorniRimanenti >= 0) {
    note.push("Attenzione: scadenza imminente. Prepara l'atto di opposizione e la notifica con urgenza.");
  }

  if (sospensioneEffettiva && giorniSospensione > 0) {
    note.push(`Applicata sospensione feriale (L. 742/1969): ${giorniSospensione} giorni dal 1° al 31 agosto non computati nel termine.`);
  }

  if (prorogaFestivo) {
    note.push(`Proroga ex art. 155, c. 4-5, c.p.c.: la scadenza originale (${formatISO(dataOriginale)}) cadeva di sabato, domenica o festivo. Slittata al primo giorno non festivo successivo.`);
  }

  return {
    dataScadenza,
    giorniRimanenti,
    sospensioneApplicata: sospensioneEffettiva && giorniSospensione > 0,
    giorniSospensionePieno: giorniSospensione,
    prorogaFestivo,
    dataOriginale,
    terminiGiorni,
    formaAtto,
    note,
    dataIscrizioneRuolo,
    articolo,
    url,
    label,
  };
}

/* ─── Labels per UI ─── */

export const tipoProcedimentoLabels: Record<TipoProcedimento, string> = {
  ordinario: "Ordinario (Italia)",
  lavoro: "Lavoro / Locazione (rito speciale)",
  ue: "Debitore in altro Stato UE",
  "extra-ue": "Debitore in Stato extra-UE",
  abbreviato: "Termine ridotto dal giudice",
  aumentato: "Termine aumentato dal giudice",
};

export const tipoProcedimentoDescriptions: Record<TipoProcedimento, string> = {
  ordinario: "40 giorni - atto di citazione - sospensione feriale applicabile",
  lavoro: "40 giorni - ricorso depositato - nessuna sospensione feriale",
  ue: "50 giorni dalla notifica - atto di citazione",
  "extra-ue": "60 giorni dalla notifica - atto di citazione",
  abbreviato: "10-39 giorni (minimo 10) - per giusti motivi indicati nel DI",
  aumentato: "41-60 giorni (massimo 60) - per giusti motivi indicati nel DI",
};

/* ─── Normativa ─── */

export const normativaRiferimento: NormativaRiferimento[] = [
  { norma: "Art. 633 c.p.c.", descrizione: "Condizioni di ammissibilita del decreto ingiuntivo: somma liquida, prova scritta, onorari professionali", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art633" },
  { norma: "Art. 638 c.p.c.", descrizione: "Forma e contenuto del ricorso per decreto ingiuntivo (modifiche post-Cartabia)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art638" },
  { norma: "Art. 641 c.p.c.", descrizione: "Termine di 40 giorni per opposizione, riducibile a 10 o aumentabile a 60; UE 50 gg, extra-UE 60-120 gg", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art641" },
  { norma: "Art. 642 c.p.c.", descrizione: "Provvisoria esecuzione del decreto ingiuntivo in sede di emissione", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art642" },
  { norma: "Art. 645 c.p.c.", descrizione: "Opposizione a decreto ingiuntivo: forma (atto di citazione), competenza, rito ordinario", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art645" },
  { norma: "Art. 647 c.p.c.", descrizione: "Esecutorieta del decreto non opposto o per mancata costituzione dell'opponente", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art647" },
  { norma: "Art. 648 c.p.c.", descrizione: "Concessione di provvisoria esecuzione in corso di opposizione su istanza del creditore opposto", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art648" },
  { norma: "Art. 649 c.p.c.", descrizione: "Sospensione della provvisoria esecuzione su istanza dell'opponente per gravi motivi", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art649" },
  { norma: "Art. 650 c.p.c.", descrizione: "Opposizione tardiva: irregolarita notifica, caso fortuito, forza maggiore - 10 gg dal primo atto esecutivo", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art650" },
  { norma: "Art. 652 c.p.c.", descrizione: "Conciliazione nel giudizio di opposizione", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art652" },
  { norma: "Art. 653 c.p.c.", descrizione: "Esito del giudizio: rigetto, accoglimento totale o parziale dell'opposizione", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art653" },
  { norma: "Art. 155 c.p.c.", descrizione: "Computo dei termini: esclusione dies a quo, proroga sabato e festivi", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" },
  { norma: "Art. 163-bis c.p.c.", descrizione: "Termini minimi di comparizione: 120 gg Italia, 150 gg estero (post-Cartabia)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art163-bis" },
  { norma: "Art. 165 c.p.c.", descrizione: "Costituzione dell'attore (opponente) entro 10 giorni dalla notifica", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art165" },
  { norma: "Art. 166 c.p.c.", descrizione: "Costituzione del convenuto (opposto) almeno 70 giorni prima dell'udienza (post-Cartabia)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art166" },
  { norma: "Art. 171-bis c.p.c.", descrizione: "Verifiche preliminari del giudice (introdotto da Cartabia, modificato dal correttivo D.Lgs. 164/2024)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art171-bis" },
  { norma: "L. 742/1969", descrizione: "Sospensione feriale dei termini processuali dal 1° al 31 agosto (esclusa per cause di lavoro)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742" },
  { norma: "L. 218/2011", descrizione: "Soppressione del dimezzamento legale dei termini di comparizione nell'opposizione a decreto ingiuntivo", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2011-12-29;218" },
  { norma: "D.Lgs. 28/2010, art. 5-bis", descrizione: "Mediazione obbligatoria nel giudizio di opposizione a decreto ingiuntivo: onere a carico del creditore opposto", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-03-04;28~art5-bis" },
  { norma: "D.Lgs. 149/2022 (Riforma Cartabia)", descrizione: "Riforma del processo civile, in vigore dal 28 febbraio 2023", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149" },
  { norma: "D.Lgs. 164/2024 (Correttivo Cartabia)", descrizione: "Modifiche agli artt. 171-bis, 171-ter, 281-decies c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-10-31;164" },
  { norma: "Art. 13 D.P.R. 115/2002", descrizione: "Contributo unificato: riduzione del 50% per i procedimenti monitori e le opposizioni in primo grado", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2002-05-30;115~art13" },
];

/* ─── Sezioni della pagina ─── */

export const sections: ToolSection[] = [
  { id: "calcolatore", label: "Calcolatore" },
  { id: "cos-e", label: "Cos'e l'opposizione" },
  { id: "termini", label: "Termini per opporsi" },
  { id: "termini-speciali", label: "Termini speciali" },
  { id: "forma-atto", label: "Forma dell'atto" },
  { id: "iscrizione-ruolo", label: "Iscrizione a ruolo" },
  { id: "motivi", label: "Motivi di opposizione" },
  { id: "cartabia", label: "Riforma Cartabia" },
  { id: "mediazione", label: "Mediazione obbligatoria" },
  { id: "provvisoria", label: "Provvisoria esecutorieta" },
  { id: "tardiva", label: "Opposizione tardiva" },
  { id: "onere-prova", label: "Onere della prova" },
  { id: "costi", label: "Costi e contributo unificato" },
  { id: "esempio", label: "Esempio pratico" },
  { id: "esiti", label: "Esiti del giudizio" },
  { id: "schema-atto", label: "Struttura dell'atto" },
  { id: "errori-comuni", label: "Errori comuni" },
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
  { id: "fonti", label: "Fonti e Riferimenti" },
];
