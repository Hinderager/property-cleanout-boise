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
    question: 'How quickly can you complete a property cleanout?',
    answer: 'Most property cleanouts can be completed within 1-3 days, depending on the size and condition of the property. For urgent situations like foreclosures with tight deadlines, we offer same-day and next-day service. We work efficiently to minimize vacancy time.',
  },
  {
    question: 'What types of properties do you clean out?',
    answer: 'We handle all types of property cleanouts including foreclosure properties, rental turnovers, eviction cleanouts, inherited properties, estate cleanouts, and REO properties. We work with property managers, landlords, banks, real estate agents, and homeowners.',
  },
  {
    question: 'Do you handle legal requirements for eviction cleanouts?',
    answer: 'Yes. We understand the legal requirements for handling tenant belongings after an eviction. We document all items, store valuables as required by Idaho law, and provide proper documentation. We work closely with property managers to ensure compliance.',
  },
  {
    question: 'What happens to items left in the property?',
    answer: 'We sort through everything carefully. Items in good condition are donated to local charities. Recyclables are properly recycled. We only send to the landfill what truly can\'t be salvaged. For estate cleanouts, we\'ll help identify valuables and sentimental items before removal.',
  },
  {
    question: 'How much does a property cleanout cost?',
    answer: 'Cost depends on the size of the property, amount of items, and specific requirements. We provide free, no-obligation estimates. Most residential property cleanouts in the Boise area range from $300 for small units to $3,000+ for larger homes with significant contents.',
  },
  {
    question: 'Do you offer broom-clean service?',
    answer: 'Yes! Our standard service leaves properties broom-clean and ready for the next tenant, sale, or renovation. This includes removing all items, sweeping floors, and basic cleanup. Deep cleaning services are available upon request.',
  },
  {
    question: 'Can you work with tight timelines for bank-owned properties?',
    answer: 'Absolutely. We regularly work with banks, asset managers, and REO agents who need fast turnarounds. We understand the urgency of clearing foreclosure properties and can often accommodate same-day or next-day scheduling.',
  },
  {
    question: 'What areas do you serve for property cleanouts?',
    answer: 'We provide property cleanout services in Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding Treasure Valley communities. If you\'re unsure if we serve your area, give us a call at (208) 361-1982.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Property Cleanout Pros - ${city}`,
    "description": `Professional property cleanout services in ${city}, Idaho. Foreclosure cleanouts, rental turnovers, eviction cleanouts, and estate cleanouts. Licensed and insured.`,
    "url": "https://property-cleanout-boise.com",
    "telephone": "+1-208-361-1982",
    "email": "info@property-cleanout-boise.com",
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
      "Property Cleanout",
      "Foreclosure Cleanout",
      "Rental Turnover",
      "Eviction Cleanout",
      "Estate Cleanout",
      "REO Property Cleanout"
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
    "serviceType": "Property Cleanout Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Property Cleanout Pros"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Professional property cleanout services in ${city} and the Treasure Valley. We provide foreclosure cleanouts, rental turnovers, eviction cleanouts, and estate cleanouts.`,
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
