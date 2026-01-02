import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowLeft } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Home Cleanout Dumpster Rental Boise | Top Shelf Dumpster Rental',
  description: 'Rent a dumpster for your home cleanout project in Boise. Perfect for garage, basement, attic, and whole house cleanouts. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/services/residential-dumpsters/home-cleanout' },
}

export default function HomeCleanoutDumpsterPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Home Cleanout Dumpsters</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Finally tackle that cleanout project you've been putting off.</p>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Why Rent a Dumpster for a Home Cleanout?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Because driving back and forth to the dump all weekend is terrible. You'll spend more on gas and dump fees than the dumpster costs, plus you'll waste your whole Saturday.
              </p>
              <p className="text-lg text-gray-600">
                We drop off a dumpster, you fill it up on your schedule, and we haul it away when you're done. Simple.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Common Home Cleanout Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Garage cleanouts (years of accumulated stuff)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Basement or attic clearing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Whole house cleanouts (moving, downsizing)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Estate cleanouts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Storage unit cleanouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Shed cleanouts and removal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Foreclosure or rental property cleanouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Spring cleaning (the real kind)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">What Size Do You Need?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Depends on how much stuff you're getting rid of. Here's a quick guide:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li><strong>10 yard:</strong> Small garage or single room</li>
                <li><strong>15 yard:</strong> Larger garage, small basement, or a few rooms</li>
                <li><strong>20 yard:</strong> Whole house cleanout or large basement (most popular)</li>
                <li><strong>30 yard:</strong> Major cleanout with tons of stuff</li>
              </ul>
              <p className="text-lg text-gray-600 mt-4">
                Not sure? Call us. We'll ask you a few questions and help you pick the right size.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">What Can You Throw in the Dumpster?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Just about anything you'd find in a house: furniture, appliances, boxes of junk, old electronics, carpeting, yard waste, you name it.
              </p>
              <p className="text-lg text-gray-600">
                We can't take hazardous materials (paint, chemicals, batteries), but pretty much everything else is fair game. If you're not sure about something specific, just ask.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Rent a Dumpster?</h2>
          <p className="text-gray-300 mb-6">Call us and we'll help you pick the right size for your cleanout.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" /> (208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
