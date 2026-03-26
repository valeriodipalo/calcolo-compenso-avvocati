# Competitor Analysis — Calcolo Interessi Moratori

**Date**: 2026-03-26

---

## Competitor Comparison Matrix

| Feature | Andreani | Avvocati.it | MioLegale | StudioCataldi | Altalex | **Our Page** |
|---------|:-------:|:-----------:|:---------:|:-------------:|:-------:|:------------:|
| Interactive calculator | ✅ | ✅ (redirect dejure.it) | ✅ | ✅ | ❌ | ✅ |
| Pre-2013 transactions toggle | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Agricultural products option | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |
| Historical rates table (2002-2026) | ❌ (separate page) | ❌ | ❌ (separate page) | ✅ (inline) | ✅ (inline) | ✅ |
| Formula explained | ✅ (brief) | ❌ | ❌ | ❌ | ✅ | ✅ |
| Art. 4 D.Lgs. 231 full text | ✅ (full) | ❌ | ❌ | ❌ | ✅ | ✅ |
| Art. 5 D.Lgs. 231 full text | ✅ (full) | ❌ | ❌ | ❌ | ✅ | ✅ |
| Normativa links (Normattiva) | ✅ (some) | ❌ | ✅ | ✅ (1 link) | ✅ | ✅ |
| FAQ section | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Schema markup (any) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Rich snippet / stars | ✅ (4.6★, 3575) | ❌ | ❌ | ❌ | ❌ | ✅ (target) |
| Meta description | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| H1 optimized | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Decorrenza interessi explained | ✅ (art. 4 full) | ❌ | ✅ (summary) | ❌ | ✅ | ✅ |
| Differenza legali vs moratori | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Interessi tra privati (art. 1224) | ❌ | ❌ | ❌ | ❌ | ✅ (brief) | ✅ |
| Mobile responsive | ❌ (iframe) | ✅ | ✅ | ❌ (iframe) | ✅ | ✅ |
| Word count (editorial) | ~800 | ~50 | ~600 | ~200 | ~6,300 | 3,000+ |
| Embed code offered | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Ads / CLS issues | ✅ (multiple) | ❌ | ❌ | ❌ | ✅ (paywall) | ❌ |
| Last updated | 2026 (rates) | Unknown | 2026 (rates) | 2023 (outdated!) | 2020 | 2026 |
| Cross-links to related tools | ✅ (sidebar) | ❌ | ✅ (2 links) | ❌ | ❌ | ✅ |
| Fonti e Riferimenti section | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

---

## Competitor Deep Dive

### 1. avvocatoandreani.it (Rank #1)
- **Strengths**: Full art. 4 and art. 5 text, pre-2013 toggle, agricultural products option, formula, embed code, 4.6★ rich snippet (massive CTR moat)
- **Weaknesses**: No meta description, no FAQ, no schema, ad-heavy, iframe-based calculator (not mobile-friendly), no heading structure in content, sidebar is a giant list of 100+ links
- **Content**: ~800 words of explanatory text + full legislative articles copy-pasted
- **Opportunity**: They have breadth but no depth. Their editorial content is thin. No FAQ, no structured data.

### 2. strumentario.avvocati.it (Rank #2)
- **Strengths**: Institutional domain (CNF), redirects to dejure.it tool
- **Weaknesses**: Essentially just a link to an external tool, almost no content (~50 words), loads of unrelated promotions
- **Content**: ~50 words
- **Opportunity**: Extremely thin — easy to beat on content depth

### 3. miolegale.it (Rank #3)
- **Strengths**: Clean calculator, good explanatory text, links to rate table page, agricultural products support, current rates
- **Weaknesses**: No FAQ, no schema, content is decent but not comprehensive (~600 words), no legislative text quotes
- **Content**: ~600 words across 4 sections
- **Opportunity**: Good tool but shallow content. We can match their calculator and far exceed their editorial

