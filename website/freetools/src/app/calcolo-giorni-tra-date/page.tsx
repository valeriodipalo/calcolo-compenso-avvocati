import { CalendarDays, Calculator, BookOpen, HelpCircle, Scale, Clock, Gavel, CalendarClock, Table as TableIcon, FileSpreadsheet, AlertTriangle, Link2, Users } from "lucide-react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { LegalTable } from "@/components/shared/LegalTable";
import { NormativaQuote } from "@/components/shared/NormativaQuote";
import { InlineNormLink } from "@/components/shared/InlineNormLink";
import { FAQ } from "@/components/shared/FAQ";
import { AlertBox } from "@/components/shared/AlertBox";
import { BulletList } from "@/components/shared/BulletList";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";
import { CircolariTable } from "@/components/shared/CircolariTable";
import Calcolatore from "@/components/calcolo-giorni-tra-date/Calcolatore";
import {
  normativaRiferimento,
  circolariMinisteriali,
  sections,
} from "@/data/calcolo-giorni-tra-date/giorniDateData";
import { faqData } from "@/data/calcolo-giorni-tra-date/faqData";
import { JsonLd, articleSchema, webApplicationSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "Calcolo Giorni tra Due Date Online 2026",
  description:
    "Calcola i giorni tra due date online. Contagiorni con giorni lavorativi, feriali e liberi, sospensione feriale, festività 2026 e art. 155 c.p.c.",
  alternates: {
    canonical: "/calcolo-giorni-tra-date",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/calcolo-giorni-tra-date",
    title: "Calcolo Giorni tra Due Date Online 2026",
    description:
      "Calcola i giorni tra due date online. Contagiorni con giorni lavorativi, feriali e liberi, sospensione feriale, festività 2026 e art. 155 c.p.c.",
    images: [{ url: HERO_IMG, width: 1920, height: 1072, alt: "Calcolo Giorni tra Date" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolo Giorni tra Due Date Online 2026",
    description:
      "Contagiorni online con giorni lavorativi, feriali, sospensione feriale (L. 742/1969) e festività italiane 2026 aggiornate (L. 151/2025 San Francesco).",
  },
};

const toolConfig: ToolConfig = {
  slug: "calcolo-giorni-tra-date",
  title: "Calcolo Giorni tra Due Date 2026",
  shortTitle: "Giorni tra Date",
  icon: CalendarDays,
  updatedDate: "Aggiornato al 2026",
  heroImage: "",
  heroEyebrow: "Contagiorni, Calcolatore Scadenze e Guida Legale",
  heroTitle: "Calcolo Giorni tra Due Date 2026",
  heroDescription:
    "Calcolatore online per contare i giorni tra due date con breakdown anni/mesi/settimane/giorni, cinque modalità di conteggio (lavorativi, feriali, liberi), sospensione feriale L. 742/1969, proroga al primo giorno non festivo (art. 155 c.p.c.) e festività italiane aggiornate al 2026 incluso San Francesco d'Assisi (L. 151/2025).",
  heroReference:
    "Art. 155 c.p.c. - Art. 2963 c.c. - L. 742/1969 - L. 260/1949 - L. 151/2025",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "Calendario delle festività nazionali aggiornato al 2026 con la nuova festa di San Francesco d'Assisi (L. 151/2025, in vigore dal 1° gennaio 2026).",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    { label: "Gazzetta Ufficiale", url: "https://www.gazzettaufficiale.it" },
    { label: "Brocardi (codici)", url: "https://www.brocardi.it" },
  ],
};

export default function CalcoloGiorniTraDatePage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ===== Structured Data ===== */}

      {/* Article */}
      <JsonLd
        data={articleSchema({
          headline: "Calcolo Giorni tra Due Date 2026: Contagiorni, Termini Processuali, Festività e Sospensione Feriale",
          description:
            "Guida completa al calcolo dei giorni tra due date in Italia: art. 155 c.p.c., art. 2963 c.c., giorni lavorativi vs feriali vs liberi, sospensione feriale L. 742/1969, festività italiane 2026 con la nuova San Francesco d'Assisi (L. 151/2025), formule Excel e applicazioni pratiche.",
          path: "/calcolo-giorni-tra-date",
          datePublished: "2026-04-19",
          dateModified: "2026-04-19",
          image: HERO_IMG,
          sections: [
            "Come funziona il calcolo dei giorni",
            "Tipologie di giorni: lavorativi, feriali, liberi",
            "Il calcolo dei termini processuali",
            "Sospensione feriale 1-31 agosto",
            "Termini a ritroso",
            "Festività nazionali 2025-2027",
            "Applicazioni pratiche",
            "Formule Excel per il calcolo dei giorni",
            "Errori comuni",
            "Fonti e riferimenti",
            "Domande Frequenti (FAQ)",
          ],
        })}
      />

      {/* WebApplication */}
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Giorni tra Date Online",
          description: "Contagiorni multi-modalità: giorni tra due date con breakdown anni/mesi/settimane, aggiungi/sottrai giorni a una data, termini processuali con sospensione feriale e proroga festiva.",
          path: "/calcolo-giorni-tra-date",
          applicationCategory: "UtilitiesApplication",
        })}
      />

      {/* ===== Calcolatore ===== */}
      <Calcolatore />
      <p className="text-xs text-muted-foreground text-center mt-3">
        Calendario festività 2024-2028 verificato. Include la nuova festa nazionale di San Francesco d'Assisi (4 ottobre) introdotta dalla L. 151/2025.
      </p>

      {/* ===== Sezione 1: Come funziona ===== */}
      <SectionTitle id="come-funziona" icon={Calculator} title="Come funziona il calcolo dei giorni tra due date" subtitle="Formula, metodo manuale e breakdown temporale" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>calcolo dei giorni tra due date</strong> è un'operazione matematica semplice nel principio, ma regolata con precisione nel diritto italiano. La formula di base consiste nel sottrarre la data iniziale dalla data finale: giorni = data_finale − data_iniziale. Il risultato dipende però da una scelta fondamentale: includere o escludere il giorno iniziale nel conteggio. Nel diritto italiano si applica il principio <strong>dies a quo non computatur in termino, dies ad quem computatur</strong>: il giorno iniziale NON si conta, il giorno finale SI. Questa regola è codificata sia nell'<InlineNormLink text="art. 155 c.p.c." url="https://www.brocardi.it/codice-di-procedura-civile/libro-primo/titolo-vi/capo-ii/art155.html" /> per i termini processuali, sia nell'<InlineNormLink text="art. 2963 c.c." url="https://www.brocardi.it/codice-civile/libro-sesto/titolo-v/capo-i/sezione-iv/art2963.html" /> per i termini sostanziali.
        </p>
        <div className="bg-[oklch(0.97_0.005_250)] border border-[oklch(0.90_0.02_250)] p-5 text-center" style={{ borderRadius: "0.375rem" }}>
          <p className="text-xl font-mono font-bold text-[oklch(0.25_0.04_250)]">
            Giorni = Data_Finale − Data_Iniziale
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Dies a quo escluso, dies ad quem incluso (regola ordinaria)
          </p>
        </div>
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Esempio pratico</h3>
        <p className="text-base leading-relaxed">
          Un termine di 30 giorni decorrente dal 10 aprile 2026: si esclude il 10 aprile (dies a quo), il primo giorno computato è l'11 aprile, il termine scade il 10 maggio 2026 (dies ad quem incluso). Matematicamente: 10 maggio − 10 aprile = 30 giorni. Se il 10 maggio fosse festivo, la scadenza si proroga al primo giorno non festivo successivo (art. 155, comma 4, c.p.c.).
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Metodo manuale mese per mese</h3>
        <p className="text-base leading-relaxed">
          Per calcolare manualmente i giorni tra due date, si procede così: (1) si contano i giorni residui dal giorno successivo alla data iniziale fino alla fine del mese di inizio; (2) si sommano i giorni di tutti i mesi interi compresi fra inizio e fine; (3) si aggiungono i giorni del mese finale fino alla data finale inclusa. Esempio: dal 15 marzo 2026 al 22 giugno 2026 = (31−15) + 30 (aprile) + 31 (maggio) + 22 = 16 + 30 + 31 + 22 = 99 giorni.
        </p>
        <AlertBox variant="info" title="Attenzione a febbraio e agli anni bisestili">
          <p className="leading-relaxed">
            Febbraio ha <strong>28 giorni</strong> negli anni comuni e <strong>29 giorni</strong> negli anni bisestili. Un anno è bisestile se divisibile per 4, con eccezione degli anni secolari che sono bisestili solo se divisibili per 400. Anni bisestili recenti: 2020, 2024, <strong>2028</strong>. Il 2025, 2026 e 2027 NON sono bisestili (365 giorni ciascuno).
          </p>
        </AlertBox>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Breakdown anni, mesi, settimane e giorni</h3>
        <p className="text-base leading-relaxed">
          Il nostro calcolatore restituisce anche il <strong>breakdown temporale</strong>: una stessa differenza di giorni può essere espressa come combinazione di anni, mesi, settimane e giorni residui. L'<InlineNormLink text="art. 2963, comma 4, c.c." url="https://www.brocardi.it/codice-civile/libro-sesto/titolo-v/capo-i/sezione-iv/art2963.html" /> stabilisce che nel calcolo a mesi il termine scade nel giorno del mese numericamente corrispondente a quello del mese iniziale, senza riguardo ai giorni effettivi di ciascun mese.
        </p>
        <NormativaQuote url="https://www.brocardi.it/codice-civile/libro-sesto/titolo-v/capo-i/sezione-iv/art2963.html">
          Art. 2963, co. 4, cod. civ.: "La prescrizione a mesi si verifica nel mese di scadenza e nel giorno di questo corrispondente al giorno del mese iniziale. Se nel mese di scadenza manca tale giorno, il termine si compie con l'ultimo giorno dello stesso mese."
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          Un termine di 2 mesi decorrente dal 31 gennaio scade il 31 marzo (gennaio e marzo hanno entrambi 31 giorni). Un termine di 1 mese dal 31 gennaio scade il 28 febbraio (o il 29 se l'anno è bisestile), perché febbraio non ha il giorno numericamente corrispondente.
        </p>
      </div>

      {/* ===== Sezione 2: Tipologie di giorni ===== */}
      <SectionTitle id="tipologie-giorni" icon={CalendarDays} title="Tipologie di giorni: lavorativi, feriali, festivi, liberi" subtitle="Cinque modalità di conteggio secondo il diritto italiano" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Nel diritto italiano esistono diverse <strong>tipologie di giorni</strong> con regole di conteggio differenti. La distinzione è fondamentale: un termine di 30 <em>giorni naturali</em> è cosa diversa da 30 <em>giorni lavorativi</em>, e i <em>giorni liberi</em> seguono regole ancora diverse. Il nostro calcolatore offre cinque modalità di conteggio per coprire tutti i casi pratici, dal calcolo generico al termine processuale strict.
        </p>
        <LegalTable
          headers={["Tipo di giorno", "Definizione", "Esempio di uso", "Norma"]}
          rows={[
            ["Giorni naturali (consecutivi)", "Tutti i giorni del calendario (weekend + festivi inclusi)", "Termini processuali civili ordinari (30 gg appello)", "Art. 155 c.p.c."],
            ["Giorni feriali", "Giorni lavorativi in senso stretto (esclude sabati, domeniche, festività)", "Preavvisi in alcuni CCNL", "Contratti collettivi"],
            ["Giorni lavorativi", "Sinonimo di feriali; a volte include sabato secondo il CCNL", "Preavviso di licenziamento", "CCNL specifici"],
            ["Giorni festivi", "Domeniche + 13 festività nazionali L. 260/1949 e L. 151/2025", "Giorni in cui non decorrono i termini (proroga)", "L. 260/1949, L. 151/2025"],
            ["Giorni liberi", "Si escludono SIA dies a quo SIA dies ad quem", "Art. 163 bis c.p.c. (120 gg citazione)", "Art. 163 bis c.p.c."],
          ]}
        />
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Le cinque modalità del nostro calcolatore</h3>
        <BulletList items={[
          "Tutti i giorni (calendario completo): include weekend e festività, usato nei termini processuali civili ordinari",
          "Esclude solo le domeniche: rileva per alcune scadenze tributarie e contrattuali specifiche",
          "Esclude sabati e domeniche (weekend): utile per conteggi di natura commerciale che ignorano il weekend",
          "Esclude domeniche e festività (non sabati): formula classica dei giorni feriali secondo la tradizione",
          "Solo giorni lavorativi (esclude sabati + domeniche + festività): il conteggio più restrittivo, tipico dei preavvisi CCNL moderni",
        ]} />
        <AlertBox variant="warning" title="Attenzione alla formulazione del termine">
          <p className="leading-relaxed">
            La differenza tra "30 giorni" e "30 giorni lavorativi" può essere di 10-14 giorni di calendario. Quando interpreti una scadenza contrattuale, legale o fiscale, verifica sempre se il legislatore o le parti hanno specificato la tipologia. In dubbio, nelle obbligazioni civili prevalgono i giorni naturali; nei rapporti di lavoro la disciplina è rimessa al CCNL applicabile.
          </p>
        </AlertBox>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">I giorni liberi: esempio pratico dell'art. 163 bis c.p.c.</h3>
        <p className="text-base leading-relaxed">
          I <strong>giorni liberi</strong> costituiscono un regime speciale dove non si computano né il dies a quo né il dies ad quem. L'esempio classico è l'<InlineNormLink text="art. 163 bis c.p.c." url="https://www.brocardi.it/codice-di-procedura-civile/libro-secondo/titolo-i/capo-i/sezione-i/art163bis.html" /> che impone almeno 120 giorni liberi tra la notifica della citazione e l'udienza di comparizione (150 se la notifica avviene all'estero). Se la citazione è notificata il 10 marzo, il primo giorno libero è l'11 marzo e il centoventesimo giorno libero è l'8 luglio: l'udienza non può essere fissata prima del 9 luglio. La ratio della norma è garantire alla controparte un intervallo effettivo per preparare la difesa, senza che il giorno di notifica o la giornata dell'udienza siano già occupati da altri adempimenti.
        </p>
      </div>

      {/* ===== Sezione 3: Termini processuali ===== */}
      <SectionTitle id="termini-processuali" icon={Gavel} title="Il calcolo dei termini processuali (art. 155 c.p.c.)" subtitle="La norma cardine del computo nel processo civile italiano" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<InlineNormLink text="art. 155 del codice di procedura civile" url="https://www.brocardi.it/codice-di-procedura-civile/libro-primo/titolo-vi/capo-ii/art155.html" /> è la norma cardine per il calcolo dei termini nel processo civile italiano. Si applica a tutti i termini processuali ordinari e, per richiamo, anche al processo amministrativo (art. 54 c.p.a.) e tributario. I suoi principi sono replicati, per i termini sostanziali di prescrizione e decadenza, dall'art. 2963 c.c.
        </p>
        <NormativaQuote url="https://www.brocardi.it/codice-di-procedura-civile/libro-primo/titolo-vi/capo-ii/art155.html">
          Art. 155 c.p.c.: "Nel computo dei termini a giorni o ad ore, si escludono il giorno o l'ora iniziali. Per il computo dei termini a mesi o ad anni, si osserva il calendario comune. I giorni festivi si computano nel termine. Se il giorno di scadenza è festivo, la scadenza è prorogata di diritto al primo giorno seguente non festivo. La proroga prevista dal quarto comma si applica altresì ai termini per il compimento degli atti processuali svolti fuori dell'udienza che scadono nella giornata del sabato. Resta fermo il regolare svolgimento delle udienze e di ogni altra attività giudiziaria, anche svolta da ausiliari, nella giornata del sabato, che ad ogni effetto è considerata lavorativa."
        </NormativaQuote>
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">I cinque commi dell'art. 155 c.p.c.</h3>
        <LegalTable
          headers={["Comma", "Contenuto", "Applicazione pratica"]}
          rows={[
            ["1", "Nei termini a giorni o ore, si escludono il giorno o l'ora iniziali", "Termine di 30 giorni dal 10 aprile = computo inizia dall'11 aprile"],
            ["2", "Per termini a mesi o anni, si osserva il calendario comune", "Termine di 2 mesi dal 31/01 scade il 31/03 (giorno numericamente corrispondente)"],
            ["3", "I giorni festivi si computano nel termine", "30 giorni include sabati, domeniche e festività nel conteggio totale"],
            ["4", "Se la scadenza cade in giorno festivo, proroga al primo giorno non festivo", "Scadenza 25 dicembre 2026 (festivo) → prorogato al 28 dicembre (lun)"],
            ["5", "La proroga del co. 4 vale anche per atti fuori udienza che scadono di sabato", "Deposito di atto in scadenza sabato → prorogato al lunedì (L. 263/2005)"],
          ]}
        />
        <AlertBox variant="info" title="Sabato: lavorativo per le udienze, non per gli atti">
          <p className="leading-relaxed">
            Il comma 5 dell'art. 155 c.p.c. (introdotto dalla L. 263/2005) introduce una distinzione sottile: gli atti processuali <strong>fuori udienza</strong> (depositi, notifiche, memorie) in scadenza di sabato sono prorogati al lunedì. Le udienze e l'attività giudiziaria ordinaria (anche degli ausiliari come i CTU) si svolgono invece regolarmente anche il sabato, che resta giorno lavorativo "a ogni effetto".
          </p>
        </AlertBox>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Dies a quo e dies ad quem</h3>
        <p className="text-base leading-relaxed">
          Il <strong>dies a quo</strong> è il giorno iniziale dal quale decorre il termine; il <strong>dies ad quem</strong> è il giorno finale di scadenza. La regola generale del diritto italiano, risalente alla tradizione giuridica romana, è sintetizzata nella locuzione latina <em>dies a quo non computatur in termino, dies ad quem computatur</em>. In pratica: il dies a quo si esclude, il dies ad quem si include. Esempio: un termine di 60 giorni per proporre ricorso per Cassazione contro una sentenza notificata il 15 gennaio 2026 decorre dal 16 gennaio (dies a quo escluso) e scade il 16 marzo 2026 (dies ad quem incluso).
        </p>
        <AlertBox variant="warning" title="Proroga al primo giorno non festivo — effetto automatico">
          <p className="leading-relaxed">
            Se il <strong>dies ad quem</strong> calcolato cade in giorno festivo, la scadenza si sposta automaticamente al <strong>primo giorno non festivo successivo</strong>. L'effetto è di diritto: non serve alcuna istanza. Esempio 2026: una scadenza del 25 dicembre venerdì (Natale) si proroga al 28 dicembre lunedì, perché il 26 sabato (Santo Stefano festivo) e il 27 domenica sono entrambi non utili.
          </p>
        </AlertBox>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Art. 2963 c.c.: termini sostanziali di prescrizione</h3>
        <p className="text-base leading-relaxed">
          L'<InlineNormLink text="art. 2963 del Codice Civile" url="https://www.brocardi.it/codice-civile/libro-sesto/titolo-v/capo-i/sezione-iv/art2963.html" /> replica gli stessi principi per i termini sostanziali (prescrizione di 5 anni per risarcimento, 10 anni per crediti ordinari, decadenze contrattuali). La differenza principale con l'art. 155 c.p.c. è la precisazione che la prescrizione si verifica "con lo spirare dell'ultimo istante del giorno finale": significa che il debitore può pagare fino alle 23:59:59 del dies ad quem per interrompere la prescrizione.
        </p>
      </div>

      {/* ===== Sezione 4: Sospensione feriale ===== */}
      <SectionTitle id="sospensione-feriale" icon={Clock} title="Sospensione feriale dei termini (1-31 agosto)" subtitle="L. 742/1969 come modificata dal D.L. 132/2014" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>sospensione feriale dei termini processuali</strong> è una delle specificità più importanti del sistema processuale italiano. Durante il mese di agosto, per 31 giorni complessivi (dal 1° al 31 agosto di ogni anno), i termini processuali ordinari NON decorrono. La normativa è contenuta nell'art. 1 della <InlineNormLink text="Legge 7 ottobre 1969, n. 742" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742" />, come modificata dal <InlineNormLink text="D.L. 132/2014" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132" /> (convertito in L. 162/2014).
        </p>
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742">
          Art. 1, co. 1, L. 742/1969: "Il decorso dei termini processuali relativi alle giurisdizioni ordinarie ed a quelle amministrative è sospeso di diritto dal 1° al 31 agosto di ciascun anno, e riprende a decorrere dalla fine del periodo di sospensione. Ove il decorso abbia inizio durante il periodo di sospensione, l'inizio stesso è differito alla fine di detto periodo."
        </NormativaQuote>
        <AlertBox variant="info" title="La riforma del 2014: da 46 a 31 giorni">
          <p className="leading-relaxed">
            Fino al 2014 la sospensione feriale durava <strong>46 giorni</strong> (dal 1° agosto al 15 settembre). Il D.L. 132/2014, nell'ambito del pacchetto di riforme per accelerare i processi civili e smaltire l'arretrato, ha ridotto il periodo a <strong>31 giorni</strong> (1-31 agosto), a partire dal 2015. È una delle riforme processuali più incisive dell'ultimo decennio.
          </p>
        </AlertBox>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Procedimenti esclusi dalla sospensione</h3>
        <p className="text-base leading-relaxed">
          La sospensione feriale NON si applica ai procedimenti caratterizzati da urgenza particolare. Di conseguenza, nei casi seguenti i termini continuano a decorrere anche durante agosto:
        </p>
        <BulletList items={[
          "Cause in materia di alimenti (necessità di sussistenza immediata)",
          "Controversie individuali di lavoro e previdenziali",
          "Procedimenti cautelari (sequestri, provvedimenti d'urgenza ex art. 700 c.p.c.)",
          "Opposizioni all'esecuzione (art. 615 c.p.c.) e opposizioni di terzo",
          "Giudizi di sfratto per morosità o per finita locazione",
          "Procedimenti di dichiarazione e revoca del fallimento",
          "Procedure di esecuzione forzata (pignoramenti, distribuzione somme)",
          "Procedimenti penali (soggetti a disciplina autonoma ex art. 129 disp. att. c.p.p.)",
        ]} />
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Esempio 1: termine di 30 giorni dal 20 luglio 2026</h3>
        <div className="bg-[oklch(0.97_0.005_250)] border border-[oklch(0.90_0.02_250)] p-5" style={{ borderRadius: "0.375rem" }}>
          <p className="font-mono text-sm text-[oklch(0.30_0.04_250)]">
            Dies a quo: 20 luglio 2026 (escluso)
          </p>
          <p className="font-mono text-sm text-[oklch(0.30_0.04_250)]">
            Dal 21 al 31 luglio = 11 giorni computati
          </p>
          <p className="font-mono text-sm text-[oklch(0.30_0.04_250)]">
            Dal 1° al 31 agosto = SOSPENSIONE (0 giorni computati)
          </p>
          <p className="font-mono text-sm text-[oklch(0.30_0.04_250)]">
            Dal 1° al 19 settembre = altri 19 giorni
          </p>
          <p className="font-mono text-sm font-bold text-[oklch(0.25_0.04_250)] mt-2">
            Totale: 11 + 19 = 30 giorni — Scadenza: 19 settembre 2026
          </p>
        </div>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Esempio 2: termine che inizia il 15 agosto 2026</h3>
        <div className="bg-[oklch(0.97_0.005_250)] border border-[oklch(0.90_0.02_250)] p-5" style={{ borderRadius: "0.375rem" }}>
          <p className="font-mono text-sm text-[oklch(0.30_0.04_250)]">
            Il dies a quo cade nel periodo feriale
          </p>
          <p className="font-mono text-sm text-[oklch(0.30_0.04_250)]">
            Inizio del computo differito al 1° settembre 2026
          </p>
          <p className="font-mono text-sm text-[oklch(0.30_0.04_250)]">
            40 giorni dal 2 settembre (1° settembre = dies a quo)
          </p>
          <p className="font-mono text-sm font-bold text-[oklch(0.25_0.04_250)] mt-2">
            Scadenza teorica: 11 ottobre 2026 (domenica) → prorogata al 12 ottobre 2026 (lunedì)
          </p>
        </div>

        <AlertBox variant="warning" title="Termini lunghi di impugnazione (6 mesi)">
          <p className="leading-relaxed">
            Il <strong>termine lungo</strong> di impugnazione (6 mesi dalla pubblicazione della sentenza, art. 327 c.p.c.) è soggetto a sospensione feriale: se il dies ad quem cade durante agosto, il termine si prolunga di 31 giorni (i giorni di agosto). Esempio: sentenza pubblicata il 25 settembre 2025 → termine lungo scadrebbe il 25 marzo 2026, ma se la pubblicazione fosse il 25 febbraio 2026 il termine cadrebbe il 25 agosto, dunque si proroga al 25 settembre 2026 (31 giorni di agosto sottratti al decorso).
          </p>
        </AlertBox>
      </div>

      {/* ===== Sezione 5: Termini a ritroso ===== */}
      <SectionTitle id="termini-ritroso" icon={CalendarClock} title="Termini a ritroso: la regola della Cassazione" subtitle="Sent. n. 14767/2014 — la proroga opera all'indietro" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          I <strong>termini a ritroso</strong> sono quelli che si computano all'indietro dalla data di scadenza, indicando il momento <em>entro il quale</em> o <em>prima del quale</em> deve essere compiuto un determinato adempimento. L'esempio classico sono le <strong>memorie scritte</strong> da depositare prima di un'udienza, o i termini di difesa nel procedimento cautelare. Un termine di 10 giorni a ritroso dall'udienza del 20 giugno 2026 impone il deposito entro il 10 giugno 2026.
        </p>
        <p className="text-base leading-relaxed">
          La <strong>Corte di Cassazione</strong>, con sentenza <strong>n. 14767 del 30 giugno 2014</strong> (Sez. III), ha chiarito un punto cruciale: quando il dies ad quem di un termine a ritroso cade in giorno festivo, la proroga prevista dall'art. 155, co. 4, c.p.c. deve operare <strong>anch'essa a ritroso</strong>. Il termine non si sposta al primo giorno non festivo <em>successivo</em>, ma al primo giorno non festivo <em>precedente</em>. La ratio è tutelare l'intervallo temporale di difesa: prorogare in avanti abbrevierebbe il tempo riconosciuto alla parte.
        </p>
        <div className="bg-[oklch(0.97_0.005_250)] border border-[oklch(0.90_0.02_250)] p-5" style={{ borderRadius: "0.375rem" }}>
          <p className="text-sm text-[oklch(0.30_0.04_250)] font-semibold mb-2">Esempio Cass. 14767/2014:</p>
          <p className="font-mono text-sm text-[oklch(0.30_0.04_250)]">
            Udienza: 20 giugno 2026 (sabato)
          </p>
          <p className="font-mono text-sm text-[oklch(0.30_0.04_250)]">
            Termine a ritroso: 5 giorni prima
          </p>
          <p className="font-mono text-sm text-[oklch(0.30_0.04_250)]">
            Dies ad quem teorico: 15 giugno 2026 (lunedì) — non festivo
          </p>
          <p className="font-mono text-sm text-[oklch(0.30_0.04_250)]">
            [Se fosse stato domenica 14 giugno → anticipato al sabato 13 giugno]
          </p>
          <p className="font-mono text-sm font-bold text-[oklch(0.25_0.04_250)] mt-2">
            Regola: anticipare il dies ad quem, mai posticiparlo
          </p>
        </div>
        <AlertBox variant="info" title="Cass. Sez. Lavoro, ord. n. 30701/2024">
          <p className="leading-relaxed">
            La pronuncia più recente conferma l'orientamento: nei termini a ritroso, lo spostamento della scadenza per dies ad quem festivo <strong>deve sempre anticiparsi</strong> al giorno non festivo cronologicamente precedente, per non comprimere il tempo riconosciuto alla parte interessata. L'orientamento è ormai consolidato e applicato uniformemente dalla giurisprudenza di legittimità.
          </p>
        </AlertBox>
      </div>

      {/* ===== Sezione 6: Festività ===== */}
      <SectionTitle id="festivita" icon={TableIcon} title="Festività nazionali italiane 2025-2027" subtitle="Calendario completo con la nuova festa di San Francesco d'Assisi" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Le <strong>festività nazionali italiane</strong> sono stabilite dalla <InlineNormLink text="Legge 27 maggio 1949, n. 260" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1949-05-27;260" /> e successive modifiche. Fino al 2025 le festività nazionali erano 12. <strong>Dal 1° gennaio 2026</strong> se ne aggiunge una: il 4 ottobre, festa nazionale di <strong>San Francesco d'Assisi</strong>, patrono d'Italia, istituita dalla <InlineNormLink text="Legge 8 ottobre 2025, n. 151" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-10-08;151" /> (pubblicata in GU n. 236 del 10 ottobre 2025). Il totale sale quindi a <strong>13 festività nazionali</strong>, più tutte le domeniche.
        </p>
        <AlertBox variant="success" title="Novità 2026: San Francesco d'Assisi (L. 151/2025)">
          <p className="leading-relaxed">
            La L. 151/2025 ha modificato l'art. 2 L. 260/1949 inserendo tra i giorni festivi civili anche il 4 ottobre, festa nazionale di San Francesco d'Assisi. La finalità legislativa: promuovere i valori di pace, fratellanza, tutela dell'ambiente e solidarietà. La legge entra in vigore il 1° gennaio 2026. <strong>Nel 2026 cade di domenica</strong>; nel 2027 di lunedì; nel 2028 di mercoledì.
          </p>
        </AlertBox>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Tabella festività 2025-2027 (con giorno della settimana)</h3>
        <LegalTable
          headers={["Data", "Festività", "2025", "2026", "2027"]}
          rows={[
            ["1 gennaio", "Capodanno", "Mercoledì", "Giovedì", "Venerdì"],
            ["6 gennaio", "Epifania", "Lunedì", "Martedì", "Mercoledì"],
            ["mobile", "Pasqua", "Domenica 20/4", "Domenica 5/4", "Domenica 28/3"],
            ["mobile", "Lunedì dell'Angelo", "Lunedì 21/4", "Lunedì 6/4", "Lunedì 29/3"],
            ["25 aprile", "Festa della Liberazione", "Venerdì", "Sabato", "Domenica"],
            ["1 maggio", "Festa del Lavoro", "Giovedì", "Venerdì", "Sabato"],
            ["2 giugno", "Festa della Repubblica", "Lunedì", "Martedì", "Mercoledì"],
            ["15 agosto", "Ferragosto", "Venerdì", "Sabato", "Domenica"],
            ["4 ottobre", "San Francesco d'Assisi (L. 151/2025, dal 2026)", "—", "Domenica", "Lunedì"],
            ["1 novembre", "Ognissanti", "Sabato", "Domenica", "Lunedì"],
            ["8 dicembre", "Immacolata Concezione", "Lunedì", "Martedì", "Mercoledì"],
            ["25 dicembre", "Natale", "Giovedì", "Venerdì", "Sabato"],
            ["26 dicembre", "Santo Stefano", "Venerdì", "Sabato", "Domenica"],
          ]}
        />
        <p className="text-sm text-muted-foreground">
          Le date di Pasqua e Lunedì dell'Angelo sono calcolate con l'algoritmo di Gauss/Meeus sulla base della regola del Concilio di Nicea (325 d.C.): Pasqua cade nella prima domenica successiva al primo plenilunio di primavera.
        </p>
        <AlertBox variant="info" title="Il Santo Patrono locale">
          <p className="leading-relaxed">
            Il Santo Patrono di una città (es. San Pietro il 29 giugno a Roma, Sant'Ambrogio il 7 dicembre a Milano, San Gennaro il 19 settembre a Napoli) è festività civile <strong>solo a livello locale</strong>: produce effetti nei rapporti di lavoro del comune interessato, ma <strong>NON si applica</strong> per il computo dei termini processuali civili, amministrativi o tributari, che considerano solo le 13 festività nazionali.
          </p>
        </AlertBox>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Come si calcola la data di Pasqua</h3>
        <p className="text-base leading-relaxed">
          La Pasqua è una festività mobile la cui data varia ogni anno. La regola stabilita dal Concilio di Nicea del 325 d.C. fissa la Pasqua nella <strong>prima domenica successiva al primo plenilunio di primavera</strong> (equinozio convenzionale 21 marzo). La data può variare tra il 22 marzo e il 25 aprile. L'algoritmo più utilizzato è quello di <strong>Gauss</strong>, sviluppato nel 1800, o la versione raffinata di <strong>Meeus/Jones/Butcher</strong>. Il nostro calcolatore include già la data corretta della Pasqua per tutti gli anni da 2024 a 2028.
        </p>
      </div>

      {/* ===== Sezione 7: Applicazioni pratiche ===== */}
      <SectionTitle id="applicazioni" icon={Users} title="Applicazioni pratiche del calcolo dei giorni" subtitle="Impugnazioni, decreti ingiuntivi, locazioni, lavoro, fisco" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il calcolo dei giorni tra due date interessa numerosi ambiti del diritto italiano. Dai termini processuali stringenti (30 giorni per l'appello, 60 per la Cassazione) fino al calcolo delle ferie e dei preavvisi lavorativi, passando per il ravvedimento operoso e le scadenze di locazione. La tabella che segue riepiloga le applicazioni più frequenti, con la norma di riferimento e le regole di calcolo.
        </p>
        <LegalTable
          headers={["Situazione", "Termine", "Norma", "Calcolo"]}
          rows={[
            ["Appello civile", "30 giorni dalla notifica sentenza", "Art. 325 c.p.c.", "Giorni naturali + sospensione feriale"],
            ["Ricorso per Cassazione", "60 giorni dalla notifica", "Art. 325 c.p.c.", "Giorni naturali + sospensione feriale"],
            ["Termine lungo impugnazione", "6 mesi dalla pubblicazione", "Art. 327 c.p.c.", "Calcolo a mesi + sospensione feriale"],
            ["Opposizione decreto ingiuntivo", "40 giorni dalla notifica", "Art. 641 c.p.c.", "Giorni naturali + sospensione feriale"],
            ["Riassunzione causa sospesa", "3 mesi", "Art. 297 c.p.c.", "Calcolo a mesi (dies a quo escluso)"],
            ["Memorie 183 c.p.c.", "30 + 30 + 20 giorni", "Art. 183 co. 6 c.p.c.", "A ritroso dall'udienza"],
            ["Comparse conclusionali", "60 giorni prima udienza", "Art. 190 c.p.c.", "A ritroso"],
            ["Preavviso disdetta locazione abitativa", "6 mesi", "Art. 4 L. 392/1978", "Calendario comune"],
            ["Preavviso locazione commerciale", "12/18 mesi", "Art. 27 L. 392/1978", "Calendario comune"],
            ["Ravvedimento operoso (riduzione 1/10)", "Entro 14 giorni", "Art. 13 D.Lgs. 472/1997", "Giorni naturali dalla scadenza"],
            ["Ferie minime annue", "26 giorni/anno", "D.Lgs. 66/2003", "Almeno 2 settimane continuative"],
          ]}
        />
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Opposizione a decreto ingiuntivo: caso pratico</h3>
        <p className="text-base leading-relaxed">
          Il termine di 40 giorni per l'opposizione al decreto ingiuntivo (<InlineNormLink text="art. 641 c.p.c." url="https://www.brocardi.it/codice-di-procedura-civile/libro-quarto/titolo-i/capo-i/art644.html" />) è uno dei più delicati: il suo mancato rispetto comporta la definitività del decreto e la perdita della possibilità di contestarlo nel merito. Se un decreto è notificato il 15 marzo 2026, il termine di 40 giorni decorre dal 16 marzo e scade il 24 aprile 2026 (venerdì). Il 25 aprile 2026 è Festa della Liberazione (sabato): se il termine fosse scaduto il 25 aprile, si sarebbe prorogato al lunedì 27 aprile. Ricordiamo che il termine è soggetto a sospensione feriale: se il dies ad quem cade in agosto, si proroga al 1° settembre.
        </p>
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Ravvedimento operoso: calcolo delle riduzioni</h3>
        <p className="text-base leading-relaxed">
          Il <strong>ravvedimento operoso</strong> (art. 13 D.Lgs. 472/1997) permette di regolarizzare un inadempimento tributario con sanzione ridotta proporzionalmente al ritardo. Le riduzioni vigenti: entro 14 giorni dalla scadenza = 0,1% al giorno (max 1,4%); da 15 a 30 giorni = 1,67%; da 31 a 90 giorni = 1,88%; entro l'anno = 3,75%; entro 2 anni = 4,29%; oltre 2 anni = 5%. I giorni si contano dal giorno successivo alla scadenza dell'imposta (dies a quo escluso, come nel diritto processuale).
        </p>
      </div>

      {/* ===== Sezione 8: Excel ===== */}
      <SectionTitle id="excel" icon={FileSpreadsheet} title="Formule Excel per il calcolo dei giorni" subtitle="GIORNI, DATA.DIFF, GIORNI.LAVORATIVI.TOT" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Oltre al nostro calcolatore online, il calcolo dei giorni tra due date è spesso effettuato in <strong>Microsoft Excel</strong> o <strong>Google Sheets</strong>. Entrambi offrono funzioni native specifiche, con opzioni avanzate per escludere weekend e festività. Qui una panoramica delle formule più utili per professionisti legali, commercialisti e HR.
        </p>
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">1. Sottrazione diretta e funzione GIORNI</h3>
        <div className="bg-[oklch(0.97_0.005_250)] border border-[oklch(0.90_0.02_250)] p-5 space-y-2 font-mono text-sm" style={{ borderRadius: "0.375rem" }}>
          <p className="text-[oklch(0.30_0.04_250)]">=B2-A2                  # Sottrazione (risultato in giorni interi)</p>
          <p className="text-[oklch(0.30_0.04_250)]">=GIORNI(B2;A2)          # Funzione dedicata (equivalente)</p>
          <p className="text-[oklch(0.30_0.04_250)]">=DATA.DIFF(A2;B2;"d")   # Con parametro giorno</p>
        </div>
        <p className="text-base leading-relaxed">
          Se <code>A2</code> contiene 10/04/2026 e <code>B2</code> contiene 25/04/2026, tutte e tre le formule restituiscono <strong>15</strong>. Importante: Excel già esclude il dies a quo dalla sottrazione diretta (principio omologo a quello del diritto italiano).
        </p>
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">2. Breakdown anni/mesi/giorni con DATA.DIFF</h3>
        <div className="bg-[oklch(0.97_0.005_250)] border border-[oklch(0.90_0.02_250)] p-5 space-y-2 font-mono text-sm" style={{ borderRadius: "0.375rem" }}>
          <p className="text-[oklch(0.30_0.04_250)]">=DATA.DIFF(A2;B2;"y")    # Anni completi</p>
          <p className="text-[oklch(0.30_0.04_250)]">=DATA.DIFF(A2;B2;"ym")   # Mesi (esclusi gli anni)</p>
          <p className="text-[oklch(0.30_0.04_250)]">=DATA.DIFF(A2;B2;"md")   # Giorni (esclusi i mesi)</p>
        </div>
        <p className="text-base leading-relaxed">
          Combinandole in una formula unica si ottiene un breakdown leggibile: <code>=DATA.DIFF(A2;B2;"y")&amp;" anni, "&amp;DATA.DIFF(A2;B2;"ym")&amp;" mesi, "&amp;DATA.DIFF(A2;B2;"md")&amp;" giorni"</code>. <strong>Attenzione</strong>: la documentazione Microsoft segnala il parametro "md" come <em>deprecato</em> per alcune casistiche edge; il nostro calcolatore web utilizza un algoritmo proprietario più preciso.
        </p>
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">3. Giorni lavorativi con festività italiane</h3>
        <div className="bg-[oklch(0.97_0.005_250)] border border-[oklch(0.90_0.02_250)] p-5 space-y-2 font-mono text-sm" style={{ borderRadius: "0.375rem" }}>
          <p className="text-[oklch(0.30_0.04_250)]">=GIORNI.LAVORATIVI.TOT(A2;B2;C2:C14)</p>
          <p className="text-[oklch(0.30_0.04_250)]"># Esclude sabati+domeniche. C2:C14 = elenco festività</p>
        </div>
        <p className="text-base leading-relaxed">
          La funzione esclude di default sabati e domeniche. L'intervallo <code>C2:C14</code> deve contenere l'elenco delle festività italiane (ne bastano 13 per il 2026 — ricordati di includere il 4 ottobre San Francesco). La versione <strong>GIORNI.LAVORATIVI.TOT.INTL</strong> permette di personalizzare quali giorni sono considerati weekend, utile per i CCNL con settimana corta o con orari atipici.
        </p>
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">4. Aggiungere/sottrarre giorni a una data</h3>
        <div className="bg-[oklch(0.97_0.005_250)] border border-[oklch(0.90_0.02_250)] p-5 space-y-2 font-mono text-sm" style={{ borderRadius: "0.375rem" }}>
          <p className="text-[oklch(0.30_0.04_250)]">=A2+30                   # 30 giorni dopo A2 (naturali)</p>
          <p className="text-[oklch(0.30_0.04_250)]">=A2-15                   # 15 giorni prima di A2</p>
          <p className="text-[oklch(0.30_0.04_250)]">=GIORNO.LAVORATIVO(A2;30;C2:C14)   # 30 giorni lavorativi dopo</p>
        </div>
        <AlertBox variant="info" title="Perché Excel differisce dal calcolo processuale">
          <p className="leading-relaxed">
            Excel non implementa la <strong>proroga automatica</strong> al primo giorno non festivo né la <strong>sospensione feriale</strong> italiana. Per i termini processuali, usa il nostro calcolatore che applica entrambe le regole. Excel è più adatto a usi contabili, gestione risorse umane e reportistica business.
          </p>
        </AlertBox>
      </div>

      {/* ===== Sezione 9: Errori comuni ===== */}
      <SectionTitle id="errori-comuni" icon={AlertTriangle} title="Errori comuni nel calcolo dei giorni" subtitle="8 insidie ricorrenti da evitare" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il calcolo dei giorni, pur apparentemente banale, nasconde numerose insidie che possono compromettere la tempestività di un atto processuale, la validità di una scadenza fiscale o il corretto esercizio di un diritto. Ecco i principali errori da evitare, con i relativi rimedi.
        </p>
        <AlertBox variant="warning" title="1. Includere il dies a quo nel conteggio">
          <p className="leading-relaxed">
            L'errore più frequente. Nel diritto italiano il giorno iniziale <strong>NON si computa</strong> (art. 155 c.p.c. e art. 2963 c.c.). Se un termine decorre dal 10 aprile, il primo giorno computato è l'11 aprile. Molti sistemi informatici e pratiche amateurstiche commettono l'errore di contare anche il dies a quo, sbagliando la scadenza di un giorno.
          </p>
        </AlertBox>
        <AlertBox variant="warning" title="2. Confondere giorni naturali e lavorativi">
          <p className="leading-relaxed">
            Nei termini processuali civili si usano i <strong>giorni naturali</strong> (weekend e festivi inclusi). Se leggi "30 giorni" senza ulteriore specificazione in ambito processuale, si intendono giorni consecutivi. Se il termine è in ambito lavoristico o contrattuale, verifica se il CCNL o il contratto prevede giorni lavorativi (con esclusioni).
          </p>
        </AlertBox>
        <AlertBox variant="warning" title="3. Ignorare la sospensione feriale 1-31 agosto">
          <p className="leading-relaxed">
            La L. 742/1969 sospende tutti i termini processuali ordinari dal 1° al 31 agosto. Un termine che attraversa questo periodo viene allungato di 31 giorni. Ignorare questa regola è un errore grave: può comportare decadenze. Eccezioni: cause di lavoro, alimenti, cautelari, sfratti, esecuzione, fallimento, penale.
          </p>
        </AlertBox>
        <AlertBox variant="warning" title="4. Non applicare la proroga dies ad quem festivo">
          <p className="leading-relaxed">
            Se il termine scade in giorno festivo (domenica, festività nazionale, sabato per atti fuori udienza), la scadenza si proroga automaticamente al primo giorno non festivo successivo. Depositare il 25 dicembre 2026 (venerdì, Natale) è impossibile: la scadenza reale è il 28 dicembre 2026 (lunedì), perché 26 sabato (Santo Stefano) e 27 domenica sono festivi.
          </p>
        </AlertBox>
        <AlertBox variant="warning" title="5. Applicare la proroga in avanti ai termini a ritroso">
          <p className="leading-relaxed">
            Per i termini a ritroso (es. memorie prima dell'udienza), la Cassazione ha chiarito (sent. n. 14767/2014) che la proroga per dies ad quem festivo opera <strong>all'indietro</strong>: si anticipa al primo giorno non festivo precedente, non al successivo. Errore frequente è applicare la regola ordinaria, posticipando la scadenza e compromettendo il diritto di difesa.
          </p>
        </AlertBox>
        <AlertBox variant="warning" title="6. Non aggiornare il calendario 2026 con San Francesco">
          <p className="leading-relaxed">
            Dal 1° gennaio 2026, il 4 ottobre è festività nazionale (L. 151/2025). Chi continua a usare il calendario pre-2026 rischia di computare erroneamente un termine che cade il 4 ottobre: nel 2026 cade di domenica (già festivo), ma nel 2027 cade di lunedì — con effetti concreti sul computo.
          </p>
        </AlertBox>
        <AlertBox variant="warning" title="7. Dimenticare gli anni bisestili">
          <p className="leading-relaxed">
            Febbraio ha 28 giorni negli anni comuni, 29 in quelli bisestili. Un anno è bisestile se divisibile per 4, salvo gli anni secolari non divisibili per 400. Anni bisestili recenti: 2020, 2024, 2028. Non bisestili: 2025, 2026, 2027. Errore comune nei calcoli a giorni che attraversano febbraio.
          </p>
        </AlertBox>
        <AlertBox variant="warning" title="8. Errato calcolo delle notifiche PEC dopo le 21">
          <p className="leading-relaxed">
            Dopo l'intervento della Corte Costituzionale (sent. n. 75/2019), per il mittente la notifica PEC effettuata tra le 21 e le 24 si considera tempestiva se la ricevuta di accettazione è generata entro la mezzanotte. Per il destinatario, invece, la notifica si perfeziona alle 7 del giorno successivo (art. 16 septies D.L. 179/2012), a tutela del diritto al riposo. Questa asimmetria incide sul computo dei termini.
          </p>
        </AlertBox>
      </div>

      {/* ===== Sezione 10: Fonti ===== */}
      <SectionTitle id="fonti" icon={BookOpen} title="Fonti e Riferimenti" />
      <p className="text-sm text-muted-foreground mb-4">
        A cura della redazione di AvvocatoTools.it. Tutti i dati sono verificati confrontando le fonti istituzionali elencate di seguito. Ultimo aggiornamento: 19 aprile 2026.
      </p>
      <NormativaRefTable items={normativaRiferimento} />

      <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-8 mb-4 flex items-center gap-2">
        <Link2 className="w-5 h-5 text-[oklch(0.75_0.10_85)]" /> Giurisprudenza e fonti secondarie
      </h3>
      <CircolariTable items={circolariMinisteriali} />

      {/* ===== Sezione 11: FAQ ===== */}
      <SectionTitle id="faq" icon={HelpCircle} title="Domande Frequenti (FAQ)" subtitle="Risposte alle domande più comuni sul calcolo dei giorni" />
      <FAQ items={faqData} />
    </ToolLayout>
  );
}
