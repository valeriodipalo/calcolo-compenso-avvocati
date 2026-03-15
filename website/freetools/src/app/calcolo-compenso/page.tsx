import {
  Scale, BookOpen, Calculator, Layers, Table, BarChart3, TrendingUp,
  Receipt, FileSpreadsheet, Briefcase, HelpCircle, Link2, Sparkles,
  Shield, Handshake, SearchCheck, ClipboardList, AlertTriangle, Gavel,
} from "lucide-react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { LegalTable } from "@/components/shared/LegalTable";
import { NormativaQuote } from "@/components/shared/NormativaQuote";
import { InlineNormLink } from "@/components/shared/InlineNormLink";
import { FAQ } from "@/components/shared/FAQ";
import { AlertBox } from "@/components/shared/AlertBox";
import { BulletList } from "@/components/shared/BulletList";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";
import { CircolariTable } from "@/components/shared/CircolariTable";
import Calcolatore from "@/components/calcolo-compenso/Calcolatore";
import {
  sections,
  normativaRiferimento,
  circolariMinisteriali,
  formatEuro,
} from "@/data/calcolo-compenso/compensoData";
import { faqData } from "@/data/calcolo-compenso/faqData";
import {
  JsonLd,
  breadcrumbSchema,
  faqPageSchema,
  articleSchema,
  howToSchema,
  webApplicationSchema,
} from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "Calcolo Compenso Avvocato 2026",
  description:
    "Calcola il compenso dell'avvocato con i parametri forensi aggiornati al DM 147/2022. Tabelle, scaglioni, fasi processuali, aumenti, riduzioni e calcolatore gratuito.",
  alternates: {
    canonical: "/calcolo-compenso",
  },
  openGraph: {
    type: "article",
    title: "Calcolo Compenso Avvocato 2026: Parametri Forensi e Tabelle",
    description:
      "Calcola il compenso dell'avvocato con i parametri forensi aggiornati al DM 147/2022. Tabelle, scaglioni, fasi processuali, aumenti, riduzioni e calcolatore gratuito.",
    locale: "it_IT",
    images: [
      {
        url: HERO_IMG,
        width: 1920,
        height: 1072,
        alt: "Calcolo Compenso Avvocato 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolo Compenso Avvocato 2026: Parametri Forensi e Tabelle",
    description:
      "Calcola il compenso dell'avvocato con i parametri forensi aggiornati al DM 147/2022. Tabelle, scaglioni, fasi processuali, aumenti, riduzioni e calcolatore gratuito.",
  },
};

const toolConfig: ToolConfig = {
  slug: "calcolo-compenso",
  title: "Calcolo Compenso Avvocato 2026",
  shortTitle: "Compenso Avvocato",
  icon: Scale,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroEyebrow: "Parametri Forensi, Tabelle e Calcolatore Gratuito",
  heroTitle: "Calcolo Compenso Avvocato 2026",
  heroDescription:
    "Calcola il compenso dell'avvocato secondo i parametri forensi del D.M. 55/2014 aggiornati dal D.M. 147/2022. Tabelle ufficiali con 29 competenze, 17 scaglioni, 4 fasi processuali, aumenti, riduzioni, spese generali, CPA, IVA e ritenuta d'acconto.",
  heroReference:
    "D.M. 55/2014 aggiornato dal D.M. 147/2022 — In vigore dal 23/10/2022",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "Dati aggiornati al D.M. 55/2014 come modificato dal D.M. 147/2022 (in vigore dal 23 ottobre 2022).",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    {
      label: "Altalex",
      url: "https://www.altalex.com/guide/parametri-forensi",
    },
    { label: "Ministero della Giustizia", url: "https://www.giustizia.it" },
  ],
};

