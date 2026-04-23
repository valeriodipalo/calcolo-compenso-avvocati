"use client";

import { useState, useMemo } from "react";
import { Calculator, RotateCcw, ArrowRightLeft, ArrowDownUp, Plus } from "lucide-react";
import {
  scorporaIva,
  aggiungiIva,
  ALIQUOTE_IVA,
  type ModoScorporo,
  type RisultatoScorporo,
} from "@/data/scorporo-iva/scorporoIvaData";
import { formatEur, formatPct } from "@/lib/utils";

const QUICK_FILLS = [100, 500, 1000, 1220, 2440];

export default function Calcolatore() {
  const [modo, setModo] = useState<ModoScorporo>("scorporo");
  const [aliquota, setAliquota] = useState<number>(22);
  const [aliquotaCustom, setAliquotaCustom] = useState<string>("");
  const [usaAliquotaCustom, setUsaAliquotaCustom] = useState(false);
  const [importo, setImporto] = useState<string>("");

  const parseNum = (val: string) => {
    const cleaned = val.replace(/\./g, "").replace(",", ".");
    return parseFloat(cleaned) || 0;
  };

  const importoNum = useMemo(() => parseNum(importo), [importo]);
  const aliquotaCustomNum = useMemo(
    () => parseNum(aliquotaCustom),
    [aliquotaCustom]
  );
  const aliquotaEffettiva = usaAliquotaCustom
    ? aliquotaCustomNum
    : aliquota;

  const risultato: RisultatoScorporo | null = useMemo(() => {
    if (!importoNum || !aliquotaEffettiva || aliquotaEffettiva <= 0) return null;
    return modo === "scorporo"
      ? scorporaIva(importoNum, aliquotaEffettiva)
      : aggiungiIva(importoNum, aliquotaEffettiva);
  }, [importoNum, aliquotaEffettiva, modo]);

  const aliquotaInfo = ALIQUOTE_IVA.find((a) => a.valore === aliquota);

  const handleReset = () => {
    setImporto("");
    setAliquota(22);
    setAliquotaCustom("");
    setUsaAliquotaCustom(false);
  };

  return (
    <div className="scroll-mt-24">
      <div
        className="bg-white border border-border shadow-lg overflow-hidden"
        style={{ borderRadius: "0.5rem" }}
      >
        {/* Header */}
        <div className="bg-[oklch(0.25_0.04_250)] px-6 py-5 flex items-center gap-3">
          <Calculator className="w-6 h-6 text-[oklch(0.75_0.10_85)]" />
          <h3 className="text-lg font-semibold text-white font-serif">
            Calcolatore Scorporo IVA 2026
          </h3>
        </div>

        <div className="p-6 space-y-6">
          {/* Modo toggle */}
          <div>
            <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2">
              Modalita di calcolo
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setModo("scorporo")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border transition-colors ${
                  modo === "scorporo"
                    ? "bg-[oklch(0.25_0.04_250)] text-white border-[oklch(0.25_0.04_250)]"
                    : "bg-white text-[oklch(0.25_0.04_250)] border-border hover:bg-gray-50"
                }`}
                style={{ borderRadius: "0.375rem" }}
              >
                <ArrowDownUp className="w-4 h-4" />
                Scorporo IVA (dal lordo al netto)
              </button>
              <button
                onClick={() => setModo("aggiungi")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border transition-colors ${
                  modo === "aggiungi"
                    ? "bg-[oklch(0.25_0.04_250)] text-white border-[oklch(0.25_0.04_250)]"
                    : "bg-white text-[oklch(0.25_0.04_250)] border-border hover:bg-gray-50"
                }`}
                style={{ borderRadius: "0.375rem" }}
              >
                <Plus className="w-4 h-4" />
                Aggiungi IVA (dal netto al lordo)
              </button>
            </div>
          </div>

          {/* Aliquota selector */}
          <div>
            <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2">
              Aliquota IVA
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {ALIQUOTE_IVA.map((a) => (
                <button
                  key={a.valore}
                  onClick={() => {
                    setAliquota(Number(a.valore));
                    setUsaAliquotaCustom(false);
                  }}
                  className={`px-3 py-2.5 text-sm font-medium border transition-colors ${
                    !usaAliquotaCustom && aliquota === a.valore
                      ? "bg-[oklch(0.75_0.10_85)]/20 text-[oklch(0.25_0.04_250)] border-[oklch(0.75_0.10_85)]"
                      : "bg-white text-gray-700 border-border hover:bg-gray-50"
                  }`}
                  style={{ borderRadius: "0.375rem" }}
                >
                  {a.valore}%
                </button>
              ))}
              <button
                onClick={() => setUsaAliquotaCustom(true)}
                className={`px-3 py-2.5 text-sm font-medium border transition-colors ${
                  usaAliquotaCustom
                    ? "bg-[oklch(0.75_0.10_85)]/20 text-[oklch(0.25_0.04_250)] border-[oklch(0.75_0.10_85)]"
                    : "bg-white text-gray-700 border-border hover:bg-gray-50"
                }`}
                style={{ borderRadius: "0.375rem" }}
              >
                Altra…
              </button>
            </div>

            {usaAliquotaCustom && (
              <div className="mt-3">
                <input
                  type="text"
                  inputMode="decimal"
                  value={aliquotaCustom}
                  onChange={(e) => setAliquotaCustom(e.target.value)}
                  placeholder="es. 2, 9, 21"
                  className="w-full px-4 py-2.5 border border-border text-base focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] focus:border-transparent"
                  style={{ borderRadius: "0.375rem" }}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Aliquote speciali o storiche (es. 2%, 9%, 20%, 21%)
                </p>
              </div>
            )}

            {!usaAliquotaCustom && aliquotaInfo && (
              <p className="text-xs text-muted-foreground mt-2">
                <strong>{aliquotaInfo.tipo}</strong> — {aliquotaInfo.tabella}. Divisore:{" "}
                <span className="font-mono">{aliquotaInfo.divisore.toFixed(2)}</span>
              </p>
            )}
          </div>

          {/* Importo */}
          <div>
            <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2">
              {modo === "scorporo"
                ? "Importo lordo (IVA inclusa) €"
                : "Importo netto (senza IVA) €"}
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={importo}
              onChange={(e) => setImporto(e.target.value)}
              placeholder={modo === "scorporo" ? "es. 1.220,00" : "es. 1.000,00"}
              className="w-full px-4 py-3 border border-border text-lg font-mono focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] focus:border-transparent"
              style={{ borderRadius: "0.375rem" }}
            />
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-xs text-muted-foreground self-center mr-1">
                Esempi rapidi:
              </span>
              {QUICK_FILLS.map((v) => (
                <button
                  key={v}
                  onClick={() => setImporto(v.toString())}
                  className="text-xs px-2.5 py-1 bg-gray-50 text-gray-700 border border-border hover:bg-gray-100 transition-colors"
                  style={{ borderRadius: "0.25rem" }}
                >
                  {formatEur(v)}
                </button>
              ))}
            </div>
          </div>

          {/* Reset */}
          <div>
            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-[oklch(0.25_0.04_250)] border border-border hover:bg-gray-50 transition-colors"
              style={{ borderRadius: "0.375rem" }}
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>

          {/* Risultato */}
          {risultato && (
            <div className="border-t border-border pt-6 space-y-4">
              <h4 className="text-base font-semibold text-[oklch(0.25_0.04_250)] flex items-center gap-2">
                <ArrowRightLeft className="w-5 h-5 text-[oklch(0.75_0.10_85)]" />
                {risultato.modo === "scorporo" ? "Scorporo IVA" : "IVA Aggiunta"}
                <span
                  className="ml-auto text-xs font-normal px-2 py-0.5 bg-[oklch(0.75_0.10_85)]/20 text-[oklch(0.25_0.04_250)]"
                  style={{ borderRadius: "0.25rem" }}
                >
                  Aliquota {formatPct(risultato.aliquota)}
                </span>
              </h4>

              <div
                className="overflow-hidden border border-border"
                style={{ borderRadius: "0.375rem" }}
              >
                <table className="w-full text-sm">
                  <tbody>
                    <Row
                      label={
                        risultato.modo === "scorporo"
                          ? "Imponibile (netto)"
                          : "Imponibile (netto)"
                      }
                      value={risultato.imponibile}
                      bold
                      accent
                    />
                    <Row
                      label={`IVA ${formatPct(risultato.aliquota)}`}
                      value={risultato.iva}
                    />
                    <Row
                      label={
                        risultato.modo === "scorporo"
                          ? "Totale (lordo inserito)"
                          : "Totale (lordo con IVA)"
                      }
                      value={risultato.totale}
                      bold
                      highlight
                    />
                  </tbody>
                </table>
              </div>

              {/* Formula applicata */}
              <div
                className="bg-[oklch(0.98_0.005_85)] border border-border px-4 py-3"
                style={{ borderRadius: "0.375rem" }}
              >
                <p className="text-xs text-muted-foreground mb-1">
                  Formula applicata:
                </p>
                <p className="font-mono text-sm text-[oklch(0.25_0.04_250)]">
                  {risultato.modo === "scorporo" ? (
                    <>
                      Imponibile = {formatEur(risultato.totale)} ÷{" "}
                      {risultato.divisore.toFixed(2)} ={" "}
                      {formatEur(risultato.imponibile)}
                      <br />
                      IVA = {formatEur(risultato.totale)} −{" "}
                      {formatEur(risultato.imponibile)} ={" "}
                      {formatEur(risultato.iva)}
                    </>
                  ) : (
                    <>
                      IVA = {formatEur(risultato.imponibile)} ×{" "}
                      {(risultato.aliquota / 100).toFixed(2)} ={" "}
                      {formatEur(risultato.iva)}
                      <br />
                      Totale = {formatEur(risultato.imponibile)} +{" "}
                      {formatEur(risultato.iva)} = {formatEur(risultato.totale)}
                    </>
                  )}
                </p>
              </div>

              {/* Copiable block */}
              <details
                className="bg-white border border-border px-4 py-3"
                style={{ borderRadius: "0.375rem" }}
              >
                <summary className="text-sm font-medium text-[oklch(0.25_0.04_250)] cursor-pointer">
                  Mostra dettaglio completo per fattura
                </summary>
                <div className="mt-3 space-y-1 text-sm font-mono text-gray-700">
                  <div>
                    Imponibile: <strong>{formatEur(risultato.imponibile)}</strong>
                  </div>
                  <div>
                    Aliquota IVA: <strong>{formatPct(risultato.aliquota)}</strong>
                  </div>
                  <div>
                    IVA: <strong>{formatEur(risultato.iva)}</strong>
                  </div>
                  <div>
                    Totale: <strong>{formatEur(risultato.totale)}</strong>
                  </div>
                </div>
              </details>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  bold,
  highlight,
  accent,
}: {
  label: string;
  value: number;
  bold?: boolean;
  highlight?: boolean;
  accent?: boolean;
}) {
  return (
    <tr className={highlight ? "bg-[oklch(0.98_0.005_85)]" : ""}>
      <td
        className={`px-4 py-2.5 border-b border-border ${
          bold ? "font-semibold" : ""
        } ${accent ? "text-[oklch(0.25_0.04_250)]" : "text-gray-700"}`}
      >
        {label}
      </td>
      <td
        className={`px-4 py-2.5 border-b border-border text-right font-mono ${
          bold ? "font-semibold" : ""
        } ${accent ? "text-[oklch(0.25_0.04_250)]" : "text-gray-900"}`}
      >
        {formatEur(value)}
      </td>
    </tr>
  );
}
