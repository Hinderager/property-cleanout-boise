import { Metadata } from 'next'
import { Phone, Clipboard, Wrench, Truck, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Demolition Process | Boise Mobile Home Demolition',
  description: 'Step-by-step guide to mobile home demolition. Learn what happens from initial quote to final cleanup. Professional demolition service in the Treasure Valley.',
  alternates: { canonical: 'https://boise-mobile-home-demolition.com/resources/process' },
}

export default function ProcessPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Demolition Process</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">What to expect from start to finish</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Mobile home demolition is straightforward, but it helps to know what's involved. Here's how the process works from the first phone call to final cleanup.</p>
            </div>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#FFC845] rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-dark-blue" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Step 1: Initial Contact</h3>
                  <p className="text-gray-600 mb-3">Give us a call and we'll ask some basic questions about your property and the mobile home. We'll want to know the size (single-wide, double-wide, etc.), location, and what services you need.</p>
                  <p className="text-gray-600">This conversation usually takes about 5-10 minutes. We'll schedule a time to come out and look at the property in person.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#FFC845] rounded-full flex items-center justify-center">
                    <Clipboard className="w-8 h-8 text-dark-blue" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Step 2: On-Site Assessment</h3>
                  <p className="text-gray-600 mb-3">We come out to see the mobile home and assess the job. We'll look at the size, condition, access for equipment, and any potential complications.</p>
                  <p className="text-gray-600">During this visit, we'll give you a detailed quote that covers everything: demolition, hauling, disposal, cleanup, and any extras you need like foundation removal or utility disconnection.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#FFC845] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-dark-blue" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Step 3: Approval and Scheduling</h3>
                  <p className="text-gray-600 mb-3">If you're happy with the quote, we'll get you on the schedule. We'll also handle any permit requirements and coordinate utility disconnection if needed.</p>
                  <p className="text-gray-600">Before demolition starts, the mobile home needs to be empty of all personal belongings, furniture, and appliances. We can help with that if needed, but it's a separate service.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#FFC845] rounded-full flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-dark-blue" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Step 4: Demolition Work</h3>
                  <p className="text-gray-600 mb-3">Our crew shows up with the right equipment and gets to work. We start by disconnecting any remaining utilities (if not already done), then begin tearing down the mobile home.</p>
                  <p className="text-gray-600 mb-3">We use excavators, skid steers, and other heavy equipment to dismantle the structure safely and efficiently. The materials are separated as we go—metal gets recycled, and everything else is loaded for disposal.</p>
                  <p className="text-gray-600">Most jobs take 1-3 days depending on the size of the home and what additional work is involved.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#FFC845] rounded-full flex items-center justify-center">
                    <Truck className="w-8 h-8 text-dark-blue" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Step 5: Hauling and Disposal</h3>
                  <p className="text-gray-600 mb-3">As demolition progresses, we haul materials away to the appropriate disposal sites. Metal goes to recycling centers. Wood, drywall, and other debris go to approved landfills.</p>
                  <p className="text-gray-600">You don't need to worry about where things go or how they're disposed of. We handle all of that and follow local regulations.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#FFC845] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-dark-blue" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Step 6: Site Cleanup</h3>
                  <p className="text-gray-600 mb-3">Once demolition is complete, we clean up the site. This includes removing all debris, raking the area, and leaving you with a level, clean lot.</p>
                  <p className="text-gray-600">If you need additional grading, fill dirt, or other site work, we can handle that too. Just let us know what you want.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#FFC845] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-dark-blue" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Step 7: Final Walkthrough</h3>
                  <p className="text-gray-600 mb-3">We do a final walkthrough with you to make sure everything looks good and you're happy with the work. If there's anything that needs attention, we take care of it.</p>
                  <p className="text-gray-600">That's it. Your property is cleared, clean, and ready for whatever comes next.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Simple, Start to Finish</h2>
              <p className="text-gray-600">We've done this hundreds of times. The process is efficient, predictable, and hassle-free. You'll know what to expect at every step, and we'll keep you updated as the work progresses.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
