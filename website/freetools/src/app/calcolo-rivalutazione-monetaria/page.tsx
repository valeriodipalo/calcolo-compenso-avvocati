import { TrendingUp, BookOpen, HelpCircle, Table, Calculator, Scale, AlertTriangle, Landmark, FileText, ArrowRightLeft, Link2, Sparkles } from "lucide-react";
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
import Calcolatore from "@/components/calcolo-rivalutazione-monetaria/Calcolatore";
import {
  tassiStorici,
  variazioniFOI,
  normativaRiferimento,
  sections,
} from "@/data/calcolo-rivalutazione-monetaria/rivalutazioneData";
import { faqData } from "@/data/calcolo-rivalutazione-monetaria/faqData";
import { JsonLd, articleSchema, webApplicationSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "Rivalutazione Monetaria 2026: Calcolo ISTAT e Guida",
  description:
    "Calcola la rivalutazione monetaria ISTAT con interessi legali. Indice FOI aggiornato 2026, formula, tabella coefficienti, debiti di valore e normativa.",
  alternates: {
    canonical: "/calcolo-rivalutazione-monetaria",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/calcolo-rivalutazione-monetaria",
    title: "Rivalutazione Monetaria 2026: Calcolo ISTAT e Guida",
    description:
      "Calcola la rivalutazione monetaria ISTAT con interessi legali. Indice FOI aggiornato 2026, formula, tabella coefficienti, debiti di valore e normativa.",
    images: [
      {
        url: HERO_IMG,
        width: 1920,
        height: 1072,
        alt: "Calcolo Rivalutazione Monetaria ISTAT 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rivalutazione Monetaria 2026: Calcolo ISTAT e Guida",
    description:
      "Calcola la rivalutazione monetaria ISTAT con interessi legali. Indice FOI aggiornato 2026, formula, tabella coefficienti, debiti di valore e normativa.",
  },
};

const toolConfig: ToolConfig = {
  slug: "calcolo-rivalutazione-monetaria",
  title: "Calcolo Rivalutazione Monetaria ISTAT 2026",
  shortTitle: "Rivalutazione Monetaria",
  icon: TrendingUp,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroEyebrow: "Calcolatore ISTAT, Indici FOI e Guida Completa",
  heroTitle: "Calcolo Rivalutazione Monetaria 2026",
  heroDescription:
    "Calcola la rivalutazione monetaria con indici ISTAT FOI e interessi legali aggiornati al 2026. Tre modalità di calcolo, tabella tassi storici, formula, debiti di valore e valuta, applicazioni pratiche e normativa completa.",
  heroReference:
    "Art. 1224, 1277, 1284 Codice Civile — Art. 429 c.p.c. — Indice ISTAT FOI",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "Dati aggiornati al DM Economia 10 dicembre 2025 e indice FOI febbraio 2026. Per calcoli su base mensile consultare ISTAT Rivaluta.",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    { label: "ISTAT Rivaluta", url: "https://rivaluta.istat.it/" },
    { label: "Gazzetta Ufficiale", url: "https://www.gazzettaufficiale.it" },
  ],
};

const formatPct = (n: number) =>
  new Intl.NumberFormat("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n) + "%";

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

export default function CalcoloRivalutazioneMonetariaPage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ===== JSON-LD: Article ===== */}
      <JsonLd
        data={articleSchema({
          headline: "Calcolo Rivalutazione Monetaria ISTAT 2026: Calcolatore, Formula e Guida Completa",
          description: "Guida completa alla rivalutazione monetaria in Italia: calcolatore ISTAT FOI con interessi legali, formula di calcolo, tabella coefficienti, debiti di valore vs valuta, applicazioni pratiche e normativa aggiornata al 2026.",
          path: "/calcolo-rivalutazione-monetaria",
          datePublished: "2026-03-30",
          dateModified: "2026-03-30",
          image: HERO_IMG,
          sections: [
            "Calcolatore Rivalutazione Monetaria",
            "Cos'è la Rivalutazione Monetaria",
            "Come si Calcola la Rivalutazione",
            "Indici ISTAT FOI",
            "Tabella Tassi di Interesse Legale",
            "Rivalutazione e Interessi Legali",
            "Debiti di Valuta vs Debiti di Valore",
            "Applicazioni Pratiche",
            "Errori Comuni",
            "Novità 2026",
          ],
        })}
      />

      {/* ===== JSON-LD: WebApplication ===== */}
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Rivalutazione Monetaria ISTAT 2026",
          description: "Calcola la rivalutazione monetaria con indici ISTAT FOI e interessi legali. Tre modalità: rivalutazione + interessi, sola rivalutazione, soli interessi.",
          path: "/calcolo-rivalutazione-monetaria",
          applicationCategory: "FinanceApplication",
        })}
      />

      {/* ===== CALCOLATORE ===== */}
      <Calcolatore />

      {/* ===== COS'È LA RIVALUTAZIONE ===== */}
      <SectionTitle id="cose-la-rivalutazione" icon={BookOpen} title="Cos'è la Rivalutazione Monetaria" subtitle="Definizione, fondamento giuridico e principio nominalistico" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>rivalutazione monetaria</strong> è un'operazione aritmetica che consente di adeguare una somma di denaro al mutato potere d'acquisto della moneta, compensando la perdita causata dall'inflazione. In ragione del pressoché costante aumento dei prezzi, il potere d'acquisto della moneta subisce nel corso del tempo un processo di fisiologica diminuzione: con la stessa quantità di denaro si può acquistare una minore quantità di beni e servizi.
        </p>
        <p className="text-base leading-relaxed">
          Il fondamento giuridico della rivalutazione monetaria si trova nel{" "}
          <InlineNormLink text="Codice Civile" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262" />
          , in particolare negli artt. 1224, 1277 e 1284. La norma cardine è l'{" "}
          <InlineNormLink text="art. 1277 c.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1277" />
          , che enuncia il <strong>principio nominalistico</strong>.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1277">
          Art. 1277 c.c.: «I debiti pecuniari si estinguono con moneta avente corso legale nello Stato al tempo del pagamento e per il suo valore nominale.»
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          In pratica, il principio nominalistico stabilisce che il debitore si libera pagando l'importo nominale originario, indipendentemente dalle variazioni del potere d'acquisto. Se si riceve un mutuo di € 100.000 nel 2015, si restituiranno € 100.000 alla scadenza, anche se nel frattempo l'inflazione ha ridotto il valore reale di quella somma. Questo principio fa gravare sul creditore il rischio dell'inflazione.
        </p>

        <p className="text-base leading-relaxed">
          Il fenomeno inverso della rivalutazione è la <strong>devalutazione</strong> (o svalutazione): un'operazione che parte da un valore attuale per risalire al suo equivalente in un periodo passato. Rivalutare significa «portare avanti nel tempo», devalutare significa «portare indietro».
        </p>

        <AlertBox variant="info" title="In sintesi">
          <p>La rivalutazione monetaria serve a rispondere alla domanda: «Quanto valgono oggi € 10.000 del 2010?». La devalutazione risponde alla domanda inversa: «Quanto valevano nel 2010 gli € 10.000 di oggi?».</p>
        </AlertBox>
      </div>

      {/* ===== COME SI CALCOLA ===== */}
      <SectionTitle id="come-si-calcola" icon={Calculator} title="Come si Calcola la Rivalutazione Monetaria" subtitle="Formula, coefficiente di rivalutazione ed esempi pratici" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La formula base per il calcolo della rivalutazione monetaria è:
        </p>

        <div className="bg-[oklch(0.97_0.005_85)] border border-[oklch(0.85_0.08_85)] p-4 text-center" style={{ borderRadius: "0.375rem" }}>
          <p className="text-lg font-semibold text-[oklch(0.25_0.04_250)]">
            Capitale rivalutato = C<sub>i</sub> × (Indice FOI finale / Indice FOI iniziale)
          </p>
        </div>

        <p className="text-base leading-relaxed">
          Dove <strong>C<sub>i</sub></strong> è il capitale iniziale e il rapporto tra gli indici FOI rappresenta il <strong>coefficiente di rivalutazione</strong> (C<sub>r</sub>). I coefficienti sono ricavati dagli indici ISTAT FOI, i cosiddetti «numeri indice» che misurano le variazioni dei prezzi di un paniere di beni e servizi.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-6">Esempio con indici della stessa base</h3>
        <p className="text-base leading-relaxed">
          Rivalutare <strong className="font-mono">€ 1.000,00</strong> da gennaio 2011 a gennaio 2012:
        </p>
        <LegalTable
          headers={["Dato", "Valore"]}
          rows={[
            ["Indice FOI gennaio 2012", "104,4"],
            ["Indice FOI gennaio 2011", "101,2"],
            ["Coefficiente di rivalutazione", "104,4 / 101,2 = 1,0316"],
            ["Capitale rivalutato", "€ 1.000,00 × 1,0316 = € 1.031,62"],
          ]}
        />

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-6">Esempio con basi diverse (coefficiente di raccordo)</h3>
        <p className="text-base leading-relaxed">
          Quando gli indici appartengono a basi diverse, occorre applicare il <strong>coefficiente di raccordo</strong> pubblicato dall'ISTAT. La formula diventa:
        </p>
        <div className="bg-[oklch(0.97_0.005_85)] border border-[oklch(0.85_0.08_85)] p-4 text-center" style={{ borderRadius: "0.375rem" }}>
          <p className="text-lg font-semibold text-[oklch(0.25_0.04_250)]">
            C<sub>riv</sub> = C<sub>i</sub> × (FOI finale × Coeff. raccordo / FOI iniziale)
          </p>
        </div>

        <p className="text-base leading-relaxed">
          Rivalutare <strong className="font-mono">€ 1.000,00</strong> da gennaio 2002 a gennaio 2012:
        </p>
        <LegalTable
          headers={["Dato", "Valore"]}
          rows={[
            ["Indice FOI gennaio 2012 (base 2010=100)", "104,4"],
            ["Indice FOI gennaio 2002 (base 1995=100)", "116,5"],
            ["Coefficiente di raccordo", "1,3730"],
            ["Indice rivalutazione", "(104,4 × 1,3730) / 116,5 = 1,2299"],
            ["Capitale rivalutato", "€ 1.000,00 × 1,2299 = € 1.229,90"],
          ]}
        />

        <AlertBox variant="warning" title="Attenzione al coefficiente di raccordo">
          <p>Dimenticare il coefficiente di raccordo quando si rivaluta tra periodi con basi ISTAT diverse è uno degli errori più comuni e porta a risultati completamente errati. Verificare sempre la base di riferimento degli indici utilizzati.</p>
        </AlertBox>
      </div>

      {/* ===== INDICI ISTAT FOI ===== */}
      <SectionTitle id="indici-istat" icon={Table} title="Indici ISTAT FOI" subtitle="FOI, NIC e IPCA: quale indice per la rivalutazione?" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'ISTAT pubblica tre principali indici dei prezzi al consumo, ciascuno con finalità e ambito diversi:
        </p>

        <FeatureGrid items={[
          { title: "FOI — Famiglie Operai e Impiegati", desc: "Calcolato sulla base dei consumi delle famiglie di lavoratori dipendenti extra-agricoli, al netto dei tabacchi. È l'indice con valore legale per le rivalutazioni monetarie, pubblicato in Gazzetta Ufficiale ex art. 81 L. 392/1978." },
          { title: "NIC — Nazionale Intera Collettività", desc: "Calcolato sulla base dei consumi dell'intera popolazione nazionale. Misura l'inflazione complessiva ma non ha gli stessi effetti giuridici del FOI per le rivalutazioni previste dalla legge." },
          { title: "IPCA — Indice Armonizzato UE", desc: "Calcolato sulla quota di consumi di beni e servizi con prezzi comparabili nei diversi Paesi UE. Utilizzato dalla BCE per le decisioni di politica monetaria e per la contrattazione collettiva (rinnovi CCNL)." },
        ]} />

        <AlertBox variant="info">
          <p><strong>Per le rivalutazioni previste dalla legge si usa esclusivamente l'indice FOI al netto dei tabacchi.</strong> L'esclusione dei tabacchi dipende dal fatto che il loro prezzo è amministrato dallo Stato e non riflette le dinamiche di mercato.</p>
        </AlertBox>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-6">Variazione annua dell'indice FOI (ultimi 10 anni)</h3>
        <LegalTable
          headers={["Anno", "Variazione FOI %"]}
          rows={variazioniFOI.filter(v => v.anno >= 2016).map(v => [
            String(v.anno),
            formatPct(v.variazione),
          ])}
        />
        <p className="text-sm text-muted-foreground mt-2">
          Fonte: ISTAT. Base attuale: 2025=100 (dal gennaio 2026). Coefficiente di raccordo con base 2015=100: 1,214. Ultimo indice FOI disponibile: febbraio 2026 = 100,9 (+1,1% annuo).
        </p>
      </div>

      {/* ===== TABELLA TASSI INTERESSE LEGALE ===== */}
      <SectionTitle id="tabella-tassi" icon={Table} title="Tabella Storica dei Tassi di Interesse Legale" subtitle="Dal 1942 al 2026 — Art. 1284 c.c." />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il tasso di interesse legale è determinato annualmente dal Ministero dell'Economia e delle Finanze ai sensi dell'{" "}
          <InlineNormLink text="art. 1284 c.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284" />
          , sulla base del rendimento medio annuo lordo dei titoli di Stato di durata non superiore a 12 mesi e tenuto conto del tasso di inflazione. La tabella seguente riporta tutti i tassi dal 1942 ad oggi.
        </p>

        <LegalTable
          headers={["Dal", "Al", "Tasso", "Fonte normativa"]}
          rows={tassiStorici.map(t => [
            formatDate(t.dal),
            t.al ? formatDate(t.al) : "in vigore",
            formatPct(t.tasso),
            t.norma,
          ])}
        />

        <AlertBox variant="success" title="Tasso 2026">
          <p>Dal 1° gennaio 2026 il tasso di interesse legale è pari all'<strong>1,60%</strong> in ragione d'anno (DM Economia 10 dicembre 2025, G.U. n. 289 del 13/12/2025). Si tratta di una riduzione rispetto al 2,00% del 2025.</p>
        </AlertBox>
      </div>

      {/* ===== RIVALUTAZIONE E INTERESSI ===== */}
      <SectionTitle id="rivalutazione-interessi" icon={ArrowRightLeft} title="Rivalutazione Monetaria e Interessi Legali" subtitle="Il metodo delle Sezioni Unite (Cass. 1712/1995) e il divieto di cumulo" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il calcolo congiunto di rivalutazione monetaria e interessi legali segue il metodo stabilito dalle <strong>Sezioni Unite della Cassazione</strong> con la sentenza n. 1712 del 17 febbraio 1995. Questo metodo, utilizzato per i debiti di valore, prevede:
        </p>

        <BulletList items={[
          "Si rivaluta anno per anno il capitale iniziale utilizzando la variazione dell'indice ISTAT FOI rispetto al mese iniziale",
          "Si calcolano gli interessi legali sulla somma via via rivalutata anno per anno",
          "NON si capitalizzano gli interessi (no anatocismo ex art. 1283 c.c.)",
          "La rivalutazione è calcolata ogni anno sul capitale iniziale, evitando una «rivalutazione della rivalutazione»",
        ]} />

        <p className="text-base leading-relaxed">
          La formula per gli interessi legali è: <strong className="font-mono">I = C × S × N / 36500</strong>, dove C è il capitale (rivalutato), S il tasso legale vigente e N il numero di giorni. Il divisore 36500 corrisponde a 365 giorni × 100 (anno civile).
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-6">Divieto di cumulo nei debiti di valuta</h3>
        <p className="text-base leading-relaxed">
          Per i <strong>debiti di valuta</strong>, l'{" "}
          <InlineNormLink text="art. 1224 c.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1224" />{" "}
          non consente il cumulo tra rivalutazione monetaria e interessi legali. Il creditore può ottenere:
        </p>
        <BulletList items={[
          "Gli interessi legali automatici (comma 1) — senza necessità di prova del danno",
          "Oppure il maggior danno ex comma 2 (se provato) — che può includere la svalutazione monetaria",
          "Ma non entrambi cumulativamente sullo stesso importo",
        ]} />

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1224">
          Art. 1224, c. 2, c.c.: «Al creditore che dimostra di aver subito un danno maggiore spetta l'ulteriore risarcimento. Questo non è dovuto se è stata convenuta la misura degli interessi moratori.»
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          Secondo Cass. civ. n. 19499/2008, il maggior danno può ritenersi esistente <strong>in via presuntiva</strong> quando il saggio medio di rendimento netto dei titoli di Stato sia stato superiore agli interessi legali durante il periodo di mora.
        </p>

        <AlertBox variant="info" title="Debiti di valore: cumulo ammesso">
          <p>Per i debiti di valore (risarcimento danni, crediti di lavoro), il cumulo di rivalutazione e interessi compensativi è ammesso perché assolvono funzioni diverse: la rivalutazione reintegra il patrimonio leso, gli interessi compensano la mancata disponibilità della somma.</p>
        </AlertBox>
      </div>

      {/* ===== DEBITI DI VALUTA VS VALORE ===== */}
      <SectionTitle id="debiti-valuta-valore" icon={Scale} title="Debiti di Valuta e Debiti di Valore" subtitle="Due regimi diversi per la rivalutazione" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La distinzione tra debiti di valuta e debiti di valore, elaborata dalla giurisprudenza di legittimità, è fondamentale per determinare se e come si applica la rivalutazione monetaria.
        </p>

        <LegalTable
          headers={["", "Debiti di Valuta", "Debiti di Valore"]}
          rows={[
            ["Oggetto", "Somma di denaro fin dall'origine", "Cosa diversa dal denaro (es. risarcimento)"],
            ["Principio nominalistico", "Si applica (art. 1277 c.c.)", "Non si applica"],
            ["Rivalutazione", "Non automatica — richiede prova del maggior danno", "Automatica — anche d'ufficio dal giudice"],
            ["Cumulo con interessi", "Vietato", "Ammesso"],
            ["Esempi", "Mutuo, canone, prezzo", "Risarcimento danni, crediti di lavoro"],
            ["Dopo liquidazione", "—", "Diventa debito di valuta"],
          ]}
        />

        <p className="text-base leading-relaxed">
          Per i debiti di valore, una volta avvenuta la liquidazione giudiziaria con l'espressione in termini monetari del valore del bene, il debito di valore si trasforma in debito di valuta e resta soggetto al regime di quest'ultimo. Da quel momento, la rivalutazione non opera più automaticamente.
        </p>
      </div>

      {/* ===== APPLICAZIONI PRATICHE ===== */}
      <SectionTitle id="applicazioni" icon={Landmark} title="Applicazioni Pratiche della Rivalutazione" subtitle="Crediti di lavoro, locazioni, assegno di mantenimento, TFR" />
      <div className="space-y-4">
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif">Crediti di lavoro (art. 429 c.p.c.)</h3>
        <p className="text-base leading-relaxed">
          L'{" "}
          <InlineNormLink text="art. 429, comma 3, c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1973-10-11;533~art429" />{" "}
          prevede che il giudice, nelle sentenze di condanna per crediti di lavoro, debba determinare sia gli interessi legali sia il maggior danno per la diminuzione del valore del credito, con decorrenza dal giorno della maturazione del diritto. La rivalutazione è quindi <strong>automatica</strong> per legge e non richiede specifica domanda del lavoratore.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1973-10-11;533~art429">
          Art. 429, c. 3, c.p.c.: «Il giudice, quando pronuncia sentenza di condanna al pagamento di somme di denaro per crediti di lavoro, deve determinare, oltre gli interessi nella misura legale, il maggior danno eventualmente subito dal lavoratore per la diminuzione di valore del suo credito [...]»
        </NormativaQuote>

        <h4 className="text-lg text-[oklch(0.30_0.04_250)] font-serif mt-4">Esempio pratico: credito di lavoro di € 5.000</h4>
        <p className="text-base leading-relaxed">
          Un lavoratore ha maturato un credito di <strong className="font-mono">€ 5.000,00</strong> per differenze retributive nel gennaio 2020. La sentenza viene emessa nel dicembre 2025. Applicando il metodo Cassazione (SS.UU. 1712/1995), il calcolo anno per anno è:
        </p>
        <LegalTable
          headers={["Anno", "Variaz. FOI", "Capitale rivalutato", "Tasso legale", "Interessi"]}
          rows={[
            ["2020", "-0,20%", "€ 4.990,00", "0,05%", "€ 2,50"],
            ["2021", "+1,90%", "€ 5.085,00", "0,01%", "€ 0,51"],
            ["2022", "+8,10%", "€ 5.490,00", "1,25%", "€ 68,63"],
            ["2023", "+5,70%", "€ 5.775,00", "5,00%", "€ 288,75"],
            ["2024", "+1,00%", "€ 5.825,00", "2,50%", "€ 145,63"],
            ["2025", "+1,00%", "€ 5.875,00", "2,00%", "€ 117,50"],
          ]}
        />
        <p className="text-sm text-muted-foreground">
          Risultato: capitale rivalutato <strong className="font-mono">€ 5.875,00</strong> + interessi legali <strong className="font-mono">€ 623,52</strong> = totale dovuto <strong className="font-mono">€ 6.498,52</strong>. La sola inflazione del 2022 (+8,1%) ha prodotto il salto più significativo nella rivalutazione.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-6">Canoni di locazione (L. 392/1978)</h3>
        <p className="text-base leading-relaxed">
          L'{" "}
          <InlineNormLink text="art. 32 della L. 392/1978" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1978-07-27;392" />{" "}
          consente l'aggiornamento annuale del canone nella misura massima del <strong>75%</strong> della variazione dell'indice FOI ISTAT. Per i contratti a canone libero (L. 431/1998), la misura può arrivare al 100% se previsto contrattualmente.
        </p>
        <AlertBox variant="warning" title="L'aggiornamento non è automatico">
          <p>L'adeguamento ISTAT del canone deve essere <strong>espressamente richiesto dal locatore</strong>. Non opera retroattivamente: se il locatore non lo richiede per un anno, quel diritto è perso. Il calcolatore in questa pagina prevede l'opzione «Rivaluta al 75%» per questo caso specifico.</p>
        </AlertBox>

        <h4 className="text-lg text-[oklch(0.30_0.04_250)] font-serif mt-4">Esempio pratico: canone di € 800/mese</h4>
        <p className="text-base leading-relaxed">
          Un contratto di locazione prevede un canone mensile di <strong className="font-mono">€ 800,00</strong> con clausola di aggiornamento ISTAT al 75%. Ecco come si calcola l'adeguamento anno per anno:
        </p>
        <LegalTable
          headers={["Anno", "Variaz. FOI", "75% della variaz.", "Aumento mensile", "Canone aggiornato"]}
          rows={[
            ["2022", "+8,10%", "+6,075%", "€ 48,60", "€ 848,60"],
            ["2023", "+5,70%", "+4,275%", "€ 36,27", "€ 884,87"],
            ["2024", "+1,00%", "+0,750%", "€ 6,64", "€ 891,51"],
            ["2025", "+1,00%", "+0,750%", "€ 6,69", "€ 898,20"],
          ]}
        />
        <p className="text-sm text-muted-foreground">
          In 4 anni, il canone è passato da € 800,00 a <strong className="font-mono">€ 898,20</strong> (+12,3%). L'impennata dell'inflazione nel 2022 ha prodotto l'aumento più consistente. Se il locatore non avesse richiesto l'adeguamento nel 2022, avrebbe perso quei € 48,60/mese — circa € 583 in un anno.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-6">Assegno di mantenimento</h3>
        <p className="text-base leading-relaxed">
          L'{" "}
          <InlineNormLink text="art. 5, comma 7, L. 898/1970" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1970-12-01;898" />{" "}
          stabilisce che la sentenza di divorzio «deve stabilire anche un criterio di adeguamento automatico dell'assegno, almeno con riferimento agli indici di svalutazione monetaria». Per costante orientamento della Cassazione, questa norma si applica per analogia anche all'assegno di mantenimento nella separazione personale. A differenza dei canoni di locazione, l'adeguamento è <strong>automatico</strong> e non richiede domanda giudiziale.
        </p>

        <h4 className="text-lg text-[oklch(0.30_0.04_250)] font-serif mt-4">Esempio pratico: assegno di € 500/mese</h4>
        <p className="text-base leading-relaxed">
          Un assegno di mantenimento di <strong className="font-mono">€ 500,00</strong> mensili stabilito nel 2021 si adegua al 100% della variazione FOI:
        </p>
        <LegalTable
          headers={["Anno", "Variaz. FOI", "Aumento mensile", "Assegno aggiornato", "Differenza annua"]}
          rows={[
            ["2022", "+8,10%", "€ 40,50", "€ 540,50", "€ 486,00"],
            ["2023", "+5,70%", "€ 28,50", "€ 569,00", "€ 828,00"],
            ["2024", "+1,00%", "€ 5,00", "€ 574,00", "€ 888,00"],
            ["2025", "+1,00%", "€ 5,00", "€ 579,00", "€ 948,00"],
          ]}
        />
        <p className="text-sm text-muted-foreground">
          L'assegno è passato da € 500 a <strong className="font-mono">€ 579,00</strong> in 4 anni (+15,8%). L'adeguamento opera automaticamente: il coniuge obbligato deve versare l'importo rivalutato senza che il beneficiario debba fare istanza. La colonna «Differenza annua» mostra il cumulativo annuo rispetto all'importo originario.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-6">TFR (art. 2120 c.c.)</h3>
        <p className="text-base leading-relaxed">
          L'{" "}
          <InlineNormLink text="art. 2120 c.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120" />{" "}
          , come modificato dalla L. 297/1982, prevede una rivalutazione specifica per il TFR con formula propria: <strong className="font-mono">1,5% fisso + 75% della variazione annua FOI</strong>, calcolata su base composta al 31 dicembre di ogni anno (esclusa la quota maturata nell'anno in corso).
        </p>

        <h4 className="text-lg text-[oklch(0.30_0.04_250)] font-serif mt-4">Esempio pratico: TFR accantonato di € 20.000</h4>
        <p className="text-base leading-relaxed">
          Un lavoratore ha un TFR accantonato di <strong className="font-mono">€ 20.000,00</strong> al 31/12/2022. La rivalutazione per gli anni successivi si calcola con la formula dell'art. 2120 c.c.: <strong className="font-mono">1,5% fisso + 75% × variazione FOI</strong>, applicata su base composta:
        </p>
        <LegalTable
          headers={["Anno", "Variaz. FOI", "75% FOI", "Tasso totale", "Rivalutazione", "TFR a fine anno"]}
          rows={[
            ["2023", "+5,70%", "4,275%", "5,775%", "€ 1.155,00", "€ 21.155,00"],
            ["2024", "+1,00%", "0,750%", "2,250%", "€ 475,99", "€ 21.630,99"],
            ["2025", "+1,00%", "0,750%", "2,250%", "€ 486,70", "€ 22.117,69"],
          ]}
        />
        <p className="text-sm text-muted-foreground">
          In 3 anni, il TFR è passato da € 20.000 a <strong className="font-mono">€ 22.117,69</strong> (+10,6%). Si noti la differenza con la rivalutazione ordinaria: il TFR si rivaluta su base composta (la rivalutazione del 2024 si calcola sui € 21.155, non sui € 20.000 originari) e include una quota fissa dell'1,5% che garantisce un minimo anche in periodi di deflazione.
        </p>

        <AlertBox variant="info">
          <p>La rivalutazione del TFR è <strong>su base composta</strong>, a differenza della rivalutazione monetaria ordinaria che si calcola sul capitale iniziale (non composta). Questo significa che la rivalutazione del TFR produce un effetto cumulativo maggiore nel tempo.</p>
        </AlertBox>
      </div>

      {/* ===== ERRORI COMUNI ===== */}
      <SectionTitle id="errori-comuni" icon={AlertTriangle} title="Errori Comuni nel Calcolo" subtitle="Cosa evitare per un calcolo corretto" />
      <div className="space-y-4">
        <FeatureGrid items={[
          { title: "Confondere rivalutazione con anatocismo", desc: "La rivalutazione anno per anno sul capitale iniziale NON è anatocismo. L'anatocismo è il calcolo di interessi sugli interessi, vietato ex art. 1283 c.c. salvo casi tassativi." },
          { title: "Rivalutare automaticamente i debiti di valuta", desc: "Per i debiti di valuta la rivalutazione non è automatica: serve la prova del maggior danno ex art. 1224, comma 2, c.c. Solo i debiti di valore sono automaticamente rivalutabili." },
          { title: "Usare l'indice NIC anziché il FOI", desc: "L'indice con valore legale per le rivalutazioni è il FOI al netto dei tabacchi. L'indice NIC misura l'inflazione complessiva ma non produce effetti giuridici per le rivalutazioni." },
          { title: "Dimenticare il coefficiente di raccordo", desc: "Quando si rivaluta tra periodi con basi ISTAT diverse (es. 2015=100 e 2025=100) è indispensabile applicare il coefficiente di raccordo, altrimenti il risultato è errato." },
          { title: "Non richiedere l'aggiornamento del canone", desc: "Per le locazioni, l'aggiornamento ISTAT non è automatico: il locatore deve richiederlo espressamente per ogni annualità, altrimenti il diritto è perso." },
          { title: "Capitalizzare gli interessi sulla rivalutazione", desc: "Nel calcolo congiunto interessi + rivalutazione, gli interessi NON vanno capitalizzati. Si calcolano sulla somma rivalutata, ma non producono ulteriori interessi (no anatocismo)." },
        ]} />
      </div>

      {/* ===== NOVITÀ 2026 ===== */}
      <SectionTitle id="novita-2026" icon={Sparkles} title="Novità 2025-2026" subtitle="Tasso legale, nuova base ISTAT e indici recenti" />
      <div className="space-y-4">
        <AlertBox variant="success" title="Tasso di interesse legale 2026: 1,60%">
          <p>Con il DM Economia 10 dicembre 2025, pubblicato in G.U. n. 289 del 13 dicembre 2025, il tasso di interesse legale è stato fissato all'<strong>1,60%</strong> in ragione d'anno dal 1° gennaio 2026. Era il 2,00% nel 2025, il 2,50% nel 2024 e il 5,00% nel 2023.</p>
        </AlertBox>

        <AlertBox variant="success" title="Nuova base ISTAT 2025=100">
          <p>Dal gennaio 2026, gli indici FOI sono espressi nella nuova base <strong>2025=100</strong>, sostituendo la precedente base 2015=100. Il coefficiente di raccordo è <strong>1,214</strong>. Ultimo indice FOI disponibile: febbraio 2026 = 100,9 (variazione annua +1,1%).</p>
        </AlertBox>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-6">Evoluzione del tasso legale 2020-2026</h3>
        <p className="text-base leading-relaxed">
          Il tasso di interesse legale ha subito variazioni significative negli ultimi anni, con un picco nel 2023 e una progressiva discesa. Questa evoluzione ha un impatto diretto sul calcolo congiunto di rivalutazione e interessi:
        </p>
        <LegalTable
          headers={["Anno", "Tasso legale", "Variazione FOI", "Impatto pratico"]}
          rows={[
            ["2020", "0,05%", "-0,20%", "Interessi quasi nulli, lieve deflazione"],
            ["2021", "0,01%", "+1,90%", "Interessi irrilevanti, inflazione moderata"],
            ["2022", "1,25%", "+8,10%", "Inflazione record: la rivalutazione pesa molto più degli interessi"],
            ["2023", "5,00%", "+5,70%", "Tasso legale ai massimi dal 1998: interessi elevati su capitali rivalutati"],
            ["2024", "2,50%", "+1,00%", "Normalizzazione: calo congiunto del tasso legale e dell'inflazione"],
            ["2025", "2,00%", "+1,00%", "Trend discendente, inflazione stabile"],
            ["2026", "1,60%", "+1,1% (feb.)", "Tasso ai minimi dal 2019, inflazione sotto controllo"],
          ]}
        />
        <p className="text-base leading-relaxed">
          La tabella evidenzia un fatto importante per la pratica forense: nel biennio 2022-2023, la combinazione di alta inflazione e alto tasso legale ha prodotto gli importi più significativi nel calcolo di rivalutazione e interessi. Un credito di lavoro maturato nel 2020 e liquidato nel 2025 avrà una componente di rivalutazione dominante rispetto agli interessi, dato che l'inflazione cumulata (+17,5%) supera di gran lunga gli interessi composti nello stesso periodo.
        </p>
      </div>

      {/* ===== FONTI E RIFERIMENTI ===== */}
      <SectionTitle id="fonti" icon={Link2} title="Fonti e Riferimenti" subtitle="Fonti istituzionali utilizzate per questa guida" />
      <div className="space-y-3">
        <p className="text-base leading-relaxed">Questa guida si basa sulle seguenti fonti istituzionali:</p>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="https://www.normattiva.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              Normattiva.it
            </a>{" "}
            — Testo vigente degli articoli 1224, 1277, 1283, 1284 c.c., art. 429 c.p.c., art. 2120 c.c.
          </li>
          <li>
            <a href="https://rivaluta.istat.it/" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              ISTAT Rivaluta
            </a>{" "}
            — Calcolatore ufficiale delle rivalutazioni monetarie con indici FOI mensili
          </li>
          <li>
            <a href="https://www.istat.it/dati/calcolatori/rivalutazioni/" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              ISTAT — Calcolatori e rivalutazioni
            </a>{" "}
            — Tavole con indici mensili FOI, coefficienti di raccordo e variazioni annuali
          </li>
          <li>
            <a href="https://www.gazzettaufficiale.it/eli/id/2025/12/13/25A06705/sg" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              G.U. n. 289 del 13/12/2025
            </a>{" "}
            — DM Economia 10 dicembre 2025: tasso di interesse legale 2026 all'1,60%
          </li>
          <li>
            <a href="https://www.altalex.com/guide/rivalutazione-monetaria" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
              Altalex — Guida rivalutazione monetaria
            </a>{" "}
            — Guida esplicativa su debiti di valore, debiti di valuta, crediti soggetti a rivalutazione
          </li>
        </ul>
      </div>

      {/* ===== FAQ ===== */}
      <SectionTitle id="faq" icon={HelpCircle} title="Domande Frequenti (FAQ)" subtitle="20 risposte su rivalutazione monetaria, interessi e indici ISTAT" />
      <FAQ items={faqData} />

      {/* ===== NORMATIVA ===== */}
      <SectionTitle id="normativa" icon={BookOpen} title="Normativa di Riferimento" />
      <NormativaRefTable items={normativaRiferimento} />
    </ToolLayout>
  );
}
