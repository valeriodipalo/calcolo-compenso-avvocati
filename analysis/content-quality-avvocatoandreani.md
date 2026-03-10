# Content Quality Analysis: avvocatoandreani.it

**Date:** 2026-03-10
**Analyst:** Content Quality Specialist (Sept 2025 QRG)
**Pages Analyzed:** 4 (Homepage + 3 tool pages)
**Audience:** Italian legal professionals and citizens

---

## EXECUTIVE SUMMARY

**Overall Content Quality Score: 58/100**

avvocatoandreani.it is a long-established Italian legal resource portal (active since 2007) offering free interactive tools for lawyers and citizens. The site demonstrates genuine first-hand legal expertise and has accumulated strong user engagement signals (thousands of ratings). However, it suffers from significant content quality gaps: missing meta descriptions, thin explanatory content on tool pages, poor readability scores, inconsistent heading hierarchy, and an outdated OG URL still referencing HTTP. The core tool pages function well as interactive calculators but lack the supporting editorial content needed to satisfy modern E-E-A-T expectations and AI citation readiness.

---

## PAGE-BY-PAGE ANALYSIS

### 1. Homepage (/)

| Metric | Value | Assessment |
|--------|-------|------------|
| Word count | ~2,241 (incl. nav/boilerplate) | PASS (min 500) but heavily inflated by navigation menus |
| Unique content words | ~800 estimated | Borderline after stripping shared nav |
| Title | "AvvocatoAndreani.it Risorse Legali" | WEAK - generic, no value proposition |
| Meta description | MISSING | CRITICAL FAIL |
| H1 tags | 11 | FAIL - severe H1 abuse (should be 1) |
| Gulpease Index | 30.5 | FAIL - extremely hard to read |
| Structured data | WebSite schema only | MINIMAL |
| Breadcrumbs | Not present | MISSING |
| Canonical | Present (correct) | PASS |
| OG URL | http:// (not https) | FAIL - insecure protocol in OG tag |

**Content Assessment:**
The homepage functions as an application directory more than a content page. It is essentially a massive navigation hub listing dozens of tools organized by category (Rivalutazioni ISTAT, Scadenze, Calcoli, etc.) plus a news feed. There is almost no explanatory paragraph content explaining what the site offers, who runs it, or why users should trust it. The 11 H1 tags destroy any semantic hierarchy.

**Keyword Analysis:**
- "calcolo" appears 88 times (3.93% density) -- borderline keyword stuffing, though largely organic given the tool listing context
- "applicazioni" at 0.98% -- acceptable
- "avvocato" at only 0.22% -- surprisingly low for the brand name

---

### 2. Calcolo Percentuale (/servizi/calcolo-percentuale.php)

| Metric | Value | Assessment |
|--------|-------|------------|
| Word count | ~1,418 | Treated as service/tool page: PASS (min 800) |
| Unique content words | ~1,218 | Adequate |
| Title | "Calcolo Percentuale di un numero, percentuale inversa e molti altri calcoli correlati" | LONG (89 chars) but descriptive |
| Meta description | MISSING | CRITICAL FAIL |
| H1 tags | 2 | FAIL - should be 1 |
| H2 tags | 11 | Good section structure |
| Gulpease Index | 45.4 | BELOW TARGET for general audience |
| Schema | WebApplication + AggregateRating (4.55/5, 398 votes) | GOOD |
| Breadcrumbs | Present (Applicazioni > Applicazioni Varie > Calcolo Percentuale) | PASS |
| Form elements | 32 | Interactive tool - appropriate |

**Content Assessment:**
This is the strongest tool page for content quality. It provides:
- A clear introductory paragraph explaining the tool's purpose
- Individual H2 sections for each calculation type (percentuale diretta, inversa, incidenza, variazione, incremento, decremento)
- Mathematical formulas (V = N x P / 100, etc.)
- Practical examples (e.g., cedolare secca calculation)
- Step-by-step usage instructions

