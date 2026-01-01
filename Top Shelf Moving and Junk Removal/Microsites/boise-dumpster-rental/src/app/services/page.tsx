import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Home, Building2, Ruler, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dumpster Rental Services | Boise Dumpster Rental',
  description: 'Complete dumpster rental services in Boise. Residential, commercial, all sizes from 10 to 40 yards.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/services' },
}

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dumpster Rental Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Complete dumpster rental for residential and commercial projects in Boise.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12 text-center">
              <p>We rent dumpsters for just about any project you can think of. Here's what we offer.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl">
                <Home className="w-12 h-12 text-[#FFC845] mb-4" />
                <h2 className="text-2xl font-bold text-dark-blue mb-4">Residential Dumpsters</h2>
                <p className="text-gray-600 mb-6">Dumpster rentals for homeowners in the Treasure Valley.</p>
                <div className="space-y-2">
                  <Link href="/services/residential-dumpsters/home-cleanout" className="block text-dark-blue hover:text-[#0b7fb6] font-medium">
                    → Home Cleanout Dumpsters
                  </Link>
                  <Link href="/services/residential-dumpsters/renovation" className="block text-dark-blue hover:text-[#0b7fb6] font-medium">
                    → Renovation Dumpsters
                  </Link>
                  <Link href="/services/residential-dumpsters/moving" className="block text-dark-blue hover:text-[#0b7fb6] font-medium">
                    → Moving & Downsizing Dumpsters
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl">
                <Building2 className="w-12 h-12 text-[#FFC845] mb-4" />
                <h2 className="text-2xl font-bold text-dark-blue mb-4">Commercial Dumpsters</h2>
                <p className="text-gray-600 mb-6">Dumpster rentals for contractors and businesses.</p>
                <div className="space-y-2">
                  <Link href="/services/commercial-dumpsters/construction" className="block text-dark-blue hover:text-[#0b7fb6] font-medium">
                    → Construction Dumpsters
                  </Link>
                  <Link href="/services/commercial-dumpsters/demolition" className="block text-dark-blue hover:text-[#0b7fb6] font-medium">
                    → Demolition Dumpsters
                  </Link>
                  <Link href="/services/commercial-dumpsters/business-cleanout" className="block text-dark-blue hover:text-[#0b7fb6] font-medium">
                    → Business Cleanout Dumpsters
                  </Link>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="text-center mb-8">
                <Ruler className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-dark-blue mb-2">Dumpster Sizes</h2>
                <p className="text-gray-600">We offer all standard dumpster sizes</p>
              </div>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                <Link href="/services/dumpster-sizes/10-yard" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#FFC845] hover:shadow-lg transition-all text-center">
                  <h3 className="text-xl font-bold text-dark-blue mb-2">10 Yard</h3>
                  <p className="text-sm text-gray-600">Small projects</p>
                </Link>
                <Link href="/services/dumpster-sizes/15-yard" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#FFC845] hover:shadow-lg transition-all text-center">
                  <h3 className="text-xl font-bold text-dark-blue mb-2">15 Yard</h3>
                  <p className="text-sm text-gray-600">Medium projects</p>
                </Link>
                <Link href="/services/dumpster-sizes/20-yard" className="bg-white border-2 border-[#FFC845] p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-xl font-bold text-dark-blue mb-2">20 Yard</h3>
                  <p className="text-sm text-gray-600">Most popular</p>
                </Link>
                <Link href="/services/dumpster-sizes/30-yard" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#FFC845] hover:shadow-lg transition-all text-center">
                  <h3 className="text-xl font-bold text-dark-blue mb-2">30 Yard</h3>
                  <p className="text-sm text-gray-600">Large projects</p>
                </Link>
                <Link href="/services/dumpster-sizes/40-yard" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#FFC845] hover:shadow-lg transition-all text-center">
                  <h3 className="text-xl font-bold text-dark-blue mb-2">40 Yard</h3>
                  <p className="text-sm text-gray-600">Biggest size</p>
                </Link>
              </div>
            </div>

            <div>
              <div className="text-center mb-8">
                <Wrench className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-dark-blue mb-2">Specialty Services</h2>
                <p className="text-gray-600">Specialized dumpster rentals for specific materials</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/services/specialty/roofing-dumpsters" className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Roofing Dumpsters</h3>
                  <p className="text-gray-600">Heavy-duty dumpsters for shingle removal</p>
                </Link>
                <Link href="/services/specialty/concrete-dumpsters" className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Concrete Dumpsters</h3>
                  <p className="text-gray-600">For concrete, brick, and heavy materials</p>
                </Link>
                <Link href="/services/specialty/yard-waste" className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Yard Waste Dumpsters</h3>
                  <p className="text-gray-600">Landscaping debris and green waste</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Not Sure What You Need?</h2>
          <p className="text-gray-300 mb-6">Call and we'll help you pick the right size and service.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
