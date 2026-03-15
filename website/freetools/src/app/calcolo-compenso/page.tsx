import {
  Calculator, BookOpen, HelpCircle, Scale, ListChecks,
  ArrowUpDown, Layers, FileText, Sparkles,
} from "lucide-react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { LegalTable } from "@/components/shared/LegalTable";
import { NormativaQuote } from "@/components/shared/NormativaQuote";
import { InlineNormLink } from "@/components/shared/InlineNormLink";
import { FAQ } from "@/components/shared/FAQ";
import { AlertBox } from "@/components/shared/AlertBox";
import { BulletList } from "@/components/shared/BulletList";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";
import Calcolatore from "@/components/calcolo-compenso/Calcolatore";
import { sections, normativaRiferimento } from "@/data/calcolo-compenso/compensoData";
import { faqData } from "@/data/calcolo-compenso/faqData";
import { JsonLd, breadcrumbSchema, faqPageSchema, articleSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/avvocatitools/calcolo-compenso-hero.webp";

export const metadata: Metadata = {
  title: "Calcolo Compenso Avvocato 2026 | Parametri DM 55/2014",
  description:
    "Calcola il compenso dell'avvocato con i parametri forensi DM 55/2014 aggiornati al DM 147/2022. 29 competenze, 17 scaglioni, aumenti, riduzioni e accessori.",
  alternates: { canonical: "/calcolo-compenso" },
  openGraph: {
    type: "article",
    title: "Calcolo Compenso Avvocato 2026 | Parametri Forensi",
    description:
      "Simulatore gratuito per il calcolo del compenso professionale dell'avvocato secondo i parametri forensi DM 55/2014 aggiornati al DM 147/2022.",
    images: [{ url: HERO_IMG, width: 1920, height: 1072, alt: "Calcolo compenso avvocato" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolo Compenso Avvocato 2026 | Parametri Forensi",
    description:
      "Simulatore gratuito per il calcolo del compenso professionale dell'avvocato secondo i parametri forensi DM 55/2014 aggiornati al DM 147/2022.",
  },
};

const toolConfig: ToolConfig = {
  slug: "calcolo-compenso",
  title: "Calcolo Compenso Avvocato",
  shortTitle: "Compenso Avvocato",
  icon: Calculator,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroEyebrow: "Parametri Forensi Civili",
  heroTitle: "Calcolo Compenso Avvocato",
  heroDescription:
    "Simulatore per il calcolo della liquidazione giudiziale dei compensi professionali dell'avvocato in ambito civile e amministrativo, basato sui parametri ministeriali del DM 55/2014 aggiornati al DM 147/2022.",
  heroReference: "D.M. 10 marzo 2014, n. 55 \u2014 aggiornato al D.M. 13 agosto 2022, n. 147",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "I valori sono calcolati sulla base dei parametri del D.M. 55/2014 aggiornati al D.M. 147/2022, in vigore dal 23 ottobre 2022.",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    { label: "Gazzetta Ufficiale", url: "https://www.gazzettaufficiale.it" },
    { label: "Consiglio Nazionale Forense", url: "https://www.consiglionazionaleforense.it" },
  ],
};

export default function CalcoloCompensoPage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ── JSON-LD Schemas ── */}
      <JsonLd data={breadcrumbSchema([
        { name: "Strumenti Legali Gratuiti", path: "/" },
        { name: "Calcolo Compenso Avvocato", path: "/calcolo-compenso" },
      ])} />

      <JsonLd data={articleSchema({
        headline: "Calcolo Compenso Avvocato \u2014 Parametri Forensi DM 55/2014 aggiornati al DM 147/2022",
        description: "Guida completa e simulatore per il calcolo del compenso dell'avvocato secondo i parametri forensi ministeriali.",
        path: "/calcolo-compenso",
        datePublished: "2026-03-12",
        dateModified: "2026-03-12",
        image: HERO_IMG,
        sections: [
          "Come funziona il calcolatore",
          "Le fasi del procedimento",
          "Aumenti e riduzioni",
          "Scaglioni di valore",
          "Ambito di applicazione",
          "Novit\u00e0 DM 147/2022",
          "Domande Frequenti",
          "Normativa di Riferimento",
        ],
      })} />

      <JsonLd data={faqPageSchema(faqData)} />

      {/* ── Calculator ── */}
      <Calcolatore />

      {/* ── Come Funziona ── */}
      <SectionTitle
        id="come-funziona"
        icon={ListChecks}
        title="Come funziona il calcolatore"
        subtitle="Formula di calcolo e istruzioni"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il calcolatore determina il compenso professionale dell&apos;avvocato sulla base dei{" "}
          <strong>parametri forensi</strong> stabiliti dal{" "}
          <InlineNormLink text="D.M. 10 marzo 2014, n. 55" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" />,
          come aggiornati dal{" "}
          <InlineNormLink text="D.M. 13 agosto 2022, n. 147" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147" />,
          in vigore dal 23 ottobre 2022.
        </p>

        <AlertBox variant="info" title="Formula di calcolo">
          <p className="text-sm leading-relaxed">
            <strong>1.</strong> Seleziona competenza e scaglione di valore &rarr;{" "}
            <strong>2.</strong> Scegli il valore (min/med/max) per ogni fase svolta &rarr;{" "}
            <strong>3.</strong> Applica eventuali aumenti e riduzioni &rarr;{" "}
            <strong>4.</strong> Aggiungi spese generali (15%) &rarr;{" "}
            <strong>5.</strong> Calcola CPA (4%), IVA (22%) e ritenuta d&apos;acconto (20%).
          </p>
        </AlertBox>

        <p className="text-base leading-relaxed">
          I parametri si applicano quando il compenso non &egrave; stato determinato in forma scritta tra avvocato
          e cliente, in caso di <strong>liquidazione giudiziale</strong>, oppure per prestazioni rese nell&apos;interesse
          di terzi o d&apos;ufficio (art. 1,{" "}
          <InlineNormLink text="D.M. 55/2014" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" />).
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55">
          Art. 1 &mdash; Il presente regolamento disciplina per le prestazioni professionali i parametri dei compensi
          all&apos;avvocato quando all&apos;atto dell&apos;incarico o successivamente il compenso non sia stato determinato
          in forma scritta, in ogni caso di mancata determinazione consensuale, in caso di liquidazione giudiziale
          dei compensi [...].
        </NormativaQuote>
      </div>

      {/* ── Fasi del procedimento ── */}
      <SectionTitle
        id="fasi-procedimento"
        icon={Layers}
        title="Le fasi del procedimento"
        subtitle="Le 4 fasi previste dal DM 55/2014"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <InlineNormLink text="D.M. 55/2014" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" />{" "}
          suddivide l&apos;attivit&agrave; dell&apos;avvocato in <strong>quattro fasi</strong>, ciascuna compensata
          autonomamente. Il compenso &egrave; dovuto solo per le fasi effettivamente svolte.
        </p>

        <LegalTable
          headers={["Fase", "Attivit\u00e0 comprese"]}
          rows={[
            [
              "Studio della controversia",
              "Esame e studio degli atti e documenti, ricerche giurisprudenziali e dottrinali, consultazioni con il cliente, pareri preliminari",
            ],
            [
              "Fase introduttiva",
              "Redazione dell'atto introduttivo (citazione, ricorso), iscrizione a ruolo, pagamento del contributo unificato, notificazioni, costituzione in giudizio",
            ],
            [
              "Fase istruttoria / trattazione",
              "Richieste istruttorie, memorie, esame delle deduzioni avversarie, udienze, audizione testimoni, consulenze tecniche, istanze incidentali",
            ],
            [
              "Fase decisionale",
              "Precisazione delle conclusioni, comparse conclusionali, memorie di replica, discussione orale, esame della sentenza, iscrizione ipotecaria",
            ],
          ]}
        />

        <AlertBox variant="warning" title="Fasi speciali">
          <p className="text-sm">
            Per i procedimenti davanti al <strong>T.A.R.</strong> e al <strong>Consiglio di Stato</strong> le fasi
            hanno codici diversi (cautelare ed esecutiva) che riflettono le peculiarit&agrave; del processo
            amministrativo. Per la <strong>Corte di Cassazione</strong> la fase istruttoria non &egrave; prevista.
          </p>
        </AlertBox>
      </div>

      {/* ── Aumenti e Riduzioni ── */}
      <SectionTitle
        id="aumenti-riduzioni"
        icon={ArrowUpDown}
        title="Aumenti e riduzioni"
        subtitle="Art. 4 DM 55/2014 (mod. DM 147/2022)"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L&apos;art. 4 del <InlineNormLink text="D.M. 55/2014" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" />{" "}
          prevede che i valori medi possano essere <strong>aumentati fino al 50%</strong> o{" "}
          <strong>diminuiti fino al 50%</strong> in considerazione delle caratteristiche, dell&apos;urgenza, del pregio
          dell&apos;attivit&agrave; prestata e della complessit&agrave; del procedimento.
        </p>

        <LegalTable
          headers={["Aumento", "Riferimento", "Percentuale", "Base di calcolo"]}
          rows={[
            ["Pluralit\u00e0 di parti", "art. 4, c. 2", "+20% per parte aggiuntiva", "Totale fasi"],
            ["Conciliazione", "art. 4, c. 6", "Fino a +25%", "Fase decisionale"],
            ["Class action", "art. 4, c. 10", "Fino a +300%", "Totale fasi"],
            ["Manifesta fondatezza", "art. 4, c. 8", "Fino a +33%", "Totale fasi"],
            ["Ulteriore valutazione", "art. 4, c. 1", "Personalizzato", "Totale fasi"],
            ["Predisposizioni PCT", "art. 4, c. 1bis", "Fino a +30%", "Totale fasi"],
            ["Motivi aggiunti (TAR)", "art. 4, c. 10bis", "Fino a +50%", "Fase introduttiva"],
            ["Ricorso incidentale (TAR)", "art. 4, c. 10bis", "Fino a +20%", "Fase introduttiva"],
            ["Memoria 378 c.p.c.", "art. 4, c. 10bis", "Fino a +40%", "Fase decisionale"],
          ]}
        />

        <LegalTable
          headers={["Riduzione", "Riferimento", "Percentuale"]}
          rows={[
            ["Assenza questioni di fatto e diritto", "art. 4, c. 4", "Fino a -30%"],
            ["Condotte ostative", "art. 4, c. 7", "Fino a -50%"],
            ["Responsabilit\u00e0 art. 96 c.p.c.", "art. 4, c. 9", "-75% (fisso)"],
            ["Pronunce in rito", "art. 4, c. 9", "-50% (fisso)"],
            ["Gratuito patrocinio", "art. 130 D.P.R. 115/02", "-50% (fisso)"],
            ["Praticante abilitato", "art. 9", "Da -5% a -50%"],
          ]}
        />
      </div>

      {/* ── Scaglioni ── */}
      <SectionTitle
        id="scaglioni"
        icon={Scale}
        title="Scaglioni di valore della causa"
        subtitle="17 fasce di valore per la determinazione del compenso"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Le tabelle allegate al decreto prevedono <strong>13 scaglioni ordinari</strong> (da &laquo;fino a &euro; 1.100&raquo;
          a &laquo;oltre &euro; 32.000.000&raquo;) e <strong>4 scaglioni speciali</strong> per le cause di valore
          indeterminabile. Il valore della causa si determina secondo le regole degli artt. 10 e ss. c.p.c.
        </p>

        <LegalTable
          headers={["Scaglione", "Valore della causa"]}
          rows={[
            ["1\u00b0", "Fino a \u20ac 1.100,00"],
            ["2\u00b0", "Da \u20ac 1.100,01 a \u20ac 5.200,00"],
            ["3\u00b0", "Da \u20ac 5.200,01 a \u20ac 26.000,00"],
            ["4\u00b0", "Da \u20ac 26.000,01 a \u20ac 52.000,00"],
            ["5\u00b0", "Da \u20ac 52.000,01 a \u20ac 260.000,00"],
            ["6\u00b0", "Da \u20ac 260.000,01 a \u20ac 520.000,00"],
            ["7\u00b0", "Da \u20ac 520.000,01 a \u20ac 1.000.000,00"],
            ["8\u00b0", "Da \u20ac 1.000.000,01 a \u20ac 2.000.000,00"],
            ["9\u00b0", "Da \u20ac 2.000.000,01 a \u20ac 4.000.000,00"],
            ["10\u00b0", "Da \u20ac 4.000.000,01 a \u20ac 8.000.000,00"],
            ["11\u00b0", "Da \u20ac 8.000.000,01 a \u20ac 16.000.000,00"],
            ["12\u00b0", "Da \u20ac 16.000.000,01 a \u20ac 32.000.000,00"],
            ["13\u00b0", "Oltre \u20ac 32.000.000,00"],
          ]}
        />

        <AlertBox variant="info" title="Cause di valore indeterminabile">
          <p className="text-sm">
            Per le cause di <strong>valore indeterminabile</strong>, il decreto prevede tre livelli di complessit&agrave;:
            bassa (equiparata allo scaglione &euro; 26.001-52.000), media (media aritmetica) e alta (equiparata
            allo scaglione &euro; 52.001-260.000), oltre allo scaglione &laquo;valore non determinabile&raquo;.
          </p>
        </AlertBox>
      </div>

      {/* ── Ambito di applicazione ── */}
      <SectionTitle
        id="ambito-applicazione"
        icon={FileText}
        title="Ambito di applicazione"
        subtitle="Quando si applicano i parametri forensi"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          I parametri del <InlineNormLink text="D.M. 55/2014" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" />{" "}
          coprono <strong>29 competenze</strong> suddivise per giurisdizione e per materia, dall&apos;attivit&agrave;
          davanti al Giudice di pace fino alla Corte di Giustizia UE, inclusi procedimenti speciali, esecutivi,
          arbitrati e attivit&agrave; stragiudiziale.
        </p>

        <BulletList items={[
          "Giudice di pace, Tribunale ordinario, Corte d'Appello, Corte di Cassazione",
          "Corte dei Conti, Magistrature superiori, Corte Costituzionale",
          "T.A.R., Consiglio di Stato, Consiglio di Giustizia Amministrativa Sicilia",
          "Commissioni Tributarie Provinciali e Regionali",
          "Corte Europea e Corte di Giustizia UE",
          "Arbitrati e ADR / Mediazione / Negoziazione assistita",
          "Esecuzioni, procedimenti speciali, cautelari, monitori",
          "Consulenza stragiudiziale e contrattualistica pubblica/privata",
        ]} />

        <AlertBox variant="warning" title="Attenzione">
          <p className="text-sm">
            I parametri <strong>non si applicano</strong> quando esiste un accordo scritto tra avvocato e cliente
            che determina il compenso (art. 13,{" "}
            <InlineNormLink text="L. 247/2012" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247" />).
            L&apos;avvocato pu&ograve; pattuire compensi inferiori ai parametri.
          </p>
        </AlertBox>
      </div>

      {/* ── Novit\u00e0 DM 147/2022 ── */}
      <SectionTitle
        id="novita-2022"
        icon={Sparkles}
        title="Novit\u00e0 del DM 147/2022"
        subtitle="Modifiche introdotte dal decreto 13 agosto 2022"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <InlineNormLink text="D.M. 13 agosto 2022, n. 147" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147" />,
          in vigore dal 23 ottobre 2022, ha introdotto modifiche significative ai parametri forensi:
        </p>

        <LegalTable
          headers={["Aspetto", "Prima (DM 55/2014)", "Dopo (DM 147/2022)"]}
          rows={[
            ["Aumento massimo", "Fino all'80% (\u00abdi regola\u00bb)", "Fino al 50% (tassativo)"],
            ["Fase istruttoria", "Aumento fino al 100%", "Aumento fino al 50%"],
            ["Diminuzione massima", "Fino al 50% (\u00abdi regola\u00bb)", "Fino al 50% (tassativo)"],
            ["Valori medi tabellari", "Parametri 2014", "Aggiornati al costo della vita (~5%)"],
            ["Discrezionalit\u00e0 giudice", "Parole \u00abdi regola\u00bb presenti", "Parole \u00abdi regola\u00bb soppresse"],
          ]}
        />

        <AlertBox variant="success" title="Nuove disposizioni">
          <p className="text-sm">
            Il DM 147/2022 ha anche introdotto nuove voci di aumento: <strong>predisposizioni PCT</strong> (fino al 30%),
            <strong> motivi aggiunti</strong> (fino al 50% sulla fase introduttiva per TAR/CdS),{" "}
            <strong>ricorso incidentale</strong> (fino al 20%) e <strong>memoria ex art. 378 c.p.c.</strong> (fino al 40%
            sulla fase decisionale in Cassazione).
          </p>
        </AlertBox>
      </div>

      {/* ── FAQ ── */}
      <SectionTitle id="faq" icon={HelpCircle} title="Domande Frequenti (FAQ)" subtitle="Risposte alle domande pi\u00f9 comuni sul calcolo del compenso" />
      <FAQ items={faqData} />

      {/* ── Normativa ── */}
      <SectionTitle id="normativa" icon={BookOpen} title="Normativa di Riferimento" />
      <NormativaRefTable items={normativaRiferimento} />
    </ToolLayout>
  );
}
