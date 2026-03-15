# Piano SEO Strategico — Piattaforma Avvocati

> **Obiettivo**: Replicare e superare avvocatoandreani.it con tool legali/fiscali gratuiti di qualita superiore.
> **Audience**: 100% italiana | **Stack**: Next.js 16 + TypeScript + Tailwind CSS + shadcn/ui
> **Data raccolta**: Marzo 2026 via DataForSEO MCP

---

## 1. Intelligence sul Competitor

### 1.1 Metriche avvocatoandreani.it (Italia, IT)

| Metrica | Valore |
|---------|--------|
| Keyword totali rankati | 31,758 |
| Traffico organico stimato (ETV) | ~780,000/mese |
| Valore equivalente ads | ~€464,000/mese |
| Keyword in posizione 1 | 1,263 |
| Keyword in top 3 | 2,417 |
| Keyword in top 10 | 4,998 |
| Punteggio tecnico | 62/100 |
| Punteggio contenuto | 58/100 |
| E-E-A-T Trust | 48/100 |
| AI Citation Readiness | 42/100 |

### 1.2 Debolezze Sfruttabili

| Debolezza | Nostro Vantaggio |
|-----------|------------------|
| Nessuna meta description su NESSUNA pagina | Meta description ottimizzate su ogni pagina |
| 11 tag H1 su homepage | 1 solo H1 semantico per pagina |
| Nessuna XML sitemap (404) | Sitemap automatica Next.js |
| Content rate 2.4% (quasi solo tool, zero testo) | Tool + guida + FAQ + contenuto ricco (>20% content rate) |
| P.IVA/contatti assenti (obbligo di legge IT) | Trasparenza totale: autore, credenziali, P.IVA, contatti |
| 20 slot AdSense con CLS | Zero ads invasivi, CWV score 95+ |
| OG URL usa HTTP | HTTPS ovunque, OG coerenti |
| Schema limitato (no FAQ, no HowTo) | JSON-LD completo per ogni pagina |
| AI citation readiness 42/100 | Contenuto strutturato per AI Overviews/Perplexity |
| Sottodominio news morto (ETV 5K su 3,260 kw) | Blog integrato in `/blog/` |
| Design 2010, PHP, lento | Next.js SSG, responsive, velocissimo |

### 1.3 SERP Competitor per Tool Legali

| Competitor | Keyword in comune | Posizione media | Note |
|------------|-------------------|-----------------|------|
| avvocatoandreani.it | 8,867 | 4.7 | Competitor di riferimento |
| studiocataldi.it | 8,867 | 32.8 | Rank 3-9 su diversi tool, competitor diretto |
| miolegale.it | ~5,000 | ~7.6 | Rank 3-11, mid-level competitor |
| altalex.com | 12,744 | 27.3 | Rank 3 su contributo unificato |
| avvocatotelematico (Arcella) | ~2,000 | ~8 | Rank 2 su fattura avvocato |
| professionegiustizia.it | ~4,000 | ~12.8 | Rank 5 su fattura avvocato |
| rivaluta.it | ~3,000 | ~21 | Solo interessi/rivalutazione |

---

## 2. Architettura del Sito

### 2.1 Struttura URL

```
/                                    → Homepage hub
/strumenti/                          → Indice di tutti i tool
/strumenti/[categoria]/              → Landing di categoria
/strumenti/[categoria]/[tool-slug]/  → Singolo tool
/guide/[slug]/                       → Guide editoriali di supporto
/blog/[slug]/                        → Articoli/news legali
/tabelle/[slug]/                     → Tabelle di riferimento
/about/                              → Chi siamo + credenziali
/contatti/                           → Contatti + P.IVA
```

### 2.2 Categorie Tool (Hub Pages)

```
/strumenti/compenso-avvocato/        → Hub compensi forensi
/strumenti/termini-processuali/      → Hub scadenze/termini
/strumenti/interessi-calcolo/        → Hub interessi legali/moratori/rivalutazione
/strumenti/fiscale/                  → Hub tool fiscali (IVA, IRPEF, TFR, ecc.)
/strumenti/danno-risarcimento/       → Hub danni biologici/non patrimoniali/INAIL
/strumenti/calcolatori-generici/     → Hub percentuali, date, codice fiscale
/strumenti/immobiliare/              → Hub catastale, IMU, locazioni, ISTAT
/strumenti/lavoro/                   → Hub TFR, detrazioni, busta paga
```

### 2.3 Internal Linking — Modello Hub & Spoke

