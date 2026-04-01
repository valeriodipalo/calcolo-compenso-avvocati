"use client";

import { useState, useMemo, useCallback } from "react";
import {
  calcolaTermine,
  getDecorrenzeDisponibili,
  procedimentoLabels,
  tipoLabels,
  decorrenzaLabels,
  type Procedimento,
  type TipoImpugnazione,
  type TipoDecorrenza,
  type RisultatoCalcolo,
} from "@/data/calcolo-termini-impugnazione/impugnazioneData";

function formatDateIT(d: Date): string {
  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(d);
}

function formatDateShort(d: Date): string {
  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
}

function toInputValue(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function Calcolatore() {
  const [procedimento, setProcedimento] = useState<Procedimento>("civile");
  const [tipo, setTipo] = useState<TipoImpugnazione>("appello");
  const [decorrenza, setDecorrenza] = useState<TipoDecorrenza>("notifica");
  const [dataStr, setDataStr] = useState<string>(toInputValue(new Date()));
  const [sospensione, setSospensione] = useState(true);
  const [risultato, setRisultato] = useState<RisultatoCalcolo | null>(null);

  const decorrenzeDisponibili = useMemo(
    () => getDecorrenzeDisponibili(procedimento, tipo),
    [procedimento, tipo],
  );

  const handleProcedimentoChange = useCallback((p: Procedimento) => {
    setProcedimento(p);
    setRisultato(null);
  }, []);

  const handleTipoChange = useCallback((t: TipoImpugnazione) => {
    setTipo(t);
    setRisultato(null);
    const available = getDecorrenzeDisponibili(procedimento, t);
    if (!available.includes(decorrenza)) {
      setDecorrenza(available[0]);
    }
  }, [procedimento, decorrenza]);

  const handleCalcola = useCallback(() => {
    const [y, m, d] = dataStr.split("-").map(Number);
    const data = new Date(y, m - 1, d);
    const r = calcolaTermine(procedimento, tipo, decorrenza, data, sospensione);
    setRisultato(r);
  }, [procedimento, tipo, decorrenza, dataStr, sospensione]);

  return (
    <section id="calcolatore" className="scroll-mt-24">
      <div
        className="bg-card border border-border overflow-hidden"
        style={{ borderRadius: "0.5rem" }}
      >
        {/* Header */}
        <div className="bg-[oklch(0.25_0.04_250)] text-white px-6 py-4">
          <h2 className="text-lg font-semibold">Calcolatore Termini di Impugnazione</h2>
          <p className="text-sm text-[oklch(0.85_0.02_250)] mt-1">
            Calcola la scadenza per appello, cassazione, revocazione e opposizione di terzo
          </p>
        </div>

        {/* Form */}
        <div className="p-6 space-y-5">
          {/* Procedimento */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Tipo di procedimento
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {(Object.entries(procedimentoLabels) as [Procedimento, string][]).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleProcedimentoChange(key)}
                  className={`px-3 py-2.5 text-sm font-medium border transition-colors ${
                    procedimento === key
                      ? "bg-[oklch(0.25_0.04_250)] text-white border-[oklch(0.25_0.04_250)]"
                      : "bg-card text-foreground border-border hover:bg-muted"
                  }`}
                  style={{ borderRadius: "0.375rem" }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Tipo impugnazione */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Tipo di impugnazione
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(Object.entries(tipoLabels) as [TipoImpugnazione, string][]).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleTipoChange(key)}
                  className={`px-3 py-2.5 text-sm font-medium border transition-colors ${
                    tipo === key
                      ? "bg-[oklch(0.25_0.04_250)] text-white border-[oklch(0.25_0.04_250)]"
                      : "bg-card text-foreground border-border hover:bg-muted"
                  }`}
                  style={{ borderRadius: "0.375rem" }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Decorrenza */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Il termine decorre dalla
            </label>
            <select
              value={decorrenza}
              onChange={(e) => { setDecorrenza(e.target.value as TipoDecorrenza); setRisultato(null); }}
              className="w-full border border-border bg-card px-3 py-2.5 text-sm"
              style={{ borderRadius: "0.375rem" }}
            >
              {decorrenzeDisponibili.map((d) => (
                <option key={d} value={d}>{decorrenzaLabels[d]}</option>
              ))}
            </select>
          </div>

          {/* Data */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Data di decorrenza
            </label>
            <input
              type="date"
              value={dataStr}
              onChange={(e) => { setDataStr(e.target.value); setRisultato(null); }}
              className="w-full border border-border bg-card px-3 py-2.5 text-sm"
              style={{ borderRadius: "0.375rem" }}
            />
          </div>

          {/* Sospensione */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={sospensione}
              onChange={(e) => { setSospensione(e.target.checked); setRisultato(null); }}
              className="h-4 w-4 accent-[oklch(0.25_0.04_250)]"
              style={{ borderRadius: "0.25rem" }}
            />
            <span className="text-sm text-foreground">
              Applica sospensione feriale (1°–31 agosto)
            </span>
          </label>

          {/* Button */}
          <button
            type="button"
            onClick={handleCalcola}
            className="w-full bg-[oklch(0.25_0.04_250)] hover:bg-[oklch(0.30_0.04_250)] text-white font-semibold py-3 px-4 text-sm transition-colors"
            style={{ borderRadius: "0.375rem" }}
          >
            Calcola Termine
          </button>
        </div>

        {/* Risultato */}
        {risultato && (
          <div className="border-t border-border p-6 bg-[oklch(0.98_0.005_250)]">
            <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
              Risultato
            </h3>

            <div className="space-y-4">
              {/* Data scadenza */}
              <div className="text-center py-4">
                <p className="text-sm text-muted-foreground mb-1">{risultato.label}</p>
                <p className="text-2xl font-bold text-[oklch(0.25_0.04_250)]">
                  {formatDateIT(risultato.dataScadenza)}
                </p>
                {risultato.giorniRimanenti > 0 ? (
                  <p className="text-sm text-muted-foreground mt-1">
                    Mancano <strong>{risultato.giorniRimanenti}</strong> giorni alla scadenza
                  </p>
                ) : risultato.giorniRimanenti === 0 ? (
                  <p className="text-sm text-[oklch(0.45_0.20_25)] font-semibold mt-1">
                    Il termine scade oggi
                  </p>
                ) : (
                  <p className="text-sm text-[oklch(0.45_0.20_25)] font-semibold mt-1">
                    Termine scaduto da {Math.abs(risultato.giorniRimanenti)} giorni
                  </p>
                )}
              </div>

              {/* Dettagli */}
              <div className="space-y-2 text-sm">
                {risultato.prorogaFestivo && (
                  <div
                    className="bg-[oklch(0.97_0.01_25)] border border-[oklch(0.85_0.10_25)] p-3 text-[oklch(0.35_0.12_25)]"
                    style={{ borderRadius: "0.375rem" }}
                  >
                    La scadenza originale ({formatDateShort(risultato.dataOriginale)}) cadeva di sabato, domenica o festivo. Il termine è prorogato al primo giorno non festivo successivo.
                  </div>
                )}

                {risultato.sospensioneApplicata && risultato.periodoSospensione && (
                  <div
                    className="bg-[oklch(0.97_0.005_250)] border border-border p-3 text-foreground"
                    style={{ borderRadius: "0.375rem" }}
                  >
                    Sospensione feriale applicata: dal {formatDateShort(risultato.periodoSospensione.dal)} al {formatDateShort(risultato.periodoSospensione.al)}.
                  </div>
                )}

                <div
                  className="bg-[oklch(0.97_0.005_155)] border border-[oklch(0.85_0.05_155)] p-3 text-foreground"
                  style={{ borderRadius: "0.375rem" }}
                >
                  Riferimento normativo:{" "}
                  <a
                    href={risultato.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
                  >
                    {risultato.articolo}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
