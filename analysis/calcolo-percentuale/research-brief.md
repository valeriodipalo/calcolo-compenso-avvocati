# Research Brief: Calcolo Percentuale

> **Bridge** between [raw-research.md](raw-research.md) (~10.000 parole, 50 fonti) and Phase 4 implementation.
> Reading order during implementation: this brief → raw-research.md → keyword-strategy.md → competitor-analysis.md.

---

## 1. Structured Data (for tables and calculator)

### 1.1 Le 4 formule fondamentali

| # | Domanda | Formula | Note |
|---|---|---|---|
| 1 | Calcolo della parte (X% di N) | `P = T × p/100` | Caso più comune, base del 90% dei calcoli |
| 2 | Calcolo dell'incidenza (V su N = ?%) | `p = (P/T) × 100` | Quale percentuale rappresenta una parte sul totale |
| 3 | Calcolo del totale (percentuale inversa) | `T = P / (p/100)` | "30 è il 15% di → 200" |
| 4 | Variazione percentuale tra due valori | `Var% = ((Nuovo − Vecchio) / Vecchio) × 100` | Confronto tra due periodi |

### 1.2 Aumenti e diminuzioni

| Operazione | Formula | Esempio |
|---|---|---|
| Aumento del p% | `Nuovo = Vecchio × (1 + p/100)` | +15% su 80 → 80 × 1,15 = 92 |
| Diminuzione del p% | `Nuovo = Vecchio × (1 − p/100)` | −30% su 100 → 100 × 0,70 = 70 |
| Sconti successivi | `Sconto_tot = 1 − ∏(1 − sᵢ/100)` | 30% poi 20%: 1 − 0,7×0,8 = 0,44 → −44% (NON 50%) |

### 1.3 Tabella conversioni percentuale ↔ frazione ↔ decimale

| Percentuale | Frazione | Decimale | Trucco mentale |
|:---:|:---:|:---:|---|
| 1% | 1/100 | 0,01 | Sposta virgola di 2 posizioni a sinistra |
| 5% | 1/20 | 0,05 | Metà del 10% |
| 10% | 1/10 | 0,10 | Sposta virgola di 1 posizione a sinistra |
| 12,5% | 1/8 | 0,125 | — |
| 15% | 3/20 | 0,15 | 10% + 5% (utile per mance) |
| 20% | 1/5 | 0,20 | Dividi per 5 |
| 25% | 1/4 | 0,25 | Dividi per 4 |
| 33,33% | 1/3 | 0,333... | Dividi per 3 |
| 50% | 1/2 | 0,50 | Dividi per 2 |
| 66,67% | 2/3 | 0,667... | 33% × 2 |
| 75% | 3/4 | 0,75 | 25% × 3 oppure 100% − 25% |
| 100% | 1/1 | 1,00 | Il numero stesso |

### 1.4 IVA italiana 2026 — aliquote e coefficienti

| Aliquota | Coefficiente aggiunta | Coefficiente scorporo | Norma | Casi tipici |
|:---:|:---:|:---:|---|---|
| 4% | × 1,04 | ÷ 1,04 (≈ × 0,9615) | DPR 633/1972 Tabella A, Parte II | Beni di prima necessità, libri, pane, latte |
| 5% | × 1,05 | ÷ 1,05 (≈ × 0,9524) | DPR 633/1972 Tabella A, Parte II-bis | Erbe officinali, alcuni servizi sociali, prodotti igiene femminile |
| 10% | × 1,10 | ÷ 1,10 (≈ × 0,9091) | DPR 633/1972 Tabella A, Parte III | Servizi turistici, ristorazione, alcuni alimenti, edilizia agevolata |
| 22% | × 1,22 | ÷ 1,22 (≈ × 0,8197) | DPR 633/1972 art. 16 | Aliquota ordinaria, default per beni/servizi |

**⚠️ Errore classico**: scorporare IVA 22% facendo Lordo × 0,78. SBAGLIATO. Il coefficiente corretto è `÷ 1,22` ovvero `× 0,8197`. Esempio: scorporo IVA da 122 € → 122 ÷ 1,22 = 100 € netto (NON 122 × 0,78 = 95,16).

