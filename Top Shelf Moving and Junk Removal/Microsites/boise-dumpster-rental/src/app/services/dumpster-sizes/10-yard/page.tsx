import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, CheckCircle, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: '10 Yard Dumpster Rental Boise | Top Shelf Dumpster Rental',
  description: 'Rent a 10 yard dumpster in Boise for small cleanouts, garage projects, and minor renovations. Perfect for homeowners. Call (208) 943-5231 for pricing.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/services/dumpster-sizes/10-yard' },
}

export default function TenYardDumpsterPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">10 Yard Dumpster Rental</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Perfect for small cleanouts and minor renovation projects.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">When to Use a 10 Yard Dumpster</h2>
              <p className="text-lg text-gray-600 mb-6">
                A 10 yard dumpster is the smallest size we rent, but it's still plenty big for lots of projects. Think of it like three pickup truck loads of stuff.
              </p>
              <p className="text-lg text-gray-600">
                It's about 12 feet long, 8 feet wide, and 3.5 feet tall. You can walk right up to it and toss things in without needing to throw stuff too high.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">What Fits in a 10 Yard Dumpster</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-dark-blue mb-3">Perfect For:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Small garage cleanouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Single room renovations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Bathroom or kitchen demo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Flooring removal (small spaces)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-3">Also Works For:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Yard cleanup projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Shed cleanouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Small deck removal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Moving and downsizing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">How Long Can I Keep It?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Most people rent a 10 yard dumpster for 3-7 days. That's usually plenty of time for a weekend project or a small cleanout.
              </p>
              <p className="text-lg text-gray-600">
                Need it longer? Just let us know. We can extend your rental if your project takes more time than expected.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Not Sure If This Is the Right Size?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Honestly, most people underestimate how much junk they have. If you're on the fence between a 10 yard and a 15 yard, go with the 15.
              </p>
              <p className="text-lg text-gray-600">
                But call us first. We'll ask you a few questions about your project and help you pick the right size. No sense paying for space you don't need (or running out of room halfway through).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Rent a 10 Yard Dumpster?</h2>
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
