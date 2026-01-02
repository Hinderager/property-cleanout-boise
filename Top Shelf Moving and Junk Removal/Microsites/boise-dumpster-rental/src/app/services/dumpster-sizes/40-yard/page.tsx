import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowLeft } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: '40 Yard Dumpster Rental Boise | Top Shelf Dumpster Rental',
  description: 'Rent a 40 yard dumpster in Boise - the biggest size for major commercial and construction projects. Call (208) 943-5231 for pricing.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/services/dumpster-sizes/40-yard' },
}

export default function FortyYardDumpsterPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">40 Yard Dumpster Rental</h1>
          <p className="text-xl text-gray-200 max-w-2xl">The biggest dumpster we've got. For massive projects only.</p>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">When You Need a 40 Yard Dumpster</h2>
              <p className="text-lg text-gray-600 mb-6">
                This is the big one. About 22 feet long, 8 feet wide, and 8 feet tall. If you need something bigger than this, you're probably in the wrong business (or you need a dump truck).
              </p>
              <p className="text-lg text-gray-600">
                Most people who rent a 40 yarder are contractors doing serious commercial work or demolishing something big. If you're a homeowner, you probably don't need this unless you're tearing down a whole house.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">What Fits in a 40 Yard Dumpster</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-dark-blue mb-3">Perfect For:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Major commercial demolition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Large construction sites</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Window/siding replacement (whole building)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Large warehouse cleanouts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-3">Also Works For:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Industrial equipment removal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Full building gutting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Large apartment complex cleanouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Storm cleanup (major damage)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Do You Really Need This Size?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Let's be real: most people don't. If you're not sure, you probably want a 30 yard.
              </p>
              <p className="text-lg text-gray-600">
                But if you know you've got a massive amount of debris and you don't want to deal with swapping dumpsters or renting multiple units, the 40 is the way to go.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Where Can You Put a 40 Yard Dumpster?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Good question. You need a lot of space. Most residential driveways can't handle this size - you'll need street placement (with a permit) or a commercial lot.
              </p>
              <p className="text-lg text-gray-600">
                Call us before you rent. We'll figure out if we can even fit it where you need it. If your site won't work, we'll suggest alternatives (like a smaller size or multiple dumpsters).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Rent a 40 Yard Dumpster?</h2>
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
              <Link href="/services/dumpster-sizes/20-yard" className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow text-center border-2 border-transparent hover:border-[#FFC845]">
                <h3 className="text-xl font-bold text-dark-blue mb-2">20 Yard</h3>
                <p className="text-sm text-gray-600">Most popular</p>
              </Link>
              <Link href="/services/dumpster-sizes/30-yard" className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow text-center border-2 border-transparent hover:border-[#FFC845]">
                <h3 className="text-xl font-bold text-dark-blue mb-2">30 Yard</h3>
                <p className="text-sm text-gray-600">Large projects</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