### 1.5 Casi professionali — parametri forensi

| Voce | Aliquota | Fonte |
|---|:---:|---|
| Cassa Forense (CPA) | 4% del compenso | DM 147/2022; statuto Cassa Forense |
| Ritenuta d'acconto | 20% del compenso (sulla parcella dei professionisti) | DPR 600/1973 art. 25 |
| Spese forfettarie (parametri forensi) | 15% del compenso | DM 147/2022 art. 2, c. 2 |
| IVA su parcella avvocato | 22% (su compenso + spese imponibili + CPA) | DPR 633/1972 art. 16 |

### 1.6 IRPEF 2026 — scaglioni di reddito

| Scaglione | Reddito imponibile | Aliquota |
|---|---|:---:|
| 1° | fino a 28.000 € | 23% |
| 2° | da 28.001 € a 50.000 € | 35% |
| 3° | oltre 50.000 € | 43% |

**Nota**: dal 2024 il primo e il secondo scaglione del 2023 sono stati accorpati (la riforma fiscale 2024 ha ridotto a 3 gli scaglioni, ora consolidata per il 2026).

### 1.7 Sanzioni ravvedimento operoso 2026

| Tipo | Termine | Sanzione ridotta |
|---|---|---|
| Sprint | entro 14 gg | 0,083% per giorno |
| Breve | 15-30 gg | 1,25% |
| Trimestrale (90 gg) | entro 90 gg | 1,39% |
| Annuale | entro 1 anno | 3,125% (1/8 di 25%) |
| Biennale | entro 2 anni | 3,57% (1/7 di 25%) |
| Oltre 2 anni | dopo termine dichiarazione | 4,17% (1/6 di 25%) |

Norma: D.Lgs. 472/1997 art. 13 (come modificato dal D.Lgs. 87/2024 — riforma sanzioni).

---

## 2. Editorial content (preserved verbatim from raw-research.md)

Tutto il contenuto narrativo della raw-research.md va trasferito alle sezioni della pagina, NON riassunto. Sotto, l'estrazione fedele per ogni area tematica.

### 2.1 Definizione e storia (sezione "Cos'è una percentuale")

**Da raw-research §1.1-1.5** — usare integralmente:
- Definizione matematica: rapporto in centesimi, proporzione `a/b = n/100`
- Etimologia: dal latino tardo "per centum" (per cento); Treccani conferma origine come "ogni cento"
- Storia: mercanti italiani Quattrocento, contabilità a partita doppia, simbolo % consolidato XVI-XVII secolo
- Simboli affini: ‰ (per mille, frequenze rare), ‱ (per diecimila, "punto base" in finanza)
- Differenze: percentuale vs frazione vs rapporto vs proporzione vs tasso (la statistica distingue tra proporzione, tasso e rapporto)

### 2.2 Le 4 formule fondamentali (sezione "Le formule del calcolo percentuale")

**Da raw-research §2.1-2.4** — l'intera struttura argomentativa:
- Partire dalla proporzione `Parte : Totale = Percentuale : 100`
- Derivazione algebrica per ciascuna delle 4 formule
- Per ogni formula: 3 esempi numerici step-by-step

Esempi worked verbatim:
- 20% di 150 € = 30 € (con calcolo passo-passo)
- 7,5% di 129,90 € = 9,7425 → arrotondato a 9,74 €
- 22% di 1000 € = 220 € (caso IVA)
- 15 è il 25% di 60 (incidenza)
- 30 è il 15% di → 200 (totale inverso)
- Da 80 a 92 = +15% (variazione)

### 2.3 Aumento, diminuzione, sconto (sezione "Aumenti e sconti")

**Da raw-research §3** — preservare:
- Formula generale aumento: `N = V × (1 + p/100)` con esempio +15% su 80
- Formula generale diminuzione: `N = V × (1 − p/100)` con esempio sconto −30% su 100
- Caso "ricarico commerciale": prezzo all'ingrosso → prezzo al pubblico
- Esempio fattura: importo netto + IVA = importo lordo (link concettuale a scorporo-iva)

### 2.4 Sconti successivi (sezione critica)

