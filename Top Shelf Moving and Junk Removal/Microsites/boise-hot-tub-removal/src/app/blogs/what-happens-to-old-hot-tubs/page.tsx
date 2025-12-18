import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Recycle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What Happens to Hot Tubs After Removal? | Hot Tub Removal Pros',
  description: 'Curious where your old spa ends up? Here\'s how hot tubs are typically recycled and disposed of in the Boise area.',
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/blogs/what-happens-to-old-hot-tubs',
  },
}

export default function WhatHappensToOldHotTubs() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/hot-tub-recycling.webp"
          alt="What Happens to Old Hot Tubs"
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
            What Happens to Hot Tubs After Removal?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Your hot tub is gone. The crew loaded it up and drove away. But then what? Does it just end up in a landfill somewhere?
            </p>
            <p className="text-gray-600 leading-relaxed">
              The answer might surprise you. Hot tubs are actually more recyclable than most people think. Here's what happens to old spas after they leave your backyard.
            </p>
          </div>
        </div>
      </section>

      {/* What Hot Tubs Are Made Of */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                What Hot Tubs Are Made Of
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              A typical hot tub contains multiple materials:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Shell (acrylic or fiberglass).</strong> The shiny tub part you sit in. Usually reinforced with fiberglass backing.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Cabinet (wood or synthetic).</strong> The outer housing, typically wood panels or composite material.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Foam insulation.</strong> Most tubs are filled with spray foam insulation to retain heat. This is the bulkiest material by volume.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Plumbing (PVC).</strong> The pipes, jets, and fittings that circulate water.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Mechanical components (metal and plastic).</strong> Pumps, heaters, control panels, and wiring.
            </p>
          </div>
        </div>
      </section>

      {/* What Gets Recycled */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What Actually Gets Recycled
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              When properly processed, several components can be recycled:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Metal components:</strong> Copper wiring, steel frames, and pump motors go to metal recyclers. Copper especially has good scrap value</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Wood cabinet panels:</strong> Clean wood can be recycled, chipped for landscaping, or used as biomass fuel</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>PVC plumbing:</strong> PVC is recyclable, though it needs to be separated from other plastics</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Acrylic shell:</strong> Can sometimes be recycled into new plastic products, though this varies by facility</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              The reality: a responsible removal company will separate recyclable materials rather than dumping everything together. This takes more effort but keeps usable materials out of landfills.
            </p>
          </div>
        </div>
      </section>

      {/* What Goes to Landfill */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What Typically Goes to Landfill
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Not everything can be recycled:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Spray foam insulation.</strong> This is the biggest waste component. Foam insulation isn't recyclable and makes up a significant portion of the tub's volume.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Fiberglass-reinforced shells.</strong> When acrylic and fiberglass are bonded together, separation isn't cost-effective. These usually go to landfill.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Contaminated materials.</strong> Anything damaged by mold, chemicals, or rot typically can't be recycled.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Mixed materials.</strong> When different plastics or composites are fused together, separation isn't practical.
            </p>
          </div>
        </div>
      </section>

      {/* Local Disposal in Boise */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Where Hot Tubs Go in the Boise Area
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              In the Treasure Valley, hot tub materials typically go to:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Ada County Landfill (Hidden Hollow).</strong> Non-recyclable materials end up here. The facility accepts bulky waste like hot tub shells and foam.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Local metal recyclers.</strong> Boise has several scrap metal facilities that accept copper, steel, and aluminum components from hot tubs.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Transfer stations.</strong> The Boise area has several transfer stations where materials get sorted before going to their final destinations.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Specialized recyclers.</strong> Some electronics and mechanical components go to e-waste recyclers.
            </p>
          </div>
        </div>
      </section>

      {/* Can Hot Tubs Be Resold? */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Can Old Hot Tubs Be Resold?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Sometimes, but not often:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Working tubs in good condition.</strong> If your hot tub still works and looks decent, you might be able to sell it yourself. List it on Facebook Marketplace or Craigslist. Buyers typically want tubs under 10 years old that have been maintained.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>The catch:</strong> Hot tubs are hard to move. Most buyers expect delivery, which creates a logistics challenge. And prices for used hot tubs are low—often a few hundred dollars at most.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Donation.</strong> Rarely practical. Most charities won't accept hot tubs due to liability concerns and the difficulty of resale.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Reality check:</strong> If you're calling for removal, the tub is probably old, non-working, or not worth the effort to sell. And that's fine—recycling the materials is still better than leaving it to rot in your backyard.
            </p>
          </div>
        </div>
      </section>

      {/* Choosing Eco-Conscious Removal */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              How to Choose an Eco-Conscious Removal Company
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              If environmental impact matters to you:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Ask about their disposal process.</strong> Do they separate materials? Do they work with recyclers? A company that just dumps everything in the landfill is doing the bare minimum.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Avoid illegal dumping.</strong> The cheapest quote might be from someone who dumps in a field or abandoned lot. Besides being illegal, this creates environmental problems.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Licensed and insured matters.</strong> Legitimate companies use licensed disposal facilities. This ensures materials go where they're supposed to go.
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
              Hot tubs aren't 100% recyclable—the foam insulation and composite materials usually end up in landfills. But metal components, wood, and some plastics can be recycled.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              A responsible removal company will separate and recycle what they can rather than dumping everything together. It's a small difference in the grand scheme, but it's the right thing to do.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Either way, getting that old hot tub out of your yard is better than letting it sit and deteriorate for years. At least this way, the recyclable parts get a second life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Ready to Remove Your Hot Tub?
            </h2>
            <p className="text-gray-600 mb-8">
              We handle hot tub removal responsibly throughout Boise, Meridian, Nampa, and the Treasure Valley. Recyclable materials go to recyclers, not landfills.
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
