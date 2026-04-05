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
  version: "2.1.0"
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
- First argument: **topic or row number** (optional) — e.g., "interessi moratori", "7", or "#7"
- Second argument: **reference URL** (optional) — competitor page to analyze and beat
- Third argument: **slug** (optional) — if omitted, derive from topic (lowercase, hyphens, no accents)
- Optional flag: `--research <path>` — path to pre-existing research file (e.g., from Manus)

### Content Plan Integration

**Always start from the content plan.** Read `analysis/content-plan.csv` — this is the master list of all planned pages.

1. Parse the CSV and filter rows where `Stato` = `DA FARE`.
2. Present the available pages as a numbered list, grouped by Tier:
   ```
   **Tier 1 — Core Legal Tools:**
   #2  Calcolo Fattura Avvocato      | KW: calcolo fattura avvocato (SV: 33100)
   #5  Calcolo Termini Processuali   | KW: calcolo termini processuali (SV: 60500)
   #7  Interessi Moratori            | KW: calcolo interessi moratori (SV: 18100)
   ...

   **Tier 2 — Fiscal/Property Tools:**
   #18 Scorporo IVA                  | KW: scorporo iva (SV: 33100)
   ...
   ```
3. Ask the user to pick a page by its `#` number (or they can specify a custom topic not in the plan).
4. Once selected, extract from the CSV row:
   - **Topic**: from `Tool` column
   - **Planned URL**: from `URL Pianificato` column (use as reference for slug, but actual slug is derived from topic unless overridden)
   - **Primary keyword**: from `KW Principale` column (pre-validated seed for Phase 1)
   - **Search volume**: from `SV/mese` column
   - **CPC**: from `CPC` column
   - **Intent**: from `Intent` column

If arguments were provided directly (topic or row number), skip the interactive selection and use the matching row. If the argument is a number (e.g., "7" or "#7"), match it to the `#` column in the CSV.

## Execution Mode

After confirming the topic/slug/URL, ask the user how they want to proceed:

> **How would you like to run this?**
> 1. **Step by step** — I pause after each phase for your review and approval before continuing. Best if you want full control over research and content decisions.
> 2. **All at once** — I run all 6 phases end-to-end, pausing only at mandatory gates (keyword approval, competitor analysis approval). Best if you trust the process and want speed.

Default to step-by-step if the user doesn't specify.

---

## Phase 1: Keyword Strategy from Reference Page

The goal is to understand the keyword landscape around this topic by starting from a real page that already ranks.

### Steps

1. **Confirm topic, slug, and reference URL** with the user. If no reference URL was given, ask for one — even a competitor page on the same topic works.

2. **Check slug availability**: verify `website/freetools/src/app/{SLUG}/` doesn't already exist.

3. **Analyze reference page keywords**:
   - `mcp__dfs-mcp__dataforseo_labs_google_ranked_keywords` on the reference URL — get the top 50 keywords it ranks for, sorted by search volume. Use `location_name: "Italy"`, `language_code: "it"`.
   - This reveals the keyword universe around the topic.
   - **Capture all fields from the response**: every keyword result includes `keyword_info.search_volume`, `keyword_info.cpc`, `keyword_properties.keyword_difficulty`, and `search_intent_info.main_intent`. Extract ALL four fields for every keyword — do not discard KD, CPC, or intent data.

4. **Expand keyword universe**:
   - Take the top 3-5 keywords from step 3 as seeds.
   - `mcp__dfs-mcp__dataforseo_labs_google_keyword_ideas` with those seeds — get 50 related keywords. Each result already includes SV, KD, CPC, and intent — capture all fields.
   - `mcp__dfs-mcp__dataforseo_labs_google_keyword_suggestions` on the primary keyword — get 30 long-tail suggestions. Each result includes SV, KD, CPC — capture all fields.
   - `mcp__dfs-mcp__dataforseo_labs_search_intent` on the top 20 candidates — only needed for keywords that didn't have `search_intent_info` in previous responses.