**Da raw-research §4** — preservare ESPRESSAMENTE l'esempio:
- 30% + 20% NON fa 50%. Calcolo corretto: `1 − (1 − 0,30) × (1 − 0,20) = 1 − 0,70 × 0,80 = 1 − 0,56 = 0,44` → sconto reale 44%
- Su prezzo 100 € → finale 56 € (risparmio 44 €), NON 50 €
- Generalizzazione: `Sconto_tot = 1 − ∏(1 − sᵢ/100)`
- Caso "saldi finali" o "double discount": comune nei mercati, B2B con condizioni a cascata
- Effetto della sequenza: matematicamente commutativo, ma operativamente diverso quando le condizioni hanno limiti (es. sconto fedeltà + sconto promo non sommabili)

### 2.5 Punti percentuali vs percentuale relativa (sezione GEO-citable)

**Da raw-research §5** — fondamentale per AI Overview:
- Tasso interesse dal 3% al 5% = **+2 punti percentuali** (differenza aritmetica)
- MA è anche un **+66,7% di variazione relativa** (2/3 × 100)
- Errore tipico nella stampa: "i tassi sono saliti del 2%" — ambiguità
- Quando si scrive 'pp' (punti percentuali) la differenza è inequivocabile
- Wikipedia §15 fornisce la definizione formale

### 2.6 IVA italiana (sezione "Calcolo dell'IVA e scorporo")

**Da raw-research §6** — preservare:
- 4 aliquote vigenti: 22% (ordinaria), 10%, 5%, 4% (DPR 633/1972)
- Aggiunta IVA: `Lordo = Netto × (1 + aliquota/100)`
- Scorporo IVA: `Netto = Lordo / (1 + aliquota/100)`
- Coefficienti rapidi: 0,8197 per IVA 22%, 0,9091 per IVA 10%, 0,9524 per IVA 5%, 0,9615 per IVA 4%
- Esempio scorporo da 122 €: 122 ÷ 1,22 = 100 €
- ⚠️ Errore: scorporare facendo `Lordo × (1 − 0,22)` = `Lordo × 0,78`. Sbagliato.
- Cenni a reverse charge (D.Lgs. 11/2018) e split payment (estesi e ridotti negli ultimi anni)
- **Link cross-tool**: rimanda a `/scorporo-iva` per il tool dedicato

### 2.7 Casi d'uso professionali (sezione "Applicazioni pratiche")

**Da raw-research §7** — distribuire in sotto-sezioni:

**A. Fatturazione forense** (avvocati):
- Parametri DM 147/2022: spese generali 15%, CPA 4%, IVA 22%, ritenuta 20%
- Esempio completo: compenso 1.000 € → +15% spese = 1.150 → +4% CPA = 1.196 → +22% IVA = 1.459,12 → −20% ritenuta su 1.150 (compenso + spese imponibili) = 230 → netto incassato 1.229,12
- Cross-link a `/calcolo-fattura-avvocato`

**B. Margine vs Markup** (commerciale):
- Margine = ((Prezzo − Costo) / Prezzo) × 100
- Markup = ((Prezzo − Costo) / Costo) × 100
- Esempio: costo 60, prezzo 100 → Margine 40%, Markup 66,7%
- Errore comune: confondere i due, soprattutto nei listini con sconto/ricarico

**C. Rendimento finanziario** (investimenti):
- Interessi semplici: `I = C × i × t / 100` (capitale × tasso × tempo)
- TAEG: percentuale annua effettiva globale che include tutti i costi accessori
- Cross-link a `/calcolo-interessi-legali`

**D. Voto e media scolastica**:
- Voto in 30esimi → percentuale: 18/30 = 60%, 24/30 = 80%, 30/30 = 100%
- Media ponderata: `M = Σ(voto × CFU) / Σ(CFU)`
- Frequenza scolastica: minimo 75% per validità anno (Orizzonte Scuola §49)

**E. Affluenza elettorale**:
- Affluenza = (votanti / aventi diritto) × 100
- Quoziente di sbarramento (es. 4% Parlamento): percentuale minima per accedere al riparto seggi
- Esempio elezioni politiche 2022: percentuali per partito ottenibili con la formula incidenza

