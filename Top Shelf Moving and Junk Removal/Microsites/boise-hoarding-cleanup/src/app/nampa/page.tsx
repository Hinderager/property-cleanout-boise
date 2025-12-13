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
  title: 'Hoarding Cleanup Nampa Idaho | Hoarder Cleanout Services Canyon County',
  description: 'Professional hoarding cleanup services in Nampa, Idaho and Canyon County. Compassionate hoarder cleanout, estate cleanout, and clutter removal. Licensed & insured. Same-day service. Call (208) 361-1982.',
  keywords: [
    'hoarding cleanup Nampa',
    'hoarding cleanup Nampa Idaho',
    'hoarder cleanout Nampa',
    'hoarding cleanup services Nampa ID',
    'hoarding help Nampa',
    'estate cleanout Nampa Idaho',
    'Canyon County hoarding cleanup',
    'clutter removal Nampa',
    'Nampa hoarder cleanup',
  ],
  openGraph: {
    title: 'Hoarding Cleanup Nampa Idaho | Canyon County Hoarder Cleanout',
    description: 'Professional, compassionate hoarding cleanup services in Nampa, Idaho. Licensed, insured, and discreet. Same-day service available.',
    url: 'https://boise-hoarding-cleanup.com/nampa',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/nampa',
  },
}

const nampaAreas = [
  'Downtown Nampa',
  'North Nampa',
  'South Nampa',
  'West Nampa',
  'Ridgecrest',
  'Birch Lane',
  'Garrity Boulevard',
  'Northside',
  'Lakeview',
  'Karcher Road Area',
  'Star Road Area',
  'Canyon Springs',
]

export default function NampaPage() {
  return (
    <main>
      <StructuredData city="Nampa" />

      <HeroSection
        city="Nampa"
        headline="Hoarding Cleanup Services in Nampa, Idaho"
        subheadline="Canyon County&apos;s Trusted Hoarder Cleanout Professionals"
      />

      <SchedulingForm city="Nampa" />

      {/* Nampa-Specific Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Professional Hoarding Cleanup in Nampa, Idaho
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                As Canyon County&apos;s largest city, Nampa is home to thousands of families—some of whom are dealing with hoarding challenges. Our <strong>Nampa hoarding cleanup services</strong> provide a compassionate, judgment-free solution for residents who need help reclaiming their homes.
              </p>

              <p>
                Whether you&apos;re in historic downtown Nampa or one of the newer developments, our experienced team understands the sensitive nature of hoarding and treats every client with dignity and respect. We work discreetly to protect your privacy and help restore your living space.
              </p>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                Nampa &amp; Canyon County Hoarding Services
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Full House Cleanout:</strong> Complete hoarding cleanup from start to finish</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Property Cleanout:</strong> For landlords and property managers dealing with hoarding tenants</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Rural Property Cleanup:</strong> Serving homes on acreage outside Nampa city limits</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Senior Downsizing:</strong> Helping elderly residents transition to smaller spaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Eco-Friendly Disposal:</strong> Donations and recycling to minimize landfill waste</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                Nampa Areas We Serve
              </h3>

              <p>
                We provide hoarding cleanup throughout Nampa and Canyon County:
              </p>
            </div>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
              {nampaAreas.map((area) => (
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
                Need Hoarding Cleanup in Nampa?
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
