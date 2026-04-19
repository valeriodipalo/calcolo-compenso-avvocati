# Calcolo dei Giorni tra Due Date in Italia: Metodologia Generale e Applicazione Giuridica

Il calcolo dei giorni tra due date rappresenta un'operazione fondamentale nel diritto italiano, sia in ambito privatistico che processuale. La materia è disciplinata in modo specifico e dettagliato dal codice di procedura civile, dal codice civile sostanziale e da una serie di leggi speciali che definiscono con precisione le modalità di computo, l'incidenza dei giorni festivi, la sospensione feriale dei termini e le regole applicabili nei diversi ambiti del diritto. Questa ricerca fornisce un'analisi esaustiva delle metodologie di calcolo, delle normative applicabili, delle festività italiane aggiornate al 2026 e delle applicazioni pratiche nei principali contesti giuridici italiani, con particolare attenzione alle novità legislative e alle regole sugli anni bisestili. Il presente lavoro integra la teoria giuridica con esempi concreti, formule matematiche e tecniche di calcolo utilizzabili in ambito professionale, amministrativo e personale.

## Metodologia Generale di Calcolo dei Giorni tra Due Date

### La Formula Base e il Principio del Dies A Quo

Il computo dei giorni tra due date in Italia segue un principio fondamentale codificato in numerose disposizioni normative: il giorno iniziale non si computa, mentre il giorno finale si computa. Questo principio, espresso con la locuzione latina **dies a quo non computatur in termino, dies ad quem computatur**, rappresenta il fondamento di qualsiasi calcolo temporale nel diritto italiano[1][6]. La formula più semplice per calcolare i giorni tra due date è rappresentata dalla sottrazione della data iniziale dalla data finale. Se indichiamo con \(d_i\) la data iniziale (dies a quo) e con \(d_f\) la data finale (dies ad quem), il numero di giorni compresi tra le due date, escludendo il dies a quo e includendo il dies ad quem, è dato da:

\[
\text{Giorni} = d_f - d_i
\]

Facciamo un esempio concreto. Se un termine decorre dal 10 marzo e deve scadere entro 15 giorni, il calcolo procede escludendo il 10 marzo (dies a quo) e contando il 15 marzo come primo giorno: il termine scade il 25 marzo. Matematicamente, \(25 - 10 = 15\) giorni. Questo metodo di calcolo per sottrazione è valido quando si opera con rappresentazioni seriali delle date, come avviene nei programmi informatici e nei fogli di calcolo. Tuttavia, nel calcolo manuale, è più utile aggiungere i giorni uno dopo l'altro al giorno iniziale, contando il primo giorno successivo come primo giorno del termine.

### Calcolo Manuale: Mese per Mese

Per calcolare manualmente i giorni tra due date, è necessario procedere mese per mese, sommando i giorni rimanenti del mese di inizio, aggiungendo i mesi completi intermedi e i giorni del mese di fine. Supponiamo di dover calcolare i giorni dal 15 marzo al 22 giugno dello stesso anno. La procedura è la seguente: dal 15 marzo (escluso) al 31 marzo sono 16 giorni (da 16 a 31); aprile completo è 30 giorni; maggio completo è 31 giorni; dal 1° al 22 giugno sono 22 giorni. Il totale è 16 + 30 + 31 + 22 = 99 giorni. È essenziale ricordare il numero di giorni di ciascun mese: gennaio, marzo, maggio, luglio, agosto, ottobre e dicembre hanno 31 giorni; aprile, giugno, settembre e novembre hanno 30 giorni; febbraio ha 28 giorni negli anni comuni e 29 giorni negli anni bisestili[23][48].

### Gestione degli Anni Bisestili

Un anno è bisestile se è divisibile per 4, con due eccezioni importanti per gli anni secolari (divisibili per 100). Un anno secolare è bisestile solo se è divisibile per 400[23][48]. Secondo questa regola, gli anni 2024, 2028 e 2032 sono bisestili perché divisibili per 4; l'anno 1900 non è bisestile perché divisibile per 100 ma non per 400; l'anno 2000 è bisestile perché divisibile per 400. Nel 2026, anno non bisestile, febbraio ha 28 giorni. Nel calcolo dei termini espressi in mesi o anni, la norma di cui all'articolo 155, comma 2 del codice di procedura civile stabilisce che si osserva il calendario comune, senza tener conto se l'anno è bisestile o dei giorni effettivi che compongono i mesi. Questo significa che un termine di tre mesi decorrente dal 30 novembre scade il 30 febbraio se lo si calcola in base alla data numericamente corrispondente, ma poiché febbraio non ha 30 giorni, il termine si compie con l'ultimo giorno di febbraio, ossia il 28 febbraio negli anni non bisestili e il 29 febbraio negli anni bisestili[1][2][1].

### Differenza tra Calcolo Inclusivo ed Esclusivo

Nel diritto italiano, il calcolo ordinario dei termini è sempre esclusivo del dies a quo e inclusivo del dies ad quem. Tuttavia, esistono ipotesi speciali in cui il legislatore stabilisce un termine indicando un certo numero di "giorni liberi", nel quale caso non si computano né il dies a quo né il dies ad quem. Il termine per comparire previsto dall'articolo 163 bis del codice di procedura civile rappresenta un chiaro esempio di questo secondo tipo di termine[1][11][11]. Se tra la notificazione della citazione e l'udienza devono intercorrere almeno 120 giorni liberi, il giorno della notificazione non si computa, l'udienza fissata non si computa, e i 120 giorni liberi sono conteggiati tra questi due estremi. Ad esempio, se la citazione è notificata il 10 marzo, il primo giorno libero è l'11 marzo e il centventesimo giorno libero è il 8 luglio, pertanto l'udienza non può essere fissata prima del 9 luglio.

### Breakdown Temporale: Anni, Mesi, Settimane, Giorni

Il calcolo del tempo tra due date può essere espresso in diverse unità temporali. Per convertire il numero di giorni in settimane, si divide per 7; per convertire in mesi, il calcolo è più complesso perché i mesi hanno durata variabile; per convertire in anni, si divide per 365 (o 365,25 considerando gli anni bisestili). Dato un numero di giorni \(G\), le formule di conversione sono le seguenti:

\[
\text{Settimane} = \frac{G}{7}
\]

\[
\text{Anni} = \frac{G}{365,25}
\]

\[
\text{Mesi approssimativi} = \frac{G}{30,44}
\]

Tuttavia, nel diritto italiano, le conversioni devono seguire le regole specifiche di cui all'articolo 155 c.p.c. Se un termine è espresso in mesi, si applica il criterio di cui all'articolo 2963, comma 4 del codice civile: il termine scade nel giorno del mese numericamente corrispondente a quello del mese iniziale, senza riguardo al numero effettivo di giorni del mese[2][2].

## Tipologie di Giorni nel Diritto Italiano

### Giorni Naturali vs. Giorni Lavorativi

Nel diritto italiano, il termine ordinario è sempre espresso in "giorni", che sono giorni naturali o consecutivi, comprensivi di sabati, domeniche e giorni festivi[1][1]. Questo significa che se un termine è di 30 giorni, esso comprende anche i fine settimana e le festività. Diverso è il concetto di "giorno lavorativo", che comprende solamente i giorni in cui è ordinariamente possibile svolgere attività lavorative, escludendo quindi sabati, domeniche e giorni festivi. Nel diritto del lavoro, alcuni computi si effettuano in giorni lavorativi, come ad esempio il preavviso di licenziamento in certi settori. Nel diritto processuale ordinario civile, tuttavia, il termine ordinario è espresso in giorni naturali[15].

