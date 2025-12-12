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
  title: 'Hoarding Cleanup Eagle Idaho | Discreet Hoarder Cleanout Services',
  description: 'Professional hoarding cleanup services in Eagle, Idaho. Discreet, compassionate hoarder cleanout for Eagle residents. Estate cleanout and clutter removal. Licensed & insured. Call (208) 361-1982.',
  keywords: [
    'hoarding cleanup Eagle',
    'hoarding cleanup Eagle Idaho',
    'hoarder cleanout Eagle',
    'hoarding cleanup services Eagle ID',
    'hoarding help Eagle',
    'estate cleanout Eagle Idaho',
    'discreet hoarding cleanup Eagle',
    'clutter removal Eagle',
    'Eagle hoarder cleanup',
    'Eagle foothills hoarding cleanup',
  ],
  openGraph: {
    title: 'Hoarding Cleanup Eagle Idaho | Discreet Hoarder Cleanout',
    description: 'Professional, discreet hoarding cleanup services in Eagle, Idaho. Licensed, insured, and compassionate. Same-day service available.',
    url: 'https://hoardingcleanupboise.com/eagle',
  },
  alternates: {
    canonical: 'https://hoardingcleanupboise.com/eagle',
  },
}

const eagleAreas = [
  'Downtown Eagle',
  'North Eagle',
  'South Eagle',
  'Eagle Foothills',
  'Floating Feather',
  'Banbury Meadows',
  'Dry Creek',
  'Hidden Springs',
  'Avimor',
  'Eagle Island',
  'Linder Road Area',
  'State Street Corridor',
]

export default function EaglePage() {
  return (
    <main>
      <StructuredData city="Eagle" />

      <HeroSection
        city="Eagle"
        headline="Hoarding Cleanup Services in Eagle, Idaho"
        subheadline="Discreet, Professional Hoarder Cleanout for Eagle Residents"
      />

      <SchedulingForm city="Eagle" />

      {/* Eagle-Specific Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Professional Hoarding Cleanup in Eagle, Idaho
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Eagle is known for its beautiful homes, tight-knit community, and high quality of life. But hoarding can affect families in any neighborhood, regardless of income or background. Our <strong>Eagle hoarding cleanup services</strong> provide the discreet, professional assistance you need while protecting your privacy.
              </p>

              <p>
                We understand that Eagle residents value their privacy. That&apos;s why we use unmarked vehicles, maintain strict confidentiality, and work efficiently to minimize disruption. Whether you&apos;re dealing with a personal hoarding situation or helping a family member, we&apos;re here to help with compassion and zero judgment.
              </p>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                Eagle Hoarding Cleanup Services
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Discreet Residential Cleanup:</strong> Unmarked vehicles and complete confidentiality</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Estate &amp; Large Property Cleanup:</strong> Experienced with Eagle&apos;s larger homes and estates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Garage &amp; Outbuilding Cleanup:</strong> Clear packed garages, workshops, and storage buildings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Senior Downsizing:</strong> Helping Eagle seniors transition to smaller living spaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Pre-Sale Home Prep:</strong> Get your Eagle home market-ready quickly</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gunmetal mt-8 mb-4">
                Eagle Areas We Serve
              </h3>

              <p>
                We provide hoarding cleanup throughout Eagle and surrounding communities:
              </p>
            </div>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
              {eagleAreas.map((area) => (
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
                Need Hoarding Cleanup in Eagle?
              </h3>
              <p className="text-gray-300 mb-6">
                Free, confidential consultations. Discreet same-day service available.
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
            <Link href="/caldwell" className="text-dark-blue underline hover:text-light-blue font-medium">
              Caldwell Hoarding Cleanup
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
