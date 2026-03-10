---
name: create-page
description: >-
  End-to-end creation of new free legal tool pages for Piattaforma Avvocati.
  Handles keyword research, competitive analysis, deep info gathering, page
  development with shared components, SEO validation, and deployment. Use when
  the user says "create page", "new tool page", "add a new tool", or
  "/create-page {topic}".
metadata:
  version: "1.0.0"
  argument-hint: "{topic} [slug] [primary-keyword]"
---

# Create Page

You are an expert Italian legal content strategist and Next.js developer. Create a complete, SEO-optimized tool page for Piattaforma Avvocati following the 6-phase workflow below.

## Prerequisites

Before starting, read these reference files for exact patterns and APIs:

1. **Read** `.agents/skills/create-page/references/template-pattern.md` — code skeletons for all files
2. **Read** `.agents/skills/create-page/references/design-system.md` — colors, typography, component APIs
3. **Read** `.agents/skills/create-page/references/file-checklist.md` — complete file inventory and verification steps

## Parsing Arguments

When triggered with `/create-page {args}`:
- First argument: **topic** (required) — e.g., "interessi legali", "termini processuali"
- Second argument: **slug** (optional) — URL slug, e.g., "interessi-legali". If omitted, derive from topic (lowercase, hyphens, no accents)
- Third argument: **primary keyword** (optional) — if omitted, determine in Phase 1

If no arguments provided, ask the user for the topic.

---

## Phase 1: Strategy Input & Keyword Validation

### Steps

1. **Confirm topic and slug** with the user
2. **Check slug availability**: verify `src/app/{SLUG}/` doesn't already exist
3. **Keyword research** using DataForSEO MCP tools:
   - `mcp__dfs-mcp__ai_optimization_keyword_data_search_volume` — get search volume for primary keyword and variants
   - `mcp__dfs-mcp__dataforseo_labs_google_keyword_ideas` — discover related keywords
   - `mcp__dfs-mcp__dataforseo_labs_search_intent` — verify search intent is informational/transactional
4. **Present keyword strategy** to user: primary keyword, secondary keywords (5-10), long-tail targets (10-15)

### Gate
- Primary keyword volume > 100/month
- Search intent matches (informational or transactional)
- Slug is available (no existing route conflict)
- User approves keyword strategy

---

## Phase 2: Competitive Research

### Steps

1. **SERP analysis**: `mcp__dfs-mcp__serp_organic_live_advanced` for primary keyword (location: Italy, language: Italian)
2. **Content parsing**: `mcp__dfs-mcp__on_page_content_parsing` for top 3-5 competitor URLs from SERP
3. **Keyword coverage**: `mcp__dfs-mcp__dataforseo_labs_google_ranked_keywords` for top competitor domains
4. **Determine page features**:
   - Does the page need an interactive calculator/lookup tool? (Check if competitors have one)
   - What data tables are needed?
   - What's the optimal content structure?
   - What differentiates our page?

### Gate
- 3+ competitors analyzed
- Content depth target set (word count, section count)
- Differentiator identified (e.g., more complete data, better calculator, clearer structure)
- Decision made: interactive tool needed? YES/NO

---

## Phase 3: Deep Information Gathering

### Steps

1. **Legal framework research** using Perplexity MCP tools:
   - `mcp__perplexity__perplexity_research` — deep investigation of the legal topic (laws, decrees, regulations, current rates, tables, formulas, thresholds). Use Italian-language queries for best results. This is the primary tool for comprehensive legal research — it returns multi-source findings with citations.
   - `mcp__perplexity__perplexity_search` — find specific Normattiva URLs, ministerial circular URLs, and recent legislative changes (last 2 years). Use `recency: "year"` to focus on recent updates.
   - `mcp__perplexity__perplexity_ask` — quick targeted questions for specific data points (e.g., "qual è il tasso di interesse legale 2026?", "importi contributo unificato aggiornati")
   - Gather: all relevant laws/decrees/regulations with Normattiva URLs, current rates/tables/formulas/thresholds, recent changes, ministerial circulars with URLs
2. **Data compilation**:
   - All data tables the page needs (rates, thresholds, categories)
   - Calculation formulas (if calculator needed)
   - Important dates and deadlines
   - Use `mcp__perplexity__perplexity_reason` if formulas or legal interpretations require step-by-step logical analysis
3. **FAQ compilation**: 15-25 questions from:
   - Use `mcp__perplexity__perplexity_search` to find "People Also Ask" and common questions for primary and secondary keywords
   - Long-tail keywords from Phase 1
   - Common practitioner questions
   - Each FAQ must have: domanda, risposta, categoria, fonti (with URLs)
4. **Source verification**: Ensure ALL normativa URLs are valid Normattiva links. Use `mcp__perplexity__perplexity_search` to cross-check any uncertain URLs.

### Gate
- All factual data sourced and verified
- Formulas verified against official sources
- 15+ FAQ items compiled with sources
- All Normattiva URLs valid
- All circulari URLs valid

---

## Phase 4: Page Development

Follow the template patterns from `references/template-pattern.md` exactly.

