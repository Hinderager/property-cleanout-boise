import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Dumpster Rental | Boise Dumpster Rental',
  description: 'Residential dumpster rental in Boise. Home cleanouts, renovations, moving, and more. All sizes available.',
  alternates: { canonical: 'https://boisedumpsterrental.com/services/residential-dumpsters' },
}

export default function ResidentialDumpstersPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Residential Dumpster Rental</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Dumpster rentals for homeowners in Boise and the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Whether you're cleaning out the garage, remodeling a room, or moving to a new place, we make dumpster rental easy for homeowners.</p>
              <p>No commercial account needed, no minimum orders, no hassle. Just call, we deliver, you fill it, we haul it away.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/residential-dumpsters/home-cleanout" className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Home className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Home Cleanout</h3>
                <p className="text-gray-600">Basement, garage, attic, or whole-house cleanouts.</p>
              </Link>
              <Link href="/services/residential-dumpsters/renovation" className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Home className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Renovation Projects</h3>
                <p className="text-gray-600">Kitchen, bathroom, flooring, or full remodels.</p>
              </Link>
              <Link href="/services/residential-dumpsters/moving" className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Home className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Moving & Downsizing</h3>
                <p className="text-gray-600">Get rid of stuff you're not taking with you.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Book a Dumpster?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
