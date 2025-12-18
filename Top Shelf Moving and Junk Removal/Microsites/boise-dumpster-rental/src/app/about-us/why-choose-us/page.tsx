import { Metadata } from 'next'
import { Phone, Clock, DollarSign, Truck, Shield, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Choose Us | Boise Dumpster Rental',
  description: 'Why choose Boise Dumpster Rental? Transparent pricing, on-time delivery, and local service in the Treasure Valley.',
  alternates: { canonical: 'https://boisedumpsterrental.com/about-us/why-choose-us' },
}

export default function WhyChooseUsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">What makes us different from other dumpster rental companies.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Look, there are plenty of companies that rent dumpsters in Boise. So why choose us?</p>
              <p>It comes down to this: we show up when we say we will, charge what we quote, and make the whole process straightforward. No games, no hidden fees, no leaving you hanging.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <DollarSign className="w-8 h-8 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600">The price we quote is what you pay. No surprise fees when we pick up.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-8 h-8 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">On-Time Delivery</h3>
                  <p className="text-gray-600">We deliver and pick up when we say we will. Your time matters.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-8 h-8 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Local Company</h3>
                  <p className="text-gray-600">We live here. This is our community, not just another market.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Fully Insured</h3>
                  <p className="text-gray-600">Comprehensive coverage protects your property and gives you peace of mind.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Truck className="w-8 h-8 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Clean Equipment</h3>
                  <p className="text-gray-600">Well-maintained trucks and dumpsters, not beat-up junk.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-8 h-8 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Real People</h3>
                  <p className="text-gray-600">Call and talk to a person, not an automated system or call center.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-dark-blue mb-4">The Bottom Line</h3>
              <p className="text-gray-600">We're not the cheapest, and we're not trying to be. We're the company you can count on to do what we say we'll do. That's worth something.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Experience the Difference?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
