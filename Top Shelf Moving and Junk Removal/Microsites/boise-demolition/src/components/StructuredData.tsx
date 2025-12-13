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
    question: 'How much does demolition cost?',
    answer: 'Demolition costs vary based on the size and type of structure, accessibility, materials involved, and disposal requirements. We provide free, detailed estimates after assessing your project. Small shed demolitions might start around $500, while larger structures can range from $3,000 to $15,000+.',
  },
  {
    question: 'Do I need a permit for demolition?',
    answer: 'Most demolition projects in Boise require permits, especially for larger structures. We can help you navigate the permit process and ensure all requirements are met. We handle permit applications for many of our clients as part of our service.',
  },
  {
    question: 'What happens to the debris?',
    answer: 'We haul away all demolition debris as part of our service. Materials are sorted—concrete and metal are recycled when possible, and the rest is properly disposed of at licensed facilities. Your site is left clean and ready for whatever comes next.',
  },
  {
    question: 'How long does a demolition project take?',
    answer: 'Timeline depends on the project size. A small shed can be demolished and removed in a few hours. A house demolition typically takes 2-5 days including debris removal. We\'ll give you a realistic timeline during your estimate.',
  },
  {
    question: 'Do you handle utility disconnection?',
    answer: 'Yes, we can coordinate with utility companies to ensure gas, electric, water, and sewer are properly disconnected before demolition begins. This is an important safety step that\'s included in our full-service approach.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide demolition services in Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding Treasure Valley communities. We can handle projects anywhere in the region.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, we are fully licensed and carry comprehensive liability insurance. We can provide certificates of insurance upon request. Your property and our workers are protected throughout the project.',
  },
  {
    question: 'Can you demolish just part of a structure?',
    answer: 'Absolutely. We specialize in selective demolition—removing specific sections while preserving what remains. This is common for renovation projects like kitchen or bathroom tearouts, room additions, or removing attached garages.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Demolition Pros - ${city}`,
    "description": `Professional demolition services in ${city}, Idaho. Residential and commercial demolition, interior demo, and complete debris removal. Licensed and insured.`,
    "url": "https://boise-demolition.com",
    "telephone": "+1-208-361-1982",
    "email": "info@boise-demolition.com",
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
      "Demolition Services",
      "Residential Demolition",
      "Commercial Demolition",
      "Interior Demolition",
      "Shed Demolition",
      "Debris Removal"
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
    "serviceType": "Demolition Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Demolition Pros"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Professional demolition services in ${city} and the Treasure Valley. We provide residential and commercial demolition with complete debris removal.`,
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
