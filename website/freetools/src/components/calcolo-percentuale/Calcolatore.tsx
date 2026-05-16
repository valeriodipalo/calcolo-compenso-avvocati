"use client";

import { useMemo, useState } from "react";
import {
  Calculator,
  RotateCcw,
  Percent,
  Equal,
  ArrowRight,
  Tag,
  Layers,
  TrendingUp,
  Divide,
  type LucideIcon,
} from "lucide-react";
import {
  calcolaParte,
  calcolaIncidenza,
  calcolaTotale,
  calcolaVariazione,
  calcolaAumento,
  calcolaSconto,
  calcolaScontiSuccessivi,
  type ModalitaCalcolo,
  type RisultatoCalcolo,
} from "@/data/calcolo-percentuale/calcoloPercentualeData";

const parseNum = (val: string): number => {
  if (!val) return 0;
  const cleaned = val.replace(/\./g, "").replace(",", ".");
  const n = parseFloat(cleaned);
  return Number.isFinite(n) ? n : 0;
};

const fmtIt = (n: number, decimali = 2): string =>
  new Intl.NumberFormat("it-IT", {
    minimumFractionDigits: decimali,
    maximumFractionDigits: decimali,
  }).format(n);

const fmtPct = (n: number, decimali = 2): string => `${fmtIt(n, decimali)}%`;

interface ModalitaInfo {
  id: ModalitaCalcolo;
  label: string;
  shortLabel: string;
  descrizione: string;
  icon: LucideIcon;
}

const MODALITA: ModalitaInfo[] = [
  {
    id: "parte",
    label: "Percentuale di un numero",
    shortLabel: "X% di N",
    descrizione: "Calcola quanto vale il X% di un numero (caso più comune)",
    icon: Percent,
  },
  {
    id: "incidenza",
    label: "Quale % è un numero di un altro",
    shortLabel: "V su N",
    descrizione: "Calcola che percentuale rappresenta una parte sul totale",
    icon: Divide,
  },
  {
    id: "totale",
    label: "Trovare il totale (% inversa)",
    shortLabel: "Inversa",
    descrizione:
      "Conosci la parte e la percentuale: trova il totale di riferimento",
    icon: Equal,
  },
  {
    id: "variazione",
    label: "Variazione % tra due numeri",
    shortLabel: "Variazione",
    descrizione: "Calcola di quanto è cambiato un valore (aumento o calo)",
    icon: TrendingUp,
  },
  {
    id: "aumento",
    label: "Aumento o diminuzione",
    shortLabel: "+ / − %",
    descrizione: "Applica un aumento o una diminuzione a un valore iniziale",
    icon: ArrowRight,
  },
  {
    id: "sconto",
    label: "Calcolo dello sconto",
    shortLabel: "Sconto",
    descrizione: "Calcola il prezzo finale e il risparmio applicando uno sconto",
    icon: Tag,
  },
  {
    id: "sconti-successivi",
    label: "Sconti successivi (composti)",
    shortLabel: "Doppio sconto",
    descrizione:
      "Sconto reale di due o tre sconti applicati in sequenza (non si sommano!)",
    icon: Layers,
  },
];

interface NumberFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  suffix?: string;
}

