import { Lock, BookOpen, Calculator, HelpCircle, AlertTriangle, Scale, ListChecks, FileText, ShieldAlert, Gavel, CalendarClock, Users } from "lucide-react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { LegalTable } from "@/components/shared/LegalTable";
import { NormativaQuote } from "@/components/shared/NormativaQuote";
import { InlineNormLink } from "@/components/shared/InlineNormLink";
import { FAQ } from "@/components/shared/FAQ";
import { AlertBox } from "@/components/shared/AlertBox";
import { BulletList } from "@/components/shared/BulletList";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";
import Calcolatore from "@/components/calcolo-fine-pena-liberazione-anticipata/Calcolatore";
import {
  normativaRiferimento,
  sections,
} from "@/data/calcolo-fine-pena-liberazione-anticipata/finePenaData";
import { faqData } from "@/data/calcolo-fine-pena-liberazione-anticipata/faqData";
import { JsonLd, articleSchema, webApplicationSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "Calcolo Fine Pena Liberazione Anticipata Art. 54 O.P. 2026",
  description:
    "Calcolatore fine pena art. 54 O.P.: 45 giorni per semestre, fine pena virtuale (D.L. 92/2024), presofferto, interruzioni. Corte Cost. 201/2025.",
  alternates: { canonical: "/calcolo-fine-pena-liberazione-anticipata" },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/calcolo-fine-pena-liberazione-anticipata",
    title: "Calcolo Fine Pena Liberazione Anticipata Art. 54 O.P. 2026",
    description:
      "Calcolatore fine pena art. 54 O.P.: 45 giorni per semestre, fine pena virtuale (D.L. 92/2024), presofferto, interruzioni. Corte Cost. 201/2025.",
    images: [{ url: HERO_IMG, width: 1920, height: 1072, alt: "Calcolo Fine Pena con Liberazione Anticipata" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolo Fine Pena Liberazione Anticipata Art. 54 O.P. 2026",
    description:
      "Calcolatore art. 54 O.P. con fine pena virtuale obbligatorio dal 2024 (art. 656 c.p.p. c. 10-bis). Aggiornato a Corte Cost. 201/2025.",
  },
};

const toolConfig: ToolConfig = {
  slug: "calcolo-fine-pena-liberazione-anticipata",
  title: "Calcolo Fine Pena con Liberazione Anticipata 2026",
  shortTitle: "Calcolo Fine Pena",
  icon: Lock,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroImageAlt: "Calcolo Fine Pena con Liberazione Anticipata — art. 54 O.P.",
  heroEyebrow: "Liberazione anticipata, fine pena virtuale e benefici penitenziari",
  heroTitle: "Calcolo Fine Pena con Liberazione Anticipata 2026",
  heroDescription:
    "Calcolatore del fine pena ai sensi dell'art. 54 O.P. con detrazione di 45 giorni per ogni semestre di pena scontata. Gestisce presofferto in custodia cautelare, detenzione domiciliare, interruzioni, fine pena virtuale obbligatorio dal 2024 (art. 656 c.p.p. comma 10-bis) e D.L. 92/2024 nella lettura della Corte Cost. sent. 201/2025.",
  heroReference:
    "Art. 54 O.P. — Art. 4 D.L. 146/2013 — D.L. 92/2024 — Art. 656 c.p.p. c. 10-bis — Corte Cost. 201/2025",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "Il calcolo della liberazione anticipata è facoltativo e indicativo: non sostituisce la valutazione del magistrato di sorveglianza sulla partecipazione del condannato all'opera di rieducazione.",
    "Aggiornato alla sentenza Corte Costituzionale n. 201 del 29 dicembre 2025, che ha ripristinato il diritto di richiedere la liberazione anticipata semestre per semestre.",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    { label: "Corte Costituzionale", url: "https://www.cortecostituzionale.it" },
    { label: "Ministero della Giustizia", url: "https://www.giustizia.it" },
    { label: "Sistema Penale (rivista)", url: "https://www.sistemapenale.it" },
    { label: "Brocardi.it (codici)", url: "https://www.brocardi.it" },
  ],
};

