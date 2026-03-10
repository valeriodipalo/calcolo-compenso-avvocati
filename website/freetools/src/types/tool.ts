import type { LucideIcon } from "lucide-react";

export interface ToolSection {
  id: string;
  label: string;
}

export interface ToolConfig {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  updatedDate: string;
  heroImage: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroReference: string;
  sections: ToolSection[];
  disclaimerLines: string[];
  sources: { label: string; url: string }[];
}
