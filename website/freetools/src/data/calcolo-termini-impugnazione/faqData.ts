import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  /* ─── Termini generali ─── */
  {
    domanda: "Quali sono i termini per l'appello civile?",
    risposta: "Il termine breve per proporre appello civile è di 30 giorni dalla notificazione della sentenza al difensore (art. 325, c. 1, CPC). Se la sentenza non viene notificata, il termine lungo è di 6 mesi dalla data di pubblicazione (deposito in cancelleria) della sentenza (art. 327 CPC). I termini sono perentori: il loro decorso comporta il passaggio in giudicato della sentenza.",
    categoria: "Termini",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art325" }],
  },
  {
    domanda: "Quanto tempo ho per fare ricorso in Cassazione?",
    risposta: "Il termine breve per il ricorso per cassazione è di 60 giorni dalla notificazione della sentenza (art. 325, c. 2, CPC). In assenza di notifica, il termine lungo è di 6 mesi dalla pubblicazione della sentenza (art. 327 CPC). Il termine è identico per il processo civile, amministrativo e tributario.",
    categoria: "Termini",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art325" }],
  },
  {
    domanda: "Qual è la differenza tra termine breve e termine lungo di impugnazione?",
    risposta: "Il termine breve decorre dalla notificazione della sentenza ed è di 30 giorni per l'appello e di 60 giorni per la cassazione. Il termine lungo, invece, decorre dalla pubblicazione (deposito) della sentenza, indipendentemente dalla notifica, ed è di 6 mesi. Il termine lungo rappresenta il limite massimo oltre il quale la sentenza passa comunque in giudicato, anche senza notifica.",
    categoria: "Termini",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art327" }],
  },
  {
    domanda: "Quali sono i termini per l'appello civile dopo la riforma Cartabia?",
    risposta: "La riforma Cartabia (D.Lgs. 149/2022) non ha modificato la durata dei termini di impugnazione, che restano di 30 giorni (breve) e 6 mesi (lungo). La novità principale riguarda la decorrenza del termine breve: ora decorre, per entrambe le parti, dal perfezionamento della notificazione nei confronti del destinatario, eliminando la precedente asimmetria tra notificante e destinatario.",
    categoria: "Termini",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149" }],
  },

  /* ─── Calcolo ─── */
  {
    domanda: "Come si calcolano i termini di impugnazione a giorni?",
    risposta: "Il calcolo avviene con il metodo ex numeratio dierum (art. 155 CPC): si esclude il giorno iniziale (dies a quo) e si contano i giorni successivi fino al raggiungimento del termine. Se il giorno di scadenza cade di sabato, domenica o festivo, il termine è prorogato al primo giorno non festivo successivo (art. 155, cc. 4-5, CPC).",
    categoria: "Calcolo",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" }],
  },
  {
    domanda: "Come si calcolano i termini di impugnazione a mesi?",
    risposta: "Il calcolo a mesi avviene con il criterio ex nominatione dierum: si incrementa il numero di mesi mantenendo fisso il giorno. Se nel mese finale il giorno corrispondente non esiste, si assume l'ultimo giorno del mese. Ad esempio, 6 mesi dal 31 agosto portano al 28 (o 29) febbraio. La proroga per sabato e festivi si applica anche alla scadenza a mesi.",
    categoria: "Calcolo",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" }],
  },

  /* ─── Sospensione ─── */
  {
    domanda: "Come funziona la sospensione feriale dei termini?",
    risposta: "I termini processuali sono sospesi dal 1° al 31 agosto di ogni anno (L. 742/1969, come modificata dal D.L. 132/2014). Durante questo periodo, il decorso del termine si arresta e riprende dal 1° settembre. Se il termine inizia a decorrere durante il periodo di sospensione, il suo decorso è differito al 1° settembre. La sospensione si applica alle giurisdizioni ordinarie e amministrative.",
    categoria: "Sospensione",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742" }],
  },
  {
    domanda: "Ci sono casi in cui la sospensione feriale non si applica?",
    risposta: "La sospensione feriale non si applica alle cause relative ad alimenti, ai procedimenti cautelari, di sfratto e di opposizione all'esecuzione, ai fallimenti e in genere alle cause rispetto alle quali la ritardata trattazione potrebbe produrre grave pregiudizio alle parti (art. 92 R.D. 12/1941). In ambito penale, la sospensione si applica solo ai termini stabiliti dal codice per le impugnazioni.",
    categoria: "Sospensione",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742" }],
  },
  {
    domanda: "Cosa succede se il termine scade di sabato o festivo?",
    risposta: "Se il giorno di scadenza è festivo, la scadenza è prorogata di diritto al primo giorno seguente non festivo (art. 155, c. 4, CPC). La stessa proroga si applica ai termini che scadono nella giornata del sabato (art. 155, c. 5, CPC, introdotto dalla L. 263/2005). Quest'ultima regola si applica ai procedimenti instaurati dopo il 1° marzo 2006.",
    categoria: "Sospensione",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" }],
  },

  /* ─── Processo amministrativo ─── */
  {
    domanda: "Quali sono i termini per l'appello al Consiglio di Stato?",
    risposta: "L'appello al Consiglio di Stato deve essere proposto entro 60 giorni dalla notificazione della sentenza del TAR (termine breve) oppure entro 6 mesi dalla sua pubblicazione (termine lungo), ai sensi dell'art. 92 del Codice del processo amministrativo (D.Lgs. 104/2010). I termini si applicano anche al ricorso per cassazione per motivi di giurisdizione.",
    categoria: "Amministrativo",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-07-02;104~art92" }],
  },

  /* ─── Processo tributario ─── */
  {
    domanda: "Entro quando si può impugnare una sentenza tributaria?",
    risposta: "Nel processo tributario, sia il ricorso in appello alla Corte di Giustizia Tributaria di secondo grado sia il ricorso per cassazione vanno proposti entro 60 giorni dalla notificazione della sentenza (termine breve) oppure entro 6 mesi dalla sua pubblicazione (termine lungo). I riferimenti normativi sono gli artt. 38 e 51 del D.Lgs. 546/1992.",
    categoria: "Tributario",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546~art38" }],
  },

  /* ─── Impugnazioni speciali ─── */
  {
    domanda: "Quali sono i termini per impugnare un licenziamento?",
    risposta: "L'impugnazione del licenziamento prevede un doppio termine: 60 giorni dalla ricezione della comunicazione del licenziamento per l'impugnazione stragiudiziale (raccomandata o PEC al datore di lavoro), seguiti da 180 giorni per il deposito del ricorso giudiziale in tribunale (art. 6, L. 604/1966, come modificato dalla L. 183/2010). L'impugnazione stragiudiziale è condizione di procedibilità.",
    categoria: "Speciali",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1966-07-15;604~art6" }],
  },
  {
    domanda: "Quali sono i termini per impugnare un decreto ingiuntivo?",
    risposta: "L'opposizione a decreto ingiuntivo deve essere proposta entro 40 giorni dalla notificazione del decreto (art. 641 CPC). Il termine è perentorio e soggetto a sospensione feriale. Se l'intimato risiede in un altro Stato UE, il termine è di 50 giorni. Il giudice può abbreviare il termine fino a 10 giorni per giusti motivi. Dopo la scadenza, il decreto diventa definitivo ed esecutivo.",
    categoria: "Speciali",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art641" }],
  },
  {
    domanda: "Entro quando si impugna una delibera condominiale?",
    risposta: "Le delibere dell'assemblea condominiale contrarie alla legge o al regolamento possono essere impugnate entro 30 giorni (art. 1137, c. 2, Codice Civile). Il termine decorre dalla data della delibera per i condomini presenti (dissenzienti o astenuti) e dalla data di comunicazione per gli assenti. Le delibere nulle, invece, possono essere impugnate senza limiti di tempo.",
    categoria: "Speciali",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1137" }],
  },
  {
    domanda: "Come si impugna una cartella esattoriale?",
    risposta: "La cartella esattoriale può essere impugnata entro 60 giorni dalla notificazione mediante ricorso alla Corte di Giustizia Tributaria di primo grado, se si contesta il tributo sottostante (D.Lgs. 546/1992). Se si contesta la procedura esecutiva (vizi propri della cartella, mancata notifica dell'atto presupposto), il termine è di 20 giorni per l'opposizione agli atti esecutivi (art. 617 CPC).",
    categoria: "Speciali",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546" }],
  },
  {
    domanda: "Entro quanto tempo si può impugnare un testamento?",
    risposta: "I termini dipendono dal tipo di vizio: per l'azione di annullamento (difetti di forma, incapacità del testatore, vizi della volontà) il termine è di 5 anni dal giorno in cui è stata data esecuzione alle disposizioni testamentarie (art. 606 c.c.). Per l'azione di nullità (motivi illeciti, disposizioni impossibili), non esiste un termine di prescrizione specifico. Per l'azione di riduzione (lesione della legittima), il termine è di 10 anni dall'apertura della successione.",
    categoria: "Speciali",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art606" }],
  },

  /* ─── Passaggio in giudicato ─── */
  {
    domanda: "Quando una sentenza passa in giudicato?",
    risposta: "Una sentenza passa in giudicato formale quando sono decorsi tutti i termini per impugnarla senza che sia stata proposta impugnazione, oppure quando tutti i gradi di giudizio sono stati esauriti (art. 324 CPC). In pratica, se la sentenza non viene notificata, il passaggio in giudicato avviene 6 mesi dopo la pubblicazione; se viene notificata, dopo 30 giorni (appello) o 60 giorni (cassazione).",
    categoria: "Giudicato",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art324" }],
  },

  /* ─── PEC e notifiche ─── */
  {
    domanda: "La notifica via PEC dopo le 21:00 è valida per il termine di impugnazione?",
    risposta: "La notifica via PEC eseguita dopo le ore 21:00 si perfeziona per il destinatario alle ore 7:00 del giorno successivo (art. 147 CPC, applicato alle notifiche telematiche). Per il notificante, invece, si perfeziona al momento della generazione della ricevuta di accettazione. Questa regola è particolarmente rilevante per il computo dei termini di impugnazione, dove un giorno di differenza può determinare l'inammissibilità.",
    categoria: "Procedura",
    fonti: [{ label: "Normattiva.it", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art147" }],
  },
];
