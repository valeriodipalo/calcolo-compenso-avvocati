"use client";

import { useState, useCallback, useEffect } from "react";
import {
  calcolaScadenzaOpposizione,
  tipoProcedimentoLabels,
  tipoProcedimentoDescriptions,
  type TipoProcedimento,
  type RisultatoCalcolo,
} from "@/data/opposizione-decreto-ingiuntivo/opposizioneData";

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
  const [tipoProcedimento, setTipoProcedimento] = useState<TipoProcedimento>("ordinario");
  const [dataStr, setDataStr] = useState<string>(toInputValue(new Date()));
  const [giorniCustom, setGiorniCustom] = useState<number>(30);
  const [sospensione, setSospensione] = useState(true);
  const [risultato, setRisultato] = useState<RisultatoCalcolo | null>(null);

  // Forza la disattivazione della sospensione per il rito lavoro
  useEffect(() => {
    if (tipoProcedimento === "lavoro") {
      setSospensione(false);
    } else {
      setSospensione(true);
    }
    setRisultato(null);
  }, [tipoProcedimento]);

  const handleCalcola = useCallback(() => {
    const [y, m, d] = dataStr.split("-").map(Number);
    const dataNotifica = new Date(y, m - 1, d);
    const r = calcolaScadenzaOpposizione({
      tipoProcedimento,
      dataNotifica,
      giorniCustom: (tipoProcedimento === "abbreviato" || tipoProcedimento === "aumentato") ? giorniCustom : undefined,
      applicaSospensione: sospensione,
    });
    setRisultato(r);
  }, [tipoProcedimento, dataStr, giorniCustom, sospensione]);

  const mostraCustom = tipoProcedimento === "abbreviato" || tipoProcedimento === "aumentato";
  const minCustom = tipoProcedimento === "abbreviato" ? 10 : 41;
  const maxCustom = tipoProcedimento === "abbreviato" ? 39 : 60;

  return (
    <section id="calcolatore" className="scroll-mt-24">
      <div
        className="bg-card border border-border overflow-hidden"
        style={{ borderRadius: "0.5rem" }}
      >
        {/* Header */}
        <div className="bg-[oklch(0.25_0.04_250)] text-white px-6 py-4">
          <h2 className="text-lg font-semibold">Calcolatore Scadenza Opposizione a Decreto Ingiuntivo</h2>
          <p className="text-sm text-[oklch(0.85_0.02_250)] mt-1">
            Calcola la data ultima per notificare l&apos;opposizione applicando sospensione feriale, festivi e termini speciali
          </p>
        </div>

        {/* Form */}
        <div className="p-6 space-y-5">
          {/* Tipo procedimento */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Tipo di procedimento
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(Object.entries(tipoProcedimentoLabels) as [TipoProcedimento, string][]).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTipoProcedimento(key)}
                  className={`px-3 py-2.5 text-sm font-medium border transition-colors text-left ${
                    tipoProcedimento === key
                      ? "bg-[oklch(0.25_0.04_250)] text-white border-[oklch(0.25_0.04_250)]"
                      : "bg-card text-foreground border-border hover:bg-muted"
                  }`}
                  style={{ borderRadius: "0.375rem" }}
                >
                  <div>{label}</div>
                  <div className={`text-xs mt-0.5 ${tipoProcedimento === key ? "text-[oklch(0.85_0.02_250)]" : "text-muted-foreground"}`}>
                    {tipoProcedimentoDescriptions[key]}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Termine custom per abbreviato/aumentato */}
          {mostraCustom && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Giorni indicati nel decreto (min {minCustom} - max {maxCustom})
              </label>
              <input
                type="number"
                min={minCustom}
                max={maxCustom}
                value={giorniCustom}
                onChange={(e) => { setGiorniCustom(Number(e.target.value)); setRisultato(null); }}
                className="w-full border border-border bg-card px-3 py-2.5 text-sm"
                style={{ borderRadius: "0.375rem" }}
              />
            </div>
          )}

          {/* Data notifica */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Data di notifica del decreto ingiuntivo
            </label>
            <input
              type="date"
              value={dataStr}
              onChange={(e) => { setDataStr(e.target.value); setRisultato(null); }}
              className="w-full border border-border bg-card px-3 py-2.5 text-sm"
              style={{ borderRadius: "0.375rem" }}
            />
            <p className="text-xs text-muted-foreground mt-1">
              Inserisci la data in cui il decreto e stato notificato (non la data di emissione).
            </p>
          </div>

          {/* Sospensione feriale */}
          <label className={`flex items-start gap-3 ${tipoProcedimento === "lavoro" ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
            <input
              type="checkbox"
              checked={sospensione}
              onChange={(e) => { setSospensione(e.target.checked); setRisultato(null); }}
              disabled={tipoProcedimento === "lavoro"}
              className="h-4 w-4 mt-0.5 accent-[oklch(0.25_0.04_250)]"
              style={{ borderRadius: "0.25rem" }}
            />
            <div>
              <div className="text-sm text-foreground">
                Applica sospensione feriale (1°-31 agosto)
              </div>
              {tipoProcedimento === "lavoro" && (
                <div className="text-xs text-muted-foreground mt-0.5">
                  Non applicabile alle cause di lavoro (L. 742/1969).
                </div>
              )}
            </div>
          </label>

          {/* Button */}
          <button
            type="button"
            onClick={handleCalcola}
            className="w-full bg-[oklch(0.25_0.04_250)] hover:bg-[oklch(0.30_0.04_250)] text-white font-semibold py-3 px-4 text-sm transition-colors"
            style={{ borderRadius: "0.375rem" }}
          >
            Calcola Scadenza Opposizione
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
                    Mancano <strong>{risultato.giorniRimanenti}</strong> {risultato.giorniRimanenti === 1 ? "giorno" : "giorni"} alla scadenza
                  </p>
                ) : risultato.giorniRimanenti === 0 ? (
                  <p className="text-sm text-[oklch(0.45_0.20_25)] font-semibold mt-1">
                    Il termine scade oggi
                  </p>
                ) : (
                  <p className="text-sm text-[oklch(0.45_0.20_25)] font-semibold mt-1">
                    Termine scaduto da {Math.abs(risultato.giorniRimanenti)} {Math.abs(risultato.giorniRimanenti) === 1 ? "giorno" : "giorni"}
                  </p>
                )}
              </div>

              {/* Forma dell'atto */}
              <div
                className={`p-3 text-sm ${
                  risultato.formaAtto === "ricorso"
                    ? "bg-[oklch(0.97_0.01_25)] border border-[oklch(0.85_0.10_25)] text-[oklch(0.35_0.12_25)]"
                    : "bg-[oklch(0.97_0.005_155)] border border-[oklch(0.85_0.05_155)] text-foreground"
                }`}
                style={{ borderRadius: "0.375rem" }}
              >
                <strong>Forma dell&apos;atto: </strong>
                {risultato.formaAtto === "ricorso"
                  ? "Ricorso da depositare in cancelleria entro la scadenza."
                  : "Atto di citazione da notificare al creditore opposto entro la scadenza."}
              </div>

              {/* Iscrizione a ruolo */}
              <div
                className="bg-[oklch(0.97_0.005_250)] border border-border p-3 text-sm text-foreground"
                style={{ borderRadius: "0.375rem" }}
              >
                <strong>Iscrizione a ruolo: </strong>
                entro 10 giorni dalla notifica dell&apos;atto di opposizione (art. 165 c.p.c.). Se notifichi all&apos;ultimo giorno utile, l&apos;iscrizione a ruolo va fatta entro il <strong>{formatDateShort(risultato.dataIscrizioneRuolo)}</strong>.
              </div>

              {/* Note contestuali */}
              {risultato.note.map((nota, i) => (
                <div
                  key={i}
                  className="bg-[oklch(0.97_0.01_85)] border border-[oklch(0.85_0.08_85)] p-3 text-sm text-[oklch(0.35_0.10_85)]"
                  style={{ borderRadius: "0.375rem" }}
                >
                  {nota}
                </div>
              ))}

              {/* Riferimento normativo */}
              <div
                className="bg-card border border-border p-3 text-sm text-foreground"
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
        )}
      </div>
    </section>
  );
}
