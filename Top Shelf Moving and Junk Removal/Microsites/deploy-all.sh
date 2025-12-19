#!/bin/bash
# Deploy all microsites to Vercel

MICROSITES_DIR="$(cd "$(dirname "$0")" && pwd)"

sites=(
  "boise-appliance-removal"
  "boise-carpet-removal"
  "boise-chiropractors"
  "boise-commercial-movers"
  "boise-construction-debris-removal"
  "boise-demolition"
  "boise-dumpster-rental"
  "boise-estate-cleanout"
  "boise-furniture-removal"
  "boise-hoarding-cleanup"
  "boise-hot-tub-removal"
  "boise-junk-removal"
  "boise-movers"
  "boise-roof-repair"
  "boise-roof-replacement"
  "boise-roofing-company"
  "boise-shed-removal"
  "boise-tire-removal"
  "hvac-boise"
  "mobile-home-demolition-boise"
  "property-cleanout-boise"
)

echo "Starting deployment of ${#sites[@]} microsites..."
echo "========================================"

success=0
failed=0

for site in "${sites[@]}"; do
  echo ""
  echo "=== Deploying $site ==="
  cd "$MICROSITES_DIR/$site"
  vercel --prod --yes 2>&1 | tail -5
  if [ $? -eq 0 ]; then
    echo "✓ $site deployed successfully"
    ((success++))
  else
    echo "✗ $site deployment failed"
    ((failed++))
  fi
done

echo ""
echo "========================================"
echo "Deployment complete!"
echo "Success: $success | Failed: $failed"
