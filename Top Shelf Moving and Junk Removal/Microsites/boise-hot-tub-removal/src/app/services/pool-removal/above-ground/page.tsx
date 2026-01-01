import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Above-Ground Pool Removal | Boise Hot Tub Removal',
  description: 'Fast above-ground pool removal in Boise. We dismantle and haul away all types of above-ground pools. Same-day service available. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-hot-tub-removal.com/services/pool-removal/above-ground' },
}

export default function AboveGroundPoolRemovalPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/hot-tub-removal-process.webp" alt="Above-Ground Pool Removal" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-[#0b7fb6] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Same-Day Service</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Above-Ground Pool Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Quick removal of above-ground pools. We handle all sizes and types.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Above-Ground Pool Removal</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Got an old above-ground pool taking up space in your yard? We'll get it out of there fast.</p>
              <p>Above-ground pools are easier to remove than in-ground ones, but they're still a pain to deal with. We drain it, take apart the frame and liner, haul everything away, and leave your yard clean. The whole job usually takes just a few hours.</p>
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">What We Handle</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>All Pool Types:</strong> Round, oval, rectangular pools of any size.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Draining:</strong> Safe water removal if the pool is still full.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Complete Dismantling:</strong> Frame, liner, ladder, and filter system.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Haul Away:</strong> We take everything with us.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-Day Service:</strong> Often available for urgent removals.</span>
              </li>
            </ul>

            <div className="p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Pool Removal?</h3>
              <p className="text-gray-300 mb-6">Call now for fast above-ground pool removal.</p>
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
            <Link href="/services/pool-removal/in-ground" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">In-Ground Pool Removal</Link>
            <Link href="/services/hot-tub-removal" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Hot Tub Removal</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
