import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { SchedulingForm } from '@/components/SchedulingForm'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { ServiceProcess } from '@/components/ServiceProcess'
import { FAQ } from '@/components/FAQ'
import { StructuredData } from '@/components/StructuredData'
import { CheckCircle, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hoarding Cleanup Meridian Idaho | Hoarder Cleanout Services',
  description: 'Professional hoarding cleanup services in Meridian, Idaho. Compassionate hoarder cleanout, estate cleanout, and clutter removal. Licensed & insured. Same-day service. Free estimates. Call (208) 361-1982.',
  keywords: [
    'hoarding cleanup Meridian',
    'hoarding cleanup Meridian Idaho',
    'hoarder cleanout Meridian',
    'hoarding cleanup services Meridian ID',
    'hoarding help Meridian',
    'estate cleanout Meridian Idaho',
    'clutter removal Meridian',
    'hoarding remediation Meridian',
    'Meridian hoarder cleanup',
  ],
  openGraph: {
    title: 'Hoarding Cleanup Meridian Idaho | Professional Hoarder Cleanout',
    description: 'Professional, compassionate hoarding cleanup services in Meridian, Idaho. Licensed, insured, and discreet. Same-day service available.',
    url: 'https://boise-hoarding-cleanup.com/meridian',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/meridian',
  },
}

const meridianNeighborhoods = [
  'Ten Mile',
  'Lochsa Falls',
  'Paramount',
  'Tuscany',
  'Silverstone',
  'South Meridian',
  'Ustick Road Area',
  'Downtown Meridian',
  'The Village',
  'Heritage Commons',
  'Spurwing',
  'Victory Road Area',
]

export default function MeridianPage() {
  return (
    <main>
      <StructuredData city="Meridian" />

      <HeroSection
        city="Meridian"
        headline="Hoarding Cleanup Services in Meridian, Idaho"
        subheadline="Compassionate Hoarder Cleanout for Meridian Families"
      />

      <SchedulingForm city="Meridian" />

      {/* Meridian-Specific Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Professional Hoarding Cleanup in Meridian, Idaho
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Meridian is Idaho&apos;s fastest-growing city, and with that growth comes families who may need help with hoarding cleanup. Whether you&apos;re dealing with a loved one&apos;s hoarding situation or need help with your own clutter, our <strong>Meridian hoarding cleanup team</strong> is here to help with compassion and professionalism.
              </p>

              <p>
                From newer subdivisions in South Meridian to established neighborhoods near downtown, we understand the unique challenges that Meridian homeowners face. Our discreet service ensures your privacy is protected throughout the entire cleanup process.
              </p>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                Meridian Hoarding Cleanup Services
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Residential Hoarding Cleanup:</strong> Complete cleanout for homes of any size</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Garage &amp; Storage Cleanout:</strong> Clear out packed garages and storage areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Estate Cleanout:</strong> Sensitive handling of a loved one&apos;s belongings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Pre-Sale Cleanout:</strong> Get your Meridian home ready for market</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Deep Cleaning:</strong> Sanitization after item removal</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                Meridian Areas We Serve
              </h3>

              <p>
                We provide hoarding cleanup throughout Meridian, including:
              </p>
            </div>

            {/* Neighborhoods Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
              {meridianNeighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood}
                  className="flex items-center gap-2 bg-fog px-3 py-2 rounded-lg"
                >
                  <MapPin className="w-4 h-4 text-light-blue flex-shrink-0" />
                  <span className="text-sm text-gunmetal">{neighborhood}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 p-6 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Hoarding Cleanup in Meridian?
              </h3>
              <p className="text-gray-300 mb-6">
                We offer free, confidential consultations. Same-day service available.
              </p>
              <a
                href="tel:2083611982"
                className="inline-flex items-center gap-2 bg-brand-yellow text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (208) 361-1982
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ServiceProcess />
      <FAQ />

      {/* Related City Links */}
      <section className="py-12 bg-fog">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-6 text-center">
            Also Serving Nearby Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/boise" className="text-dark-blue underline hover:text-light-blue font-medium">
              Boise Hoarding Cleanup
            </Link>
            <Link href="/nampa" className="text-dark-blue underline hover:text-light-blue font-medium">
              Nampa Hoarding Cleanup
            </Link>
            <Link href="/caldwell" className="text-dark-blue underline hover:text-light-blue font-medium">
              Caldwell Hoarding Cleanup
            </Link>
            <Link href="/eagle" className="text-dark-blue underline hover:text-light-blue font-medium">
              Eagle Hoarding Cleanup
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
