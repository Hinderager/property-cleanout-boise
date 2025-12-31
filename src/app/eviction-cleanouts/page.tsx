import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Eviction Cleanout Services | Top Shelf Property Cleanout',
  description: 'Fast eviction cleanout in Boise. Same-day service available. Get rental units rent-ready quickly after evictions. Call (208) 943-5231.',
  alternates: { canonical: 'https://property-cleanout-boise.com/eviction-cleanouts' },
}

export default function EvictionCleanoutsPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/property-cleanout-team.webp" alt="Eviction Cleanout" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-[#0b7fb6] text-white px-4 py-1 rounded-full text-sm font-bold mb-4 flex items-center gap-2 mx-auto">
            <Clock className="w-4 h-4" /> Same-Day Service
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Eviction Cleanout Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Fast, professional cleanout after evictions. Minimize vacancy time and get units rent-ready.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Eviction Cleanout Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Evictions are never fun, but when they happen, you need the unit cleaned out fast. We handle eviction cleanouts throughout Boise and the Treasure Valley.</p>
              <p>We remove everything left behind, haul it all away, and leave the unit broom-clean so you can start repairs and get it back on the rental market. Same-day service is often available.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">What We Remove</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>All Furniture:</strong> Beds, couches, tables, everything.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Personal Belongings:</strong> Clothes, boxes, random items.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Trash & Junk:</strong> All garbage and debris.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Appliances:</strong> Old appliances if left behind.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-Day Service:</strong> Often available for urgent situations.</span>
              </li>
            </ul>

            <div className="p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Eviction Cleanout?</h3>
              <p className="text-gray-300 mb-6">Call now for same-day eviction cleanout services.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/rental-property" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Rental Property Services</Link>
            <Link href="/rental-turnovers" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Rental Turnovers</Link>
            <Link href="/services" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">All Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
