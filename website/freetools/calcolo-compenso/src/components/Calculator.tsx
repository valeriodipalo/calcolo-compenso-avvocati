'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { PhaseSelection, Aumento, Riduzione, SpeseState, AccessoriState } from '@/lib/types';
import { DEFAULT_SPESE_GENERALI_PCT } from '@/data/constants';
import { getPhases } from '@/data/feeData';
import { calculate } from '@/lib/calculator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ParametriForm from './ParametriForm';
import FasiTable from './FasiTable';
import TabPanel from './TabPanel';
import AccessoriSection from './AccessoriSection';
import ResultPanel from './ResultPanel';

function getDefaultAumenti(): Aumento[] {
  return [
    { id: 'PiuParti', label: 'Numero parti', reference: 'art. 4, c.2', enabled: false, pct: 0, basis: 'total', numParti: 1 },
    { id: 'Conciliazione', label: 'Conciliazione', reference: 'art. 4, c.6', enabled: false, pct: 25, basis: 'decisionale' },
    { id: 'ClassAction', label: 'Class action', reference: 'art. 4, c.10', enabled: false, pct: 300, basis: 'total' },
    { id: 'Fondatezza', label: 'Manifesta fondatezza', reference: 'art. 4, c.8', enabled: false, pct: 33, basis: 'total' },
    { id: 'Importanza', label: 'Ulteriore valutazione', reference: 'art. 4, c.1', enabled: false, pct: 0, basis: 'total', customValue: 0 },
    { id: 'PredPct', label: 'Predisposizioni x Pct', reference: 'art. 4, c.1bis', enabled: false, pct: 30, basis: 'total' },
    { id: 'MotiviAggiunti', label: 'Motivi aggiunti', reference: 'art. 4, c.10bis', enabled: false, pct: 50, basis: 'introduttiva' },
    { id: 'RicorsoIncidentale', label: 'Ricorso incidentale', reference: 'art. 4, c.10bis', enabled: false, pct: 20, basis: 'introduttiva' },
    { id: 'Memoria378', label: 'Memoria 378 c.p.c.', reference: 'art. 4, c.10bis', enabled: false, pct: 40, basis: 'decisionale' },
  ];
}

function getDefaultRiduzioni(): Riduzione[] {
  return [
    { id: 'AssenzaQfd', label: 'Assenza questioni di fatto e diritto', reference: 'art. 4, c.4', enabled: false, pct: 30, minPct: 1, maxPct: 30 },
    { id: 'Ritardo', label: 'Condotte ostative', reference: 'art. 4, c.7', enabled: false, pct: 50, minPct: 1, maxPct: 50 },
    { id: 'RespProc', label: 'Resp. art. 96 cpc', reference: 'art. 4, c.9', enabled: false, pct: 75, fixed: true },
    { id: 'Pronunce', label: 'Pronunce in rito', reference: 'art. 4, c.9', enabled: false, pct: 50, fixed: true },
    { id: 'GP', label: 'Gratuito patrocinio', reference: 'art. 130 Dpr 115/02', enabled: false, pct: 50, fixed: true },
    { id: 'Praticante', label: 'Praticante abilitato', reference: 'art. 9', enabled: false, pct: 50, minPct: 5, maxPct: 50 },
  ];
}

export default function Calculator() {
  const [competenza, setCompetenza] = useState(110);
  const [scaglione, setScaglione] = useState(30);
  const [valoreCausa, setValoreCausa] = useState('');
  const [selections, setSelections] = useState<PhaseSelection[]>([]);
  const [aumenti, setAumenti] = useState<Aumento[]>(getDefaultAumenti());
  const [riduzioni, setRiduzioni] = useState<Riduzione[]>(getDefaultRiduzioni());
  const [spese, setSpese] = useState<SpeseState>({
    speseEsenti: 0,
    speseTrasferta: 0,
    speseNonEsenti: 0,
    speseGeneraliEnabled: true,
    speseGeneraliPct: DEFAULT_SPESE_GENERALI_PCT,
  });
  const [accessori, setAccessori] = useState<AccessoriState>({
    cpaEnabled: true,
    ivaEnabled: true,
    ritenutaEnabled: false,
  });

  const phases = useMemo(
    () => getPhases(competenza, scaglione),
    [competenza, scaglione]
  );

  // Initialize selections when phases change
  useEffect(() => {
    setSelections(
      phases.map(p => ({
        code: p.code,
        checked: p.enabled,
        mode: 'med' as const,
        customValue: p.med,
      }))
    );
  }, [phases]);

  const handleCompetenzaChange = useCallback((v: number) => {
    setCompetenza(v);
    // Reset aumenti/riduzioni to defaults
    setAumenti(getDefaultAumenti());
    setRiduzioni(getDefaultRiduzioni());
  }, []);

  const result = useMemo(
    () => calculate(phases, selections, aumenti, riduzioni, spese, accessori),
    [phases, selections, aumenti, riduzioni, spese, accessori]
  );

  return (
    <div className="space-y-6">
      {/* Parametri */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Parametri</CardTitle>
        </CardHeader>
        <CardContent>
          <ParametriForm
            competenza={competenza}
            scaglione={scaglione}
            valoreCausa={valoreCausa}
            onCompetenzaChange={handleCompetenzaChange}
            onScaglioneChange={setScaglione}
            onValoreCausaChange={setValoreCausa}
          />
        </CardContent>
      </Card>

      {/* Fasi */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Fasi del giudizio</CardTitle>
        </CardHeader>
        <CardContent>
          <FasiTable
            phases={phases}
            selections={selections}
            onSelectionChange={setSelections}
          />
        </CardContent>
      </Card>

      {/* Aumenti / Riduzioni / Spese */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Aumenti, Riduzioni e Spese</CardTitle>
        </CardHeader>
        <CardContent>
          <TabPanel
            aumenti={aumenti}
            riduzioni={riduzioni}
            spese={spese}
            onAumentiChange={setAumenti}
            onRiduzioniChange={setRiduzioni}
            onSpeseChange={setSpese}
            competenza={competenza}
          />
        </CardContent>
      </Card>

      {/* Accessori */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Accessori</CardTitle>
        </CardHeader>
        <CardContent>
          <AccessoriSection
            accessori={accessori}
            onChange={setAccessori}
          />
        </CardContent>
      </Card>

      {/* Risultato */}
      <Card className="border-primary/20 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Risultato del calcolo</CardTitle>
        </CardHeader>
        <CardContent>
          <ResultPanel result={result} />
        </CardContent>
      </Card>
    </div>
  );
}
