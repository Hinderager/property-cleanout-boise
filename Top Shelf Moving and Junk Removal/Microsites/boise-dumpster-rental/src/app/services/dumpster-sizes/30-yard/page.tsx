import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: '30 Yard Dumpster Rental Boise | Top Shelf Dumpster Rental',
  description: 'Rent a 30 yard dumpster in Boise for large-scale cleanouts, demolition, and commercial projects. Call (208) 943-5231 for pricing.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/services/dumpster-sizes/30-yard' },
}

export default function ThirtyYardDumpsterPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">30 Yard Dumpster Rental</h1>
          <p className="text-xl text-gray-200 max-w-2xl">For when you've got a serious amount of stuff to get rid of.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">When You Need a 30 Yard Dumpster</h2>
              <p className="text-lg text-gray-600 mb-6">
                This is the size contractors use for big jobs. About 22 feet long, 8 feet wide, and 6 feet tall. That's a lot of space.
              </p>
              <p className="text-lg text-gray-600">
                You're probably looking at this size if you're doing a major renovation, tearing down something big, or clearing out a huge property. It's not overkill if you really need it.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">What Fits in a 30 Yard Dumpster</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-dark-blue mb-3">Perfect For:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Large-scale demolition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Full home renovations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">New construction cleanup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Large commercial cleanouts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-3">Also Works For:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Large roof tear-offs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Multi-unit property cleanouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Large landscaping jobs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Business relocations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Do I Need This or a 20 Yard?</h2>
              <p className="text-lg text-gray-600 mb-4">
                If you're asking, you probably need the 30. Here's the thing: running out of space halfway through a big project sucks.
              </p>
              <p className="text-lg text-gray-600">
                Yeah, the 30 yard costs more than a 20, but not by a ton. And it's way cheaper than renting two 20s or paying for an extra pickup because you ran out of room.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Will This Fit on My Property?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Most residential driveways can handle it, but it's tight. You'll need a pretty long driveway or a place to put it in front of your house (with a street permit).
              </p>
              <p className="text-lg text-gray-600">
                Call us before you order. We'll ask you about your space and make sure we can get it where you need it without blocking your neighbors or tearing up your yard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Rent a 30 Yard Dumpster?</h2>
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
