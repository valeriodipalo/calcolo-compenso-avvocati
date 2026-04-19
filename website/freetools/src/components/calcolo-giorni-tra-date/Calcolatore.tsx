"use client";

import { useState, useMemo } from "react";
import {
  calcolaGiorniTraDate,
  calcolaAggiungiGiorni,
  calcolaTermineConSospensione,
  type RisultatoGiorni,
  type RisultatoAggiungi,
  type RisultatoTermineLibero,
  type ModalitaConteggio,
  type Operazione,
} from "@/data/calcolo-giorni-tra-date/giorniDateData";
import { Calculator, RotateCcw, CalendarDays, CalendarClock, Gavel, ChevronDown, ChevronUp } from "lucide-react";

type TabMode = "tra-date" | "aggiungi" | "termine-processuale";

const formatDateIt = (iso: string): string => {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

const modalitaLabels: Record<ModalitaConteggio, string> = {
  "tutti": "Tutti i giorni (calendario completo)",
  "senza-domeniche": "Esclude solo domeniche",
  "senza-weekend": "Esclude sabati e domeniche (weekend)",
  "senza-festivi": "Esclude domeniche e festività (non sabati)",
  "lavorativi": "Solo giorni lavorativi (esclude weekend + festività)",
};

const tabMeta: Record<TabMode, { label: string; desc: string; icon: typeof CalendarDays }> = {
  "tra-date": {
    label: "Giorni tra Due Date",
    desc: "Calcola il numero di giorni che separano due date",
    icon: CalendarDays,
  },
  "aggiungi": {
    label: "Aggiungi/Sottrai Giorni",
    desc: "Calcola la data risultante da una data + o − giorni",
    icon: CalendarClock,
  },
  "termine-processuale": {
    label: "Termine Processuale",
    desc: "Scadenza con sospensione feriale e proroga festiva",
    icon: Gavel,
  },
};

export default function Calcolatore() {
  const [tab, setTab] = useState<TabMode>("tra-date");

  // --- Tab "tra-date" ---
  const [dataIniziale, setDataIniziale] = useState("");
  const [dataFinale, setDataFinale] = useState("");
  const [modalita, setModalita] = useState<ModalitaConteggio>("tutti");
  const [includiDiesAQuo, setIncludiDiesAQuo] = useState(false);

  // --- Tab "aggiungi" ---
  const [dataBase, setDataBase] = useState("");
  const [numGiorni, setNumGiorni] = useState("");
  const [operazione, setOperazione] = useState<Operazione>("aggiungi");
  const [soloLavorativi, setSoloLavorativi] = useState(false);

  // --- Tab "termine-processuale" ---
  const [dataNotifica, setDataNotifica] = useState("");
  const [giorniTermine, setGiorniTermine] = useState("");
  const [applicaSospensione, setApplicaSospensione] = useState(true);

  // --- Risultati ---
  const [risultatoGiorni, setRisultatoGiorni] = useState<RisultatoGiorni | null>(null);
  const [risultatoAggiungi, setRisultatoAggiungi] = useState<RisultatoAggiungi | null>(null);
  const [risultatoTermine, setRisultatoTermine] = useState<RisultatoTermineLibero | null>(null);
  const [showDettaglio, setShowDettaglio] = useState(false);

  const numGiorniNum = useMemo(() => parseInt(numGiorni, 10) || 0, [numGiorni]);
  const giorniTermineNum = useMemo(() => parseInt(giorniTermine, 10) || 0, [giorniTermine]);

  const handleCalcola = () => {
    if (tab === "tra-date") {
      if (!dataIniziale || !dataFinale) return;
      const res = calcolaGiorniTraDate(dataIniziale, dataFinale, modalita, includiDiesAQuo);
      setRisultatoGiorni(res);
      setRisultatoAggiungi(null);
      setRisultatoTermine(null);
      setShowDettaglio(false);
    } else if (tab === "aggiungi") {
      if (!dataBase || !numGiorniNum) return;
      const res = calcolaAggiungiGiorni(dataBase, numGiorniNum, operazione, soloLavorativi);
      setRisultatoAggiungi(res);
      setRisultatoGiorni(null);
      setRisultatoTermine(null);
    } else {
      if (!dataNotifica || !giorniTermineNum) return;
      const res = calcolaTermineConSospensione(dataNotifica, giorniTermineNum, applicaSospensione);
      setRisultatoTermine(res);
      setRisultatoGiorni(null);
      setRisultatoAggiungi(null);
    }
  };

  const handleReset = () => {
    setDataIniziale("");
    setDataFinale("");
    setModalita("tutti");
    setIncludiDiesAQuo(false);
    setDataBase("");
    setNumGiorni("");
    setOperazione("aggiungi");
    setSoloLavorativi(false);
    setDataNotifica("");
    setGiorniTermine("");
    setApplicaSospensione(true);
    setRisultatoGiorni(null);
    setRisultatoAggiungi(null);
    setRisultatoTermine(null);
    setShowDettaglio(false);
  };

  return (
    <div id="calcolatore" className="scroll-mt-24">
      <div className="bg-white border border-border shadow-lg overflow-hidden" style={{ borderRadius: "0.5rem" }}>
        {/* Header */}
        <div className="bg-[oklch(0.25_0.04_250)] px-6 py-5 flex items-center gap-3">
          <Calculator className="w-6 h-6 text-[oklch(0.75_0.10_85)]" />
          <h2 className="text-xl text-[oklch(0.90_0.01_85)] tracking-wide">Calcolatore Giorni tra Date</h2>
        </div>

        <div className="p-6 space-y-6">
          {/* Tab selector */}
          <div>
            <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-3">
              Modalità di calcolo
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {(Object.keys(tabMeta) as TabMode[]).map((t) => {
                const info = tabMeta[t];
                const Icon = info.icon;
                const isActive = tab === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => { setTab(t); setRisultatoGiorni(null); setRisultatoAggiungi(null); setRisultatoTermine(null); }}
                    className={`flex items-center gap-3 p-3 border text-left transition-all ${
                      isActive
                        ? "border-[oklch(0.75_0.10_85)] bg-[oklch(0.97_0.005_85)]"
                        : "border-border bg-white hover:bg-[oklch(0.98_0.002_250)]"
                    }`}
                    style={{ borderRadius: "0.375rem" }}
                  >
                    <div className={`p-2 ${isActive ? "bg-[oklch(0.25_0.04_250)]" : "bg-[oklch(0.95_0.005_250)]"}`} style={{ borderRadius: "0.375rem" }}>
                      <Icon className={`w-4 h-4 ${isActive ? "text-[oklch(0.75_0.10_85)]" : "text-[oklch(0.50_0.02_250)]"}`} />
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${isActive ? "text-[oklch(0.25_0.04_250)]" : "text-[oklch(0.40_0.02_250)]"}`}>{info.label}</p>
                      <p className="text-xs text-muted-foreground">{info.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form: tra-date */}
          {tab === "tra-date" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                    Data iniziale
                  </label>
                  <input
                    type="date"
                    value={dataIniziale}
                    onChange={(e) => setDataIniziale(e.target.value)}
                    className="w-full px-4 py-3 border border-border bg-white text-base focus:outline-none focus:border-[oklch(0.75_0.10_85)]"
                    style={{ borderRadius: "0.375rem" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                    Data finale
                  </label>
                  <input
                    type="date"
                    value={dataFinale}
                    onChange={(e) => setDataFinale(e.target.value)}
                    className="w-full px-4 py-3 border border-border bg-white text-base focus:outline-none focus:border-[oklch(0.75_0.10_85)]"
                    style={{ borderRadius: "0.375rem" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                  Modalità di conteggio
                </label>
                <select
                  value={modalita}
                  onChange={(e) => setModalita(e.target.value as ModalitaConteggio)}
                  className="w-full px-4 py-3 border border-border bg-white text-base focus:outline-none focus:border-[oklch(0.75_0.10_85)]"
                  style={{ borderRadius: "0.375rem" }}
                >
                  {(Object.keys(modalitaLabels) as ModalitaConteggio[]).map((m) => (
                    <option key={m} value={m}>
                      {modalitaLabels[m]}
                    </option>
                  ))}
                </select>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includiDiesAQuo}
                  onChange={(e) => setIncludiDiesAQuo(e.target.checked)}
                  className="w-4 h-4 mt-1 accent-[oklch(0.75_0.10_85)]"
                />
                <span className="text-sm text-[oklch(0.40_0.02_250)]">
                  <strong>Includi il giorno iniziale</strong> (di default escluso secondo art. 155 c.p.c. — dies a quo non computatur)
                </span>
              </label>
            </div>
          )}

          {/* Form: aggiungi */}
          {tab === "aggiungi" && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                  Data di partenza
                </label>
                <input
                  type="date"
                  value={dataBase}
                  onChange={(e) => setDataBase(e.target.value)}
                  className="w-full px-4 py-3 border border-border bg-white text-base focus:outline-none focus:border-[oklch(0.75_0.10_85)]"
                  style={{ borderRadius: "0.375rem" }}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                    Numero di giorni
                  </label>
                  <input
                    type="number"
                    inputMode="numeric"
                    min="0"
                    value={numGiorni}
                    onChange={(e) => setNumGiorni(e.target.value)}
                    placeholder="es. 30"
                    className="w-full px-4 py-3 border border-border bg-white text-base focus:outline-none focus:border-[oklch(0.75_0.10_85)]"
                    style={{ borderRadius: "0.375rem" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                    Operazione
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setOperazione("aggiungi")}
                      className={`px-4 py-3 border text-sm transition-all ${
                        operazione === "aggiungi"
                          ? "border-[oklch(0.75_0.10_85)] bg-[oklch(0.97_0.005_85)] text-[oklch(0.25_0.04_250)] font-semibold"
                          : "border-border bg-white text-[oklch(0.40_0.02_250)]"
                      }`}
                      style={{ borderRadius: "0.375rem" }}
                    >
                      + Aggiungi
                    </button>
                    <button
                      type="button"
                      onClick={() => setOperazione("sottrai")}
                      className={`px-4 py-3 border text-sm transition-all ${
                        operazione === "sottrai"
                          ? "border-[oklch(0.75_0.10_85)] bg-[oklch(0.97_0.005_85)] text-[oklch(0.25_0.04_250)] font-semibold"
                          : "border-border bg-white text-[oklch(0.40_0.02_250)]"
                      }`}
                      style={{ borderRadius: "0.375rem" }}
                    >
                      − Sottrai
                    </button>
                  </div>
                </div>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={soloLavorativi}
                  onChange={(e) => setSoloLavorativi(e.target.checked)}
                  className="w-4 h-4 mt-1 accent-[oklch(0.75_0.10_85)]"
                />
                <span className="text-sm text-[oklch(0.40_0.02_250)]">
                  <strong>Conta solo giorni lavorativi</strong> (salta sabati, domeniche e festività nazionali italiane)
                </span>
              </label>
            </div>
          )}

          {/* Form: termine-processuale */}
          {tab === "termine-processuale" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                    Data di notifica / decorrenza
                  </label>
                  <input
                    type="date"
                    value={dataNotifica}
                    onChange={(e) => setDataNotifica(e.target.value)}
                    className="w-full px-4 py-3 border border-border bg-white text-base focus:outline-none focus:border-[oklch(0.75_0.10_85)]"
                    style={{ borderRadius: "0.375rem" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                    Giorni del termine
                  </label>
                  <input
                    type="number"
                    inputMode="numeric"
                    min="1"
                    value={giorniTermine}
                    onChange={(e) => setGiorniTermine(e.target.value)}
                    placeholder="es. 30, 40, 60"
                    className="w-full px-4 py-3 border border-border bg-white text-base focus:outline-none focus:border-[oklch(0.75_0.10_85)]"
                    style={{ borderRadius: "0.375rem" }}
                  />
                </div>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={applicaSospensione}
                  onChange={(e) => setApplicaSospensione(e.target.checked)}
                  className="w-4 h-4 mt-1 accent-[oklch(0.75_0.10_85)]"
                />
                <span className="text-sm text-[oklch(0.40_0.02_250)]">
                  <strong>Applica sospensione feriale 1-31 agosto</strong> (L. 742/1969). Disattiva per procedimenti esclusi: cause di lavoro, cautelari, alimenti, penali.
                </span>
              </label>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleCalcola}
              className="flex-1 bg-[oklch(0.25_0.04_250)] text-[oklch(0.90_0.01_85)] py-3 px-6 text-sm font-semibold uppercase tracking-wider hover:bg-[oklch(0.20_0.04_250)] transition-colors"
              style={{ borderRadius: "0.375rem" }}
            >
              Calcola
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-[oklch(0.95_0.005_250)] text-[oklch(0.40_0.02_250)] py-3 px-4 hover:bg-[oklch(0.93_0.005_250)] transition-colors flex items-center gap-2"
              style={{ borderRadius: "0.375rem" }}
              aria-label="Reset"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Risultato: tra-date */}
          {risultatoGiorni && (
            <div className="border-t border-border pt-6 space-y-4">
              <div className="bg-[oklch(0.97_0.005_85)] border border-[oklch(0.85_0.05_85)] p-5" style={{ borderRadius: "0.375rem" }}>
                <p className="text-sm text-[oklch(0.40_0.02_250)] uppercase tracking-wider mb-1">
                  Giorni tra {formatDateIt(risultatoGiorni.dataIniziale)} e {formatDateIt(risultatoGiorni.dataFinale)}
                </p>
                <p className="text-4xl font-bold text-[oklch(0.25_0.04_250)]">
                  {risultatoGiorni.giorniTotali} giorni
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Modalità: {modalitaLabels[risultatoGiorni.modalita]}
                  {risultatoGiorni.includiDiesAQuo ? " • dies a quo incluso" : " • dies a quo escluso (art. 155 c.p.c.)"}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white border border-border p-3 text-center" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-2xl font-bold text-[oklch(0.25_0.04_250)]">{risultatoGiorni.breakdown.anni}</p>
                  <p className="text-xs text-muted-foreground uppercase">Anni</p>
                </div>
                <div className="bg-white border border-border p-3 text-center" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-2xl font-bold text-[oklch(0.25_0.04_250)]">{risultatoGiorni.breakdown.mesi}</p>
                  <p className="text-xs text-muted-foreground uppercase">Mesi</p>
                </div>
                <div className="bg-white border border-border p-3 text-center" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-2xl font-bold text-[oklch(0.25_0.04_250)]">{risultatoGiorni.breakdown.settimane}</p>
                  <p className="text-xs text-muted-foreground uppercase">Settimane</p>
                </div>
                <div className="bg-white border border-border p-3 text-center" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-2xl font-bold text-[oklch(0.25_0.04_250)]">{risultatoGiorni.breakdown.giorni}</p>
                  <p className="text-xs text-muted-foreground uppercase">Giorni</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowDettaglio(!showDettaglio)}
                className="w-full text-sm text-[oklch(0.45_0.12_250)] underline-offset-2 hover:underline flex items-center justify-center gap-2"
              >
                {showDettaglio ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {showDettaglio ? "Nascondi" : "Mostra"} dettaglio weekend e festività
              </button>

              {showDettaglio && (
                <div className="bg-white border border-border p-4 grid grid-cols-2 md:grid-cols-4 gap-3" style={{ borderRadius: "0.375rem" }}>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground uppercase mb-1">Sabati</p>
                    <p className="text-xl font-semibold text-[oklch(0.40_0.02_250)]">{risultatoGiorni.dettaglio.sabati}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground uppercase mb-1">Domeniche</p>
                    <p className="text-xl font-semibold text-[oklch(0.40_0.02_250)]">{risultatoGiorni.dettaglio.domeniche}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground uppercase mb-1">Festività</p>
                    <p className="text-xl font-semibold text-[oklch(0.40_0.02_250)]">{risultatoGiorni.dettaglio.festivi}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground uppercase mb-1">Lavorativi</p>
                    <p className="text-xl font-semibold text-[oklch(0.40_0.02_250)]">{risultatoGiorni.dettaglio.lavorativi}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Risultato: aggiungi */}
          {risultatoAggiungi && (
            <div className="border-t border-border pt-6">
              <div className="bg-[oklch(0.97_0.005_85)] border border-[oklch(0.85_0.05_85)] p-5" style={{ borderRadius: "0.375rem" }}>
                <p className="text-sm text-[oklch(0.40_0.02_250)] uppercase tracking-wider mb-1">
                  {risultatoAggiungi.operazione === "aggiungi" ? "Aggiungendo" : "Sottraendo"} {risultatoAggiungi.giorniApplicati} {risultatoAggiungi.soloLavorativi ? "giorni lavorativi" : "giorni"} {risultatoAggiungi.operazione === "aggiungi" ? "a" : "da"} {formatDateIt(risultatoAggiungi.dataBase)}
                </p>
                <p className="text-3xl font-bold text-[oklch(0.25_0.04_250)] mt-2">
                  {formatDateIt(risultatoAggiungi.dataRisultante)}
                </p>
                <p className="text-lg text-[oklch(0.40_0.02_250)] mt-1">
                  {risultatoAggiungi.giornoSettimana}
                </p>
              </div>
            </div>
          )}

          {/* Risultato: termine processuale */}
          {risultatoTermine && (
            <div className="border-t border-border pt-6 space-y-4">
              <div className="bg-[oklch(0.97_0.005_85)] border border-[oklch(0.85_0.05_85)] p-5" style={{ borderRadius: "0.375rem" }}>
                <p className="text-sm text-[oklch(0.40_0.02_250)] uppercase tracking-wider mb-1">
                  Scadenza del termine
                </p>
                <p className="text-3xl font-bold text-[oklch(0.25_0.04_250)] mt-2">
                  {formatDateIt(risultatoTermine.dataScadenza)}
                </p>
                <p className="text-lg text-[oklch(0.40_0.02_250)] mt-1">
                  {risultatoTermine.giornoSettimana}
                </p>
              </div>

              <div className="space-y-2 text-sm">
                {risultatoTermine.sospensioneApplicata && (
                  <div className="bg-[oklch(0.97_0.02_95)] border border-[oklch(0.85_0.08_95)] p-3 flex gap-3" style={{ borderRadius: "0.375rem" }}>
                    <span className="font-semibold text-[oklch(0.35_0.08_95)]">Sospensione feriale applicata:</span>
                    <span className="text-[oklch(0.40_0.02_250)]">
                      {risultatoTermine.giorniSospesi} giorni di agosto esclusi dal computo (L. 742/1969)
                    </span>
                  </div>
                )}
                {risultatoTermine.prorogaFestiva && (
                  <div className="bg-[oklch(0.97_0.02_250)] border border-[oklch(0.85_0.05_250)] p-3 flex flex-col gap-1" style={{ borderRadius: "0.375rem" }}>
                    <span className="font-semibold text-[oklch(0.30_0.04_250)]">Proroga al primo giorno non festivo (art. 155 c.p.c.)</span>
                    <span className="text-[oklch(0.40_0.02_250)]">
                      Scadenza teorica {formatDateIt(risultatoTermine.dataScadenzaTeorica)} cadeva in giorno festivo. Spostata al primo giorno utile.
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
