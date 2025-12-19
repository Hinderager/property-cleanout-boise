import { Metadata } from 'next'
import { Phone, CheckCircle, DollarSign, Clock, Shield, Truck, ThumbsUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Choose Us | Boise Mobile Home Demolition',
  description: 'Learn why property owners choose Boise Mobile Home Demolition. Licensed experts, fair pricing, complete service, and reliable work across the Treasure Valley.',
  alternates: { canonical: 'https://mobile-home-demolition-boise.com/about-us/why-choose-us' },
}

export default function WhyChooseUsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">What makes us different from other demolition companies</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>You've got options when it comes to mobile home demolition. So why work with us? Here's what sets us apart.</p>
            </div>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Shield className="w-10 h-10 text-[#FFC845]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Fully Licensed and Insured</h3>
                  <p className="text-gray-600">We carry proper licensing and comprehensive insurance coverage. That means you're protected if anything goes wrong. A lot of guys doing demolition work don't have this, and that puts you at risk.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <DollarSign className="w-10 h-10 text-[#FFC845]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Fair, Transparent Pricing</h3>
                  <p className="text-gray-600">We give you a detailed quote upfront and stick to it. No surprise fees or hidden charges. You'll know exactly what you're paying for before we start work.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Truck className="w-10 h-10 text-[#FFC845]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Complete Service</h3>
                  <p className="text-gray-600">We handle everything from utility disconnection to foundation removal to hauling away debris. You don't need to coordinate with multiple contractors or rent equipment. One call does it all.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-10 h-10 text-[#FFC845]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Fast, Efficient Work</h3>
                  <p className="text-gray-600">Most mobile home demolition jobs take us 1-3 days. We show up when we say we will, get the work done, and don't drag it out. Time is money, and we respect both.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-10 h-10 text-[#FFC845]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Local Experience</h3>
                  <p className="text-gray-600">We know the Treasure Valley. We're familiar with local codes, permitting processes, and disposal sites. That means fewer headaches and no surprises during your project.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <ThumbsUp className="w-10 h-10 text-[#FFC845]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Professional, Respectful Crew</h3>
                  <p className="text-gray-600">Our team shows up on time, communicates clearly, and treats your property with respect. We clean up thoroughly when we're done, so you're left with a clear, level site.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">The Bottom Line</h2>
              <p className="text-gray-600">Mobile home demolition isn't complicated, but it needs to be done right. We have the experience, equipment, and credentials to handle your project safely and efficiently. And we won't charge you an arm and a leg to do it.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
