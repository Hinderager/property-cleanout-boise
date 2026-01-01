import { Metadata } from 'next'
import { Phone, Ruler } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dumpster Size Guide | Boise Dumpster Rental',
  description: 'What size dumpster do you need? Complete guide to choosing between 10, 15, 20, 30, and 40 yard dumpsters in Boise.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/resources/size-guide' },
}

export default function SizeGuidePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dumpster Size Guide</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Choose the right size dumpster for your project in Boise.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Picking the right dumpster size is simpler than you think. Too small and you'll fill it before you're done. Too big and you're wasting money.</p>
              <p>Here's how each size breaks down and what they're actually good for.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md mb-8">
              <div className="flex items-start gap-4 mb-4">
                <Ruler className="w-12 h-12 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-dark-blue mb-2">10 Yard Dumpster</h2>
                  <p className="text-gray-500">About the size of a large pickup truck bed</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p><strong>Dimensions:</strong> 12ft long × 8ft wide × 4ft high</p>
                <p><strong>Capacity:</strong> Holds about 3 pickup truck loads</p>
                <p><strong>Good for:</strong></p>
                <ul>
                  <li>Small bathroom or kitchen remodel</li>
                  <li>Garage or basement cleanout</li>
                  <li>Minor landscaping projects</li>
                  <li>Cleaning out a single room</li>
                </ul>
                <p className="text-dark-blue font-bold">This is the smallest we offer. Good for tight driveways or small projects.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md mb-8">
              <div className="flex items-start gap-4 mb-4">
                <Ruler className="w-12 h-12 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-dark-blue mb-2">15 Yard Dumpster</h2>
                  <p className="text-gray-500">About 1.5 times the size of a pickup truck</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p><strong>Dimensions:</strong> 14ft long × 8ft wide × 5ft high</p>
                <p><strong>Capacity:</strong> Holds about 4.5 pickup truck loads</p>
                <p><strong>Good for:</strong></p>
                <ul>
                  <li>Deck or fence removal</li>
                  <li>Floor removal (carpet, tile, hardwood)</li>
                  <li>Garage cleanout with lots of stuff</li>
                  <li>Medium-sized landscaping projects</li>
                </ul>
                <p className="text-dark-blue font-bold">Good middle ground between 10 and 20 yard sizes.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-2 border-[#FFC845] mb-8">
              <div className="flex items-start gap-4 mb-4">
                <Ruler className="w-12 h-12 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-dark-blue mb-2">20 Yard Dumpster</h2>
                  <p className="text-gray-500 font-bold">MOST POPULAR SIZE</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p><strong>Dimensions:</strong> 20ft long × 8ft wide × 4ft high</p>
                <p><strong>Capacity:</strong> Holds about 6 pickup truck loads</p>
                <p><strong>Good for:</strong></p>
                <ul>
                  <li>Whole room remodels (kitchen, bathroom)</li>
                  <li>Large deck removal</li>
                  <li>Multi-room cleanouts</li>
                  <li>Roofing projects (small to medium homes)</li>
                  <li>Estate cleanouts</li>
                </ul>
                <p className="text-dark-blue font-bold">This is what most people need. Big enough for serious projects but fits in most driveways.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md mb-8">
              <div className="flex items-start gap-4 mb-4">
                <Ruler className="w-12 h-12 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-dark-blue mb-2">30 Yard Dumpster</h2>
                  <p className="text-gray-500">Large construction projects</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p><strong>Dimensions:</strong> 20ft long × 8ft wide × 6ft high</p>
                <p><strong>Capacity:</strong> Holds about 9 pickup truck loads</p>
                <p><strong>Good for:</strong></p>
                <ul>
                  <li>New construction debris</li>
                  <li>Major home additions</li>
                  <li>Large commercial cleanouts</li>
                  <li>Whole-house renovations</li>
                </ul>
                <p className="text-dark-blue font-bold">Serious projects only. Make sure you have the driveway space.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <Ruler className="w-12 h-12 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-dark-blue mb-2">40 Yard Dumpster</h2>
                  <p className="text-gray-500">Biggest size available</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p><strong>Dimensions:</strong> 20ft long × 8ft wide × 8ft high</p>
                <p><strong>Capacity:</strong> Holds about 12 pickup truck loads</p>
                <p><strong>Good for:</strong></p>
                <ul>
                  <li>Large commercial construction</li>
                  <li>Major demolition projects</li>
                  <li>Full-building cleanouts</li>
                  <li>Large-scale renovations</li>
                </ul>
                <p className="text-dark-blue font-bold">This is as big as they come. Commercial and industrial projects mainly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Still Not Sure?</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>Here's the thing: we've been doing this a while. Tell us what you're working on and we'll tell you what size makes sense.</p>
              <p>If you're between sizes, go bigger. Nobody's ever complained about having too much room.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need Help Choosing?</h2>
          <p className="text-gray-300 mb-6">Call and describe your project. We'll tell you what size you need.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