**F. Ravvedimento operoso, IRPEF, addizionali**:
- Scaglioni IRPEF 2026 (23%, 35%, 43%)
- Cross-link a `/ravvedimento-operoso`
- Cross-link a `/calcolo-tfr`

### 2.8 Excel e Google Sheets (sezione "Calcolo percentuale in Excel")

**Da raw-research §8** — preservare formule:

| Calcolo | Formula Excel/Sheets |
|---|---|
| 20% di A1 | `=A1*20%` oppure `=A1*0,20` |
| Quale % è A1 di B1 | `=A1/B1` (formato cella: percentuale) |
| Variazione % da A1 a B1 | `=(B1-A1)/A1` (formato %) |
| Aggiungere IVA 22% a A1 | `=A1*1,22` |
| Scorporare IVA 22% da A1 | `=A1/1,22` |
| Sconto del B1% su A1 | `=A1*(1-B1/100)` |
| Arrotondare a 2 decimali | `=ARROTONDA(formula;2)` |
| Sconti successivi 30%+20% | `=A1*0,7*0,8` |

**Nota**: in Excel italiano il separatore decimale è la virgola e il separatore di argomenti il punto e virgola. In Google Sheets dipende dalla localizzazione del foglio.

### 2.9 Trucchi mentali (sezione "Calcolo percentuale a mente")

**Da raw-research §9** — preservare gli 8+ trucchi:

1. **10% di N**: sposta la virgola di una posizione a sinistra (10% di 250 = 25)
2. **5% di N**: metà del 10%
3. **1% di N**: sposta virgola di 2 posizioni
4. **25% di N**: dividi per 4
5. **50% di N**: dividi per 2
6. **75% di N**: 25% × 3 oppure 100% − 25%
7. **15% di N**: 10% + 5% (utile per le mance)
8. **Trucco dello scambio**: `a% di b = b% di a` (es. 4% di 75 = 75% di 4 = 3) — non intuitivo ma rigorosamente vero (commutatività della moltiplicazione)
9. **11%-13%**: 10% + (1-3)%
10. **40% di N**: 10% × 4

### 2.10 Errori comuni (sezione "Errori comuni da evitare")

**Da raw-research §10** — 6 errori da preservare con esempio:

1. **Confondere punti percentuali e percentuale relativa**: 5% → 7% = +2pp ma +40% relativo
2. **Sommare sconti invece di comporli**: 30%+20% ≠ 50%, è 44%
3. **Applicare percentuale alla base sbagliata**: sconto sul lordo vs netto, IVA sul netto vs sul lordo
4. **+30% poi −30% non torna al valore iniziale**: 100 → 130 → 91 (perde il 9%)
5. **Arrotondamenti intermedi che si accumulano**: arrotondare solo alla fine, non a ogni passaggio (cit. Università di Padova §41)
6. **Scorporo IVA sbagliato**: `Lordo × 0,78` invece di `÷ 1,22`. Differenza: 122 × 0,78 = 95,16 ma 122 ÷ 1,22 = 100
7. **Confondere margine e markup**: il primo si calcola sul prezzo, il secondo sul costo

### 2.11 Notazione italiana

**Da raw-research §11** — preservare:
- Virgola decimale: `1,5` non `1.5`
- Punto separatore migliaia: `1.234,56` non `1,234.56`
- Simbolo % attaccato al numero: `50%` non `50 %`
- "Percentuale" sempre al femminile
- "Punti percentuali" abbreviato in `pp` (es: "+2 pp")
- Quando si scrive una percentuale in un atto giudiziario, indicare sempre se la base è il lordo o il netto, e l'eventuale arrotondamento applicato

---

## 3. FAQ (15-20 items con fonti)

Domande da PAA + long-tail keywords + practitioner questions estratte dalla research.

### Categoria A: Come si calcola

**Q1: Come si calcola la percentuale di un numero?**
A: Usa la formula `Parte = Totale × (Percentuale / 100)`. In pratica, moltiplica il numero per la percentuale espressa come decimale. Esempio: il 20% di 50 si ottiene così → `50 × 0,20 = 10`. Per passare da percentuale a decimale, dividi per 100 (20% ÷ 100 = 0,20).
Fonti: Treccani Enciclopedia Matematica; Wikipedia Percentuale.

