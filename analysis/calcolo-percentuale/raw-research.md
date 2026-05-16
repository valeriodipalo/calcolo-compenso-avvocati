# Guida completa al calcolo percentuale per professionisti del diritto, dell’economia e della didattica

La percentuale è uno strumento matematico apparentemente semplice, ma in realtà estremamente ricco, che collega in modo naturale matematica, contabilità, fiscalità, finanza, statistica ed esercizio della professione forense e commerciale. Essa permette di confrontare grandezze diverse riportandole a una base comune di cento, semplificando i ragionamenti su prezzi, tasse, interessi, voti, risultati elettorali, errori di misura e molto altro.[1][7] In questa guida sistematica, pensata per avvocati, commercialisti, studenti, commercianti e freelance, vengono esposti in modo organico: la definizione e la storia della percentuale, le quattro formule fondamentali, le tecniche per calcolare aumenti, sconti semplici e composti, la distinzione fra punti percentuali e variazione relativa, l’applicazione delle percentuali all’IVA italiana e agli istituti fiscali più rilevanti nel 2026, i casi d’uso professionali tipici (parcelle forensi, ricarico commerciale, rendimenti finanziari, voti, statistiche elettorali, ravvedimento operoso, IRPEF), le formule operative in Excel e Google Sheets, i trucchi di calcolo mentale, gli errori più frequenti e le convenzioni di notazione italiane, con una sezione finale dedicata alle domande “People Also Ask” più comuni sui motori di ricerca. Ogni sezione propone sia l’impianto teorico sia esempi numerici dettagliati, con costante richiamo a fonti autorevoli come Treccani, testi scolastici italiani, materiali universitari, documentazione dell’Agenzia delle Entrate e normativa reperibile su Normattiva.[1][7][23][27]  

---

## 1. Significato, etimologia e storia della percentuale

### 1.1 Definizione matematica di percentuale

Dal punto di vista matematico, una percentuale è un modo di esprimere il rapporto tra due quantità omogenee (parte e totale) in centesimi, ossia come frazione con denominatore \(100\).[1][7] Se indichiamo con \(a\) la parte e con \(b\) il totale (o base), la percentuale \(n\) corrispondente è definita dalla proporzione

\[\frac{a}{b} = \frac{n}{100}.
\][1][7]

Da questa proporzione si ricava subito la formula generale:

\[n = \frac{a}{b} \cdot 100,
\]

dove \(n\) è la percentuale, espressa come numero compreso tra \(0\) e \(100\) (oppure oltre, in caso di incrementi o fenomeni che superano il 100%).[1][7] In notazione percentuale si scrive ad esempio \(45\%\) per indicare il rapporto \(45/100 = 0{,}45\).[1][7] Dal punto di vista dimensionale, la percentuale è un numero puro (adimensionale), perché deriva dal rapporto tra due grandezze omogenee.[1][7]

È importante sottolineare che, operativamente, quando diciamo “\(x\%\) di \(y\)” intendiamo il prodotto

\[x\% \text{ di } y = y \cdot \frac{x}{100},
\]

come chiarito sia nella letteratura matematica di base sia dalla stessa definizione del simbolo “%”.[1][6][6] Ad esempio, \(32\%\) di \(2000\) si calcola come

\[32\% \cdot 2000 = \frac{32}{100} \cdot 2000 = 0{,}32 \cdot 2000 = 640.[1]
\]

Questa impostazione, presente nelle voci “Percentuale” dell’Enciclopedia Treccani e di Wikipedia, è la base da cui derivano tutte le formule pratiche usate nella contabilità, nella fiscalità e nella finanza.[1][7]

### 1.2 Etimologia: “percentuale” e il latino *per centum*

Il termine “percentuale” deriva dal latino tardo *per centum*, espressione che significa “per cento”, a sua volta formata dalla preposizione *per* e dal numerale latino *centum* (“cento”).[2] Il vocabolo italiano “percentuale” è registrato come aggettivo e sostantivo femminile nel Vocabolario Treccani, con il significato di “che si riferisce a cento unità”, come in “guadagno percentuale”, “incremento percentuale della popolazione”. Nel medesimo vocabolario, la percentuale è definita anche come “il numero di persone o di cose che si prende in considerazione su ogni cento di esse; dal punto di vista matematico è il numeratore di una frazione con denominatore 100”, esplicitando il legame tra linguaggio comune e formalismo matematico.

La radice *centum* è quella che ritroviamo anche nelle lingue indoeuropee classificate in linguistica come “lingue centum”, secondo la classificazione dei gruppi indoeuropei, a conferma della diffusione e antichità del concetto di cento come base di conteggio.[2]

### 1.3 Origini storiche: dall’antichità romana ai mercanti italiani

Storicamente, la necessità di ragionare in termini “per cento” nasce dall’esigenza pratica di calcolare interessi, tasse, tributi e sconti in modo proporzionale, specie in contesti commerciali e creditizi. Già nel mondo romano troviamo riferimenti a interessi calcolati su basi frazionarie, fra cui frazioni riferibili a parti centesime, collegate al sistema di tassazione e interesse sul capitale.[4] Con la diffusione della civiltà romana nel bacino del Mediterraneo e in gran parte dell’Europa, si organizzano sistemi fiscali e di riscossione tributi che fanno ampio uso di rapporti proporzionali, anche se non ancora formalizzati con il simbolo “%”.[4]

Nel medioevo e nel Rinascimento, il commercio italiano svolge un ruolo centrale nello sviluppo degli strumenti di calcolo pratico. Gli studi sulla mercatura e i registri dei mercanti lombardi e toscani, attivi a Roma e in altri grandi centri nel XV e XVI secolo, mostrano un uso sistematico di tassi, ricarichi, ribassi e interessi che, di fatto, corrispondono a calcoli percentuali, anche se spesso espressi in termini di “su cento”, “per cento” o come frazioni sul capitale.[3] La contabilità a partita doppia, affermatasi tra XIV e XV secolo nell’area italiana, richiede proprio strumenti di calcolo del tipo “su cento”, e contribuisce enormemente alla diffusione pratica del concetto di percentuale.

La formalizzazione completa della notazione percentuale e l’introduzione del simbolo “%” si consolidano solo in epoca moderna, a partire tra XVI e XVII secolo, in parallelo con lo sviluppo dell’algebra simbolica e della matematica finanziaria; tuttavia, la tradizione dei mercanti italiani del Quattrocento e le pratiche contabili delle città-stato e delle banche italiane hanno costituito un terreno fertile per questa evoluzione.[3]

### 1.4 Il simbolo di percentuale “%” e i simboli affini

Il simbolo tipografico “%” è oggi universalmente usato per indicare una percentuale, ossia una quantità espressa come frazione di cento.[6][6][43] Dal punto di vista matematico, il simbolo “%” equivale a un fattore moltiplicativo pari a \(1/100 = 0{,}01\); cioè scrivere \(n\%\) significa scrivere \(n \cdot \frac{1}{100}\).[7] Nei testi matematici, “t % di a” si interpreta precisamente come

\[a \times \frac{t}{100}.[6][6]
\]

Esistono simboli affini: il simbolo “‰” (per mille) indica un rapporto su mille, equivalente a un fattore \(1/1000 = 0{,}001\), mentre il simbolo “‱” (per diecimila, “punto base”) indica un rapporto su diecimila, usato spesso in finanza per misurare piccolissime variazioni di tassi di interesse.[6][6][15] Questi simboli mantengono lo stesso spirito della percentuale, ma con basi di riferimento diverse (1000 e 10000 invece di 100), molto utili, ad esempio, per rendere leggibili tassi di mortalità, frequenze di eventi rari o microvariazioni di tassi finanziari.[7][15]

### 1.5 Percentuale, frazione, rapporto e proporzione: differenze concettuali

La percentuale è una rappresentazione particolare di un rapporto, ovvero del quoziente tra due grandezze omogenee, espressa in centesimi.[1][5][7] Se consideriamo due quantità \(a\) e \(b\), il rapporto \(\frac{a}{b}\) può essere scritto in tre forme equivalenti:

\[\text{frazione}: \frac{a}{b}, \quad \text{numero decimale}: \frac{a}{b} \approx 0{,}xyz, \quad \text{percentuale}: \frac{a}{b} \cdot 100 \%.
\][1][7]

La frazione è la forma “pura” del rapporto, mentre la percentuale è quella frazione moltiplicata per 100 e accompagnata dal simbolo “%”.[1][7] Per esempio, il rapporto \(3/4\) può essere espresso come numero decimale \(0{,}75\) e come percentuale \(75\%\).[7]

In statistica si usa spesso distinguere fra tre tipi di frazioni: proporzioni, tassi e rapporti.[5] La proporzione (o frequenza relativa) è un rapporto in cui il numeratore è un sottoinsieme del denominatore, ed è sempre compreso tra 0 e 1; moltiplicandola per 100 otteniamo una percentuale compresa tra 0% e 100%.[5] Ad esempio, se in un’azienda 40 dipendenti su 200 sono donne, la proporzione è \(40/200 = 0{,}20\) e la percentuale è \(0{,}20 \cdot 100 = 20\%\).[5]

Il tasso è una particolare frazione che include una dimensione temporale: descrive la frequenza con cui un evento si verifica in un intervallo di tempo, rapportata al numero di soggetti esposti al rischio, spesso moltiplicata per 1000, 100000 o altre potenze di 10 (per esempio i tassi di mortalità per 100000 abitanti).[5][7] Il rapporto (ratio, in statistica) è invece un quoziente in cui il numeratore non è compreso nel denominatore, come il rapporto maschi/femmine in una classe o abitanti per medico in un territorio.[5]

La proporzione, infine, è un’uguaglianza fra due rapporti, del tipo

\[a:b = c:d,
\]

che si legge “a sta a b come c sta a d”. In una proporzione, il prodotto dei medi è uguale al prodotto degli estremi (proprietà fondamentale):

\[a \cdot d = b \cdot c.
\]

Il calcolo percentuale, nella sua forma classica, non è altro che una particolare proporzione in cui uno dei rapporti ha denominatore \(100\), come

