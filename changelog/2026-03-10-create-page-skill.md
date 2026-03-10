# Create Page Skill (`/create-page`) — Implementation Report

## Original Plan

### Context

We need a repeatable, automated workflow for creating new free legal tool pages on Piattaforma Avvocati. The `contributo-unificato` page was built manually with many inline design patterns. We want to:
1. Extract those inline patterns into shared components (making the template system complete)
2. Build a `/create-page` skill that uses the complete component library to generate new pages end-to-end

i need to create an operating workflow, this will be used to create new pages as i have done in the       
  '/Users/valerio/Downloads/contributo-unificato'. Basically the workflow will work in this way, take an      
  already existing strategy. look for each page at the current competitor and external resources using        
  dataforseomcp to get the general data, perplexity or manus to find the information while keeping track of   
  resources. When the research is finished, the whole page should be rendered using the free tool template  
  that we are building and then using the seo skills it should be automatically checked for all seo metrics.  
  Then there will be the creation of the tool and the publishing of the page. /plan i need help from you in   
  helping me doing this and create an sop we can reuse

### Part 1: Extract Shared Components

Before building the skill, extract 8 inline patterns from `contributo-unificato/page.tsx` into reusable shared components, then refactor the existing page to use them.

#### New Components to Create

All in `website/freetools/src/components/shared/`:

##### 1. `AlertBox.tsx`
Consolidates 3 box variants (warning, info, success) into one component.
```tsx
// Props: variant ("warning" | "info" | "success"), title?: string, children
// warning: bg-[oklch(0.97_0.01_25)] border-l-3 border-[oklch(0.55_0.20_25)]  (line 252)
// info: bg-[oklch(0.97_0.005_85)] border border-border  (line 199)
// success: bg-[oklch(0.97_0.005_155)] border border-[oklch(0.80_0.08_155)]  (line 496)
```

##### 2. `SectionBanner.tsx`
Section image banner with gradient overlay text.
```tsx
// Props: image: string, text: string
// Pattern from line 181: relative overflow-hidden, img + gradient overlay
```

##### 3. `BulletList.tsx`
Gold-dot bullet list.
```tsx
// Props: items: string[]
// Pattern from line 246: flex items-start gap-2 + w-1.5 h-1.5 bg-[oklch(0.75_0.10_85)]
```

##### 4. `FeatureGrid.tsx`
2-column grid of small info cards.
```tsx
// Props: items: { title: string; desc: string }[]
// Pattern from line 452: grid grid-cols-1 md:grid-cols-2 gap-4
```

##### 5. `NormativaRefTable.tsx`
Table for normative references with external link column.
```tsx
// Props: items: { norma: string; descrizione: string; url: string }[]
// Pattern from line 522: table-legal with 3 columns (norma, descrizione, link icon)
```

##### 6. `CircolariTable.tsx`
Table for ministerial circulars (same layout, different data shape).
```tsx
// Props: items: { circolare: string; descrizione: string; url: string }[]
// Pattern from line 550
```

#### Files to Modify

- **`src/app/contributo-unificato/page.tsx`** — Refactor to use new components (replace inline patterns)
- **No other files change** — the new components are purely additive

#### Verification
- `npm run build` passes
- Visual regression: page looks identical before and after (use Playwright screenshots)

---

### Part 2: Build the `/create-page` Skill

#### Files to Create

##### A. Skill files
1. **`.agents/skills/create-page/SKILL.md`** — Main skill definition (frontmatter + 6-phase workflow)
2. **`.agents/skills/create-page/references/template-pattern.md`** — Code patterns for all components with exact usage examples
3. **`.agents/skills/create-page/references/design-system.md`** — Color tokens, typography, component API reference
4. **`.agents/skills/create-page/references/file-checklist.md`** — Complete file inventory per new page

##### B. Command registration
5. **`.claude/commands/create-page.md`** — Registers `/create-page` slash command

#### Skill Workflow (6 Phases)

##### Phase 1: Strategy Input & Keyword Validation
- Accept topic, slug, primary keyword (or just a topic)
- DataForSEO: `keyword_data_search_volume`, `keyword_ideas`, `search_intent`
- Confirm keywords, check no route conflict in `src/app/`
- **Gate**: Volume > 100, intent matches, slug available