```
Homepage
  └── /strumenti/ (indice generale)
        ├── /strumenti/compenso-avvocato/ (hub)
        │     ├── /strumenti/compenso-avvocato/civile/
        │     ├── /strumenti/compenso-avvocato/penale/
        │     ├── /strumenti/compenso-avvocato/stragiudiziale/
        │     └── Link a: /strumenti/compenso-avvocato/fattura/
        │                 /tabelle/parametri-forensi/
        │                 /guide/come-calcolare-compenso-avvocato/
        │
        ├── /strumenti/termini-processuali/ (hub)
        │     ├── /strumenti/termini-processuali/scadenze-udienze/
        │     ├── /strumenti/termini-processuali/memorie-183-190/
        │     ├── /strumenti/termini-processuali/impugnazioni/
        │     └── Link a: /tabelle/contributo-unificato/
        │                 /guide/termini-processuali-civili/
        ...
```

**Regole di linking**:
- Ogni tool linka al suo hub di categoria
- Ogni tool linka a 2-3 tool correlati (cross-link)
- Ogni tool ha link alla guida editoriale associata
- Hub linka a tutti i tool figli + guide correlate
- Homepage linka ai top 6 hub

---

## 3. Prioritizzazione Tool (Dati DFS)

### TIER 1 — CORE LEGALE (Sprint 1-2, costruire per primi)

| # | Tool | URL | KW Principale | SV/mese | KD | ETV Competitor | CPC | Intent | Stato |
|---|------|-----|---------------|---------|-----|----------------|-----|--------|-------|
| 1 | Calcolo Compenso Civile | `/strumenti/compenso-avvocato/civile/` | calcolo compenso avvocato | 33,100 cluster | bassa | 49,125 | €4.56 | nav+comm | |
| 2 | Calcolo Fattura Avvocato | `/strumenti/compenso-avvocato/fattura/` | calcolo fattura avvocato | 33,100 | bassa | 21,884 | €4.56 | nav | |
| 3 | Calcolo Contributo Unificato | `/contributo-unificato` | calcolo contributo unificato | 18,100 | **3** | 22,753 | - | info | ✅ LIVE |
| 4 | Interessi Legali | `/strumenti/interessi-calcolo/interessi-legali/` | interessi legali calcolo | 33,100 | **3** | 23,552 | - | nav | |
| 5 | Calcolo Termini Processuali | `/strumenti/termini-processuali/calcolo/` | calcolo termini processuali | 60,500 | **19** | 31,749 | - | info | |
| 6 | Scadenze e Termini Udienze | `/strumenti/termini-processuali/scadenze-udienze/` | termini | 550,000 cluster | - | 72,104 | - | info |
| 7 | Interessi Moratori | `/strumenti/interessi-calcolo/moratori/` | calcolo interessi moratori | 18,100 | bassa | 10,592 | - | comm |
| 8 | Rivalutazione Monetaria | `/strumenti/interessi-calcolo/rivalutazione/` | rivalutazione monetaria | cluster | bassa | 14,252 | - | nav |
| 9 | Danno Biologico | `/strumenti/danno-risarcimento/biologico/` | calcolo danno biologico | 8,100 | **3** | 10,954 | €1.44 | nav |
| 10 | Danno Non Patrimoniale | `/strumenti/danno-risarcimento/non-patrimoniale/` | calcolo danno non patrimoniale | 1,300 | **6** | 6,671 | €0.97 | info |
| 11 | Compenso Stragiudiziale | `/strumenti/compenso-avvocato/stragiudiziale/` | parametri stragiudiziali | cluster | bassa | 6,679 | - | nav |
| 12 | Compenso Penale | `/strumenti/compenso-avvocato/penale/` | parametri penali avvocato | cluster | bassa | 4,751 | - | nav |
| 13 | Risarcimento INAIL | `/strumenti/danno-risarcimento/inail/` | calcolo risarcimento inail | 140+ cluster | bassa | 6,649 | - | nav |
| 14 | Termini Memorie 183/190 | `/strumenti/termini-processuali/memorie-183-190/` | termini memorie integrative | cluster | bassa | 5,923 | - | info |
| 15 | Tabella Contributo Unificato | `/tabelle/contributo-unificato/` | tabella contributo unificato | cluster | bassa | 11,868 | - | info |
| 16 | Termini Impugnazioni | `/strumenti/termini-processuali/impugnazioni/` | termini impugnazioni civile | cluster | bassa | 3,032 | - | info |
| 17 | Tabelle Parametri Forensi | `/tabelle/parametri-forensi/` | parametri forensi tabelle | cluster | bassa | 3,139 | - | info |

