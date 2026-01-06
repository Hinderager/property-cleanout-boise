import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, MapPin, Phone } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Property Cleanout Star Idaho | Star Property Cleanout Services',
  description: 'Professional property cleanout services in Star, Idaho. Rental cleanouts, foreclosure cleanouts, estate cleanouts. Fast, reliable service. Call (208) 943-5231.',
  keywords: ['property cleanout Star', 'rental cleanout Star Idaho', 'foreclosure cleanout Star', 'estate cleanout Star'],
  alternates: {
    canonical: 'https://property-cleanout-boise.com/cities-served/star',
  },
}

const neighborhoods = ["Downtown Star","North Star","Star Ranch","Emmett Highway"]

const services = [
  { name: 'Rental Property Cleanout', href: '/cities-served/star/rental-property-cleanout', description: 'Complete rental cleanouts' },
  { name: 'Foreclosure Cleanout', href: '/cities-served/star/foreclosure-cleanout', description: 'REO property cleanouts' },
  { name: 'Eviction Cleanout', href: '/cities-served/star/eviction-cleanout', description: 'Post-eviction cleanup' },
  { name: 'Estate Cleanout', href: '/cities-served/star/estate-cleanout', description: 'Compassionate estate services' },
  { name: 'Commercial Cleanout', href: '/cities-served/star/commercial-property-cleanout', description: 'Office & retail cleanouts' },
  { name: 'Move-Out Cleanout', href: '/cities-served/star/move-out-cleanout', description: 'Moving transition help' },
  { name: 'Real Estate Cleanout', href: '/cities-served/star/real-estate-cleanout', description: 'Pre-sale cleanouts' },
  { name: 'Junk Removal', href: '/cities-served/star/junk-removal', description: 'General junk removal' },
]

export default function StarPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/star-cleanout.webp"
          alt="Property Cleanout Services in Star, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Property Cleanout Services in Star</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional property cleanouts for Star landlords, property managers, and homeowners. Fast, reliable service you can count on.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <VisibleBreadcrumb />
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Star Property Cleanout Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Need a property cleaned out in Star? We handle rentals, foreclosures, estates, and commercial properties throughout Star and the Treasure Valley.</p>
              <p>Whether you're a landlord dealing with a messy move-out, a real estate agent prepping a property for sale, or handling an estate cleanout, we'll haul away everything you don't want. Fast, professional service at fair prices.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Our Services in Star</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-dark-blue group-hover:text-[#0b7fb6]">{service.name}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Star Areas We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
              {neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-dark-blue flex-shrink-0" />
                  <span className="text-sm text-gray-700">{neighborhood}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Star Property Owners Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Local Service:</strong> We're based in the Treasure Valley and serve Star regularly.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-Day Available:</strong> Often available same-day or next-day for Star properties.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Full Service:</strong> We haul everything away—you don't lift a finger.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fair Pricing:</strong> Upfront quotes based on volume, not hourly rates.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need a Property Cleanout in Star?</h3>
              <p className="text-gray-300 mb-6">Call us for a free estimate. We'll get your property cleaned out fast.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Also Serving Nearby Cities</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/boise" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Boise</Link>
            <Link href="/cities-served/meridian" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Meridian</Link>
            <Link href="/cities-served/nampa" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Nampa</Link>
            <Link href="/cities-served/caldwell" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Caldwell</Link>
            <Link href="/cities-served/eagle" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Eagle</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
