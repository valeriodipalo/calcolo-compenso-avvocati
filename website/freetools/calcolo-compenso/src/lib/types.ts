export interface PhaseData {
  code: number;
  enabled: boolean;
  min: number;
  med: number;
  max: number;
}

export type ValueMode = 'min' | 'med' | 'max' | 'custom';

export interface PhaseSelection {
  code: number;
  checked: boolean;
  mode: ValueMode;
  customValue: number;
}

export interface Competenza {
  value: number;
  label: string;
  group: 'giurisdizione' | 'materia';
}

export interface Scaglione {
  value: number;
  label: string;
}

export interface Aumento {
  id: string;
  label: string;
  reference: string;
  enabled: boolean;
  pct: number;
  customValue?: number;
  minPct?: number;
  maxPct?: number;
  basis: 'total' | 'decisionale' | 'introduttiva';
  // For PiuParti
  numParti?: number;
}

export interface Riduzione {
  id: string;
  label: string;
  reference: string;
  enabled: boolean;
  pct: number;
  minPct?: number;
  maxPct?: number;
  fixed?: boolean;
}

export interface SpeseState {
  speseEsenti: number;
  speseTrasferta: number;
  speseNonEsenti: number;
  speseGeneraliEnabled: boolean;
  speseGeneraliPct: number;
}

export interface AccessoriState {
  cpaEnabled: boolean;
  ivaEnabled: boolean;
  ritenutaEnabled: boolean;
}

export interface CalcResult {
  base: number;
  phaseValues: { code: number; name: string; value: number }[];
  aumenti: { label: string; value: number }[];
  riduzioni: { label: string; value: number }[];
  totalAumenti: number;
  totalRiduzioni: number;
  adjustedBase: number;
  speseGenerali: number;
  compenso: number;
  speseEsenti: number;
  speseTrasferta: number;
  speseNonEsenti: number;
  taxableExpenses: number;
  cpa: number;
  iva: number;
  ritenutaAcconto: number;
  totale: number;
  netto: number;
}
