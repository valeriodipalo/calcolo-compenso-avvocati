import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // === Definizione ===
  {
    categoria: "Definizione",
    domanda: "Cos'è la rivalutazione monetaria?",
    risposta: "La rivalutazione monetaria è un'operazione aritmetica che consente di adeguare una somma di denaro al mutato potere d'acquisto della moneta, compensando la perdita causata dall'inflazione. Si ottiene moltiplicando il capitale iniziale per un coefficiente di rivalutazione ricavato dagli indici ISTAT FOI. È uno strumento fondamentale nel diritto civile italiano, disciplinato in varie norme tra cui l'art. 1224 c.c. e l'art. 429 c.p.c.",
    fonti: [
      { label: "Art. 1224 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1224" },
    ],
  },
  {
    categoria: "Definizione",
    domanda: "Qual è la differenza tra rivalutazione e svalutazione monetaria?",
    risposta: "La rivalutazione monetaria adegua una somma passata al valore attuale, aumentandone l'importo nominale per compensare l'inflazione. La svalutazione (o devalutazione) è il fenomeno inverso: si parte da un valore attuale per risalire al suo equivalente in un periodo precedente. In pratica, rivalutare significa portare avanti nel tempo, devalutare significa portare indietro.",
    fonti: [],
  },
  {
    categoria: "Definizione",
    domanda: "Cosa sono i debiti di valore e i debiti di valuta?",
    risposta: "I debiti di valuta hanno per oggetto fin dall'origine una somma di denaro determinata e sono soggetti al principio nominalistico ex art. 1277 c.c.: il debitore paga l'importo nominale originario. I debiti di valore hanno per oggetto una cosa diversa dal denaro (es. risarcimento danni): la moneta è solo la traduzione monetaria della lesione subita. Solo i debiti di valore sono automaticamente soggetti a rivalutazione monetaria.",
    fonti: [
      { label: "Art. 1277 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1277" },
    ],
  },
  // === Calcolo ===
  {
    categoria: "Calcolo",
    domanda: "Come si calcola la rivalutazione monetaria?",
    risposta: "La formula base è: Capitale rivalutato = Capitale iniziale × (Indice FOI finale / Indice FOI iniziale). Se gli indici appartengono a basi diverse, occorre moltiplicare per il coefficiente di raccordo ISTAT. Per il calcolo congiunto con interessi legali si segue il metodo delle Sezioni Unite della Cassazione (sent. 1712/1995): si rivaluta anno per anno sul capitale iniziale e si calcolano gli interessi sulla somma via via rivalutata.",
    fonti: [
      { label: "ISTAT Rivaluta", url: "https://rivaluta.istat.it/" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Quale indice ISTAT si usa per la rivalutazione monetaria?",
    risposta: "Si utilizza l'indice FOI (Famiglie di Operai e Impiegati) al netto dei tabacchi, pubblicato mensilmente dall'ISTAT sulla Gazzetta Ufficiale ai sensi dell'art. 81 della L. 392/1978. Non va confuso con l'indice NIC (per l'intera collettività) o l'IPCA (armonizzato europeo), che hanno finalità diverse e non producono gli stessi effetti giuridici per le rivalutazioni previste dalla legge.",
    fonti: [
      { label: "ISTAT – Indici dei prezzi", url: "https://www.istat.it/dati/calcolatori/rivalutazioni/" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Cos'è il coefficiente di raccordo ISTAT?",
    risposta: "Il coefficiente di raccordo è un fattore correttivo pubblicato dall'ISTAT che consente di confrontare indici FOI calcolati con basi temporali diverse. Quando si rivaluta tra due periodi che ricadono in basi diverse (es. base 2015=100 e base 2025=100), è necessario moltiplicare il rapporto degli indici per il coefficiente di raccordo. Dal 2026, la nuova base è 2025=100 con coefficiente di raccordo 1,214 rispetto alla base 2015=100.",
    fonti: [
      { label: "ISTAT Rivaluta – Guida utente", url: "https://rivaluta.istat.it/Rivaluta/doc/GuidaUtente.pdf" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Come si calcola la rivalutazione monetaria con Excel?",
    risposta: "In Excel la formula è: =CapitaleIniziale*(IndiceFOIFinale/IndiceFOIIniziale). Se le basi sono diverse, aggiungere il coefficiente di raccordo: =CapitaleIniziale*(IndiceFOIFinale*CoeffRaccordo/IndiceFOIIniziale). Gli indici mensili sono scaricabili gratuitamente dal sito ISTAT nella sezione 'Tavole per le rivalutazioni monetarie'. Per il calcolo congiunto con interessi, è necessario iterare anno per anno.",
    fonti: [
      { label: "ISTAT – Tavole rivalutazioni", url: "https://rivaluta.istat.it/Rivaluta/Widget/tavoleWidget.jsp" },
    ],
  },
  // === Applicazione ===
  {
    categoria: "Applicazione",
    domanda: "Quando è dovuta la rivalutazione monetaria?",
    risposta: "La rivalutazione è automaticamente dovuta per i debiti di valore (risarcimento danni, crediti di lavoro ex art. 429 c.p.c.). Per i debiti di valuta, invece, non opera automaticamente: il creditore deve provare il maggior danno ex art. 1224, comma 2, c.c. Inoltre, è prevista per legge per l'adeguamento dei canoni di locazione (L. 392/1978), dell'assegno di mantenimento e del TFR.",
    fonti: [
      { label: "Art. 1224 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1224" },
      { label: "Art. 429 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1973-10-11;533~art429" },
    ],
  },
  {
    categoria: "Applicazione",
    domanda: "Come funziona la rivalutazione dei crediti di lavoro?",
    risposta: "L'art. 429, comma 3, c.p.c. prevede che il giudice, nelle sentenze di condanna per crediti di lavoro, deve determinare gli interessi legali e il maggior danno per la diminuzione del valore del credito, con decorrenza dal giorno di maturazione del diritto. La rivalutazione è quindi automatica e non richiede specifica domanda del lavoratore. Analoga disciplina vale per le controversie previdenziali (art. 442 c.p.c.).",
    fonti: [
      { label: "Art. 429 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1973-10-11;533~art429" },
    ],
  },
  {
    categoria: "Applicazione",
    domanda: "Come si rivaluta l'assegno di mantenimento?",
    risposta: "L'art. 5, comma 7, della L. 898/1970 stabilisce che la sentenza di divorzio deve prevedere un criterio di adeguamento automatico dell'assegno, almeno con riferimento agli indici di svalutazione monetaria ISTAT. Per costante giurisprudenza della Cassazione, la norma si applica per analogia anche all'assegno di mantenimento nella separazione. L'adeguamento opera automaticamente senza necessità di domanda giudiziale.",
    fonti: [
      { label: "L. 898/1970", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1970-12-01;898" },
    ],
  },
  {
    categoria: "Applicazione",
    domanda: "Come si applica l'adeguamento ISTAT ai canoni di locazione?",
    risposta: "L'art. 32 della L. 392/1978 consente l'aggiornamento annuale del canone nella misura massima del 75% della variazione dell'indice FOI ISTAT. Per i contratti a canone libero (L. 431/1998) la misura può arrivare al 100% se previsto contrattualmente. L'aggiornamento non è automatico: deve essere espressamente richiesto dal locatore e non opera retroattivamente per le annualità in cui non è stato chiesto.",
    fonti: [
      { label: "L. 392/1978", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1978-07-27;392" },
    ],
  },
  {
    categoria: "Applicazione",
    domanda: "Come si rivaluta il TFR?",
    risposta: "L'art. 2120 c.c., come modificato dalla L. 297/1982, prevede che il TFR accantonato (esclusa la quota dell'anno in corso) sia rivalutato ogni 31 dicembre con un tasso composto da una quota fissa dell'1,5% più il 75% dell'aumento annuo dell'indice FOI ISTAT rispetto al dicembre dell'anno precedente. La rivalutazione è calcolata su base composta, a differenza della rivalutazione monetaria ordinaria.",
    fonti: [
      { label: "Art. 2120 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120" },
    ],
  },
  // === Interessi e Cumulo ===
  {
    categoria: "Interessi e Cumulo",
    domanda: "Come si calcolano gli interessi legali sulla somma rivalutata?",
    risposta: "Secondo il metodo stabilito dalle Sezioni Unite della Cassazione (sent. 1712/1995), gli interessi legali si calcolano sulla somma rivalutata anno per anno. La formula è: I = C × S × N / 36500, dove C è il capitale rivalutato, S il tasso legale vigente e N i giorni. Non si applica anatocismo: gli interessi non vengono capitalizzati. Questo metodo si applica ai debiti di valore.",
    fonti: [
      { label: "Art. 1284 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284" },
    ],
  },
  {
    categoria: "Interessi e Cumulo",
    domanda: "Esiste un divieto di cumulo tra interessi e rivalutazione?",
    risposta: "Per i debiti di valuta, non è ammesso il cumulo tra rivalutazione monetaria e interessi legali: il creditore può ottenere solo gli interessi legali ex art. 1224, comma 1, oppure il maggior danno ex comma 2 (se provato), ma non entrambi cumulativamente. Per i debiti di valore, invece, il cumulo è ammesso perché rivalutazione e interessi compensativi assolvono funzioni diverse: la prima reintegra il patrimonio, i secondi compensano la mancata disponibilità della somma.",
    fonti: [
      { label: "Art. 1224 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1224" },
    ],
  },
  {
    categoria: "Interessi e Cumulo",
    domanda: "Cos'è il principio nominalistico?",
    risposta: "Il principio nominalistico, sancito dall'art. 1277 c.c., stabilisce che i debiti pecuniari si estinguono con moneta avente corso legale per il suo valore nominale. In pratica, il debitore si libera pagando l'importo nominale originario, indipendentemente dalle variazioni del potere d'acquisto. Questo principio fa gravare sul creditore il rischio dell'inflazione. Le eccezioni principali sono i debiti di valore e le specifiche previsioni di legge (art. 429 c.p.c., art. 2120 c.c.).",
    fonti: [
      { label: "Art. 1277 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1277" },
    ],
  },
  {
    categoria: "Interessi e Cumulo",
    domanda: "Cos'è il maggior danno ex art. 1224 c.c.?",
    risposta: "L'art. 1224, comma 2, c.c. consente al creditore di ottenere un risarcimento ulteriore rispetto agli interessi legali, provando di aver subito un danno maggiore dal ritardato pagamento. Secondo Cass. 19499/2008, il maggior danno può ritenersi esistente in via presuntiva quando il rendimento netto dei titoli di Stato superi il tasso legale durante la mora. La svalutazione monetaria può costituire il maggior danno nei debiti di valuta.",
    fonti: [
      { label: "Art. 1224 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1224" },
    ],
  },
  // === Aspetti Fiscali ===
  {
    categoria: "Aspetti Fiscali",
    domanda: "La rivalutazione monetaria è tassata?",
    risposta: "Secondo Cass. ord. 24760/2010, gli interessi legali e la rivalutazione su crediti da lavoro corrisposte al dipendente sono tassati secondo il principio di cassa, cioè nel momento in cui vengono effettivamente percepiti. La rivalutazione dei crediti di lavoro è soggetta a tassazione separata come reddito da lavoro dipendente. Per l'assegno di mantenimento, la rivalutazione ISTAT non costituisce reddito autonomo ma è parte integrante dell'assegno.",
    fonti: [],
  },
  // === Novità ===
  {
    categoria: "Novità 2026",
    domanda: "Qual è il tasso di interesse legale nel 2026?",
    risposta: "Dal 1° gennaio 2026, il tasso di interesse legale è pari all'1,60% in ragione d'anno, stabilito con DM Economia 10 dicembre 2025, pubblicato in G.U. n. 289 del 13 dicembre 2025. Si tratta di una riduzione rispetto al 2,00% del 2025 e al 2,50% del 2024. Il tasso è determinato annualmente dal Ministero dell'Economia ai sensi dell'art. 1284, comma 1, c.c.",
    fonti: [
      { label: "Art. 1284 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284" },
    ],
  },
  {
    categoria: "Novità 2026",
    domanda: "Cosa cambia con la nuova base ISTAT 2025=100?",
    risposta: "Dal gennaio 2026, gli indici ISTAT FOI sono espressi nella nuova base 2025=100, sostituendo la precedente base 2015=100. Il coefficiente di raccordo tra le due basi è 1,214. Questo significa che per rivalutare somme tra periodi che attraversano il cambio di base, è necessario applicare questo coefficiente nella formula di calcolo. L'ISTAT pubblica le tabelle di raccordo sul proprio sito.",
    fonti: [
      { label: "ISTAT – Rivalutazioni", url: "https://www.istat.it/dati/calcolatori/rivalutazioni/" },
    ],
  },
  {
    categoria: "Novità 2026",
    domanda: "Qual è l'ultimo indice FOI disponibile?",
    risposta: "L'ultimo indice FOI pubblicato dall'ISTAT è quello di febbraio 2026, pari a 100,9 (base 2025=100). La variazione rispetto al mese precedente è stata del +0,5%, mentre quella rispetto allo stesso mese dell'anno precedente è del +1,1%. L'indice viene pubblicato mensilmente sulla Gazzetta Ufficiale entro il mese successivo a quello di riferimento.",
    fonti: [
      { label: "ISTAT – Ultimo indice", url: "https://www.istat.it/notizia/indice-dei-prezzi-per-le-rivalutazioni-monetarie/" },
    ],
  },
];
