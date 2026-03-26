# Research Strategy Reference

How to use DataForSEO and Perplexity MCP tools for keyword research, SERP analysis, and legal data gathering.

---

## Table of Contents

1. DataForSEO tool reference (keyword research)
2. SERP analysis method
3. People Also Ask extraction
4. Perplexity tool reference (legal research)
5. Primary legal sources for Italian law
6. Cross-validation rules

---

## 1. DataForSEO Tool Reference

All DataForSEO calls for this project must use:
- `location_name: "Italy"`
- `language_code: "it"`

### Keyword Discovery Flow

```
Reference URL
  → ranked_keywords (what it ranks for)
  → top 3-5 seeds
    → keyword_ideas (related concepts)
    → keyword_suggestions (long-tail variants)
    → bulk_keyword_difficulty (prioritize)
    → search_intent (classify)
```

### Tool-by-Tool Guide

**`dataforseo_labs_google_ranked_keywords`**
- Use to analyze what a specific URL or domain ranks for
- For reference page analysis: pass the full URL with `https://`
- For competitor domain analysis: pass just the domain without `https://`
- Sort by `keyword_data.keyword_info.search_volume,desc`
- Set `limit: 50` for reference page, `limit: 30` for competitors
- Filter to organic results: `item_types: ["organic"]`
- **Returns per keyword**: `keyword_info.search_volume`, `keyword_info.cpc`, `keyword_properties.keyword_difficulty`, `search_intent_info.main_intent` — capture ALL four fields

**`dataforseo_labs_google_keyword_ideas`**
- Use to expand the keyword universe from seed keywords
- Pass 3-5 seed keywords from ranked_keywords results
- Set `limit: 50`
- Filter: `["keyword_info.search_volume", ">", 10]` to exclude zero-volume
- **Returns per keyword**: `keyword_info.search_volume`, `keyword_info.cpc`, `keyword_properties.keyword_difficulty`, `search_intent_info.main_intent` — capture ALL four fields

**`dataforseo_labs_google_keyword_suggestions`**
- Use to find long-tail variants of the primary keyword
- Pass the single primary keyword
- Set `limit: 30`
- These are great for FAQ items and H3 subheadings
- **Returns per keyword**: `keyword_info.search_volume`, `keyword_info.cpc`, `keyword_properties.keyword_difficulty` — capture all fields

**`dataforseo_labs_bulk_keyword_difficulty`**
- Use to assess ranking difficulty for keywords that didn't have KD in previous responses
- Pass up to 30 keywords at once
- Difficulty scale: 0-100 (lower = easier to rank)
- Target keywords with difficulty < 60 for a new site
- **Note**: most keywords already have KD from `ranked_keywords` and `keyword_ideas` — only call this for gaps

**`dataforseo_labs_search_intent`**
- Use to classify keyword intent for keywords that didn't have `search_intent_info` in previous responses
- Pass top 20 keyword candidates
- We want: informational or transactional intent
- Skip purely navigational keywords
- **Note**: `ranked_keywords` and `keyword_ideas` already return intent — only call this for gaps

**`dataforseo_labs_google_serp_competitors`**
- Use to find which domains compete for the same keyword space
- Helps identify competitors we might have missed

---

## 2. SERP Analysis Method

### Step 1: Primary SERP Pull

```
serp_organic_live_advanced:
  keyword: "{primary keyword}"
  location_name: "Italy"
  language_code: "it"
  depth: 30
  people_also_ask_click_depth: 3
```

This returns:
- Top 30 organic results (URLs, titles, descriptions, positions)
- People Also Ask questions (3 levels deep)
- Featured snippets, knowledge panels, etc.

### Step 2: Secondary SERP Pulls

Run 2-3 more SERP queries for important secondary keywords with `people_also_ask_click_depth: 2`. This captures PAA questions that only appear for variant phrasings.

### Step 3: Competitor Content Parsing

For the top 5 organic results, use `on_page_content_parsing` to extract:
- Full text content
- Heading structure (H1, H2, H3)
- Word count
- Tables present
- Links (internal and external)

### Step 4: Competitor Keyword Coverage

