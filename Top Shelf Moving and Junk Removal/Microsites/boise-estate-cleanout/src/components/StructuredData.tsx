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
    question: 'How much does estate cleanout cost?',
    answer: 'Estate cleanout costs vary based on property size and contents. Most estate cleanouts in the Boise area range from $500 for small apartments to $3,000+ for larger homes with extensive contents. We provide free, no-obligation estimates before any work begins.',
  },
  {
    question: 'How long does an estate cleanout take?',
    answer: 'Most estate cleanouts can be completed in 1-3 days depending on the size of the property and amount of belongings. A typical 3-bedroom home usually takes 1-2 days. We\'ll provide a realistic timeline during your free estimate.',
  },
  {
    question: 'Do you work with probate attorneys and executors?',
    answer: 'Yes, we frequently work with probate attorneys, estate executors, and real estate professionals. We can provide documentation of items removed, donation receipts for estate records, and work around court timelines and deadlines.',
  },
  {
    question: 'What happens to items we don\'t want to keep?',
    answer: 'Usable items are donated to local charities and shelters. We coordinate with organizations like Goodwill, Salvation Army, and local churches. Electronics and metals are recycled properly. Only true waste goes to the landfill—typically less than 30% of what we collect.',
  },
  {
    question: 'Do I need to be present during the cleanout?',
    answer: 'No, you don\'t need to be present. Many families live out of state and can\'t be there in person. We communicate throughout the process with photos and updates, and can coordinate key pickup and lockbox access.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide estate cleanout services in Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding Treasure Valley communities. If you\'re unsure if we serve your area, give us a call.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Boise Estate Cleanout - ${city}`,
    "description": `Professional estate cleanout services in ${city}, Idaho. Compassionate property clearing, donation coordination, and complete estate cleanouts. Licensed and insured.`,
    "url": "https://boise-estate-cleanout.com",
    "telephone": "+1-208-505-9352",
    "email": "info@boise-estate-cleanout.com",
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
      "Estate Cleanout",
      "Probate Cleanout",
      "Property Cleanout",
      "Estate Clearing",
      "Inheritance Cleanout",
      "Donation Coordination"
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "100"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Estate Cleanout Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Boise Estate Cleanout"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Professional estate cleanout and property clearing services in ${city} and the Treasure Valley. We provide compassionate estate cleanouts with donation coordination.`
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
