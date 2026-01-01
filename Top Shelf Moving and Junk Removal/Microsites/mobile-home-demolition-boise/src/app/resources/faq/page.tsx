import { Metadata } from 'next'
import { Phone, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Boise Mobile Home Demolition',
  description: 'Common questions about mobile home demolition, removal costs, permits, timeline, and what to expect. Get answers from Treasure Valley demolition experts.',
  alternates: { canonical: 'https://mobile-home-demolition-boise.com/resources/faq' },
}

export default function FAQPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Get answers about mobile home demolition and removal</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-dark-blue mb-3">How much does mobile home demolition cost?</h2>
                <p className="text-gray-600">Most mobile home demolition projects run between $3,000 and $8,000 depending on the size, location, and what needs to be done. Single-wides are cheaper than double-wides or triple-wides. If you need foundation removal, utility disconnection, or special disposal, that adds to the cost. We'll give you an exact quote after seeing the property.</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-dark-blue mb-3">How long does the demolition process take?</h2>
                <p className="text-gray-600">Most jobs take 1-3 days from start to finish. The timeline depends on the size of the mobile home and what services you need. A straightforward single-wide removal might be done in a day. A larger home with foundation removal could take two or three days.</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-dark-blue mb-3">Do I need a permit to demolish a mobile home?</h2>
                <p className="text-gray-600">It depends on your city or county. Some areas require permits, others don't. We can help you figure out what's needed and handle the permit paperwork if required. It's part of the service.</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-dark-blue mb-3">What happens to the materials after demolition?</h2>
                <p className="text-gray-600">We haul everything away and dispose of it properly. Some materials get recycled (metal, certain types of wood), and the rest goes to approved disposal sites. You don't need to worry about where it goes or how to get rid of it.</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-dark-blue mb-3">Can you remove the foundation too?</h2>
                <p className="text-gray-600">Yes. We can remove concrete piers, footings, or slab foundations. That's usually an add-on service since not everyone needs it removed. If you're planning new construction on the site, foundation removal is often part of the job.</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-dark-blue mb-3">Do you disconnect utilities before demolition?</h2>
                <p className="text-gray-600">We can coordinate utility disconnection or you can handle it yourself. Either way, water, electric, gas, and septic need to be properly disconnected before we start demo work. We'll walk you through what needs to happen.</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-dark-blue mb-3">What if there's stuff still inside the mobile home?</h2>
                <p className="text-gray-600">The mobile home needs to be empty before we start demolition. If you need help clearing it out, we can handle that too, but it's a separate service. Personal belongings, furniture, and appliances all need to go first.</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-dark-blue mb-3">Will the site be level and clean when you're done?</h2>
                <p className="text-gray-600">Yes. We remove all debris, rake the area, and leave you with a clean, level site. If you want additional grading or fill work, that can be arranged, but basic cleanup is included in every job.</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-dark-blue mb-3">Can you demolish mobile homes in tight spaces?</h2>
                <p className="text-gray-600">Usually, yes. We've worked in tight RV parks, backyards, and rural properties with difficult access. As long as we can get equipment to the site, we can handle it. We'll assess access when we come out for the estimate.</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-dark-blue mb-3">Are you licensed and insured?</h2>
                <p className="text-gray-600">Yes. We carry full liability insurance and workers' comp coverage. This protects you, your property, and our crew. We can provide proof of insurance upon request.</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-dark-blue mb-3">Do you serve areas outside Boise?</h2>
                <p className="text-gray-600">Yes. We work throughout the Treasure Valley including Meridian, Nampa, Caldwell, Eagle, Kuna, and surrounding areas. Give us a call and we'll let you know if we can reach your location.</p>
              </div>

              <div className="pb-6">
                <h2 className="text-xl font-bold text-dark-blue mb-3">How do I get started?</h2>
                <p className="text-gray-600">Just give us a call. We'll ask a few questions about your property and the mobile home, then schedule a time to come out and give you a free quote. No pressure, no obligation.</p>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-6">We're happy to answer any questions about your specific project.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Call Us Today</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
