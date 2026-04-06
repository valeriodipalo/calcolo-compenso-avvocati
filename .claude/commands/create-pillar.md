---
name: create-pillar
description: >-
  Create a pillar/hub page for a topic cluster on AvvocatoTools.it. Performs
  DFS keyword research targeting informational intent, audits existing tool
  pages to avoid keyword cannibalization, creates a content-rich editorial
  page with internal linking to cluster tools, and updates the registry to
  activate breadcrumb, homepage, and navbar integrations automatically.
  Use when the user says "create pillar", "hub page", "pillar page",
  "create cluster page", or "/create-pillar {cluster}".
metadata:
  version: "1.0.0"
  argument-hint: "{cluster-id}"
---

# Create Pillar Page

You are creating a **pillar/hub page** for an existing topic cluster on AvvocatoTools.it. This is NOT a calculator page — it's an editorial guide (2000-3000 words) that serves as the SEO entry point for an entire cluster, linking to all tool pages within it.

## Key Principles

1. **Informational intent only** — pillar pages target "cosa sono", "differenza", "quando si applicano", "guida" keywords. NEVER target "calcolo X" keywords (those belong to tool pages).
2. **Zero cannibalization** — before writing, audit every existing tool page's keywords to ensure no overlap.
3. **Registry-driven** — setting `hubReady: true` automatically activates breadcrumbs, homepage link, and navbar integration.
4. **Internal linking is the core purpose** — every section must link to at least one tool page.

## Parsing Arguments

When triggered with `/create-pillar {args}`:
- Argument: **cluster ID** — e.g., `compensi`, `termini`, `interessi`, `contributo`, `danno`
- If no argument, present available clusters.

---

## Phase 1: Cluster Selection & Existing Content Audit

### 1.1 Identify the cluster

Read `src/data/toolRegistry.ts` and extract:
- The `CLUSTERS` array — find clusters where `hubReady: false`
- The `TOOLS` array — find all tools in the selected cluster

If no argument was provided, present available clusters:
```
Available clusters for pillar pages:

✅ interessi  — Interessi e Rivalutazione (hubReady: true — already done)
⬜ compensi   — Compenso e Fatturazione (2 tools: compenso, fattura)
⬜ termini    — Termini e Scadenze (2 tools: processuali, impugnazione)
⬜ contributo — Contributo Unificato (1 tool: contributo-unificato)
⬜ danno      — Danno e Risarcimento (2 tools: biologico, non-patrimoniale)

Select a cluster ID:
```

### 1.2 Audit existing tool pages for keyword targets

For each tool page in the cluster, read the page file (`src/app/{slug}/page.tsx`) and extract:
- The `<title>` / metadata title
- The H1 text
- The meta description
- All H2 headings

Also read the tool's keyword strategy file if it exists (`analysis/{slug}/keyword-strategy.md`).

**Build a "protected keywords" list** — these are the transactional keywords the tool pages already target. The pillar page MUST NOT target these. Typical patterns:
- "calcolo [topic]" — transactional, belongs to tool page
- "[topic] calcolatore" — transactional
- "[topic] online" — transactional
- "[topic] 2026 calcolo" — transactional

**Build a "gap keywords" list** — informational keywords the tools DON'T cover:
- "[topic] cosa sono" — informational
- "[topic] guida" — informational
- "differenza [topic A] e [topic B]" — informational
- "quando si applicano [topic]" — informational
- "[topic] normativa" — informational

Save this audit to `analysis/{hub-slug}/content-audit.md`:
```
## Protected Keywords (tool pages — DO NOT TARGET)
| Tool | Primary KW | H1 | Meta Title |
|---|---|---|---|

## Existing H2 Sections in Tool Pages
(list all H2s from each tool page — the pillar should NOT duplicate these)

## Gap Opportunities (informational, not covered by tools)
(list of potential pillar keywords)
```

### Gate
- Cluster selected and validated
- All tool pages in cluster audited
- Protected keywords list built
- Gap opportunities identified

---

## Phase 2: DFS Keyword Research

### 2.1 Keyword Overview

Run `mcp__dfs-mcp__dataforseo_labs_google_keyword_overview` with 8-12 candidate keywords:
- The cluster's main topic words (e.g., "interessi legali", "interessi moratori")
- Informational variants ("differenza interessi legali moratori", "cosa sono interessi moratori")
- Guide-intent keywords ("[topic] guida", "[topic] normativa")

