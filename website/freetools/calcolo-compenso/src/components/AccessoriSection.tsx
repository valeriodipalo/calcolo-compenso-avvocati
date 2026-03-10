'use client';

import { AccessoriState } from '@/lib/types';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface Props {
  accessori: AccessoriState;
  onChange: (a: AccessoriState) => void;
}

export default function AccessoriSection({ accessori, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex items-center gap-2">
        <Switch
          checked={accessori.cpaEnabled}
          onCheckedChange={checked => onChange({ ...accessori, cpaEnabled: checked })}
        />
        <Label className="text-sm">CPA 4%</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          checked={accessori.ivaEnabled}
          onCheckedChange={checked => onChange({ ...accessori, ivaEnabled: checked })}
        />
        <Label className="text-sm">IVA 22%</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          checked={accessori.ritenutaEnabled}
          onCheckedChange={checked => onChange({ ...accessori, ritenutaEnabled: checked })}
        />
        <Label className="text-sm">Ritenuta d&apos;acconto 20%</Label>
      </div>
    </div>
  );
}
