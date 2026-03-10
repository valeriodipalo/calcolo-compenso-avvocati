import { Scaglione } from '@/lib/types';

export const SCAGLIONI: Scaglione[] = [
  { value: 10, label: 'Fino a 1.100,00' },
  { value: 20, label: 'Da 1.100,01 a 5.200,00' },
  { value: 30, label: 'Da 5.200,01 a 26.000,00' },
  { value: 40, label: 'Da 26.000,01 a 52.000,00' },
  { value: 50, label: 'Da 52.000,01 a 260.000,00' },
  { value: 60, label: 'Da 260.000,01 a 520.000,00' },
  { value: 70, label: 'Da 520.000,01 a 1.000.000,00' },
  { value: 80, label: 'Da 1.000.000,01 a 2.000.000,00' },
  { value: 90, label: 'Da 2.000.000,01 a 4.000.000,00' },
  { value: 100, label: 'Da 4.000.000,01 a 8.000.000,00' },
  { value: 110, label: 'Da 8.000.000,01 a 16.000.000,00' },
  { value: 120, label: 'Da 16.000.000,01 a 32.000.000,00' },
  { value: 130, label: 'Oltre 32.000.000,00' },
  { value: 901, label: 'Causa di valore indeterminabile - Bassa' },
  { value: 902, label: 'Causa di valore indeterminabile - Media' },
  { value: 903, label: 'Causa di valore indeterminabile - Alta' },
  { value: 910, label: 'Causa di valore non determinabile' },
];
