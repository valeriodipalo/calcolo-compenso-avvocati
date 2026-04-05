import {
  Scale,
  Clock,
  Landmark,
  HeartPulse,
  TrendingUp,
  FileText,
  Home,
  Calculator,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavTool {
  label: string;
  /** Slug from toolRegistry — if set AND the tool is ready, renders as a link */
  slug?: string;
  badge?: "Top" | "Nuovo";
}

export interface NavCluster {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  /** Tailwind bg class for the icon container */
  iconBg: string;
  /** Tailwind text class for the icon */
  iconFg: string;
  tools: NavTool[];
}

export interface NavSection {
  id: string;
  label: string;
  clusters: NavCluster[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    id: "legali",
    label: "Strumenti legali",
    clusters: [
      {
        id: "compenso",
        name: "Compenso avvocato",
        description: "Parametri forensi DM 147/2022",
        icon: Scale,
        iconBg: "bg-[oklch(0.94_0.03_250)]",
        iconFg: "text-[oklch(0.40_0.08_250)]",
        tools: [
          { label: "Calcolo compenso civile", slug: "calcolo-compenso", badge: "Top" },
          { label: "Calcolo compenso penale" },
          { label: "Compenso stragiudiziale" },
          { label: "Calcolo fattura avvocato", slug: "calcolo-fattura-avvocato" },
          { label: "Fattura elettronica" },
          { label: "Tabella parametri forensi" },
        ],
      },
      {
        id: "termini",
        name: "Termini processuali",
        description: "Scadenze, impugnazioni, udienze",
        icon: Clock,
        iconBg: "bg-[oklch(0.94_0.03_250)]",
        iconFg: "text-[oklch(0.40_0.08_250)]",
        tools: [
          { label: "Calcolo termini processuali", slug: "calcolo-termini-processuali", badge: "Top" },
          { label: "Termini impugnazioni", slug: "calcolo-termini-impugnazione" },
          { label: "Scadenze e termini udienze" },
          { label: "Memorie 183/190 c.p.c." },
        ],
      },
      {
        id: "contributo",
        name: "Contributo unificato",
        description: "Calcolo e tabella 2026",
        icon: Landmark,
        iconBg: "bg-[oklch(0.94_0.03_250)]",
        iconFg: "text-[oklch(0.40_0.08_250)]",
        tools: [
          { label: "Calcolo contributo unificato", slug: "contributo-unificato", badge: "Top" },
          { label: "Tabella scaglioni 2026" },
        ],
      },
      {
        id: "danno",
        name: "Danno e risarcimento",
        description: "Biologico, non patrimoniale, INAIL",
        icon: HeartPulse,
        iconBg: "bg-[oklch(0.95_0.03_25)]",
        iconFg: "text-[oklch(0.50_0.15_25)]",
        tools: [
          { label: "Danno non patrimoniale", slug: "calcolo-danno-non-patrimoniale", badge: "Top" },
          { label: "Danno biologico", slug: "calcolo-danno-biologico" },
          { label: "Risarcimento INAIL" },
        ],
      },
      {
        id: "interessi",
        name: "Interessi e rivalutazione",
        description: "Legali, moratori, ISTAT",
        icon: TrendingUp,
        iconBg: "bg-[oklch(0.94_0.03_155)]",
        iconFg: "text-[oklch(0.40_0.12_155)]",
        tools: [
          { label: "Interessi legali", slug: "calcolo-interessi-legali" },
          { label: "Interessi moratori", slug: "calcolo-interessi-moratori" },
          { label: "Rivalutazione monetaria", slug: "calcolo-rivalutazione-monetaria" },
        ],
      },
    ],
  },
  {
    id: "fisco",
    label: "Fisco e patrimonio",
    clusters: [
      {
        id: "fiscale",
        name: "Fiscale e lavoro",
        description: "IVA, IRPEF, TFR, ritenuta",
        icon: FileText,
        iconBg: "bg-[oklch(0.95_0.03_85)]",
        iconFg: "text-[oklch(0.50_0.12_85)]",
        tools: [
          { label: "Scorporo IVA", badge: "Top" },
          { label: "Verifica partita IVA" },
          { label: "Calcolo IRPEF" },
          { label: "Ravvedimento operoso" },
          { label: "Ritenuta d'acconto" },
          { label: "Calcolo TFR" },
        ],
      },
      {
        id: "immobiliare",
        name: "Immobiliare",
        description: "IMU, catasto, mutuo, locazione",
        icon: Home,
        iconBg: "bg-[oklch(0.95_0.03_85)]",
        iconFg: "text-[oklch(0.50_0.12_85)]",
        tools: [
          { label: "Adeguamento ISTAT locazione" },
          { label: "Valore catastale" },
          { label: "Calcolo IMU" },
          { label: "Ammortamento mutuo" },
          { label: "Imposta registro locazione" },
          { label: "Usufrutto e nuda proprieta" },
        ],
      },
    ],
  },
  {
    id: "calcolatori",
    label: "Calcolatori",
    clusters: [
      {
        id: "generici",
        name: "Calcolatori generici",
        description: "Utilita di calcolo generale",
        icon: Calculator,
        iconBg: "bg-[oklch(0.94_0.03_300)]",
        iconFg: "text-[oklch(0.45_0.12_300)]",
        tools: [
          { label: "Calcolo codice fiscale", badge: "Top" },
          { label: "Calcolatrice online" },
          { label: "Calcolo percentuale" },
          { label: "Giorni tra date" },
          { label: "Verifica IBAN" },
          { label: "Differenza ore" },
        ],
      },
    ],
  },
];

