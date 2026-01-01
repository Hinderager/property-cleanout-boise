import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, DollarSign, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing Guide | Boise Hot Tub Removal',
  description: 'Hot tub removal pricing in Boise. Upfront pricing, no hidden fees. Free estimates. Learn what affects cost. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-hot-tub-removal.com/pricing' },
}

const pricingFactors = [
  "Type of hot tub (portable vs. in-ground)",
  "Size and weight of the unit",
  "Location and accessibility",
  "Amount of demolition required",
  "Disposal and recycling needs",
  "Distance from disposal facilities"
]

export default function PricingPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/hot-tub-removal-process.webp" alt="Hot Tub Removal Pricing" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-[#0b7fb6] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Upfront Pricing</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Pricing Guide</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Transparent pricing for hot tub, pool, and deck removal services in Boise.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" /> Call for Free Estimate
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">How We Price Hot Tub Removal</h2>
            <p className="text-lg text-gray-600 mb-12">We give you an upfront price before we start any work. No surprises, no hidden fees. The price we quote is what you pay.</p>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">What Affects the Cost?</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {pricingFactors.map((factor) => (
                <div key={factor} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <DollarSign className="w-5 h-5 text-[#0b7fb6] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{factor}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Typical Price Ranges</h3>
            <div className="space-y-4 mb-12">
              <div className="bg-blue-50 border-l-4 border-[#0b7fb6] p-6">
                <h4 className="font-bold text-[#0B2F3A] mb-2">Portable Hot Tubs</h4>
                <p className="text-gray-700">Above-ground hot tubs are usually the most affordable option. Quick removal, straightforward process.</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-[#0b7fb6] p-6">
                <h4 className="font-bold text-[#0B2F3A] mb-2">In-Ground Hot Tubs</h4>
                <p className="text-gray-700">Built-in hot tubs require more work—concrete removal, electrical disconnection, etc. Pricing reflects the additional labor and disposal.</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-[#0b7fb6] p-6">
                <h4 className="font-bold text-[#0B2F3A] mb-2">Pools and Decks</h4>
                <p className="text-gray-700">Larger projects like pool removal or deck demolition are priced based on size and complexity. We'll give you an exact quote after discussing your project.</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-[#FFC845] p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0B2F3A] mb-2">Get Your Free Estimate</h4>
                  <p className="text-gray-700">Every hot tub removal is different. Call us at (208) 943-5231 and we'll give you an upfront price based on your specific situation. No obligation, no pressure.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">What's Included</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>All Labor:</strong> Our crew handles everything from start to finish.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Safe Disconnection:</strong> Electrical and plumbing handled properly.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Complete Haul Away:</strong> We take everything with us.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Disposal Fees:</strong> Recycling and landfill costs covered.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Site Cleanup:</strong> We leave your property clean.</span>
              </li>
            </ul>

            <div className="p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready for Your Free Estimate?</h3>
              <p className="text-gray-300 mb-6">Call now and we'll give you an upfront price in minutes.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0B2F3A] mb-6">Related Information</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/removal-process" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Removal Process</Link>
            <Link href="/disposal-options" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Disposal Options</Link>
            <Link href="/services" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">All Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