5. **Assess difficulty**:
   - `mcp__dfs-mcp__dataforseo_labs_bulk_keyword_difficulty` — only run this for keywords that came back without `keyword_properties.keyword_difficulty` in steps 3-4. Most keywords already have KD from `ranked_keywords` and `keyword_ideas` responses.

6. **Collect People Also Ask** (critical for FAQ and content structure):
   - `mcp__dfs-mcp__serp_organic_live_advanced` for the primary keyword with `people_also_ask_click_depth: 3`, `location_name: "Italy"`, `language_code: "it"`, `depth: 20`.
   - Repeat for 2-3 secondary keywords with `people_also_ask_click_depth: 2`.
   - Collect ALL PAA questions — these become FAQ items and content section ideas.

7. **Save findings** to two files:

   **`analysis/{SLUG}/keyword-strategy.md`** — human-readable report using this exact structure:
   ```
   ## Primary Keyword
   | Keyword | SV/mese | KD | CPC | Intent |
   (1 row)

   ## Secondary Keywords (10-15)
   | Keyword | SV/mese | KD | CPC | Intent |
   (sorted by SV desc — ALL columns must be filled, use 0 or "—" only if the API truly returned null)

   ## Long-Tail Targets (15-20)
   | Keyword | SV/mese | KD | CPC | Intent |
   (sorted by SV desc)

   ## PAA Questions (grouped by theme)
   (4-6 theme groups)

   ## SERP Landscape
   | # | Domain | Title | Has Calculator | Has Ratings | Word Count |
   (top 10 organic results)

   ## Strategic Assessment
   - Opportunity level (low/medium/high/very high)
   - Differentiation angles (3-5 bullet points)
   - Risks (AI Overview, strong incumbents, etc.)

   ## Keyword-to-Section Mapping
   | Page Section | Target Keywords |
   (maps every keyword to at least one planned section)
   ```

   **`analysis/{SLUG}/keywords.csv`** — machine-readable export with ALL keywords consolidated:
   ```csv
   type,keyword,sv,kd,cpc,intent
   primary,calcolo interessi moratori,18100,0,0.00,commercial
   secondary,calcolo interessi di mora,6600,0,0.00,commercial
   longtail,formula calcolo interessi moratori,90,49,0.00,informational
   ```
   - `type` column: `primary`, `secondary`, or `longtail`
   - Every row must have all 6 columns filled (use `0` for missing KD/CPC, not blank)
   - Reference this CSV from the markdown file: `> Full keyword data exported to [keywords.csv](keywords.csv)`

8. **Enrich CSV with opportunity scores**:
   ```bash
   python3 .agents/skills/create-page/scripts/enrich_keywords.py "analysis/{SLUG}/keywords.csv"
   ```
   This adds two columns to the CSV (sorted by score descending):
   - `opportunity_score`: `((100 - KD) / 100) * sqrt(SV)` — easy + high-volume keywords score highest
   - `opportunity_score_cpc`: `opportunity_score * (1 + ln(CPC + 1))` — boosts commercial-intent keywords

   The script prints the top 5 keywords by score. Use this ranking to validate that the primary keyword choice makes sense — if a secondary keyword scores significantly higher, reconsider.

9. **Present to user** for approval before proceeding. Include the top 10 keywords by `opportunity_score_cpc` in the presentation.

### Gate
- Primary keyword identified with volume, KD, CPC, and intent
- 10+ secondary keywords with ALL fields (SV, KD, CPC, Intent)
- 15+ PAA questions collected
- `keywords.csv` enriched with opportunity scores (8 columns, zero blank cells)
- User approved the keyword strategy

---

## Phase 2: SERP & Competitor Deep Analysis

The goal is to understand exactly what the top-ranking pages cover, so we can match and exceed them.

### Steps

1. **Use SERP results from Phase 1 step 6.** The `serp_organic_live_advanced` call already returned the top organic URLs and PAA questions. Extract the top 10 organic URLs from those results. Do NOT re-run the SERP call.

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

The goal is to gather every piece of factual data the page needs, with verified sources. This phase produces two files: a raw research dump (preserved for future reference) and a structured research brief (used directly by Phase 4).