**ETV totale Tier 1: ~350,000/mese**

### TIER 2 — TOOL FISCALI (Sprint 3)

| # | Tool | URL | KW Principale | SV/mese | KD | ETV Competitor | CPC |
|---|------|-----|---------------|---------|-----|----------------|-----|
| 18 | Scorporo IVA | `/strumenti/fiscale/scorporo-iva/` | scorporo iva | 33,100 | bassa | 29,133 | €0.12 |
| 19 | Calcolo IRPEF | `/strumenti/fiscale/irpef/` | calcolo irpef | 8,100 | **16** | 11,916 | €0.23 |
| 20 | Calcolo TFR | `/strumenti/lavoro/tfr/` | calcolo tfr | 9,900 | bassa | 12,884 | €0.41 |
| 21 | Ravvedimento Operoso | `/strumenti/fiscale/ravvedimento-operoso/` | calcolo ravvedimento operoso | 8,100 | bassa | 10,590 | **€5.84** |
| 22 | Ritenuta d'Acconto | `/strumenti/fiscale/ritenuta-acconto/` | calcolo ritenuta acconto | 880 | bassa | 9,285 | €4.07 |
| 23 | Detrazione Lavoro Dipendente | `/strumenti/lavoro/detrazione-dipendente/` | detrazione lavoro dipendente | 1,600 | bassa | 11,049 | €1.28 |
| 24 | Detrazione Pensione | `/strumenti/lavoro/detrazione-pensione/` | detrazione redditi pensione | cluster | bassa | 2,143 | - |
| 25 | Adeguamento ISTAT Locazione | `/strumenti/immobiliare/adeguamento-istat/` | calcolo adeguamento istat | 2,400 | **4** | 15,949 | - |
| 26 | Valore Catastale | `/strumenti/immobiliare/valore-catastale/` | calcolo valore catastale | 3,600 | bassa | 11,522 | €0.06 |
| 27 | Calcolo IMU | `/strumenti/immobiliare/imu/` | calcolo imu | cluster | bassa | 4,844 | - |
| 28 | Ammortamento Mutuo | `/strumenti/immobiliare/ammortamento-mutuo/` | calcolo ammortamento mutuo | 590 | **4** | 10,555 | €1.17 |
| 29 | Imposta Registro Locazione | `/strumenti/immobiliare/imposta-registro/` | imposta registro locazione | cluster | bassa | 2,020 | - |
| 30 | Usufrutto/Nuda Proprieta | `/strumenti/immobiliare/usufrutto/` | calcolo usufrutto | cluster | bassa | 2,325 | - |
| 31 | Fattura Elettronica Avvocati | `/strumenti/compenso-avvocato/fattura-elettronica/` | fattura elettronica avvocati | cluster | bassa | 3,062 | - |

**ETV totale Tier 2: ~140,000/mese**

### TIER 3 — TOOL GENERICI / TRAFFIC MAGNETS (Sprint 4)

| # | Tool | URL | KW Principale | SV/mese | KD | ETV Competitor |
|---|------|-----|---------------|---------|-----|----------------|
| 32 | Calcolo Percentuale | `/strumenti/calcolatori-generici/percentuale/` | calcolo percentuale | 135,000 | bassa | **73,556** |
| 33 | Calcolo Codice Fiscale | `/strumenti/calcolatori-generici/codice-fiscale/` | calcolo codice fiscale | **1,220,000** | **17** | 17,123 |
| 34 | Decodifica Codice Fiscale | `/strumenti/calcolatori-generici/decodifica-codice-fiscale/` | decodifica codice fiscale | 6,600 | bassa | 16,883 |
| 35 | Calcolo Giorni tra Date | `/strumenti/calcolatori-generici/giorni-tra-date/` | calcolo giorni tra date | 720 cluster | bassa | 34,945 |
| 36 | Differenza Ore | `/strumenti/calcolatori-generici/differenza-ore/` | calcolo tempo trascorso | cluster | bassa | 18,134 |
| 37 | Calcolatrice Online | `/strumenti/calcolatori-generici/calcolatrice/` | calcolatrice online | 246,000 | bassa | 10,914 |
| 38 | Verifica IBAN | `/strumenti/calcolatori-generici/verifica-iban/` | verifica codice iban | 3,600 | **14** | 4,205 |
| 39 | Verifica Partita IVA | `/strumenti/fiscale/verifica-partita-iva/` | verifica partita iva | **246,000** | **10** | 590 |
| 40 | Calcolo Eta | `/strumenti/calcolatori-generici/calcolo-eta/` | calcolo eta anagrafica | 590 | **2** | 9,991 |
| 41 | Calcolatore Frazioni | `/strumenti/calcolatori-generici/frazioni/` | calcolatore frazioni | 9,900 | bassa | 9,031 |
| 42 | Calcolo Proporzione | `/strumenti/calcolatori-generici/proporzione/` | calcolo proporzione | 8,100 | bassa | 7,475 |
| 43 | Giorni Lavorativi/Festivi | `/strumenti/calcolatori-generici/giorni-lavorativi/` | calcolo giorni lavorativi | cluster | bassa | 4,999 |
| 44 | Somma Ore e Minuti | `/strumenti/calcolatori-generici/somma-ore/` | somma ore minuti | cluster | bassa | 5,371 |
| 45 | Conversione Ore/Centesimi | `/strumenti/calcolatori-generici/ore-centesimi/` | ore in centesimi | cluster | bassa | 2,095 |

