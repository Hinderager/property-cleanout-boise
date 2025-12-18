import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Boise Estate Cleanout',
  description: 'Contact Top Shelf Estate Cleanout for compassionate estate cleanout services in the Treasure Valley. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/contact' },
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Ready to schedule service? We're here to help.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-dark-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark-blue">Phone</h3>
                    <a href="tel:2085059352" className="text-lg text-gray-600 hover:text-[#0b7fb6]">(208) 505-9352</a>
                    <p className="text-sm text-gray-500 mt-1">Talk to a real person, not a call center</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-dark-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark-blue">Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 7am - 7pm</p>
                    <p className="text-gray-600">Sat: 8am - 5pm</p>
                    <p className="text-gray-600">Sun: By Appointment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-dark-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark-blue">Service Area</h3>
                    <p className="text-gray-600">Treasure Valley, Idaho</p>
                    <p className="text-gray-600">Boise, Meridian, Nampa, Caldwell, Eagle & More</p>
                  </div>
                </div>
              </div>
              <div className="bg-dark-blue p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Call Now</h3>
                <p className="text-gray-300 mb-6">We understand this is a difficult time. Let us help make the estate cleanout process easier.</p>
                <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-colors">
                  <Phone className="w-6 h-6" />(208) 505-9352
                </a>
                <p className="text-gray-400 text-sm mt-4">Free quotes • Same-day service available</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">What to Expect When You Call</h2>
              <div className="space-y-4 text-gray-700">
                <p>When you reach out, we'll ask a few basic questions to understand your situation:</p>
                <ul className="space-y-2 ml-6">
                  <li>• What type of property needs to be cleared (home, apartment, storage unit)</li>
                  <li>• Approximate size and amount of belongings</li>
                  <li>• Your timeline (urgent, flexible, specific deadline)</li>
                  <li>• Any special circumstances (probate, downsizing, hoarding situation)</li>
                </ul>
                <p>Then we'll schedule a time to see the property—either in person or via video call—and provide a free, no-obligation quote.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
