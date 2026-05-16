# Competitor Deep Analysis — Compenso Avvocato Stragiudiziale

**Primary query:** `compenso avvocato stragiudiziale` (SV 4400) / `parametri stragiudiziali` (SV 1300)
**Date:** 2026-05-16

## Competitors Parsed (top 5)

1. **avvocatoandreani.it** (rank #1, 4.6 stars / 745 reviews) — calculator + dense editorial
2. **professionegiustizia.it** (rank #2) — JS-rendered table page; content parser returned nav-only (would need JS rendering)
3. **studiodipietro.it** (rank #3) — blog post that essentially mirrors Andreani's editorial
4. **miolegale.it** (rank #5/7) — clean static table (D.M. 147/2022 + D.M. 55/2014 side-by-side)
5. **avvocatodipietro.com** (rank #6/7) — long-form article version of Andreani's text + embedded iframe calculator

Additional reference: **consiglionazionaleforense.it** (rank #6) — authoritative source explaining what parametri forensi are; **foroeuropeo.it** (rank #8) — static table with explicit minimo/medio/massimo display.

## Feature Comparison Matrix

| Feature | Andreani | Profess.Giust. | StudioDP | MioLegale | AvvocatoDP | **Our Page** |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Interactive calculator (in-page) | YES (JS gated) | NO | NO | NO | EMBED (Andreani iframe) | **YES** (free, no gate) |
| Complete D.M. 147/2022 table | YES | YES | NO | YES | YES | **YES** |
| Both D.M. 55/2014 + D.M. 147/2022 comparison | NO | NO | NO | YES | NO | **YES** |
| Tabellare + Percentuale modes | YES | NO | NO | NO | YES | **YES** |
| Percentuali per valore > €520k | YES | YES | NO | YES | YES | **YES** |
| Aumenti/Riduzioni (-50% / +80%) | YES (text) | NO | NO | NO | YES | **YES (visual)** |
| Valore indeterminabile (art. 21) | YES | NO | NO | NO | YES | **YES** |
| Spese generali 15% (art. 2) | YES | NO | NO | NO | YES | **YES** |
| Spese esenti + trasferta (art. 27) | YES | NO | NO | NO | YES | **YES** |
| Accessori: CPA 4%, IVA 22%, ritenuta 20% | YES (incl./excl.) | NO | NO | NO | YES | **YES** |
| Worked examples | NO | NO | NO | NO | NO | **YES** |
| FAQ section with sources | NO | NO | NO | NO | NO | **YES (15-20)** |
| InlineNormLink to Normattiva | NO | NO | NO | NO | NO | **YES (every cit.)** |
| Cassazione 24481/2020 spese stragiudiziali = danno emergente | NO | NO | NO | NO | NO | **YES** |
| Differenziale per tipo attivita (parere, transazione, contratto) | NO | NO | NO | NO | NO | **YES** |
| JSON-LD Article + WebApplication | NO | NO | NO | NO | NO | **YES** |
| Mobile-responsive interactive UI | NO (table-based legacy) | YES (basic) | NO | YES | NO | **YES** |
| Ratings/reviews in SERP | 4.6 (745) | NO | NO | NO | NO | NO (new) |
| Word count (editorial) | ~3200 | ~250 | ~150 | ~250 | ~2800 | **target ≥3500** |

## Editorial Coverage by Competitor

**Andreani (the wall to beat):**
- Heavy on legal text, scarce on visual structure (long unbroken paragraphs)
- Covers: ambito di applicazione (art. 1), valore dell'affare (art. 21 all 7 commi), aumenti -50%/+80% (art. 19 c.1), valore indeterminabile (3 fasce custom: bassa/media/alta), valore di particolare importanza (€ 520.000), spese esenti, spese trasferta (art. 27), spese generali 15% (art. 2), accessori IVA/CPA, ritenuta d'acconto, formato numerico
- Calculator gated by registration — significant UX friction
- Title: "Parametri Stragiudiziali DM 55/2014" — title still references old decree (their authoritative weakness)

**MioLegale (clean tables, no editorial):**
- Best static table presentation; both decree versions side-by-side
- Zero editorial; loses to Andreani on depth, beats it on table clarity

**StudioDiPietro / AvvocatoDiPietro:**
- Mostly republished Andreani text with minor edits
- AvvocatoDiPietro embeds Andreani's iframe — no original calculator value

**ProfessioneGiustizia:**
- Authoritative-looking but content gated by JS — likely thin

## Dwell-time Opportunity — Interactive Calculator

**Recommendation: build a full-featured calculator. This is the page's single biggest dwell-time driver.**

The current SERP has only ONE working calculator (Andreani's, behind JS + registration gate). Foro Europeo and MioLegale show static tables only. A clean, instant, no-registration calculator is a substantial UX win and the primary differentiator.

### Calculator Requirements

1. **Two modes**:
   - **Tabellare** (default) — pick a bracket, get min/medio/max
   - **Percentuale** — for amministrazione beni (max 5% del valore amministrato per art. 21 / 19)
2. **Bracket selection** — all 6 monetary brackets + percentage brackets for valore > €520k
   - Includes "Valore indeterminabile" with 3 sub-options (bassa/media/alta) and "particolare importanza" (€520k)
3. **Compenso variations** — min (-50%), medio (parametro), max (+80%) per art. 19 c.1
4. **Ulteriore valutazione** — slider 0% to +80% for soggettiva incremento
5. **Spese**:
   - Spese esenti (non imponibili, es: marche da bollo)
   - Spese trasferta (imponibili per art. 27)
   - Spese generali 15% (art. 2) — auto-applied, toggleable
6. **Accessori**:
   - CPA 4% (Cassa Forense) — toggleable
   - IVA 22% — toggleable
   - Ritenuta d'acconto 20% — toggleable
7. **Riepilogo finale** — line-by-line breakdown: Compenso base + Spese generali + Spese imponibili + CPA + Imponibile IVA + IVA + Spese esenti + Totale fattura - Ritenuta = Netto a pagare
8. **Copy result** — one-click copy of the breakdown for use in fattura/notula

This calculator + the existing `/calcolo-fattura-avvocato` provide the user the full workflow: calculate compenso → click through to generate fattura.

## Proposed Page Structure

Based on union of competitor coverage + PAA + uncovered angles:

1. **Hero** — H1 "Calcolo Compenso Avvocato Stragiudiziale 2026: Parametri D.M. 55/2014 e D.M. 147/2022" + breve intro + CTA "Apri calcolatore"
2. **Calcolatore Interattivo** — the main tool
3. **Tabella Parametri Stragiudiziali (D.M. 147/2022 Tab. 25)** — completa con min/medio/max per ogni scaglione
4. **Tabella Storica D.M. 55/2014** — confronto pre/post aggiornamento (mostra l'aumento ~5,2% in media)
5. **Come si Calcola il Compenso Stragiudiziale** — formula + esempio pratico passo-passo
6. **Tabella Parametri per Valore > €520.000 (Percentuali a Scaglioni)** — tabella aliquote 3% → 0,25%
7. **Determinazione del Valore dell'Affare (Art. 21 D.M. 55/2014)** — tutti i 7 commi spiegati con casi pratici
8. **Valore Indeterminabile** — €26.000-€260.000 default, €520.000 particolare importanza
9. **Aumenti e Riduzioni** (-50% / +80% art. 19 c.1) — quando si applica, esempi
10. **Spese Generali 15%** (Art. 2 D.M. 55/2014) — natura forfettaria, obbligatorieta
11. **Spese Esenti, Spese Imponibili, Spese di Trasferta** (Art. 27) — distinzione, regime IVA
12. **Accessori: CPA 4%, IVA 22%, Ritenuta d'Acconto 20%** — calcolo, ordine di applicazione
13. **Compenso per Tipo di Attivita Stragiudiziale** — parere, transazione, contratto, mediazione, recupero crediti, consulenza continuativa
14. **Differenza Stragiudiziale vs Giudiziale** — confronto parametri, quando una sfocia nell'altra
15. **Spese Stragiudiziali: Chi Paga? (Cass. 24481/2020)** — danno emergente, recuperabilita in giudizio
16. **Preventivo Obbligatorio (L. 124/2017)** — quando e come formularlo
17. **Differenza Compenso Pattuito vs Parametri** — pattuizione contrattuale, ipotesi di mancata determinazione
18. **Normativa di Riferimento** — D.M. 55/2014, D.M. 147/2022, D.M. 37/2018, L. 247/2012
19. **Circolari Ministeriali / Sentenze Cassazione** — Cass. SS.UU. 19427/2018 valore indeterminabile, Cass. 24481/2020, ecc.
20. **FAQ (15-20 items)** — copertura PAA + long-tail
21. **Fonti e Riferimenti** — link istituzionali (Normattiva, CNF, Cassazione)

## Strategic Gaps to Exploit

1. **No competitor explains the +5-8% bump from D.M. 55/2014 → D.M. 147/2022** — quantify and visualize.
2. **No competitor addresses "chi paga le spese stragiudiziali"** (PAA question) with Cass. 24481/2020 ruling — exclusive content opportunity.
3. **No competitor breaks down "compenso per tipo di attivita"** (parere vs transazione vs contratto) — directly addresses 6+ Google related searches.
4. **No competitor has a worked example** with all calculations transparent (Compenso base → Spese generali → CPA → IVA → Ritenuta) — high citability for AI Overview.
5. **No competitor links to the existing calculator ecosystem** (calcolo-compenso, calcolo-fattura-avvocato, scorporo-iva) — we get cross-cluster internal-link advantage.
6. **No competitor has FAQ markup with citations** — even without FAQ rich results (restricted since Aug 2023), the on-page FAQ matters for LLM/GEO citation.

## Data Captured for Phase 3/4

### D.M. 147/2022 Tab. 25 - Valori medi (aggiornati al 23/10/2022)

| Scaglione | Valore medio (parametro) |
|---|---:|
| € 0,01 - € 1.100 | € 284,00 |
| € 1.100,01 - € 5.200 | € 1.276,00 |
| € 5.200,01 - € 26.000 | € 1.985,00 |
| € 26.000,01 - € 52.000 | € 2.410,00 |
| € 52.000,01 - € 260.000 | € 4.536,00 |
| € 260.000,01 - € 520.000 | € 6.164,00 |

### D.M. 55/2014 Tab. 25 - Valori medi originali (vigenti fino al 22/10/2022)

| Scaglione | Valore medio (parametro) |
|---|---:|
| € 0,01 - € 1.100 | € 270,00 |
| € 1.100,01 - € 5.200 | € 1.215,00 |
| € 5.200,01 - € 26.000 | € 1.890,00 |
| € 26.000,01 - € 52.000 | € 2.295,00 |
| € 52.000,01 - € 260.000 | € 4.320,00 |
| € 260.000,01 - € 520.000 | € 5.870,00 |

### Percentuali per valore > €520.000 (D.M. 147/2022)

| Scaglione | Percentuale |
|---|---:|
| € 520.000,01 - € 2.000.000 | 3,00% |
| € 2.000.000,01 - € 4.000.000 | 2,75% |
| € 4.000.000,01 - € 6.000.000 | 2,50% |
| € 6.000.000,01 - € 8.000.000 | 2,25% |
| € 8.000.000,01 - € 10.000.000 | 2,00% (verifica — Andreani mostra 2.99% probabile refuso) |
| € 10.000.000,01 - € 12.000.000 | 1,75% |
| € 12.000.000,01 - € 14.000.000 | 1,50% |
| € 14.000.000,01 - € 16.000.000 | 1,25% |
| € 16.000.000,01 - € 18.000.000 | 1,00% |
| € 18.000.000,01 - € 20.000.000 | 0,75% |
| € 20.000.000,01 - € 22.000.000 | 0,50% |
| Oltre € 22.000.000 | 0,25% |

(Phase 3 must verify the 2,00% vs 2,99% point and confirm full schedule from Normattiva)

### Variazioni (art. 19 c.1 D.M. 55/2014)
- Minimo: -50% del valore medio
- Massimo: +80% del valore medio
- Ulteriore valutazione soggettiva: 0% a +80%

### Spese
- Spese generali (forfettarie): 15% sul compenso (art. 2)
- Spese trasferta: rimborso art. 27 (imponibili)
- Spese esenti: anticipazioni in nome/conto cliente (es. marche da bollo) — non imponibili

### Riferimenti normativi
- L. 247/2012 (nuovo ordinamento forense) art. 13 c.6 — base normativa per i parametri
- D.M. 55/2014, GU n. 77 del 02/04/2014, in vigore dal 03/04/2014
- D.M. 37/2018, modifica D.M. 55/2014
- D.M. 147/2022, GU n. 236 del 08/10/2022, in vigore dal 23/10/2022
- Cass. 24481/2020 — spese legali stragiudiziali come danno emergente
- L. 124/2017 art. 1 c.150 — preventivo scritto obbligatorio
