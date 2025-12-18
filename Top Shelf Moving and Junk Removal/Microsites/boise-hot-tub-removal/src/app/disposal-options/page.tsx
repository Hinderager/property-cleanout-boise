import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Recycle, Trash2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Disposal Options | Boise Hot Tub Removal',
  description: 'Hot tub and pool disposal options in Boise. Recycling, eco-friendly disposal, and responsible landfill services. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-hot-tub-removal.com/disposal-options' },
}

export default function DisposalOptionsPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/hot-tub-removal-process.webp" alt="Disposal Options" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Disposal Options</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Environmentally responsible disposal and recycling for your hot tub, pool, or deck.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">How We Dispose of Your Materials</h2>
            <p className="text-lg text-gray-600 mb-12">We believe in doing things right. That means recycling what we can and disposing of the rest responsibly.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Recycle className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-[#0B2F3A]">Recycling</h3>
                </div>
                <p className="text-gray-700 mb-4">We recycle whenever possible to keep materials out of landfills.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Metal components (copper, steel, aluminum)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Wood materials processed for mulch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Plastic shells when facilities accept them</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Concrete crushed for reuse</span>
                  </li>
                </ul>
                <Link href="/services/disposal/recycling" className="inline-block mt-4 text-green-600 font-semibold hover:underline">Learn More →</Link>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Trash2 className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-[#0B2F3A]">Responsible Landfill</h3>
                </div>
                <p className="text-gray-700 mb-4">Materials that can't be recycled go to licensed disposal facilities.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Licensed disposal sites only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Proper sorting and handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Compliance with regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Documentation maintained</span>
                  </li>
                </ul>
                <Link href="/services/disposal/landfill" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">Learn More →</Link>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-[#FFC845] p-6 mb-12">
              <h4 className="font-bold text-[#0B2F3A] mb-2">No Extra Cost for Recycling</h4>
              <p className="text-gray-700">We sort materials and recycle as much as possible at no additional charge. It's the right thing to do, and it's built into our standard service.</p>
            </div>

            <div className="p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Choose Responsible Disposal</h3>
              <p className="text-gray-300 mb-6">Call now for eco-friendly hot tub and pool removal.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0B2F3A] mb-6">Related Information</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/disposal/eco-friendly" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Eco-Friendly Disposal</Link>
            <Link href="/removal-process" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Removal Process</Link>
            <Link href="/pricing" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Pricing Guide</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
