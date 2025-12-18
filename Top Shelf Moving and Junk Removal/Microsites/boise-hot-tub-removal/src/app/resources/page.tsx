import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, HelpCircle, DollarSign, Clipboard, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources | Hot Tub Removal Info | Boise Hot Tub Removal',
  description: 'Everything you need to know about hot tub removal. FAQs, pricing, process details, and preparation tips. Call (208) 505-9352.',
  keywords: ['hot tub removal info', 'hot tub removal guide', 'hot tub disposal resources'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/resources',
  },
}

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Resources</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Everything you need to know about hot tub removal.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <Link href="/resources/faq" className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]">
              <HelpCircle className="w-12 h-12 text-[#0b7fb6] mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">FAQs</h2>
              <p className="text-gray-600">Common questions about hot tub removal, pricing, and our process.</p>
            </Link>
            <Link href="/resources/pricing" className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]">
              <DollarSign className="w-12 h-12 text-[#0b7fb6] mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">Pricing</h2>
              <p className="text-gray-600">Learn what affects hot tub removal costs and get pricing estimates.</p>
            </Link>
            <Link href="/resources/process" className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]">
              <Clipboard className="w-12 h-12 text-[#0b7fb6] mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">The Process</h2>
              <p className="text-gray-600">See exactly what happens when we remove your hot tub.</p>
            </Link>
            <Link href="/resources/preparation" className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]">
              <Wrench className="w-12 h-12 text-[#0b7fb6] mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">Preparation</h2>
              <p className="text-gray-600">How to prepare your hot tub for removal and make the process easier.</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-[#0B2F3A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-300 mb-6">Give us a call. We're happy to help.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}