### Giorni Feriali vs. Giorni Festivi

I **giorni feriali** sono i giorni in cui il lavoro ordinariamente si svolge, escludendo sabati, domeniche e giorni festivi civili e religiosi[32]. I **giorni festivi**, al contrario, sono i giorni in cui ordinariamente non si lavora e in cui è vietato compiere determinati atti giuridici. Nel diritto italiano, i giorni festivi sono determinati dalla legge in via esclusiva. La Legge 27 maggio 1949, n. 260, come successivamente modificata, stabilisce quali sono i giorni festivi a livello nazionale[9][14][9][9]. Secondo questa normativa, sono considerati giorni festivi tutte le domeniche, il 1° gennaio, il 6 gennaio (Epifania), il 19 marzo (San Giuseppe) da valutare come riconoscimento possibile, il 25 aprile (anniversario della Liberazione), il lunedì dopo Pasqua, il 1° maggio (festa del Lavoro), il 2 giugno (festa della Repubblica), il 15 agosto (Assunzione di Maria Vergine), il 1° novembre (Ognissanti), l'8 dicembre (Immacolata Concezione), il 25 dicembre (Natale), il 26 dicembre (Santo Stefano). A questi si aggiunge, dal 1° gennaio 2026 in poi, il 4 ottobre quale festa nazionale di San Francesco d'Assisi, istituita dalla Legge 8 ottobre 2025, n. 151[5][5][5].

### Giorni Liberi e Loro Applicazione Pratica

I "giorni liberi" rappresentano una categoria speciale di termini in cui si escludono sia il dies a quo che il dies ad quem dal computo. Il termine per la comparizione previsto dall'articolo 163 bis del codice di procedura civile è il principale esempio di "termine libero"[11][11]. La norma stabilisce che tra il giorno della notificazione della citazione e quello dell'udienza di comparizione devono intercorrere termini liberi non minori di 120 giorni se la notificazione avviene in Italia e di 150 giorni se avviene all'estero. Inoltre, il giudice deve comunicare il decreto di fissazione dell'udienza al cancelliere, il quale lo notifica all'attore almeno 90 giorni liberi prima dell'udienza[11][11]. Per calcolare un termine di 20 giorni liberi decorrente dal 10 aprile, escludiamo l'10 aprile (dies a quo), contiamo 20 giorni completi (11 aprile, 12 aprile... fino al 30 aprile), e il termine scade il 30 aprile senza computare ulteriormente il dies ad quem, che coincide con la scadenza medesima. In pratica, se il termine decorre dal 10 aprile con 20 giorni liberi, il ventesimo giorno libero è il 30 aprile.

### Termini a Ritroso e Loro Gestione

I termini a ritroso sono quei termini che si computano "all'indietro" dalla data di scadenza, indicando il momento prima del quale deve essere compiuta una determinata attività[24][27][27]. Un esempio tipico è il termine per il deposito di memorie prima di un'udienza: se l'udienza è fissata per il 20 giugno e il termine per il deposito di memorie è di 5 giorni prima, il termine scade il 15 giugno (computato a ritroso). La Corte di Cassazione ha chiarito che quando il termine a ritroso cade in un giorno festivo, la proroga al primo giorno non festivo deve calcolarsi anch'essa a ritroso, individuando il dies ad quem nel giorno non festivo cronologicamente precedente rispetto a quello di scadenza, non nel giorno successivo[24][27][27]. Questo è fondamentale per non abbreviare l'intervallo di tempo previsto a tutela della parte che deve ricevere l'atto. Se il termine a ritroso di 5 giorni prima dell'udienza del 20 giugno cade su domenica (15 giugno), allora il dies ad quem si sposta al sabato precedente, ossia al 14 giugno, così da garantire effettivamente 5 giorni di anticipo.

### Differenza tra Termine "A Giorni" e Termine "A Mesi/Anni"

L'articolo 155, comma 2 del codice di procedura civile stabilisce chiaramente la differenza tra il computo a giorni (ex numeratio dierum) e il computo a mesi o anni (ex nominatione dierum)[1][1]. Nel calcolo a giorni, si aggiungono alla data iniziale i giorni uno dopo l'altro fino a determinare la scadenza. Nel calcolo a mesi o anni, si osserva il calendario comune: il termine scade nel giorno del mese numericamente corrispondente a quello del mese iniziale, indipendentemente dal fatto che l'anno sia bisestile o dagli effettivi giorni del mese. Un termine di 6 mesi decorrente dal 30 novembre scade il 30 maggio, anche se febbraio ha meno di 30 giorni; se nel mese di scadenza manca il giorno numericamente corrispondente (come il 30 febbraio), il termine si compie con l'ultimo giorno del mese[2][2]. Un termine di 2 mesi decorrente dal 31 gennaio scade il 31 marzo (gennaio ha 31 giorni, marzo ha 31 giorni), non il 28 o 29 febbraio.

## Articolo 155 Codice di Procedura Civile: Computo dei Termini

### Il Testo Normativo Integrale

L'articolo 155 del codice di procedura civile rappresenta la norma fondamentale in materia di computo dei termini nel processo civile italiano[1][1]. Il testo recita: "Nel computo dei termini a giorni o ad ore, si escludono il giorno o l'ora iniziali. Per il computo dei termini a mesi o ad anni, si osserva il calendario comune. I giorni festivi si computano nel termine. Se il giorno di scadenza è festivo, la scadenza è prorogata di diritto al primo giorno seguente non festivo. La proroga prevista dal quarto comma si applica altresì ai termini per il compimento degli atti processuali svolti fuori dell'udienza che scadono nella giornata del sabato. Resta fermo il regolare svolgimento delle udienze e di ogni altra attività giudiziaria, anche svolta da ausiliari, nella giornata del sabato, che ad ogni effetto è considerata lavorativa".

### I Commi Spiegati nel Dettaglio

Il **primo comma** stabilisce il principio del dies a quo: nel computo a giorni o ore, il giorno o l'ora iniziali non si computano. Se un termine decorre lunedì 10 aprile alle ore 14, il computo inizia martedì 11 aprile alle ore 14. Questo comma si applica a tutti i termini ordinari nel processo civile[1][1].

Il **secondo comma** riguarda i termini espressi in mesi o anni. In questo caso, si applica il sistema ex nominatione dierum, per cui il termine scade nel giorno del mese numericamente corrispondente a quello del mese iniziale, senza riguardo ai giorni effettivi dei mesi. Un termine di 1 mese dal 31 gennaio scade il 28 febbraio (o 29 se bisestile), non il 1° marzo[1][1][2].

Il **terzo comma** chiarisce che i giorni festivi **si computano** nel computo dei termini. Questo è un principio essenziale: il numero di giorni festivi non riduce il numero totale di giorni del termine. Se un termine è di 30 giorni e nel periodo sono compresi 4 giorni festivi, i 30 giorni comprendono integralmente quei 4 giorni festivi[1][1].

Il **quarto comma** introduce la proroga di diritto: se il giorno di scadenza calcolato è un giorno festivo, la scadenza è prorogata automaticamente (sine causa, di diritto, senza necessità di alcun atto) al primo giorno seguente non festivo. Questa regola vale solo per i termini a decorrenza successiva ma non per quelli computati a ritroso[1][1]. Se un termine scade il 1° maggio (festa nazionale), la scadenza si trasla al 2 maggio; se scade il 26 dicembre (Santo Stefano, festivo), la scadenza si trasla al primo giorno non festivo successivo[1][1].

