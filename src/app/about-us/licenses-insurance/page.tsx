import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Licenses & Insurance | Top Shelf Property Cleanout',
  description: 'Licensed and insured property cleanout services in Boise and the Treasure Valley.',
  alternates: { canonical: 'https://property-cleanout-boise.com/about-us/licenses-insurance' },
}

export default function LicensesInsurancePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Licenses & Insurance</h1>
        </div>
      </section>
      <VisibleBreadcrumb />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-[#FFC845] mx-auto mb-4" />
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>Top Shelf Property Cleanout is fully licensed and insured to provide property cleanout services throughout Idaho.</p>
              <p>We carry comprehensive general liability insurance to protect you and your property during every cleanout job. You can have peace of mind knowing you're working with a professional, legitimate company.</p>
              <p>If you have any questions about our licenses or insurance coverage, please don't hesitate to call us.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Our Credentials?</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
