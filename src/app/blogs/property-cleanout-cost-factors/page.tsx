import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What Affects Property Cleanout Costs? | Property Cleanout Pros',
  description: 'Property cleanout pricing depends on several factors. Here\'s what determines the cost in the Boise area.',
  alternates: {
    canonical: 'https://property-cleanout-boise.com/blogs/property-cleanout-cost-factors',
  },
}

export default function PropertyCleanoutCostFactors() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/cleanout-cost-factors.webp"
          alt="Property Cleanout Cost Factors"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            What Affects Property Cleanout Costs?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You need a property cleaned out. The first question is usually: how much will this cost? The honest answer is that it depends—on several factors that vary significantly from one property to the next.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's what actually drives property cleanout pricing in the Boise area, so you can get realistic estimates and avoid surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Volume of Contents */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Volume of Contents
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              The biggest factor in cleanout cost is simply how much stuff needs to go:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Light cleanouts.</strong> A few pieces of furniture, some boxes, a handful of trash bags. These are quick jobs—often done in a few hours.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Full-house cleanouts.</strong> Every room furnished, closets full, garage packed. These take most of a day and require multiple truck loads.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Hoarding situations.</strong> Floor-to-ceiling accumulation, multiple passes needed, potentially multiple days of work. These are the most expensive cleanouts.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Most quotes are based on estimated truckloads. A standard cleanout truck holds roughly 400-500 cubic feet. More volume = more loads = higher cost.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Items */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Types of Items
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              What you're removing affects labor and disposal costs:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Standard household items:</strong> Furniture, clothing, boxes—straightforward to handle and dispose of</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Heavy items:</strong> Pianos, safes, large appliances, exercise equipment—require more labor and sometimes special equipment</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Hazardous materials:</strong> Paint, chemicals, propane tanks, certain electronics—require special disposal and add cost</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Construction debris:</strong> If the property has leftover building materials, flooring, drywall—disposal fees are higher</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Mixed loads with diverse item types take longer to sort and process than homogeneous loads.
            </p>
          </div>
        </div>
      </section>

      {/* Property Size and Layout */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Property Size and Layout
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              The property itself affects cleanout difficulty:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Square footage.</strong> More rooms generally means more contents and more time walking items out.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Stairs and levels.</strong> Multi-story homes take longer than single-story. Carrying furniture down stairs is slower and more labor-intensive.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Access to rooms.</strong> Narrow hallways, tight corners, and small doorways slow down the removal of large items.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Outbuildings.</strong> Sheds, detached garages, workshops—additional structures mean additional time.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Yard and exterior.</strong> If outdoor areas are included in the cleanout, that adds scope and time.
            </p>
          </div>
        </div>
      </section>

      {/* Access and Location */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Access and Location
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Getting items from the property to the truck matters:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Parking distance.</strong> If the truck can park close to the door, work goes fast. If it's parked far away—long driveway, no close street access—every trip takes longer.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Elevator access.</strong> In multi-story buildings, elevator availability and size affect how quickly large items can be moved.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Geographic location.</strong> Properties in central Boise are typically cheaper to service than those in rural Canyon County or the outskirts of the valley—travel time and disposal site distance matter.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Parking restrictions.</strong> If street parking is limited or requires permits, logistics get more complicated.
            </p>
          </div>
        </div>
      </section>

      {/* Labor Requirements */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Labor Requirements
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Crew size and time directly impact cost:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Crew size needed.</strong> A small apartment cleanout might need two people. A large house with heavy furniture might need four. More crew = higher labor cost.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Specialized labor.</strong> Moving a piano, handling hazardous materials, or dealing with biohazard situations requires workers with specific skills and certifications.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Sorting requirements.</strong> If items need to be sorted (separate donations, document certain items, hold specific possessions), that takes more time than simply removing everything.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Timeline pressure.</strong> Rush jobs or after-hours work may cost more than jobs with flexible scheduling.
            </p>
          </div>
        </div>
      </section>

      {/* Disposal Costs */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Disposal and Processing Costs
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              What happens after items leave the property:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Landfill fees.</strong> Disposal facilities charge by weight or volume. These fees are part of your cleanout cost.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Recycling and donation.</strong> Some items can be recycled or donated, reducing disposal fees—but sorting takes labor time.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Special disposal.</strong> Electronics, appliances with refrigerants, and hazardous materials have separate disposal requirements and often additional fees.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Number of dump trips.</strong> Large cleanouts may require multiple trips to disposal facilities, adding time and vehicle costs.
            </p>
          </div>
        </div>
      </section>

      {/* Typical Price Ranges */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Typical Price Ranges in Boise
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              General pricing for property cleanouts in the Treasure Valley:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Small apartment or light cleanout:</strong> $300-$800. Minimal contents, quick turnaround.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Average home cleanout:</strong> $1,000-$3,000. Typical rental turnover or estate situation with moderate contents.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Large home or full cleanout:</strong> $3,000-$5,000. Multiple rooms fully furnished, garage and storage areas included.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Hoarding or extreme situations:</strong> $5,000-$15,000+. Multi-day projects requiring extensive labor.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Property cleanout costs vary widely because properties vary widely. The best way to get accurate pricing is an on-site estimate where we can see exactly what's involved.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Be wary of quotes given over the phone without seeing the property—they're often wrong, and not always in your favor.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We provide free on-site estimates with firm pricing. Once we quote a job, that's the price you pay unless the scope changes significantly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Get an Accurate Quote
            </h2>
            <p className="text-gray-600 mb-8">
              We'll look at your specific property and give you a firm price. No surprises, no hidden fees.
            </p>
            <a
              href="tel:2083611982"
              className="inline-block bg-dark-blue hover:bg-light-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Call (208) 361-1982
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Property Cleanout Resources
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-light-blue transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
