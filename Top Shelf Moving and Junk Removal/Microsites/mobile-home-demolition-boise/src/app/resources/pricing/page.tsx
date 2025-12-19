import { Metadata } from 'next'
import { Phone, DollarSign, Home, Wrench, Trash2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing Guide | Boise Mobile Home Demolition',
  description: 'Mobile home demolition pricing guide. Learn what affects the cost of removing a mobile home in Boise and the Treasure Valley. Free quotes available.',
  alternates: { canonical: 'https://mobile-home-demolition-boise.com/resources/pricing' },
}

export default function PricingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Pricing Guide</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">What affects the cost of mobile home demolition</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Mobile home demolition costs vary based on several factors. Here's what goes into the price and what you can expect to pay.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Typical Price Ranges</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div>
                    <h3 className="font-bold text-dark-blue">Single-Wide Mobile Home</h3>
                    <p className="text-sm text-gray-600">Standard removal and disposal</p>
                  </div>
                  <div className="text-xl font-bold text-[#FFC845]">$3,000 - $5,000</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div>
                    <h3 className="font-bold text-dark-blue">Double-Wide Mobile Home</h3>
                    <p className="text-sm text-gray-600">Standard removal and disposal</p>
                  </div>
                  <div className="text-xl font-bold text-[#FFC845]">$5,000 - $8,000</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div>
                    <h3 className="font-bold text-dark-blue">Triple-Wide Mobile Home</h3>
                    <p className="text-sm text-gray-600">Standard removal and disposal</p>
                  </div>
                  <div className="text-xl font-bold text-[#FFC845]">$8,000 - $12,000</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">*Prices vary based on condition, access, and additional services needed</p>
            </div>

            <h2 className="text-2xl font-bold text-dark-blue mb-6">What Affects the Cost</h2>

            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Home className="w-10 h-10 text-[#FFC845]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Size of the Mobile Home</h3>
                  <p className="text-gray-600">Bigger homes cost more to demolish and dispose of. A single-wide is cheaper than a double-wide, and a double-wide is cheaper than a triple-wide. Pretty straightforward.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Wrench className="w-10 h-10 text-[#FFC845]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Foundation Removal</h3>
                  <p className="text-gray-600">If you need the concrete piers, footings, or slab removed, that's extra work. Foundation removal typically adds $1,500 to $3,500 depending on the type and size.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <DollarSign className="w-10 h-10 text-[#FFC845]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Utility Disconnection</h3>
                  <p className="text-gray-600">We can coordinate with utility companies to disconnect water, electric, gas, and septic. This usually runs $300 to $800 depending on what's connected and how complicated the disconnect is.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Trash2 className="w-10 h-10 text-[#FFC845]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Site Access</h3>
                  <p className="text-gray-600">If your mobile home is in a tight spot or hard to reach, that can add time and difficulty to the job. Most properties are fine, but if access is really restricted, the price may go up a bit.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Home className="w-10 h-10 text-[#FFC845]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Condition of the Home</h3>
                  <p className="text-gray-600">If the mobile home is falling apart, full of mold, or contains hazardous materials, that can complicate things. Most homes are just old and need to come down, which is no problem.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-[#FFC845] p-6 mb-12">
              <h3 className="font-bold text-dark-blue mb-2">What's Included in Our Prices</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] mt-1">•</span>
                  <span>Complete demolition of the mobile home</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] mt-1">•</span>
                  <span>Hauling and disposal of all materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] mt-1">•</span>
                  <span>Site cleanup and debris removal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] mt-1">•</span>
                  <span>Basic site leveling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] mt-1">•</span>
                  <span>Permit assistance (if needed)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Get an Exact Quote</h2>
              <p className="text-gray-600 mb-6">Every property is different. Call us for a free, no-obligation quote based on your specific situation.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Request Your Free Quote</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