\[\text{Parte} : \text{Totale} = \text{Percentuale} : 100.[1][7]

\]

Questa idea sarà la base per le quattro formule fondamentali del prossimo capitolo.

---

## 2. Le quattro formule fondamentali del calcolo percentuale

In tutta la pratica professionale, i problemi percentuali si riconducono a quattro domande di base:

1. Dato il totale e la percentuale, qual è la parte?
2. Data la parte e il totale, qual è la percentuale (incidenza)?
3. Data la parte e la percentuale, qual è il totale?
4. Dati un valore “vecchio” e uno “nuovo”, qual è la variazione percentuale?

Queste quattro situazioni corrispondono, rispettivamente, al calcolo diretto di una percentuale, alla determinazione di un’incidenza, al calcolo inverso del totale e al calcolo della variazione percentuale.[1][7][9][35][44][9]  

### 2.1 Calcolo della parte: Parte = Totale × (Percentuale / 100)

La prima formula risponde alla domanda tipica: “Quanto vale il \(p\%\) di un certo totale \(T\)?”. Dal punto di vista delle proporzioni, poniamo

\[\text{Parte} : \text{Totale} = \text{Percentuale} : 100.
\][1][7]

Indicando con \(P\) la parte, con \(T\) il totale e con \(p\) la percentuale, la proporzione diventa

\[P : T = p : 100.
\]

Applicando la proprietà fondamentale delle proporzioni, otteniamo

\[P \cdot 100 = T \cdot p.
\]

Dividendo entrambi i membri per 100 si giunge alla formula operativa:

\[P = T \cdot \frac{p}{100}.
\][1][7][9][44][9]

Questa formula è coerente con le definizioni date dalle fonti di base sul calcolo percentuale, comprese Treccani e le guide pratiche rivolte al grande pubblico.[7][9][35][44][9]

#### Esempio 1: 20% di 150 €

Vogliamo calcolare il 20% di 150 €. Usiamo la formula

\[P = T \cdot \frac{p}{100}.
\]

Nel nostro caso, \(T = 150\), \(p = 20\). Si procede così, passo per passo:

1. Si trasforma la percentuale in frazione decimale: \(20\% = 20/100 = 0{,}20\).[1][7]  
2. Si moltiplica il totale per 0,20:

\[P = 150 \cdot 0{,}20.
\]

3. Si esegue il prodotto:

\[150 \cdot 0{,}20 = 30.
\]

Il 20% di 150 € è dunque 30 €. Questo coincide con la formula usata nei calcolatori percentuali online e nelle guide di base.[35][46]

#### Esempio 2: 7,5% di 129,90 €

Qui il totale è \(T = 129{,}90\) € e la percentuale è \(p = 7{,}5\%\). Si procede come segue:

1. Si trasforma la percentuale in numero decimale: \(7{,}5\% = 7{,}5 / 100 = 0{,}075\).[1][7]  
2. Si applica la formula

\[P = 129{,}90 \cdot 0{,}075.
\]

3. Per il calcolo, è spesso pratico usare una calcolatrice o un foglio di calcolo. In Excel, ad esempio, sarebbe sufficiente digitare `=129,9*7,5%` in una cella.[37]  
4. Eseguendo il prodotto:

\[129{,}90 \cdot 0{,}075 = 9{,}7425.
\]

5. Se si desidera arrotondare ai centesimi di euro, si ottiene 9,74 €, utilizzando anche la funzione `ARROTONDA` nei fogli elettronici, ad esempio `=ARROTONDA(129,9*0,075;2)`.

Il 7,5% di 129,90 € è quindi circa 9,74 €.

#### Esempio 3: 22% di 1000 € (tipico caso IVA)

Questo esempio è tipico per il calcolo dell’IVA ordinaria al 22% in Italia.[18] Il totale di riferimento è l’imponibile netto, quindi \(T = 1000\) €, \(p = 22\%\).

1. Si converte la percentuale: \(22\% = 0{,}22\).[1][7]  
2. Si calcola la parte:

\[P = 1000 \cdot 0{,}22 = 220.
\]

L’IVA è pari a 220 €. Il prezzo lordo IVA inclusa sarà:

\[\text{Lordo} = T + P = 1000 + 220 = 1220.
\]

Questo calcolo è esattamente quello descritto nelle guide IVA per imprese e professionisti.[17][18][20]

### 2.2 Calcolo della percentuale (incidenza): % = (Parte / Totale) × 100

La seconda formula fondamentale serve a rispondere alla domanda: “Questa parte \(P\) che percentuale rappresenta del totale \(T\)?”. Si tratta del calcolo di un’incidenza o frequenza relativa.[5][7][10][35][44][9]

Partiamo sempre dalla proporzione

\[P : T = p : 100.
\]

Questa volta vogliamo ricavare \(p\). Applicando la proprietà fondamentale delle proporzioni:

\[P \cdot 100 = T \cdot p.
\]

Dividendo per \(T\):

\[p = \frac{P}{T} \cdot 100.
\][1][7][9][10][35][9]

Questa espressione è alla base di tutte le formule di “incidenza percentuale” e “frequenza relativa in percentuale” usate in statistica descrittiva.[5][7][10]

#### Esempio 1: 15 è che percentuale di 60?

Qui la parte è \(P = 15\), il totale è \(T = 60\). Usiamo

\[p = \frac{P}{T} \cdot 100.
\]

Passo per passo:

1. Si calcola il rapporto tra parte e totale:

\[\frac{15}{60} = 0{,}25.
\]

2. Si moltiplica per 100:

\[p = 0{,}25 \cdot 100 = 25.
\]

Quindi 15 è il 25% di 60.[35][44] In un foglio elettronico, sarebbe sufficiente scrivere `=15/60` e formattare la cella come percentuale, ottenendo 25%.[37]

#### Esempio 2: 75 è che percentuale di 300?

Qui \(P = 75\), \(T = 300\). Procediamo:

1. Calcolo del rapporto:

\[\frac{75}{300} = 0{,}25.
\]

2. Moltiplicazione per 100:

\[p = 0{,}25 \cdot 100 = 25.
\]

Anche 75 è il 25% di 300. Questo esempio mette in luce come la percentuale colga il rapporto tra grandezze, indipendentemente dalla scala assoluta.

#### Esempio 3: 21 è che percentuale di 30?

Questo è un esempio molto frequente anche nei test di ammissione universitari e nelle prove INVALSI.[44] Poniamo \(P = 21\), \(T = 30\). Si ha:

1. Rapporto:

\[\frac{21}{30} = 0{,}7.
\]

2. Moltiplicazione per 100:

\[p = 0{,}7 \cdot 100 = 70.
\]

Quindi 21 è il 70% di 30. In Excel o Google Sheets si potrebbe scrivere `=21/30` e applicare il formato percentuale per ottenere 70%.[37]

### 2.3 Calcolo del totale (percentuale inversa): Totale = Parte / (Percentuale / 100)

Il terzo problema fondamentale è quello inverso: conosciamo una parte \(P\) e sappiamo che essa rappresenta il \(p\%\) di un certo totale \(T\), e vogliamo determinare \(T\).[9][35][9]

Partiamo come sempre dalla formula di base

\[P = T \cdot \frac{p}{100}.
\]

Questa volta vogliamo ricavare \(T\). Dividendo entrambi i membri per \(p/100\):

\[T = \frac{P}{p/100} = \frac{P \cdot 100}{p}.
\][9][9]

È la cosiddetta “formula percentuale inversa” per il totale, che compare in molte guide pratiche di calcolo percentuale e nelle lezioni scolastiche.[9][9]

#### Esempio 1: 30 è il 15% di quanto?

Poniamo \(P = 30\), \(p = 15\). La formula dice:

\[T = \frac{P \cdot 100}{p} = \frac{30 \cdot 100}{15}.
\]

Si procede:

1. Calcolo del prodotto al numeratore:

\[30 \cdot 100 = 3000.
\]

2. Divisione per 15:

\[\frac{3000}{15} = 200.
\]

Quindi 30 è il 15% di 200. Gli stessi valori compaiono spesso negli esempi di didattica base delle percentuali.

#### Esempio 2: 50 è il 25% di quanto?

Qui \(P = 50\), \(p = 25\). Dalla formula:

\[T = \frac{50 \cdot 100}{25}.
\]

1. Prodotto:

\[50 \cdot 100 = 5000.
\]

2. Divisione:

\[\frac{5000}{25} = 200.
\]

Anche in questo caso, 50 è il 25% di 200. Notiamo che 25% equivale a \(\frac{1}{4}\), quindi il totale è quattro volte la parte; infatti \(50 \cdot 4 = 200\).[32][46]

#### Esempio 3: 13,50 € è il 22% di quanto? (tipico per scorporare una tassa o una commissione)

Supponiamo di sapere che 13,50 € sono il 22% di un certo importo (ad esempio una base imponibile, una commissione su un contratto o una quota percentuale di un fondo).[9][9] Abbiamo \(P = 13{,}50\), \(p = 22\). Applicando la formula:

\[T = \frac{13{,}50 \cdot 100}{22}.
\]

Passo per passo:

1. Calcolo del prodotto:

\[13{,}50 \cdot 100 = 1350.
\]

2. Divisione:

\[\frac{1350}{22} \approx 61{,}3636\ldots
\]

Arrotondando ai centesimi:

\[T \approx 61{,}36 \text{ €}.
\]

Dunque 13,50 € rappresentano circa il 22% di 61,36 €. Se volessimo verificare, potremmo ricalcolare il 22% di 61,36 €:

\[61{,}36 \cdot 0{,}22 \approx 13{,}4992 \approx 13{,}50 \text{ €}.
\]

### 2.4 Calcolo della variazione percentuale: Var% = ((Nuovo − Vecchio) / Vecchio) × 100

La quarta formula fondamentale riguarda il cambiamento di un valore nel tempo o tra due condizioni: si parla di variazione percentuale o tasso di variazione.[12][35] Supponiamo di avere un valore iniziale (o “vecchio”) \(V_{\text{vecchio}}\) e un valore finale (o “nuovo”) \(V_{\text{nuovo}}\). La variazione assoluta è

