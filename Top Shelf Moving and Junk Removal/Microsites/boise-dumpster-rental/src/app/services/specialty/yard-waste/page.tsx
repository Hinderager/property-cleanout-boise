import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowLeft } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Yard Waste Dumpster Rental Boise | Top Shelf Dumpster Rental',
  description: 'Rent yard waste dumpsters in Boise for landscaping debris, brush, branches, and green waste removal. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/services/specialty/yard-waste' },
}

export default function YardWasteDumpsterPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Yard Waste Dumpsters</h1>
          <p className="text-xl text-gray-200 max-w-2xl">For landscaping debris and green waste removal.</p>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Dumpsters for Landscaping Projects</h2>
              <p className="text-lg text-gray-600 mb-6">
                Got a bunch of branches, brush, grass clippings, or other yard waste? You could make 50 trips to the dump, or you could rent a dumpster and be done with it in a weekend.
              </p>
              <p className="text-lg text-gray-600">
                We drop it off, you fill it up, we haul it away. Easy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">What Goes in Yard Waste Dumpsters</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Tree branches and limbs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Brush and shrubs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Grass clippings and sod</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Leaves and plant debris</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Weeds and garden waste</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Small stumps (cut up)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Mulch and wood chips</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Hedge trimmings</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Note: We can't take dirt, rocks, or gravel in yard waste dumpsters. Those need their own dumpster.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Common Yard Waste Projects</h2>
              <p className="text-lg text-gray-600 mb-4">
                Most people rent yard waste dumpsters for:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>- Spring or fall yard cleanups</li>
                <li>- Tree removal and trimming</li>
                <li>- Landscaping overhauls</li>
                <li>- Storm cleanup</li>
                <li>- Clearing overgrown properties</li>
                <li>- Garden renovations</li>
              </ul>
              <p className="text-lg text-gray-600">
                Basically, any time you've got more yard waste than you can haul away yourself.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">What Size Yard Waste Dumpster?</h2>
              <ul className="space-y-3 text-gray-700">
                <li><strong>10 yard:</strong> Small yard cleanup or tree trimming</li>
                <li><strong>15 yard:</strong> Medium yard project or multiple trees</li>
                <li><strong>20 yard:</strong> Large yard cleanup or major landscaping (most popular)</li>
                <li><strong>30 yard:</strong> Huge property cleanup or commercial landscaping</li>
              </ul>
              <p className="text-lg text-gray-600 mt-4">
                Yard waste is bulky, so you might be surprised how fast it fills up a dumpster. If you're on the fence about size, go bigger.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Can You Mix Yard Waste with Other Stuff?</h2>
              <p className="text-lg text-gray-600 mb-4">
                You can, but it'll cost more. Pure yard waste is cheaper to dispose of than mixed debris.
              </p>
              <p className="text-lg text-gray-600">
                If you've got yard waste plus junk (old fence posts, shed materials, etc.), let us know. We might suggest two dumpsters - one for yard waste, one for everything else - to save you money.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need a Yard Waste Dumpster?</h2>
          <p className="text-gray-300 mb-6">Call us and we'll help you pick the right size for your project.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" /> (208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
