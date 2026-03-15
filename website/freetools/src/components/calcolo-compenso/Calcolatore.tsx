"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { Calculator, RotateCcw, ChevronDown, ChevronUp } from "lucide-react";
import {
  type PhaseSelection,
  type Aumento,
  type Riduzione,
  type SpeseState,
  type AccessoriState,
  type PhaseData,
  type ValueMode,
  type CalcResult,
  PHASE_NAMES,
  DEFAULT_SPESE_GENERALI_PCT,
  COMPETENZE,
  SCAGLIONI,
  TAR_CDS_COMPETENZE,
  CASSAZIONE_COMPETENZE,
  getPhases,
  getDefaultAumenti,
  getDefaultRiduzioni,
  calculate,
  calculatePiuPartiPct,
  formatEuro,
} from "@/data/calcolo-compenso/compensoData";

/* ────────────────────────────── helpers ────────────────────────── */

const inputCls =
  "w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all";
const inputSmCls =
  "border border-border bg-white px-2 py-1.5 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all";
const labelCls =
  "block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2";
const sectionHeadCls =
  "text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider mb-2";

/* ───────────────────────── RadioDot for phases ────────────────── */

function RadioDot({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-4 w-4 flex-shrink-0 border-2 flex items-center justify-center transition-colors"
      style={{
        borderRadius: "50%",
        borderColor: active ? "oklch(0.25 0.04 250)" : "oklch(0.70 0.02 250)",
        backgroundColor: active ? "oklch(0.25 0.04 250)" : "transparent",
      }}
    >
      {active && (
        <span
          className="block h-1.5 w-1.5"
          style={{ borderRadius: "50%", backgroundColor: "white" }}
        />
      )}
    </button>
  );
}

/* ─────────────────── Checkbox (simplified) ────────────────────── */

function Check({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="h-4 w-4 flex-shrink-0 border-2 flex items-center justify-center transition-colors"
      style={{
        borderRadius: "0.25rem",
        borderColor: checked ? "oklch(0.25 0.04 250)" : "oklch(0.70 0.02 250)",
        backgroundColor: checked ? "oklch(0.25 0.04 250)" : "transparent",
      }}
    >
      {checked && (
        <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 6l3 3 5-5" />
        </svg>
      )}
    </button>
  );
}

/* ────────────────── Toggle Switch (simplified) ────────────────── */

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="relative inline-flex h-5 w-9 items-center transition-colors"
      style={{
        borderRadius: "9999px",
        backgroundColor: checked ? "oklch(0.25 0.04 250)" : "oklch(0.80 0.02 250)",
      }}
    >
      <span
        className="block h-4 w-4 bg-white shadow transition-transform"
        style={{
          borderRadius: "50%",
          transform: checked ? "translateX(17px)" : "translateX(2px)",
        }}
      />
    </button>
  );
}

/* ════════════════════════ RESULT PANEL ═════════════════════════ */

function ResultRow({ label, value, bold, accent, indent, negative }: {
  label: string; value: number; bold?: boolean; accent?: boolean; indent?: boolean; negative?: boolean;
}) {
  return (
    <div className={`flex justify-between items-center py-1 ${indent ? "pl-4" : ""}`}>
      <span className={`text-sm ${bold ? "font-semibold" : ""} ${accent ? "text-[oklch(0.25_0.04_250)]" : "text-[oklch(0.45_0.02_250)]"}`}>
        {label}
      </span>
      <span className={`tabular-nums font-mono ${bold ? "font-bold text-base" : "text-sm"} ${accent ? "text-[oklch(0.25_0.04_250)]" : ""}`}>
        {negative ? `- ${formatEuro(Math.abs(value))}` : formatEuro(value)}
      </span>
    </div>
  );
}