The explanatory content below the calculator adds genuine educational value. The formulas and examples demonstrate expertise and provide quotable, citeable content.

**Keyword Analysis:**
- "percentuale" at 3.81% -- elevated but contextually appropriate for a calculator page
- "calcola" at 2.26% -- slightly high, some instances are UI labels

---

### 3. Calcolo Scadenze (/servizi/calcolo_scadenze_termini_udienze.php)

| Metric | Value | Assessment |
|--------|-------|------------|
| Word count | ~858 | As service/tool page: PASS (min 800) but barely |
| Unique content words | ~658 | THIN CONTENT WARNING |
| Title | "Calcolo Scadenze, Termini Processuali e Giorni tra Date" | Good, clear, proper length |
| Meta description | MISSING | CRITICAL FAIL |
| H1 tags | 1 | PASS |
| H2 tags | 4 (2 are "Normativa") | WEAK - duplicate H2 text |
| Gulpease Index | 44.2 | BELOW TARGET |
| Schema | WebApplication + AggregateRating (4.54/5, 5,468 votes) | EXCELLENT engagement |
| Breadcrumbs | Present | PASS |
| Form elements | 29 | Interactive tool - appropriate |

**Content Assessment:**
This is the weakest page in terms of content depth. Despite having 5,468 user ratings (highest of all analyzed pages), the explanatory content is minimal:
- A brief introductory paragraph about the tool's purpose
- Notes about holiday handling and ferragosto suspension
- A "Normativa" section referencing DLGS 149/2022 reform
- Very little educational content about how legal deadlines work in Italian procedure

The page leans heavily on the interactive tool without surrounding it with enough contextual content. A user looking for information about "termini processuali" gets a calculator but minimal guidance on which deadlines apply in their situation.

**Keyword Analysis:**
- "scadenze" and "calcolo" both at 1.75% -- acceptable
- "termini" at 1.63% -- acceptable
- "processuali" at 0.82% -- appropriate

---

### 4. Calcolo Compenso Avvocati (/servizi/calcolo-compenso-avvocati-parametri-civili-2014.php)

| Metric | Value | Assessment |
|--------|-------|------------|
| Word count | ~3,403 | PASS - well above minimum |
| Unique content words | ~3,203 | STRONG |
| Title | "Parametri Avvocati 2026, Calcolo Compensi Forensi Civili DM 55/2014" | GOOD - includes year and legal reference |
| Meta description | MISSING | CRITICAL FAIL |
| H1 tags | 3 | FAIL - should be 1 |
| H2 tags | 12 | GOOD section structure |
| Gulpease Index | 48.9 | BELOW TARGET but acceptable for legal/technical content |
| Schema | WebApplication + AggregateRating (4.62/5, 3,579 votes) | EXCELLENT |
| Breadcrumbs | Present (Applicazioni > Fatturazione Avvocati > Parametri Forensi Civili) | PASS |
| Form elements | 102 | Complex interactive tool - appropriate |
| Legal references | 99 citations | EXCELLENT |

**Content Assessment:**
This is by far the strongest page. It demonstrates genuine legal expertise through:
- Detailed explanation of DM 55/2014 and its amendments (DM 147/2022)
- Specific article references (Art. 1, Art. 4, Art. 5 comma 6, Art. 9, etc.)
- Explanation of the "valori medi" concept from ministerial tables
- Detailed treatment of "cause di valore indeterminabile" with three complexity bands
- Notes about when DM 55/2014 applies vs. does not apply (not for client quotes)
- Historical context (pre-October 2022 rules vs. current)
- Extract from "Relazione Illustrativa" (Art. 4)
- Phase-by-phase breakdown of legal proceedings

The content reads as written by someone with genuine first-hand experience in fee calculation for Italian civil proceedings. The level of specificity (exact GU publication numbers, enforcement dates, article-comma references) cannot be replicated by generic AI content.

