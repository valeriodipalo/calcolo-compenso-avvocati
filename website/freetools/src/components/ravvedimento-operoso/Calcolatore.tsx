"use client";

import { useMemo, useState } from "react";
import {
  Calculator,
  RotateCcw,
  AlertTriangle,
  Receipt,
  CalendarClock,
  Info,
} from "lucide-react";
import {
  CODICI_TRIBUTO_RAVVEDIMENTO,
  calcolaRavvedimento,
  type RisultatoRavvedimento,
} from "@/data/ravvedimento-operoso/ravvedimentoOperosoData";
import { formatEur, formatPct } from "@/lib/utils";

const QUICK_FILLS = [500, 1000, 2000, 5000, 10000];

const parseNum = (val: string): number => {
  const cleaned = val.replace(/\./g, "").replace(",", ".");
  return parseFloat(cleaned) || 0;
};

/** Format YYYY-MM-DD for input[type=date] */
const toIsoDate = (d: Date): string => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

const today = new Date();
const todayIso = toIsoDate(today);
const defaultScadenza = (() => {
  const d = new Date();
  d.setDate(d.getDate() - 30);
  return toIsoDate(d);
})();

export default function Calcolatore() {
  const [tipoTributo, setTipoTributo] = useState<string>("iva-mensile");
  const [imposta, setImposta] = useState<string>("");
  const [dataScadenza, setDataScadenza] = useState<string>(defaultScadenza);
  const [dataVersamento, setDataVersamento] = useState<string>(todayIso);

  const impostaNum = useMemo(() => parseNum(imposta), [imposta]);

  const risultato: RisultatoRavvedimento | null = useMemo(() => {
    if (!impostaNum || impostaNum <= 0) return null;
    if (!dataScadenza || !dataVersamento) return null;

    const scadenza = new Date(dataScadenza);
    const versamento = new Date(dataVersamento);
    if (isNaN(scadenza.getTime()) || isNaN(versamento.getTime())) return null;
    if (versamento < scadenza) return null;

    return calcolaRavvedimento({
      tipoTributoId: tipoTributo,
      imposta: impostaNum,
      dataScadenza: scadenza,
      dataVersamento: versamento,
    });
  }, [tipoTributo, impostaNum, dataScadenza, dataVersamento]);

  const handleReset = () => {
    setImposta("");
    setTipoTributo("iva-mensile");
    setDataScadenza(defaultScadenza);
    setDataVersamento(todayIso);
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
            Calcolatore Ravvedimento Operoso 2026
          </h3>
        </div>

        <div className="p-6 space-y-6">
          {/* Tipo tributo */}
          <div>
            <label
              htmlFor="ravv-tributo"
              className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2"
            >
              Tipo di tributo
            </label>
            <select
              id="ravv-tributo"
              value={tipoTributo}
              onChange={(e) => setTipoTributo(e.target.value)}
              className="w-full px-4 py-2.5 border border-border text-base bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] focus:border-transparent"
              style={{ borderRadius: "0.375rem" }}
            >
              <optgroup label="IVA">
                <option value="iva-mensile">IVA mensile</option>
                <option value="iva-trimestrale">IVA trimestrale</option>
                <option value="iva-annuale">IVA saldo annuale</option>
              </optgroup>
              <optgroup label="IRPEF">
                <option value="irpef-saldo">IRPEF saldo</option>
                <option value="irpef-acconto-1">IRPEF acconto 1ª</option>
                <option value="irpef-acconto-2">IRPEF acconto 2ª</option>
              </optgroup>
              <optgroup label="IRES / IRAP">
                <option value="ires-saldo">IRES saldo</option>
                <option value="ires-acconto-1">IRES acconto 1ª</option>
                <option value="ires-acconto-2">IRES acconto 2ª</option>
                <option value="irap-saldo">IRAP saldo</option>
                <option value="irap-acconto-1">IRAP acconto 1ª</option>
              </optgroup>
              <optgroup label="Ritenute">
                <option value="ritenute-dipendente">Ritenute lavoro dipendente</option>
                <option value="ritenute-autonomo">Ritenute lavoro autonomo (20%)</option>
              </optgroup>
              <optgroup label="Cedolare secca">
                <option value="cedolare-saldo">Cedolare secca saldo</option>
                <option value="cedolare-acconto-1">Cedolare secca acconto 1ª</option>
                <option value="cedolare-acconto-2">Cedolare secca acconto 2ª</option>
              </optgroup>
              <optgroup label="Regime forfettario">
                <option value="forfettario-saldo">Imposta sostitutiva — saldo</option>
                <option value="forfettario-acconto-1">Imposta sostitutiva — acc. 1ª</option>
                <option value="forfettario-acconto-2">Imposta sostitutiva — acc. 2ª</option>
              </optgroup>
              <optgroup label="IMU">
                <option value="imu-abitazione">IMU abitazione principale (A/1, A/8, A/9)</option>
                <option value="imu-altri-fabbricati">IMU altri fabbricati</option>
                <option value="imu-aree-fabbricabili">IMU aree fabbricabili</option>
                <option value="imu-terreni">IMU terreni agricoli</option>
              </optgroup>
            </select>
          </div>

          {/* Importo */}
          <div>
            <label
              htmlFor="ravv-imposta"
              className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2"
            >
              Importo dell'imposta non versata (€)
            </label>
            <input
              id="ravv-imposta"
              type="text"
              inputMode="decimal"
              value={imposta}
              onChange={(e) => setImposta(e.target.value)}
              placeholder="es. 1.500,00"
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
                  type="button"
                  onClick={() => setImposta(v.toString())}
                  className="text-xs px-2.5 py-1 bg-gray-50 text-gray-700 border border-border hover:bg-gray-100 transition-colors"
                  style={{ borderRadius: "0.25rem" }}
                >
                  {formatEur(v)}
                </button>
              ))}
            </div>
          </div>

          {/* Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="ravv-scadenza"
                className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2"
              >
                Data di scadenza originaria
              </label>
              <input
                id="ravv-scadenza"
                type="date"
                value={dataScadenza}
                onChange={(e) => setDataScadenza(e.target.value)}
                className="w-full px-4 py-3 border border-border text-base font-mono focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] focus:border-transparent"
                style={{ borderRadius: "0.375rem" }}
              />
            </div>

            <div>
              <label
                htmlFor="ravv-versamento"
                className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2"
              >
                Data del versamento (ravvedimento)
              </label>
              <input
                id="ravv-versamento"
                type="date"
                value={dataVersamento}
                onChange={(e) => setDataVersamento(e.target.value)}
                className="w-full px-4 py-3 border border-border text-base font-mono focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] focus:border-transparent"
                style={{ borderRadius: "0.375rem" }}
              />
            </div>
          </div>

          {/* Reset */}
          <div>
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-[oklch(0.25_0.04_250)] border border-border hover:bg-gray-50 transition-colors"
              style={{ borderRadius: "0.375rem" }}
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>

          {/* Risultato */}
          {risultato && risultato.giorniRitardo > 0 && (
            <div className="border-t border-border pt-6 space-y-4">
              {/* Regime + tier badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 bg-[oklch(0.25_0.04_250)] text-white"
                  style={{ borderRadius: "0.25rem" }}
                >
                  <CalendarClock className="w-3.5 h-3.5" />
                  {risultato.giorniRitardo} giorni di ritardo
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 bg-[oklch(0.75_0.10_85)]/20 text-[oklch(0.25_0.04_250)] border border-[oklch(0.75_0.10_85)]"
                  style={{ borderRadius: "0.25rem" }}
                >
                  {risultato.tierLabel}
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-700 border border-border"
                  style={{ borderRadius: "0.25rem" }}
                >
                  Regime{" "}
                  {risultato.regime === "nuovo"
                    ? "post 1/9/2024"
                    : "previgente"}
                </span>
              </div>

              {/* Tabella riepilogo */}
              <div
                className="overflow-hidden border border-border"
                style={{ borderRadius: "0.375rem" }}
              >
                <table className="w-full text-sm">
                  <tbody>
                    <Row label="Imposta dovuta" value={risultato.imposta} bold />
                    <Row
                      label={`Sanzione ridotta (${formatPct(
                        risultato.sanzionePerc * 100,
                      )})`}
                      value={risultato.sanzione}
                    />
                    <Row
                      label="Interessi legali (pro-rata)"
                      value={risultato.interessiTotali}
                    />
                    <Row
                      label="Totale F24"
                      value={risultato.totale}
                      bold
                      highlight
                    />
                  </tbody>
                </table>
              </div>

              {/* Formula */}
              <div
                className="bg-[oklch(0.98_0.005_85)] border border-border px-4 py-3"
                style={{ borderRadius: "0.375rem" }}
              >
                <p className="text-xs text-muted-foreground mb-1">
                  Riduzione applicata:
                </p>
                <p className="font-mono text-sm text-[oklch(0.25_0.04_250)]">
                  {risultato.riduzioneFrazione} ={" "}
                  {formatPct(risultato.sanzionePerc * 100)}
                </p>
              </div>

              {/* Breakdown interessi */}
              {risultato.interessiBreakdown.length > 0 && (
                <details
                  className="bg-white border border-border px-4 py-3"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <summary className="text-sm font-medium text-[oklch(0.25_0.04_250)] cursor-pointer">
                    Mostra dettaglio interessi pro-rata anno
                  </summary>
                  <div className="mt-3">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="text-left text-gray-600">
                          <th className="px-2 py-1.5 font-medium border-b border-border">
                            Periodo
                          </th>
                          <th className="px-2 py-1.5 font-medium border-b border-border text-right">
                            Giorni
                          </th>
                          <th className="px-2 py-1.5 font-medium border-b border-border text-right">
                            Tasso
                          </th>
                          <th className="px-2 py-1.5 font-medium border-b border-border text-right">
                            Importo
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {risultato.interessiBreakdown.map((b, idx) => (
                          <tr key={idx} className="text-gray-700">
                            <td className="px-2 py-1.5 border-b border-border font-mono">
                              {b.periodo}
                            </td>
                            <td className="px-2 py-1.5 border-b border-border text-right font-mono">
                              {b.giorni}
                            </td>
                            <td className="px-2 py-1.5 border-b border-border text-right font-mono">
                              {formatPct(b.tasso * 100)}
                            </td>
                            <td className="px-2 py-1.5 border-b border-border text-right font-mono">
                              {formatEur(b.importo)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </details>
              )}

              {/* Codici tributo F24 */}
              {risultato.codici && (
                <div
                  className="bg-white border border-border p-4 space-y-2"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <h4 className="text-sm font-semibold text-[oklch(0.25_0.04_250)] flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-[oklch(0.75_0.10_85)]" />
                    Codici tributo F24 — Sezione {risultato.codici.sezione}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    <CodiceCard
                      label="Imposta"
                      codice={risultato.codici.codiceImposta}
                      valore={risultato.imposta}
                    />
                    <CodiceCard
                      label="Sanzione"
                      codice={risultato.codici.codiceSanzione}
                      valore={risultato.sanzione}
                    />
                    <CodiceCard
                      label="Interessi"
                      codice={risultato.codici.codiceInteressi}
                      valore={risultato.interessiTotali}
                    />
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div
                className="bg-blue-50 border border-blue-200 px-4 py-3 flex gap-3"
                style={{ borderRadius: "0.375rem" }}
              >
                <Info className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-blue-900 space-y-1">
                  <p>
                    <strong>Calcolo automatico</strong>: il regime
                    sanzionatorio è determinato in base alla{" "}
                    <em>data di scadenza</em>: violazioni dal 1° settembre 2024
                    applicano il D.Lgs. 87/2024 (sanzione base 25%); violazioni
                    precedenti applicano il regime D.Lgs. 158/2015 (sanzione base 30%).
                  </p>
                  <p>
                    Gli interessi sono calcolati pro-rata anno con i tassi
                    legali vigenti (1,60% dal 2026, 2% nel 2025, 2,5% nel 2024).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Errore: data versamento < scadenza */}
          {imposta &&
            dataScadenza &&
            dataVersamento &&
            new Date(dataVersamento) < new Date(dataScadenza) && (
              <div
                className="bg-red-50 border border-red-200 px-4 py-3 flex gap-3"
                style={{ borderRadius: "0.375rem" }}
              >
                <AlertTriangle className="w-4 h-4 text-red-700 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-red-900">
                  La data del versamento deve essere successiva alla data di
                  scadenza.
                </p>
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
}: {
  label: string;
  value: number;
  bold?: boolean;
  highlight?: boolean;
}) {
  return (
    <tr className={highlight ? "bg-[oklch(0.98_0.005_85)]" : ""}>
      <td
        className={`px-4 py-2.5 border-b border-border ${
          bold ? "font-semibold text-[oklch(0.25_0.04_250)]" : "text-gray-700"
        }`}
      >
        {label}
      </td>
      <td
        className={`px-4 py-2.5 border-b border-border text-right font-mono ${
          bold ? "font-semibold text-[oklch(0.25_0.04_250)]" : "text-gray-900"
        }`}
      >
        {formatEur(value)}
      </td>
    </tr>
  );
}

function CodiceCard({
  label,
  codice,
  valore,
}: {
  label: string;
  codice: string;
  valore: number;
}) {
  return (
    <div
      className="bg-gray-50 border border-border px-3 py-2.5"
      style={{ borderRadius: "0.25rem" }}
    >
      <p className="text-[10px] uppercase tracking-wide text-gray-600 mb-1">
        {label}
      </p>
      <p className="font-mono font-semibold text-sm text-[oklch(0.25_0.04_250)]">
        {codice}
      </p>
      <p className="font-mono text-xs text-gray-700 mt-0.5">
        {formatEur(valore)}
      </p>
    </div>
  );
}