export default function CalcoloFinePenaPage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ===== Structured Data ===== */}
      <JsonLd
        data={articleSchema({
          headline: "Calcolo Fine Pena con Liberazione Anticipata 2026: Art. 54 O.P., Fine Pena Virtuale e Corte Cost. 201/2025",
          description:
            "Guida completa al calcolo del fine pena con liberazione anticipata in Italia. Art. 54 Ordinamento Penitenziario (45 giorni per semestre), liberazione anticipata speciale ex D.L. 146/2013, fine pena virtuale obbligatorio dal 2024 (art. 656 c.p.p. c. 10-bis), riforma D.L. 92/2024 e sentenza Corte Costituzionale n. 201/2025, interruzioni della pena, presofferto, reati ostativi (art. 4-bis O.P.), procedura e revoca.",
          path: "/calcolo-fine-pena-liberazione-anticipata",
          datePublished: "2026-05-18",
          dateModified: "2026-05-18",
          image: HERO_IMG,
          sections: [
            "Che cos'è la liberazione anticipata e come funziona",
            "Come si calcola il fine pena con la liberazione anticipata",
            "La liberazione anticipata è di 45 o 75 giorni nel 2026",
            "Che cos'è il fine pena virtuale e perché è obbligatorio dal 2024",
            "Quali periodi si conteggiano (presofferto, custodia cautelare, domiciliari)",
            "Cosa succede in caso di interruzioni della pena",
            "Come si richiede e chi decide sulla liberazione anticipata",
            "Cosa cambia con la riforma D.L. 92/2024 e la sentenza Corte Cost. 201/2025",
            "Quali reati sono esclusi dalla liberazione anticipata (art. 4-bis O.P.)",
            "Esempi pratici di calcolo del fine pena",
            "Domande Frequenti (FAQ)",
            "Normativa di Riferimento",
            "Fonti e Riferimenti",
          ],
        })}
      />

      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Fine Pena con Liberazione Anticipata",
          description:
            "Calcolatore online del fine pena con detrazione per liberazione anticipata art. 54 O.P. Gestisce presofferto, detenzione domiciliare, interruzioni della pena, fine pena virtuale e liberazione anticipata speciale (75 giorni per i semestri 2013-2015).",
          path: "/calcolo-fine-pena-liberazione-anticipata",
          applicationCategory: "LegalService",
          featureList: [
            "Calcolo fine pena nominale e con LA",
            "Fine pena virtuale (art. 656 c.p.p. c. 10-bis)",
            "Detrazione 45 giorni per semestre (art. 54 O.P.)",
            "Liberazione anticipata speciale 75 giorni (2013-2015)",
            "Gestione periodi presofferto (custodia cautelare, domiciliari)",
            "Gestione interruzioni della pena (salute, ricovero, sospensione)",
            "Modalita solo semestri completi vs cumulo frazioni",
            "Tabella dettaglio semestri utili",
          ],
        })}
      />

      {/* ===== Calcolatore ===== */}
      <Calcolatore />

      {/* ===== H2 #1 — Che cos'è? ===== */}
      <SectionTitle
        id="che-cos-e"
        icon={Scale}
        title="Che cos'è la liberazione anticipata e come funziona?"
        subtitle="Beneficio penitenziario premiale di natura rieducativa (art. 54 O.P.)"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>liberazione anticipata</strong> è un beneficio penitenziario di natura premiale,
          disciplinato dall’{" "}
          <InlineNormLink
            text="art. 54 della Legge 26 luglio 1975, n. 354 (Ordinamento Penitenziario)"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art54"
          />
          , che riconosce al condannato a pena detentiva una <strong>detrazione di 45 giorni per ogni semestre di pena scontata</strong> in cui abbia dato prova di partecipazione all’opera di rieducazione.
          È uno degli strumenti centrali del trattamento penitenziario, finalizzato al reinserimento sociale del condannato secondo il principio costituzionale di rieducazione della pena (art. 27, comma 3, Cost.).
        </p>

        <p className="text-base leading-relaxed">
          La <strong>Corte Costituzionale</strong>, con la recente{" "}
          <a
            href="https://www.cortecostituzionale.it/scheda-pronuncia/2025/201"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
          >
            sentenza n. 201 del 29 dicembre 2025
          </a>
          , l’ha definita <em>“istituto chiave nel perseguimento della finalità rieducativa della pena”</em>. Il beneficio rappresenta il riscontro periodico — semestre per semestre — della positività del percorso trattamentale del detenuto.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art54">
          Art. 54 c. 1 O.P.: “Al condannato a pena detentiva che ha dato prova di partecipazione all’opera di rieducazione è concessa, quale riconoscimento di tale partecipazione, e ai fini del suo più efficace reinserimento nella società, una detrazione di quarantacinque giorni per ogni singolo semestre di pena scontata. A tal fine è valutato anche il periodo trascorso in stato di custodia cautelare o di detenzione domiciliare”.
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          I <strong>presupposti</strong> per la concessione sono fissati dall’{" "}
          <InlineNormLink
            text="art. 103 D.P.R. 230/2000"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2000-06-30;230~art103"
          />{" "}
          (Regolamento di esecuzione O.P.):
        </p>

        <BulletList
          items={[
            "Regolarità della condotta carceraria",
            "Partecipazione attiva agli interventi del piano trattamentale",
            "Dimostrazione di responsabilità sociale",
            "Capacità di progettare autonomamente il proprio futuro",
            "Presa di distanza da comportamenti devianti",
          ]}
        />

        <p className="text-base leading-relaxed">
          La valutazione comportamentale è affidata alla direzione dell’istituto penitenziario, che redige una <strong>relazione di sintesi</strong> a corredo di ogni richiesta di liberazione anticipata. Tale relazione costituisce il principale elemento probatorio a disposizione del magistrato di sorveglianza.
        </p>

        <AlertBox variant="info" title="Effetto sui benefici premiali">
          <p>
            La parte di pena detratta ai sensi del comma 1 si considera <strong>scontata</strong> anche ai fini del computo per accedere a <em>permessi premio</em> (
            <InlineNormLink text="art. 30-ter O.P." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art30ter" />
            ), <em>semilibertà</em> (
            <InlineNormLink text="art. 50 O.P." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art50" />
            ) e <em>liberazione condizionale</em> (
            <InlineNormLink text="art. 176 c.p." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:codice.penale:1930-10-19;1398~art176" />
            ). La disposizione si applica anche ai condannati all’ergastolo (art. 54 c. 4 ultima frase O.P.).
          </p>
        </AlertBox>
      </div>

      {/* ===== H2 #2 — Come si calcola? ===== */}
      <SectionTitle
        id="come-si-calcola"
        icon={Calculator}
        title="Come si calcola il fine pena con la liberazione anticipata?"
        subtitle="Formula, semestri utili e modalità di computo"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il calcolo del fine pena con liberazione anticipata segue una <strong>formula semplice</strong> nei suoi tratti essenziali, ma richiede attenzione a diversi elementi: il punto di inizio della detenzione, la durata della pena, gli eventuali periodi di presofferto, le interruzioni e la modalità di computo dei semestri.
        </p>

        <div
          className="bg-[oklch(0.98_0.005_85)] border border-[oklch(0.92_0.01_85)] p-5"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Formula</p>
          <p className="text-lg font-mono text-[oklch(0.25_0.04_250)]">
            Fine pena con LA = Fine pena nominale − (semestri completi × 45 giorni)
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Per i semestri rientranti nel periodo 23/12/2013 — 23/12/2015 si applica la <em>liberazione anticipata speciale</em> di 75 giorni (art. 4 D.L. 146/2013).
          </p>
        </div>

        <p className="text-base leading-relaxed">
          Il <strong>semestre di pena scontata</strong> si calcola dalla data di inizio della detenzione (non dall’anno solare). Sei mesi pieni di pena scontata equivalgono a un semestre utile. Ogni semestre maturato dà diritto a 45 giorni di detrazione, purché ricorrano i presupposti di partecipazione al percorso rieducativo.
        </p>

        <p className="text-base leading-relaxed">
          Esistono <strong>due modalità di computo</strong> in presenza di interruzioni della pena:
        </p>

        <LegalTable
          headers={["Modalità", "Comportamento in caso di interruzione", "Quando si applica"]}
          rows={[
            [
              "Solo semestri completi",
              "L'interruzione azzera il semestre in corso. Il nuovo semestre ricomincia dopo la fine dell'interruzione.",
              "Quando la giurisprudenza richiede continuità della partecipazione rieducativa",
            ],
            [
              "Cumulo frazioni",
              "I segmenti di pena scontati prima e dopo l'interruzione si sommano fino al raggiungimento dei 6 mesi.",
              "Quando l'interruzione è breve e non incide sulla valutazione complessiva",
            ],
          ]}
          className="mb-4"
        />

        <AlertBox variant="info" title="Esempio rapido — 3 anni di pena">
          <p>
            Pena: <strong>3 anni</strong> (6 semestri di pena scontata). Detrazione: 6 × 45 = <span className="font-mono">270 giorni</span> (circa 9 mesi). Una detenzione iniziata il <strong>1° gennaio 2024</strong> avrebbe fine pena nominale al <strong>31 dicembre 2026</strong> (calendario comune ex art. 14 c.p.), e fine pena virtuale intorno al <strong>5 aprile 2026</strong>.
          </p>
        </AlertBox>
      </div>

      {/* ===== H2 #3 — 45 o 75 giorni? ===== */}
      <SectionTitle
        id="45-o-75-giorni"
        icon={CalendarClock}
        title="La liberazione anticipata è di 45 o 75 giorni nel 2026?"
        subtitle="Ordinaria vs speciale (D.L. 146/2013)"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Nel 2026 si applica la <strong>liberazione anticipata ordinaria di 45 giorni</strong> per ogni semestre di pena scontata. La <strong>liberazione anticipata speciale di 75 giorni</strong>, introdotta dall’{" "}
          <InlineNormLink
            text="art. 4 del D.L. 23 dicembre 2013, n. 146"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2013-12-23;146~art4"
          />{" "}
          (conv. L. 10/2014), <strong>non è più applicabile come regime ordinario</strong>: era prevista soltanto per un periodo di due anni dall’entrata in vigore del decreto, ovvero dal 23 dicembre 2013 al 23 dicembre 2015.
        </p>

        <p className="text-base leading-relaxed">
          Tuttavia, la norma continua ad avere effetti residui per i <strong>semestri rientranti nella finestra temporale</strong> (23/12/2013 — 23/12/2015, con retroattività al 1° gennaio 2010 per chi aveva continuato a dare prova di partecipazione al percorso rieducativo). Per questi semestri, ai condannati non esclusi dall’art. 4-bis O.P., si applica la detrazione di 75 giorni.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2013-12-23;146~art4">
          Art. 4 D.L. 146/2013: “Ad esclusione dei condannati per taluno dei delitti previsti dall’articolo 4-bis della legge 26 luglio 1975, n. 354... per un periodo di due anni dalla data di entrata in vigore del presente decreto, la detrazione di pena concessa con la liberazione anticipata... è pari a settantacinque giorni per ogni singolo semestre di pena scontata”.
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          Il contesto storico dell’intervento fu emergenziale: la cosiddetta <strong>“svuota carceri”</strong> rispondeva alla condanna inflitta all’Italia dalla Corte Europea dei Diritti dell’Uomo con la sentenza Torreggiani (8 gennaio 2013) per il sovraffollamento carcerario sistemico.
        </p>

        <LegalTable
          headers={["Regime", "Detrazione per semestre", "Periodo di applicazione", "Esclusi"]}
          rows={[
            ["Liberazione anticipata ordinaria (art. 54 O.P.)", "45 giorni", "Sempre vigente", "Nessuna esclusione generale (salvo specifiche preclusioni)"],
            ["Liberazione anticipata speciale (art. 4 D.L. 146/2013)", "75 giorni", "23/12/2013 — 23/12/2015 (retro 1/1/2010)", "Condannati per reati ex art. 4-bis O.P."],
          ]}
          className="mb-4"
        />

        <AlertBox variant="warning" title="Errore frequente">
          <p>
            Nel 2026 <strong>non è applicabile la detrazione di 75 giorni</strong> ai semestri di nuova maturazione. Chi rivendica oggi 75 giorni per semestri post-2015 sta commettendo un errore di diritto. La giurisprudenza della{" "}
            <a
              href="https://www.giurisprudenzapenale.com/2018/01/14/liberazione-anticipata-speciale-nei-2-anni-successivi-allentrata-in-vigore-del-d-l-146-2013-il-beneficio-comporta-anche-per-i-semestri-antecedenti-a-tale-data-una-detrazione-di-pena-pari-a-75-g/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2"
            >
              Cass. Sez. I, sent. n. 356/2018
            </a>{" "}
            ha confermato che i 75 giorni si applicano automaticamente solo nel biennio originario.
          </p>
        </AlertBox>
      </div>

      {/* ===== H2 #4 — Fine pena virtuale ===== */}
      <SectionTitle
        id="fine-pena-virtuale"
        icon={CalendarClock}
        title="Che cos'è il fine pena virtuale e perché è obbligatorio dal 2024?"
        subtitle="Riforma D.L. 92/2024 e nuovo art. 656 c.p.p. comma 10-bis"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>fine pena virtuale</strong> è la <em>data teorica di fine pena</em> calcolata come se tutti i semestri futuri venissero riconosciuti per la liberazione anticipata. Rappresenta una proiezione massima del beneficio possibile, distinta dalla fine pena effettiva — che dipende invece dalla concessione concreta della LA semestre per semestre.
        </p>

        <p className="text-base leading-relaxed">
          Dal <strong>5 luglio 2024</strong>, data di entrata in vigore del <InlineNormLink text="D.L. 4 luglio 2024, n. 92" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2024-07-04;92~art5" /> (convertito nella L. 112/2024), il <strong>pubblico ministero ha l’obbligo</strong> di indicare il fine pena virtuale nell’ordine di esecuzione. Lo prevede il nuovo comma 10-bis dell’art. 656 c.p.p., introdotto dall’art. 5, comma 3, del decreto.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:codice.procedura.penale:1988-09-22;447~art656">
          Art. 656 c.p.p., comma 10-bis: “Fermo il disposto del comma 4-bis, nell’ordine di esecuzione la pena da espiare è indicata computando le detrazioni previste dall’articolo 54 della legge 26 luglio 1975, n. 354, in modo tale che siano specificamente indicate le detrazioni e sia evidenziata anche la pena da espiare senza le detrazioni”.
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          La norma richiede tre indicazioni nell’ordine di esecuzione del PM:
        </p>

        <BulletList
          items={[
            "La pena da espiare con le detrazioni computate (fine pena virtuale)",
            "L'indicazione specifica e analitica delle detrazioni applicate",
            "La pena da espiare al netto delle detrazioni (fine pena nominale)",
          ]}
        />

        <AlertBox variant="warning" title="Attenzione: virtuale ≠ effettivo">
          <p>
            Il <strong>fine pena virtuale</strong> indicato nell’ordine di esecuzione è una proiezione teorica. La <strong>fine pena effettiva</strong> dipende dalla concessione concreta della liberazione anticipata da parte del magistrato di sorveglianza per ogni singolo semestre. Confondere le due date è uno degli errori più frequenti: la data effettiva di scarcerazione può discostarsi dal fine pena virtuale se il condannato non ottiene tutti i semestri (per violazioni disciplinari, sanzioni, mancata partecipazione, ecc.).
          </p>
        </AlertBox>

        <p className="text-base leading-relaxed">
          La riforma del 2024 mirava a fornire al condannato una visione immediata e trasparente del proprio percorso, evitando incertezze sulla durata effettiva della detenzione. Tuttavia, ha generato il rischio — segnalato dalla dottrina — di confondere la data teorica con quella effettiva. Per questo, il legislatore ha imposto la <strong>distinzione esplicita</strong> tra pena con detrazioni e pena senza detrazioni nell’ordine di esecuzione.
        </p>
      </div>

      {/* ===== H2 #5 — Periodi conteggiabili ===== */}
      <SectionTitle
        id="periodi-conteggiabili"
        icon={ListChecks}
        title="Quali periodi si conteggiano? Presofferto, custodia cautelare e domiciliari"
        subtitle="Base di calcolo della liberazione anticipata (art. 54 c. 1 O.P.)"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L’art. 54 c. 1 O.P. è esplicito: ai fini della liberazione anticipata <em>“è valutato anche il periodo trascorso in stato di custodia cautelare o di detenzione domiciliare”</em>. Il <strong>presofferto</strong> — ovvero il tempo già scontato prima della condanna definitiva — concorre quindi pienamente al computo dei semestri utili.
        </p>

        <LegalTable
          headers={["Periodo", "Norma", "Conta per LA ordinaria (45 gg)", "Conta per LA speciale (75 gg)"]}
          rows={[
            ["Custodia cautelare in carcere", "Art. 285 c.p.p.", "✅ Sì (art. 54 c. 1 O.P.)", "✅ Sì (se nel biennio 2013-2015)"],
            ["Arresti domiciliari (cautelari)", "Art. 284 c.p.p.", "✅ Sì (equiparati alla custodia)", "✅ Sì"],
            ["Detenzione domiciliare", "Art. 47-ter O.P.", "✅ Sì (art. 54 c. 1 O.P.)", "❌ No incremento speciale 30 gg"],
            ["Esecuzione presso domicilio (L. 199/2010)", "Art. 1 L. 199/2010", "✅ Sì", "❌ No incremento speciale 30 gg"],
            ["Affidamento in prova al servizio sociale", "Art. 47 O.P.", "✅ Sì (con partecipazione)", "❌ No (Cass. 17095/2024)"],
            ["Semilibertà", "Art. 50 O.P.", "✅ Sì (in parte)", "❌ No incremento speciale"],
            ["Detenzione domiciliare speciale (madri)", "Art. 47-quinquies O.P.", "✅ Sì", "Limitato"],
          ]}
          className="mb-4"
        />

        <p className="text-base leading-relaxed">
          La <strong>custodia cautelare in carcere</strong> (art. 285 c.p.p.) e gli <strong>arresti domiciliari</strong> (art. 284 c.p.p.) costituiscono presofferto e si computano dal primo giorno di detenzione cautelare, anche se intervenuti molto prima della sentenza di condanna definitiva. È una regola pacifica della giurisprudenza.
        </p>

        <p className="text-base leading-relaxed">
          La <strong>detenzione domiciliare</strong> (art. 47-ter O.P.) è espressamente equiparata alla custodia cautelare dall’art. 54 c. 1 O.P. La <strong>L. 199/2010</strong>, che consente l’esecuzione presso il domicilio delle pene non superiori a 18 mesi, è altrettanto computabile.
        </p>

        <AlertBox variant="info" title="Misure alternative e LA speciale">
          <p>
            La Cassazione (sent. n. 17095/2024) ha chiarito che l’incremento da 45 a 75 giorni (LA speciale, periodo 2013-2015) <strong>non si applica</strong> ai periodi trascorsi in affidamento in prova al servizio sociale, detenzione domiciliare o esecuzione presso il domicilio. Il beneficio speciale era riservato ai periodi di pena effettivamente scontati in carcere.
          </p>
        </AlertBox>
      </div>

      {/* ===== H2 #6 — Interruzioni ===== */}
      <SectionTitle
        id="interruzioni"
        icon={AlertTriangle}
        title="Cosa succede in caso di interruzioni della pena?"
        subtitle="Otto categorie di sospensione del decorso (artt. 146-148 c.p. e ss.)"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Le <strong>interruzioni della pena</strong> sono situazioni giuridicamente rilevanti che sospendono il decorso del tempo di esecuzione e, conseguentemente, anche il computo dei semestri utili alla liberazione anticipata. I giorni di interruzione <strong>non si computano</strong> e, a seconda della modalità scelta, possono azzerare il semestre in corso.
        </p>

        <p className="text-base leading-relaxed">
          La giurisprudenza e la prassi penitenziaria distinguono otto principali categorie di interruzione:
        </p>

        <LegalTable
          headers={["Tipo di interruzione", "Norma di riferimento", "Effetto"]}
          rows={[
            ["Sospensione per gravi motivi di salute", "Art. 147 c.p. + art. 684 c.p.p.", "La pena non decorre durante il differimento"],
            ["Differimento per gravidanza/maternità", "Art. 146 c.p.", "Differimento obbligatorio (donna incinta o figlio < 1 anno)"],
            ["Ricovero in luogo di cura per infermità psichica", "Art. 148 c.p.", "Sospensione finché dura il ricovero"],
            ["Affidamento terapeutico tossicodipendenze", "Art. 94 DPR 309/1990 (con sospensione)", "Sospensione fintanto che il programma è in corso"],
            ["Periodo di prova in liberazione condizionale", "Art. 176 c.p.", "Il tempo in prova non vale come pena scontata"],
            ["Sospensione decisa dal giudice dell'esecuzione", "Art. 670 c.p.p.", "Decorso fermo per la durata della sospensione"],
            ["Sospensione per estradizione/consegna", "Art. 19 L. 69/2005 (MAE)", "Decorso sospeso per la fase estradizionale"],
            ["Latitanza o evasione", "Art. 385 c.p.", "Tempo non computabile per la durata"],
          ]}
          className="mb-4"
        />

        <p className="text-base leading-relaxed">
          La sospensione per <strong>gravi motivi di salute</strong> (art. 147 c.p.) è una delle ipotesi più frequenti: il giudice di sorveglianza dispone il differimento dell’esecuzione quando il condannato si trova in condizioni di grave infermità fisica incompatibili con la detenzione. Analoga è la disciplina del <strong>ricovero in luogo di cura per infermità psichica</strong> (art. 148 c.p.).
        </p>

        <p className="text-base leading-relaxed">
          Particolare attenzione merita la <strong>liberazione condizionale</strong> (art. 176 c.p.): l’ammissione sospende l’esecuzione del residuo. Il tempo trascorso in prova non costituisce espiazione della pena ai fini della LA. Se la liberazione condizionale viene revocata, si torna ad eseguire il residuo originario.
        </p>

        <AlertBox variant="warning" title="Effetto sui semestri">
          <p>
            In <strong>modalità “solo semestri completi”</strong>, l’interruzione azzera il conteggio del semestre in corso: il nuovo semestre ricomincia dopo la fine dell’interruzione. In <strong>modalità “cumulo frazioni”</strong>, le frazioni di pena scontate prima e dopo l’interruzione si sommano fino al raggiungimento dei 6 mesi. Il magistrato di sorveglianza decide la modalità applicabile sulla base della giurisprudenza di legittimità e delle circostanze concrete.
          </p>
        </AlertBox>
      </div>

      {/* ===== H2 #7 — Procedura ===== */}
      <SectionTitle
        id="procedura"
        icon={Gavel}
        title="Come si richiede e chi decide sulla liberazione anticipata?"
        subtitle="Magistrato di sorveglianza, ordinanza in camera di consiglio, reclamo"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La liberazione anticipata può essere richiesta dal <strong>condannato in proprio</strong>, dal <strong>difensore di fiducia</strong> o, dopo la riforma del 2024 e la sentenza Corte Cost. 201/2025, viene anche accertata <strong>d’ufficio</strong> dal magistrato di sorveglianza nei 90 giorni antecedenti il fine pena.
        </p>

        <p className="text-base leading-relaxed">
          Il <strong>magistrato di sorveglianza competente</strong> è quello territorialmente designato in base alla località dell’istituto detentivo in cui il condannato si trova. La competenza territoriale è quindi <em>variabile</em>: cambia se il condannato è trasferito da un istituto all’altro durante l’esecuzione.
        </p>

        <p className="text-base leading-relaxed">
          La procedura segue le linee tracciate dall’{" "}
          <InlineNormLink
            text="art. 69-bis O.P."
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art69bis"
          />
          :
        </p>

        <BulletList
          items={[
            "Istanza scritta in carta semplice (no marche da bollo) presentata al magistrato di sorveglianza competente",
            "Documentazione carceraria allegata: relazione di sintesi della direzione, eventuali sanzioni disciplinari, partecipazione ad attività trattamentali",
            "Decisione con ordinanza in camera di consiglio, senza presenza delle parti (rito de plano)",
            "Comunicazione/notifica dell'ordinanza ai soggetti indicati dall'art. 127 c.p.p.",
            "Reclamo al Tribunale di Sorveglianza entro 10 giorni dalla comunicazione/notifica",
            "Comunicazione al PM presso la Corte d'Appello o il Tribunale che ha emesso l'ordine di esecuzione",
            "Aggiornamento del titolo esecutivo da parte del PM (nuovo ordine ex art. 656 c.p.p.)",
          ]}
        />

        <p className="text-base leading-relaxed">
          Non esiste un <strong>termine perentorio</strong> per la decisione del magistrato di sorveglianza. Tipicamente la decisione interviene entro 3-6 mesi dal deposito dell’istanza, ma i tempi possono variare in base al carico dell’ufficio. L’art. 5 c. 1 del D.L. 92/2024 ha introdotto l’obbligo di accertamento d’ufficio entro i 90 giorni antecedenti il fine pena.
        </p>

        <AlertBox variant="info" title="Revoca del beneficio">
          <p>
            Ai sensi dell’<strong>art. 54 c. 3 O.P.</strong>, la condanna per delitto non colposo commesso nel corso dell’esecuzione <em>successivamente</em> alla concessione del beneficio ne comporta la revoca. La revoca opera per il fatto sopravvenuto, non per i fatti pregressi. Comporta il ricalcolo della pena residua e l’aggiornamento dell’ordine di esecuzione.
          </p>
        </AlertBox>
      </div>

      {/* ===== H2 #8 — Riforma 2024 + Corte Cost. ===== */}
      <SectionTitle
        id="riforma-2024"
        icon={FileText}
        title="Cosa cambia con la riforma D.L. 92/2024 e la sentenza Corte Cost. 201/2025?"
        subtitle="Decreto carcere e ripristino del diritto a istanza semestrale"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>D.L. 4 luglio 2024, n. 92</strong> (cosiddetto <em>“decreto carcere”</em>), convertito con la <strong>L. 8 agosto 2024, n. 112</strong>, ha introdotto tre novità procedurali significative in materia di liberazione anticipata. L’art. 5 del decreto ha modificato l’art. 54 O.P. e introdotto il nuovo comma 10-bis dell’art. 656 c.p.p.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2024-07-04;92~art5">
          Art. 5 c. 1 D.L. 92/2024: “All’articolo 54 della legge 26 luglio 1975, n. 354, dopo il comma 2 è inserito il seguente: ’2-bis. Il magistrato di sorveglianza, nei novanta giorni antecedenti al maturare del termine di conclusione della pena da espiare... accerta la sussistenza dei presupposti per la concessione della liberazione anticipata in relazione ai semestri che non sono già stati oggetto di valutazione’”.
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          Le <strong>tre principali novità</strong> della riforma:
        </p>

        <BulletList
          items={[
            "Accertamento d'ufficio del magistrato di sorveglianza entro i 90 giorni antecedenti il fine pena (nuovo art. 54 c. 2-bis O.P.)",
            "Obbligo per il PM di indicare il fine pena virtuale nell'ordine di esecuzione (nuovo art. 656 c.p.p. c. 10-bis)",
            "Nuova disciplina delle comunicazioni: solo mancata concessione e revoca vengono comunicate al PM (modifica art. 54 c. 2 O.P.)",
          ]}
        />

        <p className="text-base leading-relaxed">
          La riforma ha però mostrato subito profili di tensione costituzionale. Diverse magistrature di sorveglianza hanno sollevato la questione di costituzionalità, lamentando che <em>“la novella si risolverebbe in un grave vulnus al senso stesso della liberazione anticipata come cartina di tornasole, non a caso opportunamente semestralizzata, della positività del percorso trattamentale del detenuto”</em>.
        </p>

        <AlertBox variant="success" title="Sentenza Corte Costituzionale n. 201/2025 (29 dicembre 2025)">
          <p>
            La Consulta ha dichiarato l’<strong>illegittimità costituzionale</strong> di parte della riforma 2024, ripristinando il diritto del condannato di richiedere la liberazione anticipata <em>semestre per semestre</em>, senza dover indicare uno specifico interesse diverso. Secondo la Corte, differire la decisione al novantesimo giorno precedente <em>“inciderebbe irrimediabilmente sulla finalità rieducativa dell’istituto, precludendo al detenuto di avere contezza, nel corso dell’esecuzione della pena, della valutazione del magistrato di sorveglianza circa l’effettività dell’adesione al percorso di recupero e risocializzazione”</em>.
          </p>
        </AlertBox>

        <p className="text-base leading-relaxed">
          La sentenza ha quindi <strong>ripristinato lo status quo ante</strong>: il condannato può oggi chiedere la liberazione anticipata al maturare di ogni semestre, ottenendo un riscontro periodico sul proprio percorso. Resta in vigore l’obbligo per il PM di indicare il fine pena virtuale nell’ordine di esecuzione (art. 656 c.p.p. c. 10-bis), che la Corte non ha contestato.
        </p>
      </div>

      {/* ===== H2 #9 — Reati esclusi ===== */}
      <SectionTitle
        id="reati-esclusi"
        icon={ShieldAlert}
        title="Quali reati sono esclusi dalla liberazione anticipata?"
        subtitle="Art. 4-bis O.P. e regime ostativo"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          I condannati per i reati elencati dall’{" "}
          <InlineNormLink
            text="art. 4-bis dell'Ordinamento Penitenziario"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art4bis"
          />{" "}
          sono <strong>esclusi dalla liberazione anticipata speciale</strong> (75 giorni) ma <strong>restano ammessi alla liberazione anticipata ordinaria</strong> (45 giorni), salvo specifiche preclusioni di altro tipo.
        </p>

        <p className="text-base leading-relaxed">
          La lista 4-bis O.P. include — tra le principali categorie:
        </p>

        <BulletList
          items={[
            "Associazione di tipo mafioso (art. 416-bis c.p.) e reati commessi avvalendosi delle relative condizioni",
            "Reati commessi al fine di agevolare associazioni mafiose",
            "Terrorismo, anche internazionale, ed eversione dell'ordine democratico",
            "Sequestro di persona a scopo di estorsione (art. 630 c.p.)",
            "Tratta di persone (art. 601 c.p.) e riduzione o mantenimento in schiavitù (art. 600 c.p.)",
            "Violenza sessuale aggravata, atti sessuali con minorenne",
            "Prostituzione e pornografia minorile (artt. 600-bis, 600-ter c.p.)",
            "Traffico di stupefacenti aggravato (art. 74 DPR 309/1990)",
          ]}
        />

        <p className="text-base leading-relaxed">
          La <strong>Corte Costituzionale</strong>, con la sentenza n. 24 del 2025, ha confermato la <strong>costituzionalità</strong> dell’esclusione dei condannati ex art. 4-bis dalla liberazione anticipata speciale. La Consulta ha ritenuto ragionevole la scelta del legislatore in considerazione della particolare gravità dei reati elencati e della minore probabilità di recupero rieducativo.
        </p>

        <AlertBox variant="info" title="Regime ostativo e collaborazione">
          <p>
            Per i condannati ostativi (art. 4-bis O.P.), l’accesso ai benefici è subordinato — in linea generale — alla <strong>collaborazione con la giustizia</strong> ai sensi dell’art. 58-ter O.P. La Corte Costituzionale (sent. 253/2019) ha però introdotto una <em>deroga</em> per i permessi premio: anche senza collaborazione, possono essere concessi se vi sono elementi tali da escludere collegamenti con la criminalità organizzata.
          </p>
        </AlertBox>
      </div>

      {/* ===== H2 #10 — Esempi pratici ===== */}
      <SectionTitle
        id="esempi"
        icon={Users}
        title="Esempi pratici di calcolo del fine pena"
        subtitle="Cinque scenari tipici con risultato dettagliato"
      />
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Vediamo cinque scenari pratici per illustrare il calcolo del fine pena con liberazione anticipata. I valori sono indicativi e non sostituiscono il calcolo del magistrato di sorveglianza, ma rappresentano fedelmente l’applicazione dell’art. 54 O.P.
        </p>

        {/* Scenario 1 */}
        <div className="bg-[oklch(0.98_0.005_85)] border border-[oklch(0.92_0.01_85)] p-5" style={{ borderRadius: "0.375rem" }}>
          <h3 className="text-base font-serif text-[oklch(0.25_0.04_250)] mb-3">
            Scenario 1 — Pena 3 anni, detenzione dal 1° gennaio 2024
          </h3>
          <BulletList
            items={[
              "Pena: 3 anni = 1.096 giorni (calendario comune, include il 29 febbraio 2024 bisestile)",
              "Fine pena nominale: 31 dicembre 2026",
              "Semestri utili: 6 semestri",
              "Detrazione LA: 6 × 45 = 270 giorni (~9 mesi)",
              "Fine pena virtuale: circa 5 aprile 2026 (270 giorni prima del 31/12/2026)",
            ]}
          />
        </div>

        {/* Scenario 2 */}
        <div className="bg-[oklch(0.98_0.005_85)] border border-[oklch(0.92_0.01_85)] p-5" style={{ borderRadius: "0.375rem" }}>
          <h3 className="text-base font-serif text-[oklch(0.25_0.04_250)] mb-3">
            Scenario 2 — Pena 6 anni con 1 anno di custodia cautelare già scontata
          </h3>
          <BulletList
            items={[
              "Pena: 6 anni = 2.160 giorni",
              "Presofferto in custodia cautelare: 1 anno (2 semestri = 90 giorni LA)",
              "Inizio detenzione effettiva post-custodia: 1° gennaio 2024",
              "Residuo pena: 5 anni",
              "Semestri utili totali (incluso presofferto): 12 semestri",
              "Detrazione LA totale: 12 × 45 = 540 giorni (~18 mesi)",
              "Fine pena nominale: 25 dicembre 2028",
              "Fine pena virtuale: ~5 luglio 2027",
            ]}
          />
        </div>

        {/* Scenario 3 */}
        <div className="bg-[oklch(0.98_0.005_85)] border border-[oklch(0.92_0.01_85)] p-5" style={{ borderRadius: "0.375rem" }}>
          <h3 className="text-base font-serif text-[oklch(0.25_0.04_250)] mb-3">
            Scenario 3 — Pena 10 anni con 8 mesi di detenzione domiciliare
          </h3>
          <BulletList
            items={[
              "Pena: 10 anni = 3.600 giorni",
              "Periodo in detenzione domiciliare: 8 mesi = 240 giorni",
              "In modalità 'solo semestri completi': 1 semestre completo dai domiciliari + frazione residua di 60 giorni",
              "Semestri da carcere: 19 (al netto della frazione domiciliari)",
              "Detrazione LA totale: 20 × 45 = 900 giorni (~30 mesi = 2 anni e mezzo)",
              "Sconto significativo grazie al cumulo del presofferto",
            ]}
          />
        </div>

        {/* Scenario 4 */}
        <div className="bg-[oklch(0.98_0.005_85)] border border-[oklch(0.92_0.01_85)] p-5" style={{ borderRadius: "0.375rem" }}>
          <h3 className="text-base font-serif text-[oklch(0.25_0.04_250)] mb-3">
            Scenario 4 — Pena 4 anni con interruzione di 3 mesi per ricovero psichiatrico
          </h3>
          <BulletList
            items={[
              "Pena: 4 anni = 1.440 giorni",
              "Inizio: 1° gennaio 2024",
              "Ricovero psichiatrico esterno: 1° settembre 2024 — 1° dicembre 2024 (3 mesi)",
              "Modalità 'solo semestri completi': il primo semestre (gen-giu 2024) è valido = 45 gg; il secondo semestre viene interrotto e ricomincia dal 2 dicembre 2024",
              "Modalità 'cumulo frazioni': la frazione di pena pre-interruzione (62 gg) si somma a quella post-interruzione",
              "Differenza tra le due modalità: ~45 giorni di sconto in più con il cumulo",
            ]}
          />
        </div>

        {/* Scenario 5 */}
        <div className="bg-[oklch(0.98_0.005_85)] border border-[oklch(0.92_0.01_85)] p-5" style={{ borderRadius: "0.375rem" }}>
          <h3 className="text-base font-serif text-[oklch(0.25_0.04_250)] mb-3">
            Scenario 5 — Ergastolo con LA per accesso a liberazione condizionale
          </h3>
          <BulletList
            items={[
              "Pena: ergastolo (perpetua)",
              "Soglia liberazione condizionale per ergastolo: 26 anni di pena effettivamente scontata (art. 176 c.p.)",
              "Detenzione iniziata: 1° gennaio 2000",
              "Senza LA: liberazione condizionale richiedibile dal 1° gennaio 2026",
              "Con LA (ipotizzando concessione per tutti i semestri): 52 semestri × 45 gg = 2.340 giorni = ~6 anni e mezzo di pena considerata scontata in più",
              "Con LA: liberazione condizionale richiedibile dal ~1° luglio 2019 (anticipo di 6,5 anni)",
              "Riferimento: art. 54 c. 4 ultima frase O.P. — la LA si applica anche all'ergastolo",
            ]}
          />
        </div>

        <AlertBox variant="warning" title="Errori comuni da evitare">
          <div>
            <ol className="list-decimal ml-5 space-y-1 text-sm">
              <li>Confondere fine pena virtuale (proiezione) con fine pena effettivo (concessione concreta)</li>
              <li>Dimenticare il presofferto: la custodia cautelare conta dal primo giorno</li>
              <li>Applicare la detrazione speciale di 75 giorni a semestri post-2015 (errore di diritto)</li>
              <li>Calcolare i semestri sull’anno solare invece che dalla data di inizio detenzione</li>
              <li>Ignorare le interruzioni della pena (salute, ricovero, sospensione)</li>
              <li>Applicare la LA speciale ai condannati per reati ex art. 4-bis O.P.</li>
              <li>Non aggiornare l’ordine di esecuzione post-concessione LA</li>
            </ol>
          </div>
        </AlertBox>
      </div>

      {/* ===== FAQ ===== */}
      <SectionTitle
        id="faq"
        icon={HelpCircle}
        title="Domande Frequenti (FAQ)"
        subtitle="20 domande sulla liberazione anticipata, raggruppate per categoria"
      />
      <FAQ items={faqData} />

      {/* ===== Normativa ===== */}
      <SectionTitle
        id="normativa"
        icon={BookOpen}
        title="Normativa di Riferimento"
        subtitle="Fonti normative aggiornate al 2026 (art. 54 O.P., D.L. 92/2024, Corte Cost. 201/2025)"
      />
      <NormativaRefTable items={normativaRiferimento} />

      {/* ===== Fonti e Riferimenti ===== */}
      <SectionTitle
        id="fonti"
        icon={FileText}
        title="Fonti e Riferimenti"
        subtitle="Bibliografia istituzionale e giurisprudenziale utilizzata"
      />
      <div className="space-y-3">
        <p className="text-base leading-relaxed">
          La presente pagina è stata redatta sulla base delle seguenti fonti istituzionali e dottrinali:
        </p>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Normattiva</strong> — Testi vigenti delle leggi e decreti citati:{" "}
            <a href="https://www.normattiva.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2">www.normattiva.it</a>
          </li>
          <li>
            <strong>Corte Costituzionale</strong> — Sentenza n. 201/2025 (29 dicembre 2025) sulla liberazione anticipata e D.L. 92/2024:{" "}
            <a href="https://www.cortecostituzionale.it/scheda-pronuncia/2025/201" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2">cortecostituzionale.it</a>
          </li>
          <li>
            <strong>Ministero della Giustizia</strong> — Glossario penitenziario e schede informative:{" "}
            <a href="https://www.giustizia.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2">giustizia.it</a>
          </li>
          <li>
            <strong>Sistema Penale</strong> (Diritto Penale Contemporaneo) — Commento alla riforma D.L. 92/2024 e sent. Corte Cost. 201/2025:{" "}
            <a href="https://www.sistemapenale.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2">sistemapenale.it</a>
          </li>
          <li>
            <strong>Giurisprudenza Penale</strong> — Massime e commenti:{" "}
            <a href="https://www.giurisprudenzapenale.com" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2">giurisprudenzapenale.com</a>
          </li>
          <li>
            <strong>Brocardi.it</strong> — Codici annotati con riferimenti normativi:{" "}
            <a href="https://www.brocardi.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2">brocardi.it</a>
          </li>
          <li>
            <strong>Cassazione</strong> — Sentenze rilevanti: Sez. I n. 356/2018 (LA speciale 75 giorni), sent. 17095/2024 (LA e affidamento in prova)
          </li>
          <li>
            <strong>Tribunale di Sorveglianza di Venezia</strong> — Scheda informativa sulla liberazione anticipata:{" "}
            <a href="http://www.tribunaledisorveglianza.venezia.it/liberazione-anticipata/" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2">tribunaledisorveglianza.venezia.it</a>
          </li>
        </ul>
      </div>
    </ToolLayout>
  );
}
