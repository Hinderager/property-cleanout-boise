# GA4 Quick Reference - Microsites

## Tracking IDs

| Site | Primary GA4 | Secondary GA4 | Google Ads | Meta Pixel |
|------|-------------|---------------|------------|------------|
| boise-commercial-movers | G-581QKP6ZE5 | - | - | - |
| boise-construction-debris-removal | G-581QKP6ZE5 | - | - | 533217938868618 |
| boise-demolition | G-581QKP6ZE5 | G-46RY05JDNS | AW-11134633087 | 533217938868618 |

## Implementation Status

| Site | Status | Issues Fixed | Action Required |
|------|--------|--------------|-----------------|
| boise-commercial-movers | ✅ Ready | None | Deploy + GA4 UI config |
| boise-construction-debris-removal | ✅ Ready | None | Deploy + GA4 UI config |
| boise-demolition | ✅ Fixed | Duplicate scripts removed | **Deploy ASAP** + GA4 UI config |

## Critical Fix Summary

**boise-demolition:**
- ❌ **Before:** 2 gtag.js script loads, 2 function declarations → potential conflicts
- ✅ **After:** 1 script load, 1 function, 3 configs → optimized and correct

## Deployment Priority

1. **URGENT:** Deploy boise-demolition (has fixes)
2. **Standard:** Deploy other two sites (no code changes, just .env setup)

## Post-Deployment Checklist

- [ ] Create .env.local from .env.local.example for each site
- [ ] Test in browser: Open DevTools → Network → filter "collect" → verify requests
- [ ] Configure internal traffic filters in GA4 UI
- [ ] Check GA4 Realtime reports
- [ ] Set up conversions for form submissions

## Quick Test Commands

```bash
# Test GA4 firing (in browser console)
dataLayer

# Should return an array with tracking data
# No errors = working correctly
```

## GA4 Properties to Configure

1. **G-581QKP6ZE5** - Shared across all 3 sites
2. **G-46RY05JDNS** - boise-demolition only

## Support

See full report: `GA4-IMPLEMENTATION-REPORT.md`
