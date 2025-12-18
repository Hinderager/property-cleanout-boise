import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ListChecks, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Prepare Your Hot Tub for Removal | Hot Tub Removal Pros',
  description: 'A few steps before removal day makes everything go smoother. Here\'s your preparation checklist.',
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/blogs/preparing-hot-tub-for-removal',
  },
}

export default function PreparingHotTubForRemoval() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/preparing-hot-tub-removal.webp"
          alt="Preparing Your Hot Tub for Removal"
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
            How to Prepare Your Hot Tub for Removal
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've scheduled the hot tub removal. Now what? A little prep work before the crew arrives makes the whole process faster and easier—and might even save you money.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's everything you need to do before removal day.
            </p>
          </div>
        </div>
      </section>

      {/* The Essential Checklist */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <ListChecks className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                The Essential Prep Checklist
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              These are the things that actually matter:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>1. Disconnect the electrical.</strong> This is the big one. Hot tubs run on 220-240V circuits that can kill you. You need a licensed electrician to safely disconnect the power. Schedule this before removal day—don't wait until the crew arrives.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>2. Drain the water.</strong> An empty tub is easier (and cheaper) to remove. You can drain it yourself using the built-in drain valve, a submersible pump, or even a garden hose siphon. Start draining the day before if using a slow method.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>3. Clear the access path.</strong> Look at the route from your hot tub to where the truck will park. Move patio furniture, planters, toys, and anything else in the way. The easier the path, the faster the job.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>4. Unlock gates.</strong> Make sure the crew can actually get to your backyard. If you won't be home, arrange access ahead of time.
            </p>
          </div>
        </div>
      </section>

      {/* Electrical Disconnect Details */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              About the Electrical Disconnect
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              This step deserves extra attention:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Don't try this yourself.</strong> Turning off the breaker isn't enough. The circuit needs to be properly disconnected at the tub and capped at the source. This is not a DIY job.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Cost is reasonable.</strong> Most Boise-area electricians charge $75-150 for a hot tub disconnect. It takes them about 30 minutes.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Schedule ahead.</strong> Electricians can be busy. Don't wait until the day before to call. Book them for the day before or morning of removal.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Some removal companies include this.</strong> Ask when booking—some companies have electricians they work with or can bundle this service.
            </p>
          </div>
        </div>
      </section>

      {/* Draining Tips */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              How to Drain Your Hot Tub
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Options for getting the water out:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Built-in drain:</strong> Most tubs have a drain valve near the bottom. Attach a garden hose and let gravity do the work. Slow but hands-off—start the night before</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Submersible pump:</strong> Drop a utility pump in the tub and pump the water out. Takes 30-60 minutes for a full tub. Rent one from Home Depot if you don't have one</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Siphon method:</strong> Fill a garden hose with water, seal both ends, put one end in the tub and the other downhill. Release and water flows. Free but slow</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Let the crew handle it:</strong> If draining yourself isn't practical, most removal companies can do it. Just expect a bit more time (and possibly cost)</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              <strong>Where to drain:</strong> Direct the water away from your foundation and your neighbor's property. A lawn area that can handle a few hundred gallons works well. Avoid draining onto hardscape where the water will run into the street.
            </p>
          </div>
        </div>
      </section>

      {/* Access Considerations */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Preparing the Access Path
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Make the crew's job easier:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Measure your gate.</strong> Standard gates are about 3 feet wide. Hot tubs are typically 7-8 feet. If the tub won't fit through whole, it will need to be cut up—which is totally normal.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Clear the yard.</strong> Move anything between the tub and the exit. Patio furniture, grills, planters, toys—all of it. The clearer the path, the faster the job.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Think about the truck.</strong> Where will the removal truck park? The closer it can get to the backyard, the easier the job. If you have a neighbor who'd let them park in their driveway for better access, it's worth asking.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Consider fence removal.</strong> Sometimes removing a fence panel temporarily is the easiest solution. If you're handy, you can do this yourself. Otherwise, mention it to the removal company—they may offer this service.
            </p>
          </div>
        </div>
      </section>

      {/* What NOT to Worry About */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What You Don't Need to Do
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Some things people worry about that aren't your problem:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Disconnecting plumbing.</strong> The crew handles this. Any water lines get capped as part of the removal.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Taking off the cover.</strong> We'll deal with the cover, steps, and accessories. You can leave them in place.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Cleaning the tub.</strong> It's going to the dump, not to a new home. Don't waste time scrubbing it.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Getting it completely bone dry.</strong> If there's a few inches of water or some standing water in the jets, that's fine. Completely empty is ideal, but a little water left over won't matter.
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
              The two essential prep tasks: get the electrical disconnected by a licensed electrician, and drain the water. Everything else is helpful but not critical.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              If you clear the path and make access easy, you'll probably save a few bucks and definitely make the removal faster.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Can't handle the prep? Don't stress—removal companies can work with unprepared tubs. It just might take a bit longer and cost a bit more. The job gets done either way.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Ready to Schedule Removal?
            </h2>
            <p className="text-gray-600 mb-8">
              We'll walk you through exactly what prep you need for your specific situation. Free estimates throughout the Treasure Valley.
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