\[\Delta V = V_{\text{nuovo}} - V_{\text{vecchio}},
\]

mentre la variazione percentuale si definisce come

\[\text{Var}\% = \frac{V_{\text{nuovo}} - V_{\text{vecchio}}}{V_{\text{vecchio}}} \cdot 100.
\][12][35]

Questa formula è utilizzata in statistica, economia, analisi di serie storiche, calcolo di aumenti salariali, variazioni di prezzi, tassi di crescita demografica e molti altri contesti.[12]

#### Esempio 1: da 80 a 92

Vogliamo sapere di quanto è aumentato, in percentuale, un valore che passa da 80 a 92. Si identificano:

\[V_{\text{vecchio}} = 80, \quad V_{\text{nuovo}} = 92.
\]

Si procede:

1. Si calcola la variazione assoluta:

\[\Delta V = 92 - 80 = 12.
\]

2. Si divide per il valore iniziale:

\[\frac{\Delta V}{V_{\text{vecchio}}} = \frac{12}{80} = 0{,}15.
\]

3. Si moltiplica per 100:

\[\text{Var}\% = 0{,}15 \cdot 100 = 15.
\]

La variazione è quindi un aumento del 15%. Questo risultato coincide con gli esempi di molte guide scolastiche e divulgative.[12]

#### Esempio 2: da 100 a 75

Qui abbiamo una diminuzione. Poniamo

\[V_{\text{vecchio}} = 100, \quad V_{\text{nuovo}} = 75.
\]

1. Variazione assoluta:

\[\Delta V = 75 - 100 = -25.
\]

2. Rapporto:

\[\frac{\Delta V}{V_{\text{vecchio}}} = \frac{-25}{100} = -0{,}25.
\]

3. Moltiplicazione per 100:

\[\text{Var}\% = -0{,}25 \cdot 100 = -25.
\]

La variazione percentuale è quindi una diminuzione del 25%. Il segno negativo indica chiaramente un calo.[12]

#### Esempio 3: da 1500 a 1620

Un professionista vede il proprio fatturato passare da 1500 € a 1620 € e vuole conoscere la variazione percentuale. Poniamo

\[V_{\text{vecchio}} = 1500, \quad V_{\text{nuovo}} = 1620.
\]

1. Variazione assoluta:

\[\Delta V = 1620 - 1500 = 120.
\]

2. Rapporto:

\[\frac{120}{1500} = 0{,}08.
\]

3. Moltiplicazione per 100:

\[\text{Var}\% = 0{,}08 \cdot 100 = 8.
\]

La variazione è quindi un aumento dell’8%. Questa formula è identica a quella implementata nei calcolatori di variazione percentuale online e nei fogli di calcolo.[12][35]

---

## 3. Aumenti, diminuzioni e sconti: percentuale “in avanti” e sconti composti

### 3.1 Aumento percentuale: Nuovo = Vecchio × (1 + % / 100)

Quando un valore subisce un aumento del \(p\%\), si può considerare che il nuovo valore sia dato dal vecchio valore più la parte corrispondente al \(p\%\) di quel valore. Se indichiamo con \(V\) il valore iniziale e con \(p\) la percentuale di aumento, otteniamo

\[\text{Nuovo} = V + V \cdot \frac{p}{100} = V \left(1 + \frac{p}{100}\right).
\][35]

Questa forma compatta è molto utile nei calcoli rapidi, nei fogli elettronici e nelle applicazioni finanziarie, e coincide con le formule suggerite da numerose guide operative.[35]

#### Esempio: aumento del 15% su 80 €

Vogliamo aumentare un prezzo di 80 € del 15%. Poniamo \(V = 80\), \(p = 15\). La formula è

\[\text{Nuovo} = 80 \left(1 + \frac{15}{100}\right) = 80 \cdot 1{,}15.
\]

Passo per passo:

1. Si calcola \(15/100 = 0{,}15\).  
2. Si somma 1:

\[1 + 0{,}15 = 1{,}15.
\]

3. Si moltiplica:

\[80 \cdot 1{,}15 = 92.
\]

Il nuovo prezzo è 92 €. Questa modalità di calcolo è esattamente quella proposta anche per l’aumento percentuale in Excel e Google Sheets.[35]

### 3.2 Diminuzione percentuale (sconto): Nuovo = Vecchio × (1 − % / 100)

Nel caso di uno sconto o di una riduzione percentuale, il ragionamento è analogo ma la parte percentuale viene sottratta. Se indichiamo sempre con \(V\) il valore iniziale (ad esempio il prezzo di listino) e con \(p\) la percentuale di sconto, si ha

\[\text{Nuovo} = V - V \cdot \frac{p}{100} = V \left(1 - \frac{p}{100}\right).
\][35][39][40]

Anche qui la forma compatta è molto utile nella pratica, ed è esattamente quella riportata nelle guide di calcolo dello sconto percentuale.[39][40]

#### Esempio: sconto del 30% su 100 €

Supponiamo di avere un capo che costa 100 € e su cui viene applicato uno sconto del 30%.[39]

1. \(V = 100\), \(p = 30\).  
2. Calcolo di \(30/100 = 0{,}30\).  
3. Calcolo del fattore moltiplicativo:

\[1 - 0{,}30 = 0{,}70.
\]

4. Moltiplicazione:

\[\text{Nuovo} = 100 \cdot 0{,}70 = 70.
\]

Il prezzo scontato è 70 €. La parte scontata (l’importo dello sconto) è 30 €, perché \(100 - 70 = 30\), ossia il 30% del prezzo iniziale.[39]

#### Esempio: sconto del 20% su 200 €

Consideriamo ora un prezzo di listino di 200 € e uno sconto del 20%.[39][46]

1. \(V = 200\), \(p = 20\).  
2. Calcolo di \(20/100 = 0{,}20\).  
3. Fattore:

\[1 - 0{,}20 = 0{,}80.
\]

4. Nuovo prezzo:

\[200 \cdot 0{,}80 = 160.
\]

Lo sconto è pari a 40 €, perché 20% di 200 è 40, e il prezzo finale è 160 €.

### 3.3 Il ricarico commerciale e il margine di profitto

Nel commercio al dettaglio e nelle attività d’impresa, è fondamentale distinguere tra ricarico (o mark up) e margine di profitto (o margin).[22][28] Il ricarico percentuale si calcola in genere sul costo di acquisto o di produzione, secondo la formula

\[\text{Mark up}\% = \frac{\text{Prezzo di vendita} - \text{Costo}}{\text{Costo}} \cdot 100.
\][22][28]

Il margine percentuale, invece, si calcola rispetto al prezzo di vendita:

\[\text{Margine}\% = \frac{\text{Prezzo di vendita} - \text{Costo}}{\text{Prezzo di vendita}} \cdot 100.
\][22][28]

Le due grandezze non coincidono, perché la base di riferimento è diversa.[22][28] Nella pratica, per determinare il prezzo di vendita a partire dal costo, si applica una percentuale di ricarico al costo stesso:

\[\text{Prezzo di vendita} = \text{Costo} \cdot \left(1 + \frac{\text{Mark up}\%}{100}\right),
\]

ossia esattamente la formula dell’aumento percentuale.[22][28]

#### Esempio: ricarico del 30% su un costo di 100 €

Supponiamo che un commerciante acquisti un bene a 100 € e voglia applicare un ricarico (mark up) del 30%.[22][28]

1. Costo \(C = 100\), mark up \(m = 30\%\).  
2. Prezzo di vendita:

\[P_v = C \cdot \left(1 + \frac{30}{100}\right) = 100 \cdot 1{,}30 = 130.
\]

3. Il margine in euro è \(130 - 100 = 30\).  
4. Il margine percentuale rispetto al prezzo è

\[\text{Margine}\% = \frac{30}{130} \cdot 100 \approx 23{,}08\%.
\]

Quindi un mark up del 30% sul costo corrisponde a un margine di circa il 23,08% sul prezzo di vendita.

#### Esempio: margine desiderato del 20% sul prezzo di vendita

In altri casi, l’impresa può desiderare un margine del 20% sul prezzo di vendita. In tal caso, se il costo è 80 €, il prezzo di vendita \(P_v\) deve soddisfare

\[\frac{P_v - 80}{P_v} = 0{,}20.
\]

Si risolve:

\[P_v - 80 = 0{,}20 P_v \Rightarrow P_v - 0{,}20 P_v = 80 \Rightarrow 0{,}80 P_v = 80 \Rightarrow P_v = \frac{80}{0{,}80} = 100.
\]

Il prezzo di vendita è 100 €. Il mark up percentuale sul costo è

\[\frac{100 - 80}{80} \cdot 100 = \frac{20}{80} \cdot 100 = 25\%.
\][22][28]

Quindi un margine del 20% sul prezzo corrisponde a un mark up del 25% sul costo.

---

## 4. Sconti successivi, sconti composti e non linearità delle variazioni percentuali

### 4.1 Perché 30% + 20% non fa 50%

Un equivoco molto frequente consiste nel sommare aritmeticamente due sconti successivi, ad esempio pensando che applicare uno sconto del 30% e poi un ulteriore sconto del 20% equivalga a uno sconto complessivo del 50%. In realtà, gli sconti successivi si applicano in sequenza su basi diverse, per cui lo sconto totale non è la somma delle percentuali, ma si ottiene attraverso un prodotto di fattori.[35]

Se partiamo da un prezzo iniziale \(V\) e applichiamo uno sconto \(s_1\%\), il nuovo prezzo dopo il primo sconto è

\[V_1 = V \left(1 - \frac{s_1}{100}\right).
\]

Se applichiamo poi uno sconto \(s_2\%\) su \(V_1\), il prezzo finale è

\[V_2 = V_1 \left(1 - \frac{s_2}{100}\right) = V \left(1 - \frac{s_1}{100}\right)\left(1 - \frac{s_2}{100}\right).
\]

Lo sconto totale \(S_{\text{tot}}\%\) è definito da

\[V_2 = V \left(1 - \frac{S_{\text{tot}}}{100}\right).
\]

Eguagliando le due espressioni:

