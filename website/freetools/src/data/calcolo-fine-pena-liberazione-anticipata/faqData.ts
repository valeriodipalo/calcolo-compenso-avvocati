// FAQ — Calcolo Fine Pena con Liberazione Anticipata
// Domande basate su PAA Google + long-tail keyword research + casistica pratica

import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // ============================================================
  // CATEGORIA: Calcolo e meccanica
  // ============================================================
  {
    categoria: "Calcolo",
    domanda: "Come si calcola il fine pena con la liberazione anticipata?",
    risposta:
      "Si sottraggono 45 giorni di pena per ogni semestre di pena scontata in modo positivo. Per una pena di 3 anni (6 semestri) si ottiene una detrazione totale di 270 giorni, pari a circa 9 mesi. Il calcolo parte dalla data di inizio della detenzione e considera ogni periodo di 6 mesi in cui il condannato ha dato prova di partecipazione all'opera di rieducazione. La detrazione si applica anche al periodo trascorso in custodia cautelare e in detenzione domiciliare (art. 54 comma 1 O.P.).",
    fonti: [
      { label: "Art. 54 O.P. — L. 354/1975", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art54" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Qual è la formula per calcolare lo sconto di pena?",
    risposta:
      "Numero di semestri completi di pena scontata × 45 giorni = totale detrazione (LA ordinaria). Esempio: 5 anni di pena equivalgono a 10 semestri × 45 = 450 giorni di sconto teorico, circa 15 mesi. Per i semestri rientranti nella finestra 23/12/2013 — 23/12/2015 si applica invece la detrazione speciale di 75 giorni (con retroattività al 1° gennaio 2010 per chi soddisfaceva i requisiti). La detrazione speciale non si applica ai condannati per reati ostativi ex art. 4-bis O.P.",
    fonti: [
      { label: "Art. 54 O.P.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art54" },
      { label: "Art. 4 D.L. 146/2013", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2013-12-23;146~art4" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Come si contano i semestri di pena scontata?",
    risposta:
      "I semestri si computano dalla data di inizio della detenzione, non dall'anno solare. Sei mesi pieni di pena scontata equivalgono a un semestre. Se ci sono interruzioni della pena (per esempio per ricovero in luogo esterno di cura per infermità psichica ex art. 148 c.p.), il semestre può ripartire da zero in modalità 'solo semestri completi' oppure le frazioni si sommano fino al raggiungimento dei 6 mesi in modalità 'cumulo frazioni'. La giurisprudenza della Cassazione ammette entrambe le modalità a seconda del caso concreto.",
  },
  {
    categoria: "Calcolo",
    domanda: "Quanti giorni di sconto pena si ottengono ogni 6 mesi?",
    risposta:
      "45 giorni per ogni semestre di pena scontata in regime di liberazione anticipata ordinaria. Per i semestri rientranti nel biennio 23/12/2013 — 23/12/2015 (con retroattività al 1° gennaio 2010 per chi aveva continuato il percorso rieducativo) si applicava la detrazione speciale di 75 giorni introdotta dall'art. 4 del D.L. 146/2013, oggi non più in vigore come regime ordinario nel 2026.",
    fonti: [
      { label: "Art. 54 O.P.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art54" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Cos'è il fine pena virtuale?",
    risposta:
      "È la data teorica di fine pena calcolata come se tutti i semestri futuri venissero riconosciuti per la liberazione anticipata. Dal 5 luglio 2024 (D.L. 92/2024) è obbligatorio indicare il fine pena virtuale nell'ordine di esecuzione (art. 656 c.p.p. comma 10-bis), distinguendolo chiaramente dalla pena da espiare senza detrazioni. La data effettiva di scarcerazione, però, dipende dalla concessione concreta della LA semestre per semestre da parte del magistrato di sorveglianza.",
    fonti: [
      { label: "Art. 656 c.p.p.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:codice.procedura.penale:1988-09-22;447~art656" },
      { label: "D.L. 92/2024 art. 5", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2024-07-04;92~art5" },
    ],
  },

  // ============================================================
  // CATEGORIA: Definizione e ambito
  // ============================================================
  {
    categoria: "Definizione",
    domanda: "Cos'è la liberazione anticipata?",
    risposta:
      "È un beneficio penitenziario di natura premiale, disciplinato dall'art. 54 della Legge 354/1975 (Ordinamento Penitenziario), che riconosce al condannato a pena detentiva una detrazione di 45 giorni per ogni semestre di pena scontata in cui abbia dato prova di partecipazione all'opera di rieducazione. È uno strumento centrale del trattamento penitenziario, finalizzato al reinserimento sociale del condannato secondo il principio costituzionale di rieducazione della pena (art. 27 comma 3 Cost.). La Corte Costituzionale (sent. 201/2025) l'ha definita 'istituto chiave nel perseguimento della finalità rieducativa della pena'.",
    fonti: [
      { label: "Art. 54 O.P.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art54" },
      { label: "Corte Cost. 201/2025", url: "https://www.cortecostituzionale.it/scheda-pronuncia/2025/201" },
    ],
  },
  {
    categoria: "Definizione",
    domanda: "Cos'è l'art. 54 dell'Ordinamento Penitenziario?",
    risposta:
      "L'art. 54 della Legge 26 luglio 1975, n. 354 è la norma fondamentale che disciplina la liberazione anticipata. Prevede al comma 1 la detrazione di 45 giorni per ogni semestre di pena scontata. Al comma 3 disciplina la revoca del beneficio in caso di delitto non colposo commesso durante l'esecuzione. Al comma 4 stabilisce che la parte di pena detratta si considera scontata anche ai fini del computo per accedere a permessi premio, semilibertà e liberazione condizionale, applicandosi anche ai condannati all'ergastolo.",
    fonti: [
      { label: "Art. 54 O.P. — Normattiva", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art54" },
    ],
  },
  {
    categoria: "Definizione",
    domanda: "La liberazione anticipata speciale è ancora in vigore nel 2026?",
    risposta:
      "No, come regime ordinario. Il D.L. 146/2013 prevedeva un periodo di applicazione di due anni a partire dal 23 dicembre 2013, terminato il 23 dicembre 2015. Continua tuttavia ad applicarsi per il calcolo dei semestri rientranti nella finestra temporale 2010-2015, purché ricorrano i presupposti e il condannato non rientri nei reati ostativi ex art. 4-bis O.P. Nel 2026 la detrazione ordinaria di 45 giorni rappresenta quindi il regime applicabile a tutti i semestri scontati.",
    fonti: [
      { label: "Art. 4 D.L. 146/2013", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2013-12-23;146~art4" },
    ],
  },
  {
    categoria: "Definizione",
    domanda: "Qual è la differenza tra liberazione anticipata ordinaria e speciale?",
    risposta:
      "La liberazione anticipata ordinaria (art. 54 O.P.) prevede una detrazione di 45 giorni per ogni semestre di pena scontata ed è sempre in vigore. La liberazione anticipata speciale (art. 4 D.L. 146/2013) prevedeva invece 75 giorni per semestre ma era applicabile soltanto nel biennio 23/12/2013 — 23/12/2015, con retroattività al 1° gennaio 2010 per chi aveva continuato a dare prova di rieducazione. Dalla speciale erano esclusi i condannati per i reati di cui all'art. 4-bis O.P. Una sentenza della Cassazione (Sez. I, n. 356/2018) ha chiarito che i 75 giorni si applicavano automaticamente per i semestri ricompresi nel biennio.",
    fonti: [
      { label: "Cass. Sez. I 356/2018", url: "https://www.giurisprudenzapenale.com/2018/01/14/liberazione-anticipata-speciale-nei-2-anni-successivi-allentrata-in-vigore-del-d-l-146-2013-il-beneficio-comporta-anche-per-i-semestri-antecedenti-a-tale-data-una-detrazione-di-pena-pari-a-75-g/" },
    ],
  },

  // ============================================================
  // CATEGORIA: Periodi computabili
  // ============================================================
  {
    categoria: "Periodi conteggiabili",
    domanda: "La custodia cautelare conta per la liberazione anticipata?",
    risposta:
      "Sì. L'art. 54 comma 1 dell'Ordinamento Penitenziario lo prevede espressamente: 'a tal fine è valutato anche il periodo trascorso in stato di custodia cautelare o di detenzione domiciliare'. Il presofferto in carcere a titolo cautelare concorre quindi pienamente al computo dei semestri utili alla liberazione anticipata ordinaria. La medesima regola vale per gli arresti domiciliari disposti a titolo cautelare ex art. 284 c.p.p.",
    fonti: [
      { label: "Art. 54 c. 1 O.P.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art54" },
    ],
  },
  {
    categoria: "Periodi conteggiabili",
    domanda: "Gli arresti domiciliari valgono per il calcolo della LA?",
    risposta:
      "Sì, ai fini della liberazione anticipata ordinaria. Gli arresti domiciliari disposti a titolo cautelare costituiscono presofferto e si computano come periodo di pena scontata ai sensi dell'art. 54 comma 1 O.P. Per la liberazione anticipata speciale (75 giorni), invece, la Cassazione ha escluso l'incremento di 30 giorni per i periodi trascorsi in misure alternative alla detenzione.",
    fonti: [
      { label: "Art. 54 c. 1 O.P.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art54" },
    ],
  },
  {
    categoria: "Periodi conteggiabili",
    domanda: "La detenzione domiciliare conta per la liberazione anticipata?",
    risposta:
      "Sì, espressamente prevista dall'art. 54 comma 1 O.P. La detenzione domiciliare (sia quella ex art. 47-ter O.P. sia quella prevista dalla L. 199/2010 per l'esecuzione presso il domicilio delle pene non superiori a 18 mesi) si computa come pena scontata ai fini della LA ordinaria. La giurisprudenza ha invece escluso che l'incremento speciale di 30 giorni si applichi ai periodi trascorsi in detenzione domiciliare.",
    fonti: [
      { label: "Art. 47-ter O.P.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art47ter" },
    ],
  },
  {
    categoria: "Periodi conteggiabili",
    domanda: "L'affidamento in prova al servizio sociale conta?",
    risposta:
      "Sì, per la liberazione anticipata ordinaria: il periodo trascorso in affidamento in prova ex art. 47 O.P. concorre al computo dei semestri utili, purché vi sia stata partecipazione all'opera di rieducazione. La Cassazione (sent. n. 17095/2024) ha invece chiarito che l'incremento da 45 a 75 giorni della liberazione anticipata speciale non si applicava ai periodi trascorsi in affidamento in prova.",
    fonti: [
      { label: "Art. 47 O.P.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art47" },
    ],
  },

  // ============================================================
  // CATEGORIA: Procedura e revoca
  // ============================================================
  {
    categoria: "Procedura",
    domanda: "Chi calcola e decide sulla liberazione anticipata?",
    risposta:
      "Il magistrato di sorveglianza territorialmente competente (criterio: località dell'istituto detentivo del condannato). La concessione avviene con ordinanza emessa in camera di consiglio senza la presenza delle parti. Dopo la sentenza della Corte Costituzionale n. 201/2025 (29 dicembre 2025), il condannato può richiedere il beneficio semestre per semestre senza dover indicare uno specifico interesse, ripristinando il sistema previgente alla riforma D.L. 92/2024.",
    fonti: [
      { label: "Art. 69-bis O.P.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art69bis" },
      { label: "Corte Cost. 201/2025", url: "https://www.cortecostituzionale.it/scheda-pronuncia/2025/201" },
    ],
  },
  {
    categoria: "Procedura",
    domanda: "Come si richiede la liberazione anticipata?",
    risposta:
      "Con istanza scritta in carta semplice (senza marche da bollo) presentata al magistrato di sorveglianza territorialmente competente. L'istanza può essere depositata dal condannato in proprio oppure dal difensore di fiducia o d'ufficio. Va corredata della documentazione relativa alla condotta carceraria (relazione di sintesi della direzione dell'istituto, eventuali sanzioni disciplinari, partecipazione ad attività trattamentali). Post-D.L. 92/2024, è previsto anche l'accertamento d'ufficio del magistrato di sorveglianza nei 90 giorni antecedenti il fine pena.",
  },
  {
    categoria: "Procedura",
    domanda: "Quanto tempo ci vuole per la decisione del magistrato?",
    risposta:
      "Non vi è un termine perentorio: l'ordinanza è emessa in camera di consiglio senza presenza parti (art. 69-bis O.P.) e tipicamente la decisione interviene entro 3-6 mesi dall'istanza, con tempi che possono variare per carico dell'ufficio. Avverso l'ordinanza del magistrato di sorveglianza è ammesso reclamo al Tribunale di Sorveglianza entro 10 giorni dalla comunicazione o notificazione.",
    fonti: [
      { label: "Art. 69-bis O.P.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art69bis" },
    ],
  },
  {
    categoria: "Procedura",
    domanda: "La liberazione anticipata può essere revocata?",
    risposta:
      "Sì. L'art. 54 comma 3 O.P. prevede la revoca del beneficio in caso di condanna per delitto non colposo commesso nel corso dell'esecuzione successivamente alla concessione. La revoca comporta il ricalcolo della pena residua e l'aggiornamento dell'ordine di esecuzione da parte del PM. La revoca opera per il delitto commesso DOPO la concessione, non per quello posto a base della condanna in espiazione.",
    fonti: [
      { label: "Art. 54 c. 3 O.P.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art54" },
    ],
  },

  // ============================================================
  // CATEGORIA: Riforma 2024 e casi particolari
  // ============================================================
  {
    categoria: "Riforma 2024",
    domanda: "Cosa cambia con il D.L. 92/2024 (decreto carcere)?",
    risposta:
      "Il D.L. 4 luglio 2024 n. 92 (conv. L. 112/2024) ha introdotto tre novità principali: (1) accertamento d'ufficio del magistrato di sorveglianza nei 90 giorni antecedenti il fine pena (art. 54 c. 2-bis O.P.); (2) obbligo per il PM di indicare nell'ordine di esecuzione la pena con le detrazioni (fine pena virtuale, art. 656 c.p.p. c. 10-bis); (3) nuova disciplina delle comunicazioni. La sentenza Corte Costituzionale 201/2025 ha però dichiarato incostituzionale la parte che limitava l'istanza del condannato a uno specifico interesse, ripristinando il diritto di richiesta semestre per semestre.",
    fonti: [
      { label: "D.L. 92/2024 art. 5", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2024-07-04;92~art5" },
      { label: "Corte Cost. 201/2025", url: "https://www.cortecostituzionale.it/scheda-pronuncia/2025/201" },
    ],
  },
  {
    categoria: "Riforma 2024",
    domanda: "Quali reati sono esclusi dalla liberazione anticipata speciale?",
    risposta:
      "I condannati per i reati elencati dall'art. 4-bis O.P. sono esclusi dal beneficio speciale (75 giorni) ma restano ammessi a quello ordinario (45 giorni), salvo specifiche preclusioni. La lista 4-bis include: associazione di tipo mafioso (art. 416-bis c.p.), terrorismo ed eversione, sequestro di persona a scopo di estorsione, tratta di persone, riduzione in schiavitù, violenza sessuale aggravata, atti sessuali con minorenne, prostituzione e pornografia minorile, traffico di stupefacenti aggravato. La Corte Costituzionale (sent. 24/2025) ha confermato la costituzionalità di questa esclusione.",
    fonti: [
      { label: "Art. 4-bis O.P.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art4bis" },
    ],
  },
  {
    categoria: "Riforma 2024",
    domanda: "L'ergastolano può ottenere la liberazione anticipata?",
    risposta:
      "Sì. L'art. 54 comma 4 ultima frase dell'Ordinamento Penitenziario prevede espressamente l'applicabilità anche ai condannati all'ergastolo. La liberazione anticipata, pur non potendo ridurre la durata della pena (perpetua per definizione), accelera la soglia di accesso alla liberazione condizionale ex art. 176 c.p., normalmente fissata a 26 anni di effettiva espiazione. Tutti i giorni di LA maturati si considerano scontati ai fini del computo dei 26 anni.",
    fonti: [
      { label: "Art. 54 c. 4 O.P.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art54" },
      { label: "Art. 176 c.p.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:codice.penale:1930-10-19;1398~art176" },
    ],
  },
  {
    categoria: "Riforma 2024",
    domanda: "Cosa succede se durante la pena viene disposto un ricovero o una sospensione?",
    risposta:
      "I periodi di interruzione della pena (sospensione per gravi motivi di salute ex art. 147 c.p., ricovero per infermità psichica ex art. 148 c.p., differimento per gravidanza/maternità ex art. 146 c.p., sospensione per affidamento terapeutico ex art. 94 DPR 309/1990 con sospensione, liberazione condizionale in prova, sospensione decisa dal giudice dell'esecuzione, estradizione) NON si computano ai fini della liberazione anticipata. A seconda della modalità di calcolo scelta dal magistrato, l'interruzione può azzerare il semestre in corso (modalità 'solo semestri completi') oppure le frazioni di pena residue si sommano tra loro fino al raggiungimento dei 6 mesi.",
    fonti: [
      { label: "Art. 147 c.p.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:codice.penale:1930-10-19;1398~art147" },
    ],
  },
];
