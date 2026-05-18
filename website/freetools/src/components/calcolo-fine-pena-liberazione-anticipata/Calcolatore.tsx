"use client";

import { useState, useMemo, useCallback } from "react";
import {
  calcolaFinePena,
  GIORNI_LA_ORDINARIA,
  GIORNI_LA_SPECIALE,
  type InputCalcoloFinePena,
  type PeriodoData,
  type RisultatoCalcolo,
} from "@/data/calcolo-fine-pena-liberazione-anticipata/finePenaData";
import { Calculator, RotateCcw, Plus, X, ChevronDown, ChevronUp, Info } from "lucide-react";

const formatDateIt = (iso: string): string => {
  if (!iso) return "—";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

const giornoSettimana = (iso: string): string => {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map((n) => parseInt(n, 10));
  const date = new Date(y, m - 1, d);
  const giorni = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  return giorni[date.getDay()];
};

export default function Calcolatore() {
  // Durata pena
  const [anni, setAnni] = useState("3");
  const [mesi, setMesi] = useState("0");
  const [giorni, setGiorni] = useState("0");

  // Dati base
  const [inizioDetenzione, setInizioDetenzione] = useState("");
  const [calcolaFinoAl, setCalcolaFinoAl] = useState("");

  // Toggles
  const [calcolaLA, setCalcolaLA] = useState(true);
  const [soloSemestriCompleti, setSoloSemestriCompleti] = useState(true);
  const [applicaLaSpeciale, setApplicaLaSpeciale] = useState(false);

  // Periodi opzionali
  const [periodiScontati, setPeriodiScontati] = useState<PeriodoData[]>([]);
  const [interruzioni, setInterruzioni] = useState<PeriodoData[]>([]);

  // Risultato
  const [risultato, setRisultato] = useState<RisultatoCalcolo | null>(null);
  const [errore, setErrore] = useState<string | null>(null);
  const [mostraDettaglio, setMostraDettaglio] = useState(false);

  const aggiungiPeriodo = useCallback(
    (tipo: "scontato" | "interruzione") => {
      const setter = tipo === "scontato" ? setPeriodiScontati : setInterruzioni;
      setter((prev) => [...prev, { dal: "", al: "" }]);
    },
    [],
  );

  const aggiornaPeriodo = useCallback(
    (
      tipo: "scontato" | "interruzione",
      idx: number,
      campo: "dal" | "al",
      val: string,
    ) => {
      const setter = tipo === "scontato" ? setPeriodiScontati : setInterruzioni;
      setter((prev) => prev.map((p, i) => (i === idx ? { ...p, [campo]: val } : p)));
    },
    [],
  );

  const rimuoviPeriodo = useCallback(
    (tipo: "scontato" | "interruzione", idx: number) => {
      const setter = tipo === "scontato" ? setPeriodiScontati : setInterruzioni;
      setter((prev) => prev.filter((_, i) => i !== idx));
    },
    [],
  );

  const totaleGiorniInput = useMemo(() => {
    if (!inizioDetenzione) return 0;
    const a = parseInt(anni, 10) || 0;
    const m = parseInt(mesi, 10) || 0;
    const g = parseInt(giorni, 10) || 0;
    const [y, mo, d] = inizioDetenzione.split("-").map((n) => parseInt(n, 10));
    const start = new Date(y, mo - 1, d);
    const end = new Date(start.getTime());
    end.setFullYear(end.getFullYear() + a);
    end.setMonth(end.getMonth() + m);
    end.setDate(end.getDate() + g);
    return Math.round((end.getTime() - start.getTime()) / 86_400_000);
  }, [anni, mesi, giorni, inizioDetenzione]);

  const handleCalcola = () => {
    setErrore(null);
    if (!inizioDetenzione) {
      setErrore("Inserisci la data di inizio della detenzione.");
      return;
    }
    if (totaleGiorniInput <= 0) {
      setErrore("Inserisci una durata della pena valida (almeno un giorno).");
      return;
    }

    const periodiValidi = periodiScontati.filter((p) => p.dal && p.al && p.dal <= p.al);
    const interruzioniValide = interruzioni.filter((p) => p.dal && p.al && p.dal <= p.al);

    const input: InputCalcoloFinePena = {
      durata: {
        anni: parseInt(anni, 10) || 0,
        mesi: parseInt(mesi, 10) || 0,
        giorni: parseInt(giorni, 10) || 0,
      },
      inizioDetenzione,
      calcolaLA,
      soloSemestriCompleti,
      applicaLaSpeciale,
      calcolaFinoAl: calcolaFinoAl || undefined,
      periodiScontati: periodiValidi,
      interruzioni: interruzioniValide,
    };

    try {
      const r = calcolaFinePena(input);
      setRisultato(r);
      setMostraDettaglio(false);
    } catch (err) {
      setErrore("Errore nel calcolo. Verifica le date e i valori inseriti.");
      console.error(err);
    }
  };

  const handleReset = () => {
    setAnni("3");
    setMesi("0");
    setGiorni("0");
    setInizioDetenzione("");
    setCalcolaFinoAl("");
    setCalcolaLA(true);
    setSoloSemestriCompleti(true);
    setApplicaLaSpeciale(false);
    setPeriodiScontati([]);
    setInterruzioni([]);
    setRisultato(null);
    setErrore(null);
  };

  const inputStyle =
    "w-full px-3 py-2 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.45_0.12_250)] focus:border-transparent";

  const labelStyle = "block text-sm font-medium mb-1.5 text-[oklch(0.25_0.04_250)]";

  return (
    <div id="calcolatore" className="scroll-mt-24 mb-12">
      <div
        className="bg-white border border-[oklch(0.90_0.01_85)] p-6 md:p-8 shadow-sm"
        style={{ borderRadius: "0.5rem" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            className="flex items-center justify-center w-10 h-10 bg-[oklch(0.94_0.04_30)] text-[oklch(0.45_0.14_30)]"
            style={{ borderRadius: "0.375rem" }}
          >
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-serif text-[oklch(0.25_0.04_250)]">
              Calcolatore Fine Pena
            </h2>
            <p className="text-sm text-muted-foreground">
              Art. 54 O.P. — 45 giorni per ogni semestre di pena scontata
            </p>
          </div>
        </div>

        {/* Durata pena */}
        <div className="mb-5">
          <label className={labelStyle}>Durata della pena</label>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <input
                type="number"
                min="0"
                value={anni}
                onChange={(e) => setAnni(e.target.value)}
                className={inputStyle}
                style={{ borderRadius: "0.375rem" }}
                placeholder="Anni"
              />
              <p className="text-xs text-muted-foreground mt-1">Anni</p>
            </div>
            <div>
              <input
                type="number"
                min="0"
                max="11"
                value={mesi}
                onChange={(e) => setMesi(e.target.value)}
                className={inputStyle}
                style={{ borderRadius: "0.375rem" }}
                placeholder="Mesi"
              />
              <p className="text-xs text-muted-foreground mt-1">Mesi (0-11)</p>
            </div>
            <div>
              <input
                type="number"
                min="0"
                max="29"
                value={giorni}
                onChange={(e) => setGiorni(e.target.value)}
                className={inputStyle}
                style={{ borderRadius: "0.375rem" }}
                placeholder="Giorni"
              />
              <p className="text-xs text-muted-foreground mt-1">Giorni (0-29)</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Totale: <span className="font-mono">{totaleGiorniInput > 0 ? totaleGiorniInput.toLocaleString("it-IT") + " giorni" : "(inserire data inizio)"}</span>{" "}
            — calcolo secondo il calendario comune (art. 14 c.p.)
          </p>
        </div>

        {/* Date base */}
        <div className="grid md:grid-cols-2 gap-4 mb-5">
          <div>
            <label className={labelStyle}>Data inizio detenzione</label>
            <input
              type="date"
              value={inizioDetenzione}
              onChange={(e) => setInizioDetenzione(e.target.value)}
              className={inputStyle}
              style={{ borderRadius: "0.375rem" }}
            />
          </div>
          <div>
            <label className={labelStyle}>
              Calcola fino al <span className="text-xs font-normal text-muted-foreground">(opzionale)</span>
            </label>
            <input
              type="date"
              value={calcolaFinoAl}
              onChange={(e) => setCalcolaFinoAl(e.target.value)}
              className={inputStyle}
              style={{ borderRadius: "0.375rem" }}
            />
            <p className="text-xs text-muted-foreground mt-1">
              Se vuoto: calcola fino al fine pena virtuale
            </p>
          </div>
        </div>

        {/* Toggles */}
        <div className="bg-[oklch(0.98_0.005_85)] border border-[oklch(0.92_0.01_85)] p-4 mb-5" style={{ borderRadius: "0.375rem" }}>
          <div className="space-y-3">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={calcolaLA}
                onChange={(e) => setCalcolaLA(e.target.checked)}
                className="mt-0.5"
              />
              <div className="text-sm">
                <strong className="text-[oklch(0.25_0.04_250)]">Applica liberazione anticipata</strong>
                <p className="text-muted-foreground text-xs">
                  Detrazione di {GIORNI_LA_ORDINARIA} giorni per ogni semestre di pena scontata (art. 54 c. 1 O.P.)
                </p>
              </div>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={soloSemestriCompleti}
                onChange={(e) => setSoloSemestriCompleti(e.target.checked)}
                disabled={!calcolaLA}
                className="mt-0.5"
              />
              <div className="text-sm">
                <strong className="text-[oklch(0.25_0.04_250)]">Solo semestri completi</strong>
                <p className="text-muted-foreground text-xs">
                  In presenza di interruzione, il semestre si interrompe e ricomincia. Se non selezionato, le frazioni si sommano.
                </p>
              </div>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={applicaLaSpeciale}
                onChange={(e) => setApplicaLaSpeciale(e.target.checked)}
                disabled={!calcolaLA}
                className="mt-0.5"
              />
              <div className="text-sm">
                <strong className="text-[oklch(0.25_0.04_250)]">Liberazione anticipata speciale (75 giorni)</strong>
                <p className="text-muted-foreground text-xs">
                  Applicabile solo per i semestri rientranti nel periodo 23/12/2013 — 23/12/2015 (art. 4 D.L. 146/2013). Esclusi i condannati 4-bis O.P.
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Periodi gia scontati */}
        <details className="mb-4 border border-[oklch(0.92_0.01_85)] p-4" style={{ borderRadius: "0.375rem" }}>
          <summary className="cursor-pointer text-sm font-medium text-[oklch(0.25_0.04_250)]">
            Periodi già scontati (presofferto, custodia cautelare, domiciliari)
            {periodiScontati.length > 0 && (
              <span className="ml-2 text-xs text-muted-foreground">({periodiScontati.length})</span>
            )}
          </summary>
          <div className="mt-3 space-y-2">
            {periodiScontati.map((p, i) => (
              <div key={i} className="flex gap-2 items-center">
                <input
                  type="date"
                  value={p.dal}
                  onChange={(e) => aggiornaPeriodo("scontato", i, "dal", e.target.value)}
                  className={inputStyle + " flex-1"}
                  style={{ borderRadius: "0.375rem" }}
                />
                <span className="text-sm text-muted-foreground">al</span>
                <input
                  type="date"
                  value={p.al}
                  onChange={(e) => aggiornaPeriodo("scontato", i, "al", e.target.value)}
                  className={inputStyle + " flex-1"}
                  style={{ borderRadius: "0.375rem" }}
                />
                <button
                  type="button"
                  onClick={() => rimuoviPeriodo("scontato", i)}
                  className="p-1.5 text-muted-foreground hover:text-red-600"
                  aria-label="Rimuovi periodo"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => aggiungiPeriodo("scontato")}
              className="flex items-center gap-1.5 text-sm text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] mt-2"
            >
              <Plus className="w-4 h-4" />
              Aggiungi periodo scontato
            </button>
          </div>
        </details>

        {/* Interruzioni */}
        <details className="mb-5 border border-[oklch(0.92_0.01_85)] p-4" style={{ borderRadius: "0.375rem" }}>
          <summary className="cursor-pointer text-sm font-medium text-[oklch(0.25_0.04_250)]">
            Interruzioni della pena (salute, ricovero, sospensione)
            {interruzioni.length > 0 && (
              <span className="ml-2 text-xs text-muted-foreground">({interruzioni.length})</span>
            )}
          </summary>
          <div className="mt-3 space-y-2">
            {interruzioni.map((p, i) => (
              <div key={i} className="flex gap-2 items-center">
                <input
                  type="date"
                  value={p.dal}
                  onChange={(e) => aggiornaPeriodo("interruzione", i, "dal", e.target.value)}
                  className={inputStyle + " flex-1"}
                  style={{ borderRadius: "0.375rem" }}
                />
                <span className="text-sm text-muted-foreground">al</span>
                <input
                  type="date"
                  value={p.al}
                  onChange={(e) => aggiornaPeriodo("interruzione", i, "al", e.target.value)}
                  className={inputStyle + " flex-1"}
                  style={{ borderRadius: "0.375rem" }}
                />
                <button
                  type="button"
                  onClick={() => rimuoviPeriodo("interruzione", i)}
                  className="p-1.5 text-muted-foreground hover:text-red-600"
                  aria-label="Rimuovi interruzione"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => aggiungiPeriodo("interruzione")}
              className="flex items-center gap-1.5 text-sm text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] mt-2"
            >
              <Plus className="w-4 h-4" />
              Aggiungi interruzione
            </button>
          </div>
        </details>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleCalcola}
            className="flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.25_0.04_250)] text-white text-sm font-medium hover:bg-[oklch(0.20_0.04_250)] transition-colors"
            style={{ borderRadius: "0.375rem" }}
          >
            <Calculator className="w-4 h-4" />
            Calcola fine pena
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[oklch(0.90_0.01_85)] text-[oklch(0.25_0.04_250)] text-sm font-medium hover:bg-[oklch(0.97_0.01_85)] transition-colors"
            style={{ borderRadius: "0.375rem" }}
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>

        {errore && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 text-sm text-red-800" style={{ borderRadius: "0.375rem" }}>
            {errore}
          </div>
        )}
      </div>

      {/* RISULTATO */}
      {risultato && (
        <div
          className="mt-6 bg-[oklch(0.98_0.005_85)] border border-[oklch(0.92_0.01_85)] p-6 md:p-8"
          style={{ borderRadius: "0.5rem" }}
        >
          <h3 className="text-lg font-serif text-[oklch(0.25_0.04_250)] mb-4">Risultato del calcolo</h3>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-[oklch(0.92_0.01_85)] p-4" style={{ borderRadius: "0.375rem" }}>
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Fine pena nominale</p>
              <p className="text-xl font-mono font-semibold text-[oklch(0.25_0.04_250)]">
                {formatDateIt(risultato.finePenaNominale)}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {giornoSettimana(risultato.finePenaNominale)} — senza LA
              </p>
            </div>
            <div className="bg-[oklch(0.94_0.04_30)] border border-[oklch(0.85_0.06_30)] p-4" style={{ borderRadius: "0.375rem" }}>
              <p className="text-xs uppercase tracking-wide text-[oklch(0.40_0.12_30)] mb-1">
                {risultato.finePenaVirtuale ? "Fine pena virtuale" : "Fine pena con LA"}
              </p>
              <p className="text-xl font-mono font-semibold text-[oklch(0.40_0.12_30)]">
                {formatDateIt(risultato.finePenaConLA)}
              </p>
              <p className="text-xs text-[oklch(0.40_0.12_30)] mt-1">
                {giornoSettimana(risultato.finePenaConLA)} — {risultato.semestriCompleti} semestri × detrazione
              </p>
            </div>
          </div>

          {risultato.finePenaVirtuale && (
            <div className="bg-blue-50 border border-blue-200 p-3 mb-4 flex gap-2" style={{ borderRadius: "0.375rem" }}>
              <Info className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <p className="text-xs text-blue-900">
                <strong>Fine pena virtuale:</strong> data teorica calcolata ipotizzando il riconoscimento di tutti i semestri. Il fine pena effettivo dipende dalla concessione concreta della LA da parte del magistrato di sorveglianza, semestre per semestre.
              </p>
            </div>
          )}

          {/* Metriche di sintesi */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div className="bg-white p-3 border border-[oklch(0.92_0.01_85)]" style={{ borderRadius: "0.375rem" }}>
              <p className="text-xs text-muted-foreground">Durata pena</p>
              <p className="text-base font-mono font-semibold">{risultato.durataTotaleGiorni.toLocaleString("it-IT")} gg</p>
            </div>
            <div className="bg-white p-3 border border-[oklch(0.92_0.01_85)]" style={{ borderRadius: "0.375rem" }}>
              <p className="text-xs text-muted-foreground">Semestri utili</p>
              <p className="text-base font-mono font-semibold">{risultato.semestriCompleti}</p>
            </div>
            <div className="bg-white p-3 border border-[oklch(0.92_0.01_85)]" style={{ borderRadius: "0.375rem" }}>
              <p className="text-xs text-muted-foreground">Detrazione</p>
              <p className="text-base font-mono font-semibold">{risultato.giorniDetrazione} gg</p>
            </div>
            <div className="bg-white p-3 border border-[oklch(0.92_0.01_85)]" style={{ borderRadius: "0.375rem" }}>
              <p className="text-xs text-muted-foreground">Sconto totale</p>
              <p className="text-base font-mono font-semibold">~{risultato.scontoTotaleMesi} mesi</p>
            </div>
          </div>

          {/* Dettaglio semestri */}
          {risultato.dettaglioSemestri.length > 0 && (
            <div>
              <button
                type="button"
                onClick={() => setMostraDettaglio(!mostraDettaglio)}
                className="flex items-center gap-2 text-sm text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] mb-2"
              >
                {mostraDettaglio ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {mostraDettaglio ? "Nascondi" : "Mostra"} dettaglio semestri
              </button>
              {mostraDettaglio && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-[oklch(0.25_0.04_250)] text-white">
                        <th className="px-3 py-2 text-left font-medium">#</th>
                        <th className="px-3 py-2 text-left font-medium">Dal</th>
                        <th className="px-3 py-2 text-left font-medium">Al</th>
                        <th className="px-3 py-2 text-left font-medium">Tipo</th>
                        <th className="px-3 py-2 text-right font-medium">Giorni LA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {risultato.dettaglioSemestri.map((s) => (
                        <tr key={s.numero} className="border-b border-[oklch(0.92_0.01_85)]">
                          <td className="px-3 py-2 font-mono">{s.numero}</td>
                          <td className="px-3 py-2 font-mono">{formatDateIt(s.dataInizio)}</td>
                          <td className="px-3 py-2 font-mono">{formatDateIt(s.dataFine)}</td>
                          <td className="px-3 py-2 text-xs">
                            {s.tipo === "speciale" ? `Speciale (${GIORNI_LA_SPECIALE} gg)` : `Ordinaria (${GIORNI_LA_ORDINARIA} gg)`}
                          </td>
                          <td className="px-3 py-2 font-mono text-right">{s.giorniDetrazione}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            Calcolo indicativo basato sull’art. 54 O.P. e su Corte Cost. sent. 201/2025. Non sostituisce la valutazione del magistrato di sorveglianza, che dipende dalla partecipazione concreta all’opera di rieducazione.
          </p>
        </div>
      )}
    </div>
  );
}
