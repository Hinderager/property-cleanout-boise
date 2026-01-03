# Wikidata Business Entries Setup Guide

## Overview

This guide provides instructions for creating Wikidata entries for 16 Top Shelf local service businesses in Boise, Idaho. Wikidata is a free and open knowledge base that can be read and edited by both humans and machines, serving as structured data source for Wikipedia, Google Knowledge Graph, and AI systems.

## Why Create Wikidata Entries?

- **SEO Benefits**: Google pulls structured data from Wikidata for Knowledge Panels
- **LLM Visibility**: AI systems like ChatGPT, Claude, and Perplexity reference Wikidata
- **Brand Authority**: Establishes legitimacy as an identifiable entity
- **Linked Data**: Creates connections between your business and related concepts

---

## Prerequisites

1. **Wikidata Account**: Create a free account at https://www.wikidata.org/
2. **Account Age**: New accounts may have editing restrictions for the first few days
3. **Understanding of Wikidata**: Familiarize yourself with basic concepts at https://www.wikidata.org/wiki/Help:Items

---

## Method 1: QuickStatements Batch Import (Recommended)

QuickStatements is a tool that allows batch creation of Wikidata items using a simple text format.

### Step-by-Step Instructions

1. **Log in to Wikidata**
   - Go to https://www.wikidata.org/
   - Log in with your Wikidata account

2. **Access QuickStatements**
   - Go to https://quickstatements.toolforge.org/
   - Click "Log in" and authorize with your Wikidata credentials

3. **Create a New Batch**
   - Click "New Batch" in the top menu
   - Select "V1" format

4. **Import the Commands**
   - Open the file `quickstatements-batch.txt` from this folder
   - Copy ALL content (excluding lines starting with `//`)
   - Paste into the QuickStatements text area
   - Click "Import V1 commands"

5. **Review and Execute**
   - Review the preview to ensure everything looks correct
   - Click "Run" to execute immediately, or "Run in background" for larger batches
   - Wait for completion (may take several minutes)

6. **Record the Q IDs**
   - After completion, note the new Q IDs assigned to each business
   - Update your websites and Google Business Profiles with these IDs

### Important Notes for QuickStatements

- Lines starting with `//` are comments and will be ignored
- Each `CREATE` command starts a new item
- `LAST` refers to the most recently created item
- The format is TAB-separated (ensure tabs are preserved when copying)

---

## Method 2: Manual Creation (One at a Time)

If QuickStatements is not available or you prefer more control, create entries manually.

### Step-by-Step for Each Business

1. **Go to Wikidata**
   - Navigate to https://www.wikidata.org/

2. **Create New Item**
   - Click "Create a new Item" in the left sidebar
   - Or go directly to: https://www.wikidata.org/wiki/Special:NewItem

3. **Enter Basic Information**
   - **Language**: English (en)
   - **Label**: Business name (e.g., "Top Shelf Junk Removal")
   - **Description**: Short description (e.g., "junk removal and hauling service company in Boise, Idaho")
   - **Aliases**: Alternative names (optional)

4. **Click "Create"**

5. **Add Statements**
   After creation, add the following properties by clicking "+ add statement":

   | Property | Value | Notes |
   |----------|-------|-------|
   | instance of (P31) | business (Q4830453) | Or more specific type |
   | country (P17) | United States (Q30) | |
   | located in administrative territorial entity (P131) | Idaho (Q1221) | |
   | headquarters location (P159) | Boise (Q35775) | |
   | industry (P452) | See business-specific value | |
   | official website (P856) | Full URL with https:// | |
   | phone number (P1329) | +1-208-505-9734 | International format |
   | inception (P571) | 2020 | Year founded |

6. **Save Each Statement**
   - Click "publish" after adding each statement

---

## Business-Specific Information

### Property Reference Table

| # | Business Name | Instance Of (P31) | Industry (P452) |
|---|--------------|-------------------|-----------------|
| 1 | Top Shelf Junk Removal | business (Q4830453) | waste management (Q180388) |
| 2 | Top Shelf Appliance Removal | business (Q4830453) | waste management (Q180388) |
| 3 | Top Shelf Carpet Removal | business (Q4830453) | waste management (Q180388) |
| 4 | Top Shelf Commercial Movers | moving company (Q1757263) | relocation service (Q642121) |
| 5 | Top Shelf Construction Debris Removal | business (Q4830453) | waste management (Q180388) |
| 6 | Top Shelf Demolition | demolition company (Q306847) | construction industry (Q13405640) |
| 7 | Top Shelf Dumpster Rental | business (Q4830453) | waste management (Q180388) |
| 8 | Top Shelf Estate Cleanout | business (Q4830453) | estate liquidation (Q5400671) |
| 9 | Top Shelf Furniture Removal | business (Q4830453) | waste management (Q180388) |
| 10 | Top Shelf Hoarding Cleanup | business (Q4830453) | waste management (Q180388) |
| 11 | Top Shelf Hot Tub Removal | business (Q4830453) | waste management (Q180388) |
| 12 | Top Shelf Movers | moving company (Q1757263) | relocation service (Q642121) |
| 13 | Top Shelf Roofing | roofing contractor (Q27057193) | construction industry (Q13405640) |
| 14 | Top Shelf Shed Removal | business (Q4830453) | waste management (Q180388) |
| 15 | Boise Chiropractors | business (Q4830453) | chiropractic (Q658096) |
| 16 | Top Shelf Dumpsters | business (Q4830453) | waste management (Q180388) |

### Website URLs