\[1 - \frac{S_{\text{tot}}}{100} = \left(1 - \frac{s_1}{100}\right)\left(1 - \frac{s_2}{100}\right).
\]

Da cui si ricava

\[\frac{S_{\text{tot}}}{100} = 1 - \left(1 - \frac{s_1}{100}\right)\left(1 - \frac{s_2}{100}\right).
\]

In forma compatta:

\[S_{\text{tot}} = \left[1 - \left(1 - \frac{s_1}{100}\right)\left(1 - \frac{s_2}{100}\right)\right] \cdot 100.
\][35]

Questa formula mostra chiaramente che lo sconto totale non è \(s_1 + s_2\), salvo casi particolari con valori molto piccoli.

#### Esempio: 30% + 20% su 100 €

Partiamo da un prezzo di 100 € e applichiamo prima uno sconto del 30% e poi del 20%.

1. Primo sconto del 30%: fattore \(1 - 0{,}30 = 0{,}70\). Prezzo dopo il primo sconto:

\[V_1 = 100 \cdot 0{,}70 = 70 \text{ €}.
\]

2. Secondo sconto del 20%: fattore \(1 - 0{,}20 = 0{,}80\). Prezzo finale:

\[V_2 = 70 \cdot 0{,}80 = 56 \text{ €}.
\]

L’importo totale dello sconto è \(100 - 56 = 44\) €, che in percentuale sul prezzo iniziale è

\[\frac{44}{100} \cdot 100 = 44\%.
\]

Quindi 30% + 20% in sequenza producono uno sconto effettivo del 44%, non del 50%. Se applichiamo la formula teorica:

\[S_{\text{tot}} = 1 - (1 - 0{,}30)(1 - 0{,}20) = 1 - (0{,}70 \cdot 0{,}80) = 1 - 0{,}56 = 0{,}44 = 44\%.
\][35]

#### Esempio: due sconti del 10% non fanno il 20%

Consideriamo ora due sconti successivi entrambi del 10% sullo stesso prezzo iniziale di 100 €.

1. Dopo il primo sconto: \(100 \cdot (1 - 0{,}10) = 100 \cdot 0{,}90 = 90\).  
2. Dopo il secondo sconto: \(90 \cdot (1 - 0{,}10) = 90 \cdot 0{,}90 = 81\).

Lo sconto complessivo è \(100 - 81 = 19\) €, ossia il 19% del prezzo iniziale. La formula teorica conferma:

\[S_{\text{tot}} = 1 - (1 - 0{,}10)^2 = 1 - 0{,}9^2 = 1 - 0{,}81 = 0{,}19 = 19\%.
\]

### 4.2 Effetto della sequenza: aumenti e diminuzioni dello stesso valore percentuale

Un caso particolarmente istruttivo riguarda l’applicazione di un aumento e di una diminuzione della stessa percentuale. Se aumentiamo prima del \(p\%\) e poi diminuiamo del \(p\%\), non torniamo al valore iniziale, proprio perché le due operazioni si applicano a basi diverse.[35]

Supponiamo un valore iniziale \(V\), un aumento del \(p\%\) e poi una diminuzione del \(p\%\). Il valore dopo l’aumento è

\[V_1 = V \left(1 + \frac{p}{100}\right).
\]

Dopo la diminuzione:

\[V_2 = V_1 \left(1 - \frac{p}{100}\right) = V \left(1 + \frac{p}{100}\right)\left(1 - \frac{p}{100}\right).
\]

Questo prodotto è

\[V_2 = V \left(1 - \left(\frac{p}{100}\right)^2\right).
\]

Il valore finale è quindi inferiore al valore iniziale, salvo che \(p = 0\).

#### Esempio: +30% e poi −30% non riportano a 100

Questo è un esempio spesso citato nelle guide alle percentuali “non ovvie”. Partiamo da 100, aumentiamo del 30% e poi diminuiamo del 30%.

1. Dopo l’aumento:

\[V_1 = 100 \cdot (1 + 0{,}30) = 100 \cdot 1{,}30 = 130.
\]

2. Dopo la diminuzione:

\[V_2 = 130 \cdot (1 - 0{,}30) = 130 \cdot 0{,}70 = 91.
\]

Il valore finale è 91, inferiore a 100. La perdita complessiva è di 9 unità, cioè

\[\frac{9}{100} \cdot 100 = 9\%.
\]

Questo esempio dimostra perché non è lecito sommare o sottrarre percentuali come se fossero grandezze additive ordinarie, in particolare quando si tratta di variazioni successive.

---

## 5. Punti percentuali e percentuale relativa

### 5.1 Definizione di punto percentuale

Un punto percentuale è l’unità utilizzata per descrivere la differenza aritmetica tra due valori percentuali.[15][15] Se un tasso passa, ad esempio, dal 40% al 44%, la variazione è di 4 punti percentuali, anche se la quantità misurata aumenta del 10% relativamente al valore iniziale (perché \(4/40 = 0{,}10\)).[15][15]

Formalmente, se una grandezza percentuale passa da \(p_1\%\) a \(p_2\%\), la differenza in punti percentuali è

\[\Delta \text{pp} = p_2 - p_1.
\][15][15]

Questo concetto è particolarmente importante in economia e finanza, dove si confrontano spesso tassi di interesse, rendimenti, aliquote fiscali o percentuali di voto.

### 5.2 Percentuale relativa (o variazione percentuale di una percentuale)

La percentuale relativa indica invece di quanto è variata una percentuale rispetto al suo valore di partenza. Se un tasso passa dal 5% al 7%, la differenza è di 2 punti percentuali, ma l’aumento relativo è

\[\frac{7 - 5}{5} \cdot 100 = \frac{2}{5} \cdot 100 = 40\%.
\]

Quindi parliamo di un aumento relativo del 40%, su una base iniziale del 5%.

In generale, se una percentuale passa da \(p_1\%\) a \(p_2\%\), la variazione percentuale relativa è

\[\text{Var}\%_{\text{relativa}} = \frac{p_2 - p_1}{p_1} \cdot 100.
\]

### 5.3 Esempi e casi di confusione

#### Esempio: tasso di interesse dal 3% al 5%

Supponiamo un tasso che passa dal 3% al 5%.

1. Differenza in punti percentuali:

\[\Delta \text{pp} = 5 - 3 = 2 \text{ punti percentuali}.
\]

2. Aumento relativo:

\[\text{Var}\%_{\text{relativa}} = \frac{5 - 3}{3} \cdot 100 = \frac{2}{3} \cdot 100 \approx 66{,}67\%.
\]

Dire che “il tasso è aumentato del 2%” sarebbe fuorviante: correttamente, si dovrebbe dire “il tasso è aumentato di 2 punti percentuali, pari a un aumento relativo di circa il 66,7% rispetto al valore iniziale”.

#### Esempio: aliquota fiscale dal 20% al 22%

Consideriamo un’aliquota fiscale che passa dal 20% al 22%.[27] 

1. La differenza in punti percentuali è \(22 - 20 = 2\) punti percentuali.  
2. L’aumento relativo è

\[\frac{22 - 20}{20} \cdot 100 = \frac{2}{20} \cdot 100 = 10\%.
\]

Quindi l’aliquota è cresciuta di 2 punti percentuali, ovvero del 10% rispetto alla base di partenza (20%).

I media e la stampa finanziaria, talvolta, confondono queste due nozioni, parlando di “aumento del 2%” quando, in realtà, intendono dire “aumento di 2 punti percentuali”. Questa imprecisione può portare a fraintendimenti significativi, soprattutto quando si interpretano tassi di interesse, variazioni di spread o modifiche delle aliquote fiscali.

---

## 6. Percentuale e IVA italiana nel 2026

### 6.1 Aliquote IVA vigenti e riferimenti normativi

L’IVA (Imposta sul Valore Aggiunto) è un’imposta generale sui consumi disciplinata in Italia dal D.P.R. 26 ottobre 1972, n. 633, e successive modifiche. L’articolo 16 del D.P.R. 633/1972 stabilisce le aliquote dell’imposta, mentre la Tabella A allegata al decreto elenca beni e servizi soggetti ad aliquote ridotte.

Nel 2026, le principali aliquote IVA in Italia sono:

- aliquota ordinaria del 22%;  
- aliquota ridotta del 10% per determinate cessioni di beni e prestazioni di servizi, tra cui molte prestazioni alberghiere e parte delle operazioni edilizie agevolate;[16]  
- aliquota del 5% per specifiche categorie di beni e servizi individuati dalla normativa (ad esempio taluni prodotti alimentari e sociali);[16]  
- aliquota del 4% per beni di prima necessità e operazioni “super agevolate” (ad esempio alcuni alimenti di base, libri, ausili per disabili), elencati nella Parte II della Tabella A.[16]

Queste informazioni sono reperibili in forma aggiornata sulla banca dati Normattiva e nei repertori fiscali specializzati.

### 6.2 Calcolo dell’IVA su importo netto: Lordo = Netto × (1 + aliquota / 100)

Quando conosciamo l’importo netto (imponibile) di una prestazione o cessione di beni e vogliamo calcolare il prezzo lordo IVA inclusa, il procedimento è un aumento percentuale con percentuale pari all’aliquota IVA.[17][18][20]

Se indichiamo con \(N\) il netto, con \(a\) l’aliquota IVA in percentuale e con \(L\) il lordo, la formula è

\[L = N \left(1 + \frac{a}{100}\right).
\]

L’IVA in euro è data da

\[\text{IVA} = N \cdot \frac{a}{100}.
\][17][18][20][17]

#### Esempio: IVA 22% su un imponibile di 245 €

Questo esempio è tipico nelle guide sul calcolo percentuale e sull’IVA.[18] Poniamo \(N = 245\), \(a = 22\).

1. Calcolo dell’IVA:

\[\text{IVA} = 245 \cdot 0{,}22 = 53{,}9.
\]

2. Lordo:

\[L = 245 + 53{,}90 = 298{,}90.
\]

Oppure direttamente:

\[L = 245 \cdot 1{,}22 = 298{,}90.
\][18]

In Excel si può scrivere `=245*1,22` per ottenere il prezzo lordo.[37]

