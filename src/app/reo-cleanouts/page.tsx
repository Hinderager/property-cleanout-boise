import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'REO Property Cleanout | Top Shelf Property Cleanout',
  description: 'REO property cleanout in Boise. Real estate owned cleanouts for banks and asset managers. Professional service. Call (208) 943-5231.',
  alternates: { canonical: 'https://property-cleanout-boise.com/reo-cleanouts' },
}

export default function REOCleanoutsPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/property-cleanout-team.webp" alt="REO Property Cleanout" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">REO Property Cleanout</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional cleanout services for real estate owned properties. Fast turnaround for banks and asset managers.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">REO Cleanout Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We work with banks, asset management companies, and real estate investors to clean out REO (real estate owned) properties throughout the Treasure Valley.</p>
              <p>These properties need to be cleaned out quickly and completely to get them market-ready. We handle the whole process—remove everything, haul it away, and leave the property broom-clean.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Choose Us for REO Cleanouts</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Response:</strong> Quick turnaround to minimize holding costs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Complete Service:</strong> We handle everything from start to finish.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Documentation:</strong> Photos and records for your files.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Professional Service:</strong> Licensed, insured, and reliable.</span>
              </li>
            </ul>

            <div className="p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need REO Cleanout?</h3>
              <p className="text-gray-300 mb-6">Call now for professional REO property cleanout.</p>
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
            <Link href="/services/foreclosure" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Foreclosure Services</Link>
            <Link href="/foreclosure-cleanouts" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Foreclosure Cleanouts</Link>
            <Link href="/real-estate-cleanouts" className="text-[#0b7fb6] underline hover:text-dark-blue font-medium">Real Estate Cleanouts</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
