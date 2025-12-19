import { Metadata } from 'next'
import { Phone, Trash2, Truck, FileText, CheckCircle, Home, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile Home Demolition Process | Boise',
  description: 'Learn about the mobile home demolition process in Boise and the Treasure Valley. Step-by-step guide from start to finish.',
  alternates: { canonical: 'https://mobile-home-demolition-boise.com/resources/demolition-process' },
}

export default function DemolitionProcessPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Mobile Home Demolition Process</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">What to expect from start to finish when demolishing a mobile home.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Mobile home demolition isn't complicated, but there are steps that need to happen in the right order. Here's exactly what the process looks like from your first call to the final cleanup.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Step-by-Step Demolition Process</h2>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-xl">1</div>
                </div>
                <div>
                  <Phone className="w-8 h-8 text-dark-blue mb-3" />
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Initial Contact & Assessment</h3>
                  <p className="text-gray-600 mb-3">Call us at (208) 505-9352. We'll ask about the mobile home—size, condition, location, and what you need done.</p>
                  <p className="text-gray-600">We'll schedule a time to see the property in person (or virtually if you're out of state). This helps us give you an accurate quote.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-xl">2</div>
                </div>
                <div>
                  <FileText className="w-8 h-8 text-dark-blue mb-3" />
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Permits & Legal Requirements</h3>
                  <p className="text-gray-600 mb-3">Depending on your location, you may need a demolition permit. We'll check local requirements and help you get the necessary paperwork.</p>
                  <p className="text-gray-600">We handle the permit process if needed—you don't have to figure it out on your own.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-xl">3</div>
                </div>
                <div>
                  <Wrench className="w-8 h-8 text-dark-blue mb-3" />
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Utility Disconnection</h3>
                  <p className="text-gray-600 mb-3">Before we can start demolition, all utilities must be disconnected:</p>
                  <ul className="text-gray-700 space-y-1 ml-6 list-disc">
                    <li>Electricity shut off at the meter</li>
                    <li>Gas line capped by licensed professional</li>
                    <li>Water shut off and drained</li>
                    <li>Sewer or septic properly sealed</li>
                  </ul>
                  <p className="text-gray-600 mt-3">We can coordinate this with utility companies or you can handle it yourself before we arrive.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-xl">4</div>
                </div>
                <div>
                  <Trash2 className="w-8 h-8 text-dark-blue mb-3" />
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Interior Cleanout (If Needed)</h3>
                  <p className="text-gray-600 mb-3">If there are still belongings, furniture, or debris inside, we'll clear it out first. This includes:</p>
                  <ul className="text-gray-700 space-y-1 ml-6 list-disc">
                    <li>Furniture and appliances</li>
                    <li>Personal items</li>
                    <li>Cabinets, fixtures, and built-ins</li>
                    <li>Any trash or clutter</li>
                  </ul>
                  <p className="text-gray-600 mt-3">We'll donate usable items and dispose of the rest properly.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-xl">5</div>
                </div>
                <div>
                  <Truck className="w-8 h-8 text-dark-blue mb-3" />
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Demolition & Deconstruction</h3>
                  <p className="text-gray-600 mb-3">This is where the actual demo happens. We systematically take apart the mobile home:</p>
                  <ul className="text-gray-700 space-y-1 ml-6 list-disc">
                    <li>Remove skirting and underpinning</li>
                    <li>Detach the home from the foundation or blocks</li>
                    <li>Dismantle the structure section by section</li>
                    <li>Separate materials for recycling (metal, wood, etc.)</li>
                    <li>Load debris into trucks for hauling</li>
                  </ul>
                  <p className="text-gray-600 mt-3">Most mobile home demolitions take 1-3 days depending on size and condition.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-xl">6</div>
                </div>
                <div>
                  <Home className="w-8 h-8 text-dark-blue mb-3" />
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Site Cleanup & Foundation Removal</h3>
                  <p className="text-gray-600 mb-3">After the home is demolished, we clean up the site:</p>
                  <ul className="text-gray-700 space-y-1 ml-6 list-disc">
                    <li>Remove all debris and scrap materials</li>
                    <li>Pull out concrete blocks or foundation piers (if needed)</li>
                    <li>Grade and level the site</li>
                    <li>Haul everything to proper disposal or recycling facilities</li>
                  </ul>
                  <p className="text-gray-600 mt-3">We leave the property clean, level, and ready for whatever comes next.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-xl">7</div>
                </div>
                <div>
                  <CheckCircle className="w-8 h-8 text-dark-blue mb-3" />
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Final Inspection & Documentation</h3>
                  <p className="text-gray-600 mb-3">Some cities require a final inspection after demolition. If that's the case, we'll coordinate with the local building department.</p>
                  <p className="text-gray-600">We'll provide you with documentation of disposal, recycling, and any permits or inspections completed.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What Happens to the Materials?</h2>

            <div className="space-y-4 mb-12">
              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Metal (Recycled)</h4>
                <p className="text-gray-600">The metal frame, siding, and roofing are separated and sent to scrap metal recyclers. This is the most valuable part of the mobile home.</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Wood & Lumber (Varies)</h4>
                <p className="text-gray-600">Some wood can be recycled or repurposed. Damaged or treated lumber goes to the landfill.</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Appliances (Recycled or Donated)</h4>
                <p className="text-gray-600">Working appliances can be donated. Non-working ones are recycled for metal and parts.</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Other Materials (Disposed Properly)</h4>
                <p className="text-gray-600">Insulation, drywall, flooring, and other materials are disposed of at licensed facilities. We follow all local regulations.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6">
              <h3 className="font-bold text-dark-blue mb-3">How Long Does It Take?</h3>
              <p className="text-gray-600 mb-3">Timeline from start to finish:</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Permitting: 5-10 business days (if required)</li>
                <li>• Utility disconnection: 3-7 days</li>
                <li>• Actual demolition: 1-3 days</li>
                <li>• Site cleanup: Same day or next day</li>
              </ul>
              <p className="text-gray-600 mt-3 text-sm">Most projects from approval to completion take 2-4 weeks.</p>
            </div>

            <div className="mt-12 bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6">We'll walk you through every step and handle all the details. Call us today.</p>
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
