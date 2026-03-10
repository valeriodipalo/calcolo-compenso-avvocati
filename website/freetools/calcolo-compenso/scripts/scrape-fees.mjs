// Script to scrape fee data from avvocatoandreani.it
// Run with: node scripts/scrape-fees.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE_URL = 'https://www.avvocatoandreani.it/svc-mod/ajsvcnpf.php';

const COMPETENZE = [
  100, 110, 120, 130, 140, 150, 160, 170, 180, 190,
  200, 210, 220, 230, 240, 250, 260, 270, 280, 290,
  300, 310, 320, 330, 335, 340, 350, 370, 390
];

const SCAGLIONI = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130,
  901, 902, 903, 910
];

async function fetchFeeData(competenza, scaglione) {
  const params = new URLSearchParams({
    op: '1',
    p1: '1',
    p2: '2022',
    p3: String(competenza),
    p4: String(scaglione),
    p5: '0',
    v: '2.6'
  });

  const url = `${BASE_URL}?${params}`;

  try {
    const resp = await fetch(url);
    const text = await resp.text();
    return text.trim();
  } catch (err) {
    console.error(`Error fetching comp=${competenza} scag=${scaglione}: ${err.message}`);
    return null;
  }
}

function parseResponse(text) {
  // Response format: phaseCode-enabled-min-med-max|phaseCode-enabled-min-med-max|...
  if (!text || text === '' || text === '0' || text.startsWith('ERR')) return null;

  const phases = text.split('|').map(part => {
    const [code, enabled, min, med, max] = part.split('-');
    return {
      code: parseInt(code),
      enabled: enabled === '1',
      min: parseFloat(min) || 0,
      med: parseFloat(med) || 0,
      max: parseFloat(max) || 0
    };
  });

  // Filter out phases with all zeros that are disabled
  const validPhases = phases.filter(p => p.enabled || p.min > 0 || p.med > 0 || p.max > 0);
  if (validPhases.length === 0) return null;

  return phases;
}

async function main() {
  console.log('Starting fee data scraping...');
  const feeData = {};
  let count = 0;
  const total = COMPETENZE.length * SCAGLIONI.length;

  for (const comp of COMPETENZE) {
    feeData[comp] = {};
    for (const scag of SCAGLIONI) {
      count++;
      const text = await fetchFeeData(comp, scag);
      const parsed = parseResponse(text);
      if (parsed) {
        feeData[comp][scag] = parsed;
      }
      if (count % 50 === 0) {
        console.log(`Progress: ${count}/${total}`);
      }
      // Small delay to be nice to the server
      await new Promise(r => setTimeout(r, 50));
    }
  }

  // Write the data
  const outputPath = path.join(__dirname, '..', 'src', 'data', 'feeData.json');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(feeData, null, 2));

  // Print summary
  let totalEntries = 0;
  for (const comp of Object.keys(feeData)) {
    const scags = Object.keys(feeData[comp]);
    totalEntries += scags.length;
    console.log(`Competenza ${comp}: ${scags.length} scaglioni`);
  }
  console.log(`\nTotal entries: ${totalEntries}`);
  console.log(`Data saved to ${outputPath}`);
}

main().catch(console.error);
