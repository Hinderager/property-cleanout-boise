import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile Home Demolition in Boise | Boise Mobile Home Demolition',
  description: 'Complete mobile home demolition and removal in Boise. Licensed professionals serving the heart of the Treasure Valley. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-mobile-home-demolition.com/cities-served/boise/mobile-home-demolition' },
}

export default function BoiseMobileHomeDemolitionPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Mobile Home Demolition in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Complete mobile home demolition and removal</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>We provide professional mobile home demolition services in Boise. Our licensed and insured team handles every aspect of your project efficiently and safely.</p>
            <p>Serving homeowners and property owners in Boise and throughout the Treasure Valley.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Call for Boise Service</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
