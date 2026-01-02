import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'In-Ground Hot Tub Removal | Boise Hot Tub Removal',
  description: 'Professional in-ground hot tub removal services in Boise and the Treasure Valley. We handle concrete, electrical, and complete demolition. Call (208) 943-5231.',
  keywords: ['in-ground hot tub removal', 'built-in hot tub removal Boise', 'hot tub demolition'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/services/hot-tub-removal/in-ground',
  },
}

const commonChallenges = [
  "Concrete decking surrounds the tub",
  "Electrical and plumbing connections",
  "Heavy materials requiring equipment",
  "Need to preserve surrounding landscaping",
  "Concerned about property damage",
  "Don't know how to disconnect utilities"
]

export default function InGroundHotTubRemovalPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/hot-tub-removal-process.webp"
          alt="In-Ground Hot Tub Removal Service"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-[#0b7fb6] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Expert In-Ground Removal</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">In-Ground Hot Tub Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Complete removal of built-in hot tubs including concrete, electrical, and plumbing work. Professional service throughout the Treasure Valley.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Professional In-Ground Hot Tub Removal</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>In-ground hot tubs are a different beast than portable ones. They're built into decks or patios, connected to your home's utilities, and often surrounded by concrete or tile work. You can't just drag them out.</p>
              <p>We handle the whole job. That means disconnecting electrical and plumbing lines safely, breaking down the tub shell, removing any surrounding materials if needed, hauling everything away, and cleaning up the site. You get your space back without any of the headaches.</p>
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Common In-Ground Hot Tub Challenges</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {commonChallenges.map((challenge) => (
                <div key={challenge} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{challenge}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Our In-Ground Removal Process</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Safe Disconnection:</strong> We properly disconnect all electrical and plumbing systems.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Demolition:</strong> Break down concrete surrounds and tub shell as needed.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Complete Removal:</strong> Haul away all materials including concrete, tile, and equipment.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Site Cleanup:</strong> Leave your property clean and ready for your next project.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Professional service you can trust.</span>
              </li>
            </ul>

            <div className="p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need an In-Ground Hot Tub Removed?</h3>
              <p className="text-gray-300 mb-6">Call now for a free estimate on your in-ground hot tub removal.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0B2F3A] mb-6">Related Hot Tub Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/hot-tub-removal" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">All Hot Tub Services</Link>
            <Link href="/services/hot-tub-removal/above-ground" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Above-Ground Removal</Link>
            <Link href="/services/deck-services/deck-removal" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Deck Removal</Link>
            <Link href="/services/disposal/eco-friendly" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Eco-Friendly Disposal</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
