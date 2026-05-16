# Research Brief — Calcolo IRPEF 2026

**Date**: 2026-05-16
**Source**: `raw-research.md` (Perplexity Deep Research, high reasoning, 99k chars, 50 citations)

> All data verified against Normattiva, Brocardi (TUIR), Gazzetta Ufficiale (Legge 199/2025), Agenzia Entrate.

---

## A. Structured Data (for calculator + tables)

### A.1 Scaglioni e aliquote 2026 (vigenti dal 1° gennaio 2026)

**Base normativa**: Art. 11, comma 1, TUIR (DPR 917/1986) come modificato dall'art. 1, comma 3, Legge 30 dicembre 2025, n. 199 (Legge di Bilancio 2026), pubblicata in GU Serie Generale n. 301 del 30/12/2025, Suppl. Ord. n. 42.

| Scaglione | Aliquota | Imposta sullo scaglione |
|-----------|---------:|-------------------------|
| Fino a 28.000 € | 23% | 23% × R |
| Oltre 28.000 € fino a 50.000 € | 33% | 6.440 € + 33% × (R − 28.000) |
| Oltre 50.000 € | 43% | 13.700 € + 43% × (R − 50.000) |

### A.2 Tabella storica aliquote (per LegalTable confronto)

| Periodo | N. scaglioni | Aliquote | Riferimento normativo |
|---------|:-:|----------|---------------------|
| Fino al 2021 | 5 | 23/27/38/41/43% | TUIR ante L. 234/2021 |
| 2022-2023 | 4 | 23/25/35/43% | L. 234/2021 |
| 2024-2025 | 3 | 23/35/43% | D.Lgs. 216/2023 + L. 207/2024 |
| **Dal 2026** | **3** | **23/33/43%** | **L. 199/2025** |

Estesa storia: 1974 (32 scaglioni, 10-72%), 1983 (9 scaglioni, 18-65%), 1989-Anni 90 (7 scaglioni, 10-50%), Anni 2000 (5 scaglioni, 23-45/43%).

### A.3 Esempi calcolo 2026 vs 2025 (per tabella worked examples)

| Reddito | IRPEF 2025 lorda | IRPEF 2026 lorda | Risparmio |
|--------:|----------------:|----------------:|----------:|
| 15.000 € | 3.450 € | 3.450 € | 0 € |
| 20.000 € | 4.600 € | 4.600 € | 0 € |
| 25.000 € | 5.750 € | 5.750 € | 0 € |
| 28.000 € | 6.440 € | 6.440 € | 0 € |
| 30.000 € | 7.140 € | 7.100 € | 40 € |
| 35.000 € | 8.890 € | 8.750 € | 140 € |
| 40.000 € | 10.640 € | 10.400 € | 240 € |
| 45.000 € | 12.390 € | 12.050 € | 340 € |
| 50.000 € | 14.140 € | 13.700 € | 440 € |
| 60.000 € | 18.440 € | 18.000 € | 440 € |
| 75.000 € | 24.890 € | 24.450 € | 440 € |
| 100.000 € | 35.640 € | 35.200 € | 440 € |

Formula risparmio per 28k < R ≤ 50k: ΔT = 0,02 × (R − 28.000). Per R > 50.000: ΔT = 440 € costante.

### A.4 Detrazioni di base art. 13 TUIR (formule complete 2026)

#### Lavoro dipendente (art. 13, c. 1):
- **RC ≤ 15.000 €**: D = 1.955 € (minimo 690 €; 1.380 € se rapporto a tempo determinato)
- **15.000 < RC ≤ 28.000 €**: D = 1.910 + 1.190 × (28.000 − RC) / 13.000
- **28.000 < RC ≤ 50.000 €**: D = 1.910 × (50.000 − RC) / 22.000
- **RC > 50.000 €**: D = 0
- **Maggiorazione 65 €** se 25.000 < RC ≤ 35.000 (c. 1.1)

#### Pensione (art. 13, c. 3):
- **RC ≤ 8.500 €**: D = 1.955 € (minimo 713 €) × giorni/365
- **8.500 < RC ≤ 28.000 €**: D = [700 + 1.255 × (28.000 − RC) / 19.500] × giorni/365
- **28.000 < RC ≤ 50.000 €**: D = 700 × (50.000 − RC) / 22.000 × giorni/365
- **RC > 50.000 €**: D = 0

