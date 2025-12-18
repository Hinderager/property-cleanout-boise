import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Renovation Dumpster Rental Boise | Top Shelf Dumpster Rental',
  description: 'Rent a dumpster for your home renovation in Boise. Perfect for remodels, demolition, and construction debris. Call (208) 505-9352.',
  alternates: { canonical: 'https://boisedumpsterrental.com/services/residential-dumpsters/renovation' },
}

export default function RenovationDumpsterPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Renovation Dumpsters</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Keep your renovation site clean and safe.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Why You Need a Dumpster for Your Renovation</h2>
              <p className="text-lg text-gray-600 mb-6">
                Renovation debris piles up fast. Old drywall, flooring, cabinets, fixtures - it all has to go somewhere, and "the side of your house" isn't a great long-term solution.
              </p>
              <p className="text-lg text-gray-600">
                A dumpster keeps your site clean and your neighbors happy. Plus, you won't trip over piles of debris while you're trying to work.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Perfect For These Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Kitchen remodels (cabinets, countertops, flooring)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Bathroom renovations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Basement finishing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Flooring replacement</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Deck or patio removal/rebuild</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Fence replacement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Room additions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Whole-house remodels</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">What Size Dumpster for Your Renovation?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Most people go with a 15 or 20 yard for home renovations. Here's a quick breakdown:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li><strong>10 yard:</strong> Single room (small bathroom or kitchen)</li>
                <li><strong>15 yard:</strong> One or two rooms (kitchen or large bathroom)</li>
                <li><strong>20 yard:</strong> Multiple rooms or major renovation (most popular)</li>
                <li><strong>30 yard:</strong> Whole-house gut job</li>
              </ul>
              <p className="text-lg text-gray-600 mt-4">
                Renovation debris is heavy. Drywall, tile, concrete - it adds up quick. If you're on the fence, go bigger.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">How Long Can You Keep It?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Most renovations take longer than you think (shocking, right?). Standard rental is about a week, but you can keep it longer if you need to.
              </p>
              <p className="text-lg text-gray-600">
                If your project drags on, just call us and extend the rental. Way easier than scrambling to rent another one later.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Rent a Dumpster?</h2>
          <p className="text-gray-300 mb-6">Call us and we'll help you pick the right size for your renovation.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" /> (208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
