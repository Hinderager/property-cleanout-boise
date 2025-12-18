import { Metadata } from 'next'
import { Phone, Heart, Shirt, Home as HomeIcon, BookOpen, Utensils } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Donation Guide | Estate Cleanouts | Boise',
  description: 'Learn where donated items go during estate cleanouts. Top Shelf works with local Treasure Valley charities.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/resources/donation-guide' },
}

export default function DonationGuidePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Donation Guide</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Where your donated items go and how we help local charities.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>When we clear out an estate, many items are still in good condition. Instead of sending everything to the landfill, we donate as much as possible to local Treasure Valley charities. It's a way to honor your loved one's belongings while helping people in need.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6 mb-12">
              <h3 className="text-lg font-bold text-dark-blue mb-2">Our Donation Philosophy</h3>
              <p className="text-gray-700">If it's clean, functional, and someone can use it—we'll donate it. We work with local charities who serve families in the Treasure Valley. Your loved one's belongings get a second life helping people right here in our community.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-8">What We Donate</h2>

            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <Shirt className="w-10 h-10 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Clothing & Textiles</h3>
                  <p className="text-gray-600 mb-2">Clean, wearable clothing, shoes, coats, linens, towels, and blankets go to local organizations that serve homeless shelters, women's shelters, and families in need.</p>
                  <p className="text-sm text-gray-500">• Clothing must be clean and in wearable condition<br />• Stained or damaged items are recycled when possible</p>
                </div>
              </div>

              <div className="flex gap-4">
                <HomeIcon className="w-10 h-10 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Furniture</h3>
                  <p className="text-gray-600 mb-2">Couches, tables, chairs, dressers, beds, and other furniture in good condition. Charities use these to help families furnishing new homes or transitioning out of homelessness.</p>
                  <p className="text-sm text-gray-500">• Must be functional (no broken legs, torn upholstery, etc.)<br />• Clean and free of major stains or odors</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Utensils className="w-10 h-10 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Kitchen Items & Housewares</h3>
                  <p className="text-gray-600 mb-2">Dishes, cookware, utensils, small appliances, glassware, and decorative items. These help families setting up new households.</p>
                  <p className="text-sm text-gray-500">• Items should be clean and functional<br />• Small appliances must work properly</p>
                </div>
              </div>

              <div className="flex gap-4">
                <BookOpen className="w-10 h-10 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Books, Media & Electronics</h3>
                  <p className="text-gray-600 mb-2">Books, DVDs, games, working electronics, and computers. Some charities resell these to fund their programs.</p>
                  <p className="text-sm text-gray-500">• Electronics must work and include power cords<br />• Outdated technology is recycled through e-waste programs</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Heart className="w-10 h-10 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Miscellaneous</h3>
                  <p className="text-gray-600 mb-2">Tools, sporting goods, toys, office supplies, holiday decorations, and other household items in good condition.</p>
                  <p className="text-sm text-gray-500">• Clean and functional<br />• Complete sets preferred (games with all pieces, etc.)</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What We Can't Donate</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <p className="text-gray-700 mb-4">Most charities can't accept certain items due to safety, legal, or practical reasons:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Mattresses and box springs (health regulations)</li>
                <li>• Large appliances (fridges, washers, dryers) unless specifically requested</li>
                <li>• Hazardous materials (paint, chemicals, gas cans)</li>
                <li>• Broken or heavily damaged items</li>
                <li>• Old TVs and outdated electronics (we recycle these instead)</li>
                <li>• Car seats, cribs, or baby items that don't meet current safety standards</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Local Charities We Work With</h2>

            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We partner with several Treasure Valley organizations including thrift stores, homeless shelters, women's shelters, veteran services, and family support programs. If you have a preferred charity, let us know—we're happy to make special arrangements.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Tax Deduction Documentation</h2>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6 mb-12">
              <p className="text-gray-700">If you need documentation for tax purposes, we can provide donation receipts from the charities we work with. Just let us know upfront, and we'll coordinate with the organizations to get you the paperwork you need.</p>
            </div>

            <div className="bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Donate Instead of Dump</h2>
              <p className="text-gray-300 mb-6">Let's give your loved one's belongings a second life helping families in the Treasure Valley.</p>
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
