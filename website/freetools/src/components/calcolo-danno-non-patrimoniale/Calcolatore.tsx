"use client";

import { useState, useMemo, useCallback } from "react";
import { Calculator, RotateCcw } from "lucide-react";
import {
  micropermanentiData,
  milanoData,
  tunData,
} from "@/data/calcolo-danno-non-patrimoniale/dannoData";

type Modalita = "micropermanenti" | "milano" | "tun";

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(n);

interface Risultato {
  dannoBiologico: number;
  dannoSofferenza: number;
  dannoITT: number;
  dannoITP: number;
  personalizzazioneImporto: number;
  totale: number;
}

function calcola(
  modalita: Modalita,
  punti: number,
  eta: number,
  giorniITT: number,
  giorniITP: number,
  percentualeITP: number,
  personalizzazione: number
): Risultato {
  const demoltiplicatore = Math.max(0, 1 - eta * 0.005);

  let dannoBiologico = 0;
  let dannoSofferenza = 0;
  let dannoITT = 0;
  let dannoITP = 0;

  if (modalita === "micropermanenti") {
    dannoBiologico = micropermanentiData.puntoBase2026 * punti * demoltiplicatore;
    dannoITT = micropermanentiData.ittGiornaliero * giorniITT;
    dannoITP = micropermanentiData.ittGiornaliero * giorniITP * (percentualeITP / 100);
  } else if (modalita === "milano") {
    dannoBiologico = milanoData.puntoBiologico * punti * demoltiplicatore;
    dannoSofferenza = milanoData.incrementoSofferenza * punti * demoltiplicatore;
    dannoITT = milanoData.ittGiornaliero100 * giorniITT;
    dannoITP = milanoData.ittGiornaliero100 * giorniITP * (percentualeITP / 100);
  } else {
    // TUN
    dannoBiologico = tunData.valoreBasePunto * punti * demoltiplicatore;
    dannoITT = tunData.ittGiornaliero * giorniITT;
    dannoITP = tunData.ittGiornaliero * giorniITP * (percentualeITP / 100);
  }

  const subtotale = dannoBiologico + dannoSofferenza + dannoITT + dannoITP;
  const personalizzazioneImporto = subtotale * (personalizzazione / 100);
  const totale = subtotale + personalizzazioneImporto;

  return {
    dannoBiologico: Math.round(dannoBiologico * 100) / 100,
    dannoSofferenza: Math.round(dannoSofferenza * 100) / 100,
    dannoITT: Math.round(dannoITT * 100) / 100,
    dannoITP: Math.round(dannoITP * 100) / 100,
    personalizzazioneImporto: Math.round(personalizzazioneImporto * 100) / 100,
    totale: Math.round(totale * 100) / 100,
  };
}

const tabs: { value: Modalita; label: string; sublabel: string }[] = [
  { value: "micropermanenti", label: "Micropermanenti", sublabel: "Art. 139 CdA (1-9%)" },
  { value: "milano", label: "Tabelle Milano", sublabel: "Edizione 2024 (10-100%)" },
  { value: "tun", label: "TUN 2025", sublabel: "D.P.R. 12/2025 (10-100%)" },
];

