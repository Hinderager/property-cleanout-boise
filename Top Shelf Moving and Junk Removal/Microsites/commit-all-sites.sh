#!/bin/bash

# Microsites to commit
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
  "boise-roofing-company"
  "boise-shed-removal"
  "topshelfdumpsters"
)

basePath="C:/Users/Administrator/Top Shelf Storage Dropbox/Eric Hinderager/Online Businesses/Top Shelf Moving and Junk Removal/Microsites"

for site in "${sites[@]}"; do
  sitePath="$basePath/$site"

  if [ -d "$sitePath/.git" ]; then
    echo "Processing: $site"
    cd "$sitePath"

    # Stage all changes
    git add -A

    # Check if there are changes to commit
    if git diff --staged --quiet; then
      echo "  No changes to commit"
    else
      git commit -m "Add neighborhood pages, Core Web Vitals optimizations, and SEO improvements

- Add 14 neighborhood sub-region pages per site (Boise, Meridian, Nampa areas)
- Implement Core Web Vitals optimizations (LCP, CLS, FID)
- Add blur placeholders for hero images
- Update next.config.js with caching headers and image optimization
- Add LazyComponents for dynamic imports
- Add critical CSS and loading skeletons
- Optimize scroll listeners with passive option

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"

      echo "  Committed changes"
    fi

    cd "$basePath"
  else
    echo "Skipping $site (not a git repo)"
  fi
done

echo ""
echo "All commits complete!"