**ETV totale Tier 3: ~220,000/mese**

### TIER 4 — CONTENUTI E RISORSE (Sprint 5+)

| # | Risorsa | URL | ETV Competitor |
|---|---------|-----|----------------|
| 46 | Ricerca Uffici Giudiziari | `/strumenti/ricerca-uffici-giudiziari/` | 4,326 |
| 47 | Link Ricerca PEC (INI-PEC) | `/strumenti/ricerca-pec/` | 6,746 |
| 48 | Esempio Testamento Olografo | `/guide/testamento-olografo-esempio/` | 2,680 |
| 49 | Relata di Notifica PEC | `/guide/relata-notifica-pec/` | 3,534 |
| 50 | Ultimo Indice ISTAT | `/tabelle/ultimo-indice-istat/` | 2,028 |

---

## 4. Template On-Page SEO (per ogni tool)

### 4.1 Struttura HTML di ogni pagina tool

```html
<!-- HEAD -->
<title>{Nome Tool} Online Gratuito — {Brand} | Calcola in 2 Click</title>
<meta name="description" content="{Keyword principale}: {breve descrizione del tool e a chi serve}. Calcolo istantaneo, gratuito, aggiornato al {anno}.">
<link rel="canonical" href="https://{dominio}/strumenti/{categoria}/{slug}/">
<meta property="og:title" content="{Nome Tool} — {Brand}">
<meta property="og:description" content="{stessa meta description}">
<meta property="og:url" content="https://{dominio}/strumenti/{categoria}/{slug}/">
<meta property="og:type" content="website">
<meta property="og:image" content="https://{dominio}/og/{slug}.png">
<meta property="og:locale" content="it_IT">

<!-- BODY -->
<nav aria-label="Breadcrumb">  <!-- BreadcrumbList schema -->
  Home > Strumenti > {Categoria} > {Tool}
</nav>

<h1>{Nome Tool Completo}</h1>               <!-- 1 solo H1 -->

<section id="tool">                          <!-- Il calcolatore -->
  <!-- WebApplication con interazione -->
</section>

<section id="guida">                         <!-- Contenuto editoriale 800-1500 parole -->
  <h2>Come funziona il {nome tool}</h2>
  <p>...</p>                                 <!-- HowTo schema -->

  <h2>Quando usare questo calcolo</h2>
  <p>...</p>

  <h2>Riferimenti normativi</h2>             <!-- E-E-A-T: expertise -->
  <p>... art. X, DM Y/Z, GU n. ...</p>

  <h2>Esempio pratico</h2>                   <!-- Citabile da AI -->
  <p>...</p>
</section>

<section id="faq">                           <!-- FAQPage schema -->
  <h2>Domande Frequenti</h2>
  <details><summary>Domanda 1?</summary><p>Risposta...</p></details>
  <details><summary>Domanda 2?</summary><p>Risposta...</p></details>
  <!-- minimo 5 FAQ per pagina -->
</section>

<section id="correlati">                     <!-- Internal linking -->
  <h2>Strumenti Correlati</h2>
  <!-- 3-5 link a tool nella stessa categoria o correlati -->
</section>

<footer>
  <!-- P.IVA, Contatti, Copyright, Autore -->
</footer>
```

### 4.2 Checklist On-Page per Ogni Tool

