import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Manufactured Home Demolition | Mobile Home Demolition Boise',
  description: 'HUD homes and modular home demolition in Boise. Complete removal and disposal services. Call (208) 505-9352.',
  alternates: { canonical: 'https://mobile-home-demolition-boise.com/services/manufactured-home' },
}

const services = [
  { name: 'HUD Homes', slug: 'hud-homes', description: 'HUD-certified manufactured home demolition and removal' },
  { name: 'Modular Homes', slug: 'modular-homes', description: 'Modular and prefabricated home demolition services' },
]

export default function ManufacturedHomePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Manufactured Home Demolition</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional HUD and modular home demolition in the Treasure Valley.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Manufactured homes and modular homes require specialized demolition. We handle HUD homes, prefab structures, and all types of manufactured housing.</p>
              <p>Complete demolition, debris removal, and site cleanup included.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/manufactured-home/${service.slug}`} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-[#0b7fb6]">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-dark-blue font-semibold">Learn More <ArrowRight className="w-4 h-4 ml-2" /></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need Manufactured Home Demolition?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