#### Lavoro autonomo / altri redditi (art. 13, c. 5):
- **RC ≤ 5.500 €**: D = 1.265 €
- **5.500 < RC ≤ 28.000 €**: D = [500 + 765 × (28.000 − RC) / 22.500] × giorni/365
- **28.000 < RC ≤ 50.000 €**: D = 500 × (50.000 − RC) / 22.000 × giorni/365
- **RC > 50.000 €**: D = 0
- **Maggiorazione 50 €** se 11.000 < RC ≤ 17.000 (c. 5-ter)

### A.5 No Tax Area 2026

| Categoria | Soglia | Meccanismo |
|-----------|-------:|-----------|
| Lavoratori dipendenti | 8.500 € | Detrazione max 1.955 € compensa IRPEF su 8.500 × 23% |
| Pensionati | 8.500 € | Detrazione max 1.955 € (parificazione dal 2024) |
| Lavoratori autonomi | 5.500 € | Detrazione max 1.265 € compensa IRPEF su 5.500 × 23% |

NOTA TECNICA: Non è un'esenzione normativa, ma il risultato matematico dell'equilibrio tra aliquota (23%) e detrazione di base. Sopra la soglia l'imposta lorda cresce più velocemente della detrazione costante.

### A.6 Trattamento integrativo + Ulteriori detrazioni (L. 207/2024)

**Bonus aggiuntivo** (RC ≤ 20.000 € per lavoratori dipendenti):
- Reddito da lavoro ≤ 8.500 €: 7,1% del reddito da lavoro
- 8.500 < reddito da lavoro ≤ 15.000 €: 5,3%
- 15.000 < reddito da lavoro ≤ 20.000 €: 4,8%

**Ulteriore detrazione** (lavoratori dipendenti, 20.000 < RC ≤ 40.000 €):
- 20.000 < RC ≤ 32.000 €: 1.000 €
- 32.000 < RC ≤ 40.000 €: 1.000 × (40.000 − RC) / 8.000
- RC > 40.000 €: 0

### A.7 Beneficio Legge di Bilancio 2026

**Risparmio massimo teorico**: 440 € annui per redditi nello scaglione intermedio sfruttato per intero (28.001-50.000 €).

**Formula**: ΔT = (0,35 − 0,33) × min(R − 28.000; 22.000) = 0,02 × min(R − 28.000; 22.000)

**Sterilizzazione redditi > 200.000 €**: nuovo art. 16-ter, c. 5-bis TUIR: riduzione forfettaria di 440 € sulle detrazioni al 19% (escluse spese sanitarie art. 15, c.1, lett. c), erogazioni a partiti politici al 26%, premi assicurativi calamità al 90%).

**Sintesi**:
- RC ≤ 28.000 €: nessun risparmio
- 28.000 < RC ≤ 50.000 €: risparmio crescente da 0 a 440 €
- 50.000 < RC ≤ 200.000 €: risparmio massimo costante (440 €)
- RC > 200.000 €: risparmio sterilizzato dalla riduzione delle detrazioni

### A.8 Riordino detrazioni art. 16-ter TUIR (L. 207/2024)

Per RC > 75.000 €, le detrazioni complessive per oneri (al 19% e altre) sono ammesse solo fino a un massimale:
- 75.000 < RC ≤ 100.000 €: 14.000 € × coefficiente figli
- RC > 100.000 €: 8.000 € × coefficiente figli

Coefficiente figli a carico (art. 12 TUIR):
- 0 figli: 0,5
- 1 figlio: 0,7
- 2 figli: 0,85
- > 2 figli o 1 figlio disabile: 1

Escluse dal calcolo: spese sanitarie (art. 15, c.1, lett. c), PIR, altre.

### A.9 Addizionali Regionali e Comunali 2026

**Basi normative**:
- Addizionale regionale: D.Lgs. 446/1997, art. 50
- Addizionale comunale: D.Lgs. 360/1998

**Aliquota base regionale**: 0,9% (statale); aumento facoltativo fino al 3,33%.
**Aliquota massima comunale**: 0,8% (1,0% per Roma Capitale).

