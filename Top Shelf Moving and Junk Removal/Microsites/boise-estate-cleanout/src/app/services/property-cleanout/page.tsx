import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Property Cleanout Services | Boise Estate Cleanout',
  description: 'Complete property clearing for inherited properties, rentals, and foreclosures. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/services/property-cleanout' },
}

export default function PropertyCleanoutServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Property Cleanout Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Complete property clearing for inherited properties, rentals, and foreclosures.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Not all property cleanouts are estate-related. Whether you have inherited a property, need to turn over a rental, or manage a foreclosure, we handle complete property clearing quickly and professionally.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-8">Our Property Cleanout Services</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Link
                href="/services/property-cleanout/inherited-property"
                className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-[#FFC845]"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark-blue group-hover:text-[#0b7fb6]">Inherited Property Cleanout</h3>
                  <ArrowRight className="w-5 h-5 text-dark-blue group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-600">Clear out properties you have inherited</p>
              </Link>
              <Link
                href="/services/property-cleanout/rental-turnover"
                className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-[#FFC845]"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark-blue group-hover:text-[#0b7fb6]">Rental Property Turnover</h3>
                  <ArrowRight className="w-5 h-5 text-dark-blue group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-600">Fast cleanouts between tenants</p>
              </Link>
              <Link
                href="/services/property-cleanout/foreclosure-cleanouts"
                className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-[#FFC845]"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark-blue group-hover:text-[#0b7fb6]">Foreclosure Cleanouts</h3>
                  <ArrowRight className="w-5 h-5 text-dark-blue group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-600">Property clearing for banks and investors</p>
              </Link>
            </div>

            <div className="bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Get Started Today</h2>
              <p className="text-gray-300 mb-6">Call us for a free quote and compassionate guidance through this process.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
