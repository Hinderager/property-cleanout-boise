import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Property Cleanout Services | Top Shelf Property Cleanout',
  description: 'Complete property cleanout services in Boise and the Treasure Valley. Rental, foreclosure, estate, and commercial cleanouts.',
  alternates: { canonical: 'https://property-cleanout-boise.com/services' },
}

const services = [
  {
    category: 'Rental Property Services',
    items: [
      { name: 'Tenant Cleanout', href: '/services/rental-property/tenant-cleanout', description: 'Remove tenant belongings after move-out' },
      { name: 'Eviction Cleanout', href: '/services/rental-property/eviction-cleanout', description: 'Post-eviction property cleanup' },
      { name: 'Move-Out Cleanout', href: '/services/rental-property/move-out-cleanout', description: 'Fast unit turnovers between tenants' },
    ]
  },
  {
    category: 'Real Estate Services',
    items: [
      { name: 'Pre-Sale Cleanout', href: '/services/real-estate/pre-sale-cleanout', description: 'Prepare properties for listing' },
      { name: 'Inherited Property', href: '/services/real-estate/inherited-property', description: 'Clean out inherited homes' },
      { name: 'Bank-Owned Properties', href: '/services/real-estate/bank-owned', description: 'REO property cleanouts' },
    ]
  },
  {
    category: 'Foreclosure Services',
    items: [
      { name: 'REO Cleanout', href: '/services/foreclosure/reo-cleanout', description: 'Bank-owned property cleanup' },
      { name: 'Bank Cleanout', href: '/services/foreclosure/bank-cleanout', description: 'Foreclosure property cleanouts' },
      { name: 'Asset Preservation', href: '/services/foreclosure/asset-preservation', description: 'Protect property value' },
    ]
  },
  {
    category: 'Commercial Property',
    items: [
      { name: 'Office Cleanout', href: '/services/commercial/office-cleanout', description: 'Office furniture and equipment removal' },
      { name: 'Retail Cleanout', href: '/services/commercial/retail-cleanout', description: 'Retail space cleanouts' },
      { name: 'Warehouse Cleanout', href: '/services/commercial/warehouse-cleanout', description: 'Large commercial spaces' },
    ]
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Complete property cleanout services for the Treasure Valley.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {services.map((category, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-3xl font-bold text-dark-blue mb-6">{category.category}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((service) => (
                    <Link key={service.href} href={service.href} className="group bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-dark-blue group-hover:text-[#0b7fb6] mb-2">{service.name}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need a Property Cleanout?</h2>
          <p className="text-gray-300 mb-6">Call us for a free estimate.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
