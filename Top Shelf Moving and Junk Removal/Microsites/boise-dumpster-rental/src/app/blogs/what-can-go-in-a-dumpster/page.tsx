import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What Can and Can\'t Go in a Dumpster in Boise? | Dumpster Rental Pros',
  description: 'Complete guide to allowed and prohibited items in dumpster rentals. Avoid extra fees by knowing the rules before you load.',
  alternates: {
    canonical: 'https://boise-dumpster-rental.com/blogs/what-can-go-in-a-dumpster',
  },
}

export default function WhatCanGoInADumpster() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/dumpster-allowed-items.webp"
          alt="What Can Go in a Dumpster"
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
            What Can and Can't Go in a Dumpster?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You might think you can throw anything in a dumpster. It's a dumpster, right? Actually, there's a fairly long list of things that can't go in—and putting prohibited items in can result in extra charges.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's what you need to know about dumpster contents in the Boise area.
            </p>
          </div>
        </div>
      </section>

      {/* Generally Accepted Items */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What You CAN Put in a Dumpster
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              The good news is most household and construction debris is fine. Generally accepted items include:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Household items:</strong> Furniture, appliances (with exceptions noted below), clothing, toys, books, kitchenware, and general household junk.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Construction debris:</strong> Lumber, drywall, roofing materials, siding, flooring, insulation (non-asbestos), concrete and brick (with weight considerations).
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Yard waste:</strong> Branches, brush, grass clippings, leaves, dirt. Some areas prefer separate yard waste disposal, so ask.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>General debris:</strong> Boxes, packaging, old carpeting, mattresses and box springs (policies vary), electronics (some types—see prohibited list).
            </p>
          </div>
        </div>
      </section>

      {/* Prohibited Items */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                What You CAN'T Put in a Dumpster
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              These items are prohibited in standard dumpsters—either by law, for safety reasons, or because they require special handling:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Hazardous materials:</strong> Paint, oil, gasoline, solvents, pesticides, herbicides, pool chemicals, automotive fluids, and other hazardous household chemicals. Idaho law prohibits these in regular landfills.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Appliances with refrigerants:</strong> Refrigerators, freezers, air conditioners, and dehumidifiers contain refrigerants that must be properly removed before disposal. These require special handling.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Tires:</strong> Tires aren't accepted at most landfills and require separate recycling. They can be disposed of but need special arrangements.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Batteries:</strong> Car batteries, lithium batteries, and other battery types are hazardous waste. They can cause fires in garbage trucks and landfills.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Medical waste:</strong> Needles, syringes, medications, and other medical waste require proper disposal through pharmacies or medical waste programs.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Asbestos:</strong> Asbestos-containing materials must be handled by licensed contractors and taken to special disposal facilities.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Hot ashes or coals:</strong> These can start fires. Make sure any fireplace or fire pit debris is completely cold before disposal.
            </p>
          </div>
        </div>
      </section>

      {/* Why These Rules Exist */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Why These Rules Exist
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              The prohibited items list isn't arbitrary. Here's why these restrictions matter:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Environmental protection:</strong> Hazardous materials can contaminate soil and groundwater at landfills</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Worker safety:</strong> Landfill workers and truck operators handle this material—hazards put them at risk</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Fire prevention:</strong> Batteries, flammables, and hot materials can cause fires in trucks or at facilities</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Legal requirements:</strong> Federal and Idaho state law regulate disposal of many materials</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Equipment damage:</strong> Some materials can damage compactors, trucks, or processing equipment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens If You Include Prohibited Items */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What Happens If Prohibited Items Are Found
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Dumpster loads are often inspected at transfer stations or landfills. If prohibited items are found:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Removal fees.</strong> You'll typically be charged $50-150+ to have the item removed and properly disposed of. This is on top of your rental cost.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Load rejection.</strong> In some cases, the entire load may be rejected, requiring sorting and additional trips.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Environmental penalties.</strong> For serious violations, there can be fines from environmental agencies.
            </p>

            <p className="text-gray-600 leading-relaxed">
              It's not worth hiding prohibited items at the bottom of the dumpster. They're often found, and the hassle and cost isn't worth it.
            </p>
          </div>
        </div>
      </section>

      {/* How to Dispose of Prohibited Items */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              How to Dispose of Prohibited Items in Ada County
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              There are proper disposal options for everything on the prohibited list:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Household hazardous waste:</strong> Ada County operates a Household Hazardous Waste facility that accepts paint, chemicals, batteries, and other hazardous items from residents.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Appliances with refrigerants:</strong> Many appliance recyclers will take these, or they can be taken to the landfill with proper refrigerant removal documentation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Tires:</strong> Tire shops and some recycling centers accept tires for a fee. Some tire shops will take old tires when you buy new ones.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Electronics:</strong> Best Buy, Staples, and other retailers have electronics recycling programs. Ada County also holds periodic e-waste collection events.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Medications:</strong> Many Boise-area pharmacies have medication take-back programs. The police department also accepts medications.
            </p>
          </div>
        </div>
      </section>

      {/* Weight Considerations */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              A Note on Heavy Materials
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Some materials are allowed but come with weight considerations:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Concrete, brick, and stone:</strong> These are extremely heavy. A dumpster full of concrete will exceed weight limits quickly. If you have a lot of masonry, you may need a special "clean concrete" dumpster.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Roofing materials:</strong> Shingles are heavy. A typical residential roof can weigh several tons. Make sure your weight allowance accounts for this.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Dirt and gravel:</strong> Like concrete, very heavy. Not usually a good use of a regular dumpster rental.
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
              Most of what you're getting rid of during a cleanout or renovation can go in a dumpster. The prohibited items are mainly hazardous materials, refrigerant-containing appliances, and a few specific categories.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              When in doubt, ask before you load. A quick call to your rental company can save you from fees and hassle. We'd rather answer a question than deal with a problem load.
            </p>

            <p className="text-gray-600 leading-relaxed">
              If you have prohibited items mixed in with your regular debris, handle those separately through the proper channels. It's not hard—it just takes a little planning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Questions About What Goes in Your Dumpster?
            </h2>
            <p className="text-gray-600 mb-8">
              We're happy to answer questions about specific items before you rent. Call us for a quote and we'll help you plan your project.
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
            More Dumpster Rental Resources
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
