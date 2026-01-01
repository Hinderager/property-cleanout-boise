import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, Clock, Shield, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Executor Assistance | Probate Services | Boise',
  description: 'Help for executors managing estate cleanouts. Professional, compassionate service in the Treasure Valley. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/services/probate-services/executor-assistance' },
}

export default function ExecutorAssistancePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Executor Assistance</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Help for executors managing estate cleanouts throughout the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Top Shelf Estate Cleanout provides executor assistance services with compassion, professionalism, and respect. We understand this is more than just clearing out a space—it's about handling memories, making tough decisions, and moving forward during a difficult time.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Heart className="w-10 h-10 text-[#FFC845] mx-auto mb-3" />
                <h3 className="font-bold text-dark-blue mb-2">Compassionate</h3>
                <p className="text-gray-600 text-sm">We treat your family and belongings with respect</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Clock className="w-10 h-10 text-[#FFC845] mx-auto mb-3" />
                <h3 className="font-bold text-dark-blue mb-2">Fast Service</h3>
                <p className="text-gray-600 text-sm">Same-day and next-day service available</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Shield className="w-10 h-10 text-[#FFC845] mx-auto mb-3" />
                <h3 className="font-bold text-dark-blue mb-2">Fully Insured</h3>
                <p className="text-gray-600 text-sm">Licensed and insured for your protection</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-dark-blue mb-6">What's Included</h2>
            <ul className="space-y-3 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Complete sorting and organizing of all belongings</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Identification of valuable items you may want to keep or sell</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Donation of usable items to local charities</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Proper disposal and recycling of remaining items</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Final cleanup leaving property broom-clean</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Documentation for tax purposes when applicable</span>
              </li>
            </ul>

            <div className="bg-dark-blue p-8 rounded-xl text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6">Call us for a free quote. We'll make this process as easy as possible.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>

            <div className="text-center">
              <Link href="/services/probate-services" className="text-dark-blue underline hover:text-[#0b7fb6]">
                ← Back to Probate Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
