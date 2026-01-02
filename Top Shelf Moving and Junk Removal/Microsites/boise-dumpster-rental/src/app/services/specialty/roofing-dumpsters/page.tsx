import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowLeft } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Roofing Dumpster Rental Boise | Top Shelf Dumpster Rental',
  description: 'Rent heavy-duty roofing dumpsters in Boise for shingle removal and roof tear-offs. Built for heavy loads. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/services/specialty/roofing-dumpsters' },
}

export default function RoofingDumpsterPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Roofing Dumpsters</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Heavy-duty dumpsters for shingle removal.</p>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Dumpsters Built for Roofing Projects</h2>
              <p className="text-lg text-gray-600 mb-6">
                Roofing shingles are heavy. Really heavy. You can't just throw them in any old dumpster and hope for the best.
              </p>
              <p className="text-lg text-gray-600">
                Our roofing dumpsters are built to handle the weight. Load them up with shingles, underlayment, flashing, and all the other junk from a tear-off, and we'll haul it away.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">What Goes in Roofing Dumpsters</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Asphalt shingles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Underlayment and tar paper</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Flashing and drip edge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Roofing nails</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Wood shingles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Damaged plywood or sheathing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Vents and ridge caps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Packaging materials</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">What Size Roofing Dumpster?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Most residential roofing projects need a 20 yard dumpster. Here's the breakdown:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li><strong>15 yard:</strong> Small roof (garage, shed, small house)</li>
                <li><strong>20 yard:</strong> Average residential roof (most common)</li>
                <li><strong>30 yard:</strong> Large house or commercial roof</li>
                <li><strong>40 yard:</strong> Major commercial roofing project</li>
              </ul>
              <p className="text-lg text-gray-600 mt-4">
                Keep in mind: if you're tearing off multiple layers of shingles, you might need a bigger dumpster or a second one. Let us know what you're working with and we'll help you pick the right size.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Fast Delivery and Pickup</h2>
              <p className="text-lg text-gray-600 mb-4">
                Roofing crews work fast. We get that. Call us in the morning and we'll usually have a dumpster on your site by afternoon.
              </p>
              <p className="text-lg text-gray-600">
                Done with your tear-off? Call us for a pickup and we'll get it out of your way so you can start putting the new roof on.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Weight Limits</h2>
              <p className="text-lg text-gray-600 mb-4">
                Shingles are heavy, so there are weight limits. We'll let you know what you're allowed based on the size you rent.
              </p>
              <p className="text-lg text-gray-600">
                If you go over, there's an extra charge per ton, but we'll warn you before you get close. We're not trying to surprise you with fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need a Roofing Dumpster?</h2>
          <p className="text-gray-300 mb-6">Call us for fast delivery and reliable service.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" /> (208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