**Q2: Come si calcola la percentuale di 75 su 300?**
A: Si applica la formula dell'incidenza: `% = (Parte / Totale) × 100`. Quindi `(75 / 300) × 100 = 0,25 × 100 = 25%`. 75 rappresenta il 25% di 300, ovvero un quarto del totale.
Fonti: Testbusters guida pratica.

**Q3: Qual è la percentuale di 21 su 30?**
A: Calcolo: `(21 / 30) × 100 = 0,7 × 100 = 70%`. Quindi 21 rappresenta il 70% di 30 (utile, ad esempio, per convertire un voto su 30 in percentuale).
Fonti: Testbusters; calcolopercentuali.it.

**Q4: Come si calcola una percentuale su un totale?**
A: Dipende dall'incognita. Se conosci la parte e cerchi la percentuale: `% = (Parte / Totale) × 100`. Se conosci la percentuale e cerchi la parte: `Parte = Totale × (% / 100)`. La proporzione fondamentale è sempre `Parte : Totale = Percentuale : 100`.
Fonti: Treccani.

**Q5: Come si calcola il 30% di un importo?**
A: Moltiplica l'importo per 0,30 (cioè 30 diviso 100). Esempio: il 30% di 200 € si ottiene così → `200 × 0,30 = 60 €`. In alternativa: `200 × 30 / 100 = 60`.
Fonti: chimica-online.it; Treccani.

**Q6: Qual è il 30% di 50 €?**
A: `50 × 0,30 = 15 €`. Quindi il 30% di 50 € è 15 €.
Fonti: chimica-online.it.

**Q7: Come si calcola il 30% con la calcolatrice?**
A: Su una calcolatrice standard: digita il numero (es. 150), premi `×`, digita 30, premi `÷`, digita 100, premi `=` → ottieni 45. Sulle calcolatrici con tasto `%`: digita `150 × 30 %` e premi `=` → la calcolatrice esegue automaticamente la divisione per 100.
Fonti: chimica-online.it.

### Categoria B: Sconti, aumenti e variazioni

**Q8: Come si calcola lo sconto in percentuale?**
A: Per uno sconto del p% su un prezzo, il prezzo finale è: `Prezzo_finale = Prezzo × (1 − p/100)`. Esempio: 80 € con sconto 20% → `80 × 0,80 = 64 €` (risparmio di 16 €). L'importo dello sconto è `Sconto = Prezzo × (p/100)` = 80 × 0,20 = 16 €.
Fonti: avvocatoandreani.it; Treccani.

**Q9: Perché 30% + 20% non fa 50% di sconto?**
A: Perché gli sconti successivi si moltiplicano, non si sommano. Su 100 €: primo sconto 30% → resta 70 €. Secondo sconto 20% applicato sui 70 € → resta 56 €. Sconto totale: `1 − (0,70 × 0,80) = 1 − 0,56 = 44%`, NON 50%. Formula generale per due sconti: `Sconto_tot = 1 − (1 − s₁/100)(1 − s₂/100)`.
Fonti: Wikipedia Sconto; raw-research §4.

**Q10: Se aumento del 30% e poi diminuisco del 30%, torno al valore iniziale?**
A: No, mai. Esempio: 100 → +30% = 130 → −30% di 130 = 91. Si perde il 9%. Questo perché l'aumento si calcola sul valore iniziale e la diminuzione successiva sul valore aumentato, quindi su una base diversa.
Fonti: Wikipedia Percentuale.

**Q11: Come si calcola la variazione percentuale tra due numeri?**
A: Formula: `Var% = ((Valore finale − Valore iniziale) / Valore iniziale) × 100`. Se positiva è un aumento, se negativa una diminuzione. Esempio: da 80 a 92 → `((92−80)/80) × 100 = +15%`. Da 50 a 35 → `((35−50)/50) × 100 = −30%`.
Fonti: Skuola.net; raw-research §2.4.

### Categoria C: IVA e fiscalità

