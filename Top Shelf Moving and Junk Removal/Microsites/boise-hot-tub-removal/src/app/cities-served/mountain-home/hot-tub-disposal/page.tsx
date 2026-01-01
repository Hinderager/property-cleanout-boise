import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hot Tub Disposal Mountain Home ID | Boise Hot Tub Removal',
  description: 'Eco-friendly disposal and recycling services in Mountain Home, Idaho. Fast, reliable service. Licensed & insured. Same-day appointments available. Call (208) 943-5231.',
  keywords: ['hot tub disposal Mountain Home', 'hot tub removal Mountain Home'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/cities-served/mountain-home/hot-tub-disposal',
  },
}

const commonProblems = ["Don't know where to take it","Too heavy to move yourself","Landfill won't accept it","Want to recycle components","Need proper disposal","Environmental concerns"]

export default function MountainHomeHotTubDisposalPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/hot-tub-removal-process.webp"
          alt="Hot Tub Disposal in Mountain Home, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-[#0b7fb6] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Same-Day Service Available</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Hot Tub Disposal in Mountain Home</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Eco-friendly disposal and recycling services in Mountain Home. Professional, efficient, and hassle-free.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Hot Tub Disposal Services in Mountain Home</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Need hot tub disposal in Mountain Home? We've got you covered. Whether your hot tub is ancient, broken, or you just want it gone, we'll handle the whole process.</p>
              <p>We show up on time, disconnect everything safely, break it down if needed, haul it away, and clean up after ourselves. No stress, no guessing what it'll cost. Just straightforward hot tub disposal.</p>
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Common Reasons for Hot Tub Disposal</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {commonProblems.map((problem) => (
                <div key={problem} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Why Mountain Home Residents Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Mountain Home Service:</strong> We respond quickly to Mountain Home service calls.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start any work.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Full Service:</strong> We handle disconnection, removal, and cleanup.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Professional, trustworthy service.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Hot Tub Disposal in Mountain Home?</h3>
              <p className="text-gray-300 mb-6">Call now for fast, professional service.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0B2F3A] mb-6">Other Services in Mountain Home</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/mountain-home" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">All Mountain Home Services</Link>
            <Link href="/cities-served/mountain-home/portable-hot-tub-removal" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Portable Hot Tub Removal</Link>
            <Link href="/cities-served/mountain-home/hot-tub-disposal" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Hot Tub Disposal</Link>
            <Link href="/cities-served/mountain-home/hot-tub-demolition" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Hot Tub Demolition</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
