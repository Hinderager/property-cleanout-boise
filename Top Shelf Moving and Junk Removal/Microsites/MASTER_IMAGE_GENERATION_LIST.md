# Master Image Generation List - All Microsites

**Generated:** December 19, 2025
**Total Images Needed:** ~150 images

---

## Summary by Priority

| Priority | Site | Missing | Status |
|----------|------|---------|--------|
| 1 | boise-junk-removal | 38 | Prompts ready |
| 1 | boise-roof-repair | 32 | Prompts ready |
| 2 | boise-carpet-removal | 15 | Prompts ready (delete HVAC images) |
| 2 | boise-commercial-movers | 11 | Prompts ready |
| 2 | boise-estate-cleanout | 10 | Prompts ready |
| 2 | boise-shed-removal | 11 | Prompts ready (fix filename spaces) |
| 3 | boise-furniture-removal | 7 | See below |
| 3 | boise-roof-replacement | 11 | See below |
| 3 | boise-chiropractors | 5 | See below |
| 3 | boise-movers | 4 | Has HVAC orphans |
| 4 | boise-tire-removal | 3 | See below |
| 4 | boise-roofing-company | 1 | See below |
| 4 | boise-construction-debris | 2 | og-image + asset-7 |
| 4 | boise-dumpster-rental | 1 | og-image only |

---

## Sites With Detailed Prompt Files

Each site below has an `IMAGE_GENERATION_PROMPTS.md` file in its root directory:

1. **boise-junk-removal/** - 38 images (city + service + item-specific)
2. **boise-roof-repair/** - 32 images (city + damage types + services)
3. **boise-carpet-removal/** - 15 images (city + service types)
4. **boise-commercial-movers/** - 11 images (hero + services + blogs)
5. **boise-estate-cleanout/** - 10 images (all city-specific)
6. **boise-shed-removal/** - 11 images (city + services)

---

## Quick Prompt Reference for Remaining Sites

### boise-furniture-removal (7 images needed)

**City images needed:**
- boise-furniture.webp, meridian-furniture.webp, nampa-furniture.webp
- caldwell-furniture.webp, eagle-furniture.webp, star-furniture.webp
- kuna-furniture.webp

**Prompt template:** "Documentary photo of furniture removal workers carrying [furniture item] from [City], Idaho home. Workers in dark blue polo shirts and blue jeans. White truck in driveway. Natural daylight, iPhone candid style."

---

### boise-roof-replacement (11 images needed)

**Note:** Site has 60 HVAC images that should be deleted first.

**Needed:** City-specific roof replacement hero images
- boise-roof-replacement.webp, meridian-roof-replacement.webp, etc.

**Prompt template:** "Documentary photo of roofing crew installing new shingles on [City], Idaho residential home. Workers on roof with safety harnesses. Shingle bundles, nail guns visible. Blue sky, warm afternoon light. iPhone candid photography."

---

### boise-chiropractors (5 blog images needed)

**Note:** Site has HVAC images that should be deleted.

**Blog images needed:**
- choosing-chiropractor.webp
- chiropractic-adjustment.webp
- back-pain-relief.webp
- sports-injury-treatment.webp
- wellness-care.webp

**Prompt template:** "Warm, professional photo of chiropractor working with patient in clean modern office. Natural light from windows. Professional but approachable atmosphere. Documentary style."

---

### boise-tire-removal (3 images needed)

- tire-disposal.webp
- commercial-tire-removal.webp
- tire-recycling.webp

**Prompt template:** "Documentary photo of workers loading/stacking old tires for removal. Work truck or trailer filled with tires. Garage or commercial setting. iPhone candid style."

---

### boise-roofing-company (1 image needed)

- og-image.jpg (social sharing image)

**Prompt:** "Professional hero image of roofing company. Roofers on residential roof in Boise, Idaho. Logo overlay space at bottom. 1200x630px for social sharing."

---

## Nano Banana Pro Global Settings

Apply these to ALL images:

```
Style: Documentary realism, casual iPhone photo aesthetic
Lighting: Natural, ambient daylight (no studio lighting)
Workers: 1-2 in dark blue/gray polo with subtle "Top Shelf" branding, blue jeans, work gloves
Vehicles: White truck or trailer with minimal branding
Quality: Photorealistic, slightly imperfect (dust, motion blur OK)
NO: Stock photo posing, staged lighting, forced smiles, overly clean scenes
```

---

## Geo-Tagging Requirements

Per CLAUDE.md, ALL images must have EXIF GPS coordinates within these ranges:

| City | Latitude | Longitude |
|------|----------|-----------|
| Boise | 43.60-43.65 | -116.17 to -116.20 |
| Meridian | 43.60-43.62 | -116.36 to -116.40 |
| Nampa | 43.54-43.58 | -116.54 to -116.58 |
| Caldwell | 43.66-43.68 | -116.66 to -116.70 |
| Eagle | 43.68-43.70 | -116.32 to -116.36 |
| Garden City | 43.64-43.66 | -116.20 to -116.24 |
| Kuna | 43.48-43.50 | -116.38 to -116.42 |
| Star | 43.68-43.70 | -116.46 to -116.50 |
| Middleton | 43.70-43.72 | -116.58 to -116.62 |

**Use random coordinates within each city's range for natural variation.**

---

## Image Specifications

- **Format:** WebP (primary), JPG for og-images
- **Dimensions:** 1920x1080 (16:9) for hero images, 1200x630 for og-images
- **File size:** Under 300KB each (optimize for web)
- **Naming:** kebab-case (hyphens, no spaces)

---

## Action Items

1. **Generate images** using prompts in each site's IMAGE_GENERATION_PROMPTS.md
2. **Add geo-tags** to all generated images
3. **Delete orphaned HVAC images** from:
   - boise-carpet-removal
   - boise-movers
   - boise-chiropractors
   - boise-roof-replacement
4. **Fix filename issues** in boise-shed-removal code (spaces to hyphens)
5. **Create og-image.jpg** for sites missing social sharing images

---

## Sites With No Image Issues

These sites have all images present:
- boise-demolition
- boise-hot-tub-removal
- boise-hoarding-cleanup
- boise-appliance-removal
- hvac-boise
- property-cleanout-boise
- mobile-home-demolition-boise
