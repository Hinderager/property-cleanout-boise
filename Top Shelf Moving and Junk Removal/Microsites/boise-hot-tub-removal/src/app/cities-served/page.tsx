import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cities We Serve | Hot Tub Removal Treasure Valley | Boise Hot Tub Removal',
  description: 'Professional hot tub removal services throughout the Treasure Valley. Serving Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding cities. Call (208) 943-5231.',
  keywords: ['hot tub removal Treasure Valley', 'spa removal Boise area', 'hot tub disposal Idaho'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/cities-served',
  },
}

const cities = [
  {
    name: 'Boise',
    slug: 'boise',
    description: 'Full hot tub removal services throughout Boise and surrounding neighborhoods.',
  },
  {
    name: 'Meridian',
    slug: 'meridian',
    description: 'Fast hot tub removal in Meridian, Idaho\'s fastest-growing city.',
  },
  {
    name: 'Nampa',
    slug: 'nampa',
    description: 'Professional hot tub disposal and removal services in Nampa.',
  },
  {
    name: 'Caldwell',
    slug: 'caldwell',
    description: 'Reliable hot tub removal throughout Caldwell and Canyon County.',
  },
  {
    name: 'Eagle',
    slug: 'eagle',
    description: 'Premium hot tub removal services in Eagle and surrounding areas.',
  },
  {
    name: 'Garden City',
    slug: 'garden-city',
    description: 'Quick hot tub removal services in Garden City.',
  },
  {
    name: 'Kuna',
    slug: 'kuna',
    description: 'Complete hot tub removal and disposal in Kuna.',
  },
  {
    name: 'Star',
    slug: 'star',
    description: 'Professional hot tub removal services in Star, Idaho.',
  },
  {
    name: 'Middleton',
    slug: 'middleton',
    description: 'Hot tub removal and disposal in Middleton and surrounding areas.',
  },
  {
    name: 'Mountain Home',
    slug: 'mountain-home',
    description: 'Expert hot tub removal services in Mountain Home.',
  },
]

export default function CitiesServedPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Cities We Serve
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Professional hot tub removal services throughout the Treasure Valley. We serve all major cities and surrounding areas.
          </p>
          <a
            href="tel:2089435231"
            className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (208) 943-5231
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/cities-served/${city.slug}`}
                  className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-[#0b7fb6] flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-2xl font-bold text-[#0B2F3A] group-hover:text-[#0b7fb6] transition-colors">
                        {city.name}
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600">{city.description}</p>
                  <div className="mt-4 text-[#0b7fb6] font-semibold group-hover:underline">
                    View Services →
                  </div>
                </Link>
              ))}
            </div>

            <div className="bg-gray-100 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-6 text-center">
                Why Choose Us for Hot Tub Removal?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#0B2F3A] mb-1">Local Team</h3>
                    <p className="text-gray-600">We're based in the Treasure Valley and know the area well.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#0B2F3A] mb-1">Full Service</h3>
                    <p className="text-gray-600">We handle everything from disconnection to disposal.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#0B2F3A] mb-1">Fast Response</h3>
                    <p className="text-gray-600">Same-day and next-day service available.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#0B2F3A] mb-1">Fair Pricing</h3>
                    <p className="text-gray-600">Upfront quotes with no hidden fees.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0B2F3A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Remove Your Hot Tub?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Call us for a free quote. We'll make hot tub removal easy.
          </p>
          <a
            href="tel:2089435231"
            className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
