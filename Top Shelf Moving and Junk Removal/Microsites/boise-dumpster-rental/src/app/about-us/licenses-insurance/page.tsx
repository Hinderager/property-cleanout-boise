import { Metadata } from 'next'
import { Phone, Shield, FileCheck, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Licenses & Insurance | Boise Dumpster Rental',
  description: 'Boise Dumpster Rental is fully licensed and insured. View our credentials and insurance coverage.',
  alternates: { canonical: 'https://boisedumpsterrental.com/about-us/licenses-insurance' },
}

export default function LicensesInsurancePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Licenses & Insurance</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Fully licensed and insured for your peace of mind.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>When you rent a dumpster, you're putting a 5-ton piece of equipment on your property. You want to know the company you're working with is legit, licensed, and properly insured.</p>
              <p>We carry all required licenses and permits to operate in Idaho. We also maintain comprehensive insurance coverage including general liability and commercial auto insurance.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <FileCheck className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Licensed Operator</h3>
                <p className="text-gray-600">All required state and local permits and licenses.</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">General Liability</h3>
                <p className="text-gray-600">Comprehensive coverage protects your property.</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Commercial Auto</h3>
                <p className="text-gray-600">Full insurance on all vehicles and equipment.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-dark-blue mb-4">What This Means for You</h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>If something goes wrong during delivery or pickup—a damaged driveway, a scratched vehicle, whatever—our insurance covers it. You're not on the hook.</p>
                <p>We also follow all local regulations for waste disposal. Everything we haul gets taken to permitted facilities. No illegal dumping, no cutting corners.</p>
                <p>Certificate of insurance available upon request for commercial projects or HOA requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Our Coverage?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
