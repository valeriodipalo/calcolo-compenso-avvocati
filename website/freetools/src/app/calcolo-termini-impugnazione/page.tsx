import { Scale, BookOpen, HelpCircle, Table, Calculator, AlertTriangle, Landmark, FileText, Clock, Gavel, CalendarOff, Shield, ListChecks, Link2, ArrowRightLeft } from "lucide-react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { LegalTable } from "@/components/shared/LegalTable";
import { NormativaQuote } from "@/components/shared/NormativaQuote";
import { InlineNormLink } from "@/components/shared/InlineNormLink";
import { FAQ } from "@/components/shared/FAQ";
import { AlertBox } from "@/components/shared/AlertBox";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";
import Calcolatore from "@/components/calcolo-termini-impugnazione/Calcolatore";
import {
  tabellaCivile,
  tabellaAmministrativo,
  tabellaTributario,
  normativaRiferimento,
  sections,
} from "@/data/calcolo-termini-impugnazione/impugnazioneData";
import { faqData } from "@/data/calcolo-termini-impugnazione/faqData";
import { JsonLd, breadcrumbSchema, articleSchema, webApplicationSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1072&fit=crop";

export const metadata: Metadata = {
  title: "Calcolo Termini Impugnazione 2026",
  description:
    "Calcola i termini di impugnazione: appello (30 gg), cassazione (60 gg), revocazione e opposizione di terzo. Civile, amministrativo e tributario. Aggiornato 2026.",
  alternates: {
    canonical: "/calcolo-termini-impugnazione",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/calcolo-termini-impugnazione",
    title: "Calcolo Termini Impugnazione 2026",
    description:
      "Calcola i termini di impugnazione: appello (30 gg), cassazione (60 gg), revocazione e opposizione di terzo. Civile, amministrativo e tributario. Aggiornato 2026.",
    images: [{ url: HERO_IMG, width: 1920, height: 1072, alt: "Calcolo Termini di Impugnazione" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolo Termini Impugnazione 2026",
    description:
      "Calcola i termini di impugnazione: appello (30 gg), cassazione (60 gg), revocazione e opposizione di terzo. Civile, amministrativo e tributario. Aggiornato 2026.",
  },
};

const toolConfig: ToolConfig = {
  slug: "calcolo-termini-impugnazione",
  title: "Calcolo Termini di Impugnazione",
  shortTitle: "Termini Impugnazione",
  icon: Clock,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroEyebrow: "Calcolatore, Tabelle e Guida Completa",
  heroTitle: "Calcolo Termini di Impugnazione",
  heroDescription:
    "Calcola i termini per proporre appello, ricorso per cassazione, revocazione e opposizione di terzo nel processo civile, amministrativo e tributario. Sospensione feriale, riforma Cartabia, esempi pratici e normativa aggiornata al 2026.",
  heroReference:
    "Artt. 325–327 CPC — Art. 92 CPA (D.Lgs. 104/2010) — Artt. 38, 51 D.Lgs. 546/92",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "Il calcolatore tiene conto della sospensione feriale (L. 742/1969) e della proroga per sabato e festivi (art. 155, cc. 4-5, CPC).",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    { label: "Gazzetta Ufficiale", url: "https://www.gazzettaufficiale.it" },
    { label: "Ministero della Giustizia", url: "https://www.giustizia.it" },
  ],
};

export default function CalcoloTerminiImpugnazionePage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ===== Structured Data ===== */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Strumenti Legali Gratuiti", path: "/" },
          { name: "Calcolo Termini di Impugnazione", path: "/calcolo-termini-impugnazione" },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: "Calcolo Termini di Impugnazione 2026: Appello, Cassazione, Revocazione e Opposizione di Terzo",
          description:
            "Guida completa ai termini per le impugnazioni nel processo civile, amministrativo e tributario. Calcolatore online, tabelle, sospensione feriale, riforma Cartabia e impugnazioni speciali.",
          path: "/calcolo-termini-impugnazione",
          datePublished: "2026-04-01",
          dateModified: "2026-04-01",
          image: HERO_IMG,
          sections: [
            "Cosa Sono i Termini di Impugnazione",
            "Termini nel Processo Civile",
            "Termini nel Processo Amministrativo",
            "Termini nel Processo Tributario",
            "Come si Calcolano i Termini",
            "La Sospensione Feriale",
            "La Riforma Cartabia",
            "Impugnazione del Licenziamento",
            "Impugnazioni Speciali",
            "Il Passaggio in Giudicato",
            "Esempi Pratici di Calcolo",
            "Domande Frequenti (FAQ)",
            "Normativa di Riferimento",
          ],
        })}
      />

      {/* 3. WebApplication */}
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Termini di Impugnazione",
          description: "Calcola i termini per proporre appello, cassazione, revocazione e opposizione di terzo con sospensione feriale.",
          path: "/calcolo-termini-impugnazione",
          applicationCategory: "LegalApplication",
        })}
      />

      {/* ===== Calcolatore ===== */}
      <Calcolatore />

      {/* ===== Cosa Sono ===== */}
      <SectionTitle id="cosa-sono" icon={BookOpen} title="Cosa Sono i Termini di Impugnazione" subtitle="Definizione e inquadramento sistematico" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          I <strong>termini di impugnazione</strong> sono i termini perentori entro i quali una parte soccombente può contestare un provvedimento giurisdizionale davanti a un giudice di grado superiore. Il <strong>calcolo termini impugnazione</strong> è un'operazione essenziale per ogni professionista legale, poiché il mancato rispetto delle scadenze comporta la decadenza dal diritto di impugnare. Si tratta di una sottocategoria dei termini processuali, disciplinati dagli <InlineNormLink text="artt. 325-327 del Codice di Procedura Civile" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art325" />, che regolano specificamente le scadenze per proporre appello, ricorso per cassazione, revocazione e opposizione di terzo. Per la liquidazione del <a href="/calcolo-compenso" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">compenso dell'avvocato</a> nei giudizi di impugnazione si applicano i parametri forensi del D.M. 147/2022.
        </p>
        <p className="text-base leading-relaxed">
          L'ordinamento prevede due tipologie di termine: il <strong>termine breve</strong>, che decorre dalla notificazione della sentenza e varia da 30 a 60 giorni a seconda del mezzo di impugnazione, e il <strong>termine lungo</strong>, che decorre dalla pubblicazione (deposito in cancelleria) della sentenza e costituisce il limite massimo di 6 mesi oltre il quale la sentenza passa in giudicato, indipendentemente dalla notifica.
        </p>
        <AlertBox variant="warning" title="Termini perentori">
          <p className="leading-relaxed">
            I termini di impugnazione sono <strong>perentori</strong>: il loro decorso comporta la <strong>decadenza</strong> dal diritto di impugnare il provvedimento e il conseguente passaggio in giudicato della sentenza (<InlineNormLink text="art. 327 CPC" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art327" />). Come ribadito dalla Cassazione (<a href="https://www.studiocerbone.com/corte-di-cassazione-sentenza-n-32777-depositata-l-8-novembre-2022-costituisce-regola-di-settore-relativa-al-sistema-delle-impugnazioni-la-disciplina-posta-dallart-327-c-p-c-il-quale-espressa/" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2">Cass. n. 32777/2022</a>), la decadenza dall'impugnazione dopo il decorso di sei mesi dalla pubblicazione opera indipendentemente dalla notificazione, a tutela della certezza del diritto. La rimessione in termini (art. 153, c. 2, CPC) è ammessa solo in presenza di un fattore estraneo alla volontà della parte, con carattere di assolutezza (<a href="https://apps.dirittopratico.it/sentenza/cassazione/roma/2024/10702.html" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2">Cass. n. 10702/2024</a>).
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          I termini si applicano a tutte le giurisdizioni — civile, amministrativa e tributaria — con differenze significative nella durata del termine breve. Mentre nel processo civile l'appello si propone entro <strong>30 giorni</strong>, nel processo amministrativo e tributario il termine sale a <strong>60 giorni</strong>. Il termine lungo, invece, è uniformemente di <strong>6 mesi</strong> in tutte le giurisdizioni.
        </p>
      </div>

      {/* ===== Processo Civile ===== */}
      <SectionTitle id="processo-civile" icon={Scale} title="Termini di Impugnazione nel Processo Civile" subtitle="Artt. 325–327 Codice di Procedura Civile" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>processo civile</strong> prevede quattro mezzi di impugnazione ordinari, ciascuno con termini specifici stabiliti dall'<InlineNormLink text="art. 325 CPC" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art325" />. Il termine breve decorre dalla notificazione della sentenza, mentre il termine lungo di 6 mesi dalla data di pubblicazione (<InlineNormLink text="art. 327 CPC" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art327" />).
        </p>
        <LegalTable
          headers={["Mezzo di impugnazione", "Termine breve", "Termine lungo", "Riferimento"]}
          rows={tabellaCivile}
        />
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art325">
          Art. 325 CPC: "Il termine per proporre l'appello, la revocazione e l'opposizione di terzo di cui all'articolo 404, secondo comma, è di trenta giorni; il termine per proporre il ricorso per cassazione è di sessanta giorni."
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          Per la <strong>revocazione</strong>, occorre distinguere tra revocazione ordinaria (nn. 4 e 5 dell'<InlineNormLink text="art. 395 CPC" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art395" />), che prevede sia il termine breve di 30 giorni che il termine lungo di 6 mesi, e revocazione straordinaria (nn. 1, 2, 3, 6), dove i 30 giorni decorrono dalla <strong>scoperta del vizio</strong> (dolo di una parte, prove false, documenti ritrovati, dolo del giudice) e non opera il termine lungo.
        </p>
        <p className="text-base leading-relaxed">
          L'<strong>opposizione di terzo revocatoria</strong> (<InlineNormLink text="art. 404, c. 2, CPC" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art404" />) prevede un termine di 30 giorni dalla scoperta del dolo o della collusione. L'opposizione di terzo ordinaria (art. 404, c. 1), invece, non è soggetta ad alcun termine.
        </p>
        <AlertBox variant="info" title="Giudizi instaurati prima del 4 luglio 2009">
          <p className="leading-relaxed">
            Per i giudizi instaurati in primo grado <strong>prima del 4 luglio 2009</strong>, il termine lungo è di <strong>1 anno</strong> (anziché 6 mesi). La riduzione è stata disposta dall'<InlineNormLink text="art. 58, L. 69/2009" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2009-06-18;69~art58" />.
          </p>
        </AlertBox>
      </div>

      {/* ===== Processo Amministrativo ===== */}
      <SectionTitle id="processo-amministrativo" icon={Landmark} title="Termini di Impugnazione nel Processo Amministrativo" subtitle="Art. 92 Codice del Processo Amministrativo (D.Lgs. 104/2010)" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Nel <strong>processo amministrativo</strong>, i termini per le impugnazioni sono disciplinati dall'<InlineNormLink text="art. 92 del Codice del processo amministrativo" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-07-02;104~art92" /> (D.Lgs. 104/2010). La differenza principale rispetto al civile è che il termine breve è sempre di <strong>60 giorni</strong>, sia per l'appello al Consiglio di Stato che per il ricorso per cassazione (limitato ai soli motivi di giurisdizione).
        </p>
        <LegalTable
          headers={["Mezzo di impugnazione", "Termine breve", "Termine lungo", "Riferimento"]}
          rows={tabellaAmministrativo}
        />
        <p className="text-base leading-relaxed">
          L'<strong>appello al Consiglio di Stato</strong> contro le sentenze del TAR segue la stessa struttura del processo civile: 60 giorni dalla notifica della sentenza (termine breve) o 6 mesi dalla pubblicazione (termine lungo). Anche per la revocazione e l'opposizione di terzo si applicano termini di 60 giorni, uniformi per tutti i mezzi di impugnazione.
        </p>
        <AlertBox variant="info" title="Ricorso al TAR: termini diversi">
          <p className="leading-relaxed">
            Non va confuso il termine per l'impugnazione delle sentenze del TAR (60 giorni) con il termine per proporre il <strong>ricorso introduttivo al TAR</strong> contro un provvedimento amministrativo, che è di <strong>60 giorni</strong> dalla notifica del provvedimento o dalla piena conoscenza (art. 29 CPA), ridotto a <strong>30 giorni</strong> in materia di appalti (art. 120 CPA).
          </p>
        </AlertBox>
      </div>

      {/* ===== Processo Tributario ===== */}
      <SectionTitle id="processo-tributario" icon={FileText} title="Termini di Impugnazione nel Processo Tributario" subtitle="D.Lgs. 546/1992" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>processo tributario</strong>, riformato dal <InlineNormLink text="D.Lgs. 546/1992" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546" />, prevede termini di impugnazione allineati a quelli del processo amministrativo. Sia l'appello alla <strong>Corte di Giustizia Tributaria di secondo grado</strong> (ex Commissione Tributaria Regionale) sia il ricorso per cassazione devono essere proposti entro <strong>60 giorni dalla notificazione</strong> della sentenza.
        </p>
        <LegalTable
          headers={["Mezzo di impugnazione", "Termine breve", "Termine lungo", "Riferimento"]}
          rows={tabellaTributario}
        />
        <p className="text-base leading-relaxed">
          Il termine lungo è anche qui di <strong>6 mesi dalla pubblicazione</strong> della sentenza (<InlineNormLink text="art. 38, c. 3, D.Lgs. 546/92" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546~art38" />). La riforma della giustizia tributaria (L. 130/2022) ha sostituito la denominazione degli organi giudicanti (da "Commissioni Tributarie" a "Corti di Giustizia Tributaria") ma non ha modificato i termini di impugnazione.
        </p>
      </div>

      {/* ===== Come si Calcolano ===== */}
      <SectionTitle id="come-si-calcolano" icon={Calculator} title="Come si Calcolano i Termini di Impugnazione" subtitle="Art. 155 CPC — Regole di computo" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il computo dei termini di impugnazione segue le regole generali dell'<InlineNormLink text="art. 155 CPC" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" />, che distingue tra calcolo <strong>a giorni</strong> e calcolo <strong>a mesi</strong>. Il procedimento si articola in quattro passaggi:
        </p>

        <ol className="list-decimal pl-6 space-y-3 text-base leading-relaxed">
          <li><strong>Individuare il dies a quo</strong> — il giorno da cui decorre il termine. Per il termine breve è la data di notifica della sentenza; per il termine lungo è la data di pubblicazione (deposito in cancelleria). Il dies a quo si esclude sempre dal computo (art. 155, c. 1, CPC).</li>
          <li><strong>Calcolare la scadenza</strong> — per i termini a giorni (30 o 60), si contano i giorni successivi al dies a quo (<em>ex numeratio dierum</em>); per i termini a mesi (6 mesi), si aggiungono i mesi mantenendo fisso il giorno (<em>ex nominatione dierum</em>). Se nel mese finale il giorno non esiste, il termine scade l'ultimo giorno del mese.</li>
          <li><strong>Verificare la sospensione feriale</strong> — se il termine attraversa il periodo 1°-31 agosto, quei giorni non si computano (L. 742/1969). Nel calcolo a giorni, il conteggio si congela e riprende dal 1° settembre. Nel calcolo a mesi, si aggiungono 31 giorni alla scadenza.</li>
          <li><strong>Applicare la proroga per sabato e festivi</strong> — se il giorno di scadenza cade di sabato, domenica o festivo, il termine è prorogato al primo giorno non festivo successivo (art. 155, cc. 4-5, CPC).</li>
        </ol>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155">
          Art. 155, c. 1, CPC: "Nel computo dei termini a giorni o ad ore, si escludono il giorno o l'ora iniziali."
        </NormativaQuote>

        <h3 className="text-xl font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-3">Termini a giorni (ex numeratio dierum)</h3>
        <p className="text-base leading-relaxed">
          Per il <strong>termine breve</strong> (30 o 60 giorni), il computo avviene <em>ex numeratio dierum</em>: si esclude il giorno iniziale (<em>dies a quo</em>), cioè il giorno della notifica, e si contano i giorni successivi. Il termine include sabati, domeniche e festivi intermedi, ma se il giorno di scadenza (<em>dies ad quem</em>) cade di sabato, domenica o festivo, la scadenza è prorogata al <strong>primo giorno non festivo successivo</strong>.
        </p>

        <h3 className="text-xl font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-3">Termini a mesi (ex nominatione dierum)</h3>
        <p className="text-base leading-relaxed">
          Per il <strong>termine lungo</strong> (6 mesi), il computo avviene <em>ex nominatione dierum</em>: si aggiungono i mesi alla data di pubblicazione, mantenendo fisso il giorno del mese. Se nel mese di scadenza il giorno corrispondente non esiste, il termine scade l'ultimo giorno del mese. Ad esempio, 6 mesi dal 31 agosto scadono il 28 febbraio (o 29 negli anni bisestili).
        </p>

        <h3 className="text-xl font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-3">Proroga per sabato e festivi</h3>
        <p className="text-base leading-relaxed">
          L'<InlineNormLink text="art. 155, c. 5, CPC" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155" />, introdotto dalla <InlineNormLink text="L. 263/2005" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2005-12-28;263" />, equipara il sabato al giorno festivo per il compimento degli atti processuali fuori udienza. Questa regola si applica ai procedimenti instaurati in primo grado dopo il 1° marzo 2006. In pratica, se il termine scade di sabato, la scadenza slitta automaticamente al lunedì successivo (salvo che sia anch'esso festivo).
        </p>
      </div>

      {/* ===== Sospensione Feriale ===== */}
      <SectionTitle id="sospensione-feriale" icon={CalendarOff} title="La Sospensione Feriale dei Termini" subtitle="L. 742/1969 — Dal 1° al 31 agosto" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>sospensione feriale</strong> è il periodo dal <strong>1° al 31 agosto</strong> durante il quale il decorso dei termini processuali è sospeso di diritto, inclusi i termini di impugnazione.
        </p>
        <p className="text-base leading-relaxed">
          La <InlineNormLink text="L. 742/1969" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742" /> prevede la <strong>sospensione feriale dei termini processuali</strong> dal <strong>1° al 31 agosto</strong> di ogni anno. Il periodo di sospensione è stato ridotto rispetto all'originario 1° agosto-15 settembre per effetto del <InlineNormLink text="D.L. 132/2014" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132" />, convertito nella <InlineNormLink text="L. 162/2014" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-11-10;162" />, con effetto dal 2015.
        </p>
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742">
          Art. 1, L. 742/1969: "Il decorso dei termini processuali relativi alle giurisdizioni ordinarie ed a quelle amministrative è sospeso di diritto dal 1° al 31 agosto di ciascun anno, e riprende a decorrere dalla fine del periodo di sospensione."
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          La sospensione si applica sia al termine breve che al termine lungo. Nel calcolo <strong>a giorni</strong>, i giorni compresi nel periodo 1°-31 agosto vengono semplicemente "congelati": il conteggio si interrompe al 31 luglio e riprende dal 1° settembre. Come chiarito dalla Cassazione (<a href="https://apps.dirittopratico.it/sentenza/cassazione/roma/2023/30124.html" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2">Cass. n. 30124/2023</a>), il primo giorno utile successivo alla sospensione feriale va computato nel novero dei giorni concessi dal termine, di cui tale giorno non costituisce l'inizio del decorso ma la semplice prosecuzione. Nel calcolo <strong>a mesi</strong>, il <a href="https://www.retidigiustizia.it/leggi-e-diritto/sospensione-feriale-computo-del-termine-lungo-di-impugnazione" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2">Consiglio di Stato in Adunanza Plenaria (n. 11/2022)</a> ha stabilito che i 31 giorni di sospensione vanno sommati alla scadenza calcolata ex nominatione dierum, confermando l'orientamento delle Sezioni Unite della Cassazione (Cass. SS.UU. n. 18450/2005).
        </p>
        <AlertBox variant="warning" title="Eccezioni alla sospensione">
          <p className="leading-relaxed">
            La sospensione <strong>non si applica</strong> ai procedimenti cautelari, di sfratto, di opposizione all'esecuzione, alle cause relative ad alimenti e ai fallimenti, né in genere alle cause rispetto alle quali la ritardata trattazione potrebbe produrre grave pregiudizio (art. 92 R.D. 12/1941). In ambito <strong>penale</strong>, la sospensione feriale si applica ai soli termini per le impugnazioni, non a tutti i termini processuali.
          </p>
        </AlertBox>

        <h3 className="text-xl font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-3">Esempio: appello con sospensione feriale</h3>
        <p className="text-base leading-relaxed">
          Sentenza civile notificata il <strong>15 luglio 2026</strong>. Il termine breve per l'appello è di 30 giorni. Senza sospensione, la scadenza sarebbe il 14 agosto. Con la sospensione feriale, i giorni dal 1° al 31 agosto sono congelati. I 16 giorni dal 16 al 31 luglio consumano parte del termine; i restanti 14 giorni decorrono dal 1° settembre. La scadenza effettiva diventa il <strong>14 settembre 2026</strong> (lunedì).
        </p>
      </div>

      {/* ===== Riforma Cartabia ===== */}
      <SectionTitle id="riforma-cartabia" icon={Gavel} title="La Riforma Cartabia e i Termini di Impugnazione" subtitle="D.Lgs. 149/2022 — In vigore dal 28/02/2023" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>riforma Cartabia</strong> (<InlineNormLink text="D.Lgs. 149/2022" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149" />), entrata in vigore il 28 febbraio 2023, ha introdotto alcune modifiche rilevanti al sistema delle impugnazioni civili. I <strong>termini di durata</strong> (30 e 60 giorni per il breve, 6 mesi per il lungo) <strong>non sono cambiati</strong>, ma è stata modificata la regola sulla <strong>decorrenza</strong>.
        </p>
        <AlertBox variant="success" title="Novità sulla decorrenza del termine breve">
          <p className="leading-relaxed">
            Prima della riforma, il termine breve decorreva per il <strong>notificante</strong> dalla data di spedizione della notifica e per il <strong>destinatario</strong> dalla data di ricezione, creando un'asimmetria temporale. La riforma ha recepito il principio già enunciato dalle <a href="https://www.lanuovaproceduracivile.com/wp-content/uploads/2023/12/napoli4.pdf" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2">Sezioni Unite (Cass. SS.UU. n. 13794/2012)</a>: il termine breve decorre ora <strong>per entrambe le parti</strong> dal perfezionamento della notificazione nei confronti del destinatario. Questo elimina il rischio che il notificante avesse meno giorni a disposizione del destinatario.
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          La riforma ha inoltre modificato la disciplina dell'appello sotto altri profili: l'atto di appello deve ora contenere una <strong>puntuale ed esplicita enunciazione dei rilievi critici</strong> rispetto alle ragioni di fatto e di diritto espresse nel provvedimento impugnato, a pena di inammissibilità. Si tratta di un requisito di specificità dei motivi che, pur non incidendo direttamente sui termini, ha reso più rigoroso il contenuto dell'atto da depositare entro la scadenza.
        </p>
      </div>

      {/* ===== Impugnazione Licenziamento ===== */}
      <SectionTitle id="impugnazione-licenziamento" icon={Shield} title="Impugnazione del Licenziamento" subtitle="Art. 6, L. 604/1966 — Doppio termine" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<strong>impugnazione del licenziamento</strong> segue un regime speciale rispetto alle impugnazioni processuali classiche, disciplinato dall'<InlineNormLink text="art. 6, L. 604/1966" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1966-07-15;604~art6" />, come modificato dalla <InlineNormLink text="L. 183/2010" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2010-11-04;183" /> (Collegato Lavoro). Il sistema prevede un <strong>doppio termine</strong>:
        </p>
        <LegalTable
          headers={["Fase", "Termine", "Decorrenza", "Modalità"]}
          rows={[
            ["Impugnazione stragiudiziale", "60 giorni", "Dalla ricezione del licenziamento", "Raccomandata A/R o PEC al datore"],
            ["Deposito ricorso giudiziale", "180 giorni", "Dall'impugnazione stragiudiziale", "Ricorso al Tribunale del Lavoro"],
          ]}
        />
        <p className="text-base leading-relaxed">
          Il primo termine di <strong>60 giorni</strong> è per l'impugnazione stragiudiziale: il lavoratore deve comunicare al datore di lavoro, anche tramite il sindacato, la propria volontà di impugnare il licenziamento. Questo atto è condizione di procedibilità: senza di esso, il ricorso giudiziale è inammissibile. La Cassazione (Cass. SS.UU. n. 2179/1987, confermata da <a href="https://sentenze.laleggepertutti.it/sentenza/cassazione-civile-n-16416-del-19-06-2019" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2">Cass. n. 16416/2019</a>) ha chiarito che l'impugnativa deve provenire dal lavoratore o da un soggetto munito di preventiva procura scritta; non è ammessa la ratifica con effetto retroattivo oltre il termine di decadenza.
        </p>
        <p className="text-base leading-relaxed">
          Il secondo termine di <strong>180 giorni</strong> decorre dall'invio dell'impugnazione stragiudiziale e riguarda il deposito del ricorso in tribunale. In alternativa al ricorso, entro lo stesso termine il lavoratore può comunicare alla controparte la richiesta di tentativo di conciliazione o di arbitrato.
        </p>
        <AlertBox variant="warning" title="Esempio pratico">
          <p className="leading-relaxed">
            Licenziamento ricevuto il <strong>10 gennaio 2026</strong>. Termine per impugnazione stragiudiziale: <strong>11 marzo 2026</strong> (60 giorni). Se la raccomandata viene inviata il 5 marzo, il termine per il ricorso giudiziale scade il <strong>1° settembre 2026</strong> (180 giorni dal 5 marzo). Attenzione: la sospensione feriale <strong>non si applica</strong> né al termine di 60 giorni (termine sostanziale, non processuale), né al termine di 180 giorni per il deposito del ricorso, poiché le controversie di lavoro sono escluse dalla sospensione feriale (art. 3, L. 742/1969).
          </p>
        </AlertBox>
      </div>

      {/* ===== Impugnazioni Speciali ===== */}
      <SectionTitle id="impugnazioni-speciali" icon={ListChecks} title="Impugnazioni Speciali" subtitle="Decreto ingiuntivo, testamento, delibere condominiali, cartelle esattoriali" />
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-[oklch(0.25_0.04_250)] mb-3">Opposizione a decreto ingiuntivo</h3>
        <p className="text-base leading-relaxed">
          L'opposizione al decreto ingiuntivo deve essere proposta entro <strong>40 giorni dalla notificazione</strong> del decreto (<InlineNormLink text="art. 641 CPC" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art641" />). Il termine è perentorio e soggetto a sospensione feriale. Se l'intimato risiede in un altro Stato dell'Unione Europea, il termine è di 50 giorni; se risiede fuori dall'UE, di 60 giorni. Il giudice può abbreviare il termine fino a un minimo di 10 giorni per giusti motivi. Decorso il termine senza opposizione, il decreto diventa definitivo e costituisce titolo esecutivo. Per il calcolo del <a href="/contributo-unificato" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">contributo unificato</a> dovuto per l'opposizione, consulta il nostro calcolatore dedicato.
        </p>

        <h3 className="text-xl font-semibold text-[oklch(0.25_0.04_250)] mt-6 mb-3">Impugnazione del testamento</h3>
        <p className="text-base leading-relaxed">
          I termini per l'impugnazione del testamento variano in base al tipo di vizio invocato. L'<strong>azione di annullamento</strong> per difetti di forma, incapacità del testatore o vizi della volontà deve essere esercitata entro <strong>5 anni</strong> dal giorno in cui è stata data esecuzione alle disposizioni testamentarie (<InlineNormLink text="art. 606 c.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art606" />). L'azione di <strong>nullità</strong> (per disposizioni impossibili, illecite o contrarie a norme imperative) non è soggetta a termini di prescrizione. L'<strong>azione di riduzione</strong> per lesione della legittima si prescrive in 10 anni dall'apertura della successione.
        </p>

        <h3 className="text-xl font-semibold text-[oklch(0.25_0.04_250)] mt-6 mb-3">Impugnazione delibera condominiale</h3>
        <p className="text-base leading-relaxed">
          Le delibere dell'assemblea condominiale contrarie alla legge o al regolamento possono essere impugnate entro <strong>30 giorni</strong> (<InlineNormLink text="art. 1137, c. 2, Codice Civile" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1137" />). Il termine decorre dalla data della delibera per i <strong>condomini presenti</strong> (dissenzienti o astenuti) e dalla data di <strong>comunicazione</strong> per i condomini assenti. Le delibere affette da <strong>nullità</strong> (ad esempio, quelle che incidono sui diritti individuali dei condomini o prive dei quorum costitutivi) possono essere impugnate senza limiti di tempo (Cass. SS.UU. 4806/2005). Si ricorda che la mediazione obbligatoria (D.Lgs. 28/2010) è condizione di procedibilità, ma la domanda di mediazione <strong>sospende</strong> il termine di decadenza per tutta la durata della procedura.
        </p>

        <h3 className="text-xl font-semibold text-[oklch(0.25_0.04_250)] mt-6 mb-3">Impugnazione della cartella esattoriale</h3>
        <p className="text-base leading-relaxed">
          La cartella esattoriale può essere impugnata entro <strong>60 giorni dalla notificazione</strong> mediante ricorso alla Corte di Giustizia Tributaria di primo grado, quando si contesta il tributo sottostante (<InlineNormLink text="D.Lgs. 546/1992" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546" />). Se si contestano vizi propri della procedura esecutiva (ad esempio, mancata notifica dell'atto presupposto), il termine è di <strong>20 giorni</strong> per l'opposizione agli atti esecutivi (<InlineNormLink text="art. 617 CPC" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art617" />). In ogni caso, è fondamentale individuare correttamente il tipo di vizio per scegliere il rimedio e rispettare il termine corretto.
        </p>
      </div>

      {/* ===== Passaggio in Giudicato ===== */}
      <SectionTitle id="passaggio-giudicato" icon={Gavel} title="Il Passaggio in Giudicato" subtitle="Art. 324 CPC — Cosa Giudicata Formale" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Una sentenza acquista l'autorità di <strong>cosa giudicata formale</strong> quando non è più soggetta ad alcun mezzo di impugnazione ordinario (<InlineNormLink text="art. 324 CPC" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art324" />). In pratica, il passaggio in giudicato si verifica quando:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
          <li>sono decorsi tutti i termini per impugnare senza che sia stata proposta impugnazione;</li>
          <li>tutti i gradi di giudizio sono stati esauriti (fino alla Cassazione);</li>
          <li>la parte ha rinunciato espressamente all'impugnazione.</li>
        </ul>
        <p className="text-base leading-relaxed">
          Se la sentenza <strong>non viene notificata</strong>, il passaggio in giudicato avviene dopo 6 mesi dalla pubblicazione (più l'eventuale sospensione feriale). Se viene notificata, il giudicato matura dopo 30 giorni (per le sentenze impugnabili con appello) o 60 giorni (per quelle impugnabili solo con cassazione). La certezza sulla data di passaggio in giudicato è fondamentale per l'esecuzione forzata, per il calcolo degli <a href="/calcolo-interessi-legali" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">interessi legali</a> sulle somme dovute e per la proposizione di eventuali azioni di revocazione straordinaria.
        </p>
        <AlertBox variant="info" title="Esempio pratico: quando passa in giudicato?">
          <p className="leading-relaxed">
            Sentenza civile pubblicata il <strong>10 marzo 2026</strong>, mai notificata. Termine lungo: 6 mesi = 10 settembre 2026. Con sospensione feriale (1-31 agosto, 31 giorni): la scadenza diventa l'<strong>11 ottobre 2026</strong> (domenica → slitta a lunedì <strong>12 ottobre 2026</strong>). La sentenza passa in giudicato il 13 ottobre 2026.
          </p>
        </AlertBox>
      </div>

      {/* ===== Esempi Pratici ===== */}
      <SectionTitle id="esempi-pratici" icon={Calculator} title="Esempi Pratici di Calcolo" subtitle="Tre casi concreti con sospensione feriale" />
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-[oklch(0.25_0.04_250)] mb-3">Esempio 1: Appello civile con notifica estiva</h3>
        <div className="bg-[oklch(0.97_0.005_250)] border border-border p-5" style={{ borderRadius: "0.375rem" }}>
          <p className="text-base leading-relaxed mb-3">
            <strong>Sentenza civile notificata il 20 luglio 2026.</strong> Termine breve per appello: 30 giorni.
          </p>
          <LegalTable
            headers={["Periodo", "Giorni consumati", "Note"]}
            rows={[
              ["21-31 luglio 2026", "11 giorni", "Decorrenza dal giorno dopo la notifica"],
              ["1-31 agosto 2026", "0 giorni", "Sospensione feriale"],
              ["1-19 settembre 2026", "19 giorni", "Ripresa del decorso"],
              ["Totale", "30 giorni", "Scadenza: 19 settembre 2026 (sabato)"],
            ]}
          />
          <p className="text-sm text-muted-foreground mt-3">
            Il 19 settembre 2026 è sabato → proroga al <strong>lunedì 21 settembre 2026</strong>.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-3">Esempio 2: Cassazione in ambito tributario</h3>
        <div className="bg-[oklch(0.97_0.005_250)] border border-border p-5" style={{ borderRadius: "0.375rem" }}>
          <p className="text-base leading-relaxed mb-3">
            <strong>Sentenza tributaria notificata il 5 giugno 2026.</strong> Termine breve per cassazione: 60 giorni.
          </p>
          <LegalTable
            headers={["Periodo", "Giorni consumati", "Note"]}
            rows={[
              ["6 giugno - 31 luglio 2026", "56 giorni", "Decorrenza dal giorno dopo la notifica"],
              ["1-31 agosto 2026", "0 giorni", "Sospensione feriale"],
              ["1-4 settembre 2026", "4 giorni", "Restanti giorni del termine"],
              ["Totale", "60 giorni", "Scadenza: 4 settembre 2026 (venerdì)"],
            ]}
          />
          <p className="text-sm text-muted-foreground mt-3">
            Il 4 settembre è venerdì → il termine scade regolarmente il <strong>4 settembre 2026</strong>.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-3">Esempio 3: Termine lungo senza notifica</h3>
        <div className="bg-[oklch(0.97_0.005_250)] border border-border p-5" style={{ borderRadius: "0.375rem" }}>
          <p className="text-base leading-relaxed mb-3">
            <strong>Sentenza civile pubblicata il 15 febbraio 2026</strong>, mai notificata. Termine lungo: 6 mesi.
          </p>
          <LegalTable
            headers={["Calcolo", "Data", "Note"]}
            rows={[
              ["Pubblicazione", "15 febbraio 2026", "Dies a quo"],
              ["+ 6 mesi", "15 agosto 2026", "Scadenza base (ex nominatione dierum)"],
              ["+ 31 gg sospensione", "15 settembre 2026", "La sospensione 1-31 agosto si somma"],
              ["Proroga festivi", "—", "15 settembre è martedì: nessuna proroga"],
            ]}
          />
          <p className="text-sm text-muted-foreground mt-3">
            Scadenza effettiva: <strong>15 settembre 2026</strong>. La sentenza passa in giudicato il 16 settembre.
          </p>
        </div>
      </div>

      {/* ===== FAQ ===== */}
      <SectionTitle id="faq" icon={HelpCircle} title="Domande Frequenti (FAQ)" subtitle="Risposte alle domande più cercate sui termini di impugnazione" />
      <FAQ items={faqData} />

      {/* ===== Normativa ===== */}
      <SectionTitle id="normativa" icon={Scale} title="Normativa di Riferimento" subtitle="Fonti legislative e regolamentari" />
      <NormativaRefTable items={normativaRiferimento} />

      {/* ===== Fonti ===== */}
      <SectionTitle id="fonti" icon={Link2} title="Fonti e Riferimenti" subtitle="Fonti istituzionali utilizzate" />
      <div className="space-y-3">
        <p className="text-base leading-relaxed">
          Le informazioni contenute in questa pagina sono state elaborate sulla base delle seguenti fonti istituzionali:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li><a href="https://www.normattiva.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Normattiva.it</a> — Portale della normativa vigente (testi coordinati di leggi, decreti e regolamenti)</li>
          <li><a href="https://www.gazzettaufficiale.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Gazzetta Ufficiale della Repubblica Italiana</a> — Pubblicazione ufficiale degli atti normativi</li>
          <li><a href="https://www.giustizia.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Ministero della Giustizia</a> — Circolari ministeriali e organizzazione giudiziaria</li>
          <li><a href="https://www.brocardi.it/codice-di-procedura-civile/libro-secondo/titolo-iii/capo-i/art325.html" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Brocardi.it — Art. 325 CPC</a> — Commento e massime giurisprudenziali</li>
          <li><a href="https://www.altalex.com/documents/2023/03/03/riforma-processo-civile-novita-giudizio-cassazione" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Altalex — Riforma processo civile</a> — Analisi della riforma Cartabia</li>
        </ul>
      </div>
    </ToolLayout>
  );
}
