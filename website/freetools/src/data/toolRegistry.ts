import { Scale, Calculator, TrendingUp, HeartPulse, Landmark, FileText, Activity, ArrowRightLeft, Clock, Timer, Building, Hash } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ToolCluster, NavGroup } from "@/types/tool";

export interface ToolEntry {
  slug: string;
  title: string;
  navLabel: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  ready: boolean;
  lastModified: string;
  cluster: string;
  relatedSlugs?: string[];
}

// ---------------------------------------------------------------------------
// Clusters
// ---------------------------------------------------------------------------

export const CLUSTERS: ToolCluster[] = [
  {
    id: "compensi",
    label: "Compenso e Fatturazione",
    slug: "compensi-forensi",
    description: "Strumenti per il calcolo dei compensi professionali forensi e la fatturazione dell'avvocato.",
    icon: Calculator,
    hubReady: false,
  },
  {
    id: "termini",
    label: "Termini e Scadenze",
    slug: "termini-processuali",
    description: "Calcolo dei termini processuali, di impugnazione e delle scadenze legali.",
    icon: Clock,
    hubReady: false,
  },
  {
    id: "interessi",
    label: "Interessi e Rivalutazione",
    slug: "interessi-e-rivalutazione",
    description: "Calcolo di interessi legali, moratori e rivalutazione monetaria ISTAT.",
    icon: TrendingUp,
    hubReady: false,
  },
  {
    id: "contributo",
    label: "Contributo Unificato",
    slug: "guida-contributo-unificato",
    description: "Calcolo e guida completa al contributo unificato per ogni tipo di procedimento.",
    icon: Scale,
    hubReady: false,
  },
  {
    id: "danno",
    label: "Danno e Risarcimento",
    slug: "danno-e-risarcimento",
    description: "Calcolo del danno biologico, non patrimoniale e dei risarcimenti.",
    icon: HeartPulse,
    hubReady: false,
  },
  {
    id: "fiscale",
    label: "Fiscale e Lavoro",
    slug: "fiscale-e-lavoro",
    description: "Strumenti per calcoli fiscali, tributari e del lavoro.",
    icon: Landmark,
    hubReady: false,
  },
  {
    id: "immobiliare",
    label: "Immobiliare",
    slug: "strumenti-immobiliari",
    description: "Calcoli per immobili: IMU, valore catastale, adeguamento ISTAT.",
    icon: Building,
    hubReady: false,
  },
  {
    id: "generici",
    label: "Calcolatori Generici",
    slug: "calcolatori-generici",
    description: "Calcolatori di uso generale: percentuali, codice fiscale, date.",
    icon: Hash,
    hubReady: false,
  },
];

// ---------------------------------------------------------------------------
// Nav Groups (macro-areas for navbar dropdowns)
// ---------------------------------------------------------------------------

