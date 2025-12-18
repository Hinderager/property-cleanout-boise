import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Senior Downsizing Help Star Idaho | Top Shelf Estate Cleanout',
  description: 'Compassionate downsizing assistance in Star, Idaho. Fast, compassionate service. Call (208) 505-9352 for a free quote.',
  alternates: {
    canonical: 'https://boise-estate-cleanout.com/cities-served/star/senior-downsizing',
  },
}

export default function StarSeniorDownsizingHelpPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Senior Downsizing Help in Star</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Compassionate downsizing assistance for Star families.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Top Shelf Estate Cleanout provides senior downsizing help services throughout Star and the Treasure Valley. We understand these situations require sensitivity, professionalism, and fast response times.</p>
              <p>Whether you're dealing with a tight probate deadline, helping aging parents downsize, or clearing an inherited property, our team handles every job with compassion and respect.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Clock className="w-10 h-10 text-[#FFC845] mx-auto mb-3" />
                <h3 className="font-bold text-dark-blue mb-2">Fast Service</h3>
                <p className="text-gray-600 text-sm">Same-day and next-day service available in Star</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Shield className="w-10 h-10 text-[#FFC845] mx-auto mb-3" />
                <h3 className="font-bold text-dark-blue mb-2">Licensed & Insured</h3>
                <p className="text-gray-600 text-sm">Full insurance coverage for your peace of mind</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <CheckCircle className="w-10 h-10 text-[#FFC845] mx-auto mb-3" />
                <h3 className="font-bold text-dark-blue mb-2">Compassionate Crew</h3>
                <p className="text-gray-600 text-sm">Respectful handling of your family's belongings</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-dark-blue mb-6">What We Do</h2>
            <ul className="space-y-3 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Complete property cleanout from top to bottom</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Sorting, organizing, and identifying valuable items</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Donation of usable items to local charities</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Proper disposal and recycling</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Final cleanup leaving property broom-clean</span>
              </li>
            </ul>

            <div className="bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Serving Star Families</h2>
              <p className="text-gray-300 mb-6">Call us today for a free quote on your senior downsizing help project.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>

            <div className="mt-12 text-center">
              <Link href="/cities-served/star" className="text-dark-blue underline hover:text-[#0b7fb6]">
                ← Back to Star Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
