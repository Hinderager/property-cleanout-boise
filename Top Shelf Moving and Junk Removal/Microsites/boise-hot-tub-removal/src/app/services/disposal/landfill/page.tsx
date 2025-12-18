import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Landfill Services | Boise Hot Tub Removal',
  description: 'Proper landfill disposal for hot tub materials in Boise. Licensed and compliant disposal services. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-hot-tub-removal.com/services/disposal/landfill' },
}

export default function LandfillServicesPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/hot-tub-removal-process.webp" alt="Landfill Disposal Services" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Landfill Disposal Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Proper disposal of materials that can't be recycled. Licensed and compliant.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Responsible Landfill Disposal</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Some materials can't be recycled, and those need to go to the landfill. We make sure everything is disposed of properly and in compliance with local regulations.</p>
              <p>We use licensed disposal facilities, follow all environmental rules, and keep waste properly sorted. You don't have to worry about any of it.</p>
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Our Disposal Process</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed Facilities:</strong> We use only approved disposal sites.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Proper Sorting:</strong> Recyclables separated from landfill-bound materials.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Compliant Disposal:</strong> Follow all local and state regulations.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Documentation:</strong> Proper disposal records maintained.</span>
              </li>
            </ul>

            <div className="p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Proper Disposal?</h3>
              <p className="text-gray-300 mb-6">Call now for compliant hot tub and pool disposal.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0B2F3A] mb-6">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/disposal" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">All Disposal Options</Link>
            <Link href="/services/disposal/recycling" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Recycling Options</Link>
            <Link href="/services/disposal/eco-friendly" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Eco-Friendly Disposal</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
