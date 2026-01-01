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
    question: 'How much does mobile home demolition cost in Boise?',
    answer: 'Cost depends on size, location, and what you need removed. Single wides usually run $3,500-$6,500. Double wides range from $6,000-$12,000. If you need foundation removal, add another $1,500-$3,500 depending on the setup. We give free quotes after looking at your specific situation.',
  },
  {
    question: 'Do I need a permit to demolish a mobile home in Idaho?',
    answer: 'Yes, you need a demolition permit in most areas. Ada County, Canyon County, Meridian, Nampa—they all have their own rules. We know what each jurisdiction requires and can handle the permit application for you. It\'s part of what we do.',
  },
  {
    question: 'How long does a mobile home demo take?',
    answer: 'Single wides take 1-2 days from start to finish. Double wides need 2-3 days. That includes teardown, loading, and hauling everything away. Foundation removal adds another day or so. Weather and site access can affect timing.',
  },
  {
    question: 'What\'s included in mobile home demolition service?',
    answer: 'We handle the whole thing. Utility coordination, demolition, debris hauling, metal recycling, and site cleanup. You get a bare lot when we\'re done. Foundation removal is separate but we do that too if you need it.',
  },
  {
    question: 'Who disconnects the utilities before demo?',
    answer: 'We coordinate with the utility companies but you\'ll need to request disconnection as the property owner. We make sure gas, electric, water, and sewer are properly shut off and capped before we touch anything. Safety first.',
  },
  {
    question: 'Can you remove the foundation and piers?',
    answer: 'Absolutely. We pull concrete piers, remove tie-down anchors, take out skirting, and haul it all away. Some folks want a completely level lot and we can do that. Foundation work is quoted separately from the demo.',
  },
  {
    question: 'What areas do you serve in Idaho?',
    answer: 'We provide mobile home demolition services in Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding Treasure Valley communities. If you\'re not sure if we cover your area, give us a call at (208) 943-5231.',
  },
  {
    question: 'Do you work in mobile home parks?',
    answer: 'Yes. We work in mobile home parks all the time. We understand the tight spaces and the need to keep things clean for neighbors. We coordinate with park management and work efficiently to minimize disruption.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Boise Mobile Home Demolition - ${city}`,
    "description": `Professional mobile home and manufactured home demolition services in ${city}, Idaho. Complete teardown, foundation removal, and site cleanup. Licensed and insured.`,
    "url": "https://mobile-home-demolition-boise.com",
    "telephone": "+1-208-943-5231",
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
      "Manufactured Home Removal",
      "Trailer Demolition",
      "Mobile Home Disposal",
      "Site Clearing",
      "Foundation Removal"
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
      "name": "Boise Mobile Home Demolition"
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
