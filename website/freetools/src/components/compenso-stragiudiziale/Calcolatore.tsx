"use client";

import { useMemo, useState } from "react";
import { Calculator, RotateCcw, ArrowRightLeft, Info } from "lucide-react";
import { formatEur } from "@/lib/utils";
import {
  calcolaCompensoStragiudiziale,
  SCAGLIONI_DM_147_2022,
  SCAGLIONI_PERCENTUALI,
  VALORI_INDETERMINABILI,
  type ModalitaCalcolo,
  type LivelloCompenso,
  type RisultatoCompenso,
} from "@/data/compenso-stragiudiziale/compensoStragiudizialeData";

const DEFAULTS = {
  modalità: "tabellare" as ModalitaCalcolo,
  livello: "medio" as LivelloCompenso,
  variazionePerc: 0,
  ulterioreValutazione: 0,
  includiSpeseGenerali: true,
  percSpeseGenerali: 15,
  speseImponibili: 0,
  speseEsenti: 0,
  includiCPA: true,
  includiIVA: true,
  includiRitenuta: false,
};

const parseNum = (val: string): number => {
  if (!val) return 0;
  const cleaned = val.replace(/[€\s]/g, "").replace(/\./g, "").replace(",", ".");
  const n = parseFloat(cleaned);
  return Number.isFinite(n) ? n : 0;
};