Il **quinto comma**, introdotto dalla Legge 28 dicembre 2005, n. 263 con decorrenza dal 1° marzo 2006[1][1], estende la proroga ai termini per il compimento degli atti processuali svolti fuori dell'udienza che scadono nella giornata di sabato. Inoltre, chiarisce che il sabato è considerato lavorativo per lo svolgimento delle udienze e di ogni altra attività giudiziaria, anche se normalmente è considerato giorno non feriale ai fini della sospensione feriale[1][1].

### Dies A Quo: Modalità di Computo

Il dies a quo rappresenta il giorno iniziale dal quale decorre il termine. Secondo il principio generale, il dies a quo non si computa nel termine: se un termine decorre il lunedì, il computo inizia da martedì. Tuttavia, quando la legge stabilisce specificamente che si contano "giorni liberi", allora il dies a quo non si computa, così come il dies ad quem. Nel caso ordinario di termine esprimente semplicemente un numero di giorni, il dies a quo non si computa, ma il dies ad quem sì[1][6][1][2].

La jurisprudenza ha chiarito inoltre che il dies a quo rappresenta il momento iniziale nel quale il fatto ha inizio, da cui cominciano a decorrere i termini[1]. Se si notifica un atto martedì 12 aprile, il dies a quo è il 12 aprile e il computo inizia dal 13 aprile. Se il termine è di 20 giorni, il dies ad quem è il 2 maggio.

### Dies Ad Quem: Gestione della Scadenza Festiva

Il dies ad quem rappresenta il giorno finale del termine, quello nel quale l'atto processuale deve essere compiuto. Se il dies ad quem calcolato cade in un giorno festivo, la scadenza è prorogata di diritto al primo giorno non festivo successivo[1][1]. Questa regola opera automaticamente per effetto di legge, senza necessità di alcuna domanda di proroga da parte della interessato. Se il termine scade il 25 dicembre (Natale, festivo), la scadenza si trasla automaticamente al 26 dicembre (Santo Stefano, anchesso festivo), quindi al 27 dicembre (primo giorno non festivo).

Per i termini "a ritroso", la giurisprudenza consolidata ritiene che la proroga in caso di dies ad quem festivo deve operarsi a ritroso, individuando il dies ad quem nel giorno non festivo cronologicamente precedente[24][27][27]. Se un termine di 10 giorni a ritroso dall'udienza del 20 giugno cadrebbe il 10 giugno (domenica, festiva), allora il dies ad quem si anticipa al sabato 9 giugno.

### La Proroga al Primo Giorno Seguente Non Festivo

La proroga automatica al primo giorno seguente non festivo è una conseguenza diretta del dies ad quem festivo[1][1]. Questa proroga non richiede alcun atto, istanza o formalità: opera di diritto. Il primo giorno "seguente non festivo" va individuato considerando l'ordine cronologico: domenica e lunedì di Pasquetta sono festivi, quindi se la scadenza cade lunedì 6 aprile 2026 (lunedì dell'Angelo, festivo), la proroga si applica al martedì 7 aprile 2026 (primo giorno non festivo successivo).

Un'applicazione concreta: un termine scade il 25 aprile 2026 (festivo, Festa della Liberazione). La scadenza si trasla al 26 aprile 2026? No, perché il 26 aprile 2026 è una domenica (domenica da verificare nel calendario 2026). Allora il primo giorno non festivo è il 27 aprile 2026[7].

### Applicazione nei Processi Civile, Amministrativo e Tributario

Nel processo civile, l'articolo 155 c.p.c. si applica a tutti i termini processuali ordinari[1][1]. Nel processo amministrativo, l'articolo 54 del codice del processo amministrativo richiama l'articolo 155 c.p.c. per il computo dei termini[25][29][29]. Nel processo tributario, si applica la normativa di cui all'articolo 155 c.p.c. per i termini ordinari, con specificità relative ai termini di impugnazione e costituzione[30].

## Articolo 2963 Codice Civile: Computo dei Termini di Prescrizione

### Il Testo Normativo

L'articolo 2963 del codice civile disciplina il computo dei termini di prescrizione, i quali rappresentano una fattispecie di termini sostanziali diversa dai termini processuali[2][2]. Il testo recita: "I termini di prescrizione contemplati dal presente codice e dalle altre leggi si computano secondo il calendario comune. Non si computa il giorno nel corso del quale cade il momento iniziale del termine e la prescrizione si verifica con lo spirare dell'ultimo istante del giorno finale. Se il termine scade in giorno festivo, è prorogato di diritto al giorno seguente non festivo. La prescrizione a mesi si verifica nel mese di scadenza e nel giorno di questo corrispondente al giorno del mese iniziale. Se nel mese di scadenza manca tale giorno, il termine si compie con l'ultimo giorno dello stesso mese".

### Differenze rispetto all'Articolo 155 c.p.c.

Sebbene l'articolo 2963 c.c. segua lo stesso principio di base del dies a quo e dies ad quem dell'articolo 155 c.p.c., vi sono alcune differenze significative[2][2]. L'articolo 2963 c.c. si riferisce al computo dei termini di prescrizione sostanziali (ad esempio, la prescrizione del diritto al risarcimento danni che è di 5 anni, la prescrizione dei crediti che è di 10 anni, etc.), mentre l'articolo 155 c.p.c. si riferisce ai termini processuali. Una differenza notevole è che l'articolo 2963 c.c. specifica esplicitamente che la prescrizione si verifica "con lo spirare dell'ultimo istante del giorno finale", mentre l'articolo 155 c.p.c. è meno specifico su questo punto[2][2].

### Applicazione ai Termini Sostanziali di Prescrizione e Decadenza

I termini di cui all'articolo 2963 c.c. si applicano alla prescrizione dei diritti. Se un diritto è soggetto a prescrizione di 5 anni, il computo inizia dal giorno successivo a quello in cui il diritto poteva essere esercitato. Se una persona subisce un danno il 1° gennaio 2021, il dies a quo è l'1 gennaio 2021, il computo inizia il 2 gennaio 2021, e la prescrizione scade il 1° gennaio 2026[2][2]. Se il dies ad quem cade in un giorno festivo (ad esempio, il 1° gennaio 2026 è una domenica e Capodanno, dunque festivo doppiamente), la prescrizione è prorogata al giorno seguente non festivo.

La decadenza è un istituto diverso dalla prescrizione e segue regole specifiche secondo le disposizioni che l'istituiscono, ma utilizza generalmente il computo di cui all'articolo 155 c.p.c. per i termini processuali e all'articolo 2963 c.c. per i termini sostanziali[2][2].

## Sospensione Feriale dei Termini Processuali: Legge 742/1969

### La Normativa: Articolo 1 della Legge 7 Ottobre 1969, n. 742

La Legge 7 ottobre 1969, n. 742, come successivamente modificata dalla Legge 10 novembre 2014, n. 162 (in conversione del Decreto-Legge 12 settembre 2014, n. 132), disciplina la sospensione feriale dei termini processuali[4][4][4][4][10]. Il testo dell'articolo 1, comma 1, recita: "Il decorso dei termini processuali relativi alle giurisdizioni ordinarie ed a quelle amministrative è sospeso di diritto dal 1° al 31 agosto di ciascun anno, e riprende a decorrere dalla fine del periodo di sospensione. Ove il decorso abbia inizio durante il periodo di sospensione, l'inizio stesso è differito alla fine di detto periodo"[4][4][4][4][10].

