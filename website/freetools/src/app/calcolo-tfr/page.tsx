import {
  Landmark,
  BookOpen,
  HelpCircle,
  Calculator,
  Sigma,
  TrendingUp,
  Receipt,
  HandCoins,
  Wallet,
  Users,
  Heart,
  PiggyBank,
  Shield,
  CalendarDays,
  Clock,
  History,
  AlertTriangle,
  Link2,
  FileText,
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
import { CircolariTable } from "@/components/shared/CircolariTable";
import Calcolatore from "@/components/calcolo-tfr/Calcolatore";
import {
  sections,
  normativaRiferimento,
  circolariMinisteriali,
  VOCI_RETRIBUZIONE_UTILE,
  CAUSALI_ANTICIPAZIONE,
  SOGLIE_PAGAMENTO_PUBBLICI,
  TABELLA_DETRAZIONI_TFR,
  SCAGLIONI_IRPEF_STORICI,
  ESEMPI_PRATICI,
} from "@/data/calcolo-tfr/calcoloTfrData";
import { faqData } from "@/data/calcolo-tfr/faqData";
import { JsonLd, articleSchema, webApplicationSchema } from "@/lib/schema";
import { formatEur, formatPct } from "@/lib/utils";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "Calcolo TFR 2026 | Netto, Lordo e Rivalutazione",
  description:
    "Calcolatore TFR 2026: lordo, netto con tassazione separata, rivalutazione ISTAT. Formula ex art. 2120 c.c. per dipendenti privati, pubblici (6,91%) e colf.",
  alternates: { canonical: "/calcolo-tfr" },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/calcolo-tfr",
    title: "Calcolo TFR 2026 | Netto, Lordo e Rivalutazione",
    description:
      "Calcola il TFR netto e lordo con formula 1/13,5, rivalutazione ISTAT e tassazione separata. Dipendenti privati, pubblici e colf. Art. 2120 c.c. aggiornato 2026.",
    images: [
      {
        url: HERO_IMG,
        width: 1920,
        height: 1072,
        alt: "Calcolo TFR 2026 — Calcolatore online netto, lordo e rivalutazione",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolo TFR 2026 | Lordo, Netto e Rivalutazione",
    description:
      "Calcolatore TFR 2026: formula 1/13,5, rivalutazione ISTAT, tassazione separata. Privati, pubblici (6,91%), colf.",
  },
};

const toolConfig: ToolConfig = {
  slug: "calcolo-tfr",
  title: "Calcolo TFR 2026",
  shortTitle: "Calcolo TFR",
  icon: Landmark,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroImageAlt:
    "Calcolo TFR 2026 — calcolatore netto, lordo e rivalutazione per dipendenti privati, pubblici e colf",
  heroEyebrow: "Calcolatore multi-categoria e guida completa",
  heroTitle: "Calcolo TFR 2026 — Lordo, Netto e Rivalutazione",
  heroDescription:
    "Calcola il Trattamento di Fine Rapporto con formula ex art. 2120 c.c. (1/13,5), rivalutazione ISTAT dinamica (1,5% fisso + 75% FOI), tassazione separata e stima dell'anticipazione. Supporta dipendenti privati, pubblici (aliquota 6,91% con soglia 240.000 €) e colf/badanti. Normativa aggiornata 2026.",
  heroReference:
    "Art. 2120 Codice Civile · L. 297/1982 · Art. 19 TUIR · L. 190/2014 · L. 147/2013",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale, fiscale né previdenziale.",
    "Il calcolo è indicativo: l'imposta definitiva sul TFR è riliquidata dall'Agenzia delle Entrate con l'aliquota media IRPEF dei 5 anni precedenti (art. 19 TUIR). Dati aggiornati alla normativa vigente al 2026.",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    { label: "Agenzia delle Entrate", url: "https://www.agenziaentrate.gov.it" },
    { label: "INPS", url: "https://www.inps.it" },
    { label: "ISTAT — Indici FOI", url: "https://www.istat.it/notizia/indice-dei-prezzi-per-le-rivalutazioni-monetarie/" },
    { label: "Gazzetta Ufficiale", url: "https://www.gazzettaufficiale.it" },
  ],
};

