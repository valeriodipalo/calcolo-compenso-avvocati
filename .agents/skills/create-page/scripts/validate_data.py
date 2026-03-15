#!/usr/bin/env python3
"""
Validate legal fee data files (JSON export from TypeScript modules).

Supports two modes:
  - contributo: validates bracket arrays, fixed fees, exemptions
  - compenso: validates competenze with phases (studio, introduttiva, istruttoria, decisionale)

Usage:
  python validate_data.py <file.json> [--mode contributo|compenso]

If --mode is omitted, the script auto-detects based on the JSON structure.
"""

import json
import sys
import argparse
from pathlib import Path


def validate_brackets(brackets, name):
    errors = []
    if not brackets:
        errors.append(f"[{name}] Empty bracket list")
        return errors
    for i, b in enumerate(brackets):
        if b.get("importo", 0) <= 0:
            errors.append(f"[{name}][{i}] Non-positive amount: {b.get('importo')}")
        if not b.get("label"):
            errors.append(f"[{name}][{i}] Missing label")
    for i in range(1, len(brackets)):
        prev_max = brackets[i - 1].get("max")
        curr_min = brackets[i].get("min")
        if prev_max is not None and curr_min is not None:
            if abs(curr_min - prev_max - 0.01) > 0.02:
                errors.append(f"[{name}] Gap between bracket {i-1} (max={prev_max}) and bracket {i} (min={curr_min})")
    return errors


def validate_contributo(data):
    errors = []
    warnings = []
    for key in data:
        if key.startswith("scaglioni"):
            errors.extend(validate_brackets(data[key], key))
    if "procedimentiFissi" in data or "procedimentiImportoFisso" in data:
        fees = data.get("procedimentiFissi", data.get("procedimentiImportoFisso", []))
        seen = set()
        for i, f in enumerate(fees):
            proc = f.get("procedimento", "")
            if not proc:
                errors.append(f"[procedimentiFissi][{i}] Missing procedimento")
            if proc in seen:
                errors.append(f"[procedimentiFissi][{i}] Duplicate: {proc}")
            seen.add(proc)
            if not f.get("riferimento"):
                warnings.append(f"[procedimentiFissi][{i}] Missing riferimento")
    if "normativa" in data:
        for i, r in enumerate(data["normativa"]):
            if not r.get("norma"):
                errors.append(f"[normativa][{i}] Missing norma")
    return errors, warnings


def validate_compenso(data):
    errors = []
    warnings = []
    competenze = data.get("competenze", data if isinstance(data, list) else [])
    if not competenze:
        errors.append("No competenze found in data")
        return errors, warnings
    for ci, comp in enumerate(competenze):
        nome = comp.get("nome", f"competenza[{ci}]")
        scaglioni = comp.get("scaglioni", [])
        if not scaglioni:
            errors.append(f"{nome}: no scaglioni")
            continue
        for si, scag in enumerate(scaglioni):
            fasi = scag.get("fasi", [])
            if not fasi:
                errors.append(f"{nome}, scaglione[{si}]: no fasi")
                continue
            for fi, fase in enumerate(fasi):
                medio = fase.get("medio", 0)
                minimo = fase.get("min", 0)
                massimo = fase.get("max", 0)
                if medio <= 0:
                    errors.append(f"{nome}, scaglione[{si}], fase[{fi}]: medio must be > 0")
                if minimo > medio:
                    errors.append(f"{nome}, scaglione[{si}], fase[{fi}]: min ({minimo}) > medio ({medio})")
                if massimo < medio:
                    errors.append(f"{nome}, scaglione[{si}], fase[{fi}]: max ({massimo}) < medio ({medio})")
                expected_min = medio * 0.5
                expected_max = medio * 1.5
                if expected_min > 0 and abs(minimo - expected_min) / expected_min > 0.02:
                    warnings.append(f"{nome}, scaglione[{si}], fase[{fi}]: min ({minimo}) != 50% of medio ({expected_min:.2f})")
                if expected_max > 0 and abs(massimo - expected_max) / expected_max > 0.02:
                    warnings.append(f"{nome}, scaglione[{si}], fase[{fi}]: max ({massimo}) != 150% of medio ({expected_max:.2f})")
    return errors, warnings


def auto_detect_mode(data):
    if isinstance(data, list):
        return "compenso"
    if isinstance(data, dict):
        if "competenze" in data:
            return "compenso"
        if any(k.startswith("scaglioni") for k in data):
            return "contributo"
    return "contributo"


def main():
    parser = argparse.ArgumentParser(description="Validate legal fee data")
    parser.add_argument("file", help="JSON data file to validate")
    parser.add_argument("--mode", choices=["contributo", "compenso"], default=None)
    args = parser.parse_args()

    path = Path(args.file)
    if not path.exists():
        print(f"File not found: {path}")
        sys.exit(1)

    data = json.loads(path.read_text(encoding="utf-8"))
    mode = args.mode or auto_detect_mode(data)
    print(f"Validating in mode: {mode}")

    if mode == "contributo":
        errors, warnings = validate_contributo(data)
    else:
        errors, warnings = validate_compenso(data)

    if warnings:
        print(f"\n⚠️  {len(warnings)} warning(s):")
        for w in warnings:
            print(f"  - {w}")
    if errors:
        print(f"\n❌ {len(errors)} error(s):")
        for e in errors:
            print(f"  - {e}")
        sys.exit(1)
    else:
        print(f"\n✅ Validation passed ({mode} mode)")
        sys.exit(0)


if __name__ == "__main__":
    main()
