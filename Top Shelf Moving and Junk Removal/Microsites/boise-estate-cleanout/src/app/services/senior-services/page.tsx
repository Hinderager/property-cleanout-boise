import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Senior Services | Boise Estate Cleanout',
  description: 'Compassionate downsizing and moving help for seniors and their families. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/services/senior-services' },
}

export default function SeniorServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Senior Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Compassionate downsizing and moving help for seniors and their families.</p>

          <QuickQuoteBar />
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Downsizing after decades in a home can be overwhelming. We help seniors and their families make the transition to smaller homes or assisted living with patience, respect, and care. This isn't just about moving stuff—it's about honoring a lifetime of memories.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-8">Our Senior Services</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Link
                href="/services/senior-services/downsizing-help"
                className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-[#FFC845]"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark-blue group-hover:text-[#0b7fb6]">Downsizing Help</h3>
                  <ArrowRight className="w-5 h-5 text-dark-blue group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-600">Assistance reducing belongings for a move</p>
              </Link>
              <Link
                href="/services/senior-services/senior-moving"
                className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-[#FFC845]"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark-blue group-hover:text-[#0b7fb6]">Senior Moving</h3>
                  <ArrowRight className="w-5 h-5 text-dark-blue group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-600">Gentle moving services for older adults</p>
              </Link>
              <Link
                href="/services/senior-services/assisted-living-transitions"
                className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-[#FFC845]"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark-blue group-hover:text-[#0b7fb6]">Assisted Living Transitions</h3>
                  <ArrowRight className="w-5 h-5 text-dark-blue group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-600">Help moving to assisted living or memory care</p>
              </Link>
            </div>

            <div className="bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Get Started Today</h2>
              <p className="text-gray-300 mb-6">Call us for a free quote and compassionate guidance through this process.</p>
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
