import {
  Gavel,
  BookOpen,
  HelpCircle,
  Calculator,
  Clock,
  CalendarOff,
  FileText,
  Shield,
  ListChecks,
  AlertTriangle,
  Scale,
  Link2,
  FileWarning,
  Briefcase,
  Receipt,
  Lightbulb,
} from "lucide-react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { LegalTable } from "@/components/shared/LegalTable";
import { NormativaQuote } from "@/components/shared/NormativaQuote";
import { InlineNormLink } from "@/components/shared/InlineNormLink";
import { FAQ } from "@/components/shared/FAQ";
import { AlertBox } from "@/components/shared/AlertBox";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";
import Calcolatore from "@/components/opposizione-decreto-ingiuntivo/Calcolatore";
import {
  tabellaTerminiPrincipali,
  tabellaContributoUnificato,
  tabellaTerminiCostituzione,
  tabellaMotiviOpposizione,
  tabellaConfrontoCartabia,
  normativaRiferimento,
  sections,
} from "@/data/opposizione-decreto-ingiuntivo/opposizioneData";
import { faqData } from "@/data/opposizione-decreto-ingiuntivo/faqData";
import { JsonLd, articleSchema, webApplicationSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "Opposizione Decreto Ingiuntivo 2026: Termini e Calcolo",
  description:
    "Opposizione a decreto ingiuntivo: calcolatore dei 40 giorni, sospensione feriale, riforma Cartabia, mediazione, contributo unificato e fac-simile atto.",
  alternates: {
    canonical: "/opposizione-decreto-ingiuntivo",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/opposizione-decreto-ingiuntivo",
    title: "Opposizione Decreto Ingiuntivo 2026: Termini e Calcolo",
    description:
      "Calcolatore dei 40 giorni, sospensione feriale, riforma Cartabia, mediazione, contributo unificato dimezzato e fac-simile dell'atto di opposizione.",
    images: [{ url: HERO_IMG, width: 1920, height: 1072, alt: "Opposizione a Decreto Ingiuntivo — Termini e Procedura 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opposizione Decreto Ingiuntivo 2026: Termini e Calcolo",
    description:
      "Calcolatore dei 40 giorni, sospensione feriale, riforma Cartabia, mediazione e contributo unificato dimezzato.",
  },
};

const toolConfig: ToolConfig = {
  slug: "opposizione-decreto-ingiuntivo",
  title: "Opposizione a Decreto Ingiuntivo",
  shortTitle: "Opposizione DI",
  icon: Gavel,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroImageAlt: "Opposizione a decreto ingiuntivo — termini, procedura e riforma Cartabia",
  heroEyebrow: "Calcolatore, Procedura e Guida Completa",
  heroTitle: "Opposizione a Decreto Ingiuntivo",
  heroDescription:
    "Calcola la scadenza dei 40 giorni per opporre il decreto ingiuntivo applicando sospensione feriale, festivi, termini speciali per crediti di lavoro, debitori UE e abbreviazioni del giudice. Procedura post-Riforma Cartabia, mediazione obbligatoria, motivi di opposizione, costi e normativa aggiornata al 2026.",
  heroReference:
    "Artt. 641-650 c.p.c. — D.Lgs. 149/2022 (Riforma Cartabia) — D.Lgs. 164/2024 (correttivo) — L. 742/1969",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "Il calcolatore tiene conto della sospensione feriale (L. 742/1969) e della proroga per sabato e festivi (art. 155, cc. 4-5, c.p.c.).",
    "Aggiornato alla Riforma Cartabia (D.Lgs. 149/2022) e al correttivo (D.Lgs. 164/2024).",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    { label: "Gazzetta Ufficiale", url: "https://www.gazzettaufficiale.it" },
    { label: "Ministero della Giustizia", url: "https://www.giustizia.it" },
    { label: "Cassazione SS.UU. 19596/2020", url: "https://www.jacobacci-law.com/hubfs/News/Cassazione%20SU%2019596.20%20IT.pdf?hsLang=it" },
  ],
};

export default function OpposizioneDecretoIngiuntivoPage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ===== Structured Data ===== */}
      <JsonLd
        data={articleSchema({
          headline: "Opposizione a Decreto Ingiuntivo 2026: Termini, Procedura e Riforma Cartabia",
          description:
            "Guida completa all'opposizione a decreto ingiuntivo: calcolatore della scadenza dei 40 giorni, sospensione feriale, forma dell'atto, riforma Cartabia, mediazione obbligatoria, motivi di opposizione, contributo unificato e schema dell'atto.",
          path: "/opposizione-decreto-ingiuntivo",
          datePublished: "2026-05-16",
          dateModified: "2026-05-16",
          image: HERO_IMG,
          sections: [
            "Calcolatore Scadenza Opposizione",
            "Cos'è l'opposizione a decreto ingiuntivo",
            "Termini per proporre opposizione",
            "Termini speciali e sospensione feriale",
            "Forma dell'atto: citazione o ricorso",
            "Iscrizione a ruolo e termini di costituzione",
            "Motivi di opposizione",
            "Riforma Cartabia",
            "Mediazione obbligatoria",
            "Provvisoria esecutorietà",
            "Opposizione tardiva (art. 650 c.p.c.)",
            "Onere della prova",
            "Costi e contributo unificato",
            "Esempio pratico di calcolo",
            "Esiti del giudizio",
            "Struttura dell'atto di opposizione",
            "Errori comuni",
            "Domande frequenti",
            "Normativa di riferimento",
          ],
          keywords:
            "opposizione decreto ingiuntivo, calcolo termini opposizione, art 645 cpc, riforma cartabia, mediazione obbligatoria, opposizione tardiva, contributo unificato opposizione, atto di citazione opposizione, sospensione feriale opposizione",
        })}
      />

      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Scadenza Opposizione a Decreto Ingiuntivo",
          description:
            "Calcola la data ultima per la notifica dell'opposizione a decreto ingiuntivo applicando sospensione feriale, festivi, termini speciali per crediti di lavoro, debitori UE/extra-UE e termini abbreviati o aumentati dal giudice.",
          path: "/opposizione-decreto-ingiuntivo",
          applicationCategory: "LegalService",
          featureList: [
            "Calcolo dei 40 giorni dalla notifica del decreto",
            "Termini speciali: 50 giorni (UE), 60 giorni (extra-UE), 10-39 (abbreviato), 41-60 (aumentato)",
            "Sospensione feriale 1°-31 agosto (L. 742/1969)",
            "Proroga per sabato, domenica e festivi (art. 155 c.p.c.)",
            "Indicazione della forma dell'atto (citazione vs ricorso)",
            "Timeline per iscrizione a ruolo (10 giorni dalla notifica)",
            "Avvisi su opposizione tardiva e riforma Cartabia",
          ],
        })}
      />

      {/* ===== Calcolatore ===== */}
      <Calcolatore />

      {/* ===== Cos'è l'opposizione ===== */}
      <SectionTitle
        id="cos-e"
        icon={BookOpen}
        title="Cos'è l'opposizione a decreto ingiuntivo"
        subtitle="Natura giuridica, parti del giudizio e differenza con l'appello"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L’<strong>opposizione a decreto ingiuntivo</strong> è lo strumento processuale con cui il debitore intimato contesta il decreto ingiuntivo emesso nei suoi confronti. Non è un mezzo di impugnazione in senso tecnico: con l’opposizione si introduce un <strong>ordinario giudizio di cognizione</strong>, davanti allo stesso ufficio giudiziario che ha emesso il decreto, nel quale il giudice riesamina con pienezza di cognizione il rapporto sostanziale dedotto in via monitoria. La disciplina principale è contenuta nell’<InlineNormLink text="art. 645 c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art645" /> e nei successivi articoli del Capo I del Titolo I, Libro IV del codice di procedura civile.
        </p>

        <p className="text-base leading-relaxed">
          Il procedimento monitorio ha una <strong>struttura bifasica</strong>: una prima fase, sommaria e documentale, culmina con l’emissione del decreto <em>inaudita altera parte</em> sulla base della sola prova scritta prodotta dal creditore; una seconda fase, eventuale, si apre con l’opposizione del debitore e si svolge come un giudizio ordinario di cognizione, con pieno contraddittorio e istruttoria. Le Sezioni Unite della Cassazione hanno ribadito che si tratta di un “giudizio di primo grado bifasico”: l’opposizione completa il primo grado, condividendo con la fase monitoria la medesima pendenza della lite.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art645">
          Art. 645 c.p.c. — «L’opposizione si propone davanti all’ufficio giudiziario al quale appartiene il giudice che ha emesso il decreto. L’atto di citazione deve essere notificato al ricorrente nei modi di cui all’articolo 638. In seguito all’opposizione il giudizio si svolge secondo le norme del procedimento di cognizione davanti al giudice adito.»
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          Un tratto caratteristico è l’<strong>inversione formale delle parti</strong>: il debitore, pur essendo formalmente attore opponente (perché promuove il giudizio di cognizione), assume la posizione sostanziale di convenuto; il creditore, formalmente convenuto opposto, mantiene la qualità di attore sostanziale e continua a essere gravato dall’onere di provare i fatti costitutivi del credito. Questa duplicità è cruciale per il riparto dell’onere probatorio e per la disciplina delle domande riconvenzionali.
        </p>

        <AlertBox variant="info" title="Opposizione vs appello vs opposizione tardiva">
          <p className="text-sm leading-relaxed">
            L’<strong>opposizione</strong> attiva per la prima volta un contraddittorio pieno su un decreto emesso senza preventiva audizione del debitore. L’<strong>appello</strong> impugna invece una sentenza già emessa all’esito di un giudizio completo. L’<strong>opposizione tardiva</strong> ex <InlineNormLink text="art. 650 c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art650" /> è un rimedio eccezionale per chi non ha potuto opporsi nei 40 giorni per cause a lui non imputabili.
          </p>
        </AlertBox>
      </div>

      {/* ===== Termini per proporre opposizione ===== */}
      <SectionTitle
        id="termini"
        icon={Clock}
        title="Termini per proporre opposizione"
        subtitle="40 giorni perentori, varianti per residenza estera e abbreviazioni del giudice"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il termine ordinario per proporre opposizione è di <strong>quaranta giorni dalla notificazione del decreto ingiuntivo</strong>, come stabilito dall’<InlineNormLink text="art. 641 c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art641" />. È un <strong>termine perentorio</strong>: la sua mancata osservanza determina la decadenza dall’opposizione e il decreto, su istanza del creditore, viene dichiarato esecutivo ai sensi dell’<InlineNormLink text="art. 647 c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art647" />, acquistando efficacia assimilabile al giudicato sostanziale.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art641">
          Art. 641 c.p.c. — «Il giudice, con decreto motivato da emettere entro trenta giorni dal deposito del ricorso, ingiunge all’altra parte di pagare la somma o di consegnare la cosa o la quantità di cose chieste [...] nel termine di quaranta giorni, con l’espressa avvertenza che nello stesso termine può essere fatta opposizione [...]. Quando concorrono giusti motivi, il termine può essere ridotto fino a dieci giorni oppure aumentato a sessanta. Se l’intimato risiede in uno degli altri Stati dell’Unione europea, il termine è di cinquanta giorni e può essere ridotto fino a venti giorni. Se l’intimato risiede in altri Stati, il termine è di sessanta giorni e, comunque, non può essere inferiore a trenta né superiore a centoventi.»
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          La disciplina dei termini si articola dunque su più livelli, a seconda della residenza del debitore e di eventuali abbreviazioni o aumenti disposti dal giudice nel decreto stesso. La tabella seguente riassume tutte le ipotesi:
        </p>

        <LegalTable
          headers={["Scenario", "Termine", "Forma dell'atto", "Riferimento normativo"]}
          rows={tabellaTerminiPrincipali}
          className="mb-4"
        />

        <p className="text-base leading-relaxed">
          La <strong>decorrenza</strong> del termine è ancorata alla notificazione del decreto all’ingiunto, secondo le regole degli artt. 137 ss. c.p.c. Particolarmente delicato è il caso della <strong>notifica ex art. 140 c.p.c.</strong> (mediante deposito in casa comunale, affissione e raccomandata informativa): la Cassazione (sez. VI, ord. n. 20915/2021) ha chiarito che il termine decorre dal momento di effettiva conoscibilità del deposito, coincidente con l’arrivo della raccomandata informativa. Se la prima notifica è <strong>nulla</strong> e viene rinnovata, il termine decorre dalla seconda notifica valida (Cass. sez. II, sent. n. 19814/2025).
        </p>

        <AlertBox variant="warning" title="Termine perentorio: nessuna possibilità di proroga ordinaria">
          <p className="text-sm leading-relaxed">
            Il termine di 40 giorni non è prorogabile né rinunciabile. La sua osservanza è verificata d’ufficio dal giudice. L’unico rimedio in caso di mancata opposizione tempestiva è l’opposizione tardiva ex art. 650 c.p.c., subordinata a presupposti molto restrittivi (irregolarità notifica, caso fortuito o forza maggiore) e comunque entro 10 giorni dal primo atto di esecuzione.
          </p>
        </AlertBox>
      </div>

      {/* ===== Termini speciali e sospensione feriale ===== */}
      <SectionTitle
        id="termini-speciali"
        icon={CalendarOff}
        title="Termini speciali e sospensione feriale"
        subtitle="Crediti di lavoro, sospensione di agosto, esempi pratici di calcolo"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il computo del termine di opposizione si articola sull’intreccio di tre norme cardine: l’<InlineNormLink text="art. 155 c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" /> sul computo dei termini, la <InlineNormLink text="L. 742/1969" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742" /> sulla sospensione feriale e le norme speciali sul rito del lavoro.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155">
          Art. 155 c.p.c. — «Nel computo dei termini a giorni o ad ore, si escludono il giorno o l’ora iniziali. [...] I giorni festivi si computano nel termine. Se il giorno di scadenza è festivo, la scadenza è prorogata di diritto al primo giorno seguente non festivo. La proroga prevista dal quarto comma si applica altresì ai termini per il compimento degli atti processuali svolti fuori dell’udienza che scadono nella giornata del sabato.»
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          La <strong>sospensione feriale</strong> dal 1° al 31 agosto (L. 742/1969, modificata dal D.L. 132/2014 conv. in L. 162/2014) si applica al termine di opposizione per la maggior parte delle controversie civili. Sono <strong>escluse</strong> dalla sospensione: cause di lavoro e previdenza obbligatoria, procedimenti cautelari, esecuzioni e opposizioni all’esecuzione. Per le opposizioni a decreti ingiuntivi in materia di lavoro il termine continua quindi a decorrere anche in agosto, e va proposto con ricorso depositato in cancelleria.
        </p>

        <AlertBox variant="success" title="Festività nazionale - San Francesco d'Assisi">
          <p className="text-sm leading-relaxed">
            Dal 2026, il 4 ottobre è festa nazionale (L. 151/2025): se la scadenza dell’opposizione cade in quella data, slitta al primo giorno non festivo successivo ex art. 155, c. 4, c.p.c. Il calcolatore tiene conto della nuova festività.
          </p>
        </AlertBox>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-6 mb-2">Esempi pratici di calcolo</h3>

        <div className="space-y-3">
          <div className="border border-border bg-card p-4" style={{ borderRadius: "0.375rem" }}>
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">Esempio 1 — Notifica del 15 marzo 2026, ordinario</p>
            <p className="text-sm mt-1">Dies a quo: 16 marzo. 40° giorno: <strong>24 aprile 2026</strong>. Nessuna sospensione feriale (marzo-aprile).</p>
          </div>
          <div className="border border-border bg-card p-4" style={{ borderRadius: "0.375rem" }}>
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">Esempio 2 — Notifica del 20 luglio 2026, ordinario</p>
            <p className="text-sm mt-1">Dal 21 al 31 luglio: 11 giorni. Sospensione 1-31 agosto. Restano 29 giorni dal 1° settembre. Scadenza: <strong>29 settembre 2026</strong>. (Per causa di lavoro la sospensione non opera: scadenza il 29 agosto 2026.)</p>
          </div>
          <div className="border border-border bg-card p-4" style={{ borderRadius: "0.375rem" }}>
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">Esempio 3 — Debitore in Francia (UE), notifica 10 giugno 2026</p>
            <p className="text-sm mt-1">Termine di 50 giorni dall’11 giugno. Dal 11 al 30 giugno: 20 giorni. Restano 30 in luglio. Scadenza: <strong>30 luglio 2026</strong>. Termine esaurito prima della sospensione feriale.</p>
          </div>
          <div className="border border-border bg-card p-4" style={{ borderRadius: "0.375rem" }}>
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">Esempio 4 — Debitore extra-UE, notifica 10 giugno 2026</p>
            <p className="text-sm mt-1">Termine di 60 giorni dall’11 giugno. 60° giorno: 9 agosto, ma dal 1° agosto sospensione. Scadenza slittata al <strong>9 settembre 2026</strong>.</p>
          </div>
        </div>
      </div>

      {/* ===== Forma dell'atto ===== */}
      <SectionTitle
        id="forma-atto"
        icon={FileText}
        title="Forma dell'atto: citazione o ricorso"
        subtitle="Regola generale, eccezioni per riti speciali, errore di rito"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La regola generale dell’<InlineNormLink text="art. 645 c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art645" /> è che l’opposizione si propone con <strong>atto di citazione</strong>, da notificarsi al ricorrente presso il procuratore costituito o secondo le regole dell’art. 638 c.p.c. La <strong>Riforma Cartabia (D.Lgs. 149/2022) non ha modificato la forma dell’atto</strong>: resta ferma la citazione, salvo le eccezioni per i riti speciali.
        </p>

        <p className="text-base leading-relaxed">
          Per le <strong>controversie soggette a rito speciale</strong> — lavoro, previdenza, locazione di immobili urbani, comodato di immobili urbani, affitto d’azienda — la forma dell’atto introduttivo è il <strong>ricorso da depositare in cancelleria</strong> entro il termine di 40 giorni, non essendo sufficiente la sola notificazione. La Cassazione ha chiarito che il termine perentorio dell’art. 641 c.p.c. riguarda, in tali materie, anche il deposito in cancelleria, che segna la tempestiva instaurazione del rapporto processuale.
        </p>

        <AlertBox variant="warning" title="Errore di rito: Cass. SS.UU. 927/2022">
          <p className="text-sm leading-relaxed">
            Le Sezioni Unite con sentenza n. 927 del 13 gennaio 2022 hanno affrontato il caso dell’opposizione, in materia locatizia, proposta con citazione invece che con ricorso. Hanno stabilito che la citazione è tempestiva solo se l’atto viene anche <strong>depositato in cancelleria entro i 40 giorni</strong>: non basta la notifica. Diversamente, l’opposizione è inammissibile e il decreto diventa esecutivo. Non si applica il meccanismo di sanatoria dell’art. 4 D.Lgs. 150/2011, ma il principio generale di conversione dell’atto, condizionato al tempestivo deposito.
          </p>
        </AlertBox>

        <p className="text-base leading-relaxed">
          Davanti al <strong>Giudice di Pace</strong>, la prassi e gli schemi predisposti dagli uffici giudiziari indicano la forma del ricorso da depositare in cancelleria, fermo restando che l’art. 645 c.p.c. fa riferimento alla citazione. La competenza per valore del GdP è attualmente di 10.000 € per le cause ordinarie e 20.000 € per i danni da circolazione, con previsto innalzamento a 30.000 € e 50.000 € dal 31 ottobre 2026 (D.Lgs. 116/2017 come modificato).
        </p>

        <p className="text-base leading-relaxed">
          L’atto di citazione deve rispettare i requisiti di contenuto degli artt. 163 e 163-bis c.p.c.: indicazione del tribunale, generalità delle parti, domicilio digitale, oggetto della domanda, fatti e motivi in diritto, conclusioni, data dell’udienza di comparizione, avvertimento sui termini di costituzione del convenuto. La <strong>procura alle liti</strong> deve essere validamente conferita: la sua mancanza, secondo Cass. sez. II 14674/2014, integra una nullità non sanabile retroattivamente, con conseguente passaggio in giudicato del decreto ex art. 647 c.p.c.
        </p>
      </div>

      {/* ===== Iscrizione a ruolo e termini di costituzione ===== */}
      <SectionTitle
        id="iscrizione-ruolo"
        icon={Briefcase}
        title="Iscrizione a ruolo e termini di costituzione"
        subtitle="Termini di costituzione opponente e opposto, verifiche preliminari post-Cartabia"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La fase di costituzione delle parti è regolata dagli <InlineNormLink text="artt. 165" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art165" /> e <InlineNormLink text="166 c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art166" />, modificati dalla Riforma Cartabia e dal correttivo D.Lgs. 164/2024. La L. 29 dicembre 2011, n. 218 ha eliminato il <strong>dimezzamento automatico</strong> dei termini di costituzione che la giurisprudenza precedente aveva ricavato dall’originaria formulazione dell’art. 645 c.p.c.: oggi i termini sono quelli ordinari, salvo abbreviazione su istanza.
        </p>

        <LegalTable
          headers={["Adempimento", "Termine", "Norma"]}
          rows={tabellaTerminiCostituzione}
          className="mb-4"
        />

        <p className="text-base leading-relaxed">
          L’<strong>opponente</strong> deve costituirsi entro 10 giorni dalla notifica dell’atto di citazione (5 giorni in caso di termine a comparire abbreviato). La <strong>mancata costituzione</strong> consente al creditore opposto di chiedere la dichiarazione di esecutorietà del decreto ex art. 647 c.p.c., con perdita definitiva del rimedio dell’opposizione.
        </p>

        <AlertBox variant="warning" title="Iscrizione con “velina”: rischio improcedibilità">
          <p className="text-sm leading-relaxed">
            La prassi di iscrivere a ruolo l’opposizione depositando una mera “velina” (copia non sottoscritta) dell’atto notificato, senza il successivo deposito dell’originale con la procura, è gravemente rischiosa. La giurisprudenza ha ritenuto l’opposizione improcedibile in tali ipotesi, con conseguente dichiarazione di esecutorietà del decreto. Il difensore deve depositare in cancelleria, entro i 10 giorni, l’originale dell’atto notificato, con procura e allegati completi.
          </p>
        </AlertBox>

        <p className="text-base leading-relaxed">
          La Riforma Cartabia ha introdotto, agli <InlineNormLink text="artt. 171-bis" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art171-bis" /> e <strong>171-ter c.p.c.</strong>, le <strong>verifiche preliminari del giudice</strong>: entro 15 giorni dalla scadenza del termine di costituzione dell’opposto, il giudice adotta un decreto che verifica la regolarità del contraddittorio, della competenza e degli atti introduttivi. Le memorie integrative delle parti hanno termini decadenziali successivi a tale decreto. Il correttivo D.Lgs. 164/2024 ha esteso il <strong>rito semplificato di cognizione</strong> ex art. 281-decies anche alle opposizioni a decreto ingiuntivo: il giudice può disporne l’applicazione quando la causa appaia di pronta soluzione.
        </p>
      </div>

      {/* ===== Motivi di opposizione ===== */}
      <SectionTitle
        id="motivi"
        icon={ListChecks}
        title="Motivi di opposizione"
        subtitle="Vizi formali, sostanziali, del titolo e domande riconvenzionali"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Nel giudizio di opposizione l’ingiunto può far valere un’ampia gamma di motivi, sistematizzabili in quattro grandi categorie: <strong>vizi formali</strong> (irregolarità della notifica, incompetenza, difetto delle condizioni ex <InlineNormLink text="art. 633 c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art633" />), <strong>vizi sostanziali del credito</strong> (pagamento, prescrizione, compensazione), <strong>vizi del titolo contrattuale</strong> (nullità, clausole abusive) e <strong>vizi relativi alla prova scritta</strong> utilizzata in sede monitoria.
        </p>

        <LegalTable
          headers={["Categoria", "Motivo specifico", "Riferimento"]}
          rows={tabellaMotiviOpposizione}
          className="mb-4"
        />

        <p className="text-base leading-relaxed">
          Una categoria particolare riguarda le <strong>clausole abusive</strong> nei contratti tra professionista e consumatore: la giurisprudenza unionale (CGUE) e nazionale ha affermato che il giudice deve controllare d’ufficio l’eventuale abusività delle clausole, anche nella fase esecutiva, predisponendo rimedi effettivi pure quando il decreto non sia stato opposto.
        </p>

        <p className="text-base leading-relaxed">
          L’opponente può inoltre proporre, nello stesso atto di opposizione, <strong>domande riconvenzionali</strong> anche fondate su titoli diversi dalla pretesa principale (es. risarcimento danni da inadempimento, ripetizione di somme indebitamente versate). Solo l’opponente, nella sua qualità sostanziale di convenuto, può proporre domande riconvenzionali; il creditore opposto può proporre solo la <em>reconventio reconventionis</em> in risposta alle riconvenzionali dell’opponente.
        </p>

        <AlertBox variant="success" title="Cass. SS.UU. 26727/2024: modifica della domanda dell’opposto">
          <p className="text-sm leading-relaxed">
            Le Sezioni Unite del 15 ottobre 2024 hanno chiarito che nel giudizio di opposizione, l’opposto può proporre nella comparsa di risposta <strong>domande ulteriori o alternative</strong> a quella monitoria originaria, purché fondate sul medesimo interesse sostanziale. È stato così ammesso, ad esempio, che l’opposto chieda in via subordinata la condanna per arricchimento senza causa o per responsabilità precontrattuale rispetto alla domanda principale di adempimento contrattuale.
          </p>
        </AlertBox>
      </div>

      {/* ===== Riforma Cartabia ===== */}
      <SectionTitle
        id="cartabia"
        icon={Shield}
        title="Riforma Cartabia: cosa è cambiato e cosa no"
        subtitle="D.Lgs. 149/2022 e correttivo D.Lgs. 164/2024 - quadro completo"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>Riforma Cartabia</strong> (D.Lgs. 10 ottobre 2022, n. 149, in vigore dal 28 febbraio 2023) e il successivo correttivo (D.Lgs. 31 ottobre 2024, n. 164) hanno rimodulato vari snodi dell’opposizione a decreto ingiuntivo. Il quadro di sintesi è il seguente:
        </p>

        <LegalTable
          headers={["Aspetto", "Prima del 28/02/2023", "Dopo la Cartabia"]}
          rows={tabellaConfrontoCartabia}
          className="mb-4"
        />

        <p className="text-base leading-relaxed">
          Sul piano sostanziale, <strong>non è cambiato</strong> il termine di 40 giorni (art. 641), né la forma dell’atto (atto di citazione ex art. 645). Sono invece cambiati i termini di comparizione (oggi 120 giorni in Italia / 150 estero) e di costituzione del convenuto opposto (oggi 70 giorni prima dell’udienza). È stata codificata la disciplina della <strong>mediazione obbligatoria</strong> nel nuovo art. 5-bis del D.Lgs. 28/2010, che conferma la regola giurisprudenziale per cui l’onere di proporla grava sul creditore opposto.
        </p>

        <p className="text-base leading-relaxed">
          Il correttivo del 2024 ha introdotto le <strong>verifiche preliminari del giudice</strong> (art. 171-bis) e le memorie integrative (art. 171-ter), oltre a estendere il <strong>rito semplificato di cognizione</strong> (art. 281-decies) anche alle opposizioni a decreto ingiuntivo. Sul piano operativo, dal 1° gennaio 2023 il contributo unificato si paga esclusivamente con PagoPA; dal 1° gennaio 2025, senza ricevuta non si procede all’iscrizione a ruolo.
        </p>
      </div>

      {/* ===== Mediazione obbligatoria ===== */}
      <SectionTitle
        id="mediazione"
        icon={Scale}
        title="Mediazione obbligatoria"
        subtitle="Art. 5-bis D.Lgs. 28/2010 e Cass. SS.UU. 19596/2020"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>mediazione obbligatoria</strong> nel giudizio di opposizione è disciplinata dall’<InlineNormLink text="art. 5-bis del D.Lgs. 28/2010" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-03-04;28~art5-bis" />, introdotto dalla Riforma Cartabia (art. 7 D.Lgs. 149/2022). Si applica alle materie elencate dall’art. 5 D.Lgs. 28/2010: locazione, contratti bancari, assicurativi e finanziari, condominio, diritti reali, divisioni, successioni ereditarie, patti di famiglia, responsabilità medica e sanitaria, diffamazione a mezzo stampa.
        </p>

        <NormativaQuote url="https://www.brocardi.it/mediazione-controversie-civili-commerciali/capo-ii/art5bis.html">
          Art. 5-bis D.Lgs. 28/2010 — «Quando l’azione di cui all’articolo 5, comma 1, è stata introdotta con ricorso per decreto ingiuntivo, nel procedimento di opposizione l’onere di presentare la domanda di mediazione grava sulla parte che ha proposto ricorso per decreto ingiuntivo.»
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          La norma codifica il principio già affermato dalle <strong>Sezioni Unite della Cassazione con sentenza n. 19596 del 18 settembre 2020</strong>: l’onere di avviare la mediazione grava sul creditore opposto, perché è lui ad avere interesse a che il giudizio prosegua per veder confermato il proprio titolo, mentre l’opponente ha già espletato l’unico rimedio a sua disposizione. La <strong>mancata attivazione</strong> della mediazione da parte dell’opposto determina l’<strong>improcedibilità della domanda</strong> e la revoca del decreto ingiuntivo opposto, con condanna del creditore alle spese.
        </p>

        <p className="text-base leading-relaxed">
          La sequenza procedurale alla <strong>prima udienza</strong> dell’opposizione è quindi: (1) il giudice provvede sulle istanze di provvisoria esecuzione e sospensione (artt. 648 e 649 c.p.c.); (2) solo dopo, assegna alle parti il termine per esperire la mediazione; (3) fissa una nuova udienza per verificare l’avveramento della condizione di procedibilità. Il termine massimo della mediazione è di 3 mesi, prorogabile di altri 3 con accordo scritto delle parti.
        </p>

        <AlertBox variant="warning" title="Conseguenze gravi per il creditore">
          <p className="text-sm leading-relaxed">
            Se il creditore opposto trascura di avviare la mediazione entro il termine assegnato, perde tutto il vantaggio processuale conquistato con il decreto: improcedibilità + revoca + condanna alle spese. È quindi cruciale, per chi ha ottenuto il decreto, monitorare attentamente l’avvio della procedura subito dopo la prima udienza.
          </p>
        </AlertBox>
      </div>

      {/* ===== Provvisoria esecutorietà ===== */}
      <SectionTitle
        id="provvisoria"
        icon={Lightbulb}
        title="Provvisoria esecutorietà e sospensione"
        subtitle="Artt. 642, 648 e 649 c.p.c. - tre snodi della prima udienza"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La provvisoria esecutorietà del decreto ingiuntivo si articola su tre articoli del c.p.c. Il <strong>primo snodo</strong> è in sede di emissione: l’<InlineNormLink text="art. 642 c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art642" /> consente al giudice di concedere la provvisoria esecuzione quando il credito sia fondato su cambiale, assegno, atto pubblico, scrittura privata autenticata, titoli di credito, oppure quando vi sia pericolo di grave pregiudizio nel ritardo.
        </p>

        <p className="text-base leading-relaxed">
          Il <strong>secondo snodo</strong> è in corso di opposizione: l’<InlineNormLink text="art. 648 c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art648" /> permette al creditore opposto di chiedere la concessione della provvisoria esecutorietà se l’opposizione non è fondata su prova scritta o di pronta soluzione, ovvero per gravi motivi. È uno strumento per evitare che l’opposizione sia utilizzata in modo dilatorio.
        </p>

        <p className="text-base leading-relaxed">
          Il <strong>terzo snodo</strong> è speculare: l’<InlineNormLink text="art. 649 c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art649" /> consente all’opponente di chiedere la <strong>sospensione della provvisoria esecuzione</strong> già concessa in sede di emissione, dimostrando “gravi motivi”. Tipici esempi: disconoscimento della firma, eccezione di prescrizione fondata, evidenti errori di calcolo, contratto nullo.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art649">
          Art. 649 c.p.c. — «Il giudice istruttore, su istanza dell’opponente e quando ricorrono gravi motivi, può, con ordinanza non impugnabile, sospendere l’esecuzione provvisoria del decreto concessa a norma dell’articolo precedente.»
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          L’ordinanza che decide sull’istanza di sospensione <strong>non è impugnabile</strong> e, in caso di rigetto, l’istanza non può essere riproposta. La sospensione, una volta concessa, sospende l’eventuale processo esecutivo già avviato ai sensi dell’art. 623 c.p.c., con effetti limitati però: la sospensione non revoca il decreto come titolo esecutivo né cancella l’ipoteca iscritta in forza dello stesso, ma blocca solo gli ulteriori atti esecutivi.
        </p>
      </div>

      {/* ===== Opposizione tardiva ===== */}
      <SectionTitle
        id="tardiva"
        icon={AlertTriangle}
        title="Opposizione tardiva (art. 650 c.p.c.)"
        subtitle="Rimedio eccezionale: irregolarità notifica, caso fortuito, forza maggiore"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L’<InlineNormLink text="art. 650 c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art650" /> prevede un rimedio eccezionale per l’ingiunto che non abbia potuto proporre opposizione nei 40 giorni per cause a lui non imputabili. È <strong>l’unica via</strong> dopo lo spirare del termine ordinario, salvo i rimedi esecutivi (opposizione all’esecuzione ex art. 615 c.p.c.) quando la notifica del decreto è giuridicamente inesistente.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art650">
          Art. 650 c.p.c. — «L’opposizione è ancora ammessa se l’intimato prova di non averne avuta tempestiva conoscenza per irregolarità della notificazione del decreto o per caso fortuito o forza maggiore. In questo caso l’esecutorietà può essere sospesa a norma dell’articolo precedente. L’opposizione non è più ammessa decorsi dieci giorni dal primo atto di esecuzione.»
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          La giurisprudenza interpreta in modo <strong>restrittivo</strong> le nozioni di caso fortuito e forza maggiore. La Corte di Appello di Genova (sent. 760/2024) ha escluso che configurino tali cause: la malattia di un familiare, la quarantena dello studio legale del difensore (oggi superata dal Processo Civile Telematico), la negligenza nella gestione della corrispondenza. Sono invece tipici casi di accoglimento: notifica a indirizzo errato, omonimia (decreto notificato al “Mario Rossi” sbagliato), forza maggiore documentata (ricovero ospedaliero prolungato).
        </p>

        <AlertBox variant="info" title="Nullità vs inesistenza della notifica">
          <p className="text-sm leading-relaxed">
            La Cassazione (sez. VI, ord. n. 34161/2022) distingue con cura le due ipotesi. La <strong>nullità</strong> della notifica (es. notifica in un luogo legato al destinatario ma non corretto) deve essere fatta valere con l’opposizione tardiva ex art. 650. L’<strong>inesistenza</strong> (es. notifica in un luogo o a persona totalmente estranei al destinatario) può essere contestata anche con l’opposizione all’esecuzione ex art. 615, perché si assume che il titolo esecutivo non si sia mai perfezionato.
          </p>
        </AlertBox>

        <p className="text-base leading-relaxed">
          Il <strong>termine ultimo</strong> per l’opposizione tardiva è di <strong>10 giorni dal primo atto di esecuzione</strong>. L’onere di provare la mancata tempestiva conoscenza grava sull’opponente, che può fornirla anche per presunzioni, purché emergano elementi chiari e concreti. È irrilevante una generica possibilità di sapere del provvedimento, se manca una conoscenza effettiva e tempestiva.
        </p>
      </div>

      {/* ===== Onere della prova ===== */}
      <SectionTitle
        id="onere-prova"
        icon={Scale}
        title="Onere della prova nel giudizio di opposizione"
        subtitle="Art. 2697 c.c. e inversione formale delle parti"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Nonostante l’inversione formale, nel giudizio di opposizione l’onere della prova segue le regole generali dell’art. 2697 c.c. Il <strong>creditore opposto</strong>, pur formalmente convenuto, mantiene la qualità di <strong>attore sostanziale</strong> e deve provare i fatti costitutivi del proprio credito: titolo, esigibilità, ammontare. L’<strong>opponente</strong>, formalmente attore ma sostanzialmente convenuto, deve provare i fatti estintivi, impeditivi o modificativi (pagamento, prescrizione, compensazione, inadempimento altrui).
        </p>

        <p className="text-base leading-relaxed">
          La documentazione che ha giustificato l’emissione del decreto in fase monitoria (fatture commerciali, estratti conto, scritture contabili) può rivelarsi <strong>non sufficiente</strong> nel giudizio di opposizione, se specificamente contestata dall’opponente. Il Tribunale di Nocera Inferiore (sent. n. 830/2024) ha chiarito che la fattura, quando il rapporto sia contestato, non costituisce valido elemento di prova delle prestazioni eseguite, potendo al più rappresentare un mero indizio.
        </p>

        <p className="text-base leading-relaxed">
          A fronte di <strong>eccezione di inadempimento</strong> ex art. 1460 c.c., il creditore opposto deve provare l’avvenuto adempimento esatto della propria prestazione; non può limitarsi a far valere l’inadempimento dell’ingiunto. Analogamente, l’<strong>eccezione di compensazione</strong> impone al giudice di accertare l’an e il quantum del controcredito eccepito, prima di pronunciarsi sull’eventuale compensazione.
        </p>
      </div>

      {/* ===== Costi ===== */}
      <SectionTitle
        id="costi"
        icon={Receipt}
        title="Costi e contributo unificato"
        subtitle="Riduzione 50%, marca da bollo, parametri forensi DM 147/2022"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il principale costo dell’opposizione è il <strong>contributo unificato</strong>, disciplinato dall’<InlineNormLink text="art. 13 del D.P.R. 115/2002" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2002-05-30;115~art13" /> (Testo unico sulle spese di giustizia). Il comma 3-bis prevede che, per il procedimento monitorio e per il giudizio di opposizione in primo grado, il contributo è <strong>ridotto del 50%</strong> rispetto agli importi ordinari del rito di cognizione di pari valore. Fanno eccezione le cause di lavoro: una circolare ministeriale esclude l’ulteriore riduzione.
        </p>

        <LegalTable
          headers={["Scaglione di valore", "CU ordinario", "CU opposizione (50%)"]}
          rows={tabellaContributoUnificato}
          className="mb-4"
        />

        <p className="text-base leading-relaxed">
          A questo si aggiungono: la <strong>marca da bollo di 27 €</strong> per anticipazione forfetaria diritti di cancelleria; il compenso del difensore secondo i parametri del <strong>D.M. 147/2022</strong>, calcolato per fasi (studio, introduttiva, istruttoria, decisionale) e per scaglione di valore, con possibilità di aumento o riduzione tra il 50% e il 200% in base alla complessità della causa. Davanti al Giudice di Pace, per cause di valore inferiore a 1.033 €, i diritti di cancelleria non sono dovuti, ma restano le spese di notifica.
        </p>

        <AlertBox variant="info" title="Pagamento solo telematico">
          <p className="text-sm leading-relaxed">
            Dal 1° gennaio 2023 il contributo unificato deve essere pagato esclusivamente con modalità telematica tramite <strong>PagoPA</strong>. Dal 1° gennaio 2025, in base all’art. 14, comma 3.1, del D.P.R. 115/2002 (come modificato dalla legge di bilancio 2025), la cancelleria non procede all’iscrizione a ruolo se al ricorso non è allegata la ricevuta del CU dovuto. Allegare sempre la ricevuta telematica all’atto di opposizione e verificare con attenzione il valore della causa, pena il pagamento del CU per valore indeterminabile.
          </p>
        </AlertBox>

        <p className="text-base leading-relaxed">
          Per il calcolo preciso del contributo unificato in base al valore della causa, è disponibile lo strumento dedicato: <a href="/contributo-unificato" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Calcolatore Contributo Unificato</a>. Per la liquidazione del compenso professionale è disponibile invece il <a href="/calcolo-compenso" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Calcolatore Compenso Avvocato</a> basato sui parametri D.M. 147/2022.
        </p>
      </div>

      {/* ===== Esempio pratico ===== */}
      <SectionTitle
        id="esempio"
        icon={Lightbulb}
        title="Esempio pratico di opposizione"
        subtitle="Caso completo con calcolo termini, motivi e costi"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          <strong>Scenario.</strong> Beta S.r.l. notifica a Gamma S.r.l., il <strong>10 luglio 2026</strong>, un decreto ingiuntivo per il pagamento di 18.000 € a titolo di prestazioni di fornitura non saldate. Gamma intende opporsi sostenendo che le merci erano difettose e che ha già pagato 6.000 € a titolo di acconto.
        </p>

        <div className="border border-border bg-[oklch(0.98_0.005_85)] p-5 space-y-3" style={{ borderRadius: "0.5rem" }}>
          <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">Calcolo del termine</p>
          <p className="text-sm leading-relaxed">
            Termine ordinario: 40 giorni dal giorno successivo alla notifica (11 luglio 2026).
            <br />Dal 11 al 31 luglio: 21 giorni.
            <br />Dal 1° al 31 agosto: <strong>sospensione feriale</strong> (L. 742/1969).
            <br />Restano 19 giorni dal 1° settembre: scadenza <strong>19 settembre 2026</strong> (sabato).
            <br />Proroga ex art. 155, c. 5, c.p.c.: scadenza al <strong>21 settembre 2026</strong> (lunedì).
          </p>

          <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)] pt-2 border-t border-border">Forma e procedura</p>
          <p className="text-sm leading-relaxed">
            Atto di citazione (controversia ordinaria, non rito speciale), da notificare alla Beta S.r.l. entro il 21 settembre 2026 e da iscrivere a ruolo entro 10 giorni dalla notifica. Termine a comparire minimo 120 giorni: l’udienza non può essere fissata prima del 19 gennaio 2027.
          </p>

          <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)] pt-2 border-t border-border">Motivi di opposizione</p>
          <p className="text-sm leading-relaxed">
            (i) Inadempimento del creditore con eccezione ex art. 1460 c.c. — Beta deve provare l’adempimento esatto;
            <br />(ii) Pagamento parziale di 6.000 € (con prova documentale: bonifico tracciabile);
            <br />(iii) Domanda riconvenzionale per risarcimento danni da prestazione difettosa.
          </p>

          <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)] pt-2 border-t border-border">Costi</p>
          <p className="text-sm leading-relaxed">
            Scaglione 5.200-26.000 €: CU ordinario 237 €, ridotto del 50% per l’opposizione: <strong>118,50 €</strong>. + marca da bollo 27 €. Compenso avvocato secondo D.M. 147/2022.
          </p>

          <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)] pt-2 border-t border-border">Mediazione</p>
          <p className="text-sm leading-relaxed">
            La fornitura non rientra tra le materie soggette a mediazione obbligatoria ex art. 5 D.Lgs. 28/2010 (a meno che non si tratti di contratto bancario/assicurativo specifico): non c’è onere di mediazione.
          </p>
        </div>
      </div>

      {/* ===== Esiti del giudizio ===== */}
      <SectionTitle
        id="esiti"
        icon={Gavel}
        title="Esiti del giudizio di opposizione"
        subtitle="Accoglimento totale, parziale, rigetto, estinzione - art. 653 c.p.c."
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il giudizio di opposizione può concludersi in diversi modi, disciplinati dall’<InlineNormLink text="art. 653 c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art653" />.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art653">
          Art. 653 c.p.c. — «Se l’opposizione è rigettata con sentenza passata in giudicato o provvisoriamente esecutiva, oppure è dichiarata con ordinanza l’estinzione del processo, il decreto, che non ne sia già munito, acquista efficacia esecutiva. Se l’opposizione è accolta solo in parte, il titolo esecutivo è costituito esclusivamente dalla sentenza, ma gli atti di esecuzione già compiuti in base al decreto conservano i loro effetti nei limiti della somma o della quantità ridotta.»
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          <strong>Rigetto dell’opposizione.</strong> Le ragioni dell’opponente sono infondate. Il decreto, se non era stato dichiarato provvisoriamente esecutivo, acquista efficacia esecutiva; se era già esecutivo, l’esecutorietà è confermata. Cessano gli effetti dell’eventuale sospensione ex art. 649. L’opponente è di regola condannato al pagamento delle spese di lite.
        </p>

        <p className="text-base leading-relaxed">
          <strong>Accoglimento totale.</strong> La pretesa del creditore è infondata. Il decreto viene revocato dalla sentenza e gli atti esecutivi eventualmente compiuti sono caducati immediatamente, a prescindere dal passaggio in giudicato della sentenza. Le spese sono poste a carico del creditore opposto soccombente.
        </p>

        <p className="text-base leading-relaxed">
          <strong>Accoglimento parziale.</strong> Il credito sussiste ma per un importo inferiore. Il giudice revoca il decreto e condanna l’opponente al pagamento della somma effettivamente dovuta. La revoca è necessaria anche in caso di accoglimento parziale, perché la sentenza si sostituisce integralmente al provvedimento monitorio. Gli atti di esecuzione conservano i loro effetti nei limiti della somma ridotta.
        </p>

        <p className="text-base leading-relaxed">
          <strong>Estinzione del processo.</strong> Per inattività delle parti o rinuncia agli atti del giudizio da parte dell’opponente: il decreto, se non già esecutivo, acquista efficacia esecutiva ex art. 653 comma 1.
        </p>

        <p className="text-base leading-relaxed">
          <strong>Conciliazione</strong> ex <InlineNormLink text="art. 652 c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art652" />. Le parti raggiungono un accordo: il giudice riduce la somma o la quantità a quella stabilita, oppure le parti rinunciano espressamente al decreto. Restano fermi gli effetti degli atti esecutivi compiuti fino a concorrenza dell’importo concordato.
        </p>
      </div>

      {/* ===== Schema struttura atto ===== */}
      <SectionTitle
        id="schema-atto"
        icon={FileText}
        title="Struttura dell'atto di opposizione"
        subtitle="Sezioni essenziali, istanze cautelari, domande riconvenzionali"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L’atto di opposizione deve essere costruito secondo lo schema dell’art. 163 c.p.c., con gli opportuni adattamenti. Di seguito le sezioni essenziali da non omettere:
        </p>

        <div className="space-y-3">
          <div className="border-l-4 border-[oklch(0.75_0.10_85)] pl-4">
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">1. Intestazione</p>
            <p className="text-sm text-muted-foreground">Tribunale o Giudice di Pace competente, generalità delle parti, codici fiscali, domicili eletti, difensori con domicilio digitale (indirizzo PEC).</p>
          </div>
          <div className="border-l-4 border-[oklch(0.75_0.10_85)] pl-4">
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">2. Identificazione del decreto opposto</p>
            <p className="text-sm text-muted-foreground">Numero, data, giudice che lo ha emesso, oggetto (pagamento somma/consegna), importo ingiunto, data di notifica del decreto all’ingiunto.</p>
          </div>
          <div className="border-l-4 border-[oklch(0.75_0.10_85)] pl-4">
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">3. Esposizione dei fatti</p>
            <p className="text-sm text-muted-foreground">Ricostruzione cronologica del rapporto sottostante (contratto, fornitura, rapporto di lavoro), contestazioni intercorse, pagamenti, inadempimenti, comunicazioni rilevanti.</p>
          </div>
          <div className="border-l-4 border-[oklch(0.75_0.10_85)] pl-4">
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">4. Motivi di opposizione (in diritto)</p>
            <p className="text-sm text-muted-foreground">Distinguere vizi processuali (incompetenza, nullità notifica, difetto condizioni art. 633) e vizi di merito (inesistenza credito, pagamento, prescrizione, compensazione, inadempimento, nullità contratto). Ogni motivo va articolato in fatto e in diritto con richiamo normativo.</p>
          </div>
          <div className="border-l-4 border-[oklch(0.75_0.10_85)] pl-4">
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">5. Eventuali domande riconvenzionali</p>
            <p className="text-sm text-muted-foreground">Sezione autonoma con petitum, causa petendi e valore di ciascuna domanda. Nel rispetto delle preclusioni dell’art. 167 c.p.c.</p>
          </div>
          <div className="border-l-4 border-[oklch(0.75_0.10_85)] pl-4">
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">6. Istanza di sospensione ex art. 649 c.p.c.</p>
            <p className="text-sm text-muted-foreground">Se il DI è già esecutivo: motivare con riferimento a “gravi motivi” (fumus + periculum). Indicare l’eventuale disponibilità a prestare cauzione.</p>
          </div>
          <div className="border-l-4 border-[oklch(0.75_0.10_85)] pl-4">
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">7. Conclusioni</p>
            <p className="text-sm text-muted-foreground">Revoca totale o parziale del decreto, eventuale accoglimento delle domande riconvenzionali, condanna alle spese. Indicazione del valore della causa per il CU.</p>
          </div>
          <div className="border-l-4 border-[oklch(0.75_0.10_85)] pl-4">
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">8. Avvertimento sui termini di costituzione</p>
            <p className="text-sm text-muted-foreground">Termine a comparire (almeno 120 giorni Italia / 150 estero ex art. 163-bis) e termine per il convenuto di costituirsi almeno 70 giorni prima dell’udienza (art. 166).</p>
          </div>
          <div className="border-l-4 border-[oklch(0.75_0.10_85)] pl-4">
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">9. Procura alle liti e elenco documenti</p>
            <p className="text-sm text-muted-foreground">Procura in calce o a margine con sottoscrizione autenticata. Elenco di tutti i documenti allegati. Mezzi di prova richiesti.</p>
          </div>
        </div>

        <AlertBox variant="info" title="Iscrizione a ruolo con originale e procura">
          <p className="text-sm leading-relaxed">
            Per evitare improcedibilità, depositare in cancelleria entro 10 giorni dalla notifica l’originale dell’atto notificato con procura valida, non una mera “velina”. Allegare la ricevuta PagoPA del contributo unificato (50% del CU ordinario) e la marca da bollo da 27 €.
          </p>
        </AlertBox>
      </div>

      {/* ===== Errori comuni ===== */}
      <SectionTitle
        id="errori-comuni"
        icon={FileWarning}
        title="Errori comuni e come evitarli"
        subtitle="Pitfalls ricorrenti nella prassi forense"
      />
      <div className="space-y-3">
        <p className="text-base leading-relaxed">
          L’opposizione a decreto ingiuntivo è terreno fertile per errori anche gravi che possono tradursi nella perdita definitiva del rimedio. Ecco i più frequenti:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="border border-border bg-card p-4" style={{ borderRadius: "0.375rem" }}>
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">1. Calcolo errato del termine</p>
            <p className="text-xs text-muted-foreground mt-1">Sottovalutazione della sospensione feriale (1-31 agosto), errato dies a quo per notifiche ex art. 140 c.p.c., confusione tra data di emissione e data di notifica.</p>
          </div>
          <div className="border border-border bg-card p-4" style={{ borderRadius: "0.375rem" }}>
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">2. Forma dell’atto sbagliata</p>
            <p className="text-xs text-muted-foreground mt-1">Proporre con citazione un’opposizione in materia di lavoro/locazione, o senza depositare in cancelleria entro i 40 giorni (Cass. SS.UU. 927/2022).</p>
          </div>
          <div className="border border-border bg-card p-4" style={{ borderRadius: "0.375rem" }}>
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">3. Iscrizione con “velina”</p>
            <p className="text-xs text-muted-foreground mt-1">Depositare una copia non sottoscritta dell’atto, senza l’originale con procura: l’opposizione viene dichiarata improcedibile.</p>
          </div>
          <div className="border border-border bg-card p-4" style={{ borderRadius: "0.375rem" }}>
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">4. Procura invalida</p>
            <p className="text-xs text-muted-foreground mt-1">Cass. 14674/2014: l’opposizione senza valida procura è inidonea a evitare il passaggio in giudicato. Verificare data e sottoscrizione.</p>
          </div>
          <div className="border border-border bg-card p-4" style={{ borderRadius: "0.375rem" }}>
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">5. Omessa istanza ex art. 649</p>
            <p className="text-xs text-muted-foreground mt-1">Quando il DI è già provvisoriamente esecutivo, omettere la richiesta di sospensione fa proseguire l’esecuzione forzata in pendenza di opposizione.</p>
          </div>
          <div className="border border-border bg-card p-4" style={{ borderRadius: "0.375rem" }}>
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">6. CU non dimezzato</p>
            <p className="text-xs text-muted-foreground mt-1">Pagare il contributo unificato pieno invece del 50% dovuto ex art. 13 D.P.R. 115/2002 (eccezione: lavoro).</p>
          </div>
          <div className="border border-border bg-card p-4" style={{ borderRadius: "0.375rem" }}>
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">7. Motivi generici</p>
            <p className="text-xs text-muted-foreground mt-1">Eccezioni non specifiche o non sostenute da elementi probatori. Il giudice tratta il DI come incontestato sui punti generici.</p>
          </div>
          <div className="border border-border bg-card p-4" style={{ borderRadius: "0.375rem" }}>
            <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)]">8. Mediazione dimenticata (per l’opposto)</p>
            <p className="text-xs text-muted-foreground mt-1">Per il creditore opposto: omettere di avviare la mediazione assegnata dal giudice causa improcedibilità + revoca + condanna alle spese.</p>
          </div>
        </div>
      </div>

      {/* ===== FAQ ===== */}
      <SectionTitle
        id="faq"
        icon={HelpCircle}
        title="Domande Frequenti (FAQ)"
        subtitle="Risposte alle domande più cercate sull'opposizione a decreto ingiuntivo"
      />
      <FAQ items={faqData} />

      {/* ===== Normativa ===== */}
      <SectionTitle
        id="normativa"
        icon={Scale}
        title="Normativa di Riferimento"
        subtitle="Fonti legislative e regolamentari (versione vigente)"
      />
      <NormativaRefTable items={normativaRiferimento} />

      {/* ===== Fonti ===== */}
      <SectionTitle
        id="fonti"
        icon={Link2}
        title="Fonti e Riferimenti"
        subtitle="Fonti istituzionali e giurisprudenziali utilizzate"
      />
      <div className="space-y-3">
        <p className="text-base leading-relaxed">
          Le informazioni contenute in questa pagina sono state elaborate sulla base delle seguenti fonti istituzionali e giurisprudenziali, verificate alla data del 16 maggio 2026:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>
            <a href="https://www.normattiva.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              Normattiva.it
            </a>{" "}
            — Portale della normativa vigente (testi coordinati di leggi, decreti e regolamenti)
          </li>
          <li>
            <a href="https://www.gazzettaufficiale.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              Gazzetta Ufficiale della Repubblica Italiana
            </a>{" "}
            — Pubblicazione ufficiale degli atti normativi
          </li>
          <li>
            <a href="https://www.giustizia.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              Ministero della Giustizia
            </a>{" "}
            — Circolari ministeriali e organizzazione giudiziaria
          </li>
          <li>
            <a href="https://tribunale-milano.giustizia.it/it/ricorso_in_opposizione_a_d_i_.page" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              Tribunale di Milano — Ricorso in Opposizione a D.I. (GdP)
            </a>{" "}
            — Schema procedurale ufficiale
          </li>
          <li>
            <a href="https://www.brocardi.it/codice-di-procedura-civile/libro-quarto/titolo-i/capo-i/art645.html" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              Brocardi.it — Art. 645 c.p.c.
            </a>{" "}
            — Commento e massime giurisprudenziali sull’opposizione
          </li>
          <li>
            <a href="https://www.jacobacci-law.com/hubfs/News/Cassazione%20SU%2019596.20%20IT.pdf?hsLang=it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              Cassazione SS.UU. n. 19596/2020
            </a>{" "}
            — Onere della mediazione sul creditore opposto
          </li>
          <li>
            <a href="https://www.cortedicassazione.it/resources/cms/documents/26727_10_2024_civ_noindex.pdf" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              Cassazione SS.UU. n. 26727/2024
            </a>{" "}
            — Modifica della domanda dell’opposto
          </li>
          <li>
            <a href="https://www.processociviletelematico.it/2025/08/07/opposizione-a-decreto-ingiuntivo-dopo-la-riforma-cartabia-cosa-e-cambiato-e-cosa-no/" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              Processo Civile Telematico — Cartabia e opposizione
            </a>{" "}
            — Analisi delle novità post-riforma
          </li>
          <li>
            <a href="https://leg16.camera.it/561?appro=579" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              Camera dei Deputati — L. 218/2011
            </a>{" "}
            — Soppressione del dimezzamento dei termini di comparizione
          </li>
          <li>
            <a href="https://www.bosettiegatti.eu/info/norme/statali/1969_0742.htm" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              Bosetti &amp; Gatti — L. 742/1969
            </a>{" "}
            — Sospensione feriale dei termini processuali
          </li>
          <li>
            <a href="https://www.ordineavvocatimilano.it/it/i-parametri-forensi-aggiornati-dal-dm-13-agosto-2022-n-147/p592" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              Ordine Avvocati Milano — D.M. 147/2022
            </a>{" "}
            — Parametri forensi aggiornati
          </li>
          <li>
            <a href="https://studiolegaledalpiaz.it/blog/il-correttivo-alla-riforma-cartabia-d-lgs-n-149-2022-le-principali-modifiche-al-processo-civile/" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              Studio Dal Piaz — Correttivo Cartabia D.Lgs. 164/2024
            </a>{" "}
            — Analisi delle modifiche al processo civile
          </li>
        </ul>
      </div>
    </ToolLayout>
  );
}
