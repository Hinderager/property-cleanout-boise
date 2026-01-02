import { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: '20 Yard Dumpster Rental Boise | Boise Dumpster Rental',
  description: '20 yard dumpster rental in Boise, Idaho. Perfect for renovations, large cleanouts, and roofing projects. Fast delivery.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/cities-served/boise/20-yard-dumpster' },
}

export default function Boise20YardPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">20 Yard Dumpster Rental in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Fast delivery throughout Boise, Idaho.</p>
        </div>
      </section>
      <QuickQuoteBar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>The 20 yard dumpster is our most popular size in Boise. It is big enough for serious projects but still fits in most driveways without blocking the street or taking up your entire yard.</p>
              <p>We deliver these all over Boise—North End, Bench, Southeast, downtown, everywhere. Most deliveries happen within 24 hours.</p>

              <h2>What Fits in a 20 Yard Dumpster?</h2>
              <p>Dimensions: 20ft long × 8ft wide × 4ft high. Holds about 6 pickup truck loads.</p>
              <p>Perfect for kitchen remodels, bathroom renovations, large deck removal, multi-room cleanouts, roofing projects on small to medium homes, and estate cleanouts.</p>

              <h2>Typical Pricing for Boise</h2>
              <p>Most 20 yard rentals in Boise run $425-$525 for a week, including delivery, pickup, and disposal. Heavy materials like concrete or shingles may cost more due to weight.</p>

              <h2>Boise Neighborhoods We Serve</h2>
              <p>We deliver to all Boise neighborhoods including North End, East End, Bench, Southeast Boise, West Boise, Downtown, Boise State area, and more.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Get a 20 Yard Dumpster in Boise</h2>
          <p className="text-gray-300 mb-6">Call now for same-day or next-day delivery.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