**Regime transitorio 2025-2028**: le Regioni possono mantenere i quattro scaglioni IRPEF pre-2024 oppure adeguarsi ai tre nuovi scaglioni, o adottare un'aliquota unica. Se non deliberano, si applicano automaticamente le aliquote dell'anno precedente.

**Aliquote indicative 2026 per alcune regioni** (range):
- Lazio: 1,73% - 3,33%
- Lombardia: 1,23% (proporzionale)
- Campania: 1,23% - 2,03%
- Piemonte: 1,62% - 3,33%
- Emilia-Romagna: 1,33% - 2,03%
- Veneto: 1,23% (proporzionale)
- Sicilia: 1,23% (proporzionale)
- Toscana: 1,42% - 3,33%

(Per la regione esatta del contribuente è necessario consultare la delibera regionale annuale.)

### A.10 IRPEF in busta paga (calcolo mensile)

- Sostituto d'imposta (art. 23 DPR 600/1973): datore di lavoro o ente erogatore pensione
- Ragguaglio scaglioni: scaglioni annui ÷ 12 → scaglioni mensili
  - Mese 1° scaglione: ≤ 2.333,33 €/mese (28.000/12)
  - Mese 2° scaglione: 2.333,34 - 4.166,67 €/mese (50.000/12)
- Detrazioni: applicate proporzionalmente ai giorni di lavoro nel mese
- Conguaglio di fine anno: dicembre o cessazione rapporto

### A.11 Esonero dalla dichiarazione 2026

| Tipologia reddito | Soglia esonero |
|-------------------|---------------:|
| Terreni e/o fabbricati | 500 € |
| Lavoro dipendente (anche +altri) | 8.000 € |
| Pensione (anche +altri) | 8.000 € |
| Pensione (7.500) + terreni (185,92) + prima casa | 7.685,92 € |
| Assegno mantenimento coniuge (escluso figli) | 8.000 € |
| Redditi assimilati lavoro dipendente con detrazione non rapportata | 4.800 € |
| Attività sportive dilettantistiche | 30.658,28 € |

NOTA: per lavoro dipendente e pensione, periodo non inferiore a 365 giorni. L'esonero non si applica in caso di restituzione bonus IRPEF.

### A.12 Versamenti F24

**Codici tributo**:
- 4001: IRPEF saldo
- 4033: IRPEF acconto I
- 4034: IRPEF acconto II

**Scadenze 2026**:
- Saldo + I acconto: 30 giugno
- Maggiorazione 0,40%: pagamento entro 30 giorni dalla scadenza
- II acconto: 30 novembre
- Periodo sospensione: 1-20 agosto

**Rateazione**: possibile per saldo e I acconto (non per II acconto). Interessi mensili sulle rate successive alla prima.

### A.13 Sanzioni e ravvedimento operoso

**Sanzione base** (D.Lgs. 471/1997 come modificato da D.Lgs. 87/2024 — riforma applicabile a violazioni dal 1° settembre 2024):
- Omesso/insufficiente versamento: 25% dell'imposta non versata (era 30%)
- Versamento entro 90 giorni: 12,5% (era 15%)
- Versamento entro 15 giorni: 0,083% per ogni giorno di ritardo (era 0,1%)

**Ravvedimento operoso ridotto** (D.Lgs. 87/2024):
- Sprint (entro 14 gg): 0,0833% × giorni × 1/10
- Breve (15-30 gg): 1,25% (12,5% × 1/10)
- Intermedio (31-90 gg): 1,39% (12,5% × 1/9)
- Lungo (91 gg - 1 anno): 3,125% (25% × 1/8)
- Ultrannuale (1-2 anni): 3,5714% (25% × 1/7)
- Oltre 2 anni: 4,1667% (25% × 1/6)

Interessi legali aggiuntivi: tasso 1,60% annuo (2026).

---

## B. Editorial Content (verbatim quotes for NormativaQuote)

### B.1 Art. 1 TUIR (presupposto)
> «Presupposto dell'imposta sul reddito delle persone fisiche è il possesso di redditi in denaro o in natura rientranti nelle categorie indicate nell'articolo 6».

