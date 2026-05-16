import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  /* ─── Termini e scadenze ─── */
  {
    categoria: "Termini e scadenze",
    domanda: "Quanti giorni si hanno per fare opposizione a un decreto ingiuntivo?",
    risposta:
      "Il termine ordinario è di 40 giorni dalla notifica del decreto ingiuntivo (art. 641 c.p.c.). Il termine è perentorio: se non viene rispettato, il decreto diventa esecutivo ex art. 647 c.p.c. Per il debitore residente in altro Stato dell'Unione Europea il termine è di 50 giorni (riducibile fino a 20); per i residenti in Stati extra-UE è di 60 giorni (tra 30 e 120). Il giudice può inoltre, per giusti motivi indicati nel decreto, ridurlo fino a 10 giorni o aumentarlo fino a 60.",
    fonti: [
      { label: "Art. 641 c.p.c. su Normattiva", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art641" },
    ],
  },
  {
    categoria: "Termini e scadenze",
    domanda: "Come si calcolano i 40 giorni per l'opposizione?",
    risposta:
      "Si applica l'art. 155 c.p.c.: si esclude il giorno della notifica (dies a quo) e si conta dal giorno successivo per 40 giorni. Si includono i giorni festivi nel computo, ma se la scadenza cade di sabato, domenica o in un giorno festivo, la scadenza viene prorogata al primo giorno non festivo successivo (art. 155, c. 4-5, c.p.c.). Per le controversie civili ordinarie si applica anche la sospensione feriale dal 1° al 31 agosto (L. 742/1969): i giorni di agosto non si computano nel termine.",
    fonti: [
      { label: "Art. 155 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" },
      { label: "L. 742/1969", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742" },
    ],
  },
  {
    categoria: "Termini e scadenze",
    domanda: "La sospensione feriale di agosto si applica all'opposizione a decreto ingiuntivo?",
    risposta:
      "Sì, la sospensione feriale dal 1° al 31 agosto (L. 742/1969) si applica al termine di 40 giorni per le controversie civili ordinarie. Fa eccezione il rito del lavoro: le opposizioni a decreti ingiuntivi in materia di lavoro, previdenza obbligatoria e pubblico impiego privatizzato sono escluse dalla sospensione feriale e il termine continua a decorrere anche in agosto. Se il termine cade interamente in agosto in una causa di lavoro, l'opposizione va proposta comunque entro la scadenza naturale.",
    fonti: [
      { label: "L. 742/1969 (testo)", url: "https://www.bosettiegatti.eu/info/norme/statali/1969_0742.htm" },
    ],
  },
  {
    categoria: "Termini e scadenze",
    domanda: "Cosa succede se notifico l'opposizione oltre i 40 giorni?",
    risposta:
      "Il termine di 40 giorni è perentorio: la sua mancata osservanza comporta la decadenza dall'opposizione. Su istanza del creditore, il giudice che ha emesso il decreto lo dichiara esecutivo ex art. 647 c.p.c., con efficacia di titolo esecutivo definitivo. L'unico rimedio residuo è l'opposizione tardiva ex art. 650 c.p.c., ammessa solo in presenza di irregolarità nella notificazione, caso fortuito o forza maggiore che abbiano impedito la tempestiva conoscenza del decreto, e comunque entro 10 giorni dal primo atto di esecuzione.",
    fonti: [
      { label: "Art. 647 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art647" },
      { label: "Art. 650 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art650" },
    ],
  },
  {
    categoria: "Termini e scadenze",
    domanda: "Il termine di 40 giorni decorre dalla notifica o dall'emissione del DI?",
    risposta:
      "Il termine decorre dalla notifica del decreto ingiuntivo all'ingiunto, non dalla data di emissione. La Cassazione (sent. n. 19814 del 17 luglio 2025) ha ribadito che se la prima notifica è nulla e viene seguita da una notifica rinnovata, il termine decorre dalla seconda notificazione valida; la notifica nulla non produce effetti ai fini del decorso del termine perentorio. È quindi essenziale individuare con precisione la data di perfezionamento della notifica per il destinatario (con particolare attenzione alle notifiche ex art. 140 c.p.c.).",
    fonti: [
      { label: "Cass. 19814/2025 (Diritto Bancario)", url: "https://www.dirittobancario.it/art/opposizione-a-decreto-ingiuntivo-tardiva-e-decorrenza-del-termine/" },
    ],
  },
  {
    categoria: "Termini e scadenze",
    domanda: "È possibile fare opposizione tardiva al decreto ingiuntivo?",
    risposta:
      "Sì, ma è un rimedio eccezionale disciplinato dall'art. 650 c.p.c. L'ingiunto deve provare di non aver avuto tempestiva conoscenza del decreto per uno di questi motivi: irregolarità della notificazione (es. notifica a indirizzo errato, omonimia), caso fortuito o forza maggiore. La giurisprudenza interpreta queste nozioni in modo restrittivo: non sono caso fortuito né forza maggiore la malattia di un familiare, la quarantena dello studio legale del difensore o la negligenza nella gestione della corrispondenza. L'opposizione tardiva deve comunque essere proposta entro 10 giorni dal primo atto di esecuzione.",
    fonti: [
      { label: "Art. 650 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art650" },
    ],
  },

  /* ─── Procedura e forma ─── */
  {
    categoria: "Procedura e forma",
    domanda: "L'opposizione si propone con atto di citazione o con ricorso?",
    risposta:
      "Di regola si propone con atto di citazione notificato al creditore ricorrente entro 40 giorni dalla notifica del decreto (art. 645 c.p.c.). La Riforma Cartabia non ha modificato la forma dell'atto: resta l'atto di citazione. Fanno eccezione le controversie soggette a riti speciali — lavoro, previdenza, locazione di immobili urbani, comodato di immobili urbani, affitto d'azienda — in cui l'opposizione va proposta con ricorso depositato in cancelleria entro lo stesso termine di 40 giorni (art. 447-bis c.p.c. e norme speciali).",
    fonti: [
      { label: "Art. 645 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art645" },
    ],
  },
  {
    categoria: "Procedura e forma",
    domanda: "Cosa succede se commetto un errore di rito (citazione invece di ricorso)?",
    risposta:
      "La Cassazione a Sezioni Unite, con sentenza n. 927 del 13 gennaio 2022, ha stabilito che, nelle materie soggette al rito speciale (es. locazione), l'opposizione proposta con citazione anziché con ricorso è tempestiva solo se l'atto viene anche depositato in cancelleria entro il termine di 40 giorni. Non è sufficiente la sola notificazione. In caso contrario, l'opposizione è inammissibile e il decreto diventa esecutivo. Le SS.UU. hanno chiarito che non si applica il meccanismo di sanatoria dell'art. 4 D.Lgs. 150/2011, ma il principio generale di conversione dell'atto.",
    fonti: [
      { label: "Cass. SS.UU. 927/2022 (commento)", url: "https://studioeffeffe.com/errori-nella-forma-dellopposizione-a-decreto-ingiuntivo-e-meccanismi-di-conversione-del-rito-la-corte-di-cassazione-auspica-lintervento-del-legislatore/" },
    ],
  },
  {
    categoria: "Procedura e forma",
    domanda: "Quale tribunale è competente per l'opposizione?",
    risposta:
      "L'opposizione deve essere proposta davanti allo stesso ufficio giudiziario al quale appartiene il giudice che ha emesso il decreto ingiuntivo (art. 645 c.p.c.). Si tratta di una competenza funzionale e inderogabile: l'opponente non può scegliere un giudice diverso. Se il decreto è stato emesso dal Tribunale di Roma, l'opposizione si propone dinanzi al Tribunale di Roma; se è stato emesso dal Giudice di Pace di Milano, l'opposizione si propone dinanzi al Giudice di Pace di Milano.",
    fonti: [
      { label: "Art. 645 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art645" },
    ],
  },
  {
    categoria: "Procedura e forma",
    domanda: "Come si fa opposizione davanti al Giudice di Pace?",
    risposta:
      "L'opposizione al decreto ingiuntivo emesso dal Giudice di Pace si propone dinanzi allo stesso ufficio del Giudice di Pace, di regola con ricorso da depositare in cancelleria entro 40 giorni dalla notifica. La competenza per valore del Giudice di Pace è attualmente fino a 10.000 € per le cause ordinarie e fino a 20.000 € per i danni da circolazione stradale; dal 31 ottobre 2026, in base al D.Lgs. 116/2017 come modificato, salirà rispettivamente a 30.000 € e 50.000 €.",
    fonti: [
      { label: "Tribunale di Milano - Ricorso Opposizione DI (GdP)", url: "https://tribunale-milano.giustizia.it/it/ricorso_in_opposizione_a_d_i_.page" },
    ],
  },
  {
    categoria: "Procedura e forma",
    domanda: "Entro quanti giorni si deve iscrivere a ruolo l'opposizione?",
    risposta:
      "L'opponente deve costituirsi (iscrivendo la causa a ruolo) entro 10 giorni dalla notifica dell'atto di citazione (art. 165 c.p.c.). Se ha chiesto e ottenuto dal presidente del tribunale l'abbreviazione del termine di comparizione, deve costituirsi entro 5 giorni. Dopo la L. 218/2011, non opera più il dimezzamento automatico del termine di costituzione che la giurisprudenza precedente collegava all'opposizione: il termine ordinario è quello di 10 giorni, salvo abbreviazione su istanza.",
    fonti: [
      { label: "Art. 165 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art165" },
      { label: "L. 218/2011 (Camera dei Deputati)", url: "https://leg16.camera.it/561?appro=579" },
    ],
  },
  {
    categoria: "Procedura e forma",
    domanda: "Quali sono i termini di costituzione del creditore opposto?",
    risposta:
      "Dopo la Riforma Cartabia e il correttivo D.Lgs. 164/2024, il convenuto opposto deve costituirsi almeno 70 giorni prima dell'udienza fissata nell'atto di citazione (art. 166 c.p.c.). Il termine minimo a comparire è stato elevato a 120 giorni (Italia) o 150 giorni (estero) ex art. 163-bis c.p.c. La tardiva costituzione comporta le decadenze dell'art. 167 c.p.c. (impossibilità di proporre domande riconvenzionali, eccezioni non rilevabili d'ufficio, chiamate di terzo) e può determinare l'improcedibilità della domanda creditoria.",
    fonti: [
      { label: "Art. 166 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art166" },
    ],
  },

  /* ─── Motivi di opposizione ─── */
  {
    categoria: "Motivi di opposizione",
    domanda: "Quali sono i motivi per opporsi al decreto ingiuntivo?",
    risposta:
      "I motivi si raggruppano in quattro categorie. Vizi formali: irregolarità della notifica, incompetenza, difetto delle condizioni ex art. 633 c.p.c. Vizi sostanziali del credito: pagamento già effettuato, prescrizione, compensazione, novazione, remissione del debito. Vizi del titolo: nullità del contratto, vizi del consenso, clausole abusive nei contratti con consumatori (rilevabili d'ufficio). Eccezioni: inadempimento del creditore ex art. 1460 c.c., difetto di prova scritta idonea, errore nel quantum. Ogni motivo dev'essere allegato in modo specifico e provato.",
    fonti: [
      { label: "Cass. SS.UU. 19596/2020 (mediazione)", url: "https://www.jacobacci-law.com/hubfs/News/Cassazione%20SU%2019596.20%20IT.pdf?hsLang=it" },
    ],
  },
  {
    categoria: "Motivi di opposizione",
    domanda: "Posso proporre domande riconvenzionali nell'opposizione?",
    risposta:
      "Sì. L'opponente, nel medesimo atto di opposizione, può proporre tutte le domande riconvenzionali che potrebbe formulare in qualità di convenuto in un giudizio di cognizione ordinario, anche fondate su titoli diversi dalla pretesa principale (es. risarcimento danni da inadempimento del creditore, ripetizione di somme indebitamente versate, accertamento dell'invalidità del titolo). Il creditore opposto invece, secondo la giurisprudenza, può proporre solo le domande connesse al credito monitorio originario, salvo la reconventio reconventionis in risposta alle riconvenzionali dell'opponente.",
    fonti: [
      { label: "Filodiritto - Domande riconvenzionali", url: "https://www.filodiritto.com/la-proponibilita-di-domande-riconvenzionali-nel-giudizio-di-opposizione-decreto-ingiuntivo" },
      { label: "Cass. SS.UU. 26727/2024", url: "https://www.cortedicassazione.it/resources/cms/documents/26727_10_2024_civ_noindex.pdf" },
    ],
  },
  {
    categoria: "Motivi di opposizione",
    domanda: "Chi ha l'onere della prova nell'opposizione?",
    risposta:
      "Nel giudizio di opposizione l'onere della prova segue le regole generali dell'art. 2697 c.c. Il creditore opposto, pur formalmente convenuto, mantiene la qualità di attore sostanziale e deve provare i fatti costitutivi del credito (titolo, esigibilità, ammontare). L'opponente, formalmente attore ma sostanzialmente convenuto, deve provare i fatti estintivi, impeditivi o modificativi (pagamento, prescrizione, compensazione, inadempimento altrui). Le fatture e i documenti unilaterali idonei per la fase monitoria devono essere supportati nel giudizio di opposizione da prova del rapporto sottostante.",
    fonti: [
      { label: "Il Sole 24 Ore - Onere probatorio", url: "https://ntplusdiritto.ilsole24ore.com/art/l-onere-probatorio-nell-opposizione-decreto-ingiuntivo-effetti-riconoscimento-debito-AH7kYivD" },
    ],
  },

  /* ─── Riforma Cartabia e mediazione ─── */
  {
    categoria: "Riforma Cartabia",
    domanda: "Cosa è cambiato con la Riforma Cartabia nell'opposizione a decreto ingiuntivo?",
    risposta:
      "La Riforma Cartabia (D.Lgs. 149/2022, in vigore dal 28 febbraio 2023) NON ha modificato il termine di 40 giorni né la forma dell'atto (atto di citazione). Le novità riguardano: i termini minimi di comparizione (ora 120 gg Italia / 150 gg estero, art. 163-bis); la costituzione del convenuto opposto (almeno 70 giorni prima dell'udienza, art. 166); le verifiche preliminari del giudice (art. 171-bis); la disciplina delle memorie integrative (art. 171-ter); la codificazione della mediazione obbligatoria con onere a carico dell'opposto (art. 5-bis D.Lgs. 28/2010). Il correttivo D.Lgs. 164/2024 ha esteso il rito semplificato anche alle opposizioni.",
    fonti: [
      { label: "D.Lgs. 149/2022 (Normattiva)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149" },
      { label: "Processo Civile Telematico - Cartabia", url: "https://www.processociviletelematico.it/2025/08/07/opposizione-a-decreto-ingiuntivo-dopo-la-riforma-cartabia-cosa-e-cambiato-e-cosa-no/" },
    ],
  },
  {
    categoria: "Riforma Cartabia",
    domanda: "La mediazione è obbligatoria nell'opposizione a decreto ingiuntivo?",
    risposta:
      "Sì, per le materie soggette a mediazione obbligatoria ex art. 5 D.Lgs. 28/2010 (locazione, contratti bancari/assicurativi/finanziari, condominio, diritti reali, successioni, responsabilità medica, ecc.). L'onere di proporre la mediazione grava sul creditore opposto, come stabilito da Cass. SS.UU. 19596/2020 e ora codificato nell'art. 5-bis D.Lgs. 28/2010 (introdotto da Cartabia). Il giudice, alla prima udienza, decide prima sulle istanze di provvisoria esecutorietà (artt. 648/649) e poi assegna il termine per la mediazione, fissando una nuova udienza per la verifica.",
    fonti: [
      { label: "Art. 5-bis D.Lgs. 28/2010", url: "https://www.brocardi.it/mediazione-controversie-civili-commerciali/capo-ii/art5bis.html" },
      { label: "Cass. SS.UU. 19596/2020", url: "https://www.jacobacci-law.com/hubfs/News/Cassazione%20SU%2019596.20%20IT.pdf?hsLang=it" },
    ],
  },
  {
    categoria: "Riforma Cartabia",
    domanda: "Cosa succede se la mediazione non viene avviata?",
    risposta:
      "Se la mediazione obbligatoria non viene attivata dal creditore opposto entro il termine assegnato dal giudice, la conseguenza è grave: il giudice dichiara l'improcedibilità della domanda creditoria, revoca il decreto ingiuntivo e condanna il creditore opposto al pagamento delle spese legali della causa di opposizione. È quindi cruciale, per il creditore che ha ottenuto il decreto, monitorare attentamente l'avvio della procedura di mediazione dopo la prima udienza, pena la perdita di tutto il vantaggio processuale conquistato.",
    fonti: [
      { label: "Mondo ADR - Improcedibilità mediazione", url: "https://www.mondoadr.it/giurisprudenza_art/mediazione-non-avviata-nel-termine-il-decreto-ingiuntivo-per-mutuo-bancario-viene-revocato-per-improcedibilita/" },
    ],
  },

  /* ─── Esecutorietà ─── */
  {
    categoria: "Provvisoria esecutorietà",
    domanda: "Si può sospendere l'esecutorietà del decreto ingiuntivo?",
    risposta:
      "Sì. L'opponente può chiedere al giudice dell'opposizione la sospensione della provvisoria esecuzione ex art. 649 c.p.c., dimostrando l'esistenza di gravi motivi. Tipicamente la sospensione viene concessa quando viene meno il fumus boni iuris del credito (es. disconoscimento della firma, eccezione di prescrizione fondata, contestazione documentale efficace) o quando emerga il pericolo di danno grave dalla prosecuzione dell'esecuzione. L'ordinanza che decide sull'istanza non è impugnabile e, in caso di rigetto, l'istanza non può essere riproposta.",
    fonti: [
      { label: "Art. 649 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art649" },
    ],
  },
  {
    categoria: "Provvisoria esecutorietà",
    domanda: "Quando il decreto ingiuntivo diventa esecutivo durante l'opposizione?",
    risposta:
      "Il decreto può essere dichiarato provvisoriamente esecutivo in corso di causa su istanza del creditore opposto ai sensi dell'art. 648 c.p.c., a condizione che l'opposizione non sia fondata su prova scritta o di pronta soluzione, oppure quando ricorrano gravi motivi. Se il decreto era già stato dichiarato provvisoriamente esecutivo ai sensi dell'art. 642 c.p.c. al momento dell'emissione, esso conserva tale efficacia salvo che l'opponente non ottenga la sospensione ex art. 649. La concessione o il diniego della provvisoria esecutorietà è uno dei primi snodi della prima udienza, anche post-Cartabia.",
    fonti: [
      { label: "Art. 648 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art648" },
    ],
  },

  /* ─── Costi ─── */
  {
    categoria: "Costi",
    domanda: "Quanto costa fare opposizione a un decreto ingiuntivo?",
    risposta:
      "I costi principali sono: il contributo unificato (art. 13 D.P.R. 115/2002), ridotto del 50% rispetto al CU del giudizio ordinario di pari valore (eccetto cause di lavoro); la marca da bollo di 27 € per anticipazione forfetaria diritti di cancelleria; i compensi del difensore secondo i parametri del D.M. 147/2022, calcolati per fasi (studio, introduttiva, istruttoria, decisionale) e per scaglione di valore. Dal 1° gennaio 2023 il CU si paga esclusivamente con PagoPA; dal 1° gennaio 2025 senza ricevuta non si procede all'iscrizione a ruolo.",
    fonti: [
      { label: "Art. 13 D.P.R. 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2002-05-30;115~art13" },
      { label: "Tabella CU 2026 (Avvocato Andreani)", url: "https://www.avvocatoandreani.it/servizi/tabella-contributo-unificato.php" },
    ],
  },
  {
    categoria: "Costi",
    domanda: "Il contributo unificato è davvero dimezzato per l'opposizione?",
    risposta:
      "Sì. L'art. 13, comma 3-bis, del D.P.R. 115/2002 prevede che per i procedimenti speciali del Libro IV, Titolo I c.p.c. (procedimenti sommari, tra cui il procedimento per ingiunzione) e per il giudizio di opposizione a decreto ingiuntivo in primo grado, il contributo unificato è ridotto della metà rispetto agli importi ordinari. Fanno eccezione le cause di lavoro: una circolare ministeriale ha escluso la riduzione ulteriore. Ad esempio, per un giudizio di valore tra 5.200 e 26.000 € il CU ordinario è 237 €, ridotto a 118,50 € per l'opposizione.",
    fonti: [
      { label: "Tribunale Milano - CU GdP", url: "https://tribunale-milano.giustizia.it/it/contributo_unificato_gdpmi.page" },
    ],
  },

  /* ─── Esiti ─── */
  {
    categoria: "Esiti del giudizio",
    domanda: "Quanto dura un'opposizione a decreto ingiuntivo?",
    risposta:
      "Non esiste un termine stabilito per legge. La durata dipende dal carico del tribunale, dalla complessità della causa, dall'eventuale necessità di mediazione obbligatoria e di istruttoria (testimoni, CTU). Mediamente un'opposizione a decreto ingiuntivo si conclude in 10 mesi - 2 anni in primo grado, ma può durare più a lungo nei tribunali con maggior arretrato o in cause documentalmente complesse (es. mutui bancari con CTU contabile). La Riforma Cartabia e il rito semplificato post-correttivo 2024 mirano a ridurre i tempi.",
    fonti: [
      { label: "D.Lgs. 149/2022", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149" },
    ],
  },
  {
    categoria: "Esiti del giudizio",
    domanda: "Cosa succede se vinco l'opposizione?",
    risposta:
      "Se l'opposizione viene accolta totalmente, il decreto ingiuntivo viene revocato dalla sentenza, e gli atti esecutivi eventualmente compiuti vengono caducati immediatamente, a prescindere dal passaggio in giudicato (art. 653 c.p.c.). Se l'opposizione è accolta solo in parte, il decreto viene comunque revocato e sostituito dalla sentenza che condanna l'opponente al pagamento della somma effettivamente dovuta; gli atti esecutivi conservano i loro effetti nei limiti della somma ridotta. Le spese di lite vengono regolate in base al principio di soccombenza.",
    fonti: [
      { label: "Art. 653 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art653" },
    ],
  },
  {
    categoria: "Esiti del giudizio",
    domanda: "Cosa succede se perdo l'opposizione?",
    risposta:
      "Se l'opposizione viene rigettata, il decreto ingiuntivo — che non fosse già stato dichiarato provvisoriamente esecutivo — acquista efficacia esecutiva (art. 653 c.p.c.). Cessano gli effetti dell'eventuale sospensione disposta ex art. 649 e il creditore può riassumere l'esecuzione forzata sospesa. Il giudice liquida le spese del solo giudizio di opposizione, mentre quelle liquidate nel decreto restano ferme. L'opponente, di regola soccombente, è condannato a rifondere le spese di lite al creditore opposto.",
    fonti: [
      { label: "Art. 653 c.p.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art653" },
    ],
  },
];