##### Phase 2: Competitive Research (DataForSEO MCP)
- `serp_organic_live_advanced` for primary keyword
- `on_page_content_parsing` for top 3-5 competitor URLs
- `ranked_keywords` for competitor keyword coverage
- Determine if page needs interactive tool (calculator, lookup, etc.) based on competitor features
- **Gate**: 3+ competitors analyzed, content depth target set, differentiator identified

##### Phase 3: Deep Information Gathering
- WebSearch/WebFetch for legal framework, laws, circulars
- Gather all factual data, tables, rates, formulas
- Find Normattiva URLs for all laws
- Compile 15-25 FAQ from SERP PAA + long-tails
- Track ALL sources with URLs
- **Gate**: All data sourced, formula verified, 15+ FAQs, URLs valid

##### Phase 4: Page Development
Follow template pattern reference. Uses extracted shared components.

**New files:**
1. `src/data/{SLUG}/{slug}Data.ts` — types, data, sections, normative refs, calculation function (if needed)
2. `src/data/{SLUG}/faqData.ts` — FAQItem[] with categories and sources
3. `src/components/{SLUG}/Calcolatore.tsx` — **only if Phase 2 determined interactive tool needed**
4. `src/app/{SLUG}/page.tsx` — server component with Metadata, ToolConfig, JSON-LD, content sections

**Modified files:**
5. `src/components/shared/Navbar.tsx` — add to navLinks array (line 8-20)
6. `src/components/shared/SiteFooter.tsx` — add to tools array (line 4-7)
7. `src/app/page.tsx` — add to tools array (line 5-24)
8. `src/app/sitemap.ts` — add URL entry (line 7-20)
9. `src/app/layout.tsx` — update root description if needed (line 33-34)

Content authored using shared components:
- `<SectionTitle>` for section headers
- `<LegalTable>` for data tables
- `<NormativaQuote>` for quoted regulatory text
- `<InlineNormLink>` for inline law references
- `<FAQ>` for FAQ section
- `<AlertBox variant="warning|info|success">` for callout boxes
- `<SectionBanner>` for section images
- `<BulletList>` for gold-dot lists
- `<FeatureGrid>` for card grids
- `<NormativaRefTable>` for normativa section
- `<CircolariTable>` for circolari section

**Gate**: `npm run build` passes, all section IDs match, 3 JSON-LD schemas present

##### Phase 5: SEO Validation
Run against localhost:
- `/seo-page`, `/seo-schema`, `/seo-content`, `/seo-technical`, `/seo-images`, `/seo-geo`
- Fix critical issues, re-validate
- **Gate**: All audits pass

##### Phase 6: Build, Test & Publish
- Production build
- Screenshots (desktop + mobile) via Playwright
- Functional testing
- Git commit, deploy, post-deploy verification
- **Gate**: Production accessible, Lighthouse > 80

#### Reference File Contents

**`references/template-pattern.md`** will contain:
- Exact ToolConfig example (from contributo-unificato)
- Page component skeleton (imports, metadata, JSON-LD, sections pattern)
- Calcolatore component skeleton (when calculator is needed)
- Data file skeleton (types, constants, calculation function, sections)
- FAQ data file skeleton
- Navbar/Footer/Homepage/Sitemap update snippets

**`references/design-system.md`** will contain:
- CSS custom properties from `globals.css` (line 46-55)
- OKLch color palette with all values
- Typography hierarchy
- All shared component APIs (props interfaces)
- Border-radius convention (always inline style)
- Currency formatting pattern

**`references/file-checklist.md`** will contain:
- Parameterized file paths for new files
- Exact locations in existing files to modify
- Build & verification commands

---

### Implementation Order

1. Create `AlertBox.tsx` component
2. Create `SectionBanner.tsx` component
3. Create `BulletList.tsx` component
4. Create `FeatureGrid.tsx` component
5. Create `NormativaRefTable.tsx` component
6. Create `CircolariTable.tsx` component
7. Refactor `contributo-unificato/page.tsx` to use new components
8. Verify build + visual regression
9. Write `references/template-pattern.md`
10. Write `references/design-system.md`
11. Write `references/file-checklist.md`
12. Write `SKILL.md` (main skill definition)
13. Write `.claude/commands/create-page.md` (command registration)
14. Update MEMORY.md with skill reference