Questa norma ha subito un importante ridimensionamento: originariamente, la sospensione era dal 1° agosto al 15 settembre, ma il Decreto-Legge 132/2014 l'ha ridotta a 31 giorni (dal 1° al 31 agosto) a decorrere dall'anno 2015, con lo scopo dichiarato di accelerare i procedimenti e smaltire l'arretrato[10][10][10].

### Periodo di Sospensione: 1-31 Agosto

Il periodo di sospensione feriale è attualmente dal 1° agosto al 31 agosto di ogni anno[4][10][4][4][10][4][10]. Durante questo periodo, il decorso di tutti i termini processuali è sospeso di diritto. Ciò significa che se un termine ordinario scade durante il mese di agosto, esso è prorogato automaticamente al 1° settembre e prosegue da quella data. Inoltre, se un termine avrebbe dovuto iniziare a decorrere durante il mese di agosto, esso inizia a decorrere dal 1° settembre[10][10][10].

La sospensione feriale non si applica a determinati procedimenti, considerati urgenti o caratterizzati da urgenza particolare. Tra i procedimenti esclusi rientrano le cause di alimenti, le controversie individuali di lavoro e quelle previdenziali, i procedimenti cautelari e di opposizione all'esecuzione, i giudizi di sfratto e di dichiarazione e revoca del fallimento[1][1]. Inoltre, la sospensione non si applica ai procedimenti in materia di esecuzione forzata.

### Calcolo dei Termini che Attraversano il Periodo Feriale

Quando un termine attraversa il periodo feriale, il calcolo deve tenere conto della sospensione[1][10][1][39][45]. La regola è la seguente: se un termine scade durante il periodo feriale (1-31 agosto), la scadenza è rinviata al 1° settembre e i giorni di agosto non sono conteggiati. Se il termine ha inizio durante il periodo feriale, il computo inizia dal 1° settembre[10][10][10].

Un esempio pratico: un termine di 30 giorni decorre dal 20 luglio. Il calcolo procede così: dal 20 luglio (escluso) al 31 luglio sono 11 giorni; dal 1° agosto al 31 agosto la sospensione non consente il computo; dal 1° settembre in poi si aggiungono i giorni rimanenti per raggiungere 30. Dunque, 11 giorni (da 21 luglio a 31 luglio) + 19 giorni (da 1° settembre a 19 settembre) = 30 giorni. Il termine scade il 19 settembre[10][10][45][10].

Un altro esempio: termine di 40 giorni decorre il 15 agosto. Poiché il dies a quo cade durante la sospensione feriale, il termine inizia il 1° settembre e scade il 10 ottobre (escluso il 1° settembre, contando 40 giorni completi dal 2 settembre al 10 ottobre)[10][45].

### Procedimenti Esclusi dalla Sospensione

Come menzionato, la sospensione feriale non si applica a determinati procedimenti caratterizzati da urgenza[1][1]. Nel processo penale, i procedimenti non sono sottoposti a sospensione feriale, essendo il processo penale disciplinato da regole proprie[50]. Nel processo amministrativo, la sospensione si applica secondo l'articolo 54 c.p.a., ma con esclusioni per i procedimenti cautelari[25][29][29]. Nel processo tributario, la sospensione si applica come nel processo civile, ma con esclusioni analoghe[30].

In particolare, le controversie in sede di distribuzione nell'esecuzione forzata (art. 512 c.p.c.) non sono soggette a sospensione feriale, come ha chiarito la Corte di Cassazione, perché tali procedimenti sono caratterizzati da urgenza e dal rischio di prolungamento indebito.

### Applicazione ai Processi Amministrativo e Tributario

Nel processo amministrativo, l'articolo 54, comma 2 del Codice del Processo Amministrativo (c.p.a.) riproduce essenzialmente la disciplina della Legge 742/1969, prevedendo la sospensione dal 1° al 31 agosto di ciascun anno[25][29][29][9]. La sospensione si applica a tutti i termini processuali ordinari, ma non ai procedimenti cautelari[25][29][29].

Nel processo tributario, la sospensione feriale si applica ai termini processuali ordinari secondo le regole della Legge 742/1969[30]. I termini per proporre ricorso (60 giorni), per costituirsi in giudizio (30 giorni), per appellare la sentenza (termine lungo di 6 mesi), sono soggetti a sospensione feriale[30]. Tuttavia, gli atti amministrativi come le istanze di rimborso e i procedimenti cautelari urgenti mantengono i loro termini ordinari, non essendo soggetti a sospensione[30].

## Festività Nazionali Italiane: Catalogazione Completa e Aggiornamento 2026

### Le Festività Civili Secondo la Legge 260/1949

La Legge 27 maggio 1949, n. 260, come successivamente modificata, stabilisce quali sono i giorni festivi ai sensi del diritto italiano[9][14][9][9]. Secondo questa normativa, sono considerati giorni festivi (con esclusione dalle domeniche): il 1° gennaio (Capodanno), il 6 gennaio (Epifania), il 19 marzo (San Giuseppe) — quest'ultimo soppresso dal 1977 ma potenzialmente ripristinabile, il 25 aprile (Festa della Liberazione), il lunedì dopo Pasqua (lunedì dell'Angelo o Pasquetta), il 1° maggio (Festa del Lavoro), il 2 giugno (Festa della Repubblica), il 15 agosto (Ferragosto), il 1° novembre (Ognissanti), l'8 dicembre (Immacolata Concezione), il 25 dicembre (Natale), il 26 dicembre (Santo Stefano)[9][14][9][9].

