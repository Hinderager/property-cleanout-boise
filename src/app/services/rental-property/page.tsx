import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rental Property Cleanout | Top Shelf Property Cleanout',
  description: 'Rental property cleanout services in Boise. Eviction cleanout, move-out, and tenant cleanouts. Fast turnaround for landlords. Call (208) 505-9352.',
  alternates: { canonical: 'https://property-cleanout-boise.com/services/rental-property' },
}

const services = [
  { title: 'Eviction Cleanout', href: '/services/rental-property/eviction-cleanout', description: 'Quick cleanout after evictions to get units rent-ready.' },
  { title: 'Move-Out Cleanout', href: '/services/rental-property/move-out-cleanout', description: 'Cleanout services for move-out situations and tenant turnovers.' },
  { title: 'Tenant Cleanout', href: '/services/rental-property/tenant-cleanout', description: 'Complete tenant cleanout and junk removal services.' },
]

export default function RentalPropertyCleanoutPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/property-cleanout-team.webp" alt="Rental Property Cleanout" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Rental Property Cleanout</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Fast rental property cleanout services for landlords and property managers in Boise and the Treasure Valley.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Rental Property Cleanout Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Landlords and property managers, we get it. When a tenant moves out or gets evicted, you need the unit clean and ready to rent fast.</p>
              <p>We handle everything they left behind—furniture, trash, personal items, everything. We work quickly so you can minimize vacancy time and get the unit back on the market.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Our Rental Property Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-2 border-transparent hover:border-[#0b7fb6]">
                  <h4 className="text-xl font-bold text-dark-blue mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                  <span className="inline-block mt-3 text-[#0b7fb6] font-semibold">Learn More →</span>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Landlords Choose Us</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-Day Service:</strong> Often available for urgent cleanouts.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Complete Removal:</strong> We take everything, leaving the unit broom-clean.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Minimize Vacancy:</strong> Fast turnaround to reduce lost rent.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start.</span>
              </li>
            </ul>

            <div className="p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Rental Cleanout?</h3>
              <p className="text-gray-300 mb-6">Call now for fast rental property cleanout services.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Other Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">All Services</Link>
            <Link href="/services/commercial" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Commercial Cleanout</Link>
            <Link href="/services/foreclosure" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Foreclosure Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
