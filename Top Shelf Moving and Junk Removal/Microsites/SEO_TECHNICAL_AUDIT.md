# SEO Technical Audit Report
## Canonical Domain + HTTPS + Single-Host Enforcement
**Audit Date:** December 19, 2025

---

## Executive Summary

All 21 microsites have been audited and configured for:
- Canonical domain enforcement (HTTPS, non-www)
- WWW to non-www 301/308 redirects
- HTTP to HTTPS redirects
- Consistent canonical URLs across all pages
- No mixed content issues
- Proper DNS resolution

---

## Sites Audited (21 Total)

| # | Site Directory | Canonical Domain |
|---|----------------|------------------|
| 1 | boise-appliance-removal | https://boise-appliance-removal.com |
| 2 | boise-carpet-removal | https://boise-carpet-removal.com |
| 3 | boise-chiropractors | https://boise-chiropractors.com |
| 4 | boise-commercial-movers | https://boise-commercial-movers.com |
| 5 | boise-construction-debris-removal | https://boise-construction-debris-removal.com |
| 6 | boise-demolition | https://boise-demolition.com |
| 7 | boise-dumpster-rental | https://boise-dumpster-rental.com |
| 8 | boise-estate-cleanout | https://boise-estate-cleanout.com |
| 9 | boise-furniture-removal | https://boise-furniture-removal.com |
| 10 | boise-hoarding-cleanup | https://boise-hoarding-cleanup.com |
| 11 | boise-hot-tub-removal | https://boise-hot-tub-removal.com |
| 12 | boise-junk-removal | https://boise-junk-removal.com |
| 13 | boise-movers | https://boise-movers.com |
| 14 | boise-roof-repair | https://boise-roof-repair.com |
| 15 | boise-roof-replacement | https://boise-roof-replacement.com |
| 16 | boise-roofing-company | https://boise-roofing-company.com |
| 17 | boise-shed-removal | https://boise-shed-removal.com |
| 18 | boise-tire-removal | https://boise-tire-removal.com |
| 19 | hvac-boise | https://hvac-boise.com |
| 20 | mobile-home-demolition-boise | https://mobile-home-demolition-boise.com |
| 21 | property-cleanout-boise | https://property-cleanout-boise.com |

---

## Changes Made

### Part A: Canonical URL Fixes (399 files)

Fixed hardcoded canonical URL mismatches in page metadata:

| Site | Files Fixed | Old Domain | New Domain |
|------|-------------|------------|------------|
| boise-junk-removal | 128 | boisejunkremovalpros.com | boise-junk-removal.com |
| boise-tire-removal | 116 | boisetireremoval.com | boise-tire-removal.com |
| mobile-home-demolition-boise | 115 | boise-mobile-home-demolition.com | mobile-home-demolition-boise.com |
| boise-dumpster-rental | 32 | boisedumpsterrental.com | boise-dumpster-rental.com |
| boise-appliance-removal | 2 | boise-hoarding-cleanup.com | boise-appliance-removal.com |
| boise-estate-cleanout | 2 | boise-hoarding-cleanup.com | boise-estate-cleanout.com |
| property-cleanout-boise | 2 | wrong domain refs | property-cleanout-boise.com |
| boise-junk-removal (legal) | 2 | boisejunkremovalpros.com | boise-junk-removal.com |

### Part B & C: vercel.json Redirect Configs (21 files created)

Each site now has a `vercel.json` with:

```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "www.{domain}.com" }],
      "destination": "https://{domain}.com/:path*",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

### Part D: Sitemap & Robots.txt Verification

All 21 sites verified:
- `robots.txt` points to correct canonical sitemap URL
- `sitemap.xml` uses correct canonical domain for all URLs
- No cross-domain references found

### Part E: Mixed Content Scan

**Result: CLEAN - No mixed content issues found**

All `http://` occurrences are safe:
- XML namespace declarations (sitemap schema)
- SVG xmlns attributes in inline data URIs
- Lighthouse test reports (localhost references)

No hardcoded external HTTP URLs for assets, scripts, or API calls.

### Part F: DNS Resolution Audit

**Result: ALL DOMAINS RESOLVING CORRECTLY**

