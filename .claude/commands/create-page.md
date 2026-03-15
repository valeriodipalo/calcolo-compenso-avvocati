---
name: create-page
description: >-
  End-to-end creation of SEO-optimized Italian legal tool pages for Piattaforma
  Avvocati. Starts from a reference competitor page, performs keyword research
  with DataForSEO (including People Also Ask), SERP competitor analysis, deep
  legal research via Perplexity, builds the complete Next.js page with expanded
  schema markup for rich results, then iteratively refines through SEO
  validation until publication-ready. Use when the user says "create page",
  "new tool page", "add a new tool", "new page", or "/create-page {topic}".
  Also use when the user provides a competitor URL and asks to build a page
  around that topic.
metadata:
  version: "2.0.0"
  argument-hint: "{topic} [reference-url] [slug]"
---

# Create Page

You are building a **complete, SEO-dominant Italian legal tool page** for Piattaforma Avvocati. The page must rank in the top 5 for its target keyword in Google Italy, maximize dwell time through interactive tools, and trigger rich results through expanded schema markup.

## Before You Start

Read these reference files — they contain exact patterns, APIs, and quality standards:

1. **`references/research-strategy.md`** — DataForSEO tool usage, SERP analysis method, PAA extraction
2. **`references/implementation-guide.md`** — code skeletons, component APIs, file checklist, design system
3. **`references/content-model.md`** — what "deep enough" content looks like, with examples from existing pages
4. **`references/schema-enrichment.md`** — all JSON-LD schema types for rich results, when to use each

## Parsing Arguments

When triggered with `/create-page {args}`:
- First argument: **topic** (required) — e.g., "interessi moratori", "diritti di copia"
- Second argument: **reference URL** (optional) — competitor page to analyze and beat
- Third argument: **slug** (optional) — if omitted, derive from topic (lowercase, hyphens, no accents)
- Optional flag: `--research <path>` — path to pre-existing research file (e.g., from Manus)

If no arguments provided, ask the user for the topic and a reference page URL.

---

## Phase 1: Keyword Strategy from Reference Page

The goal is to understand the keyword landscape around this topic by starting from a real page that already ranks.

### Steps

1. **Confirm topic, slug, and reference URL** with the user. If no reference URL was given, ask for one — even a competitor page on the same topic works.

2. **Check slug availability**: verify `website/freetools/src/app/{SLUG}/` doesn't already exist.

3. **Analyze reference page keywords**:
   - `mcp__dfs-mcp__dataforseo_labs_google_ranked_keywords` on the reference URL — get the top 50 keywords it ranks for, sorted by search volume. Use `location_name: "Italy"`, `language_code: "it"`.
   - This reveals the keyword universe around the topic.

4. **Expand keyword universe**:
   - Take the top 3-5 keywords from step 3 as seeds.
   - `mcp__dfs-mcp__dataforseo_labs_google_keyword_ideas` with those seeds — get 50 related keywords.
   - `mcp__dfs-mcp__dataforseo_labs_google_keyword_suggestions` on the primary keyword — get 30 long-tail suggestions.
   - `mcp__dfs-mcp__dataforseo_labs_search_intent` on the top 20 candidates — verify intent is informational or transactional.

5. **Assess difficulty**:
   - `mcp__dfs-mcp__dataforseo_labs_bulk_keyword_difficulty` on the top 30 keyword candidates.

6. **Collect People Also Ask** (critical for FAQ and content structure):
   - `mcp__dfs-mcp__serp_organic_live_advanced` for the primary keyword with `people_also_ask_click_depth: 3`, `location_name: "Italy"`, `language_code: "it"`, `depth: 20`.
   - Repeat for 2-3 secondary keywords with `people_also_ask_click_depth: 2`.
   - Collect ALL PAA questions — these become FAQ items and content section ideas.

7. **Save findings** to `analysis/{SLUG}/keyword-strategy.md`:
   - Primary keyword (highest volume + achievable difficulty)
   - Secondary keywords (10-15, sorted by volume)
   - Long-tail targets (15-20)
   - All PAA questions collected (grouped by theme)
   - Search intent classification for each

8. **Present to user** for approval before proceeding.

### Gate
- Primary keyword identified with volume and difficulty
- 10+ secondary keywords
- 15+ PAA questions collected
- User approved the keyword strategy

---

## Phase 2: SERP & Competitor Deep Analysis

The goal is to understand exactly what the top-ranking pages cover, so we can match and exceed them.

### Steps

1. **Full SERP analysis** (if not already done in Phase 1):
   - `mcp__dfs-mcp__serp_organic_live_advanced` for primary keyword — `depth: 30`, `location_name: "Italy"`, `language_code: "it"`.
   - Extract top 10 organic URLs.

2. **Parse competitor content**:
   - `mcp__dfs-mcp__on_page_content_parsing` for top 5 competitor URLs.
   - For each: extract headings structure, word count, tables present, FAQ presence, interactive tools.