- [ ] Title tag < 60 caratteri, keyword all'inizio
- [ ] Meta description 140-160 caratteri, keyword + CTA
- [ ] 1 solo H1 con keyword principale
- [ ] Breadcrumb con schema BreadcrumbList
- [ ] Tool funzionante sopra la piega (above the fold)
- [ ] Contenuto editoriale 800-1500 parole sotto il tool
- [ ] Minimo 5 FAQ con schema FAQPage
- [ ] HowTo schema con step del calcolo
- [ ] WebApplication schema con aggregateRating
- [ ] Riferimenti normativi (articoli di legge, decreti, GU)
- [ ] 1 esempio pratico con numeri reali
- [ ] 3-5 internal link a tool/guide correlati
- [ ] Immagini con alt text descrittivo, width/height espliciti
- [ ] Canonical URL autoeferente
- [ ] OG tags completi (title, description, url, image, locale)
- [ ] URL solo hyphens, no underscore, no .php

---

## 5. Strategia Schema Markup

### 5.1 Schema per Tipo di Pagina

| Pagina | Schema JSON-LD |
|--------|----------------|
| **Homepage** | `WebSite` + `SearchAction`, `Organization` (o `LegalService`), `SiteNavigationElement` |
| **Pagina Tool** | `WebApplication` + `Offer` (free), `FAQPage`, `HowTo`, `BreadcrumbList` |
| **Pagina Tabella** | `Table`, `FAQPage`, `BreadcrumbList` |
| **Guida editoriale** | `Article`, `FAQPage`, `BreadcrumbList`, `Person` (autore) |
| **Blog post** | `BlogPosting`, `Person`, `BreadcrumbList` |
| **Hub categoria** | `CollectionPage`, `BreadcrumbList`, `ItemList` |

### 5.2 Esempio Schema Tool (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Calcolo Interessi Legali",
      "description": "Calcolatore online gratuito per il calcolo degli interessi legali ex art. 1284 c.c. aggiornato al 2026.",
      "url": "https://dominio.it/strumenti/interessi-calcolo/interessi-legali/",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "120"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qual e il tasso di interesse legale 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Il tasso di interesse legale per il 2026 e del X%, stabilito con decreto MEF pubblicato in GU n. Y del Z."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Come calcolare gli interessi legali",
      "step": [
        {"@type": "HowToStep", "text": "Inserire il capitale iniziale"},
        {"@type": "HowToStep", "text": "Selezionare la data di decorrenza"},
        {"@type": "HowToStep", "text": "Selezionare la data finale"},
        {"@type": "HowToStep", "text": "Cliccare Calcola per ottenere il risultato"}
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dominio.it/"},
        {"@type": "ListItem", "position": 2, "name": "Strumenti", "item": "https://dominio.it/strumenti/"},
        {"@type": "ListItem", "position": 3, "name": "Interessi", "item": "https://dominio.it/strumenti/interessi-calcolo/"},
        {"@type": "ListItem", "position": 4, "name": "Interessi Legali"}
      ]
    }
  ]
}
```

### 5.3 Schema Homepage

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "{Brand}",
      "url": "https://dominio.it/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://dominio.it/ricerca?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "name": "{Brand}",
      "url": "https://dominio.it/",
      "logo": "https://dominio.it/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@dominio.it",
        "contactType": "customer service"
      },
      "sameAs": ["https://linkedin.com/...", "https://twitter.com/..."]
    }
  ]
}
```

---

## 6. Strategia Contenuti

### 6.1 Contenuto per Tool Page

Ogni pagina tool deve avere **3 livelli di contenuto**:

1. **Tool** (above the fold) — il calcolatore funzionante, interattivo, risultato istantaneo
2. **Guida** (below the fold) — 800-1500 parole: come funziona, quando si usa, base normativa, esempio pratico
3. **FAQ** (fondo pagina) — minimo 5 domande/risposte con schema FAQPage

> **Obiettivo**: content rate >20% (vs 2.4% del competitor).
> Questo e il singolo vantaggio competitivo piu grande — il competitor ha quasi zero testo.

### 6.2 Guide Editoriali (1 per ogni cluster principale)

| Guida | URL | Tool correlato |
|-------|-----|----------------|
| Come calcolare il compenso dell'avvocato | `/guide/come-calcolare-compenso-avvocato/` | compenso civile/penale/stragiudiziale |
| Tabelle parametri forensi DM 55/2014 — guida completa | `/guide/parametri-forensi-dm-55-2014/` | compenso civile |
| Termini processuali civili — guida completa | `/guide/termini-processuali-civili/` | calcolo termini, scadenze |
| Il contributo unificato nel 2026 | `/guide/contributo-unificato-guida/` | calcolo + tabella CU |
| Interessi legali e moratori — differenze e calcolo | `/guide/interessi-legali-moratori/` | interessi legali, moratori |
| Rivalutazione monetaria — come e quando si applica | `/guide/rivalutazione-monetaria/` | rivalutazione |
| Danno biologico e non patrimoniale — tabelle e calcolo | `/guide/danno-biologico-non-patrimoniale/` | danno biologico, non pat. |
| Scorporo IVA e calcoli percentuali per professionisti | `/guide/scorporo-iva-calcoli-percentuali/` | scorporo, percentuale |
| Come compilare la fattura dell'avvocato | `/guide/fattura-avvocato-guida/` | fattura avvocato |
| Ravvedimento operoso — guida pratica | `/guide/ravvedimento-operoso/` | ravvedimento |

