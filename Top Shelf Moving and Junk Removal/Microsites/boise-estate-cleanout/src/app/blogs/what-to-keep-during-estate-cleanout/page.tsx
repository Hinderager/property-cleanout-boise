import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Package, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What to Keep, Donate, and Toss During an Estate Cleanout | Estate Cleanout Pros',
  description: 'A practical framework for making decisions about belongings during an estate cleanout in Boise. How to sort without regret.',
  alternates: {
    canonical: 'https://boise-estate-cleanout.com/blogs/what-to-keep-during-estate-cleanout',
  },
}

export default function WhatToKeepDuringEstateCleanout() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/estate-sorting-decisions.webp"
          alt="What to Keep During Estate Cleanout"
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
            What to Keep, Donate, and Toss
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              During an estate cleanout, you'll make hundreds of decisions about what to keep, donate, sell, or throw away. Without a framework, decision fatigue sets in fast.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's a practical approach to sorting that helps Boise families work through belongings efficiently while minimizing regret.
            </p>
          </div>
        </div>
      </section>

      {/* The Framework */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                A Simple Decision Framework
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              For each item, ask yourself:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Will I (or someone specific) actually use this?</strong> Not "could someone use this" but "will I or a specific person I have in mind actually use this item in the next year?"
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Does this hold genuine sentimental value?</strong> Not everything that belonged to the person is equally meaningful. A few carefully chosen items carry more emotional weight than boxes of stuff.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Is this worth the space it takes?</strong> Storage isn't free. Every item you keep needs a place to live. Is this item worth that space in your home?
            </p>

            <p className="text-gray-600 leading-relaxed">
              If the answer is no to all three, let it go. If you're uncertain, move to the next questions.
            </p>
          </div>
        </div>
      </section>

      {/* What to Almost Always Keep */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What to Almost Always Keep
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              These items are worth keeping regardless of practical use:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Photographs and photo albums:</strong> These are irreplaceable. Keep them, even if you don't know who's in every picture</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Personal letters and correspondence:</strong> Handwritten notes from loved ones can't be recreated</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Important documents:</strong> Even old ones might be needed for genealogy or legal purposes</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Military records and memorabilia:</strong> Historical significance and family history</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Heirloom jewelry:</strong> Even if it's not your style, these often have family significance worth preserving</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Items specifically mentioned in the will:</strong> These were singled out for a reason</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Donate */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Good Candidates for Donation
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              These items help others and clear space efficiently:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Clothing in good condition.</strong> Most families have far more clothes than anyone can use. Donate to Goodwill, Salvation Army, or local shelters.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Kitchen items.</strong> Dishes, cookware, small appliances. Most people already have what they need, but new households forming can use these.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Books.</strong> Unless there's a specific collector's item, most books can go to library sales, used bookstores, or Little Free Libraries.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Furniture in decent shape.</strong> Habitat for Humanity ReStore, St. Vincent de Paul, and other organizations accept usable furniture.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Tools and hobby supplies.</strong> Someone starting out can use these. Check with local schools, makerspaces, or community organizations.
            </p>
          </div>
        </div>
      </section>

      {/* What Can Be Sold */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What's Actually Worth Selling
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Be realistic about resale value. Most household items are worth less than people think. Items that may be worth selling:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Antiques and collectibles.</strong> If it's genuinely antique (not just old) or part of a collected series, it may have value. Get an appraisal for significant items.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Quality furniture.</strong> Solid wood pieces from known makers can sell. Particle board furniture isn't worth the effort.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Tools in good condition.</strong> Power tools, hand tools in working order have resale value on Facebook Marketplace or Craigslist.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Jewelry and precious metals.</strong> May need professional appraisal. Gold and silver have value even if pieces aren't fashionable.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Vehicles, equipment, firearms.</strong> These typically have clear market values. Firearms require proper transfer through licensed dealers.
            </p>
          </div>
        </div>
      </section>

      {/* What to Let Go */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What to Let Go Of
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              These items can go without guilt:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Duplicates.</strong> Nobody needs twelve spatulas or four coffee makers. Keep one if useful, let the rest go.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Worn-out items.</strong> Stained clothing, broken furniture, non-working appliances. If you wouldn't give it to a friend, it shouldn't go to donation either.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Outdated technology.</strong> Old TVs, computers, printers. These have minimal value and often cost to dispose of properly.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Magazines and newspapers.</strong> Unless there's a specific historic issue, these can go. Someone might want the recipes—they're all online now.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Items kept "just in case."</strong> If it's been in a box for ten years waiting to be useful, it's not going to be.
            </p>
          </div>
        </div>
      </section>

      {/* The Photo Test */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Photo Alternative
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              For items with sentimental value but no practical use, consider this:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Take a photo.</strong> The memory doesn't require the physical object. A photo of grandma's chair preserves the memory without needing to store the chair.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Create a memory book.</strong> Photograph meaningful items before letting them go. You can flip through the book whenever you want.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Keep one representative item.</strong> You don't need the whole collection. One teacup from the set, one tool from the workshop, one book from the shelf can represent the whole.
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
              You're not dishonoring someone by not keeping everything they owned. The person was more than their stuff. Keeping a few meaningful items honors them; keeping everything they ever owned creates a burden.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              When in doubt, ask: Would they want me to carry this burden? Usually, the answer is no. They'd want you to keep what matters and let the rest help someone else or simply go.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Give yourself permission to make decisions without guilt. You're doing hard work that needs to be done.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Help With the Physical Removal?
            </h2>
            <p className="text-gray-600 mb-8">
              Once you've made the hard decisions, we can handle removing everything that's leaving. Serving Boise, Meridian, Nampa, and the Treasure Valley.
            </p>
            <a
              href="tel:2089435231"
              className="inline-block bg-dark-blue hover:bg-light-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Call (208) 943-5231
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Estate Cleanout Resources
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
