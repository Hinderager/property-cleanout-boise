import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, HelpCircle, DollarSign, Ruler, Trash2, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dumpster Rental Resources | Boise Dumpster Rental',
  description: 'Helpful resources for dumpster rental in Boise. FAQs, pricing guides, size charts, and more.',
  alternates: { canonical: 'https://boisedumpsterrental.com/resources' },
}

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dumpster Rental Resources</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Everything you need to know about renting a dumpster in Boise.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>New to renting a dumpster? No problem. We've put together some helpful guides to make the process easier.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/resources/faq" className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-200">
                <HelpCircle className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Frequently Asked Questions</h3>
                <p className="text-gray-600">Common questions about dumpster rental answered.</p>
              </Link>
              <Link href="/resources/pricing" className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-200">
                <DollarSign className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Pricing Guide</h3>
                <p className="text-gray-600">How dumpster rental pricing works in Boise.</p>
              </Link>
              <Link href="/resources/size-guide" className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-200">
                <Ruler className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Size Guide</h3>
                <p className="text-gray-600">Which dumpster size is right for your project?</p>
              </Link>
              <Link href="/resources/what-can-go-in" className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-200">
                <Trash2 className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">What Can Go In</h3>
                <p className="text-gray-600">Allowed and prohibited items for dumpsters.</p>
              </Link>
              <Link href="/resources/permits" className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-200">
                <FileText className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Permit Information</h3>
                <p className="text-gray-600">Do you need a permit in Boise?</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
