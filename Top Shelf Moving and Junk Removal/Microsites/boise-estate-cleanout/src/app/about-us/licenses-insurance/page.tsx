import { Metadata } from 'next'
import { Shield, CheckCircle, Phone, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Licenses & Insurance | Boise Estate Cleanout',
  description: 'Top Shelf Estate Cleanout is fully licensed and insured in Idaho. Learn about our credentials and coverage.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/about-us/licenses-insurance' },
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
              <p>When you're dealing with an estate cleanout—especially during an already difficult time—the last thing you should worry about is whether the company handling your property is properly licensed and insured.</p>
              <p>Top Shelf Estate Cleanout maintains all required licenses and comprehensive insurance coverage to protect you, your property, and our team.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-4">General Liability Insurance</h3>
                <p className="text-gray-600 mb-4">We carry comprehensive general liability insurance to protect your property during the cleanout process.</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Property damage coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Professional liability protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Third-party coverage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-4">Workers' Compensation</h3>
                <p className="text-gray-600 mb-4">Our team is covered by workers' compensation insurance, protecting you from liability.</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>No liability if someone gets hurt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Full Idaho compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Complete crew coverage</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6 mb-12">
              <h3 className="text-lg font-bold text-dark-blue mb-2">Why This Matters</h3>
              <p className="text-gray-700">If an uninsured company damages your property or someone gets hurt on the job, you could be held liable. We carry proper insurance so you don't have to worry about that risk.</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Business Licensing</h2>
              <p>We maintain all required business licenses to operate legally in Idaho and the Treasure Valley. Our business is registered, compliant, and operates according to all local, state, and federal regulations.</p>
            </div>

            <div className="bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Work With a Licensed, Insured Company</h2>
              <p className="text-gray-300 mb-6">Don't take chances during an already stressful time. Choose a company that's properly covered.</p>
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
