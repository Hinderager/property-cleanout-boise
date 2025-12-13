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
  title: 'Hoarding Cleanup Boise Idaho | Professional Hoarder Cleanout Services',
  description: 'Professional hoarding cleanup services in Boise, Idaho. Compassionate hoarder cleanout, estate cleanout, and clutter removal. Licensed & insured. Same-day service available. Free estimates. Call (208) 361-1982.',
  keywords: [
    'hoarding cleanup Boise',
    'hoarding cleanup Boise Idaho',
    'hoarder cleanout Boise',
    'hoarding cleanup services Boise',
    'hoarding help Boise ID',
    'estate cleanout Boise',
    'clutter removal Boise Idaho',
    'hoarding remediation Boise',
    'compassionate hoarding cleanup Boise',
    'Boise hoarder cleanup services',
  ],
  openGraph: {
    title: 'Hoarding Cleanup Boise Idaho | Professional Hoarder Cleanout',
    description: 'Professional, compassionate hoarding cleanup services in Boise, Idaho. Licensed, insured, and discreet. Same-day service available.',
    url: 'https://boise-hoarding-cleanup.com/boise',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/boise',
  },
}

const boiseNeighborhoods = [
  'Downtown Boise',
  'North End',
  'East End',
  'Bench',
  'West Boise',
  'Southeast Boise',
  'Southwest Boise',
  'Harris Ranch',
  'Warm Springs',
  'Boise Highlands',
  'Collister',
  'State Street',
]

export default function BoisePage() {
  return (
    <main>
      <StructuredData city="Boise" />

      <HeroSection
        city="Boise"
        headline="Hoarding Cleanup Services in Boise, Idaho"
        subheadline="Professional, Compassionate Hoarder Cleanout for Boise Residents"
      />

      <SchedulingForm city="Boise" />

      {/* Boise-Specific Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Professional Hoarding Cleanup in Boise, Idaho
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                If you or a loved one is struggling with hoarding in Boise, you&apos;re not alone. Hoarding affects millions of Americans, and getting help is the first step toward reclaiming your home and your life. Our <strong>Boise hoarding cleanup services</strong> provide compassionate, non-judgmental assistance to help you through this challenging time.
              </p>

              <p>
                As Idaho&apos;s capital city, Boise has a diverse mix of homes—from historic properties in the North End to newer developments in Southeast Boise. Our team has experience handling hoarding cleanup in all types of Boise properties, from small apartments to large estates.
              </p>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                Our Boise Hoarding Cleanup Services Include:
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete Hoarder Cleanout:</strong> Full removal of accumulated items, trash, and debris</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Estate Cleanout:</strong> Compassionate cleanup after the loss of a loved one</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Clutter Removal:</strong> Help with overwhelming clutter before it becomes severe</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Deep Cleaning:</strong> Post-cleanup sanitization and deep cleaning services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Sorting &amp; Organization:</strong> Help identifying valuables and important documents</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                Boise Neighborhoods We Serve
              </h3>

              <p>
                We provide hoarding cleanup services throughout all of Boise, including:
              </p>
            </div>

            {/* Neighborhoods Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
              {boiseNeighborhoods.map((neighborhood) => (
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
                Need Hoarding Cleanup in Boise?
              </h3>
              <p className="text-gray-300 mb-6">
                Call us now for a free, confidential consultation. Same-day service available.
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
            <Link href="/meridian" className="text-dark-blue underline hover:text-light-blue font-medium">
              Meridian Hoarding Cleanup
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
