import { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Choose Us | Top Shelf Property Cleanout',
  description: 'Why choose Top Shelf Property Cleanout for your property cleanout needs in Boise and the Treasure Valley.',
  alternates: { canonical: 'https://property-cleanout-boise.com/about-us/why-choose-us' },
}

export default function WhyChooseUsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Why Choose Us</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>When you need a property cleaned out, you want it done right—fast, professional, and hassle-free. Here's why property owners across the Treasure Valley choose Top Shelf Property Cleanout.</p>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">We Do Everything:</strong>
                  <p className="text-gray-700">You don't lift a finger. We haul away furniture, appliances, trash, debris—everything you don't want.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Fast Service:</strong>
                  <p className="text-gray-700">Often available same-day or next-day. We know you're on a deadline.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Upfront Pricing:</strong>
                  <p className="text-gray-700">We quote based on volume, not hourly rates. No surprises.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Licensed & Insured:</strong>
                  <p className="text-gray-700">Fully licensed and insured for your protection and peace of mind.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Local Team:</strong>
                  <p className="text-gray-700">We're based in the Treasure Valley and know the area well.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Respectful Service:</strong>
                  <p className="text-gray-700">We treat every property and situation with professionalism and respect.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
