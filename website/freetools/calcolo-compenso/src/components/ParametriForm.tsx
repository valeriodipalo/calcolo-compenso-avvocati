'use client';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { COMPETENZE } from '@/data/competenze';
import { SCAGLIONI } from '@/data/scaglioni';

interface Props {
  competenza: number;
  scaglione: number;
  valoreCausa: string;
  onCompetenzaChange: (v: number) => void;
  onScaglioneChange: (v: number) => void;
  onValoreCausaChange: (v: string) => void;
}

export default function ParametriForm({
  competenza,
  scaglione,
  valoreCausa,
  onCompetenzaChange,
  onScaglioneChange,
  onValoreCausaChange,
}: Props) {
  const giurisdizione = COMPETENZE.filter(c => c.group === 'giurisdizione');
  const materia = COMPETENZE.filter(c => c.group === 'materia');

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="competenza">Competenza</Label>
          <Select
            value={String(competenza)}
            onValueChange={v => onCompetenzaChange(Number(v))}
          >
            <SelectTrigger id="competenza" className="w-full">
              <SelectValue placeholder="Seleziona competenza" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Per Giurisdizione</SelectLabel>
                {giurisdizione.map(c => (
                  <SelectItem key={c.value} value={String(c.value)}>
                    {c.label}
                  </SelectItem>
                ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Per Materia</SelectLabel>
                {materia.map(c => (
                  <SelectItem key={c.value} value={String(c.value)}>
                    {c.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="scaglione">Scaglione</Label>
          <Select
            value={String(scaglione)}
            onValueChange={v => onScaglioneChange(Number(v))}
          >
            <SelectTrigger id="scaglione" className="w-full">
              <SelectValue placeholder="Seleziona scaglione" />
            </SelectTrigger>
            <SelectContent>
              {SCAGLIONI.map(s => (
                <SelectItem key={s.value} value={String(s.value)}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="max-w-xs space-y-2">
        <Label htmlFor="valoreCausa">Valore della causa</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
            &euro;
          </span>
          <Input
            id="valoreCausa"
            type="text"
            value={valoreCausa}
            onChange={e => onValoreCausaChange(e.target.value)}
            placeholder="0,00"
            className="pl-8"
          />
        </div>
      </div>
    </div>
  );
}