### Steps

If `--research <path>` was provided, read that file first and use it as the primary data source. Fill gaps with the steps below.

#### Step 3.1: Deep Research (primary data gathering)

1. **`mcp__perplexity__perplexity_research`** with `reasoning_effort: "high"` and `strip_thinking: true` — comprehensive investigation of the legal topic.

   **Always include the Italian system message** to get results directly in Italian:
   ```json
   {
     "messages": [
       {
         "role": "system",
         "content": "Sei un esperto di diritto italiano e fiscalità. Rispondi SEMPRE in italiano, usando terminologia giuridica e fiscale precisa. Cita le fonti normative con riferimenti completi (articolo, comma, decreto/legge, data e numero). Privilegia fonti istituzionali italiane: Normattiva.it, Gazzetta Ufficiale, Ministero della Giustizia, Agenzia delle Entrate, Consiglio Nazionale Forense. Fornisci spiegazioni dettagliate con esempi pratici, casi particolari, e contesto storico delle norme."
       },
       {
         "role": "user",
         "content": "[Italian query here]"
       }
     ],
     "reasoning_effort": "high",
     "strip_thinking": true
   }
   ```

   Structure the user query in Italian to explicitly request:
   - All relevant laws/decrees/regulations with Normattiva URLs
   - Current rates, tables, thresholds with official source references
   - Formulas with worked examples (esempi pratici di calcolo)
   - Exemptions, special cases, recent changes (last 2 years)
   - Historical data tables if applicable
   - Verbatim quotes of key legislative articles (for NormativaQuote components)
   - Practical context: how practitioners actually use this in daily work
   - Common mistakes and pitfalls (errori comuni)
   - Connections between related norms (e.g., how CPA/IVA interact with the main calculation)

2. **Save the raw output immediately** to `analysis/{SLUG}/raw-research.md`. This file is the primary reference document — it preserves the full research output (~5,000-10,000 words) so no data is lost between phases. Phase 4 must read this file when writing content.

   **Important — citation parsing**: The Perplexity MCP server returns citations **inline at the end of the text response** as `[1] https://...`, NOT as a separate JSON array. The response JSON has only a `response` key (string). Always parse the bottom of the text to extract the numbered citation URLs. These citations map to `[N]` references throughout the text body. Extract and preserve them — they are the verified source URLs for the "Fonti e Riferimenti" section.

#### Step 3.2: Keyword-driven gap analysis and supplementary research

The deep research provides the foundation (~80% of content needs). This step systematically identifies and fills the remaining gaps using the keyword data from Phase 1.

3. **Cross-reference keywords.csv against raw-research.md**:
   - Read `analysis/{SLUG}/keywords.csv` (all keywords with opportunity scores)
   - For each high-opportunity keyword (top 20 by `opportunity_score_cpc`), check whether the raw research adequately covers the topic that keyword represents
   - Build a gap list: keywords/topics that are either missing or only superficially covered

4. **Cross-reference PAA questions against raw-research.md**:
   - Review the PAA questions from `analysis/{SLUG}/keyword-strategy.md`
   - For each PAA question, check if the raw research provides a complete, sourceable answer
   - Add unanswered or weakly answered PAAs to the gap list

5. **Cross-reference competitor sections against raw-research.md**:
   - Review the content sections proposed in `analysis/{SLUG}/competitor-analysis.md`
   - Identify any section that requires data the raw research doesn't provide
   - Add these to the gap list

6. **Run targeted supplementary calls** (3-6 calls) to fill gaps. **All calls must use the Italian system message** (see Step 3.1 template). This ensures responses come back in Italian, ready to use as content.

   - **`mcp__perplexity__perplexity_search`** with `recency: "year"` and `country: "IT"` — for:
     - Verification of numerical data (rates, thresholds) against official sources (TuttoCamere, GU)
     - Missing Normattiva URLs
     - Recent legislative changes not covered

   - **`mcp__perplexity__perplexity_ask`** with Italian system message and `search_context_size: "high"` — for:
     - Practical "how-to" angles from keywords (e.g., "in fattura", "Excel", "tasso fisso")
     - IVA/fiscal treatment of the topic (always a gap in legal-only research)
     - Specific data points the deep research was vague about
     - When you need precise institutional data, add `search_domain_filter: ["normattiva.it", "gazzettaufficiale.it", "giustizia.it", "agenziaentrate.gov.it", "altalex.com"]`

   - **`mcp__perplexity__perplexity_reason`** with Italian system message and `search_context_size: "high"` — only if:
     - Formulas or legal interpretations require step-by-step logical analysis
     - There are conflicting data points between deep research and verification sources