### B.2 Art. 11, comma 1, TUIR (vigente dal 1° gennaio 2026)
> «L'imposta lorda è determinata applicando al reddito complessivo, al netto degli oneri deducibili indicati nell'articolo 10, le seguenti aliquote per scaglioni di reddito:
> a) fino a 28.000 euro, 23 per cento;
> b) oltre 28.000 euro e fino a 50.000 euro, 33 per cento;
> c) oltre 50.000 euro, 43 per cento».

### B.3 Art. 11, comma 3, TUIR
> «L'imposta netta è determinata operando sull'imposta lorda, fino alla concorrenza del suo ammontare, le detrazioni previste negli articoli 12, 13, 15, 16 e 16-bis nonché in altre disposizioni di legge».

### B.4 Art. 8, comma 1, TUIR
> «Il reddito complessivo si determina sommando i redditi di ogni categoria che concorrono a formarlo e sottraendo le perdite derivanti dall'esercizio di arti e professioni».

### B.5 Art. 10, comma 1, lett. e), TUIR
> «dal reddito complessivo si deducono i contributi previdenziali ed assistenziali versati in ottemperanza a disposizioni di legge, nonché quelli versati facoltativamente alla gestione della forma pensionistica obbligatoria di appartenenza».

### B.6 Modifica del 2026 (Legge 199/2025 art. 1, c. 3)
> «All'articolo 11, comma 1, lettera b), del testo unico delle imposte sui redditi, di cui al decreto del Presidente della Repubblica 22 dicembre 1986, n. 917, le parole "35 per cento" sono sostituite dalle seguenti: "33 per cento"».

---

## C. Common Errors (for AlertBox / FAQ)

1. **Confondere aliquota marginale e media**: pensare che l'aliquota del 33% si applichi all'intero reddito di 35.000 € invece che solo ai 7.000 € eccedenti i 28.000.
2. **Usare le aliquote 2025 invece di 2026**: errore commesso persino dal Governo nel calcolo degli acconti.
3. **Confondere deduzioni e detrazioni**: deduzioni ↓ reddito imponibile; detrazioni ↓ imposta lorda.
4. **Trattare la no tax area come esenzione assoluta**: non è esenzione, è equilibrio detrazioni/imposta.
5. **Incapienza non considerata**: detrazioni eccedenti l'imposta lorda non sono rimborsabili (salvo eccezioni).
6. **Dimenticare le addizionali**: spesso si calcola solo l'IRPEF statale ignorando regionale+comunale (1,2-3% in più).
7. **Acconti errati**: usare imposta lorda con vecchie aliquote.
8. **Mancata comunicazione carichi famiglia al sostituto**: detrazioni non spettanti da restituire o non fruite.

---

## D. FAQ Items (20+ from PAA + research)

### Categoria: Calcolo e Formula

1. **Come si calcola l'IRPEF nel 2026?**
   L'IRPEF 2026 si calcola applicando al reddito complessivo (al netto degli oneri deducibili) le tre aliquote per scaglioni: 23% fino a 28.000 €, 33% da 28.001 a 50.000 €, 43% oltre 50.000 €. L'aliquota maggiore si applica solo alla parte di reddito che eccede lo scaglione precedente, secondo il principio della tassazione progressiva (art. 11 TUIR). Per ottenere l'IRPEF netta si sottraggono dall'imposta lorda le detrazioni per tipologia di reddito (art. 13 TUIR), per carichi di famiglia (art. 12) e per oneri (artt. 15, 16, 16-bis, 16-ter).
   *Fonti*: TUIR art. 11, Agenzia Entrate.

2. **Quanto si paga di IRPEF su un reddito di 14.000 euro?**
   Su 14.000 € l'IRPEF lorda è 14.000 × 23% = 3.220 €. Tuttavia per un lavoratore dipendente la detrazione base (art. 13, c.1, lett. a TUIR) è 1.955 €; vanno aggiunte eventuali ulteriori detrazioni. L'IRPEF netta sarà significativamente più bassa, e per redditi sotto la no tax area (8.500 € per dipendenti e pensionati, 5.500 € per autonomi) si azzera completamente.
   *Fonti*: TUIR art. 11, 13.

