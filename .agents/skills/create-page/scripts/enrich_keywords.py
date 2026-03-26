#!/usr/bin/env python3
"""
Enrich a keywords CSV with opportunity scores.

Reads a keywords CSV (type,keyword,sv,kd,cpc,intent) and adds two columns:
  - opportunity_score:     ((100 - KD) / 100) * sqrt(SV)
  - opportunity_score_cpc: opportunity_score * (1 + ln(CPC + 1))

The CPC-enhanced score is the primary ranking metric — it boosts keywords
with commercial intent without letting CPC dominate.

Usage:
  python enrich_keywords.py analysis/calcolo-interessi-moratori/keywords.csv

Overwrites the input file with the enriched version (sorted by opportunity_score_cpc desc).
Use --dry-run to print to stdout instead.
"""

import csv
import math
import sys
import argparse
from pathlib import Path


def opportunity_score(sv: float, kd: float) -> float:
    """Base score: easy keywords with high volume score highest."""
    return ((100 - kd) / 100) * math.sqrt(sv)


def opportunity_score_cpc(base: float, cpc: float) -> float:
    """CPC-enhanced score: commercial keywords get a boost."""
    return base * (1 + math.log(cpc + 1))


def enrich(input_path: Path, dry_run: bool = False) -> None:
    rows = []
    with open(input_path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        if not reader.fieldnames:
            print(f"Empty or invalid CSV: {input_path}")
            sys.exit(1)

        required = {"type", "keyword", "sv", "kd", "cpc", "intent"}
        missing = required - set(reader.fieldnames)
        if missing:
            print(f"Missing columns: {missing}")
            sys.exit(1)

        for row in reader:
            sv = float(row["sv"] or 0)
            kd = float(row["kd"] or 0)
            cpc = float(row["cpc"] or 0)

            base = opportunity_score(sv, kd)
            enhanced = opportunity_score_cpc(base, cpc)

            row["opportunity_score"] = round(base, 2)
            row["opportunity_score_cpc"] = round(enhanced, 2)
            rows.append(row)

    # Sort by CPC-enhanced score descending
    rows.sort(key=lambda r: r["opportunity_score_cpc"], reverse=True)

    fieldnames = ["type", "keyword", "sv", "kd", "cpc", "intent",
                  "opportunity_score", "opportunity_score_cpc"]

    if dry_run:
        writer = csv.DictWriter(sys.stdout, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)
    else:
        with open(input_path, "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(rows)
        print(f"Enriched {len(rows)} keywords -> {input_path}")
        # Print top 5
        print("\nTop 5 by opportunity score (CPC-enhanced):")
        print(f"  {'Score':>8}  {'SV':>7}  {'KD':>3}  {'CPC':>5}  Keyword")
        for r in rows[:5]:
            print(f"  {r['opportunity_score_cpc']:>8}  {r['sv']:>7}  "
                  f"{r['kd']:>3}  {r['cpc']:>5}  {r['keyword']}")


def main():
    parser = argparse.ArgumentParser(description="Enrich keywords CSV with opportunity scores")
    parser.add_argument("file", help="Path to keywords.csv")
    parser.add_argument("--dry-run", action="store_true", help="Print to stdout instead of overwriting")
    args = parser.parse_args()

    path = Path(args.file)
    if not path.exists():
        print(f"File not found: {path}")
        sys.exit(1)

    enrich(path, dry_run=args.dry_run)


if __name__ == "__main__":
    main()