function NumberField({
  id,
  label,
  value,
  onChange,
  placeholder,
  suffix,
}: NumberFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? ""}
          className="w-full px-4 py-3 border border-border text-lg font-mono focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] focus:border-transparent"
          style={{ borderRadius: "0.375rem" }}
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-base text-muted-foreground font-mono">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Calcolatore() {
  const [mode, setMode] = useState<ModalitaCalcolo>("parte");

  // Shared input state — each mode reads only its relevant fields
  const [valoreA, setValoreA] = useState<string>("");
  const [valoreB, setValoreB] = useState<string>("");
  const [valoreC, setValoreC] = useState<string>("");
  const [tipoAumento, setTipoAumento] = useState<"aumento" | "diminuzione">("aumento");

  const numA = useMemo(() => parseNum(valoreA), [valoreA]);
  const numB = useMemo(() => parseNum(valoreB), [valoreB]);
  const numC = useMemo(() => parseNum(valoreC), [valoreC]);

  const risultato: RisultatoCalcolo | null = useMemo(() => {
    switch (mode) {
      case "parte":
        if (!numA || !numB) return null;
        return calcolaParte({ totale: numA, percentuale: numB });
      case "incidenza":
        if (!numA || !numB) return null;
        return calcolaIncidenza({ parte: numA, totale: numB });
      case "totale":
        if (!numA || !numB) return null;
        return calcolaTotale({ parte: numA, percentuale: numB });
      case "variazione":
        if (!numA || !numB) return null;
        return calcolaVariazione({ vecchio: numA, nuovo: numB });
      case "aumento":
        if (!numA || !numB) return null;
        return calcolaAumento({
          iniziale: numA,
          percentuale: numB,
          tipo: tipoAumento,
        });
      case "sconto":
        if (!numA || !numB) return null;
        return calcolaSconto({ prezzo: numA, sconto: numB });
      case "sconti-successivi":
        if (!numA || !numB) return null;
        return calcolaScontiSuccessivi({
          prezzo: numA,
          sconto1: numB,
          sconto2: numC,
          sconto3: undefined,
        });
    }
  }, [mode, numA, numB, numC, tipoAumento]);

  const handleReset = () => {
    setValoreA("");
    setValoreB("");
    setValoreC("");
  };

  const handleModeChange = (m: ModalitaCalcolo) => {
    setMode(m);
    handleReset();
  };

  const modeCorrente = MODALITA.find((m) => m.id === mode)!;

  // Esempi rapidi per ogni modalità
  const esempi: Record<ModalitaCalcolo, () => void> = {
    parte: () => {
      setValoreA("50");
      setValoreB("30");
    },
    incidenza: () => {
      setValoreA("75");
      setValoreB("300");
    },
    totale: () => {
      setValoreA("30");
      setValoreB("15");
    },
    variazione: () => {
      setValoreA("80");
      setValoreB("92");
    },
    aumento: () => {
      setValoreA("80");
      setValoreB("15");
      setTipoAumento("aumento");
    },
    sconto: () => {
      setValoreA("100");
      setValoreB("30");
    },
    "sconti-successivi": () => {
      setValoreA("100");
      setValoreB("30");
      setValoreC("20");
    },
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
            Calcolatore Percentuale Online
          </h3>
          <span className="ml-auto text-xs text-white/70 font-mono hidden sm:inline">
            7 modalità in 1 strumento
          </span>
        </div>

        {/* Selettore modalità */}
        <div className="border-b border-border bg-gray-50 px-3 py-3">
          <div className="flex flex-wrap gap-2">
            {MODALITA.map((m) => {
              const Icon = m.icon;
              const isActive = mode === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => handleModeChange(m.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium border transition-colors ${
                    isActive
                      ? "bg-[oklch(0.25_0.04_250)] text-white border-[oklch(0.25_0.04_250)]"
                      : "bg-white text-[oklch(0.25_0.04_250)] border-border hover:bg-gray-100"
                  }`}
                  style={{ borderRadius: "0.375rem" }}
                  aria-pressed={isActive}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{m.shortLabel}</span>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground mt-2 px-1">
            {modeCorrente.descrizione}
          </p>
        </div>

        {/* Input form */}
        <div className="p-6 space-y-4">
          {mode === "parte" && (
            <>
              <NumberField
                id="cp-parte-totale"
                label="Numero totale (N)"
                value={valoreA}
                onChange={setValoreA}
                placeholder="es. 50"
              />
              <NumberField
                id="cp-parte-perc"
                label="Percentuale (%)"
                value={valoreB}
                onChange={setValoreB}
                placeholder="es. 30"
                suffix="%"
              />
            </>
          )}

          {mode === "incidenza" && (
            <>
              <NumberField
                id="cp-inc-parte"
                label="Numero parte (V)"
                value={valoreA}
                onChange={setValoreA}
                placeholder="es. 75"
              />
              <NumberField
                id="cp-inc-totale"
                label="Numero totale (N)"
                value={valoreB}
                onChange={setValoreB}
                placeholder="es. 300"
              />
            </>
          )}

          {mode === "totale" && (
            <>
              <NumberField
                id="cp-tot-parte"
                label="Valore della parte (V)"
                value={valoreA}
                onChange={setValoreA}
                placeholder="es. 30"
              />
              <NumberField
                id="cp-tot-perc"
                label="Percentuale (%)"
                value={valoreB}
                onChange={setValoreB}
                placeholder="es. 15"
                suffix="%"
              />
            </>
          )}

          {mode === "variazione" && (
            <>
              <NumberField
                id="cp-var-vecchio"
                label="Valore iniziale (vecchio)"
                value={valoreA}
                onChange={setValoreA}
                placeholder="es. 80"
              />
              <NumberField
                id="cp-var-nuovo"
                label="Valore finale (nuovo)"
                value={valoreB}
                onChange={setValoreB}
                placeholder="es. 92"
              />
            </>
          )}

          {mode === "aumento" && (
            <>
              <div>
                <span className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2">
                  Tipo di operazione
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setTipoAumento("aumento")}
                    className={`flex-1 px-4 py-2.5 text-sm font-medium border transition-colors ${
                      tipoAumento === "aumento"
                        ? "bg-[oklch(0.40_0.12_155)] text-white border-[oklch(0.40_0.12_155)]"
                        : "bg-white text-[oklch(0.25_0.04_250)] border-border hover:bg-gray-50"
                    }`}
                    style={{ borderRadius: "0.375rem" }}
                    aria-pressed={tipoAumento === "aumento"}
                  >
                    Aumento (+%)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTipoAumento("diminuzione")}
                    className={`flex-1 px-4 py-2.5 text-sm font-medium border transition-colors ${
                      tipoAumento === "diminuzione"
                        ? "bg-[oklch(0.50_0.15_25)] text-white border-[oklch(0.50_0.15_25)]"
                        : "bg-white text-[oklch(0.25_0.04_250)] border-border hover:bg-gray-50"
                    }`}
                    style={{ borderRadius: "0.375rem" }}
                    aria-pressed={tipoAumento === "diminuzione"}
                  >
                    Diminuzione (−%)
                  </button>
                </div>
              </div>
              <NumberField
                id="cp-aum-iniz"
                label="Valore iniziale"
                value={valoreA}
                onChange={setValoreA}
                placeholder="es. 80"
              />
              <NumberField
                id="cp-aum-perc"
                label="Percentuale"
                value={valoreB}
                onChange={setValoreB}
                placeholder="es. 15"
                suffix="%"
              />
            </>
          )}

          {mode === "sconto" && (
            <>
              <NumberField
                id="cp-sc-prezzo"
                label="Prezzo originale (€)"
                value={valoreA}
                onChange={setValoreA}
                placeholder="es. 100"
                suffix="€"
              />
              <NumberField
                id="cp-sc-perc"
                label="Percentuale di sconto"
                value={valoreB}
                onChange={setValoreB}
                placeholder="es. 30"
                suffix="%"
              />
            </>
          )}

          {mode === "sconti-successivi" && (
            <>
              <NumberField
                id="cp-ss-prezzo"
                label="Prezzo originale (€)"
                value={valoreA}
                onChange={setValoreA}
                placeholder="es. 100"
                suffix="€"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <NumberField
                  id="cp-ss-s1"
                  label="Primo sconto"
                  value={valoreB}
                  onChange={setValoreB}
                  placeholder="es. 30"
                  suffix="%"
                />
                <NumberField
                  id="cp-ss-s2"
                  label="Secondo sconto (sul residuo)"
                  value={valoreC}
                  onChange={setValoreC}
                  placeholder="es. 20"
                  suffix="%"
                />
              </div>
            </>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={esempi[mode]}
              className="text-xs px-3 py-1.5 bg-[oklch(0.94_0.03_85)] text-[oklch(0.45_0.10_85)] border border-[oklch(0.85_0.05_85)] hover:bg-[oklch(0.90_0.05_85)] transition-colors"
              style={{ borderRadius: "0.25rem" }}
            >
              Carica esempio
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs px-3 py-1.5 bg-gray-50 text-gray-700 border border-border hover:bg-gray-100 transition-colors flex items-center gap-1.5"
              style={{ borderRadius: "0.25rem" }}
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
          </div>
        </div>

        {/* Risultato */}
        {risultato && (
          <div className="border-t border-border bg-gradient-to-br from-[oklch(0.97_0.02_85)] to-white px-6 py-6">
            <div className="space-y-4">
              {/* Risultato principale */}
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Risultato
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-[oklch(0.25_0.04_250)] font-mono">
                  {mode === "incidenza" || mode === "variazione" ? (
                    <>
                      {risultato.valore >= 0 && mode === "variazione" ? "+" : ""}
                      {fmtPct(risultato.valore)}
                    </>
                  ) : mode === "sconto" ? (
                    <>{fmtIt(risultato.valore)} €</>
                  ) : mode === "sconti-successivi" ? (
                    <>{fmtIt(risultato.valore)} €</>
                  ) : mode === "aumento" ? (
                    <>{fmtIt(risultato.valore)}</>
                  ) : (
                    <>{fmtIt(risultato.valore)}</>
                  )}
                </div>
              </div>

              {/* Info aggiuntiva per sconto/varianza */}
              {mode === "sconto" && risultato.extra && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white border border-border px-3 py-2" style={{ borderRadius: "0.375rem" }}>
                    <div className="text-xs text-muted-foreground">Risparmio</div>
                    <div className="text-base font-mono font-semibold text-[oklch(0.50_0.15_25)]">
                      {fmtIt(risultato.extra.risparmio)} €
                    </div>
                  </div>
                  <div className="bg-white border border-border px-3 py-2" style={{ borderRadius: "0.375rem" }}>
                    <div className="text-xs text-muted-foreground">Prezzo originale</div>
                    <div className="text-base font-mono font-semibold text-[oklch(0.25_0.04_250)]">
                      {fmtIt(numA)} €
                    </div>
                  </div>
                </div>
              )}

              {mode === "sconti-successivi" && risultato.extra && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white border border-border px-3 py-2" style={{ borderRadius: "0.375rem" }}>
                    <div className="text-xs text-muted-foreground">Sconto reale</div>
                    <div className="text-base font-mono font-semibold text-[oklch(0.50_0.15_25)]">
                      {fmtPct(risultato.extra.scontoReale)}
                    </div>
                  </div>
                  <div className="bg-white border border-border px-3 py-2" style={{ borderRadius: "0.375rem" }}>
                    <div className="text-xs text-muted-foreground">Risparmio</div>
                    <div className="text-base font-mono font-semibold text-[oklch(0.50_0.15_25)]">
                      {fmtIt(risultato.extra.risparmio)} €
                    </div>
                  </div>
                </div>
              )}

              {mode === "aumento" && risultato.extra && (
                <div className="bg-white border border-border px-3 py-2" style={{ borderRadius: "0.375rem" }}>
                  <div className="text-xs text-muted-foreground">Variazione assoluta</div>
                  <div className="text-base font-mono font-semibold text-[oklch(0.25_0.04_250)]">
                    {risultato.extra.delta >= 0 ? "+" : ""}
                    {fmtIt(risultato.extra.delta)}
                  </div>
                </div>
              )}

              {mode === "variazione" && risultato.extra && (
                <div className="bg-white border border-border px-3 py-2" style={{ borderRadius: "0.375rem" }}>
                  <div className="text-xs text-muted-foreground">Differenza assoluta</div>
                  <div className="text-base font-mono font-semibold text-[oklch(0.25_0.04_250)]">
                    {risultato.extra.delta >= 0 ? "+" : ""}
                    {fmtIt(risultato.extra.delta)}
                  </div>
                </div>
              )}

              {/* Formula */}
              <div
                className="bg-[oklch(0.25_0.04_250)] text-white px-4 py-3"
                style={{ borderRadius: "0.375rem" }}
              >
                <div className="text-xs uppercase tracking-wider text-white/70 mb-1">
                  Formula applicata
                </div>
                <div className="font-mono text-sm">{risultato.formula}</div>
              </div>

              {/* Passaggi */}
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Calcolo step-by-step
                </div>
                <ol className="space-y-1.5 text-sm text-[oklch(0.25_0.04_250)]">
                  {risultato.passaggi.map((p, i) => (
                    <li key={i} className="flex gap-2 font-mono text-xs sm:text-sm leading-relaxed">
                      <span className="text-[oklch(0.75_0.10_85)] font-bold flex-shrink-0">
                        {i + 1}.
                      </span>
                      <span className="whitespace-pre-wrap">{p}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Hint quando i campi sono vuoti */}
        {!risultato && (
          <div className="border-t border-border bg-gray-50 px-6 py-6 text-center">
            <p className="text-sm text-muted-foreground">
              Inserisci i valori sopra per vedere il risultato, oppure clicca{" "}
              <button
                type="button"
                onClick={esempi[mode]}
                className="text-[oklch(0.45_0.12_250)] underline hover:text-[oklch(0.35_0.15_250)]"
              >
                «Carica esempio»
              </button>{" "}
              per provare un caso pratico.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