### Step 4.1: Create Data Files

Create `src/data/{SLUG}/{slug}Data.ts`:
- Define TypeScript interfaces for the data
- Export all data arrays (tables, rates, etc.)
- Export `normativaRiferimento` and optionally `circolariMinisteriali`
- Export `sections` array (sidebar navigation)
- If calculator needed: export the calculation function

Create `src/data/{SLUG}/faqData.ts`:
- Export `faqData: FAQItem[]` with 15-25 items
- Organize by category (4-6 categories)
- Include `fonti` with Normattiva/official URLs

### Step 4.2: Create Calculator (only if Phase 2 determined it's needed)

Create `src/components/{SLUG}/Calcolatore.tsx`:
- `"use client"` directive
- Import calculation function from data file
- Form inputs matching the tool's parameters
- Result display with Italian number formatting
- Mobile-responsive layout

### Step 4.3: Create Page Component

Create `src/app/{SLUG}/page.tsx`:
- Server component (no `"use client"`)
- Export `metadata: Metadata` with title, description, canonical, OG, Twitter
- Define `toolConfig: ToolConfig`
- Render `<ToolLayout config={toolConfig}>` with:
  - 3 JSON-LD blocks (BreadcrumbList, Article, FAQPage)
  - Calculator component (if applicable)
  - Content sections using shared components
  - FAQ section
  - Normativa section (NormativaRefTable + optional CircolariTable)

**Content guidelines:**
- 800-1500 words of editorial content
- Use `<SectionTitle>` for every section (IDs must match `sections` array)
- Use `<LegalTable>` for all data tables
- Use `<NormativaQuote>` for quoted regulatory text
- Use `<InlineNormLink>` for every law reference
- Use `<AlertBox variant="warning">` for important warnings
- Use `<AlertBox variant="info">` for supplementary info boxes
- Use `<AlertBox variant="success">` for positive highlights (new laws, improvements)
- Use `<SectionBanner>` for major section images (if images are available)
- Use `<BulletList>` for enumerated items
- Use `<FeatureGrid>` for feature/method cards
- All UI text in Italian
- All numbers formatted with Italian locale

### Step 4.4: Update Existing Files

See `references/file-checklist.md` for exact locations.

1. **Navbar.tsx**: Add to `navLinks` array (remove `disabled: true` flag from calcolo-compenso if it's next)
2. **SiteFooter.tsx**: Add to `tools` array
3. **Homepage page.tsx**: Add to `tools` array with `ready: true`
4. **sitemap.ts**: Add URL entry
5. **layout.tsx**: Update root description only if the new tool changes the site's scope

### Gate
- `npm run build` passes with zero errors
- All section IDs in `sections` array match actual `<SectionTitle id="">` in page
- 3 JSON-LD schemas present
- Meta title ≤ 60 chars, description 140-160 chars

---

## Phase 5: SEO Validation

Start the dev server and run SEO audits against localhost:

```bash
cd website/freetools && npm run dev &
```

Run these skill-based audits (invoke them as slash commands or directly):

1. `/seo-page` — Deep single-page analysis on `http://localhost:3000/{SLUG}`
2. `/seo-schema` — Validate JSON-LD structured data
3. `/seo-content` — Content quality and E-E-A-T analysis
4. `/seo-technical` — Technical SEO check
5. `/seo-images` — Image optimization (if images used)
6. `/seo-geo` — AI/GEO optimization check

### Fix any critical issues found, then re-validate.

### Gate
- All SEO audits pass (no critical issues)
- Schema validation: 3 valid JSON-LD blocks
- Content score: adequate E-E-A-T signals
- No technical SEO blockers

---

## Phase 6: Build, Test & Publish

### Steps

1. **Production build**: `npm run build` — must pass cleanly
2. **Screenshots**: Use Playwright MCP to capture:
   - Desktop screenshot (1440px width)
   - Mobile screenshot (375px width)
   - Save to `website/freetools/screenshots/{SLUG}/`
3. **Functional testing** (if calculator):
   - Test edge cases (min/max values, empty inputs)
   - Verify calculation results against known correct values
4. **Git commit**: Stage all new and modified files, commit with descriptive message
5. **Deploy**: If deployment process is configured, trigger it
6. **Post-deploy verification**: Check the live URL responds correctly

### Gate
- Production build passes
- Screenshots captured (desktop + mobile)
- Calculator tests pass (if applicable)
- Committed to git
- Live page accessible (if deployed)

---

## Important Rules

- **All content in Italian.** Never output English text in page content.
- **All law references link to Normattiva.** Use `<InlineNormLink>` for every mention.
- **No hardcoded colors.** Use the OKLch values from the design system, or use shared component props.
- **Border radius via inline style only.** Never use Tailwind `rounded-*` classes.
- **Server components by default.** Only use `"use client"` for the Calculator component.
- **No external dependencies.** All components are built-in. Don't add npm packages.
- **Data separate from presentation.** All data in `src/data/`, computation in `src/lib/` or data files.
- **Italian number formatting.** Use `Intl.NumberFormat("it-IT", ...)` for all numbers and currency.
