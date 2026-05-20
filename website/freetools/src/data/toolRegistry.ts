import { Scale, Calculator, TrendingUp, HeartPulse, Landmark, FileText, Activity, ArrowRightLeft, Clock, Timer, Building, Hash, CalendarDays, Percent, Wallet, FileWarning, Handshake, Gavel, BadgePercent, Lock, ShieldAlert, FileClock, Stethoscope } from "lucide-react";
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
    hubReady: true,
  },
  {
    id: "termini",
    label: "Termini e Scadenze",
    slug: "termini-processuali",
    description: "Calcolo dei termini processuali, di impugnazione e delle scadenze legali.",
    icon: Clock,
    hubReady: true,
  },
  {
    id: "interessi",
    label: "Interessi e Rivalutazione",
    slug: "interessi-e-rivalutazione",
    description: "Calcolo di interessi legali, moratori e rivalutazione monetaria ISTAT.",
    icon: TrendingUp,
    hubReady: true,
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
    id: "penale",
    label: "Diritto Penale ed Esecuzione",
    slug: "diritto-penale-esecuzione",
    description: "Strumenti per il calcolo del fine pena, dei benefici penitenziari e dei termini in materia penale.",
    icon: ShieldAlert,
    hubReady: false,
  },
  {
    id: "danno",
    label: "Danno e Risarcimento",
    slug: "danno-e-risarcimento",
    description: "Calcolo del danno biologico, non patrimoniale e dei risarcimenti.",
    icon: HeartPulse,
    hubReady: true,
  },
  {
    id: "fiscale",
    label: "Fiscale e Lavoro",
    slug: "fiscale-e-lavoro",
    description: "Strumenti per calcoli fiscali, tributari e del lavoro.",
    icon: Landmark,
    hubReady: true,
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
    clusterIds: ["compensi", "termini", "contributo", "penale"],
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
    relatedSlugs: ["contributo-unificato"],
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
    relatedSlugs: ["contributo-unificato"],
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
    relatedSlugs: ["calcolo-termini-impugnazione", "calcolo-giorni-tra-date"],
  },
  {
    slug: "calcolo-giorni-tra-date",
    title: "Calcolo Giorni tra Due Date",
    navLabel: "Giorni tra Date",
    description:
      "Contagiorni online: calcola giorni tra due date con breakdown anni/mesi/settimane, giorni lavorativi/feriali/liberi, sospensione feriale e festività italiane 2026 incluso San Francesco d'Assisi (L. 151/2025).",
    icon: CalendarDays,
    badge: "Aggiornato 2026",
    ready: true,
    lastModified: "2026-04-19",
    cluster: "termini",
    relatedSlugs: ["calcolo-interessi-legali"],
  },
  {
    slug: "scorporo-iva",
    title: "Scorporo IVA",
    navLabel: "Scorporo IVA",
    description:
      "Calcolatore scorporo IVA online: tutte le aliquote 2026 (22%, 10%, 5%, 4%), formula, coefficienti, esempi pratici, scorporo in fattura e per parcelle avvocato, split payment e reverse charge.",
    icon: Percent,
    badge: "Aggiornato 2026",
    ready: true,
    lastModified: "2026-04-23",
    cluster: "fiscale",
    relatedSlugs: ["calcolo-fattura-avvocato"],
  },
  {
    slug: "calcolo-tfr",
    title: "Calcolo TFR",
    navLabel: "Calcolo TFR",
    description:
      "Calcolatore TFR 2026: lordo, netto con tassazione separata, rivalutazione ISTAT. Formula 1/13,5 ex art. 2120 c.c. per dipendenti privati, pubblici (6,91%) e colf. Anticipazione, previdenza complementare e normativa.",
    icon: Wallet,
    badge: "Nuovo",
    ready: true,
    lastModified: "2026-04-24",
    cluster: "fiscale",
    relatedSlugs: ["calcolo-fattura-avvocato", "scorporo-iva"],
  },
  {
    slug: "ravvedimento-operoso",
    title: "Calcolo Ravvedimento Operoso",
    navLabel: "Ravvedimento Operoso",
    description:
      "Calcolatore ravvedimento operoso 2026: sanzioni ridotte D.Lgs. 87/2024 (25% / 12,5%), tasso legale 1,60%, codici tributo F24 per IRPEF, IVA, IRES, IMU, ritenute. Sprint, breve, intermedio, lungo, ultrannuale con auto-rilevamento del regime.",
    icon: FileWarning,
    badge: "Nuovo",
    ready: true,
    lastModified: "2026-04-29",
    cluster: "fiscale",
    relatedSlugs: ["calcolo-interessi-moratori", "calcolo-interessi-legali"],
  },
  {
    slug: "calcolo-irpef",
    title: "Calcolo IRPEF 2026",
    navLabel: "Calcolo IRPEF",
    description:
      "Calcolatore IRPEF 2026 con nuove aliquote 23/33/43% (Legge 199/2025). Selettore 2024/2025/2026, detrazioni base art. 13 TUIR per dipendenti, pensionati e autonomi, no tax area, addizionali regionali e comunali e confronto risparmio rispetto al 2025.",
    icon: Landmark,
    badge: "Nuovo",
    ready: true,
    lastModified: "2026-05-16",
    cluster: "fiscale",
    relatedSlugs: ["calcolo-fattura-avvocato", "calcolo-tfr"],
  },
  {
    slug: "compenso-stragiudiziale",
    title: "Compenso Avvocato Stragiudiziale",
    navLabel: "Compenso Stragiudiziale",
    description:
      "Calcola il compenso dell'avvocato per attività stragiudiziale: Tabella 25 D.M. 55/2014 e D.M. 147/2022, variazioni ±50%, spese generali 15%, CPA 4%, IVA 22% e ritenuta 20%. Pareri, transazioni, contratti, mediazione e negoziazione.",
    icon: Handshake,
    badge: "Nuovo",
    ready: true,
    lastModified: "2026-05-16",
    cluster: "compensi",
    relatedSlugs: ["scorporo-iva"],
  },
  {
    slug: "compenso-penale",
    title: "Calcolo Compenso Avvocato Penale",
    navLabel: "Compenso Penale",
    description:
      "Calcolatore parcella avvocato penalista 2026: Tabella 15 D.M. 147/2022, 14 competenze (Giudice di Pace, GIP/GUP, Tribunale Monocratico, Collegiale, Cassazione, Sorveglianza), 4 fasi del procedimento, aumenti per pluralità imputati, gratuito patrocinio penale −1/3 ex art. 106-bis DPR 115/2002, spese generali 15%, CPA 4%, IVA 22%, ritenuta 20%.",
    icon: ShieldAlert,
    badge: "Nuovo",
    ready: true,
    lastModified: "2026-05-18",
    cluster: "compensi",
    relatedSlugs: ["scorporo-iva", "calcolo-interessi-legali"],
  },
  {
    slug: "opposizione-decreto-ingiuntivo",
    title: "Opposizione a Decreto Ingiuntivo",
    navLabel: "Opposizione DI",
    description:
      "Calcolatore della scadenza dei 40 giorni per opporre il decreto ingiuntivo: sospensione feriale (L. 742/1969), termini speciali per crediti di lavoro, debitori UE/extra-UE e abbreviazioni del giudice. Forma dell'atto (citazione vs ricorso), Riforma Cartabia, mediazione obbligatoria, contributo unificato dimezzato e fac-simile struttura atto.",
    icon: Gavel,
    badge: "Nuovo",
    ready: true,
    lastModified: "2026-05-16",
    cluster: "termini",
    relatedSlugs: ["contributo-unificato", "calcolo-compenso"],
  },
  {
    slug: "calcolo-fine-pena-liberazione-anticipata",
    title: "Calcolo Fine Pena con Liberazione Anticipata",
    navLabel: "Calcolo Fine Pena",
    description:
      "Calcolatore fine pena con liberazione anticipata art. 54 O.P.: 45 giorni per ogni semestre di pena scontata, fine pena virtuale obbligatorio dal 2024 (art. 656 c.p.p. c. 10-bis), interruzioni della pena, presofferto in custodia cautelare e domiciliari. Aggiornato a Corte Cost. sent. 201/2025.",
    icon: Lock,
    badge: "Nuovo",
    ready: true,
    lastModified: "2026-05-18",
    cluster: "penale",
    relatedSlugs: ["calcolo-giorni-tra-date"],
  },
  {
    slug: "calcolo-termini-memorie",
    title: "Calcolo Termini Memorie 183/190 c.p.c. e Cartabia",
    navLabel: "Termini Memorie 183/190",
    description:
      "Calcolatore unificato dei termini delle memorie processuali civili: vecchio rito (artt. 183 c. 6 e 190 c.p.c., 30+30+20 e 60+20) e Riforma Cartabia (artt. 171-ter, 189 e 275-bis c.p.c., termini a ritroso 40+20+10, 60+30+15 e 30+15). Sospensione feriale, gestione sabato/festivi, modalità Cassazione 13201/2006, decorrenza, rimessione in termini e correttivo Cartabia 164/2024.",
    icon: FileClock,
    badge: "Nuovo",
    ready: true,
    lastModified: "2026-05-20",
    cluster: "termini",
    relatedSlugs: ["calcolo-compenso", "contributo-unificato"],
  },
  {
    slug: "calcolo-percentuale",
    title: "Calcolo Percentuale",
    navLabel: "Calcolo Percentuale",
    description:
      "Calcolatore percentuale online gratuito con 7 modalità: percentuale di un numero, sconto, aumento, variazione, percentuale inversa, IVA e sconti successivi composti. Formula visibile, calcolo step-by-step, trucchi mentali e formule pronte per Excel.",
    icon: BadgePercent,
    badge: "Nuovo",
    ready: true,
    lastModified: "2026-05-16",
    cluster: "generici",
    relatedSlugs: ["scorporo-iva", "calcolo-giorni-tra-date"],
  },
  {
    slug: "calcolo-risarcimento-inail",
    title: "Calcolo Risarcimento INAIL 2026",
    navLabel: "Risarcimento INAIL",
    description:
      "Calcolatore risarcimento INAIL per infortunio sul lavoro e malattia professionale: indennizzo in capitale 6-15% (tabelle DM 12/07/2000 e DM 45/2019 unisex), rendita vitalizia 16-100% con quota biologica e patrimoniale, tabella coefficienti A-D, quote integrative familiari art. 77 T.U., rivalutazione DM 85/2025 (+0,8%) e Circ. INAIL 45/2025, danno differenziale e casi particolari (tunnel carpale, mesotelioma, COVID, in itinere).",
    icon: Stethoscope,
    badge: "Nuovo",
    ready: true,
    lastModified: "2026-05-20",
    cluster: "danno",
    relatedSlugs: ["calcolo-danno-biologico", "calcolo-rivalutazione-monetaria"],
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
    .filter(
      (t): t is ToolEntry =>
        t !== undefined && t.ready && t.cluster !== tool.cluster
    );

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
