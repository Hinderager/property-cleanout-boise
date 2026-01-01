import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, MapPin, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hot Tub Removal Kuna Idaho | Spa Removal | Boise Hot Tub Removal',
  description: 'Professional hot tub removal in Kuna, Idaho. Fast, affordable spa disposal and removal. Licensed & insured. Same-day service. Call (208) 943-5231.',
  keywords: ['hot tub removal Kuna', 'spa removal Kuna Idaho', 'jacuzzi removal Kuna'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/cities-served/kuna',
  },
}

const neighborhoods = ["Swan Falls","Crimson Point","Alder Creek","Kuna Estates","Desert Winds"]

const services = [
  { name: 'Portable Hot Tub Removal', href: '/cities-served/kuna/portable-hot-tub-removal', description: 'Above-ground spa removal' },
  { name: 'Built-In Hot Tub Removal', href: '/cities-served/kuna/built-in-hot-tub-removal', description: 'In-ground spa removal' },
  { name: 'Swim Spa Removal', href: '/cities-served/kuna/swim-spa-removal', description: 'Exercise spa removal' },
  { name: 'Jacuzzi Removal', href: '/cities-served/kuna/jacuzzi-removal', description: 'Whirlpool tub removal' },
  { name: 'Hot Tub Disposal', href: '/cities-served/kuna/hot-tub-disposal', description: 'Eco-friendly disposal' },
  { name: 'Hot Tub Demolition', href: '/cities-served/kuna/hot-tub-demolition', description: 'Complete demolition' },
  { name: 'Above Ground Pool Removal', href: '/cities-served/kuna/above-ground-pool-removal', description: 'Pool removal service' },
  { name: 'Hot Tub Deck Removal', href: '/cities-served/kuna/hot-tub-deck-removal', description: 'Deck & surround removal' },
]

export default function KunaPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/hot-tub-removal-process.webp"
          alt="Hot Tub Removal in Kuna, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Hot Tub Removal in Kuna</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional hot tub removal services for Kuna homes and businesses. Licensed, insured, and ready to help.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Kuna Hot Tub Removal Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Got an old hot tub taking up space in your Kuna backyard? Whether it's broken, unused, or you're just ready for a change, we'll get it out of there fast.</p>
              <p>We handle everything—disconnecting power and plumbing, breaking it down if needed, hauling it away, and leaving your yard clean. No guesswork, no hassle. Just straightforward hot tub removal in Kuna.</p>
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Our Services in Kuna</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-[#0B2F3A] group-hover:text-[#0b7fb6]">{service.name}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Kuna Areas We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
              {neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-[#0b7fb6] flex-shrink-0" />
                  <span className="text-sm text-gray-700">{neighborhood}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Why Kuna Homeowners Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Local Service:</strong> We're based in the Treasure Valley and know Kuna well.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Full Service:</strong> We handle disconnection, removal, and cleanup—everything.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Response:</strong> Same-day service available for Kuna residents.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fair Pricing:</strong> Upfront quotes with no hidden fees.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Hot Tub Removal in Kuna?</h3>
              <p className="text-gray-300 mb-6">Call us for a free estimate. We'll handle the hard work.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0B2F3A] mb-6">Also Serving Nearby Cities</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/boise" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Boise</Link>
            <Link href="/cities-served/meridian" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Meridian</Link>
            <Link href="/cities-served/nampa" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Nampa</Link>
            <Link href="/cities-served/caldwell" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Caldwell</Link>
            <Link href="/cities-served/eagle" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Eagle</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
