import { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bank-Owned Property Cleanout | Top Shelf Property Cleanout',
  description: 'Bank-Owned Property Cleanout services in Boise and the Treasure Valley. Professional, fast, and affordable.',
  alternates: { canonical: 'https://property-cleanout-boise.com/services/real-estate/bank-owned' },
}

export default function BankOwnedPropertyCleanoutPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Bank-Owned Property Cleanout</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mt-4">Professional bank-owned property cleanout services throughout the Treasure Valley.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Need a bank-owned property cleanout? Top Shelf Property Cleanout provides fast, professional service throughout Boise and the Treasure Valley.</p>
              <p>We handle everything—you don't lift a finger. Our team shows up on time, works efficiently, and hauls away everything you don't want.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Choose Us</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Full Service:</strong> We do all the heavy lifting and hauling.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Response:</strong> Often available same-day or next-day.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Professional, trustworthy service.</span>
              </li>
            </ul>

            <div className="p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Bank-Owned Property Cleanout?</h3>
              <p className="text-gray-300 mb-6">Call now for a free estimate.</p>
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