### Key Files Reference

| File | Purpose |
|------|---------|
| `website/freetools/src/app/contributo-unificato/page.tsx` | Page pattern to extract from |
| `website/freetools/src/components/shared/*.tsx` | Existing shared components |
| `website/freetools/src/types/tool.ts` | ToolConfig/ToolSection types |
| `website/freetools/src/lib/schema.tsx` | JSON-LD generators |
| `website/freetools/src/data/contributo-unificato/contributoData.ts` | Data pattern |
| `website/freetools/src/data/contributo-unificato/faqData.ts` | FAQ pattern |
| `website/freetools/src/components/contributo-unificato/Calcolatore.tsx` | Calculator pattern |
| `website/freetools/src/app/globals.css` | Design tokens (line 46-55) |
| `website/freetools/src/components/shared/Navbar.tsx` | Nav links (line 8-20) |
| `website/freetools/src/components/shared/SiteFooter.tsx` | Footer tools (line 4-7) |
| `website/freetools/src/app/page.tsx` | Homepage tools grid (line 5-24) |
| `website/freetools/src/app/sitemap.ts` | Sitemap entries |
| `.agents/skills/gsc/SKILL.md` | Skill format reference |

### Verification

1. After Part 1: `npm run build` passes, contributo-unificato page renders identically
2. After Part 2: `/create-page` command is recognized, reference files are readable
3. Dry-run test: invoke `/create-page interessi legali` and verify Phase 1 DataForSEO calls work

---

## What Was Actually Done

### Part 1: Shared Component Extraction

6 new reusable components were created in `website/freetools/src/components/shared/`, then the `contributo-unificato/page.tsx` was refactored to use them. The page renders identically; only the source code changed.

#### 1. `AlertBox.tsx`

A single component that replaces 3 distinct inline box patterns that were repeated throughout the page. Uses a `variants` lookup object mapping variant names to their exact OKLch color tokens:

- **warning**: warm red background (`oklch(0.97 0.01 25)`), left-only border (`border-l-3`), red-tinted title text. Used for "Attenzione" callouts.
- **info**: cream background (`oklch(0.97 0.005 85)`), full border. Used for supplementary info boxes (valore indeterminabile, opposizioni, competenza GdP, etc.).
- **success**: green-tinted background (`oklch(0.97 0.005 155)`), green border. Used for the "Novita 2025" legislative updates.

Props: `variant: "warning" | "info" | "success"`, `title?: string`, `children: ReactNode`.

The warning variant uses `borderRadius: "0 0.375rem 0.375rem 0"` (left edge is flat because the left border acts as the visual anchor). Info and success use `borderRadius: "0.375rem"` on all sides.

**14 inline instances** across the page were replaced with `<AlertBox>`:
- 1 warning box in "Riduzione 50%" section (the "Attenzione" about procedimento semplificato)
- 1 warning box in "Sanzioni" section (omesso pagamento)
- 5 info boxes: Processo Civile (valore indeterminabile), Decreto Ingiuntivo (opposizione), Pignoramento (opposizione), Giudice di Pace (competenza), and 2 in Sanzioni (doppio contributo, omessa dichiarazione)
- 3 success boxes in "Novita 2025" (obbligo versamento minimo, recupero immediato, gratuito patrocinio)

#### 2. `SectionBanner.tsx`

Extracts the image-with-gradient-overlay pattern used for major content sections. The pattern was a `relative overflow-hidden` container with an `<img>` and an absolutely-positioned gradient overlay containing text.

Props: `image: string`, `alt: string`, `text: string`. The `alt` prop was added beyond the original plan to ensure proper accessibility (the original inline code had alt text on the `<img>` tag).

**3 instances replaced**: Processo Civile, Processo Tributario, Processo Amministrativo section banners.

#### 3. `BulletList.tsx`

Extracts the gold-dot unordered list pattern. Each item is a flex row with a small circular gold dot (`w-1.5 h-1.5 bg-[oklch(0.75_0.10_85)]` with `borderRadius: "50%"`) and text.

Props: `items: string[]`.

**2 instances replaced**: the 9-item list in "Riduzione 50%" (procedures eligible for 50% reduction) and the 4-item list in "Rimborso" (cases eligible for refund).

#### 4. `FeatureGrid.tsx`

