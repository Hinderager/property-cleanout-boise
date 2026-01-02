import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowLeft } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Moving & Downsizing Dumpster Rental Boise | Top Shelf Dumpster Rental',
  description: 'Rent a dumpster for your move or downsizing project in Boise. Perfect for getting rid of unwanted items before you move. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/services/residential-dumpsters/moving' },
}

export default function MovingDumpsterPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Moving & Downsizing Dumpsters</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Don't move stuff you don't want. Get rid of it first.</p>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Why Rent a Dumpster When You're Moving?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Because moving is expensive enough without paying to haul stuff you don't even want to your new place. Seriously - why pay movers to move junk you're going to throw away anyway?
              </p>
              <p className="text-lg text-gray-600">
                Get a dumpster before you start packing. You'll realize you've got way more stuff you don't need than you thought.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">What to Toss When You're Moving</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Old furniture you don't like anymore</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Broken appliances you keep meaning to fix</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">That couch that's seen better days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Boxes of stuff from your garage</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Old mattresses and box springs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Yard equipment you're not taking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Electronics that don't work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Anything that won't fit in your new place</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Downsizing? You Definitely Need a Dumpster</h2>
              <p className="text-lg text-gray-600 mb-4">
                Moving from a house to an apartment? Or just trying to simplify your life? A dumpster makes it way easier.
              </p>
              <p className="text-lg text-gray-600">
                Most people who are downsizing get rid of at least half their stuff. A 15 or 20 yard dumpster gives you plenty of room to be ruthless about what you really need.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">What Size Do You Need?</h2>
              <ul className="space-y-3 text-gray-700">
                <li><strong>10 yard:</strong> Getting rid of a few big items</li>
                <li><strong>15 yard:</strong> Light downsizing, some furniture and boxes</li>
                <li><strong>20 yard:</strong> Major downsizing or whole-house purge (most popular)</li>
                <li><strong>30 yard:</strong> Moving out of a large house with tons of stuff</li>
              </ul>
              <p className="text-lg text-gray-600 mt-4">
                Not sure? Call us. We'll help you figure it out based on what you're getting rid of.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Rent a Dumpster?</h2>
          <p className="text-gray-300 mb-6">Call us and we'll help you pick the right size for your move.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" /> (208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
