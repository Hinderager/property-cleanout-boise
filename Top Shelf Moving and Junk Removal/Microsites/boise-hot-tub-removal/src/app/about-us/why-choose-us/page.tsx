import { Metadata } from 'next'
import { CheckCircle, Phone, Clock, Shield, Users, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Choose Boise Hot Tub Removal | Local & Licensed',
  description: 'Fast service, fair pricing, full cleanup. Licensed and insured hot tub removal in Boise and the Treasure Valley. Call (208) 505-9352.',
  keywords: ['why choose hot tub removal', 'best hot tub removal Boise', 'licensed hot tub removal'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/about-us/why-choose-us',
  },
}

export default function WhyChooseUsPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose Us
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Here's what makes us different when it comes to hot tub removal in the Treasure Valley.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <DollarSign className="w-12 h-12 text-[#0b7fb6] mb-4" />
                <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3">Upfront Pricing</h2>
                <p className="text-gray-600">
                  We give you a clear price over the phone. No hidden fees, no surprises when we're done. You know what you're paying before we ever show up.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-12 h-12 text-[#0b7fb6] mb-4" />
                <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3">Fast Response</h2>
                <p className="text-gray-600">
                  Need it gone today? We offer same-day and next-day service. Most hot tubs are out within 24 hours of your call.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="w-12 h-12 text-[#0b7fb6] mb-4" />
                <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3">Experienced Team</h2>
                <p className="text-gray-600">
                  We've removed hundreds of hot tubs across the Treasure Valley. Portable spas, built-in hot tubs, swim spas—we've seen it all and know how to handle it.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-[#0b7fb6] mb-4" />
                <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3">Licensed & Insured</h2>
                <p className="text-gray-600">
                  We're properly licensed and fully insured. That protects you and your property while we work.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Full-Service Removal</h2>
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0B2F3A]">Disconnection</h3>
                  <p className="text-gray-600">We handle the electrical and plumbing safely and properly.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0B2F3A]">Removal</h3>
                  <p className="text-gray-600">We break down the hot tub if needed and haul it out without damaging your yard or property.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0B2F3A]">Cleanup</h3>
                  <p className="text-gray-600">We clean up any mess and leave your yard looking good.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0B2F3A]">Disposal</h3>
                  <p className="text-gray-600">We dispose of your hot tub responsibly, recycling what we can.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0B2F3A] p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6">Call us for a free quote and experience the difference.</p>
              <a
                href="tel:2085059352"
                className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
