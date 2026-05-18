"use client";

import { useMemo, useState } from "react";
import { Calculator, RotateCcw, Info } from "lucide-react";
import { formatEur } from "@/lib/utils";
import {
  calcolaCompensoPenale,
  COMPETENZE_PENALI,
  aumentoPluralitaImputati,
  type LivelloFase,
  type RisultatoCompensoPenale,
} from "@/data/compenso-penale/compensoPenaleData";

const DEFAULTS = {
  competenzaId: "tribunale-monocratico",
  fasiAttive: {
    studio: true,
    introduttiva: true,
    istruttoria: true,
    decisionale: true,
  },
  livelloFasi: {
    studio: "medio" as LivelloFase,
    introduttiva: "medio" as LivelloFase,
    istruttoria: "medio" as LivelloFase,
    decisionale: "medio" as LivelloFase,
  },
  valutazioneSoggettiva: 0,
  numeroParti: 1,
  gratuitoPatrocinio: false,
  inammissibilita: false,
  attiTelematici: false,
  includiSpeseGenerali: true,
  percSpeseGenerali: 15,
  speseImponibili: "",
  speseEsenti: "",
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

const FASI = [
  { key: "studio" as const, label: "Fase Studio" },
  { key: "introduttiva" as const, label: "Fase Introduttiva" },
  { key: "istruttoria" as const, label: "Fase Istruttoria/Dibattim." },
  { key: "decisionale" as const, label: "Fase Decisionale" },
];

export default function Calcolatore() {
  const [competenzaId, setCompetenzaId] = useState(DEFAULTS.competenzaId);
  const [fasiAttive, setFasiAttive] = useState(DEFAULTS.fasiAttive);
  const [livelloFasi, setLivelloFasi] = useState(DEFAULTS.livelloFasi);
  const [valutazioneSoggettiva, setValutazioneSoggettiva] = useState(
    DEFAULTS.valutazioneSoggettiva,
  );
  const [numeroParti, setNumeroParti] = useState(DEFAULTS.numeroParti);
  const [gratuitoPatrocinio, setGratuitoPatrocinio] = useState(
    DEFAULTS.gratuitoPatrocinio,
  );
  const [inammissibilita, setInammissibilita] = useState(DEFAULTS.inammissibilita);
  const [attiTelematici, setAttiTelematici] = useState(DEFAULTS.attiTelematici);
  const [includiSpeseGenerali, setIncludiSpeseGenerali] = useState(
    DEFAULTS.includiSpeseGenerali,
  );
  const [percSpeseGenerali, setPercSpeseGenerali] = useState(
    DEFAULTS.percSpeseGenerali,
  );
  const [speseImponibili, setSpeseImponibili] = useState(DEFAULTS.speseImponibili);
  const [speseEsenti, setSpeseEsenti] = useState(DEFAULTS.speseEsenti);
  const [includiCPA, setIncludiCPA] = useState(DEFAULTS.includiCPA);
  const [includiIVA, setIncludiIVA] = useState(DEFAULTS.includiIVA);
  const [includiRitenuta, setIncludiRitenuta] = useState(DEFAULTS.includiRitenuta);

  const competenza = useMemo(
    () => COMPETENZE_PENALI.find((c) => c.id === competenzaId),
    [competenzaId],
  );

  const risultato: RisultatoCompensoPenale | null = useMemo(() => {
    return calcolaCompensoPenale({
      competenzaId,
      fasiAttive,
      livelloFasi,
      valutazioneSoggettiva,
      numeroParti,
      gratuitoPatrocinio,
      inammissibilita,
      attiTelematici,
      speseImponibili: parseNum(speseImponibili),
      speseEsenti: parseNum(speseEsenti),
      includiSpeseGenerali,
      percSpeseGenerali,
      includiCPA,
      includiIVA,
      includiRitenuta,
    });
  }, [
    competenzaId,
    fasiAttive,
    livelloFasi,
    valutazioneSoggettiva,
    numeroParti,
    gratuitoPatrocinio,
    inammissibilita,
    attiTelematici,
    speseImponibili,
    speseEsenti,
    includiSpeseGenerali,
    percSpeseGenerali,
    includiCPA,
    includiIVA,
    includiRitenuta,
  ]);

  const handleReset = () => {
    setCompetenzaId(DEFAULTS.competenzaId);
    setFasiAttive(DEFAULTS.fasiAttive);
    setLivelloFasi(DEFAULTS.livelloFasi);
    setValutazioneSoggettiva(DEFAULTS.valutazioneSoggettiva);
    setNumeroParti(DEFAULTS.numeroParti);
    setGratuitoPatrocinio(DEFAULTS.gratuitoPatrocinio);
    setInammissibilita(DEFAULTS.inammissibilita);
    setAttiTelematici(DEFAULTS.attiTelematici);
    setIncludiSpeseGenerali(DEFAULTS.includiSpeseGenerali);
    setPercSpeseGenerali(DEFAULTS.percSpeseGenerali);
    setSpeseImponibili(DEFAULTS.speseImponibili);
    setSpeseEsenti(DEFAULTS.speseEsenti);
    setIncludiCPA(DEFAULTS.includiCPA);
    setIncludiIVA(DEFAULTS.includiIVA);
    setIncludiRitenuta(DEFAULTS.includiRitenuta);
  };

  const percPluralita = aumentoPluralitaImputati(numeroParti);

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
            Calcolo Compenso Avvocato Penale
          </h3>
          <span className="ml-auto text-xs text-[oklch(0.75_0.10_85)] uppercase tracking-wider font-semibold">
            D.M. 147/2022 — Tab. 15
          </span>
        </div>

        <div className="p-6 space-y-6">
          {/* Competenza */}
          <div>
            <label className="block text-sm font-medium text-[oklch(0.30_0.03_250)] mb-1.5">
              Competenza giudiziale
            </label>
            <select
              value={competenzaId}
              onChange={(e) => setCompetenzaId(e.target.value)}
              className="w-full px-3 py-2.5 text-sm border border-border focus:outline-none focus:border-[oklch(0.45_0.08_250)]"
              style={{ borderRadius: "0.375rem" }}
            >
              {COMPETENZE_PENALI.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nome}
                </option>
              ))}
            </select>
            {competenza?.note && (
              <p className="text-xs text-muted-foreground mt-1.5 flex items-start gap-1">
                <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>{competenza.note}</span>
              </p>
            )}
          </div>

          {/* Fasi */}
          <div
            className="border border-border p-4 bg-[oklch(0.98_0.005_85)] space-y-3"
            style={{ borderRadius: "0.375rem" }}
          >
            <h4 className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">
              Fasi del procedimento (art. 12 c. 3 D.M. 55/2014)
            </h4>
            <div className="space-y-3">
              {FASI.map(({ key, label }) => {
                const fase = competenza?.fasi[key];
                const disabled = !fase;
                const attiva = fasiAttive[key];
                return (
                  <div
                    key={key}
                    className={`flex flex-wrap items-center gap-3 p-3 border ${
                      disabled
                        ? "bg-gray-50 border-gray-200 opacity-50"
                        : "bg-white border-border"
                    }`}
                    style={{ borderRadius: "0.375rem" }}
                  >
                    <label className="flex items-center gap-2 text-sm font-medium min-w-[220px]">
                      <input
                        type="checkbox"
                        checked={attiva && !disabled}
                        disabled={disabled}
                        onChange={(e) =>
                          setFasiAttive({ ...fasiAttive, [key]: e.target.checked })
                        }
                        className="accent-[oklch(0.45_0.08_250)]"
                      />
                      <span>{label}</span>
                    </label>
                    {disabled ? (
                      <span className="text-xs text-muted-foreground">
                        Non prevista per questa competenza
                      </span>
                    ) : (
                      <>
                        <div className="flex gap-1 flex-wrap">
                          {(["minimo", "medio", "massimo"] as LivelloFase[]).map((l) => (
                            <button
                              key={l}
                              onClick={() =>
                                setLivelloFasi({ ...livelloFasi, [key]: l })
                              }
                              disabled={!attiva}
                              className={`px-2.5 py-1 text-xs font-medium border transition-colors capitalize ${
                                livelloFasi[key] === l
                                  ? "bg-[oklch(0.94_0.03_250)] text-[oklch(0.25_0.04_250)] border-[oklch(0.45_0.08_250)]"
                                  : "bg-white text-[oklch(0.40_0.02_250)] border-border hover:bg-gray-50"
                              } disabled:opacity-40`}
                              style={{ borderRadius: "0.25rem" }}
                            >
                              {l}
                            </button>
                          ))}
                        </div>
                        <span className="ml-auto font-mono text-sm text-[oklch(0.30_0.03_250)]">
                          {formatEur(
                            fase[
                              livelloFasi[key] === "minimo"
                                ? "min"
                                : livelloFasi[key] === "massimo"
                                  ? "max"
                                  : "med"
                            ],
                          )}
                        </span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Aumenti */}
          <div
            className="border border-border p-4 bg-[oklch(0.98_0.005_85)] space-y-4"
            style={{ borderRadius: "0.375rem" }}
          >
            <h4 className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">
              Aumenti (artt. 8 e 12 D.M. 55/2014)
            </h4>

            {/* Numero parti / imputati */}
            <div>
              <label className="block text-sm font-medium text-[oklch(0.30_0.03_250)] mb-1.5">
                Numero parti / imputati
                <span className="ml-2 text-xs text-muted-foreground">
                  +20% per parte oltre la prima, fino a 10; poi +5% (art. 8)
                </span>
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={numeroParti}
                  onChange={(e) => setNumeroParti(Number(e.target.value))}
                  className="flex-1 accent-[oklch(0.45_0.08_250)]"
                />
                <span className="font-mono text-sm w-28 text-right text-[oklch(0.30_0.03_250)]">
                  {numeroParti} (+{percPluralita}%)
                </span>
              </div>
            </div>

            {/* Valutazione soggettiva */}
            <div>
              <label className="block text-sm font-medium text-[oklch(0.30_0.03_250)] mb-1.5">
                Valutazione soggettiva (art. 12 c. 1)
                <span className="ml-2 text-xs text-muted-foreground">
                  da −50% a +50% (inderogabile)
                </span>
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="-50"
                  max="50"
                  step="5"
                  value={valutazioneSoggettiva}
                  onChange={(e) => setValutazioneSoggettiva(Number(e.target.value))}
                  className="flex-1 accent-[oklch(0.45_0.08_250)]"
                />
                <span className="font-mono text-sm w-14 text-right text-[oklch(0.30_0.03_250)]">
                  {valutazioneSoggettiva > 0 ? "+" : ""}
                  {valutazioneSoggettiva}%
                </span>
              </div>
            </div>

            {/* Atti telematici */}
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={attiTelematici}
                onChange={(e) => setAttiTelematici(e.target.checked)}
                className="accent-[oklch(0.45_0.08_250)]"
              />
              <span>Atti telematici navigabili (art. 4 c. 1-bis): +30%</span>
            </label>
          </div>

          {/* Riduzioni */}
          <div
            className="border border-border p-4 bg-[oklch(0.98_0.005_85)] space-y-3"
            style={{ borderRadius: "0.375rem" }}
          >
            <h4 className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">
              Riduzioni
            </h4>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={gratuitoPatrocinio}
                onChange={(e) => setGratuitoPatrocinio(e.target.checked)}
                className="accent-[oklch(0.45_0.08_250)]"
              />
              <span>
                Gratuito patrocinio penale: −1/3 (art. 106-bis DPR 115/2002)
              </span>
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={inammissibilita}
                onChange={(e) => setInammissibilita(e.target.checked)}
                className="accent-[oklch(0.45_0.08_250)]"
              />
              <span>Inammissibilità / improcedibilità: −50% (art. 4 c. 9)</span>
            </label>
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

          {/* Accessori */}
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
          {risultato && risultato.compensoBase > 0 && (
            <div
              className="bg-[oklch(0.25_0.04_250)] text-white p-5 space-y-3"
              style={{ borderRadius: "0.375rem" }}
            >
              <div className="text-xs uppercase tracking-wider text-[oklch(0.75_0.10_85)] font-semibold">
                Riepilogo Liquidazione
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm font-mono">
                {/* Fasi */}
                {risultato.compensoPerFase.studio > 0 && (
                  <>
                    <div className="text-[oklch(0.85_0.03_250)]">Studio:</div>
                    <div className="text-right">
                      {formatEur(risultato.compensoPerFase.studio)}
                    </div>
                  </>
                )}
                {risultato.compensoPerFase.introduttiva > 0 && (
                  <>
                    <div className="text-[oklch(0.85_0.03_250)]">Introduttiva:</div>
                    <div className="text-right">
                      {formatEur(risultato.compensoPerFase.introduttiva)}
                    </div>
                  </>
                )}
                {risultato.compensoPerFase.istruttoria > 0 && (
                  <>
                    <div className="text-[oklch(0.85_0.03_250)]">
                      Istruttoria/Dibattim.:
                    </div>
                    <div className="text-right">
                      {formatEur(risultato.compensoPerFase.istruttoria)}
                    </div>
                  </>
                )}
                {risultato.compensoPerFase.decisionale > 0 && (
                  <>
                    <div className="text-[oklch(0.85_0.03_250)]">Decisionale:</div>
                    <div className="text-right">
                      {formatEur(risultato.compensoPerFase.decisionale)}
                    </div>
                  </>
                )}

                <div className="col-span-2 border-t border-[oklch(0.45_0.08_250)] my-1.5" />

                <div className="font-semibold text-[oklch(0.75_0.10_85)]">
                  Compenso base:
                </div>
                <div className="text-right font-semibold text-[oklch(0.75_0.10_85)]">
                  {formatEur(risultato.compensoBase)}
                </div>

                {risultato.valutazioneSoggettiva !== 0 && (
                  <>
                    <div className="text-[oklch(0.85_0.03_250)]">
                      Valutazione soggettiva ({valutazioneSoggettiva > 0 ? "+" : ""}
                      {valutazioneSoggettiva}%):
                    </div>
                    <div className="text-right">
                      {risultato.valutazioneSoggettiva > 0 ? "+" : ""}
                      {formatEur(risultato.valutazioneSoggettiva)}
                    </div>
                  </>
                )}

                {risultato.aumentoPluralita > 0 && (
                  <>
                    <div className="text-[oklch(0.85_0.03_250)]">
                      Aumento pluralità imputati (+{percPluralita}%):
                    </div>
                    <div className="text-right">
                      +{formatEur(risultato.aumentoPluralita)}
                    </div>
                  </>
                )}

                {risultato.aumentoAttiTelematici > 0 && (
                  <>
                    <div className="text-[oklch(0.85_0.03_250)]">
                      Atti telematici (+30%):
                    </div>
                    <div className="text-right">
                      +{formatEur(risultato.aumentoAttiTelematici)}
                    </div>
                  </>
                )}

                {risultato.riduzioneGratuitoPatrocinio > 0 && (
                  <>
                    <div className="text-[oklch(0.85_0.03_250)]">
                      Gratuito patrocinio (−1/3):
                    </div>
                    <div className="text-right">
                      −{formatEur(risultato.riduzioneGratuitoPatrocinio)}
                    </div>
                  </>
                )}

                {risultato.riduzioneInammissibilita > 0 && (
                  <>
                    <div className="text-[oklch(0.85_0.03_250)]">
                      Inammissibilità (−50%):
                    </div>
                    <div className="text-right">
                      −{formatEur(risultato.riduzioneInammissibilita)}
                    </div>
                  </>
                )}

                <div className="col-span-2 border-t border-[oklch(0.45_0.08_250)] my-1.5" />

                <div className="font-semibold">Compenso finale:</div>
                <div className="text-right font-semibold">
                  {formatEur(risultato.compensoFinale)}
                </div>

                {risultato.speseGenerali > 0 && (
                  <>
                    <div className="text-[oklch(0.85_0.03_250)]">
                      Spese generali ({percSpeseGenerali}%):
                    </div>
                    <div className="text-right">
                      +{formatEur(risultato.speseGenerali)}
                    </div>
                  </>
                )}

                {risultato.speseImponibili > 0 && (
                  <>
                    <div className="text-[oklch(0.85_0.03_250)]">
                      Spese imponibili:
                    </div>
                    <div className="text-right">
                      +{formatEur(risultato.speseImponibili)}
                    </div>
                  </>
                )}

                <div className="text-[oklch(0.85_0.03_250)]">Imponibile fiscale:</div>
                <div className="text-right">
                  {formatEur(risultato.imponibileFiscale)}
                </div>

                {risultato.cpa > 0 && (
                  <>
                    <div className="text-[oklch(0.85_0.03_250)]">CPA 4%:</div>
                    <div className="text-right">+{formatEur(risultato.cpa)}</div>
                  </>
                )}

                {risultato.iva > 0 && (
                  <>
                    <div className="text-[oklch(0.85_0.03_250)]">IVA 22%:</div>
                    <div className="text-right">+{formatEur(risultato.iva)}</div>
                  </>
                )}

                {risultato.speseEsenti > 0 && (
                  <>
                    <div className="text-[oklch(0.85_0.03_250)]">
                      Spese esenti:
                    </div>
                    <div className="text-right">
                      +{formatEur(risultato.speseEsenti)}
                    </div>
                  </>
                )}

                <div className="col-span-2 border-t border-[oklch(0.45_0.08_250)] my-1.5" />

                <div className="font-semibold text-[oklch(0.75_0.10_85)]">
                  Totale fattura:
                </div>
                <div className="text-right font-semibold text-[oklch(0.75_0.10_85)]">
                  {formatEur(risultato.totaleFattura)}
                </div>

                {risultato.ritenuta > 0 && (
                  <>
                    <div className="text-[oklch(0.85_0.03_250)]">
                      Ritenuta d&apos;acconto 20%:
                    </div>
                    <div className="text-right">
                      −{formatEur(risultato.ritenuta)}
                    </div>
                    <div className="col-span-2 border-t border-[oklch(0.45_0.08_250)] my-1.5" />
                    <div className="font-bold text-base text-white">
                      Netto a pagare:
                    </div>
                    <div className="text-right font-bold text-base text-white">
                      {formatEur(risultato.nettoAPagare)}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