export const NAV_GROUPS: NavGroup[] = [
  {
    id: "processo",
    label: "Processo",
    clusterIds: ["compensi", "termini", "contributo"],
  },
  {
    id: "calcoli",
    label: "Calcoli",
    clusterIds: ["interessi", "danno"],
  },
  {
    id: "fiscale-nav",
    label: "Fiscale",
    clusterIds: ["fiscale", "immobiliare"],
  },
  {
    id: "utility",
    label: "Utility",
    clusterIds: ["generici"],
  },
];

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
    cluster: "contributo",
    relatedSlugs: ["calcolo-compenso"],
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
    cluster: "interessi",
    relatedSlugs: ["calcolo-rivalutazione-monetaria"],
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
    cluster: "compensi",
    relatedSlugs: ["calcolo-fattura-avvocato"],
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
    cluster: "danno",
    relatedSlugs: ["calcolo-interessi-legali", "calcolo-danno-biologico"],
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
    cluster: "interessi",
    relatedSlugs: ["calcolo-interessi-legali"],
  },
  {
    slug: "calcolo-danno-biologico",
    title: "Calcolo Danno Biologico",
    navLabel: "Danno Biologico",
    description:
      "Calcola il danno biologico: micropermanenti art. 139 CdA, macropermanenti con Tabelle Milano 2024 e TUN 2025. Formula, tabelle, INAIL e normativa aggiornata.",
    icon: Activity,
    badge: "Aggiornato 2026",
    ready: true,
    lastModified: "2026-03-30",
    cluster: "danno",
    relatedSlugs: ["calcolo-interessi-legali", "calcolo-rivalutazione-monetaria"],
  },
  {
    slug: "calcolo-rivalutazione-monetaria",
    title: "Calcolo Rivalutazione Monetaria",
    navLabel: "Rivalutazione Monetaria",
    description:
      "Calcola la rivalutazione monetaria ISTAT con interessi legali. Indice FOI aggiornato 2026, formula, tabella coefficienti, debiti di valore e normativa.",
    icon: ArrowRightLeft,
    badge: "Aggiornato 2026",
    ready: true,
    lastModified: "2026-03-30",
    cluster: "interessi",
    relatedSlugs: ["calcolo-interessi-legali", "calcolo-danno-biologico"],
  },
  {
    slug: "calcolo-fattura-avvocato",
    title: "Calcolo Fattura Avvocato",
    navLabel: "Fattura Avvocato",
    description:
      "Calcola la fattura dell'avvocato: calcolo diretto e inverso (scorporo), regime ordinario e forfettario, IVA, CPA 4%, ritenuta 20%, split payment PA.",
    icon: FileText,
    badge: "Aggiornato 2026",
    ready: true,
    lastModified: "2026-03-26",
    cluster: "compensi",
    relatedSlugs: ["calcolo-compenso"],
  },
  {
    slug: "calcolo-termini-impugnazione",
    title: "Calcolo Termini Impugnazione",
    navLabel: "Termini Impugnazione",
    description:
      "Calcola i termini di impugnazione: appello (30 gg), cassazione (60 gg), revocazione e opposizione di terzo. Civile, amministrativo e tributario con sospensione feriale.",
    icon: Clock,
    badge: "Aggiornato 2026",
    ready: true,
    lastModified: "2026-04-01",
    cluster: "termini",
    relatedSlugs: ["calcolo-termini-processuali"],
  },
  {
    slug: "calcolo-termini-processuali",
    title: "Calcolo Termini Processuali",
    navLabel: "Termini Processuali",
    description:
      "Calcola i termini processuali civili: a giorni, a mesi, termini liberi, calcolo a ritroso. Sospensione feriale, Riforma Cartabia e tabella completa dei termini.",
    icon: Timer,
    badge: "Aggiornato 2026",
    ready: true,
    lastModified: "2026-04-05",
    cluster: "termini",
    relatedSlugs: ["calcolo-termini-impugnazione"],
  },
];

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

/** Clusters that have at least one ready tool */
export function getActiveClusters(): ToolCluster[] {
  return CLUSTERS.filter((c) =>
    TOOLS.some((t) => t.cluster === c.id && t.ready)
  );
}

/** All ready tools belonging to a cluster */
export function getToolsByCluster(clusterId: string): ToolEntry[] {
  return TOOLS.filter((t) => t.cluster === clusterId && t.ready);
}

/** The cluster a tool belongs to */
export function getClusterForTool(slug: string): ToolCluster | undefined {
  const tool = TOOLS.find((t) => t.slug === slug);
  return tool ? CLUSTERS.find((c) => c.id === tool.cluster) : undefined;
}

/** Same-cluster siblings + cross-cluster related tools */
export function getRelatedTools(slug: string): {
  sameCluster: ToolEntry[];
  crossCluster: ToolEntry[];
} {
  const tool = TOOLS.find((t) => t.slug === slug);
  if (!tool) return { sameCluster: [], crossCluster: [] };

  const sameCluster = TOOLS.filter(
    (t) => t.cluster === tool.cluster && t.slug !== slug && t.ready
  );
  const crossCluster = (tool.relatedSlugs ?? [])
    .map((s) => TOOLS.find((t) => t.slug === s))
    .filter((t): t is ToolEntry => t !== undefined && t.ready);

  return { sameCluster, crossCluster };
}

/** Nav groups that have at least one active cluster */
export function getActiveNavGroups(): (NavGroup & { clusters: ToolCluster[] })[] {
  const activeClusters = getActiveClusters();
  const activeIds = new Set(activeClusters.map((c) => c.id));

  return NAV_GROUPS.map((g) => ({
    ...g,
    clusters: g.clusterIds
      .map((id) => CLUSTERS.find((c) => c.id === id))
      .filter((c): c is ToolCluster => c !== undefined && activeIds.has(c.id)),
  })).filter((g) => g.clusters.length > 0);
}