### 6.3 E-E-A-T Strategy

| Segnale | Implementazione |
|---------|-----------------|
| **Experience** | "Tool usato da X avvocati", testimonianze, voti utenti |
| **Expertise** | Riferimenti normativi precisi (articoli, commi, GU, DM), autore con qualifica giuridica |
| **Authority** | Pagina /about/ con credenziali, iscrizione Ordine, pubblicazioni, backlink da siti legali |
| **Trust** | P.IVA nel footer, indirizzo fisico, email, HTTPS, privacy policy, cookie policy, disclaimer |

### 6.4 AI Citation Readiness

Per essere citati da ChatGPT, Perplexity, AI Overviews di Google:

- [ ] Ogni tool page ha almeno 1 "passage citabile" (fatto numerico preciso, es: "Il tasso di interesse legale 2026 e del X%")
- [ ] Struttura FAQ con domande/risposte atomiche
- [ ] Definizioni chiare all'inizio di ogni guida (DefinedTerm schema)
- [ ] robots.txt permette GPTBot, ClaudeBot, PerplexityBot
- [ ] `/llms.txt` con descrizione del sito e tool disponibili
- [ ] Meta description descrittive (non vuote come il competitor)

---

## 7. Technical SEO Checklist

### 7.1 Infrastruttura Next.js

- [ ] SSG (Static Site Generation) per tutte le pagine tool e guide
- [ ] ISR (Incremental Static Regeneration) per tabelle che cambiano (es. indice ISTAT)
- [ ] `next-sitemap` per generazione automatica sitemap.xml
- [ ] `robots.txt` con direttiva `Sitemap:` e permessi AI crawler
- [ ] Manifest PWA + `apple-touch-icon`
- [ ] Font ottimizzati con `next/font` (no FOUT/FOIT)
- [ ] Immagini con `next/image` (WebP/AVIF automatici, lazy loading, width/height)

### 7.2 Core Web Vitals — Target

| Metrica | Target | Come |
|---------|--------|------|
| **LCP** | < 1.5s | SSG, font preload, hero sopra la piega con dimensioni note |
| **INP** | < 100ms | Nessun inline onclick, event delegation, no blocking JS |
| **CLS** | < 0.05 | Dimensioni esplicite su tutto, no ads con height:auto, no font swap |

### 7.3 Security Headers

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### 7.4 Checklist Tecnica

- [ ] HTTPS con certificato valido
- [ ] Redirect 301: HTTP→HTTPS, non-www→www (singolo hop)
- [ ] Canonical tag autoeferente su ogni pagina
- [ ] Nessun mixed content (HTTP link/risorse)
- [ ] Sitemap.xml referenziata in robots.txt
- [ ] Hreflang non necessario (solo IT)
- [ ] Gzip/Brotli compression abilitata
- [ ] Cache headers: `max-age=31536000` su asset statici con hash
- [ ] 404 page personalizzata con link ai tool popolari
- [ ] Structured data validato con Google Rich Results Test
- [ ] PageSpeed Insights score > 90 su mobile
- [ ] Tag `<html lang="it">`
- [ ] Viewport meta tag: `width=device-width, initial-scale=1`

---

## 8. Piano di Esecuzione per Sprint

### Sprint 1 — Foundation + Core Legale A (Settimane 1-3)

**Obiettivo**: Lanciare con i 5 tool legali a piu alto valore + infrastruttura SEO perfetta.

| Task | Dettaglio |
|------|-----------|
| Setup progetto | Next.js 16 + Tailwind + shadcn/ui + next-sitemap |
| Homepage | Hub con link ai tool, schema Organization, 1 H1 |
| Pagina /about/ | Credenziali, P.IVA, contatti |
| **Tool 1: Compenso Avvocato Civile** | Calculator + guida 1200 parole + 5 FAQ + schema |
| **Tool 2: Fattura Avvocato** | Calculator + guida + FAQ + schema |
| **Tool 3: Contributo Unificato** | Calculator + tabella + guida + FAQ |
| **Tool 4: Interessi Legali** | Calculator con tassi storici + guida + FAQ |
| **Tool 5: Termini Processuali** | Calculator + sospensione agosto + guida |
| robots.txt + sitemap.xml | Completi e corretti |
| Schema JSON-LD | WebSite, Organization, WebApplication, FAQ, HowTo, Breadcrumb |
| Google Search Console | Submit sitemap, verifica proprieta |

