import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Probate Services | Boise Estate Cleanout',
  description: 'Fast, efficient cleanouts for probate properties with legal deadlines. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/services/probate-services' },
}

export default function ProbateServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Probate Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Fast, efficient cleanouts for probate properties with legal deadlines.</p>

          <QuickQuoteBar />
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Probate properties often have tight timelines. Whether you're an executor managing an estate or working with an attorney to close out probate, we provide fast, thorough cleanouts that meet legal deadlines without compromising quality.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-8">Our Probate Services</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Link
                href="/services/probate-services/executor-assistance"
                className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-[#FFC845]"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark-blue group-hover:text-[#0b7fb6]">Executor Assistance</h3>
                  <ArrowRight className="w-5 h-5 text-dark-blue group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-600">Help for executors managing estate cleanouts</p>
              </Link>
              <Link
                href="/services/probate-services/probate-property-clearing"
                className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-[#FFC845]"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark-blue group-hover:text-[#0b7fb6]">Probate Property Clearing</h3>
                  <ArrowRight className="w-5 h-5 text-dark-blue group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-600">Fast clearing to meet legal deadlines</p>
              </Link>
              <Link
                href="/services/probate-services/legal-coordination"
                className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-[#FFC845]"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark-blue group-hover:text-[#0b7fb6]">Legal Coordination</h3>
                  <ArrowRight className="w-5 h-5 text-dark-blue group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-600">Work with attorneys and courts</p>
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
