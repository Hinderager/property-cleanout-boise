import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, HelpCircle, DollarSign, ListChecks, Heart, Clipboard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources | Estate Cleanout Information | Boise',
  description: 'Helpful resources for estate cleanouts, downsizing, and probate property clearing in the Treasure Valley.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/resources' },
}

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Estate Cleanout Resources</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Helpful information to guide you through the estate cleanout process.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Whether you're handling an estate after a loved one's passing, helping aging parents downsize, or managing probate property, we've put together resources to help you understand the process and make informed decisions.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/resources/faq" className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <HelpCircle className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-[#0b7fb6]">FAQ</h3>
                <p className="text-gray-600">Common questions about estate cleanouts answered.</p>
              </Link>

              <Link href="/resources/pricing" className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <DollarSign className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-[#0b7fb6]">Pricing Guide</h3>
                <p className="text-gray-600">Understand estate cleanout costs and pricing factors.</p>
              </Link>

              <Link href="/resources/process" className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <Clipboard className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-[#0b7fb6]">Our Process</h3>
                <p className="text-gray-600">What to expect when you work with us.</p>
              </Link>

              <Link href="/resources/checklist" className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <ListChecks className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-[#0b7fb6]">Estate Cleanout Checklist</h3>
                <p className="text-gray-600">Step-by-step guide to organizing an estate cleanout.</p>
              </Link>

              <Link href="/resources/donation-guide" className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <Heart className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-[#0b7fb6]">Donation Guide</h3>
                <p className="text-gray-600">Where items go and how we help local charities.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Have Questions?</h2>
          <p className="text-gray-300 mb-6">We're here to help. Call us anytime.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
