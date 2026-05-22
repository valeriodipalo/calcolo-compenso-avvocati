"use client";

import { useState, useMemo } from "react";
import {
  calcolaFattura,
  type RisultatoFattura,
  type RegimeFiscale,
  type TipoCliente,
} from "@/data/fattura-elettronica-avvocati/fatturaElettronicaData";
import { Calculator, RotateCcw, FileSpreadsheet, Code2, Info } from "lucide-react";
import { formatEur } from "@/lib/utils";

type Tab = "calcolo" | "xml" | "diciture";

export default function Calcolatore() {
  const [regime, setRegime] = useState<RegimeFiscale>("ordinario");
  const [tipoCliente, setTipoCliente] = useState<TipoCliente>("impresa");
  const [compenso, setCompenso] = useState("");
  const [speseImponibili, setSpeseImponibili] = useState("");
  const [speseEsentiArt15, setSpeseEsentiArt15] = useState("");
  const [gratuitoPatrocinio, setGratuitoPatrocinio] = useState(false);
  const [risultato, setRisultato] = useState<RisultatoFattura | null>(null);
  const [tab, setTab] = useState<Tab>("calcolo");

  const parseNum = (val: string) => {
    const cleaned = val.replace(/\./g, "").replace(",", ".");
    return parseFloat(cleaned) || 0;
  };

  const compensoNum = useMemo(() => parseNum(compenso), [compenso]);
  const speseImpNum = useMemo(() => parseNum(speseImponibili), [speseImponibili]);
  const speseEsentiNum = useMemo(() => parseNum(speseEsentiArt15), [speseEsentiArt15]);

  const handleCalcola = () => {
    if (!compensoNum) return;
    setRisultato(
      calcolaFattura({
        regime,
        tipoCliente,
        compenso: compensoNum,
        speseImponibili: speseImpNum,
        speseEsentiArt15: speseEsentiNum,
        gratuitoPatrocinio,
      })
    );
  };

  const handleReset = () => {
    setCompenso("");
    setSpeseImponibili("");
    setSpeseEsentiArt15("");
    setGratuitoPatrocinio(false);
    setRisultato(null);
    setTab("calcolo");
  };

  const tipiCliente: { value: TipoCliente; label: string }[] = [
    { value: "impresa", label: "Impresa / Professionista" },
    { value: "PA", label: "Pubblica Amministrazione" },
    { value: "privato", label: "Privato cittadino" },
    { value: "UE_B2B", label: "Cliente UE (B2B)" },
    { value: "extraUE", label: "Cliente extra-UE" },
  ];

  return (
    <div className="scroll-mt-24">
      <div className="bg-white border border-border shadow-lg overflow-hidden" style={{ borderRadius: "0.5rem" }}>
        {/* Header */}
        <div className="bg-[oklch(0.25_0.04_250)] px-6 py-5 flex items-center gap-3">
          <Calculator className="w-6 h-6 text-[oklch(0.75_0.10_85)]" />
          <h3 className="text-lg font-semibold text-white font-serif">
            Anteprima Fattura Elettronica Avvocato
          </h3>
        </div>

        <div className="p-6 space-y-6">
          {/* Regime */}
          <div>
            <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2">
              Regime Fiscale
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => { setRegime("ordinario"); setRisultato(null); }}
                className={`flex-1 px-4 py-2.5 text-sm font-medium border transition-colors ${
                  regime === "ordinario"
                    ? "bg-[oklch(0.75_0.10_85)]/20 text-[oklch(0.25_0.04_250)] border-[oklch(0.75_0.10_85)]"
                    : "bg-white text-gray-600 border-border hover:bg-gray-50"
                }`}
                style={{ borderRadius: "0.375rem" }}
              >
                Ordinario
              </button>
              <button
                onClick={() => { setRegime("forfettario"); setRisultato(null); }}
                className={`flex-1 px-4 py-2.5 text-sm font-medium border transition-colors ${
                  regime === "forfettario"
                    ? "bg-[oklch(0.75_0.10_85)]/20 text-[oklch(0.25_0.04_250)] border-[oklch(0.75_0.10_85)]"
                    : "bg-white text-gray-600 border-border hover:bg-gray-50"
                }`}
                style={{ borderRadius: "0.375rem" }}
              >
                Forfettario
              </button>
            </div>
          </div>

          {/* Tipo cliente */}
          <div>
            <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2">
              Tipo di Cliente
            </label>
            <select
              value={tipoCliente}
              onChange={(e) => { setTipoCliente(e.target.value as TipoCliente); setRisultato(null); }}
              className="w-full px-3 py-2.5 text-sm border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)]"
              style={{ borderRadius: "0.375rem" }}
            >
              {tipiCliente.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          {/* Input fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-1">
                Compenso (€)
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={compenso}
                onChange={(e) => setCompenso(e.target.value)}
                placeholder="2.000,00"
                className="w-full px-3 py-2 text-sm border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] font-mono"
                style={{ borderRadius: "0.375rem" }}
              />
              <p className="text-xs text-gray-500 mt-1">Onorario professionale netto</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-1">
                Spese imponibili (€)
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={speseImponibili}
                onChange={(e) => setSpeseImponibili(e.target.value)}
                placeholder="0,00"
                className="w-full px-3 py-2 text-sm border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] font-mono"
                style={{ borderRadius: "0.375rem" }}
              />
              <p className="text-xs text-gray-500 mt-1">Es. trasferte, perizie</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-1">
                Spese esenti art. 15 (€)
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={speseEsentiArt15}
                onChange={(e) => setSpeseEsentiArt15(e.target.value)}
                placeholder="0,00"
                className="w-full px-3 py-2 text-sm border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] font-mono"
                style={{ borderRadius: "0.375rem" }}
              />
              <p className="text-xs text-gray-500 mt-1">CU, marche, diritti copia</p>
            </div>
          </div>

          {/* Checkbox gratuito patrocinio */}
          {tipoCliente === "PA" && (
            <label className="flex items-center gap-2 text-sm text-[oklch(0.25_0.04_250)] cursor-pointer">
              <input
                type="checkbox"
                checked={gratuitoPatrocinio}
                onChange={(e) => { setGratuitoPatrocinio(e.target.checked); setRisultato(null); }}
                className="w-4 h-4"
              />
              <span>Gratuito patrocinio (artt. 82-83 DPR 115/2002)</span>
            </label>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={handleCalcola}
              disabled={!compensoNum}
              className="flex-1 px-6 py-3 bg-[oklch(0.25_0.04_250)] text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[oklch(0.20_0.05_250)] transition-colors"
              style={{ borderRadius: "0.375rem" }}
            >
              Calcola Anteprima Fattura
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-3 border border-border text-[oklch(0.25_0.04_250)] text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
              style={{ borderRadius: "0.375rem" }}
            >
              <RotateCcw className="w-4 h-4" /> Reset
            </button>
          </div>
        </div>

        {/* Risultato */}
        {risultato && (
          <div className="border-t border-border bg-gray-50">
            {/* Tab bar */}
            <div className="flex border-b border-border bg-white">
              <button
                onClick={() => setTab("calcolo")}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  tab === "calcolo"
                    ? "border-[oklch(0.75_0.10_85)] text-[oklch(0.25_0.04_250)]"
                    : "border-transparent text-gray-500 hover:text-[oklch(0.25_0.04_250)]"
                }`}
              >
                <FileSpreadsheet className="w-4 h-4" /> Calcolo Importi
              </button>
              <button
                onClick={() => setTab("xml")}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  tab === "xml"
                    ? "border-[oklch(0.75_0.10_85)] text-[oklch(0.25_0.04_250)]"
                    : "border-transparent text-gray-500 hover:text-[oklch(0.25_0.04_250)]"
                }`}
              >
                <Code2 className="w-4 h-4" /> Anteprima XML SDI
              </button>
              <button
                onClick={() => setTab("diciture")}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  tab === "diciture"
                    ? "border-[oklch(0.75_0.10_85)] text-[oklch(0.25_0.04_250)]"
                    : "border-transparent text-gray-500 hover:text-[oklch(0.25_0.04_250)]"
                }`}
              >
                <Info className="w-4 h-4" /> Diciture e Suggerimenti
              </button>
            </div>

            <div className="p-6">
              {tab === "calcolo" && <TabCalcolo risultato={risultato} regime={regime} />}
              {tab === "xml" && <TabXml risultato={risultato} regime={regime} tipoCliente={tipoCliente} />}
              {tab === "diciture" && <TabDiciture risultato={risultato} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// TAB: Calcolo
// ─────────────────────────────────────────────────────────────
function TabCalcolo({ risultato, regime }: { risultato: RisultatoFattura; regime: RegimeFiscale }) {
  const rows: { label: string; value: number; note?: string; bold?: boolean; sub?: boolean }[] = [
    { label: "Compenso professionale", value: risultato.compenso },
    { label: "+ Spese generali 15%", value: risultato.speseGenerali, note: "art. 13 c. 10 L. 247/2012", sub: true },
    { label: "+ Spese imponibili IVA", value: risultato.speseImponibili, sub: true },
    { label: "= Imponibile CPA", value: risultato.imponibileCpa, bold: true },
    { label: "+ CPA Cassa Forense 4%", value: risultato.cpa, note: "art. 11 L. 576/1980", sub: true },
  ];

  if (regime === "ordinario") {
    rows.push(
      { label: "= Imponibile IVA", value: risultato.imponibileIva, bold: true },
      { label: "+ IVA 22%", value: risultato.iva, note: "art. 16 DPR 633/72", sub: true }
    );
  }

  rows.push({ label: "+ Spese esenti art. 15", value: risultato.speseEsentiArt15, note: "Anticipazioni nome e per conto", sub: true });

  if (risultato.bollo > 0) {
    rows.push({ label: "+ Imposta di bollo", value: risultato.bollo, note: "art. 13 Tariffa DPR 642/72", sub: true });
  }

  rows.push({ label: "= TOTALE FATTURA", value: risultato.totaleFattura, bold: true });

  if (regime === "ordinario" && risultato.ritenuta > 0) {
    rows.push(
      { label: "− Ritenuta d'acconto 20%", value: risultato.ritenuta, note: "art. 25 DPR 600/73 — base €" + risultato.imponibileRitenuta.toFixed(2).replace(".", ","), sub: true },
      { label: "= NETTO A PAGARE", value: risultato.nettoAPagare, bold: true }
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-white border border-border overflow-hidden" style={{ borderRadius: "0.375rem" }}>
        <table className="w-full text-sm">
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`border-b border-gray-100 last:border-0 ${row.bold ? "bg-[oklch(0.75_0.10_85)]/10" : ""}`}>
                <td className={`px-4 py-2.5 ${row.bold ? "font-semibold text-[oklch(0.25_0.04_250)]" : row.sub ? "pl-8 text-gray-700" : "text-[oklch(0.25_0.04_250)]"}`}>
                  {row.label}
                  {row.note && (
                    <div className="text-xs text-gray-500 mt-0.5">{row.note}</div>
                  )}
                </td>
                <td className={`px-4 py-2.5 text-right font-mono ${row.bold ? "font-semibold text-[oklch(0.25_0.04_250)]" : "text-[oklch(0.25_0.04_250)]"}`}>
                  {formatEur(row.value)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500">
        Calcoli aggiornati al 2026 secondo D.M. 147/2022 (parametri forensi), L. 576/1980 art. 11 (CPA), DPR 633/72 (IVA), DPR 600/73 art. 25 (ritenuta), DPR 642/72 art. 13 Tariffa (bollo).
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// TAB: Anteprima XML SDI
// ─────────────────────────────────────────────────────────────
function TabXml({ risultato, regime, tipoCliente }: { risultato: RisultatoFattura; regime: RegimeFiscale; tipoCliente: TipoCliente }) {
  const fields: { campo: string; valore: string; nota?: string }[] = [
    { campo: "TipoDocumento", valore: "TD01", nota: "Fattura" },
    { campo: "ImportoTotaleDocumento", valore: formatEur(risultato.totaleFattura) },
    { campo: "DatiBeniServizi / DettaglioLinee", valore: `${formatEur(risultato.compenso)} compenso + ${formatEur(risultato.speseGenerali)} spese generali` },
  ];

  if (regime === "ordinario") {
    fields.push(
      { campo: "AliquotaIVA", valore: "22.00" },
      { campo: "ImportoIVA", valore: formatEur(risultato.iva) },
      { campo: "EsigibilitaIVA", valore: "I (immediata)", nota: tipoCliente === "PA" ? "MAI 'S' — split payment abolito per professionisti (D.L. 87/2018)" : undefined }
    );
  } else {
    fields.push(
      { campo: "Natura", valore: "N2.2", nota: "Operazione non soggetta IVA - regime forfettario" }
    );
  }

  fields.push(
    { campo: "DatiCassaPrevidenziale / TipoCassa", valore: "TC02", nota: "Cassa Nazionale Previdenza e Assistenza Forense" },
    { campo: "DatiCassaPrevidenziale / AlCassa", valore: "4.00" },
    { campo: "DatiCassaPrevidenziale / ImportoContributoCassa", valore: formatEur(risultato.cpa) }
  );

  if (regime === "ordinario" && risultato.ritenuta > 0) {
    fields.push(
      { campo: "DatiRitenuta / TipoRitenuta", valore: "RT02", nota: "Ritenuta persone fisiche" },
      { campo: "DatiRitenuta / AliquotaRitenuta", valore: "20.00" },
      { campo: "DatiRitenuta / ImportoRitenuta", valore: formatEur(risultato.ritenuta) }
    );
  }

  if (risultato.bollo > 0) {
    fields.push(
      { campo: "DatiBollo / BolloVirtuale", valore: "SI" },
      { campo: "DatiBollo / ImportoBollo", valore: "2.00" }
    );
  }

  if (risultato.speseEsentiArt15 > 0) {
    fields.push(
      { campo: "DettaglioLinee (anticipazioni)", valore: formatEur(risultato.speseEsentiArt15), nota: "Codice Natura N1 - escluse art. 15 DPR 633/72" }
    );
  }

  let codiceDest = "M5UXCR1";
  if (tipoCliente === "privato") codiceDest = "0000000 (sette zeri)";
  else if (tipoCliente === "extraUE") codiceDest = "XXXXXXX (sette X)";
  else if (tipoCliente === "PA") codiceDest = "[Codice IPA ufficio]";

  fields.unshift({ campo: "CodiceDestinatario", valore: codiceDest });

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Anteprima dei campi principali del tracciato XML 1.9.1 della fattura elettronica:
      </p>
      <div className="bg-white border border-border overflow-hidden" style={{ borderRadius: "0.375rem" }}>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[oklch(0.25_0.04_250)] text-white">
              <th className="px-4 py-2.5 text-left font-medium">Campo XML</th>
              <th className="px-4 py-2.5 text-left font-medium">Valore</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((f, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0">
                <td className="px-4 py-2.5 font-mono text-xs text-[oklch(0.25_0.04_250)]">{f.campo}</td>
                <td className="px-4 py-2.5 font-mono text-xs text-gray-700">
                  {f.valore}
                  {f.nota && <div className="text-xs text-gray-500 mt-0.5 font-sans not-italic">{f.nota}</div>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500">
        Dal 15 maggio 2026 è obbligatorio il tracciato XML versione 1.9.1 — il SDI scarta automaticamente le fatture predisposte con tracciato precedente.
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// TAB: Diciture
// ─────────────────────────────────────────────────────────────
function TabDiciture({ risultato }: { risultato: RisultatoFattura }) {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="bg-white border border-border p-4" style={{ borderRadius: "0.375rem" }}>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">TipoDocumento</p>
          <p className="font-mono font-semibold text-[oklch(0.25_0.04_250)]">{risultato.tipoDocumentoSuggerito}</p>
        </div>
        <div className="bg-white border border-border p-4" style={{ borderRadius: "0.375rem" }}>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Natura IVA</p>
          <p className="font-mono font-semibold text-[oklch(0.25_0.04_250)] text-sm">{risultato.naturaIvaSuggerita}</p>
        </div>
        <div className="bg-white border border-border p-4" style={{ borderRadius: "0.375rem" }}>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Modalità Pagamento</p>
          <p className="font-mono font-semibold text-[oklch(0.25_0.04_250)] text-sm">{risultato.modalitaPagamentoSuggerita}</p>
        </div>
      </div>

      {risultato.diciturePagrafiche.length > 0 && (
        <div>
          <h4 className="font-semibold text-[oklch(0.25_0.04_250)] mb-2 text-sm">Diciture obbligatorie da inserire in fattura:</h4>
          <ul className="space-y-2">
            {risultato.diciturePagrafiche.map((d, i) => (
              <li key={i} className="bg-[oklch(0.75_0.10_85)]/10 border-l-4 border-[oklch(0.75_0.10_85)] px-4 py-3 text-sm text-[oklch(0.25_0.04_250)]" style={{ borderRadius: "0.25rem" }}>
                « {d} »
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="text-xs text-gray-500">
        Le diciture sono testi consigliati dalla prassi e dalle circolari AdE. Inserire i testi sopra nella sezione &quot;Causale&quot; o &quot;AltriDatiGestionali&quot; del tracciato XML.
      </p>
    </div>
  );
}
