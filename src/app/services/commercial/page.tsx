import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Commercial Property Cleanout | Top Shelf Property Cleanout',
  description: 'Commercial property cleanout services in Boise and the Treasure Valley. Office, retail, and warehouse cleanouts. Fast, professional service. Call (208) 943-5231.',
  alternates: { canonical: 'https://property-cleanout-boise.com/services/commercial' },
}

const services = [
  { title: 'Office Cleanout', href: '/services/commercial/office-cleanout', description: 'Complete office cleanout services for businesses moving or closing.' },
  { title: 'Retail Cleanout', href: '/services/commercial/retail-cleanout', description: 'Retail space cleanout for stores, shops, and commercial spaces.' },
  { title: 'Warehouse Cleanout', href: '/services/commercial/warehouse-cleanout', description: 'Large-scale warehouse and industrial space cleanouts.' },
]

export default function CommercialCleanoutPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/property-cleanout-team.webp" alt="Commercial Property Cleanout" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Commercial Property Cleanout</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional cleanout services for offices, retail spaces, and warehouses throughout the Treasure Valley.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Commercial Cleanout Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Need a commercial space cleaned out? We work with property managers, business owners, and landlords throughout Boise to handle office, retail, and warehouse cleanouts.</p>
              <p>We move fast, work efficiently, and get your space empty so you can move on to the next tenant or project. No job is too big or too small.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Our Commercial Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-2 border-transparent hover:border-[#0b7fb6]">
                  <h4 className="text-xl font-bold text-dark-blue mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                  <span className="inline-block mt-3 text-[#0b7fb6] font-semibold">Learn More →</span>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Choose Us for Commercial Cleanouts</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Turnaround:</strong> We understand you need the space cleared quickly.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Full Service:</strong> We do all the work—you don't lift a finger.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Professional service you can trust.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start.</span>
              </li>
            </ul>

            <div className="p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Commercial Cleanout?</h3>
              <p className="text-gray-300 mb-6">Call now for a free estimate on your commercial property cleanout.</p>
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
            <Link href="/services/real-estate" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Real Estate Cleanout</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