export default function Calcolatore() {
  const [modalita, setModalita] = useState<Modalita>("micropermanenti");
  const [punti, setPunti] = useState("");
  const [eta, setEta] = useState("");
  const [giorniITT, setGiorniITT] = useState("");
  const [giorniITP, setGiorniITP] = useState("");
  const [percentualeITP, setPercentualeITP] = useState("75");
  const [personalizzazione, setPersonalizzazione] = useState("0");
  const [risultato, setRisultato] = useState<Risultato | null>(null);

  const puntiMin = modalita === "micropermanenti" ? 1 : 10;
  const puntiMax = modalita === "micropermanenti" ? 9 : 100;
  const persMax =
    modalita === "micropermanenti"
      ? micropermanentiData.personalizzazioneMax
      : modalita === "milano"
        ? milanoData.personalizzazioneMax
        : tunData.personalizzazioneMax;

  const puntiNum = useMemo(() => {
    const n = parseInt(punti, 10);
    return isNaN(n) ? 0 : n;
  }, [punti]);

  const etaNum = useMemo(() => {
    const n = parseInt(eta, 10);
    return isNaN(n) ? 0 : n;
  }, [eta]);

  const canCalcola = puntiNum >= puntiMin && puntiNum <= puntiMax && etaNum >= 0 && etaNum <= 100;

  const handleCalcola = useCallback(() => {
    if (!canCalcola) return;
    const res = calcola(
      modalita,
      puntiNum,
      etaNum,
      parseInt(giorniITT, 10) || 0,
      parseInt(giorniITP, 10) || 0,
      parseInt(percentualeITP, 10) || 75,
      Math.min(parseInt(personalizzazione, 10) || 0, persMax)
    );
    setRisultato(res);
  }, [modalita, puntiNum, etaNum, giorniITT, giorniITP, percentualeITP, personalizzazione, canCalcola, persMax]);

  const handleReset = () => {
    setPunti("");
    setEta("");
    setGiorniITT("");
    setGiorniITP("");
    setPercentualeITP("75");
    setPersonalizzazione("0");
    setRisultato(null);
  };

  const handleChangeModalita = (m: Modalita) => {
    setModalita(m);
    setPunti("");
    setRisultato(null);
  };

  return (
    <div id="calcolatore" className="scroll-mt-24">
      <div className="bg-white border border-border shadow-lg overflow-hidden" style={{ borderRadius: "0.5rem" }}>
        {/* Header */}
        <div className="bg-[oklch(0.25_0.04_250)] px-6 py-5 flex items-center gap-3">
          <Calculator className="w-6 h-6 text-[oklch(0.75_0.10_85)]" />
          <h2 className="text-xl text-[oklch(0.90_0.01_85)] tracking-wide">Calcolatore Danno Non Patrimoniale</h2>
        </div>

        <div className="p-6 space-y-6">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => handleChangeModalita(tab.value)}
                className={`flex-1 px-4 py-3 text-left border transition-colors ${
                  modalita === tab.value
                    ? "bg-[oklch(0.25_0.04_250)] border-[oklch(0.25_0.04_250)] text-white"
                    : "bg-white border-border text-[oklch(0.40_0.02_250)] hover:bg-[oklch(0.97_0.005_250)]"
                }`}
                style={{ borderRadius: "0.375rem" }}
              >
                <span className="block text-sm font-semibold">{tab.label}</span>
                <span className={`block text-xs mt-0.5 ${modalita === tab.value ? "text-[oklch(0.70_0.06_85)]" : "text-muted-foreground"}`}>
                  {tab.sublabel}
                </span>
              </button>
            ))}
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Punti invalidita */}
            <div>
              <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                Punti di invalidità permanente ({puntiMin}-{puntiMax}%)
              </label>
              <input
                type="number"
                inputMode="numeric"
                min={puntiMin}
                max={puntiMax}
                value={punti}
                onChange={(e) => setPunti(e.target.value)}
                placeholder={`es. ${modalita === "micropermanenti" ? "5" : "15"}`}
                className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                style={{ borderRadius: "0.375rem" }}
              />
            </div>

            {/* Eta */}
            <div>
              <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                Età del danneggiato (0-100)
              </label>
              <input
                type="number"
                inputMode="numeric"
                min={0}
                max={100}
                value={eta}
                onChange={(e) => setEta(e.target.value)}
                placeholder="es. 40"
                className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                style={{ borderRadius: "0.375rem" }}
              />
            </div>

            {/* Giorni ITT */}
            <div>
              <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                Giorni ITT al 100%
              </label>
              <input
                type="number"
                inputMode="numeric"
                min={0}
                max={365}
                value={giorniITT}
                onChange={(e) => setGiorniITT(e.target.value)}
                placeholder="es. 30"
                className="w-full border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                style={{ borderRadius: "0.375rem" }}
              />
            </div>

            {/* Giorni ITP + percentuale */}
            <div>
              <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                Giorni ITP e percentuale
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  max={365}
                  value={giorniITP}
                  onChange={(e) => setGiorniITP(e.target.value)}
                  placeholder="Giorni"
                  className="flex-1 border border-border bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                  style={{ borderRadius: "0.375rem" }}
                />
                <select
                  value={percentualeITP}
                  onChange={(e) => setPercentualeITP(e.target.value)}
                  className="w-24 border border-border bg-white px-3 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] transition-all"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <option value="75">75%</option>
                  <option value="50">50%</option>
                  <option value="25">25%</option>
                </select>
              </div>
            </div>

            {/* Personalizzazione */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-[oklch(0.35_0.02_250)] uppercase tracking-wider mb-2">
                Personalizzazione: {personalizzazione}% (max {persMax}%)
              </label>
              <input
                type="range"
                min={0}
                max={persMax}
                value={personalizzazione}
                onChange={(e) => setPersonalizzazione(e.target.value)}
                className="w-full accent-[oklch(0.75_0.10_85)]"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>0%</span>
                <span>{persMax}%</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleCalcola}
              disabled={!canCalcola}
              className="bg-[oklch(0.75_0.10_85)] text-[oklch(0.22_0.04_250)] font-semibold px-6 py-3 text-sm hover:bg-[oklch(0.70_0.12_85)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ borderRadius: "0.375rem" }}
            >
              Calcola Danno
            </button>
            <button
              onClick={handleReset}
              className="border border-border text-[oklch(0.40_0.02_250)] font-medium px-4 py-3 text-sm hover:bg-[oklch(0.97_0.005_250)] transition-colors flex items-center gap-2"
              style={{ borderRadius: "0.375rem" }}
            >
              <RotateCcw className="w-4 h-4" />
              Azzera
            </button>
          </div>

          {/* Results */}
          {risultato && (
            <div className="border-t border-border pt-6 space-y-4">
              {/* Summary cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-[oklch(0.97_0.005_250)] p-4" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider mb-1">Danno biologico permanente</p>
                  <p className="text-lg font-semibold text-[oklch(0.25_0.04_250)] font-mono">{formatCurrency(risultato.dannoBiologico)}</p>
                </div>
                {modalita === "milano" && (
                  <div className="bg-[oklch(0.97_0.005_250)] p-4" style={{ borderRadius: "0.375rem" }}>
                    <p className="text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider mb-1">Incremento sofferenza</p>
                    <p className="text-lg font-semibold text-[oklch(0.25_0.04_250)] font-mono">{formatCurrency(risultato.dannoSofferenza)}</p>
                  </div>
                )}
                <div className="bg-[oklch(0.97_0.005_250)] p-4" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider mb-1">Danno temporaneo ITT</p>
                  <p className="text-lg font-semibold text-[oklch(0.25_0.04_250)] font-mono">{formatCurrency(risultato.dannoITT)}</p>
                </div>
                <div className="bg-[oklch(0.97_0.005_250)] p-4" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-xs font-semibold text-[oklch(0.50_0.02_250)] uppercase tracking-wider mb-1">Danno temporaneo ITP</p>
                  <p className="text-lg font-semibold text-[oklch(0.25_0.04_250)] font-mono">{formatCurrency(risultato.dannoITP)}</p>
                </div>
                <div className="bg-[oklch(0.97_0.005_85)] p-4" style={{ borderRadius: "0.375rem" }}>
                  <p className="text-xs font-semibold text-[oklch(0.50_0.08_85)] uppercase tracking-wider mb-1">Personalizzazione ({personalizzazione}%)</p>
                  <p className="text-lg font-semibold text-[oklch(0.35_0.10_85)] font-mono">{formatCurrency(risultato.personalizzazioneImporto)}</p>
                </div>
              </div>

              {/* Total */}
              <div className="bg-[oklch(0.25_0.04_250)] p-5 flex items-center justify-between" style={{ borderRadius: "0.375rem" }}>
                <p className="text-sm font-semibold text-[oklch(0.65_0.06_85)] uppercase tracking-wider">Totale risarcimento</p>
                <p className="text-2xl font-bold text-white font-mono">{formatCurrency(risultato.totale)}</p>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-muted-foreground leading-relaxed">
                Il risultato ha carattere meramente orientativo e non costituisce parere legale. I valori effettivi dipendono dalla valutazione medico-legale e dalla decisione del giudice.
                {modalita === "micropermanenti" && " Punto base 2026: € 963,40 (art. 139 CdA)."}
                {modalita === "milano" && " Tabelle Milano ed. 2024, Prot. P.7646_24."}
                {modalita === "tun" && " TUN D.P.R. 12/2025, in vigore dal 5 marzo 2025."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