7. **Prioritize institutional sources**: Normattiva.it, Gazzetta Ufficiale, Ministero della Giustizia, Consiglio Nazionale Forense, Agenzia delle Entrate, Camera.it, Senato.it. Use blog posts, legal forums, and commercial sites only to fill gaps that institutional sources don't cover.

8. **Append supplementary findings** to `analysis/{SLUG}/raw-research.md` under a `## Supplementary Research` section with clear source attribution.

#### Step 3.3: Data compilation and content extraction

7. **Build enriched research brief** at `analysis/{SLUG}/research-brief.md`. This file is the bridge between research and content — it must preserve BOTH structured data AND narrative content from the raw research. Extract and organize from raw-research.md + supplementary calls:

   **Structured data (for calculator/tables):**
   - **Normativa**: Every law/decree cited, with article numbers and verified Normattiva URLs
   - **Data tables**: All rates, thresholds, brackets — verified against official sources
   - **Formulas**: With variable definitions and worked examples

   **Editorial content (for page sections) — DO NOT summarize, preserve full paragraphs:**
   - **Explanatory passages**: Copy verbatim from raw-research any well-written paragraphs that explain how the law works, its rationale, or its practical application. These become the backbone of page sections.
   - **Historical context**: How the norm evolved over time — legislative history, key reforms, reasons for changes. This adds depth competitors lack.
   - **Practical examples**: Any worked examples, case studies, or "in practice" explanations from the research. Include the full example, not just a summary.
   - **Edge cases and exceptions**: Special situations, exemptions, lesser-known rules. These are high-value content for SEO (long-tail queries) and user trust.
   - **Common mistakes**: Errors practitioners commonly make. Excellent for AlertBox components and FAQ items.
   - **Connections between norms**: How this topic interacts with related laws (e.g., IVA treatment, CPA, procedural deadlines). This cross-referencing adds unique value.
   - **Key legislative quotes**: Verbatim text of key articles for NormativaQuote components

   **FAQ answers (15-25 items):** Start from PAA questions (Phase 1), add questions from long-tail keywords, add practitioner questions from research. Each must have: domanda, risposta (3-5 sentences minimum, not one-liners), categoria, fonti (with URLs). Organize by 4-6 categories.

   **Recent changes**: Legislative updates from last 24 months — include context on WHY the change happened and its practical impact.

   **Sources bibliography**: Complete list of institutional URLs for "Fonti e Riferimenti" section.

   **Section-to-research mapping table** (new, mandatory):
   ```
   | Planned Page Section | Raw Research Sections to Use | Key Data Points |
   |----------------------|------------------------------|-----------------|
   | Come si Calcola      | §2.1 Formula, §3.4 Examples  | Art. 13, rates   |
   | Tabella Importi      | §2.3 Tables                  | All brackets     |
   | Esenzioni            | §4.1 Exemptions, §4.2 Cases  | Art. 10, 46      |
   ```
   This mapping ensures no valuable research content is lost during implementation.

8. **Source verification checklist**:
   - Every monetary amount cites a specific article and comma
   - All Normattiva URLs follow correct URN patterns
   - All GU references include date and number
   - Cross-check at least 3 key amounts against official legislative text
   - Flag any data point that could not be verified with `[VERIFY]` tag

### Gate
- `raw-research.md` saved (full deep research output preserved)
- `research-brief.md` saved with all structured data
- All factual data sourced with article references
- Formulas verified with worked example
- 15+ FAQ items with categories and sources
- All Normattiva/circular URLs verified
- No unresolved `[VERIFY]` tags remaining

