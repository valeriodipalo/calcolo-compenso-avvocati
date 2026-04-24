"use client";

import { useState, useMemo } from "react";
import {
  Calculator,
  RotateCcw,
  Info,
  AlertTriangle,
} from "lucide-react";
import {
  calcolaTfr,
  type CategoriaLavoratore,
  type InputCalcoloTfr,
  type RisultatoCalcoloTfr,
} from "@/data/calcolo-tfr/calcoloTfrData";
import { formatEur, formatPct } from "@/lib/utils";

const CATEGORIE: { id: CategoriaLavoratore; label: string; descrizione: string }[] = [
  {
    id: "privato",
    label: "Dipendente privato",
    descrizione: "Formula 1/13,5 ex art. 2120 c.c.",
  },
  {
    id: "pubblico",
    label: "Dipendente pubblico",
    descrizione: "Aliquota 6,91% con soglia 240.000 €",
  },
  {
    id: "colf",
    label: "Colf / badante",
    descrizione: "CCNL domestico, formula 1/13,5",
  },
];

const QUICK_FILLS: { label: string; ral: number }[] = [
  { label: "20.000 €", ral: 20000 },
  { label: "28.000 €", ral: 28000 },
  { label: "35.000 €", ral: 35000 },
  { label: "50.000 €", ral: 50000 },
  { label: "70.000 €", ral: 70000 },
];

const parseNum = (val: string): number => {
  const cleaned = val.replace(/\./g, "").replace(",", ".");
  return parseFloat(cleaned) || 0;
};