### 6.3 Scorporo dell’IVA: Netto = Lordo / (1 + aliquota / 100)

Molto spesso, nella pratica professionale, si dispone del prezzo lordo (comprensivo di IVA) e si vuole risalire al netto e alla quota IVA. Questa operazione è detta “scorporo dell’IVA” o “storno IVA”.[17][18][20][17]

Se \(L\) è il lordo e \(a\) l’aliquota, il netto si ottiene con

\[N = \frac{L}{1 + \frac{a}{100}}.
\]

L’IVA è poi

\[\text{IVA} = L - N.
\][17][18][20][17]

Questa formula deriva dal fatto che \(L = N (1 + a/100)\); isolando \(N\) si ottiene la divisione.

#### Esempio: scorporare l’IVA al 22% da un lordo di 1000 €

Supponiamo un lordo di 1000 €, IVA compresa al 22%.[18][17]

1. Calcolo del netto:

\[N = \frac{1000}{1{,}22}.
\]

2. Esecuzione della divisione:

\[\frac{1000}{1{,}22} \approx 819{,}6721\ldots
\]

Arrotondando ai centesimi:

\[N \approx 819{,}67 \text{ €}.
\]

3. Calcolo dell’IVA:

\[\text{IVA} = 1000 - 819{,}67 \approx 180{,}33 \text{ €}.
\]

La stessa operazione viene descritta nelle guide fiscali, ad esempio come \((\text{Importo lordo} \times 100) / 122\) per l’aliquota 22%.[18]

### 6.4 Coefficienti rapidi di scorporo

Per velocizzare i calcoli, molti professionisti usano coefficienti di scorporo pre-calcolati, derivati dalla formula

\[N = L \cdot \frac{100}{100 + a}.
\]

Per le aliquote più comuni si hanno approssimativamente:

\[\text{Per IVA 22\%:} \quad \frac{100}{122} \approx 0{,}8197,
\]

\[\text{Per IVA 10\%:} \quad \frac{100}{110} \approx 0{,}9091,
\]

\[\text{Per IVA 4\%:} \quad \frac{100}{104} \approx 0{,}9615.
\][18][20]

Questi coefficienti permettono di calcolare rapidamente il netto moltiplicando il lordo per il coefficiente corrispondente.

Per esempio, con IVA 22% su 1000 €:

\[N \approx 1000 \cdot 0{,}8197 = 819{,}7 \text{ €},
\]

in linea con il calcolo precedente.[18]

### 6.5 Errori comuni: il falso “Lordo − 22%”

Un errore molto diffuso consiste nel pensare che, per scorporare l’IVA del 22%, basti sottrarre il 22% dal lordo, cioè calcolare \(L \cdot (1 - 0{,}22) = 0{,}78L\).[18][20][17] Questo è sbagliato perché il 22% è calcolato sul netto, non sul lordo. Sottraendo il 22% del lordo si ottiene un valore troppo basso.

Per esempio, con un lordo di 122 € e IVA al 22%:

1. Il metodo corretto dà

\[N = \frac{122}{1{,}22} = 100.
\]

2. Il metodo errato (sottrarre il 22% del lordo) darebbe

\[122 \cdot (1 - 0{,}22) = 122 \cdot 0{,}78 = 95{,}16,
\]

che non è il netto reale. L’IVA sarebbe 26,84 €, ben superiore al 22% del netto. L’errore deriva dalla scelta della base sbagliata: il 22% va calcolato sul netto, non sul lordo.[18][20][17]

---

## 7. Casi d’uso professionali: diritto, commercio, finanza, scuola, statistica e tributi

### 7.1 Avvocato: CPA, ritenuta d’acconto, IVA, parametri forensi

Nella fatturazione degli avvocati in regime ordinario, il calcolo percentuale entra in gioco in modo articolato. In via generale, una parcella comprende: compenso professionale, spese generali (calcolate spesso in percentuale sul compenso ai sensi dei parametri forensi), contributo integrativo alla Cassa Forense (CPA), IVA e, per i soggetti non in regime forfettario, ritenuta d’acconto.[23][24][25]

Il contributo integrativo Cassa Forense è normalmente pari al 4% dei compensi e delle spese generali imponibili, e l’IVA (aliquota ordinaria 22%) si applica sulla somma compenso + spese generali + CPA.[23][24][25] I parametri forensi aggiornati dal D.M. 13 agosto 2022 n. 147 prevedono, tra l’altro, una maggiorazione per spese generali nella misura del 15% del compenso.[24] Le norme sulla ritenuta d’acconto (20% su compensi lordi, al netto di contributi previdenziali obbligatori) completano il quadro, salvo regimi speciali come il forfettario in cui IVA e ritenuta non si applicano.[23]

#### Esempio: parcella ordinaria con compenso di 1000 €

Supponiamo un avvocato che, in regime ordinario IVA, emetta fattura a un cliente soggetto a ritenuta, con i seguenti elementi:

- compenso base: 1000 €;  
- spese generali 15% sul compenso;[24]  
- CPA 4% su compenso + spese generali;[23]  
- IVA 22% su compenso + spese generali + CPA;[23]  
- ritenuta d’acconto 20% su compenso + spese generali + CPA.[23][25]

Passiamo ai calcoli.

1. Spese generali 15%:

\[\text{Spese generali} = 1000 \cdot 0{,}15 = 150 \text{ €}.[24]
\]

2. Base per il CPA:

\[\text{Base CPA} = 1000 + 150 = 1150 \text{ €}.
\]

3. CPA 4%:

\[\text{CPA} = 1150 \cdot 0{,}04 = 46 \text{ €}.
\][23]

4. Base imponibile IVA e ritenuta:

\[\text{Imponibile} = 1000 + 150 + 46 = 1196 \text{ €}.
\]

5. IVA 22% sull’imponibile:

\[\text{IVA} = 1196 \cdot 0{,}22 = 263{,}12 \text{ €}.
\]

6. Ritenuta d’acconto 20% (se applicabile):

\[\text{Ritenuta} = 1196 \cdot 0{,}20 = 239{,}20 \text{ €}.
\]

7. Totale fattura:

\[\text{Totale lordo} = \text{Imponibile} + \text{IVA} = 1196 + 263{,}12 = 1459{,}12 \text{ €}.
\]

8. Netto a pagare (per il cliente con ritenuta):

\[\text{Netto pagato} = \text{Totale lordo} - \text{Ritenuta} = 1459{,}12 - 239{,}20 = 1219{,}92 \text{ €}.
\]

In questo esempio, le percentuali 15%, 4%, 20% e 22% sono applicate su basi diverse (compenso, compenso+spese, imponibile complessivo), e non possono essere semplicemente sommate; occorre sempre tenere sotto controllo la base di calcolo.[23][24][25]

### 7.2 Attività commerciale: ricarico, margine e markup

Come visto, per i commercianti è fondamentale distinguere tra ricarico percentuale (mark up) e margine percentuale.[22][28] Il ricarico è la maggiorazione percentuale applicata al costo, mentre il margine è calcolato sul prezzo di vendita. In sede di accertamento fiscale, l’Agenzia delle Entrate può utilizzare percentuali di ricarico per ricostruire i ricavi presumibili a partire dal costo del venduto, applicando formule del tipo

\[\text{Ricavi presunti} = \text{Costo del venduto} \cdot \left(1 + \frac{\text{\% ricarico}}{100}\right).
\]

Un uso corretto delle percentuali è cruciale per impostare i prezzi in modo coerente e per difendersi da eventuali accertamenti basati su ricarichi “di settore”.[22][28]

#### Esempio: ricarico del 50% sul costo

Se un bene costa al commerciante 40 € e viene applicato un ricarico del 50%, il prezzo di vendita è

\[P_v = 40 \cdot (1 + 0{,}50) = 40 \cdot 1{,}50 = 60 \text{ €}.
\]

Il margine in euro è 20 €; il margine percentuale sul prezzo è

\[\frac{20}{60} \cdot 100 \approx 33{,}33\%.
\]

Comprendere questa differenza è essenziale per interpretare correttamente dati di bilancio e controlli fiscali.[22][28]

### 7.3 Finanza: interessi, rendimento percentuale, TAN e TAEG

In finanza, la percentuale è lo strumento principe per esprimere tassi di interesse, rendimenti e costi dei finanziamenti. L’interesse semplice su un capitale \(C\), a tasso annuo \(r\%\) per un tempo \(t\) (in anni), è dato dalla formula

\[I = \frac{C \cdot r \cdot t}{100}, 
\]

mentre il montante è

\[M = C + I = C \left(1 + \frac{r \cdot t}{100}\right).
\][29]

Nel regime a interesse composto, il montante è

\[M = C (1 + i)^t,
\]

dove \(i\) è il tasso annuo espresso come numero decimale. Il rendimento totale di un investimento in un periodo, senza flussi intermedi, è dato da

\[\eta_T = \frac{M - I_0}{I_0} \cdot 100,
\]

dove \(M\) è il valore finale e \(I_0\) l’investimento iniziale.

Il TAN (Tasso Annuo Nominale) e il TAEG (Tasso Annuo Effettivo Globale) sono espressi in percentuale e sintetizzano, rispettivamente, il tasso di interesse puro e il costo complessivo del finanziamento, comprensivo di spese e commissioni.[48] Il TAEG è calcolato come tasso interno di rendimento (TIR) dei flussi di cassa del finanziamento, cioè il tasso che rende nullo il valore attuale netto dei flussi di erogazione e rimborso.[48]

#### Esempio: interesse semplice su prestito di 10.000 € al 5% per 3 anni

Poniamo \(C = 10{,}000\), \(r = 5\%\), \(t = 3\) anni.

1. Interesse:

\[I = \frac{10{,}000 \cdot 5 \cdot 3}{100} = \frac{150{,}000}{100} = 1500 \text{ €}.
\]

2. Montante:

\[M = 10{,}000 + 1500 = 11{,}500 \text{ €}.
\][29]

#### Esempio: interesse composto al 5% per 10 anni su 10.000 €

