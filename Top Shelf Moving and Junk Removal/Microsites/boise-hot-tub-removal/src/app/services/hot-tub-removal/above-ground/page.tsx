import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Above-Ground Hot Tub Removal | Boise Hot Tub Removal',
  description: 'Fast, affordable above-ground hot tub removal in Boise and the Treasure Valley. We handle portable spas, jacuzzis, and all equipment. Call (208) 943-5231.',
  keywords: ['above-ground hot tub removal', 'portable hot tub removal Boise', 'hot tub haul away'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/services/hot-tub-removal/above-ground',
  },
}

const commonReasons = [
  "Hot tub stopped working",
  "Too expensive to repair",
  "Selling the house",
  "Want the yard space back",
  "Moving to a new home",
  "High maintenance costs"
]

export default function AboveGroundHotTubRemovalPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/hot-tub-removal-process.webp"
          alt="Above-Ground Hot Tub Removal Service"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-[#0b7fb6] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Same-Day Service Available</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Above-Ground Hot Tub Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Quick removal of portable hot tubs and spas. We handle all the heavy lifting and hauling.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Above-Ground Hot Tub Removal Service</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Got a portable hot tub sitting in your backyard collecting leaves and taking up space? We'll get it out of there for you.</p>
              <p>Above-ground hot tubs are easier to remove than built-in ones, but they're still heavy and awkward to move. We disconnect the electrical, drain it if needed, break it down, and haul it away. The whole thing takes a few hours at most.</p>
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Why Remove Your Above-Ground Hot Tub?</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {commonReasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">What We Handle</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Electrical Disconnection:</strong> Safe removal of power connections.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Draining:</strong> We'll drain the tub if it still has water in it.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Heavy Lifting:</strong> Our team handles all the lifting and moving.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Complete Haul Away:</strong> We take the tub, cover, and all accessories.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Site Cleanup:</strong> No mess left behind when we're done.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-Day Service:</strong> Often available for urgent removals.</span>
              </li>
            </ul>

            <div className="p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Rid of That Hot Tub?</h3>
              <p className="text-gray-300 mb-6">Call now for fast, affordable above-ground hot tub removal.</p>
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
            <Link href="/services/hot-tub-removal" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">All Hot Tub Services</Link>
            <Link href="/services/hot-tub-removal/in-ground" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">In-Ground Removal</Link>
            <Link href="/services/hot-tub-removal/spa-removal" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Spa Removal</Link>
            <Link href="/services/disposal/recycling" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Recycling Options</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