### 4. studiocataldi.it (Rank #4)
- **Strengths**: Full historical rates table inline (2002-2026), embed code
- **Weaknesses**: **Outdated** (page says "aggiornato al 2023" in SERP), iframe calculator, minimal editorial, no FAQ, no schema
- **Content**: ~200 words + rates table
- **Opportunity**: Their rates table is actually useful — but they're losing trust by appearing outdated in SERPs

### 5. altalex.com (Rank #10 for calculator, higher for informational queries)
- **Strengths**: Most comprehensive editorial (~6,300 words), 13 sections, covers legali vs moratori distinction, art. 1224, constitution in mora, commercial transactions
- **Weaknesses**: No calculator, partially paywalled, from 2020, no FAQ schema, no interactive elements
- **Content**: ~6,300 words (by far the deepest)
- **Opportunity**: We can match their depth AND have a calculator. They have no interactivity.

---

## Dwell-Time Tool Recommendation

**Calculator is mandatory** — 7 of top 10 results have one.

### Proposed calculator features:

**Mode 1: Transazioni Commerciali (D.Lgs. 231/2002)**
- Input: importo, data inizio mora, data fine calcolo
- Toggle: transazione pre/post 31/12/2012 (7% vs 8% maggiorazione)
- Toggle: prodotti agricoli/alimentari (+4% aggiuntivo)
- Auto-applies correct semestral BCE rate for each period
- Shows: interessi maturati, tasso applicato per periodo, totale

**Mode 2: Tra Privati (Art. 1224 c.c.)**
- Input: importo, data inizio mora, data fine calcolo
- Applies tasso legale (art. 1284 c.c.) — currently 1.60%
- Optional: tasso convenzionale pattuito
- Shows: interessi maturati

**Mode 3: Tasso fisso personalizzato**
- Input: importo, tasso %, data inizio, data fine
- Simple calculation for custom scenarios

### Additional interactive elements:
- **Historical rates table** (2002-2026) inline — searchable/sortable
- **Importo forfettario indicator** — show €40 forfettario when in Mode 1

---

## Proposed Content Sections

Based on union of all competitors + PAA questions + keyword gaps:

1. **H1**: Calcolo Interessi Moratori 2026 — Calcolatore Online Gratuito
2. **Calculator** (above the fold)
3. **Cosa sono gli interessi moratori** — definizione, art. 1224 c.c., funzione risarcitoria
4. **Normativa di riferimento** — D.Lgs. 231/2002, D.Lgs. 192/2012, D.Lgs. 198/2021, art. 1224 c.c.
5. **Come si calcolano gli interessi moratori** — formula I = C × T × G / 36500, esempio pratico
6. **Tasso di interesse moratorio 2026** — tasso BCE 2.15% + 8% = 10.15%, DM 10/12/2025
7. **Tabella storica tassi moratori (2002-2026)** — full table with BCE + maggiorazione + totale
8. **Decorrenza degli interessi moratori** — art. 4 D.Lgs. 231, 30 giorni, senza messa in mora
9. **Interessi moratori tra privati (art. 1224 c.c.)** — gap: no competitor covers this well
10. **Differenza tra interessi legali e moratori** — strong PAA signal
11. **Interessi moratori in fattura** — keyword target + practical use case
12. **Prodotti agricoli e agroalimentari** — maggiorazione +4%, D.Lgs. 198/2021
13. **Importo forfettario €40** — art. 6 D.Lgs. 231
14. **Interessi moratori e rivalutazione monetaria** — keyword target, cross-link to future rivalutazione page
15. **Fonti e Riferimenti** — Normattiva links, GU comunicati
16. **FAQ** (15-20 items from PAA) with FAQPage schema

---

## Content Volume Target

- Altalex has ~6,300 words but no calculator
- Andreani has ~800 words + calculator
- **Our target**: editorial + calculator + historical table + FAQ
- This exceeds all calculator-page competitors and provides 50%+ of Altalex's depth while adding interactivity
