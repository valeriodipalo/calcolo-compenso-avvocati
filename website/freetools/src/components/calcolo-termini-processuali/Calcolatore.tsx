"use client";

import { useState, useMemo, useCallback } from "react";
import {
  calcolaTermine,
  calcolaTerminiMultipli,
  terminiPreimpostati,
  type ModalitaCalcolo,
  type DirezioneCalcolo,
  type TipoSospensione,
  type RisultatoCalcolo,
  type TerminePreimpostato,
} from "@/data/calcolo-termini-processuali/terminiData";

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

/** Raggruppa i termini preimpostati per il campo "gruppo" */
function getGruppi(termini: TerminePreimpostato[]): Map<string, TerminePreimpostato[]> {
  const mappa = new Map<string, TerminePreimpostato[]>();
  for (const t of termini) {
    const arr = mappa.get(t.gruppo) ?? [];
    arr.push(t);
    mappa.set(t.gruppo, arr);
  }
  return mappa;
}

export default function Calcolatore() {
  const [modalita, setModalita] = useState<ModalitaCalcolo>("giorni");
  const [direzione, setDirezione] = useState<DirezioneCalcolo>("avanti");
  const [preimpostatoId, setPreimpostatoId] = useState<string>("manuale");
  const [numGiorni, setNumGiorni] = useState<number>(30);
  const [numMesi, setNumMesi] = useState<number>(6);
  const [dataStr, setDataStr] = useState<string>(toInputValue(new Date()));
  const [libero, setLibero] = useState<boolean>(false);
  const [sospensione, setSospensione] = useState<TipoSospensione>("post2015");
  const [risultato, setRisultato] = useState<RisultatoCalcolo | null>(null);
  const [risultatiMultipli, setRisultatiMultipli] = useState<RisultatoCalcolo[] | null>(null);

  const gruppi = useMemo(() => getGruppi(terminiPreimpostati), []);

  const handlePreimpostato = useCallback((id: string) => {
    setPreimpostatoId(id);
    setRisultato(null);
    setRisultatiMultipli(null);

    if (id === "manuale") return;

    const t = terminiPreimpostati.find((p) => p.id === id);
    if (!t) return;

    if (t.giorniMultipli && t.giorniMultipli.length > 0) {
      setModalita("giorni");
      setDirezione(t.direzione);
      setLibero(t.libero);
    } else if (t.mesi !== null) {
      setModalita("mesi");
      setNumMesi(t.mesi);
    } else if (t.giorni !== null) {
      setModalita("giorni");
      setNumGiorni(t.giorni);
      setDirezione(t.direzione);
      setLibero(t.libero);
    }
  }, []);

  const handleModalitaChange = useCallback((m: ModalitaCalcolo) => {
    setModalita(m);
    setPreimpostatoId("manuale");
    setRisultato(null);
    setRisultatiMultipli(null);
  }, []);

  const handleDirezioneChange = useCallback((d: DirezioneCalcolo) => {
    setDirezione(d);
    setPreimpostatoId("manuale");
    setRisultato(null);
    setRisultatiMultipli(null);
  }, []);

  const handleCalcola = useCallback(() => {
    const [y, m, d] = dataStr.split("-").map(Number);
    const data = new Date(y, m - 1, d);

    setRisultato(null);
    setRisultatiMultipli(null);

    // Termine multiplo (171-ter, 189, ecc.)
    if (preimpostatoId !== "manuale") {
      const t = terminiPreimpostati.find((p) => p.id === preimpostatoId);
      if (t?.giorniMultipli && t.giorniMultipli.length > 0) {
        const risultati = calcolaTerminiMultipli(
          data,
          t.giorniMultipli,
          sospensione,
          t.articolo,
          t.url,
        );
        setRisultatiMultipli(risultati);
        return;
      }
    }

    // Termine singolo
    const giorni = modalita === "giorni" ? numGiorni : null;
    const mesi = modalita === "mesi" ? numMesi : null;
    const dir: DirezioneCalcolo = modalita === "mesi" ? "avanti" : direzione;
    const r = calcolaTermine(data, giorni, mesi, dir, sospensione, libero);

    if (r && preimpostatoId !== "manuale") {
      const t = terminiPreimpostati.find((p) => p.id === preimpostatoId);
      if (t) {
        r.articolo = t.articolo;
        r.url = t.url;
      }
    }

    setRisultato(r);
  }, [dataStr, preimpostatoId, modalita, numGiorni, numMesi, direzione, sospensione, libero]);

  /** Label per la select dei preimpostati, include giorni multipli */
  const getOptionLabel = (t: TerminePreimpostato): string => {
    if (t.giorniMultipli && t.giorniMultipli.length > 0) {
      return `${t.label}`;
    }
    return t.label;
  };

  /** Controlla se il preimpostato selezionato è multiplo */
  const isMultiplo = useMemo(() => {
    if (preimpostatoId === "manuale") return false;
    const t = terminiPreimpostati.find((p) => p.id === preimpostatoId);
    return t?.giorniMultipli && t.giorniMultipli.length > 0;
  }, [preimpostatoId]);

  return (
    <section id="calcolatore" className="scroll-mt-24">
      <div
        className="bg-card border border-border overflow-hidden"
        style={{ borderRadius: "0.5rem" }}
      >
        {/* Header */}
        <div className="bg-[oklch(0.25_0.04_250)] text-white px-6 py-4">
          <h2 className="text-lg font-semibold">Calcolatore Termini Processuali</h2>
          <p className="text-sm text-[oklch(0.85_0.02_250)] mt-1">
            Calcola la scadenza dei termini processuali civili, penali e tributari
          </p>
        </div>

        {/* Form */}
        <div className="p-6 space-y-5">
          {/* Tipo di calcolo */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Tipo di calcolo
            </label>
            <div className="grid grid-cols-2 gap-2">
              {([
                ["giorni", "A Giorni"],
                ["mesi", "A Mesi"],
              ] as [ModalitaCalcolo, string][]).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleModalitaChange(key)}
                  className={`px-3 py-2.5 text-sm font-medium border transition-colors ${
                    modalita === key
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

          {/* Direzione — solo per "A Giorni" */}
          {modalita === "giorni" && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Direzione
              </label>
              <div className="grid grid-cols-2 gap-2">
                {([
                  ["avanti", "In Avanti"],
                  ["ritroso", "A Ritroso"],
                ] as [DirezioneCalcolo, string][]).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleDirezioneChange(key)}
                    className={`px-3 py-2.5 text-sm font-medium border transition-colors ${
                      direzione === key
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
          )}

          {/* Termine preimpostato */}
          <div>
            <label htmlFor="termine-preimpostato" className="block text-sm font-medium text-foreground mb-2">
              Termine preimpostato
            </label>
            <select
              id="termine-preimpostato"
              value={preimpostatoId}
              onChange={(e) => handlePreimpostato(e.target.value)}
              className="w-full border border-border bg-card px-3 py-2.5 text-sm"
              style={{ borderRadius: "0.375rem" }}
            >
              <option value="manuale">Manuale</option>
              {Array.from(gruppi.entries()).map(([gruppo, termini]) => (
                <optgroup key={gruppo} label={gruppo}>
                  {termini.map((t) => (
                    <option key={t.id} value={t.id}>
                      {getOptionLabel(t)}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {/* Numero giorni / mesi — nascosto per termini multipli */}
          {!isMultiplo && (
            <div>
              <label htmlFor="num-termine" className="block text-sm font-medium text-foreground mb-2">
                {modalita === "giorni" ? "Numero di giorni" : "Numero di mesi"}
              </label>
              <input
                id="num-termine"
                type="number"
                min={1}
                value={modalita === "giorni" ? numGiorni : numMesi}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10) || 1;
                  if (modalita === "giorni") setNumGiorni(val);
                  else setNumMesi(val);
                  setPreimpostatoId("manuale");
                  setRisultato(null);
                  setRisultatiMultipli(null);
                }}
                className="w-full border border-border bg-card px-3 py-2.5 text-sm"
                style={{ borderRadius: "0.375rem" }}
              />
            </div>
          )}

          {/* Data */}
          <div>
            <label htmlFor="data-input" className="block text-sm font-medium text-foreground mb-2">
              {modalita === "giorni" && direzione === "ritroso"
                ? "Data dell'udienza"
                : "Data di decorrenza"}
            </label>
            <input
              id="data-input"
              type="date"
              value={dataStr}
              onChange={(e) => {
                setDataStr(e.target.value);
                setRisultato(null);
                setRisultatiMultipli(null);
              }}
              className="w-full border border-border bg-card px-3 py-2.5 text-sm"
              style={{ borderRadius: "0.375rem" }}
            />
          </div>

          {/* Termini liberi — solo per "A Giorni" */}
          {modalita === "giorni" && !isMultiplo && (
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={libero}
                onChange={(e) => {
                  setLibero(e.target.checked);
                  setPreimpostatoId("manuale");
                  setRisultato(null);
                  setRisultatiMultipli(null);
                }}
                className="h-4 w-4 accent-[oklch(0.25_0.04_250)]"
                style={{ borderRadius: "0.25rem" }}
              />
              <span className="text-sm text-foreground">
                Termini liberi (dies a quo e dies ad quem non si computano)
              </span>
            </label>
          )}

          {/* Sospensione feriale */}
          <div>
            <label htmlFor="sospensione-feriale" className="block text-sm font-medium text-foreground mb-2">
              Sospensione feriale
            </label>
            <select
              id="sospensione-feriale"
              value={sospensione}
              onChange={(e) => {
                setSospensione(e.target.value as TipoSospensione);
                setRisultato(null);
                setRisultatiMultipli(null);
              }}
              className="w-full border border-border bg-card px-3 py-2.5 text-sm"
              style={{ borderRadius: "0.375rem" }}
            >
              <option value="post2015">1–31 agosto (dal 2015)</option>
              <option value="pre2015">1 ago–15 set (ante 2015)</option>
              <option value="nessuna">Nessuna sospensione</option>
            </select>
          </div>

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

        {/* Risultato singolo */}
        {risultato && !risultatiMultipli && (
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
                    La scadenza originale ({formatDateShort(risultato.dataOriginale)}) cadeva di sabato, domenica o festivo. Il termine è prorogato al primo giorno non festivo {direzione === "ritroso" ? "precedente" : "successivo"}.
                  </div>
                )}

                {risultato.sospensioneApplicata && risultato.periodoSospensione && (
                  <div
                    className="bg-[oklch(0.97_0.005_250)] border border-border p-3 text-foreground"
                    style={{ borderRadius: "0.375rem" }}
                  >
                    Sospensione feriale applicata: dal {formatDateShort(risultato.periodoSospensione.dal)} al {formatDateShort(risultato.periodoSospensione.al)} ({risultato.giorniSospesi} giorni sospesi).
                  </div>
                )}

                {risultato.articolo && risultato.url && (
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
                )}
              </div>
            </div>
          </div>
        )}

        {/* Risultati multipli */}
        {risultatiMultipli && risultatiMultipli.length > 0 && (
          <div className="border-t border-border p-6 bg-[oklch(0.98_0.005_250)]">
            <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
              Risultati — {risultatiMultipli[0].articolo}
            </h3>

            <div className="space-y-4">
              {risultatiMultipli.map((r, idx) => (
                <div
                  key={idx}
                  className="border border-border bg-card p-4"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">
                    {r.label}
                  </p>
                  <p className="text-xl font-bold text-[oklch(0.25_0.04_250)]">
                    {formatDateIT(r.dataScadenza)}
                  </p>
                  {r.giorniRimanenti > 0 ? (
                    <p className="text-sm text-muted-foreground mt-1">
                      Mancano <strong>{r.giorniRimanenti}</strong> giorni
                    </p>
                  ) : r.giorniRimanenti === 0 ? (
                    <p className="text-sm text-[oklch(0.45_0.20_25)] font-semibold mt-1">
                      Scade oggi
                    </p>
                  ) : (
                    <p className="text-sm text-[oklch(0.45_0.20_25)] font-semibold mt-1">
                      Scaduto da {Math.abs(r.giorniRimanenti)} giorni
                    </p>
                  )}

                  {r.prorogaFestivo && (
                    <p className="text-xs text-[oklch(0.35_0.12_25)] mt-2">
                      Prorogato da {formatDateShort(r.dataOriginale)} (festivo)
                    </p>
                  )}
                </div>
              ))}

              {/* Info comuni ai risultati multipli */}
              <div className="space-y-2 text-sm">
                {risultatiMultipli.some((r) => r.sospensioneApplicata) && risultatiMultipli[0].periodoSospensione && (
                  <div
                    className="bg-[oklch(0.97_0.005_250)] border border-border p-3 text-foreground"
                    style={{ borderRadius: "0.375rem" }}
                  >
                    Sospensione feriale applicata: dal {formatDateShort(risultatiMultipli[0].periodoSospensione.dal)} al {formatDateShort(risultatiMultipli[0].periodoSospensione.al)}.
                  </div>
                )}

                {risultatiMultipli[0].url && (
                  <div
                    className="bg-[oklch(0.97_0.005_155)] border border-[oklch(0.85_0.05_155)] p-3 text-foreground"
                    style={{ borderRadius: "0.375rem" }}
                  >
                    Riferimento normativo:{" "}
                    <a
                      href={risultatiMultipli[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
                    >
                      {risultatiMultipli[0].articolo}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
