import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Recycle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What Happens to Materials from Demolished Mobile Homes? | Mobile Home Demolition Pros',
  description: 'Mobile homes contain recyclable materials. Here\'s how debris is sorted and where it goes after demolition.',
  alternates: {
    canonical: 'https://mobile-home-demolition-boise.com/blogs/what-happens-to-demolished-mobile-homes',
  },
}

export default function WhatHappenstoDemolishedMobileHomes() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/mobile-home-recycling.webp"
          alt="What Happens to Demolished Mobile Homes"
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
            What Happens to Materials from Demolished Mobile Homes?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A mobile home gets demolished. Walls come down, roof gets torn apart, everything gets loaded into trucks and hauled away. But then what? Does it all just end up in a landfill?
            </p>
            <p className="text-gray-600 leading-relaxed">
              Actually, a significant portion of mobile home materials can be recycled or repurposed. Here's what happens to the debris after your mobile home is demolished.
            </p>
          </div>
        </div>
      </section>

      {/* What Mobile Homes Are Made Of */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                What Mobile Homes Are Made Of
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Understanding the materials helps explain recycling potential:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Steel frame and chassis.</strong> The structural backbone of every mobile home. This is the most valuable recyclable material—steel framing, axles, hitches, and the I-beam chassis.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Wood framing and subflooring.</strong> Interior walls, roof trusses, and floor structure are typically wood. Condition determines recyclability.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Metal roofing and siding.</strong> Aluminum and steel exterior panels. These are easily recycled.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Copper wiring and plumbing.</strong> Valuable scrap metal found throughout the home.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Appliances, fixtures, windows.</strong> These contain mixed materials with varying recycling potential.
            </p>
          </div>
        </div>
      </section>

      {/* What Gets Recycled */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What Gets Recycled
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Materials commonly recycled from mobile home demolitions:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Steel and iron:</strong> The frame, chassis, axles, and metal framing go to scrap metal recyclers. This is the biggest recyclable component by weight</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Aluminum:</strong> Siding, window frames, and some roofing materials. Aluminum has good scrap value</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Copper:</strong> Wiring and plumbing. High scrap value makes this worth separating</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Appliances:</strong> Refrigerators, stoves, water heaters go to appliance recyclers who process the metals and safely handle refrigerants</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Responsible demolition contractors separate these materials during the demolition process rather than sending everything to the landfill.
            </p>
          </div>
        </div>
      </section>

      {/* What Typically Goes to Landfill */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What Typically Goes to Landfill
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Some materials aren't practically recyclable:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Insulation.</strong> Fiberglass batts and blown-in insulation typically go to the landfill. They're bulky and don't have recycling value.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Interior paneling and drywall.</strong> The composite materials and finishes in mobile home walls usually aren't recyclable.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Vinyl flooring and carpet.</strong> These end up as landfill material in most cases.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Damaged or contaminated wood.</strong> Water-damaged, rotted, or treated wood usually can't be recycled.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Mixed debris.</strong> When materials are too intermingled to separate economically, they go to the landfill as construction debris.
            </p>
          </div>
        </div>
      </section>

      {/* Hazardous Materials */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Hazardous Materials Get Special Handling
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Some mobile home materials require special disposal:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Asbestos.</strong> Found in some older mobile homes in flooring, insulation, and siding. Must be removed by licensed abatement contractors and disposed of at approved facilities.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Lead paint.</strong> Pre-1978 homes may have lead-based paint. Requires careful handling to prevent contamination.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Refrigerants.</strong> Air conditioners and refrigerators contain refrigerants that must be recovered, not released. Appliance recyclers handle this.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Mercury switches and thermostats.</strong> Older thermostats and some electrical switches contain mercury. These get separated for proper disposal.
            </p>
          </div>
        </div>
      </section>

      {/* The Sorting Process */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              How Materials Get Sorted
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Demolition contractors use different approaches to material separation:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>On-site sorting.</strong> Metals are separated during demolition and loaded onto separate trailers. This is most efficient for high-value materials like copper and aluminum.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Transfer station sorting.</strong> Some contractors haul mixed loads to facilities where materials are sorted. This works for lower-volume recycling.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Salvage before demolition.</strong> Valuable items like working appliances, fixtures, or architectural elements may be removed intact before demolition begins.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Scrap yard processing.</strong> Steel and aluminum loads go to scrap yards where they're further processed for industrial recycling.
            </p>
          </div>
        </div>
      </section>

      {/* Where Materials End Up */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Where Treasure Valley Materials Go
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Local destinations for mobile home demolition materials:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Scrap metal recyclers.</strong> Several facilities in the Boise area accept steel, aluminum, copper, and other metals from demolition projects.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Appliance recyclers.</strong> Specialized facilities handle refrigerators, stoves, and other appliances, recovering metals and properly disposing of hazardous components.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Ada County Landfill.</strong> Non-recyclable construction debris goes to Hidden Hollow Landfill or appropriate transfer stations.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Hazardous waste facilities.</strong> Asbestos and other hazardous materials go to specially permitted disposal facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Environmental Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              How much actually gets recycled?
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              A typical mobile home demolition recovers roughly 50-70% of materials by weight for recycling when done by a conscientious contractor. The steel frame alone represents a significant portion.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Metal recycling has real environmental benefits—recycled steel requires 60% less energy than producing new steel from ore. Aluminum recycling saves even more energy.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Choosing a demolition contractor who separates and recycles materials is better for the environment than one who dumps everything at the landfill. It can also affect your price, since scrap metal has value.
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
              Mobile home demolition doesn't have to mean everything goes to the landfill. Steel, aluminum, copper, and appliances are commonly recycled. Hazardous materials get proper handling. What remains goes to appropriate disposal facilities.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              When getting demolition quotes, ask about the contractor's recycling practices. Responsible contractors separate materials as part of their standard process.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We prioritize recycling valuable materials from every mobile home we demolish in the Treasure Valley. It's better for the environment and keeps disposal costs down.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Mobile Home Demolition?
            </h2>
            <p className="text-gray-600 mb-8">
              We handle demolition responsibly—recycling what we can and properly disposing of the rest. Serving Boise, Meridian, Nampa, and the Treasure Valley.
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
            More Mobile Home Demolition Resources
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
