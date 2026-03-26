# Implementation Guide

Code patterns, component APIs, design system, and file checklist for building pages. This merges all implementation details into one reference.

---

## Table of Contents

1. File inventory (what to create and what to update)
2. Page component skeleton
3. ToolConfig object
4. Data file skeleton
5. FAQ data file skeleton
6. Calculator component skeleton
7. Shared component APIs
8. Design system (colors, typography, border radius)
9. Build and verification

---

## 1. File Inventory

### New Files to Create

| # | Path | Description |
|---|------|-------------|
| 1 | `src/data/{SLUG}/{slug}Data.ts` | Types, data arrays, sections, normativa refs, calculation function |
| 2 | `src/data/{SLUG}/faqData.ts` | FAQItem[] with categories and source URLs |
| 3 | `src/components/{SLUG}/Calcolatore.tsx` | Calculator (only if needed) |
| 4 | `src/app/{SLUG}/page.tsx` | Server component with Metadata, ToolConfig, JSON-LD, content |

### Existing Files to Modify

| # | Path | Change |
|---|------|--------|
| 5 | `src/data/toolRegistry.ts` | Add new `ToolEntry` — this auto-populates Navbar, Footer, homepage, sitemap |
| 6 | `src/app/layout.tsx` | Update description only if site scope changes |
| 7 | `src/lib/schema.tsx` | Add new schema generators if needed (HowTo, WebApplication, etc.) |

**Note**: Navbar, SiteFooter, homepage (`app/page.tsx`), and sitemap all consume `TOOLS` from `src/data/toolRegistry.ts`. You only need to add one entry there — no other navigation files need editing.

### Shared Infrastructure (use, don't duplicate)

| Resource | Path | What it provides |
|----------|------|------------------|
| Tool Registry | `src/data/toolRegistry.ts` | `TOOLS` array — single source for all tool metadata |
| Shared Types | `src/types/tool.ts` | `ToolConfig`, `ToolSection`, `NormativaRiferimento`, `CircolareMinisteriale` |
| Formatting Utils | `src/lib/utils.ts` | `formatEur()`, `formatPct()`, `formatDate()`, `cn()` |
| Schema Generators | `src/lib/schema.tsx` | `breadcrumbSchema`, `articleSchema`, `faqPageSchema`, `webApplicationSchema`, `howToSchema`, `JsonLd` |

---

## 2. Page Component Skeleton

`src/app/{SLUG}/page.tsx` — **Server component** (no `"use client"`):

```tsx
import { IconName, BookOpen, HelpCircle } from "lucide-react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { LegalTable } from "@/components/shared/LegalTable";
import { NormativaQuote } from "@/components/shared/NormativaQuote";
import { InlineNormLink } from "@/components/shared/InlineNormLink";
import { FAQ } from "@/components/shared/FAQ";
import { AlertBox } from "@/components/shared/AlertBox";
import { BulletList } from "@/components/shared/BulletList";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";
import { CircolariTable } from "@/components/shared/CircolariTable";
// import Calcolatore from "@/components/{SLUG}/Calcolatore"; // if needed
import { sections, /* data arrays */ } from "@/data/{SLUG}/{slug}Data";
import { faqData } from "@/data/{SLUG}/faqData";
import { JsonLd, breadcrumbSchema, faqPageSchema, articleSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "{Title — 50-60 chars with primary keyword and year}",
  description: "{Meta description — 140-160 chars}",
  alternates: { canonical: "/{SLUG}" },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/{SLUG}",
    title: "{OG Title}",
    description: "{OG Description}",
    images: [{ url: HERO_IMG, width: 1920, height: 1072, alt: "{Alt}" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "{Twitter Title}",
    description: "{Twitter Description}",
  },
};

const toolConfig: ToolConfig = {
  slug: "{SLUG}",
  title: "{Full Title with Year}",
  shortTitle: "{Short Label for Nav}",
  icon: IconName,
  updatedDate: "Aggiornato al {YEAR}",
  heroImage: HERO_IMG,
  heroEyebrow: "{Subtitle above H1}",
  heroTitle: "{Page H1 — include primary keyword}",
  heroDescription: "{150-200 char description with primary + secondary keywords}",
  heroReference: "{Primary legal reference — e.g. D.P.R. 115/2002}",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "{Data source reference with dates}.",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    // add relevant sources
  ],
};

export default function {PageName}Page() {
  return (
    <ToolLayout config={toolConfig}>
      {/* JSON-LD: BreadcrumbList */}
      <JsonLd data={breadcrumbSchema([
        { name: "Strumenti Legali Gratuiti", path: "/" },
        { name: "{Page Title}", path: "/{SLUG}" },
      ])} />

      {/* JSON-LD: Article */}
      <JsonLd data={articleSchema({
        headline: "{Full headline}",
        description: "{Full description}",
        path: "/{SLUG}",
        datePublished: "{YYYY-MM-DD}",
        dateModified: "{YYYY-MM-DD}",
        image: HERO_IMG,
        sections: [/* section names matching content */],
      })} />

      {/* JSON-LD: FAQPage */}
      <JsonLd data={faqPageSchema(faqData)} />

      {/* JSON-LD: Additional schemas as needed (HowTo, WebApplication, etc.) */}
      {/* See references/schema-enrichment.md */}

      {/* Calculator (if applicable) */}
      {/* <Calcolatore /> */}

      {/* Content sections — each with SectionTitle, prose, tables, alerts */}
      <SectionTitle id="{section-id}" icon={BookOpen} title="{Section H2}" subtitle="{Optional}" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          {/* Rich content with InlineNormLink, NormativaQuote, AlertBox, etc. */}
        </p>
      </div>

      {/* FAQ — always second-to-last */}
      <SectionTitle id="faq" icon={HelpCircle} title="Domande Frequenti (FAQ)" subtitle="{Subtitle}" />
      <FAQ items={faqData} />

      {/* Normativa — always last */}
      <SectionTitle id="normativa" icon={BookOpen} title="Normativa di Riferimento" />
      <NormativaRefTable items={normativaRiferimento} />
      {/* Optional: CircolariTable */}
    </ToolLayout>
  );
}
```

