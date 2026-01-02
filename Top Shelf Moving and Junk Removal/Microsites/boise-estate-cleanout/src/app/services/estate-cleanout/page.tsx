import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Estate Cleanout Services | Boise Estate Cleanout',
  description: 'Complete estate cleanout services for homes, apartments, and properties throughout the Treasure Valley. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/services/estate-cleanout' },
}

export default function EstateCleanoutServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Estate Cleanout Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Complete estate cleanout services for homes, apartments, and properties throughout the Treasure Valley.</p>
        </div>
      </section>
      <QuickQuoteBar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>When someone passes away or moves to assisted living, clearing out their home is one of the hardest tasks families face. We handle estate cleanouts with compassion and professionalism, treating your loved one's belongings with respect while making the process as stress-free as possible.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-8">Our Estate Cleanout Services</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Link
                href="/services/estate-cleanout/full-estate-cleanout"
                className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-[#FFC845]"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark-blue group-hover:text-[#0b7fb6]">Full Estate Cleanout</h3>
                  <ArrowRight className="w-5 h-5 text-dark-blue group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-600">Complete property clearing from top to bottom</p>
              </Link>
              <Link
                href="/services/estate-cleanout/partial-estate-cleanout"
                className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-[#FFC845]"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark-blue group-hover:text-[#0b7fb6]">Partial Estate Cleanout</h3>
                  <ArrowRight className="w-5 h-5 text-dark-blue group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-600">Selective cleanout of specific areas or rooms</p>
              </Link>
              <Link
                href="/services/estate-cleanout/rush-estate-services"
                className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-[#FFC845]"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark-blue group-hover:text-[#0b7fb6]">Rush Estate Services</h3>
                  <ArrowRight className="w-5 h-5 text-dark-blue group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-600">Expedited service when time is critical</p>
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