Tutte le domeniche sono giorni festivi per legge[9][14][9][9]. La Legge 5 marzo 1977, n. 54, ha apportato importanti modifiche al catalogo delle festività, sopprimendo alcune festività civili ed introducendo il sistema della celebrazione delle festività nazionali nella "prima domenica" di giugno (Festa della Repubblica) e novembre (Festa dell'Unità Nazionale). Tuttavia, la Legge 20 novembre 2000, n. 336, ha ripristinato il 2 giugno quale data fissa della Festa della Repubblica[9][14][9][9].

### La Nuova Festività: San Francesco d'Assisi (4 Ottobre) — Legge 151/2025

Una novità legislativa rilevante è rappresentata dalla Legge 8 ottobre 2025, n. 151, pubblicata nella Gazzetta Ufficiale n. 236 del 10 ottobre 2025, che istituisce la festa nazionale di San Francesco d'Assisi[5][5][5]. Questa legge, entrata in vigore il 1° gennaio 2026, riconosce il 4 ottobre quale festa nazionale quale patron speciale d'Italia, insieme a Santa Caterina da Siena[5][5][5]. Pertanto, dal 1° gennaio 2026, il 4 ottobre è ufficialmente un giorno festivo ai fini civili in Italia, analogamente alle altre festività nazionali[5][5][5].

### Festività Mobili: La Pasqua e il Lunedì dell'Angelo

La Pasqua è una festività mobile, la cui data varia ogni anno secondo un calcolo astronomico-ecclesiastico. La regola stabilita dal Concilio di Nicea (325 d.C.) fissa la Pasqua nella prima domenica successiva al primo plenilunio di primavera[38][42][43][44]. L'equinozio di primavera è fissato convenzionalmente al 21 marzo, anche se astronomicamente varia tra il 19 e il 21 marzo. Di conseguenza, la Pasqua può cadere tra il 22 marzo e il 25 aprile[38][42][43][44].

Per calcolare la data della Pasqua, si utilizza l'algoritmo di Gauss o l'algoritmo di Meeus/Jones/Butcher. Nel 2026, la Pasqua cade domenica 5 aprile[43]. Il lunedì dell'Angelo (o Pasquetta) è il giorno successivo alla Pasqua, dunque lunedì 6 aprile 2026[43]. Nel 2025, la Pasqua era domenica 20 aprile e il lunedì dell'Angelo era il 21 aprile[42]. Nel 2027, la Pasqua cadrà domenica 28 marzo e il lunedì dell'Angelo sarà il 29 marzo[44].

Il calcolo della Pasqua con l'algoritmo di Meeus/Jones/Butcher è complesso e richiede operazioni aritmetiche specifiche; tuttavia, è preferibile affidarsi a calendari ecclesiastici ufficiali piuttosto che calcolare manualmente[13][33][38][42].

### Differenza tra Festività Civili e Festività Religiose

Nel diritto italiano, non tutte le festività religiose della Chiesa cattolica sono riconosciute come festività civili. Le festività civili sono determinate dalla legge dello Stato, mentre le festività religiose riconosciute sono quelle specificamente individuate da accordi tra lo Stato e la Santa Sede[9][14][9][9]. L'Accordo del 18 febbraio 1984 tra la Repubblica Italiana e la Santa Sede, ratificato con Legge 25 marzo 1985, n. 121, e implementato con i Decreti Presidenziali successivi, stabilisce quali festività religiose della Chiesa cattolica sono riconosciute come giorni festivi civili[9][14][9][9].

Pertanto, giornate come il 19 marzo (San Giuseppe) o il 29 giugno (Santi Pietro e Paolo), benché importanti dal punto di vista religioso, non sono festività civili a livello nazionale, salvo specifici riconoscimenti territoriali (ad esempio, San Giuseppe è festivo a livello locale in alcune regioni; i Santi Pietro e Paolo sono festivi a Roma)[9][14][9][9].

### Santo Patrono Locale: Considerazioni su Applicabilità Civile

Il Santo Patrono di una determinata località è riconosciuto come giorno festivo locale, ma non necessariamente come festività civile nazionale. La festività del Santo Patrono è tipicamente riconosciuta dai contratti collettivi di lavoro e dalla tradizione locale, ma non opera automaticamente per i termini processuali nazionali[32]. Per i termini processuali civili, amministrativi e tributari, si applicano le festività nazionali stabilite dalla Legge 260/1949, non le festività locali dei santi patroni[1][1][9][9]. Tuttavia, alcune normative specifiche possono prevedere esclusioni per festività locali (ad esempio, nel contratto collettivo di lavoro)[15].

### Calendario Festività 2025, 2026, 2027

| Data | Descrizione | Anno 2026 | Anno 2027 |
|------|-------------|----------|----------|
| 1° gennaio | Capodanno | Giovedì | Venerdì |
| 6 gennaio | Epifania | Mercoledì | Giovedì |
| 5 aprile | Pasqua | Domenica | — |
| 6 aprile | Lunedì dell'Angelo | Lunedì | — |
| 25 aprile | Festa della Liberazione | Sabato | Domenica |
| 1° maggio | Festa del Lavoro | Venerdì | Sabato |
| 2 giugno | Festa della Repubblica | Martedì | Mercoledì |
| 15 agosto | Ferragosto | Sabato | Domenica |
| 4 ottobre | San Francesco d'Assisi | Lunedì | Martedì |
| 1° novembre | Ognissanti | Domenica | Lunedì |
| 8 dicembre | Immacolata Concezione | Martedì | Mercoledì |
| 25 dicembre | Natale | Venerdì | Sabato |
| 26 dicembre | Santo Stefano | Sabato | Domenica |

Nel 2026, il 28 marzo è martedì, il 4 ottobre è lunedì (nuova festività San Francesco). Nel 2025, il 20 aprile è Pasqua domenica, il 21 aprile è Pasquetta lunedì. Nel 2027, il 28 marzo è Pasqua domenica, il 29 marzo è Pasquetta lunedì[7][43][44].

## Applicazioni Pratiche del Calcolo dei Giorni nel Diritto Italiano

### Termini di Impugnazione: Appello, Cassazione, Regolamento di Competenza

Nel processo civile, i termini per le impugnazioni sono disciplinati dall'articolo 325 del codice di procedura civile[8]. Il termine per proporre appello, revocazione e opposizione di terzo è di 30 giorni dal momento della notificazione della sentenza[8]. Il termine per proporre ricorso per cassazione è di 60 giorni[8]. Il termine per il regolamento di competenza è di 30 giorni[8].

Se una sentenza di primo grado è notificata il 10 aprile 2026, il termine di 30 giorni per l'appello scade il 10 maggio 2026 (escluso il 10 aprile, contando 30 giorni fino al 10 maggio). Se il 10 maggio è festivo, la scadenza è prorogata al primo giorno non festivo successivo. Nel 2026, il 10 maggio è una domenica, dunque la scadenza si trasla al lunedì 11 maggio 2026.

Nel processo amministrativo, i termini sono generalmente di 60 giorni per il ricorso, salvo scadenze più brevi per procedimenti urgenti[25][29][29].

### Termine per l'Opposizione a Decreto Ingiuntivo: 40 Giorni

L'articolo 641 del codice di procedura civile stabilisce che il debitore ha 40 giorni per presentare opposizione al decreto ingiuntivo[12][34][36]. Questo termine decorre dal giorno della notificazione del decreto. Se il decreto è notificato il 15 marzo 2026, il termine di 40 giorni scade il 24 aprile 2026 (escluso il 15 marzo, contando 40 giorni fino al 24 aprile). Se il 24 aprile è festivo (il 25 aprile è Festa della Liberazione, il 24 aprile è venerdì 2026), il termine rimane il 24 aprile poiché non festivo. Se il 25 aprile fosse un venerdì (non lo è nel 2026, è sabato), e il termine scadesse il 25 aprile, la proroga porterebbe la scadenza al 26 aprile[12][34][36].

### Preavviso di Licenziamento: Variabilità secondo il CCNL

Nel diritto del lavoro, il preavviso di licenziamento è calcolato secondo le disposizioni del Contratto Collettivo Nazionale di Lavoro (CCNL) applicabile[15]. Nel CCNL Commercio, il preavviso varia da 10 a 120 giorni a seconda del livello di inquadramento e dell'anzianità di servizio, e si calcola dal 1° o dal 16 del mese[15]. Nel CCNL Metalmeccanica, il preavviso varia da 7 giorni a 4 mesi a seconda della categoria e dell'anzianità, e decorre dal giorno successivo della comunicazione[15].

Un esempio pratico: secondo il CCNL Commercio, un impiegato di livello IV con 8 anni di servizio ha diritto a un preavviso di licenziamento di 20 giorni. Se il licenziamento è comunicato il 23 marzo 2026, il preavviso decorre dal 1° aprile 2026 (primo giorno 1 o 16 del mese successivo) e scade il 20 aprile 2026. Se il licenziamento è comunicato il 10 marzo 2026, il preavviso decorre dal 16 marzo 2026 e scade il 4 aprile 2026.

### Ravvedimento Operoso: Calcolo dei Giorni di Ritardo

Nel diritto tributario, il ravvedimento operoso permette al contribuente di regolarizzare un inadempimento tributario pagando l'imposta dovuta, gli interessi legali e una sanzione ridotta[16]. La riduzione della sanzione dipende dal momento in cui il contribuente effettua la regolarizzazione rispetto alla violazione. Se la regolarizzazione avviene entro 14 giorni dalla scadenza originaria dell'imposta, la sanzione è ridotta al 15% per un decimo al 15 per ogni 15 giorni.

Calcoliamo un esempio: un'imposta scadeva il 20 aprile 2026. Se il contribuente regolarizza il 28 aprile 2026, il ritardo è di 8 giorni (dal 21 aprile al 28 aprile, escluso il 20 aprile, contando 8 giorni). Rientra nella fascia "entro 14 giorni" e la sanzione è ridotta al 15% di un decimo per 8 giorni (frazione del 1/15). Gli interessi legali si calcolano sulla formula: importo non versato × tasso interesse legale × giorni (365 giorni all'anno)[16].

