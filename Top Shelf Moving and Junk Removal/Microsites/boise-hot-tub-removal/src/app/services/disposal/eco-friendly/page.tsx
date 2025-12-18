import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Recycle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Eco-Friendly Disposal | Boise Hot Tub Removal',
  description: 'Eco-friendly hot tub and pool disposal in Boise. We recycle and properly dispose of materials. Environmentally responsible. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-hot-tub-removal.com/services/disposal/eco-friendly' },
}

export default function EcoFriendlyDisposalPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/hot-tub-removal-process.webp" alt="Eco-Friendly Disposal" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 flex items-center gap-2">
            <Recycle className="w-4 h-4" /> Environmentally Responsible
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Eco-Friendly Disposal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Responsible disposal and recycling of hot tubs, pools, and outdoor structures.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Environmentally Responsible Disposal</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>We believe in doing things right, which means disposing of materials responsibly whenever possible.</p>
              <p>When we remove your hot tub, pool, or deck, we sort materials for recycling. Metals go to scrap yards, wood gets chipped for mulch or recycled, and plastics are processed properly. We only landfill what can't be recycled.</p>
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">What We Recycle</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <Recycle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Metals:</strong> Copper wiring, steel frames, aluminum components.</span>
              </li>
              <li className="flex items-start gap-3">
                <Recycle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Wood:</strong> Deck lumber, gazebo materials processed for mulch.</span>
              </li>
              <li className="flex items-start gap-3">
                <Recycle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Plastics:</strong> Hot tub shells and pool liners when possible.</span>
              </li>
              <li className="flex items-start gap-3">
                <Recycle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Concrete:</strong> Crushed and recycled for road base or fill.</span>
              </li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-12">
              <h4 className="font-bold text-[#0B2F3A] mb-2">Our Commitment</h4>
              <p className="text-gray-700">We're committed to keeping as much material out of landfills as we can. It's better for the environment and it's the right thing to do.</p>
            </div>

            <div className="p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Choose Eco-Friendly Removal</h3>
              <p className="text-gray-300 mb-6">Call now for responsible hot tub and pool disposal.</p>
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
            <Link href="/disposal-options" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Learn More</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