Con interesse composto, \(C = 10{,}000\), \(i = 0{,}05\), \(t = 10\).

\[M = 10{,}000 \cdot (1{,}05)^{10} \approx 10{,}000 \cdot 1{,}6289 = 16{,}289 \text{ € circa}.
\]

L’accrescimento è molto maggiore rispetto all’interesse semplice, proprio per l’effetto della capitalizzazione.

### 7.4 Scuola: voti in percentuale e media ponderata

Nel contesto scolastico e universitario, i voti vengono spesso convertiti in percentuali per facilitare confronti, ad esempio 18/30 o 27/30 possono essere espressi come percentuali.[30] Il voto in percentuale si calcola come

\[\text{Voto}\% = \frac{\text{Punteggio ottenuto}}{\text{Punteggio massimo}} \cdot 100.
\]

La media aritmetica semplice di una serie di voti \(x_1, x_2, \dots, x_n\) è

\[\bar{x} = \frac{x_1 + x_2 + \dots + x_n}{n},
\]

mentre la media ponderata tiene conto di pesi \(p_1, \dots, p_n\) (ad esempio il numero di crediti o l’importanza delle prove):

\[\bar{x}_{\text{pond}} = \frac{x_1 p_1 + x_2 p_2 + \dots + x_n p_n}{p_1 + \dots + p_n}.
\][30]

#### Esempio: 18/30 e 27/30 in percentuale

Per 18/30:

\[\frac{18}{30} \cdot 100 = 0{,}6 \cdot 100 = 60\%.
\]

Per 27/30:

\[\frac{27}{30} \cdot 100 = 0{,}9 \cdot 100 = 90\%.
\]

#### Esempio: media ponderata di tre voti con pesi diversi

Supponiamo tre voti: 24/30 in un esame da 6 CFU, 30/30 in un esame da 9 CFU e 27/30 in un esame da 3 CFU. I voti sono \(x_1 = 24\), \(x_2 = 30\), \(x_3 = 27\), i pesi sono \(p_1 = 6\), \(p_2 = 9\), \(p_3 = 3\).

1. Numeratore:

\[24 \cdot 6 + 30 \cdot 9 + 27 \cdot 3 = 144 + 270 + 81 = 495.
\]

2. Somma dei pesi:

\[6 + 9 + 3 = 18.
\]

3. Media ponderata:

\[\bar{x}_{\text{pond}} = \frac{495}{18} \approx 27{,}5.
\][30]

Convertita in centodecimi (tipico per laurea), la media sarebbe \(27{,}5/30 \cdot 110 \approx 100{,}83\).

### 7.5 Statistica ed elezioni: affluenza e percentuale di consenso

In statistica, la percentuale è lo strumento standard per esprimere la quota di individui che soddisfano una certa condizione in una popolazione.[5][7][31] Nelle elezioni, ad esempio, si esprime l’affluenza come

\[\text{Affluenza}\% = \frac{\text{Votanti}}{\text{Aventi diritto}} \cdot 100,
\]

e il consenso per un partito come

\[\text{Consenso partito}\% = \frac{\text{Voti al partito}}{\text{Voti validi}} \cdot 100.
\][31]

#### Esempio: affluenza del 72%

Se su 10.000 aventi diritto votano 7200 cittadini, l’affluenza è

\[\frac{7200}{10{,}000} \cdot 100 = 72\%.
\]

#### Esempio: partito con 18% dei voti

Se un partito ottiene 45.000 voti su 250.000 voti validi, la percentuale di consenso è

\[\frac{45{,}000}{250{,}000} \cdot 100 = 18\%.
\]

Queste percentuali sono poi alla base dei metodi di ripartizione proporzionale dei seggi (D’Hondt, Hare-Niemeyer, ecc.), che si basano su quozienti e divisioni che mantengono l’idea di proporzione.

### 7.6 Tributario: ravvedimento operoso, IRPEF a scaglioni, addizionali

Nel diritto tributario italiano, le percentuali giocano un ruolo centrale, ad esempio nel ravvedimento operoso e nella determinazione dell’IRPEF a scaglioni.[26][27]

Il ravvedimento operoso, disciplinato dall’art. 13 del D.Lgs. 472/1997, consente al contribuente di regolarizzare volontariamente violazioni tributarie con sanzioni ridotte, in funzione del tempo trascorso dalla scadenza.[26] Le sanzioni ridotte sono espresse come percentuali dell’imposta dovuta, per esempio 1,5% dal 15° al 30° giorno, 3,75% entro il termine di presentazione della dichiarazione, ecc.[26]

L’IRPEF è un’imposta progressiva per scaglioni: la Legge di Bilancio 2026 conferma una struttura a tre aliquote, con 23% fino a 28.000 €, 33% tra 28.001 e 50.000 € e 43% oltre 50.000 €, con specifiche limitazioni dei benefici per redditi oltre 200.000 €.[27]

#### Esempio: ravvedimento su imposta di 1000 € pagata con 60 giorni di ritardo

Supponiamo un’imposta dovuta di 1000 € non versata nei termini e regolarizzata con ravvedimento dopo 60 giorni. In base alle tabelle esemplificative, per versamento tra 31° e 90° giorno la sanzione ridotta è pari a \(30\% \times 1/9 = 3{,}33\%\) dell’imposta (nella disciplina previgente; gli esempi in letteratura mostrano valori circa 3,33–3,75%).[26]

Prendendo la sanzione ridotta del 3,33%:

1. Sanzione:

\[\text{Sanzione} = 1000 \cdot 0{,}0333 = 33{,}3 \text{ € circa}.
\]

2. Interessi legali (ad esempio 2% annuo su 60 giorni) si calcolano con un’ulteriore percentuale proporzionata al tempo.[26]

#### Esempio: IRPEF su reddito imponibile di 35.000 € nel 2026

Con gli scaglioni 2026, un reddito di 35.000 € si distribuisce così: 28.000 € al 23%, 7.000 € al 33%.[27]

1. Imposta sul primo scaglione:

\[28{,}000 \cdot 0{,}23 = 6440 \text{ €}.
\]

2. Imposta sul secondo scaglione:

\[(35{,}000 - 28{,}000) \cdot 0{,}33 = 7{,}000 \cdot 0{,}33 = 2310 \text{ €}.
\]

3. IRPEF lorda:

\[6440 + 2310 = 8750 \text{ €}.
\][27]

A questa si aggiungono le addizionali regionali e comunali, anch’esse calcolate in percentuale sul reddito imponibile, con aliquote determinate a livello locale e consultabili sul sito del MEF.

---

## 8. Calcolo percentuale in Excel e Google Sheets

I fogli di calcolo come Microsoft Excel e Google Sheets sono strumenti ideali per automatizzare e verificare i calcoli percentuali.[37] È importante ricordare che, in questi ambienti, una percentuale come “15%” è semplicemente un modo di formattare il numero decimale 0,15.[37]

### 8.1 Parte di un numero

Per calcolare \(p\%\) di un valore \(V\), si può usare:

\[\text{Parte} = V \cdot \frac{p}{100}.
\]

In Excel o Google Sheets si può scrivere:

- `=A1*B1/100` se in A1 c’è il totale e in B1 il numero “nudo” (es. 15 per 15%);[37]  
- oppure `=A1*B1` se B1 è formattata come percentuale (es. contiene 15% o 0,15).[37]

Ad esempio, se in B1 ci sono 240 e in B2 il 10%, in B3 si può scrivere `=B1*B2` per ottenere 24.

### 8.2 Percentuale di una parte sul totale

Per calcolare quale percentuale rappresenta A1 rispetto a B1 (A1 = parte, B1 = totale) si usa:

\[\text{\%} = \frac{A1}{B1}.
\]

In Excel si scrive semplicemente `=A1/B1` e si formatta la cella come percentuale; ad esempio `=42/50` restituisce 0,84 che, formattato come percentuale, diventa 84%.[37]

### 8.3 Variazione percentuale

La variazione percentuale tra un valore “vecchio” in A1 e uno “nuovo” in B1 si calcola con:

\[\text{Var}\% = \frac{B1 - A1}{A1}.
\]

In Excel:

- `=(B1-A1)/A1`, formattando poi la cella come percentuale.[37]

Ad esempio, per passare da 2342 a 2500 si scrive `=(2500-2342)/2342`, ottenendo circa 0,06746, ovvero 6,75% se formattato come percentuale.[37]

### 8.4 IVA aggiunta e scorporo IVA

Per aggiungere l’IVA al 22% a un imponibile in A1:

- `=A1*1,22` (o `=A1*(1+22%)`).[18][37]

Per scorporare l’IVA al 22% da un lordo in A1:

- `=A1/1,22` per ottenere il netto;[18][20]  
- l’IVA si ottiene poi come `=A1 - (A1/1,22)`.

Analogamente per l’aliquota del 10% (`/1,10`) e del 4% (`/1,04`).[18]

### 8.5 Sconto percentuale

Per calcolare un prezzo scontato con sconto percentuale in B1 su un prezzo originario in A1, si può usare:

\[\text{Prezzo scontato} = A1 \cdot \left(1 - \frac{B1}{100}\right),
\]

oppure, se B1 è già formattata come percentuale,

- `=A1*(1-B1)`.  

Nell’esempio di Aranzulla: prezzo originale 2400 in A2 e sconto 15% in B2, lo sconto in euro è `=A2*B2` (360 €) e il prezzo scontato `=A2-A2*B2`.

### 8.6 Funzioni di arrotondamento e gestione dei decimali

Per controllare i decimali, Excel offre la funzione `ARROTONDA(numero;num_cifre)`, che arrotonda “numero” alle “num_cifre” decimali richieste. Ad esempio, `=ARROTONDA(129,9*7,5%;2)` arrotonda il risultato del 7,5% di 129,9 a due decimali.

È importante distinguere tra il semplice cambio di formato (ridurre i decimali visualizzati) e l’arrotondamento effettivo del valore mediante funzione, perché gli errori di arrotondamento possono accumularsi in calcoli a catena.[41]

---

## 9. Trucchi per il calcolo mentale rapido delle percentuali

