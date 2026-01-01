import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Users, Award, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Boise Hot Tub Removal | Local Hot Tub Removal Experts',
  description: 'Learn about Boise Hot Tub Removal. Locally owned, licensed, and insured. Serving the Treasure Valley since day one. Call (208) 943-5231.',
  keywords: ['about hot tub removal Boise', 'local hot tub removal company', 'hot tub removal team'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/about-us',
  },
}

export default function AboutUsPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            We're a local team that helps people get rid of hot tubs they don't want anymore. Simple as that.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Who We Are</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>
                We started Boise Hot Tub Removal because we saw a need. People in the Treasure Valley had hot tubs sitting in their yards—broken, unused, or just in the way—and didn't know what to do with them.
              </p>
              <p>
                Hauling a hot tub isn't like hauling a couch. They're heavy. They're awkward. Most have electrical connections and plumbing. A lot of folks would call around and either get no answer or crazy high quotes. So we decided to fill that gap.
              </p>
              <p>
                Now we handle hot tub removal across Boise, Meridian, Nampa, Eagle, and the whole Treasure Valley. We show up on time, quote a fair price upfront, and get the job done without drama.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="w-12 h-12 text-[#0b7fb6] mb-4" />
                <h3 className="text-xl font-bold text-[#0B2F3A] mb-3">Local Team</h3>
                <p className="text-gray-600">
                  We're based right here in the Treasure Valley. We know the area, we know the homes, and we know what it takes to get a hot tub out without tearing up your property.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Award className="w-12 h-12 text-[#0b7fb6] mb-4" />
                <h3 className="text-xl font-bold text-[#0B2F3A] mb-3">Experienced Crew</h3>
                <p className="text-gray-600">
                  Our team has removed hundreds of hot tubs. Portable, built-in, swim spas, jacuzzis—we've done it all. We know how to do it safely and efficiently.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-12 h-12 text-[#0b7fb6] mb-4" />
                <h3 className="text-xl font-bold text-[#0B2F3A] mb-3">Fast Service</h3>
                <p className="text-gray-600">
                  We get it—you want that thing gone. We offer same-day and next-day service whenever possible. Call in the morning, hot tub's gone by afternoon.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-[#0b7fb6] mb-4" />
                <h3 className="text-xl font-bold text-[#0B2F3A] mb-3">Licensed & Insured</h3>
                <p className="text-gray-600">
                  We're properly licensed and fully insured. That means you're protected, and we do things the right way.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">How We Work</h2>
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0B2F3A] mb-1">1. You Call, We Quote</h3>
                  <p className="text-gray-600">Tell us about your hot tub. We give you an upfront price over the phone. No surprises.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0B2F3A] mb-1">2. We Schedule a Time</h3>
                  <p className="text-gray-600">Pick a day and time that works for you. We'll show up when we say we will.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0B2F3A] mb-1">3. We Remove It</h3>
                  <p className="text-gray-600">We disconnect everything, break down the hot tub if needed, haul it away, and clean up.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0B2F3A] mb-1">4. Your Yard is Yours Again</h3>
                  <p className="text-gray-600">Hot tub's gone. Space is clear. You're done dealing with it.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-4 text-center">
                Learn More About Us
              </h2>
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <Link href="/about-us/why-choose-us" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-center">
                  <h3 className="font-bold text-[#0b7fb6]">Why Choose Us</h3>
                  <p className="text-sm text-gray-600">See what makes us different</p>
                </Link>
                <Link href="/about-us/licenses-insurance" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-center">
                  <h3 className="font-bold text-[#0b7fb6]">Licenses & Insurance</h3>
                  <p className="text-sm text-gray-600">Our credentials and coverage</p>
                </Link>
                <Link href="/about-us/testimonials" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-center">
                  <h3 className="font-bold text-[#0b7fb6]">Testimonials</h3>
                  <p className="text-sm text-gray-600">What customers say about us</p>
                </Link>
                <Link href="/about-us/careers" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-center">
                  <h3 className="font-bold text-[#0b7fb6]">Careers</h3>
                  <p className="text-sm text-gray-600">Join our team</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0B2F3A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Remove Your Hot Tub?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Call us today for a free quote. We'll make it easy.
          </p>
          <a
            href="tel:2089435231"
            className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
