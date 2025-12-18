import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Scale, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile Home Removal vs Demolition: Which Option Is Right? | Mobile Home Demolition Pros',
  description: 'Should you have your mobile home moved or demolished? Here\'s how to decide which option makes sense for your situation.',
  alternates: {
    canonical: 'https://mobile-home-demolition-boise.com/blogs/mobile-home-removal-vs-demolition',
  },
}

export default function MobileHomeRemovalVsDemolition() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/removal-vs-demolition.webp"
          alt="Mobile Home Removal vs Demolition"
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
            Mobile Home Removal vs Demolition: Which Is Right?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You need a mobile home gone. But do you have it moved somewhere else, or demolished on site? Both options get the same end result—an empty lot—but they work very differently and have different cost implications.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's how to figure out which approach makes sense for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* What's the Difference */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                What's the Difference?
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Removal (also called relocation):</strong> The mobile home is lifted off its foundation, placed on a transport trailer, and moved to a new location. The structure stays intact. Someone else ends up with the home—either as a buyer, donation recipient, or someone who wants it for another purpose.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Demolition:</strong> The mobile home is torn down on site. Materials are hauled away, with recyclable components (metal, appliances) separated from materials bound for the landfill. Nothing remains but the foundation—which may also be removed.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Both end with an empty lot. The question is which path gets you there.
            </p>
          </div>
        </div>
      </section>

      {/* When Removal Makes Sense */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              When Removal Makes Sense
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Relocation works best when certain conditions are met:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>The home is in good condition:</strong> Structurally sound, no major water damage, not falling apart. It needs to survive transport</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Good access for transport:</strong> Wide enough roads, no low bridges, room to maneuver a mobile home on a trailer</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Someone wants it:</strong> A buyer, charity, or someone with a use for the home. Otherwise there's nowhere for it to go</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Newer model:</strong> Post-1976 HUD-code homes are more likely to be movable. Older models often aren't worth the cost</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              If you can find a buyer, removal might cost you nothing—or even make you money. But that "if" is often the catch.
            </p>
          </div>
        </div>
      </section>

      {/* When Demolition Makes Sense */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When Demolition Makes Sense
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Demolition is usually the practical choice when:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>The home is in poor condition.</strong> Water damage, structural problems, mold, outdated systems—no one wants to buy or move a home that needs more repairs than it's worth.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>It's an older model.</strong> Pre-1976 mobile homes were built to different (lesser) standards. Finding someone to move them—and finding a place that'll accept them—is difficult.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Access is limited.</strong> Narrow driveways, overhanging trees, tight turns, low power lines—if a transport trailer can't get in and out, removal isn't an option.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>No buyer interest.</strong> If you've tried to give it away and can't find takers, demolition is the realistic path forward.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>You're in a hurry.</strong> Demolition can typically be scheduled within days to weeks. Finding a buyer and coordinating removal can take months—if it happens at all.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Cost Comparison
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Costs vary widely, but here's the general picture in the Treasure Valley:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Removal costs (if you pay for it):</strong> $3,000-$10,000+ depending on distance, home size, and complexity. Transport permits, pilot cars, and site prep add up. Most people who pay for removal do so because they're relocating the home themselves.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Removal costs (if you find a buyer):</strong> Zero to you—possibly even a sale price—if someone wants the home and will pay for moving it. But finding that buyer isn't guaranteed.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Demolition costs:</strong> $3,000-$8,000 for most mobile homes in the Boise area, including hauling and disposal. More for double-wides or homes with complications.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The math often favors demolition unless you actually have a buyer lined up. Searching for a buyer who may not exist wastes time and prolongs the problem.
            </p>
          </div>
        </div>
      </section>

      {/* The Removal Reality Check */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Removal Reality Check
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Many people assume they can sell or give away their mobile home to avoid demolition costs. Sometimes that works. Often it doesn't:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>The used mobile home market is tough.</strong> Buyers who want older mobile homes can usually find them cheaper already in place at mobile home parks.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Move-in ready parks are picky.</strong> Many parks won't accept homes older than 10-15 years. Older homes have fewer places they can legally be placed.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Moving costs are high.</strong> Even if the home is free, the move itself costs thousands. That limits your buyer pool to people with both land and moving budget.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Time costs money too.</strong> Every month you spend looking for a buyer is another month of property taxes, lot rent (if applicable), and delayed plans for your property.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              How to Decide
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Ask yourself these questions:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Is the home in movable condition?</strong> If it's falling apart, removal isn't realistic anyway.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Do you already have a buyer or recipient?</strong> If yes, explore removal. If you're hoping to find one, be realistic about your timeline.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>How urgent is this?</strong> If you need the lot cleared soon—for a sale, new construction, or code compliance—demolition is more predictable.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>What's the home's age?</strong> Pre-1976 homes are almost always demolition candidates.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Can transport access your site?</strong> If getting a mobile home out would require moving power lines or removing fences, factor that into the cost comparison.
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
              Removal is great when it works—you might get paid, or at least avoid demolition costs. But it only works when the home is in good condition, transportable, and someone actually wants it.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              For most mobile homes in the Treasure Valley—especially older ones or those in poor condition—demolition is the practical path forward. It's a known cost on a predictable timeline.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Not sure which option fits your situation? We can take a look and give you an honest assessment of your options.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Help Deciding?
            </h2>
            <p className="text-gray-600 mb-8">
              We can assess your mobile home and give you a realistic picture of your options. Free estimates, honest advice.
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
