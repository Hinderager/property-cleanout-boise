import { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Triple-Wide Demolition Services | Boise Mobile Home Demolition',
  description: 'Large-scale demolition for triple-wide mobile homes. Licensed, insured professionals serving the Treasure Valley. Call (208) 943-5231 for a free quote.',
  alternates: { canonical: 'https://mobile-home-demolition-boise.com/services/mobile-home-demolition/triple-wide' },
}

export default function TripleWidePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Triple-Wide Demolition</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Large-scale demolition for triple-wide mobile homes</p>
        </div>
      </section>
      <QuickQuoteBar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>We provide professional triple-wide demolition services throughout the Treasure Valley. Our licensed and insured team handles every aspect of the job, from permits to final cleanup.</p>
            <p>Call us today for a free, no-obligation quote.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Get Your Free Quote</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
