import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Pool Deck Removal | Boise Hot Tub Removal',
  description: 'Pool deck removal and demolition in Boise. Concrete, wood, and composite deck removal. Fast, professional service. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-hot-tub-removal.com/services/pool-removal/deck-removal' },
}

export default function PoolDeckRemovalPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/hot-tub-removal-process.webp" alt="Pool Deck Removal" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Pool Deck Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Complete pool deck demolition and removal. Concrete, wood, and composite decking.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Pool Deck Removal Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Need that old pool deck gone? Whether it's cracked concrete, rotting wood, or you're just ready to redesign your backyard, we handle complete deck removal.</p>
              <p>We break it up, haul it away, and leave the area ready for whatever comes next. No matter the material or size, we've got the equipment to handle it.</p>
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Deck Types We Remove</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Concrete Decks:</strong> Complete demolition and haul away.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Wood Decking:</strong> Full removal including support structure.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Composite Materials:</strong> Any type of composite decking.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Pavers and Tiles:</strong> Removal of paver or tile pool surrounds.</span>
              </li>
            </ul>

            <div className="p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Deck Removal?</h3>
              <p className="text-gray-300 mb-6">Call now for a free estimate on pool deck removal.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0B2F3A] mb-6">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/pool-removal" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Pool Removal</Link>
            <Link href="/services/deck-services" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">All Deck Services</Link>
            <Link href="/services/deck-services/deck-demolition" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Deck Demolition</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