export default function CalcoloTfrPage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ── JSON-LD: Article ── */}
      <JsonLd
        data={articleSchema({
          headline:
            "Calcolo TFR 2026: Calcolatore e Guida Completa al Trattamento di Fine Rapporto",
          description:
            "Guida completa al calcolo del TFR in Italia aggiornata al 2026: formula ex art. 2120 c.c., rivalutazione ISTAT, tassazione separata, anticipazione, dipendenti pubblici (6,91%), colf/badanti, previdenza complementare, Fondo di Garanzia INPS.",
          path: "/calcolo-tfr",
          datePublished: "2026-04-24",
          dateModified: "2026-04-24",
          image: HERO_IMG,
          sections: [
            "Calcolatore TFR",
            "Cos'è il TFR",
            "Come si calcola il TFR",
            "Retribuzione utile",
            "Contributo IVS 0,5%",
            "Rivalutazione ISTAT",
            "Tassazione separata",
            "Anticipazione del TFR",
            "TFR in busta paga (Qu.I.R.)",
            "TFR dipendenti pubblici",
            "TFR colf e badanti",
            "Previdenza complementare",
            "Fondo di Garanzia INPS",
            "TFR e assenze",
            "Prescrizione",
            "Esempi pratici",
            "Errori comuni",
            "FAQ",
            "Normativa di riferimento",
          ],
        })}
      />

      {/* ── JSON-LD: WebApplication ── */}
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore TFR 2026",
          description:
            "Calcolatore online gratuito per il Trattamento di Fine Rapporto: lordo, netto con tassazione separata, rivalutazione ISTAT, anticipazione. Supporta dipendenti privati, pubblici (6,91%) e colf.",
          path: "/calcolo-tfr",
          applicationCategory: "FinanceApplication",
        })}
      />

      {/* ═══════════════════════════════════════════════════════════
          CALCOLATORE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="calcolatore"
        icon={Calculator}
        title="Calcolatore TFR"
        subtitle="Lordo, netto e rivalutazione — dipendenti privati, pubblici e colf"
      />
      <Calcolatore />

      {/* ═══════════════════════════════════════════════════════════
          COS'È IL TFR
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="cose-tfr"
        icon={BookOpen}
        title="Cos'è il TFR"
        subtitle="Definizione, natura giuridica e funzione"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>Trattamento di Fine Rapporto</strong> — abbreviato con l'acronimo{" "}
          <strong>TFR</strong>, noto anche come <strong>liquidazione</strong>,{" "}
          <strong>indennità di fine rapporto</strong> o <em>buona uscita</em> — è una
          somma di denaro che il datore di lavoro accantona ogni anno a favore del
          lavoratore dipendente e gli corrisponde al momento della cessazione del rapporto
          di lavoro, qualunque sia la causa: dimissioni, licenziamento, pensionamento,
          morte, risoluzione consensuale o scadenza del contratto a termine. La sua
          disciplina è contenuta nell'
          <InlineNormLink
            text="art. 2120 del Codice Civile"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120"
          />
          , così come riformato dalla{" "}
          <InlineNormLink
            text="Legge 29 maggio 1982, n. 297"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1982-05-29;297"
          />
          , che ha sostituito il precedente sistema dell'<em>indennità di anzianità</em>.
        </p>

        <p className="text-base leading-relaxed">
          Dal punto di vista giuridico il TFR è una{" "}
          <strong>retribuzione differita</strong>: una parte della retribuzione che il
          lavoratore matura mese dopo mese, ma che il datore trattiene e versa solo alla
          fine del rapporto. Ha una duplice funzione: da un lato rappresenta un{" "}
          <em>ammortizzatore sociale</em> per chi perde il lavoro, dall'altro costituisce
          una <em>buona uscita</em> che accompagna il passaggio alla pensione. Il diritto
          al TFR è inviolabile e sorge automaticamente per legge: nessuna clausola
          contrattuale può escluderlo o ridurlo al di sotto dei minimi stabiliti dalla
          norma generale.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120">
          Art. 2120 c.c. (comma 1): «In ogni caso di cessazione del rapporto di lavoro
          subordinato, il prestatore di lavoro ha diritto ad un trattamento di fine
          rapporto. Tale trattamento si calcola sommando per ciascun anno di servizio una
          quota pari e comunque non superiore all'importo della retribuzione dovuta per
          l'anno stesso divisa per 13,5. La quota è proporzionalmente ridotta per le
          frazioni di anno, computandosi come mese intero le frazioni di mese uguali o
          superiori a 15 giorni.»
        </NormativaQuote>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Breve storia del TFR
        </h3>
        <p className="text-base leading-relaxed">
          La disciplina del TFR affonda le radici nel{" "}
          <strong>R.D. 13 novembre 1924, n. 1825</strong>, che introdusse la prima
          indennità di fine rapporto per i lavoratori dell'industria. Nel 1942 l'istituto
          fu recepito nel Codice Civile con il nome di <em>indennità di anzianità</em>,
          calcolata moltiplicando l'ultima mensilità per gli anni di servizio. Questo
          sistema, pur semplice, presentava un grave limite: non teneva conto
          dell'evoluzione della retribuzione negli anni né dell'inflazione. La{" "}
          <InlineNormLink
            text="riforma del 1982 (L. 297/1982)"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1982-05-29;297"
          />{" "}
          trasformò l'istituto in TFR, introducendo la formula a quota annuale (RAL ÷
          13,5) e il sistema di rivalutazione annua legato all'indice ISTAT, garantendo
          così la protezione del potere d'acquisto del lavoratore.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          A chi spetta il TFR
        </h3>
        <BulletList
          items={[
            "Tutti i lavoratori subordinati del settore privato (contratto a tempo indeterminato o determinato), se il rapporto è durato almeno 15 giorni",
            "Dirigenti, quadri, impiegati e operai, con CCNL applicabile anche ai contratti atipici ove previsto",
            "Apprendisti, con la medesima disciplina dei lavoratori subordinati",
            "Dipendenti pubblici assunti a tempo indeterminato dopo il 31/12/2000 (aliquota 6,91%)",
            "Colf, badanti e baby sitter (regolato dal CCNL lavoro domestico)",
            "Lavoratori agricoli (con specifiche regole ex D.Lgs. 375/1993)",
            "Gli eredi in caso di decesso del lavoratore (art. 2122 c.c.)",
          ]}
        />

        <AlertBox variant="info">
          <p>
            Il TFR matura anche durante il <strong>periodo di prova</strong>, purché
            questo sia durato almeno <strong>14 giorni</strong>. In caso di prova fallita
            ma di durata superiore a 14 giorni, il TFR è dovuto.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          COME SI CALCOLA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="come-si-calcola"
        icon={Sigma}
        title="Come si calcola il TFR"
        subtitle="Formula ex art. 2120 c.c., divisore 13,5, regola dei 15 giorni"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La formula di calcolo del TFR, stabilita dal primo comma dell'art. 2120 c.c., è
          concettualmente semplice:
        </p>

        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5 text-center"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-base leading-loose text-[oklch(0.25_0.04_250)]">
            <strong>Quota annuale TFR = Retribuzione utile annua ÷ 13,5</strong>
          </p>
          <p className="font-mono text-sm text-gray-700 mt-2">
            TFR totale = Σ (Quote annuali) + Rivalutazione ISTAT − Contributo IVS 0,5%
          </p>
        </div>

        <p className="text-base leading-relaxed">
          Ogni anno, il datore di lavoro accantona per il lavoratore una quota pari alla
          retribuzione utile dell'anno divisa per il coefficiente fisso{" "}
          <strong>13,5</strong>. Il valore 1/13,5 equivale a circa il{" "}
          <strong>7,41%</strong> della retribuzione annua complessiva. Ad esempio, con una
          RAL di 27.000 €, la quota annuale accantonata è 27.000 ÷ 13,5 ={" "}
          <span className="font-mono">2.000 €</span>. Dopo 10 anni di servizio, il TFR
          lordo accantonato sarà 20.000 €, al netto del contributo IVS 0,5% e al lordo
          della rivalutazione annua.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Perché proprio 13,5?
        </h3>
        <p className="text-base leading-relaxed">
          Il divisore <strong>13,5</strong> è una convenzione normativa introdotta dalla
          riforma del 1982 per garantire un trattamento egualitario tra lavoratori con
          diverso numero di mensilità contrattuali. Matematicamente è la media tra 12 (12
          mensilità ordinarie), 13 (con tredicesima) e 14 mensilità (con quattordicesima).
          Applicando il divisore fisso 13,5, la quota di TFR non è influenzata dal numero
          di mensilità effettivamente percepite, perché la RAL le include comunque tutte.
          L'art. 2120 c.c. specifica che la quota è "comunque non superiore" a RAL ÷
          13,5, il che significa che il contratto collettivo può prevedere quote
          inferiori, ma mai superiori a questo tetto.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          La regola dei 15 giorni per le frazioni di mese
        </h3>
        <p className="text-base leading-relaxed">
          L'art. 2120 c.c. stabilisce un criterio molto preciso per il calcolo nei mesi
          parziali (inizio o fine rapporto a metà mese): le frazioni di mese{" "}
          <strong>uguali o superiori a 15 giorni</strong> si computano come{" "}
          <strong>mese intero</strong>; le frazioni inferiori a 15 giorni non sono
          conteggiate. Questa regola opera sempre in favore del lavoratore. Esempi:
        </p>

        <LegalTable
          headers={["Data cessazione rapporto", "Giorni del mese lavorati", "Conteggio"]}
          rows={[
            ["20 del mese", "20 giorni", "Mese intero (20 ≥ 15)"],
            ["15 del mese", "15 giorni", "Mese intero (15 = 15)"],
            ["14 del mese", "14 giorni", "Mese NON conteggiato"],
            ["5 del mese", "5 giorni", "Mese NON conteggiato"],
            ["Ultimo giorno del mese", "30/31 giorni", "Mese intero"],
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Esempi pratici di calcolo della quota annuale
        </h3>
        <LegalTable
          headers={[
            "RAL annua",
            "Quota annuale (RAL ÷ 13,5)",
            "Coefficiente %",
            "TFR lordo 10 anni",
          ]}
          rows={[
            [
              "20.000 €",
              formatEur(20000 / 13.5),
              formatPct(1 / 13.5),
              formatEur((20000 / 13.5) * 10),
            ],
            [
              "28.000 €",
              formatEur(28000 / 13.5),
              formatPct(1 / 13.5),
              formatEur((28000 / 13.5) * 10),
            ],
            [
              "35.000 €",
              formatEur(35000 / 13.5),
              formatPct(1 / 13.5),
              formatEur((35000 / 13.5) * 10),
            ],
            [
              "50.000 €",
              formatEur(50000 / 13.5),
              formatPct(1 / 13.5),
              formatEur((50000 / 13.5) * 10),
            ],
            [
              "70.000 €",
              formatEur(70000 / 13.5),
              formatPct(1 / 13.5),
              formatEur((70000 / 13.5) * 10),
            ],
          ]}
        />

        <AlertBox variant="warning" title="Attenzione al contributo IVS 0,5%">
          <p>
            Dalla quota annuale va sottratto il <strong>contributo IVS dello 0,5%</strong>{" "}
            calcolato sull'imponibile previdenziale (non sulla retribuzione utile), come
            previsto dall'art. 3 L. 297/1982. Vedi la sezione dedicata.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          RETRIBUZIONE UTILE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="retribuzione-utile"
        icon={FileText}
        title="La Retribuzione Utile per il TFR"
        subtitle="Cosa entra nel calcolo e cosa no — art. 2120 c. 2 c.c."
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il secondo comma dell'art. 2120 c.c. definisce con precisione la base di calcolo
          del TFR: la <strong>retribuzione utile</strong> (detta anche <em>retribuzione
          annua utile al TFR</em>) comprende tutte le somme corrisposte al lavoratore{" "}
          <strong>in modo non occasionale</strong>, a titolo di corrispettivo della
          prestazione lavorativa. Il principio generale è: ciò che ha carattere{" "}
          <em>abituale e ricorrente</em> entra nella base, ciò che è <em>occasionale o
          straordinario</em> ne è escluso.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120">
          Art. 2120 c.c. (comma 2): «Salva diversa previsione dei contratti collettivi la
          retribuzione annua, ai fini del comma precedente, comprende tutte le somme,
          compreso l'equivalente delle prestazioni in natura, corrisposte in dipendenza
          del rapporto di lavoro, a titolo non occasionale e con esclusione di quanto è
          corrisposto a titolo di rimborso spese.»
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          La norma lascia tuttavia spazio alla <strong>contrattazione collettiva</strong>,
          che può derogare al criterio generale stabilendo deroghe in pejus (peggiorative)
          o in melius (migliorative) per specifiche voci. Prima di applicare la regola
          generale è quindi sempre opportuno verificare il CCNL applicabile al proprio
          rapporto di lavoro.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">
          Voci INCLUSE nella retribuzione utile
        </h3>
        <BulletList items={[...VOCI_RETRIBUZIONE_UTILE.incluse]} />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Voci ESCLUSE dalla retribuzione utile
        </h3>
        <BulletList items={[...VOCI_RETRIBUZIONE_UTILE.escluse]} />

        <AlertBox variant="info" title="Sentenza chiave — Cass. 1581/2022">
          <p>
            La Corte di Cassazione, con la <strong>sentenza n. 1581 del 19 gennaio
            2022</strong>, ha chiarito definitivamente che l'<strong>indennità
            sostitutiva del preavviso</strong> di licenziamento NON rientra nella base di
            calcolo del TFR, "poiché essa non è dipendente dal rapporto di lavoro,
            essendo invece riferibile ad un periodo non lavorato, una volta avvenuta la
            cessazione del rapporto stesso."
          </p>
        </AlertBox>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Voci controverse
        </h3>
        <BulletList items={[...VOCI_RETRIBUZIONE_UTILE.controverse]} />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          CONTRIBUTO IVS 0,5%
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="contributo-ivs"
        icon={Receipt}
        title="Il Contributo IVS 0,5%"
        subtitle="Trattenuta ex L. 297/1982 a favore del Fondo di Garanzia"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Dalla quota annuale di TFR il datore di lavoro detrae una{" "}
          <strong>contribuzione aggiuntiva dello 0,5%</strong> calcolata sulla
          retribuzione imponibile ai fini previdenziali (imponibile contributivo). Questa
          trattenuta, introdotta dall'
          <InlineNormLink
            text="art. 3 della L. 297/1982"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1982-05-29;297"
          />
          , serve a finanziare il sistema pensionistico IVS (
          <em>Invalidità, Vecchiaia, Superstiti</em>) e alimenta indirettamente anche il
          Fondo di Garanzia del TFR istituito presso l'INPS.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1982-05-29;297">
          Art. 3 L. 297/1982 (estratto): «Agli oneri derivanti al Fondo pensioni dei
          lavoratori dipendenti si provvede elevando le aliquote contributive a carico
          dei datori di lavoro, per l'assicurazione generale obbligatoria per
          l'invalidità, la vecchiaia ed i superstiti, con decorrenza dal 1° luglio 1982
          nella misura dello 0,30 per cento e con decorrenza dal 1° gennaio 1983 nella
          misura ulteriore dello 0,20 per cento della retribuzione imponibile. I datori
          di lavoro detraggono per ciascun lavoratore l'importo della contribuzione
          aggiuntiva di cui al comma precedente dall'ammontare della quota del
          trattamento di fine rapporto.»
        </NormativaQuote>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Come funziona nella pratica
        </h3>
        <p className="text-base leading-relaxed">
          Il meccanismo è particolare: il datore di lavoro <em>anticipa</em> mensilmente
          all'INPS il contributo aggiuntivo dello 0,5% dell'imponibile previdenziale, ma
          alla fine dell'anno <em>recupera</em> tale somma detraendola direttamente dal
          TFR accantonato. Il risultato economico è che il lavoratore contribuisce in
          pratica al sistema pensionistico con una riduzione della propria liquidazione
          futura di circa lo 0,5% della retribuzione annua imponibile.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Attenzione: imponibile previdenziale ≠ retribuzione utile
        </h3>
        <p className="text-base leading-relaxed">
          L'<strong>imponibile previdenziale</strong> (base su cui si calcola il contributo
          IVS) non sempre coincide con la <strong>retribuzione utile</strong> (base per il
          calcolo del TFR). Le due grandezze possono differire perché:
        </p>
        <BulletList
          items={[
            "Le giornate di malattia non entrano nell'imponibile previdenziale ma sono computate per il TFR (retribuzione figurativa)",
            "Alcune voci di fringe benefits seguono regole diverse nei due casi",
            "I massimali contributivi (ove applicabili) limitano l'imponibile previdenziale",
            "Gli sgravi contributivi riducono l'imponibile contributivo ma non la retribuzione utile",
          ]}
        />

        <AlertBox variant="success">
          <p>
            Se il datore di lavoro beneficia di <strong>sgravi contributivi</strong>{" "}
            (bonus occupazionali, esoneri giovani/donne, Zone Economiche Speciali), la
            trattenuta dello 0,5% è proporzionalmente ridotta in base all'entità
            dell'esonero, con effetto vantaggioso per il TFR del lavoratore.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          RIVALUTAZIONE ISTAT
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="rivalutazione"
        icon={TrendingUp}
        title="La Rivalutazione ISTAT del TFR"
        subtitle="1,5% fisso + 75% variazione FOI, imposta sostitutiva 17%"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il TFR accantonato viene rivalutato annualmente per preservarne il potere
          d'acquisto contro l'inflazione. La formula della rivalutazione è stabilita dai
          commi 4 e 5 dell'art. 2120 c.c. e si compone di <strong>due elementi</strong>:
          una componente fissa dell'1,5% e una componente variabile pari al 75%
          dell'incremento annuo dell'indice ISTAT FOI.
        </p>

        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5 text-center"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-base leading-loose text-[oklch(0.25_0.04_250)]">
            <strong>Tasso rivalutazione annua = 1,5% (fisso) + 75% × Δ FOI ISTAT</strong>
          </p>
          <p className="font-mono text-sm text-gray-700 mt-2">
            dove Δ FOI = variazione indice FOI dicembre anno corrente su dicembre anno precedente
          </p>
        </div>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120">
          Art. 2120 c.c. (comma 4): «Il trattamento di cui al precedente primo comma,
          con esclusione della quota maturata nell'anno, è incrementato, su base composta,
          al 31 dicembre di ogni anno, con applicazione di un tasso costituito dall'1,5
          per cento in misura fissa e dal 75 per cento dell'aumento dell'indice dei prezzi
          al consumo per le famiglie di operai ed impiegati, accertato dall'ISTAT,
          rispetto al mese di dicembre dell'anno precedente.»
        </NormativaQuote>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Tre principi fondamentali della rivalutazione
        </h3>
        <BulletList
          items={[
            "Base composta: ogni anno la rivalutazione si applica al fondo già rivalutato, generando interessi su interessi (capitalizzazione annua)",
            "Non sulla quota dell'anno corrente: la rivalutazione si applica SOLO alle quote accantonate negli anni precedenti, non a quella maturata nell'anno in corso",
            "Non negativa: se l'indice ISTAT FOI dovesse diminuire, il risultato complessivo non può scendere sotto la componente fissa dell'1,5%",
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Imposta sostitutiva del 17% sulla rivalutazione
        </h3>
        <p className="text-base leading-relaxed">
          Dal 1° gennaio 2001 la rivalutazione del TFR è assoggettata a{" "}
          <strong>imposta sostitutiva</strong>, originariamente fissata all'11%. La{" "}
          <InlineNormLink
            text="L. 23 dicembre 2014, n. 190 (Legge di Stabilità 2015), art. 1 c. 623"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190"
          />{" "}
          ha elevato l'aliquota al <strong>17%</strong> con decorrenza dalle rivalutazioni
          maturate dal 1° gennaio 2015. Il versamento avviene in due momenti:
        </p>
        <BulletList
          items={[
            "Acconto del 90% entro il 16 dicembre (F24 codice tributo 1712), calcolato sulla rivalutazione dell'anno precedente",
            "Saldo entro il 16 febbraio dell'anno successivo (F24 codice tributo 1713), sulla rivalutazione effettiva dell'anno",
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Timing della rivalutazione
        </h3>
        <p className="text-base leading-relaxed">
          La rivalutazione si applica automaticamente il <strong>31 dicembre</strong> di
          ogni anno, se il rapporto prosegue. Se invece il rapporto cessa durante l'anno,
          la rivalutazione è calcolata sulla base dell'incremento ISTAT rilevato nel mese
          di cessazione rispetto a dicembre dell'anno precedente. Vale la regola dei 14
          giorni:
        </p>
        <LegalTable
          headers={["Data cessazione rapporto", "Coefficiente applicato"]}
          rows={[
            ["Entro il 14 del mese (compreso)", "Coefficiente del mese precedente"],
            ["Dal 15 del mese (compreso)", "Coefficiente del mese di cessazione"],
            ["Rapporto in corso a fine anno", "Coefficiente di dicembre"],
          ]}
        />

        <AlertBox variant="warning">
          <p>
            Un rapporto di lavoro che <strong>inizia e termina nello stesso anno</strong>{" "}
            non beneficia di alcuna rivalutazione, perché la quota maturata nell'anno in
            corso non è soggetta a rivalutazione per esplicita previsione dell'art. 2120
            c.c. Questo principio risponde alla logica del sistema: ogni anno di
            maturazione viene rivalutato solo a partire dall'anno successivo.
          </p>
        </AlertBox>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Coefficienti mensili 2026 (ISTAT)
        </h3>
        <p className="text-base leading-relaxed">
          I coefficienti mensili di rivalutazione TFR pubblicati dall'ISTAT per il 2026,
          applicabili ai rapporti cessati nei rispettivi mesi sulla base dell'indice FOI:
        </p>
        <LegalTable
          headers={["Mese di cessazione 2026", "Coefficiente di rivalutazione"]}
          rows={[
            ["Gennaio 2026", "0,363025%"],
            ["Febbraio 2026", "0,862716%"],
            [
              "Marzo 2026 e successivi",
              "Pubblicazione mensile ISTAT (istat.it)",
            ],
          ]}
        />

        <AlertBox variant="info">
          <p>
            I coefficienti di rivalutazione mensili sono pubblicati dall'ISTAT il{" "}
            <strong>15 di ogni mese</strong> con riferimento al mese precedente. Per il
            calcolo corrente consulta sempre la pagina{" "}
            <a
              href="https://www.istat.it/notizia/indice-dei-prezzi-per-le-rivalutazioni-monetarie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
            >
              ISTAT — Indice prezzi per le rivalutazioni monetarie
            </a>
            . Nel nostro calcolatore utilizziamo un tasso medio annuo stimato (default
            2,5%, modificabile); per un calcolo preciso al centesimo è necessario
            applicare il coefficiente del mese effettivo di cessazione.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          TASSAZIONE SEPARATA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="tassazione"
        icon={Wallet}
        title="La Tassazione Separata del TFR"
        subtitle="Art. 19 TUIR — reddito di riferimento, aliquota media, detrazioni"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il TFR, essendo una somma maturata in più anni ma percepita in un'unica
          soluzione, è soggetto al regime fiscale della{" "}
          <strong>tassazione separata</strong>, disciplinata dagli{" "}
          <InlineNormLink
            text="artt. 17 e 19 del TUIR (DPR 917/1986)"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1986-12-22;917~art19"
          />
          . Il principio cardine è che il TFR <strong>non concorre al reddito
          complessivo</strong> dell'anno di percezione (evitando così il salto di
          scaglione con aliquote IRPEF marginali elevate), ma è tassato autonomamente con
          un'aliquota media calcolata sul cosiddetto <em>reddito di riferimento</em>.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1986-12-22;917~art19">
          Art. 19 TUIR (comma 1): «Il trattamento di fine rapporto costituisce reddito
          per un importo che si determina riducendo il suo ammontare delle rivalutazioni
          già assoggettate ad imposta sostitutiva. L'imposta è applicata con l'aliquota
          determinata con riferimento all'anno in cui è maturato il diritto alla
          percezione, corrispondente all'importo che risulta dividendo il suo ammontare
          per il numero degli anni e frazione di anno preso a base di commisurazione, e
          moltiplicando il risultato per dodici.»
        </NormativaQuote>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Fase 1 — Determinazione della base imponibile
        </h3>
        <p className="text-base leading-relaxed">
          La base imponibile IRPEF del TFR non coincide con il TFR lordo totale, perché
          devono essere esclusi gli importi già tassati separatamente a titolo di
          rivalutazione (17% o 11% pre-2015):
        </p>
        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-4"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose text-[oklch(0.25_0.04_250)]">
            <strong>Base imponibile IRPEF = TFR lordo − Rivalutazioni già tassate (17%)</strong>
          </p>
        </div>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">
          Fase 2 — Calcolo del reddito di riferimento
        </h3>
        <p className="text-base leading-relaxed">
          Il reddito di riferimento è la proiezione su base annuale della base imponibile
          TFR, su cui si applicheranno gli scaglioni IRPEF per determinare l'aliquota
          media:
        </p>
        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-4"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose text-[oklch(0.25_0.04_250)]">
            <strong>Reddito di riferimento (RR) = (Base imponibile TFR × 144) ÷ Mesi totali di servizio</strong>
            <br />
            <span className="text-xs text-gray-600">
              o equivalentemente: RR = (Base imponibile × 12) ÷ Anni di servizio
            </span>
          </p>
        </div>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">
          Fase 3 — Determinazione dell'aliquota media
        </h3>
        <p className="text-base leading-relaxed">
          Si applica l'IRPEF sugli scaglioni vigenti al reddito di riferimento, poi si
          divide per il reddito stesso:
        </p>
        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-4"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose text-[oklch(0.25_0.04_250)]">
            <strong>Aliquota media = IRPEF lorda(RR) ÷ RR × 100</strong>
          </p>
        </div>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Scaglioni IRPEF applicabili
        </h3>
        <LegalTable
          headers={[
            "Anni",
            "Scaglione I",
            "Scaglione II",
            "Scaglione III",
          ]}
          rows={SCAGLIONI_IRPEF_STORICI.map((s) => [
            s.anni,
            s.scaglione1,
            s.scaglione2,
            s.scaglione3,
          ])}
        />

        <AlertBox variant="info" title="Riforma IRPEF 2024-2026">
          <p>
            Con il <InlineNormLink
              text="D.Lgs. 216/2023"
              url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2023-12-30;216"
            />{" "}
            e la successiva Legge di Bilancio 2025 (L. 207/2024), gli scaglioni IRPEF sono
            passati da 4 a 3. Per il 2026 la Legge di Bilancio ha ridotto il secondo
            scaglione dal 35% al 33%, con effetto favorevole anche sulla tassazione
            separata del TFR.
          </p>
        </AlertBox>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Fase 4 — Calcolo dell'imposta e applicazione delle detrazioni
        </h3>
        <p className="text-base leading-relaxed">
          L'imposta sul TFR si calcola applicando l'aliquota media alla base imponibile,
          al netto delle detrazioni previste dal <strong>D.M. 20 marzo 2008</strong>:
        </p>

        <LegalTable
          headers={["Fascia reddito di riferimento", "Detrazione d'imposta"]}
          rows={TABELLA_DETRAZIONI_TFR.map((r) => [r.fascia, r.detrazione])}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Esempio pratico di tassazione separata
        </h3>
        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5 space-y-2 text-sm font-mono"
          style={{ borderRadius: "0.375rem" }}
        >
          <p>TFR lordo: 50.000 € (di cui 5.000 € rivalutazioni già tassate 17%)</p>
          <p>Anni di servizio: 15</p>
          <p className="pt-2 border-t border-gray-300">
            Base imponibile IRPEF = 50.000 − 5.000 = <strong>45.000 €</strong>
          </p>
          <p>
            Reddito di riferimento = (45.000 × 12) ÷ 15 = <strong>36.000 €</strong>
          </p>
          <p>
            IRPEF (scaglioni 2026): 28.000 × 23% + 8.000 × 33% = 6.440 + 2.640 ={" "}
            <strong>9.080 €</strong>
          </p>
          <p>
            Aliquota media = 9.080 ÷ 36.000 = <strong>25,22%</strong>
          </p>
          <p>Detrazione (RR 36.000 € &gt; 30.000 €) = 0 €</p>
          <p>Imposta TFR = 45.000 × 25,22% = 11.349 €</p>
          <p>Imposta sostitutiva su rivalutazioni = 5.000 × 17% = 850 €</p>
          <p className="pt-2 border-t border-gray-300 text-[oklch(0.25_0.04_250)]">
            <strong>TFR netto = 50.000 − 11.349 − 850 = 37.801 €</strong>
          </p>
        </div>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Riliquidazione dell'Agenzia delle Entrate
        </h3>
        <p className="text-base leading-relaxed">
          Il calcolo iniziale del TFR netto è effettuato dal datore di lavoro usando le
          aliquote dell'anno di cessazione. Successivamente, l'Agenzia delle Entrate
          provvede a <strong>riliquidare</strong> l'imposta applicando l'
          <em>aliquota media dei 5 anni precedenti</em> al lavoratore (aliquota reale).
          Se l'aliquota reale è più alta, il lavoratore riceve una richiesta di conguaglio
          a debito; se è più bassa, un rimborso a credito. La riliquidazione avviene
          generalmente 2-3 anni dopo l'erogazione del TFR, tramite Modello Unico
          rielaborato dall'AdE.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Clausola di salvaguardia 2007
        </h3>
        <p className="text-base leading-relaxed">
          La Legge Finanziaria 2007 ha introdotto una <strong>clausola di
          salvaguardia</strong>: se l'aliquota media calcolata con gli scaglioni attuali
          risulta superiore all'aliquota dello scaglione di riferimento nel 2006, si
          applica quest'ultima, se più favorevole. Questa tutela protegge i lavoratori
          dalle modifiche sfavorevoli del sistema IRPEF avvenute dopo il 2007.
        </p>

        <AlertBox variant="success" title="Addizionali regionali e comunali">
          <p>
            Il TFR in tassazione separata è <strong>escluso</strong> dalla base imponibile
            delle addizionali regionale e comunale IRPEF (art. 50 D.Lgs. 446/1997, art. 14
            D.Lgs. 360/1998, Circolare AdE 3/E 1998). Le addizionali si applicavano solo
            al TFR erogato come Qu.I.R. in busta paga (terminato dal 30/06/2018).
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ANTICIPAZIONE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="anticipazione"
        icon={HandCoins}
        title="L'Anticipazione del TFR"
        subtitle="Art. 2120 c. 6-11 c.c. — 8 anni, 70%, causali tassative"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'art. 2120 c.c. consente al lavoratore di richiedere, durante il rapporto di
          lavoro, un'<strong>anticipazione del TFR</strong> maturato. Questa facoltà ha lo
          scopo di consentire al lavoratore di far fronte a determinate necessità senza
          attendere la cessazione del rapporto. Le condizioni sono rigorosamente definite
          dalla legge:
        </p>

        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5 space-y-2"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose text-[oklch(0.25_0.04_250)]">
            ✓ Almeno <strong>8 anni di servizio</strong> presso lo stesso datore
            <br />
            ✓ Importo massimo: <strong>70%</strong> del TFR maturato alla data della
            richiesta
            <br />
            ✓ <strong>Una sola volta</strong> nel corso del rapporto (salvo deroghe CCNL)
            <br />
            ✓ Una delle <strong>causali tassative</strong> previste dalla legge
          </p>
        </div>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120">
          Art. 2120 c.c. (comma 6): «Il prestatore di lavoro, con almeno otto anni di
          servizio presso lo stesso datore di lavoro, può chiedere, in costanza di
          rapporto di lavoro, una anticipazione non superiore al 70 per cento sul
          trattamento cui avrebbe diritto nel caso di cessazione del rapporto alla data
          della richiesta.»
        </NormativaQuote>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">
          Causali ammesse all'anticipazione
        </h3>
        <LegalTable
          headers={["Causale", "Base normativa", "Documentazione", "Tassazione"]}
          rows={CAUSALI_ANTICIPAZIONE.map((c) => [
            c.causale,
            c.base,
            c.documentazione,
            c.tassazione,
          ])}
        />

        <AlertBox variant="info" title="Corte Costituzionale sent. 142/1991">
          <p>
            La Consulta ha dichiarato l'illegittimità costituzionale dell'art. 2120 c.c.
            nella parte in cui non prevedeva l'anticipazione per l'acquisto "in itinere"
            della prima casa (immobile in corso di acquisto ma non ancora completato).
            Oggi è possibile richiedere l'anticipo anche per immobili non ancora
            formalmente compravenduti, purché la compravendita sia comprovata da mezzi
            idonei (preliminare registrato, atti privati di prenotazione con caparra).
          </p>
        </AlertBox>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Limiti aziendali: 10% aventi diritto / 4% totali
        </h3>
        <p className="text-base leading-relaxed">
          L'art. 2120 c.c. prevede limiti numerici per le anticipazioni: il datore può
          soddisfare al massimo il <strong>10% dei lavoratori aventi diritto</strong> e
          comunque il <strong>4% del totale dei dipendenti</strong> in ciascun anno
          solare. I contratti collettivi possono stabilire criteri di priorità (anzianità,
          gravità della causale) o derogare in senso migliorativo. In mancanza di criteri
          CCNL si applica il principio cronologico (primo arrivato, primo servito).
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Procedura di richiesta
        </h3>
        <BulletList
          items={[
            "Richiesta scritta al datore di lavoro (raccomandata A/R, PEC o modulo aziendale)",
            "Indicazione dell'importo richiesto (assoluto o percentuale)",
            "Indicazione della causale con documentazione (fatture sanitarie, preliminare di acquisto, certificazione congedo)",
            "Dichiarazione dell'anzianità di almeno 8 anni presso il datore",
            "Preavviso 15 giorni per congedo parentale, 30 giorni per congedo formativo (L. 53/2000)",
            "Pagamento entro la prima retribuzione utile successiva all'accoglimento della domanda",
          ]}
        />

        <AlertBox variant="warning">
          <p>
            L'anticipazione del TFR per <strong>acquisto della prima casa</strong> gode di
            una tassazione agevolata con <strong>ritenuta del 23%</strong> a titolo di
            imposta sostitutiva (invece della tassazione separata ordinaria). Le altre
            causali (spese sanitarie, formazione, congedi) seguono la tassazione separata
            art. 19 TUIR, senza detrazioni (la detrazione D.M. 20/03/2008 non si applica
            sulle anticipazioni).
          </p>
        </AlertBox>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">
          Esclusi dall'anticipazione
        </h3>
        <BulletList
          items={[
            "Dipendenti di aziende dichiarate in crisi o in procedure concorsuali",
            "Dipendenti pubblici (divieto espresso art. 2120 c.c.)",
            "Lavoratori che hanno già ceduto il TFR a garanzia di contratti di finanziamento (cessione del quinto)",
          ]}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          TFR IN BUSTA PAGA (Qu.I.R.)
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="quir"
        icon={Receipt}
        title="TFR in Busta Paga — Qu.I.R. (terminata)"
        subtitle="L. 190/2014: sperimentazione 01/03/2015 – 30/06/2018"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>Qu.I.R.</strong> (Quota Integrativa della Retribuzione) è stata una
          misura sperimentale introdotta dalla{" "}
          <InlineNormLink
            text="Legge 23 dicembre 2014, n. 190 (Legge di Stabilità 2015), art. 1 c. 26-34"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190"
          />
          . Consentiva al lavoratore dipendente privato con almeno <strong>6 mesi di
          anzianità</strong> presso lo stesso datore di lavoro di ricevere mensilmente in
          busta paga il rateo di TFR maturato nel mese, anziché accantonarlo. La misura è
          stata operativa dal <strong>1° marzo 2015 al 30 giugno 2018</strong>.
        </p>

        <AlertBox variant="warning" title="Misura terminata e non prorogata">
          <p>
            La sperimentazione della Qu.I.R. <strong>è scaduta il 30 giugno 2018</strong>{" "}
            e non è stata prorogata da alcun intervento normativo successivo. Nel 2026
            non è più possibile richiedere il TFR in busta paga: l'unica modalità di
            erogazione è l'accantonamento fino alla cessazione del rapporto (o la
            destinazione a fondo pensione complementare).
          </p>
        </AlertBox>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Perché la Qu.I.R. era svantaggiosa fiscalmente
        </h3>
        <p className="text-base leading-relaxed">
          La Qu.I.R. era soggetta a <strong>tassazione ordinaria IRPEF</strong> (con
          scaglioni progressivi) invece che alla tassazione separata, e contribuiva al
          reddito complessivo del lavoratore. Conseguenze negative:
        </p>
        <BulletList
          items={[
            "Aliquota IRPEF marginale più elevata rispetto alla tassazione separata",
            "Riduzione delle detrazioni per lavoro dipendente e per familiari a carico",
            "Applicazione delle addizionali regionale e comunale (escluse invece sul TFR in tassazione separata)",
            "Incremento del reddito ISEE, con possibile perdita di prestazioni assistenziali collegate",
          ]}
        />

        <p className="text-base leading-relaxed">
          Per questi motivi, la Qu.I.R. ha avuto un'adesione molto limitata: secondo
          stime INPS, meno dell'1% dei lavoratori idonei ha aderito. La misura è stata
          considerata un fallimento e non rinnovata.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          DIPENDENTI PUBBLICI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="dipendenti-pubblici"
        icon={Users}
        title="TFR per i Dipendenti Pubblici"
        subtitle="Aliquota 6,91%, soglia 240.000 €, pagamento rateale"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il regime del TFR per i dipendenti pubblici è disciplinato dal{" "}
          <InlineNormLink
            text="DPCM 20 dicembre 1999"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.del.consiglio.dei.ministri:1999-12-20"
          />
          , attuativo dell'art. 2 c. 5-8 della L. 335/1995 (riforma Dini), ed è gestito
          dall'INPS (ex-INPDAP). Hanno diritto al TFR secondo questo regime:
        </p>
        <BulletList
          items={[
            "Dipendenti pubblici assunti a tempo indeterminato dopo il 31 dicembre 2000",
            "Dipendenti a tempo determinato assunti dopo il 30 maggio 2000, con contratto di almeno 15 giorni continuativi nel mese",
            "Dipendenti assunti prima del 31/12/2000 che aderiscono a fondo pensione complementare (opzione irrevocabile)",
          ]}
        />

        <p className="text-base leading-relaxed">
          I dipendenti pubblici assunti <strong>prima del 31/12/2000</strong> mantengono
          il regime del <strong>TFS</strong> (Trattamento di Fine Servizio), che si
          articola in due istituti distinti: l'<em>Indennità di Buonuscita (IBU)</em> e il{" "}
          <em>Premio di Fine Servizio</em>. Il TFS ha regole di calcolo completamente
          diverse dal TFR.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Aliquota 6,91% e soglia 240.000 €
        </h3>
        <p className="text-base leading-relaxed">
          Per i dipendenti pubblici la quota annuale di TFR è calcolata applicando
          l'aliquota del <strong>6,91% alla retribuzione annua lorda</strong>, a
          differenza del settore privato che usa il divisore 13,5 (equivalente al 7,41%).
          La differenza di 0,5 punti percentuali corrisponde al contributo IVS già detratto
          a monte per i pubblici. La retribuzione base è al lordo di ritenute fiscali e
          contributive, e comprende la tredicesima mensilità.
        </p>

        <AlertBox variant="warning" title="Soglia massima 240.000 €">
          <p>
            Dal 1° maggio 2014, per effetto dell'{" "}
            <InlineNormLink
              text="art. 1 c. 484 della L. 147/2013"
              url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2013-12-27;147"
            />
            , la retribuzione annua lorda considerata come base di calcolo del TFR per i
            dipendenti pubblici <strong>non può eccedere il limite di 240.000 €</strong>.
            Questa soglia è rilevante soprattutto per dirigenti e apicali ad alta
            retribuzione.
          </p>
        </AlertBox>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Pagamento rateale del TFR ai dipendenti pubblici
        </h3>
        <p className="text-base leading-relaxed">
          Una differenza sostanziale rispetto al settore privato riguarda i{" "}
          <strong>tempi di erogazione</strong>, molto più lunghi e articolati in rate
          annuali:
        </p>

        <LegalTable
          headers={["Importo lordo TFR", "Modalità di pagamento", "Tempistica"]}
          rows={SOGLIE_PAGAMENTO_PUBBLICI.map((s) => [
            s.sogliaImporto,
            s.modalita,
            s.tempi,
          ])}
        />

        <AlertBox variant="success" title="Corte Costituzionale sent. 130/2023">
          <p>
            Con la <InlineNormLink
              text="sentenza 27 giugno 2023, n. 130"
              url="https://www.cortecostituzionale.it/actionSchedaPronuncia.do?anno=2023&numero=130"
            />
            , la Consulta ha dichiarato <strong>costituzionalmente irragionevoli</strong>{" "}
            i ritardi nell'erogazione del TFR/TFS ai dipendenti pubblici, sottolineando
            come il sistema di rateazione pluriennale violasse il principio di
            ragionevolezza e di adeguata retribuzione differita (art. 36 Cost.). È in
            corso un progressivo adeguamento normativo volto a ridurre i tempi di
            attesa.
          </p>
        </AlertBox>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">
          Documentazione e procedura
        </h3>
        <p className="text-base leading-relaxed">
          Il TFR pubblico è corrisposto <em>d'ufficio</em>: il lavoratore non deve
          presentare domanda. L'ente di appartenenza compila il <strong>modello TFR1</strong>{" "}
          (amministrazione) e lo trasmette all'INPS, che procede alla liquidazione
          secondo i tempi di legge. In caso di errori o ricalcoli, si utilizza il{" "}
          <strong>modello TFR2</strong> per la riliquidazione. I termini ordinari dei
          provvedimenti sono disciplinati dalla L. 241/1990.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          COLF E BADANTI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="colf-badanti"
        icon={Heart}
        title="TFR per Colf, Badanti e Baby Sitter"
        subtitle="CCNL lavoro domestico — formula 1/13,5 con specificità"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          I lavoratori domestici (colf, badanti, baby sitter, autisti, custodi) seguono le
          regole generali dell'art. 2120 c.c. (formula RAL ÷ 13,5 con rivalutazione), ma
          con alcune specificità definite dal <strong>CCNL del lavoro domestico</strong>{" "}
          sottoscritto da DOMINA, Fidaldo, Federcolf e ALPI. Il CCNL vigente è quello
          rinnovato nel 2020, ancora applicabile nel 2026.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Come si calcola la retribuzione utile per i domestici
        </h3>
        <p className="text-base leading-relaxed">
          La retribuzione utile per il TFR dei domestici comprende:
        </p>
        <BulletList
          items={[
            "Stipendio mensile base (secondo CCNL e livello)",
            "Tredicesima mensilità (dovuta per legge)",
            "Vitto e alloggio per colf/badanti conviventi (valorizzato secondo le tariffe INPS pubblicate annualmente)",
            "Maggiorazioni per straordinario continuativo (non occasionale)",
            "Indennità contrattuali per prestazioni notturne o festive abituali",
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Calcolo orario vs. mensile
        </h3>
        <p className="text-base leading-relaxed">
          Se il lavoratore è pagato a ore (part-time, badante ad ore), la retribuzione
          utile annuale è: <strong>retribuzione oraria × ore mensili effettive ×
          12</strong> + tredicesima. Ad esempio, una badante a 8 €/ora per 40 ore/mese:
          RAL = 8 × 40 × 12 + (8 × 40) = 3.840 + 320 = 4.160 €; quota annuale TFR = 4.160
          ÷ 13,5 = 308,15 €.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Valore vitto e alloggio 2026
        </h3>
        <p className="text-base leading-relaxed">
          Per i lavoratori domestici conviventi, il valore convenzionale giornaliero di
          vitto e alloggio è pubblicato annualmente dalle parti sociali e recepito
          dall'INPS. Le tariffe 2026 sono disponibili sul portale INPS.{" "}
          <a
            href="https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.lavoratori-domestici-la-contribuzione-50143.lavoratori-domestici-la-contribuzione.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
          >
            Consulta la pagina INPS aggiornata
          </a>
          .
        </p>

        <AlertBox variant="info">
          <p>
            Il contributo IVS 0,5% ex L. 297/1982 si applica anche ai domestici, sottratto
            dalla quota annuale TFR. Il Fondo di Garanzia INPS interviene in caso di
            insolvenza del datore domestico, ma la procedura è più lenta e spesso richiede
            l'accertamento giudiziale del credito.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          PREVIDENZA COMPLEMENTARE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="previdenza-complementare"
        icon={PiggyBank}
        title="Destinazione del TFR alla Previdenza Complementare"
        subtitle="D.Lgs. 252/2005 — silenzio-assenso, tassazione 15%-9%"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il{" "}
          <InlineNormLink
            text="D.Lgs. 5 dicembre 2005, n. 252"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-12-05;252"
          />{" "}
          ha introdotto la facoltà (e in alcuni casi l'obbligo implicito tramite
          silenzio-assenso) di destinare il TFR a forme di previdenza complementare invece
          che accantonarlo presso il datore di lavoro. Questa scelta, entrata
          definitivamente in vigore dal 1° gennaio 2007, è uno dei punti chiave del
          sistema pensionistico italiano a regime misto.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Il meccanismo del silenzio-assenso
        </h3>
        <p className="text-base leading-relaxed">
          Al momento dell'assunzione, il lavoratore ha <strong>6 mesi</strong> per
          esprimere una scelta esplicita:
        </p>
        <BulletList
          items={[
            "Scelta esplicita di destinare il TFR al fondo pensione (modulo TFR1): IRREVOCABILE, il TFR futuro andrà al fondo",
            "Scelta esplicita di mantenere il TFR in azienda (modulo TFR2): REVOCABILE in qualsiasi momento",
            "Silenzio (nessuna scelta entro 6 mesi): il TFR viene automaticamente versato al fondo pensione previsto dal CCNL applicabile, o al FondINPS in mancanza di fondo di categoria",
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Vantaggi fiscali della previdenza complementare
        </h3>
        <p className="text-base leading-relaxed">
          Il regime fiscale del TFR destinato a previdenza complementare è molto più
          favorevole rispetto alla tassazione separata ordinaria:
        </p>
        <LegalTable
          headers={["Anni di iscrizione al fondo", "Aliquota sostitutiva"]}
          rows={[
            ["Fino a 15 anni", "15% (fissa)"],
            ["16° anno", "14,7%"],
            ["20° anno", "13,2%"],
            ["25° anno", "11,7%"],
            ["30° anno", "10,2%"],
            ["35° anno e oltre", "9% (limite minimo)"],
          ]}
        />

        <p className="text-base leading-relaxed">
          L'aliquota parte dal 15% e si riduce di <strong>0,3 punti percentuali per ogni
          anno successivo al 15°</strong>, fino al limite minimo del 9% dopo 35 anni di
          iscrizione. Il confronto con la tassazione separata è netto: per un TFR di
          50.000 € con 25 anni di contribuzione, il fondo pensione applica un'aliquota
          dell'11,7% (imposta 5.850 €) contro una tassazione separata che potrebbe
          superare il 25% (imposta 12.500 €).
        </p>

        <AlertBox variant="info" title="Contributo aziendale aggiuntivo">
          <p>
            Molti CCNL prevedono che, se il lavoratore destina il TFR al fondo pensione
            negoziale, il datore di lavoro versa un <strong>contributo aziendale
            aggiuntivo</strong> (tipicamente 1-2% della RAL) che altrimenti non è
            previsto. Questo rende la scelta della previdenza complementare ancora più
            vantaggiosa.
          </p>
        </AlertBox>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Tipologie di fondi pensione
        </h3>
        <BulletList
          items={[
            "Fondi negoziali (chiusi): istituiti da accordi collettivi di categoria (Cometa, Fonchim, Fon.Te, ecc.)",
            "Fondi aperti: istituiti da banche, assicurazioni, SIM, SGR accessibili a tutti",
            "Piani Individuali Pensionistici (PIP): gestiti da imprese di assicurazione",
            "FondINPS: fondo residuale presso l'INPS per chi non ha un fondo di categoria",
          ]}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FONDO DI GARANZIA INPS
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="fondo-garanzia"
        icon={Shield}
        title="Fondo di Garanzia INPS"
        subtitle="Art. 2 L. 297/1982 — tutela in caso di insolvenza del datore"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'
          <InlineNormLink
            text="art. 2 della L. 297/1982"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1982-05-29;297"
          />{" "}
          ha istituito presso l'INPS il <strong>Fondo di Garanzia del TFR</strong>, che
          interviene in sostituzione del datore di lavoro insolvente per garantire al
          lavoratore il pagamento del TFR e delle ultime retribuzioni non corrisposte. Il
          Fondo è alimentato dalla contribuzione IVS 0,5% dei datori di lavoro (art. 3
          stessa legge).
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Quando interviene il Fondo
        </h3>
        <BulletList
          items={[
            "Fallimento del datore di lavoro (attualmente liquidazione giudiziale ex CCII)",
            "Liquidazione coatta amministrativa",
            "Amministrazione straordinaria delle grandi imprese in crisi",
            "Concordato preventivo liquidatorio",
            "Datore di lavoro non sottoposto a fallimento ma in stato di insolvenza accertato in giudizio (Cass. 7585/2011)",
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Cosa garantisce
        </h3>
        <BulletList
          items={[
            "Intero TFR maturato (dedotte eventuali somme già corrisposte a titolo di anticipo)",
            "Ultime 3 mensilità di retribuzione non pagate (ex D.Lgs. 80/1992)",
            "Indennità di mancato preavviso nei limiti di legge",
            "Crediti accessori (interessi, rivalutazione monetaria)",
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Procedura e tempi
        </h3>
        <p className="text-base leading-relaxed">
          La domanda di intervento del Fondo si presenta alla sede INPS territorialmente
          competente (residenza del lavoratore), utilizzando il modello predisposto e
          allegando la documentazione del credito (decreto di ammissione allo stato
          passivo o sentenza di accertamento). Il Fondo provvede al pagamento del TFR
          entro <strong>60 giorni</strong> dalla richiesta. Il termine di prescrizione
          per presentare la domanda è di <strong>5 anni</strong> dalla data del decreto
          di chiusura della procedura concorsuale.
        </p>

        <AlertBox variant="info">
          <p>
            Il Fondo di Garanzia si <strong>surroga</strong> automaticamente nei diritti
            del lavoratore verso il datore insolvente: una volta corrisposto il TFR al
            lavoratore, l'INPS agisce in via di regresso nei confronti della procedura
            concorsuale per recuperare gli importi anticipati.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          TFR E ASSENZE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="assenze"
        icon={CalendarDays}
        title="TFR e Periodi di Assenza"
        subtitle="Assenze retribuite, non retribuite e con retribuzione figurativa"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'art. 2120 c. 3 c.c. disciplina specificamente il computo delle assenze ai
          fini del TFR, distinguendo tre categorie con regimi diversi:
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120">
          Art. 2120 c.c. (comma 3): «In caso di sospensione della prestazione di lavoro
          nel corso dell'anno per una delle cause di cui all'articolo 2110, nonché in
          caso di sospensione totale o parziale per la quale sia prevista l'integrazione
          salariale, deve essere computato nella retribuzione l'equivalente della
          retribuzione a cui il lavoratore avrebbe avuto diritto in caso di normale
          svolgimento del rapporto di lavoro.»
        </NormativaQuote>

        <LegalTable
          headers={["Categoria assenza", "Esempi", "Computabilità TFR"]}
          rows={[
            [
              "Retribuite",
              "Ferie godute, festività, permessi L. 104, donatori sangue",
              "✅ Computabili al valore della retribuzione effettiva",
            ],
            [
              "Non retribuite",
              "Servizio militare, permessi sindacali non retribuiti, aspettative non retribuite",
              "❌ NON computabili",
            ],
            [
              "Con retribuzione figurativa",
              "Malattia, maternità/paternità, congedi parentali, CIG",
              "✅ Computabili al valore figurativo (retribuzione teorica)",
            ],
          ]}
        />

        <p className="text-base leading-relaxed">
          Le assenze con retribuzione figurativa sono particolarmente tutelate: il TFR
          matura come se il lavoratore avesse svolto normalmente la prestazione. Questo
          principio è fondamentale per le lavoratrici in maternità, i lavoratori in
          malattia prolungata e quelli in Cassa Integrazione, preservando la continuità
          del TFR nei momenti di maggiore fragilità.
        </p>

        <AlertBox variant="info">
          <p>
            I <strong>contratti collettivi nazionali</strong> possono estendere la
            computabilità del TFR a ulteriori periodi di assenza (condizioni migliorative)
            ma NON possono escludere quelli previsti dall'art. 2120 c.c.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          PRESCRIZIONE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="prescrizione"
        icon={Clock}
        title="Prescrizione del Diritto al TFR"
        subtitle="5 anni ordinari, 10 anni post-sentenza"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il diritto alla corresponsione del TFR si prescrive in{" "}
          <strong>5 anni</strong> dalla data di cessazione del rapporto di lavoro, ex{" "}
          <InlineNormLink
            text="art. 2948 c. 5 c.c."
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2948"
          />
          . La prescrizione breve quinquennale si applica a tutte le prestazioni
          economiche periodiche, e il TFR è considerato tale anche se erogato in
          un'unica soluzione.
        </p>

        <p className="text-base leading-relaxed">
          Se invece il diritto al TFR è stato accertato con <strong>sentenza passata in
          giudicato</strong>, il termine di prescrizione si allunga a{" "}
          <strong>10 anni</strong> ex art. 2953 c.c. (prescrizione ordinaria decennale per
          l'actio iudicati). Il termine decorre dalla data del passaggio in giudicato
          della sentenza.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Interruzione e sospensione della prescrizione
        </h3>
        <BulletList
          items={[
            "La prescrizione si interrompe con qualsiasi atto scritto del lavoratore che reclama il credito (raccomandata A/R, PEC, notifica di atto giudiziario)",
            "Si interrompe anche con il riconoscimento del debito da parte del datore (artt. 2944-2945 c.c.)",
            "Dopo l'interruzione inizia a decorrere un nuovo periodo quinquennale",
            "La prescrizione è sospesa durante le procedure concorsuali (fallimento) fino alla chiusura",
            "È sospesa anche in caso di cause ostative (forza maggiore, errore scusabile) secondo i principi generali",
          ]}
        />

        <AlertBox variant="warning">
          <p>
            Trascorso il termine di prescrizione senza atti interruttivi, il diritto al
            TFR si estingue definitivamente. Il lavoratore che non riceve il TFR dopo la
            cessazione del rapporto deve pertanto <strong>attivarsi tempestivamente</strong>
            : una semplice raccomandata A/R al datore basta a interrompere la
            prescrizione e a far ripartire i 5 anni.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ESEMPI PRATICI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="esempi"
        icon={Calculator}
        title="Esempi Pratici di Calcolo TFR"
        subtitle="Scenari reali con retribuzioni e anzianità diverse"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Di seguito alcuni esempi pratici di calcolo del TFR per diverse categorie di
          lavoratori e retribuzioni. Tutti gli esempi utilizzano un tasso medio annuo di
          rivalutazione ISTAT stimato al 2,8% (coerente con la media storica degli ultimi
          anni) e gli scaglioni IRPEF 2026 per la stima del TFR netto:
        </p>

        <LegalTable
          headers={[
            "Scenario",
            "Quota annuale",
            "TFR lordo semplice",
            "Rivalutazione",
            "TFR lordo totale",
            "TFR netto stimato",
          ]}
          rows={ESEMPI_PRATICI.map((e) => [
            e.titolo,
            formatEur(e.quotaAnnuale),
            formatEur(e.tfrLordoSemplice),
            formatEur(e.rivalutazioneStimata),
            formatEur(e.tfrLordoTotale),
            formatEur(e.tfrNetto),
          ])}
        />

        <AlertBox variant="info">
          <p>
            Gli esempi sono calcolati con il nostro algoritmo e sono <strong>indicativi
            a titolo illustrativo</strong>. Per un calcolo personalizzato sui tuoi dati
            reali, utilizza il <a href="#calcolatore" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">calcolatore in alto</a>.
            Ricorda che l'Agenzia delle Entrate riliquida sempre l'imposta con l'aliquota
            media dei 5 anni precedenti al lavoratore, che può differire dalla stima.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ERRORI COMUNI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="errori-comuni"
        icon={AlertTriangle}
        title="Errori Comuni nel Calcolo del TFR"
        subtitle="Gli sbagli più frequenti e come evitarli"
      />
      <div className="space-y-4">
        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Errore 1 — Dividere per 12 invece che per 13,5
        </h3>
        <p className="text-base leading-relaxed">
          L'errore più comune è utilizzare il divisore 12 (numero delle mensilità
          ordinarie) invece del 13,5 stabilito dall'art. 2120 c.c. Questo produce un TFR
          sovrastimato del 12,5% circa. La formula corretta è sempre{" "}
          <strong>RAL ÷ 13,5</strong>, indipendentemente dal numero di mensilità
          contrattuali percepite.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Errore 2 — Applicare la rivalutazione alla quota dell'anno corrente
        </h3>
        <p className="text-base leading-relaxed">
          La rivalutazione si applica <strong>esclusivamente</strong> alle quote
          accantonate negli anni precedenti, mai a quella maturata nell'anno in corso.
          Un rapporto di lavoro iniziato e concluso nello stesso anno non beneficia di
          rivalutazione.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Errore 3 — Confondere retribuzione utile e imponibile previdenziale
        </h3>
        <p className="text-base leading-relaxed">
          La <em>retribuzione utile</em> (base del TFR) e l'<em>imponibile previdenziale</em>{" "}
          (base del contributo IVS 0,5%) sono grandezze diverse, perché le giornate di
          malattia entrano nel TFR ma non nell'imponibile contributivo. Utilizzare la
          stessa cifra per entrambi i calcoli genera errori nella trattenuta IVS.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Errore 4 — Applicare le addizionali regionali e comunali al TFR
        </h3>
        <p className="text-base leading-relaxed">
          Il TFR in tassazione separata è escluso dalle addizionali regionale e comunale
          IRPEF. Alcuni datori di lavoro inesperti le applicano per errore, abbassando
          indebitamente il netto. Solo la Qu.I.R. (terminata nel 2018) era soggetta ad
          addizionali.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Errore 5 — Tassare due volte le rivalutazioni
        </h3>
        <p className="text-base leading-relaxed">
          Le rivalutazioni annuali sono già tassate con imposta sostitutiva del 17% anno
          per anno. Quando si calcola la tassazione separata finale, la base imponibile
          IRPEF deve <strong>escludere</strong> le rivalutazioni già tassate. Omettere
          questa sottrazione produce una doppia imposizione.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Errore 6 — Includere l'indennità sostitutiva del preavviso
        </h3>
        <p className="text-base leading-relaxed">
          Dopo la Cass. 1581/2022, l'indennità di mancato preavviso NON entra nella base
          di calcolo del TFR. Includerla per errore sovrastima il TFR e può generare
          contenziosi con il datore.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Errore 7 — Usare il divisore 13,5 per i dipendenti pubblici
        </h3>
        <p className="text-base leading-relaxed">
          I dipendenti pubblici (assunti post 31/12/2000) seguono l'aliquota del 6,91%
          della RAL, non il divisore 13,5 (che equivale al 7,41%). La differenza è
          significativa: su una RAL di 40.000 €, la quota privati è 2.963 €, quella
          pubblici è 2.764 €.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FONTI E RIFERIMENTI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="fonti"
        icon={Link2}
        title="Fonti e Riferimenti"
        subtitle="Fonti istituzionali utilizzate"
      />
      <div className="space-y-3">
        <p className="text-base leading-relaxed">
          Le informazioni contenute in questa guida sono tratte esclusivamente dalle
          seguenti fonti istituzionali italiane:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Normattiva.it</strong> — Testo consolidato e vigente di: art. 2120
              e 2948 c.c., L. 297/1982, DPR 917/1986 (TUIR), D.Lgs. 252/2005, L.
              190/2014, L. 147/2013, DPCM 20/12/1999, L. 53/2000, D.Lgs. 216/2023, L.
              207/2024:{" "}
              <a
                href="https://www.normattiva.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                normattiva.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>INPS</strong> — Pagina istituzionale TFR per dipendenti pubblici,
              messaggio 755/2024 (aliquote IRPEF), circolare 154/2015 (modalità di
              rateizzazione), circolare INPDAP 30/2002:{" "}
              <a
                href="https://www.inps.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                inps.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>ISTAT</strong> — Indice FOI senza tabacchi per la rivalutazione
              monetaria, coefficienti TFR mensili:{" "}
              <a
                href="https://www.istat.it/notizia/indice-dei-prezzi-per-le-rivalutazioni-monetarie/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                istat.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Agenzia delle Entrate</strong> — Circolari su tassazione separata
              TFR, Circolare 3/E 1998 sulle addizionali, D.M. 20/03/2008 detrazioni TFR:{" "}
              <a
                href="https://www.agenziaentrate.gov.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                agenziaentrate.gov.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Corte Costituzionale</strong> — Sentenza 142/1991 (prima casa in
              itinere), Sentenza 130/2023 (ritardi TFR pubblici):{" "}
              <a
                href="https://www.cortecostituzionale.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                cortecostituzionale.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Corte di Cassazione</strong> — Sentenza Cass. Civ. n. 1581/2022 su
              esclusione indennità di preavviso dal TFR:{" "}
              <a
                href="https://www.cortedicassazione.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                cortedicassazione.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Gazzetta Ufficiale</strong> — Pubblicazione originale delle leggi
              e dei decreti citati:{" "}
              <a
                href="https://www.gazzettaufficiale.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                gazzettaufficiale.it
              </a>
            </span>
          </li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="faq"
        icon={HelpCircle}
        title="Domande Frequenti (FAQ)"
        subtitle="Risposte alle domande più comuni sul calcolo del TFR"
      />
      <FAQ items={faqData} />

      {/* ═══════════════════════════════════════════════════════════
          NORMATIVA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="normativa"
        icon={Landmark}
        title="Normativa di Riferimento"
        subtitle="Leggi, decreti, circolari e sentenze rilevanti"
      />
      <div className="space-y-6">
        <NormativaRefTable items={normativaRiferimento} />
        <div>
          <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mb-3">
            Prassi applicativa (circolari e DM)
          </h3>
          <CircolariTable items={circolariMinisteriali} />
        </div>
      </div>
    </ToolLayout>
  );
}

/* Unused imports kept for future use */
void History;
