"use client";

import { useState } from "react";
import {
  calcolaContributo,
  type TipoProcesso,
  type GradoGiudizio,
  type TipoValore,
  type RisultatoCalcolo,
} from "@/data/contributo-unificato/contributoData";
import { Calculator, Info } from "lucide-react";

export default function Calcolatore() {
  const [tipoProcesso, setTipoProcesso] = useState<TipoProcesso>("civile");
  const [gradoGiudizio, setGradoGiudizio] = useState<GradoGiudizio>("primo");
  const [tipoValore, setTipoValore] = useState<TipoValore>("determinato");
  const [valore, setValore] = useState<string>("");
  const [riduzione50, setRiduzione50] = useState(false);
  const [risultato, setRisultato] = useState<RisultatoCalcolo | null>(null);

  const handleCalcola = () => {
    const val = parseFloat(valore.replace(/\./g, "").replace(",", ".")) || 0;
    const result = calcolaContributo(tipoProcesso, gradoGiudizio, tipoValore, val, riduzione50);
    setRisultato(result);
  };

  const handleReset = () => {
    setTipoProcesso("civile");
    setGradoGiudizio("primo");
    setTipoValore("determinato");
    setValore("");
    setRiduzione50(false);
    setRisultato(null);
  };

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(n);

  return (
    <div id="calcolatore" className="scroll-mt-24">
      <div className="bg-white border border-border shadow-lg overflow-hidden" style={{ borderRadius: "0.5rem" }}>
        {/* Header */}
        <div className="bg-[oklch(0.25_0.04_250)] px-6 py-5 flex items-center gap-3">
          <Calculator className="w-6 h-6 text-[oklch(0.75_0.10_85)]" />
          <h2 className="text-xl text-[oklch(0.90_0.01_85)] tracking-wide">Calcolo Contributo Unificato</h2>
        </div>

        <div className="p-6 space-y-6">
          {/* Tipo Processo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                Tipo di Processo
              </label>
              <select
                value={tipoProcesso}
                onChange={(e) => setTipoProcesso(e.target.value as TipoProcesso)}
                className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                style={{ borderRadius: "0.375rem" }}
              >
                <option value="civile">Civile</option>
                <option value="tributario">Tributario</option>
                <option value="amministrativo">Amministrativo (generico)</option>
                <option value="amministrativo_appalti">Amministrativo (appalti / autorità indipendenti)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                Grado di Giudizio
              </label>
              <select
                value={gradoGiudizio}
                onChange={(e) => setGradoGiudizio(e.target.value as GradoGiudizio)}
                className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                style={{ borderRadius: "0.375rem" }}
              >
                <option value="primo">Primo Grado</option>
                <option value="impugnazione">Impugnazione (Appello)</option>
                <option value="cassazione">Cassazione</option>
              </select>
            </div>
          </div>

          {/* Valore */}
          <div>
            <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-3">
              Valore della Causa
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="tipoValore"
                  checked={tipoValore === "determinato"}
                  onChange={() => setTipoValore("determinato")}
                  className="w-4 h-4 accent-[oklch(0.25_0.04_250)]"
                />
                <span className="text-sm">Valore determinato</span>
              </label>
              {tipoValore === "determinato" && (
                <div className="ml-7">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-mono">&euro;</span>
                    <input
                      type="text"
                      value={valore}
                      onChange={(e) => setValore(e.target.value)}
                      placeholder="0,00"
                      className="w-full md:w-72 border border-border bg-white pl-8 pr-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                      style={{ borderRadius: "0.375rem" }}
                    />
                  </div>
                </div>
              )}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="tipoValore"
                  checked={tipoValore === "non_indicato"}
                  onChange={() => setTipoValore("non_indicato")}
                  className="w-4 h-4 accent-[oklch(0.25_0.04_250)]"
                />
                <span className="text-sm">Valore non indicato</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="tipoValore"
                  checked={tipoValore === "indeterminabile"}
                  onChange={() => setTipoValore("indeterminabile")}
                  className="w-4 h-4 accent-[oklch(0.25_0.04_250)]"
                />
                <span className="text-sm">Valore indeterminabile</span>
              </label>
            </div>
          </div>

          {/* Riduzione 50% */}
          {tipoProcesso === "civile" && tipoValore === "determinato" && (
            <div className="bg-[oklch(0.97_0.005_85)] border border-[oklch(0.90_0.01_85)] p-4" style={{ borderRadius: "0.375rem" }}>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={riduzione50}
                  onChange={(e) => setRiduzione50(e.target.checked)}
                  className="w-4 h-4 mt-0.5 accent-[oklch(0.25_0.04_250)]"
                />
                <div>
                  <span className="text-sm font-semibold">Riduzione del 50%</span>
                  <p className="text-xs text-muted-foreground mt-1">
                    Procedimenti per ingiunzione, convalida sfratto, cautelari, possessori, ATP, opposizione a decreto ingiuntivo, sfratto per morosità, finita locazione, controversie di lavoro.
                  </p>
                </div>
              </label>
            </div>
          )}

          {/* Bottoni */}
          <div className="flex gap-3">
            <button
              onClick={handleCalcola}
              className="bg-[oklch(0.25_0.04_250)] text-[oklch(0.90_0.01_85)] px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-[oklch(0.30_0.04_250)] transition-colors"
              style={{ borderRadius: "0.375rem" }}
            >
              Calcola
            </button>
            <button
              onClick={handleReset}
              className="border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-[oklch(0.95_0.005_85)] transition-colors"
              style={{ borderRadius: "0.375rem" }}
            >
              Azzera
            </button>
          </div>

          {/* Risultato */}
          {risultato && (
            <div className="border-t-2 border-[oklch(0.75_0.10_85)] pt-6 mt-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-8 bg-[oklch(0.75_0.10_85)]" style={{ borderRadius: "1px" }} />
                <h3 className="text-lg text-[oklch(0.25_0.04_250)]">Risultato del Calcolo</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-[oklch(0.25_0.04_250)] p-5 text-center" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-xs text-[oklch(0.65_0.05_85)] uppercase tracking-wider mb-1">Contributo Unificato Dovuto</p>
                  <p className="text-3xl font-mono font-bold text-[oklch(0.75_0.10_85)]">
                    {formatCurrency(risultato.importoFinale)}
                  </p>
                </div>
                <div className="bg-[oklch(0.97_0.005_85)] p-5" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Scaglione Applicato</p>
                  <p className="text-sm font-semibold">{risultato.scaglione}</p>
                  <p className="text-xs text-muted-foreground mt-2">{risultato.riferimentoNormativo}</p>
                </div>
              </div>

              {risultato.note.length > 0 && (
                <div className="bg-[oklch(0.97_0.005_155)] border-l-3 border-[oklch(0.55_0.15_155)] p-4" style={{ borderRadius: "0 0.375rem 0.375rem 0" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-[oklch(0.55_0.15_155)]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[oklch(0.40_0.10_155)]">Note</span>
                  </div>
                  {risultato.note.map((nota, i) => (
                    <p key={i} className="text-sm text-[oklch(0.30_0.05_155)] leading-relaxed">{nota}</p>
                  ))}
                </div>
              )}

              <p className="text-xs text-muted-foreground mt-4 italic">
                Oltre al contributo unificato, potrebbe essere dovuta l'anticipazione forfettaria di &euro; 27,00 (art. 30 DPR 115/2002), salvo esenzioni.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