Parameters: `language_code: "it"`, `location_name: "Italy"`

Capture: SV, KD, CPC, intent for each keyword.

### 2.2 Keyword Ideas Expansion

Run `mcp__dfs-mcp__dataforseo_labs_google_keyword_ideas` with the top 3 cluster topic keywords.
- `limit: 40`
- Filter: `["keyword_info.search_volume", ">", 50]`
- Order: `["relevance,desc", "keyword_info.search_volume,desc"]`

### 2.3 SERP Analysis

Run `mcp__dfs-mcp__serp_organic_live_advanced` for 2 queries:
1. The broadest informational keyword (e.g., "interessi legali moratori guida")
2. The top disambiguation keyword (e.g., "differenza interessi legali moratori")

Parameters: `language_code: "it"`, `location_name: "Italy"`, `depth: 10`, `people_also_ask_click_depth: 3`

Extract:
- Top 10 organic results (domain, title, URL, type of page)
- ALL People Also Ask questions
- Related searches

### 2.4 Keyword Classification

Classify every keyword into one of three categories:

| Category | Rule | Action |
|---|---|---|
| **PROTECTED** | Matches a tool page's primary/secondary keyword, or has "calcolo" intent | DO NOT use in pillar H1/H2/meta |
| **PILLAR PRIMARY** | Informational intent, SV >= 500, not protected | Target in H1 and meta description |
| **PILLAR SECONDARY** | Informational intent, SV < 500, not protected | Target in H2 headings and body text |

### 2.5 Save Research

Save to `analysis/{hub-slug}/keyword-strategy.md`:
```
## Pillar Page Target Keywords
| Keyword | SV | KD | Intent | Category |

## Protected Keywords (tool pages own these)
| Keyword | SV | Owned By |

## PAA Questions
(grouped by theme)

## SERP Landscape
| # | Domain | Title | Type (guide/calculator/article) |

## Content Sections Derived from Research
| Section H2 | Target Keywords | PAA Questions Answered |
```

### Gate
- Pillar primary keyword identified (informational, SV >= 500)
- Zero overlap with protected keywords
- 6+ PAA questions collected
- SERP confirms guide-type pages rank for target keywords
- User approved keyword strategy

---

## Phase 3: Legal Research

### 3.1 Deep Research

Run `mcp__perplexity__perplexity_research` with Italian system message:
```json
{
  "messages": [
    {
      "role": "system",
      "content": "Sei un esperto di diritto italiano e fiscalità. Rispondi SEMPRE in italiano, usando terminologia giuridica e fiscale precisa. Cita le fonti normative con riferimenti completi."
    },
    {
      "role": "user",
      "content": "[Comprehensive Italian query covering all topics in the cluster]"
    }
  ],
  "reasoning_effort": "high",
  "strip_thinking": true
}
```

The query should request:
- Complete explanation of each topic in the cluster
- Differences between the topics (this is the highest-value content)
- When each applies in practice (practical use cases for lawyers)
- Current rates/thresholds for 2026
- Key normativa references with article numbers
- Common mistakes practitioners make
- Historical context of the norms

### 3.2 Gap Fill

Run 2-3 targeted `mcp__perplexity__perplexity_ask` calls (with Italian system message) for:
- Specific PAA questions not fully answered by the deep research
- Practical case scenarios (risarcimento, decreto ingiuntivo, crediti da lavoro)
- Recent legislative changes

### 3.3 Save Research

Save raw output to `analysis/{hub-slug}/raw-research.md`.

### Gate
- Raw research covers all topics in the cluster
- Normativa references verified
- Current 2026 rates/data confirmed

---

## Phase 4: Implementation

### 4.1 Create Hub Page

Create `src/app/{hub-slug}/page.tsx` following this exact template structure:

```
[Metadata: title, description, canonical, OG tags]
[JSON-LD: BreadcrumbList (2 levels: Home → Hub) + Article]
[Visual Breadcrumb: Home › Cluster Label]
[Hero: eyebrow "Guida Completa" + H1 + description]
[Container max-w-5xl mx-auto]
  [Section: Strumenti di Calcolo — grid of tool cards from cluster]
  [Section: H2 per topic — 400-600 words each, with contextual link to tool]
  [Section: Comparison table — targets "differenza" keywords, featured snippet format]
  [Section: Practical use cases — "Quando si applicano nella pratica forense"]
  [Section: FAQ — 6-10 items from PAA questions, using <details> accordion]
  [Section: Cross-cluster links — 2-3 tools from other clusters]
```

