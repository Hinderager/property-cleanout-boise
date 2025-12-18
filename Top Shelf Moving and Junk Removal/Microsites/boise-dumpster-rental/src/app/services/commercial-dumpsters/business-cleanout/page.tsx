import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Cleanout Dumpster Rental Boise | Top Shelf Dumpster Rental',
  description: 'Rent dumpsters for business cleanouts in Boise. Office, retail, warehouse, and commercial space cleanouts. Call (208) 505-9352.',
  alternates: { canonical: 'https://boisedumpsterrental.com/services/commercial-dumpsters/business-cleanout' },
}

export default function BusinessCleanoutDumpsterPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Business Cleanout Dumpsters</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Clear out your commercial space fast.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Dumpsters for Commercial Cleanouts</h2>
              <p className="text-lg text-gray-600 mb-6">
                Closing a business? Moving to a new location? Just need to clear out years of accumulated stuff? We've done it all.
              </p>
              <p className="text-lg text-gray-600">
                Get a dumpster, fill it with everything you don't need, and we'll haul it away. Simple as that.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Common Business Cleanout Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Office cleanouts and relocations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Retail store closures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Restaurant equipment removal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Warehouse cleanouts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Manufacturing facility cleanouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Medical office cleanouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Bank and financial office cleanouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Property management cleanouts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">What Can Go in the Dumpster?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Most commercial junk: desks, chairs, filing cabinets, old computers, shelving, fixtures, cardboard, packing materials, and general office or retail debris.
              </p>
              <p className="text-lg text-gray-600">
                We can't take hazardous materials or certain electronics that require special disposal. If you're not sure about something, just ask.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">What Size Dumpster for Your Business?</h2>
              <ul className="space-y-3 text-gray-700">
                <li><strong>15 yard:</strong> Small office or retail space</li>
                <li><strong>20 yard:</strong> Medium office or store (most popular)</li>
                <li><strong>30 yard:</strong> Large office, warehouse, or multi-room business</li>
                <li><strong>40 yard:</strong> Major commercial cleanout or full building</li>
              </ul>
              <p className="text-lg text-gray-600 mt-4">
                Not sure what size you need? Call us. We'll help you figure it out based on your space and what you're getting rid of.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Flexible Scheduling</h2>
              <p className="text-lg text-gray-600 mb-4">
                We know business cleanouts happen on tight timelines. Need it delivered after hours? Weekend pickup? We can usually make it work.
              </p>
              <p className="text-lg text-gray-600">
                Just let us know what you need and we'll figure out the schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need a Business Cleanout Dumpster?</h2>
          <p className="text-gray-300 mb-6">Call us for commercial pricing and flexible scheduling.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" /> (208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
