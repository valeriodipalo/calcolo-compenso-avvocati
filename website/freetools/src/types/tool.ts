import type { LucideIcon } from "lucide-react";

export interface ToolSection {
  id: string;
  label: string;
}

export interface ToolCluster {
  id: string;
  label: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  hubReady: boolean;
}

export interface NavGroup {
  id: string;
  label: string;
  clusterIds: string[];
}

export interface ToolConfig {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  updatedDate: string;
  heroImage: string;
  heroImageAlt: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroReference: string;
  sections: ToolSection[];
  disclaimerLines: string[];
  sources: { label: string; url: string }[];
}

export interface NormativaRiferimento {
  norma: string;
  descrizione: string;
  url: string;
}

export interface CircolareMinisteriale {
  circolare: string;
  descrizione: string;
  url: string;
}