---

## Phase 4: Implementation

Read `references/implementation-guide.md` for exact code patterns. Follow the existing pages as the model — look at `src/app/contributo-unificato/page.tsx` and `src/app/calcolo-interessi-legali/page.tsx` for the exact style.

**Critical — research-to-content pipeline**: Before writing any content, read ALL THREE files in full:
1. `analysis/{SLUG}/raw-research.md` — the comprehensive deep research output (5,000-10,000 words). This is the **primary content source**.
2. `analysis/{SLUG}/research-brief.md` — structured data extraction + the **section-to-research mapping table**.
3. `analysis/{SLUG}/keyword-strategy.md` — keyword targets per section.

**How to use raw research in content writing:**
- Follow the **section-to-research mapping table** from the research-brief — it tells you exactly which research sections feed each page section.
- For each page section, go back to the corresponding raw research paragraphs and **adapt them into editorial content** — don't summarize, expand. Use the research's explanations, examples, and context as the foundation, then enrich with proper formatting (InlineNormLink, NormativaQuote, AlertBox, LegalTable).
- **Preserve depth**: if the raw research explains a concept in 3 paragraphs with examples, the page section should be at least as detailed — not condensed into 1 paragraph.
- **Transfer practical examples verbatim**: worked calculations, case scenarios, and "in practice" explanations from research should appear in the page (adapted for formatting, not shortened).
- **Include edge cases and exceptions**: these are high-value for both SEO (long-tail matches) and user trust. Use AlertBox components to highlight them.
- **Include historical context**: brief legislative history paragraphs add unique depth that competitors skip. Use them in the normativa section or as intro context.
- Every factual claim, legislative quote, and data point in the page must trace back to these files.

### Step 4.1: Create Data Files

Create `src/data/{SLUG}/{slug}Data.ts`:
- TypeScript interfaces for tool-specific data
- All data arrays (tables, rates, brackets)
- If calculator needed: export the calculation function
- Export `normativaRiferimento: NormativaRiferimento[]` — import type from `@/types/tool`
- Optionally export `circolariMinisteriali: CircolareMinisteriale[]` — import type from `@/types/tool`
- Export `sections: ToolSection[]` — import type from `@/types/tool` (must match every SectionTitle id in the page)

Create `src/data/{SLUG}/faqData.ts`:
- Export `faqData: FAQItem[]` with 15-25 items — import type from `@/components/shared/FAQ`
- 4-6 categories
- Include `fonti` with Normattiva/official URLs per answer

### Step 4.2: Create Calculator (if Phase 2 determined one is needed)

Create `src/components/{SLUG}/Calcolatore.tsx`:
- `"use client"` directive
- Import calculation function from data file
- Import `formatEur`, `formatPct`, `formatDate` from `@/lib/utils` — **never redefine these locally**
- Form inputs matching the tool's parameters
- Result display with Italian number formatting (use the shared `formatEur`/`formatPct`)
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
- Always include: **BreadcrumbList** + **Article** (with `image` property)
- Add **WebApplication** if the page has a calculator
- **Do NOT include FAQPage** — since Aug 2023, Google restricts FAQ rich results to government/healthcare sites only. Keep the FAQ UI component for UX, but no JSON-LD.
- **Do NOT include HowTo** — Google deprecated HowTo rich results in Sept 2023. The `howToSchema` function is removed.
- If a needed schema generator doesn't exist in `src/lib/schema.tsx`, create it

**"Fonti e Riferimenti" section** (mandatory): At the bottom of the page (before or after FAQ), render a dedicated section listing all institutional sources used during research. Each entry should include the source name, the specific document/article, and a clickable link. This builds E-E-A-T trust and transparently shows the page's authority basis.

**Target content volume**: match or exceed the top competitor's word count (typically 2000-4000 words of editorial content, not counting tables and FAQ).

### Step 4.4: Register the Tool

Add the new tool to the **single registry file** `src/data/toolRegistry.ts`:

