# Schema Enrichment Reference

Expanded JSON-LD structured data strategy for triggering rich results in Google. Goes beyond the basic 3 schemas (Breadcrumb, Article, FAQ) to maximize SERP visibility.

---

## Table of Contents

1. Currently available schemas in schema.tsx
2. Additional schemas to implement per page
3. Implementation patterns for each schema type
4. Rich result eligibility checklist
5. Testing and validation

---

## 1. Currently Available (in src/lib/schema.tsx)

| Schema | Function | Rich Result |
|--------|----------|-------------|
| WebSite | `websiteSchema()` | Sitelinks searchbox |
| Organization | `organizationSchema()` | Knowledge panel |
| WebPage | `webPageSchema()` | Generic page |
| BreadcrumbList | `breadcrumbSchema()` | Breadcrumb trail in SERP |
| FAQPage | `faqPageSchema()` | FAQ accordion in SERP |
| Article | `articleSchema()` | Article rich result |

These are the baseline — every page uses BreadcrumbList + Article + FAQPage.

---

## 2. Additional Schemas to Add Per Page

Evaluate each page and add ALL applicable schemas:

| Schema | When to Use | Rich Result Type |
|--------|-------------|-----------------|
| **HowTo** | Page explains a step-by-step process ("Come si calcola...") | Step-by-step snippet with numbered steps |
| **WebApplication** | Page has an interactive calculator/tool | Software app card |
| **Table** | Page has key data tables (fee brackets, rates) | Table rich snippet |
| **SoftwareApplication** | Calculator tools that function like mini-apps | App listing |
| **Speakable** | Key Q&A sections that could be read by voice assistants | Voice search |
| **ItemList** | Lists of procedures, exemptions, payment methods | List snippet |
| **GovernmentService** | Pages about government fees/procedures | Service card |
| **LegalService** | Pages about legal fees/professional services | Service card |

Not every page needs all of these. The rule: if the content naturally fits a schema type, add it.

---

## 3. Implementation Patterns

### HowTo Schema

Use when the page has a "Come si calcola" or "Come si paga" section with clear steps.

```tsx
// Add to src/lib/schema.tsx:
export function howToSchema(opts: {
  name: string;
  description: string;
  path: string;
  steps: { name: string; text: string; url?: string }[];
  totalTime?: string; // ISO 8601 duration, e.g., "PT5M"
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    ...(opts.totalTime && { totalTime: opts.totalTime }),
    step: opts.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
    })),
  };
}
```

**Usage in page:**
```tsx
<JsonLd data={howToSchema({
  name: "Come si calcola il contributo unificato",
  description: "Guida passo-passo per il calcolo del contributo unificato...",
  path: "/contributo-unificato",
  totalTime: "PT3M",
  steps: [
    { name: "Determina il tipo di processo", text: "Identifica se si tratta di processo civile, tributario o amministrativo." },
    { name: "Indica il valore della causa", text: "Calcola il valore della causa secondo gli articoli 10-15 c.p.c." },
    { name: "Trova lo scaglione", text: "Consulta la tabella degli scaglioni dell'art. 13 DPR 115/2002." },
    { name: "Applica eventuali maggiorazioni", text: "Verifica se si applicano aumenti per grado di giudizio o altre maggiorazioni." },
  ],
})} />
```

### WebApplication Schema

Use when the page has a functional calculator/tool.

```tsx
export function webApplicationSchema(opts: {
  name: string;
  description: string;
  path: string;
  applicationCategory: string;
  operatingSystem?: string;
  offers?: { price: string; priceCurrency: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    applicationCategory: opts.applicationCategory,
    operatingSystem: opts.operatingSystem || "All",
    browserRequirements: "Requires JavaScript",
    offers: opts.offers || {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    inLanguage: "it-IT",
    publisher: organizationSchema(),
  };
}
```

**Usage:**
```tsx
<JsonLd data={webApplicationSchema({
  name: "Calcolatore Contributo Unificato 2026",
  description: "Calcola l'importo del contributo unificato in base al valore della causa e al tipo di procedimento.",
  path: "/contributo-unificato",
  applicationCategory: "FinanceApplication",
})} />
```

### Table / Dataset Schema

Use for key reference tables (fee brackets, rate tables).

```tsx
export function tableSchema(opts: {
  name: string;
  description: string;
  path: string;
  columns: string[];
  rowCount: number;
  license?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    license: opts.license || "https://creativecommons.org/licenses/by/4.0/",
    distribution: {
      "@type": "DataDownload",
      contentUrl: `${SITE_URL}${opts.path}`,
      encodingFormat: "text/html",
    },
    variableMeasured: opts.columns.map(col => ({
      "@type": "PropertyValue",
      name: col,
    })),
    measurementTechnique: "Legislative source (Normattiva.it)",
  };
}
```

### Speakable Schema

Use for sections with clear Q&A content that voice assistants might read.

```tsx
export function speakableSchema(opts: {
  path: string;
  cssSelectors: string[]; // CSS selectors for speakable sections
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${SITE_URL}${opts.path}`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: opts.cssSelectors,
    },
  };
}
```

### ItemList Schema

Use for ordered lists of procedures, payment methods, etc.

```tsx
export function itemListSchema(opts: {
  name: string;
  path: string;
  items: { name: string; description?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: opts.name,
    url: `${SITE_URL}${opts.path}`,
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.description && { description: item.description }),
    })),
  };
}
```

---

## 4. Rich Result Eligibility Checklist

Before adding a schema, verify the page content actually supports it:

| Schema | Content Requirement |
|--------|-------------------|
| HowTo | Page has numbered steps explaining a process. Steps must be complete — not just "use the calculator" |
| WebApplication | Page has a functional, interactive tool (not just text) |
| FAQPage | Page has Q&A pairs. Google restricts this to authority/government-adjacent sites (our legal tools qualify) |
| Table/Dataset | Page has a structured data table with source attribution |
| Speakable | Page has clearly delineated sections suitable for TTS |
| ItemList | Page has an ordered or ranked list of items |

**Do NOT add schemas whose content requirements aren't met.** Google penalizes schema spam.

---

## 5. Testing and Validation

### During Development

After building the page, validate all JSON-LD:

1. **View page source** and extract each `<script type="application/ld+json">` block
2. **Check syntax**: valid JSON, correct `@context` and `@type`
3. **Check content**: all fields populated, no placeholder text, URLs resolve

### During SEO Validation (Phase 5)

The `/seo-schema` skill will:
- Detect all JSON-LD blocks on the page
- Validate against Schema.org specifications
- Check for Google-supported rich result eligibility
- Flag missing opportunities (e.g., "page has step-by-step content but no HowTo schema")

### Google Rich Results Test

After deployment, test with Google's Rich Results Test tool:
- URL: `https://search.google.com/test/rich-results`
- Must show all implemented schemas as eligible for rich results
- Fix any warnings or errors

---

## 6. Schema Decision Matrix

For each new page, go through this checklist:

- [ ] **BreadcrumbList** → Always YES
- [ ] **Article** → Always YES
- [ ] **FAQPage** → YES if 10+ FAQ items with sources
- [ ] **HowTo** → YES if page has "Come si calcola/Come si fa" content with clear steps
- [ ] **WebApplication** → YES if page has a calculator/tool
- [ ] **Dataset/Table** → YES if page has a primary reference table (fee brackets, rate tables)
- [ ] **Speakable** → YES if page has clear definition sections
- [ ] **ItemList** → YES if page has a significant ordered list (payment methods, exemptions)