3. **Competitor keyword coverage**:
   - `mcp__dfs-mcp__dataforseo_labs_google_ranked_keywords` for the top 3 competitor domains — `limit: 30`, filtered to keywords relevant to our topic.
   - This reveals keywords they rank for that we must also target.

4. **Build comparison matrix** and save to `analysis/{SLUG}/competitor-analysis.md`:

   ```
   | Feature                    | Comp. 1 | Comp. 2 | Comp. 3 | Our Page |
   |----------------------------|:-------:|:-------:|:-------:|:--------:|
   | Interactive calculator     |   ✅    |   ❌    |   ✅    |   ✅     |
   | Complete fee tables        |   ❌    |   ✅    |   ❌    |   ✅     |
   | FAQ section                |   ❌    |   ❌    |   ✅    |   ✅     |
   | Normativa source links     |   ❌    |   ❌    |   ❌    |   ✅     |
   | Schema markup              |   ❌    |   ❌    |   ❌    |   ✅     |
   | [add all relevant features]|         |         |         |          |
   ```

5. **Identify dwell-time opportunities**: based on what competitors have, recommend:
   - What calculator/tool should the page include?
   - If no competitors have an interactive tool, this is a major differentiator — propose one.
   - If the topic involves any calculation, lookup, comparison, or decision tree → build a tool.
   - Present the tool recommendation to the user.

6. **Define content sections** based on:
   - Union of all sections across top 5 competitors (we must cover everything they cover)
   - PAA questions that deserve their own section (not just FAQ)
   - Gaps that no competitor addresses

7. **Present competitor analysis and proposed page structure** to the user.

### Gate
- 5+ competitors analyzed
- Content comparison matrix saved
- Tool/calculator opportunity identified and user-approved
- Full section list defined
- All keyword gaps identified

---

## Phase 3: Legal Research

The goal is to gather every piece of factual data the page needs, with verified sources.

### Steps

If `--research <path>` was provided, read that file first and use it as the primary data source. Fill gaps with the steps below.

1. **Deep legal research** via Perplexity:
   - `mcp__perplexity__perplexity_research` — comprehensive investigation of the legal topic. Use Italian-language queries. Ask about: all relevant laws/decrees/regulations, current rates and tables, formulas, thresholds, exemptions, special cases, recent changes (last 2 years).
   - `mcp__perplexity__perplexity_search` with `recency: "year"` — find specific Normattiva URLs, ministerial circular URLs, recent legislative changes.
   - `mcp__perplexity__perplexity_ask` — quick targeted questions for specific data points (exact rates, dates, amounts).
   - `mcp__perplexity__perplexity_reason` — if formulas or legal interpretations require step-by-step logical analysis.

2. **Data compilation**:
   - All data tables the page needs (rates, thresholds, brackets, categories)
   - Calculation formulas (if calculator determined in Phase 2)
   - Important dates and deadlines
   - Exemptions and special cases
   - Recent legislative changes worth highlighting

3. **FAQ compilation** (15-25 items):
   - Start from PAA questions collected in Phase 1
   - Add questions from long-tail keywords
   - Add common practitioner questions discovered in research
   - Each FAQ must have: domanda, risposta, categoria, fonti (with URLs)
   - Organize by 4-6 categories

4. **Source verification**:
   - Every monetary amount must cite a specific article and comma
   - All Normattiva URLs must follow correct URN patterns
   - All circular URLs must be valid
   - Cross-check at least 3 key amounts against official legislative text

5. **Save everything** to `analysis/{SLUG}/research-brief.md`:
   - Laws and regulations section (with URLs)
   - Data tables section
   - Formulas section (if applicable)
   - FAQ section (all 15-25 items)
   - Recent changes section
   - Sources bibliography

### Gate
- All factual data sourced with article references
- Formulas verified
- 15+ FAQ items with categories and sources
- All Normattiva/circular URLs verified
- Research brief saved and readable

---

## Phase 4: Implementation

Read `references/implementation-guide.md` for exact code patterns. Follow the existing pages as the model — look at `src/app/contributo-unificato/page.tsx` and `src/app/calcolo-interessi-legali/page.tsx` for the exact style.

### Step 4.1: Create Data Files

Create `src/data/{SLUG}/{slug}Data.ts`:
- TypeScript interfaces for the data
- All data arrays (tables, rates, brackets)
- If calculator needed: export the calculation function
- Export `normativaRiferimento` and optionally `circolariMinisteriali`
- Export `sections` array (must match every SectionTitle id in the page)

Create `src/data/{SLUG}/faqData.ts`:
- Export `faqData: FAQItem[]` with 15-25 items
- 4-6 categories
- Include `fonti` with Normattiva/official URLs per answer

### Step 4.2: Create Calculator (if Phase 2 determined one is needed)

