import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Calcolo Compenso Avvocati
          </h1>
          <p className="mt-2 text-blue-100 text-sm sm:text-base">
            Parametri forensi D.M. 55/2014 aggiornato al D.M. 147/2022
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        <Calculator />
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-xs text-muted-foreground">
          <p>Tabelle parametri forensi 2022 (D.M. 147/2022)</p>
          <p className="mt-1">I risultati hanno valore puramente indicativo.</p>
        </div>
      </footer>
    </div>
  );
}
