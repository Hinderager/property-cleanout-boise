import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowLeft } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: '20 Yard Dumpster Rental Boise | Top Shelf Dumpster Rental',
  description: 'Rent a 20 yard dumpster in Boise - our most popular size. Great for whole-house cleanouts and major renovations. Call (208) 943-5231 for pricing.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/services/dumpster-sizes/20-yard' },
}

export default function TwentyYardDumpsterPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">20 Yard Dumpster Rental</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Our most popular size for good reason.</p>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Why the 20 Yard Is Our Most Popular Size</h2>
              <p className="text-lg text-gray-600 mb-6">
                Simple: it's big enough for most major projects without being overkill. About 22 feet long, 8 feet wide, and 4.5 feet tall.
              </p>
              <p className="text-lg text-gray-600">
                This is the size contractors usually go for when they're doing a serious renovation. And homeowners love it for whole-house cleanouts because you've got plenty of room to work with.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">What Fits in a 20 Yard Dumpster</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-dark-blue mb-3">Perfect For:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Whole-house cleanouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Major home renovations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Large deck or fence removal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Roofing projects (medium-sized homes)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-3">Also Works For:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Construction debris</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Estate cleanouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Large landscaping projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Commercial cleanouts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Is This Too Big for My Driveway?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Probably not. Most driveways can handle a 20 yard dumpster just fine. It's about the length of a large pickup truck with a long bed.
              </p>
              <p className="text-lg text-gray-600">
                If you're worried about space, give us a call. We can figure out if it'll fit or suggest where else we can put it (like the street if you get a permit, or maybe in front of your garage).
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">What If I Need More Than One?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Not a problem. Some people rent two 20 yarders for really big jobs, or we can swap out a full one for an empty one if you need to keep going.
              </p>
              <p className="text-lg text-gray-600">
                Just let us know what you're working on and we'll help you figure out the best approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Rent a 20 Yard Dumpster?</h2>
          <p className="text-gray-300 mb-6">Call us and we'll get you set up.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" /> (208) 943-5231
          </a>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-dark-blue mb-8 text-center">Other Dumpster Sizes</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/services/dumpster-sizes/10-yard" className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow text-center border-2 border-transparent hover:border-[#FFC845]">
                <h3 className="text-xl font-bold text-dark-blue mb-2">10 Yard</h3>
                <p className="text-sm text-gray-600">Small projects</p>
              </Link>
              <Link href="/services/dumpster-sizes/15-yard" className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow text-center border-2 border-transparent hover:border-[#FFC845]">
                <h3 className="text-xl font-bold text-dark-blue mb-2">15 Yard</h3>
                <p className="text-sm text-gray-600">Medium projects</p>
              </Link>
              <Link href="/services/dumpster-sizes/30-yard" className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow text-center border-2 border-transparent hover:border-[#FFC845]">
                <h3 className="text-xl font-bold text-dark-blue mb-2">30 Yard</h3>
                <p className="text-sm text-gray-600">Large projects</p>
              </Link>
              <Link href="/services/dumpster-sizes/40-yard" className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow text-center border-2 border-transparent hover:border-[#FFC845]">
                <h3 className="text-xl font-bold text-dark-blue mb-2">40 Yard</h3>
                <p className="text-sm text-gray-600">Biggest size</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
