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
    question: 'How much does tire removal cost in Boise?',
    answer: 'Tire removal pricing depends on quantity and location. For small quantities (1-10 tires), expect around $3-5 per tire. Bulk pickups of 50+ tires get better per-tire rates. We provide free quotes over the phone.',
  },
  {
    question: 'Do you pick up tires on rims?',
    answer: 'Yes, we accept tires with or without rims. Tires on rims may have a small additional charge due to the extra weight. Just let us know what you have for an accurate quote.',
  },
  {
    question: 'How fast can you pick up my tires?',
    answer: 'We typically schedule tire pickups within 24-48 hours. Same-day service is often available for urgent situations. Call us at (208) 361-1982 to schedule.',
  },
  {
    question: 'What types of tires do you accept?',
    answer: 'We accept all types of tires including car tires, truck tires, tractor tires, ATV tires, and lawn mower tires. No quantity is too small or too large.',
  },
  {
    question: 'What happens to the tires after pickup?',
    answer: 'All tires are taken to certified recycling facilities. Most get repurposed into rubber mulch, playground surfaces, or industrial fuel. We never dump illegally.',
  },
  {
    question: 'Do you offer commercial tire pickup service?',
    answer: 'Yes, we provide scheduled recurring pickups for auto shops, tire dealers, and car dealerships throughout the Treasure Valley.',
  },
  {
    question: 'What areas do you serve for tire removal?',
    answer: 'We serve Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, and all surrounding Treasure Valley communities.',
  },
  {
    question: 'Is tire removal eco-friendly?',
    answer: 'Yes, we work with certified recycling facilities to ensure proper disposal. Tires are recycled into useful products rather than ending up in landfills or illegally dumped.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Tire Removal Pros - ${city}`,
    "description": `Professional tire removal and disposal services in ${city}, Idaho. We haul away old tires from homes, businesses, and properties. Any quantity, proper recycling.`,
    "url": "https://boise-tire-removal.com",
    "telephone": "+1-208-361-1982",
    "email": "info@boise-tire-removal.com",
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
      "Tire Removal",
      "Tire Disposal",
      "Tire Recycling",
      "Commercial Tire Pickup",
      "Bulk Tire Hauling",
      "Old Tire Pickup"
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "100"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Tire Removal Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Tire Removal Pros"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Professional tire removal and disposal services in ${city} and the Treasure Valley. We haul away old tires and ensure proper recycling.`,
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
