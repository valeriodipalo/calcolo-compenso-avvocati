# Competitor Analysis — Calcolo IRPEF

**Date**: 2026-05-16
**Top 5 organic competitors analyzed**: avvocatoandreani.it, irpef.info, studiocataldi.it, agenziaentrate.gov.it, pmi.it

---

## Comparison Matrix

| Feature | avvocato­andreani | studio­cataldi | pmi.it | Agenzia Entrate | irpef.info | **Our Page** |
|---|:--:|:--:|:--:|:--:|:--:|:--:|
| Interactive calculator | ✅ basic | ✅ basic | ✅ advanced | ❌ | ✅ basic | ✅ **advanced** |
| 2026 aliquote (33% sec.scaglione) | ✅ toggle | ❌ 35% | ✅ side-by-side | ✅ | ❌ | ✅ |
| 2025 aliquote | ✅ default | ✅ | ✅ | ✅ | ✅ | ✅ |
| 2024 aliquote (historical) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ **unique** |
| Year selector (multi-year toggle) | partial | ❌ | ❌ | ❌ | ❌ | ✅ **unique** |
| Worked examples for typical incomes | ❌ | ❌ | ❌ | minimal | ❌ | ✅ |
| Aliquota media calculation | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ |
| Aliquota marginale calculation | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ **unique** |
| Detrazioni base lavoro dipendente | external link | ❌ | ✅ | ❌ | ❌ | ✅ |
| Detrazioni pensione | external link | ❌ | ✅ | ❌ | ❌ | ✅ |
| Detrazioni autonomi | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Addizionali regionali e comunali | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ |
| No tax area explained | ❌ | ✅ | ✅ | ❌ | ❌ | ✅ |
| Confronto 2025 vs 2026 (risparmio) | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ |
| Esonero dichiarazione (tabella) | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Versamenti / scadenze F24 | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Editorial word count | ~600 | ~400 | ~900 | ~300 | ~200 | ✅ **3000+** |
| Structured FAQ | ❌ | ❌ | ✅ 8 items | ❌ | ❌ | ✅ **20+ items** |
| Schema markup (Article) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Schema markup (WebApplication) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Schema markup (Breadcrumb) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Normattiva citations (every law) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ **unique** |
| Citation of Legge 199/2025 | ❌ | ❌ | partial | ❌ | ❌ | ✅ |
| TUIR art. 11 verbatim quote | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Cross-link to TFR | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ |
| Cross-link to Ravvedimento Operoso | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Cross-link to Fattura Avvocato | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Cross-link to Scorporo IVA | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ |
| No registration required | ✅ | ✅ | partial | ✅ | ✅ | ✅ |
| Italian locale formatting | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| User ratings/social proof | ⭐ 4.5/5 | ❌ | ❌ | ❌ | ❌ | n/a (new) |

---

## Tool/Calculator Decision

**Build a comprehensive IRPEF calculator with these features**:

1. **Year toggle**: 2024 / 2025 / 2026 — single most-differentiating feature (no competitor offers this)
2. **Mode selector**:
   - **Lordo → Netto** (default): RAL → IRPEF lorda → detrazioni → IRPEF netta → reddito netto
   - **Comparison 2025 vs 2026**: side-by-side with `risparmio` highlight
   - **Aliquota media e marginale**: educational mode showing the progressive calculation
3. **Inputs**:
   - Reddito lordo (mandatory)
   - Tipo reddito: lavoro dipendente / pensione / autonomo (controls default detrazioni)
   - Deduzioni opzionali (es. abitazione principale, oneri deducibili)
   - Carichi di famiglia (opzionale — figli > 21, coniuge, altri familiari)
   - Addizionale regionale: dropdown 21 regioni con aliquote
   - Addizionale comunale: percentuale (default 0,8%)