---

## 3. ToolConfig Object

Every page defines a `toolConfig` matching the `ToolConfig` interface from `@/types/tool`:

```tsx
const toolConfig: ToolConfig = {
  slug: string;           // URL path segment
  title: string;          // Full title with year
  shortTitle: string;     // Short label for nav
  icon: LucideIcon;       // Icon from lucide-react
  updatedDate: string;    // "Aggiornato al 2026"
  heroImage: string;      // CDN URL for hero background
  heroEyebrow: string;    // Small text above H1
  heroTitle: string;      // The H1 — must contain primary keyword
  heroDescription: string; // 150-200 chars
  heroReference: string;  // Primary legal reference
  sections: Section[];    // Sidebar nav items
  disclaimerLines: string[];
  sources: { label: string; url: string }[];
};
```

---

## 4. Data File Skeleton

`src/data/{SLUG}/{slug}Data.ts`:

```tsx
// Types specific to this tool
export interface {DataType} {
  // fields
}

// Data arrays
export const {dataArray}: {DataType}[] = [
  // populated from Phase 3 research
];

// Calculation function (if page has a calculator)
export function calcola{Name}(/* params */): {ResultType} {
  // calculation logic — every number must trace to a specific article
}

// Normativa references
export const normativaRiferimento = [
  { norma: "D.P.R. ...", descrizione: "...", url: "https://www.normattiva.it/..." },
];

// Optional: circolari
export const circolariMinisteriali = [
  { circolare: "Circ. Min. ...", descrizione: "...", url: "..." },
];

// Sections for sidebar navigation — order MUST match page content
export const sections = [
  { id: "calcolatore", label: "Calcolatore" }, // only if has calculator
  { id: "{section-id}", label: "{Nav Label}" },
  // ...
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];
```

---

## 5. FAQ Data File Skeleton

`src/data/{SLUG}/faqData.ts`:

```tsx
import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  {
    categoria: "{Category Name}",
    domanda: "{Question — often from PAA}",
    risposta: "{Comprehensive answer — 2-4 sentences with specifics}",
    fonti: [
      { label: "{Source Label}", url: "{URL}" },
    ],
  },
  // 15-25 items across 4-6 categories
];
```

---

## 6. Calculator Component Skeleton

`src/components/{SLUG}/Calcolatore.tsx` — only if Phase 2 determined it's needed:

```tsx
"use client";

import { useState } from "react";
// Import calculation function from data file

export default function Calcolatore() {
  // State for form inputs
  // Calculation logic
  // Result display with Italian number formatting

  return (
    <div id="calcolatore" className="scroll-mt-24 mb-8">
      {/* Calculator UI using shadcn/ui components */}
      {/* Use Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }) */}
    </div>
  );
}
```

---

## 7. Shared Component APIs

