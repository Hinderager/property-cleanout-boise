import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Dumpster Rental | Boise Dumpster Rental',
  description: 'Commercial dumpster rental in Boise for contractors and businesses. Construction, demolition, and commercial cleanouts.',
  alternates: { canonical: 'https://boise-dumpster-rental.com/services/commercial-dumpsters' },
}

export default function CommercialDumpstersPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Commercial Dumpster Rental</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Dumpster rentals for contractors and businesses in Boise.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We work with contractors and businesses all over the Treasure Valley. Whether you need a dumpster for a construction site, demolition project, or commercial cleanout, we deliver on time and pick up when promised.</p>
              <p>No account setup required. Just call, tell us what you need, and we will get it there.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/commercial-dumpsters/construction" className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Building2 className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Construction</h3>
                <p className="text-gray-600">New builds, additions, commercial construction.</p>
              </Link>
              <Link href="/services/commercial-dumpsters/demolition" className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Building2 className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Demolition</h3>
                <p className="text-gray-600">Tear-downs, structural demolition, heavy debris.</p>
              </Link>
              <Link href="/services/commercial-dumpsters/business-cleanout" className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Building2 className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Business Cleanout</h3>
                <p className="text-gray-600">Office moves, retail remodels, warehouse clearing.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Book a Dumpster?</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
