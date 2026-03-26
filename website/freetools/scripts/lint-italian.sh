#!/usr/bin/env bash
# lint-italian.sh — Catches unicode escapes and missing Italian accents
# Run from website/freetools/: bash scripts/lint-italian.sh [path]
# Exit code: 0 = clean, 1 = issues found

set -euo pipefail

TARGET="${1:-src}"
ERRORS=0

RED='\033[0;31m'
YELLOW='\033[0;33m'
GREEN='\033[0;32m'
NC='\033[0m'

echo "=== Italian Text Lint ==="
echo "Scanning: $TARGET"
echo ""

# ── 1. Unicode escapes ──────────────────────────────────────
echo "--- Checking for unicode escapes ---"
UNICODE_HITS=$(grep -rn '\\u[0-9A-Fa-f]\{4\}' "$TARGET" \
  --include='*.tsx' --include='*.ts' \
  | grep -v 'node_modules' \
  | grep -v '\.next/' \
  | grep -v 'scripts/' \
  || true)

if [ -n "$UNICODE_HITS" ]; then
  echo -e "${RED}FAIL: Unicode escapes found (use native UTF-8 instead):${NC}"
  echo "$UNICODE_HITS"
  ERRORS=$((ERRORS + 1))
  echo ""
else
  echo -e "${GREEN}PASS: No unicode escapes${NC}"
fi

# ── 2. Missing Italian accents ──────────────────────────────
# Pattern: common Italian words that MUST have accents
# These patterns look for the unaccented version in contexts where
# it's almost certainly the verb "essere" or a known accented word.
echo ""
echo "--- Checking for missing accents ---"

ACCENT_PATTERNS=(
  # "è" (verb essere) — high confidence patterns
  "' e pari "
  "' e il "
  "' e la "
  "' e lo "
  "' e un "
  " e stato "
  " e stata "
  " e dovut"
  " e previst"
  " e necessar"
  " e identic"
  " e automatic"
  " e fondamental"
  " e compost"
  " e contenut"
  " e quella "
  " e quello "
  " non e "
  " che e "
  " tasso e "
  " mora e "
  " formula e "
  # Accented words that should never appear unaccented
  " piu "
  " perche "
  " cioe "
  " sara "
  " saranno "
  " potra "
  " puo "
  " purche "
  # Common nouns that need accent
  "necessita "
  "indennita "
  "liquidita "
  "liberta "
  "responsabilita "
  "attivita "
  "modalita "
  "conformita "
  "esigibilita "
  "disponibilita "
  "competitivita "
  "uniformita "
  "nullita "
  "derogabilita "
)

ACCENT_FOUND=0
for pattern in "${ACCENT_PATTERNS[@]}"; do
  HITS=$(grep -rn "$pattern" "$TARGET" \
    --include='*.tsx' --include='*.ts' \
    | grep -v 'node_modules' \
    | grep -v '\.next/' \
    | grep -v 'scripts/' \
    || true)
  if [ -n "$HITS" ]; then
    if [ $ACCENT_FOUND -eq 0 ]; then
      echo -e "${RED}FAIL: Missing accents found:${NC}"
      ACCENT_FOUND=1
    fi
    echo -e "${YELLOW}  Pattern '$pattern':${NC}"
    echo "$HITS" | head -5
  fi
done

if [ $ACCENT_FOUND -eq 1 ]; then
  ERRORS=$((ERRORS + 1))
else
  echo -e "${GREEN}PASS: No missing accents detected${NC}"
fi

# ── 3. HTML entities ─────────────────────────────────────────
echo ""
echo "--- Checking for HTML entities ---"
ENTITY_HITS=$(grep -rn '&[a-z]\+;' "$TARGET" \
  --include='*.tsx' --include='*.ts' \
  | grep -v 'node_modules' \
  | grep -v '\.next/' \
  | grep -v 'scripts/' \
  | grep -v '__html' \
  | grep -v 'dangerouslySetInnerHTML' \
  | grep -E '&(agrave|egrave|eacute|igrave|ograve|ugrave|apos|quot|laquo|raquo|nbsp);' \
  || true)

if [ -n "$ENTITY_HITS" ]; then
  echo -e "${RED}FAIL: HTML entities found (use native UTF-8 instead):${NC}"
  echo "$ENTITY_HITS"
  ERRORS=$((ERRORS + 1))
else
  echo -e "${GREEN}PASS: No problematic HTML entities${NC}"
fi

# ── Summary ──────────────────────────────────────────────────
echo ""
echo "================================"
if [ $ERRORS -gt 0 ]; then
  echo -e "${RED}$ERRORS issue(s) found. Fix before publishing.${NC}"
  exit 1
else
  echo -e "${GREEN}All checks passed.${NC}"
  exit 0
fi
