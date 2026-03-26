import { Scale, Calculator, TrendingUp, HeartPulse, Landmark } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ToolEntry {
  slug: string;
  title: string;
  navLabel: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  ready: boolean;
  lastModified: string;
}

export const TOOLS: ToolEntry[] = [
  {
    slug: "contributo-unificato",
    title: "Contributo Unificato",
    navLabel: "Contributo Unificato",
    description:
      "Calcolo rapido del contributo unificato in base al valore della causa, al tipo di procedimento e al grado di giudizio. Tabelle, esenzioni e normativa aggiornata.",
    icon: Scale,
    badge: "Aggiornato 2026",
    ready: true,
    lastModified: "2026-03-10",
  },
  {
    slug: "calcolo-interessi-legali",
    title: "Calcolo Interessi Legali",
    navLabel: "Interessi Legali",
    description:
      "Calcola gli interessi legali al tasso 2026 (1,60%). Tabella storica completa dei tassi dal 1942, formula di calcolo, anatocismo e normativa.",
    icon: TrendingUp,
    badge: "Aggiornato 2026",
    ready: true,
    lastModified: "2026-03-10",
  },
  {
    slug: "calcolo-compenso",
    title: "Calcolo Compenso Avvocato",
    navLabel: "Compenso Avvocato",
    description:
      "Simulatore per il calcolo della liquidazione giudiziale dei compensi forensi civili. 29 competenze, 17 scaglioni, aumenti, riduzioni, CPA, IVA e ritenuta.",
    icon: Calculator,
    badge: "Aggiornato 2026",
    ready: true,
    lastModified: "2026-03-15",
  },
  {
    slug: "calcolo-danno-non-patrimoniale",
    title: "Calcolo Danno Non Patrimoniale",
    navLabel: "Danno Non Patrimoniale",
    description:
      "Calcola il risarcimento per danno biologico, morale e parentale con Tabelle Milano 2024, TUN 2025 e art. 139 CdA.",
    icon: HeartPulse,
    badge: "Aggiornato 2026",
    ready: true,
    lastModified: "2026-03-15",
  },
  {
    slug: "calcolo-interessi-moratori",
    title: "Calcolo Interessi Moratori",
    navLabel: "Interessi Moratori",
    description:
      "Calcola gli interessi moratori ex D.Lgs. 231/2002. Tasso 2026 al 10,15% (BCE + 8%), tabella storica, forfettario 40 euro e tre modalità di calcolo.",
    icon: Landmark,
    badge: "Aggiornato 2026",
    ready: true,
    lastModified: "2026-03-26",
  },
];
