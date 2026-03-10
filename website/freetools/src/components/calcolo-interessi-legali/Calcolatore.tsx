"use client";

import { useState, useMemo } from "react";
import {
  calcolaInteressiLegali,
  type RisultatoInteressi,
} from "@/data/calcolo-interessi-legali/interessiData";
import { Calculator, RotateCcw, ChevronDown, ChevronUp } from "lucide-react";

type Capitalizzazione = "nessuna" | "trimestrale" | "semestrale" | "annuale";

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(n);

const formatPct = (n: number) =>
  new Intl.NumberFormat("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n) + "%";

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

export default function Calcolatore() {
  const [capitale, setCapitale] = useState("");
  const [dataInizio, setDataInizio] = useState("");
  const [dataFine, setDataFine] = useState("");
  const [capitalizzazione, setCapitalizzazione] = useState<Capitalizzazione>("nessuna");
  const [risultato, setRisultato] = useState<RisultatoInteressi | null>(null);
  const [showDettaglio, setShowDettaglio] = useState(false);

  const capitaleNum = useMemo(() => {
    const cleaned = capitale.replace(/\./g, "").replace(",", ".");
    return parseFloat(cleaned) || 0;
  }, [capitale]);

  const handleCalcola = () => {
    if (!capitaleNum || !dataInizio || !dataFine) return;
    const inizio = new Date(dataInizio);
    const fine = new Date(dataFine);
    if (fine <= inizio) return;
    const res = calcolaInteressiLegali(capitaleNum, inizio, fine, capitalizzazione);
    setRisultato(res);
    setShowDettaglio(false);
  };

  const handleReset = () => {
    setCapitale("");
    setDataInizio("");
    setDataFine("");
    setCapitalizzazione("nessuna");
    setRisultato(null);
    setShowDettaglio(false);
  };

  return (
    <div id="calcolatore" className="scroll-mt-24">
      <div className="bg-white border border-border shadow-lg overflow-hidden" style={{ borderRadius: "0.5rem" }}>
        {/* Header */}
        <div className="bg-[oklch(0.25_0.04_250)] px-6 py-5 flex items-center gap-3">
          <Calculator className="w-6 h-6 text-[oklch(0.75_0.10_85)]" />
          <h2 className="text-xl text-[oklch(0.90_0.01_85)] tracking-wide">Calcolo Interessi Legali</h2>
        </div>

        <div className="p-6 space-y-6">
          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Capitale */}
            <div>
              <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                Capitale (&euro;)
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={capitale}
                onChange={(e) => setCapitale(e.target.value)}
                placeholder="es. 10.000,00"
                className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                style={{ borderRadius: "0.375rem" }}
              />
            </div>

            {/* Capitalizzazione */}
            <div>
              <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                Capitalizzazione
              </label>
              <select
                value={capitalizzazione}
                onChange={(e) => setCapitalizzazione(e.target.value as Capitalizzazione)}
                className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                style={{ borderRadius: "0.375rem" }}
              >
                <option value="nessuna">Nessuna (interesse semplice)</option>
                <option value="annuale">Annuale</option>
                <option value="semestrale">Semestrale</option>
                <option value="trimestrale">Trimestrale</option>
              </select>
            </div>

            {/* Data inizio */}
            <div>
              <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                Data inizio
              </label>
              <input
                type="date"
                value={dataInizio}
                onChange={(e) => setDataInizio(e.target.value)}
                className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                style={{ borderRadius: "0.375rem" }}
              />
            </div>

            {/* Data fine */}
            <div>
              <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                Data fine
              </label>
              <input
                type="date"
                value={dataFine}
                onChange={(e) => setDataFine(e.target.value)}
                className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                style={{ borderRadius: "0.375rem" }}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleCalcola}
              disabled={!capitaleNum || !dataInizio || !dataFine}
              className="bg-[oklch(0.75_0.10_85)] text-[oklch(0.22_0.04_250)] font-semibold px-6 py-3 text-sm hover:bg-[oklch(0.70_0.12_85)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ borderRadius: "0.375rem" }}
            >
              Calcola Interessi
            </button>
            <button
              onClick={handleReset}
              className="border border-border text-[oklch(0.40_0.02_250)] font-medium px-4 py-3 text-sm hover:bg-[oklch(0.97_0.005_250)] transition-colors flex items-center gap-2"
              style={{ borderRadius: "0.375rem" }}
            >
              <RotateCcw className="w-4 h-4" />
              Azzera
            </button>
          </div>

          {/* Results */}
          {risultato && (
            <div className="border-t border-border pt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[oklch(0.97_0.005_250)] p-4" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider mb-1">Capitale</p>
                  <p className="text-lg font-semibold text-[oklch(0.25_0.04_250)] font-mono">{formatCurrency(capitaleNum)}</p>
                </div>
                <div className="bg-[oklch(0.97_0.005_85)] p-4" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-xs font-semibold text-[oklch(0.50_0.08_85)] uppercase tracking-wider mb-1">Interessi</p>
                  <p className="text-lg font-semibold text-[oklch(0.35_0.10_85)] font-mono">{formatCurrency(risultato.totaleInteressi)}</p>
                </div>
                <div className="bg-[oklch(0.25_0.04_250)] p-4" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-xs font-semibold text-[oklch(0.65_0.06_85)] uppercase tracking-wider mb-1">Montante</p>
                  <p className="text-lg font-semibold text-white font-mono">{formatCurrency(risultato.montante)}</p>
                </div>
              </div>

              {/* Detail toggle */}
              {risultato.dettaglio.length > 0 && (
                <div>
                  <button
                    onClick={() => setShowDettaglio(!showDettaglio)}
                    className="flex items-center gap-2 text-sm font-medium text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] transition-colors"
                  >
                    {showDettaglio ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    {showDettaglio ? "Nascondi dettaglio" : "Mostra dettaglio per periodo"}
                  </button>

                  {showDettaglio && (
                    <div className="mt-3 overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 px-3 text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider">Dal</th>
                            <th className="text-left py-2 px-3 text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider">Al</th>
                            <th className="text-right py-2 px-3 text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider">Tasso</th>
                            <th className="text-right py-2 px-3 text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider">Giorni</th>
                            <th className="text-right py-2 px-3 text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider">Capitale</th>
                            <th className="text-right py-2 px-3 text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider">Interessi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {risultato.dettaglio.map((d, i) => (
                            <tr key={i} className="border-b border-border/50 hover:bg-[oklch(0.98_0.002_250)]">
                              <td className="py-2 px-3 font-mono text-xs">{formatDate(d.dal)}</td>
                              <td className="py-2 px-3 font-mono text-xs">{formatDate(d.al)}</td>
                              <td className="py-2 px-3 text-right font-mono text-xs">{formatPct(d.tasso)}</td>
                              <td className="py-2 px-3 text-right font-mono text-xs">{d.giorni}</td>
                              <td className="py-2 px-3 text-right font-mono text-xs">{formatCurrency(d.capitale)}</td>
                              <td className="py-2 px-3 text-right font-mono text-xs font-semibold text-[oklch(0.35_0.10_85)]">{formatCurrency(d.interessi)}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr className="border-t-2 border-border">
                            <td colSpan={5} className="py-2 px-3 text-right font-semibold text-xs uppercase tracking-wider">Totale Interessi</td>
                            <td className="py-2 px-3 text-right font-mono font-bold text-[oklch(0.35_0.10_85)]">{formatCurrency(risultato.totaleInteressi)}</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