**Page rules:**
- Server component (no `"use client"`)
- All content in Italian with proper accents
- No `breadcrumbSchema` import from tool pages — hub uses its own 2-level breadcrumb inline
- No ToolLayout wrapper — hub pages have their own layout (no SideNav)
- Use `max-w-5xl mx-auto` for content width
- Tool cards read from `getToolsByCluster(clusterId)`
- Every editorial section MUST contain a contextual link to the relevant tool page
- Comparison table targets the "differenza" featured snippet
- Cross-cluster links are hardcoded (not from relatedSlugs — those are for tool pages)

**Internal linking requirements (minimum):**
- 1 link per tool in the cluster (via tool cards + contextual editorial links) = N × 2 links
- 2-3 cross-cluster links at the bottom
- Total minimum: (N tools × 2) + 3 internal links

### 4.2 Update Registry

In `src/data/toolRegistry.ts`, set `hubReady: true` for the cluster:

```typescript
{
  id: "{cluster-id}",
  ...
  hubReady: true,  // ← change from false to true
}
```

This **automatically** triggers:
- **Breadcrumb** on all tool pages in the cluster: level 2 now links to `/{hub-slug}` (was `/#cluster-id`)
- **Homepage**: H2 cluster title becomes a clickable link with arrow icon
- **Sitemap**: `/{hub-slug}` added with `priority: 0.9`, `changeFrequency: "weekly"`
- **Footer**: cluster label links to hub page (when implemented)

### 4.3 Verify Automatic Integrations

After setting `hubReady: true`, verify:

1. **Breadcrumb on tool pages**: Visit each tool page in the cluster and confirm:
   - Visual breadcrumb shows: `Home › [Cluster Label] › [Tool Title]`
   - Cluster label links to `/{hub-slug}` (not `/#cluster-id`)
   - JSON-LD BreadcrumbList has 3 items with correct URLs

2. **Homepage**: Visit `/` and confirm:
   - Cluster H2 is a clickable link with `→` arrow icon
   - Link goes to `/{hub-slug}`

3. **Sitemap**: Check `src/app/sitemap.ts` output includes `/{hub-slug}`

### 4.4 Build & Lint

```bash
cd "website/freetools" && npm run build
```

Must pass with zero errors.

```bash
cd "website/freetools" && bash scripts/lint-italian.sh src/app/{hub-slug}
```

Must pass with zero issues (no unicode escapes, no missing accents).

### Gate
- Hub page created and renders correctly
- `hubReady: true` set in registry
- All automatic integrations verified (breadcrumb, homepage, sitemap)
- Build passes
- Italian lint passes

---

## Phase 5: SEO Audit & Refinement Loop

This phase is iterative. The page is NOT ready until it passes SEO validation with zero critical issues.

### Issue Severity Rubric

**CRITICAL (must fix — blocks publish):**
- Missing or duplicate H1
- Missing or duplicate canonical URL
- Missing meta description
- Missing required JSON-LD schema (BreadcrumbList, Article)
- Broken JSON-LD syntax (invalid JSON, wrong `@type`, missing required fields)
- Empty content sections (zero words between two H2 headings)
- Missing `lang="it"` on `<html>`
- Broken internal links (404s within the page)
- Missing OG tags (`og:title`, `og:description`, `og:locale`)
- Page not accessible to crawlers (robots meta noindex)
- Security headers missing

**HIGH (should fix — document with justification if skipped):**
- Meta title outside 50-60 char range
- Meta description outside 140-160 char range
- Thin sections (< 100 words of editorial content between H2 headings)
- Heading hierarchy gaps (e.g., H2 → H4 with no H3)
- Missing `rel="noopener noreferrer"` on external links
- E-E-A-T score below audit threshold
- AI Overview / GEO citability issues
- Internal link count below minimum ((N tools × 2) + 3)

