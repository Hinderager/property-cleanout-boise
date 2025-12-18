import { Metadata } from 'next'
import { Phone, DollarSign, Home, Package, Clock, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Estate Cleanout Pricing Guide | Boise',
  description: 'Understand estate cleanout costs and pricing factors in the Treasure Valley. Free quotes from Top Shelf Estate Cleanout.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/resources/pricing' },
}

export default function PricingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Estate Cleanout Pricing</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Transparent pricing information to help you budget for your estate cleanout.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Estate cleanout costs vary based on several factors. While we can't give you an exact price without seeing the property, here's what affects the cost and what you can generally expect to pay.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-8">Typical Price Ranges</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                <Home className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Small Jobs</h3>
                <p className="text-3xl font-bold text-dark-blue mb-2">$500-$1,500</p>
                <p className="text-gray-600 text-sm">Apartments, single rooms, or minimal cleanouts</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-2 border-[#FFC845]">
                <Home className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Average Jobs</h3>
                <p className="text-3xl font-bold text-dark-blue mb-2">$1,500-$3,500</p>
                <p className="text-gray-600 text-sm">Typical 3-bedroom homes, moderate amount of belongings</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                <Home className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Large Jobs</h3>
                <p className="text-3xl font-bold text-dark-blue mb-2">$3,500-$8,000+</p>
                <p className="text-gray-600 text-sm">Large homes, full basements/garages, or hoarding situations</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What Affects the Cost?</h2>

            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <Package className="w-10 h-10 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Amount of Stuff</h3>
                  <p className="text-gray-600">More belongings mean more time and more truck loads. A house packed full costs more than a partially empty one.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Home className="w-10 h-10 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Property Size</h3>
                  <p className="text-gray-600">Larger homes take longer to clear. Basements, attics, garages, and sheds all add to the scope of work.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-10 h-10 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Timeframe</h3>
                  <p className="text-gray-600">Rush jobs or same-day service may cost more. If you have flexibility on timing, we can sometimes offer better rates.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <TrendingUp className="w-10 h-10 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Condition & Complexity</h3>
                  <p className="text-gray-600">Hoarding situations, biohazard cleanup, or heavy furniture require specialized handling and may increase costs.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <DollarSign className="w-10 h-10 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Donation vs. Disposal</h3>
                  <p className="text-gray-600">If most items can be donated, costs are lower. Heavy disposal fees apply when everything goes to the landfill.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6 mb-12">
              <h3 className="text-lg font-bold text-dark-blue mb-2">How We Price</h3>
              <p className="text-gray-700 mb-3">We provide free, no-obligation quotes after seeing the property (in person or via photos/video call). You'll know exactly what you're paying before we start—no hidden fees, no surprises.</p>
              <p className="text-gray-700">We price based on the scope of work, not by the hour. That way you're never watching the clock or worrying about charges adding up.</p>
            </div>

            <div className="bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Get a Free Quote</h2>
              <p className="text-gray-300 mb-6">Call us for an honest assessment of what your estate cleanout will cost.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