### ToolLayout
```tsx
<ToolLayout config={toolConfig: ToolConfig}>{children}</ToolLayout>
```
Wraps entire page. Provides hero, sidebar nav, footer.

### SectionTitle
```tsx
<SectionTitle id="section-id" icon={LucideIcon} title="Title" subtitle="Optional" />
```
H2 header with icon, gold separator, and scroll anchor. `id` must match `sections` array.

### LegalTable
```tsx
<LegalTable headers={["Col1", "Col2"]} rows={[["cell", 100]]} className="mb-4" />
```
Navy-header table. Numbers are auto-formatted as EUR.

### NormativaQuote
```tsx
<NormativaQuote url="https://normattiva.it/...">
  Art. 1: "Quoted legislative text"
</NormativaQuote>
```
Monospace blockquote with gold left border.

### InlineNormLink
```tsx
<InlineNormLink text="D.P.R. 115/2002" url="https://normattiva.it/..." />
```
Inline link with external icon. Use for EVERY law reference in text.

### FAQ
```tsx
<FAQ items={faqData: FAQItem[]} />
```
Accordion FAQ with category filter pills.

### AlertBox
```tsx
<AlertBox variant="warning" | "info" | "success" title="Optional">
  <p>Content</p>
</AlertBox>
```
- **warning**: gotchas, sanctions, deadlines
- **info**: nuances, edge cases, clarifications
- **success**: recent positive changes, new laws, improvements

### BulletList
```tsx
<BulletList items={["Item 1", "Item 2"]} />
```
Gold-dot unordered list.

### FeatureGrid
```tsx
<FeatureGrid items={[{ title: "Title", desc: "Description" }]} />
```
2-column responsive grid of info cards.

### NormativaRefTable
```tsx
<NormativaRefTable items={[{ norma: "...", descrizione: "...", url: "..." }]} />
```

### CircolariTable
```tsx
<CircolariTable items={[{ circolare: "...", descrizione: "...", url: "..." }]} />
```

### SectionBanner (optional — only if images available)
```tsx
<SectionBanner image="url" alt="text" text="Overlay text" />
```

---

## 8. Design System

### Colors (OKLch — use inline styles)

| Token | Value | Usage |
|-------|-------|-------|
| Navy (primary) | `oklch(0.25 0.04 250)` | Headings, dark backgrounds |
| Gold (accent) | `oklch(0.75 0.10 85)` | Icons, decorative elements |
| Cream (background) | `oklch(0.98 0.005 85)` | Page background |
| Link color | `oklch(0.45 0.12 250)` | Inline links |
| Link hover | `oklch(0.35 0.15 250)` | Link hover states |

### Typography

| Element | Font | Classes |
|---------|------|---------|
| H2 (SectionTitle) | DM Serif Display | `text-2xl md:text-3xl text-[oklch(0.25_0.04_250)]` |
| H3 | DM Serif Display | `text-xl text-[oklch(0.25_0.04_250)]` |
| Body | Source Sans 3 | `text-base leading-relaxed` |
| Monospace amounts | JetBrains Mono | `font-mono` |

### Border Radius

**Always use inline `style` — never Tailwind `rounded-*`:**
```tsx
style={{ borderRadius: "0.375rem" }}  // small (cards, buttons)
style={{ borderRadius: "0.5rem" }}    // medium (banners)
```

### External Links (non-Normattiva)
```tsx
<a href="url" target="_blank" rel="noopener noreferrer"
   className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
  Link text
</a>
```
For Normattiva links, always use `<InlineNormLink>` instead.

### Currency Formatting
```tsx
const formatEur = (n: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(n);
```

---

## 9. Build and Verification

```bash
# From website/freetools/ directory:
npm run build    # Type check + production build — MUST pass
npm run dev      # Start dev server for manual testing
npm run lint     # ESLint check
```

### Pre-commit Checklist

- [ ] All section IDs in `sections` array match `<SectionTitle id="">` in page
- [ ] Meta title: 50-60 chars with primary keyword
- [ ] Meta description: 140-160 chars
- [ ] Canonical URL set
- [ ] OG tags with `locale: "it_IT"`
- [ ] All JSON-LD schemas present and valid
- [ ] 2000+ words of editorial content (match competitor depth)
- [ ] 15-25 FAQ items with sources
- [ ] All InlineNormLinks have valid URLs
- [ ] Navbar, SiteFooter, homepage, sitemap updated
- [ ] `npm run build` passes with zero errors
