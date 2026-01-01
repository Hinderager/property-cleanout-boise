import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: '15 Yard Dumpster Rental Boise | Top Shelf Dumpster Rental',
  description: 'Rent a 15 yard dumpster in Boise for medium-sized cleanouts and renovations. Great for whole room projects. Call (208) 943-5231 for pricing.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/services/dumpster-sizes/15-yard' },
}

export default function FifteenYardDumpsterPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">15 Yard Dumpster Rental</h1>
          <p className="text-xl text-gray-200 max-w-2xl">The sweet spot for medium-sized home projects.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">When to Use a 15 Yard Dumpster</h2>
              <p className="text-lg text-gray-600 mb-6">
                A 15 yard dumpster hits the sweet spot for a lot of projects. It's big enough to handle a decent-sized cleanout but not so huge that it takes up your whole driveway.
              </p>
              <p className="text-lg text-gray-600">
                It's about 14 feet long, 8 feet wide, and 4.5 feet tall. You can still toss most stuff in without too much effort, but you've got way more room than a 10 yarder.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">What Fits in a 15 Yard Dumpster</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-dark-blue mb-3">Perfect For:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Medium garage or basement cleanouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Kitchen or bathroom remodel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Flooring removal (multiple rooms)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Deck or fence removal</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-3">Also Works For:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Estate cleanouts (smaller homes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Large yard debris projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Carpet removal (whole house)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Small roof tear-offs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Why People Like the 15 Yard Size</h2>
              <p className="text-lg text-gray-600 mb-4">
                Honestly? It's because it's not too big, not too small. You've got room for a real project without paying for space you won't use.
              </p>
              <p className="text-lg text-gray-600">
                We rent a lot of 15 yarders to people who thought they needed a 10 yard but realized they had more stuff than they thought. Better to have the space and not need it all than to run out halfway through.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">How Long Can I Keep It?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Standard rental is about a week, but most home projects don't take that long. If you need more time, just call us.
              </p>
              <p className="text-lg text-gray-600">
                And if you fill it up early? We can swap it out for an empty one or come pick it up. Whatever works for your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Rent a 15 Yard Dumpster?</h2>
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