For the top 3 competitor domains, use `ranked_keywords` to discover:
- Keywords they rank for that we don't have in our list yet
- These are keyword gaps we must fill in our content

### Step 5: Build the Content Matrix

Combine all data into a comparison matrix showing which features/sections each competitor covers. Our page must cover the UNION of all competitors' content, plus our differentiators (calculator, schema markup, source links).

---

## 3. People Also Ask Extraction

PAA questions are gold — they represent real user queries and can trigger FAQ rich results.

### Collection

- Primary keyword SERP: `people_also_ask_click_depth: 3` (gets ~8-12 questions)
- Each secondary keyword SERP: `people_also_ask_click_depth: 2` (gets ~4-8 each)
- Typical total: 20-30 PAA questions per page topic

### Usage

PAA questions serve three purposes:

1. **FAQ items** — most PAA questions become FAQ entries with sources
2. **Content sections** — PAA questions that are broad enough deserve their own H2 section (e.g., "Come si calcola il contributo unificato?" → becomes a full "Come si Calcola" section)
3. **Long-tail keyword targets** — each PAA question is itself a searchable query; answering it well helps rank for that long-tail

### Categorization

Group PAA questions into 4-6 categories:
- **Calcolo** — "Come si calcola...", "Quanto costa...", "Qual è l'importo..."
- **Normativa** — "Quale legge...", "Art...", "Quando è stato introdotto..."
- **Procedura** — "Come si paga...", "Dove si presenta...", "Entro quando..."
- **Esenzioni** — "Chi è esente...", "Quando non si paga..."
- **Casi particolari** — "E se il valore è indeterminabile...", "Nel caso di..."
- **Sanzioni** — "Cosa succede se...", "Quali sono le conseguenze..."

---

## 4. Perplexity Tool Reference

### Tool Selection

| Tool | Use For | Speed |
|------|---------|-------|
| `perplexity_research` | Comprehensive topic deep-dive (primary tool) | Slow (30s+) |
| `perplexity_search` | Finding specific URLs, recent changes | Fast |
| `perplexity_ask` | Quick factual data points | Fast |
| `perplexity_reason` | Complex formula analysis, legal interpretations | Medium |

### Query Language

Always use Italian-language queries for best results on Italian legal topics:
- "calcolo contributo unificato 2026 scaglioni aggiornati"
- "art. 13 DPR 115/2002 testo vigente importi"
- "circolare ministero giustizia contributo unificato 2024 2025"

### Research Workflow

1. **`perplexity_research`** — start with a broad query about the full topic. This returns multi-source findings with citations.
2. **`perplexity_search`** with `recency: "year"` — find recent changes, new circulars, legislative updates.
3. **`perplexity_ask`** — targeted questions for specific data points: exact rates, dates, amounts.
4. **`perplexity_reason`** — when a formula or legal interpretation requires step-by-step logical analysis.

---

## 5. Primary Legal Sources for Italian Law

| Source | URL Pattern | Use For |
|--------|------------|---------|
| Normattiva | normattiva.it | Official consolidated legislation text |
| Gazzetta Ufficiale | gazzettaufficiale.it | Original publication of laws/decrees |
| Ministero della Giustizia | giustizia.it | Ministerial circulars, official interpretations |
| Altalex | altalex.com/guide/ | Comprehensive guides with organized tables |
| Agenzia delle Entrate | agenziaentrate.gov.it | Tax-related circulars and resolutions |

### Normattiva URL Patterns

- Laws: `https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:YYYY-MM-DD;NNN`
- DPR: `https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:YYYY-MM-DD;NNN`
- DM: `https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:YYYY-MM-DD;NNN`
- D.Lgs: `https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:YYYY-MM-DD;NNN`
- Specific article: append `~artNNN` to any URN

When the exact URN is unavailable, link to the Normattiva search page or the Altalex guide.

---

## 6. Cross-Validation Rules

- Every monetary amount must trace to a specific article and comma
- When two sources disagree, prefer the official legislative text (Normattiva)
- Always note the date of last update and which law introduced the latest change
- Flag any amount that changed in the last 24 months with an AlertBox variant="success"
- Verify calculator output against at least 3 known values from official sources
- All normativa URLs must resolve (use `perplexity_search` to cross-check uncertain URLs)
