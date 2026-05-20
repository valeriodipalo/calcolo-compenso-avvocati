"use client";

import { useState, useMemo, useCallback } from "react";
import { Calculator as CalcIcon, Calendar as CalIcon, AlertTriangle } from "lucide-react";
import {
  calcolaScadenze,
  SCENARI,
  type ScenarioCalcolo,
  type ModalitaSabato,
  type RegimeProcessuale,
  type RisultatoCalcolo,
} from "@/data/calcolo-termini-memorie/terminiMemorieData";

function toInputValue(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function formatDataIT(d: Date): string {
  return new Intl.DateTimeFormat("it-IT", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(d);
}

function determinaRegimeDaData(d: Date): RegimeProcessuale {
  // 28 febbraio 2023 è il discrimine
  const soglia = new Date(2023, 1, 28);
  return d >= soglia ? "cartabia" : "vecchio";
}

const ETICHETTE_PROROGA: Record<string, string> = {
  nessuna: "",
  sabato: "prorogato (sabato)",
  festivo: "prorogato (festivo)",
  "ritroso-sabato": "anticipato (sabato)",
  "ritroso-festivo": "anticipato (festivo)",
};

export default function Calcolatore() {
  const [regime, setRegime] = useState<RegimeProcessuale>("cartabia");
  const [scenarioId, setScenarioId] = useState<ScenarioCalcolo>("memorie171ter");
  const [dataInstauraz, setDataInstauraz] = useState<string>("2026-03-01");
  const [dataInput, setDataInput] = useState<string>(toInputValue(new Date(2026, 9, 15)));
  const [sospensione, setSospensione] = useState<boolean>(true);
  const [modSabato, setModSabato] = useState<ModalitaSabato>("cassazione");
  const [risultato, setRisultato] = useState<RisultatoCalcolo | null>(null);

  const scenariFiltrati = useMemo(
    () => SCENARI.filter((s) => s.regime === regime),
    [regime]
  );

  const scenarioCorrente = useMemo(
    () => SCENARI.find((s) => s.id === scenarioId) ?? SCENARI[0],
    [scenarioId]
  );

  const handleAutoDetect = useCallback(() => {
    if (!dataInstauraz) return;
    const [y, m, d] = dataInstauraz.split("-").map(Number);
    if (!y || !m || !d) return;
    const detected = determinaRegimeDaData(new Date(y, m - 1, d));
    setRegime(detected);
    // Set default scenario for new regime
    if (detected === "cartabia" && !["memorie171ter", "note189", "discussione275bis"].includes(scenarioId)) {
      setScenarioId("memorie171ter");
    } else if (detected === "vecchio" && !["memorie183", "comparse190"].includes(scenarioId)) {
      setScenarioId("memorie183");
    }
  }, [dataInstauraz, scenarioId]);

  const handleRegimeChange = useCallback((r: RegimeProcessuale) => {
    setRegime(r);
    if (r === "cartabia") setScenarioId("memorie171ter");
    else setScenarioId("memorie183");
    setRisultato(null);
  }, []);

  const handleScenarioChange = useCallback((id: string) => {
    setScenarioId(id as ScenarioCalcolo);
    setRisultato(null);
  }, []);

  const handleCalcola = useCallback(() => {
    if (!dataInput) return;
    const [y, m, d] = dataInput.split("-").map(Number);
    if (!y || !m || !d) return;
    const r = calcolaScadenze(scenarioId, new Date(y, m - 1, d), {
      sospensioneFeriale: sospensione,
      modalitaSabato: modSabato,
    });
    setRisultato(r);
  }, [scenarioId, dataInput, sospensione, modSabato]);

  const handleReset = useCallback(() => {
    setRegime("cartabia");
    setScenarioId("memorie171ter");
    setDataInstauraz("2026-03-01");
    setDataInput(toInputValue(new Date(2026, 9, 15)));
    setSospensione(true);
    setModSabato("cassazione");
    setRisultato(null);
  }, []);

  return (
    <div id="calcolatore" className="scroll-mt-24 mb-12">
      <div
        className="bg-white border border-[oklch(0.90_0.01_85)] p-6 md:p-8"
        style={{ borderRadius: "0.5rem" }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="flex items-center justify-center w-10 h-10 bg-[oklch(0.94_0.03_250)]"
            style={{ borderRadius: "0.375rem" }}
          >
            <CalcIcon className="w-5 h-5 text-[oklch(0.40_0.08_250)]" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-serif text-[oklch(0.25_0.04_250)]">
              Calcolatore Unificato Termini Memorie
            </h2>
            <p className="text-sm text-muted-foreground">
              Vecchio rito (artt. 183 e 190) + Cartabia (artt. 171-ter, 189 e 275-bis)
            </p>
          </div>
        </div>

        {/* Step 1: regime auto-detect */}
        <div className="mb-5 p-4 bg-[oklch(0.97_0.01_250)]" style={{ borderRadius: "0.375rem" }}>
          <label className="block text-sm font-medium mb-2 text-[oklch(0.25_0.04_250)]">
            1. Data di instaurazione del procedimento (rilevamento automatico del regime)
          </label>
          <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
            <input
              type="date"
              value={dataInstauraz}
              onChange={(e) => setDataInstauraz(e.target.value)}
              className="px-3 py-2 border border-[oklch(0.90_0.01_85)] text-sm"
              style={{ borderRadius: "0.375rem" }}
            />
            <button
              type="button"
              onClick={handleAutoDetect}
              className="px-3 py-2 bg-[oklch(0.40_0.08_250)] text-white text-sm font-medium hover:bg-[oklch(0.32_0.10_250)] transition-colors"
              style={{ borderRadius: "0.375rem" }}
            >
              Rileva regime
            </button>
            <span className="text-xs text-muted-foreground sm:ml-auto">
              Soglia: 28 febbraio 2023 (D.Lgs. 149/2022)
            </span>
          </div>
        </div>

        {/* Step 2: regime manual selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <button
            type="button"
            onClick={() => handleRegimeChange("vecchio")}
            className={`p-3 text-left border-2 transition-all ${
              regime === "vecchio"
                ? "border-[oklch(0.40_0.08_250)] bg-[oklch(0.95_0.02_250)]"
                : "border-[oklch(0.90_0.01_85)] bg-white hover:border-[oklch(0.70_0.05_250)]"
            }`}
            style={{ borderRadius: "0.375rem" }}
          >
            <div className="font-medium text-sm text-[oklch(0.25_0.04_250)]">
              Vecchio rito (ante 28/02/2023)
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Artt. 183 e 190 c.p.c. — ancora applicabili ai procedimenti pendenti
            </div>
          </button>
          <button
            type="button"
            onClick={() => handleRegimeChange("cartabia")}
            className={`p-3 text-left border-2 transition-all ${
              regime === "cartabia"
                ? "border-[oklch(0.40_0.08_250)] bg-[oklch(0.95_0.02_250)]"
                : "border-[oklch(0.90_0.01_85)] bg-white hover:border-[oklch(0.70_0.05_250)]"
            }`}
            style={{ borderRadius: "0.375rem" }}
          >
            <div className="font-medium text-sm text-[oklch(0.25_0.04_250)]">
              Rito Cartabia (post 28/02/2023)
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Artt. 171-ter, 189 e 275-bis c.p.c. — D.Lgs. 149/2022 + correttivo 164/2024
            </div>
          </button>
        </div>

        {/* Step 3: scenario */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-[oklch(0.25_0.04_250)]">
            2. Scenario di calcolo
          </label>
          <select
            value={scenarioId}
            onChange={(e) => handleScenarioChange(e.target.value)}
            className="w-full px-3 py-2 border border-[oklch(0.90_0.01_85)] text-sm"
            style={{ borderRadius: "0.375rem" }}
          >
            {scenariFiltrati.map((s) => (
              <option key={s.id} value={s.id}>
                {s.shortLabel}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-muted-foreground">{scenarioCorrente.inputHelp}</p>
        </div>

        {/* Step 4: data partenza */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-[oklch(0.25_0.04_250)]">
            3. {scenarioCorrente.inputLabel}
          </label>
          <input
            type="date"
            value={dataInput}
            onChange={(e) => setDataInput(e.target.value)}
            className="px-3 py-2 border border-[oklch(0.90_0.01_85)] text-sm"
            style={{ borderRadius: "0.375rem" }}
          />
        </div>

        {/* Step 5: options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 p-3 bg-[oklch(0.98_0.005_85)]" style={{ borderRadius: "0.375rem" }}>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={sospensione}
              onChange={(e) => setSospensione(e.target.checked)}
              className="w-4 h-4"
            />
            <span>Applica sospensione feriale (1°-31 agosto, L. 742/1969)</span>
          </label>
          {scenarioCorrente.direzione === "avanti" &&
            scenarioCorrente.tappe.some((t) => t.consequenziale) && (
              <label className="flex items-start gap-2 text-sm">
                <span className="font-medium shrink-0">Termini plurimi:</span>
                <select
                  value={modSabato}
                  onChange={(e) => setModSabato(e.target.value as ModalitaSabato)}
                  className="text-xs px-2 py-1 border border-[oklch(0.90_0.01_85)]"
                  style={{ borderRadius: "0.25rem" }}
                >
                  <option value="cassazione">Cassazione 13201/2006 (posticipato)</option>
                  <option value="prudenziale">Prudenziale (non posticipato)</option>
                </select>
              </label>
            )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={handleCalcola}
            className="px-4 py-2 bg-[oklch(0.40_0.08_250)] text-white text-sm font-medium hover:bg-[oklch(0.32_0.10_250)] transition-colors"
            style={{ borderRadius: "0.375rem" }}
          >
            Calcola scadenze
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 border border-[oklch(0.85_0.02_85)] text-sm hover:bg-[oklch(0.97_0.01_85)] transition-colors"
            style={{ borderRadius: "0.375rem" }}
          >
            Reset
          </button>
        </div>

        {/* Risultato */}
        {risultato && (
          <div className="mt-6 border border-[oklch(0.85_0.02_85)] overflow-hidden" style={{ borderRadius: "0.5rem" }}>
            <div className="bg-[oklch(0.25_0.04_250)] text-white px-4 py-3">
              <h3 className="text-base font-serif">{risultato.scenario.label}</h3>
              <p className="text-xs opacity-90 mt-0.5">
                Data di partenza: {formatDataIT(risultato.dataPartenza)}
              </p>
            </div>
            <div className="bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[oklch(0.90_0.01_85)] bg-[oklch(0.97_0.01_85)]">
                    <th className="px-3 py-2 text-left font-medium">#</th>
                    <th className="px-3 py-2 text-left font-medium">Tappa</th>
                    <th className="px-3 py-2 text-left font-medium">Articolo</th>
                    <th className="px-3 py-2 text-left font-medium">Scadenza</th>
                    <th className="px-3 py-2 text-left font-medium">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {risultato.tappe.map((t, i) => (
                    <tr key={i} className="border-b border-[oklch(0.92_0.01_85)] last:border-b-0">
                      <td className="px-3 py-2 text-muted-foreground">{i + 1}</td>
                      <td className="px-3 py-2">{t.label}</td>
                      <td className="px-3 py-2 text-xs text-muted-foreground">{t.articolo}</td>
                      <td className="px-3 py-2 font-mono">
                        {formatDataIT(t.dataScadenza)}
                      </td>
                      <td className="px-3 py-2 text-xs">
                        {t.prorogaApplicata !== "nessuna" && (
                          <span className="inline-block px-2 py-0.5 bg-[oklch(0.95_0.05_85)] text-[oklch(0.45_0.10_85)] mr-1" style={{ borderRadius: "0.25rem" }}>
                            {ETICHETTE_PROROGA[t.prorogaApplicata] ?? t.prorogaApplicata}
                          </span>
                        )}
                        {t.giorniSospesi > 0 && (
                          <span className="inline-block px-2 py-0.5 bg-[oklch(0.94_0.03_250)] text-[oklch(0.40_0.08_250)]" style={{ borderRadius: "0.25rem" }}>
                            +{t.giorniSospesi} gg sospensione
                          </span>
                        )}
                        {t.prorogaApplicata === "nessuna" && t.giorniSospesi === 0 && (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-4 py-3 bg-[oklch(0.98_0.005_85)] border-t border-[oklch(0.92_0.01_85)] text-xs text-muted-foreground space-y-1">
                <p>
                  <strong>Modalità calcolo:</strong> sospensione feriale{" "}
                  {risultato.sospensioneFerialeAttiva ? "attiva (1°-31 ago)" : "disattivata"}
                  {scenarioCorrente.direzione === "avanti" &&
                    scenarioCorrente.tappe.some((t) => t.consequenziale) && (
                      <>
                        {" "}— termini plurimi: modalità{" "}
                        {risultato.modalitaSabato === "cassazione"
                          ? "Cassazione 13201/2006 (dies a quo posticipato)"
                          : "prudenziale (dies a quo non posticipato)"}
                      </>
                    )}
                </p>
                <p className="flex items-start gap-1">
                  <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0" />
                  <span>
                    Risultato meramente indicativo. Verifica sempre con il proprio sistema gestionale e con il
                    calendario delle udienze del singolo ufficio giudiziario.
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}

        {!risultato && (
          <div className="mt-2 p-3 bg-[oklch(0.97_0.02_85)] text-sm text-muted-foreground flex items-start gap-2" style={{ borderRadius: "0.375rem" }}>
            <CalIcon className="w-4 h-4 mt-0.5 shrink-0 text-[oklch(0.65_0.10_85)]" />
            <p>
              Inserisci una data e premi <strong>Calcola scadenze</strong> per visualizzare tutte le tappe
              con applicazione automatica di sospensione feriale e regole sabato/festivi.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
