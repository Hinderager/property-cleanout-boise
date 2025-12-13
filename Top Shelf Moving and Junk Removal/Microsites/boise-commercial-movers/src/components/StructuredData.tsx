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
    question: 'How much does commercial moving cost?',
    answer: 'Commercial moving costs depend on the size of your office, amount of equipment, distance, and complexity of the move. We provide free, detailed estimates after assessing your specific needs. Most office moves in the Treasure Valley range from $1,500 for small offices to $15,000+ for large commercial relocations.',
  },
  {
    question: 'Can you move us over the weekend to avoid business disruption?',
    answer: 'Absolutely. Weekend and after-hours moves are our specialty for commercial clients. We understand that every hour of downtime costs your business money. We can execute your entire move outside of business hours so you\'re operational when your employees arrive Monday morning.',
  },
  {
    question: 'How do you handle IT equipment and servers?',
    answer: 'We have specialized training for moving IT infrastructure. We properly disconnect, label, pack with anti-static materials, and transport computers, servers, and networking equipment. We can coordinate with your IT team for reconnection, or handle the entire process ourselves.',
  },
  {
    question: 'Do you provide packing services for office moves?',
    answer: 'Yes, we offer complete packing services including boxes, packing materials, and labeling systems. We can pack everything from individual desks to entire departments. Our labeling system ensures everything ends up exactly where it belongs in your new space.',
  },
  {
    question: 'How far in advance should we schedule a commercial move?',
    answer: 'We recommend booking 4-6 weeks in advance for large office moves to ensure availability and allow time for proper planning. However, we can accommodate shorter timelines when needed—even emergency relocations with just a few days notice.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide commercial moving services in Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding Treasure Valley communities. We can handle moves anywhere in the region.',
  },
  {
    question: 'Are you insured for commercial moves?',
    answer: 'Yes, we carry comprehensive commercial liability insurance that covers your equipment, furniture, and property during the move. We can provide certificates of insurance upon request, which many property managers require.',
  },
  {
    question: 'Can you help with furniture installation and setup?',
    answer: 'Yes, we provide complete furniture installation services. We can assemble new cubicle systems, configure workstations, and arrange furniture according to your floor plan. Our team has experience with all major office furniture brands and modular systems.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Commercial Moving Pros - ${city}`,
    "description": `Professional commercial and office moving services in ${city}, Idaho. Expert business relocation with minimal downtime. Licensed and insured.`,
    "url": "https://boise-commercial-movers.com",
    "telephone": "+1-208-361-1982",
    "email": "info@boise-commercial-movers.com",
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
      "Commercial Moving",
      "Office Relocation",
      "IT Equipment Moving",
      "Furniture Installation",
      "Warehouse Moving",
      "Business Relocation"
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
    "serviceType": "Commercial Moving Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Commercial Moving Pros"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Professional commercial and office moving services in ${city} and the Treasure Valley. We provide expert business relocation with minimal downtime.`,
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
