import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Investment Property Cleanout | Top Shelf Property Cleanout',
  description: 'Investment property cleanout in Boise. Fast turnaround for real estate investors. Rental turnovers, flip prep, and more. Call (208) 943-5231.',
  alternates: { canonical: 'https://property-cleanout-boise.com/investment-property-cleanouts' },
}

export default function InvestmentPropertyCleanoutsPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/property-cleanout-team.webp" alt="Investment Property Cleanout" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Investment Property Cleanout</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Fast, reliable cleanout services for real estate investors throughout the Treasure Valley.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Investment Property Cleanouts</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Real estate investors, we get it. Time is money. Whether you're flipping houses, managing rentals, or dealing with inherited properties, you need cleanouts done fast and done right.</p>
              <p>We work with investors throughout Boise to handle property cleanouts quickly and efficiently. From flip prep to rental turnovers to foreclosure cleanouts, we've got you covered.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Services for Investors</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Flip Preparation:</strong> Get properties ready for renovation quickly.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Rental Turnovers:</strong> Fast cleanouts between tenants.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Foreclosure Cleanouts:</strong> Bank-owned and REO property cleanouts.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Wholesale Deals:</strong> Quick cleanouts for wholesale properties.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Volume Pricing:</strong> Discounts available for multiple properties.</span>
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0b7fb6] p-6 mb-12">
              <h4 className="font-bold text-dark-blue mb-2">Work With Investors</h4>
              <p className="text-gray-700">We understand investor timelines and budgets. We move fast, price fairly, and get the job done right. Many of our clients are repeat investors who trust us with multiple properties.</p>
            </div>

            <div className="p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Investment Property Cleanout?</h3>
              <p className="text-gray-300 mb-6">Call now for investor-friendly pricing and fast service.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/real-estate" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Real Estate Services</Link>
            <Link href="/foreclosure-cleanouts" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Foreclosure Cleanouts</Link>
            <Link href="/rental-turnovers" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Rental Turnovers</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
