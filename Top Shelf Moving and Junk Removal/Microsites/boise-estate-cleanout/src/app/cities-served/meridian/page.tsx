import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, MapPin, Phone, ArrowRight } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Estate Cleanout Services Meridian Idaho | Top Shelf',
  description: 'Professional estate cleanout services in Meridian, Idaho. Compassionate, respectful service for families. Licensed & insured. Call (208) 943-5231.',
  keywords: ['estate cleanout Meridian', 'probate cleanout Meridian Idaho', 'senior downsizing Meridian', 'property cleanout Meridian'],
  alternates: {
    canonical: 'https://boise-estate-cleanout.com/cities-served/meridian',
  },
}

const neighborhoods = ["Downtown Meridian","Lochsa Falls","Paramount","Bridgetower","Tuscany","Seven Oaks"]

const services = [
  { name: 'Estate Cleanout', href: '/cities-served/meridian/estate-cleanout', description: 'Complete estate cleanout services' },
  { name: 'Probate Cleanout', href: '/cities-served/meridian/probate-cleanout', description: 'Fast cleanouts for probate properties' },
  { name: 'Senior Downsizing', href: '/cities-served/meridian/senior-downsizing', description: 'Compassionate downsizing help' },
  { name: 'Inherited Property', href: '/cities-served/meridian/inherited-property-cleanout', description: 'Clear out inherited properties' },
  { name: 'Foreclosure Cleanout', href: '/cities-served/meridian/foreclosure-cleanout', description: 'Property cleanouts' },
  { name: 'Hoarding Cleanup', href: '/cities-served/meridian/hoarder-cleanup', description: 'Sensitive cleanup services' },
]

export default function MeridianPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/estate-cleanout-meridian.webp"
          alt="Estate Cleanout Services in Meridian, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Estate Cleanout Services in Meridian</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Compassionate estate cleanout services for Meridian families. Licensed, insured, and here to help during difficult transitions.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Estate Cleanout Services in Meridian</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>When a loved one passes away or needs to transition to assisted living, clearing out a lifetime of belongings can feel overwhelming. That's where we come in. Top Shelf Estate Cleanout serves Meridian families with compassionate, professional estate cleanout services.</p>
              <p>We understand this isn't just about removing items—it's about handling memories, making difficult decisions, and moving forward during an emotional time. Our team treats every family and every item with respect and care.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Our Services in Meridian</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-dark-blue group-hover:text-[#0b7fb6]">{service.name}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Meridian Areas We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
              {neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-dark-blue flex-shrink-0" />
                  <span className="text-sm text-gray-700">{neighborhood}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Meridian Families Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Local Service:</strong> We serve Meridian and the Treasure Valley regularly.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Compassionate Approach:</strong> We understand the emotional weight of estate cleanouts.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Response:</strong> Same-day and next-day service available.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fair Pricing:</strong> Transparent quotes with no hidden fees.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Estate Cleanout in Meridian?</h3>
              <p className="text-gray-300 mb-6">Call us for a free estimate. We'll make this process as easy as possible.</p>
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