4. **Outputs**:
   - IRPEF lorda con breakdown per scaglione (tabella visuale)
   - Detrazioni base applicate (calcolate da reddito)
   - IRPEF netta
   - Addizionali regionali + comunali
   - Aliquota media (IRPEF/reddito imponibile)
   - Aliquota marginale (aliquota dello scaglione superiore)
   - Per 2026: risparmio rispetto al 2025

This is **clearly superior to every competitor** in the SERP and creates strong dwell-time engagement.

---

## Proposed Content Sections (page structure)

1. **Calcolatore IRPEF** (top — interactive, before any editorial)
2. **Cos'è l'IRPEF** — definizione, base giuridica (TUIR/DPR 917/1986), natura del tributo
3. **Aliquote IRPEF 2026** — la novità centrale: 3 scaglioni (23% / 33% / 43%) + TUIR art. 11 modificato da L. 199/2025
4. **Tabella Scaglioni 2024-2025-2026** — confronto storico in LegalTable
5. **Come si calcola l'IRPEF** — formula progressiva passo-passo + esempi numerici
6. **Esempi pratici di calcolo** — tabella per redditi tipo (10k, 15k, 25k, 35k, 50k, 75k, 100k)
7. **Novità Legge di Bilancio 2026** — riduzione 35%→33%, beneficio massimo €440, riassorbimento >200k, decorrenza
8. **IRPEF Lorda, Netta e Aliquota Media** — concetti e differenze
9. **Detrazioni di Base** — lavoro dipendente, pensione, lavoro autonomo (formule e soglie)
10. **No Tax Area** — soglie 2026 per dipendenti, pensionati, autonomi
11. **Addizionali Regionali e Comunali** — come si calcolano, tabella regioni
12. **IRPEF in Busta Paga (Mensile)** — calcolo mensile, ragguaglio degli scaglioni
13. **Esonero dalla Dichiarazione** — chi non deve presentarla, soglie 2026
14. **Versamenti IRPEF (F24)** — saldo, acconto I/II, scadenze, modalità
15. **FAQ** — 20+ Q&A
16. **Fonti e Riferimenti** — bibliografia istituzionale
17. **Normativa di Riferimento** — TUIR, L. 199/2025, DPR 600/1973, etc.

---

## Keyword Gap Analysis

Keywords competitors rank for that we MUST cover:

| Keyword | Competitor ranking | Our section |
|---------|-------------------|-------------|
| aliquota irpef 2025 | avvocatoandreani #1 (SV 60500) | Tabella Scaglioni 2024-2025-2026 |
| aliquote irpef | multiple | Aliquote IRPEF 2026 |
| scaglioni irpef | multiple | Tabella Scaglioni + Aliquote section |
| nuove aliquote irpef 2026 | fiscoetasse #2 (SV 2900) | Novità Legge di Bilancio 2026 |
| calcola netto da lordo | rare (SV 12100) | Calcolatore + Lordo/Netto section |
| no tax area irpef | pmi.it, studiocataldi | No Tax Area section |
| addizionali irpef | nessuno copre bene | Addizionali Regionali e Comunali |
| irpef pensionati | rare | Detrazioni di Base (sub: pensione) |
| irpef in busta paga | rare | IRPEF in Busta Paga (Mensile) |
| detrazioni irpef 2026 | rare | Detrazioni di Base section |

---

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| AI Overview citing other sources first | Structure content for citation: clear definitions in lead paragraphs, numbered scaglioni, factual statements with source attribution |
| Agenzia Entrate official authority | Cite Agenzia Entrate explicitly in "Fonti" — we don't compete on authority, we offer interactivity |
| avvocatoandreani.it has 4.5★ rating | Build trust through depth of content, Normattiva citations, and clear last-updated date |
| Topic decay for "2025" keywords | Primary keyword is `calcolo irpef` (year-agnostic); year-specific sections separately addressable |
| Mobile UX for calculator | Use responsive grid, vertical stacking on mobile, large tap targets |
