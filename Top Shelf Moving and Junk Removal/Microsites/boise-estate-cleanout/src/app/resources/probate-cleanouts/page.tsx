import { Metadata } from 'next'
import { Phone, Scale, Clock, FileText, AlertCircle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Probate Estate Cleanouts | Boise',
  description: 'Professional probate cleanout services in Boise and the Treasure Valley. Court-ordered estate clearing with proper documentation.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/resources/probate-cleanouts' },
}

export default function ProbateCleanoutsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Probate Estate Cleanouts</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Clearing estates during probate with proper documentation and timelines.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Probate cleanouts come with extra legal considerations. There are court timelines, documentation requirements, and specific procedures to follow. We've worked with attorneys and executors throughout the Treasure Valley and understand what's needed.</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-[#FFC845] p-6 mb-12">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-2">Not Legal Advice</h3>
                  <p className="text-gray-600">We're not attorneys. Always consult with your probate lawyer before making decisions about estate property. We can execute the cleanout once you know what needs to happen.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What Is Probate?</h2>
            <p className="text-gray-600 mb-8">Probate is the legal process of settling someone's estate after they pass away. It involves validating the will (if there is one), paying debts, and distributing assets to heirs. During probate, the property often needs to be cleared and prepared for sale.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Why Probate Cleanouts Are Different</h2>

            <div className="space-y-4 mb-12">
              <div className="flex gap-4 items-start">
                <Scale className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-1">Legal Oversight</h3>
                  <p className="text-gray-600">The court oversees the process. The executor or personal representative must follow specific legal procedures.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Clock className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-1">Strict Timelines</h3>
                  <p className="text-gray-600">Probate has court deadlines. The property may need to be cleared and sold within a certain timeframe.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <FileText className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-1">Documentation Required</h3>
                  <p className="text-gray-600">You may need to document what was removed, where it went, and the value of items sold or donated.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Working with Executors and Attorneys</h2>
            <p className="text-gray-600 mb-6">We regularly work with executors, personal representatives, and probate attorneys. Here's how the process typically goes:</p>

            <div className="space-y-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-lg">1</div>
                  <h3 className="text-xl font-bold text-dark-blue pt-1">Initial Contact</h3>
                </div>
                <p className="text-gray-600">The executor or attorney reaches out. We schedule a walkthrough of the property to assess the scope.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-lg">2</div>
                  <h3 className="text-xl font-bold text-dark-blue pt-1">Coordination with Legal Team</h3>
                </div>
                <p className="text-gray-600">We discuss timelines, what needs to be kept vs. disposed of, and any documentation the court requires.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-lg">3</div>
                  <h3 className="text-xl font-bold text-dark-blue pt-1">Identify and Protect Valuables</h3>
                </div>
                <p className="text-gray-600">We set aside important documents, valuables, and anything that needs appraisal or special handling.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-lg">4</div>
                  <h3 className="text-xl font-bold text-dark-blue pt-1">Execute the Cleanout</h3>
                </div>
                <p className="text-gray-600">We sort, pack, haul, donate, and dispose according to the executor's instructions and legal requirements.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-lg">5</div>
                  <h3 className="text-xl font-bold text-dark-blue pt-1">Provide Documentation</h3>
                </div>
                <p className="text-gray-600">We provide itemized lists, donation receipts, and photos if needed for the probate court or estate records.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What Happens to Estate Property?</h2>

            <div className="space-y-4 mb-12">
              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Valuable Items</h4>
                <p className="text-gray-600">Jewelry, antiques, collectibles, and high-value items are typically appraised and either distributed to heirs or sold. Proceeds go to the estate.</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Usable Items</h4>
                <p className="text-gray-600">Furniture, household goods, and clothing in good condition can be donated to local charities. We'll provide donation receipts for the estate.</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Unwanted or Broken Items</h4>
                <p className="text-gray-600">Items with no value are disposed of properly. We recycle what we can and haul the rest to the appropriate facilities.</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Important Documents</h4>
                <p className="text-gray-600">Wills, deeds, bank records, tax documents, and personal papers are set aside for the executor or attorney to review.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Common Probate Timeline</h2>
            <p className="text-gray-600 mb-6">Every case is different, but here's a general timeline for probate cleanouts in Idaho:</p>

            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <ul className="space-y-3 text-gray-700">
                <li><strong>Week 1-2:</strong> Probate filed, executor appointed, initial inventory begins</li>
                <li><strong>Week 3-6:</strong> Creditors notified, appraisals conducted, legal clearances obtained</li>
                <li><strong>Week 6-12:</strong> Estate cleanout scheduled and executed</li>
                <li><strong>Month 3-6:</strong> Property listed for sale (if applicable)</li>
                <li><strong>Month 6-12:</strong> Probate closed, assets distributed</li>
              </ul>
              <p className="text-gray-600 text-sm mt-4">Note: Complex estates can take 12-24 months or longer.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Why Hire Professionals for Probate Cleanouts</h2>

            <div className="space-y-3 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Meet court deadlines:</strong> We work quickly and efficiently to stay within probate timelines</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Proper documentation:</strong> We provide the receipts and records you need for the court</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Experience with legal processes:</strong> We've done this many times and know what executors need</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Reduce family stress:</strong> Let us handle the physical work while you manage the legal side</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Protect estate value:</strong> We handle belongings carefully and help identify items of value</span>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6">
              <h3 className="font-bold text-dark-blue mb-3">Questions to Ask Before Hiring</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Have you worked on probate cleanouts before?</li>
                <li>• Can you provide documentation for the court?</li>
                <li>• Do you coordinate with attorneys and executors?</li>
                <li>• Are you insured and bonded?</li>
                <li>• What happens to donated items?</li>
              </ul>
              <p className="text-gray-600 mt-4 text-sm">We answer yes to all of these. We're happy to discuss your specific probate situation.</p>
            </div>

            <div className="mt-12 bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Handling a Probate Estate?</h2>
              <p className="text-gray-300 mb-6">We'll work with your attorney and meet your court deadlines. Call us to discuss your situation.</p>
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