### Calcolo dei Giorni di Malattia, Ferie, Permessi

Nel rapporto di lavoro, il calcolo dei giorni di malattia, ferie e permessi deve considerare i giorni di calendario, compresi i fine settimana e i giorni festivi[15][17]. Se un lavoratore si assenta per malattia dal 10 aprile al 20 aprile 2026, il numero di giorni di malattia è 11 (escluso il 10 aprile, contando dal 11 aprile al 20 aprile incluso). Se durante questo periodo cadono giorni festivi, essi si computano nel totale dei giorni di malattia.

Le ferie devono essere frutte in periodi di riposo continuativi secondo il decreto-legge 66/2003, che fissa il minimo a 26 giorni all'anno, con almeno 2 settimane consecutive al momento della richiesta del lavoratore[17]. Il calcolo dei giorni di ferie maturati si effettua dividendo il totale annuo per 12 mesi: se il CCNL prevede 26 giorni annui, si maturano 2,17 giorni circa per mese[17].

### Preavviso di Disdetta di Contratto di Locazione Abitativa

L'articolo 4 della Legge 392/1978 (Equo Canone) stabilisce che il conduttore di un immobile ad uso abitativo può recedere dal contratto con un preavviso di almeno 6 mesi mediante lettera raccomandata[18]. I 6 mesi si calcolano secondo il calendario comune: dal 15 marzo 2026, il preavviso di 6 mesi scade il 15 settembre 2026 (termine computato a mesi, dies ad quem incluso). Se il dies ad quem (15 settembre 2026, mercoledì) è festivo, la scadenza è prorogata al primo giorno non festivo successivo; tuttavia, il 15 settembre non è festivo nel 2026. Se il preavviso fosse comunicato il 31 gennaio 2026 e il dies ad quem calcolato a 6 mesi fosse il 31 luglio 2026, il termine scade il 31 luglio 2026 (giorno numericamente corrispondente nel mese della scadenza)[18].

## Formule per il Calcolo dei Giorni in Fogli di Calcolo

### Formula Base: Sottrazione Diretta

La formula più semplice per calcolare il numero di giorni tra due date in Excel o Google Sheets è la sottrazione diretta della data iniziale dalla data finale:

```
=B2-A2
```

Se la cella A2 contiene la data 10 aprile 2026 e la cella B2 contiene la data 25 aprile 2026, il risultato è 15, che rappresenta i 15 giorni tra le due date (dal 10 aprile escluso al 25 aprile incluso, pertanto 11-25 sono 15 giorni). Tuttavia, dal punto di vista giuridico italiano, il calcolo corretto del "dies a quo non computatur" richiederebbe di aggiungere 1 al risultato se si desidera includere il dies a quo oppure di considerare il risultato come corretto se il dies a quo è già stato escluso logicamente nella formulazione del problema[22][31][31][47][47][47].

### Funzione GIORNI

In Microsoft Excel, la funzione GIORNI restituisce il numero di giorni tra due date:

```
=GIORNI(B2;A2)
```

Se A2 è il 10 aprile 2026 e B2 è il 25 aprile 2026, la funzione restituisce 15[22][31][47][47][47]. Questa funzione calcola data_finale - data_iniziale ed è equivalente alla sottrazione diretta.

### Funzione DATA.DIFF

In Microsoft Excel, la funzione DATA.DIFF consente calcoli più sofisticati:

```
=DATA.DIFF(A2;B2;"d")
```

Il parametro "d" restituisce il numero di giorni completi. Altre opzioni includono "m" per mesi, "y" per anni, "ym" per mesi esclusi gli anni, "md" per giorni esclusi i mesi (non consigliato per precisione)[31][31].

### Funzione GIORNI.LAVORATIVI.TOT

Quando è necessario calcolare solo i giorni lavorativi, escludendo i fine settimana e le festività, si utilizza la funzione GIORNI.LAVORATIVI.TOT (o NETWORKDAYS in inglese):

```
=GIORNI.LAVORATIVI.TOT(A2;B2;C2:C20)
```

Dove A2 è la data iniziale, B2 è la data finale, e C2:C20 è un intervallo contenente le date delle festività da escludere (ad esempio, le festività italiane)[19][35].

### Funzione GIORNI.LAVORATIVI.TOT.INTL

Questa funzione consente di specificare quale giorni della settimana sono considerati fine settimana:

```
=GIORNI.LAVORATIVI.TOT.INTL(A2;B2;1;C2:C20)
```

Il parametro "1" indica che sabato e domenica sono fine settimana (il valore di default). Altre opzioni numeriche permettono di personalizzare i giorni di fine settimana[19].

### Esempi Pratici con Anni Bisestili e Festività

**Esempio 1: Calcolo di 30 giorni dal 20 luglio 2026 con sospensione feriale**

Data inizio: 20 luglio 2026 (dies a quo, non computato)
Numero di giorni: 30
Sospensione feriale: 1-31 agosto 2026

Calcolo: dal 21 luglio al 31 luglio sono 11 giorni; dal 1° al 31 agosto sospensione (0 giorni computati); dal 1° settembre al 19 settembre sono 19 giorni. Totale: 11 + 19 = 30 giorni. Die ad quem: 19 settembre 2026[45].

Formula in Excel (approssimativa, senza considerare automaticamente la sospensione):
```
=B2-A2+1
```
Dove A2 = 20/07/2026 e B2 = 19/09/2026. Risultato: 62 giorni (comprende i 31 giorni di agosto non computabili). È necessario sottrarre manualmente i 31 giorni di agosto: 62 - 31 = 31 giorni. Poiché il dies a quo non si computa, il risultato corretto è 30 giorni[45].

**Esempio 2: Termine di 6 mesi da gennaio 31 (anno bisestile 2024)**

Data inizio: 31 gennaio 2024 (dies a quo, non computato)
Numero di mesi: 6
Anno bisestile: 2024 (febbraio ha 29 giorni)

Calcolo a mesi (ex nominatione dierum): il termine scade nel giorno del mese numericamente corrispondente nel mese di scadenza. Se il dies a quo è il 31 gennaio, il dies ad quem è il 31 luglio 2024 (numericamente corrispondente). Se fosse stato gennaio 30, il dies ad quem sarebbe il 30 luglio[2][2].

**Esempio 3: Verifica di festività con formula Excel**

Per verificare se una data è festiva, è possibile utilizzare una formula che controlla se la data rientra nel set di festività italiane:

```
=SE(O(DATA(ANNO(A2);1;1)=A2;DATA(ANNO(A2);1;6)=A2;DATA(ANNO(A2);4;25)=A2;...);VERO;FALSO)
```