3. **Come si calcola l'IRPEF mensile in busta paga?**
   Il sostituto d'imposta (art. 23 DPR 600/1973) calcola l'IRPEF mensile ragguagliando gli scaglioni annui al periodo (annuo ÷ 12). Per il 2026: primo scaglione fino a 2.333,33 €/mese al 23%; secondo da 2.333,34 a 4.166,67 €/mese al 33%; terzo oltre al 43%. Le detrazioni vengono applicate in proporzione ai giorni di lavoro. A fine anno si effettua il conguaglio sulla base del reddito complessivo effettivo.
   *Fonti*: DPR 600/1973 art. 23, Agenzia Entrate.

4. **Cosa si intende per aliquota media e aliquota marginale?**
   L'aliquota media è il rapporto tra IRPEF e reddito imponibile (es. 8.750/35.000 = 25%). L'aliquota marginale è l'aliquota dello scaglione in cui ricade l'ultima parte di reddito (33% per reddito 35.000 € nel 2026). L'aliquota marginale effettiva può superare quella legale per via della riduzione delle detrazioni al crescere del reddito.
   *Fonti*: MEF Riforma IRPEF 2022.

### Categoria: Aliquote e Scaglioni 2026

5. **Quali sono le aliquote IRPEF 2026?**
   Dal 1° gennaio 2026, per effetto della Legge 199/2025 (Legge di Bilancio 2026): 23% fino a 28.000 €; 33% da 28.001 a 50.000 €; 43% oltre 50.000 €. La novità è la riduzione dell'aliquota del secondo scaglione dal 35% al 33%, con un risparmio massimo teorico di 440 € annui.
   *Fonti*: L. 199/2025; TUIR art. 11.

6. **Quando entra in vigore l'aliquota IRPEF al 33%?**
   L'aliquota del 33% per il secondo scaglione (28.001-50.000 €) si applica dal 1° gennaio 2026, per il periodo d'imposta 2026 (dichiarazioni 2027 con modello 730/2027 e REDDITI PF 2027). Per il 2025 vale ancora l'aliquota del 35%.
   *Fonti*: L. 199/2025, GU 301 del 30/12/2025.

7. **Chi guadagna di più dalla riforma IRPEF 2026?**
   Il beneficio massimo (440 €) spetta a chi ha un reddito imponibile pari o superiore a 50.000 €, fino a 200.000 €. Per redditi tra 28.000 e 50.000 € il risparmio è proporzionale (formula: 0,02 × (R − 28.000)). Sotto i 28.000 € non c'è risparmio. Oltre i 200.000 € il beneficio viene sterilizzato dalla riduzione di 440 € delle detrazioni al 19% (nuovo art. 16-ter, c. 5-bis TUIR).
   *Fonti*: L. 199/2025; art. 16-ter TUIR.

8. **Quali erano le aliquote IRPEF nel 2024-2025?**
   Nel 2024-2025 erano 3 scaglioni: 23% fino a 28.000 €; 35% da 28.001 a 50.000 €; 43% oltre 50.000 €. Il passaggio a 3 scaglioni avvenne nel 2024 (D.Lgs. 216/2023), accorpando i primi due scaglioni precedenti.
   *Fonti*: D.Lgs. 216/2023; L. 207/2024.

### Categoria: Detrazioni e No Tax Area

9. **Cos'è la no tax area IRPEF nel 2026?**
   È la fascia di reddito entro cui l'IRPEF netta è zero, grazie alle detrazioni di base (art. 13 TUIR). Nel 2026: 8.500 € per lavoratori dipendenti e pensionati (parificati dal 2024), 5.500 € per lavoratori autonomi. Non è un'esenzione normativa, ma il risultato dell'equilibrio matematico tra aliquota e detrazioni.
   *Fonti*: TUIR art. 13; D.Lgs. 216/2023.

10. **A quanto ammonta la detrazione per lavoro dipendente 2026?**
    Detrazione massima 1.955 € per RC fino a 15.000 € (art. 13, c.1, lett. a TUIR). Da 15.000 a 28.000 €: formula decrescente (1.910 + 1.190 × (28.000 − RC)/13.000). Da 28.000 a 50.000 €: 1.910 × (50.000 − RC)/22.000. Oltre 50.000 €: nessuna detrazione. Maggiorazione 65 € per redditi tra 25.000 e 35.000 €.
    *Fonti*: TUIR art. 13.