**Keyword Analysis:**
- "compenso" at 0.88% -- natural
- "fase" at 0.76% -- organic usage in phase descriptions
- "parametri" at 0.56% -- appropriate
- No keyword stuffing detected

---

## E-E-A-T BREAKDOWN

### Experience (Score: 62/100, Weight: 20%)

**Positive signals:**
- Site active since 2007 (19 years of operation)
- Copyright notice: "2007-2026 Avvocato Andreani"
- Tools clearly built by someone who understands Italian legal workflows
- The compenso calculator mirrors exact ministerial table logic
- The scadenze tool handles edge cases (sospensione feriale, emergenza COVID)
- Practical examples in the percentuale tool (cedolare secca)

**Negative signals:**
- No case studies or real-world application stories
- No user testimonials beyond aggregate ratings
- No "About the Author" or professional biography page linked from tool pages
- No description of the author's legal practice experience
- The brand name implies a single lawyer ("Avvocato Andreani") but no professional credentials are displayed on analyzed pages

### Expertise (Score: 72/100, Weight: 25%)

**Positive signals:**
- Deep knowledge of DM 55/2014, DM 140/2012, DM 147/2022 (compenso page)
- Correct handling of 29 competenze with varying phase structures
- 99 legal references on the compenso page alone
- Accurate explanation of the "di regola" doctrine in fee parameters
- Correct treatment of CPA (4%), spese generali (15%), IVA (22%)
- Mathematical formulas on the percentuale page
- Understanding of art. 91/92 RD n.12/1941 exceptions for sospensione feriale

**Negative signals:**
- No external credentials cited (Ordine degli Avvocati membership, etc.)
- No academic or professional publications referenced
- The author is listed generically as "AvvocatoAndreani.it" in schema, not as a named professional with qualifications
- No peer review or expert validation signals

### Authoritativeness (Score: 55/100, Weight: 25%)

**Positive signals:**
- High aggregate ratings across tools (3,579 to 5,468 votes)
- Domain age and longevity (2007-present)
- Associated news subdomain (news.avvocatoandreani.it) with legal journalism
- Social media presence (Facebook, Twitter, LinkedIn, Pinterest)
- Multiple satellite domains (separazione-e-divorzio.it, forogiuridico.it, iussearch.it)
- Comprehensive tool ecosystem (40+ legal calculators)

**Negative signals:**
- No inbound citation evidence from authoritative legal sources
- No mentions from bar associations or official legal bodies
- No Wikipedia references or notable press coverage visible
- "author" in schema is the website name, not a recognized legal authority
- No Google Knowledge Panel indicators

### Trustworthiness (Score: 48/100, Weight: 30%)

**Positive signals:**
- HTTPS enabled
- Canonical URLs present
- Privacy/Cookie policy pages linked
- GDPR/TCF consent mechanism (IAB __tcfapi detected)
- Copyright/disclaimer page linked
- User registration system with login

**Critical negative signals:**
- **No P.IVA (VAT number) displayed** -- required by Italian law for professional websites
- **No meta descriptions on ANY page** -- all four pages lack this critical tag
- **OG URL uses HTTP instead of HTTPS** -- trust signal mismatch
- **No visible email address or phone number** on analyzed pages
- **No physical address displayed** on analyzed pages
- **Google Ads present** -- monetization without clear editorial independence signals
- **nofollow on all pages** -- unusual sitewide policy suggesting link trust issues
- Contact page exists but is a form ("lascia_messaggio"), not direct contact info
- No clear editorial policy or content review process documented

---

## AI CITATION READINESS SCORE: 42/100

AI systems (Google AI Overviews, ChatGPT, Perplexity, etc.) need structured, quotable, factual content to cite a source. Assessment:

