import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClipboardList, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Hot Tub Removal Actually Works | Hot Tub Removal Pros',
  description: 'Getting rid of a hot tub involves more than just hauling it away. Here\'s the full process from start to finish.',
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/blogs/hot-tub-removal-process',
  },
}

export default function HotTubRemovalProcess() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/hot-tub-removal-process.webp"
          alt="Hot Tub Removal Process"
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
            How Hot Tub Removal Actually Works
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've decided the hot tub needs to go. But what actually happens when a removal crew shows up? How do they get a 500+ pound tub out of your backyard?
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's a step-by-step look at how professional hot tub removal works, so you know exactly what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1: Assessment */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Step 1: Assessment and Planning
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Before any removal happens, we need to understand what we're dealing with:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Hot tub specs.</strong> Size, weight, portable vs. built-in, current condition. A lightweight inflatable is very different from a 1,200-pound acrylic tub.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Access evaluation.</strong> How do we get it out? Through the gate? Over the fence? Do we need to remove deck boards? This often determines whether we remove it whole or cut it up.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Utility status.</strong> Is the electrical already disconnected? Is it drained? If not, we'll need to address these before removal.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Equipment needs.</strong> Based on the situation, we determine what tools and how many crew members the job requires.
            </p>
          </div>
        </div>
      </section>

      {/* Step 2: Preparation */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Step 2: Preparation
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              On removal day, we start with prep work:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Electrical disconnect.</strong> If you haven't already had an electrician disconnect the 220V power, this needs to happen first. We won't work on an energized tub.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Draining.</strong> If there's still water in the tub, we drain it. This typically takes 20-30 minutes with a submersible pump. The water goes to an appropriate drainage area away from foundations.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Disconnect plumbing.</strong> Any water lines connected to the tub get capped or disconnected.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Clear the path.</strong> We move any obstacles between the tub and our truck—patio furniture, plants, anything in the way.
            </p>
          </div>
        </div>
      </section>

      {/* Step 3: Removal Method */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Step 3: The Actual Removal
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              How we get it out depends on your situation:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Whole removal:</strong> If access allows, we tip the tub on its side and roll/carry it out intact. This works when there's a wide gate or clear path. Fastest option</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Cut and carry:</strong> More common for Boise backyards with narrow access. We cut the tub into manageable sections using reciprocating saws, then carry the pieces out</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Crane lift:</strong> For second-story decks or situations with no ground-level access. This is rare and adds significant cost</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Fence panel removal:</strong> Sometimes the easiest solution is temporarily removing a fence section to create access</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Most residential jobs in the Treasure Valley use the cut-and-carry method. It sounds more labor-intensive, but it's often faster and safer than trying to maneuver a full tub through tight spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Step 4: Loading and Hauling */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Step 4: Loading and Hauling
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Once the tub is out:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Loading.</strong> Pieces or the whole tub go into our truck or trailer. We use proper tie-downs to secure everything for transport.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Transport.</strong> We haul the materials to appropriate facilities. In the Boise area, that's typically one of the transfer stations or recycling centers.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Proper disposal.</strong> Hot tubs contain recyclable materials—acrylic, fiberglass, metal, foam insulation. Good companies sort these rather than dumping everything in a landfill.
            </p>
          </div>
        </div>
      </section>

      {/* Step 5: Cleanup */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Step 5: Site Cleanup
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              We don't just leave a mess:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Debris removal.</strong> Any screws, insulation, plastic bits, or debris from cutting gets cleaned up and hauled away.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Sweeping.</strong> We sweep the area where the tub sat so you're left with a clean space.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>What's left.</strong> The concrete pad or deck typically stays—unless you've arranged for that to be removed too. You'll have a clean, empty space ready for whatever comes next.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              How Long Does It Take?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              The actual removal typically takes:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Simple jobs:</strong> 1-2 hours. Easy access, standard-size tub, minimal complications.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Average jobs:</strong> 2-3 hours. Some access challenges, cutting required, typical residential situation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Complex jobs:</strong> 3-5 hours. Difficult access, large tub, deck removal involved, or other complications.
            </p>

            <p className="text-gray-600 leading-relaxed">
              This doesn't include scheduling lead time. Most Boise-area companies can schedule within a few days, sometimes same-day for straightforward jobs.
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
              Professional hot tub removal is a straightforward process: assess, prep, remove, haul, clean up. Most jobs take a few hours and leave you with a clean, empty space.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The biggest variable is access. If we can get to it easily, the job goes fast. If there are obstacles, we adapt—cutting the tub, removing fence sections, or finding creative solutions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Either way, by the end of the day, that old tub is gone and you've got your yard back.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Ready to Get Rid of Your Hot Tub?
            </h2>
            <p className="text-gray-600 mb-8">
              We handle hot tub removal throughout Boise, Meridian, Nampa, and the Treasure Valley. Quick scheduling, professional service.
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
