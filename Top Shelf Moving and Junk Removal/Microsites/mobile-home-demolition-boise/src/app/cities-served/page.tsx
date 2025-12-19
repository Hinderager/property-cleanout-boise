import { Metadata } from 'next'
import { Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mobile Home Demolition Service Areas | Treasure Valley Idaho',
  description: 'We provide mobile home demolition services throughout the Treasure Valley including Boise, Meridian, Nampa, Caldwell, and surrounding areas. Call (208) 505-9352.',
  alternates: { canonical: 'https://mobile-home-demolition-boise.com/cities-served' },
}

const cities = [
  {
    name: 'Boise',
    description: 'Full mobile home demolition services in Idaho\'s capital city. We serve all Boise neighborhoods from the North End to Southeast Boise.',
    hasPage: false
  },
  {
    name: 'Meridian',
    description: 'Mobile home removal and demolition in Meridian, Idaho. Fast, affordable service for residential and rural properties.',
    hasPage: false
  },
  {
    name: 'Nampa',
    description: 'Professional mobile home demolition in Nampa and surrounding Canyon County areas. Licensed and insured.',
    hasPage: false
  },
  {
    name: 'Caldwell',
    description: 'Mobile home teardown and site cleanup in Caldwell, Idaho. Same-day quotes available.',
    hasPage: false
  },
  {
    name: 'Eagle',
    description: 'Mobile home demolition services in Eagle, Idaho. We handle properties of all sizes.',
    hasPage: false
  },
  {
    name: 'Kuna',
    description: 'Mobile home removal in Kuna and South Ada County. Experienced with rural properties and acreage.',
    hasPage: false
  },
  {
    name: 'Star',
    description: 'Professional mobile home demolition in Star, Idaho. We handle outbuildings and rural cleanouts too.',
    hasPage: false
  },
  {
    name: 'Middleton',
    description: 'Mobile home teardown services in Middleton, Idaho. Fast, affordable, and professional.',
    hasPage: false
  },
  {
    name: 'Garden City',
    description: 'Mobile home demolition in Garden City, Idaho. Quick turnaround and competitive pricing.',
    hasPage: false
  },
]

export default function CitiesServedPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cities We Serve</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Mobile home demolition throughout the Treasure Valley and beyond.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We provide mobile home demolition services throughout the Boise metro area and the greater Treasure Valley. Whether you're in the city or on a rural property, we can help.</p>
              <p>Our team travels to all corners of Ada County and Canyon County. If you're not sure if we serve your area, just give us a call—we go where we're needed.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {cities.map((city) => (
                <div key={city.name} className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FFC845]">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-dark-blue flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-dark-blue">{city.name}</h3>
                  </div>
                  <p className="text-gray-600">{city.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6 mb-8">
              <h3 className="font-bold text-dark-blue mb-3">Other Areas We Serve</h3>
              <p className="text-gray-600 mb-3">We also provide mobile home demolition in:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
                <div>• Emmett</div>
                <div>• Homedale</div>
                <div>• Mountain Home</div>
                <div>• Parma</div>
                <div>• Payette</div>
                <div>• Wilder</div>
                <div>• Notus</div>
                <div>• Greenleaf</div>
                <div>• Melba</div>
              </div>
              <p className="text-gray-600 mt-4 text-sm">Don't see your city? Call us anyway. We travel throughout Southwest Idaho for mobile home demolition projects.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Why Choose Us in the Treasure Valley?</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Local company:</strong> We know the area, the regulations, and the local disposal facilities</li>
                <li>• <strong>Fast service:</strong> Most demolitions scheduled within days, not weeks</li>
                <li>• <strong>Licensed and insured:</strong> Fully legal and covered for your protection</li>
                <li>• <strong>Fair pricing:</strong> Transparent quotes with no hidden fees</li>
                <li>• <strong>Complete service:</strong> Demo, haul-off, cleanup, and site prep all in one</li>
                <li>• <strong>Rural property experience:</strong> We handle larger lots, acreage, and multiple structures</li>
              </ul>
            </div>

            <div className="mt-12 bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Serving Your Area</h2>
              <p className="text-gray-300 mb-6">Call us today for a free quote. We'll come to you, assess the job, and give you a clear price.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
