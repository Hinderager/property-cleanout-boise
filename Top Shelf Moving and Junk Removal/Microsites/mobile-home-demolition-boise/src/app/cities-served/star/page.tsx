import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile Home Demolition in Star | Boise Mobile Home Demolition',
  description: 'Professional mobile home demolition services in Star. Licensed, insured, and serving a charming small town. Free quotes. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-mobile-home-demolition.com/cities-served/star' },
}

const services = [
  {
    "name": "Mobile Home Demolition",
    "href": "/cities-served/star/mobile-home-demolition",
    "description": "Complete mobile home demolition and removal"
  },
  {
    "name": "Single-Wide Removal",
    "href": "/cities-served/star/single-wide-removal",
    "description": "Single-wide mobile home demolition"
  },
  {
    "name": "Double-Wide Demolition",
    "href": "/cities-served/star/double-wide-demolition",
    "description": "Double-wide mobile home removal"
  },
  {
    "name": "Manufactured Home Removal",
    "href": "/cities-served/star/manufactured-home-removal",
    "description": "Manufactured and modular home demolition"
  },
  {
    "name": "Foundation Removal",
    "href": "/cities-served/star/foundation-removal",
    "description": "Concrete foundation and pier removal"
  },
  {
    "name": "Site Clearing",
    "href": "/cities-served/star/site-clearing",
    "description": "Complete site clearing and grading"
  },
  {
    "name": "Trailer Removal",
    "href": "/cities-served/star/trailer-removal",
    "description": "Old trailer demolition and disposal"
  },
  {
    "name": "RV Removal",
    "href": "/cities-served/star/rv-removal",
    "description": "RV and camper removal services"
  }
];

export default function StarPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Mobile Home Demolition in Star</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Professional demolition services serving a charming small town</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We provide complete mobile home demolition services in Star. Whether you're clearing land for new construction or removing an old mobile home, we handle everything from permits to final cleanup.</p>
            </div>
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Our Star Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-[#0b7fb6] transition-colors">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-dark-blue font-semibold group-hover:text-[#0b7fb6]">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Serving Star</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
