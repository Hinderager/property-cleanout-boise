#!/bin/bash
# Deploy all microsites to Vercel
# Run this script after the Vercel deployment limit resets

MICROSITES_DIR="$(cd "$(dirname "$0")" && pwd)"

sites=(
  "boise-junk-removal"
  "boise-construction-debris-removal"
  "boise-demolition"
  "boise-dumpster-rental"
  "boise-estate-cleanout"
  "boise-furniture-removal"
  "boise-hoarding-cleanup"
  "boise-hot-tub-removal"
  "boise-tire-removal"
  "mobile-home-demolition-boise"
  "property-cleanout-boise"
)

echo "Starting deployment of all microsites..."
echo "========================================"

for site in "${sites[@]}"; do
  echo ""
  echo "=== Deploying $site ==="
  cd "$MICROSITES_DIR/$site"
  vercel --prod --yes 2>&1 | tail -8
  if [ $? -eq 0 ]; then
    echo "✓ $site deployed successfully"
  else
    echo "✗ $site deployment failed"
  fi
done

echo ""
echo "========================================"
echo "Deployment complete!"