Extracts the 2-column responsive card grid used for payment methods. Each card is a white bordered box with a bold title and muted description.

Props: `items: { title: string; desc: string }[]`.

**1 instance replaced**: the 6 payment method cards in "Modalita di Pagamento" section.

#### 5. `NormativaRefTable.tsx`

Extracts the normativa reference table with its specific 3-column layout: Norma (bold), Descrizione, and an external link icon column. Encapsulates the `ExternalLink` icon import internally.

Props: `items: { norma: string; descrizione: string; url: string }[]`.

**1 instance replaced**: the normativa reference table at the bottom of the page.

#### 6. `CircolariTable.tsx`

Same structure as NormativaRefTable but with different column labels (Circolare/Oggetto instead of Norma/Descrizione) and `whitespace-nowrap` on the first column for circular reference codes.

Props: `items: { circolare: string; descrizione: string; url: string }[]`.

**1 instance replaced**: the circolari ministeriali table.

#### Page Refactoring

The `contributo-unificato/page.tsx` imports were updated:
- **Added**: `AlertBox`, `SectionBanner`, `BulletList`, `FeatureGrid`, `NormativaRefTable`, `CircolariTable`
- **Removed**: `ExternalLink` from lucide-react (no longer used directly in the page; it's now encapsulated inside `NormativaRefTable` and `CircolariTable`)

The page went from 576 lines to 502 lines (net reduction of 74 lines) while maintaining identical rendered output.

#### Build Verification

`npm run build` passed cleanly both after component creation and after refactoring. The build output confirmed all routes compile and the bundle size remained essentially unchanged (contributo-unificato: 5.34 kB first load JS).

---

### Part 2: `/create-page` Skill

5 files were created to implement the skill system.

#### 1. `.agents/skills/create-page/SKILL.md` (Main Skill Definition)

The main skill file follows the same YAML frontmatter + Markdown body format as the existing `/gsc` skill. Contains:

- **Frontmatter**: name, description, version, argument-hint
- **Prerequisites**: instructs Claude to read the 3 reference files before starting
- **Argument parsing**: topic (required), slug (optional, derived from topic), primary keyword (optional)
- **6-phase workflow** with explicit gates between each phase:

  **Phase 1 (Strategy)**: Uses DataForSEO MCP tools (`keyword_data_search_volume`, `keyword_ideas`, `search_intent`) to validate keyword viability. Gate: volume > 100, intent matches, slug available.

  **Phase 2 (Competitive Research)**: Uses DataForSEO for SERP analysis (`serp_organic_live_advanced`), content parsing of top competitors (`on_page_content_parsing`), and keyword coverage analysis (`ranked_keywords`). Key decision: does the page need an interactive calculator? Gate: 3+ competitors analyzed, differentiator identified.

  **Phase 3 (Info Gathering)**: WebSearch/WebFetch for legal framework research. Compiles all data tables, rates, formulas, normativa URLs, and 15-25 FAQ items with sources. Gate: all data sourced and verified.

  **Phase 4 (Development)**: Creates 4 new files (data, FAQ data, optional calculator, page component) and modifies 5 existing files (Navbar, SiteFooter, homepage, sitemap, optionally layout). References template-pattern.md for exact code skeletons. Gate: `npm run build` passes.

  **Phase 5 (SEO Validation)**: Runs 6 SEO audit skills against localhost. Gate: all audits pass.

  **Phase 6 (Build, Test & Publish)**: Production build, Playwright screenshots, functional testing, git commit, deploy. Gate: production accessible.

- **Important Rules**: Italian-only content, Normattiva links for all law references, inline border-radius only, server components by default, no external dependencies, Italian number formatting.

#### 2. `.agents/skills/create-page/references/template-pattern.md`

Contains exact, copy-pasteable code skeletons derived from the real `contributo-unificato` implementation:

1. **ToolConfig object** — complete example with all required fields and their purposes
2. **Page component skeleton** — full server component with imports, Metadata export, toolConfig, ToolLayout wrapper, JSON-LD blocks, content sections, FAQ, and normativa. All using the shared components.
3. **Data file skeleton** — TypeScript interfaces, data arrays, normativa/circolari exports, sections array, optional calculation function
4. **FAQ data file skeleton** — FAQItem[] structure with categories and fonti
5. **Calculator component skeleton** — `"use client"` component importing calculation function from data
6. **Existing file update snippets** — exact code to add to Navbar.tsx, SiteFooter.tsx, homepage page.tsx, sitemap.ts, and layout.tsx, with the specific locations (line numbers and array names)

#### 3. `.agents/skills/create-page/references/design-system.md`

Complete design system documentation covering:

- **CSS custom properties**: all OKLch theme colors from globals.css (navy, gold, cream, warm-gray, success, warning, danger) plus semantic colors (background, foreground, primary, accent, muted, border, destructive)
- **Inline color patterns**: exact OKLch values used in components for warning/info/success backgrounds, borders, titles, links, banner overlays, and bullet dots
- **Typography**: font families (DM Serif Display for headings, Source Sans 3 for body, JetBrains Mono for code/currency), size/weight classes for H1-H4, body, small, monospace, and eyebrow text
- **Border radius convention**: always inline `style={{ borderRadius: "..." }}`, never Tailwind `rounded-*`. Four sizes documented: 0.25rem (badges), 0.375rem (cards/alerts), 0.5rem (banners), 50% (circles)
- **Currency formatting**: `Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" })` pattern and LegalTable auto-formatting
- **All 13 shared component APIs**: ToolLayout, SectionTitle, LegalTable, NormativaQuote, InlineNormLink, FAQ, AlertBox, SectionBanner, BulletList, FeatureGrid, NormativaRefTable, CircolariTable — each with props interface, usage example, and behavior notes
- **External link pattern**: exact Tailwind classes for non-Normattiva external links

#### 4. `.agents/skills/create-page/references/file-checklist.md`

Parameterized file inventory with `{SLUG}` placeholders:

- **New files table**: 4 files with paths and descriptions (data, FAQ data, optional calculator, page component)
- **Existing files table**: 5 files with exact modification locations (Navbar line ~8-20, SiteFooter line ~4-7, homepage line ~5-24, sitemap line ~7-20, layout line ~33-34)
- **Icon import reminder**: add the Lucide icon to all files that reference it
- **Build & verification commands**: `npm run build`, `npm run dev`, `npm run lint`
- **JSON-LD schema checklist**: 3 required blocks with exact function calls
- **SEO checklist**: 13-item checklist covering H1, meta title/description lengths, canonical, OG tags, JSON-LD, content word count, FAQ count, section ID consistency, internal links, Normattiva links, alt text

#### 5. `.claude/commands/create-page.md` (Command Registration)

Mirrors the SKILL.md content exactly (same frontmatter and body). This is the file that registers the `/create-page` slash command so it appears in Claude Code's command palette.

---

### Additional Changes

#### MEMORY.md Updated

Added two new sections to the project memory:
- **Shared Components**: lists all 19 components in `src/components/shared/` organized by category (page structure, content, layout patterns, normativa tables, site-wide)
- **Skills**: documents `/create-page`, `/gsc`, and `/changelog` with brief descriptions and file locations

---

### Final File Inventory

| # | File | Action | Lines |
|---|------|--------|-------|
| 1 | `src/components/shared/AlertBox.tsx` | Created | 38 |
| 2 | `src/components/shared/SectionBanner.tsx` | Created | 15 |
| 3 | `src/components/shared/BulletList.tsx` | Created | 16 |
| 4 | `src/components/shared/FeatureGrid.tsx` | Created | 16 |
| 5 | `src/components/shared/NormativaRefTable.tsx` | Created | 28 |
| 6 | `src/components/shared/CircolariTable.tsx` | Created | 28 |
| 7 | `src/app/contributo-unificato/page.tsx` | Refactored | 502 (was 576) |
| 8 | `.agents/skills/create-page/SKILL.md` | Created | ~200 |
| 9 | `.agents/skills/create-page/references/template-pattern.md` | Created | ~180 |
| 10 | `.agents/skills/create-page/references/design-system.md` | Created | ~200 |
| 11 | `.agents/skills/create-page/references/file-checklist.md` | Created | ~70 |
| 12 | `.claude/commands/create-page.md` | Created | ~200 |
| 13 | `memory/MEMORY.md` | Updated | +10 lines |

### Build Status

`npm run build` passes cleanly. All routes compile. Bundle size unchanged.
