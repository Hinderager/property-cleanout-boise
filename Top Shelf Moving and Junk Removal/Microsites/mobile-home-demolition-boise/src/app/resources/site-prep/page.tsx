import { Metadata } from 'next'
import { Phone, MapPin, Shovel, CheckCircle, AlertTriangle, Hammer } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Site Preparation After Mobile Home Demolition | Boise',
  description: 'Learn about site preparation and cleanup after mobile home demolition in Boise. Options for foundation removal, grading, and future use.',
  alternates: { canonical: 'https://mobile-home-demolition-boise.com/resources/site-prep' },
}

export default function SitePrepPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Site Preparation</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">What to do with your property after the mobile home is gone.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>After we demolish and haul away your mobile home, you're left with an empty lot. What happens next depends on what you plan to do with the property. Here are your options.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Basic Cleanup (Included)</h2>
            <p className="text-gray-600 mb-6">Our standard demolition service includes basic site cleanup:</p>

            <div className="space-y-3 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Remove all debris:</strong> Every piece of the mobile home is hauled away—nothing left behind</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Pull out skirting and underpinning:</strong> All exterior materials removed from the site</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Clear the footprint:</strong> The area where the home sat is clean and open</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Basic leveling:</strong> We rake and level the site so it's not a mess</span>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Foundation & Pier Removal</h2>
            <p className="text-gray-600 mb-6">Mobile homes sit on blocks, piers, or concrete pads. You have a few options:</p>

            <div className="space-y-4 mb-12">
              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Leave It As-Is</h4>
                <p className="text-gray-600">If you're placing another mobile home on the same spot, you can leave the existing blocks and piers in place. Saves money and time.</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Remove Blocks & Piers</h4>
                <p className="text-gray-600">If you want a completely clear lot, we can pull out all the concrete blocks, piers, and foundation materials. This is extra work and adds to the cost.</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Break Up & Bury Foundation</h4>
                <p className="text-gray-600">In some cases, it's cheaper to break up the concrete foundation and bury it on-site (if allowed by local codes). We'll check regulations before doing this.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Grading & Leveling</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <Shovel className="w-10 h-10 text-[#FFC845] mb-4" />
              <h3 className="text-xl font-bold text-dark-blue mb-3">Do You Need Professional Grading?</h3>
              <p className="text-gray-600 mb-3">It depends on what you're doing with the property:</p>

              <div className="space-y-3 mt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-dark-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-dark-blue">Selling as vacant land?</p>
                    <p className="text-gray-600 text-sm">Basic leveling is usually fine.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-dark-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-dark-blue">Placing another mobile home?</p>
                    <p className="text-gray-600 text-sm">You'll need the site level and properly prepped for the new home.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-dark-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-dark-blue">Building a stick-built home?</p>
                    <p className="text-gray-600 text-sm">A contractor or excavator will handle grading before pouring a foundation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-dark-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-dark-blue">Using it for storage or parking?</p>
                    <p className="text-gray-600 text-sm">Basic cleanup is enough unless you want gravel or pavement.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Utility Cap-Offs</h2>
            <p className="text-gray-600 mb-6">After demolition, utilities need to be properly capped or terminated:</p>

            <div className="space-y-3 mb-12">
              <div className="flex items-start gap-3">
                <Hammer className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Electrical:</strong> Meter removed, lines capped or pulled back by the power company</span>
              </div>
              <div className="flex items-start gap-3">
                <Hammer className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Gas:</strong> Line capped at the source by a licensed professional</span>
              </div>
              <div className="flex items-start gap-3">
                <Hammer className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Water:</strong> Valve shut off, pipe capped below ground level</span>
              </div>
              <div className="flex items-start gap-3">
                <Hammer className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Sewer/Septic:</strong> Lines sealed and covered to prevent hazards</span>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-[#FFC845] p-6 mb-8">
              <div className="flex gap-3">
                <AlertTriangle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-2">Septic System Note</h3>
                  <p className="text-gray-600">If the mobile home had a septic tank, you'll need to decide what to do with it. Options include:</p>
                  <ul className="text-gray-700 mt-2 space-y-1 ml-4 list-disc">
                    <li>Leave it in place if it's in good condition</li>
                    <li>Pump and abandon it according to local health department rules</li>
                    <li>Remove it entirely (expensive but sometimes required)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What's Next for Your Property?</h2>

            <div className="space-y-4 mb-12">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-dark-blue mb-2">Sell the Land</h4>
                <p className="text-gray-600">A clean, level lot is easier to sell. Some buyers prefer vacant land they can build on.</p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-dark-blue mb-2">Place a New Mobile Home</h4>
                <p className="text-gray-600">If the old foundation is still good, you can set a new mobile home on it. Otherwise, prep the site according to the new home's specs.</p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-dark-blue mb-2">Build a House</h4>
                <p className="text-gray-600">You'll need to hire an excavator to grade the site and pour a new foundation. The property is now a blank slate.</p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-dark-blue mb-2">Use for Storage or Parking</h4>
                <p className="text-gray-600">Some people clear mobile homes to create extra space for RVs, equipment, or storage sheds.</p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-dark-blue mb-2">Leave It Vacant</h4>
                <p className="text-gray-600">If you're not sure yet, that's fine. A clean, cleared lot can sit until you decide what to do.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6">
              <h3 className="font-bold text-dark-blue mb-3">Additional Services We Offer</h3>
              <p className="text-gray-600 mb-3">Beyond demolition, we can help with:</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Concrete block and pier removal</li>
                <li>• Basic grading and leveling</li>
                <li>• Shed or outbuilding demolition</li>
                <li>• Fence removal</li>
                <li>• Junk and debris cleanup</li>
              </ul>
              <p className="text-gray-600 mt-3 text-sm">Ask about these services when you get your quote.</p>
            </div>

            <div className="mt-12 bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Let's Talk About Your Site</h2>
              <p className="text-gray-300 mb-6">We'll help you figure out what needs to happen and give you a clear plan.</p>
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