**KPI Sprint 1**: 5 tool live, 100% Lighthouse score, sitemap submitted.

### Sprint 2 — Core Legale B (Settimane 4-6)

| Task | Dettaglio |
|------|-----------|
| **Tool 6: Scadenze/Termini Udienze** | Il tool #2 del competitor per traffico |
| **Tool 7: Termini Memorie 183/190** | Niche legale, quasi zero competitor |
| **Tool 8: Interessi Moratori** | |
| **Tool 9: Rivalutazione Monetaria** | |
| **Tool 10: Danno Biologico** | KD 3, facile da rankare |
| **Tool 11: Danno Non Patrimoniale** | |
| **Tool 12: Compenso Stragiudiziale** | |
| **Tool 13: Compenso Penale** | |
| **Tool 14: Risarcimento INAIL** | |
| Tabella Parametri Forensi | Pagina di riferimento |
| Tabella Contributo Unificato | Pagina di riferimento |
| Hub pages per categorie | /strumenti/compenso-avvocato/, /termini-processuali/, etc. |
| 3 Guide editoriali | Compenso, termini, interessi |

**KPI Sprint 2**: 14 tool live, 3 guide, hub pages, primi segnali di indicizzazione.

### Sprint 3 — Tool Fiscali + Immobiliari (Settimane 7-10)

| Task | Dettaglio |
|------|-----------|
| **Tool 15-31** | Tutti i tool Tier 2 (scorporo IVA, IRPEF, TFR, ravvedimento, etc.) |
| Hub /strumenti/fiscale/ | |
| Hub /strumenti/immobiliare/ | |
| Hub /strumenti/lavoro/ | |
| 4 Guide editoriali | Scorporo IVA, ravvedimento, TFR, fattura elettronica |
| Internal linking audit | Verificare che tutti i cross-link funzionino |

**KPI Sprint 3**: 31 tool live, 7 guide, tutte le hub pages complete.

### Sprint 4 — Traffic Magnets (Settimane 11-14)

| Task | Dettaglio |
|------|-----------|
| **Tool 32-45** | Tutti i tool Tier 3 (percentuale, codice fiscale, date, etc.) |
| Hub /strumenti/calcolatori-generici/ | |
| CTA strategiche | Banner su tool generici → "Sei un avvocato? Calcola il tuo compenso" |
| 3 Guide editoriali | Codice fiscale, calcoli percentuali, giorni lavorativi |

**KPI Sprint 4**: 45 tool live, 10 guide, CTA di cross-selling attive.

### Sprint 5 — Contenuti + Long Tail (Settimane 15-20)

| Task | Dettaglio |
|------|-----------|
| **Tool 46-50** | Risorse: uffici giudiziari, PEC, testamento, relata, ISTAT |
| Blog launch | 2 articoli/settimana su news legali/fiscali |
| /llms.txt | Per AI crawler |
| Pagine "Alternative a" | "Alternativa a avvocatoandreani.it" (se strategico) |
| Link building | Guest post su siti legali, citazioni |

---

## 9. KPI e Proiezioni di Traffico

| Metrica | Lancio | 3 Mesi | 6 Mesi | 12 Mesi |
|---------|--------|--------|--------|---------|
| Tool live | 5 | 31 | 45+ | 50+ |
| Guide editoriali | 0 | 7 | 10+ | 20+ |
| Pagine indicizzate | 10 | 60 | 100+ | 200+ |
| Traffico organico | 0 | 30,000-50,000 | 80,000-150,000 | 300,000-500,000 |
| Keyword in top 10 | 0 | 200-500 | 1,000-2,000 | 3,000-5,000 |
| CWV score mobile | 95+ | 95+ | 95+ | 95+ |
| Content rate medio | 25%+ | 25%+ | 25%+ | 25%+ |

---

## 10. Rischi e Mitigazioni

