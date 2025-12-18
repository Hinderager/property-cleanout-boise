import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Where to Place a Dumpster: Boise Placement Guide | Dumpster Rental Pros',
  description: 'Best practices for dumpster placement in Boise. Protect your property, avoid fines, and make loading easy.',
  alternates: {
    canonical: 'https://boise-dumpster-rental.com/blogs/where-to-place-dumpster',
  },
}

export default function WhereToPlaceDumpster() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/dumpster-placement-guide.webp"
          alt="Dumpster Placement Guide for Boise"
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
            Where Should You Place Your Dumpster?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Dumpster placement seems simple until you realize the wrong spot can damage your driveway, block access, violate city rules, or make loading a pain. A little planning goes a long way.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's what Boise homeowners need to consider when choosing where to put their dumpster.
            </p>
          </div>
        </div>
      </section>

      {/* Best Placement Spots */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Best Placement Locations
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              In order of preference, here's where dumpsters typically work best:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Your driveway.</strong> This is usually the easiest option. It's your property, no permit needed, and driveways are designed to handle vehicle weight. Most 10-15 yard dumpsters fit in a standard Boise driveway without blocking garage access.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>A concrete or asphalt pad.</strong> Any solid surface on your property works. Patios, parking pads, or other paved areas can handle the weight without damage.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Gravel or compacted areas.</strong> These can work but may show some indentation from the weight. Acceptable if you don't mind some settling.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Street placement.</strong> When your driveway won't work, street placement is an option—but requires a permit from the City of Boise. More on that below.
            </p>
          </div>
        </div>
      </section>

      {/* Protecting Your Property */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Protecting Your Property
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              A loaded dumpster is heavy—several tons heavy. Here's how to prevent damage:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Use boards under the wheels.</strong> Placing plywood or 2x10 boards under the dumpster wheels distributes weight and prevents cracking on driveways or indentation on softer surfaces. Most rental companies can provide these.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Avoid placing on grass.</strong> Dumpsters will kill grass and leave ruts. If lawn placement is unavoidable, expect to reseed or sod afterward.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Keep away from underground utilities.</strong> Don't place heavy dumpsters over septic tanks, shallow water lines, or sprinkler systems.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Watch for overhead obstructions.</strong> Delivery trucks need clearance to drop off and pick up. Check for low branches, power lines, or other overhead obstacles.
            </p>
          </div>
        </div>
      </section>

      {/* Street Permits */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Street Placement and Permits
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              If you need to place the dumpster in the street (no driveway, blocked access, etc.), you'll need a permit:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>City of Boise permit.</strong> The city requires a permit for placing dumpsters or other containers in the public right-of-way. The permit typically costs $30-50 and is issued for a specific time period.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Placement requirements.</strong> The city will specify where the dumpster can be placed—usually not blocking traffic, fire hydrants, or neighbor access.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Reflective markers.</strong> Dumpsters in the street typically need reflective markers or cones for visibility, especially at night.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Other jurisdictions.</strong> Meridian, Nampa, Caldwell, and other Treasure Valley cities have their own requirements. Check with your local jurisdiction.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Considerations */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Practical Loading Considerations
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Placement affects how easy or hard loading will be:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Close to the debris source:</strong> The closer the dumpster to where debris is coming from, the easier the job. Walking heavy items across the yard gets old fast</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Door access:</strong> Most dumpsters have a door on one end for walk-in loading. Make sure the door isn't blocked by a wall or fence</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Throwing clearance:</strong> You need room to stand and toss items over the side. Don't box yourself in</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Wheelbarrow access:</strong> If you're using wheelbarrows, plan a clear path from debris to dumpster</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Multiple access points:</strong> Being able to approach from different sides makes loading more efficient</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOA Considerations */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              HOA and Neighbor Considerations
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Many Boise-area neighborhoods have rules about dumpsters:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Check HOA rules.</strong> Some HOAs require advance approval for dumpsters. Some restrict placement locations or duration. A few prohibit them entirely.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Talk to neighbors.</strong> If the dumpster will be visible from their property or might affect their access, a heads-up is courteous. Most neighbors are understanding when you explain it's temporary.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Keep it tidy.</strong> Don't let debris pile up around the dumpster. Keep the area clean and you'll have fewer issues with neighbors or HOAs.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Logistics */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Preparing for Delivery
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Before the truck arrives:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Clear the drop zone.</strong> Move vehicles, bikes, toys, and anything else from the area where the dumpster will go.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Check truck access.</strong> Delivery trucks need about 50-60 feet of straight approach and room to maneuver. Make sure they can get in and out.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Mark the spot if needed.</strong> If you won't be home for delivery, clearly mark where you want the dumpster placed.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Have boards ready.</strong> If you're providing plywood for surface protection, have it in place before the truck arrives.
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
              The best dumpster placement balances convenience (close to the work), property protection (solid surface, boards if needed), and compliance (permits for street placement, HOA rules).
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Most Boise-area driveways work fine for standard dumpster sizes. If you have concerns about access or placement, mention them when you book—we can often spot potential issues and suggest solutions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              A few minutes of planning prevents headaches during your project.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Questions About Placement?
            </h2>
            <p className="text-gray-600 mb-8">
              We can help you figure out the best spot for your dumpster. Call and describe your setup—we've seen most situations before.
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
