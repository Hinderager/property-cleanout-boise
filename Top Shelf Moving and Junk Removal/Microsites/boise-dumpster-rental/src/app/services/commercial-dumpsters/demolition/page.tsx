import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowLeft } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Demolition Dumpster Rental Boise | Top Shelf Dumpster Rental',
  description: 'Rent demolition dumpsters in Boise for tear-down projects. Heavy-duty dumpsters for concrete, debris, and demo waste. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/services/commercial-dumpsters/demolition' },
}

export default function DemolitionDumpsterPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Demolition Dumpsters</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Heavy-duty dumpsters for serious demo work.</p>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Dumpsters Built for Demolition</h2>
              <p className="text-lg text-gray-600 mb-6">
                Demolition debris is heavy. Concrete, brick, tile, plaster - it all weighs a ton (literally). You need a dumpster that can handle it.
              </p>
              <p className="text-lg text-gray-600">
                Our dumpsters are built for demo work. Load them up with the heavy stuff and we'll haul it away when you're done.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">What Goes in Demolition Dumpsters</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Concrete and asphalt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Brick and block</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Tile and stone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Plaster and drywall</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Wood framing and lumber</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Metal and rebar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Fixtures and fittings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Mixed demo debris</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Note: Heavy materials like pure concrete may have weight limits. Call us if you're doing a concrete-only load.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">What Size Demolition Dumpster?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Most demo jobs need a 20 or 30 yard. Here's what works:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li><strong>20 yard:</strong> Small demo projects (shed, deck, small building)</li>
                <li><strong>30 yard:</strong> Medium demo (house interior, large structures)</li>
                <li><strong>40 yard:</strong> Major demolition (whole buildings, commercial)</li>
              </ul>
              <p className="text-lg text-gray-600 mt-4">
                Demo debris is dense and heavy. Don't overload the dumpster - if you've got a lot of heavy material, we can swap it out for an empty one partway through.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Same-Day and Next-Day Delivery</h2>
              <p className="text-lg text-gray-600 mb-4">
                Demo projects move fast. Call us in the morning and we'll usually have a dumpster on your site by afternoon.
              </p>
              <p className="text-lg text-gray-600">
                Need it picked up quick? Same deal. We'll get it out of your way so you can keep moving.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need a Demolition Dumpster?</h2>
          <p className="text-gray-300 mb-6">Call us for fast delivery and reliable pickup.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" /> (208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
