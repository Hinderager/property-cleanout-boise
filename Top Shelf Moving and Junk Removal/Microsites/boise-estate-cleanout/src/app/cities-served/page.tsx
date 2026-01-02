import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, ArrowRight } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Cities We Serve | Estate Cleanout Treasure Valley | Boise',
  description: 'Top Shelf Estate Cleanout serves the entire Treasure Valley including Boise, Meridian, Nampa, Caldwell, Eagle, and more.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/cities-served' },
}

const cities = [
  { name: 'Boise', slug: 'boise', description: 'Complete estate cleanout services in Boise, Idaho' },
  { name: 'Meridian', slug: 'meridian', description: 'Professional estate cleanouts in Meridian' },
  { name: 'Nampa', slug: 'nampa', description: 'Compassionate estate services in Nampa' },
  { name: 'Caldwell', slug: 'caldwell', description: 'Estate cleanout help in Caldwell' },
  { name: 'Eagle', slug: 'eagle', description: 'Estate services for Eagle families' },
  { name: 'Garden City', slug: 'garden-city', description: 'Garden City estate cleanouts' },
  { name: 'Kuna', slug: 'kuna', description: 'Estate cleanout services in Kuna' },
  { name: 'Star', slug: 'star', description: 'Professional cleanouts in Star' },
  { name: 'Middleton', slug: 'middleton', description: 'Middleton estate services' },
  { name: 'Mountain Home', slug: 'mountain-home', description: 'Estate cleanouts in Mountain Home' },
]

export default function CitiesServedPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cities We Serve</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Compassionate estate cleanout services throughout the Treasure Valley.</p>

          <QuickQuoteBar />
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12 text-center">
              <p>Top Shelf Estate Cleanout serves families throughout the Treasure Valley. No matter where you're located, we provide the same compassionate, professional service.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/cities-served/${city.slug}`}
                  className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-[#FFC845]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <MapPin className="w-8 h-8 text-[#FFC845]" />
                    <ArrowRight className="w-5 h-5 text-dark-blue group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-[#0b7fb6]">{city.name}</h3>
                  <p className="text-gray-600 text-sm">{city.description}</p>
                </Link>
              ))}
            </div>

            <div className="mt-16 bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Serving the Entire Treasure Valley</h2>
              <p className="text-gray-300 mb-6">Don't see your city listed? We serve the entire Treasure Valley region. Call to confirm service in your area.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