Per festività mobili come Pasqua, è necessario calcolare prima la data della Pasqua utilizzando l'algoritmo di Gauss o Meeus, quindi verificare la data[13][33][38][42].

**Esempio 4: Calcolo giorni lavorativi nel 2026 dal 10 aprile al 25 aprile**

Utilizziamo la funzione GIORNI.LAVORATIVI.TOT con le festività italiane del 2026:

```
=GIORNI.LAVORATIVI.TOT(DATA(2026;4;10);DATA(2026;4;25);{DATA(2026;4;25)})
```

Nel periodo dal 10 aprile al 25 aprile 2026, il 25 aprile è Festa della Liberazione (festivo). Il numero di giorni lavorativi è quindi ridotto. Contando i giorni: 10 aprile (venerdì) a 11 aprile (sabato) non conta; 12 aprile (domenica) non conta; 13-24 aprile (9 giorni feriali); 25 aprile festivo. Risultato approssimativo: 10 giorni lavorativi[19][35].

## Errori Comuni nel Calcolo dei Giorni e Loro Correzione

### Includere o Escludere il Giorno Iniziale

L'errore più frequente consiste nel non applicare correttamente il principio del "dies a quo non computatur". Nel diritto italiano, il giorno iniziale dal quale decorre il termine non deve essere conteggiato[1][6][1][2][39]. Se un termine decorre dal 10 aprile, il primo giorno da contare è l'11 aprile, non il 10 aprile. Molti calcolatori online e persone private utilizzano la formula "data finale - data iniziale", che già esclude il dies a quo dal calcolo. Tuttavia, nel linguaggio ordinario, si dice spesso "30 giorni dal 10 aprile", che significa dal 11 aprile al 10 maggio (primo giorno è 11 aprile, ultimo giorno è 10 maggio = 30 giorni)[1][39].

### Non Considerare gli Anni Bisestili

Sebbene nel computo a mesi o anni, l'articolo 155 c.p.c. e l'articolo 2963 c.c. prevedano di non riguardare se l'anno sia bisestile, è importante considerare gli anni bisestili quando si calcola a giorni il tempo tra il 28 febbraio e il 1° marzo (o date simili che attraversano febbraio)[1][2][23][2][48]. Se il calcolo a giorni da gennaio 1 a dicembre 31 in un anno bisestile, il totale è 365 giorni (non 366), perché il dies a quo non si computa. Un errore comune è dimenticare che il 2024 è un anno bisestile, quindi ha 366 giorni; il 2025 ne ha 365; il 2026 ne ha 365[23][48].

### Confondere Giorni Lavorativi e Feriali

Nel processo civile ordinario, il termine è espresso in "giorni" intesi come giorni naturali o consecutivi, non giorni lavorativi[1][32][1]. Tuttavia, nel diritto del lavoro e in alcuni ambiti specifici, il termine può essere espresso in "giorni lavorativi"[15][32]. È essenziale distinguere: se un termine è di 30 giorni (senza ulteriore specificazione), comprende sabati, domeniche e giorni festivi. Se è di 30 giorni lavorativi, esclude i fine settimana e i giorni festivi[15][32].

### Non Applicare la Sospensione Feriale

Un errore rilevante è il mancato computo della sospensione feriale nei termini che attraversano il periodo agosto[1][10][1][4][10][45][10]. Se un termine scade tra il 1° e il 31 agosto, la scadenza è automaticamente prorogata al 1° settembre. Se un termine ha inizio durante il mese di agosto, il computo inizia dal 1° settembre. Molte persone calcolano il termine senza considerare questa sospensione, generando errori significativi[10][10][45][10].

### Trascurare la Proroga al Primo Giorno Non Festivo

Se il dies ad quem calcolato cade in un giorno festivo, la scadenza è prorogata automaticamente al primo giorno non festivo successivo[1][1]. Se un termine scade il 25 dicembre (Natale), la scadenza si trasla al 26 dicembre (Santo Stefano); se anche il 26 dicembre è festivo, si trasla al 27 dicembre. Un errore comune è non verificare se il dies ad quem è festivo, rendendo l'atto processuale presentato tardivo[1][1][39].

### Non Aggiornare le Festività Locali e le Novità Legislative

Le festività nazionali e locali possono variare nel tempo. Dal 1° gennaio 2026, il 4 ottobre è un giorno festivo per la Festa di San Francesco d'Assisi a livello nazionale[5][5][5]. Non considerare questa novità può portare a calcoli errati dei termini che cadono il 4 ottobre o nelle vicinanze. Inoltre, alcune festività religiose possono essere ripristinate (come il 19 marzo per San Giuseppe, che è stato soppresso nel 1977 ma potrebbe essere ripristinato in futuro). È consigliabile verificare periodicamente le modifiche normative[5][5][5].

## Giurisprudenza Rilevante sul Calcolo dei Giorni

### Cassazione su Dies A Quo e Dies Ad Quem

La Corte di Cassazione ha fornito numerose pronunce chiarificatrici sul principio del dies a quo e dies ad quem. In particolare, è consolidato l'orientamento secondo cui il dies a quo non si computa nel termine ordinario, mentre il dies ad quem sì[1][6][1][2][39]. La giurisprudenza ha confermato che quando il dies ad quem cade in un giorno festivo o di sabato, la scadenza è prorogata al primo giorno non festivo successivo[1][1][39].

### Cassazione su Sospensione Feriale e Termini Sostanziali

La Corte di Cassazione ha affermato che il principio della sospensione feriale si applica ai termini processuali ordinari, ma non ai termini caratterizzati da urgenza particolarmente rilevante (quali cause di alimenti, controversie individuali di lavoro, procedimenti cautelari)[1][1][4][10]. La sospensione feriale si applica anche ai termini lunghi di impugnazione (6 mesi dalla pubblicazione della sentenza): se il dies ad quem cade durante il periodo feriale, il termine è prolungato di 31 giorni (il numero di giorni di agosto)[37][41].

### Cassazione su Termini A Ritroso

Una pronuncia rilevante della Corte di Cassazione (Sez. 3, Sentenza n. 14767 del 30 giugno 2014) ha stabilito che i commi 4 e 5 dell'articolo 155 c.p.c. (relativi alla proroga in caso di dies ad quem festivo) si applicano anche ai termini computati a ritroso[24][27][27]. Tuttavia, il meccanismo della proroga deve operarsi anch'esso a ritroso: il dies ad quem si anticipa al giorno non festivo cronologicamente precedente, non al giorno successivo, così da non abbreviare l'intervallo di tempo previsto a tutela della parte[24][27][27].

### Cassazione su Notifiche PEC e Telematiche

La Corte di Cassazione ha chiarito che le notifiche effettuate tramite posta elettronica certificata (PEC) dopo le ore 21 si perfezionano per il destinatario solo alle ore 7 del giorno successivo, secondo l'articolo 16 septies del Decreto-Legge 179/2012[26][49]. Tuttavia, con sentenza n. 75/2019, la Corte Costituzionale ha dichiarato costituzionalmente illegittimo l'art. 16 septies nella parte in cui impedisce al mittente di considerare la notifica perfezionata il giorno stesso se effettuata prima di mezzanotte[26][49]. Pertanto, per il mittente che effettua la notifica dopo le 21 ma entro le 24, la notifica si perfeziona il giorno stesso se la ricevuta di accettazione è generata entro la mezzanotte; per il destinatario, la notifica si considera perfezionata solo alle 7 del giorno successivo, a tutela del diritto al riposo[26][49].

