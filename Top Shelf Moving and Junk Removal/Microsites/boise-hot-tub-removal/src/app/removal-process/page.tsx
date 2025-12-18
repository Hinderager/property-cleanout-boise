import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hot Tub Removal Process | Boise Hot Tub Removal',
  description: 'Learn about our hot tub removal process in Boise. From free estimate to final cleanup. Simple, straightforward service. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-hot-tub-removal.com/removal-process' },
}

const steps = [
  {
    step: 1,
    title: "Call for Free Estimate",
    description: "Tell us about your hot tub, pool, or deck. We'll give you an upfront price over the phone."
  },
  {
    step: 2,
    title: "Schedule Your Removal",
    description: "Pick a day and time that works for you. We're often available same-day or next-day."
  },
  {
    step: 3,
    title: "Safe Disconnection",
    description: "We disconnect electrical and plumbing safely. No cutting corners, no safety risks."
  },
  {
    step: 4,
    title: "Removal & Demolition",
    description: "We break down the structure as needed, protecting your property throughout the process."
  },
  {
    step: 5,
    title: "Complete Haul Away",
    description: "Everything gets loaded onto our truck. We recycle what we can."
  },
  {
    step: 6,
    title: "Final Cleanup",
    description: "We sweep up, clean the area, and leave your space ready to use."
  }
]

export default function RemovalProcessPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image src="/generated/hot-tub-removal-process.webp" alt="Hot Tub Removal Process" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Removal Process</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Simple, straightforward hot tub and pool removal from start to finish.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6 text-center">How It Works</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">We make hot tub removal easy. No hassles, no surprises. Just professional service from start to finish.</p>

            <div className="space-y-8 mb-12">
              {steps.map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0b7fb6] text-white flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B2F3A] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-[#0b7fb6] p-6 mb-12">
              <h4 className="font-bold text-[#0B2F3A] mb-2">What You Don't Have to Do</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-[#0b7fb6] flex-shrink-0 mt-0.5" />
                  <span>Drain the hot tub (we handle it)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-[#0b7fb6] flex-shrink-0 mt-0.5" />
                  <span>Disconnect utilities (we've got it)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-[#0b7fb6] flex-shrink-0 mt-0.5" />
                  <span>Rent equipment (we bring everything)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-[#0b7fb6] flex-shrink-0 mt-0.5" />
                  <span>Find a disposal site (that's our job)</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">Call now for your free estimate and schedule your removal.</p>
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
            <Link href="/pricing" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Pricing Guide</Link>
            <Link href="/disposal-options" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Disposal Options</Link>
            <Link href="/services" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">All Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