**WARNING (nice to have — log but don't block):**
- Minor readability score dips
- Slightly suboptimal keyword density
- CSS/JS bundle size suggestions
- Non-blocking performance hints

### Iteration 1: Run SEO Audits

Start the dev server:
```bash
cd "website/freetools" && npm run dev &
```

Run these 5 SEO audits on `http://localhost:3000/{hub-slug}`:

1. **`/seo-page`** — on-page elements, meta tags, headings, content structure, internal links count
2. **`/seo-schema`** — validate ALL JSON-LD blocks (BreadcrumbList must have 2 items, Article must have image, datePublished, dateModified, author)
3. **`/seo-content`** — E-E-A-T signals, content depth (target 2000+ words), readability, thin content detection
4. **`/seo-technical`** — crawlability, indexability, security headers, canonical, URL structure
5. **`/seo-geo`** — AI Overview optimization, LLM citability, passage-level structure

Also **spot-check one tool page** in the cluster:
6. **`/seo-schema`** on `http://localhost:3000/{tool-slug}` — verify BreadcrumbList now has 3 items with level 2 pointing to `/{hub-slug}`

Classify every finding using the severity rubric. Present a summary table:
```
| Severity | Count | Examples |
|----------|------:|---------|
| CRITICAL |     0 | — |
| HIGH     |     2 | Meta title 63 chars, internal links below minimum |
| WARNING  |     4 | Readability 62/100, keyword density low |
```

### Iteration 2: Fix

1. Fix ALL critical issues — no exceptions.
2. Fix high issues where feasible. For any skipped: `HIGH SKIPPED: {issue} — Reason: {why}`.
3. Log warnings but do not fix unless trivial.

### Iteration 3: Re-validate

Re-run audits 1-3. Verify:
- Zero critical issues remain
- No new critical or high issues introduced by fixes
- All JSON-LD schemas validate cleanly

Maximum 3 iterations — if still failing after 3, present remaining issues to user.

### Gate
- **Zero critical issues** across all audits
- **All high issues** either fixed or documented
- BreadcrumbList + Article JSON-LD validate cleanly
- Content word count >= 2000
- Internal link count meets minimum
- Breadcrumb on tool pages updated correctly

---

## Phase 6: Finalize

1. **Update content-plan.csv**: If the hub page corresponds to a row, update status to `LIVE`
2. **Update sitemap dates**: Set `lastModified` for the hub page to today's date in `src/app/sitemap.ts`
3. **Present summary**:
   - Cluster: {cluster label}
   - Hub URL: `/{hub-slug}`
   - Primary keyword: {keyword} (SV: {volume}, intent: informational)
   - Tool pages linked: {list}
   - Sections created: {count}
   - Internal links: {count}
   - Automatic integrations: breadcrumb ✅, homepage ✅, sitemap ✅
4. **Ask user** if they want to commit and deploy

---

## Important Rules

- **All content in Italian.** Native UTF-8 characters, never HTML entities or unicode escapes.
- **Italian accents are mandatory.** è, più, perché, può, sarà, già, però, cioè, così, etc.
- **Informational intent ONLY.** Never target "calcolo X" in the pillar page H1, meta title, or H2s.
- **Every section links to a tool.** The pillar page's primary purpose is to funnel users to calculators.
- **Comparison table is mandatory.** It targets "differenza" featured snippets — highest SEO value.
- **No ToolLayout.** Hub pages have their own simpler layout (no SideNav, no tool-specific Footer).
- **Server component.** No `"use client"` — hub pages have no interactive elements.
- **max-w-5xl mx-auto** for content width (wider than tool pages).
- **No external dependencies.** Don't add npm packages.
- **Hub page schema**: BreadcrumbList (2 levels) + Article. NO WebApplication, NO FAQPage.

## Cluster Reference

Hub page slugs and cluster IDs (from `toolRegistry.ts`):

| Cluster ID | Hub Slug | Hub Page Path |
|---|---|---|
| `compensi` | `compensi-forensi` | `src/app/compensi-forensi/page.tsx` |
| `termini` | `termini-processuali` | `src/app/termini-processuali/page.tsx` |
| `interessi` | `interessi-e-rivalutazione` | `src/app/interessi-e-rivalutazione/page.tsx` ✅ |
| `contributo` | `guida-contributo-unificato` | `src/app/guida-contributo-unificato/page.tsx` |
| `danno` | `danno-e-risarcimento` | `src/app/danno-e-risarcimento/page.tsx` |
