import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Foreclosure Cleanout Services | Top Shelf Property Cleanout',
  description: 'Foreclosure cleanout services in Boise. REO, bank-owned, and asset preservation cleanouts. Fast, professional service. Call (208) 943-5231.',
  alternates: { canonical: 'https://property-cleanout-boise.com/services/foreclosure' },
}

const services = [
  { title: 'REO Cleanout', href: '/services/foreclosure/reo-cleanout', description: 'Real estate owned property cleanouts for banks and asset managers.' },
  { title: 'Bank Cleanout', href: '/services/foreclosure/bank-cleanout', description: 'Bank-owned property cleanout and trash-out services.' },
  { title: 'Asset Preservation', href: '/services/foreclosure/asset-preservation', description: 'Property preservation and cleanout to maintain asset value.' },
]

export default function ForeclosureCleanoutPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/property-cleanout-team.webp" alt="Foreclosure Property Cleanout" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Foreclosure Cleanout Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional foreclosure and REO property cleanouts for banks, asset managers, and real estate investors.</p>
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
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Foreclosure Cleanout Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We work with banks, asset managers, and real estate investors to clean out foreclosed properties quickly and completely.</p>
              <p>Foreclosures can be messy. Previous owners sometimes leave everything behind. We handle it all—furniture, personal items, trash, everything. We get the property market-ready fast.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Our Foreclosure Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-2 border-transparent hover:border-[#0b7fb6]">
                  <h4 className="text-xl font-bold text-dark-blue mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                  <span className="inline-block mt-3 text-[#0b7fb6] font-semibold">Learn More →</span>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Banks and Asset Managers Choose Us</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Response:</strong> Quick turnaround to get properties market-ready.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Complete Service:</strong> We remove everything, leaving the property broom-clean.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Proper Disposal:</strong> We follow regulations for abandoned property.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Documentation:</strong> Photos and records for your files.</span>
              </li>
            </ul>

            <div className="p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Foreclosure Cleanout?</h3>
              <p className="text-gray-300 mb-6">Call now for fast REO and bank-owned property cleanout.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
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
            <Link href="/services/real-estate" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Real Estate Cleanout</Link>
            <Link href="/services/rental-property" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Rental Property Cleanout</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
