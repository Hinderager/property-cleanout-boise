import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Gazebo Removal | Boise Hot Tub Removal',
  description: 'Gazebo and pergola removal in Boise. We remove all types of outdoor structures. Fast, professional service. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-hot-tub-removal.com/services/deck-services/gazebo-removal' },
}

export default function GazeboRemovalPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/hot-tub-removal-process.webp" alt="Gazebo Removal Service" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Gazebo Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Complete gazebo and pergola removal services in Boise and the Treasure Valley.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Gazebo and Pergola Removal</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Got an old gazebo or pergola you want gone? We handle the whole removal process.</p>
              <p>These structures can be tricky to take down safely, especially if they're attached to your deck or patio. We dismantle them carefully, haul away all materials, and leave your yard clean.</p>
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">What We Remove</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Gazebos:</strong> All sizes and materials.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Pergolas:</strong> Freestanding or attached structures.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Pavilions:</strong> Large covered outdoor structures.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Arbors:</strong> Garden arches and walkway structures.</span>
              </li>
            </ul>

            <div className="p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Gazebo Removal?</h3>
              <p className="text-gray-300 mb-6">Call now for a free estimate.</p>
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
            <Link href="/services/deck-services" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">All Deck Services</Link>
            <Link href="/services/deck-services/deck-removal" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Deck Removal</Link>
            <Link href="/services/hot-tub-removal" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Hot Tub Removal</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
