import { Metadata } from 'next'
import { Phone, Phone as PhoneIcon, Calendar, Clipboard, Truck, CheckCircle, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Estate Cleanout Process | Boise',
  description: 'Learn what to expect when you work with Top Shelf Estate Cleanout in the Treasure Valley. Step-by-step process explained.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/resources/process' },
}

export default function ProcessPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Process</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">What to expect when you work with Top Shelf Estate Cleanout.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We've streamlined our estate cleanout process to make it as stress-free as possible. Here's exactly what happens from your first call to the final walkthrough.</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-xl">1</div>
                </div>
                <div>
                  <PhoneIcon className="w-8 h-8 text-dark-blue mb-3" />
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Initial Contact</h3>
                  <p className="text-gray-600">Call us at (208) 505-9352. We'll ask a few basic questions about the property and your situation. This helps us understand what you need and give you a ballpark idea of timing and cost.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-xl">2</div>
                </div>
                <div>
                  <Calendar className="w-8 h-8 text-dark-blue mb-3" />
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">On-Site Assessment or Virtual Quote</h3>
                  <p className="text-gray-600">We'll schedule a time to see the property—either in person or via video call if you're out of state. We'll walk through, assess the scope, and provide a written quote. No obligation, no pressure.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-xl">3</div>
                </div>
                <div>
                  <Clipboard className="w-8 h-8 text-dark-blue mb-3" />
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Review & Planning</h3>
                  <p className="text-gray-600">We'll go over the quote, timeline, and any special requests. Want to keep certain items? Need us to identify valuables? Want everything donated if possible? We'll note it all and create a plan that works for you.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-xl">4</div>
                </div>
                <div>
                  <Calendar className="w-8 h-8 text-dark-blue mb-3" />
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Schedule the Cleanout</h3>
                  <p className="text-gray-600">Once you approve the quote, we'll schedule a date that works for you. We can often start within 24-48 hours, and same-day service is available when possible.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-xl">5</div>
                </div>
                <div>
                  <Truck className="w-8 h-8 text-dark-blue mb-3" />
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">The Cleanout Day</h3>
                  <p className="text-gray-600 mb-4">Our team arrives on time with all necessary equipment. We'll:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sort through belongings systematically, room by room</li>
                    <li>• Set aside items you want to keep or items of potential value</li>
                    <li>• Load everything carefully to avoid property damage</li>
                    <li>• Separate donations from disposal items</li>
                    <li>• Keep you updated on progress throughout the day</li>
                  </ul>
                  <p className="text-gray-600 mt-4">You can be there or not—whatever feels right. We'll call with any questions or decisions that come up.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-xl">6</div>
                </div>
                <div>
                  <Home className="w-8 h-8 text-dark-blue mb-3" />
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Final Cleanup</h3>
                  <p className="text-gray-600">After everything is removed, we sweep, remove debris, and leave the property broom-clean. We'll do a final walkthrough to make sure nothing was missed.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-xl">7</div>
                </div>
                <div>
                  <CheckCircle className="w-8 h-8 text-dark-blue mb-3" />
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Donation & Disposal</h3>
                  <p className="text-gray-600">Usable items go to local charities. We recycle whatever we can. Everything else is disposed of properly and legally. We'll provide documentation if needed for tax purposes or probate.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 border-l-4 border-dark-blue p-6">
              <h3 className="text-lg font-bold text-dark-blue mb-2">How Long Does It Take?</h3>
              <p className="text-gray-700">Most residential estate cleanouts take 1-3 days. Small jobs (apartments, single rooms) might be done in a few hours. Large homes with full basements and garages can take several days. We'll give you a realistic timeline upfront.</p>
            </div>

            <div className="mt-12 bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6">Call us today. We'll walk you through everything and answer all your questions.</p>
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
