import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hot Tub Removal Cost in Boise: What to Budget | Hot Tub Removal Pros',
  description: 'Hot tub removal in Boise typically costs $300-600. Here\'s what affects the price and what you should expect.',
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/blogs/hot-tub-removal-cost-boise',
  },
}

export default function HotTubRemovalCostBoise() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/hot-tub-removal-cost.webp"
          alt="Hot Tub Removal Cost in Boise"
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
            Hot Tub Removal Cost in Boise
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              "How much to remove a hot tub?" It's the first question everyone asks. The honest answer for the Boise area: most hot tub removals run $300-600.
            </p>
            <p className="text-gray-600 leading-relaxed">
              But that range is pretty wide. Here's what actually determines where your job falls on that spectrum—and what might push it higher or lower.
            </p>
          </div>
        </div>
      </section>

      {/* Typical Price Ranges */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Typical Price Ranges
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Here's what hot tub removal typically costs in Boise, Meridian, Nampa, and the Treasure Valley:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Basic removal ($300-400):</strong> Standard-size hot tub with easy ground-level access. Open gate or driveway access, short carry to the truck. No complications.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Standard removal ($400-500):</strong> Average job with minor access challenges. Maybe a fence to work around, a deck to navigate, or a moderately heavy tub.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Complex removal ($500-700+):</strong> Large hot tubs, difficult access, deck removal needed, or multiple obstacles. Second-story decks, crane requirements, or below-ground installations.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These prices include labor, hauling, and disposal at licensed facilities. Most reputable companies won't charge extra for normal disposal.
            </p>
          </div>
        </div>
      </section>

      {/* What Affects the Price */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What Affects the Price
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              These factors make the biggest difference in your quote:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Access:</strong> Can we get equipment close? Is there a clear path? Jobs in tight backyards or with limited truck access take longer</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Size and weight:</strong> A 4-person portable tub is very different from an 8-person built-in. Larger tubs require more labor and sometimes different equipment</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Deck or platform removal:</strong> If the tub sits on a custom deck that also needs demo, that's additional work</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>In-ground vs. above-ground:</strong> In-ground or partially sunk hot tubs require excavation or cutting concrete, significantly increasing cost</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Location:</strong> Boise, Meridian, and Nampa have standard pricing. Jobs in Eagle foothills, rural areas, or farther out may have travel fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Usually Included */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What's Usually Included
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              A legitimate hot tub removal quote should include:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Disconnection.</strong> We'll disconnect plumbing and handle drainage. Note: electrical disconnect by a licensed electrician is typically separate—many homeowners arrange this themselves.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Breakdown and removal.</strong> We cut it up on-site if needed, carry everything out, and load it for hauling.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Hauling and disposal.</strong> Transport to appropriate facilities. Most hot tub materials can be recycled.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Basic cleanup.</strong> We'll sweep the area and leave it tidy. If you need landscaping repair or concrete work after, that's a separate service.
            </p>
          </div>
        </div>
      </section>

      {/* What's NOT Included */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What's Usually NOT Included
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Be aware of potential additional costs:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Electrical disconnection.</strong> You'll need a licensed electrician for the 220V disconnect. Expect $75-150 for this service.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Fence removal/replacement.</strong> If a fence section needs to come out for access, that's often extra—or arrange it yourself beforehand.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Concrete pad removal.</strong> The hot tub base slab usually stays. Concrete demo is a separate service if you want it gone.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Landscaping restoration.</strong> We remove the tub. What you do with the space afterward is up to you.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Accurate Quotes */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Getting Accurate Quotes
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              To get realistic pricing:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Send photos.</strong> Pictures of the hot tub, access path, and any obstacles help companies quote accurately without a site visit.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Measure if you can.</strong> Know the approximate dimensions and whether it's portable or built-in.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Mention obstacles.</strong> Steps, narrow gates, long carries, deck situations—anything that might complicate access.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Ask what's included.</strong> Make sure you understand exactly what the quote covers before comparing prices.
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
              Most Boise-area hot tub removals cost $300-600, with the final price depending mainly on access difficulty and tub size. Complex jobs with access challenges or built-in installations can run higher.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              When comparing quotes, make sure you're comparing apples to apples. The cheapest quote that doesn't include disposal isn't actually cheaper.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Get a few estimates, ask questions, and hire someone who can explain exactly what you're paying for.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Get a Free Quote
            </h2>
            <p className="text-gray-600 mb-8">
              We provide straightforward pricing for hot tub removal throughout the Treasure Valley. No hidden fees, no surprises.
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
            More Hot Tub Resources
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