export default function Calcolatore() {
  const [categoria, setCategoria] = useState<CategoriaLavoratore>("privato");
  const [ral, setRal] = useState<string>("");
  const [anni, setAnni] = useState<string>("10");
  const [mesi, setMesi] = useState<string>("0");
  const [imponibilePrev, setImponibilePrev] = useState<string>("");
  const [tassoRiv, setTassoRiv] = useState<string>("2,5");
  const [anticipazioni, setAnticipazioni] = useState<string>("0");
  const [mostraOpzioniAvanzate, setMostraOpzioniAvanzate] = useState(false);

  const input = useMemo<InputCalcoloTfr>(() => {
    const ralNum = parseNum(ral);
    const anniNum = Math.max(0, Math.floor(parseNum(anni)));
    const mesiNum = Math.min(11, Math.max(0, Math.floor(parseNum(mesi))));
    const tassoNum = parseNum(tassoRiv) / 100;
    const imponibileNum = parseNum(imponibilePrev);
    const anticipazioniNum = parseNum(anticipazioni);
    return {
      categoria,
      ralAnnua: ralNum,
      anni: anniNum,
      mesi: mesiNum,
      imponibilePrevidenziale: imponibileNum > 0 ? imponibileNum : undefined,
      tassoRivalutazioneAnnuaStimato: tassoNum,
      anticipazioniRicevute: anticipazioniNum,
    };
  }, [categoria, ral, anni, mesi, imponibilePrev, tassoRiv, anticipazioni]);

  const risultato: RisultatoCalcoloTfr | null = useMemo(() => {
    if (!input.ralAnnua || (!input.anni && !input.mesi)) return null;
    return calcolaTfr(input);
  }, [input]);

  const handleReset = () => {
    setRal("");
    setAnni("10");
    setMesi("0");
    setImponibilePrev("");
    setTassoRiv("2,5");
    setAnticipazioni("0");
    setCategoria("privato");
    setMostraOpzioniAvanzate(false);
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
            Calcolatore TFR 2026 — Lordo, Rivalutazione e Netto
          </h3>
        </div>

        <div className="p-6 space-y-6">
          {/* Categoria lavoratore */}
          <div>
            <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2">
              Categoria del lavoratore
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {CATEGORIE.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCategoria(c.id)}
                  className={`px-4 py-3 text-left border transition-colors ${
                    categoria === c.id
                      ? "bg-[oklch(0.75_0.10_85)]/20 text-[oklch(0.25_0.04_250)] border-[oklch(0.75_0.10_85)]"
                      : "bg-white text-gray-700 border-border hover:bg-gray-50"
                  }`}
                  style={{ borderRadius: "0.375rem" }}
                >
                  <div className="text-sm font-semibold">{c.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {c.descrizione}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RAL e anni */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2">
                Retribuzione Annua Lorda (RAL) €
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={ral}
                onChange={(e) => setRal(e.target.value)}
                placeholder="es. 30.000,00"
                className="w-full px-4 py-3 border border-border text-lg font-mono focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] focus:border-transparent"
                style={{ borderRadius: "0.375rem" }}
              />
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs text-muted-foreground self-center mr-1">
                  Importi rapidi:
                </span>
                {QUICK_FILLS.map((q) => (
                  <button
                    key={q.ral}
                    onClick={() => setRal(String(q.ral).replace(".", ","))}
                    className="text-xs px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-[oklch(0.25_0.04_250)] transition-colors"
                    style={{ borderRadius: "0.25rem" }}
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2">
                  Anni
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={anni}
                  onChange={(e) => setAnni(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="10"
                  className="w-full px-4 py-3 border border-border text-lg font-mono text-center focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] focus:border-transparent"
                  style={{ borderRadius: "0.375rem" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2">
                  Mesi
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={mesi}
                  onChange={(e) => setMesi(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="0"
                  className="w-full px-4 py-3 border border-border text-lg font-mono text-center focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] focus:border-transparent"
                  style={{ borderRadius: "0.375rem" }}
                />
              </div>
            </div>
          </div>

          {/* Tasso rivalutazione */}
          <div>
            <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2">
              Tasso medio annuo di rivalutazione stimato (%)
              <span className="text-xs text-muted-foreground font-normal ml-2">
                1,5% fisso + 75% inflazione — default 2,5% (media ultimi anni)
              </span>
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={tassoRiv}
              onChange={(e) => setTassoRiv(e.target.value)}
              placeholder="2,5"
              className="w-full px-4 py-2.5 border border-border text-base font-mono focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] focus:border-transparent"
              style={{ borderRadius: "0.375rem" }}
            />
          </div>

          {/* Toggle opzioni avanzate */}
          <button
            onClick={() => setMostraOpzioniAvanzate(!mostraOpzioniAvanzate)}
            className="text-sm text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline decoration-dotted underline-offset-2"
          >
            {mostraOpzioniAvanzate ? "Nascondi" : "Mostra"} opzioni avanzate
          </button>

          {mostraOpzioniAvanzate && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[oklch(0.98_0.005_85)] border border-border" style={{ borderRadius: "0.375rem" }}>
              <div>
                <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2">
                  Imponibile previdenziale €
                  <span className="text-xs text-muted-foreground font-normal ml-1">
                    (per contributo IVS 0,5%)
                  </span>
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={imponibilePrev}
                  onChange={(e) => setImponibilePrev(e.target.value)}
                  placeholder="se diverso dalla RAL"
                  className="w-full px-4 py-2.5 border border-border text-base font-mono focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] focus:border-transparent"
                  style={{ borderRadius: "0.375rem" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[oklch(0.25_0.04_250)] mb-2">
                  Anticipazioni già ricevute €
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={anticipazioni}
                  onChange={(e) => setAnticipazioni(e.target.value)}
                  placeholder="0"
                  className="w-full px-4 py-2.5 border border-border text-base font-mono focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.10_85)] focus:border-transparent"
                  style={{ borderRadius: "0.375rem" }}
                />
              </div>
            </div>
          )}

          {/* Reset button */}
          <div className="flex justify-end">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-[oklch(0.25_0.04_250)] transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reimposta
            </button>
          </div>

          {/* Risultato */}
          {risultato && (
            <div
              className="border-2 border-[oklch(0.75_0.10_85)] bg-[oklch(0.98_0.015_85)]"
              style={{ borderRadius: "0.5rem" }}
            >
              <div className="bg-[oklch(0.75_0.10_85)]/10 px-6 py-3 border-b border-[oklch(0.75_0.10_85)]/40">
                <h4 className="font-serif text-lg text-[oklch(0.25_0.04_250)]">
                  Risultato del calcolo TFR
                </h4>
              </div>

              <div className="p-6 space-y-5">
                {/* Riga principale: TFR lordo e netto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className="bg-white p-4 border border-border"
                    style={{ borderRadius: "0.375rem" }}
                  >
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">
                      TFR Lordo (con rivalutazione)
                    </div>
                    <div className="text-3xl font-mono font-bold text-[oklch(0.25_0.04_250)] mt-1">
                      {formatEur(risultato.tfrLordoConRivalutazione)}
                    </div>
                  </div>
                  <div
                    className="bg-[oklch(0.25_0.04_250)] p-4 border border-border"
                    style={{ borderRadius: "0.375rem" }}
                  >
                    <div className="text-xs text-[oklch(0.75_0.10_85)] uppercase tracking-wide">
                      TFR Netto (stima)
                    </div>
                    <div className="text-3xl font-mono font-bold text-white mt-1">
                      {formatEur(risultato.tfrNetto)}
                    </div>
                  </div>
                </div>

                {/* Dettaglio calcolo */}
                <div>
                  <h5 className="font-semibold text-sm text-[oklch(0.25_0.04_250)] mb-3">
                    Dettaglio del calcolo
                  </h5>
                  <div className="space-y-2 text-sm">
                    <Riga
                      label={`Quota annuale ${
                        categoria === "pubblico"
                          ? "(6,91% RAL)"
                          : `(RAL ÷ ${risultato.divisoreUtilizzato})`
                      }`}
                      value={formatEur(risultato.quotaAnnuale)}
                    />
                    <Riga
                      label={`TFR lordo accantonato (${input.anni} anni + ${input.mesi} mesi)`}
                      value={formatEur(risultato.tfrLordoAccantonato)}
                    />
                    <Riga
                      label="Contributo IVS 0,5% (L. 297/1982)"
                      value={`− ${formatEur(risultato.contributoIvs)}`}
                      negativo
                    />
                    <Riga
                      label={`Rivalutazione ISTAT (${formatPct(input.tassoRivalutazioneAnnuaStimato)} stimato)`}
                      value={`+ ${formatEur(risultato.rivalutazioneStimata)}`}
                      positivo
                    />
                    <Riga
                      label="TFR lordo totale"
                      value={formatEur(risultato.tfrLordoConRivalutazione)}
                      bold
                    />
                    <div className="border-t border-border pt-2 mt-2">
                      <Riga
                        label={`Reddito di riferimento (tassazione separata)`}
                        value={formatEur(risultato.redditoDiRiferimento)}
                      />
                      <Riga
                        label="Aliquota media IRPEF stimata"
                        value={formatPct(risultato.aliquotaMediaIrpef)}
                      />
                      <Riga
                        label="Detrazione d'imposta (D.M. 20/03/2008)"
                        value={`− ${formatEur(risultato.detrazioneTfr)}`}
                        negativo
                      />
                      <Riga
                        label="Imposta TFR (tassazione separata)"
                        value={`− ${formatEur(risultato.impostaTfrSeparata)}`}
                        negativo
                      />
                      <Riga
                        label="Imposta sostitutiva 17% su rivalutazione"
                        value={`− ${formatEur(risultato.impostaSostitutivaSuRivalutazione)}`}
                        negativo
                      />
                      <Riga
                        label="TFR NETTO stimato"
                        value={formatEur(risultato.tfrNetto)}
                        bold
                      />
                    </div>
                  </div>
                </div>

                {/* Anticipazione */}
                {risultato.anticipazioneMassima > 0 && (
                  <div
                    className="bg-[oklch(0.95_0.05_155)] border border-[oklch(0.60_0.12_155)]/30 p-4 flex gap-3"
                    style={{ borderRadius: "0.375rem" }}
                  >
                    <Info className="w-5 h-5 text-[oklch(0.50_0.15_155)] flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong className="text-[oklch(0.30_0.10_155)]">
                        Anticipazione TFR disponibile:
                      </strong>{" "}
                      fino a{" "}
                      <span className="font-mono font-bold text-[oklch(0.30_0.10_155)]">
                        {formatEur(risultato.anticipazioneMassima)}
                      </span>{" "}
                      (70% del TFR maturato, ex art. 2120 c. 6 c.c.). Hai maturato almeno
                      8 anni di servizio: puoi presentare richiesta scritta al datore per
                      una delle causali previste (spese sanitarie, acquisto prima casa,
                      congedi L. 53/2000, formazione).
                    </div>
                  </div>
                )}

                {/* Soglia pubblici */}
                {risultato.sogliaRalPubblici && (
                  <div
                    className="bg-[oklch(0.97_0.05_60)] border border-[oklch(0.70_0.15_60)]/40 p-4 flex gap-3"
                    style={{ borderRadius: "0.375rem" }}
                  >
                    <AlertTriangle className="w-5 h-5 text-[oklch(0.55_0.18_60)] flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-[oklch(0.30_0.10_60)]">
                      <strong>Attenzione soglia 240.000 €:</strong> per i dipendenti
                      pubblici la RAL considerata ai fini del TFR è limitata a 240.000 €
                      (L. 147/2013 art. 1 c. 484). La RAL inserita eccede la soglia:
                      il calcolo è stato effettuato sul limite massimo.
                    </div>
                  </div>
                )}

                {/* Disclaimer */}
                <div
                  className="bg-gray-50 border border-gray-200 p-4 text-xs text-gray-600 space-y-1"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <p>
                    <strong>Nota:</strong> il risultato è indicativo e stimato. L'imposta
                    definitiva sul TFR è riliquidata dall'Agenzia delle Entrate con
                    l'aliquota media IRPEF dei 5 anni precedenti (art. 19 TUIR), con
                    possibile conguaglio a credito o debito. La rivalutazione effettiva
                    dipende dall'indice ISTAT FOI di ciascun anno.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Riga({
  label,
  value,
  bold,
  positivo,
  negativo,
}: {
  label: string;
  value: string;
  bold?: boolean;
  positivo?: boolean;
  negativo?: boolean;
}) {
  return (
    <div className="flex justify-between items-center gap-3">
      <span
        className={`${bold ? "font-semibold text-[oklch(0.25_0.04_250)]" : "text-gray-700"}`}
      >
        {label}
      </span>
      <span
        className={`font-mono ${
          bold
            ? "font-bold text-[oklch(0.25_0.04_250)] text-base"
            : positivo
            ? "text-[oklch(0.45_0.15_155)]"
            : negativo
            ? "text-[oklch(0.50_0.15_25)]"
            : "text-gray-700"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
