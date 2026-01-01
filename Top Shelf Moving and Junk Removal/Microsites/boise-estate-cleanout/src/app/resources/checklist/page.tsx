import { Metadata } from 'next'
import { Phone, CheckSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Estate Cleanout Checklist | Boise',
  description: 'Complete checklist for planning and executing an estate cleanout in the Treasure Valley. Step-by-step guide.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/resources/checklist' },
}

export default function ChecklistPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Estate Cleanout Checklist</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">A step-by-step guide to organizing your estate cleanout.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Estate cleanouts can feel overwhelming. This checklist breaks it down into manageable steps so you know what to do and when.</p>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">Before You Start</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Gather legal documents:</strong> Will, trust, probate paperwork, property deed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Notify family members:</strong> Give everyone a chance to claim sentimental items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Check for valuables:</strong> Look for jewelry, cash, important papers, collectibles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Understand probate timelines:</strong> Know any legal deadlines for property clearing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Take photos for insurance:</strong> Document the property's condition before cleanout</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">Sorting & Organizing</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Create categories:</strong> Keep, Sell, Donate, Dispose</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Start with one room:</strong> Don't try to tackle everything at once</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Handle important documents:</strong> Bank statements, tax records, titles, deeds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Identify items to appraise:</strong> Antiques, artwork, jewelry, collections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Be realistic about selling:</strong> Most used furniture isn't worth much</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">Hiring Help</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Get multiple quotes:</strong> Compare services and pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Verify insurance:</strong> Make sure the company is licensed and insured</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Read reviews:</strong> Look for companies with experience in estate cleanouts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Discuss donations:</strong> Confirm they'll donate usable items, not just dump everything</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Get it in writing:</strong> Clear quote, timeline, and scope of work</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">During the Cleanout</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Communicate clearly:</strong> Point out items to keep or handle carefully</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Take your time with decisions:</strong> Don't rush into discarding sentimental items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Stay or go:</strong> Decide if you want to be present or let the crew work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Arrange storage:</strong> If keeping items but no room, coordinate storage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-4">After the Cleanout</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Final walkthrough:</strong> Check every room, closet, basement, attic, garage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Arrange deep cleaning:</strong> If selling or renting, schedule professional cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Cancel utilities:</strong> Turn off services if property is vacant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Document for taxes:</strong> Keep donation receipts for tax deductions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Prepare for sale or rental:</strong> Coordinate with realtor or property manager</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">We Can Handle It All</h2>
              <p className="text-gray-300 mb-6">Don't want to deal with this checklist? We'll take care of everything for you.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
