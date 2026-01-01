import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Boise Dumpster Rental',
  description: 'Contact Boise Dumpster Rental for service in the Treasure Valley. Call (208) 943-5231 for fast dumpster delivery.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/contact' },
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Ready to rent a dumpster? We're here to help.</p>
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
                    <a href="tel:2089435231" className="text-lg text-gray-600 hover:text-[#0b7fb6]">(208) 943-5231</a>
                    <p className="text-sm text-gray-500 mt-1">Fastest way to get a quote and schedule delivery</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-dark-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark-blue">Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 7am - 6pm</p>
                    <p className="text-gray-600">Sat: 8am - 4pm</p>
                    <p className="text-gray-600">Sun: Closed (emergency pickup available)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-dark-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark-blue">Service Area</h3>
                    <p className="text-gray-600">Treasure Valley, Idaho</p>
                    <p className="text-gray-600">Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, Middleton, Garden City, Mountain Home & More</p>
                  </div>
                </div>
              </div>
              <div className="bg-dark-blue p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Call Now for Fast Service</h3>
                <p className="text-gray-300 mb-6">Talk to a real person. We'll answer your questions and get you set up.</p>
                <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-colors">
                  <Phone className="w-6 h-6" />(208) 943-5231
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">What to Have Ready When You Call</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845]">•</span>
                  <span>Your address or project location</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845]">•</span>
                  <span>What you're throwing away (general idea is fine)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845]">•</span>
                  <span>How long you'll need it (rough estimate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845]">•</span>
                  <span>Where to put it (driveway, street, etc.)</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-4 italic">Don't stress if you're not sure about the details. We'll help you figure it out.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
