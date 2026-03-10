'use client';

import { PhaseData, PhaseSelection, ValueMode } from '@/lib/types';
import { PHASE_NAMES } from '@/data/constants';
import { formatEuro } from '@/lib/formatters';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface Props {
  phases: PhaseData[];
  selections: PhaseSelection[];
  onSelectionChange: (selections: PhaseSelection[]) => void;
}

function RadioDot({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'h-4 w-4 rounded-full border-2 transition-colors flex-shrink-0',
        active
          ? 'border-primary bg-primary'
          : 'border-muted-foreground/40 hover:border-primary/60'
      )}
    >
      {active && <span className="block h-1.5 w-1.5 rounded-full bg-white mx-auto" />}
    </button>
  );
}

export default function FasiTable({ phases, selections, onSelectionChange }: Props) {
  if (phases.length === 0) return null;

  const updateSelection = (code: number, updates: Partial<PhaseSelection>) => {
    const newSelections = selections.map(s =>
      s.code === code ? { ...s, ...updates } : s
    );
    onSelectionChange(newSelections);
  };

  const setAllMode = (mode: ValueMode) => {
    const newSelections = selections.map(s => ({ ...s, mode: mode === 'custom' ? s.mode : mode }));
    onSelectionChange(newSelections);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium text-muted-foreground">Imposta tutti:</span>
        <button
          type="button"
          onClick={() => setAllMode('min')}
          className="px-2 py-0.5 text-xs rounded bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors"
        >
          Min
        </button>
        <button
          type="button"
          onClick={() => setAllMode('med')}
          className="px-2 py-0.5 text-xs rounded bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors"
        >
          Med
        </button>
        <button
          type="button"
          onClick={() => setAllMode('max')}
          className="px-2 py-0.5 text-xs rounded bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors"
        >
          Max
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-medium text-muted-foreground w-8"></th>
              <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Fase</th>
              <th className="text-center py-2 px-2 font-medium text-muted-foreground">Min</th>
              <th className="text-center py-2 px-2 font-medium text-muted-foreground">Med</th>
              <th className="text-center py-2 px-2 font-medium text-muted-foreground">Max</th>
              <th className="text-center py-2 px-2 font-medium text-muted-foreground">Personalizzato</th>
              <th className="text-right py-2 pl-4 font-medium text-muted-foreground">Valore</th>
            </tr>
          </thead>
          <tbody>
            {phases.map((phase) => {
              const sel = selections.find(s => s.code === phase.code);
              if (!sel) return null;
              const phaseName = PHASE_NAMES[phase.code] || `Fase ${phase.code}`;
              const currentValue = sel.checked
                ? sel.mode === 'min' ? phase.min
                  : sel.mode === 'med' ? phase.med
                  : sel.mode === 'max' ? phase.max
                  : sel.customValue
                : 0;

              return (
                <tr key={phase.code} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-2 pr-2">
                    <Checkbox
                      checked={sel.checked}
                      onCheckedChange={(checked) =>
                        updateSelection(phase.code, { checked: !!checked })
                      }
                    />
                  </td>
                  <td className="py-2 pr-4 font-medium">{phaseName}</td>
                  <td className="py-2 px-1 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <RadioDot
                        active={sel.mode === 'min'}
                        onClick={() => updateSelection(phase.code, { mode: 'min' })}
                      />
                      <button
                        type="button"
                        onClick={() => updateSelection(phase.code, { mode: 'min' })}
                        className="text-xs text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                      >
                        {formatEuro(phase.min)}
                      </button>
                    </div>
                  </td>
                  <td className="py-2 px-1 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <RadioDot
                        active={sel.mode === 'med'}
                        onClick={() => updateSelection(phase.code, { mode: 'med' })}
                      />
                      <button
                        type="button"
                        onClick={() => updateSelection(phase.code, { mode: 'med' })}
                        className="text-xs text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                      >
                        {formatEuro(phase.med)}
                      </button>
                    </div>
                  </td>
                  <td className="py-2 px-1 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <RadioDot
                        active={sel.mode === 'max'}
                        onClick={() => updateSelection(phase.code, { mode: 'max' })}
                      />
                      <button
                        type="button"
                        onClick={() => updateSelection(phase.code, { mode: 'max' })}
                        className="text-xs text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                      >
                        {formatEuro(phase.max)}
                      </button>
                    </div>
                  </td>
                  <td className="py-2 px-1 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <RadioDot
                        active={sel.mode === 'custom'}
                        onClick={() => updateSelection(phase.code, { mode: 'custom' })}
                      />
                      <Input
                        type="number"
                        value={sel.mode === 'custom' ? sel.customValue : ''}
                        onChange={e => updateSelection(phase.code, {
                          mode: 'custom',
                          customValue: parseFloat(e.target.value) || 0,
                        })}
                        onFocus={() => updateSelection(phase.code, { mode: 'custom' })}
                        className="w-24 h-7 text-xs"
                        placeholder="0,00"
                      />
                    </div>
                  </td>
                  <td className="py-2 pl-4 text-right font-semibold tabular-nums">
                    {formatEuro(currentValue)}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-border">
              <td colSpan={6} className="py-2 text-right font-semibold">Totale fasi</td>
              <td className="py-2 pl-4 text-right font-bold tabular-nums text-primary">
                {formatEuro(
                  phases.reduce((sum, phase) => {
                    const sel = selections.find(s => s.code === phase.code);
                    if (!sel || !sel.checked) return sum;
                    const val = sel.mode === 'min' ? phase.min
                      : sel.mode === 'med' ? phase.med
                      : sel.mode === 'max' ? phase.max
                      : sel.customValue;
                    return sum + val;
                  }, 0)
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
