import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SchedulingForm } from '@/components/SchedulingForm'

export const metadata: Metadata = {
  title: 'Contact Us | Top Shelf Property Cleanout',
  description: 'Contact Top Shelf Property Cleanout for property cleanouts in Boise and the Treasure Valley. Call (208) 505-9352.',
  alternates: { canonical: 'https://property-cleanout-boise.com/contact' },
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Get in touch for a free estimate on your property cleanout.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Get Your Free Estimate</h2>
              <SchedulingForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark-blue mb-1">Phone</h3>
                    <a href="tel:2085059352" className="text-lg text-gray-700 hover:text-[#0b7fb6]">(208) 505-9352</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark-blue mb-1">Service Area</h3>
                    <p className="text-gray-700">Boise, Meridian, Nampa, Caldwell, Eagle<br/>and the entire Treasure Valley</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark-blue mb-1">Hours</h3>
                    <p className="text-gray-700">Monday - Saturday: 7:00 AM - 7:00 PM<br/>Sunday: By appointment</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-dark-blue mb-2">Same-Day Service Available</h3>
                <p className="text-gray-700">Need a property cleaned out today? Call us. We're often available same-day or next-day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
