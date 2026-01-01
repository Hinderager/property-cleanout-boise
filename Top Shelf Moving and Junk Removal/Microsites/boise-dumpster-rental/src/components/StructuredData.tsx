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
    question: 'How much does dumpster rental cost in Boise?',
    answer: 'Dumpster rental prices depend on the size you need and how long you keep it. Our 10-yard dumpsters start around $275-$350 for a week. 20-yard dumpsters run $350-$450. We include delivery, pickup, and disposal in our pricing. No hidden fees.',
  },
  {
    question: 'What size dumpster do I need?',
    answer: 'For garage cleanouts or small remodels, a 10 or 15 yard is usually enough. Kitchen or bathroom remodels typically need a 20 yard. Major construction or whole-home cleanouts may need a 30 yard. Call us and we\'ll help you figure it out.',
  },
  {
    question: 'How fast can you deliver a dumpster?',
    answer: 'We offer same-day delivery in most cases if you call before noon. Next-day delivery is almost always available. We know projects come up fast and we try to be as flexible as possible.',
  },
  {
    question: 'What can I put in the dumpster?',
    answer: 'Most household and construction debris is fine—furniture, appliances, drywall, roofing, wood, metal, concrete, yard waste. We can\'t accept hazardous materials like paint, chemicals, batteries, or tires.',
  },
  {
    question: 'How long can I keep the dumpster?',
    answer: 'Standard rental is 7 days, but we can extend if you need more time. Just let us know. We charge a small daily fee for extensions. Many customers keep theirs for 2-3 weeks during larger projects.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We deliver dumpsters throughout the Treasure Valley including Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding communities. If you\'re unsure if we serve your area, give us a call at (208) 361-1982.',
  },
  {
    question: 'Will the dumpster damage my driveway?',
    answer: 'Our drivers are careful and experienced. We place boards under the wheels to protect your concrete or asphalt. If you have concerns about placement, just let us know and we\'ll work with you.',
  },
  {
    question: 'Do I need a permit for a dumpster?',
    answer: 'If the dumpster goes in your driveway or on your property, no permit is needed. If it needs to go on the street, you may need a permit from the city. We can help you figure out what\'s required.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Dumpster Rental Pros - ${city}`,
    "description": `Affordable dumpster rental in ${city}, Idaho. Same-day delivery, competitive pricing, multiple sizes available. Licensed and insured.`,
    "url": "https://boise-dumpster-rental.com",
    "telephone": "+1-208-361-1982",
    "email": "info@topshelfpros.com",
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
      "Dumpster Rental",
      "Roll-Off Dumpster",
      "Construction Dumpster",
      "Residential Dumpster",
      "Roofing Dumpster",
      "Debris Container Rental"
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
    "serviceType": "Dumpster Rental Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dumpster Rental Pros"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Affordable dumpster rental services in ${city} and the Treasure Valley. Same-day delivery, competitive pricing, multiple sizes available.`,
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
