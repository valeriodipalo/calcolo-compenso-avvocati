import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  /* ─── Calcolo e Computo ─── */
  {
    domanda: "Come si calcolano i termini processuali civili?",
    risposta: "Il calcolo dei termini processuali civili è disciplinato dall'art. 155 c.p.c. La regola fondamentale è che il giorno iniziale (dies a quo) non si computa nel calcolo del termine, che decorre quindi dal giorno successivo (comma 1). I giorni festivi intermedi si computano normalmente nel conteggio (comma 3). Se il giorno di scadenza cade in un giorno festivo, il termine è prorogato di diritto al primo giorno seguente non festivo (comma 4). Questa disciplina si applica a tutti i termini processuali, salvo che la legge disponga diversamente.",
    categoria: "Calcolo e Computo",
    fonti: [{ label: "Art. 155 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" }],
  },
  {
    domanda: "Cosa significa \"dies a quo non computatur\"?",
    risposta: "Il principio dies a quo non computatur significa che il giorno iniziale da cui decorre il termine non viene conteggiato nel computo. Il calcolo parte quindi dal giorno immediatamente successivo all'evento che fa scattare il termine (ad esempio, la notificazione di un atto o la pubblicazione di una sentenza). Questo principio è codificato nell'art. 155, comma 1, c.p.c. ed è di applicazione generale a tutti i termini processuali civili, sia a giorni sia a mesi.",
    categoria: "Calcolo e Computo",
    fonti: [{ label: "Art. 155 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" }],
  },
  {
    domanda: "Come si calcolano i termini a mesi?",
    risposta: "I termini a mesi si calcolano secondo il calendario comune (art. 155, comma 2, c.p.c.), con il criterio cosiddetto ex nominatione dierum: si incrementa il numero di mesi mantenendo fisso il giorno. Se nel mese di scadenza il giorno corrispondente non esiste, il termine scade l'ultimo giorno del mese. Ad esempio, un termine di 6 mesi che decorre dal 31 agosto scadrà il 28 febbraio (o il 29 in anno bisestile). La Corte di Cassazione ha confermato questo orientamento con le pronunce n. 13556/2002 e n. 27327/2018.",
    categoria: "Calcolo e Computo",
    fonti: [{ label: "Art. 155 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" }],
  },
  {
    domanda: "Come si calcolano i termini dell'art. 190 c.p.c.?",
    risposta: "L'art. 190 c.p.c. stabilisce i termini per il deposito degli scritti difensivi finali nella fase decisoria. Le comparse conclusionali devono essere depositate entro 40 giorni prima dell'udienza di precisazione delle conclusioni, le memorie di replica entro 20 giorni prima della stessa udienza, e le eventuali memorie di trattazione scritta entro 10 giorni prima dell'udienza. Trattandosi di termini calcolati a ritroso, si parte dalla data dell'udienza e si conta all'indietro, escludendo il dies a quo.",
    categoria: "Calcolo e Computo",
    fonti: [{ label: "Art. 190 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art190" }],
  },
  {
    domanda: "Cosa sono i termini liberi?",
    risposta: "I termini liberi (o termini dilatori) sono quelli in cui non si computano né il giorno iniziale (dies a quo) né il giorno finale (dies ad quem). Questo comporta che il periodo effettivo a disposizione è maggiore rispetto al numero di giorni indicato dalla legge. I termini liberi sono tipici dei termini a comparire: ad esempio, l'art. 163-bis c.p.c. prevede un termine libero di comparizione non inferiore a 120 giorni tra la notificazione della citazione e l'udienza. La ratio è garantire al convenuto un periodo pieno per preparare la propria difesa.",
    categoria: "Calcolo e Computo",
    fonti: [{ label: "Art. 163-bis c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art163bis" }],
  },

  /* ─── Scadenze e Festivi ─── */
  {
    domanda: "I termini processuali civili possono scadere di sabato?",
    risposta: "No. Dal 1° marzo 2006, il comma 5 dell'art. 155 c.p.c., introdotto dalla L. 263/2005, stabilisce che la scadenza di un termine che cada nella giornata del sabato è prorogata di diritto al primo giorno seguente non festivo, quindi al lunedì. Questa regola si applica a tutti i termini processuali relativi ad atti da compiersi fuori udienza, come il deposito di comparse, memorie e atti introduttivi. Non si applica invece ai termini per atti da compiere in udienza, che restano vincolati alla data fissata dal giudice.",
    categoria: "Scadenze e Festivi",
    fonti: [{ label: "Art. 155 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" }],
  },
  {
    domanda: "Quali sono i giorni festivi che influenzano i termini processuali?",
    risposta: "L'elenco dei giorni festivi a rilevanza processuale è stabilito dalla L. 260/1949 e successive modifiche. Sono festivi: tutte le domeniche, il 1° gennaio, il 6 gennaio (Epifania), il lunedì dell'Angelo (Pasquetta), il 25 aprile, il 1° maggio, il 2 giugno, il 15 agosto, il 1° novembre, l'8 dicembre, il 25 e 26 dicembre. A questi si aggiunge la festa del Santo Patrono del comune in cui ha sede l'ufficio giudiziario. Se la scadenza di un termine cade in uno di questi giorni, opera la proroga automatica al primo giorno non festivo successivo.",
    categoria: "Scadenze e Festivi",
    fonti: [{ label: "L. 260/1949", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1949-05-27;260" }],
  },
  {
    domanda: "Se la scadenza cade di venerdì festivo, il termine slitta a sabato o a lunedì?",
    risposta: "Il termine slitta direttamente a lunedì, per effetto della cosiddetta \"proroga a cascata\". Se la scadenza cade di venerdì festivo, l'art. 155, comma 4, c.p.c. proroga il termine al primo giorno non festivo, cioè il sabato. Tuttavia, il comma 5 dello stesso articolo equipara il sabato ai giorni festivi ai fini della scadenza dei termini, quindi il termine si proroga ulteriormente alla domenica. Essendo anche la domenica festiva, la scadenza finale è il lunedì successivo. Questa interpretazione è ormai pacifica in giurisprudenza.",
    categoria: "Scadenze e Festivi",
    fonti: [{ label: "Art. 155 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" }],
  },
  {
    domanda: "I giorni festivi si contano nel termine processuale?",
    risposta: "Sì, i giorni festivi intermedi si computano sempre nel calcolo del termine processuale. L'art. 155, comma 3, c.p.c. stabilisce espressamente che i giorni festivi si computano nel termine. La regola della proroga opera esclusivamente quando la scadenza finale del termine cade in un giorno festivo (comma 4) o di sabato (comma 5): in tal caso, e solo in tal caso, il termine è prorogato al primo giorno non festivo successivo. Non bisogna quindi confondere il computo dei giorni intermedi con la disciplina della scadenza.",
    categoria: "Scadenze e Festivi",
    fonti: [{ label: "Art. 155 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" }],
  },
  {
    domanda: "Qual è la differenza tra termine perentorio e termine ordinatorio?",
    risposta: "Il termine perentorio è quello la cui inosservanza determina la decadenza dal potere di compiere l'atto processuale, con effetti irreversibili (art. 152, comma 1, c.p.c.). I termini perentori possono essere stabiliti solo dalla legge, mai dal giudice. Il termine ordinatorio, invece, è prorogabile dal giudice per giusta causa, su istanza di parte, prima della sua scadenza (art. 154 c.p.c.). In mancanza di diversa qualificazione legislativa, il termine si presume ordinatorio. La distinzione è fondamentale perché il mancato rispetto di un termine perentorio comporta la perdita definitiva della facoltà processuale.",
    categoria: "Scadenze e Festivi",
    fonti: [{ label: "Art. 152 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art152" }],
  },

  /* ─── Sospensione Feriale ─── */
  {
    domanda: "Quando si applica la sospensione feriale dei termini?",
    risposta: "La sospensione feriale dei termini processuali opera dal 1° al 31 agosto di ogni anno, ai sensi della L. 742/1969 come modificata dal D.L. 132/2014, convertito in L. 162/2014. Durante questo periodo il decorso dei termini processuali è sospeso: i giorni compresi tra il 1° e il 31 agosto non si contano ai fini del calcolo del termine. La sospensione si applica a tutti i termini processuali relativi alle giurisdizioni ordinarie e amministrative, inclusi i termini per il deposito di atti, memorie e per la proposizione di impugnazioni.",
    categoria: "Sospensione Feriale",
    fonti: [{ label: "L. 742/1969", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742" }],
  },
  {
    domanda: "La sospensione feriale è di 30 o 31 giorni?",
    risposta: "La sospensione feriale è di 31 giorni, dal 1° al 31 agosto inclusi. Prima della riforma introdotta dal D.L. 132/2014 (in vigore dal 2015), la sospensione era di 46 giorni, dal 1° agosto al 15 settembre. La riduzione del periodo di sospensione è stata voluta dal legislatore per accelerare i tempi della giustizia civile. È importante ricordare che tutti e 31 i giorni di agosto sono sospesi, quindi un termine che scadrebbe durante questo periodo viene prorogato di conseguenza.",
    categoria: "Sospensione Feriale",
    fonti: [{ label: "D.L. 132/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132" }],
  },
  {
    domanda: "Quando NON si applica la sospensione feriale dei termini?",
    risposta: "La sospensione feriale non si applica alle cause relative ad alimenti, ai procedimenti cautelari, ai procedimenti per convalida di sfratto, alle opposizioni all'esecuzione, alle controversie di lavoro e previdenza, ai procedimenti in camera di consiglio e, in generale, a tutte le cause rispetto alle quali la ritardata trattazione potrebbe produrre grave pregiudizio alle parti (art. 3 L. 742/1969, art. 92 Ord. Giud.). In ambito penale, la sospensione si applica solo ai termini delle impugnazioni. Il giudice può dichiarare l'urgenza della causa, escludendo la sospensione caso per caso.",
    categoria: "Sospensione Feriale",
    fonti: [{ label: "L. 742/1969 art. 3", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742~art3" }],
  },
  {
    domanda: "Come si calcola un termine con la sospensione feriale?",
    risposta: "Si conta il termine normalmente ma si \"congelano\" i giorni che cadono nel periodo 1°-31 agosto. Esempio pratico: un termine di 30 giorni che decorre dal 20 luglio. Si contano 11 giorni da luglio (dal 21 al 31), poi il termine si sospende dal 1° al 31 agosto (19 giorni residui da calcolare). Il conteggio riprende il 1° settembre e il termine scade il 19 settembre. In pratica, i 31 giorni di agosto vengono \"saltati\" e il termine si allunga di conseguenza. Lo stesso meccanismo si applica se il termine inizia a decorrere durante il periodo di sospensione: il computo parte dal 1° settembre.",
    categoria: "Sospensione Feriale",
    fonti: [{ label: "L. 742/1969", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742" }],
  },

  /* ─── Riforma Cartabia ─── */
  {
    domanda: "Cosa cambia con la riforma Cartabia per i termini processuali?",
    risposta: "La riforma Cartabia (D.Lgs. 149/2022), in vigore dal 28 febbraio 2023, ha introdotto modifiche significative ai termini del processo civile di cognizione. Il termine di comparizione è stato portato a 120 giorni liberi (art. 163-bis c.p.c.), il termine per la costituzione del convenuto a 70 giorni prima dell'udienza (art. 166 c.p.c.) e sono stati introdotti i nuovi termini dell'art. 171-ter c.p.c. per le memorie integrative. La riforma ha inoltre ridisegnato la fase di trattazione, con termini precisi per le attività istruttorie e difensive.",
    categoria: "Riforma Cartabia",
    fonti: [{ label: "D.Lgs. 149/2022", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149" }],
  },
  {
    domanda: "Quali sono i termini dell'art. 171-ter c.p.c.?",
    risposta: "L'art. 171-ter c.p.c., introdotto dalla riforma Cartabia, prevede tre termini per il deposito di memorie integrative prima dell'udienza di trattazione. La prima memoria (per proposizione di domande, eccezioni e indicazione di mezzi di prova) va depositata almeno 40 giorni prima dell'udienza. La seconda memoria (per replica, eccezioni e indicazione di prova contraria) almeno 20 giorni prima. La terza memoria (per sole indicazioni di prova contraria) almeno 10 giorni prima dell'udienza. Questi termini sono perentori e si calcolano a ritroso dalla data dell'udienza.",
    categoria: "Riforma Cartabia",
    fonti: [{ label: "Art. 171-ter c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art171ter" }],
  },
  {
    domanda: "Come si calcola il termine per la costituzione del convenuto post-Cartabia?",
    risposta: "Dopo la riforma Cartabia, il convenuto deve costituirsi almeno 70 giorni prima dell'udienza indicata nell'atto di citazione (art. 166 c.p.c., come novellato dal D.Lgs. 149/2022). Il termine si calcola a ritroso: si parte dalla data dell'udienza, si esclude il dies a quo (il giorno dell'udienza stessa) e si contano 70 giorni all'indietro. La scadenza cade il settantesimo giorno prima dell'udienza. Se tale giorno cade di sabato o festivo, la scadenza si anticipa al giorno lavorativo precedente, trattandosi di un termine a ritroso.",
    categoria: "Riforma Cartabia",
    fonti: [{ label: "Art. 166 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art166" }],
  },
  {
    domanda: "Da quando si applicano i nuovi termini della riforma Cartabia?",
    risposta: "I nuovi termini processuali introdotti dalla riforma Cartabia si applicano ai procedimenti instaurati a partire dal 28 febbraio 2023, data di entrata in vigore del D.Lgs. 149/2022 (come stabilito dalla L. 197/2022, legge di bilancio 2023). Per i procedimenti pendenti a tale data, continuano ad applicarsi le disposizioni anteriori alla riforma. Il criterio di discrimine è la data di iscrizione a ruolo della causa: se anteriore al 28 febbraio 2023, si applicano i termini previgenti; se successiva, i nuovi termini Cartabia.",
    categoria: "Riforma Cartabia",
    fonti: [{ label: "D.Lgs. 149/2022", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149" }],
  },

  /* ─── Calcolo a Ritroso e Casi Particolari ─── */
  {
    domanda: "Come funziona il calcolo dei termini a ritroso?",
    risposta: "Il calcolo a ritroso si applica quando il termine è fissato rispetto a una data futura nota (tipicamente l'udienza). Si parte dalla data di riferimento, si esclude il dies a quo e si contano i giorni all'indietro fino al raggiungimento del numero previsto. Ad esempio, per un termine di 70 giorni prima dell'udienza del 15 aprile, si esclude il 15 aprile e si contano 70 giorni a ritroso. La particolarità del calcolo a ritroso è che la proroga per sabato e festivi opera in senso anticipatorio: se la scadenza cade di sabato o festivo, il termine si anticipa al giorno lavorativo precedente.",
    categoria: "Calcolo a Ritroso e Casi Particolari",
    fonti: [{ label: "Art. 155 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" }],
  },
  {
    domanda: "Il sabato conta nel calcolo a ritroso?",
    risposta: "Il sabato si computa normalmente come giorno intermedio nel calcolo del termine, ma se la scadenza finale cade di sabato, il termine viene anticipato al venerdì precedente (non prorogato al lunedì, come nel calcolo in avanti). Questo orientamento è stato confermato dalla Corte di Cassazione con le ordinanze n. 21335/2017 e n. 26900/2020, che hanno equiparato il sabato ai giorni festivi anche nel calcolo a ritroso, applicando il principio dell'art. 155, comma 5, c.p.c. in modo speculare. La ratio è garantire alla parte il periodo pieno di termine previsto dalla legge.",
    categoria: "Calcolo a Ritroso e Casi Particolari",
    fonti: [{ label: "Art. 155, c. 5, c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" }],
  },
  {
    domanda: "Cosa succede se non rispetto un termine perentorio?",
    risposta: "Il mancato rispetto di un termine perentorio determina la decadenza dal potere di compiere l'atto processuale, con effetti irreversibili. La parte perde definitivamente la facoltà di proporre l'impugnazione, depositare la memoria o compiere l'attività processuale prevista. L'unica eccezione è la rimessione in termini prevista dall'art. 153, comma 2, c.p.c.: la parte che dimostri di essere decaduta per causa ad essa non imputabile può chiedere al giudice di essere rimessa in termini. L'istanza deve essere proposta entro un termine ragionevole e la causa non imputabile deve essere provata rigorosamente.",
    categoria: "Calcolo a Ritroso e Casi Particolari",
    fonti: [{ label: "Art. 153 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art153" }],
  },
  {
    domanda: "La sospensione feriale si applica nel processo tributario?",
    risposta: "Sì, la sospensione feriale dei termini si applica anche nel processo tributario, dal 1° al 31 agosto, come previsto dall'art. 1 della L. 742/1969 e confermato dalla giurisprudenza consolidata. A differenza del processo civile, nel processo tributario la sospensione opera senza le eccezioni previste per le cause urgenti: non esistono procedimenti tributari esclusi dalla sospensione feriale. L'art. 22 del D.Lgs. 546/1992 disciplina i termini per la costituzione in giudizio, e tali termini sono soggetti alla sospensione feriale di agosto senza deroghe.",
    categoria: "Calcolo a Ritroso e Casi Particolari",
    fonti: [
      { label: "D.Lgs. 546/1992 art. 22", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546~art22" },
      { label: "L. 742/1969", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742" },
    ],
  },
];
