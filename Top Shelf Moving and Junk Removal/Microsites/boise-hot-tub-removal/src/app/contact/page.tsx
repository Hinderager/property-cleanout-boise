import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SchedulingForm } from '@/components/SchedulingForm'

export const metadata: Metadata = {
  title: 'Contact Us | Boise Hot Tub Removal | (208) 943-5231',
  description: 'Contact Boise Hot Tub Removal for fast, professional hot tub removal services. Call (208) 943-5231 or request a free quote online.',
  keywords: ['contact hot tub removal', 'hot tub removal quote', 'schedule hot tub removal'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to get rid of that hot tub? Give us a call or fill out the form below for a free quote.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0B2F3A] mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#0b7fb6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#0B2F3A] mb-1">Phone</h3>
                    <a href="tel:2089435231" className="text-[#0b7fb6] hover:underline text-lg">
                      (208) 943-5231
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Call for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#0b7fb6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#0B2F3A] mb-1">Service Area</h3>
                    <p className="text-gray-600">
                      Boise, Meridian, Nampa, Caldwell, Eagle, Garden City, Kuna, Star, Middleton, Mountain Home, and surrounding Treasure Valley areas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#0b7fb6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#0B2F3A] mb-1">Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 7:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: By appointment</p>
                    <p className="text-gray-600 text-sm mt-1">Same-day service available</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0B2F3A] mb-3">What to Expect</h3>
                <ol className="space-y-2 text-gray-600">
                  <li className="flex gap-2">
                    <span className="font-bold text-[#0b7fb6]">1.</span>
                    <span>Call us or fill out the form with details about your hot tub</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[#0b7fb6]">2.</span>
                    <span>We'll give you an upfront price quote</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[#0b7fb6]">3.</span>
                    <span>Schedule a convenient time for removal</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[#0b7fb6]">4.</span>
                    <span>We show up, remove your hot tub, and clean up</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-6">Request a Free Quote</h2>
              <SchedulingForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
