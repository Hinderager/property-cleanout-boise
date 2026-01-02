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
    question: 'How fast can you turn around a rental property?',
    answer: 'Most rental cleanouts take 4-8 hours depending on what was left behind. We can usually have your unit cleared and broom-clean within 24-48 hours of your call. Need it faster? We offer same-day service for urgent turnovers—just let us know your timeline.',
  },
  {
    question: 'What\'s included in a property cleanout?',
    answer: 'We remove everything—furniture, appliances, boxes, trash, you name it. Then we sweep up and leave it broom-clean. If you need deep cleaning after that, we can arrange it, but our standard service gets the property empty and ready for the next step.',
  },
  {
    question: 'How do you handle eviction cleanouts legally?',
    answer: 'We follow Idaho\'s requirements to the letter. That means documenting items, storing valuables for the required period, and keeping records. We work with your legal process, not against it. Lots of landlords and property managers use us because we know what we\'re doing on this front.',
  },
  {
    question: 'What do you do with the stuff you haul out?',
    answer: 'Good stuff goes to local charities—furniture, working appliances, clothes, household items. Scrap metal gets recycled. We only dump what can\'t be reused or recycled. Most cleanouts are about 60-70% diverted from the landfill, which is better for everyone.',
  },
  {
    question: 'What does a property cleanout cost?',
    answer: 'Depends on how much is there and how long it takes. Small apartments usually run $300-600. Bigger houses with more stuff can be $800-2,000+. We give free estimates—call us at (208) 943-5231 or send us photos and we\'ll quote it.',
  },
  {
    question: 'Do you work with real estate agents and investors?',
    answer: 'All the time. Agents call us for foreclosure cleanouts so properties can get listed fast. Investors use us between flips. We get that time is money in your world, so we move quick and stay on schedule. Volume discounts available if you\'ve got multiple properties.',
  },
  {
    question: 'Can you clear a property the same day?',
    answer: 'Usually, yes. If you call us in the morning and the property isn\'t huge, we can often get a crew out that afternoon. Best bet is to call (208) 943-5231 and we\'ll see what we can do. We\'re pretty flexible when people are in a bind.',
  },
  {
    question: 'What areas do you serve for property cleanouts?',
    answer: 'We provide property cleanout services throughout the Treasure Valley including Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding communities. If you\'re unsure if we serve your area, give us a call at (208) 943-5231.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Top Shelf Property Cleanout - ${city}`,
    "description": `Fast property cleanout services in ${city}, Idaho. Rental turnovers, foreclosure cleanouts, eviction clearing, REO properties. Same-day service available for landlords, property managers, and real estate professionals.`,
    "url": "https://property-cleanout-boise.com",
    "telephone": "+1-208-943-5231",
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
      "Rental Property Cleanout",
      "Foreclosure Cleanout",
      "Eviction Cleanout",
      "REO Property Cleanout",
      "Real Estate Property Clearing",
      "Investment Property Cleanout"
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
      "name": "Top Shelf Property Cleanout"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Fast property cleanout services in ${city} and the Treasure Valley. We specialize in rental turnovers, foreclosure cleanouts, eviction clearing, and REO property services for landlords, property managers, real estate agents, and investors.`,
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