export default function CalcoloCompensoPage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ===== JSON-LD Structured Data: 5 schemas ===== */}

      {/* 1. BreadcrumbList */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Strumenti Legali Gratuiti", path: "/" },
          {
            name: "Calcolo Compenso Avvocato 2026",
            path: "/calcolo-compenso",
          },
        ])}
      />

      {/* 2. Article */}
      <JsonLd
        data={articleSchema({
          headline:
            "Calcolo Compenso Avvocato 2026: Parametri Forensi, Tabelle e Calcolatore",
          description:
            "Guida completa al calcolo del compenso dell'avvocato secondo i parametri forensi del DM 55/2014 aggiornati dal DM 147/2022. Tabelle, scaglioni, fasi processuali, aumenti, riduzioni e calcolatore gratuito.",
          path: "/calcolo-compenso",
          datePublished: "2025-06-01",
          dateModified: "2026-03-15",
          image: HERO_IMG,
          sections: [
            "Come Funzionano i Parametri Forensi",
            "Come si Calcola il Compenso",
            "Le Fasi Processuali",
            "Tabelle Parametri Forensi",
            "Scaglioni di Valore",
            "Aumenti e Riduzioni",
            "Spese e Accessori",
            "Esempio di Calcolo Completo",
            "Compenso Avvocato Stragiudiziale",
            "Cause di Valore Indeterminabile",
            "Cause di Valore Superiore a 520.000 euro",
            "Mediazione e Negoziazione Assistita",
            "Equo Compenso",
            "Come Verificare se la Parcella e Giusta",
            "Novità del DM 147/2022",
            "Domande Frequenti (FAQ)",
            "Normativa di Riferimento",
          ],
        })}
      />

      {/* 3. FAQPage */}
      <JsonLd data={faqPageSchema(faqData)} />

      {/* 4. HowTo */}
      <JsonLd
        data={howToSchema({
          name: "Come si calcola il compenso dell'avvocato",
          description:
            "Guida in 5 passaggi per calcolare il compenso professionale dell'avvocato secondo i parametri forensi del DM 55/2014 aggiornati al DM 147/2022.",
          path: "/calcolo-compenso",
          totalTime: "PT5M",
          steps: [
            {
              name: "Individua la competenza",
              text: "Identifica il tipo di procedimento e la giurisdizione: Giudice di Pace, Tribunale, Corte d'Appello, Cassazione, TAR, Consiglio di Stato, Commissioni Tributarie, Arbitrati oppure una materia specifica (esecuzioni, procedimenti speciali, ADR, consulenza stragiudiziale). La scelta della competenza determina quale tabella del DM 55/2014 si applica.",
            },
            {
              name: "Determina lo scaglione di valore",
              text: "Individua il valore della causa secondo le regole processuali (artt. 10 e ss. c.p.c.) e seleziona lo scaglione corrispondente tra i 17 disponibili: da 'fino a 1.100 euro' a 'oltre 32.000.000 euro', oppure uno dei 4 scaglioni per cause di valore indeterminabile (bassa, media, alta complessità e valore non determinabile).",
            },
            {
              name: "Seleziona le fasi e i valori",
              text: "Per ciascuna delle fasi effettivamente svolte (studio, introduttiva, istruttoria/trattazione, decisionale), seleziona il valore minimo (-50%), medio o massimo (+50%) dalla tabella parametrica. Il compenso base è la somma dei valori di tutte le fasi selezionate.",
            },
            {
              name: "Applica aumenti e riduzioni",
              text: "Aggiungi gli eventuali aumenti (pluralità parti fino a +200%, conciliazione +25% sulla fase decisionale, class action fino a +300%, manifesta fondatezza +33%, PCT +30%) e sottrai le riduzioni (assenza questioni fino a -30%, condotte ostative fino a -50%, gratuito patrocinio -50%).",
            },
            {
              name: "Aggiungi spese e accessori",
              text: "Al compenso adeguato aggiungi le spese generali forfettarie del 15%, calcola la CPA al 4% sul compenso, applica l'IVA al 22% su compenso, spese imponibili e CPA. Se il cliente e sostituto d'imposta, sottrai la ritenuta d'acconto del 20% per ottenere il netto.",
            },
          ],
        })}
      />

      {/* 5. WebApplication */}
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Compenso Avvocato",
          description:
            "Calcolatore gratuito del compenso professionale dell'avvocato secondo i parametri forensi DM 55/2014 aggiornati al DM 147/2022. 29 competenze, 17 scaglioni, 4 fasi processuali.",
          path: "/calcolo-compenso",
          applicationCategory: "FinanceApplication",
        })}
      />

      {/* ================================================================
          SECTION 1: Calcolatore
          ================================================================ */}
      <Calcolatore />

      {/* ================================================================
          SECTION 2: Parametri Forensi
          ================================================================ */}
      <SectionTitle
        id="parametri-forensi"
        icon={BookOpen}
        title="Come Funzionano i Parametri Forensi"
        subtitle="Art. 1 D.M. 55/2014 — Ambito di applicazione"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          I <strong>parametri forensi</strong> sono i criteri stabiliti dal
          Ministero della Giustizia per la determinazione del compenso spettante
          all&apos;avvocato per l&apos;attività professionale svolta. La
          disciplina è contenuta nel{" "}
          <InlineNormLink
            text="D.M. 10 marzo 2014, n. 55"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
          />
          , emanato ai sensi dell&apos;
          <InlineNormLink
            text="art. 13, comma 6, della Legge 31 dicembre 2012, n. 247"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247"
          />{" "}
          (ordinamento della professione forense), e successivamente aggiornato
          dal{" "}
          <InlineNormLink
            text="D.M. 13 agosto 2022, n. 147"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147"
          />
          , in vigore dal 23 ottobre 2022.
        </p>
        <p className="text-base leading-relaxed">
          I parametri si applicano nei seguenti casi: quando il compenso non e
          stato determinato all&apos;atto dell&apos;incarico o successivamente in
          forma scritta, in caso di{" "}
          <strong>liquidazione giudiziale</strong> del compenso, per prestazioni
          rese nell&apos;interesse di terzi o per prestazioni d&apos;ufficio
          previste dalla legge. Quando invece esiste un{" "}
          <strong>accordo scritto</strong> tra avvocato e cliente, i parametri
          non si applicano e fa fede il contratto.
        </p>
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55">
          Art. 1, c. 1: &quot;I compensi degli avvocati [...] sono liquidati in
          base ai parametri indicati nelle tabelle allegate, che sono applicate
          tenendo conto dei valori medi di cui alla tabella allegata, che possono
          essere aumentati, di regola, fino all&apos;80 per cento, o diminuiti
          fino al 50 per cento.&quot;
        </NormativaQuote>
        <AlertBox variant="info" title="Quando NON si applicano i parametri">
          <p>
            I parametri non si applicano se avvocato e cliente hanno sottoscritto
            un accordo scritto sul compenso (
            <InlineNormLink
              text="art. 13, c. 2, L. 247/2012"
              url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247"
            />
            ). L&apos;accordo può prevedere un compenso a forfait, a tempo
            (tariffa oraria) o in percentuale sul valore dell&apos;affare. E
            tuttavia vietato il patto di quota lite puro (compenso correlato al
            solo risultato della lite).
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          I parametri rappresentano dunque un{" "}
          <strong>riferimento sussidiario</strong>: il giudice li utilizza per
          liquidare il compenso tenendo conto della natura, complessità e
          importanza dell&apos;incarico, del numero e dell&apos;importanza delle
          questioni trattate, dell&apos;impegno profuso e dei risultati
          conseguiti (
          <InlineNormLink
            text="art. 4, c. 1, D.M. 55/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
          />
          ).
        </p>
      </div>

      {/* ================================================================
          SECTION 3: Come si Calcola
          ================================================================ */}
      <SectionTitle
        id="come-si-calcola"
        icon={Calculator}
        title="Come si Calcola il Compenso dell'Avvocato"
        subtitle="Procedimento in 5 passaggi"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il calcolo del <strong>compenso dell&apos;avvocato</strong> secondo i
          parametri forensi segue una procedura articolata in cinque fasi
          successive. Ciascun passaggio è disciplinato dal{" "}
          <InlineNormLink
            text="D.M. 55/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
          />{" "}
          e successive modificazioni.
        </p>

        <div className="space-y-6">
          <div
            className="border border-border p-4"
            style={{ borderRadius: "0.375rem" }}
          >
            <p className="font-semibold text-[oklch(0.25_0.04_250)] mb-1">
              1. Individua la competenza
            </p>
            <p className="text-sm leading-relaxed">
              Identifica il tipo di procedimento e la giurisdizione competente.
              Il D.M. 55/2014 prevede <strong>28 tabelle</strong> (Tab. I-XXVI +
              Tab. XX-bis + Tab. XXV-bis), ciascuna riferita a un diverso tipo di
              procedimento o giurisdizione: dal Giudice di pace al Tribunale
              ordinario, dalla Corte d&apos;Appello alla Cassazione, dai
              procedimenti amministrativi (TAR, Consiglio di Stato) alle
              commissioni tributarie, dagli arbitrati alla consulenza
              stragiudiziale.
            </p>
          </div>

          <div
            className="border border-border p-4"
            style={{ borderRadius: "0.375rem" }}
          >
            <p className="font-semibold text-[oklch(0.25_0.04_250)] mb-1">
              2. Determina lo scaglione di valore
            </p>
            <p className="text-sm leading-relaxed">
              Il valore della causa si determina secondo le regole processuali (
              <InlineNormLink
                text="artt. 10 e ss. c.p.c."
                url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art10"
              />
              ). Le tabelle prevedono <strong>13 scaglioni</strong> da &quot;fino
              a {formatEuro(1100)}&quot; a &quot;oltre {formatEuro(32000000)}
              &quot;, più 4 scaglioni per le cause di valore indeterminabile
              (bassa, media e alta complessità e valore non determinabile).
            </p>
          </div>

          <div
            className="border border-border p-4"
            style={{ borderRadius: "0.375rem" }}
          >
            <p className="font-semibold text-[oklch(0.25_0.04_250)] mb-1">
              3. Seleziona le fasi e i valori
            </p>
            <p className="text-sm leading-relaxed">
              Per ciascuna fase effettivamente svolta (studio della controversia,
              fase introduttiva, fase istruttoria/trattazione, fase decisionale),
              seleziona il valore <strong>minimo</strong> (-50% del medio),{" "}
              <strong>medio</strong> (tabellare) o <strong>massimo</strong> (+50%
              del medio). Il compenso base è la somma dei valori di tutte le fasi
              selezionate.
            </p>
          </div>

          <div
            className="border border-border p-4"
            style={{ borderRadius: "0.375rem" }}
          >
            <p className="font-semibold text-[oklch(0.25_0.04_250)] mb-1">
              4. Applica aumenti e riduzioni
            </p>
            <p className="text-sm leading-relaxed">
              Si applicano gli eventuali aumenti previsti dall&apos;
              <InlineNormLink
                text="art. 4 D.M. 55/2014"
                url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
              />{" "}
              (pluralità di parti, conciliazione, class action, manifesta
              fondatezza, predisposizioni PCT) e le riduzioni (assenza di
              questioni, condotte ostative, responsabilità processuale, gratuito
              patrocinio).
            </p>
          </div>

          <div
            className="border border-border p-4"
            style={{ borderRadius: "0.375rem" }}
          >
            <p className="font-semibold text-[oklch(0.25_0.04_250)] mb-1">
              5. Aggiungi spese e accessori
            </p>
            <p className="text-sm leading-relaxed">
              Al compenso adeguato si aggiungono: le{" "}
              <strong>spese generali forfettarie del 15%</strong> (
              <InlineNormLink
                text="art. 2 D.M. 55/2014"
                url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
              />
              ), la <strong>CPA al 4%</strong> (contributo Cassa Forense),
              l&apos;
              <strong>IVA al 22%</strong> su compenso, spese imponibili e CPA, e
              la eventuale <strong>ritenuta d&apos;acconto del 20%</strong> (se
              il cliente e sostituto d&apos;imposta).
            </p>
          </div>
        </div>

        <AlertBox variant="info" title="Formula sintetica">
          <p className="font-mono text-xs">
            Compenso Base (somma fasi) + Aumenti - Riduzioni = Base Adeguata
          </p>
          <p className="font-mono text-xs mt-1">
            Base Adeguata + Spese Generali (15%) = Compenso
          </p>
          <p className="font-mono text-xs mt-1">
            Compenso + Spese Imponibili + CPA (4%) + IVA (22%) = Totale Lordo
          </p>
          <p className="font-mono text-xs mt-1">
            Totale Lordo - Ritenuta (20% sul compenso) = Netto a Pagare
          </p>
        </AlertBox>
      </div>

      {/* ================================================================
          SECTION 4: Fasi Processuali
          ================================================================ */}
      <SectionTitle
        id="fasi-processuali"
        icon={Layers}
        title="Le Fasi Processuali"
        subtitle="Art. 4, c. 5, D.M. 55/2014"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il{" "}
          <InlineNormLink
            text="D.M. 55/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
          />{" "}
          suddivide l&apos;attività dell&apos;avvocato in{" "}
          <strong>quattro fasi processuali</strong> principali, ciascuna con un
          proprio valore parametrico. Il compenso viene calcolato separatamente
          per ciascuna fase effettivamente svolta: se una fase non viene
          espletata, il relativo compenso non è dovuto.
        </p>

        <LegalTable
          headers={["Fase", "Codice", "Attività comprese"]}
          rows={[
            [
              "Studio della controversia",
              "10",
              "Esame e studio degli atti, ricerche giurisprudenziali e dottrinali, consultazioni con il cliente, analisi della documentazione",
            ],
            [
              "Fase introduttiva",
              "20",
              "Redazione dell’atto introduttivo (citazione, ricorso), iscrizione a ruolo, notificazioni, costituzione in giudizio",
            ],
            [
              "Fase istruttoria / trattazione",
              "30",
              "Richieste istruttorie, udienze di trattazione, memorie autorizzate, esame documenti e perizie, interrogatori e testimonianze",
            ],
            [
              "Fase decisionale",
              "40",
              "Precisazione delle conclusioni, comparse conclusionali e memorie di replica, discussione orale, sentenza",
            ],
          ]}
        />

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55">
          Art. 4, c. 5: &quot;Il compenso è liquidato per fasi. Nella
          liquidazione, il giudice deve indicare le voci e le fasi in relazione
          alle quali il compenso è riconosciuto.&quot;
        </NormativaQuote>

        <AlertBox
          variant="warning"
          title="Fasi speciali per alcune giurisdizioni"
        >
          <p>
            I procedimenti davanti al{" "}
            <strong>T.A.R. e Consiglio di Stato</strong> prevedono fasi diverse:
            fase cautelare (codice 72) e fase esecutiva (codice 74), in luogo
            delle fasi standard del rito ordinario. La{" "}
            <strong>Corte di Cassazione</strong> non prevede la fase istruttoria
            (codice 30), coerentemente con la natura di giudizio di legittimita.
            Le <strong>esecuzioni</strong> prevedono due fasi:
            studio/introduttiva e istruttoria/trattazione.
          </p>
        </AlertBox>

        <p className="text-base leading-relaxed">
          Per ciascuna fase, le tabelle del D.M. indicano il{" "}
          <strong>valore medio</strong>. I valori minimo e massimo si ottengono
          applicando al valore medio la variazione del{" "}
          <strong>&plusmn;50%</strong> introdotta dal{" "}
          <InlineNormLink
            text="D.M. 147/2022"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147"
          />{" "}
          (che ha uniformato le percentuali, precedentemente differenziate per
          fase). Il giudice può liquidare un importo compreso tra il -50% e il
          +50% del valore medio, senza necessità di specifica motivazione entro
          tali limiti.
        </p>
      </div>

      {/* ================================================================
          SECTION 5: Tabelle Parametri
          ================================================================ */}
      <SectionTitle
        id="tabelle-parametri"
        icon={Table}
        title="Tabelle Parametri Forensi"
        subtitle="28 tabelle allegate al D.M. 55/2014 (agg. D.M. 147/2022)"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Le <strong>tabelle dei parametri forensi</strong> sono allegate al{" "}
          <InlineNormLink
            text="D.M. 55/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
          />{" "}
          e contengono i valori medi del compenso per ciascuna fase, suddivisi
          per competenza e scaglione di valore della causa. Le tabelle sono
          organizzate in categorie.
        </p>

        <LegalTable
          headers={["Categoria", "Tabelle", "Giurisdizioni / Materie"]}
          rows={[
            [
              "Giurisdizioni ordinarie",
              "Tab. I-VII",
              "Giudice di Pace, Tribunale, Corte d’Appello, Cassazione, Magistrature superiori, Corte Costituzionale, Corte Europea / UE",
            ],
            [
              "Giurisdizioni speciali",
              "Tab. VIII-XIV",
              "Corte dei Conti, Commissioni Tributarie, T.A.R., Consiglio di Stato, CGA Sicilia",
            ],
            [
              "Materie specifiche",
              "Tab. XV-XXII",
              "Esecuzioni, procedimenti speciali, volontaria giurisdizione, precetto, monitori, iscrizione ipotecaria",
            ],
            [
              "Istruzione preventiva",
              "Tab. XXIII",
              "Procedimenti di istruzione preventiva",
            ],
            [
              "Amministrativo speciale",
              "Tab. XXIV-XXV",
              "Ricorso per ingiunzione TAR, contrattualistica pubblica e privata",
            ],
            [
              "ADR e stragiudiziale",
              "Tab. XXV-bis",
              "Mediazione, negoziazione assistita, ADR",
            ],
            ["Arbitrati", "Tab. XXVI", "Arbitrati rituali e irrituali"],
            [
              "Consulenza stragiudiziale",
              "Tab. XX-bis",
              "Consulenza e pareri stragiudiziali",
            ],
          ]}
        />

        <p className="text-base leading-relaxed">
          A titolo esemplificativo, riportiamo i valori medi per il{" "}
          <strong>Tribunale ordinario (Tab. II)</strong>, che è la tabella piu
          comunemente utilizzata per i giudizi di cognizione civile.
        </p>

        <LegalTable
          headers={[
            "Scaglione",
            "Studio",
            "Introduttiva",
            "Istruttoria",
            "Decisionale",
            "Totale Medio",
          ]}
          rows={[
            [
              "Fino a 1.100",
              formatEuro(255),
              formatEuro(255),
              formatEuro(382),
              formatEuro(459),
              formatEuro(1351),
            ],
            [
              "1.100 - 5.200",
              formatEuro(382),
              formatEuro(382),
              formatEuro(695),
              formatEuro(1093),
              formatEuro(2552),
            ],
            [
              "5.200 - 26.000",
              formatEuro(567),
              formatEuro(567),
              formatEuro(1134),
              formatEuro(1701),
              formatEuro(3969),
            ],
            [
              "26.000 - 52.000",
              formatEuro(1134),
              formatEuro(1134),
              formatEuro(1701),
              formatEuro(3647),
              formatEuro(7616),
            ],
            [
              "52.000 - 260.000",
              formatEuro(1701),
              formatEuro(1701),
              formatEuro(3157),
              formatEuro(5670),
              formatEuro(12229),
            ],
            [
              "260.000 - 520.000",
              formatEuro(2551),
              formatEuro(2551),
              formatEuro(5103),
              formatEuro(8504),
              formatEuro(18709),
            ],
          ]}
        />
        <p className="text-sm text-muted-foreground mt-2">
          I valori minimi e massimi si ottengono applicando &minus;50% e +50% al
          valore medio. Esempio: per lo scaglione {formatEuro(26000)}-
          {formatEuro(52000)}, il compenso totale varia da {formatEuro(3808)}{" "}
          (minimo) a {formatEuro(11424)} (massimo).
        </p>

        <AlertBox variant="info">
          <p>
            Il calcolatore in cima a questa pagina contiene{" "}
            <strong>tutti i valori di tutte le 28 tabelle</strong> per ciascuna
            delle 29 competenze e 17 scaglioni, compresi i valori per cause di
            valore indeterminabile e non determinabile.
          </p>
        </AlertBox>
      </div>

      {/* ================================================================
          SECTION 6: Scaglioni
          ================================================================ */}
      <SectionTitle
        id="scaglioni"
        icon={BarChart3}
        title="Scaglioni di Valore"
        subtitle="Art. 5 D.M. 55/2014"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Gli <strong>scaglioni di valore</strong> determinano quale riga della
          tabella parametrica si applica al caso concreto. Il valore della causa
          si determina secondo le regole degli{" "}
          <InlineNormLink
            text="artt. 10 e seguenti del codice di procedura civile"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art10"
          />
          . Nelle cause di impugnazione, il valore è quello della domanda
          originaria.
        </p>

        <LegalTable
          headers={["Scaglione", "Da", "A"]}
          rows={[
            ["1", "—", formatEuro(1100)],
            ["2", formatEuro(1100.01), formatEuro(5200)],
            ["3", formatEuro(5200.01), formatEuro(26000)],
            ["4", formatEuro(26000.01), formatEuro(52000)],
            ["5", formatEuro(52000.01), formatEuro(260000)],
            ["6", formatEuro(260000.01), formatEuro(520000)],
            ["7", formatEuro(520000.01), formatEuro(1000000)],
            ["8", formatEuro(1000000.01), formatEuro(2000000)],
            ["9", formatEuro(2000000.01), formatEuro(4000000)],
            ["10", formatEuro(4000000.01), formatEuro(8000000)],
            ["11", formatEuro(8000000.01), formatEuro(16000000)],
            ["12", formatEuro(16000000.01), formatEuro(32000000)],
            ["13", "Oltre", formatEuro(32000000)],
          ]}
        />

        <AlertBox variant="warning" title="Cause di valore indeterminabile">
          <p>
            Per le cause di valore indeterminabile, l&apos;
            <InlineNormLink
              text="art. 5, c. 6, D.M. 55/2014"
              url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
            />{" "}
            prevede tre livelli di complessità: <strong>bassa</strong>{" "}
            (equiparata allo scaglione {formatEuro(26000)}-{formatEuro(52000)}),{" "}
            <strong>media</strong> (media aritmetica tra i valori) e{" "}
            <strong>alta</strong> (equiparata allo scaglione{" "}
            {formatEuro(52000)}-{formatEuro(260000)}). Esiste inoltre lo
            scaglione &quot;valore non determinabile&quot; per i casi residuali.
          </p>
        </AlertBox>
      </div>

      {/* ================================================================
          SECTION 7: Aumenti e Riduzioni
          ================================================================ */}
      <SectionTitle
        id="aumenti-riduzioni"
        icon={TrendingUp}
        title="Aumenti e Riduzioni"
        subtitle="Art. 4 D.M. 55/2014"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L&apos;
          <InlineNormLink
            text="art. 4 del D.M. 55/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
          />{" "}
          disciplina una serie di <strong>aumenti e riduzioni</strong> che si
          applicano al compenso base. Dopo il{" "}
          <InlineNormLink
            text="D.M. 147/2022"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147"
          />
          , la variazione ordinaria è stata uniformata al &plusmn;50% per tutte
          le fasi.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-6 mb-3">
          Aumenti
        </h3>
        <LegalTable
          headers={["Aumento", "Percentuale", "Base di calcolo", "Riferimento"]}
          rows={[
            [
              "Pluralita di parti (fino a 10)",
              "+20% per parte aggiuntiva",
              "Compenso totale",
              "Art. 4, c. 2",
            ],
            [
              "Pluralita di parti (11-20)",
              "+10% per parte aggiuntiva",
              "Compenso totale",
              "Art. 4, c. 2",
            ],
            [
              "Conciliazione / transazione",
              "Fino a +25%",
              "Fase decisionale",
              "Art. 4, c. 6",
            ],
            [
              "Class action",
              "Fino a +300%",
              "Compenso totale",
              "Art. 4, c. 10",
            ],
            [
              "Manifesta fondatezza",
              "Fino a +33%",
              "Compenso totale",
              "Art. 4, c. 8",
            ],
            [
              "Predisposizioni PCT",
              "Fino a +30%",
              "Compenso totale",
              "Art. 4, c. 1-bis",
            ],
            [
              "Motivi aggiunti (TAR)",
              "Fino a +50%",
              "Fase introduttiva",
              "Art. 4, c. 10-bis",
            ],
            [
              "Ricorso incidentale",
              "Fino a +20%",
              "Fase introduttiva",
              "Art. 4, c. 10-bis",
            ],
            [
              "Memoria 378 c.p.c.",
              "Fino a +40%",
              "Fase decisionale",
              "Art. 4, c. 10-bis",
            ],
          ]}
        />

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-6 mb-3">
          Riduzioni
        </h3>
        <LegalTable
          headers={["Riduzione", "Percentuale", "Tipo", "Riferimento"]}
          rows={[
            [
              "Assenza questioni di fatto e diritto",
              "Fino a -30%",
              "Variabile",
              "Art. 4, c. 4",
            ],
            [
              "Condotte ostative della parte",
              "Fino a -50%",
              "Variabile",
              "Art. 4, c. 7",
            ],
            [
              "Responsabilita ex art. 96 c.p.c.",
              "-75% (fisso)",
              "Fisso",
              "Art. 4, c. 9",
            ],
            [
              "Pronunce in rito",
              "-50% (fisso)",
              "Fisso",
              "Art. 4, c. 9",
            ],
            [
              "Gratuito patrocinio",
              "-50% (fisso)",
              "Fisso",
              "Art. 130 D.P.R. 115/2002",
            ],
            [
              "Praticante abilitato",
              "Da -5% a -50%",
              "Variabile",
              "Art. 9",
            ],
          ]}
        />

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55">
          Art. 4, c. 2: &quot;Quando in una causa l&apos;avvocato assiste piu
          soggetti aventi la stessa posizione processuale, il compenso unico puo
          essere aumentato per ogni soggetto oltre il primo nella misura del 20
          per cento, fino a un massimo di dieci soggetti, e del 10 per cento per
          ogni soggetto oltre il decimo.&quot;
        </NormativaQuote>

        <AlertBox variant="info" title="Esempio: pluralità di parti">
          <p>
            Se l&apos;avvocato assiste 5 clienti in una causa, l&apos;aumento e:
            (5 - 1) &times; 20% = <strong>+80%</strong> sul compenso totale. Per
            12 parti: (9 &times; 20%) + (2 &times; 10%) = 180% + 20% ={" "}
            <strong>+200%</strong>.
          </p>
        </AlertBox>
      </div>

      {/* ================================================================
          SECTION 8: Spese e Accessori
          ================================================================ */}
      <SectionTitle
        id="spese-accessori"
        icon={Receipt}
        title="Spese e Accessori"
        subtitle="Artt. 2 e 13 D.M. 55/2014"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Oltre al compenso per l&apos;attività professionale, la parcella
          dell&apos;avvocato comprende una serie di{" "}
          <strong>voci accessorie</strong> obbligatorie e facoltative. La
          corretta determinazione di ciascuna voce è fondamentale per verificare
          la congruità della parcella.
        </p>

        <FeatureGrid
          items={[
            {
              title: "Spese generali (15%)",
              desc: "Rimborso forfettario obbligatorio per spese di studio, segreteria e utenze (art. 2 D.M. 55/2014). Si calcola sul compenso adeguato.",
            },
            {
              title: "CPA (4%)",
              desc: "Contributo integrativo Cassa Forense. Si calcola sul compenso comprensivo di spese generali. Addebitato in fattura al cliente.",
            },
            {
              title: "IVA (22%)",
              desc: "Si applica su compenso + spese generali + spese imponibili + CPA. Le spese esenti (art. 15 DPR 633/72) sono escluse dalla base IVA.",
            },
            {
              title: "Ritenuta d’acconto (20%)",
              desc: "Si applica quando il cliente e sostituto d’imposta (societa, enti, professionisti). Si calcola sul compenso, esclusi CPA, IVA e spese.",
            },
          ]}
        />

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55">
          Art. 2: &quot;Oltre al compenso e al rimborso delle spese documentate
          e di quelle forfettarie nella misura del 15 per cento del compenso, il
          cliente è tenuto a corrispondere all&apos;avvocato il contributo
          integrativo alla Cassa nazionale di previdenza e assistenza forense
          [4%] e l&apos;IVA se dovuta.&quot;
        </NormativaQuote>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-6 mb-3">
          Spese documentate
        </h3>
        <p className="text-base leading-relaxed">
          Le spese documentate si suddividono in due categorie fiscali:
        </p>
        <LegalTable
          headers={["Tipo di spesa", "Esempi", "Trattamento IVA"]}
          rows={[
            [
              "Spese esenti (art. 15 DPR 633/72)",
              "Contributo unificato, marche da bollo, diritti di copia, diritti di notifica",
              "Escluse dalla base IVA",
            ],
            [
              "Spese imponibili",
              "Spese di trasferta, spese di viaggio, perizie di parte, visure",
              "Soggette a IVA 22%",
            ],
          ]}
        />

        <AlertBox variant="warning" title="Attenzione alla ritenuta d'acconto">
          <p>
            La <strong>ritenuta d&apos;acconto del 20%</strong> (
            <InlineNormLink
              text="art. 25 D.P.R. 600/1973"
              url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600"
            />
            ) si applica <strong>solo</strong> quando il cliente e sostituto
            d&apos;imposta (società, enti, altri professionisti con dipendenti).
            Non si applica quando il cliente e un privato consumatore. La base di
            calcolo è il compenso comprensivo di spese generali, esclusi CPA,
            IVA e spese documentate.
          </p>
        </AlertBox>
      </div>

      {/* ================================================================
          SECTION 9: Esempio di Calcolo
          ================================================================ */}
      <SectionTitle
        id="esempio-calcolo"
        icon={FileSpreadsheet}
        title="Esempio di Calcolo Completo"
        subtitle="Causa civile — Tribunale ordinario, valore € 30.000"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Vediamo un <strong>esempio pratico</strong> di calcolo del compenso per
          una causa civile ordinaria di cognizione davanti al Tribunale, con
          valore della causa di {formatEuro(30000)} (scaglione{" "}
          {formatEuro(26000)}-{formatEuro(52000)}, Tab. II). Ipotizziamo che
          l&apos;avvocato abbia svolto tutte e quattro le fasi con valori medi e
          non si applichino aumenti ne riduzioni.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">
          Passo 1: Compenso base (valori medi)
        </h3>
        <LegalTable
          headers={["Fase", "Valore medio"]}
          rows={[
            ["Studio della controversia", formatEuro(1134)],
            ["Fase introduttiva", formatEuro(1134)],
            ["Fase istruttoria / trattazione", formatEuro(1701)],
            ["Fase decisionale", formatEuro(3647)],
            ["Compenso base", formatEuro(7616)],
          ]}
        />

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">
          Passo 2: Aumenti e riduzioni
        </h3>
        <p className="text-base leading-relaxed">
          In questo esempio non si applicano aumenti ne riduzioni, quindi il
          compenso adeguato coincide con il compenso base:{" "}
          <strong className="font-mono">{formatEuro(7616)}</strong>.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">
          Passo 3: Spese e accessori
        </h3>
        <LegalTable
          headers={["Voce", "Calcolo", "Importo"]}
          rows={[
            ["Compenso adeguato", "—", formatEuro(7616)],
            ["Spese generali (15%)", "7.616 x 15%", formatEuro(1142.4)],
            [
              "Compenso totale",
              "7.616 + 1.142,40",
              formatEuro(8758.4),
            ],
            ["CPA (4%)", "8.758,40 x 4%", formatEuro(350.34)],
            [
              "Imponibile IVA",
              "8.758,40 + 350,34",
              formatEuro(9108.74),
            ],
            ["IVA (22%)", "9.108,74 x 22%", formatEuro(2003.92)],
            [
              "Totale lordo",
              "9.108,74 + 2.003,92",
              formatEuro(11112.66),
            ],
            [
              "Ritenuta d’acconto (20%)",
              "8.758,40 x 20%",
              formatEuro(1751.68),
            ],
            [
              "Netto a pagare",
              "11.112,66 - 1.751,68",
              formatEuro(9360.98),
            ],
          ]}
        />

        <AlertBox variant="info" title="Range con valori minimi e massimi">
          <p>
            Con i valori <strong>minimi</strong> (-50%), il compenso base sarebbe{" "}
            {formatEuro(3808)} e il totale lordo circa {formatEuro(5556)}. Con i
            valori <strong>massimi</strong> (+50%), il compenso base sarebbe{" "}
            {formatEuro(11424)} e il totale lordo circa {formatEuro(16669)}. La
            parcella può quindi variare di un fattore 3x tra minimo e massimo.
          </p>
        </AlertBox>
      </div>

      {/* ================================================================
          SECTION 10: Stragiudiziale
          ================================================================ */}
      <SectionTitle
        id="stragiudiziale"
        icon={Briefcase}
        title="Compenso Avvocato Stragiudiziale"
        subtitle="Artt. 18-20 D.M. 55/2014 — Tab. XXV-bis"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L&apos;attività <strong>stragiudiziale</strong> dell&apos;avvocato
          comprende le consulenze, i pareri, la redazione di atti e la
          negoziazione che si svolgono al di fuori di un procedimento
          giudiziario. Il compenso è disciplinato dagli{" "}
          <InlineNormLink
            text="artt. 18-20 del D.M. 55/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
          />{" "}
          e dalla <strong>Tabella XXV-bis</strong>, introdotta dal{" "}
          <InlineNormLink
            text="D.M. 37/2018"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2018-03-08;37"
          />
          .
        </p>
        <p className="text-base leading-relaxed">
          Per l&apos;attività stragiudiziale, il compenso e{" "}
          <strong>onnicomprensivo</strong>: comprende tutte le attività svolte e
          non è suddiviso in fasi. Si applica un unico valore parametrico in
          base allo scaglione di valore dell&apos;affare, con la consueta
          variazione del &plusmn;50%.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55">
          Art. 18: &quot;Per l&apos;assistenza stragiudiziale, il compenso e
          determinato con riferimento ai parametri di cui all&apos;articolo 4,
          commi 1, 2, 3, 4, 5, 6, 7 e 8, in quanto applicabili.&quot;
        </NormativaQuote>

        <BulletList
          items={[
            "Consulenze legali e pareri scritti",
            "Redazione di contratti, atti e transazioni",
            "Assistenza in trattative pre-contenzioso",
            "Lettere di diffida e messa in mora",
            "Due diligence legali",
            "Assistenza nella risoluzione bonaria delle controversie",
          ]}
        />

        <AlertBox variant="info" title="Tariffazione oraria (art. 22-bis)">
          <p>
            Il{" "}
            <InlineNormLink
              text="D.M. 147/2022"
              url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147"
            />{" "}
            ha introdotto l&apos;art. 22-bis che prevede un parametro indicativo
            per la <strong>tariffazione oraria</strong>: da un minimo di{" "}
            {formatEuro(200)} a un massimo di {formatEuro(500)} per ciascuna ora
            o frazione di ora superiore a 30 minuti. Si tratta di un riferimento
            orientativo che può essere liberamente concordato tra le parti.
          </p>
        </AlertBox>
      </div>

      {/* ================================================================
          SECTION 11: Valore Indeterminabile
          ================================================================ */}
      <SectionTitle
        id="valore-indeterminabile"
        icon={HelpCircle}
        title="Cause di Valore Indeterminabile"
        subtitle="Art. 5, c. 6, D.M. 55/2014"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Quando il valore della causa non è determinabile secondo le regole
          processuali, il{" "}
          <InlineNormLink
            text="D.M. 55/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
          />{" "}
          prevede tre livelli di complessità, ciascuno con valori parametrici
          propri. Il range di riferimento è compreso tra {formatEuro(26000)} e{" "}
          {formatEuro(260000)}.
        </p>

        <LegalTable
          headers={[
            "Livello",
            "Complessità",
            "Scaglione equivalente",
            "Range compenso medio (Tribunale)",
          ]}
          rows={[
            [
              "Bassa",
              "Questioni semplici, giurisprudenza consolidata",
              "26.000 - 52.000",
              "Da " + formatEuro(3808) + " a " + formatEuro(11424),
            ],
            [
              "Media",
              "Complessità intermedia",
              "Media aritmetica",
              "Valori intermedi",
            ],
            [
              "Alta",
              "Questioni complesse, giurisprudenza incerta",
              "52.000 - 260.000",
              "Da " + formatEuro(6115) + " a " + formatEuro(18344),
            ],
          ]}
        />

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55">
          Art. 5, c. 6: &quot;Le cause di valore indeterminabile sono equiparate
          allo scaglione da euro 26.001 a euro 52.000, se di bassa complessità,
          e allo scaglione da euro 52.001 a euro 260.000, se di alta
          complessità.&quot;
        </NormativaQuote>

        <AlertBox variant="info">
          <p>
            Il calcolatore prevede anche lo scaglione{" "}
            <strong>&quot;valore non determinabile&quot;</strong>, che si applica
            quando la causa non è nemmeno classificabile nei tre livelli di
            complessità. In questo caso il giudice liquida il compenso in via
            equitativa, utilizzando i parametri come mero riferimento
            orientativo.
          </p>
        </AlertBox>
      </div>

      {/* ================================================================
          SECTION 12: Cause oltre 520k
          ================================================================ */}
      <SectionTitle
        id="cause-oltre-520k"
        icon={TrendingUp}
        title="Cause di Valore Superiore a € 520.000"
        subtitle="Art. 6 D.M. 147/2022"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Per le cause di <strong>valore molto elevato</strong>, superiore a{" "}
          {formatEuro(520000)}, il{" "}
          <InlineNormLink
            text="D.M. 147/2022"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147"
          />{" "}
          ha introdotto un meccanismo progressivo di incremento del compenso. La
          tabella prevede scaglioni aggiuntivi fino a &quot;oltre{" "}
          {formatEuro(32000000)}&quot;, con valori parametrici crescenti.
        </p>

        <p className="text-base leading-relaxed">
          Il criterio di progressione prevede un{" "}
          <strong>aumento del 30%</strong> per ciascun raddoppio del valore della
          causa rispetto allo scaglione precedente. Questo meccanismo garantisce
          una crescita proporzionata del compenso senza distorsioni per le cause
          di altissimo valore.
        </p>

        <LegalTable
          headers={[
            "Scaglione",
            "Moltiplicatore rispetto allo scaglione base",
          ]}
          rows={[
            [
              formatEuro(520000) + " - " + formatEuro(1000000),
              "Base + 30%",
            ],
            [
              formatEuro(1000000) + " - " + formatEuro(2000000),
              "Base + 60%",
            ],
            [
              formatEuro(2000000) + " - " + formatEuro(4000000),
              "Base + 90%",
            ],
            [
              formatEuro(4000000) + " - " + formatEuro(8000000),
              "Base + 120%",
            ],
            [
              formatEuro(8000000) + " - " + formatEuro(16000000),
              "Base + 150%",
            ],
            [
              formatEuro(16000000) + " - " + formatEuro(32000000),
              "Base + 180%",
            ],
            ["Oltre " + formatEuro(32000000), "Base + 210%"],
          ]}
        />

        <AlertBox variant="warning" title="Variazione &plusmn;50% cumulabile">
          <p>
            Anche per le cause di valore superiore a {formatEuro(520000)}, il
            giudice può applicare la variazione del &plusmn;50% sul valore medio
            di ciascuna fase. L&apos;aumento progressivo del 30% si cumula con
            la variazione ordinaria, creando un range potenzialmente molto ampio.
          </p>
        </AlertBox>
      </div>

      {/* ================================================================
          SECTION 13: Mediazione e Negoziazione
          ================================================================ */}
      <SectionTitle
        id="mediazione-negoziazione"
        icon={Handshake}
        title="Mediazione e Negoziazione Assistita"
        subtitle="Tab. XXV-bis D.M. 55/2014 — Artt. 18-20"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>Tabella XXV-bis</strong>, introdotta dal{" "}
          <InlineNormLink
            text="D.M. 37/2018"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2018-03-08;37"
          />{" "}
          e aggiornata dal{" "}
          <InlineNormLink
            text="D.M. 147/2022"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147"
          />
          , disciplina i compensi per la mediazione civile e commerciale (
          <InlineNormLink
            text="D.Lgs. 28/2010"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-03-04;28"
          />
          ), la negoziazione assistita (
          <InlineNormLink
            text="D.L. 132/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132"
          />
          ) e le procedure ADR in generale.
        </p>

        <p className="text-base leading-relaxed">
          Il compenso per le procedure ADR e <strong>onnicomprensivo</strong> e
          non suddiviso in fasi. Si prevede tuttavia un{" "}
          <strong>aumento fino al 30%</strong> del compenso quando la procedura
          si conclude con un <strong>accordo</strong> tra le parti, quale
          incentivo alla definizione bonaria della controversia.
        </p>

        <LegalTable
          headers={[
            "Scaglione",
            "Compenso medio Tab. XXV-bis (indicativo)",
          ]}
          rows={[
            ["Fino a " + formatEuro(1100), formatEuro(350)],
            [
              formatEuro(1100) + " - " + formatEuro(5200),
              formatEuro(700),
            ],
            [
              formatEuro(5200) + " - " + formatEuro(26000),
              formatEuro(1400),
            ],
            [
              formatEuro(26000) + " - " + formatEuro(52000),
              formatEuro(2100),
            ],
            [
              formatEuro(52000) + " - " + formatEuro(260000),
              formatEuro(3500),
            ],
            [
              formatEuro(260000) + " - " + formatEuro(520000),
              formatEuro(5500),
            ],
          ]}
        />
        <p className="text-sm text-muted-foreground mt-2">
          Valori indicativi. Per i valori esatti e aggiornati, utilizzare il
          calcolatore selezionando la competenza &quot;Proced. risoluzione
          alternativa controversie (ADR/Negoziazione/Mediazione)&quot;.
        </p>

        <AlertBox variant="success" title="Aumento per accordo raggiunto (+30%)">
          <p>
            Quando la mediazione o la negoziazione assistita si conclude con un{" "}
            <strong>accordo</strong>, il compenso dell&apos;avvocato può essere
            aumentato fino al <strong>30%</strong>. Questo aumento si aggiunge
            alla consueta possibilita di variazione del &plusmn;50% e premia il
            risultato conciliativo raggiunto.
          </p>
        </AlertBox>

        <BulletList
          items={[
            "Mediazione obbligatoria: è condizione di procedibilità per molte materie (condominio, locazioni, successioni, contratti bancari e assicurativi, ecc.)",
            "Mediazione delegata: disposta dal giudice durante il processo, in qualsiasi momento",
            "Negoziazione assistita: prevede l’assistenza obbligatoria di un avvocato per ciascuna parte",
            "Aumento +25% sulla fase decisionale: se la causa giudiziale si conclude con conciliazione (art. 4, c. 6)",
          ]}
        />
      </div>

      {/* ================================================================
          SECTION 14: Equo Compenso
          ================================================================ */}
      <SectionTitle
        id="equo-compenso"
        icon={Shield}
        title="Equo Compenso"
        subtitle="L. 21 aprile 2023, n. 49"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La{" "}
          <InlineNormLink
            text="Legge 21 aprile 2023, n. 49"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2023-04-21;49"
          />{" "}
          ha introdotto la disciplina dell&apos;
          <strong>equo compenso</strong> per le prestazioni professionali degli
          avvocati (e degli altri professionisti). La legge garantisce che il
          compenso sia{" "}
          <strong>
            proporzionato alla quantità e alla qualità del lavoro svolto
          </strong>{" "}
          è conforme ai parametri ministeriali.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-6 mb-3">
          Quando si applica
        </h3>
        <p className="text-base leading-relaxed">
          La disciplina dell&apos;equo compenso si applica ai rapporti
          professionali con i cosiddetti &quot;contraenti forti&quot;:
        </p>
        <BulletList
          items={[
            "Banche e istituti finanziari",
            "Imprese di assicurazione",
            "Imprese con più di 50 dipendenti o ricavi annui superiori a 10 milioni di euro",
            "Pubblica Amministrazione (Stato, enti pubblici, società partecipate)",
          ]}
        />

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-6 mb-3">
          Nullità delle clausole inique
        </h3>
        <p className="text-base leading-relaxed">
          Sono <strong>nulle</strong> le clausole contrattuali che prevedono un
          compenso inferiore ai parametri ministeriali, che impongono
          all&apos;avvocato di anticipare le spese, che riservano al committente
          la facoltà di modificare unilateralmente le condizioni contrattuali, o
          che prevedono la rinuncia al rimborso delle spese. La nullità opera a
          favore del professionista e può essere fatta valere in giudizio.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2023-04-21;49">
          Art. 3, c. 1, L. 49/2023: &quot;Si considera equo il compenso
          determinato nelle convenzioni o negli accordi [...] quando è conforme
          ai parametri previsti dai decreti ministeriali adottati ai sensi
          dell&apos;articolo 13, comma 6, della legge 31 dicembre 2012, n.
          247.&quot;
        </NormativaQuote>

        <AlertBox variant="warning" title="Non si applica tra privati">
          <p>
            La disciplina dell&apos;equo compenso{" "}
            <strong>non si applica</strong> ai rapporti tra l&apos;avvocato e un
            privato cittadino o una piccola impresa. In questi casi, il compenso
            resta liberamente concordabile tra le parti, fermo restando il
            divieto di patto di quota lite puro e l&apos;obbligo di preventivo
            informativo (
            <InlineNormLink
              text="art. 13, c. 5, L. 247/2012"
              url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247"
            />
            ).
          </p>
        </AlertBox>
      </div>

      {/* ================================================================
          SECTION 15: Verifica Parcella
          ================================================================ */}
      <SectionTitle
        id="verifica-parcella"
        icon={SearchCheck}
        title="Come Verificare se la Parcella e Giusta"
        subtitle="Guida pratica alla verifica della parcella dell'avvocato"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Se hai ricevuto una parcella dal tuo avvocato e vuoi verificare che sia{" "}
          <strong>congrua e conforme</strong> ai parametri ministeriali, segui
          questi passaggi. Ricorda che il calcolatore in cima a questa pagina ti
          permette di effettuare una verifica rapida e gratuita.
        </p>

        <div className="space-y-3">
          <div
            className="border border-border p-4"
            style={{ borderRadius: "0.375rem" }}
          >
            <p className="font-semibold text-[oklch(0.25_0.04_250)] mb-1">
              1. Identifica competenza e scaglione
            </p>
            <p className="text-sm leading-relaxed">
              Verifica che il tipo di procedimento (competenza) e il valore della
              causa (scaglione) indicati in parcella corrispondano al tuo caso.
              Un errore nella scelta della tabella o dello scaglione può alterare
              significativamente l&apos;importo.
            </p>
          </div>

          <div
            className="border border-border p-4"
            style={{ borderRadius: "0.375rem" }}
          >
            <p className="font-semibold text-[oklch(0.25_0.04_250)] mb-1">
              2. Controlla le fasi addebitate
            </p>
            <p className="text-sm leading-relaxed">
              Verifica che le fasi addebitate corrispondano ad attività{" "}
              <strong>effettivamente svolte</strong>. Se la causa si è conclusa
              prima dell&apos;istruttoria, la fase istruttoria non dovrebbe
              essere addebitata. Controlla anche che i valori siano compresi tra
              il minimo (-50%) e il massimo (+50%) del valore medio tabellare.
            </p>
          </div>

          <div
            className="border border-border p-4"
            style={{ borderRadius: "0.375rem" }}
          >
            <p className="font-semibold text-[oklch(0.25_0.04_250)] mb-1">
              3. Verifica aumenti e riduzioni
            </p>
            <p className="text-sm leading-relaxed">
              Se sono stati applicati aumenti (pluralità di parti, conciliazione,
              ecc.), verifica che siano giustificati e correttamente calcolati.
              Se sono state applicate riduzioni, controlla che le percentuali
              siano conformi all&apos;
              <InlineNormLink
                text="art. 4 D.M. 55/2014"
                url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
              />
              .
            </p>
          </div>

          <div
            className="border border-border p-4"
            style={{ borderRadius: "0.375rem" }}
          >
            <p className="font-semibold text-[oklch(0.25_0.04_250)] mb-1">
              4. Controlla le voci accessorie
            </p>
            <p className="text-sm leading-relaxed">
              Le spese generali devono essere al <strong>15%</strong>, la CPA al{" "}
              <strong>4%</strong>, l&apos;IVA al <strong>22%</strong>. Verifica
              che le spese documentate siano effettive e correttamente
              classificate (esenti o imponibili). La ritenuta d&apos;acconto
              (20%) si applica solo se sei sostituto d&apos;imposta.
            </p>
          </div>

          <div
            className="border border-border p-4"
            style={{ borderRadius: "0.375rem" }}
          >
            <p className="font-semibold text-[oklch(0.25_0.04_250)] mb-1">
              5. Confronta con il calcolatore
            </p>
            <p className="text-sm leading-relaxed">
              Utilizza il calcolatore in cima a questa pagina per ottenere una
              stima indicativa. Se la parcella si discosta significativamente dai
              parametri, richiedi chiarimenti scritti al tuo avvocato.
            </p>
          </div>
        </div>

        <AlertBox variant="info" title="Parere di congruità">
          <p>
            In caso di contestazione, l&apos;avvocato può richiedere il{" "}
            <strong>parere di congruità</strong> al Consiglio dell&apos;Ordine
            degli Avvocati competente (
            <InlineNormLink
              text="art. 636 c.p.c."
              url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art636"
            />
            ). Il parere attesta che la parcella è conforme ai parametri
            ministeriali e consente all&apos;avvocato di ottenere un decreto
            ingiuntivo provvisoriamente esecutivo per il recupero del credito. Il
            cliente può opporsi entro 40 giorni dalla notifica.
          </p>
        </AlertBox>
      </div>

      {/* ================================================================
          SECTION 16: Novità 2022
          ================================================================ */}
      <SectionTitle
        id="novita-2022"
        icon={Sparkles}
        title="Novità del D.M. 147/2022"
        subtitle="Aggiornamento in vigore dal 23 ottobre 2022"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il{" "}
          <InlineNormLink
            text="D.M. 13 agosto 2022, n. 147"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147"
          />
          , pubblicato nella G.U. n. 236 dell&apos;8 ottobre 2022, ha
          introdotto significative modifiche ai parametri forensi. Le nuove
          disposizioni si applicano alle prestazioni professionali esaurite dopo
          il <strong>23 ottobre 2022</strong>.
        </p>

        <div className="space-y-4">
          <AlertBox
            variant="success"
            title="1. Aggiornamento valori medi (+5%)"
          >
            <p className="leading-relaxed">
              Tutti i valori medi delle tabelle sono stati aggiornati al costo
              della vita con un incremento medio di circa il <strong>5%</strong>{" "}
              rispetto ai parametri del 2014. L&apos;aggiornamento riguarda
              tutte le 28 tabelle e tutti gli scaglioni.
            </p>
          </AlertBox>

          <AlertBox
            variant="success"
            title="2. Variazione uniforme &plusmn;50%"
          >
            <p className="leading-relaxed">
              La variazione è stata uniformata al <strong>&plusmn;50%</strong>{" "}
              per tutte le fasi. Nel regime precedente, le percentuali erano
              differenziate: diminuzione fino al 50% e aumento fino all&apos;80%
              (100% per la fase istruttoria). Il nuovo sistema semplifica il
              calcolo e riduce la discrezionalità giudiziale.
            </p>
          </AlertBox>

          <AlertBox
            variant="success"
            title='3. Soppressione delle parole "di regola"'
          >
            <p className="leading-relaxed">
              È stata soppressa l&apos;espressione &quot;di regola&quot; che
              accompagnava i limiti percentuali di variazione. Questo significa
              che i limiti del &plusmn;50% sono ora <strong>tassativi</strong>: il
              giudice non può superarli senza specifica motivazione, riducendo il
              margine di discrezionalità nella liquidazione.
            </p>
          </AlertBox>

          <AlertBox
            variant="success"
            title="4. Predisposizioni PCT (+30%)"
          >
            <p className="leading-relaxed">
              È stato introdotto un aumento fino al <strong>30%</strong> del
              compenso per le predisposizioni informatiche nel Processo Civile
              Telematico (PCT). L&apos;aumento compensa l&apos;impegno
              aggiuntivo richiesto dall&apos;utilizzo degli strumenti digitali (
              <InlineNormLink
                text="art. 4, c. 1-bis"
                url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
              />
              ).
            </p>
          </AlertBox>

          <AlertBox variant="success" title="5. Conciliazione (+25%)">
            <p className="leading-relaxed">
              Confermato e rafforzato l&apos;aumento fino al{" "}
              <strong>25%</strong> sulla fase decisionale in caso di
              conciliazione giudiziale o transazione. L&apos;obiettivo e
              incentivare la definizione bonaria delle controversie.
            </p>
          </AlertBox>

          <AlertBox
            variant="success"
            title="6. Tariffazione oraria (art. 22-bis)"
          >
            <p className="leading-relaxed">
              Introdotta la possibilità di pattuire il compenso a tempo con un
              parametro indicativo da {formatEuro(200)} a {formatEuro(500)}{" "}
              <strong>per ora</strong> o frazione superiore a 30 minuti. La
              tariffa oraria può essere liberamente concordata tra le parti come
              alternativa ai parametri per attività o per fase.
            </p>
          </AlertBox>
        </div>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147">
          Preambolo D.M. 147/2022: &quot;Visto l&apos;articolo 13, comma 6,
          della legge 31 dicembre 2012, n. 247, il quale prevede che i parametri
          indicati nel decreto del Ministro della giustizia siano aggiornati ogni
          due anni.&quot;
        </NormativaQuote>
      </div>

      {/* ================================================================
          SECTION 17: FAQ
          ================================================================ */}
      <SectionTitle
        id="faq"
        icon={ClipboardList}
        title="Domande Frequenti (FAQ)"
        subtitle="Le risposte ai dubbi più comuni sul compenso dell'avvocato"
      />
      <FAQ items={faqData} />

      {/* ================================================================
          SECTION 18: Normativa
          ================================================================ */}
      <SectionTitle
        id="normativa"
        icon={BookOpen}
        title="Normativa di Riferimento"
      />
      <NormativaRefTable items={normativaRiferimento} />

      <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-8 mb-4 flex items-center gap-2">
        <Link2 className="w-5 h-5 text-[oklch(0.75_0.10_85)]" /> Circolari e
        Gazzetta Ufficiale
      </h3>
      <CircolariTable items={circolariMinisteriali} />
    </ToolLayout>
  );
}