```typescript
{
  slug: "{SLUG}",
  title: "{Full Title}",
  navLabel: "{Short Nav Label}",
  description: "{Homepage card description}",
  icon: IconName,        // from lucide-react
  badge: "Aggiornato {YEAR}",
  ready: true,
  lastModified: "{YYYY-MM-DD}",
}
```

This **automatically** updates:
- `Navbar.tsx` (desktop + mobile nav links)
- `SiteFooter.tsx` (footer tools list)
- `app/page.tsx` (homepage tools grid)
- `app/sitemap.ts` (XML sitemap entries)

**No other navigation files need editing.** Only update `src/app/layout.tsx` if the site-wide root description needs to change.

### Step 4.5: Build Check

```bash
cd "website/freetools" && npm run build
```

Must pass with zero errors. Fix any issues before proceeding.

### Step 4.6: Italian Text Lint

```bash
cd "website/freetools" && bash scripts/lint-italian.sh src/app/{SLUG} src/data/{SLUG} src/components/{SLUG}
```

This script catches two systematic issues that LLMs produce when generating Italian text in code:
1. **Unicode escapes** (`\u00D7`, `\u20AC`, `\u2022`, etc.) — must be native UTF-8 (`×`, `€`, `•`)
2. **Missing accents** (`e` instead of `è`, `piu` instead of `più`, `perche` instead of `perché`, etc.)
3. **HTML entities** (`&agrave;`, `&egrave;`, etc.) — must be native UTF-8

Must pass with zero issues. If issues are found, fix them and re-run until clean. **This is a blocking gate** — pages with unicode escapes or missing accents will look broken to users and risk penalties.

### Gate
- `npm run build` passes cleanly
- `lint-italian.sh` passes with zero issues
- All section IDs in `sections` array match `<SectionTitle id="">` in page
- Calculator works correctly (if applicable)
- Content matches or exceeds competitor depth from Phase 2

---

## Phase 5: SEO Refinement Loop

This phase is iterative. The page is NOT ready until it passes SEO validation with zero critical issues.

### Issue Severity Rubric

Classify every finding from every audit into one of three levels:

**CRITICAL (must fix — blocks publish):**
- Missing or duplicate H1
- Missing or duplicate canonical URL
- Missing meta description
- Missing required JSON-LD schema (BreadcrumbList, Article, FAQPage)
- Broken JSON-LD syntax (invalid JSON, wrong `@type`, missing required fields)
- Empty content sections (zero words between two SectionTitle components)
- Missing `lang="it"` on `<html>`
- Broken internal links (404s within the page)
- Missing OG tags (`og:title`, `og:description`, `og:locale`)
- Page not accessible to crawlers (robots meta noindex, blocked by robots.txt)
- Security headers missing (`X-Frame-Options`, `Strict-Transport-Security`)

**HIGH (should fix — document with justification if skipped):**
- Meta title outside 50-60 char range
- Meta description outside 140-160 char range
- Missing optional JSON-LD schema that content supports (HowTo when page has steps, WebApplication when page has calculator)
- Thin sections (< 100 words of editorial content between section headers)
- Heading hierarchy gaps (e.g., H2 -> H4 with no H3)
- FAQ items without source URLs in `fonti`
- E-E-A-T score below audit threshold
- AI Overview / GEO citability issues (content not structured for LLM extraction)
- Missing `rel="noopener noreferrer"` on external links

