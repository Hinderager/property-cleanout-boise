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
    question: 'How much does hot tub removal cost?',
    answer: 'Hot tub removal typically costs between $200 and $500, depending on the size, type, and accessibility of the spa. Larger units or hot tubs in difficult locations may cost more. We provide free quotes over the phone or onsite before any work begins.',
  },
  {
    question: 'Can you remove a hot tub the same day?',
    answer: 'In most cases, yes. If you call us in the morning, we can often get to you the same day. Next-day service is almost always available. We understand that old hot tubs are eyesores and try to get them gone fast.',
  },
  {
    question: 'Do you need to disconnect the hot tub from electrical and plumbing?',
    answer: 'We handle disconnection of basic electrical and plumbing connections as part of our service. However, if the hot tub is hardwired into your electrical panel, you may need an electrician to disconnect it first. We\'ll let you know during the quote if that\'s the case.',
  },
  {
    question: 'Will you remove the hot tub in one piece or break it down?',
    answer: 'It depends on the situation. If we can easily move the hot tub out in one piece, we will. If it\'s too large, in a tight space, or heavy, we\'ll break it down onsite using saws and other tools. Either way, we haul away everything.',
  },
  {
    question: 'What types of hot tubs do you remove?',
    answer: 'We remove all types—acrylic spas, wooden hot tubs, inflatable spas, swim spas, and fiberglass units. We also remove hot tub covers, steps, and any accessories. If it\'s related to your hot tub, we\'ll take it.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve the entire Treasure Valley including Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, and surrounding communities. If you\'re not sure if we cover your area, just give us a call at (208) 505-9352.',
  },
  {
    question: 'What happens to the hot tub after you remove it?',
    answer: 'We try to recycle as much as possible—plastics, metals, wiring, and other materials. If the hot tub is still functional, we may be able to resell or donate it. Only materials that can\'t be recycled go to the landfill.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Boise Hot Tub Removal - ${city}`,
    "description": `Professional hot tub and spa removal services in ${city}, Idaho. Safe disconnection, demolition, and eco-friendly disposal. Licensed and insured.`,
    "url": "https://boise-hot-tub-removal.com",
    "telephone": "+1-208-505-9352",
    "email": "info@boise-hot-tub-removal.com",
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
      "Hot Tub Removal",
      "Spa Disposal",
      "Hot Tub Demolition",
      "Deck Removal",
      "Same Day Service",
      "Eco-Friendly Disposal"
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "12:00",
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
    "serviceType": "Hot Tub Removal Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Boise Hot Tub Removal"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Professional hot tub and spa removal services in ${city} and the Treasure Valley. We safely disconnect, demolish, and dispose of old hot tubs.`,
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
