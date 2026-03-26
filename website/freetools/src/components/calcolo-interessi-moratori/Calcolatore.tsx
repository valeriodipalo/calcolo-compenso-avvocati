"use client";

import { useState, useMemo } from "react";
import {
  calcolaInteressiMoratori,
  type RisultatoMoratori,
  type OpzioniCalcolo,
} from "@/data/calcolo-interessi-moratori/interessiMoratoriData";
import { Calculator, RotateCcw, ChevronDown, ChevronUp, Building2, Users, SlidersHorizontal } from "lucide-react";

type Modo = "commerciale" | "privati" | "fisso";

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(n);

const formatPct = (n: number) =>
  new Intl.NumberFormat("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n) + "%";

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

const modeInfo: Record<Modo, { label: string; desc: string; icon: typeof Building2 }> = {
  commerciale: {
    label: "Transazioni Commerciali",
    desc: "D.Lgs. 231/2002 — BCE + 8%",
    icon: Building2,
  },
  privati: {
    label: "Tra Privati",
    desc: "Art. 1224 c.c. — tasso legale",
    icon: Users,
  },
  fisso: {
    label: "Tasso Fisso",
    desc: "Tasso personalizzato",
    icon: SlidersHorizontal,
  },
};

export default function Calcolatore() {
  const [capitale, setCapitale] = useState("");
  const [dataInizio, setDataInizio] = useState("");
  const [dataFine, setDataFine] = useState("");
  const [modo, setModo] = useState<Modo>("commerciale");
  const [agricolo, setAgricolo] = useState(false);
  const [includiForfe, setIncludiForfe] = useState(true);
  const [tassoFisso, setTassoFisso] = useState("");
  const [risultato, setRisultato] = useState<RisultatoMoratori | null>(null);
  const [showDettaglio, setShowDettaglio] = useState(false);

  const capitaleNum = useMemo(() => {
    const cleaned = capitale.replace(/\./g, "").replace(",", ".");
    return parseFloat(cleaned) || 0;
  }, [capitale]);

  const tassoFissoNum = useMemo(() => {
    const cleaned = tassoFisso.replace(/\./g, "").replace(",", ".");
    return parseFloat(cleaned) || 0;
  }, [tassoFisso]);

  const handleCalcola = () => {
    if (!capitaleNum || !dataInizio || !dataFine) return;
    if (modo === "fisso" && !tassoFissoNum) return;
    const inizio = new Date(dataInizio);
    const fine = new Date(dataFine);
    if (fine <= inizio) return;

    const opzioni: OpzioniCalcolo = {
      modo,
      agricolo: modo === "commerciale" ? agricolo : false,
      tassoFisso: modo === "fisso" ? tassoFissoNum : undefined,
      includiForfe: modo === "commerciale" ? includiForfe : false,
    };

    const res = calcolaInteressiMoratori(capitaleNum, inizio, fine, opzioni);
    setRisultato(res);
    setShowDettaglio(false);
  };

  const handleReset = () => {
    setCapitale("");
    setDataInizio("");
    setDataFine("");
    setModo("commerciale");
    setAgricolo(false);
    setIncludiForfe(true);
    setTassoFisso("");
    setRisultato(null);
    setShowDettaglio(false);
  };

  return (
    <div id="calcolatore" className="scroll-mt-24">
      <div className="bg-white border border-border shadow-lg overflow-hidden" style={{ borderRadius: "0.5rem" }}>
        {/* Header */}
        <div className="bg-[oklch(0.25_0.04_250)] px-6 py-5 flex items-center gap-3">
          <Calculator className="w-6 h-6 text-[oklch(0.75_0.10_85)]" />
          <h2 className="text-xl text-[oklch(0.90_0.01_85)] tracking-wide">Calcolo Interessi Moratori</h2>
        </div>

        <div className="p-6 space-y-6">
          {/* Mode selector */}
          <div>
            <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-3">
              Tipo di obbligazione
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(Object.keys(modeInfo) as Modo[]).map((m) => {
                const info = modeInfo[m];
                const Icon = info.icon;
                const isActive = modo === m;
                return (
                  <button
                    key={m}
                    onClick={() => { setModo(m); setRisultato(null); }}
                    className={`flex items-center gap-3 p-3 border text-left transition-all ${
                      isActive
                        ? "border-[oklch(0.75_0.10_85)] bg-[oklch(0.97_0.005_85)]"
                        : "border-border bg-white hover:bg-[oklch(0.98_0.002_250)]"
                    }`}
                    style={{ borderRadius: "0.375rem" }}
                  >
                    <div className={`p-2 ${isActive ? "bg-[oklch(0.25_0.04_250)]" : "bg-[oklch(0.95_0.005_250)]"}`} style={{ borderRadius: "0.375rem" }}>
                      <Icon className={`w-4 h-4 ${isActive ? "text-[oklch(0.75_0.10_85)]" : "text-[oklch(0.50_0.02_250)]"}`} />
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${isActive ? "text-[oklch(0.25_0.04_250)]" : "text-[oklch(0.40_0.02_250)]"}`}>{info.label}</p>
                      <p className="text-xs text-muted-foreground">{info.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Capitale */}
            <div>
              <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                Importo dovuto (€)
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

            {/* Tasso Fisso (solo modo fisso) */}
            {modo === "fisso" && (
              <div>
                <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                  Tasso annuo (%)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={tassoFisso}
                  onChange={(e) => setTassoFisso(e.target.value)}
                  placeholder="es. 10,15"
                  className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                  style={{ borderRadius: "0.375rem" }}
                />
              </div>
            )}

            {/* Data inizio mora */}
            <div>
              <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                Data inizio mora
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
                Data pagamento / calcolo
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

          {/* Toggles per modo commerciale */}
          {modo === "commerciale" && (
            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agricolo}
                  onChange={(e) => setAgricolo(e.target.checked)}
                  className="w-4 h-4 accent-[oklch(0.75_0.10_85)]"
                />
                <span className="text-sm text-[oklch(0.35_0.02_250)]">
                  Prodotti agricoli / agroalimentari (+4%)
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includiForfe}
                  onChange={(e) => setIncludiForfe(e.target.checked)}
                  className="w-4 h-4 accent-[oklch(0.75_0.10_85)]"
                />
                <span className="text-sm text-[oklch(0.35_0.02_250)]">
                  Includi forfettario € 40 (art. 6)
                </span>
              </label>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleCalcola}
              disabled={!capitaleNum || !dataInizio || !dataFine || (modo === "fisso" && !tassoFissoNum)}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[oklch(0.97_0.005_250)] p-4" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider mb-1">Capitale</p>
                  <p className="text-lg font-semibold text-[oklch(0.25_0.04_250)] font-mono">{formatCurrency(capitaleNum)}</p>
                </div>
                <div className="bg-[oklch(0.97_0.005_85)] p-4" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-xs font-semibold text-[oklch(0.50_0.08_85)] uppercase tracking-wider mb-1">Interessi moratori</p>
                  <p className="text-lg font-semibold text-[oklch(0.35_0.10_85)] font-mono">{formatCurrency(risultato.totaleInteressi)}</p>
                </div>
                {risultato.importoForfettario > 0 && (
                  <div className="bg-[oklch(0.97_0.005_155)] p-4" style={{ borderRadius: "0.375rem" }}>
                    <p className="text-xs font-semibold text-[oklch(0.40_0.10_155)] uppercase tracking-wider mb-1">Forfettario art. 6</p>
                    <p className="text-lg font-semibold text-[oklch(0.35_0.10_155)] font-mono">{formatCurrency(risultato.importoForfettario)}</p>
                  </div>
                )}
                <div className="bg-[oklch(0.25_0.04_250)] p-4" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-xs font-semibold text-[oklch(0.65_0.06_85)] uppercase tracking-wider mb-1">Totale mora</p>
                  <p className="text-lg font-semibold text-white font-mono">{formatCurrency(risultato.totaleConForfettario)}</p>
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
                          {risultato.importoForfettario > 0 && (
                            <>
                              <tr>
                                <td colSpan={5} className="py-1 px-3 text-right font-semibold text-xs uppercase tracking-wider text-[oklch(0.40_0.10_155)]">Forfettario art. 6</td>
                                <td className="py-1 px-3 text-right font-mono font-bold text-[oklch(0.35_0.10_155)]">{formatCurrency(risultato.importoForfettario)}</td>
                              </tr>
                              <tr className="border-t border-border">
                                <td colSpan={5} className="py-2 px-3 text-right font-semibold text-xs uppercase tracking-wider">Totale Mora</td>
                                <td className="py-2 px-3 text-right font-mono font-bold text-[oklch(0.25_0.04_250)]">{formatCurrency(risultato.totaleConForfettario)}</td>
                              </tr>
                            </>
                          )}
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
