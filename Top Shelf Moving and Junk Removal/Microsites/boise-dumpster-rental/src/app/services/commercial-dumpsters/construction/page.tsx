import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowLeft } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Construction Dumpster Rental Boise | Top Shelf Dumpster Rental',
  description: 'Rent construction dumpsters in Boise for contractors and builders. All sizes available, reliable delivery. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/services/commercial-dumpsters/construction' },
}

export default function ConstructionDumpsterPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="relative h-[300px] md:h-[400px] flex items-center bg-gradient-to-r from-dark-blue to-[#1a5a9e]">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('/patterns/texture.svg')]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-gray-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Construction Dumpsters</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Keep your job site clean and on schedule.</p>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Construction Dumpsters for Boise Contractors</h2>
              <p className="text-lg text-gray-600 mb-6">
                We work with contractors all over the Treasure Valley. You need dumpsters that show up on time, don't break your budget, and get picked up when you need them gone. That's what we do.
              </p>
              <p className="text-lg text-gray-600">
                No games, no surprises. You tell us what you need, we make it happen.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">What Goes in Construction Dumpsters</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Lumber and wood waste</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Drywall and sheetrock</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Metal scraps and wire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Roofing materials</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Concrete and brick (call first)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Siding and trim</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Windows and doors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Packaging and wrapping materials</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">What Size Construction Dumpster?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Most contractors go with a 20 or 30 yard. Here's the breakdown:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li><strong>15 yard:</strong> Small residential projects, minor renovations</li>
                <li><strong>20 yard:</strong> Medium residential builds, remodels (most popular)</li>
                <li><strong>30 yard:</strong> Larger residential or small commercial builds</li>
                <li><strong>40 yard:</strong> Major commercial construction</li>
              </ul>
              <p className="text-lg text-gray-600 mt-4">
                Need multiple dumpsters or regular swaps? We can set that up. Just let us know your schedule.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Flexible Rental Periods</h2>
              <p className="text-lg text-gray-600 mb-4">
                Construction timelines change. We get it. Keep the dumpster as long as you need it, or call us for an early pickup if you finish ahead of schedule.
              </p>
              <p className="text-lg text-gray-600">
                We work around your timeline, not the other way around.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need a Construction Dumpster?</h2>
          <p className="text-gray-300 mb-6">Call us for contractor pricing and reliable service.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" /> (208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