All 21 domains:
- Resolve to valid IP addresses
- Serve from Vercel (Server: Vercel header)
- Have HSTS enabled (max-age=63072000)
- Return proper 308 redirects for www and HTTP

---

## Verification Commands

### Quick Health Check (run for any domain)

```bash
# Replace DOMAIN with actual domain (e.g., boise-junk-removal.com)

# 1. Check HTTPS serves correctly
curl -sI "https://DOMAIN" | grep -E "^(HTTP|Server:|X-Vercel)"

# 2. Check HTTP redirects to HTTPS
curl -sI "http://DOMAIN" | grep -E "^(HTTP|Location)"

# 3. Check www redirects to non-www
curl -sI "https://www.DOMAIN" | grep -E "^(HTTP|Location)"

# 4. Check canonical tag in HTML
curl -s "https://DOMAIN" | grep -o '<link rel="canonical"[^>]*>'

# 5. Check robots.txt
curl -s "https://DOMAIN/robots.txt"

# 6. Check sitemap
curl -s "https://DOMAIN/sitemap.xml" | head -20
```

### Full Site Verification Script

```bash
#!/bin/bash
domains=(
  "boise-appliance-removal.com"
  "boise-carpet-removal.com"
  "boise-chiropractors.com"
  "boise-commercial-movers.com"
  "boise-construction-debris-removal.com"
  "boise-demolition.com"
  "boise-dumpster-rental.com"
  "boise-estate-cleanout.com"
  "boise-furniture-removal.com"
  "boise-hoarding-cleanup.com"
  "boise-hot-tub-removal.com"
  "boise-junk-removal.com"
  "boise-movers.com"
  "boise-roof-repair.com"
  "boise-roof-replacement.com"
  "boise-roofing-company.com"
  "boise-shed-removal.com"
  "boise-tire-removal.com"
  "hvac-boise.com"
  "mobile-home-demolition-boise.com"
  "property-cleanout-boise.com"
)

for domain in "${domains[@]}"; do
  echo "=== $domain ==="

  # HTTPS check
  https_status=$(curl -sI "https://$domain" -o /dev/null -w "%{http_code}")
  echo "HTTPS: $https_status"

  # HTTP redirect check
  http_redirect=$(curl -sI "http://$domain" | grep -i "^location:" | head -1)
  echo "HTTP redirect: $http_redirect"

  # WWW redirect check
  www_redirect=$(curl -sI "https://www.$domain" | grep -i "^location:" | head -1)
  echo "WWW redirect: $www_redirect"

  # Server header
  server=$(curl -sI "https://$domain" | grep -i "^server:" | head -1)
  echo "Server: $server"

  echo ""
done
```

---

## Expected Results

For each domain, you should see:

| Check | Expected Result |
|-------|-----------------|
| `https://domain.com` | HTTP/1.1 200 OK |
| `http://domain.com` | 308 redirect to https://domain.com |
| `https://www.domain.com` | 308 redirect to https://domain.com |
| Server header | Server: Vercel |
| HSTS header | Strict-Transport-Security: max-age=63072000 |
| Canonical tag | `<link rel="canonical" href="https://domain.com/...">` |

---

## Post-Deployment Checklist

After deploying changes to Vercel:

- [ ] Verify each site loads correctly at canonical URL
- [ ] Test www redirect (should 308 to non-www)
- [ ] Test HTTP redirect (should 308 to HTTPS)
- [ ] Check Google Search Console for crawl errors
- [ ] Submit updated sitemaps to Google Search Console
- [ ] Monitor 404 errors for any broken internal links
- [ ] Verify security headers are present (X-Frame-Options, etc.)

---

## Notes

1. **Vercel handles HTTPS automatically** - no additional SSL configuration needed
2. **Vercel handles HTTP→HTTPS redirects automatically** - built into platform
3. **WWW redirects configured via vercel.json** - uses 301/308 permanent redirects
4. **Security headers added via vercel.json** - applies to all routes
5. **No shadow domains detected** - all DNS resolving to Vercel infrastructure

---

## Files Modified Summary

- **399 page.tsx files** - canonical URL fixes
- **21 vercel.json files** - created/updated for redirects and headers
- **0 robots.txt files** - all already correct
- **0 sitemap.xml files** - all already correct
