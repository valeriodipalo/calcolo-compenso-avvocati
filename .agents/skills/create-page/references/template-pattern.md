# Template Pattern Reference

Exact code patterns for creating new tool pages. Copy and adapt these skeletons.

---

## 1. ToolConfig Object

Every page defines a `toolConfig` matching the `ToolConfig` interface:

```tsx
import type { ToolConfig } from "@/types/tool";

const toolConfig: ToolConfig = {
  slug: "{SLUG}",
  title: "{Full Title with Year}",
  shortTitle: "{Short Label for Nav}",
  icon: Scale, // LucideIcon
  updatedDate: "Aggiornato al {YEAR}",
  heroImage: "{CDN_URL}",
  heroEyebrow: "{Subtitle above H1}",
  heroTitle: "{Page H1}",
  heroDescription: "{150-200 char description}",
  heroReference: "{Primary legal reference — e.g. D.P.R. 115/2002}",
  sections, // imported from data file
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "{Data source reference with dates}.",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    // add relevant sources
  ],
};
```

---

## 2. Page Component Skeleton (Server Component)

```tsx
import { IconName, BookOpen, HelpCircle, /* ... */ } from "lucide-react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { LegalTable } from "@/components/shared/LegalTable";
import { NormativaQuote } from "@/components/shared/NormativaQuote";
import { InlineNormLink } from "@/components/shared/InlineNormLink";
import { FAQ } from "@/components/shared/FAQ";
import { AlertBox } from "@/components/shared/AlertBox";
import { SectionBanner } from "@/components/shared/SectionBanner";
import { BulletList } from "@/components/shared/BulletList";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";
import { CircolariTable } from "@/components/shared/CircolariTable";
// Import data
import { sections, /* data arrays */ } from "@/data/{SLUG}/{slug}Data";
import { faqData } from "@/data/{SLUG}/faqData";
// Import calculator only if page has interactive tool
// import Calcolatore from "@/components/{SLUG}/Calcolatore";
import { JsonLd, breadcrumbSchema, faqPageSchema, articleSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "{Title — 50-60 chars}",
  description: "{Meta description — 140-160 chars}",
  alternates: { canonical: "/{SLUG}" },
  openGraph: {
    type: "article",
    title: "{OG Title}",
    description: "{OG Description}",
    images: [{ url: "{HERO_IMG_URL}", width: 1920, height: 1072, alt: "{Alt}" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "{Twitter Title}",
    description: "{Twitter Description}",
  },
};

// ... toolConfig ...

export default function {PageName}Page() {
  return (
    <ToolLayout config={toolConfig}>
      {/* 1. BreadcrumbList */}
      <JsonLd data={breadcrumbSchema([
        { name: "Strumenti Legali Gratuiti", path: "/" },
        { name: "{Page Title}", path: "/{SLUG}" },
      ])} />

      {/* 2. Article */}
      <JsonLd data={articleSchema({
        headline: "{Full headline}",
        description: "{Full description}",
        path: "/{SLUG}",
        datePublished: "{YYYY-MM-DD}",
        dateModified: "{YYYY-MM-DD}",
        image: HERO_IMG,
        sections: [/* section names */],
      })} />

      {/* 3. FAQPage */}
      <JsonLd data={faqPageSchema(faqData)} />

      {/* Calculator (if applicable) */}
      {/* <Calcolatore /> */}

      {/* Content sections follow... */}
      <SectionTitle id="{section-id}" icon={BookOpen} title="{Section H2}" subtitle="{Optional subtitle}" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          {/* Prose content with InlineNormLink for law references */}
        </p>
      </div>

      {/* FAQ section — always last content section */}
      <SectionTitle id="faq" icon={HelpCircle} title="Domande Frequenti (FAQ)" subtitle="{Subtitle}" />
      <FAQ items={faqData} />

      {/* Normativa — always final section */}
      <SectionTitle id="normativa" icon={BookOpen} title="Normativa di Riferimento" />
      <NormativaRefTable items={normativaRiferimento} />
      {/* Optional: CircolariTable */}
    </ToolLayout>
  );
}
```

---

## 3. Data File Skeleton

`src/data/{SLUG}/{slug}Data.ts`:

```tsx
// Types specific to this tool
export interface {DataType} {
  // fields
}

// Data arrays
export const {dataArray}: {DataType}[] = [
  // ...
];

// Calculation function (if page has a calculator)
export function calcola{Name}(/* params */): {ResultType} {
  // calculation logic
}

// Normativa references
export const normativaRiferimento = [
  { norma: "D.P.R. ...", descrizione: "...", url: "https://www.normattiva.it/..." },
];

// Optional: circolari
export const circolariMinisteriali = [
  { circolare: "Circ. Min. ...", descrizione: "...", url: "..." },
];

// Sections for sidebar navigation (order must match page content)
export const sections = [
  { id: "calcolatore", label: "Calcolatore" }, // only if has calculator
  { id: "{section-id}", label: "{Nav Label}" },
  // ...
  { id: "faq", label: "FAQ" },
  { id: "normativa", label: "Normativa" },
];
```

---

## 4. FAQ Data File Skeleton

`src/data/{SLUG}/faqData.ts`:

```tsx
import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  {
    categoria: "{Category Name}",
    domanda: "{Question}",
    risposta: "{Answer — plain text, can include unicode}",
    fonti: [
      { label: "{Source Label}", url: "{URL}" },
    ],
  },
  // 15-25 FAQ items across 4-6 categories
];
```

---

## 5. Calculator Component Skeleton (only if needed)

`src/components/{SLUG}/Calcolatore.tsx`:

```tsx
"use client";

import { useState } from "react";
// import calculation function from data file

export default function Calcolatore() {
  // State for form inputs
  // Calculation logic using imported function
  // Result display

  return (
    <div id="calcolatore" className="scroll-mt-24 mb-8">
      {/* Calculator UI using shadcn/ui components */}
    </div>
  );
}
```

---

## 6. Existing Files to Update

### Navbar.tsx — Add to navLinks array

```tsx
// In the navLinks array at the top of the file:
{
  href: "/{SLUG}",
  label: "{Short Title}",
  icon: {IconName},
},
```

### SiteFooter.tsx — Add to tools array

```tsx
// In the tools array:
{ href: "/{SLUG}", label: "{Short Title}", icon: {IconName} },
```

### Homepage page.tsx — Add to tools array

```tsx
// In the tools array:
{
  slug: "{SLUG}",
  title: "{Full Title}",
  description: "{Description for homepage card — 1-2 sentences}",
  icon: {IconName},
  badge: "Aggiornato {YEAR}",
  ready: true,
},
```

### sitemap.ts — Add URL entry

```tsx
// Add to the return array:
{
  url: `${baseUrl}/{SLUG}`,
  lastModified: now,
  changeFrequency: "monthly",
  priority: 1.0,
},
```

### layout.tsx — Update root description (only if needed)

Update the description in metadata to mention the new tool if appropriate.
