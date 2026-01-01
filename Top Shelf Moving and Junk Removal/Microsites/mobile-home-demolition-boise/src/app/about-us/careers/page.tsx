import { Metadata } from 'next'
import { Phone, HardHat, Truck, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Career Opportunities | Boise Mobile Home Demolition',
  description: 'Join our team at Boise Mobile Home Demolition. We\'re looking for skilled demolition workers, equipment operators, and site supervisors in the Treasure Valley.',
  alternates: { canonical: 'https://mobile-home-demolition-boise.com/about-us/careers' },
}

export default function CareersPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Career Opportunities</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Join a growing team serving the Treasure Valley</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We're always looking for hard-working, reliable people to join our team. If you have experience in demolition, construction, or heavy equipment operation, we'd like to hear from you.</p>
              <p>We offer competitive pay, flexible schedules, and opportunities to grow. Most of our work is Monday through Friday, and we treat our crew well.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <HardHat className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Demolition Workers</h3>
                <p className="text-gray-600">Experience with tools, safety protocols, and physical labor</p>
              </div>
              <div className="text-center">
                <Truck className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Equipment Operators</h3>
                <p className="text-gray-600">Excavator, skid steer, or dump truck experience</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Site Supervisors</h3>
                <p className="text-gray-600">Lead crews and manage job sites</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">What We Look For</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] mt-1">•</span>
                  <span>Reliable transportation and good attendance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] mt-1">•</span>
                  <span>Ability to work in all weather conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] mt-1">•</span>
                  <span>Clean background check and valid driver's license</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] mt-1">•</span>
                  <span>Good communication and teamwork skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] mt-1">•</span>
                  <span>Safety-conscious mindset</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 mb-4">Interested in joining our team? Give us a call to learn about current openings.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Call to Apply</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
