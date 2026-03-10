import { PhaseData } from '@/lib/types';
import rawData from './feeData.json';

const feeData = rawData as Record<string, Record<string, PhaseData[]>>;

export function getPhases(competenza: number, scaglione: number): PhaseData[] {
  const comp = feeData[String(competenza)];
  if (!comp) return [];
  const phases = comp[String(scaglione)];
  return phases || [];
}

export function getAvailableScaglioni(competenza: number): number[] {
  const comp = feeData[String(competenza)];
  if (!comp) return [];
  return Object.keys(comp).map(Number).sort((a, b) => a - b);
}