### What works for AI citation:
1. **Compenso page**: Contains specific, quotable facts:
   - "Il DM 55/2014 e stato pubblicato sulla Gazzetta Ufficiale n. 77 del 2/4/2014 ed e in vigore dal 3/4/2014"
   - "diminuzione fino al 50% e aumento fino al 50% per tutte le fasi"
   - "le cause di valore indeterminabile si debbano considerare comprese di regola tra 26.000 e 260.000 euro"
2. **Percentuale page**: Mathematical formulas are quotable (V = N x P / 100)
3. **WebApplication schema** with AggregateRating makes tools discoverable

### What fails for AI citation:
1. **No meta descriptions** -- AI systems use these for source summaries
2. **No FAQ schema** -- despite having content that could be structured as Q&A
3. **No HowTo schema** -- the tool pages are perfect candidates
4. **Heading hierarchy issues** -- multiple H1s confuse content structure extraction
5. **Tool-heavy, text-light** -- interactive calculators cannot be "quoted" by AI
6. **No definition lists or clearly structured factual statements** outside the compenso page
7. **No publication/last-updated dates in machine-readable format** on content sections
8. **BreadcrumbList microdata has malformed itemtype** ("https://schema.orgThing/" missing slash)

---

## CONTENT FRESHNESS ASSESSMENT

| Signal | Status |
|--------|--------|
| Year in compenso title | "2026" -- CURRENT |
| DM 147/2022 reference | Up to date with latest ministerial decree |
| COVID sospensione handling | Still referenced (appropriate for historical calculations) |
| DLGS 149/2022 reform (Cartabia) | Referenced in scadenze normativa section |
| Copyright footer | 2007-2026 -- CURRENT |
| Dynamic date display | "Martedi 10 marzo 2026" -- LIVE |
| Content body dates | Most recent legislative reference is 2022 |

**Freshness verdict:** The tools themselves appear actively maintained and current. However, there is no visible "last updated" date on individual pages, and the editorial/explanatory content may not have been refreshed alongside tool updates.

---

## AI-GENERATED CONTENT ASSESSMENT

**Risk level: LOW**

The content on avvocatoandreani.it does NOT exhibit markers of low-quality AI generation:
- The legal specificity (exact GU numbers, article-comma references, enforcement dates) indicates human authorship by a legal professional
- The explanatory notes contain opinions and practice-oriented guidance ("si ricorda che il DM 55/2014, laddove fa uso della locuzione 'di regola', conferisce alle predette variazioni carattere assolutamente non vincolante")
- The tool logic requires deep domain knowledge that goes beyond what generic AI would produce
- There is no repetitive paragraph structure or generic phrasing
- The Italian language is natural and professional, with appropriate legal register

However, the news subdomain (news.avvocatoandreani.it) was not analyzed and could warrant separate review.

---

## PRIORITY RECOMMENDATIONS

### Critical (Impact: High, Effort: Low)

1. **Add meta descriptions to ALL pages.** Every single analyzed page lacks a meta description. This is the single most impactful fix. Recommended:
   - Homepage: "Oltre 40 applicazioni gratuite per avvocati e professionisti: calcolo compensi, rivalutazioni ISTAT, scadenze processuali, contributo unificato e molto altro. Dal 2007."
   - Compenso: "Calcolo compensi avvocati DM 55/2014 aggiornato al DM 147/2022. Simulatore gratuito per la liquidazione giudiziale dei compensi forensi civili con aumenti, riduzioni e spese."
   - Scadenze: "Calcolo scadenze e termini processuali con sospensione feriale automatica. Calcola giorni tra date e prossima scadenza utile non festiva."
   - Percentuale: "Calcolo percentuale online: percentuale diretta, inversa, variazione, incremento e sconto. Con formule, esempi e spiegazioni."

2. **Fix H1 hierarchy.** Reduce to exactly 1 H1 per page. The homepage has 11 H1 tags -- each section heading should be H2 or H3.

3. **Fix OG URL protocol.** Change `og:url` from `http://` to `https://` on the homepage.

