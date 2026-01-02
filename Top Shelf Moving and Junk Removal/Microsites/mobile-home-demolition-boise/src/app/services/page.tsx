import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Home, Building, Wrench, Truck } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Mobile Home Demolition Services | Mobile Home Demolition Boise',
  description: 'Complete mobile home and manufactured home demolition services in Boise. Single-wide, double-wide, triple-wide removal. Call (208) 943-5231.',
  alternates: { canonical: 'https://mobile-home-demolition-boise.com/services' },
}

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Complete mobile home and manufactured home demolition throughout the Treasure Valley.</p>

          <QuickQuoteBar />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We specialize in mobile home demolition and removal. From single-wide trailers to triple-wide manufactured homes, we handle the entire process — demo, haul-away, site cleanup, and disposal.</p>
              <p>Licensed and insured. Serving Boise, Meridian, Nampa, Caldwell, and the entire Treasure Valley.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Link href="/services/mobile-home-demolition" className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <Home className="w-12 h-12 text-[#FFC845] mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">Mobile Home Demolition</h2>
                <p className="text-gray-600">Single-wide, double-wide, and triple-wide mobile home demolition and removal.</p>
              </Link>

              <Link href="/services/manufactured-home" className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <Building className="w-12 h-12 text-[#FFC845] mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">Manufactured Homes</h2>
                <p className="text-gray-600">HUD homes and modular home demolition and removal services.</p>
              </Link>

              <Link href="/services/site-services" className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <Wrench className="w-12 h-12 text-[#FFC845] mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">Site Services</h2>
                <p className="text-gray-600">Foundation removal, site grading, and utility disconnect coordination.</p>
              </Link>

              <Link href="/services/additional" className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <Truck className="w-12 h-12 text-[#FFC845] mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">Additional Services</h2>
                <p className="text-gray-600">RV removal, trailer removal, and shed demolition services.</p>
              </Link>
            </div>

            <div className="bg-[#FFC845]/10 border-l-4 border-[#FFC845] p-6">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <ul className="space-y-2">
                  <li>✓ Complete demolition</li>
                  <li>✓ All debris removal</li>
                  <li>✓ Site cleanup and grading</li>
                  <li>✓ Proper disposal</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Licensed and insured</li>
                  <li>✓ Equipment and labor included</li>
                  <li>✓ Utility disconnect coordination</li>
                  <li>✓ Free estimates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need Mobile Home Demolition?</h2>
          <p className="text-gray-200 mb-6">Call today for a free quote.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
