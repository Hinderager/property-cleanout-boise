import { Metadata } from 'next'
import { Phone, Shield, FileCheck, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Licenses & Insurance | Boise Mobile Home Demolition',
  description: 'Boise Mobile Home Demolition is fully licensed and insured. Learn about our credentials, insurance coverage, and commitment to safe, compliant demolition work.',
  alternates: { canonical: 'https://mobile-home-demolition-boise.com/about-us/licenses-insurance' },
}

export default function LicensesInsurancePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Licenses & Insurance</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Fully credentialed and covered for your peace of mind</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>When you hire a demolition company, you're trusting them with a major project on your property. That's why it matters that we're properly licensed and fully insured.</p>
              <p>We carry comprehensive general liability insurance and workers' compensation coverage. If something goes wrong on the job, you're protected. Our crew is protected. Everyone's protected.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">General Liability Insurance</h3>
                <p className="text-gray-600">Protects you and your property in case of accidental damage during demolition work. This is standard coverage that any legitimate contractor should have.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <FileCheck className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Workers' Compensation</h3>
                <p className="text-gray-600">Covers our crew if anyone gets hurt on the job. Without this, you could be held liable for injuries on your property.</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-[#FFC845] p-6 mb-12">
              <div className="flex gap-3">
                <AlertTriangle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-2">Why This Matters</h3>
                  <p className="text-gray-600 mb-2">Not all demolition companies carry proper insurance. Some operate without it to save money, which puts you at serious risk.</p>
                  <p className="text-gray-600">If an uninsured contractor damages your property or someone gets hurt on your land, you could be on the hook for thousands of dollars. Don't take that chance.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Our Commitment to Compliance</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] mt-1">•</span>
                  <span>Licensed to operate in Idaho</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] mt-1">•</span>
                  <span>Fully insured with current coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] mt-1">•</span>
                  <span>Follow all local building codes and regulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] mt-1">•</span>
                  <span>Proper disposal of materials according to environmental standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC845] mt-1">•</span>
                  <span>Can provide proof of insurance upon request</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 mb-4">Have questions about our credentials? We're happy to provide documentation.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Get a Free Quote</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
