import { Metadata } from 'next'
import { Phone, DollarSign, TrendingUp, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dumpster Rental Pricing Guide | Boise Dumpster Rental',
  description: 'How much does dumpster rental cost in Boise? Learn about pricing factors, size costs, and how to get the best deal.',
  alternates: { canonical: 'https://boisedumpsterrental.com/resources/pricing' },
}

export default function PricingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dumpster Rental Pricing</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Transparent pricing information for Boise and the Treasure Valley.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Here's how dumpster rental pricing works. No secrets, no runaround.</p>
              <p>Most companies charge a flat rate that includes delivery, pickup, a certain number of days, and a weight limit. You pay one price upfront, and as long as you don't go over the weight limit or keep it longer than agreed, that's all you pay.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-8">Typical Pricing by Size</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-dark-blue mb-2">10 Yard Dumpster</h3>
                <p className="text-3xl font-bold text-[#FFC845] mb-2">$300-$400</p>
                <p className="text-gray-600">Perfect for small cleanouts or minor renovations. Holds about 3 pickup truck loads.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-dark-blue mb-2">15 Yard Dumpster</h3>
                <p className="text-3xl font-bold text-[#FFC845] mb-2">$375-$475</p>
                <p className="text-gray-600">Good for medium projects like deck removal or garage cleanouts. Holds about 4.5 pickup loads.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-dark-blue mb-2">20 Yard Dumpster</h3>
                <p className="text-3xl font-bold text-[#FFC845] mb-2">$425-$525</p>
                <p className="text-gray-600">Most popular size. Great for full room remodels or large cleanouts. Holds about 6 pickup loads.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-dark-blue mb-2">30 Yard Dumpster</h3>
                <p className="text-3xl font-bold text-[#FFC845] mb-2">$500-$625</p>
                <p className="text-gray-600">Large construction projects or major demolition. Holds about 9 pickup loads.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-dark-blue mb-2">40 Yard Dumpster</h3>
                <p className="text-3xl font-bold text-[#FFC845] mb-2">$575-$725</p>
                <p className="text-gray-600">Biggest size. Commercial projects or full-house cleanouts. Holds about 12 pickup loads.</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6 italic">*Prices are estimates for standard 7-day rental with typical weight limits in Boise area. Call for exact quote.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-8">What Affects the Price?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <DollarSign className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Dumpster Size</h3>
                  <p className="text-gray-600">Bigger dumpster = higher price. But going too small and needing a second one costs more than getting the right size the first time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <TrendingUp className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Weight and Material Type</h3>
                  <p className="text-gray-600">Heavy materials like concrete, dirt, or roofing shingles cost more to dispose of than general household junk.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Rental Period</h3>
                  <p className="text-gray-600">Most rentals include 7 days. Need it longer? Usually $10-15 per extra day.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Hidden Fees to Watch For</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>Some companies advertise low prices then hit you with extra charges. Here's what to ask about:</p>
              <ul className="space-y-2">
                <li><strong>Overage fees:</strong> What's the weight limit and what do you charge if I go over?</li>
                <li><strong>Environmental fees:</strong> Some companies tack on disposal or "environmental" fees that aren't in the base price.</li>
                <li><strong>Delivery/pickup fees:</strong> Should be included. If it's listed separately, ask why.</li>
                <li><strong>Fuel surcharges:</strong> Sometimes legitimate, sometimes just a way to pad the bill.</li>
              </ul>
              <p className="font-bold text-dark-blue">Our pricing includes delivery, pickup, and disposal—no surprise fees.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Get an Exact Quote</h2>
          <p className="text-gray-300 mb-6">Call us and we'll give you a straight answer on what it'll cost.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
