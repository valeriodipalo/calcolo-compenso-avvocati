import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema, articleSchema } from "@/lib/schema";
import { getToolsByCluster } from "@/data/toolRegistry";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";

export const metadata: Metadata = {
  title: "Termini Processuali: Guida 2026 ai Tempi del Processo",
  description:
    "Guida ai termini processuali 2026: computo, sospensione feriale, termini di impugnazione, riforma Cartabia e calcolatori gratuiti per civile e penale.",
  alternates: {
    canonical: "https://www.avvocatotools.it/termini-processuali",
  },
  openGraph: {
    title: "Termini Processuali: Guida 2026 ai Tempi del Processo",
    description:
      "Termini ordinatori e perentori, sospensione feriale, impugnazioni e riforma Cartabia. Guida e calcolatori gratuiti.",
    url: "https://www.avvocatotools.it/termini-processuali",
    locale: "it_IT",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Termini Processuali: Guida 2026 ai Tempi del Processo",
    description:
      "Termini ordinatori e perentori, sospensione feriale, impugnazioni e riforma Cartabia. Guida e calcolatori gratuiti.",
  },
};

export default function TerminiProcessualiPage() {
  const tools = getToolsByCluster("termini");

  return (
    <div className="bg-background">
      {/* JSON-LD */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Termini e Scadenze", path: "/termini-processuali" },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline:
            "Termini Processuali: Guida 2026 ai Tempi del Processo Civile, Penale, Amministrativo e Tributario",
          description:
            "Guida completa ai termini processuali: computo, termini ordinatori e perentori, sospensione feriale, impugnazioni, riforma Cartabia e strumenti di calcolo gratuiti.",
          path: "/termini-processuali",
          datePublished: "2026-04-16",
          dateModified: "2026-04-16",
          image: "https://www.avvocatotools.it/apple-icon.png",
          sections: [
            "Strumenti di Calcolo",
            "I termini processuali in sintesi",
            "Termini ordinatori e perentori",
            "Termini di impugnazione in sintesi",
            "Differenze tra termini processuali, liberi e di impugnazione",
            "Sospensione feriale",
            "Riforma Cartabia",
            "Quando si applicano i termini processuali",
            "Quadro normativo di riferimento",
            "Domande frequenti",
          ],
        })}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-[oklch(0.97_0.005_250)] border-b border-border"
      >
        <div className="container py-2">
          <ol className="flex items-center gap-1.5 text-xs text-[oklch(0.50_0.02_250)]">
            <li>
              <Link
                href="/"
                className="hover:text-[oklch(0.25_0.04_250)] transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="select-none">
              ›
            </li>
            <li className="text-[oklch(0.35_0.04_250)] font-medium">
              Termini e Scadenze
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[oklch(0.25_0.04_250)] pb-14 pt-10">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-[oklch(0.75_0.10_85)] text-sm font-semibold uppercase tracking-widest mb-3">
              Guida Completa
            </p>
            <h1 className="text-3xl md:text-4xl text-white leading-tight mb-4">
              Termini Processuali: Guida ai Tempi del Processo
            </h1>
            <p className="text-[oklch(0.75_0.05_250)] text-lg leading-relaxed">
              Cosa sono i termini processuali, come si calcolano, quando si
              applica la sospensione feriale e cosa è cambiato con la riforma
              Cartabia. Guida con calcolatori gratuiti aggiornata al 2026.
            </p>
            <p className="text-[oklch(0.55_0.03_250)] text-xs mt-4">
              Ultimo aggiornamento: 16 aprile 2026 · Redazione AvvocatoTools
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-5xl mx-auto">

          {/* Tool Cards */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-2">
              Strumenti di Calcolo
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Calcolatori gratuiti aggiornati al 2026. Seleziona lo strumento
              più adatto al tuo caso.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    className="group bg-white border border-border p-5 transition-all hover:border-[oklch(0.75_0.10_85)] hover:shadow-md"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    <div
                      className="bg-[oklch(0.25_0.04_250)] p-2 w-fit mb-3"
                      style={{ borderRadius: "0.375rem" }}
                    >
                      <Icon className="w-5 h-5 text-[oklch(0.75_0.10_85)]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[oklch(0.25_0.04_250)] mb-1">
                      {tool.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                      {tool.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[oklch(0.45_0.12_250)] group-hover:text-[oklch(0.35_0.15_250)] transition-colors">
                      Vai al calcolatore <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* I termini processuali in sintesi */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              I termini processuali: cosa sono e come funzionano in sintesi
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              I <strong>termini processuali</strong> sono gli intervalli di
              tempo entro i quali (o dopo i quali) una parte, il giudice o un
              ausiliario devono compiere un determinato atto del processo. La
              loro disciplina generale è contenuta nell'
              <strong>art. 152 c.p.c.</strong>, che distingue i termini fissati
              dalla legge — termini <em>legali</em> — da quelli fissati dal
              giudice — termini <em>giudiziari</em> — con il principio che i
              termini legali sono ordinatori salvo diversa previsione espressa.
              Il computo è regolato dall'<strong>art. 155 c.p.c.</strong>: non
              si calcola il giorno iniziale (<em>dies a quo non computatur</em>),
              mentre si computa il giorno finale; se il termine scade di
              sabato, domenica o in un giorno festivo, viene prorogato al primo
              giorno feriale successivo.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Ogni giurisdizione ha regole specifiche: il processo civile segue
              il codice di procedura civile, il processo penale gli artt.
              172-176 c.p.p., quello amministrativo il D.Lgs. 104/2010 e quello
              tributario il D.Lgs. 546/1992. Le tipologie principali sono i
              termini <em>a giorni</em>, <em>a mesi</em>, <em>liberi</em> (che
              escludono sia il giorno iniziale sia quello finale) e <em>a
              ritroso</em> (calcolati all'indietro rispetto a una data fissata).
              Per applicare correttamente le regole di computo al tuo caso
              concreto — udienza, atto difensivo, notifica — utilizza il nostro{" "}
              <Link
                href="/calcolo-termini-processuali"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore dei termini processuali
              </Link>
              .
            </p>
          </section>

          {/* Termini ordinatori e perentori */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Termini ordinatori e perentori: come distinguerli
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              La distinzione tra <strong>termini ordinatori</strong> e{" "}
              <strong>termini perentori</strong> è uno dei concetti più
              delicati della procedura civile. I <strong>termini perentori</strong>{" "}
              (art. 152, co. 2, c.p.c.) sono improrogabili: la loro scadenza
              comporta la decadenza dal compimento dell'atto, con la
              preclusione definitiva della facoltà difensiva. Tipicamente sono
              perentori i termini per impugnare (appello, ricorso per
              cassazione), per costituirsi in giudizio nel processo di
              opposizione a decreto ingiuntivo, per proporre opposizione
              all'esecuzione. L'<strong>art. 153 c.p.c.</strong> ne ribadisce
              l'improrogabilità, salva la possibilità di rimessione in termini
              in caso di causa non imputabile alla parte.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              I <strong>termini ordinatori</strong>, al contrario, sono
              prorogabili dal giudice prima della scadenza su istanza
              motivata. La loro inosservanza non produce decadenza ma può
              esporre la parte a conseguenze processuali minori
              (ammonimento, condanna alle spese). La regola interpretativa è
              che, in caso di dubbio, un termine fissato dalla legge è{" "}
              <em>ordinatorio</em> salvo che la norma lo qualifichi
              espressamente come perentorio o che questa qualificazione si
              desuma in modo inequivoco dalla ratio della disciplina. Per
              verificare se un termine è scaduto, tenendo conto della natura
              perentoria o ordinatoria, consulta il nostro{" "}
              <Link
                href="/calcolo-termini-processuali"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore dei termini
              </Link>
              .
            </p>
          </section>

          {/* Termini di impugnazione */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Termini di impugnazione: appello, cassazione e oltre in sintesi
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Le <strong>impugnazioni</strong> sono governate da un duplice
              sistema di termini disciplinato dagli artt. 325-327 c.p.c. Il{" "}
              <strong>termine breve</strong> (art. 325 c.p.c.) decorre dalla
              notificazione della sentenza ed è di <strong>30 giorni</strong>{" "}
              per l'appello e per la revocazione ordinaria, di{" "}
              <strong>60 giorni</strong> per il ricorso per cassazione e di{" "}
              <strong>30 giorni</strong> per l'opposizione di terzo. Il{" "}
              <strong>termine lungo</strong> (art. 327 c.p.c., modificato dalla
              riforma Cartabia) è di <strong>6 mesi</strong> dalla
              pubblicazione della sentenza e opera come termine massimo per
              impugnare quando la sentenza non sia stata notificata. I termini
              si calcolano secondo le regole ordinarie dell'art. 155 c.p.c.,
              con applicazione della <strong>sospensione feriale</strong> dal
              1° al 31 agosto (L. 742/1969).
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Nel processo amministrativo, l'<strong>art. 92 del D.Lgs. 104/2010</strong>{" "}
              stabilisce termini di impugnazione ridotti: 60 giorni per
              l'appello al Consiglio di Stato, 6 mesi come termine lungo; nel
              rito abbreviato i termini sono dimezzati. Nel processo
              tributario (D.Lgs. 546/1992) il ricorso in appello si propone
              entro 60 giorni dalla notificazione della sentenza di primo
              grado. Per calcolare con precisione il termine di impugnazione
              applicabile al tuo caso — civile, amministrativo o tributario,
              con o senza sospensione feriale — utilizza il nostro{" "}
              <Link
                href="/calcolo-termini-impugnazione"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore dei termini di impugnazione
              </Link>
              .
            </p>
          </section>

          {/* Comparison table — HUB EXCLUSIVE */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Differenze tra termini processuali, liberi e di impugnazione
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Nella pratica forense capita spesso di confondere categorie di
              termini che hanno regole di computo diverse. La tabella che segue
              sintetizza le differenze fondamentali.
            </p>
            <div className="overflow-x-auto">
              <table
                className="w-full text-sm border border-border"
                style={{ borderRadius: "0.375rem" }}
              >
                <thead>
                  <tr className="bg-[oklch(0.97_0.005_250)]">
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">
                      Tipologia
                    </th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">
                      Regola di computo
                    </th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">
                      Esempio tipico
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[oklch(0.30_0.04_250)]">
                  <tr>
                    <td className="p-3 border-b border-border font-medium">
                      Termini a giorni
                    </td>
                    <td className="p-3 border-b border-border">
                      Non si computa il <em>dies a quo</em>; si computa il{" "}
                      <em>dies ad quem</em>. Proroga al primo giorno feriale se
                      scade di sabato o festivo.
                    </td>
                    <td className="p-3 border-b border-border">
                      30 giorni per l'appello
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">
                      Termini a mesi
                    </td>
                    <td className="p-3 border-b border-border">
                      Si calcolano <em>nominatione dierum</em> — scadono nel
                      giorno corrispondente al <em>dies a quo</em> del mese
                      finale.
                    </td>
                    <td className="p-3 border-b border-border">
                      6 mesi per il termine lungo di impugnazione (art. 327
                      c.p.c.)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">
                      Termini liberi
                    </td>
                    <td className="p-3 border-b border-border">
                      Si escludono sia il <em>dies a quo</em> sia il{" "}
                      <em>dies ad quem</em>: entrambi i giorni non si computano.
                    </td>
                    <td className="p-3 border-b border-border">
                      Termine minimo tra notifica e udienza
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">
                      Termini a ritroso
                    </td>
                    <td className="p-3 border-b border-border">
                      Si calcolano all'indietro rispetto a una data già fissata.
                      Se la scadenza cade di sabato o festivo, si anticipa al
                      giorno feriale precedente.
                    </td>
                    <td className="p-3 border-b border-border">
                      Memorie ex art. 171-ter c.p.c., conclusionali ex art. 190
                      c.p.c.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">
                      Termini di impugnazione brevi
                    </td>
                    <td className="p-3 border-b border-border">
                      Perentori, decorrono dalla notifica della sentenza.
                      Soggetti a sospensione feriale (1-31 agosto).
                    </td>
                    <td className="p-3 border-b border-border">
                      30 giorni appello, 60 giorni cassazione
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">
                      Termini di impugnazione lunghi
                    </td>
                    <td className="p-3 border-b border-border">
                      Perentori, decorrono dalla pubblicazione della sentenza.
                      Soggetti a sospensione feriale.
                    </td>
                    <td className="p-3 border-b border-border">
                      6 mesi ex art. 327 c.p.c. post-Cartabia
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">
                      Termini ordinatori
                    </td>
                    <td className="p-3 border-b border-border">
                      Prorogabili dal giudice prima della scadenza su istanza
                      motivata. Nessuna decadenza automatica.
                    </td>
                    <td className="p-3 border-b border-border">
                      Termini per il deposito di documenti su istruttoria
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">
                      Termini perentori
                    </td>
                    <td className="p-3 border-b border-border">
                      Improrogabili (art. 153 c.p.c.): la scadenza comporta
                      decadenza, salva la rimessione in termini.
                    </td>
                    <td className="p-3 border-b border-border">
                      Termini di impugnazione, costituzione in opposizione
                      decreto ingiuntivo
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Sospensione feriale */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Sospensione feriale: quando si applica e quando no
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              La <strong>sospensione feriale dei termini processuali</strong>,
              disciplinata dalla <strong>L. 7 ottobre 1969, n. 742</strong>,
              sospende di diritto il decorso dei termini dal{" "}
              <strong>1° al 31 agosto</strong> di ogni anno nelle giurisdizioni
              ordinarie e amministrative. Se un termine inizia a decorrere
              durante la sospensione, la sua decorrenza è rinviata al 1°
              settembre; se è già iniziato, riprende dal 1° settembre per il
              numero di giorni residui. La durata di 31 giorni è stata ridotta
              dai precedenti 46 con il D.L. 132/2014, convertito in L.
              162/2014, per accelerare lo svolgimento dei processi.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              La sospensione <strong>non si applica</strong> a numerose
              materie considerate urgenti o incompatibili con la pausa estiva:
              cause di lavoro e previdenziali, procedimenti cautelari,
              opposizione all'esecuzione e agli atti esecutivi, procedimenti
              possessori, provvedimenti di urgenza ex art. 700 c.p.c.,
              procedimenti di famiglia relativi ad alimenti, adozione, affido,
              responsabilità genitoriale. In materia penale la sospensione non
              opera nei procedimenti con imputati in stato di custodia
              cautelare se la parte rinuncia alla sospensione, né nei
              procedimenti di convalida dell'arresto o del fermo.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Nel processo tributario la sospensione feriale si somma con la
              sospensione di 90 giorni prevista dall'art. 6, L. 212/2000
              (Statuto del contribuente) per le richieste di accertamento con
              adesione. Per applicare correttamente la sospensione feriale al
              tuo termine — civile, amministrativo o tributario — utilizza il
              nostro{" "}
              <Link
                href="/calcolo-termini-processuali"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore dei termini processuali
              </Link>
              , che gestisce automaticamente il periodo 1-31 agosto.
            </p>
          </section>

          {/* Riforma Cartabia */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Riforma Cartabia: cosa è cambiato per i termini dal 2023
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Il <strong>D.Lgs. 10 ottobre 2022, n. 149</strong> (riforma
              Cartabia), entrato in vigore il <strong>28 febbraio 2023</strong>,
              ha profondamente modificato la disciplina dei termini nel
              processo civile. Le novità principali riguardano il giudizio
              ordinario di primo grado: l'atto di citazione deve contenere la
              nuova avvertenza che il convenuto deve costituirsi{" "}
              <strong>almeno 70 giorni prima dell'udienza</strong> (art. 166
              c.p.c.) e che l'attore può depositare la memoria integrativa
              entro il termine a ritroso previsto dal nuovo{" "}
              <strong>art. 171-ter c.p.c.</strong>, che scandisce i termini per
              le memorie integrative di attore, convenuto e repliche.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              La riforma ha inoltre ridotto il <strong>termine lungo</strong>{" "}
              per impugnare da 12 a <strong>6 mesi</strong> (art. 327 c.p.c.),
              armonizzandolo con il termine già previsto nel processo
              amministrativo. Sono stati introdotti nuovi termini per il
              giudizio di appello (art. 342 c.p.c.) e per la specificità dei
              motivi, nonché per la fase di decisione con i termini per
              conclusionali e repliche (art. 190 c.p.c.). Per applicare con
              precisione i nuovi termini post-Cartabia — memoria 171-ter,
              costituzione del convenuto 70 giorni, appello 30/180 giorni —
              utilizza i nostri calcolatori per i{" "}
              <Link
                href="/calcolo-termini-processuali"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                termini processuali
              </Link>{" "}
              e per i{" "}
              <Link
                href="/calcolo-termini-impugnazione"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                termini di impugnazione
              </Link>
              .
            </p>
          </section>

          {/* Casi pratici — HUB EXCLUSIVE */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Quando si applicano i termini processuali: i casi pratici
            </h2>
            <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-6 mb-3">
              Opposizione a decreto ingiuntivo
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Il decreto ingiuntivo deve essere opposto entro{" "}
              <strong>40 giorni</strong> dalla notifica (art. 641 c.p.c.). È un
              termine perentorio: la sua inosservanza rende il decreto
              definitivo ed esecutivo. Se la notifica avviene a cavallo della
              sospensione feriale, il termine si computa tenendo conto dei
              giorni sospesi dal 1° al 31 agosto. Per il deposito del ricorso
              in opposizione e la costituzione in giudizio trovano applicazione
              le regole post-Cartabia di cui all'art. 645 c.p.c. Per calcolare
              la scadenza corretta utilizza il{" "}
              <Link
                href="/calcolo-termini-processuali"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore dei termini processuali
              </Link>
              .
            </p>

            <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-6 mb-3">
              Appello in materia di lavoro
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              L'appello contro le sentenze di primo grado in materia di
              lavoro si propone entro il termine breve di{" "}
              <strong>30 giorni</strong> dalla notifica (art. 434 c.p.c.). La
              <strong> sospensione feriale non si applica</strong> al rito del
              lavoro né al processo previdenziale, quindi il termine decorre
              anche durante agosto. Si tratta di un'eccezione importante che
              spesso genera errori nella pratica forense: conviene sempre
              verificare con il{" "}
              <Link
                href="/calcolo-termini-impugnazione"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore dei termini di impugnazione
              </Link>
              , che distingue tra rito ordinario e rito del lavoro.
            </p>

            <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-6 mb-3">
              Ricorso per cassazione contro sentenza non notificata
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Quando la sentenza di secondo grado non viene notificata,
              l'impugnazione per cassazione deve essere proposta entro il
              termine lungo di <strong>6 mesi</strong> dalla pubblicazione
              della sentenza (art. 327 c.p.c. post-Cartabia). Il termine è
              soggetto a sospensione feriale: se la sentenza è pubblicata a
              marzo, i 6 mesi si calcolano aggiungendo 31 giorni per il
              periodo 1-31 agosto. Per verificare la scadenza esatta utilizza
              il{" "}
              <Link
                href="/calcolo-termini-impugnazione"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore dei termini di impugnazione
              </Link>
              .
            </p>

            <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-6 mb-3">
              Memorie integrative ex art. 171-ter c.p.c.
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Dopo la riforma Cartabia, le memorie integrative si depositano a
              ritroso rispetto all'udienza di prima comparizione: 40 giorni per
              la prima memoria attore, 20 giorni per la memoria convenuto, 10
              giorni per le repliche. Essendo termini a ritroso, la scadenza
              viene anticipata al primo giorno feriale precedente se cade di
              sabato o festivo. Per il calcolo automatico con gestione del
              sabato, consulta il{" "}
              <Link
                href="/calcolo-termini-processuali"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore dei termini processuali
              </Link>
              .
            </p>
          </section>

          {/* Normativa */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Quadro normativo di riferimento
            </h2>
            <NormativaRefTable
              items={[
                {
                  norma: "Art. 152 c.p.c.",
                  descrizione:
                    "Termini legali e giudiziari — distinzione tra termini stabiliti dalla legge e termini fissati dal giudice; principio di ordinarietà salvo espressa perentorietà",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art152",
                },
                {
                  norma: "Art. 153 c.p.c.",
                  descrizione:
                    "Improrogabilità dei termini perentori e rimessione in termini per causa non imputabile alla parte",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art153",
                },
                {
                  norma: "Art. 155 c.p.c.",
                  descrizione:
                    "Computo dei termini — regole generali: esclusione del dies a quo, inclusione del dies ad quem, proroga al primo giorno feriale successivo per sabato e festivi",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155",
                },
                {
                  norma: "Artt. 325-327 c.p.c.",
                  descrizione:
                    "Termini di impugnazione — termine breve (30 gg appello, 60 gg cassazione) e termine lungo (6 mesi post-Cartabia) dalla pubblicazione della sentenza",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art325",
                },
                {
                  norma: "Art. 171-ter c.p.c.",
                  descrizione:
                    "Memorie integrative post-Cartabia — termini a ritroso di 40/20/10 giorni per attore, convenuto e repliche rispetto all'udienza di prima comparizione",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art171ter",
                },
                {
                  norma: "L. 7 ottobre 1969, n. 742",
                  descrizione:
                    "Sospensione dei termini processuali nel periodo feriale — dal 1° al 31 agosto per giurisdizioni ordinarie e amministrative (ridotta a 31 giorni dal D.L. 132/2014)",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742",
                },
                {
                  norma: "D.Lgs. 10 ottobre 2022, n. 149",
                  descrizione:
                    "Riforma Cartabia del processo civile — in vigore dal 28/02/2023; nuovi termini per la fase introduttiva, memorie integrative, termine lungo di impugnazione ridotto a 6 mesi",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149",
                },
                {
                  norma: "D.L. 12 settembre 2014, n. 132",
                  descrizione:
                    "Riduzione della sospensione feriale da 46 a 31 giorni (convertito in L. 162/2014) — misure per accelerare lo svolgimento dei processi",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132",
                },
                {
                  norma: "Art. 92 D.Lgs. 2 luglio 2010, n. 104",
                  descrizione:
                    "Codice del processo amministrativo — termini di impugnazione (appello al Consiglio di Stato 60 giorni breve, 6 mesi lungo; dimezzati nel rito abbreviato)",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2010-07-02;104~art92",
                },
                {
                  norma: "D.Lgs. 31 dicembre 1992, n. 546",
                  descrizione:
                    "Processo tributario — disciplina dei termini di ricorso e appello davanti alle Corti di Giustizia Tributaria",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546",
                },
                {
                  norma: "Art. 6 L. 15 luglio 1966, n. 604",
                  descrizione:
                    "Doppio termine per impugnare il licenziamento — 60 giorni stragiudiziali + 180 giorni per il ricorso giudiziale",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1966-07-15;604~art6",
                },
              ]}
            />
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-6">
              Domande frequenti
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Qual è la differenza tra termini ordinatori e perentori?",
                  a: "I termini perentori (art. 152, co. 2, c.p.c.) sono improrogabili: la loro scadenza comporta la decadenza dal compimento dell'atto. Sono perentori i termini di impugnazione, di costituzione in opposizione a decreto ingiuntivo, di opposizione all'esecuzione. I termini ordinatori, al contrario, sono prorogabili dal giudice prima della scadenza su istanza motivata e la loro inosservanza non produce decadenza automatica. In caso di dubbio, un termine legale è ordinatorio salvo che la norma lo qualifichi come perentorio.",
                },
                {
                  q: "Quando non si applica la sospensione feriale dei termini?",
                  a: "La sospensione feriale (L. 742/1969) non si applica a: cause di lavoro e previdenziali, procedimenti cautelari, opposizione all'esecuzione e agli atti esecutivi, procedimenti possessori, provvedimenti di urgenza ex art. 700 c.p.c., procedimenti di famiglia relativi ad alimenti, adozione, affido e responsabilità genitoriale. In materia penale non opera nei procedimenti con imputati in custodia cautelare (se la parte rinuncia) né nei procedimenti di convalida dell'arresto.",
                },
                {
                  q: "Quali termini sono sospesi ad agosto?",
                  a: "La sospensione feriale dal 1° al 31 agosto si applica ai termini processuali delle giurisdizioni ordinarie (civile, penale con le eccezioni sopra) e amministrative. Sono sospesi: termini di impugnazione (appello, cassazione, revocazione), termini di costituzione in giudizio, termini per memorie e repliche, termini di opposizione a decreto ingiuntivo, termini per il ricorso al TAR e al Consiglio di Stato. Non sono sospesi i termini sostanziali (prescrizione, decadenza di diritto sostanziale).",
                },
                {
                  q: "Come si calcola un termine che scade di sabato?",
                  a: "Per i termini ordinari (non a ritroso), l'art. 155, co. 4, c.p.c. prevede che la scadenza di sabato sia prorogata al primo giorno feriale successivo (lunedì, salvo festivi). Per i termini a ritroso, invece, la scadenza si anticipa al giorno feriale precedente, in coerenza con la ratio di garantire un numero minimo di giorni pieni disponibili per il compimento dell'atto.",
                },
                {
                  q: "Qual è la differenza tra termine breve e termine lungo per impugnare?",
                  a: "Il termine breve (art. 325 c.p.c.) decorre dalla notifica della sentenza ed è di 30 giorni per appello e revocazione, 60 giorni per la cassazione. Il termine lungo (art. 327 c.p.c.) decorre dalla pubblicazione della sentenza ed è di 6 mesi dopo la riforma Cartabia (prima era 12 mesi). Il termine breve prevale sul lungo: se la sentenza viene notificata, decorrono i 30/60 giorni indipendentemente dal fatto che il termine lungo sia ancora in corso.",
                },
                {
                  q: "Quali sono i termini processuali a ritroso?",
                  a: "I termini a ritroso sono scadenze calcolate all'indietro rispetto a una data già fissata, tipicamente l'udienza. Esempi post-Cartabia: memoria 171-ter attore (40 giorni prima), memoria convenuto (20 giorni prima), repliche (10 giorni prima), conclusionali ex art. 190 c.p.c. (60 giorni prima dell'udienza di precisazione), costituzione del convenuto in causa ordinaria (70 giorni prima). Per i termini a ritroso la proroga al primo giorno feriale non si applica: se la scadenza cade di sabato o festivo, si anticipa al giorno feriale precedente.",
                },
                {
                  q: "Cosa è cambiato con la riforma Cartabia per i termini nel 2023?",
                  a: "Il D.Lgs. 149/2022 (in vigore dal 28/02/2023) ha riformato la fase introduttiva del processo civile introducendo l'art. 171-ter c.p.c. (memorie integrative a ritroso di 40/20/10 giorni), ha portato il termine di costituzione del convenuto a 70 giorni prima dell'udienza (art. 166 c.p.c.), ha ridotto il termine lungo di impugnazione da 12 a 6 mesi (art. 327 c.p.c.) e ha modificato i termini per conclusionali e repliche in fase decisoria.",
                },
                {
                  q: "Come si calcolano i termini nel processo amministrativo?",
                  a: "Nel processo amministrativo (D.Lgs. 104/2010) l'appello al Consiglio di Stato ha termine breve di 60 giorni dalla notifica della sentenza e termine lungo di 6 mesi dalla pubblicazione (art. 92). Nel rito abbreviato i termini sono dimezzati. La sospensione feriale si applica anche al processo amministrativo. I termini per proporre ricorso al TAR sono di 60 giorni dalla notifica dell'atto impugnato.",
                },
                {
                  q: "Chi stabilisce i termini processuali?",
                  a: "L'art. 152, co. 1, c.p.c. stabilisce che i termini per il compimento degli atti del processo sono stabiliti dalla legge; possono essere fissati dal giudice anche a pena di decadenza, ma soltanto se la legge lo permette espressamente. I termini stabiliti dalla legge sono ordinatori, tranne che la legge stessa li dichiari espressamente perentori. Il giudice non può quindi creare nuovi termini perentori per via interpretativa o discrezionale.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="group bg-white border border-border overflow-hidden transition-colors hover:border-[oklch(0.75_0.10_85)]"
                  style={{ borderRadius: "0.5rem" }}
                >
                  <summary className="cursor-pointer p-4 font-semibold text-[oklch(0.25_0.04_250)] list-none flex items-center justify-between gap-4">
                    <span>{item.q}</span>
                    <span className="text-[oklch(0.75_0.10_85)] group-open:rotate-45 transition-transform text-2xl font-light">
                      +
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-[oklch(0.30_0.04_250)] leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Cross-cluster */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Potrebbe servirti anche
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/contributo-unificato"
                className="group bg-white border border-border p-4 transition-all hover:border-[oklch(0.75_0.10_85)]"
                style={{ borderRadius: "0.5rem" }}
              >
                <h3 className="text-sm font-semibold text-[oklch(0.25_0.04_250)] mb-1">
                  Contributo Unificato
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Calcolo del contributo unificato per l'iscrizione a ruolo
                  della causa, con esenzioni e tabelle aggiornate.
                </p>
              </Link>
              <Link
                href="/calcolo-compenso"
                className="group bg-white border border-border p-4 transition-all hover:border-[oklch(0.75_0.10_85)]"
                style={{ borderRadius: "0.5rem" }}
              >
                <h3 className="text-sm font-semibold text-[oklch(0.25_0.04_250)] mb-1">
                  Calcolo Compenso Avvocato
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Simulatore della liquidazione giudiziale dei compensi forensi
                  secondo il D.M. 55/2014 e D.M. 147/2022.
                </p>
              </Link>
              <Link
                href="/calcolo-interessi-legali"
                className="group bg-white border border-border p-4 transition-all hover:border-[oklch(0.75_0.10_85)]"
                style={{ borderRadius: "0.5rem" }}
              >
                <h3 className="text-sm font-semibold text-[oklch(0.25_0.04_250)] mb-1">
                  Calcolo Interessi Legali
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Calcolo degli interessi legali al tasso 2026 dell'1,60%, con
                  tabella storica dei tassi dal 1942.
                </p>
              </Link>
              <Link
                href="/calcolo-fattura-avvocato"
                className="group bg-white border border-border p-4 transition-all hover:border-[oklch(0.75_0.10_85)]"
                style={{ borderRadius: "0.5rem" }}
              >
                <h3 className="text-sm font-semibold text-[oklch(0.25_0.04_250)] mb-1">
                  Calcolo Fattura Avvocato
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Calcolo della fattura dell'avvocato con CPA, IVA, ritenuta
                  d'acconto e regime forfettario.
                </p>
              </Link>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="border-t border-border pt-6 mt-10">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Disclaimer</strong> — Le informazioni fornite in questa
              guida hanno finalità informativa e non costituiscono consulenza
              legale. I termini processuali sono soggetti a frequenti modifiche
              normative e a interpretazioni giurisprudenziali; per casi
              concreti si raccomanda di verificare sempre la disciplina
              vigente e di consultare un avvocato. Gli strumenti di calcolo
              non sostituiscono il giudizio professionale.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
