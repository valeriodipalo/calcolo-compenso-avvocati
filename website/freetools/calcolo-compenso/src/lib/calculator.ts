import { PhaseData, PhaseSelection, Aumento, Riduzione, SpeseState, AccessoriState, CalcResult } from './types';
import { PHASE_NAMES, CPA_RATE, IVA_RATE, RITENUTA_RATE } from '@/data/constants';

function getPhaseValue(phase: PhaseData, selection: PhaseSelection): number {
  if (!selection.checked) return 0;
  switch (selection.mode) {
    case 'min': return phase.min;
    case 'med': return phase.med;
    case 'max': return phase.max;
    case 'custom': return selection.customValue;
    default: return phase.med;
  }
}

export function calculatePiuPartiPct(numParti: number): number {
  if (numParti <= 1) return 0;
  if (numParti <= 10) {
    return (numParti - 1) * 20;
  }
  // 9 * 20% + (n - 10) * 10%
  return 9 * 20 + (numParti - 10) * 10;
}

export function calculate(
  phases: PhaseData[],
  selections: PhaseSelection[],
  aumenti: Aumento[],
  riduzioni: Riduzione[],
  spese: SpeseState,
  accessori: AccessoriState,
): CalcResult {
  // Calculate base from selected phases
  const phaseValues: { code: number; name: string; value: number }[] = [];
  let base = 0;
  let decisionale = 0;
  let introduttiva = 0;

  for (const phase of phases) {
    const sel = selections.find(s => s.code === phase.code);
    if (!sel) continue;
    const val = getPhaseValue(phase, sel);
    phaseValues.push({
      code: phase.code,
      name: PHASE_NAMES[phase.code] || `Fase ${phase.code}`,
      value: val,
    });
    base += val;
    if (phase.code === 40 || phase.code === 80) decisionale += val;
    if (phase.code === 20) introduttiva += val;
  }

  // Calculate increases
  const aumentiDetails: { label: string; value: number }[] = [];
  let totalAumenti = 0;

  for (const a of aumenti) {
    if (!a.enabled) continue;
    let basisValue = base;
    if (a.basis === 'decisionale') basisValue = decisionale;
    if (a.basis === 'introduttiva') basisValue = introduttiva;

    let value: number;
    if (a.id === 'PiuParti') {
      const pct = calculatePiuPartiPct(a.numParti || 1);
      value = basisValue * pct / 100;
    } else if (a.id === 'Importanza' && a.customValue !== undefined) {
      value = a.customValue;
    } else {
      value = basisValue * a.pct / 100;
    }

    if (value !== 0) {
      aumentiDetails.push({ label: a.label, value });
      totalAumenti += value;
    }
  }

  // Calculate reductions
  const riduzioniDetails: { label: string; value: number }[] = [];
  let totalRiduzioni = 0;

  for (const r of riduzioni) {
    if (!r.enabled) continue;
    const value = base * r.pct / 100;
    if (value !== 0) {
      riduzioniDetails.push({ label: r.label, value });
      totalRiduzioni += value;
    }
  }

  const adjustedBase = Math.max(0, base + totalAumenti - totalRiduzioni);

  // Spese generali
  const speseGenerali = spese.speseGeneraliEnabled
    ? adjustedBase * spese.speseGeneraliPct / 100
    : 0;

  const compenso = adjustedBase + speseGenerali;

  // Expenses
  const taxableExpenses = spese.speseTrasferta + spese.speseNonEsenti;

  // Accessories
  const cpa = accessori.cpaEnabled ? compenso * CPA_RATE : 0;
  const iva = accessori.ivaEnabled ? (compenso + taxableExpenses + cpa) * IVA_RATE : 0;
  const ritenutaAcconto = accessori.ritenutaEnabled ? compenso * RITENUTA_RATE : 0;

  const totale = compenso + taxableExpenses + cpa + iva + spese.speseEsenti;
  const netto = totale - ritenutaAcconto;

  return {
    base,
    phaseValues,
    aumenti: aumentiDetails,
    riduzioni: riduzioniDetails,
    totalAumenti,
    totalRiduzioni,
    adjustedBase,
    speseGenerali,
    compenso,
    speseEsenti: spese.speseEsenti,
    speseTrasferta: spese.speseTrasferta,
    speseNonEsenti: spese.speseNonEsenti,
    taxableExpenses,
    cpa,
    iva,
    ritenutaAcconto,
    totale,
    netto,
  };
}
