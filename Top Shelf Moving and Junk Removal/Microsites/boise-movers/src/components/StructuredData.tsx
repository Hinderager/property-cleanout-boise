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
    question: 'How much does it cost to hire movers in Boise?',
    answer: 'Moving costs vary based on factors like home size, distance, and services needed. Local moves typically start around $100/hour for a 2-man crew and truck. We provide free, no-obligation estimates so you know the cost upfront before your move.',
  },
  {
    question: 'How far in advance should I book my move?',
    answer: 'We recommend booking 2-4 weeks ahead for local moves, especially during summer months. However, we often accommodate last-minute moves too. Call us at (208) 361-1982 and we\'ll do our best to fit you in!',
  },
  {
    question: 'Do you provide packing materials?',
    answer: 'Yes! We can bring boxes, tape, bubble wrap, and packing paper. We can also do full packing services if you\'d rather not pack yourself. Just let us know what you need when you book.',
  },
  {
    question: 'Are my belongings insured during the move?',
    answer: 'Yes, we are fully licensed and insured. Basic valuation coverage is included with every move, and additional coverage options are available for valuable items. Ask us about coverage when you get your estimate.',
  },
  {
    question: 'What if my apartment has stairs or no elevator?',
    answer: 'No problem! We handle stairs regularly. Our pricing is transparent—we may add a small fee for flights of stairs, but we\'ll tell you this upfront. Our crews are experienced with all types of buildings.',
  },
  {
    question: 'Can you move just a few heavy items?',
    answer: 'Absolutely! We offer labor-only and single-item moving services. Whether it\'s a piano, gun safe, or just help loading a rental truck, we\'re happy to help with smaller jobs.',
  },
  {
    question: 'What areas do you serve for moving?',
    answer: 'We serve all of the Treasure Valley including Boise, Meridian, Nampa, Caldwell, Eagle, Star, Kuna, and surrounding areas. Contact us at (208) 361-1982 if you\'re unsure whether we cover your location.',
  },
  {
    question: 'Do you offer same-day moving services?',
    answer: 'We try to accommodate last-minute moves when possible. Call us and we\'ll check availability. During busy seasons (summer months), booking ahead is recommended for guaranteed scheduling.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Boise Moving Pros - ${city}`,
    "description": `Professional local moving services in ${city}, Idaho. Residential moves, apartment moves, packing services, and loading/unloading help. Licensed and insured.`,
    "url": "https://boise-movers.com",
    "telephone": "+1-208-361-1982",
    "email": "info@boise-movers.com",
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
      "Local Moving",
      "Residential Moving",
      "Apartment Moving",
      "Packing Services",
      "Loading and Unloading",
      "Labor Only Moving"
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
    "serviceType": "Local Moving Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Boise Moving Pros"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Professional local moving services in ${city} and the Treasure Valley. We provide residential moving, apartment moving, packing services, and loading/unloading help.`,
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