Questa differenziazione è rilevante per il calcolo dei termini: se un'opposizione a decreto ingiuntivo è notificata tramite PEC il quarantesimo giorno entro le 24 ma dopo le 21, la notifica si considera effettuata il giorno stesso per il mittente (che ha rispettato il termine), mentre per il creditore-ricorrente la notifica si perfeziona il giorno dopo[26][49].

---

Questa ricerca ha fornito un'analisi esaustiva del calcolo dei giorni tra due date nel contesto italiano, affrontando aspetti generici, giuridici, processuali e pratici. Il rispetto rigoroso delle regole sul computo dei termini è essenziale per evitare decadenze e perdita di diritti. Le disposizioni di legge (articoli 155 c.p.c., 2963 c.c., Legge 742/1969 e successive modifiche) forniscono il quadro normativo completo, integrato da una giurisprudenza consolidata e, dal 1° gennaio 2026, arricchito dalla nuova festività nazionale di San Francesco d'Assisi. L'utilizzo di strumenti informatici (formule Excel, Google Sheets, calcolatori online dedicati) facilita il calcolo, ma la consapevolezza dei princìpi giuridici sottostanti rimane indispensabile per applicazioni corrette e consapevoli.

Citations:
[1] https://www.brocardi.it/codice-di-procedura-civile/libro-primo/titolo-vi/capo-ii/art155.html
[2] https://www.brocardi.it/codice-civile/libro-sesto/titolo-v/capo-i/sezione-iv/art2963.html
[3] https://apps.dirittopratico.it/redattore/Calcolo_numero_totale_di_giorni,_mesi_o_anni_tra_due_date.html
[4] https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Alegge%3A1969-10-07%3B742%21vig=
[5] https://www.gazzettaufficiale.it/eli/id/2025/10/10/25G00153/sg
[6] https://it.wikipedia.org/wiki/Dies_a_quo_non_computatur_in_termino
[7] https://www.cewe.it/foto-calendari/ispirazioni/calendario-festivita.html
[8] https://www.brocardi.it/codice-di-procedura-civile/libro-secondo/titolo-iii/capo-i/art325.html
[9] https://presidenza.governo.it/ufficio_cerimoniale/normativa/legge_19490527_260.pdf
[10] https://www.processopenaleegiustizia.it/Tool/Evidenza/Single/view_html?id_evidenza=3170
[11] https://www.brocardi.it/codice-di-procedura-civile/libro-secondo/titolo-i/capo-i/sezione-i/art163bis.html
[12] https://www.brocardi.it/codice-di-procedura-civile/libro-quarto/titolo-i/capo-i/art650.html
[13] https://calendario.eugeniosongia.com/gauss.htm
[14] https://www.tuttocamere.it/files/diritto/1949_260.pdf
[15] https://www.randstad.it/blog-e-news/diritti-dei-lavoratori/periodo-preavviso-dimissioni-calcolo/
[16] https://www.fiscoetasse.com/approfondimenti/16877-guida-al-ravvedimento-operoso.html
[17] https://confcommerciolecco.it/amp/lavoro/ferie-e-permessi-durata-minima-e-calcolo/
[18] https://www.brocardi.it/legge-equo-canone/titolo-i/capo-i/art4.html
[19] https://support.google.com/docs/answer/3295902?hl=it
[20] https://foroeuropeo.it/codici-civili/ricerca-per-parole-o-articolo/677-del-procedimento-davanti-al-tribunale-163-310/4250-297-1-fissazione-della-nuova-udienza-dopo-la-sospensione.html
[21] https://www.brocardi.it/codice-di-procedura-civile/libro-secondo/titolo-i/capo-vii/sezione-i/art297.html
[22] https://www.excelacademy.it/6777/excel-calcolare-numero-giorni-due-date-quick-tip/
[23] https://it.wikipedia.org/wiki/Anno_bisestile
[24] https://www.expartecreditoris.it/provvedimenti/computo-dei-termini-a-ritroso-si-individua-il-dies-ad-quem-e-non-il-dies-a-quo
[25] https://www.filodiritto.com/codici/codice-del-processo-amministrativo-annotato-con-la-giurisprudenza/capo-i-ricorso/art-54
[26] https://www.consulenza-legale.info/notifica-a-mezzo-pec-e-tempestiva-se-effettuata-tra-le-ore-2100-e-le-ore-2359-dellultimo-giorno-utile/
[27] https://www.studiocerbone.com/corte-di-cassazione-sezione-lavoro-ordinanza-n-30701-depositata-il-29-novembre-2024-in-tema-di-computo-dei-termini-lo-spostamento-nel-tempo-della-scadenza-dei-termini-da-calcolarsi-a-ritroso-se/
[28] https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Adecreto.legge%3A2014-09-12%3B132
[29] https://www.brocardi.it/codice-del-processo-amministrativo/libro-secondo/titolo-i/capo-i/sezione-ii/art54.html
[30] https://www.tiburzibardelli.it/processo-tributario-e-sospensione-feriale/
[31] https://support.microsoft.com/it-it/office/calcolare-la-differenza-tra-due-date-8235e7c9-b430-44ca-9425-46100a162f38
[32] https://www.dequo.it/articoli/giorni-feriali
[33] https://www.nexsoft.it/buona-pasqua-calcola-data-csharp/
[34] https://addiopignoramenti.it/2026/03/13/cosa-succede-dopo-40-giorni-dal-decreto-ingiuntivo/
[35] https://support.microsoft.com/it-it/office/giorni-lavorativi-tot-funzione-giorni-lavorativi-tot-48e717bf-a7a3-495f-969e-5005e3eb18e7
[36] https://www.brocardi.it/codice-di-procedura-civile/libro-quarto/titolo-i/capo-i/art644.html
[37] https://www.primogrado.com/computazione-del-termine-lungo-di-impugnazione
[38] https://it.wikipedia.org/wiki/Calcolo_della_Pasqua
[39] https://www.unidprofessional.com/calcolo-termini-processuali/
[40] https://www.brocardi.it/codice-di-procedura-civile/libro-secondo/titolo-i/capo-i/sezione-i/art163.html
[41] https://www.diritto.it/motivazione-sentenza-termine-soggetto-sospensione/
[42] https://www.meteo.it/notizie/quande-pasqua-2025-perche-la-data-cambia-sempre-760a86a4
[43] https://www.gazzetta.it/attualita/12-03-2026/pasqua-2026-data-perche-quest-anno-cade-il-5-aprile.shtml
[44] https://www.ilmeteo.net/notizie/attualita/quando-e-pasqua-nel-2027-la-data-il-calcolo-e-le-prossime-lune-piene.html
[45] https://www.diritto.it/sospensione-feriale-termini-processuali-guida/
[46] https://simpliciter.ai/app/search/public/giurisprudenza/2cabae7b-b189-591a-9230-4c78f96f4adc/cassazione/
[47] https://support.microsoft.com/it-it/office/giorni-funzione-giorni-57740535-d549-4395-8728-0f07bff0b9df
[48] https://www.rivaluta.it/calcolo/anno-bisestile.asp
[49] https://www.questionegiustizia.it/articolo/l-art-147-cpc-e-la-notifica-in-via-telematica-dopo-le-ore-21_11-02-2019.php
[50] https://www.brocardi.it/codice-di-procedura-penale/libro-secondo/titolo-vi/art172.html
