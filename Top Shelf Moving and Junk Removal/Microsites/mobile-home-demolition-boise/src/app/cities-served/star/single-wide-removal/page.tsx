import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Single-Wide Removal in Star | Boise Mobile Home Demolition',
  description: 'Single-wide mobile home demolition in Star. Licensed professionals serving a charming small town. Call (208) 505-9352.',
  alternates: { canonical: 'https://mobile-home-demolition-boise.com/cities-served/star/single-wide-removal' },
}

export default function StarSingleWideRemovalPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Single-Wide Removal in Star</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Single-wide mobile home demolition</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>We provide professional single-wide removal services in Star. Our licensed and insured team handles every aspect of your project efficiently and safely.</p>
            <p>Serving homeowners and property owners in Star and throughout the Treasure Valley.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Call for Star Service</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
