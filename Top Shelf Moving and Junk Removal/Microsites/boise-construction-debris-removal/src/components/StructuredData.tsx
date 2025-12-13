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
    question: 'How much does construction debris removal cost in Boise?',
    answer: 'Pricing depends on the volume and type of debris. We charge based on how much space your debris takes up in our truck, plus disposal fees for heavy materials like concrete. Most jobs run between $150 and $600. We give you a firm price before we load anything.',
  },
  {
    question: 'What types of construction debris do you remove?',
    answer: 'We haul away just about everything from a job site—drywall, lumber, plywood, roofing shingles, concrete, brick, old fixtures, cabinets, flooring, insulation, and more. The only things we can\'t handle are hazardous materials like asbestos or lead paint.',
  },
  {
    question: 'Can you do same-day debris removal?',
    answer: 'Yes, we offer same-day service for most jobs if you call before noon. We understand construction projects run on tight schedules and sometimes debris needs to go today. Next-day service is almost always available.',
  },
  {
    question: 'Do you work with contractors?',
    answer: 'Absolutely. Many of our customers are general contractors, roofers, and remodelers. We can set up recurring pickups for ongoing projects or come on-demand when you need us. We also offer contractor pricing for regular customers.',
  },
  {
    question: 'What areas do you serve for construction debris removal?',
    answer: 'We remove construction debris throughout the Treasure Valley including Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, and surrounding areas. If you\'re not sure if we cover your location, give us a call at (208) 361-1982.',
  },
  {
    question: 'Do you recycle construction materials?',
    answer: 'We do our best to keep materials out of the landfill. Clean wood, metal, cardboard, and concrete can often be recycled. We work with local recycling facilities to divert as much as possible.',
  },
  {
    question: 'How do I prepare for debris pickup?',
    answer: 'Just have the debris accessible and piled in one area if possible. We\'ll handle the loading. If it\'s inside a building, just make sure we have a clear path. You don\'t need to sort anything—we take care of that.',
  },
  {
    question: 'Do you remove concrete and heavy materials?',
    answer: 'Yes, we remove concrete, brick, block, and other heavy materials. We have the equipment and manpower to handle these materials safely. Heavy debris may incur additional disposal fees due to weight.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Construction Debris Pros - ${city}`,
    "description": `Professional construction debris removal in ${city}, Idaho. Job site cleanup, renovation debris, and recycling services. Same-day service available.`,
    "url": "https://boise-construction-debris-removal.com",
    "telephone": "+1-208-361-1982",
    "email": "info@boise-construction-debris-removal.com",
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
      "Construction Debris Removal",
      "Job Site Cleanup",
      "Renovation Debris Removal",
      "Drywall Removal",
      "Concrete Debris Removal",
      "Roofing Debris Removal"
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
    "serviceType": "Construction Debris Removal Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Construction Debris Pros"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Professional construction debris removal and job site cleanup in ${city} and the Treasure Valley. Same-day service available. Licensed and insured.`,
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
