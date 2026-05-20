"use client";

import { useState, useMemo, useCallback } from "react";
import { Calculator, RotateCcw, Info } from "lucide-react";
import {
  calcolaRisarcimentoInail,
  COSTANTI_2025,
  type InputCalcolo,
  type RisultatoCalcolo,
} from "@/data/calcolo-risarcimento-inail/inailData";
import { formatEur } from "@/lib/utils";

export default function Calcolatore() {
  const [percentuale, setPercentuale] = useState("");
  const [eta, setEta] = useState("");
  const [sesso, setSesso] = useState<"M" | "F">("M");
  const [retribuzione, setRetribuzione] = useState("");
  const [familiari, setFamiliari] = useState("0");
  const [annoEvento, setAnnoEvento] = useState("2024");
  const [applicaRivalutazione, setApplicaRivalutazione] = useState(true);
  const [risultato, setRisultato] = useState<RisultatoCalcolo | null>(null);

  const percentualeNum = useMemo(() => {
    const n = parseInt(percentuale, 10);
    return isNaN(n) ? 0 : n;
  }, [percentuale]);

  const etaNum = useMemo(() => {
    const n = parseInt(eta, 10);
    return isNaN(n) ? 0 : n;
  }, [eta]);

  const retribuzioneNum = useMemo(() => {
    const n = parseFloat(retribuzione);
    return isNaN(n) ? 0 : n;
  }, [retribuzione]);

  const familiariNum = useMemo(() => {
    const n = parseInt(familiari, 10);
    return isNaN(n) ? 0 : n;
  }, [familiari]);

  const richiedeRetribuzione = percentualeNum >= 16;
  const richiedeEta = percentualeNum >= 6 && percentualeNum <= 15;

  const canCalcola =
    percentualeNum >= 0 &&
    percentualeNum <= 100 &&
    (!richiedeEta || (etaNum > 0 && etaNum <= 100));

  const handleCalcola = useCallback(() => {
    if (!canCalcola) return;
    const input: InputCalcolo = {
      percentualeInvalidita: percentualeNum,
      eta: etaNum || 40,
      sesso,
      retribuzioneAnnua: retribuzioneNum || COSTANTI_2025.retribuzioneMinimaAnnua,
      numeroFamiliari: familiariNum,
      annoEvento: parseInt(annoEvento, 10),
      applicaRivalutazione2025: applicaRivalutazione,
    };
    setRisultato(calcolaRisarcimentoInail(input));
  }, [
    canCalcola,
    percentualeNum,
    etaNum,
    sesso,
    retribuzioneNum,
    familiariNum,
    annoEvento,
    applicaRivalutazione,
  ]);

  const handleReset = () => {
    setPercentuale("");
    setEta("");
    setSesso("M");
    setRetribuzione("");
    setFamiliari("0");
    setAnnoEvento("2024");
    setApplicaRivalutazione(true);
    setRisultato(null);
  };

  return (
    <div id="calcolatore" className="scroll-mt-24">
      <div
        className="bg-white border border-border shadow-lg overflow-hidden"
        style={{ borderRadius: "0.5rem" }}
      >
        {/* Header */}
        <div className="bg-[oklch(0.25_0.04_250)] px-6 py-5 flex items-center gap-3">
          <Calculator className="w-6 h-6 text-[oklch(0.75_0.10_85)]" />
          <h2 className="text-xl text-[oklch(0.90_0.01_85)] tracking-wide">
            Calcolatore Risarcimento INAIL 2026
          </h2>
        </div>

        <div className="p-6 space-y-6">
          {/* Disclaimer */}
          <div
            className="bg-[oklch(0.97_0.02_85)] border-l-4 border-[oklch(0.75_0.10_85)] p-4 text-sm text-[oklch(0.35_0.04_250)]"
            style={{ borderRadius: "0 0.375rem 0.375rem 0" }}
          >
            <p className="flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-[oklch(0.55_0.12_85)]" />
              <span>
                <strong>Stima indicativa.</strong> Solo l&apos;INAIL è titolata a fornire calcoli
                ufficiali. La pagina applica le tabelle DM 12/07/2000 (uomini/donne per eventi
                2014-2018), il DM 45/2019 unisex (+40% medio per eventi dal 1/1/2019) e la
                rivalutazione +0,8% del DM 85/2025.
              </span>
            </p>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Percentuale invalidità */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                Percentuale invalidità (0-100%)
              </label>
              <input
                type="number"
                inputMode="numeric"
                min={0}
                max={100}
                value={percentuale}
                onChange={(e) => setPercentuale(e.target.value)}
                placeholder="es. 10"
                className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                style={{ borderRadius: "0.375rem" }}
              />
              <p className="text-xs text-muted-foreground mt-1">
                &lt;6% franchigia, 6-15% capitale, ≥16% rendita vitalizia
              </p>
            </div>

            {/* Età (per capitale 6-15%) */}
            {richiedeEta && (
              <div>
                <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                  Età alla guarigione clinica
                </label>
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  max={100}
                  value={eta}
                  onChange={(e) => setEta(e.target.value)}
                  placeholder="es. 40"
                  className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                  style={{ borderRadius: "0.375rem" }}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Art. 13 c. 2 lett. a D.Lgs. 38/2000
                </p>
              </div>
            )}

            {/* Sesso (per eventi pre-2019) */}
            {richiedeEta && (
              <div>
                <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                  Sesso (solo eventi pre-2019)
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSesso("M")}
                    className={`flex-1 px-4 py-3 text-sm border transition-colors ${
                      sesso === "M"
                        ? "bg-[oklch(0.25_0.04_250)] border-[oklch(0.25_0.04_250)] text-white"
                        : "bg-white border-border text-[oklch(0.40_0.02_250)] hover:bg-[oklch(0.97_0.005_250)]"
                    }`}
                    style={{ borderRadius: "0.375rem" }}
                  >
                    Uomo
                  </button>
                  <button
                    onClick={() => setSesso("F")}
                    className={`flex-1 px-4 py-3 text-sm border transition-colors ${
                      sesso === "F"
                        ? "bg-[oklch(0.25_0.04_250)] border-[oklch(0.25_0.04_250)] text-white"
                        : "bg-white border-border text-[oklch(0.40_0.02_250)] hover:bg-[oklch(0.97_0.005_250)]"
                    }`}
                    style={{ borderRadius: "0.375rem" }}
                  >
                    Donna
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Dal 1/1/2019 le tabelle sono unisex (DM 45/2019)
                </p>
              </div>
            )}

            {/* Retribuzione (per rendita 16-100%) */}
            {richiedeRetribuzione && (
              <div>
                <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                  Retribuzione annua lorda (€)
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  min={0}
                  step={1000}
                  value={retribuzione}
                  onChange={(e) => setRetribuzione(e.target.value)}
                  placeholder="es. 30000"
                  className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                  style={{ borderRadius: "0.375rem" }}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Min 2025: €{COSTANTI_2025.retribuzioneMinimaAnnua.toLocaleString("it-IT")} | Max:
                  €{COSTANTI_2025.retribuzioneMassimaAnnua.toLocaleString("it-IT")}
                </p>
              </div>
            )}

            {/* Familiari (per rendita) */}
            {richiedeRetribuzione && (
              <div>
                <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                  Familiari a carico (art. 77 T.U.)
                </label>
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  max={10}
                  value={familiari}
                  onChange={(e) => setFamiliari(e.target.value)}
                  className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                  style={{ borderRadius: "0.375rem" }}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  +5% sulla quota patrimoniale per ciascuno
                </p>
              </div>
            )}

            {/* Anno evento */}
            {percentualeNum >= 6 && (
              <div>
                <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                  Anno dell&apos;evento
                </label>
                <select
                  value={annoEvento}
                  onChange={(e) => setAnnoEvento(e.target.value)}
                  className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <option value="2014">2014-2018 (tabelle differenziate M/F)</option>
                  <option value="2019">Dal 1/1/2019 (tabella unisex DM 45/2019)</option>
                  <option value="2023">Dal 1/7/2023 (+8,1%)</option>
                  <option value="2024">Dal 1/7/2024 (+5,4%)</option>
                </select>
              </div>
            )}

            {/* Checkbox rivalutazione 2025 */}
            {percentualeNum >= 6 && (
              <div>
                <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                  Rivalutazione 2025 (+0,8%)
                </label>
                <label className="flex items-center gap-3 px-4 py-3 border border-border bg-white cursor-pointer hover:bg-[oklch(0.97_0.005_250)] transition-colors" style={{ borderRadius: "0.375rem" }}>
                  <input
                    type="checkbox"
                    checked={applicaRivalutazione}
                    onChange={(e) => setApplicaRivalutazione(e.target.checked)}
                    className="w-4 h-4 accent-[oklch(0.75_0.10_85)]"
                  />
                  <span className="text-sm text-[oklch(0.35_0.02_250)]">
                    Applica DM 85/2025 (provvedimenti dal 1/7/2025)
                  </span>
                </label>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleCalcola}
              disabled={!canCalcola}
              className="bg-[oklch(0.75_0.10_85)] text-[oklch(0.22_0.04_250)] font-semibold px-6 py-3 text-sm hover:bg-[oklch(0.70_0.12_85)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ borderRadius: "0.375rem" }}
            >
              Calcola Risarcimento INAIL
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
              {/* Scenario badge */}
              <div className="flex items-center gap-3">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                    risultato.scenario === "franchigia"
                      ? "bg-[oklch(0.95_0.03_25)] text-[oklch(0.45_0.12_25)]"
                      : risultato.scenario === "capitale"
                        ? "bg-[oklch(0.94_0.03_155)] text-[oklch(0.40_0.12_155)]"
                        : risultato.scenario === "rendita"
                          ? "bg-[oklch(0.94_0.03_250)] text-[oklch(0.40_0.08_250)]"
                          : "bg-[oklch(0.95_0.02_25)] text-[oklch(0.45_0.15_25)]"
                  }`}
                  style={{ borderRadius: "0.25rem" }}
                >
                  {risultato.scenario === "franchigia" && "Franchigia"}
                  {risultato.scenario === "capitale" && "Indennizzo in capitale"}
                  {risultato.scenario === "rendita" && "Rendita vitalizia"}
                  {risultato.scenario === "errore" && "Errore"}
                </span>
              </div>

              {/* Messaggio principale */}
              <p className="text-base leading-relaxed text-[oklch(0.30_0.03_250)]">
                {risultato.messaggio}
              </p>

              {/* Importi principali */}
              {risultato.scenario === "capitale" && (
                <div
                  className="bg-[oklch(0.97_0.005_250)] p-5"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <p className="text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider mb-1">
                    Indennizzo in capitale
                  </p>
                  <p className="text-3xl font-semibold text-[oklch(0.25_0.04_250)] font-mono">
                    {formatEur(risultato.capitaleRivalutato ?? 0)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Una tantum esente IRPEF (art. 6 DPR 601/1973)
                  </p>
                </div>
              )}

              {risultato.scenario === "rendita" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className="bg-[oklch(0.97_0.005_250)] p-5"
                    style={{ borderRadius: "0.375rem" }}
                  >
                    <p className="text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider mb-1">
                      Quota biologica annua
                    </p>
                    <p className="text-xl font-semibold text-[oklch(0.25_0.04_250)] font-mono">
                      {formatEur(risultato.quotaBiologicaAnnua ?? 0)}
                    </p>
                  </div>
                  <div
                    className="bg-[oklch(0.97_0.005_250)] p-5"
                    style={{ borderRadius: "0.375rem" }}
                  >
                    <p className="text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider mb-1">
                      Quota patrimoniale annua
                    </p>
                    <p className="text-xl font-semibold text-[oklch(0.25_0.04_250)] font-mono">
                      {formatEur(risultato.quotaPatrimonialeAnnua ?? 0)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Coeff. fascia {risultato.fasciaApplicata}: {risultato.coefficiente}
                    </p>
                  </div>
                  {(risultato.quotaIntegrativaAnnua ?? 0) > 0 && (
                    <div
                      className="bg-[oklch(0.97_0.005_250)] p-5 sm:col-span-2"
                      style={{ borderRadius: "0.375rem" }}
                    >
                      <p className="text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider mb-1">
                        Quote integrative familiari (art. 77 T.U.)
                      </p>
                      <p className="text-xl font-semibold text-[oklch(0.25_0.04_250)] font-mono">
                        {formatEur(risultato.quotaIntegrativaAnnua ?? 0)} /anno
                      </p>
                    </div>
                  )}
                  <div
                    className="bg-[oklch(0.94_0.03_250)] p-5 sm:col-span-2 border-2 border-[oklch(0.40_0.08_250)]"
                    style={{ borderRadius: "0.375rem" }}
                  >
                    <p className="text-xs font-semibold text-[oklch(0.30_0.04_250)] uppercase tracking-wider mb-1">
                      Rendita totale mensile (esente IRPEF)
                    </p>
                    <p className="text-3xl font-semibold text-[oklch(0.20_0.05_250)] font-mono">
                      {formatEur(risultato.renditaTotaleMensile ?? 0)}
                    </p>
                    <p className="text-sm text-[oklch(0.35_0.03_250)] mt-2">
                      Annuo: {formatEur(risultato.renditaTotaleAnnua ?? 0)}
                    </p>
                  </div>
                </div>
              )}

              {/* Dettaglio calcolo */}
              {risultato.dettaglio.length > 0 && (
                <details className="border border-border p-4" style={{ borderRadius: "0.375rem" }}>
                  <summary className="cursor-pointer text-sm font-semibold text-[oklch(0.35_0.02_250)] hover:text-[oklch(0.25_0.04_250)]">
                    Mostra dettaglio calcolo
                  </summary>
                  <ul className="mt-3 space-y-2 text-sm text-[oklch(0.40_0.02_250)] font-mono">
                    {risultato.dettaglio.map((d, i) => (
                      <li key={i} className="border-l-2 border-[oklch(0.75_0.10_85)] pl-3">
                        {d}
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
