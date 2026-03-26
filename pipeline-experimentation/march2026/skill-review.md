# /create-page Skill — Deep Review (March 2026)

**Skill version reviewed**: v2.0.0 (initial review) -> v2.1.0 (after refinements)
**Review date**: 2026-03-26
**Version tracker**: see [versions.md](versions.md)

---

## Changes Applied (v2.0.0 -> v2.1.0)

### This session (collaborative review)

| # | Issue | Status | Files Changed |
|---|-------|--------|---------------|
| — | Missing KD/CPC in keyword outputs + CSV export | **DONE** | `create-page.md` (P1 steps 3-5, step 7, gate), `research-strategy.md` (tool-by-tool guide) |
| 4 | Standardized keyword-strategy.md output template | **DONE** | `create-page.md` (P1 step 7) |
| — | Opportunity score columns in CSV (programmatic) | **DONE** | `scripts/enrich_keywords.py` (new), `create-page.md` (P1 step 8-9). Tested on calcolo-interessi-moratori (32 kw) |
| 1 | Remove duplicate SERP pull between P1 and P2 | **DONE** | `create-page.md` (P2 step 1 references P1 results) |
| 19 | Restore seo-technical and seo-geo audits | **DONE** | `create-page.md` (P5: 3 audits -> 5 audits) |
| 20 | Define SEO audit pass criteria with severity rubric | **DONE** | `create-page.md` (P5: CRITICAL/HIGH/WARNING rubric, deterministic gate, max 3 iterations, summary table) |

### User-driven changes (parallel terminal)

| Issue | Status | Description |
|-------|--------|-------------|
| Phase 3 restructured | **DONE** | Split into 3.1 (deep research), 3.2 (keyword-driven gap analysis), 3.3 (data compilation). Addresses original issues #9, #11, #13 |
| raw-research.md preservation | **DONE** | Full Perplexity output saved immediately, not lost between phases |
| Perplexity citation parsing note | **DONE** | Documents the inline `[N] https://...` format gotcha |
| `[VERIFY]` tag system | **DONE** | Unverified data flagged explicitly in research-brief |
| `reasoning_effort: "high"` | **DONE** | Higher quality deep research from Perplexity |
| Keyword-driven gap analysis (P3 step 3.2) | **DONE** | Cross-references keywords.csv, PAA, and competitor sections against raw research before supplementary calls. Partially addresses #13 |
| Phase 4 reads research files | **DONE** | "Critical" note: must read both raw-research.md and research-brief.md before writing |

### Infrastructure changes

| Change | Status | Description |
|--------|--------|-------------|
| CLAUDE.md updated | **DONE** | Repo structure includes `pipeline-experimentation/`, `analysis/{slug}/`, `.claude/commands/`. SEO word count corrected (800-1500 -> 2000-4000). References create-page v2.1.0 |
| Version bumped to 2.1.0 | **DONE** | `create-page.md` metadata |

---

## Evidence Base

Reviewed against: the command definition (`.claude/commands/create-page.md`, 489 lines at v2.1.0), 4 reference files, `validate_data.py`, `enrich_keywords.py`, the original creation changelog, and 2 real pipeline runs:
- **calcolo-danno-non-patrimoniale** — completed on v2.0.0 (keyword-strategy + competitor-analysis + research-brief + deployed page, 420 lines)
- **calcolo-interessi-moratori** — in progress, first page to use v2.1.0 changes (keyword-strategy + competitor-analysis + keywords.csv generated)

---

## Current Phase Scores (post v2.1.0)

| Phase | v2.0.0 | v2.1.0 | Key improvement |
|-------|:------:|:------:|-----------------|
| 1. Keyword Strategy | 7/10 | **8.5/10** | CSV export, opportunity scores, standardized template, all fields captured |
| 2. Competitor Analysis | 8/10 | **8.5/10** | No duplicate SERP call |
| 3. Legal Research | 7/10 | **8.5/10** | Structured sub-steps, keyword-driven gap analysis, raw output preservation, Italian-language explicit |
| 4. Implementation | 6/10 | **6.5/10** | Reads both research files, but still no data architecture planning step |
| 5. SEO Refinement | 5/10 | **8/10** | 5 audits, severity rubric, deterministic gate, max 3 iterations |
| 6. Build & Publish | 4/10 | **4/10** | Unchanged |
| **Overall** | **6.5/10** | **7.5/10** | |

---

## Remaining Issues (prioritized)

### High priority

| # | Issue | Phase | Effort | Impact |
|---|-------|-------|--------|--------|
| 14 | **Data architecture step** — plan TS interfaces before writing code. Hardest step in pipeline, least specified | P4 | Significant | High — weakest link |
| 29 | **JIT reference loading** — load only refs each phase needs (~1300 lines upfront) | Preamble | Medium | Medium — context savings |
| 28 | **Mandatory vs auto-proceed gates** — which gates pause in "all at once" mode? | Preamble | Medium | Medium — clearer modes |
| 22 | **Playwright screenshots + functional testing** before deploy | P6 | Medium | Medium — visual verification |
| 5 | **Content parsing fallback** — Playwright when `on_page_content_parsing` fails on JS/paywalled pages | P2 | Medium | Medium — reliability |

### Medium priority

| # | Issue | Phase | Effort | Impact |
|---|-------|-------|--------|--------|
| 15 | Post-build editorial word count verification | P4 | Significant | Medium |
| 21 | Robust dev server management (port conflicts, startup wait) | P5 | Medium | Low |
| 23 | Git commit guidance (what to stage, message format) | P6 | Medium | Low |
| 24 | Post-deploy verification (curl prod URL, check JSON-LD, GSC submit) | P6 | Medium | Low |
| 25 | Create SKILL.md or consolidate file locations | Cross | Medium | Low |
| 26 | Error handling and recovery paths | Cross | Significant | Medium |

### Deferred / declined

| # | Issue | Decision | Reason |
|---|-------|----------|--------|
| 3 | Keyword clustering | **DECLINED** | Risk of chasing too-niche keywords; current approach works |
| 13 | Cross-check all keywords against sections | **PARTIALLY ADDRESSED** | P3 step 3.2 now cross-references top-20 keywords against research. Full enforcement declined — would force thin content for low-value keywords |
| 6 | Structured diff in comparison matrix | **DEFERRED** | Nice to have, not blocking |
| 7 | Content tone/style analysis | **DEFERRED** | Implicit in the Italian legal niche |
| 8 | Strengthen Phase 2 gate | **DEFERRED** | Current gate works in practice |
| 10 | Normattiva URL fetch verification | **DEFERRED** | `[VERIFY]` tag system partially covers this |
| 12 | Reference/remove validate_data.py | **DEFERRED** | Low impact |
| 30 | Pipeline metrics/timing | **DEFERRED** | Nice to have for optimization |

---

## Files Modified in This Review

```
Modified:
  .claude/commands/create-page.md          # v2.0.0 -> v2.1.0 (361 -> 489 lines)
  .agents/skills/create-page/references/research-strategy.md  # Tool field documentation
  CLAUDE.md                                # Repo structure, SEO word count, skill version

Created:
  .agents/skills/create-page/scripts/enrich_keywords.py  # Opportunity score calculator
  analysis/calcolo-interessi-moratori/keywords.csv        # Test run output (32 keywords)
  pipeline-experimentation/march2026/skill-review.md      # This file
  pipeline-experimentation/march2026/versions.md          # Version tracker
```