| Rischio | Probabilita | Mitigazione |
|---------|-------------|-------------|
| Domain authority bassa (sito nuovo) | Alta | Compensare con qualita tecnica superiore, contenuto piu profondo, CWV perfetti. KD bassissima su quasi tutti i target |
| Google sandbox per sito nuovo | Media | Pubblicare contenuto consistente fin da subito, ottenere backlink da directory legali, Google Business Profile |
| Competitor reagisce e migliora | Bassa | Il sito ha 15+ anni di debito tecnico, improbabile refactoring completo |
| Aggiornamento normativo invalida dati | Media | ISR di Next.js per aggiornare dati automaticamente, monitorare GU |
| Google AI Overviews cannibalizza traffico tool | Media | Rendere i tool interattivi (non replicabili da AI), aggiungere funzionalita avanzate |

---

## Appendice A — Convenzioni URL

- Solo hyphens (`-`), mai underscore (`_`)
- Sempre minuscolo
- No `.php`, `.html` — URL puliti
- Trailing slash consistente (`/strumenti/fiscale/irpef/`)
- Max 3 livelli di profondita
- Keyword nel primo segmento dopo la categoria
- No parametri query per contenuto principale

## Appendice B — Ordine di Costruzione Prioritizzato per ROI

I tool sono ordinati per il rapporto **ETV / Difficolta stimata di implementazione**:

| Posizione | Tool | ETV Target | Complessita Dev | Priorita |
|-----------|------|-----------|-----------------|----------|
| 1 | Calcolo Percentuale | 73,556 | Bassa | MASSIMA |
| 2 | Scadenze/Termini Udienze | 72,104 | Media | MASSIMA |
| 3 | Compenso Avvocato Civile | 49,125 | Alta (gia fatto) | MASSIMA |
| 4 | Calcolo Giorni tra Date | 34,945 | Bassa | ALTA |
| 5 | Termini Processuali | 31,749 | Media | ALTA |
| 6 | Scorporo IVA | 29,133 | Bassa | ALTA |
| 7 | Interessi Legali | 23,552 | Media | ALTA |
| 8 | Contributo Unificato | 22,753 | Media | ALTA |
| 9 | Fattura Avvocato | 21,884 | Alta | ALTA |
| 10 | Differenza Ore | 18,134 | Bassa | MEDIA |
| 11 | Codice Fiscale | 17,123 | Alta | MEDIA |
| 12 | Decodifica CF | 16,883 | Media | MEDIA |
| 13 | Adeguamento ISTAT | 15,949 | Media | MEDIA |
| 14 | Rivalutazione Monetaria | 14,252 | Alta | MEDIA |
| 15 | Calcolatrice Scorporo | 13,356 | Bassa | MEDIA |

## Appendice C — Keyword Cluster Completi per Tool

### Compenso Avvocato
```
calcolo compenso avvocato          SV 33,100  KD -    CPC €4.56
calcolo fattura avvocato           SV 33,100  KD -    CPC €4.56
parametri forensi                  SV cluster KD -
compenso avvocato civile           SV cluster KD -
parcella avvocato calcolo          SV cluster KD -
tabella compensi avvocati          SV cluster KD -
```

### Termini Processuali
```
calcolo termini processuali       SV 60,500  KD 19
termini                           SV 550,000 (generica, rank 4 competitor)
calcolo scadenze                  SV cluster
termini memorie 183               SV cluster
termini impugnazione              SV cluster
sospensione feriale termini       SV cluster
```

### Interessi
```
interessi legali calcolo          SV 33,100  KD 3
calcolo interessi moratori        SV 18,100  KD -
rivalutazione monetaria           SV cluster
tasso interesse legale 2026       SV cluster
art 1284 codice civile            SV cluster
```

### Fiscale
```
scorporo iva                      SV 33,100  KD -    CPC €0.12
calcolo irpef                     SV 8,100   KD 16   CPC €0.23
calcolo tfr                       SV 9,900   KD -    CPC €0.41
calcolo ravvedimento operoso      SV 8,100   KD -    CPC €5.84
calcolo ritenuta acconto          SV 880     KD -    CPC €4.07
calcolo contributo unificato      SV 18,100  KD 3
verifica partita iva              SV 246,000 KD 10   CPC €1.20
```

### Generici
```
calcolo percentuale               SV 135,000 KD -
calcolo codice fiscale            SV 1,220,000 KD 17
calcolatrice online               SV 246,000 KD -
decodifica codice fiscale         SV 6,600   KD -
calcolo giorni tra date           SV 720+cluster KD -
verifica iban                     SV 3,600   KD 14
calcolo proporzione               SV 8,100   KD -
calcolatore frazioni              SV 9,900   KD -
```

---

> **Ultimo aggiornamento**: Marzo 2026
> **Fonte dati**: DataForSEO Labs API (Google, Italy, IT)
> **Competitor analizzato**: avvocatoandreani.it
