import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real Estate Cleanout | Top Shelf Property Cleanout',
  description: 'Real estate property cleanout in Boise. Pre-sale cleanouts, estate cleanouts, and property prep. Fast, professional service. Call (208) 505-9352.',
  alternates: { canonical: 'https://property-cleanout-boise.com/real-estate-cleanouts' },
}

export default function RealEstateCleanoutsPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/property-cleanout-team.webp" alt="Real Estate Cleanout" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Real Estate Cleanout</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional cleanout services for real estate agents, investors, and homeowners throughout the Treasure Valley.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Real Estate Property Cleanouts</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Need a property cleaned out before putting it on the market? We help real estate agents, investors, and homeowners get properties ready for sale.</p>
              <p>Pre-sale cleanouts, inherited homes, estate cleanouts—we handle it all. Clean properties sell faster and for more money. Let us handle the cleanout while you focus on the sale.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Our Real Estate Services</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Pre-Sale Cleanouts:</strong> Get properties market-ready quickly.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Inherited Property:</strong> Complete estate and inheritance cleanouts.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Bank-Owned Properties:</strong> Cleanouts for foreclosures and REO properties.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Turnaround:</strong> Get properties on the market faster.</span>
              </li>
            </ul>

            <div className="p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Real Estate Cleanout?</h3>
              <p className="text-gray-300 mb-6">Call now for professional property cleanout services.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
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
            <Link href="/investment-property-cleanouts" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Investment Property</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
