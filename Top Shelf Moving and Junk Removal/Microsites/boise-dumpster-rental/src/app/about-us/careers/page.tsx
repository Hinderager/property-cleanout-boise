import { Metadata } from 'next'
import { Phone, Truck, Users, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Career Opportunities | Boise Dumpster Rental',
  description: 'Career Opportunities at Boise Dumpster Rental. Join our team serving the Treasure Valley.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/about-us/careers' },
}

export default function CareersPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Career Opportunities</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Join our growing team in the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We're always looking for reliable, hardworking people to join our team. Whether you've got years of experience driving trucks or you're just starting out, if you show up on time and take pride in doing good work, we'd like to talk to you.</p>
              <p>We're a local company, so you'll be working with neighbors and serving the community you live in. No traveling out of state, no being gone for weeks at a time—just honest work serving the Treasure Valley.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Competitive Pay</h3>
                <p className="text-gray-600">We pay well for quality work and reliability.</p>
              </div>
              <div className="text-center">
                <Truck className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Local Routes</h3>
                <p className="text-gray-600">Home every night. All routes in the Treasure Valley.</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Small Team</h3>
                <p className="text-gray-600">Work with a tight-knit crew, not a faceless corporation.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-dark-blue mb-6">Current Openings</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-dark-blue mb-2">Truck Driver / Dumpster Delivery</h4>
                  <p className="text-gray-600 mb-2">Valid CDL preferred but not required for training. Clean driving record required. Experience with roll-off trucks is a plus.</p>
                </div>
                <div>
                  <h4 className="font-bold text-dark-blue mb-2">Dispatcher / Office Support</h4>
                  <p className="text-gray-600 mb-2">Organize routes, answer phones, schedule deliveries and pickups. Good with computers and talking to customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Interested? Give Us a Call</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
