import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Ruler, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What Size Dumpster Do I Need? Boise Sizing Guide | Dumpster Rental Pros',
  description: 'How to choose the right dumpster size for your project. Avoid paying too much or running out of space with our Boise homeowner guide.',
  alternates: {
    canonical: 'https://boise-dumpster-rental.com/blogs/what-size-dumpster-do-i-need',
  },
}

export default function WhatSizeDumpsterDoINeed() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/dumpster-size-guide.webp"
          alt="Dumpster Size Guide for Boise"
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
            What Size Dumpster Do I Need?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Choosing the wrong dumpster size is one of the most common mistakes people make. Go too small and you're either cramming things in or paying for a second dumpster. Go too big and you're paying for capacity you don't need.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's how to get it right.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Sizes */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Ruler className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Understanding Dumpster Sizes
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Dumpster sizes are measured in cubic yards—that's how much volume they hold. Here's what the common sizes look like:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>10-yard dumpster:</strong> About 12 feet long, 8 feet wide, and 3.5 feet high. Holds roughly 3 pickup truck loads of debris. Small footprint, often fits in a standard driveway.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>15-yard dumpster:</strong> About 14 feet long, 8 feet wide, and 4.5 feet high. Holds 4-5 pickup truck loads. Good middle ground between capacity and size.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>20-yard dumpster:</strong> About 22 feet long, 8 feet wide, and 4.5 feet high. Holds 6-8 pickup truck loads. The most popular size for home projects.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>30-yard dumpster:</strong> About 22 feet long, 8 feet wide, and 6 feet high. Holds 9-12 pickup truck loads. For large projects or commercial work.
            </p>
          </div>
        </div>
      </section>

      {/* Project-Based Recommendations */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Size Recommendations by Project Type
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Based on what we typically see with Boise-area projects:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Garage or basement cleanout:</strong> 10-15 yards, unless heavily packed</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Single room renovation:</strong> 10 yards is usually enough</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Kitchen or bathroom remodel:</strong> 10-15 yards depending on scope</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Whole-house cleanout:</strong> 20-30 yards depending on house size and contents</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Roofing project (up to 2,000 sq ft):</strong> 15-20 yards</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Deck removal:</strong> 10-20 yards depending on deck size</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Yard cleanup:</strong> 10-15 yards for most residential yards</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>New construction debris:</strong> 20-30 yards typically needed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pickup Truck Method */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Pickup Truck Estimation Method
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              If you've ever loaded a pickup truck, you can estimate dumpster size:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              One heaping pickup truck load equals roughly 3 cubic yards of debris. A level load is about 2 cubic yards.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              So if you're looking at your garage and thinking "that's probably 4-5 truck loads to the dump," you're looking at about 12-15 cubic yards of debris. A 15-yard dumpster would work, or a 20-yard if you want extra room.
            </p>

            <p className="text-gray-600 leading-relaxed">
              This method isn't exact, but it gives you a reasonable starting point.
            </p>
          </div>
        </div>
      </section>

      {/* When to Size Up */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When to Go Bigger
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Consider sizing up if:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>You're between sizes.</strong> If your estimate puts you right between a 15-yard and 20-yard, go with the 20. The price difference is usually less than the cost of a second dumpster if you run out of space.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>You haven't done a thorough inventory.</strong> People consistently underestimate how much stuff they have. If you haven't really dug into the project yet, add a buffer.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Bulky items are involved.</strong> Furniture, mattresses, and large items take up more space than their weight suggests. They don't pack efficiently.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>The project might expand.</strong> "While we're at it" is a common phrase during cleanouts. If there's a chance the scope grows, plan for it.
            </p>
          </div>
        </div>
      </section>

      {/* When Smaller Works */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When a Smaller Dumpster Works
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              A smaller dumpster might be the right choice when:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Space is limited.</strong> If your driveway is small or access is tight, a 10-yard might be your only option regardless of debris volume.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Materials are heavy.</strong> If you're disposing of concrete, roofing, or other heavy materials, you'll hit weight limits before volume limits. A smaller dumpster with appropriate weight allowance may be better.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Budget is tight.</strong> If you're certain about the amount of debris and price is a concern, a smaller size saves money. Just be confident in your estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Weight vs Volume */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Volume vs. Weight: Both Matter
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Remember that dumpsters have both a volume limit (size) and a weight limit. You can hit either one first:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Light, bulky debris (furniture, household items):</strong> You'll typically fill the volume before hitting weight limits.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Heavy, dense debris (concrete, roofing, dirt):</strong> You'll hit weight limits with the dumpster only partially full.
            </p>

            <p className="text-gray-600 leading-relaxed">
              When you get a quote, make sure you understand both the volume size and the included weight allowance. This helps you choose appropriately.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              For most Boise homeowners doing a cleanout or renovation, a 15 or 20-yard dumpster is the sweet spot. It's big enough to handle typical projects without being excessive.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              When in doubt, describe your project to the rental company. We've seen thousands of projects and can usually estimate pretty accurately what you'll need.
            </p>

            <p className="text-gray-600 leading-relaxed">
              It's better to have a little extra space than to run out. But you also don't need to pay for a 30-yard when a 15 will do. Finding that balance is what we help with.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Not Sure What Size You Need?
            </h2>
            <p className="text-gray-600 mb-8">
              Tell us about your project and we'll recommend the right size. Free advice, no obligation.
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
