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
  title: 'Hoarding Cleanup Caldwell Idaho | Hoarder Cleanout Services Canyon County',
  description: 'Professional hoarding cleanup services in Caldwell, Idaho. Compassionate hoarder cleanout, estate cleanout, and clutter removal in Canyon County. Licensed & insured. Same-day service. Call (208) 361-1982.',
  keywords: [
    'hoarding cleanup Caldwell',
    'hoarding cleanup Caldwell Idaho',
    'hoarder cleanout Caldwell',
    'hoarding cleanup services Caldwell ID',
    'hoarding help Caldwell',
    'estate cleanout Caldwell Idaho',
    'Canyon County hoarding cleanup',
    'clutter removal Caldwell',
    'Caldwell hoarder cleanup',
    'property cleanout Caldwell',
  ],
  openGraph: {
    title: 'Hoarding Cleanup Caldwell Idaho | Canyon County Hoarder Cleanout',
    description: 'Professional, compassionate hoarding cleanup services in Caldwell, Idaho. Licensed, insured, and discreet. Same-day service available.',
    url: 'https://hoardingcleanupboise.com/caldwell',
  },
  alternates: {
    canonical: 'https://hoardingcleanupboise.com/caldwell',
  },
}

const caldwellAreas = [
  'Downtown Caldwell',
  'West Caldwell',
  'East Caldwell',
  'North Caldwell',
  'South Caldwell',
  'Ustick Road Area',
  'Cleveland Boulevard',
  'Middleton Road Area',
  'Farmway Road',
  'Lake Lowell Area',
  'Karcher Road',
  'Indiana Avenue',
]

export default function CaldwellPage() {
  return (
    <main>
      <StructuredData city="Caldwell" />

      <HeroSection
        city="Caldwell"
        headline="Hoarding Cleanup Services in Caldwell, Idaho"
        subheadline="Canyon County's Trusted Hoarder Cleanout Professionals"
      />

      <SchedulingForm city="Caldwell" />

      {/* Caldwell-Specific Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Professional Hoarding Cleanup in Caldwell, Idaho
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Caldwell is a growing community in Canyon County, and like any city, some residents face challenges with hoarding. Our <strong>Caldwell hoarding cleanup services</strong> provide compassionate, judgment-free assistance to help families reclaim their homes and their lives.
              </p>

              <p>
                Whether you&apos;re dealing with a lifetime of accumulated belongings, helping an elderly parent downsize, or managing a property cleanout, our experienced team understands the sensitive nature of hoarding and treats every client with dignity and respect.
              </p>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                Caldwell Hoarding Cleanup Services
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Residential Hoarding Cleanup:</strong> Complete cleanout for homes of any size in Caldwell</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Farm &amp; Rural Property Cleanup:</strong> Serving agricultural properties and acreages</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Estate Cleanout:</strong> Compassionate handling after the loss of a loved one</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Foreclosure &amp; Eviction Cleanout:</strong> For banks and property managers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Garage &amp; Outbuilding Cleanup:</strong> Clear packed storage spaces and sheds</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                Caldwell Areas We Serve
              </h3>

              <p>
                We provide hoarding cleanup throughout Caldwell and Canyon County:
              </p>
            </div>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
              {caldwellAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 bg-fog px-3 py-2 rounded-lg"
                >
                  <MapPin className="w-4 h-4 text-light-blue flex-shrink-0" />
                  <span className="text-sm text-gunmetal">{area}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 p-6 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Hoarding Cleanup in Caldwell?
              </h3>
              <p className="text-gray-300 mb-6">
                Free, confidential consultations. Same-day service available throughout Canyon County.
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
            <Link href="/meridian" className="text-dark-blue underline hover:text-light-blue font-medium">
              Meridian Hoarding Cleanup
            </Link>
            <Link href="/nampa" className="text-dark-blue underline hover:text-light-blue font-medium">
              Nampa Hoarding Cleanup
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
