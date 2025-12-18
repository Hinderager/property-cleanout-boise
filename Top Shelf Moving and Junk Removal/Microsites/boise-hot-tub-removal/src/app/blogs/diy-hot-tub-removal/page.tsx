import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Wrench, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Can You Remove a Hot Tub Yourself? (Honest Answer) | Hot Tub Removal Pros',
  description: 'DIY hot tub removal is possible but comes with real challenges. Here\'s what you\'d need to do it right in Boise.',
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/blogs/diy-hot-tub-removal',
  },
}

export default function DIYHotTubRemoval() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/diy-hot-tub-removal.webp"
          alt="DIY Hot Tub Removal"
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
            Can You Remove a Hot Tub Yourself?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You're looking at that old hot tub and thinking: how hard could it be? With enough friends and a truck, you could probably handle this yourself, right?
            </p>
            <p className="text-gray-600 leading-relaxed">
              The honest answer is: yes, it's possible. But there's a lot more involved than most people realize. Here's a realistic breakdown of what DIY hot tub removal actually requires.
            </p>
          </div>
        </div>
      </section>

      {/* What You're Actually Dealing With */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                What You're Actually Dealing With
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              A typical hot tub weighs 500-1,000 pounds empty. Some larger models hit 1,500 pounds. That's before you account for:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Size and bulk.</strong> Most hot tubs are 7-8 feet across and won't fit through gates or doorways. You can't just roll it out to the curb.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Location challenges.</strong> Many Boise backyards have hot tubs wedged into corners, on decks, or behind fencing. Getting it out often means going through or over obstacles.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Electrical disconnection.</strong> Hot tubs are hardwired to 220-240 volt circuits. You'll need an electrician to safely disconnect—this isn't something to DIY.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Disposal.</strong> Even if you get it to the curb, garbage collection won't take it. You need to get it to a transfer station or recycling facility—which means a truck or trailer big enough to haul it.
            </p>
          </div>
        </div>
      </section>

      {/* The DIY Approach */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The DIY Approach: What It Actually Takes
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              If you're determined to do this yourself, here's the realistic process:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Drain it completely.</strong> This takes a few hours with a sump pump or garden hose. Make sure the water drains away from your foundation and your neighbor's property.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Disconnect utilities.</strong> Hire an electrician to disconnect the 220V line. If it has a gas heater, you'll need the gas disconnected too.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Cut it up.</strong> Unless you have a crane, you're cutting the tub into pieces. You'll need a reciprocating saw with demolition blades, protective gear, and several hours of sweaty work.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Haul the pieces.</strong> Even cut up, you're looking at multiple trips to the landfill or transfer station. Ada County's Hidden Hollow Landfill charges by weight.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Clean up.</strong> Cutting a hot tub creates fiberglass dust and debris. You'll need to clean up and properly dispose of all materials.
            </p>
          </div>
        </div>
      </section>

      {/* The Real Costs of DIY */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              The Real Costs of DIY
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              "Free" DIY removal isn't actually free:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Electrician:</strong> $75-150 for disconnect</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Saw blades:</strong> $30-50 (you'll go through several)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Dump fees:</strong> $50-100+ depending on weight</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Truck rental:</strong> $50-100 if you don't have a trailer</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Your time:</strong> 6-10 hours of labor (plus recruiting help)</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Total DIY cost: typically $200-400, plus a full day of hard work. And that assumes everything goes smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* When DIY Makes Sense */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When DIY Actually Makes Sense
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              DIY hot tub removal can work if:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Easy access.</strong> The hot tub is on ground level with clear access to your driveway or street. No fences, decks, or tight corners.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>You have the right tools.</strong> A heavy-duty reciprocating saw, safety gear (respirator, goggles, gloves), and a trailer or truck.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Strong helpers available.</strong> You need 2-3 people who can lift heavy, awkward pieces and don't mind getting dirty.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>You enjoy this kind of project.</strong> If demolition sounds like fun rather than torture, and you have a free Saturday, go for it.
            </p>
          </div>
        </div>
      </section>

      {/* When to Call a Pro */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When to Call Professionals
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Professional removal makes more sense when:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Access is complicated.</strong> The tub is on a deck, behind fencing, in a basement, or requires navigating obstacles. Pros have equipment and techniques for tricky situations.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>You're on a deadline.</strong> Need it gone this week? Pros can typically schedule within days and complete in hours.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Physical limitations.</strong> If heavy lifting isn't safe for you, don't risk injury. Hot tub pieces are awkward and heavy.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Your time is valuable.</strong> When you factor in your time, the price difference between DIY and professional removal often isn't that significant.
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
              Can you remove a hot tub yourself? Yes, if you have easy access, the right tools, willing helpers, and a full day to dedicate to the project.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Is it worth it? That depends on how you value your time and energy. For many Boise homeowners, the convenience of professional removal—typically a few hundred dollars for same-day service—outweighs the hassle of DIY.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Either way, now you know what you're actually getting into.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Want a Free Quote?
            </h2>
            <p className="text-gray-600 mb-8">
              We'll give you an honest estimate for hot tub removal. If DIY makes more sense for your situation, we'll tell you.
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
