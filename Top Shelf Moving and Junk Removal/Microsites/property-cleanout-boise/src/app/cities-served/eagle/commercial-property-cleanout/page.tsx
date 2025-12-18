import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Property Cleanout Eagle ID | Top Shelf Property Cleanout',
  description: 'Office and commercial cleanouts in Eagle, Idaho. Fast, professional service. Licensed & insured. Call (208) 505-9352.',
  keywords: ['commercial property cleanout Eagle', 'property cleanout Eagle'],
  alternates: {
    canonical: 'https://property-cleanout-boise.com/cities-served/eagle/commercial-property-cleanout',
  },
}

const commonProblems = ["Office space clearance","Retail location cleanup","Warehouse cleanout","Equipment removal","Lease deadline approaching","Business closure cleanout"]

export default function EagleCommercialPropertyCleanoutPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/commercial-property-cleanout.webp"
          alt="Commercial Property Cleanout in Eagle, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-[#FFC845] text-dark-blue px-4 py-1 rounded-full text-sm font-bold mb-4">Same-Day Service Available</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Commercial Property Cleanout in Eagle</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Office and commercial cleanouts. Serving Eagle and the Treasure Valley.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Commercial Property Cleanout Services in Eagle</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Dealing with a property cleanout situation in Eagle? We handle all types of commercial property cleanout projects throughout Eagle and the Treasure Valley.</p>
              <p>Top Shelf Property Cleanout provides fast, professional service for Eagle property owners. Our team shows up on time, works efficiently, and hauls away everything you don't want.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Common Situations We Handle in Eagle</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {commonProblems.map((problem) => (
                <div key={problem} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Eagle Property Owners Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Eagle Service:</strong> We respond quickly to Eagle cleanout requests.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start any work.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Full Service:</strong> We do all the heavy lifting and hauling.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Professional, trustworthy service.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Commercial Property Cleanout in Eagle?</h3>
              <p className="text-gray-300 mb-6">Call now for fast, professional service.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Other Services in Eagle</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/eagle" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">All Eagle Services</Link>
            <Link href="/cities-served/eagle/rental-property-cleanout" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Rental Cleanout</Link>
            <Link href="/cities-served/eagle/foreclosure-cleanout" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Foreclosure Cleanout</Link>
            <Link href="/cities-served/eagle/estate-cleanout" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Estate Cleanout</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
