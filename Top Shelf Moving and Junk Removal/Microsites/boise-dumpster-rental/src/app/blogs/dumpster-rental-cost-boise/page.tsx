import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Much Does Dumpster Rental Cost in Boise? (2024 Pricing) | Dumpster Rental Pros',
  description: 'Real pricing for dumpster rentals in Boise, Meridian, and Nampa. What factors affect cost and how to avoid surprise fees.',
  alternates: {
    canonical: 'https://boise-dumpster-rental.com/blogs/dumpster-rental-cost-boise',
  },
}

export default function DumpsterRentalCostBoise() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/dumpster-rental-cost-boise.webp"
          alt="Dumpster Rental Cost in Boise"
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
            How Much Does Dumpster Rental Cost in Boise?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Pricing dumpster rentals isn't always straightforward. You'll see ranges from $200 to $600+ depending on where you look, and it's hard to know what's realistic for the Boise area specifically.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Here's what actually goes into dumpster rental pricing in the Treasure Valley, what you can expect to pay, and how to avoid surprise charges.
            </p>
          </div>
        </div>
      </section>

      {/* Price Ranges */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Typical Boise Dumpster Rental Prices
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              These ranges represent what most Boise-area homeowners pay for standard residential dumpster rentals:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>10-yard dumpster:</strong> $250-350. Good for small cleanouts, single-room renovations, or moderate yard debris. Holds roughly 3 pickup truck loads.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>15-yard dumpster:</strong> $300-400. Works for medium projects—kitchen remodels, basement cleanouts, or moving debris. Holds about 4-5 pickup truck loads.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>20-yard dumpster:</strong> $350-450. Popular for larger renovations, roofing projects, or whole-house cleanouts. Holds 6-8 pickup truck loads.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>30-yard dumpster:</strong> $400-550. For major construction projects, large demolition, or commercial work. Holds 9-12 pickup truck loads.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What's Usually Included in the Price
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Standard dumpster rental pricing typically covers:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Delivery.</strong> The dumpster is dropped off at your location. Delivery is usually included within a service area—Boise, Meridian, Nampa, Caldwell, and surrounding communities.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Rental period.</strong> Most quotes include 7-10 days. This is usually enough for residential projects. Some companies offer shorter periods (3-5 days) at lower prices if you're doing a quick cleanout.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Weight allowance.</strong> Your rental includes a certain amount of debris by weight—typically 2-4 tons depending on dumpster size. Going over incurs additional fees.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Pickup and disposal.</strong> When you're done, the dumpster is picked up and contents are taken to the appropriate disposal facility.
            </p>
          </div>
        </div>
      </section>

      {/* Extra Fees */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Fees That Can Increase Your Cost
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              The quoted price isn't always the final price. Here's where extra charges can show up:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Overage fees.</strong> If your debris weighs more than the included allowance, you'll pay extra—usually $40-75 per additional ton. Heavy materials like concrete add up fast.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Extended rental.</strong> Need the dumpster longer than the standard period? Expect $5-15 per additional day.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Prohibited items.</strong> If you put something in the dumpster that shouldn't be there (more on that in another post), removal can cost $50-150+ depending on the material.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Delivery issues.</strong> If the dumpster can't be placed where expected due to obstructions, or if a dry run is needed, there may be additional charges.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Permits.</strong> If you need to place the dumpster on a public street rather than your property, the City of Boise requires a permit. This is a separate cost, usually $30-50.
            </p>
          </div>
        </div>
      </section>

      {/* Factors That Affect Price */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What Affects Dumpster Rental Pricing
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Several factors influence what you'll pay:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Location:</strong> Delivery distance affects cost. Properties farther from disposal facilities may pay slightly more</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Debris type:</strong> Heavy materials (concrete, roofing, dirt) often cost more than household junk due to disposal fees</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Time of year:</strong> Spring and summer are busy seasons—pricing and availability can be affected</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Company:</strong> Different providers have different pricing structures and included services</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Landfill fees:</strong> Ada County disposal rates affect what rental companies charge</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Accurate Pricing */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              How to Get an Accurate Quote
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              To avoid surprises, be ready to tell the rental company:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>What you're getting rid of.</strong> Household junk, construction debris, yard waste, concrete, roofing—different materials have different costs.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Approximately how much.</strong> Describe the project. "I'm cleaning out a 3-bedroom house" is more useful than "a lot of stuff."
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Where it's going.</strong> Your driveway? Street? A tight backyard? Access affects delivery options.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>How long you need it.</strong> A weekend project is different from a month-long renovation.
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
              For most Boise homeowners, dumpster rental runs $300-450 for a typical project—cleanout, renovation, or yard work. Going bigger or dealing with heavy materials costs more.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The best way to know your actual cost is to describe your project to a rental company and get a specific quote. Ask about included weight, rental period, and what could cause additional charges.
            </p>

            <p className="text-gray-600 leading-relaxed">
              A good rental company will be upfront about pricing and help you choose the right size to avoid paying for capacity you don't need or running over weight limits.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need a Dumpster Quote?
            </h2>
            <p className="text-gray-600 mb-8">
              We'll give you a straight answer on pricing for your Boise-area project. No hidden fees, no surprises.
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
