import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Recycle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recycling Options | Boise Hot Tub Removal',
  description: 'Hot tub and pool recycling in Boise. We recycle metals, plastics, wood, and more. Environmentally responsible disposal. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-hot-tub-removal.com/services/disposal/recycling' },
}

export default function RecyclingPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/hot-tub-removal-process.webp" alt="Recycling Services" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Recycling Options</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">We recycle hot tub and pool materials whenever possible to reduce landfill waste.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Hot Tub and Pool Recycling</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Most hot tubs and pools contain materials that can be recycled. We sort everything during removal and send recyclable materials to the appropriate facilities.</p>
              <p>This keeps waste out of landfills and gives these materials a second life. It's good for the environment and doesn't cost you anything extra.</p>
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">What Gets Recycled</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <Recycle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Metal Components:</strong> Copper, steel, aluminum sent to scrap recyclers.</span>
              </li>
              <li className="flex items-start gap-3">
                <Recycle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Wood Materials:</strong> Deck boards and structures processed for mulch.</span>
              </li>
              <li className="flex items-start gap-3">
                <Recycle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Plastic Shells:</strong> When possible, processed at plastic recycling facilities.</span>
              </li>
              <li className="flex items-start gap-3">
                <Recycle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Concrete:</strong> Crushed and reused as road base or construction fill.</span>
              </li>
            </ul>

            <div className="p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Choose Recycling</h3>
              <p className="text-gray-300 mb-6">Call now for environmentally responsible hot tub removal.</p>
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
            <Link href="/services/disposal/eco-friendly" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Eco-Friendly Disposal</Link>
            <Link href="/disposal-options" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Learn More</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