**Q12: Come si aggiunge l'IVA al 22% a un importo netto?**
A: Moltiplica il netto per 1,22. Esempio: netto 100 € → `100 × 1,22 = 122 € lordi`. Per le altre aliquote: IVA 10% → × 1,10; IVA 5% → × 1,05; IVA 4% → × 1,04. La formula generale è `Lordo = Netto × (1 + aliquota/100)`.
Fonti: DPR 633/1972 art. 16; Fiscozen guida scorporo IVA.

**Q13: Come si scorpora l'IVA da un prezzo lordo?**
A: Dividi il lordo per `(1 + aliquota/100)`. Per IVA 22%: `Netto = Lordo / 1,22`. Esempio: lordo 122 € → netto 100 €. **Attenzione**: non sottrarre il 22% dal lordo (122 × 0,78 = 95,16 è SBAGLIATO). Il coefficiente rapido per IVA 22% è 0,8197 (cioè 1/1,22).
Fonti: Fiscozen; CNA Biella guida scorporo.

**Q14: Quanto vale il 4% di CPA su una parcella di avvocato?**
A: La CPA (Cassa Previdenza Avvocati) è il 4% del compenso imponibile (compenso + spese forfettarie 15%, escluse le spese vive). Esempio: compenso 1.000 € + spese forfettarie 150 € (15%) = base 1.150 € → CPA = `1.150 × 0,04 = 46 €`. La CPA va poi inclusa nell'imponibile IVA.
Fonti: Cassa Forense; DM 147/2022; Ordine Avvocati Milano.

### Categoria D: Concetti avanzati

**Q15: Qual è la differenza tra punti percentuali e percentuale relativa?**
A: I **punti percentuali (pp)** misurano la differenza aritmetica tra due percentuali. Passare dal 5% al 7% = `+2 punti percentuali`. La **percentuale relativa** misura di quanto è variata la percentuale rispetto al valore di partenza: da 5% a 7% è un aumento relativo del 40% (`(2/5) × 100`). Sono concetti diversi e spesso confusi nella stampa finanziaria.
Fonti: Wikipedia Punto Percentuale; Università di Padova §41.

**Q16: Qual è la differenza tra margine e markup?**
A: Il **margine percentuale** si calcola sul prezzo di vendita: `Margine% = ((Prezzo − Costo) / Prezzo) × 100`. Il **markup** si calcola sul costo: `Markup% = ((Prezzo − Costo) / Costo) × 100`. Esempio: costo 60 €, prezzo 100 € → Margine 40%, Markup 66,7%. Confonderli porta a errori di pricing rilevanti.
Fonti: gocardless.com; visurenetwork.it.

**Q17: Come calcolo la percentuale in Excel?**
A: Per il 20% di A1 scrivi `=A1*20%` oppure `=A1*0,20`. Per la percentuale tra due valori `=A1/B1` con cella formattata come %. Per la variazione percentuale `=(B1-A1)/A1` con formato %. Per aggiungere IVA `=A1*1,22`, per scorporare IVA `=A1/1,22`. La funzione `ARROTONDA(formula;2)` gestisce i decimali finali.
Fonti: Microsoft Support; raw-research §8.

**Q18: Come si calcolano le percentuali velocemente (a mente)?**
A: Usa scorciatoie: il **10% di N** si ottiene spostando la virgola di una posizione a sinistra (10% di 250 = 25). Il **5%** è la metà del 10%. Il **25%** è N diviso 4. Il **50%** è N diviso 2. Il **trucco dello scambio**: `a% di b = b% di a` — il 4% di 75 è uguale al 75% di 4, cioè 3. Più veloce!
Fonti: Geopop; raw-research §9.