export default function Calcolatore() {
  const [valore, setValore] = useState("15000");
  const [modalità, setModalita] = useState<ModalitaCalcolo>(DEFAULTS.modalità);
  const [livello, setLivello] = useState<LivelloCompenso>(DEFAULTS.livello);
  const [variazionePerc, setVariazionePerc] = useState(DEFAULTS.variazionePerc);
  const [ulterioreValutazione, setUlterioreValutazione] = useState(
    DEFAULTS.ulterioreValutazione,
  );
  const [indeterminabile, setIndeterminabile] = useState<string>("");

  const [includiSpeseGenerali, setIncludiSpeseGenerali] = useState(
    DEFAULTS.includiSpeseGenerali,
  );
  const [percSpeseGenerali, setPercSpeseGenerali] = useState(
    DEFAULTS.percSpeseGenerali,
  );
  const [speseImponibili, setSpeseImponibili] = useState("");
  const [speseEsenti, setSpeseEsenti] = useState("");

  const [includiCPA, setIncludiCPA] = useState(DEFAULTS.includiCPA);
  const [includiIVA, setIncludiIVA] = useState(DEFAULTS.includiIVA);
  const [includiRitenuta, setIncludiRitenuta] = useState(DEFAULTS.includiRitenuta);

  const valoreNum = useMemo(() => parseNum(valore), [valore]);
  const speseImpNum = useMemo(() => parseNum(speseImponibili), [speseImponibili]);
  const speseEsNum = useMemo(() => parseNum(speseEsenti), [speseEsenti]);

  const valoreEffettivo = useMemo(() => {
    if (!indeterminabile) return valoreNum;
    const ind = VALORI_INDETERMINABILI.find((v) => v.id === indeterminabile);
    return ind ? ind.valoreFittizio : valoreNum;
  }, [indeterminabile, valoreNum]);

  const risultato: RisultatoCompenso | null = useMemo(() => {
    if (valoreEffettivo <= 0) return null;
    return calcolaCompensoStragiudiziale({
      valore: valoreEffettivo,
      modalità,
      livello,
      variazionePerc,
      ulterioreValutazione,
      includiSpeseGenerali,
      percSpeseGenerali,
      speseImponibili: speseImpNum,
      speseEsenti: speseEsNum,
      includiCPA,
      includiIVA,
      includiRitenuta,
    });
  }, [
    valoreEffettivo,
    modalità,
    livello,
    variazionePerc,
    ulterioreValutazione,
    includiSpeseGenerali,
    percSpeseGenerali,
    speseImpNum,
    speseEsNum,
    includiCPA,
    includiIVA,
    includiRitenuta,
  ]);

  const handleReset = () => {
    setValore("15000");
    setModalita(DEFAULTS.modalità);
    setLivello(DEFAULTS.livello);
    setVariazionePerc(DEFAULTS.variazionePerc);
    setUlterioreValutazione(DEFAULTS.ulterioreValutazione);
    setIndeterminabile("");
    setIncludiSpeseGenerali(DEFAULTS.includiSpeseGenerali);
    setPercSpeseGenerali(DEFAULTS.percSpeseGenerali);
    setSpeseImponibili("");
    setSpeseEsenti("");
    setIncludiCPA(DEFAULTS.includiCPA);
    setIncludiIVA(DEFAULTS.includiIVA);
    setIncludiRitenuta(DEFAULTS.includiRitenuta);
  };

  const isPercentualeMode = modalità === "percentuale" || valoreEffettivo > 520000;

  return (
    <div id="calcolatore" className="scroll-mt-24 mb-10">
      <div
        className="bg-white border border-border shadow-lg overflow-hidden"
        style={{ borderRadius: "0.5rem" }}
      >
        {/* Header */}
        <div className="bg-[oklch(0.25_0.04_250)] px-6 py-5 flex items-center gap-3">
          <Calculator className="w-6 h-6 text-[oklch(0.75_0.10_85)]" />
          <h3 className="text-lg font-semibold text-white font-serif">
            Calcolo Compenso Stragiudiziale
          </h3>
          <span className="ml-auto text-xs text-[oklch(0.75_0.10_85)] uppercase tracking-wider font-semibold">
            D.M. 147/2022
          </span>
        </div>

        <div className="p-6 space-y-6">
          {/* Modalità */}
          <div className="flex gap-2">
            <button
              onClick={() => {
                setModalita("tabellare");
                setIndeterminabile("");
              }}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border transition-colors ${
                modalità === "tabellare"
                  ? "bg-[oklch(0.25_0.04_250)] text-white border-[oklch(0.25_0.04_250)]"
                  : "bg-white text-[oklch(0.25_0.04_250)] border-border hover:bg-gray-50"
              }`}
              style={{ borderRadius: "0.375rem" }}
            >
              Modalità Tabellare
            </button>
            <button
              onClick={() => {
                setModalita("percentuale");
                setIndeterminabile("");
              }}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border transition-colors ${
                modalità === "percentuale"
                  ? "bg-[oklch(0.25_0.04_250)] text-white border-[oklch(0.25_0.04_250)]"
                  : "bg-white text-[oklch(0.25_0.04_250)] border-border hover:bg-gray-50"
              }`}
              style={{ borderRadius: "0.375rem" }}
            >
              <ArrowRightLeft className="w-4 h-4" />
              Modalità Percentuale
            </button>
          </div>

          {/* Valore dell'affare */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[oklch(0.30_0.03_250)] mb-1.5">
                Valore dell&apos;affare
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[oklch(0.50_0.02_250)] text-sm">
                  €
                </span>
                <input
                  type="text"
                  inputMode="decimal"
                  value={valore}
                  onChange={(e) => {
                    setValore(e.target.value);
                    setIndeterminabile("");
                  }}
                  className="w-full pl-8 pr-3 py-2.5 text-sm font-mono border border-border focus:outline-none focus:border-[oklch(0.45_0.08_250)] focus:ring-1 focus:ring-[oklch(0.45_0.08_250)]"
                  style={{ borderRadius: "0.375rem" }}
                  placeholder="15.000,00"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Scaglione attivo:{" "}
                <span className="font-medium text-[oklch(0.35_0.04_250)]">
                  {valoreEffettivo <= 520000
                    ? SCAGLIONI_DM_147_2022.find(
                        (s) =>
                          valoreEffettivo >= s.da &&
                          (s.a === null || valoreEffettivo <= s.a),
                      )?.label ?? "—"
                    : SCAGLIONI_PERCENTUALI.find(
                        (s) =>
                          valoreEffettivo >= s.da &&
                          (s.a === null || valoreEffettivo <= s.a),
                      )?.label ?? "—"}
                </span>
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-[oklch(0.30_0.03_250)] mb-1.5">
                Valore indeterminabile (art. 21 c. 7)
              </label>
              <select
                value={indeterminabile}
                onChange={(e) => setIndeterminabile(e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-border focus:outline-none focus:border-[oklch(0.45_0.08_250)]"
                style={{ borderRadius: "0.375rem" }}
              >
                <option value="">— Importo determinato sopra —</option>
                {VALORI_INDETERMINABILI.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.label}
                  </option>
                ))}
              </select>
              <p className="text-xs text-muted-foreground mt-1">
                Sovrascrive il valore con il riferimento dell&apos;art. 21 c. 7.
              </p>
            </div>
          </div>

          {/* Livello + Variazione */}
          {!isPercentualeMode && (
            <div className="grid md:grid-cols-3 gap-3">
              {(["minimo", "medio", "massimo"] as LivelloCompenso[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLivello(l)}
                  className={`px-4 py-2.5 text-sm font-medium border transition-colors capitalize ${
                    livello === l
                      ? "bg-[oklch(0.94_0.03_250)] text-[oklch(0.25_0.04_250)] border-[oklch(0.45_0.08_250)]"
                      : "bg-white text-[oklch(0.40_0.02_250)] border-border hover:bg-gray-50"
                  }`}
                  style={{ borderRadius: "0.375rem" }}
                >
                  {l === "minimo"
                    ? "Minimo (−50%)"
                    : l === "medio"
                      ? "Medio (parametro)"
                      : "Massimo (+50%)"}
                </button>
              ))}
            </div>
          )}

          {/* Variazione personalizzata + Ulteriore valutazione */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[oklch(0.30_0.03_250)] mb-1.5">
                Variazione personalizzata (art. 19)
                <span className="ml-2 text-xs text-muted-foreground">
                  da −50% a +50%
                </span>
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="-50"
                  max="50"
                  step="5"
                  value={variazionePerc}
                  onChange={(e) => setVariazionePerc(Number(e.target.value))}
                  className="flex-1 accent-[oklch(0.45_0.08_250)]"
                />
                <span className="font-mono text-sm w-14 text-right text-[oklch(0.30_0.03_250)]">
                  {variazionePerc > 0 ? "+" : ""}
                  {variazionePerc}%
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[oklch(0.30_0.03_250)] mb-1.5">
                Ulteriore valutazione soggettiva
                <span className="ml-2 text-xs text-muted-foreground">
                  da 0% a +50%
                </span>
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={ulterioreValutazione}
                  onChange={(e) => setUlterioreValutazione(Number(e.target.value))}
                  className="flex-1 accent-[oklch(0.75_0.10_85)]"
                />
                <span className="font-mono text-sm w-14 text-right text-[oklch(0.30_0.03_250)]">
                  +{ulterioreValutazione}%
                </span>
              </div>
            </div>
          </div>

          {/* Spese */}
          <div
            className="border border-border p-4 bg-[oklch(0.98_0.005_85)] space-y-3"
            style={{ borderRadius: "0.375rem" }}
          >
            <h4 className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">
              Spese
            </h4>
            <div className="grid md:grid-cols-3 gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={includiSpeseGenerali}
                  onChange={(e) => setIncludiSpeseGenerali(e.target.checked)}
                  className="accent-[oklch(0.45_0.08_250)]"
                />
                <span>Spese generali</span>
                <input
                  type="number"
                  value={percSpeseGenerali}
                  onChange={(e) => setPercSpeseGenerali(Number(e.target.value))}
                  min="0"
                  max="25"
                  className="w-12 px-1.5 py-0.5 text-xs font-mono border border-border text-right"
                  style={{ borderRadius: "0.25rem" }}
                  disabled={!includiSpeseGenerali}
                />
                <span className="text-xs text-muted-foreground">%</span>
              </label>
              <div>
                <label className="block text-xs text-[oklch(0.40_0.02_250)] mb-1">
                  Spese imponibili (€)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={speseImponibili}
                  onChange={(e) => setSpeseImponibili(e.target.value)}
                  placeholder="0,00"
                  className="w-full px-2 py-1.5 text-xs font-mono border border-border"
                  style={{ borderRadius: "0.25rem" }}
                />
              </div>
              <div>
                <label className="block text-xs text-[oklch(0.40_0.02_250)] mb-1">
                  Spese esenti (€)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={speseEsenti}
                  onChange={(e) => setSpeseEsenti(e.target.value)}
                  placeholder="0,00"
                  className="w-full px-2 py-1.5 text-xs font-mono border border-border"
                  style={{ borderRadius: "0.25rem" }}
                />
              </div>
            </div>
          </div>

          {/* Accessori fiscali */}
          <div
            className="border border-border p-4 bg-[oklch(0.98_0.005_85)] space-y-2"
            style={{ borderRadius: "0.375rem" }}
          >
            <h4 className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">
              Accessori fiscali
            </h4>
            <div className="grid grid-cols-3 gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={includiCPA}
                  onChange={(e) => setIncludiCPA(e.target.checked)}
                  className="accent-[oklch(0.45_0.08_250)]"
                />
                <span>CPA 4%</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={includiIVA}
                  onChange={(e) => setIncludiIVA(e.target.checked)}
                  className="accent-[oklch(0.45_0.08_250)]"
                />
                <span>IVA 22%</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={includiRitenuta}
                  onChange={(e) => setIncludiRitenuta(e.target.checked)}
                  className="accent-[oklch(0.45_0.08_250)]"
                />
                <span>Ritenuta 20%</span>
              </label>
            </div>
          </div>

          {/* Reset */}
          <div className="flex justify-end">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-[oklch(0.45_0.02_250)] hover:text-[oklch(0.25_0.04_250)] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset valori
            </button>
          </div>

          {/* Risultato */}
          {risultato && (
            <div
              className="border-t border-[oklch(0.90_0.01_85)] pt-5 space-y-3"
              style={{ borderRadius: 0 }}
            >
              <h4 className="text-base font-semibold text-[oklch(0.25_0.04_250)] font-serif flex items-center gap-2">
                <Info className="w-4 h-4 text-[oklch(0.75_0.10_85)]" />
                Prospetto di liquidazione
              </h4>

              <div
                className="bg-[oklch(0.98_0.005_85)] border border-border overflow-hidden"
                style={{ borderRadius: "0.375rem" }}
              >
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-[oklch(0.92_0.01_85)]">
                      <td className="px-4 py-2 text-[oklch(0.40_0.02_250)]">
                        Compenso base (parametro)
                      </td>
                      <td className="px-4 py-2 text-right font-mono">
                        {formatEur(risultato.compensoBaseTabellare)}
                      </td>
                    </tr>
                    {risultato.compensoConVariazione !==
                      risultato.compensoBaseTabellare && (
                      <tr className="border-b border-[oklch(0.92_0.01_85)]">
                        <td className="px-4 py-2 text-[oklch(0.40_0.02_250)]">
                          Compenso con variazione ({variazionePerc > 0 ? "+" : ""}
                          {variazionePerc}%)
                        </td>
                        <td className="px-4 py-2 text-right font-mono">
                          {formatEur(risultato.compensoConVariazione)}
                        </td>
                      </tr>
                    )}
                    {risultato.ulterioreValutazione > 0 && (
                      <tr className="border-b border-[oklch(0.92_0.01_85)]">
                        <td className="px-4 py-2 text-[oklch(0.40_0.02_250)]">
                          Ulteriore valutazione (+{ulterioreValutazione}%)
                        </td>
                        <td className="px-4 py-2 text-right font-mono">
                          {formatEur(risultato.ulterioreValutazione)}
                        </td>
                      </tr>
                    )}
                    <tr className="border-b border-[oklch(0.92_0.01_85)] bg-[oklch(0.95_0.01_85)]">
                      <td className="px-4 py-2 font-medium text-[oklch(0.25_0.04_250)]">
                        Compenso finale
                      </td>
                      <td className="px-4 py-2 text-right font-mono font-medium">
                        {formatEur(risultato.compensoFinale)}
                      </td>
                    </tr>
                    {risultato.speseGenerali > 0 && (
                      <tr className="border-b border-[oklch(0.92_0.01_85)]">
                        <td className="px-4 py-2 text-[oklch(0.40_0.02_250)]">
                          Spese generali ({percSpeseGenerali}%)
                        </td>
                        <td className="px-4 py-2 text-right font-mono">
                          {formatEur(risultato.speseGenerali)}
                        </td>
                      </tr>
                    )}
                    {risultato.speseImponibili > 0 && (
                      <tr className="border-b border-[oklch(0.92_0.01_85)]">
                        <td className="px-4 py-2 text-[oklch(0.40_0.02_250)]">
                          Spese imponibili
                        </td>
                        <td className="px-4 py-2 text-right font-mono">
                          {formatEur(risultato.speseImponibili)}
                        </td>
                      </tr>
                    )}
                    <tr className="border-b border-[oklch(0.92_0.01_85)] bg-[oklch(0.95_0.01_85)]">
                      <td className="px-4 py-2 font-medium text-[oklch(0.25_0.04_250)]">
                        Imponibile fiscale
                      </td>
                      <td className="px-4 py-2 text-right font-mono font-medium">
                        {formatEur(risultato.imponibileFiscale)}
                      </td>
                    </tr>
                    {risultato.cpa > 0 && (
                      <tr className="border-b border-[oklch(0.92_0.01_85)]">
                        <td className="px-4 py-2 text-[oklch(0.40_0.02_250)]">
                          CPA (4%)
                        </td>
                        <td className="px-4 py-2 text-right font-mono">
                          {formatEur(risultato.cpa)}
                        </td>
                      </tr>
                    )}
                    {risultato.iva > 0 && (
                      <tr className="border-b border-[oklch(0.92_0.01_85)]">
                        <td className="px-4 py-2 text-[oklch(0.40_0.02_250)]">
                          IVA (22%)
                        </td>
                        <td className="px-4 py-2 text-right font-mono">
                          {formatEur(risultato.iva)}
                        </td>
                      </tr>
                    )}
                    {risultato.speseEsenti > 0 && (
                      <tr className="border-b border-[oklch(0.92_0.01_85)]">
                        <td className="px-4 py-2 text-[oklch(0.40_0.02_250)]">
                          Spese esenti
                        </td>
                        <td className="px-4 py-2 text-right font-mono">
                          {formatEur(risultato.speseEsenti)}
                        </td>
                      </tr>
                    )}
                    <tr className="border-b border-[oklch(0.92_0.01_85)] bg-[oklch(0.95_0.01_85)]">
                      <td className="px-4 py-2 font-semibold text-[oklch(0.25_0.04_250)]">
                        Totale fattura
                      </td>
                      <td className="px-4 py-2 text-right font-mono font-semibold">
                        {formatEur(risultato.totaleFattura)}
                      </td>
                    </tr>
                    {risultato.ritenuta > 0 && (
                      <tr className="border-b border-[oklch(0.92_0.01_85)]">
                        <td className="px-4 py-2 text-[oklch(0.40_0.02_250)]">
                          Ritenuta d&apos;acconto (−20%)
                        </td>
                        <td className="px-4 py-2 text-right font-mono">
                          −{formatEur(risultato.ritenuta)}
                        </td>
                      </tr>
                    )}
                    <tr className="bg-[oklch(0.25_0.04_250)]">
                      <td className="px-4 py-3 font-semibold text-white">
                        Netto a pagare
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-semibold text-[oklch(0.75_0.10_85)] text-base">
                        {formatEur(risultato.nettoAPagare)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-muted-foreground">
                Importi indicativi calcolati sulla base del D.M. 147/2022 (Tab.
                25). I valori medi possono essere modificati liberamente nella
                pattuizione scritta con il cliente, nel rispetto del principio di
                adeguatezza ex art. 2233 c.c.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