Nella vita professionale quotidiana, avere dimestichezza con alcuni trucchi di calcolo mentale permette di verificare al volo preventivi, sconti, imposte e interessi. Diversi siti didattici e divulgativi italiani raccolgono questi “trucchi” in modo sistematico.[32][33][35][46]

### 9.1 Percentuali “facili”: 10%, 5%, 1%, 25%, 50%, 75%

Il 10% di un numero si ottiene dividendo per 10, cioè spostando la virgola di una posizione a sinistra.[32][33] Ad esempio, il 10% di 250 è 25 (250 → 25,0).

Il 5% è la metà del 10%. Quindi il 5% di 250 è la metà di 25, cioè 12,5.[32]

L’1% si ottiene dividendo per 100, ovvero spostando la virgola di due posizioni a sinistra.[33] Per esempio, l’1% di 87 è 0,87.

Il 25% equivale a un quarto del totale: basta dividere per 4 o dimezzare due volte. Il 25% di 60 è \(60/4 = 15\).[32]

Il 50% è la metà, quindi \(50\%\) di 70 è \(70/2 = 35\).[32]

Il 75% è tre quarti, cioè il 100% meno il 25%; si può calcolare prima il 25% e sottrarlo dal totale: il 75% di 60 è \(60 - 15 = 45\).[32]

### 9.2 Combinare 10% e 1% per ottenere altre percentuali

Molte altre percentuali possono essere ottenute a partire dal 10% e dall’1%, combinandoli con somme e differenze.[32]

Per il 15% di un numero, si calcola il 10% e il 5% (metà del 10%) e si sommano. Ad esempio, il 15% di 64:

1. 10% di 64: 6,4.  
2. 5% di 64: metà di 6,4, cioè 3,2.  
3. Somma: 6,4 + 3,2 = 9,6.

Per l’11%, 12% o 13%, si può fare 10% + 1/2/3%. Ad esempio, il 12% di 50:

1. 10% di 50: 5.  
2. 1% di 50: 0,5.  
3. 2% di 50: 2 × 0,5 = 1.  
4. 12%: 5 + 1 = 6.

### 9.3 Il trucco delle percentuali invertite: a% di b = b% di a

Un trucco celebre, spesso descritto nella divulgazione, è quello delle “percentuali invertite”: \(a\%\) di \(b\) è uguale a \(b\%\) di \(a\).[32][35] Questo deriva dal fatto che

\[a\% \cdot b = b \cdot \frac{a}{100} = a \cdot \frac{b}{100} = b\% \cdot a.
\]

Ad esempio, il 4% di 75 è uguale al 75% di 4.

1. 75% di 4 è tre quarti di 4: \(4 \cdot 0{,}75 = 3\).  
2. Quindi anche il 4% di 75 è 3. Se lo calcolassimo direttamente:

\[75 \cdot 0{,}04 = 3.
\]

Questo trucco è utile soprattutto quando una delle due percentuali è “facile” da calcolare mentalmente (come 50%, 25%, 75%).[32]

---

## 10. Errori comuni e “trappole” del calcolo percentuale

Nonostante la relativa semplicità formale, l’uso delle percentuali è terreno fertile per errori logici e tecnici, che possono avere conseguenze non banali in ambito fiscale, contrattuale, contabile o finanziario.

### 10.1 Confondere punti percentuali e percentuale relativa

Come visto, dire che un tasso passa dal 3% al 5% significa +2 punti percentuali, ma un aumento relativo del 66,7% rispetto al valore di partenza.[15][15] Confondere queste due misure porta a sottovalutare o sopravvalutare l’entità reale di un cambiamento, specie quando si parla di tassi di interesse, spread o variazioni di aliquote.

### 10.2 Sommare sconti successivi invece di applicarli in sequenza

È errato sommare aritmeticamente due sconti successivi (ad esempio 30% + 20% = 50%) ignorando l’effetto composito, che invece produce uno sconto del 44%.[35] Lo stesso vale per aumenti successivi: due aumenti del 10% non fanno un aumento complessivo del 20%, ma circa del 21% (\(1{,}1^2 = 1{,}21\)).

### 10.3 Applicare la percentuale alla base sbagliata

Un errore ricorrente è applicare lo sconto o l’imposta alla base errata, ad esempio calcolare uno sconto sul prezzo lordo invece che sul netto, o calcolare la ritenuta su un importo comprensivo di spese non imponibili.[18][20][17] Analogamente, nel calcolo dell’IVA si sbaglia spesso a scorporare il 22% dal lordo sottraendo il 22% del lordo anziché fare il corretto rapporto con 1,22.[18][20][17]

### 10.4 +30% poi −30% non torna al valore iniziale

Come visto nel paragrafo sugli sconti composti, un aumento del 30% seguito da una diminuzione del 30% produce un valore finale pari al 91% di quello iniziale, con una perdita effettiva del 9%. Confondere queste operazioni con una “somma zero” porta a conclusioni errate nella valutazione di investimenti, prezzi o salario reale.

### 10.5 Errori di arrotondamento

Nel calcolo di percentuali su grandi numeri o in catene di operazioni, gli arrotondamenti intermedi possono accumularsi, producendo scostamenti significativi.[38][41] È buona pratica mantenere il maggior numero possibile di cifre significative durante i calcoli, arrotondando solo alla fine ai centesimi o alle unità richieste, come consigliato anche nei testi di analisi degli errori di misura.[38]

### 10.6 Confondere margine e markup

Come visto, margine e mark up usano basi diverse (prezzo vs costo).[22][28] Scambiare le due grandezze può portare a fissare prezzi sbagliati o a interpretare erroneamente indicatori di redditività. Ad esempio, un margine del 20% sul prezzo corrisponde a un mark up del 25% sul costo, non del 20%.[22][28]

### 10.7 Notazione decimale: virgola italiana vs punto inglese

In Italia e in buona parte d’Europa continentale, il separatore decimale è la virgola, mentre il punto è usato per separare le migliaia (es. 1.234,56).[42] Nei contesti anglosassoni, invece, la funzione è invertita: il punto separa i decimali (1,234.56). Confondere queste convenzioni può portare a errori enormi, soprattutto nei fogli di calcolo e nei documenti legali o contabili redatti in lingua straniera.[42]

---

## 11. Notazione e convenzioni italiane

In Italia, oltre all’uso della virgola decimale, vi sono alcune convenzioni consolidate nella scrittura delle percentuali.

La virgola è il separatore decimale standard in testi scientifici, scolastici e amministrativi italiani, come previsto dalla normativa e dai manuali tipografici.[42] Il punto viene usato come separatore delle migliaia: ad esempio 1.234,56 indica “mille duecentotrentaquattro virgola cinquantasei”.[42]

Per quanto riguarda il simbolo di percentuale “%”, le guide tipografiche inglesi raccomandano in genere di non lasciare spazio tra numero e simbolo (es. “50%”), mentre lo standard ISO prevede un piccolo spazio.[43][6] In italiano, nella pratica corrente, soprattutto nei testi brevi o nelle tabelle, si scrive quasi sempre senza spazio (50%), come mostrato nelle voci enciclopediche e nei testi scolastici.[6][6]

La parola “percentuale” è femminile (“una percentuale”), come registrato esplicitamente nel Vocabolario Treccani. È corretto quindi dire “una percentuale alta”, “la percentuale di votanti”.

È essenziale distinguere l’uso del simbolo “%” dalla locuzione “punti percentuali”, che misura la differenza aritmetica tra due percentuali e non va confusa con una “percentuale della percentuale”.[15][15]

---

## 12. Domande frequenti (PAA) sul calcolo percentuale

I motori di ricerca, attraverso il box “People Also Ask” (PAA), propongono una serie di domande frequenti sul calcolo delle percentuali, cui è utile dare risposte chiare e sintetiche, ma rigorose.[45][50] Di seguito vengono affrontate le principali, in forma di mini-schede.

### 12.1 Come si fa a fare il calcolo della percentuale?

Per calcolare una percentuale occorre sempre individuare con precisione la parte e il totale. La regola generale è

\[\text{Percentuale} = \frac{\text{Parte}}{\text{Totale}} \cdot 100.
\][1][7][44]

Se, invece, si vuole calcolare il valore corrispondente al \(p\%\) di un totale \(T\), si usa

\[\text{Parte} = T \cdot \frac{p}{100}.
\][1][7][9][44][9]

Ad esempio, se 15 persone su 60 hanno superato un esame, la percentuale di promossi è

\[\frac{15}{60} \cdot 100 = 25\%.
\][44]

Se vogliamo il 20% di 50 €, calcoliamo

\[50 \cdot \frac{20}{100} = 10 \text{ €}.
\][35][44][46]

### 12.2 Come si calcola il 30% di un importo?

Per calcolare il 30% di un importo \(V\), basta moltiplicare per 30 e dividere per 100:

\[30\% \cdot V = V \cdot \frac{30}{100} = V \cdot 0{,}30.
\][46]

Ad esempio, il 30% di 60:

1. \(60 \cdot 30 = 1800\).  
2. \(1800 / 100 = 18\).[46]

Quindi il 30% di 60 è 18. Il 30% di 50 € è

\[50 \cdot 0{,}30 = 15 \text{ €}.
\][46]

### 12.3 Come si calcola la percentuale di 75 su 300?

Qui 75 è la parte e 300 il totale. La formula è

\[\text{Percentuale} = \frac{75}{300} \cdot 100.
\]

Si procede:

1. \(\frac{75}{300} = 0{,}25.\)  
2. \(0{,}25 \cdot 100 = 25.\)

Quindi 75 rappresenta il 25% di 300.[35][44]

### 12.4 Come si calcola una percentuale su un totale?

Per calcolare una percentuale su un totale, ad esempio “che percentuale rappresenta la quantità Q rispetto al totale T?”, si usa

\[\text{Percentuale} = \frac{Q}{T} \cdot 100.
\][1][7][10][35][44]

Se, invece, vogliamo sapere “quanto vale il p% di T?”, si usa

\[\text{Parte} = T \cdot \frac{p}{100}.
\][1][7][9][46][9]

Queste due formule sono l’ossatura di tutti i problemi percentuali di base.

