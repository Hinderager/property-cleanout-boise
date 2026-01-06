import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, CheckCircle } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Cities Served | Top Shelf Property Cleanout',
  description: 'Property cleanout services throughout the Treasure Valley. Serving Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding areas. Call (208) 943-5231.',
  alternates: { canonical: 'https://property-cleanout-boise.com/cities-served' },
}

const cities = [
  {
    name: 'Boise',
    href: '/cities-served/boise',
    description: 'Complete property cleanout services throughout Boise and surrounding neighborhoods.'
  },
  {
    name: 'Meridian',
    href: '/cities-served/meridian',
    description: 'Professional cleanout services for residential and commercial properties in Meridian.'
  },
  {
    name: 'Nampa',
    href: '/cities-served/nampa',
    description: 'Fast, reliable property cleanout throughout Nampa and the surrounding area.'
  },
  {
    name: 'Caldwell',
    href: '/cities-served/caldwell',
    description: 'Property cleanout services for homes and businesses in Caldwell.'
  },
  {
    name: 'Eagle',
    href: '/cities-served/eagle',
    description: 'Serving Eagle with professional property cleanout and junk removal.'
  },
  {
    name: 'Garden City',
    href: '/cities-served/garden-city',
    description: 'Complete cleanout services for Garden City properties.'
  },
  {
    name: 'Kuna',
    href: '/cities-served/kuna',
    description: 'Property cleanout and junk removal services in Kuna.'
  },
  {
    name: 'Star',
    href: '/cities-served/star',
    description: 'Professional cleanout services for Star area properties.'
  },
  {
    name: 'Middleton',
    href: '/cities-served/middleton',
    description: 'Serving Middleton with fast, reliable property cleanout.'
  },
]

export default function CitiesServedPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/property-cleanout-team.webp" alt="Property Cleanout Service Areas" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Cities We Serve</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional property cleanout services throughout the Treasure Valley.</p>

          <QuickQuoteBar />
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6 text-center">Service Area Coverage</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">We provide property cleanout services throughout the Boise metro area and Treasure Valley. Fast response times, professional service, and upfront pricing in every city we serve.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {cities.map((city) => (
                <Link key={city.href} href={city.href} className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-2 border-transparent hover:border-[#0b7fb6]">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-[#0b7fb6] flex-shrink-0 mt-0.5" />
                    <h3 className="text-xl font-bold text-dark-blue">{city.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{city.description}</p>
                  <span className="text-[#0b7fb6] font-semibold">View Services →</span>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6 text-center">What We Offer in Every City</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Commercial property cleanouts</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Foreclosure and REO cleanouts</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Real estate cleanout services</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Rental property turnover</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Eviction cleanouts</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Estate and move-out cleanouts</span>
              </div>
            </div>

            <div className="p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Serving Your Area</h3>
              <p className="text-gray-300 mb-6">Call now for property cleanout services in your city.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/commercial" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Commercial Cleanout</Link>
            <Link href="/services/foreclosure" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Foreclosure Services</Link>
            <Link href="/services/real-estate" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Real Estate Cleanout</Link>
            <Link href="/services/rental-property" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Rental Property</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