**Q19: Cos'è il calcolo della percentuale inversa?**
A: Si chiama "percentuale inversa" quando si conosce la parte e la percentuale, e si vuole trovare il totale. Formula: `Totale = Parte / (Percentuale / 100)`. Esempio: 30 è il 15% di quanto? → `30 / 0,15 = 200`. Tipico caso: ricavare l'imponibile da un'imposta (es. l'IRPEF è 230 € → quale è il reddito tassato al 23%? → 230 / 0,23 = 1.000 €).
Fonti: avvocatoandreani.it; raw-research §2.3.

**Q20: Come si calcola il margine di profitto in percentuale?**
A: `Margine% = ((Ricavo − Costo) / Ricavo) × 100`. Esempio: ricavo 250 €, costo 175 € → `((250 − 175) / 250) × 100 = 30%`. Il margine percentuale indica la quota di ricavo che resta dopo aver coperto i costi, ed è un KPI fondamentale nella gestione commerciale.
Fonti: visurenetwork.it; gocardless.com.

---

## 4. Sources bibliography ("Fonti e Riferimenti" section)

Fonti istituzionali e autorevoli citate nella research (top 15 per autorevolezza):

| # | Fonte | URL | Argomento |
|---|---|---|---|
| 1 | **Treccani** — Enciclopedia della Matematica, voce "Percentuale" | https://www.treccani.it/enciclopedia/percentuale_(Enciclopedia-della-Matematica)/ | Definizione matematica |
| 2 | **Treccani** — Vocabolario "centum" | https://www.treccani.it/vocabolario/centum/ | Etimologia |
| 3 | **Wikipedia** — Percentuale | https://it.wikipedia.org/wiki/Percentuale | Definizione, simbolo, esempi |
| 4 | **Wikipedia** — Punto percentuale | https://it.wikipedia.org/wiki/Punto_percentuale | Differenza pp vs % relativa |
| 5 | **Wikipedia** — Simbolo di percentuale | https://it.wikipedia.org/wiki/Simbolo_di_percentuale | Storia simbolo % |
| 6 | **EU VAT One Stop Shop** — Italia regole IVA | https://vat-one-stop-shop.ec.europa.eu/national-vat-rules/italy-vat-rules_en | Aliquote IVA ufficiali |
| 7 | **Cassa Forense** — Vademecum fiscalità avvocati | https://www.cassaforense.it/media/2a3gkril/vademecum-fiscalita-versione-completa.pdf | CPA 4%, regime fiscale |
| 8 | **Ordine Avvocati Milano** — Parametri DM 147/2022 | https://www.ordineavvocatimilano.it/it/i-parametri-forensi-aggiornati-dal-dm-13-agosto-2022-n-147/p592 | Spese forfettarie 15% |
| 9 | **Fiscozen** — Guida scorporo IVA 22% | https://www.fiscozen.it/guide/scorporo-iva-22/ | Coefficienti scorporo |
| 10 | **FiscoeTasse** — Guida ravvedimento operoso | https://www.fiscoetasse.com/approfondimenti/16877-guida-al-ravvedimento-operoso.html | Sanzioni ridotte 2026 |
| 11 | **SoluzioneTasse** — Scaglioni IRPEF 2026 | https://www.soluzionetasse.com/scaglioni-irpef/ | Aliquote progressive |
| 12 | **Microsoft Support** — Calcolare percentuali in Excel | https://support.microsoft.com/it-it/office/calcolare-le-percentuali-6b5506e9-125a-4aba-a638-d6b40e603981 | Formule Excel |
| 13 | **Università di Padova** — Arrotondamenti numerici | https://www.math.unipd.it/~marcov/pdf/rounding.pdf | Errori arrotondamento |
| 14 | **Geopop** — Trucchi rapidi calcolo percentuale | https://www.geopop.it/come-calcolare-le-percentuali-in-modo-facile-tutti-i-trucchi-matematici/ | Calcolo mentale |
| 15 | **MIUR / Orizzonte Scuola** — Frequenza alunni | https://www.orizzontescuola.it/frequenza-alunni-e-limite-assenze-come-si-calcola-quando-si-rischia-la-non-ammissione-casi-in-deroga-e-quando-non-si-boccia-guida/ | 75% frequenza minima |

Norme citate: DPR 633/1972 (IVA), DM 147/2022 (parametri forensi), DPR 600/1973 art. 25 (ritenuta d'acconto), D.Lgs. 472/1997 art. 13 (ravvedimento), D.Lgs. 87/2024 (riforma sanzioni).

---

## 5. Section-to-Research Mapping (mandatory)

| Page Section | Raw research §§ | Brief §§ | Key data points |
|---|---|---|---|
| **Hero + Calcolatore (7 modalità)** | §2 (formule) + §3 (aumento/sconto) + §4 (sconti successivi) | 1.1, 1.2 | Le 4 formule + sconti composti |
| **Cos'è una percentuale** | §1.1, §1.2, §1.4, §1.5 | 2.1 | Definizione, etimologia, simboli affini |
| **Storia della percentuale** | §1.3 | 2.1 | Mercanti italiani XV sec., simbolo % XVI-XVII |
| **Tabella conversioni %/frazione/decimale** | (sintesi raw §1, §2) | 1.3 | 12 percentuali notevoli |
| **Le 4 formule fondamentali** | §2.1-2.4 | 1.1, 2.2 | Derivazione + 12 esempi worked |
| **Come calcolare la % di un numero** | §2.1 + §12.1, §12.2 | 2.2 | Formula + PAA 30% di 50, 20% di 150 |
| **Quale % è X di Y (incidenza)** | §2.2 + §12.3 (75/300), §12.9 (21/30) | 2.2 | Formula + esempi PAA |
| **Trovare il totale (% inversa)** | §2.3 | 2.2 | Formula + esempi |
| **Variazione percentuale** | §2.4 | 2.2 | Da X a Y |
| **Aumento e diminuzione percentuale** | §3 | 2.3 | Ricarico, sconto |
| **Calcolo dello sconto** | §3 (parte) + §4 | 2.3, 2.4 | Sconto semplice + cluster di 28 keyword |
| **Sconti successivi (composti)** | §4 | 2.4 | 30%+20% = 44% (NON 50%) |
| **Punti percentuali vs % relativa** | §5 | 2.5 | Distinzione AI-citable |
| **Calcolo IVA e scorporo** | §6 | 1.4, 2.6 | 4 aliquote, coefficienti, errore comune |
| **Applicazioni: fattura avvocato** | §7 (A) | 1.5, 2.7 | CPA 4%, spese 15%, ritenuta 20%, IVA 22% |
| **Applicazioni: margine vs markup** | §7 (B) | 2.7 | Differenza, esempio 60/100 |
| **Applicazioni: rendimento finanziario** | §7 (C) | 2.7 | Interessi, TAEG |
| **Applicazioni: voto e affluenza** | §7 (D-E) | 2.7 | 18/30 = 60%, affluenza elettorale |
| **Applicazioni fiscali** | §7 (F) | 1.6, 1.7, 2.7 | IRPEF, ravvedimento |
| **Calcolo % in Excel e Sheets** | §8 | 2.8 | 8 formule pronte |
| **Trucchi mentali rapidi** | §9 | 2.9 | 10 trucchi inclusi "scambio" |
| **Errori comuni da evitare** | §10 | 2.10 | 7 errori, gold per AI Overview |
| **Notazione italiana** | §11 | 2.11 | Virgola decimale, simbolo % |
| **FAQ** | tutta + PAA | 3 | 20 Q&A con fonti |
| **Fonti e Riferimenti** | citations | 4 | 15 fonti istituzionali |

---

## 6. Verification checklist

- [x] Definizione formale: rapporto `parte/totale = n/100` — Treccani, Wikipedia
- [x] Aliquote IVA 2026: 4%, 5%, 10%, 22% — DPR 633/1972, EU VAT shop
- [x] Coefficienti scorporo IVA: 0,8197 (22%), 0,9091 (10%), 0,9524 (5%), 0,9615 (4%) — Fiscozen, CNA
- [x] CPA Cassa Forense 4% — fonte ufficiale Cassa Forense
- [x] Spese forfettarie 15% DM 147/2022 — Ordine Avvocati Milano
- [x] Scaglioni IRPEF 2026: 23%, 35%, 43% — riforma fiscale 2024 consolidata
- [x] Sanzioni ravvedimento 2026: D.Lgs. 87/2024 — FiscoeTasse
- [x] Sconti composti: 30%+20% = 44% (formula `1 − ∏(1−sᵢ/100)`) — derivazione matematica + Wikipedia Sconto
- [x] Punti percentuali vs % relativa — Wikipedia Punto Percentuale
- [x] Trucchi mentali — Geopop, raw-research
- [x] Formule Excel — Microsoft Support
- [x] Tutte le 9 PAA hanno risposte verificate
- [x] Nessun `[VERIFY]` tag pendente

**Pronti per Phase 4 (Implementation).**
