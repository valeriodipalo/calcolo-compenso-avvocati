'use client';

import { Aumento, Riduzione, SpeseState } from '@/lib/types';
import { calculatePiuPartiPct } from '@/lib/calculator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

interface Props {
  aumenti: Aumento[];
  riduzioni: Riduzione[];
  spese: SpeseState;
  onAumentiChange: (a: Aumento[]) => void;
  onRiduzioniChange: (r: Riduzione[]) => void;
  onSpeseChange: (s: SpeseState) => void;
  competenza: number;
}

export default function TabPanel({
  aumenti,
  riduzioni,
  spese,
  onAumentiChange,
  onRiduzioniChange,
  onSpeseChange,
  competenza,
}: Props) {
  const updateAumento = (id: string, updates: Partial<Aumento>) => {
    onAumentiChange(aumenti.map(a => a.id === id ? { ...a, ...updates } : a));
  };

  const updateRiduzione = (id: string, updates: Partial<Riduzione>) => {
    onRiduzioniChange(riduzioni.map(r => r.id === id ? { ...r, ...updates } : r));
  };

  const isTarCds = [320, 330, 335].includes(competenza);
  const isCassazione = competenza === 220;

  const visibleAumenti = aumenti.filter(a => {
    if (a.id === 'MotiviAggiunti' || a.id === 'RicorsoIncidentale') return isTarCds;
    if (a.id === 'Memoria378') return isCassazione;
    return true;
  });

  return (
    <Tabs defaultValue="aumenti" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="aumenti">Aumenti</TabsTrigger>
        <TabsTrigger value="riduzioni">Riduzioni</TabsTrigger>
        <TabsTrigger value="spese">Spese</TabsTrigger>
      </TabsList>

      <TabsContent value="aumenti" className="space-y-3 mt-4">
        {visibleAumenti.map(a => (
          <div key={a.id} className="flex items-start gap-3 p-3 rounded-lg border border-border/50 hover:border-border transition-colors">
            <Checkbox
              checked={a.enabled}
              onCheckedChange={(checked) => updateAumento(a.id, { enabled: !!checked })}
              className="mt-0.5"
            />
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <Label className="font-medium cursor-pointer" onClick={() => updateAumento(a.id, { enabled: !a.enabled })}>
                  {a.label}
                </Label>
                <span className="text-xs text-muted-foreground">({a.reference})</span>
              </div>

              {a.id === 'PiuParti' && (
                <div className="flex items-center gap-2 mt-1">
                  <Label className="text-xs text-muted-foreground">N. parti:</Label>
                  <Input
                    type="number"
                    min={1}
                    value={a.numParti || 1}
                    onChange={e => updateAumento(a.id, { numParti: parseInt(e.target.value) || 1 })}
                    className="w-20 h-7 text-xs"
                  />
                  <span className="text-xs text-muted-foreground">
                    ({calculatePiuPartiPct(a.numParti || 1)}%)
                  </span>
                </div>
              )}

              {a.id === 'Importanza' && (
                <div className="flex items-center gap-2 mt-1">
                  <Label className="text-xs text-muted-foreground">Importo:</Label>
                  <Input
                    type="number"
                    value={a.customValue || 0}
                    onChange={e => updateAumento(a.id, { customValue: parseFloat(e.target.value) || 0 })}
                    className="w-28 h-7 text-xs"
                    placeholder="0,00"
                  />
                </div>
              )}

              {a.id !== 'PiuParti' && a.id !== 'Importanza' && (
                <div className="flex items-center gap-2 mt-1">
                  <Label className="text-xs text-muted-foreground">Percentuale:</Label>
                  <Input
                    type="number"
                    value={a.pct}
                    min={a.minPct}
                    max={a.maxPct}
                    onChange={e => updateAumento(a.id, { pct: parseFloat(e.target.value) || 0 })}
                    className="w-20 h-7 text-xs"
                  />
                  <span className="text-xs text-muted-foreground">%</span>
                  {a.basis !== 'total' && (
                    <span className="text-xs text-muted-foreground">
                      (su {a.basis === 'decisionale' ? 'fase decisionale' : 'fase introduttiva'})
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </TabsContent>

      <TabsContent value="riduzioni" className="space-y-3 mt-4">
        {riduzioni.map(r => (
          <div key={r.id} className="flex items-start gap-3 p-3 rounded-lg border border-border/50 hover:border-border transition-colors">
            <Checkbox
              checked={r.enabled}
              onCheckedChange={(checked) => updateRiduzione(r.id, { enabled: !!checked })}
              className="mt-0.5"
            />
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <Label className="font-medium cursor-pointer" onClick={() => updateRiduzione(r.id, { enabled: !r.enabled })}>
                  {r.label}
                </Label>
                <span className="text-xs text-muted-foreground">({r.reference})</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Label className="text-xs text-muted-foreground">Percentuale:</Label>
                {r.fixed ? (
                  <span className="text-xs font-medium">{r.pct}% (fisso)</span>
                ) : (
                  <>
                    <Input
                      type="number"
                      value={r.pct}
                      min={r.minPct}
                      max={r.maxPct}
                      onChange={e => updateRiduzione(r.id, { pct: parseFloat(e.target.value) || 0 })}
                      className="w-20 h-7 text-xs"
                    />
                    <span className="text-xs text-muted-foreground">%</span>
                    {r.minPct !== undefined && r.maxPct !== undefined && (
                      <span className="text-xs text-muted-foreground">
                        (min {r.minPct}% - max {r.maxPct}%)
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </TabsContent>

      <TabsContent value="spese" className="space-y-4 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2 p-3 rounded-lg border border-border/50">
            <Label htmlFor="speseEsenti" className="text-sm font-medium">
              Spese esenti IVA
            </Label>
            <p className="text-xs text-muted-foreground">art. 15, DPR 633/72</p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">&euro;</span>
              <Input
                id="speseEsenti"
                type="number"
                value={spese.speseEsenti || ''}
                onChange={e => onSpeseChange({ ...spese, speseEsenti: parseFloat(e.target.value) || 0 })}
                className="pl-8 h-8 text-sm"
                placeholder="0,00"
              />
            </div>
          </div>

          <div className="space-y-2 p-3 rounded-lg border border-border/50">
            <Label htmlFor="speseTrasferta" className="text-sm font-medium">
              Spese di trasferta
            </Label>
            <p className="text-xs text-muted-foreground">artt. 11, 27</p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">&euro;</span>
              <Input
                id="speseTrasferta"
                type="number"
                value={spese.speseTrasferta || ''}
                onChange={e => onSpeseChange({ ...spese, speseTrasferta: parseFloat(e.target.value) || 0 })}
                className="pl-8 h-8 text-sm"
                placeholder="0,00"
              />
            </div>
          </div>

          <div className="space-y-2 p-3 rounded-lg border border-border/50">
            <Label htmlFor="speseNonEsenti" className="text-sm font-medium">
              Altre spese imponibili
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">&euro;</span>
              <Input
                id="speseNonEsenti"
                type="number"
                value={spese.speseNonEsenti || ''}
                onChange={e => onSpeseChange({ ...spese, speseNonEsenti: parseFloat(e.target.value) || 0 })}
                className="pl-8 h-8 text-sm"
                placeholder="0,00"
              />
            </div>
          </div>

          <div className="space-y-2 p-3 rounded-lg border border-border/50">
            <div className="flex items-center gap-2">
              <Switch
                checked={spese.speseGeneraliEnabled}
                onCheckedChange={checked => onSpeseChange({ ...spese, speseGeneraliEnabled: checked })}
              />
              <Label className="text-sm font-medium">Spese generali</Label>
            </div>
            <p className="text-xs text-muted-foreground">art. 2 - rimborso forfettario</p>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={spese.speseGeneraliPct}
                onChange={e => onSpeseChange({ ...spese, speseGeneraliPct: parseFloat(e.target.value) || 0 })}
                disabled={!spese.speseGeneraliEnabled}
                className="w-20 h-8 text-sm"
              />
              <span className="text-sm text-muted-foreground">%</span>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
