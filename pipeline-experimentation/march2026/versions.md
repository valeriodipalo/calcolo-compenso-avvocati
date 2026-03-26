# /create-page Version Tracker

Tracks which version of the skill was used for each page build and what changed between versions.

---

## v2.1.0 (2026-03-26)

**File**: `.claude/commands/create-page.md` (489 lines)
**Status**: Current

### Changes from v2.0.0
- **Phase 1**: CSV export with all fields (SV, KD, CPC, Intent), opportunity score enrichment via `enrich_keywords.py`, standardized output template
- **Phase 1**: DFS tool docs updated — each tool now documents which fields it returns (SV, KD, CPC, Intent)
- **Phase 1**: `bulk_keyword_difficulty` and `search_intent` now only called for gaps (most data already in `ranked_keywords` / `keyword_ideas` responses)
- **Phase 2**: Removed duplicate SERP call — references Phase 1 results
- **Phase 3**: Restructured into 3 sub-steps (3.1 deep research, 3.2 keyword-driven gap analysis, 3.3 data compilation)
- **Phase 3**: raw-research.md preservation, citation parsing note, `[VERIFY]` tags, `reasoning_effort: "high"`
- **Phase 3**: Cross-references keywords.csv + PAA + competitor sections against raw research before supplementary calls
- **Phase 4**: Must read both raw-research.md and research-brief.md before writing
- **Phase 5**: Restored to 5 audits (seo-page, seo-schema, seo-content, seo-technical, seo-geo)
- **Phase 5**: Severity rubric (CRITICAL/HIGH/WARNING) with deterministic gate, max 3 iterations, summary table

### Pages built with this version
- calcolo-interessi-moratori (in progress — first page on v2.1.0)

---

## v2.0.0 (2026-03-10)

**File**: `.claude/commands/create-page.md` (361 lines)
**Status**: Superseded by v2.1.0

### Initial release
- 6-phase pipeline: Keyword Strategy -> Competitor Analysis -> Legal Research -> Implementation -> SEO Refinement -> Build & Publish
- 4 reference files: research-strategy.md, implementation-guide.md, content-model.md, schema-enrichment.md
- DataForSEO + Perplexity MCP integration
- Shared component library (AlertBox, BulletList, FeatureGrid, NormativaRefTable, etc.)

### Pages built with this version
- calcolo-danno-non-patrimoniale (completed, deployed, 420 lines page.tsx)

### Known issues at this version
- See skill-review.md for full analysis (30 issues identified, scored 6.5/10)

---

## v1.0.0 (pre-skill, manual)

**Status**: No formal skill — pages built manually

### Pages built manually
- calcolo-compenso (1673 lines — oldest page, predates skill)
- contributo-unificato (501 lines — template reference page, components extracted from this)
- calcolo-interessi-legali (284 lines — lightweight guide page)
