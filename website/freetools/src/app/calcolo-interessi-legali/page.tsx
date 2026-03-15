import { TrendingUp, BookOpen, HelpCircle, Table, Calculator, Scale, AlertTriangle, Landmark, FileText, ArrowRightLeft, Link2 } from "lucide-react";
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
import Calcolatore from "@/components/calcolo-interessi-legali/Calcolatore";
import {
  tassiStorici,
  normativaRiferimento,
  circolariMinisteriali,
  sections,
} from "@/data/calcolo-interessi-legali/interessiData";
import { faqData } from "@/data/calcolo-interessi-legali/faqData";
import { JsonLd, breadcrumbSchema, faqPageSchema, articleSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "Calcolo Interessi Legali 2026: Tasso, Tabella e Calcolatore",
  description:
    "Calcola gli interessi legali online con il calcolatore aggiornato al 2026. Tasso 1,60%, tabella storica completa, formula e guida Art. 1284 c.c.",
  alternates: {
    canonical: "/calcolo-interessi-legali",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/calcolo-interessi-legali",
    title: "Calcolo Interessi Legali 2026: Tasso, Tabella e Calcolatore",
    description:
      "Calcola gli interessi legali online con il calcolatore aggiornato al 2026. Tasso 1,60%, tabella storica completa, formula e guida Art. 1284 c.c.",
    images: [
      {
        url: HERO_IMG,
        width: 1920,
        height: 1072,
        alt: "Calcolo Interessi Legali 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolo Interessi Legali 2026: Tasso, Tabella e Calcolatore",
    description:
      "Calcola gli interessi legali online con il calcolatore aggiornato al 2026. Tasso 1,60%, tabella storica completa, formula e guida Art. 1284 c.c.",
  },
};

const toolConfig: ToolConfig = {
  slug: "calcolo-interessi-legali",
  title: "Calcolo Interessi Legali 2026",
  shortTitle: "Interessi Legali",
  icon: TrendingUp,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroEyebrow: "Calcolatore, Tabella Tassi e Guida Completa",
  heroTitle: "Calcolo Interessi Legali 2026",
  heroDescription:
    "Calcola gli interessi legali con il calcolatore aggiornato al tasso 2026 (1,60%). Tabella storica completa dei tassi dal 1942, formula di calcolo, anatocismo, interessi moratori e normativa di riferimento.",
  heroReference:
    "Art. 1284 Codice Civile \u2014 DM Economia 10 dicembre 2025 (G.U. n. 289 del 13/12/2025)",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "Dati aggiornati al DM Economia 10 dicembre 2025. Tasso in vigore dal 1° gennaio 2026: 1,60%.",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    { label: "Gazzetta Ufficiale", url: "https://www.gazzettaufficiale.it" },
    { label: "Agenzia delle Entrate", url: "https://www.agenziaentrate.gov.it" },
  ],
};

const formatPct = (n: number) =>
  new Intl.NumberFormat("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n) + "%";

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

export default function CalcoloInteressiLegaliPage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ===== Structured Data: 3 JSON-LD blocks ===== */}

      {/* 1. BreadcrumbList */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Strumenti Legali Gratuiti", path: "/" },
          { name: "Calcolo Interessi Legali 2026", path: "/calcolo-interessi-legali" },
        ])}
      />

      {/* 2. Article */}
      <JsonLd
        data={articleSchema({
          headline: "Calcolo Interessi Legali 2026: Tasso, Tabella Storica e Calcolatore Online",
          description:
            "Guida completa al calcolo degli interessi legali: tasso 2026 all\u20191,60%, tabella storica dal 1942, formula I = C × S × N / 36.500, anatocismo, interessi moratori e normativa.",
          path: "/calcolo-interessi-legali",
          datePublished: "2026-03-10",
          dateModified: "2026-03-10",
          image: HERO_IMG,
          sections: [
            "Tasso di Interesse Legale 2026",
            "Tabella Tassi di Interesse Legale dal 1942",
            "Come si Calcolano gli Interessi Legali",
            "Interessi Legali vs Interessi Moratori",
            "Anatocismo",
            "Applicazioni Pratiche",
            "Domande Frequenti (FAQ)",
            "Normativa di Riferimento",
          ],
        })}
      />

      {/* 3. FAQPage */}
      <JsonLd data={faqPageSchema(faqData)} />

      {/* Calcolatore */}
      <Calcolatore />

      {/* Tasso 2026 */}
      <SectionTitle id="tasso-2026" icon={TrendingUp} title="Tasso di Interesse Legale 2026" subtitle="DM Economia 10 dicembre 2025" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>tasso di interesse legale 2026</strong> è pari all'<strong className="font-mono">1,60%</strong> in ragione d'anno, come stabilito dal <InlineNormLink text="Decreto del Ministero dell'Economia e delle Finanze del 10 dicembre 2025" url="https://www.gazzettaufficiale.it/eli/id/2025/12/13/25A06705/sg" />, pubblicato sulla Gazzetta Ufficiale n. 289 del 13 dicembre 2025. Il nuovo tasso è in vigore dal <strong>1° gennaio 2026</strong>.
        </p>
        <AlertBox variant="success" title="Tasso 2026: 1,60%">
          <p className="leading-relaxed">
            Il tasso scende dal 2,00% del 2025 all'1,60% per il 2026, confermando il trend discendente iniziato dopo il picco del 5,00% raggiunto nel 2023. La riduzione riflette il progressivo calo dell'inflazione nell'area euro.
          </p>
        </AlertBox>
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284">
          Art. 1284, c. 1, cod. civ.: "Il saggio degli interessi legali è determinato in misura pari al 5 per cento in ragione d'anno. Il Ministro del tesoro, con proprio decreto pubblicato nella Gazzetta Ufficiale della Repubblica italiana non oltre il 15 dicembre dell'anno precedente a quello cui il saggio si riferisce, può modificarne annualmente la misura [...]"
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          La facoltà di aggiornamento annuale del tasso è stata introdotta dalla <InlineNormLink text="L. 23 dicembre 1996, n. 662" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1996-12-23;662" /> (art. 2, comma 185), che ha novellato l'<InlineNormLink text="art. 1284 del Codice Civile" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284" />.
        </p>
      </div>

      {/* Tabella Tassi Storici */}
      <SectionTitle id="tabella-tassi" icon={Table} title="Tabella Tassi di Interesse Legale dal 1942" subtitle="Storico completo dei tassi legali" />
      <p className="text-base leading-relaxed mb-4">
        La <strong>tabella dei tassi di interesse legale</strong> riporta lo storico completo dal 1942 ad oggi. Il tasso originario del 5% è rimasto invariato per quasi 50 anni, fino alla prima modifica nel 1990. Dal 1997 il tasso viene aggiornato annualmente dal MEF.
      </p>
      <LegalTable
        headers={["Periodo", "Tasso annuo", "Norma di riferimento"]}
        rows={tassiStorici.map((t) => [
          `${formatDate(t.dal)} \u2013 ${t.al ? formatDate(t.al) : "in vigore"}`,
          formatPct(t.tasso),
          t.norma,
        ])}
      />
      <p className="text-sm text-muted-foreground mt-3">
        Il tasso più basso della storia è stato lo <strong className="font-mono">0,01%</strong> nel 2021, mentre il più alto è stato il <strong className="font-mono">10%</strong> nel periodo 1990-1996.
      </p>

      {/* Come si Calcolano */}
      <SectionTitle id="come-si-calcolano" icon={Calculator} title="Come si Calcolano gli Interessi Legali" subtitle="Formula e metodo di calcolo" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La formula per il <strong>calcolo degli interessi legali</strong> a interesse semplice è:
        </p>
        <div className="bg-[oklch(0.97_0.005_250)] border border-[oklch(0.90_0.02_250)] p-5 text-center" style={{ borderRadius: "0.375rem" }}>
          <p className="text-xl font-mono font-bold text-[oklch(0.25_0.04_250)]">
            I = C × S × N / 36.500
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            I = interessi • C = capitale • S = tasso % annuo • N = giorni
          </p>
        </div>
        <p className="text-base leading-relaxed">
          Il divisore <strong className="font-mono">36.500</strong> (365 × 100) resta invariato anche negli <strong>anni bisestili</strong>, come confermato dalla <a href="https://www.agenziaentrate.gov.it/portale/documents/20143/0/Risoluzione_14_07_2008_296.pdf" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Risoluzione dell'Agenzia delle Entrate n. 296/E del 14 luglio 2008</a>.
        </p>
        <AlertBox variant="info" title="Periodi con tassi diversi">
          <p className="leading-relaxed">
            Quando il periodo di calcolo attraversa più anni con tassi diversi, occorre <strong>suddividere</strong> il calcolo in sotto-periodi corrispondenti a ciascun tasso vigente. Per ogni sotto-periodo si applica la formula con il tasso del periodo. Il totale è la somma degli interessi di ciascun sotto-periodo.
          </p>
        </AlertBox>
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Esempio pratico</h3>
        <p className="text-base leading-relaxed">
          Calcolo degli interessi su <strong className="font-mono">&euro; 10.000,00</strong> dal 1° luglio 2025 al 30 giugno 2026:
        </p>
        <LegalTable
          headers={["Periodo", "Giorni", "Tasso", "Interessi"]}
          rows={[
            ["01/07/2025 \u2013 31/12/2025", "184", "2,00%", "\u20AC 100,82"],
            ["01/01/2026 \u2013 30/06/2026", "181", "1,60%", "\u20AC 79,34"],
            ["Totale", "365", "\u2014", "\u20AC 180,16"],
          ]}
        />
      </div>

      {/* Legali vs Moratori */}
      <SectionTitle id="legali-vs-moratori" icon={ArrowRightLeft} title="Interessi Legali vs Interessi Moratori" subtitle="Art. 1284 c.c. e D.Lgs. 231/2002" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          &Egrave; fondamentale distinguere tra <strong>interessi legali</strong> e <strong>interessi moratori</strong>, in quanto hanno presupposti, funzione e misura profondamente diversi.
        </p>
        <LegalTable
          headers={["", "Interessi Legali", "Interessi Moratori"]}
          rows={[
            ["Fonte", "Art. 1284 cod. civ.", "D.Lgs. 231/2002"],
            ["Tasso 2026", "1,60%", "Tasso BCE + 8 pp (\u2248 11,65%)"],
            ["Funzione", "Remuneratoria", "Sanzionatoria"],
            ["Ambito", "Tutti i rapporti civili", "Transazioni commerciali"],
            ["Decorrenza", "Liquidità ed esigibilità", "Scadenza termine di pagamento"],
          ]}
        />
        <AlertBox variant="warning" title="Interessi in corso di causa">
          <p className="leading-relaxed">
            Dal 2014 (<InlineNormLink text="D.L. 132/2014, art. 17" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132" />), il comma 4 dell'art. 1284 c.c. prevede che, se le parti non hanno pattuito la misura degli interessi moratori, dal momento della <strong>domanda giudiziale</strong> il saggio degli interessi è pari a quello delle transazioni commerciali (tasso BCE + 8 pp). Questa disposizione si applica automaticamente e costituisce un forte incentivo alla definizione stragiudiziale delle controversie.
          </p>
        </AlertBox>
      </div>

      {/* Anatocismo */}
      <SectionTitle id="anatocismo" icon={AlertTriangle} title="Anatocismo" subtitle="Art. 1283 Codice Civile" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<strong>anatocismo</strong> è la capitalizzazione degli interessi scaduti, ossia il calcolo di interessi sugli interessi ("interesse composto"). L'<InlineNormLink text="art. 1283 del Codice Civile" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1283" /> lo vieta in linea generale, ammettendolo solo in due casi tassativi:
        </p>
        <BulletList items={[
          "Dal giorno della domanda giudiziale, purché gli interessi siano dovuti per almeno sei mesi",
          "In forza di convenzione posteriore alla scadenza degli interessi, alle medesime condizioni temporali",
        ]} />
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1283">
          Art. 1283 cod. civ.: "In mancanza di usi contrari, gli interessi scaduti possono produrre interessi solo dal giorno della domanda giudiziale o per effetto di convenzione posteriore alla loro scadenza, e sempre che si tratti di interessi dovuti almeno per sei mesi."
        </NormativaQuote>
        <AlertBox variant="info" title="Anatocismo bancario">
          <p className="leading-relaxed">
            Nei rapporti bancari, l'<InlineNormLink text="art. 120, comma 2, TUB" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1993-09-01;385~art120" /> (D.Lgs. 385/1993, come modificato dalla L. 49/2016) vieta espressamente la capitalizzazione degli interessi. La Delibera CICR del 3 agosto 2016 prevede che gli interessi debitori e creditori siano conteggiati separatamente senza produrre ulteriori interessi.
          </p>
        </AlertBox>
      </div>

      {/* Applicazioni Pratiche */}
      <SectionTitle id="applicazioni" icon={FileText} title="Applicazioni Pratiche" subtitle="Quando e come si applicano gli interessi legali" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Gli interessi legali trovano applicazione in numerose fattispecie della pratica giuridica e fiscale:
        </p>
        <FeatureGrid items={[
          { title: "Ravvedimento operoso", desc: "Calcolo interessi per regolarizzazione spontanea di omessi/tardivi versamenti tributari (art. 13 D.Lgs. 472/1997)" },
          { title: "Obbligazioni pecuniarie", desc: "Interessi automatici su crediti liquidi ed esigibili dal giorno della scadenza (art. 1282 c.c.)" },
          { title: "Risarcimento danni", desc: "Interessi dalla data del fatto illecito sulla somma liquidata rivalutata (Cass. SS.UU. 1712/1995)" },
          { title: "TFR e retribuzioni", desc: "Interessi legali sul TFR dalla cessazione del rapporto e sulle retribuzioni arretrate" },
          { title: "Espropriazioni", desc: "Interessi sull\u2019indennità dal decreto di esproprio fino al pagamento (art. 22 DPR 327/2001)" },
          { title: "Debiti condominiali", desc: "Interessi sulle quote non versate dalla data di approvazione della delibera assembleare" },
        ]} />
        <AlertBox variant="info" title="Prescrizione">
          <p className="leading-relaxed">
            Il diritto agli interessi legali si prescrive in <strong>5 anni</strong> (<InlineNormLink text="art. 2948, n. 4, cod. civ." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2948" />), indipendentemente dalla prescrizione del credito principale.
          </p>
        </AlertBox>
      </div>

      {/* FAQ */}
      <SectionTitle id="faq" icon={HelpCircle} title="Domande Frequenti (FAQ)" subtitle="Le risposte ai dubbi più comuni sugli interessi legali" />
      <FAQ items={faqData} />

      {/* Normativa */}
      <SectionTitle id="normativa" icon={BookOpen} title="Normativa di Riferimento" />
      <NormativaRefTable items={normativaRiferimento} />

      <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-8 mb-4 flex items-center gap-2">
        <Link2 className="w-5 h-5 text-[oklch(0.75_0.10_85)]" /> Circolari e Risoluzioni
      </h3>
      <CircolariTable items={circolariMinisteriali} />
    </ToolLayout>
  );
}
