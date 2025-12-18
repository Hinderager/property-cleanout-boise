# Boise Mobile Home Demolition - Microsite

Professional mobile home demolition services website for the Treasure Valley area.

## Site Information

- **Business**: Boise Mobile Home Demolition / Top Shelf Mobile Home Demolition
- **Phone**: (208) 505-9352
- **Service Area**: Treasure Valley, Idaho (Boise, Meridian, Nampa, Caldwell, Eagle, Garden City, Kuna, Star, Middleton, Mountain Home)
- **Services**: Mobile home demolition, manufactured home removal, trailer removal, foundation removal, site clearing

## Architecture

This site follows the full hvac-boise template architecture with:

- **121 Total Pages**
- **19 Components** (matching hvac-boise template)
- **QuoteFormContext** for form state management
- **Hierarchical service structure** (4 main categories, 11 service pages)
- **10 Cities served** with 8 service pages each (90 city pages)
- **6 Blog posts**
- **4 Resource pages** (FAQ, Pricing, Permits, Process)
- **5 About pages** (Main, Careers, Licenses, Testimonials, Why Choose Us)

## Page Structure

```
/                           - Homepage
/contact                    - Contact page
/privacy                    - Privacy policy
/terms                      - Terms of service

/about-us/*                 - 5 pages
/resources/*                - 4 pages
/blogs/*                    - 6 pages
/services/*                 - 12 pages
/cities-served/*            - 90 pages
```

See `SITE_STRUCTURE.txt` for complete page listing.

## Content Guidelines

All content follows conversational, human-sounding writing per CLAUDE.md guidelines:
- No corporate jargon or AI-sounding phrases
- Natural, helpful tone
- Focus on customer needs
- Varied sentence structure
- Direct, honest communication

## Technical Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Custom components + shadcn/ui
- **Icons**: Lucide React
- **TypeScript**: Full TypeScript support

## Build & Deploy

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Generated Content

The `generate-pages.js` script was used to create 101 pages automatically:
- 11 service detail pages
- 10 city main pages
- 80 city-service combination pages

## Key Features

- SEO-optimized with proper metadata on all pages
- Canonical URLs configured
- Mobile-responsive design
- Local SEO focus for Treasure Valley
- Clear call-to-action on every page
- Consistent branding and messaging

## Documentation

- `EXPANSION_SUMMARY.md` - Detailed summary of site expansion
- `SITE_STRUCTURE.txt` - Complete page hierarchy
- `generate-pages.js` - Page generation script

## License

Proprietary - Top Shelf Mobile Home Demolition
