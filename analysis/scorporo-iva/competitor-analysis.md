# Competitor Analysis — Scorporo IVA

## Competitive Content Matrix

| Feature | money.it | avvocatoandreani | namirial | fattura.it | miolegale.it | **Our Page** |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|
| Word count | ~100 | ~1,100 | ~700 | ~700 | ~400 | **~3,200 target** |
| Interactive calculator | ✅ basic | ✅ 5-mode | ❌ | ❌ | ✅ dual | ✅ multi-mode + multi-aliquota |
| Aggiungi IVA mode | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ |
| All 4 aliquote (4/5/10/22) | ❌ | ❌ | ✅ | ❌ (3/4) | ❌ (3/4) | ✅ (all 4) |
| Aliquote 5% (2020 bonus) | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ |
| Aliquote reference table | ❌ | ❌ | inline | inline | inline | ✅ **full table** |
| Merceologie per aliquota | ❌ | ❌ | partial | partial | partial | ✅ full |
| Formula with derivation | ❌ | prose | ✅ | ✅ | ✅ best | ✅ all methods |
| Worked numerical examples | ❌ | ❌ | 1 | 3 | ❌ | **5+ per aliquota** |
| Coefficiente di divisione | ❌ | ❌ | 1,22 | 1,22/1,10/1,05/1,04 | 1,22/1,10/1,04 | ✅ all + explained |
| FAQ section | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ **20+ items** |
| DPR 633/1972 citations | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ **full** |
| Art. 13 base imponibile | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Art. 16 aliquote | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Tabella A DPR 633/1972 | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Storno IVA / sinonimi | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |
| IVA a credito vs a debito | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |
| Multi-aliquota invoice | ❌ | ❌ | ❌ | ✅ unique | ❌ | ✅ |
| Rounding / centesimi ballerini | ❌ | ❌ | ❌ | ✅ unique | ❌ | ✅ |
| Historical aliquote (20→21→22) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ **unique** |
| Scorporo avvocato (CPA + ritenuta) | ❌ | hints | ❌ | ❌ | ❌ | ✅ **unique — core site niche** |
| Split payment / reverse charge | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ **unique** |
| Scorporo in scontrino/ricevuta | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Excel formula snippet | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Schema markup (Article + WebApp) | minimal | minimal | minimal | minimal | minimal | ✅ full |
| Internal links to sibling tools | ✅ | ✅ | partial | ❌ | ✅ | ✅ cluster-aware |
| E-E-A-T / author info | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ disclaimer + sources |

---

## Tool/Calculator Recommendation

**Build**: Multi-mode, multi-aliquota calculator with 3 operations:

1. **Scorporo IVA** — input: totale ivato + aliquota → output: imponibile netto + IVA
2. **Aggiungi IVA** — input: imponibile + aliquota → output: totale + IVA
3. **Calcolo IVA da netto (modalità esplicita)** — input: netto + aliquota → output: IVA + totale (useful when user has only netto)

**Aliquote supported**: 4%, 5%, 10%, 22%, plus custom input (for historic or special aliquote)

**UX features**:
- Instant recalculation on input change
- Italian number formatting (€ 1.234,56)
- Aliquota selector with contextual suggestions ("4% libri", "10% alimentari", "22% ordinaria")
- Result block with copyable breakdown
- "Esempio rapido" chips (100€, 500€, 1.000€ quick-fills)

**Why this wins**: The best competitor tool (avvocatoandreani) offers 5 modes but the UX is dated (classic .php form, no live recalc). Money.it has modern UX but single-mode only. Miolegale has dual-mode but no extras. Our tool combines: modern UX + multi-mode + all 4 aliquote + contextual aliquota help + instant results.

---

## Section List for Our Page

Sidebar navigation (in order):

1. **Calcolatore** — interactive multi-mode tool
2. **Cos'è lo Scorporo IVA** — definition, use cases, synonyms (storno, IVA inversa)
3. **Formula e Calcolo** — full derivation, three methods (proportion, division, coefficient)
4. **Aliquote IVA 2026** — table of all aliquote with categorie merceologiche
5. **Scorporo IVA al 22%** — dedicated section, formula, esempi
6. **Scorporo IVA al 10%** — dedicated section
7. **Scorporo IVA al 5%** — dedicated section (bonus 2020)
8. **Scorporo IVA al 4%** — dedicated section
9. **Scorporo in Fattura** — multi-aliquota, arrotondamenti, centesimi ballerini
10. **Scorporo per Avvocati e Professionisti** — parcella con CPA 4% + IVA 22% + ritenuta 20%
11. **Casi Particolari** — split payment, reverse charge, regime forfettario
12. **Esempi Pratici** — worked examples table
13. **Scorporo IVA con Excel** — formula snippet
14. **Storia delle Aliquote IVA** — timeline 1973 → 2026
15. **FAQ** — 20+ items, PAA-driven
16. **Normativa di Riferimento** — DPR 633/1972, DM, Tabella A, Tabella A bis
17. **Fonti e Riferimenti** — E-E-A-T block

---

## Differentiator Summary

Top 10 unique angles that no competitor combines:

1. **FAQ with 20+ items** — 0/5 competitors have one
2. **DPR 633/1972 full citations** — 0/5 cite the foundational law
3. **All 4 aliquote including 5%** (with 2020 bonus history) — only namirial has all
4. **Historical aliquota table 1973-2026** — 0/5 have it
5. **Scorporo per avvocati + CPA 4% + ritenuta 20%** — perfect fit for our site, 0/5 develop it
6. **Split payment + reverse charge** explanations — 0/5
7. **Multi-aliquota invoice riga per riga** — only fattura.it
8. **Rounding / centesimi ballerini** — only fattura.it
9. **Contextual aliquota help** in calculator (categoria merceologica) — 0/5
10. **Multi-mode calculator** with instant recalc and modern UX — best-in-class

---

## SERP Competitive Positioning

- **Achievable target**: Top 3 for "scorporo iva" within 3-6 months
- **Reasonable stretch**: Position 1 (ahead of money.it) within 6-12 months via superior content depth + calculator UX + schema markup
- **Secondary captures**: "calcolo iva 22", "scorporo iva al 10", "formula scorporo iva", "scorporo iva fattura", plus avvocato-specific long-tails
- **Risk factor**: avvocatoandreani.it has 15+ years of domain authority on "scorporo iva andreani" branded searches — no defence needed, they'll keep that 90 SV

---

## Content Volume Target

**3,000-3,500 words** of editorial content (excluding calculator UI, tables, FAQ), justified by:
- 3× deepest competitor (andreani ~1,100 words)
- 15 major sections each needing ~200 words
- 20+ FAQ items adding ~800 words
- Full normativa section with quotes (~300 words)
- Examples and worked calculations (~500 words)
