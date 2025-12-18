import { Metadata } from 'next'
import { Shield, CheckCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Licenses & Insurance | Boise Hot Tub Removal',
  description: 'Licensed and insured hot tub removal in Boise and the Treasure Valley. Professional, bonded service. Call (208) 505-9352.',
  keywords: ['licensed hot tub removal', 'insured junk removal Boise', 'bonded hot tub removal'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/about-us/licenses-insurance',
  },
}

export default function LicensesInsurancePage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Licenses & Insurance</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">We're properly licensed and fully insured for your protection.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg mb-12 text-center">
              <Shield className="w-16 h-16 text-[#0b7fb6] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-4">Licensed, Bonded & Insured</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We maintain all required licenses and carry comprehensive insurance coverage. That means you're protected if anything goes wrong during the hot tub removal process.</p>
            </div>
            <div className="bg-[#0B2F3A] p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Work With a Licensed Team</h2>
              <p className="text-gray-300 mb-6">Call us for professional, insured hot tub removal.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}