function ResultPanel({ result }: { result: CalcResult }) {
  return (
    <div className="space-y-3">
      {/* Phases */}
      <div>
        <h4 className={sectionHeadCls}>Fasi</h4>
        {result.phaseValues.map(p => (
          <ResultRow key={p.code} label={p.name} value={p.value} indent />
        ))}
        <ResultRow label="Compenso base" value={result.base} bold />
      </div>

      {/* Aumenti */}
      {result.aumenti.length > 0 && (
        <div>
          <div className="border-t border-border my-2" />
          <h4 className={sectionHeadCls}>Aumenti</h4>
          {result.aumenti.map((a, i) => (
            <ResultRow key={i} label={`+ ${a.label}`} value={a.value} indent />
          ))}
          <ResultRow label="Totale aumenti" value={result.totalAumenti} bold />
        </div>
      )}

      {/* Riduzioni */}
      {result.riduzioni.length > 0 && (
        <div>
          <div className="border-t border-border my-2" />
          <h4 className={sectionHeadCls}>Riduzioni</h4>
          {result.riduzioni.map((r, i) => (
            <ResultRow key={i} label={`- ${r.label}`} value={r.value} indent />
          ))}
          <ResultRow label="Totale riduzioni" value={result.totalRiduzioni} bold />
        </div>
      )}

      <div className="border-t border-border my-2" />
      <ResultRow label="Compenso adeguato" value={result.adjustedBase} bold accent />

      {result.speseGenerali > 0 && (
        <ResultRow label="Spese generali (rimborso forfettario)" value={result.speseGenerali} indent />
      )}

      <div className="border-t border-border my-2" />
      <ResultRow label="Compenso + spese generali" value={result.compenso} bold />

      {(result.speseEsenti > 0 || result.taxableExpenses > 0) && (
        <div>
          <h4 className={sectionHeadCls}>Spese</h4>
          {result.speseEsenti > 0 && <ResultRow label="Spese esenti IVA" value={result.speseEsenti} indent />}
          {result.speseTrasferta > 0 && <ResultRow label="Spese di trasferta" value={result.speseTrasferta} indent />}
          {result.speseNonEsenti > 0 && <ResultRow label="Altre spese imponibili" value={result.speseNonEsenti} indent />}
        </div>
      )}

      {(result.cpa > 0 || result.iva > 0) && (
        <div>
          <div className="border-t border-border my-2" />
          <h4 className={sectionHeadCls}>Accessori</h4>
          {result.cpa > 0 && <ResultRow label="CPA 4%" value={result.cpa} indent />}
          {result.iva > 0 && <ResultRow label="IVA 22%" value={result.iva} indent />}
        </div>
      )}

      <div className="border-t-2 border-border my-3" />
      <div className="bg-[oklch(0.97_0.005_85)] p-4" style={{ borderRadius: "0.375rem" }}>
        <ResultRow label="TOTALE" value={result.totale} bold accent />
        {result.ritenutaAcconto > 0 && (
          <>
            <ResultRow label="Ritenuta d'acconto 20%" value={result.ritenutaAcconto} indent negative />
            <div className="border-t border-border my-1" />
            <ResultRow label="NETTO A PAGARE" value={result.netto} bold accent />
          </>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════ MAIN COMPONENT ════════════════════════ */

export default function Calcolatore() {
  const [competenza, setCompetenza] = useState(110);
  const [scaglione, setScaglione] = useState(30);
  const [selections, setSelections] = useState<PhaseSelection[]>([]);
  const [aumenti, setAumenti] = useState<Aumento[]>(getDefaultAumenti());
  const [riduzioni, setRiduzioni] = useState<Riduzione[]>(getDefaultRiduzioni());
  const [spese, setSpese] = useState<SpeseState>({
    speseEsenti: 0,
    speseTrasferta: 0,
    speseNonEsenti: 0,
    speseGeneraliEnabled: true,
    speseGeneraliPct: DEFAULT_SPESE_GENERALI_PCT,
  });
  const [accessori, setAccessori] = useState<AccessoriState>({
    cpaEnabled: true,
    ivaEnabled: true,
    ritenutaEnabled: false,
  });
  const [activeTab, setActiveTab] = useState<"aumenti" | "riduzioni" | "spese">("aumenti");
  const [showResult, setShowResult] = useState(true);

  const phases = useMemo(() => getPhases(competenza, scaglione), [competenza, scaglione]);

  useEffect(() => {
    setSelections(
      phases.map(p => ({
        code: p.code,
        checked: p.enabled,
        mode: "med" as const,
        customValue: p.med,
      }))
    );
  }, [phases]);

  const handleCompetenzaChange = useCallback((v: number) => {
    setCompetenza(v);
    setAumenti(getDefaultAumenti());
    setRiduzioni(getDefaultRiduzioni());
  }, []);

  const handleReset = useCallback(() => {
    setCompetenza(110);
    setScaglione(30);
    setAumenti(getDefaultAumenti());
    setRiduzioni(getDefaultRiduzioni());
    setSpese({
      speseEsenti: 0, speseTrasferta: 0, speseNonEsenti: 0,
      speseGeneraliEnabled: true, speseGeneraliPct: DEFAULT_SPESE_GENERALI_PCT,
    });
    setAccessori({ cpaEnabled: true, ivaEnabled: true, ritenutaEnabled: false });
  }, []);

  const result = useMemo(
    () => calculate(phases, selections, aumenti, riduzioni, spese, accessori),
    [phases, selections, aumenti, riduzioni, spese, accessori]
  );

  const updateSelection = (code: number, updates: Partial<PhaseSelection>) => {
    setSelections(prev => prev.map(s => s.code === code ? { ...s, ...updates } : s));
  };

  const setAllMode = (mode: ValueMode) => {
    setSelections(prev => prev.map(s => ({ ...s, mode })));
  };

  const updateAumento = (id: string, updates: Partial<Aumento>) => {
    setAumenti(prev => prev.map(a => a.id === id ? { ...a, ...updates } : a));
  };

  const updateRiduzione = (id: string, updates: Partial<Riduzione>) => {
    setRiduzioni(prev => prev.map(r => r.id === id ? { ...r, ...updates } : r));
  };

  const isTarCds = TAR_CDS_COMPETENZE.includes(competenza);
  const isCassazione = CASSAZIONE_COMPETENZE.includes(competenza);

  const visibleAumenti = aumenti.filter(a => {
    if (a.id === "MotiviAggiunti" || a.id === "RicorsoIncidentale") return isTarCds;
    if (a.id === "Memoria378") return isCassazione;
    return true;
  });

  const giurisdizione = COMPETENZE.filter(c => c.group === "giurisdizione");
  const materia = COMPETENZE.filter(c => c.group === "materia");

  return (
    <div id="calcolatore" className="scroll-mt-24">
      <div className="bg-white border border-border shadow-lg overflow-hidden" style={{ borderRadius: "0.5rem" }}>
        {/* Header */}
        <div className="bg-[oklch(0.25_0.04_250)] px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calculator className="w-6 h-6 text-[oklch(0.75_0.10_85)]" />
            <h2 className="text-xl text-[oklch(0.90_0.01_85)] tracking-wide">
              Calcolo Compenso Avvocato
            </h2>
          </div>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs font-medium text-[oklch(0.75_0.05_250)] hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Azzera
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* ── SECTION 1: Parametri ── */}
          <div>
            <h3 className="text-sm font-bold text-[oklch(0.25_0.04_250)] uppercase tracking-wider mb-4">
              Parametri
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Competenza */}
              <div>
                <label className={labelCls}>Competenza</label>
                <select
                  value={competenza}
                  onChange={e => handleCompetenzaChange(Number(e.target.value))}
                  className={inputCls}
                  style={{ borderRadius: "0.375rem" }}
                >
                  <optgroup label="Per Giurisdizione">
                    {giurisdizione.map(c => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Per Materia">
                    {materia.map(c => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Scaglione */}
              <div>
                <label className={labelCls}>Scaglione di valore</label>
                <select
                  value={scaglione}
                  onChange={e => setScaglione(Number(e.target.value))}
                  className={inputCls}
                  style={{ borderRadius: "0.375rem" }}
                >
                  {SCAGLIONI.map(s => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* ── SECTION 2: Fasi del giudizio ── */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-[oklch(0.25_0.04_250)] uppercase tracking-wider">
                Fasi del giudizio
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[oklch(0.50_0.02_250)]">Imposta tutti:</span>
                {(["min", "med", "max"] as const).map(m => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setAllMode(m)}
                    className="px-2.5 py-1 text-xs font-medium transition-colors"
                    style={{
                      borderRadius: "0.25rem",
                      backgroundColor: "oklch(0.97 0.005 85)",
                      color: "oklch(0.35 0.10 85)",
                    }}
                  >
                    {m.charAt(0).toUpperCase() + m.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {phases.length > 0 && (
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-[oklch(0.25_0.04_250)]">
                      <th className="text-left py-2 pr-2 w-8"></th>
                      <th className="text-left py-2 pr-4 text-xs font-semibold text-[oklch(0.25_0.04_250)] uppercase tracking-wider">Fase</th>
                      <th className="text-center py-2 px-2 text-xs font-semibold text-[oklch(0.25_0.04_250)] uppercase tracking-wider">Min</th>
                      <th className="text-center py-2 px-2 text-xs font-semibold text-[oklch(0.25_0.04_250)] uppercase tracking-wider">Med</th>
                      <th className="text-center py-2 px-2 text-xs font-semibold text-[oklch(0.25_0.04_250)] uppercase tracking-wider">Max</th>
                      <th className="text-center py-2 px-2 text-xs font-semibold text-[oklch(0.25_0.04_250)] uppercase tracking-wider">Custom</th>
                      <th className="text-right py-2 pl-4 text-xs font-semibold text-[oklch(0.25_0.04_250)] uppercase tracking-wider">Valore</th>
                    </tr>
                  </thead>
                  <tbody>
                    {phases.map(phase => {
                      const sel = selections.find(s => s.code === phase.code);
                      if (!sel) return null;
                      const phaseName = PHASE_NAMES[phase.code] || `Fase ${phase.code}`;
                      const currentValue = sel.checked
                        ? sel.mode === "min" ? phase.min
                          : sel.mode === "med" ? phase.med
                          : sel.mode === "max" ? phase.max
                          : sel.customValue
                        : 0;

                      return (
                        <tr key={phase.code} className="border-b border-border/50 hover:bg-[oklch(0.98_0.002_250)] transition-colors">
                          <td className="py-2.5 pr-2">
                            <Check
                              checked={sel.checked}
                              onChange={checked => updateSelection(phase.code, { checked })}
                            />
                          </td>
                          <td className="py-2.5 pr-4 font-medium text-[oklch(0.25_0.04_250)]">{phaseName}</td>
                          {(["min", "med", "max"] as const).map(mode => (
                            <td key={mode} className="py-2.5 px-1 text-center">
                              <div className="flex items-center justify-center gap-1.5">
                                <RadioDot
                                  active={sel.mode === mode}
                                  onClick={() => updateSelection(phase.code, { mode })}
                                />
                                <button
                                  type="button"
                                  onClick={() => updateSelection(phase.code, { mode })}
                                  className="text-xs text-[oklch(0.45_0.02_250)] hover:text-[oklch(0.25_0.04_250)] transition-colors font-mono"
                                >
                                  {formatEuro(phase[mode])}
                                </button>
                              </div>
                            </td>
                          ))}
                          <td className="py-2.5 px-1 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <RadioDot
                                active={sel.mode === "custom"}
                                onClick={() => updateSelection(phase.code, { mode: "custom" })}
                              />
                              <input
                                type="number"
                                value={sel.mode === "custom" ? sel.customValue : ""}
                                onChange={e => updateSelection(phase.code, {
                                  mode: "custom",
                                  customValue: parseFloat(e.target.value) || 0,
                                })}
                                onFocus={() => updateSelection(phase.code, { mode: "custom" })}
                                className={`${inputSmCls} w-24`}
                                style={{ borderRadius: "0.25rem" }}
                                placeholder="0,00"
                              />
                            </div>
                          </td>
                          <td className="py-2.5 pl-4 text-right font-semibold font-mono tabular-nums text-[oklch(0.25_0.04_250)]">
                            {formatEuro(currentValue)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-[oklch(0.25_0.04_250)]">
                      <td colSpan={6} className="py-2.5 text-right font-semibold text-sm text-[oklch(0.25_0.04_250)]">Totale fasi</td>
                      <td className="py-2.5 pl-4 text-right font-bold font-mono tabular-nums text-[oklch(0.25_0.04_250)]">
                        {formatEuro(
                          phases.reduce((sum, phase) => {
                            const sel = selections.find(s => s.code === phase.code);
                            if (!sel || !sel.checked) return sum;
                            const val = sel.mode === "min" ? phase.min
                              : sel.mode === "med" ? phase.med
                              : sel.mode === "max" ? phase.max
                              : sel.customValue;
                            return sum + val;
                          }, 0)
                        )}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}
          </div>

          {/* ── SECTION 3: Aumenti / Riduzioni / Spese (tabs) ── */}
          <div>
            <h3 className="text-sm font-bold text-[oklch(0.25_0.04_250)] uppercase tracking-wider mb-4">
              Aumenti, Riduzioni e Spese
            </h3>

            {/* Tab buttons */}
            <div className="flex border-b border-border mb-4">
              {(["aumenti", "riduzioni", "spese"] as const).map(tab => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
                    activeTab === tab
                      ? "border-[oklch(0.75_0.10_85)] text-[oklch(0.25_0.04_250)]"
                      : "border-transparent text-[oklch(0.50_0.02_250)] hover:text-[oklch(0.35_0.02_250)]"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab: Aumenti */}
            {activeTab === "aumenti" && (
              <div className="space-y-3">
                {visibleAumenti.map(a => (
                  <div
                    key={a.id}
                    className="flex items-start gap-3 p-3 border border-border/50 hover:border-border transition-colors"
                    style={{ borderRadius: "0.375rem" }}
                  >
                    <Check checked={a.enabled} onChange={checked => updateAumento(a.id, { enabled: checked })} />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <button type="button" className="font-medium text-sm text-left" onClick={() => updateAumento(a.id, { enabled: !a.enabled })}>
                          {a.label}
                        </button>
                        <span className="text-xs text-[oklch(0.50_0.02_250)]">({a.reference})</span>
                      </div>

                      {a.id === "PiuParti" && (
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-[oklch(0.50_0.02_250)]">N. parti:</span>
                          <input
                            type="number"
                            min={1}
                            value={a.numParti || 1}
                            onChange={e => updateAumento(a.id, { numParti: parseInt(e.target.value) || 1 })}
                            className={`${inputSmCls} w-20`}
                            style={{ borderRadius: "0.25rem" }}
                          />
                          <span className="text-xs text-[oklch(0.50_0.02_250)]">
                            ({calculatePiuPartiPct(a.numParti || 1)}%)
                          </span>
                        </div>
                      )}

                      {a.id === "Importanza" && (
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-[oklch(0.50_0.02_250)]">Importo:</span>
                          <input
                            type="number"
                            value={a.customValue || 0}
                            onChange={e => updateAumento(a.id, { customValue: parseFloat(e.target.value) || 0 })}
                            className={`${inputSmCls} w-28`}
                            style={{ borderRadius: "0.25rem" }}
                            placeholder="0,00"
                          />
                        </div>
                      )}

                      {a.id !== "PiuParti" && a.id !== "Importanza" && (
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-[oklch(0.50_0.02_250)]">Percentuale:</span>
                          <input
                            type="number"
                            value={a.pct}
                            min={a.minPct}
                            max={a.maxPct}
                            onChange={e => updateAumento(a.id, { pct: parseFloat(e.target.value) || 0 })}
                            className={`${inputSmCls} w-20`}
                            style={{ borderRadius: "0.25rem" }}
                          />
                          <span className="text-xs text-[oklch(0.50_0.02_250)]">%</span>
                          {a.basis !== "total" && (
                            <span className="text-xs text-[oklch(0.50_0.02_250)]">
                              (su {a.basis === "decisionale" ? "fase decisionale" : "fase introduttiva"})
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab: Riduzioni */}
            {activeTab === "riduzioni" && (
              <div className="space-y-3">
                {riduzioni.map(r => (
                  <div
                    key={r.id}
                    className="flex items-start gap-3 p-3 border border-border/50 hover:border-border transition-colors"
                    style={{ borderRadius: "0.375rem" }}
                  >
                    <Check checked={r.enabled} onChange={checked => updateRiduzione(r.id, { enabled: checked })} />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <button type="button" className="font-medium text-sm text-left" onClick={() => updateRiduzione(r.id, { enabled: !r.enabled })}>
                          {r.label}
                        </button>
                        <span className="text-xs text-[oklch(0.50_0.02_250)]">({r.reference})</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-[oklch(0.50_0.02_250)]">Percentuale:</span>
                        {r.fixed ? (
                          <span className="text-xs font-medium">{r.pct}% (fisso)</span>
                        ) : (
                          <>
                            <input
                              type="number"
                              value={r.pct}
                              min={r.minPct}
                              max={r.maxPct}
                              onChange={e => updateRiduzione(r.id, { pct: parseFloat(e.target.value) || 0 })}
                              className={`${inputSmCls} w-20`}
                              style={{ borderRadius: "0.25rem" }}
                            />
                            <span className="text-xs text-[oklch(0.50_0.02_250)]">%</span>
                            {r.minPct !== undefined && r.maxPct !== undefined && (
                              <span className="text-xs text-[oklch(0.50_0.02_250)]">
                                (min {r.minPct}% - max {r.maxPct}%)
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab: Spese */}
            {activeTab === "spese" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 border border-border/50" style={{ borderRadius: "0.375rem" }}>
                  <label className="text-sm font-medium">Spese esenti IVA</label>
                  <p className="text-xs text-[oklch(0.50_0.02_250)] mb-2">art. 15, DPR 633/72</p>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[oklch(0.50_0.02_250)] text-xs">&euro;</span>
                    <input
                      type="number"
                      value={spese.speseEsenti || ""}
                      onChange={e => setSpese({ ...spese, speseEsenti: parseFloat(e.target.value) || 0 })}
                      className={`${inputSmCls} w-full pl-8`}
                      style={{ borderRadius: "0.25rem" }}
                      placeholder="0,00"
                    />
                  </div>
                </div>

                <div className="p-3 border border-border/50" style={{ borderRadius: "0.375rem" }}>
                  <label className="text-sm font-medium">Spese di trasferta</label>
                  <p className="text-xs text-[oklch(0.50_0.02_250)] mb-2">artt. 11, 27</p>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[oklch(0.50_0.02_250)] text-xs">&euro;</span>
                    <input
                      type="number"
                      value={spese.speseTrasferta || ""}
                      onChange={e => setSpese({ ...spese, speseTrasferta: parseFloat(e.target.value) || 0 })}
                      className={`${inputSmCls} w-full pl-8`}
                      style={{ borderRadius: "0.25rem" }}
                      placeholder="0,00"
                    />
                  </div>
                </div>

                <div className="p-3 border border-border/50" style={{ borderRadius: "0.375rem" }}>
                  <label className="text-sm font-medium">Altre spese imponibili</label>
                  <p className="text-xs text-[oklch(0.50_0.02_250)] mb-2">&nbsp;</p>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[oklch(0.50_0.02_250)] text-xs">&euro;</span>
                    <input
                      type="number"
                      value={spese.speseNonEsenti || ""}
                      onChange={e => setSpese({ ...spese, speseNonEsenti: parseFloat(e.target.value) || 0 })}
                      className={`${inputSmCls} w-full pl-8`}
                      style={{ borderRadius: "0.25rem" }}
                      placeholder="0,00"
                    />
                  </div>
                </div>

                <div className="p-3 border border-border/50" style={{ borderRadius: "0.375rem" }}>
                  <div className="flex items-center gap-2 mb-1">
                    <Toggle
                      checked={spese.speseGeneraliEnabled}
                      onChange={checked => setSpese({ ...spese, speseGeneraliEnabled: checked })}
                    />
                    <label className="text-sm font-medium">Spese generali</label>
                  </div>
                  <p className="text-xs text-[oklch(0.50_0.02_250)] mb-2">art. 2 - rimborso forfettario</p>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={spese.speseGeneraliPct}
                      onChange={e => setSpese({ ...spese, speseGeneraliPct: parseFloat(e.target.value) || 0 })}
                      disabled={!spese.speseGeneraliEnabled}
                      className={`${inputSmCls} w-20 disabled:opacity-40`}
                      style={{ borderRadius: "0.25rem" }}
                    />
                    <span className="text-sm text-[oklch(0.50_0.02_250)]">%</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── SECTION 4: Accessori ── */}
          <div>
            <h3 className="text-sm font-bold text-[oklch(0.25_0.04_250)] uppercase tracking-wider mb-4">
              Accessori
            </h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Toggle checked={accessori.cpaEnabled} onChange={checked => setAccessori({ ...accessori, cpaEnabled: checked })} />
                <span className="text-sm">CPA 4%</span>
              </div>
              <div className="flex items-center gap-2">
                <Toggle checked={accessori.ivaEnabled} onChange={checked => setAccessori({ ...accessori, ivaEnabled: checked })} />
                <span className="text-sm">IVA 22%</span>
              </div>
              <div className="flex items-center gap-2">
                <Toggle checked={accessori.ritenutaEnabled} onChange={checked => setAccessori({ ...accessori, ritenutaEnabled: checked })} />
                <span className="text-sm">Ritenuta d&apos;acconto 20%</span>
              </div>
            </div>
          </div>

          {/* ── SECTION 5: Risultato ── */}
          <div>
            <button
              type="button"
              onClick={() => setShowResult(!showResult)}
              className="flex items-center gap-2 w-full bg-[oklch(0.25_0.04_250)] px-6 py-4 text-left transition-colors hover:bg-[oklch(0.30_0.04_250)]"
              style={{ borderRadius: "0.375rem" }}
            >
              {showResult ? <ChevronUp className="w-5 h-5 text-[oklch(0.75_0.10_85)]" /> : <ChevronDown className="w-5 h-5 text-[oklch(0.75_0.10_85)]" />}
              <span className="text-sm font-bold text-[oklch(0.90_0.01_85)] uppercase tracking-wider flex-1">
                Risultato del calcolo
              </span>
              <span className="text-lg font-bold font-mono text-white">
                {formatEuro(result.totale)}
              </span>
            </button>

            {showResult && (
              <div className="border border-t-0 border-border p-6" style={{ borderRadius: "0 0 0.375rem 0.375rem" }}>
                <ResultPanel result={result} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
