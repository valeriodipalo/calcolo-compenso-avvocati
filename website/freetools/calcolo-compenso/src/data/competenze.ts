import { Competenza } from '@/lib/types';

export const COMPETENZE: Competenza[] = [
  // Per Giurisdizione
  { value: 100, label: 'Giudice di pace', group: 'giurisdizione' },
  { value: 110, label: 'Giudizi di cognizione innanzi al tribunale', group: 'giurisdizione' },
  { value: 200, label: 'Corte dei Conti', group: 'giurisdizione' },
  { value: 210, label: "Corte d'Appello", group: 'giurisdizione' },
  { value: 220, label: 'Corte di Cassazione', group: 'giurisdizione' },
  { value: 230, label: 'Magistrature superiori', group: 'giurisdizione' },
  { value: 240, label: 'Corte Costituzionale', group: 'giurisdizione' },
  { value: 250, label: 'Corte Europea', group: 'giurisdizione' },
  { value: 260, label: 'Corte di Giustizia UE', group: 'giurisdizione' },
  { value: 320, label: 'T.A.R.', group: 'giurisdizione' },
  { value: 330, label: 'Consiglio di Stato', group: 'giurisdizione' },
  { value: 335, label: 'Consiglio di Giustizia Amministrativa Sicilia', group: 'giurisdizione' },
  { value: 340, label: 'Commissioni Tributarie Provinciali', group: 'giurisdizione' },
  { value: 350, label: 'Commissioni Tributarie Regionali', group: 'giurisdizione' },
  { value: 370, label: 'Arbitrati', group: 'giurisdizione' },
  // Per Materia
  { value: 120, label: 'Esecuzioni individuali e concorsuali', group: 'materia' },
  { value: 130, label: 'Procedimenti speciali e cautelari', group: 'materia' },
  { value: 140, label: 'Affari di volontaria giurisdizione', group: 'materia' },
  { value: 150, label: 'Precetto', group: 'materia' },
  { value: 160, label: 'Volontaria giurisdizione', group: 'materia' },
  { value: 170, label: 'Iscrizione ipotecaria', group: 'materia' },
  { value: 180, label: 'Procedimenti monitori', group: 'materia' },
  { value: 190, label: 'Opposizione a decreto ingiuntivo', group: 'materia' },
  { value: 270, label: 'Procedimenti di istruzione preventiva', group: 'materia' },
  { value: 280, label: 'Ricorso per ingiunzione Tribunale amministrativo', group: 'materia' },
  { value: 290, label: 'Proced. risoluzione alternativa controversie (ADR/Negoziazione/Mediazione)', group: 'materia' },
  { value: 300, label: 'Assistenza in materia di contrattualistica pubblica', group: 'materia' },
  { value: 310, label: 'Assistenza in materia di contrattualistica privata', group: 'materia' },
  { value: 390, label: 'Consulenza stragiudiziale', group: 'materia' },
];

export const TAR_CDS_COMPETENZE = [320, 330, 335];
export const CASSAZIONE_COMPETENZE = [220];
