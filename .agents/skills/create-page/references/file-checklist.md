# File Checklist for New Page

Parameterized paths for each new tool page. Replace `{SLUG}` with the URL slug (e.g., `interessi-legali`).

---

## New Files to Create

| # | Path | Description |
|---|------|-------------|
| 1 | `src/data/{SLUG}/{slug}Data.ts` | Types, data arrays, sections, normativa refs, calculation function (if needed) |
| 2 | `src/data/{SLUG}/faqData.ts` | FAQItem[] with categories and source URLs |
| 3 | `src/components/{SLUG}/Calcolatore.tsx` | Interactive calculator component (**only if Phase 2 determined it's needed**) |
| 4 | `src/app/{SLUG}/page.tsx` | Server component with Metadata, ToolConfig, JSON-LD, all content sections |

## Existing Files to Modify

| # | Path | Location | Change |
|---|------|----------|--------|
| 5 | `src/components/shared/Navbar.tsx` | `navLinks` array (line ~8-20) | Add `{ href: "/{SLUG}", label: "{shortTitle}", icon: {Icon} }` |
| 6 | `src/components/shared/SiteFooter.tsx` | `tools` array (line ~4-7) | Add `{ href: "/{SLUG}", label: "{shortTitle}", icon: {Icon} }` |
| 7 | `src/app/page.tsx` | `tools` array (line ~5-24) | Add tool card object with slug, title, description, icon, badge, ready: true |
| 8 | `src/app/sitemap.ts` | Return array (line ~7-20) | Add `{ url: \`\${baseUrl}/{SLUG}\`, lastModified: now, changeFrequency: "monthly", priority: 1.0 }` |
| 9 | `src/app/layout.tsx` | Metadata description (line ~33-34) | Update root description to mention new tool (only if it changes the site scope) |

---

## Icon Import

Add the needed Lucide icon to the import in Navbar.tsx, SiteFooter.tsx, and page.tsx (homepage). Use the same icon as `toolConfig.icon`.

---

## Build & Verification Commands

```bash
# From website/freetools/ directory:

# 1. Type check + build
npm run build

# 2. Start dev server for manual testing
npm run dev

# 3. Lint check
npm run lint
```

---

## JSON-LD Schema Checklist

Every page must include exactly 3 JSON-LD blocks:

1. **BreadcrumbList** — `breadcrumbSchema([{ name: "Strumenti Legali Gratuiti", path: "/" }, { name: "{Title}", path: "/{SLUG}" }])`
2. **Article** — `articleSchema({ headline, description, path, datePublished, dateModified, image, sections })`
3. **FAQPage** — `faqPageSchema(faqData)`

---

## SEO Checklist

- [ ] Single H1 in hero (via ToolConfig.heroTitle)
- [ ] Meta title: 50-60 chars with primary keyword
- [ ] Meta description: 140-160 chars
- [ ] Canonical URL set via `alternates.canonical`
- [ ] OG tags with `og:locale: it_IT` (inherited from layout)
- [ ] 3 JSON-LD schemas (Breadcrumb, Article, FAQPage)
- [ ] 800-1500 words of editorial content below the tool
- [ ] 15-25 FAQ items with sources
- [ ] All section IDs match sidebar navigation
- [ ] Internal links to other tools where relevant
- [ ] External links to Normattiva for all law references
- [ ] Alt text on all images
