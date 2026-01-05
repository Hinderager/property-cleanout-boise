import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Trash2 } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Dumpster Rental Boise | Boise Dumpster Rental',
  description: 'Dumpster rental in Boise, Idaho. All sizes from 10 to 40 yards. Residential and commercial. Same-day delivery available.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/cities-served/boise' },
}

const services = [
  { title: '10 Yard Dumpster', slug: '10-yard-dumpster', description: 'Small projects and cleanouts' },
  { title: '15 Yard Dumpster', slug: '15-yard-dumpster', description: 'Medium-sized projects' },
  { title: '20 Yard Dumpster', slug: '20-yard-dumpster', description: 'Most popular size' },
  { title: '30 Yard Dumpster', slug: '30-yard-dumpster', description: 'Large construction projects' },
  { title: '40 Yard Dumpster', slug: '40-yard-dumpster', description: 'Commercial and industrial' },
  { title: 'Residential Dumpster', slug: 'residential-dumpster', description: 'Home projects and cleanouts' },
  { title: 'Commercial Dumpster', slug: 'commercial-dumpster', description: 'Business and contractor use' },
  { title: 'Construction Dumpster', slug: 'construction-dumpster', description: 'Job site debris removal' },
]

export default function BoisePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dumpster Rental in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Fast, reliable dumpster rental service throughout Boise, Idaho.</p>
        </div>
      </section>
      <QuickQuoteBar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We deliver dumpsters all over Boise—from downtown to the Bench, North End to Southeast Boise. Whether you are in a tight subdivision or have a wide-open lot, we will work with you to get the dumpster where it needs to go.</p>
              <p>Most deliveries in Boise happen within 24 hours of your call. Need it today? Give us a call and we will do our best to make it happen.</p>
            </div>
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Dumpster Rental Options in Boise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/cities-served/boise/${service.slug}`}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-200 text-center"
                >
                  <Trash2 className="w-10 h-10 text-[#FFC845] mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-dark-blue mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Serving Boise Daily</h2>
          <p className="text-gray-300 mb-6">Call now for fast dumpster delivery in Boise.</p>
            {/* Neighborhood Pages */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-6">
                Boise Neighborhoods We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                
                <Link
                  href="/cities-served/boise/north-end"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">North End</span>
                </Link>
                <Link
                  href="/cities-served/boise/bench"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">The Bench</span>
                </Link>
                <Link
                  href="/cities-served/boise/downtown"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Downtown Boise</span>
                </Link>
                <Link
                  href="/cities-served/boise/harris-ranch"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Harris Ranch</span>
                </Link>
                <Link
                  href="/cities-served/boise/southeast-boise"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Southeast Boise</span>
                </Link>
                <Link
                  href="/cities-served/boise/west-boise"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">West Boise</span>
                </Link>
              </div>
            </div>

          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