### 12.5 Come posso calcolare le percentuali velocemente?

Per calcolare percentuali velocemente, conviene usare alcuni trucchi:

- calcolare il 10% spostando la virgola di una posizione a sinistra;  
- ottenere il 5% come metà del 10%;  
- ottenere l’1% spostando la virgola di due posizioni;  
- usare 25% come un quarto, 50% come metà, 75% come tre quarti;  
- scomporre percentuali “strane” in somme di 10%, 5%, 1%, ecc.[32][33][35]

Ad esempio, il 15% di 80 può essere calcolato come 10% (8) più 5% (4), per un totale di 12.[32]

### 12.6 Come si calcola la percentuale di un numero rispetto al totale?

È lo stesso problema della “incidenza percentuale”. Se un numero A è parte di un totale B, la percentuale è

\[\frac{A}{B} \cdot 100.
\][5][7][10][35][44]

Per esempio, se in una classe di 25 studenti 10 sono femmine, la percentuale di studentesse è

\[\frac{10}{25} \cdot 100 = 40\%.
\][5][7]

### 12.7 Come si calcola il 30% con la calcolatrice?

Per calcolare il 30% di un numero con la calcolatrice:

1. Si digita il numero di partenza, ad esempio 150.  
2. Lo si moltiplica per 30.  
3. Si divide il risultato per 100.[46]

In forma algebrica:

\[30\% \text{ di } 150 = 150 \cdot \frac{30}{100} = 45.
\]

Nelle calcolatrici moderne, spesso si può digitare direttamente “150 × 30 %” se il tasto “%” è supportato, che esegue internamente la divisione per 100.

### 12.8 Qual è il 30% di 50 €?

Applicando la formula

\[30\% \cdot 50 = 50 \cdot 0{,}30 = 15 \text{ €}.
\][46]

Quindi il 30% di 50 € è 15 €.

### 12.9 Qual è la percentuale di 21 su 30?

Qui 21 è la parte, 30 il totale, quindi

\[\frac{21}{30} \cdot 100 = 0{,}7 \cdot 100 = 70\%.
\][44]

Pertanto, 21 rappresenta il 70% di 30.

---

## Conclusione

La percentuale è uno strumento matematico di straordinaria versatilità, che consente di esprimere rapporti, variazioni e incidenze in una forma immediatamente comprensibile a professionisti, studenti e cittadini. Sotto la sua apparente semplicità si nasconde un universo di applicazioni: dalla fatturazione forense con CPA, ritenuta d’acconto e IVA, alla determinazione delle aliquote IRPEF in regime progressivo, dai ricarichi commerciali al calcolo del TAEG nei finanziamenti, dalla misurazione dell’affluenza alle urne all’analisi dei voti e delle medie ponderate in ambito scolastico.[1][7][23][24][27][29][48]  

Il quadro teorico si fonda sulle quattro formule fondamentali: calcolo della parte \(P = T \cdot p/100\), calcolo dell’incidenza \(p = (P/T) \cdot 100\), calcolo inverso del totale \(T = P/(p/100)\), e calcolo della variazione percentuale \(\text{Var}\% = (V_{\text{nuovo}} - V_{\text{vecchio}})/V_{\text{vecchio}} \cdot 100\).[1][7][9][12][35][9] Da queste derivano le formule per aumenti e diminuzioni percentuali, per lo sconto e il ricarico commerciale, e per lo scorporo dell’IVA, che si inseriscono organicamente nella disciplina tributaria italiana, in particolare nel sistema dell’IVA regolato dal D.P.R. 633/1972 e successivi aggiornamenti.[16][18]  

Saper usare le percentuali in modo corretto significa, per il professionista del diritto o dell’economia, evitare errori rilevanti: confondere punti percentuali e variazioni relative, sommare sconti o variazioni successive invece di comporli, applicare percentuali alla base sbagliata, sottovalutare gli effetti degli arrotondamenti o confondere margine e markup.[38][41] È altrettanto importante conoscere le convenzioni di notazione italiane (virgola decimale, simbolo %, uso corretto di “punti percentuali”) per redigere atti, pareri, relazioni contabili e contrattuali conformi agli standard linguistici e giuridici.[42][6]  

Infine, l’integrazione tra competenze matematiche di base, strumenti digitali (Excel, Google Sheets, software di fatturazione) e conoscenza della normativa fiscale e deontologica consente ad avvocati, commercialisti, operatori economici e studenti di utilizzare le percentuali non come meri automatismi, ma come vero linguaggio di analisi, controllo e argomentazione. Le fonti autorevoli italiane – Treccani, manuali scolastici, documentazione dell’Agenzia delle Entrate e di ordini professionali, banca dati Normattiva – offrono il riferimento necessario per mantenere nel tempo la coerenza tra il calcolo matematico e le norme che lo regolano e lo presuppongono.[7][23][24][27] In questo senso, la padronanza del calcolo percentuale diventa parte integrante della professionalità giuridica, contabile e didattica, e uno strumento indispensabile per navigare con consapevolezza il complesso intreccio tra numeri, regole e decisioni che caratterizza il lavoro quotidiano negli studi legali e nei contesti economici contemporanei.

Citations:
[1] https://it.wikipedia.org/wiki/Percentuale
[2] https://www.treccani.it/vocabolario/centum/
[3] http://www.rmoa.unina.it/5356/
[4] https://it.wikipedia.org/wiki/Civilt%C3%A0_romana
[5] https://paolapozzolo.it/proporzione-statistica-tasso-rapporto/
[6] https://it.wikipedia.org/wiki/Simbolo_di_percentuale
[7] https://www.treccani.it/enciclopedia/percentuale_(Enciclopedia-della-Matematica)/
[8] https://www.youtube.com/watch?v=XuxcdUq1YTw
[9] https://www.avvocatoandreani.it/servizi/calcolo-percentuale.php
[10] https://www.alessandromuscolino.com/tic/6-4-calcoliamo-lincidenza-percentuale/
[11] https://www.studiocataldi.it/calcolo-percentuali.asp
[12] https://www.skuola.net/matematica/algebra/come-calcolare-variazione-percentuale-guida-esempi-pratici.html
[13] https://www.youtube.com/watch?v=A-nkzC-Iw_0
[14] https://www.ripmat.it/mate/n/nb/nbcf.html
[15] https://it.wikipedia.org/wiki/Punto_percentuale
[16] https://www.mementopiu.it/fisco/dettaglio/10960897/iva-agevolata-in-materia-edilizia-casi-pratici-fino-a-marzo-2025
[17] https://www.avvocatoandreani.it/servizi/scorporo-iva-calcoli-percentuali-frequenti.php
[18] https://www.fiscozen.it/guide/scorporo-iva-22/
[19] https://vat-one-stop-shop.ec.europa.eu/national-vat-rules/italy-vat-rules_en
[20] https://www.biella.cna.it/blog/scorporo-iva-guida-gestione-fatturazione/
[21] https://www.ey.com/en_gl/technical/tax-alerts/italy-expands-reverse-charge-mechanism-to-logistics-sector-and-ends-split-payment-for-ftse-mib-listed-companies
[22] https://gocardless.com/en-us/guides/posts/markup-vs-margin-whats-the-difference/
[23] https://www.cassaforense.it/media/2a3gkril/vademecum-fiscalita-versione-completa.pdf
[24] https://www.ordineavvocatimilano.it/it/i-parametri-forensi-aggiornati-dal-dm-13-agosto-2022-n-147/p592
[25] https://www.avvocatoandreani.it/servizi/calcolo_fattura_studio_legale.php
[26] https://www.fiscoetasse.com/approfondimenti/16877-guida-al-ravvedimento-operoso.html
[27] https://www.soluzionetasse.com/scaglioni-irpef/
[28] https://www.visurenetwork.it/blog/mark-up-cosa-come-calcola-margine/
[29] https://library.weschool.com/lezione/montante-calcolo-interesse-tasso-d-interesse-mora-interessi-bancari-17033.html
[30] https://www.calculat.org/it/media/media-ponderata/
[31] https://it.wikipedia.org/wiki/Grafico_delle_elezioni_politiche_in_Italia
[32] https://www.geopop.it/come-calcolare-le-percentuali-in-modo-facile-tutti-i-trucchi-matematici/
[33] http://michelafalchi.altervista.org/blog/wp-content/uploads/2020/03/Matematica-Scheda-studio-Numeri-Decimali.pdf
[34] https://www.youtube.com/watch?v=-Z2UE7vtbbU
[35] https://www.calcolopercentuali.it
[36] https://it.wikipedia.org/wiki/Fallacia_del_tasso_di_base
[37] https://support.microsoft.com/it-it/office/calcolare-le-percentuali-6b5506e9-125a-4aba-a638-d6b40e603981
[38] https://online.scuola.zanichelli.it/chimicafacile/files/2011/02/esp01.pdf
[39] https://learnn.com/tools/calcolatore-sconto-percentuale/
[40] https://www.rivaluta.it/calcola_aumento_percentuale.asp
[41] https://www.math.unipd.it/~marcov/pdf/rounding.pdf
[42] https://www.guitex.org/home/en/forum/12-tipografia/99674-un-paio-di-problemini-con-la-virgola-decimale
[43] https://en.wikipedia.org/wiki/Percent_sign
[44] https://www.testbusters.it/blog/pillole-didattiche/guida-pratica-come-calcolare-una-percentuale
[45] https://www.seozoom.it/people-also-ask/
[46] https://www.chimica-online.it/come-quando-perche/come-si-calcola-il-30-per-cento.htm
[47] https://math.libretexts.org/Bookshelves/PreAlgebra/Prealgebra_(Arnold)/07:_Percent/7.03:_Solving_Basic_Percent_Problems
[48] https://www.cloudfinance.it/il-calcolo-del-taeg-tasso-Annuo-effettivo-globale.html
[49] https://www.orizzontescuola.it/frequenza-alunni-e-limite-assenze-come-si-calcola-quando-si-rischia-la-non-ammissione-casi-in-deroga-e-quando-non-si-boccia-guida/
[50] https://www.seoptimer.com/blog/google-people-also-ask/