**WARNING (nice to have — log but don't block):**
- Image file size could be smaller
- Minor readability score dips
- Alt text wording suggestions
- Slightly suboptimal keyword density
- CSS/JS bundle size suggestions
- Non-blocking performance hints (font loading, preconnect)

### Iteration 1: Run SEO Audits

Start the dev server:
```bash
cd "website/freetools" && npm run dev &
```

Run these 5 SEO audits on `http://localhost:3000/{SLUG}`:

1. **`/seo-page`** — on-page elements, meta tags, headings, content structure, internal links
2. **`/seo-schema`** — validate ALL JSON-LD blocks (BreadcrumbList, Article, FAQPage + optional HowTo, WebApplication, etc.)
3. **`/seo-content`** — E-E-A-T signals, content depth, readability, thin content detection
4. **`/seo-technical`** — crawlability, indexability, security headers, canonical, URL structure, mobile rendering
5. **`/seo-geo`** — AI Overview optimization, LLM citability, passage-level structure, AI crawler accessibility

Classify every finding using the severity rubric above. Present a summary table:

```
| Severity | Count | Examples |
|----------|------:|---------|
| CRITICAL |     0 | — |
| HIGH     |     2 | Meta title 63 chars, HowTo schema missing |
| WARNING  |     4 | Image 48KB could be 32KB, readability 62/100 |
```

### Iteration 2: Fix

1. Fix ALL critical issues — no exceptions.
2. Fix high issues where feasible. For any high issue you skip, add a line to the summary: `HIGH SKIPPED: {issue} — Reason: {why}`.
3. Log warnings but do not fix unless trivial.

### Iteration 3: Re-validate

Re-run the same 5 audits. Verify:
- Zero critical issues remain
- No new critical or high issues introduced by fixes
- All JSON-LD schemas validate cleanly

If critical issues remain, repeat fix → revalidate. Maximum 3 iterations — if still failing after 3, present the remaining issues to the user for a decision.

### Gate
- **Zero critical issues** across all 5 audits
- **All high issues** either fixed or documented with justification
- All required JSON-LD schemas validate (Breadcrumb, Article, FAQ + applicable optional schemas)
- Content E-E-A-T score meets audit threshold
- Page is publication-ready

---

## Phase 6: Build & Publish

1. **Production build**: `npm run build` — must pass cleanly
2. **Kill dev server**: stop any running dev server
3. **Update sitemap `lastModified` dates**: Open `src/app/sitemap.ts` and:
   - Add the new page URL entry if not already present (from Step 4.4)
   - Set `lastModified: new Date("YYYY-MM-DD")` using **today's date** for the new page
   - Update `lastModified` for any other pages that were modified during this process (e.g., homepage, navbar changes)
   - **Never use `new Date()` without a date string** — every entry must have a fixed date so Google sees stable `lastmod` values
4. **Update content-plan.csv**: Open `analysis/content-plan.csv` and update the row for this page:
   - Set `URL Attuale` to the final published slug (e.g., `/calcolo-interessi-moratori`)
   - Set `Stato` from `DA FARE` to `LIVE`
   - Set `Data Pubblicazione` to today's date in `YYYY-MM-DD` format
   - If the page was not originally in the CSV (custom topic), append a new row with all available fields filled

5. **Present final summary** to the user:
   - Primary keyword targeted
   - Page sections created
   - Schema types implemented
   - Calculator/tool included
   - SEO audit results summary
   - **Published URL**: `https://www.avvocatotools.it/{SLUG}`
   - **Content plan updated**: row #{N} → LIVE, published {YYYY-MM-DD}
6. **Ask user** if they want to commit and deploy

---

## Important Rules

- **All content in Italian.** Never output English text in page content.
- **Use native UTF-8 characters, NEVER HTML entities or unicode escapes.** Write `à`, `è`, `é`, `ì`, `ò`, `ù` directly — never `&agrave;`, `&egrave;`, `\u00E0`, etc. JSX and TypeScript fully support UTF-8. This applies to all `.tsx`, `.ts`, and data files. The same rule applies to apostrophes (`'` not `&apos;`), quotes (`"` not `&quot;`), symbols (`«»` not `&laquo;&raquo;`), euro (`€` not `\u20AC`), multiplication (`×` not `\u00D7`), bullet (`•` not `\u2022`), em-dash (`—` not `\u2014`), en-dash (`–` not `\u2013`).
- **Italian accents are mandatory.** Always write `è` (verb essere), `più`, `perché`, `può`, `sarà`, `purché`, `già`, `però`, `cioè`, `così`, `necessità`, `indennità`, `libertà`, `attività`, `responsabilità`, `modalità`. The lint script (`scripts/lint-italian.sh`) catches these — run it as a gate before publishing.
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
