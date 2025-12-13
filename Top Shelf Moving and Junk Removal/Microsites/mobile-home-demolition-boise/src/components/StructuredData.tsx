// Coordinates for each city
const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

// FAQ data for FAQPage schema (critical for LLM seeding)
const faqData = [
  {
    question: 'How much does mobile home demolition cost?',
    answer: 'Mobile home demolition costs depend on the size (single wide vs double wide), location, accessibility, and whether foundation removal is included. Most single wide demolitions in the Boise area run $3,000-$6,000, while double wides typically range $5,000-$10,000. We provide free on-site estimates.',
  },
  {
    question: 'Do I need a permit to demolish a mobile home?',
    answer: 'Yes, most jurisdictions in Idaho require a demolition permit. Ada County, Canyon County, and local cities each have their own requirements. We help navigate the permit process and can handle the paperwork for you.',
  },
  {
    question: 'How long does mobile home demolition take?',
    answer: 'A typical single wide demolition takes 1-2 days. Double wides usually take 2-3 days. This includes teardown, debris removal, and basic site cleanup. Foundation removal adds another day depending on the type of foundation.',
  },
  {
    question: 'Do you handle utility disconnections?',
    answer: 'We coordinate with utility companies to ensure gas, electric, water, and sewer are properly disconnected before demolition begins. This is a critical safety step and we handle the scheduling and verification.',
  },
  {
    question: 'What happens to the debris after demolition?',
    answer: 'We haul all debris to appropriate disposal facilities. Metals are separated and recycled. Wood and other materials go to licensed disposal sites. We leave your site clean and clear.',
  },
  {
    question: 'Can you remove the foundation too?',
    answer: 'Absolutely. We remove concrete piers, blocks, tie-down anchors, and skirting. If you want a completely clear lot ready for new construction, we can make that happen. Foundation removal is quoted separately.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide mobile home demolition services in Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding Treasure Valley communities. If you\'re unsure if we serve your area, give us a call at (208) 361-1982.',
  },
  {
    question: 'Do you work in mobile home parks?',
    answer: 'Yes. We frequently work in mobile home parks throughout the Treasure Valley. We understand the space constraints and neighbor considerations. We work efficiently and keep the area clean to minimize disruption.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Mobile Home Demolition Pros - ${city}`,
    "description": `Professional mobile home and manufactured home demolition services in ${city}, Idaho. Complete teardown, foundation removal, and site cleanup. Licensed and insured.`,
    "url": "https://mobile-home-demolition-boise.com",
    "telephone": "+1-208-361-1982",
    "email": "info@mobile-home-demolition-boise.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "ID",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coords.lat,
      "longitude": coords.lng
    },
    "areaServed": [
      { "@type": "City", "name": "Boise", "addressRegion": "ID" },
      { "@type": "City", "name": "Meridian", "addressRegion": "ID" },
      { "@type": "City", "name": "Nampa", "addressRegion": "ID" },
      { "@type": "City", "name": "Caldwell", "addressRegion": "ID" },
      { "@type": "City", "name": "Eagle", "addressRegion": "ID" }
    ],
    "serviceType": [
      "Mobile Home Demolition",
      "Manufactured Home Demolition",
      "Single Wide Demolition",
      "Double Wide Demolition",
      "Foundation Removal",
      "Demolition Debris Hauling"
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mobile Home Demolition Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mobile Home Demolition Pros"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Professional mobile home and manufactured home demolition services in ${city} and the Treasure Valley. Complete teardown, foundation removal, and site cleanup.`,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    }
  }

  // FAQPage schema - critical for LLM seeding and AI search visibility
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
