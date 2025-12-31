import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rental Turnover Cleanout | Top Shelf Property Cleanout',
  description: 'Fast rental turnover cleanout in Boise. Get units rent-ready quickly. Same-day service available for landlords. Call (208) 943-5231.',
  alternates: { canonical: 'https://property-cleanout-boise.com/rental-turnovers' },
}

export default function RentalTurnoversPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/property-cleanout-team.webp" alt="Rental Turnover Cleanout" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-[#0b7fb6] text-white px-4 py-1 rounded-full text-sm font-bold mb-4 flex items-center gap-2 mx-auto">
            <Clock className="w-4 h-4" /> Same-Day Service Available
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Rental Turnover Cleanout</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Fast, reliable cleanout services to minimize vacancy time and get your rental units back on the market.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Rental Turnover Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Time is money when you're a landlord. Every day a unit sits empty is lost rent. We get it.</p>
              <p>That's why we offer same-day and next-day cleanout services for rental turnovers. We remove everything the last tenant left behind, haul it away, and leave the place broom-clean so you can start cleaning, painting, or showing it right away.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">What We Handle</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Furniture Removal:</strong> Beds, couches, tables, everything they left.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Personal Items:</strong> Clothes, boxes, random belongings.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Trash & Debris:</strong> All the junk and garbage.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Appliances:</strong> Old fridges, stoves, washers if needed.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Complete Haul Away:</strong> We take it all with us.</span>
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0b7fb6] p-6 mb-12">
              <h4 className="font-bold text-dark-blue mb-2">Fast Response Times</h4>
              <p className="text-gray-700">We understand rental turnovers need to happen fast. Call us in the morning, and we can often be there the same afternoon. We work around your schedule to minimize vacancy time.</p>
            </div>

            <div className="p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Rental Cleanout?</h3>
              <p className="text-gray-300 mb-6">Call now for same-day or next-day service.</p>
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
            <Link href="/eviction-cleanouts" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Eviction Cleanouts</Link>
            <Link href="/services" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">All Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
