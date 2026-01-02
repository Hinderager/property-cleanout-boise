import { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Manufactured Home Removal in Caldwell | Boise Mobile Home Demolition',
  description: 'Manufactured and modular home demolition in Caldwell. Licensed professionals serving the county seat of Canyon County. Call (208) 943-5231.',
  alternates: { canonical: 'https://mobile-home-demolition-boise.com/cities-served/caldwell/manufactured-home-removal' },
}

export default function CaldwellManufacturedHomeRemovalPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Manufactured Home Removal in Caldwell</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Manufactured and modular home demolition</p>
        </div>
      </section>
      <QuickQuoteBar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>We provide professional manufactured home removal services in Caldwell. Our licensed and insured team handles every aspect of your project efficiently and safely.</p>
            <p>Serving homeowners and property owners in Caldwell and throughout the Treasure Valley.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Call for Caldwell Service</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
