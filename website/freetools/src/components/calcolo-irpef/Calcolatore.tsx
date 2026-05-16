"use client";

import { useState, useMemo } from "react";
import { Calculator, RotateCcw, Info, TrendingDown } from "lucide-react";
import {
  calcolaIrpef,
  type AnnoImposta,
  type TipoReddito,
  type InputCalcoloIrpef,
  type RisultatoCalcoloIrpef,
  ADDIZIONALI_REGIONALI,
} from "@/data/calcolo-irpef/calcoloIrpefData";
import { formatEur, formatPct } from "@/lib/utils";

const TIPI_REDDITO: { id: TipoReddito; label: string; descrizione: string }[] = [
  {
    id: "dipendente",
    label: "Lavoro dipendente",
    descrizione: "Detrazione max 1.955 € (no tax area 8.500 €)",
  },
  {
    id: "pensione",
    label: "Pensione",
    descrizione: "Detrazione max 1.955 € (no tax area 8.500 €)",
  },
  {
    id: "autonomo",
    label: "Lavoro autonomo",
    descrizione: "Detrazione max 1.265 € (no tax area 5.500 €)",
  },
  {
    id: "altro",
    label: "Altri redditi",
    descrizione: "Nessuna detrazione di base",
  },
];

const ANNI: { id: AnnoImposta; label: string; note: string }[] = [
  { id: 2026, label: "2026", note: "Nuove aliquote (L. 199/2025)" },
  { id: 2025, label: "2025", note: "3 scaglioni (35% intermedio)" },
  { id: 2024, label: "2024", note: "3 scaglioni (riforma D.Lgs. 216/2023)" },
];

const QUICK_FILLS: { label: string; valore: number }[] = [
  { label: "20.000 €", valore: 20000 },
  { label: "30.000 €", valore: 30000 },
  { label: "40.000 €", valore: 40000 },
  { label: "55.000 €", valore: 55000 },
  { label: "80.000 €", valore: 80000 },
];

const parseNum = (val: string): number => {
  const cleaned = val.replace(/\./g, "").replace(",", ".");
  return parseFloat(cleaned) || 0;
};

