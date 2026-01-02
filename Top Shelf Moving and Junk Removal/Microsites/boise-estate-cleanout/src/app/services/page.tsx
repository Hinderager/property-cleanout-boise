import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Home, FileText, Users, Building, ArrowRight } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Our Services | Estate Cleanout Boise | Top Shelf',
  description: 'Complete estate cleanout services including probate cleanouts, senior downsizing, property clearing, and more in the Treasure Valley.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/services' },
}

const serviceCategories = [
  {
    icon: Home,
    name: 'Estate Cleanout Services',
    slug: 'estate-cleanout',
    description: 'Complete estate cleanout services for all situations',
    services: ['Full Estate Cleanout', 'Partial Estate Cleanout', 'Rush Estate Services']
  },
  {
    icon: FileText,
    name: 'Probate Services',
    slug: 'probate-services',
    description: 'Fast cleanouts for probate properties with tight deadlines',
    services: ['Executor Assistance', 'Property Clearing', 'Legal Coordination']
  },
  {
    icon: Users,
    name: 'Senior Services',
    slug: 'senior-services',
    description: 'Compassionate help for seniors and their families',
    services: ['Downsizing Help', 'Senior Moving', 'Assisted Living Transitions']
  },
  {
    icon: Building,
    name: 'Property Cleanout',
    slug: 'property-cleanout',
    description: 'Complete property clearing for various situations',
    services: ['Inherited Properties', 'Rental Turnover', 'Foreclosure Cleanouts']
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Comprehensive estate cleanout and property clearing services for the Treasure Valley.</p>

          <QuickQuoteBar />
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12 text-center">
              <p>Whether you're dealing with an estate after a loved one passes, helping aging parents downsize, or clearing a property for sale, we're here to help with compassion and professionalism.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {serviceCategories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Link
                    key={category.slug}
                    href={`/services/${category.slug}`}
                    className="group bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-[#FFC845]"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <IconComponent className="w-12 h-12 text-[#FFC845]" />
                      <ArrowRight className="w-6 h-6 text-dark-blue group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">{category.name}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#FFC845] rounded-full"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </Link>
                )
              })}
            </div>

            <div className="mt-16 bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
              <p className="text-gray-300 mb-6">Call us. We'll help you figure out the best approach for your situation.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
