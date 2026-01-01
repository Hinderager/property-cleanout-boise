import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cities Served | Boise Dumpster Rental',
  description: 'Dumpster rental service throughout the Treasure Valley. Boise, Meridian, Nampa, Caldwell, Eagle, and more.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/cities-served' },
}

const cities = [
  { name: 'Boise', slug: 'boise', description: 'Idaho s capital city' },
  { name: 'Meridian', slug: 'meridian', description: 'Fastest growing city in Idaho' },
  { name: 'Nampa', slug: 'nampa', description: 'Third largest city in Idaho' },
  { name: 'Caldwell', slug: 'caldwell', description: 'Canyon County seat' },
  { name: 'Eagle', slug: 'eagle', description: 'Upscale Treasure Valley community' },
  { name: 'Garden City', slug: 'garden-city', description: 'Along the Boise River' },
  { name: 'Kuna', slug: 'kuna', description: 'Growing Ada County city' },
  { name: 'Star', slug: 'star', description: 'Small town feel near Meridian' },
  { name: 'Middleton', slug: 'middleton', description: 'Canyon County community' },
  { name: 'Mountain Home', slug: 'mountain-home', description: 'Elmore County seat' },
]

export default function CitiesServedPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cities We Serve</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Dumpster rental throughout the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12 text-center">
              <p>We deliver dumpsters throughout the Boise area and Treasure Valley. Here are the cities we serve.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/cities-served/${city.slug}`}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <MapPin className="w-8 h-8 text-[#FFC845] mb-3" />
                  <h3 className="text-xl font-bold text-dark-blue mb-2">{city.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{city.description}</p>
                  <p className="text-dark-blue font-medium text-sm">View dumpster rental options →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Serving Your City</h2>
          <p className="text-gray-300 mb-6">Call to confirm delivery to your specific location.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
