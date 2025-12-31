import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real Estate Property Cleanout | Top Shelf Property Cleanout',
  description: 'Real estate property cleanout services in Boise. Pre-sale, inherited property, and bank-owned cleanouts. Professional service. Call (208) 943-5231.',
  alternates: { canonical: 'https://property-cleanout-boise.com/services/real-estate' },
}

const services = [
  { title: 'Pre-Sale Cleanout', href: '/services/real-estate/pre-sale-cleanout', description: 'Get properties ready for sale with complete cleanout services.' },
  { title: 'Inherited Property', href: '/services/real-estate/inherited-property', description: 'Estate cleanouts for inherited homes and properties.' },
  { title: 'Bank Owned Properties', href: '/services/real-estate/bank-owned', description: 'Cleanout services for bank-owned and foreclosed properties.' },
]

export default function RealEstateCleanoutPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/property-cleanout-team.webp" alt="Real Estate Property Cleanout" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Real Estate Property Cleanout</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional property cleanout services for real estate agents, investors, and homeowners throughout the Treasure Valley.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Real Estate Cleanout Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We help real estate agents, investors, and homeowners get properties cleaned out and ready for sale or rent.</p>
              <p>Whether it's an inherited home full of belongings, a pre-sale cleanout to maximize value, or a bank-owned property that needs to be market-ready, we handle the whole job. You focus on the sale, we handle the cleanup.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Our Real Estate Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-2 border-transparent hover:border-[#0b7fb6]">
                  <h4 className="text-xl font-bold text-dark-blue mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                  <span className="inline-block mt-3 text-[#0b7fb6] font-semibold">Learn More →</span>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Real Estate Professionals Choose Us</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Turnaround:</strong> Get properties on the market faster.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Complete Cleanout:</strong> We remove everything, leaving properties show-ready.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Professional Service:</strong> Licensed, insured, and reliable.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start work.</span>
              </li>
            </ul>

            <div className="p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Real Estate Cleanout?</h3>
              <p className="text-gray-300 mb-6">Call now for a free estimate on property cleanout services.</p>
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
            <Link href="/services/foreclosure" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Foreclosure Services</Link>
            <Link href="/services/rental-property" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Rental Property Cleanout</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
