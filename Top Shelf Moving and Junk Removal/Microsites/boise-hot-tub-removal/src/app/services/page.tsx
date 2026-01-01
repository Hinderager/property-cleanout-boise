import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Trash2, Droplets, Hammer, Recycle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services | Hot Tub & Pool Removal | Boise Hot Tub Removal',
  description: 'Professional hot tub removal, pool removal, deck services, and disposal in Boise and the Treasure Valley. Call (208) 943-5231.',
  keywords: ['hot tub removal services', 'pool removal', 'deck removal', 'disposal services'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/services',
  },
}

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Complete hot tub and pool removal services throughout the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <Link href="/services/hot-tub-removal" className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]">
              <Trash2 className="w-12 h-12 text-[#0b7fb6] mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">Hot Tub Removal</h2>
              <p className="text-gray-600">Portable spas, built-in hot tubs, swim spas, and jacuzzis.</p>
            </Link>
            <Link href="/services/pool-removal" className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]">
              <Droplets className="w-12 h-12 text-[#0b7fb6] mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">Pool Removal</h2>
              <p className="text-gray-600">Above-ground pools, inflatable pools, and equipment removal.</p>
            </Link>
            <Link href="/services/deck-services" className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]">
              <Hammer className="w-12 h-12 text-[#0b7fb6] mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">Deck Services</h2>
              <p className="text-gray-600">Hot tub deck removal and deck repair after removal.</p>
            </Link>
            <Link href="/services/disposal" className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]">
              <Recycle className="w-12 h-12 text-[#0b7fb6] mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">Disposal Services</h2>
              <p className="text-gray-600">Eco-friendly disposal, recycling, and electrical disconnect coordination.</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-[#0B2F3A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Service?</h2>
          <p className="text-gray-300 mb-6">Call us for a free quote.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}