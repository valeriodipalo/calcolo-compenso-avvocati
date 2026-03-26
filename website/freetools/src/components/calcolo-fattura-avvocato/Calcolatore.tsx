"use client";

import { useState, useMemo } from "react";
import {
  calcolaFattura,
  calcolaInverso,
  type RisultatoFattura,
  type RegimeFiscale,
} from "@/data/calcolo-fattura-avvocato/fatturaData";
import { Calculator, RotateCcw, ArrowRightLeft, FileText, ArrowDownUp } from "lucide-react";
import { formatEur, formatPct } from "@/lib/utils";

type ModoCalcolo = "diretto" | "inverso";
type TipoImporto = "totale" | "netto";

export default function Calcolatore() {
  const [modoCalcolo, setModalita] = useState<ModoCalcolo>("diretto");
  const [regime, setRegime] = useState<RegimeFiscale>("ordinario");
  const [splitPayment, setSplitPayment] = useState(false);
  const [compenso, setCompenso] = useState("");
  const [speseAnticipate, setSpeseAnticipate] = useState("");
  const [speseImponibili, setSpeseImponibili] = useState("");
  const [tipoImporto, setTipoImporto] = useState<TipoImporto>("totale");
  const [percentualeForfettarie, setPercentualeForfettarie] = useState("15");
  const [risultato, setRisultato] = useState<RisultatoFattura | null>(null);

  const parseNum = (val: string) => {
    const cleaned = val.replace(/\./g, "").replace(",", ".");
    return parseFloat(cleaned) || 0;
  };

  const compensoNum = useMemo(() => parseNum(compenso), [compenso]);
  const speseAntNum = useMemo(() => parseNum(speseAnticipate), [speseAnticipate]);
  const speseImpNum = useMemo(() => parseNum(speseImponibili), [speseImponibili]);
  const percForfNum = useMemo(() => parseNum(percentualeForfettarie), [percentualeForfettarie]);

  const handleCalcola = () => {
    if (!compensoNum) return;

    if (modoCalcolo === "diretto") {
      setRisultato(
        calcolaFattura({
          compenso: compensoNum,
          speseAnticipate: speseAntNum,
          speseImponibili: speseImpNum,
          regime,
          splitPayment: regime === "ordinario" ? splitPayment : false,
          percentualeForfettarie: percForfNum || 15,
        })
      );
    } else {
      setRisultato(
        calcolaInverso({
          importo: compensoNum,
          tipoImporto,
          speseAnticipate: speseAntNum,
          speseImponibili: speseImpNum,
          regime,
          splitPayment: regime === "ordinario" ? splitPayment : false,
          percentualeForfettarie: percForfNum || 15,
        })
      );
    }
  };

  const handleReset = () => {
    setCompenso("");
    setSpeseAnticipate("");
    setSpeseImponibili("");
    setRisultato(null);
  };

  return (
    <div className="scroll-mt-24">
      <div className="bg-white border border-border shadow-lg overflow-hidden" style={{ borderRadius: "0.5rem" }}>
        {/* Header */}
        <div className="bg-[oklch(0.25_0.04_250)] px-6 py-5 flex items-center gap-3">
          <Calculator className="w-6 h-6 text-[oklch(0.75_0.10_85)]" />
          <h3 className="text-lg font-semibold text-white font-serif">
            Calcolo Fattura Avvocato
          </h3>
        </div>

        <div className="p-6 space-y-6">
          {/* Modalità toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => { setModalita("diretto"); setRisultato(null); }}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border transition-colors ${
                modoCalcolo === "diretto"
                  ? "bg-[oklch(0.25_0.04_250)] text-white border-[oklch(0.25_0.04_250)]"
                  : "bg-white text-[oklch(0.25_0.04_250)] border-border hover:bg-gray-50"
              }`}
              style={{ borderRadius: "0.375rem" }}
            >
              <FileText className="w-4 h-4" />
              Calcolo Diretto
            </button>
            <button
              onClick={() => { setModalita("inverso"); setRisultato(null); }}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border transition-colors ${
                modoCalcolo === "inverso"
                  ? "bg-[oklch(0.25_0.04_250)] text-white border-[oklch(0.25_0.04_250)]"
                  : "bg-white text-[oklch(0.25_0.04_250)] border-border hover:bg-gray-50"
              }`}
              style={{ borderRadius: "0.375rem" }}
            >
              <ArrowDownUp className="w-4 h-4" />
              Calcolo Inverso
            </button>
          </div>

          {/* Regime toggle */}
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
                Regime Ordinario
              </button>
              <button
                onClick={() => { setRegime("forfettario"); setSplitPayment(false); setRisultato(null); }}
                className={`flex-1 px-4 py-2.5 text-sm font-medium border transition-colors ${
                  regime === "forfettario"
                    ? "bg-[oklch(0.75_0.10_85)]/20 text-[oklch(0.25_0.04_250)] border-[oklch(0.75_0.10_85)]"
                    : "bg-white text-gray-600 border-border hover:bg-gray-50"
                }`}
                style={{ borderRadius: "0.375rem" }}
              >
                Regime Forfettario
              </button>
            </div>
          </div>

          {/* Input fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-1">
                {modoCalcolo === "diretto" ? "Compenso professionale (€)" : "Importo da scorporare (€)"}
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={compenso}
                onChange={(e) => setCompenso(e.target.value)}
                placeholder={modoCalcolo === "diretto" ? "es. 1.000,00" : "es. 1.500,00"}
                className="w-full px-4 py-2.5 border border-border text-base focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] focus:border-transparent"
                style={{ borderRadius: "0.375rem" }}
              />
            </div>

            {modoCalcolo === "inverso" && (
              <div>
                <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-1">
                  L'importo è
                </label>
                <select
                  value={tipoImporto}
                  onChange={(e) => setTipoImporto(e.target.value as TipoImporto)}
                  className="w-full px-4 py-2.5 border border-border text-base focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)]"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <option value="totale">Totale Fattura (lordo)</option>
                  <option value="netto">Netto a Pagare (dopo ritenuta)</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-1">
                Spese anticipate art. 15 (€)
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={speseAnticipate}
                onChange={(e) => setSpeseAnticipate(e.target.value)}
                placeholder="es. 259,00"
                className="w-full px-4 py-2.5 border border-border text-base focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] focus:border-transparent"
                style={{ borderRadius: "0.375rem" }}
              />
              <p className="text-xs text-muted-foreground mt-1">Contributo unificato, bolli, notifiche</p>
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
                placeholder="es. 0,00"
                className="w-full px-4 py-2.5 border border-border text-base focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] focus:border-transparent"
                style={{ borderRadius: "0.375rem" }}
              />
              <p className="text-xs text-muted-foreground mt-1">Soggette a IVA (viaggio, alloggio, ecc.)</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-1">
                Spese forfettarie (%)
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={percentualeForfettarie}
                onChange={(e) => setPercentualeForfettarie(e.target.value)}
                placeholder="15"
                className="w-full px-4 py-2.5 border border-border text-base focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] focus:border-transparent"
                style={{ borderRadius: "0.375rem" }}
              />
              <p className="text-xs text-muted-foreground mt-1">Art. 2 DM 55/2014 — minimo 15%</p>
            </div>
          </div>

          {/* Split Payment toggle (only ordinario) */}
          {regime === "ordinario" && (
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={splitPayment}
                onChange={(e) => setSplitPayment(e.target.checked)}
                className="w-4 h-4 accent-[oklch(0.25_0.04_250)]"
              />
              <span className="text-sm text-[oklch(0.25_0.04_250)]">
                Split payment PA (art. 17-ter DPR 633/72)
              </span>
            </label>
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleCalcola}
              disabled={!compensoNum}
              className="flex-1 flex items-center justify-center gap-2 bg-[oklch(0.25_0.04_250)] text-white px-6 py-3 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[oklch(0.20_0.04_250)] transition-colors"
              style={{ borderRadius: "0.375rem" }}
            >
              <Calculator className="w-4 h-4" />
              {modoCalcolo === "diretto" ? "Calcola Fattura" : "Scorporo Inverso"}
            </button>
            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[oklch(0.25_0.04_250)] border border-border hover:bg-gray-50 transition-colors"
              style={{ borderRadius: "0.375rem" }}
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>

          {/* Results */}
          {risultato && (
            <div className="border-t border-border pt-6 space-y-4">
              <h4 className="text-base font-semibold text-[oklch(0.25_0.04_250)] flex items-center gap-2">
                <ArrowRightLeft className="w-5 h-5 text-[oklch(0.75_0.10_85)]" />
                {modoCalcolo === "diretto" ? "Dettaglio Fattura" : "Scorporo Fattura"}
                <span className="ml-auto text-xs font-normal px-2 py-0.5 bg-[oklch(0.75_0.10_85)]/20 text-[oklch(0.25_0.04_250)]" style={{ borderRadius: "0.25rem" }}>
                  {risultato.regime === "ordinario" ? "Regime Ordinario" : "Regime Forfettario"}
                </span>
              </h4>

              <div className="overflow-hidden border border-border" style={{ borderRadius: "0.375rem" }}>
                <table className="w-full text-sm">
                  <tbody>
                    <Row label="Compenso professionale" value={risultato.compenso} />
                    <Row label={`Spese forfettarie (${formatPct(risultato.percentualeForfettarie)})`} value={risultato.speseForfettarie} />
                    <Row label="Contributo CPA (4%)" value={risultato.cpa} />
                    {risultato.speseImponibili > 0 && (
                      <Row label="Spese imponibili" value={risultato.speseImponibili} />
                    )}
                    {risultato.regime === "ordinario" && (
                      <>
                        <Row label="Imponibile IVA" value={risultato.imponibileIva} bold />
                        <Row label="IVA (22%)" value={risultato.iva} />
                      </>
                    )}
                    {risultato.speseAnticipate > 0 && (
                      <Row label="Spese anticipate (art. 15)" value={risultato.speseAnticipate} />
                    )}
                    {risultato.marcaDaBollo > 0 && (
                      <Row label="Marca da bollo" value={risultato.marcaDaBollo} />
                    )}
                    <Row label="TOTALE FATTURA" value={risultato.totaleFattura} bold highlight />
                    {risultato.regime === "ordinario" && (
                      <>
                        <Row label="Ritenuta d'acconto (20%)" value={-risultato.ritenuta} negative />
                        {risultato.splitPayment && (
                          <Row label="IVA split payment PA" value={-risultato.iva} negative />
                        )}
                      </>
                    )}
                    <Row label="NETTO A PAGARE" value={risultato.nettoAPagare} bold highlight accent />
                  </tbody>
                </table>
              </div>

              {risultato.splitPayment && (
                <p className="text-xs text-muted-foreground">
                  Split payment: l'IVA di {formatEur(risultato.iva)} viene versata dalla PA direttamente all'Erario (art. 17-ter DPR 633/72).
                </p>
              )}
              {risultato.regime === "forfettario" && (
                <p className="text-xs text-muted-foreground">
                  Operazione esclusa IVA ai sensi dell'art. 1, commi 54-89, L. 190/2014.
                  {risultato.marcaDaBollo > 0 && " Imposta di bollo €2,00 assolta ai sensi del DPR 642/72."}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Table Row helper ── */

function Row({
  label,
  value,
  bold,
  highlight,
  accent,
  negative,
}: {
  label: string;
  value: number;
  bold?: boolean;
  highlight?: boolean;
  accent?: boolean;
  negative?: boolean;
}) {
  return (
    <tr className={highlight ? "bg-[oklch(0.98_0.005_85)]" : ""}>
      <td className={`px-4 py-2.5 border-b border-border ${bold ? "font-semibold" : ""} ${accent ? "text-[oklch(0.25_0.04_250)]" : "text-gray-700"}`}>
        {label}
      </td>
      <td className={`px-4 py-2.5 border-b border-border text-right font-mono ${bold ? "font-semibold" : ""} ${accent ? "text-[oklch(0.25_0.04_250)]" : negative ? "text-red-600" : "text-gray-900"}`}>
        {negative ? `- ${formatEur(Math.abs(value))}` : formatEur(value)}
      </td>
    </tr>
  );
}
