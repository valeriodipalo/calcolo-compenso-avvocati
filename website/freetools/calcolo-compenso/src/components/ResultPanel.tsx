'use client';

import { CalcResult } from '@/lib/types';
import { formatEuro } from '@/lib/formatters';
import { Separator } from '@/components/ui/separator';

interface Props {
  result: CalcResult;
}

function Row({ label, value, bold, accent, indent }: {
  label: string;
  value: number;
  bold?: boolean;
  accent?: boolean;
  indent?: boolean;
}) {
  return (
    <div className={`flex justify-between items-center py-1 ${indent ? 'pl-4' : ''}`}>
      <span className={`text-sm ${bold ? 'font-semibold' : ''} ${accent ? 'text-primary' : 'text-muted-foreground'}`}>
        {label}
      </span>
      <span className={`tabular-nums ${bold ? 'font-bold text-base' : 'text-sm'} ${accent ? 'text-primary' : ''}`}>
        {formatEuro(value)}
      </span>
    </div>
  );
}

export default function ResultPanel({ result }: Props) {
  return (
    <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Phase breakdown */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Fasi</h4>
        {result.phaseValues.map(p => (
          <Row key={p.code} label={p.name} value={p.value} indent />
        ))}
        <Row label="Compenso base" value={result.base} bold />
      </div>

      {/* Aumenti */}
      {result.aumenti.length > 0 && (
        <div>
          <Separator className="my-2" />
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Aumenti</h4>
          {result.aumenti.map((a, i) => (
            <Row key={i} label={`+ ${a.label}`} value={a.value} indent />
          ))}
          <Row label="Totale aumenti" value={result.totalAumenti} bold />
        </div>
      )}

      {/* Riduzioni */}
      {result.riduzioni.length > 0 && (
        <div>
          <Separator className="my-2" />
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Riduzioni</h4>
          {result.riduzioni.map((r, i) => (
            <Row key={i} label={`- ${r.label}`} value={r.value} indent />
          ))}
          <Row label="Totale riduzioni" value={result.totalRiduzioni} bold />
        </div>
      )}

      <Separator className="my-2" />
      <Row label="Compenso adeguato" value={result.adjustedBase} bold accent />

      {/* Spese generali */}
      {result.speseGenerali > 0 && (
        <Row label="Spese generali (rimborso forfettario)" value={result.speseGenerali} indent />
      )}

      <Separator className="my-2" />
      <Row label="Compenso + spese generali" value={result.compenso} bold />

      {/* Spese */}
      {(result.speseEsenti > 0 || result.taxableExpenses > 0) && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Spese</h4>
          {result.speseEsenti > 0 && <Row label="Spese esenti IVA" value={result.speseEsenti} indent />}
          {result.speseTrasferta > 0 && <Row label="Spese di trasferta" value={result.speseTrasferta} indent />}
          {result.speseNonEsenti > 0 && <Row label="Altre spese imponibili" value={result.speseNonEsenti} indent />}
        </div>
      )}

      {/* Accessori */}
      {(result.cpa > 0 || result.iva > 0) && (
        <div>
          <Separator className="my-2" />
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Accessori</h4>
          {result.cpa > 0 && <Row label="CPA 4%" value={result.cpa} indent />}
          {result.iva > 0 && <Row label="IVA 22%" value={result.iva} indent />}
        </div>
      )}

      <Separator className="my-3" />
      <div className="bg-primary/5 rounded-lg p-4 space-y-2">
        <Row label="TOTALE" value={result.totale} bold accent />
        {result.ritenutaAcconto > 0 && (
          <>
            <Row label="Ritenuta d'acconto 20%" value={-result.ritenutaAcconto} indent />
            <Separator className="my-1" />
            <Row label="NETTO A PAGARE" value={result.netto} bold accent />
          </>
        )}
      </div>
    </div>
  );
}