Create `src/components/{SLUG}/Calcolatore.tsx`:
- `"use client"` directive
- Import calculation function from data file
- Form inputs matching the tool's parameters
- Result display with Italian number formatting (`Intl.NumberFormat("it-IT", ...)`)
- Mobile-responsive layout
- The calculator should be genuinely useful — it's the main dwell-time driver

### Step 4.3: Create Page Component

Create `src/app/{SLUG}/page.tsx` — follow `references/implementation-guide.md` exactly for the skeleton.

**Content depth is critical.** Read `references/content-model.md` for examples. Each content section should:
- Open with a clear explanation paragraph citing the relevant law
- Include a data table (LegalTable) where applicable
- Add AlertBoxes for edge cases, warnings, recent changes
- Use InlineNormLink for EVERY law reference
- Use NormativaQuote for key legislative text
- Cross-reference related sections

**Schema markup — read `references/schema-enrichment.md`**:
- Always include: BreadcrumbList, Article, FAQPage
- Add HowTo if the page explains a calculation process
- Add WebApplication if the page has a calculator
- Add any other applicable schema types for rich results
- If a needed schema generator doesn't exist in `src/lib/schema.tsx`, create it

**Target content volume**: match or exceed the top competitor's word count (typically 2000-4000 words of editorial content, not counting tables and FAQ).

### Step 4.4: Update Existing Files

See `references/implementation-guide.md` for exact locations:
1. `src/components/shared/Navbar.tsx` — add to `navLinks` array
2. `src/components/shared/SiteFooter.tsx` — add to `tools` array
3. `src/app/page.tsx` (homepage) — add to `tools` array with `ready: true`
4. `src/app/sitemap.ts` — add URL entry
5. `src/app/layout.tsx` — update root description only if needed

### Step 4.5: Build Check

```bash
cd "website/freetools" && npm run build
```

Must pass with zero errors. Fix any issues before proceeding.

### Gate
- `npm run build` passes cleanly
- All section IDs in `sections` array match `<SectionTitle id="">` in page
- Calculator works correctly (if applicable)
- Content matches or exceeds competitor depth from Phase 2

---

## Phase 5: SEO Refinement Loop

This phase is iterative. The page is NOT ready until it passes SEO validation with no critical issues.

### Iteration 1: Run SEO Audits

Start the dev server:
```bash
cd "website/freetools" && npm run dev &
```

Run these SEO audits on `http://localhost:3000/{SLUG}`:

1. **`/seo-page`** — deep single-page analysis (on-page elements, meta tags, headings, content)
2. **`/seo-schema`** — validate ALL JSON-LD blocks (not just the basic 3 — check HowTo, WebApplication, etc.)
3. **`/seo-content`** — E-E-A-T signals, content depth, readability, thin content detection

Collect all findings.

### Iteration 2: Refine

Fix every critical and high-priority issue found:
- Missing or suboptimal meta tags
- Schema validation errors
- Content gaps identified by the audits
- E-E-A-T signal weaknesses
- Heading structure issues

### Iteration 3: Re-validate

Run the same 3 audits again on the updated page. Verify that:
- All critical issues from iteration 1 are resolved
- No new issues introduced by the fixes
- Schema markup validates cleanly

If critical issues remain, do another fix → revalidate cycle.

### Gate
- All SEO audits pass (no critical issues)
- All JSON-LD schemas validate
- Content score shows adequate E-E-A-T signals
- No technical SEO blockers
- Page is publication-ready

---

## Phase 6: Build & Publish

1. **Production build**: `npm run build` — must pass cleanly
2. **Kill dev server**: stop any running dev server
3. **Present final summary** to the user:
   - Primary keyword targeted
   - Page sections created
   - Schema types implemented
   - Calculator/tool included
   - SEO audit results summary
4. **Ask user** if they want to commit and deploy

---

## Important Rules

- **All content in Italian.** Never output English text in page content.
- **All law references link to Normattiva.** Use `<InlineNormLink>` for every mention.
- **Every monetary amount cites its article and comma.** No unsourced numbers.
- **No hardcoded colors.** Use OKLch values from the design system or shared component props.
- **Border radius via inline style only.** Never use Tailwind `rounded-*` classes.
- **Server components by default.** Only `"use client"` for the Calculator component.
- **No external dependencies.** Don't add npm packages.
- **Data separate from presentation.** All data in `src/data/`, computation in data files or `src/lib/`.
- **Italian number formatting.** Use `Intl.NumberFormat("it-IT", ...)` for all numbers and currency.
- **Schema markup is maximized.** Don't limit to 3 basic schemas — use every applicable type for rich results.
- **Content must be comprehensive.** Match or exceed top competitor word count. Every section must have substance — no thin filler paragraphs.
- **PAA questions drive content.** If a PAA question deserves a full section (not just an FAQ entry), give it one.
- **Tool/calculator is for dwell time.** If you see any opportunity for an interactive element, propose it to the user.