11. **Quali sono le detrazioni per pensionati nel 2026?**
    Detrazione massima 1.955 € per pensione fino a 8.500 € (parificata a lavoratori dipendenti dal 2024). Decresce linearmente a 700 € fra 8.500 e 28.000 €, e ulteriormente fino a zero fra 28.000 e 50.000 €. Oltre 50.000 € non spetta detrazione.
    *Fonti*: TUIR art. 13, c. 3.

12. **Cos'è il trattamento integrativo IRPEF?**
    È un'integrazione in busta paga per lavoratori dipendenti, introdotta dal D.L. 3/2020 (ex "bonus Renzi") e modificata dalle leggi di bilancio successive. Per il 2025-2026: bonus aggiuntivo del 7,1%/5,3%/4,8% del reddito da lavoro per RC fino a 20.000 €, e ulteriore detrazione di 1.000 € per RC tra 20.000 e 32.000 € (decrescente fino a 40.000 €) introdotti dalla L. 207/2024.
    *Fonti*: D.L. 3/2020; L. 207/2024.

### Categoria: Reddito Imponibile e Deduzioni

13. **Qual è la differenza tra deduzione e detrazione?**
    Le deduzioni (art. 10 TUIR) riducono il reddito imponibile prima del calcolo dell'imposta (es. contributi previdenziali, abitazione principale). Le detrazioni riducono direttamente l'imposta lorda (es. spese sanitarie al 19%, detrazioni per familiari, art. 13 TUIR). Una deduzione di 1.000 € su un'aliquota del 33% risparmia 330 €; una detrazione di 1.000 € risparmia 1.000 €.
    *Fonti*: TUIR artt. 10, 12-16-bis.

14. **Cosa rientra negli oneri deducibili?**
    Tra gli oneri deducibili più rilevanti (art. 10 TUIR): contributi previdenziali ed assistenziali obbligatori, assegno coniuge da separazione/divorzio, deduzione abitazione principale (pari alla rendita catastale, c. 3-bis), spese mediche per disabilità grave (L. 104/1992), erogazioni a ONLUS entro limiti.
    *Fonti*: TUIR art. 10.

### Categoria: Addizionali

15. **Come si calcolano le addizionali IRPEF regionali e comunali nel 2026?**
    Le addizionali si applicano sulla stessa base imponibile dell'IRPEF statale. Aliquota regionale: variabile per regione, da 1,23% (es. Lombardia) a oltre 3% (regioni in disavanzo sanitario), con possibile progressività per scaglioni. Aliquota comunale: fino a 0,8% (1% Roma). Per il 2026 vige un regime transitorio (esteso fino al 2028) in cui le Regioni possono usare i 4 vecchi scaglioni IRPEF, i 3 nuovi, o un'aliquota unica.
    *Fonti*: D.Lgs. 446/1997; D.Lgs. 360/1998.