| Business | Website URL |
|----------|-------------|
| Top Shelf Junk Removal | https://boise-junk-removal.com |
| Top Shelf Appliance Removal | https://boise-appliance-removal.com |
| Top Shelf Carpet Removal | https://boise-carpet-removal.com |
| Top Shelf Commercial Movers | https://boise-commercial-movers.com |
| Top Shelf Construction Debris Removal | https://boise-construction-debris-removal.com |
| Top Shelf Demolition | https://boise-demolition.com |
| Top Shelf Dumpster Rental | https://boise-dumpster-rental.com |
| Top Shelf Estate Cleanout | https://boise-estate-cleanout.com |
| Top Shelf Furniture Removal | https://boise-furniture-removal.com |
| Top Shelf Hoarding Cleanup | https://boise-hoarding-cleanup.com |
| Top Shelf Hot Tub Removal | https://boise-hot-tub-removal.com |
| Top Shelf Movers | https://boise-movers.com |
| Top Shelf Roofing | https://boise-roofing-company.com |
| Top Shelf Shed Removal | https://boise-shed-removal.com |
| Boise Chiropractors | https://boise-chiropractors.com |
| Top Shelf Dumpsters | https://topshelfdumpsters.com |

---

## Wikidata Properties Reference

### Core Properties

| Property ID | Property Name | Description |
|-------------|---------------|-------------|
| P31 | instance of | What type of entity this is |
| P17 | country | Country where the business operates |
| P131 | located in administrative territorial entity | State/region location |
| P159 | headquarters location | City where headquarters is located |
| P452 | industry | The industry/sector the business operates in |
| P856 | official website | The official website URL |
| P1329 | phone number | Contact phone number |
| P571 | inception | Date the business was founded |

### Key Q Items

| Q ID | Label | Description |
|------|-------|-------------|
| Q4830453 | business | Commercial enterprise |
| Q1757263 | moving company | Business providing relocation services |
| Q306847 | demolition company | Company that demolishes buildings |
| Q27057193 | roofing contractor | Business providing roofing services |
| Q35775 | Boise | Capital city of Idaho |
| Q1221 | Idaho | U.S. state |
| Q30 | United States | Country |
| Q180388 | waste management | Waste collection and disposal industry |
| Q642121 | relocation service | Moving and relocation industry |
| Q13405640 | construction industry | Construction sector |
| Q658096 | chiropractic | Healthcare specialty |
| Q5400671 | estate liquidation | Estate sale/cleanout industry |

---

## After Creating Entries

### 1. Record Your Q IDs

After creating each entry, record the assigned Q ID (e.g., Q123456789). You can use this tracking sheet:

| Business | Q ID | Created Date | Status |
|----------|------|--------------|--------|
| Top Shelf Junk Removal | | | |
| Top Shelf Appliance Removal | | | |
| Top Shelf Carpet Removal | | | |
| Top Shelf Commercial Movers | | | |
| Top Shelf Construction Debris Removal | | | |
| Top Shelf Demolition | | | |
| Top Shelf Dumpster Rental | | | |
| Top Shelf Estate Cleanout | | | |
| Top Shelf Furniture Removal | | | |
| Top Shelf Hoarding Cleanup | | | |
| Top Shelf Hot Tub Removal | | | |
| Top Shelf Movers | | | |
| Top Shelf Roofing | | | |
| Top Shelf Shed Removal | | | |
| Boise Chiropractors | | | |
| Top Shelf Dumpsters | | | |

### 2. Add Q IDs to Websites

Add structured data referencing the Wikidata Q ID:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Top Shelf Junk Removal",
  "sameAs": [
    "https://www.wikidata.org/wiki/QXXXXXXX"
  ]
}
</script>
```

### 3. Update Google Business Profiles

If possible, link your Wikidata entries to your Google Business Profiles for enhanced Knowledge Panel visibility.

---

## Troubleshooting

### Common Issues

1. **"Permission denied" error**
   - New accounts have restrictions. Wait 4+ days before creating items.

2. **"Item already exists" warning**
   - Search Wikidata first to ensure the business does not already exist.

3. **QuickStatements fails**
   - Check for proper TAB separation (not spaces)
   - Ensure all Q IDs are valid
   - Try smaller batches

4. **Website URL rejected**
   - Ensure URL includes https://
   - URL must be the exact official website

### Getting Help

- Wikidata Help: https://www.wikidata.org/wiki/Help:Contents
- QuickStatements Help: https://www.wikidata.org/wiki/Help:QuickStatements
- Wikidata Project Chat: https://www.wikidata.org/wiki/Wikidata:Project_chat

---

## Files in This Folder

| File | Description |
|------|-------------|
| `WIKIDATA-SETUP-GUIDE.md` | This guide |
| `wikidata-business-data.json` | Complete structured data for all 16 businesses |
| `quickstatements-batch.txt` | Ready-to-use QuickStatements import file |

---

## References

- [Wikidata WikiProject Companies](https://www.wikidata.org/wiki/Wikidata:WikiProject_Companies)
- [Wikidata WikiProject Companies/Properties](https://www.wikidata.org/wiki/Wikidata:WikiProject_Companies/Properties)
- [QuickStatements Documentation](https://www.wikidata.org/wiki/Help:QuickStatements)
- [QuickStatements 3.0 User Guide](https://meta.wikimedia.org/wiki/QuickStatements_3.0/Documentation/User_guide)
- [Wikidata Business Item (Q4830453)](https://www.wikidata.org/wiki/Q4830453)
- [Boise, Idaho (Q35775)](https://www.wikidata.org/wiki/Q35775)

---

*Document created: 2026-01-03*
