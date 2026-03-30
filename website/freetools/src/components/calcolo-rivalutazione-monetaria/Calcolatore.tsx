"use client";

import { useState, useMemo } from "react";
import {
  calcolaRivalutazione,
  type ModalitaCalcolo,
  type RisultatoRivalutazione,
} from "@/data/calcolo-rivalutazione-monetaria/rivalutazioneData";
import { Calculator, RotateCcw, ChevronDown, ChevronUp } from "lucide-react";

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
  const [modalita, setModalita] = useState<ModalitaCalcolo>("rivalutazione-interessi");
  const [percentuale, setPercentuale] = useState("100");
  const [risultato, setRisultato] = useState<RisultatoRivalutazione | null>(null);
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
    const res = calcolaRivalutazione(capitaleNum, inizio, fine, modalita, parseFloat(percentuale));
    setRisultato(res);
    setShowDettaglio(false);
  };

  const handleReset = () => {
    setCapitale("");
    setDataInizio("");
    setDataFine("");
    setModalita("rivalutazione-interessi");
    setPercentuale("100");
    setRisultato(null);
    setShowDettaglio(false);
  };

  const showRivalutazione = modalita !== "solo-interessi";
  const showInteressi = modalita !== "solo-rivalutazione";

  return (
    <div id="calcolatore" className="scroll-mt-24">
      <div className="bg-white border border-border shadow-lg overflow-hidden" style={{ borderRadius: "0.5rem" }}>
        {/* Header */}
        <div className="bg-[oklch(0.25_0.04_250)] px-6 py-5 flex items-center gap-3">
          <Calculator className="w-6 h-6 text-[oklch(0.75_0.10_85)]" />
          <h2 className="text-xl text-[oklch(0.90_0.01_85)] tracking-wide">Calcolo Rivalutazione Monetaria</h2>
        </div>

        <div className="p-6 space-y-6">
          {/* Row 1: Capitale + Modalità */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                Capitale (€)
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

            <div>
              <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                Modalità di calcolo
              </label>
              <select
                value={modalita}
                onChange={(e) => setModalita(e.target.value as ModalitaCalcolo)}
                className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                style={{ borderRadius: "0.375rem" }}
              >
                <option value="rivalutazione-interessi">Rivalutazione + Interessi Legali</option>
                <option value="solo-rivalutazione">Solo Rivalutazione Monetaria</option>
                <option value="solo-interessi">Solo Interessi Legali</option>
              </select>
            </div>
          </div>

          {/* Row 2: Date + Percentuale */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            {showRivalutazione && (
              <div>
                <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                  Rivaluta al
                </label>
                <select
                  value={percentuale}
                  onChange={(e) => setPercentuale(e.target.value)}
                  className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <option value="100">100% (rivalutazione piena)</option>
                  <option value="75">75% (locazioni L. 392/1978)</option>
                </select>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleCalcola}
              disabled={!capitaleNum || !dataInizio || !dataFine}
              className="bg-[oklch(0.75_0.10_85)] text-[oklch(0.22_0.04_250)] font-semibold px-6 py-3 text-sm hover:bg-[oklch(0.70_0.12_85)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ borderRadius: "0.375rem" }}
            >
              Calcola Rivalutazione
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[oklch(0.97_0.005_250)] p-4" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider mb-1">Capitale iniziale</p>
                  <p className="text-lg font-semibold text-[oklch(0.25_0.04_250)] font-mono">{formatCurrency(risultato.capitaleIniziale)}</p>
                </div>
                {showRivalutazione && (
                  <div className="bg-[oklch(0.97_0.005_85)] p-4" style={{ borderRadius: "0.375rem" }}>
                    <p className="text-xs font-semibold text-[oklch(0.50_0.08_85)] uppercase tracking-wider mb-1">Rivalutazione ({formatPct(risultato.percentualeRivalutazione)})</p>
                    <p className="text-lg font-semibold text-[oklch(0.35_0.10_85)] font-mono">{formatCurrency(risultato.rivalutazioneTotale)}</p>
                  </div>
                )}
                {showInteressi && (
                  <div className="bg-[oklch(0.97_0.005_85)] p-4" style={{ borderRadius: "0.375rem" }}>
                    <p className="text-xs font-semibold text-[oklch(0.50_0.08_85)] uppercase tracking-wider mb-1">Interessi legali</p>
                    <p className="text-lg font-semibold text-[oklch(0.35_0.10_85)] font-mono">{formatCurrency(risultato.interessiTotali)}</p>
                  </div>
                )}
                <div className="bg-[oklch(0.25_0.04_250)] p-4" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-xs font-semibold text-[oklch(0.65_0.06_85)] uppercase tracking-wider mb-1">Totale</p>
                  <p className="text-lg font-semibold text-white font-mono">{formatCurrency(risultato.totaleComplessivo)}</p>
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
                    {showDettaglio ? "Nascondi dettaglio annuale" : "Mostra dettaglio anno per anno"}
                  </button>

                  {showDettaglio && (
                    <div className="mt-3 overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 px-3 text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider">Anno</th>
                            <th className="text-left py-2 px-3 text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider">Dal</th>
                            <th className="text-left py-2 px-3 text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider">Al</th>
                            {showRivalutazione && (
                              <>
                                <th className="text-right py-2 px-3 text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider">FOI %</th>
                                <th className="text-right py-2 px-3 text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider">Rivalutaz.</th>
                                <th className="text-right py-2 px-3 text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider">Cap. Riv.</th>
                              </>
                            )}
                            {showInteressi && (
                              <>
                                <th className="text-right py-2 px-3 text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider">Tasso</th>
                                <th className="text-right py-2 px-3 text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider">Interessi</th>
                              </>
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {risultato.dettaglio.map((d) => (
                            <tr key={d.anno} className="border-b border-border/50 hover:bg-[oklch(0.98_0.002_250)]">
                              <td className="py-2 px-3 font-mono text-xs font-semibold">{d.anno}</td>
                              <td className="py-2 px-3 font-mono text-xs">{formatDate(d.dal)}</td>
                              <td className="py-2 px-3 font-mono text-xs">{formatDate(d.al)}</td>
                              {showRivalutazione && (
                                <>
                                  <td className="py-2 px-3 text-right font-mono text-xs">{formatPct(d.variazioneFOI)}</td>
                                  <td className="py-2 px-3 text-right font-mono text-xs">{formatCurrency(d.rivalutazioneAnno)}</td>
                                  <td className="py-2 px-3 text-right font-mono text-xs">{formatCurrency(d.capitaleRivalutato)}</td>
                                </>
                              )}
                              {showInteressi && (
                                <>
                                  <td className="py-2 px-3 text-right font-mono text-xs">{formatPct(d.tassoInteresse)}</td>
                                  <td className="py-2 px-3 text-right font-mono text-xs font-semibold text-[oklch(0.35_0.10_85)]">{formatCurrency(d.interessiAnno)}</td>
                                </>
                              )}
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr className="border-t-2 border-border">
                            <td colSpan={3} className="py-2 px-3 text-right font-semibold text-xs uppercase tracking-wider">Totali</td>
                            {showRivalutazione && (
                              <>
                                <td className="py-2 px-3" />
                                <td className="py-2 px-3 text-right font-mono font-bold text-[oklch(0.35_0.10_85)]">{formatCurrency(risultato.rivalutazioneTotale)}</td>
                                <td className="py-2 px-3 text-right font-mono font-bold">{formatCurrency(risultato.capitaleRivalutato)}</td>
                              </>
                            )}
                            {showInteressi && (
                              <>
                                <td className="py-2 px-3" />
                                <td className="py-2 px-3 text-right font-mono font-bold text-[oklch(0.35_0.10_85)]">{formatCurrency(risultato.interessiTotali)}</td>
                              </>
                            )}
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  )}
                </div>
              )}

              <p className="text-xs text-muted-foreground">
                Nota: il calcolo utilizza variazioni annue medie dell'indice FOI ISTAT. Per calcoli su base mensile, consultare il{" "}
                <a
                  href="https://rivaluta.istat.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
                >
                  calcolatore ufficiale ISTAT
                </a>.
                Interessi calcolati secondo Cass. SS.UU. 1712/1995.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