16. **Le addizionali IRPEF si pagano anche sotto la no tax area?**
    No. Sotto la no tax area (dove l'IRPEF netta è zero) generalmente non sono dovute le addizionali. I Comuni possono inoltre stabilire soglie di esenzione specifiche per i redditi più bassi.
    *Fonti*: D.Lgs. 360/1998.

### Categoria: Versamenti e Sanzioni

17. **Quali sono le scadenze IRPEF 2026?**
    Saldo + I acconto: 30 giugno (o con maggiorazione 0,40% entro 30 giorni). II acconto: 30 novembre (rateazione non ammessa). Periodo di sospensione: 1-20 agosto. Codici tributo F24: 4001 (saldo), 4033 (I acconto), 4034 (II acconto).
    *Fonti*: Agenzia Entrate.

18. **Cosa succede se non pago l'IRPEF in tempo?**
    Sanzione del 25% dell'imposta non versata (D.Lgs. 471/1997 come modificato da D.Lgs. 87/2024). Se entro 90 gg: 12,5%. Se entro 15 gg: 0,083% × giorni di ritardo. Si applicano anche gli interessi legali (1,60% annuo nel 2026). Tramite ravvedimento operoso le sanzioni sono ulteriormente ridotte.
    *Fonti*: D.Lgs. 471/1997; D.Lgs. 87/2024.

### Categoria: Storia e Concetti

19. **L'IRPEF e le tasse sono la stessa cosa?**
    Non esattamente. L'IRPEF è una delle imposte dirette personali (sul reddito delle persone fisiche). Le "tasse" in senso ampio includono anche imposte indirette (IVA), tributi locali (IMU), addizionali e contributi. L'IRPEF è l'imposta principale sul reddito ed è espressione del principio di progressività (art. 53 Cost.).
    *Fonti*: TUIR art. 1; Cost. art. 53.

20. **Cosa è cambiato nell'IRPEF dal 2022 ad oggi?**
    2022: passaggio da 5 a 4 scaglioni (L. 234/2021), aliquote 23/25/35/43%. 2024: passaggio a 3 scaglioni temporaneo (D.Lgs. 216/2023), aliquote 23/35/43%, accorpamento primi due scaglioni con detrazione lavoro dipendente innalzata a 1.955 €. 2025: 3 scaglioni resi strutturali (L. 207/2024), introdotto bonus aggiuntivo. 2026: aliquota secondo scaglione ridotta dal 35% al 33% (L. 199/2025).
    *Fonti*: leggi citate, MEF.

21. **Sono esonerato dalla dichiarazione dei redditi 2026?**
    Sì, se rientri in soglie specifiche: terreni/fabbricati ≤ 500 €, lavoro dipendente ≤ 8.000 €, pensione ≤ 8.000 €, autonomi occasionali ≤ 4.800 €, sportivi dilettanti ≤ 30.658,28 €. Il periodo di lavoro o pensione non deve essere inferiore a 365 giorni. L'esonero non vale se devi restituire il bonus IRPEF.
    *Fonti*: Agenzia Entrate Modello REDDITI PF 2026.

22. **L'aliquota del 33% si applica a tutto il mio stipendio se guadagno più di 28.000 euro?**
    No. L'IRPEF è progressiva per scaglioni. Se guadagni 35.000 € all'anno, paghi 23% sui primi 28.000 € (= 6.440 €) e solo il 33% sui restanti 7.000 € (= 2.310 €), per un totale di 8.750 € di IRPEF lorda. L'aliquota media risulta circa il 25%, non il 33%.
    *Fonti*: TUIR art. 11; AE Aliquote e calcolo IRPEF.

---

## E. Sources Bibliography (institutional URLs)

### Normattiva
- **TUIR (DPR 917/1986) testo vigente**: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1986-12-22;917
- **Art. 11 TUIR**: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto:1986-12-22;917~art11
- **DPR 600/1973 (accertamento)**: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1973-09-29;600
- **D.Lgs. 446/1997 (addizionale regionale)**: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-15;446
- **D.Lgs. 360/1998 (addizionale comunale)**: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-09-28;360
- **D.Lgs. 471/1997 (sanzioni)**: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;471
- **D.Lgs. 216/2023 (riforma IRPEF 2024)**: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2023-12-30;216
- **L. 207/2024 (Legge di Bilancio 2025)**: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2024-12-30;207
- **L. 199/2025 (Legge di Bilancio 2026)**: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-12-30;199
- **D.Lgs. 87/2024 (riforma sanzioni)**: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87

### Gazzetta Ufficiale
- **GU n. 301 del 30/12/2025 (L. 199/2025)**: https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2025-12-30&atto.codiceRedazionale=25G00212

### Agenzia delle Entrate
- **Aliquote e calcolo IRPEF (pagina ufficiale)**: https://www.agenziaentrate.gov.it/portale/imposta-sul-reddito-delle-persone-fisiche-irpef-/aliquote-e-calcolo-dell-irpef
- **Modelli dichiarazione**: https://www.agenziaentrate.gov.it/portale/web/guest/dichiarazioni
- **F24 e codici tributo**: https://www.agenziaentrate.gov.it/portale/Schede/Pagamenti/F24/

### Brocardi (TUIR commentato)
- **Art. 1 TUIR**: https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art1.html
- **Art. 8 TUIR**: https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art8.html
- **Art. 10 TUIR**: https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art10.html
- **Art. 11 TUIR**: https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art11.html
- **Art. 13 TUIR**: https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art13.html
- **Art. 15 TUIR**: https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art15.html

### MEF
- **Riforma IRPEF 2022 (analisi MEF)**: https://www.pmi.it/impresa/contabilita-e-fisco/376813/la-riforma-irpef-spiegata-bene-dal-ministero-delleconomia.html

---

## F. Section-to-Research Mapping

| Page Section | Raw Research Sections | Key Data Points / Formulas |
|--------------|----------------------|---------------------------|
| 1. Calcolatore IRPEF | A.1 + A.4 + A.6 + A.9 | Formula scaglioni 2026, detrazioni base, addizionali |
| 2. Cos'è l'IRPEF | §1.1, §1.2 + B.1 | Definizione, art. 1 TUIR, natura giuridica |
| 3. Aliquote IRPEF 2026 | §2.1 + B.2 + B.6 | Art. 11 TUIR vigente, L. 199/2025 |
| 4. Tabella Scaglioni 2024-2025-2026 | §2.2 + A.2 | Confronto storico aliquote |
| 5. Come si calcola | §3.1 + §3.2 + A.3 | Formula progressiva, esempi 20k/35k/60k/100k |
| 6. Esempi pratici (tabella) | A.3 | 12 redditi con IRPEF lorda 2025 vs 2026 e risparmio |
| 7. Novità Legge di Bilancio 2026 | §6.1 + §6.3 + A.7 | €440 risparmio max, sterilizzazione >200k |
| 8. Aliquota media e marginale | §3.3 | Formule e esempi |
| 9. Detrazioni di base | §5.1 + §5.2 + §5.3 + A.4 | Formule complete dipendenti/pensione/autonomi |
| 10. No Tax Area | §4.4 + A.5 | Soglie 8.500/8.500/5.500 €, meccanismo |
| 11. Reddito imponibile + deduzioni | §4.1 + §4.2 + B.4 + B.5 | Art. 8 e 10 TUIR |
| 12. Addizionali regionali e comunali | §7.1 + §7.2 + §7.3 + A.9 | D.Lgs. 446/1997, 360/1998, regime transitorio |
| 13. IRPEF in busta paga | §8.1 + §8.2 + A.10 | Art. 23 DPR 600/1973, ragguaglio mensile |
| 14. Esonero dichiarazione | §8.3 + A.11 | Tabella soglie esonero |
| 15. Versamenti F24 | §9.1 + A.12 | Codici tributo, scadenze, rateazione |
| 16. Sanzioni e ravvedimento | §9.2 + §9.3 + A.13 | D.Lgs. 471/1997, D.Lgs. 87/2024 |
| 17. Errori comuni | §10.1 + §10.2 + §10.3 + C | Per AlertBox |
| 18. FAQ | D | 22 items con fonti |
| 19. Fonti e Riferimenti | E | Bibliografia istituzionale |
| 20. Normativa | E | NormativaRefTable |

---

## G. Source Verification Checklist

- ✅ Art. 11 TUIR 2026: verificato verbatim contro Brocardi + GU 301/2025
- ✅ Legge 199/2025 numero/data/GU: verificato
- ✅ Detrazione lavoro dipendente formula: verificato art. 13 TUIR via Brocardi
- ✅ No tax area soglie: verificato 8.500/8.500/5.500 €
- ✅ Beneficio massimo €440: verificato algebricamente
- ✅ Aliquote storiche pre-2022: verificato (5 scaglioni 23/27/38/41/43)
- ✅ Addizionali D.Lgs. 446/1997 e 360/1998: base normativa confermata
- ✅ Codici tributo F24 IRPEF: 4001/4033/4034 verificato
- ✅ Sanzioni D.Lgs. 87/2024: applicabile da 1° settembre 2024
- ⚠ Aliquote addizionali regionali specifiche: variabili annualmente (range indicativo riportato)
- ⚠ Esonero dichiarazione: soglie da Modello REDDITI PF 2026 (in pubblicazione)
- ✅ Trattamento integrativo + ulteriori detrazioni L. 207/2024: percentuali verificate

Nessun unresolved [VERIFY] tag — dati pronti per implementazione.
