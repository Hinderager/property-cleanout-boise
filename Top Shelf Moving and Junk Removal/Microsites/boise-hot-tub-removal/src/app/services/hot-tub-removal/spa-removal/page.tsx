import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Spa Removal Services | Boise Hot Tub Removal',
  description: 'Professional spa removal in Boise and the Treasure Valley. We remove all types of spas, swim spas, and jacuzzis. Fast service. Call (208) 943-5231.',
  keywords: ['spa removal Boise', 'jacuzzi removal', 'swim spa removal', 'hot tub removal'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/services/hot-tub-removal/spa-removal',
  },
}

const spaTypes = [
  "Portable spas and hot tubs",
  "Swim spas",
  "Jacuzzi brand tubs",
  "Inflatable spas",
  "Corner spas",
  "Two-person to large party spas"
]

export default function SpaRemovalPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/hot-tub-removal-process.webp"
          alt="Professional Spa Removal Service"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-[#0b7fb6] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">All Spa Types</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Spa Removal Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Complete spa and jacuzzi removal throughout the Treasure Valley. Any size, any condition.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Professional Spa Removal</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Need a spa removed? Whether you've got a small two-person model or a massive swim spa, we handle it all.</p>
              <p>Spas come in all shapes and sizes, and some are easier to remove than others. We've done hundreds of them, so we know what we're dealing with before we even show up. We'll disconnect it safely, break it down if needed, haul it off, and leave your space clean.</p>
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Types of Spas We Remove</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {spaTypes.map((type) => (
                <div key={type} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{type}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Our Spa Removal Process</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Free Estimate:</strong> Upfront pricing based on your spa type and location.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Safe Disconnection:</strong> Proper handling of electrical and water lines.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Careful Removal:</strong> Protect your property during the removal process.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Complete Haul Away:</strong> We take the spa, covers, steps, and all accessories.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Eco-Friendly Disposal:</strong> Recycle materials whenever possible.</span>
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#0b7fb6] p-6 mb-12">
              <h4 className="font-bold text-[#0B2F3A] mb-2">Swim Spas Too</h4>
              <p className="text-gray-700">Got a swim spa? These are bigger and heavier than regular spas, but we've got the equipment and experience to handle them. Same process, just a bit more muscle required.</p>
            </div>

            <div className="p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Your Spa Removed?</h3>
              <p className="text-gray-300 mb-6">Call now for a free quote on spa or jacuzzi removal.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0B2F3A] mb-6">Other Hot Tub Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/hot-tub-removal" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">All Services</Link>
            <Link href="/services/hot-tub-removal/above-ground" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Above-Ground Removal</Link>
            <Link href="/services/hot-tub-removal/in-ground" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">In-Ground Removal</Link>
            <Link href="/removal-process" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Removal Process</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
