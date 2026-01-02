import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'In-Ground Pool Removal | Boise Hot Tub Removal',
  description: 'Professional in-ground pool removal and demolition in Boise and the Treasure Valley. Complete removal including concrete and equipment. Call (208) 943-5231.',
  keywords: ['in-ground pool removal Boise', 'pool demolition', 'pool removal service'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/services/pool-removal/in-ground',
  },
}

const removalReasons = [
  "Pool is cracked or leaking",
  "Too expensive to maintain",
  "Safety concerns with kids",
  "Want more yard space",
  "Selling the property",
  "High water and chemical costs"
]

export default function InGroundPoolRemovalPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/hot-tub-removal-process.webp"
          alt="In-Ground Pool Removal and Demolition"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-[#0b7fb6] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Complete Pool Demolition</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">In-Ground Pool Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Full removal and demolition of in-ground pools. Reclaim your yard space.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">In-Ground Pool Removal Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>In-ground pools are a big commitment. When you're ready to reclaim that space, we handle the whole removal process from start to finish.</p>
              <p>This isn't a small job. We're talking about breaking up concrete, removing the pool shell, disconnecting plumbing and electrical, backfilling the hole, and compacting everything properly so you can use that space again. We've got the equipment and experience to do it right.</p>
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Common Reasons for Pool Removal</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {removalReasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Our Pool Removal Process</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Drain the Pool:</strong> Safe removal of all water.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Demolition:</strong> Break up concrete decking and pool shell.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Remove Equipment:</strong> Disconnect and haul away pumps, filters, and heaters.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Backfill:</strong> Fill the hole with clean fill material.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Compaction:</strong> Proper compaction to prevent settling.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Final Grading:</strong> Leave the area ready for landscaping or other use.</span>
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0b7fb6] p-6 mb-12">
              <h4 className="font-bold text-[#0B2F3A] mb-2">Partial vs. Full Removal</h4>
              <p className="text-gray-700">We offer both partial removal (filling in the pool) and complete removal (digging everything out). We'll help you understand which option makes sense for your property and budget.</p>
            </div>

            <div className="p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Remove Your Pool?</h3>
              <p className="text-gray-300 mb-6">Call now for a free estimate on in-ground pool removal.</p>
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
            <Link href="/services/pool-removal" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">All Pool Services</Link>
            <Link href="/services/pool-removal/above-ground" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Above-Ground Pool Removal</Link>
            <Link href="/services/pool-removal/deck-removal" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Pool Deck Removal</Link>
            <Link href="/services/deck-services" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Deck Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