export default function Calcolatore() {
  const [redditoLordo, setRedditoLordo] = useState<string>("");
  const [tipoReddito, setTipoReddito] = useState<TipoReddito>("dipendente");
  const [oneriDeducibili, setOneriDeducibili] = useState<string>("0");
  const [aliquotaRegionale, setAliquotaRegionale] = useState<string>("1,23");
  const [aliquotaComunale, setAliquotaComunale] = useState<string>("0,8");
  const [anno, setAnno] = useState<AnnoImposta>(2026);
  const [applicaUlterioreDetrazione, setApplicaUlterioreDetrazione] = useState(true);
  const [mostraAvanzate, setMostraAvanzate] = useState(false);

  const input = useMemo<InputCalcoloIrpef>(
    () => ({
      redditoLordo: parseNum(redditoLordo),
      tipoReddito,
      oneriDeducibili: parseNum(oneriDeducibili),
      aliquotaRegionale: parseNum(aliquotaRegionale),
      aliquotaComunale: parseNum(aliquotaComunale),
      anno,
      applicaUlterioreDetrazione,
    }),
    [
      redditoLordo,
      tipoReddito,
      oneriDeducibili,
      aliquotaRegionale,
      aliquotaComunale,
      anno,
      applicaUlterioreDetrazione,
    ],
  );

  const risultato: RisultatoCalcoloIrpef | null = useMemo(() => {
    if (!input.redditoLordo || input.redditoLordo <= 0) return null;
    return calcolaIrpef(input);
  }, [input]);

  const handleReset = () => {
    setRedditoLordo("");
    setTipoReddito("dipendente");
    setOneriDeducibili("0");
    setAliquotaRegionale("1,23");
    setAliquotaComunale("0,8");
    setAnno(2026);
    setApplicaUlterioreDetrazione(true);
    setMostraAvanzate(false);
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
            Calcolatore IRPEF — Lordo, Netto, Aliquota Media
          </h3>
        </div>

        <div className="p-6 space-y-6">
          {/* Anno d'imposta */}
          <div>
            <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2">
              Anno d'imposta
            </label>
            <div className="grid grid-cols-3 gap-2">
              {ANNI.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setAnno(a.id)}
                  className={`px-3 py-2 text-left border transition-colors ${
                    anno === a.id
                      ? "bg-[oklch(0.75_0.10_85)]/20 text-[oklch(0.25_0.04_250)] border-[oklch(0.75_0.10_85)]"
                      : "bg-white text-muted-foreground border-border hover:border-[oklch(0.75_0.10_85)]/50"
                  }`}
                  style={{ borderRadius: "0.375rem" }}
                  type="button"
                >
                  <div className="font-semibold text-base">{a.label}</div>
                  <div className="text-xs leading-snug mt-0.5">{a.note}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Tipo di reddito */}
          <div>
            <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2">
              Tipo di reddito
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {TIPI_REDDITO.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTipoReddito(t.id)}
                  className={`px-3 py-2 text-left border transition-colors ${
                    tipoReddito === t.id
                      ? "bg-[oklch(0.75_0.10_85)]/20 text-[oklch(0.25_0.04_250)] border-[oklch(0.75_0.10_85)]"
                      : "bg-white text-muted-foreground border-border hover:border-[oklch(0.75_0.10_85)]/50"
                  }`}
                  style={{ borderRadius: "0.375rem" }}
                  type="button"
                >
                  <div className="font-semibold text-sm">{t.label}</div>
                  <div className="text-xs leading-snug mt-0.5">{t.descrizione}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Reddito complessivo + quick fills */}
          <div>
            <label
              htmlFor="redditoLordo"
              className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2"
            >
              Reddito complessivo lordo annuo (€)
            </label>
            <input
              id="redditoLordo"
              type="text"
              inputMode="decimal"
              value={redditoLordo}
              onChange={(e) => setRedditoLordo(e.target.value)}
              placeholder="Es. 30.000"
              className="w-full px-4 py-3 border border-border bg-white text-[oklch(0.25_0.04_250)] font-mono text-lg focus:outline-none focus:border-[oklch(0.75_0.10_85)]"
              style={{ borderRadius: "0.375rem" }}
            />
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground self-center">Esempi rapidi:</span>
              {QUICK_FILLS.map((q) => (
                <button
                  key={q.valore}
                  onClick={() => setRedditoLordo(q.valore.toString())}
                  className="px-3 py-1 text-xs border border-border bg-white text-muted-foreground hover:border-[oklch(0.75_0.10_85)] hover:text-[oklch(0.25_0.04_250)]"
                  style={{ borderRadius: "0.25rem" }}
                  type="button"
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          {/* Toggle ulteriore detrazione (solo se dipendente) */}
          {tipoReddito === "dipendente" && (
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="ulterioreDetr"
                checked={applicaUlterioreDetrazione}
                onChange={(e) => setApplicaUlterioreDetrazione(e.target.checked)}
                className="mt-1"
              />
              <label
                htmlFor="ulterioreDetr"
                className="text-sm text-[oklch(0.25_0.04_250)] cursor-pointer"
              >
                Applica ulteriore detrazione L. 207/2024 (1.000 € per RC 20.000-32.000 €,
                decrescente fino a 40.000 €)
              </label>
            </div>
          )}

          {/* Opzioni avanzate */}
          <div>
            <button
              onClick={() => setMostraAvanzate(!mostraAvanzate)}
              className="text-sm text-[oklch(0.45_0.12_250)] underline decoration-dotted hover:text-[oklch(0.35_0.15_250)]"
              type="button"
            >
              {mostraAvanzate ? "Nascondi" : "Mostra"} opzioni avanzate
              (oneri deducibili, addizionali)
            </button>

            {mostraAvanzate && (
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-muted/30" style={{ borderRadius: "0.375rem" }}>
                <div>
                  <label
                    htmlFor="oneri"
                    className="block text-xs font-medium text-[oklch(0.25_0.04_250)] mb-1"
                  >
                    Oneri deducibili (€)
                  </label>
                  <input
                    id="oneri"
                    type="text"
                    inputMode="decimal"
                    value={oneriDeducibili}
                    onChange={(e) => setOneriDeducibili(e.target.value)}
                    className="w-full px-3 py-2 border border-border bg-white text-sm font-mono focus:outline-none focus:border-[oklch(0.75_0.10_85)]"
                    style={{ borderRadius: "0.25rem" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="addReg"
                    className="block text-xs font-medium text-[oklch(0.25_0.04_250)] mb-1"
                  >
                    Aliquota regionale (%)
                  </label>
                  <input
                    id="addReg"
                    type="text"
                    inputMode="decimal"
                    value={aliquotaRegionale}
                    onChange={(e) => setAliquotaRegionale(e.target.value)}
                    className="w-full px-3 py-2 border border-border bg-white text-sm font-mono focus:outline-none focus:border-[oklch(0.75_0.10_85)]"
                    style={{ borderRadius: "0.25rem" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="addCom"
                    className="block text-xs font-medium text-[oklch(0.25_0.04_250)] mb-1"
                  >
                    Aliquota comunale (%)
                  </label>
                  <input
                    id="addCom"
                    type="text"
                    inputMode="decimal"
                    value={aliquotaComunale}
                    onChange={(e) => setAliquotaComunale(e.target.value)}
                    className="w-full px-3 py-2 border border-border bg-white text-sm font-mono focus:outline-none focus:border-[oklch(0.75_0.10_85)]"
                    style={{ borderRadius: "0.25rem" }}
                  />
                </div>
                <div className="sm:col-span-3 text-xs text-muted-foreground">
                  Aliquote regionali tipiche: 1,23% (Lombardia/Veneto/Sicilia), 1,73% (Lazio/Abruzzo), 3,33% (max).
                  Aliquota comunale max 0,8% (1% per Roma).
                </div>
              </div>
            )}
          </div>

          {/* Reset button */}
          <div className="flex justify-end">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground hover:text-[oklch(0.25_0.04_250)] border border-border"
              style={{ borderRadius: "0.25rem" }}
              type="button"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          </div>

          {/* Risultati */}
          {risultato && (
            <div className="space-y-4 pt-4 border-t border-border">
              {/* Confronto 2025/2026 se anno = 2026 */}
              {anno === 2026 && risultato.risparmioVs2025 !== undefined && risultato.risparmioVs2025 > 0 && (
                <div
                  className="bg-[oklch(0.95_0.05_140)] border border-[oklch(0.65_0.15_140)]/40 p-4 flex items-start gap-3"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <TrendingDown className="w-5 h-5 text-[oklch(0.45_0.15_140)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-[oklch(0.30_0.10_140)]">
                      Risparmio rispetto al 2025:{" "}
                      <span className="font-mono">{formatEur(risultato.risparmioVs2025)}</span>
                    </div>
                    <div className="text-xs text-[oklch(0.40_0.08_140)] mt-1">
                      IRPEF lorda 2025 sarebbe stata: {formatEur(risultato.irpefLorda2025 ?? 0)}{" "}
                      vs IRPEF lorda 2026: {formatEur(risultato.irpefLorda)}. Riduzione aliquota
                      secondo scaglione dal 35% al 33% (Legge 199/2025).
                    </div>
                  </div>
                </div>
              )}

              {/* Breakdown per scaglione */}
              <div>
                <h4 className="text-sm font-semibold text-[oklch(0.25_0.04_250)] mb-2">
                  Sviluppo del calcolo per scaglioni
                </h4>
                <div className="border border-border overflow-hidden" style={{ borderRadius: "0.375rem" }}>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[oklch(0.25_0.04_250)] text-white">
                        <th className="px-3 py-2 text-left">Scaglione</th>
                        <th className="px-3 py-2 text-right">Reddito</th>
                        <th className="px-3 py-2 text-right">Aliquota</th>
                        <th className="px-3 py-2 text-right">Imposta</th>
                      </tr>
                    </thead>
                    <tbody>
                      {risultato.dettaglioScaglioni.map((s, i) => (
                        <tr key={i} className="border-t border-border">
                          <td className="px-3 py-2 text-muted-foreground">{s.scaglione}</td>
                          <td className="px-3 py-2 text-right font-mono">
                            {formatEur(s.redditoNelloScaglione)}
                          </td>
                          <td className="px-3 py-2 text-right font-mono">
                            {formatPct(s.aliquota * 100)}
                          </td>
                          <td className="px-3 py-2 text-right font-mono font-semibold text-[oklch(0.25_0.04_250)]">
                            {formatEur(s.imposta)}
                          </td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-[oklch(0.25_0.04_250)] bg-muted/30">
                        <td colSpan={3} className="px-3 py-2 font-semibold text-[oklch(0.25_0.04_250)]">
                          IRPEF lorda
                        </td>
                        <td className="px-3 py-2 text-right font-mono font-bold text-[oklch(0.25_0.04_250)]">
                          {formatEur(risultato.irpefLorda)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Detrazioni e netto */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="bg-muted/30 p-4 space-y-2"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <h4 className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">Detrazioni</h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Detrazione base (art. 13 TUIR)</span>
                    <span className="font-mono">{formatEur(risultato.detrazioneBase)}</span>
                  </div>
                  {risultato.ulterioreDetrazione > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Ulteriore detrazione (L. 207/2024)</span>
                      <span className="font-mono">{formatEur(risultato.ulterioreDetrazione)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-semibold pt-2 border-t border-border">
                    <span className="text-[oklch(0.25_0.04_250)]">Totale detrazioni</span>
                    <span className="font-mono text-[oklch(0.25_0.04_250)]">
                      −{formatEur(risultato.detrazioniTotali)}
                    </span>
                  </div>
                </div>

                <div
                  className="bg-muted/30 p-4 space-y-2"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <h4 className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">
                    Aliquote
                  </h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Aliquota media lorda</span>
                    <span className="font-mono">{formatPct(risultato.aliquotaMediaLorda)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Aliquota media netta</span>
                    <span className="font-mono">{formatPct(risultato.aliquotaMediaNetta)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold pt-2 border-t border-border">
                    <span className="text-[oklch(0.25_0.04_250)]">Aliquota marginale</span>
                    <span className="font-mono text-[oklch(0.25_0.04_250)]">
                      {formatPct(risultato.aliquotaMarginale)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Riepilogo finale */}
              <div
                className="bg-[oklch(0.25_0.04_250)] text-white p-5 space-y-3"
                style={{ borderRadius: "0.5rem" }}
              >
                <h4 className="text-base font-serif font-semibold text-[oklch(0.75_0.10_85)]">
                  Riepilogo IRPEF {anno}
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="opacity-80">Reddito complessivo</span>
                  <span className="text-right font-mono">{formatEur(risultato.redditoComplessivo)}</span>

                  <span className="opacity-80">Reddito imponibile</span>
                  <span className="text-right font-mono">{formatEur(risultato.redditoImponibile)}</span>

                  <span className="opacity-80">IRPEF lorda</span>
                  <span className="text-right font-mono">{formatEur(risultato.irpefLorda)}</span>

                  <span className="opacity-80">Detrazioni</span>
                  <span className="text-right font-mono">−{formatEur(risultato.detrazioniTotali)}</span>

                  <span className="font-semibold border-t border-white/20 pt-2">IRPEF netta</span>
                  <span className="text-right font-mono font-semibold border-t border-white/20 pt-2">
                    {formatEur(risultato.irpefNetta)}
                  </span>

                  {risultato.addizionaleRegionale > 0 && (
                    <>
                      <span className="opacity-80">Addizionale regionale</span>
                      <span className="text-right font-mono">
                        {formatEur(risultato.addizionaleRegionale)}
                      </span>
                    </>
                  )}
                  {risultato.addizionaleComunale > 0 && (
                    <>
                      <span className="opacity-80">Addizionale comunale</span>
                      <span className="text-right font-mono">
                        {formatEur(risultato.addizionaleComunale)}
                      </span>
                    </>
                  )}
                  <span className="font-semibold border-t border-white/40 pt-2 text-[oklch(0.75_0.10_85)]">
                    Totale imposte
                  </span>
                  <span className="text-right font-mono font-semibold border-t border-white/40 pt-2 text-[oklch(0.75_0.10_85)]">
                    {formatEur(risultato.totaleImposte)}
                  </span>
                  <span className="text-base font-bold pt-2">Reddito netto annuo</span>
                  <span className="text-right text-base font-mono font-bold pt-2">
                    {formatEur(risultato.redditoNetto)}
                  </span>
                </div>
              </div>

              {/* Note informative */}
              <div className="text-xs text-muted-foreground flex items-start gap-2">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Calcolo indicativo basato sulle aliquote IRPEF {anno} e sulle detrazioni di base
                  art. 13 TUIR. Non considera detrazioni per familiari a carico (art. 12), oneri al
                  19% (art. 15), bonus aggiuntivo (L. 207/2024) né eventuali specifiche
                  agevolazioni. Per la dichiarazione effettiva consultare il modello 730 o REDDITI PF.
                  Aliquote regionali e comunali sono variabili: verificare con le delibere annuali
                  della Regione e del Comune di residenza al 1° gennaio dell'anno di
                  riferimento ({ADDIZIONALI_REGIONALI.length} regioni indicative consultabili nella sezione dedicata).
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