4. **Display P.IVA and contact information.** Italian professional websites are legally required to display the VAT number. Add a visible footer with P.IVA, studio address, PEC address, and Ordine degli Avvocati enrollment.

5. **Fix malformed BreadcrumbList microdata.** The itemtype "https://schema.orgThing/" is missing a slash separator; it should be "https://schema.org/Thing".

### High Priority (Impact: High, Effort: Medium)

6. **Add FAQ schema** to the compenso page. The existing content about "cause di valore indeterminabile," "ambito di applicazione," and "aumenti e riduzioni" is already structured as implicit Q&A. Wrapping it in FAQPage schema would dramatically improve AI citation readiness and SERP feature eligibility.

7. **Add HowTo schema** to tool pages. The step-by-step usage instructions are perfect candidates for HowTo structured data.

8. **Expand scadenze page content** from 658 unique words to at least 1,200. Add:
   - A section explaining common processual deadlines (art. 183, 190, 325 c.p.c.)
   - Examples of how to use the tool for specific scenarios
   - An explanation of when sospensione feriale applies and exceptions
   - Reference table of key deadline durations

9. **Add "last updated" dates** in machine-readable format (dateModified in schema) to each tool page.

10. **Create an author/about page** that establishes the credentials of "Avvocato Andreani" -- Ordine membership, years of practice, areas of specialization, and link it from all tool pages.

### Medium Priority (Impact: Medium, Effort: Medium)

11. **Improve readability.** Gulpease scores of 30-48 are concerning even for legal content. Break long sentences, add bullet lists, use shorter paragraphs. Target: Gulpease 55+ for tool pages, 50+ for the compenso page.

12. **Add definition/glossary sections** to tool pages. Define key terms (compenso, parametri, scaglione, fase, ecc.) in a structured format that AI systems can extract.

13. **Add "Domande Frequenti" sections** with explicit Q&A format to each tool page to capture long-tail queries and improve AI citation potential.

14. **Implement Organization or Person schema** on the homepage to establish entity identity, linking to social profiles and official registrations.

15. **Review ad placement** to ensure ads do not interfere with above-the-fold content or push main content below the fold (Page Experience signals).

---

## COMPETITIVE VULNERABILITY ASSESSMENT

The tool pages are the site's primary asset. The risk of a competitor replicating these tools (as the Piattaforma Avvocati project demonstrates with calcolo-compenso) is real. The site's defensive moat relies on:

1. **Domain age and accumulated trust** (2007-present) -- strong but not permanent
2. **User ratings** (3,500-5,400 votes per tool) -- significant social proof
3. **Breadth of tool ecosystem** (40+ tools) -- hard to replicate quickly
4. **Legal content depth** (compenso page) -- genuinely expert content

**Vulnerabilities:**
- The missing meta descriptions, thin content on scadenze, and lack of structured data mean a well-optimized competitor with comparable tools and better content depth could capture significant traffic
- The lack of personal E-E-A-T (no author bio, no credentials displayed) means the site relies entirely on domain-level authority rather than person-level authority
- Tool pages with minimal explanatory content are at risk from Google's helpfulness signals -- a competitor providing the same calculator plus comprehensive educational content would have an advantage

---

## SCORE SUMMARY

| Component | Score | Weight | Weighted |
|-----------|-------|--------|----------|
| Experience | 62 | 20% | 12.4 |
| Expertise | 72 | 25% | 18.0 |
| Authoritativeness | 55 | 25% | 13.8 |
| Trustworthiness | 48 | 30% | 14.4 |
| **E-E-A-T Composite** | | | **58.6** |

| Additional Scores | Value |
|---|---|
| Content Quality Score | 58/100 |
| AI Citation Readiness | 42/100 |
| Technical SEO Health | 52/100 |
| Content Freshness | 70/100 |

---

*Analysis based on content fetched 2026-03-10. News subdomain (news.avvocatoandreani.it) not included in this analysis scope.*
