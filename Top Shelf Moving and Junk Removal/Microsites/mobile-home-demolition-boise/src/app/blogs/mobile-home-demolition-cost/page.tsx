import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile Home Demolition Cost in Idaho: What to Budget | Mobile Home Demolition Pros',
  description: 'Mobile home demolition in Boise typically costs $3,000-$8,000. Here\'s a breakdown of what affects your price.',
  alternates: {
    canonical: 'https://mobile-home-demolition-boise.com/blogs/mobile-home-demolition-cost',
  },
}

export default function MobileHomeDemolitionCost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/mobile-home-demo-cost.webp"
          alt="Mobile Home Demolition Cost"
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
            Mobile Home Demolition Cost: What to Budget
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've got a mobile home that needs to go. Maybe it's beyond repair, sitting vacant on property you want to develop, or an eyesore you inherited. Whatever the reason, the first question is always the same: how much will this cost?
            </p>
            <p className="text-gray-600 leading-relaxed">
              Mobile home demolition in the Boise area typically runs $3,000-$8,000, but that range depends on a lot of variables. Here's what actually affects your price.
            </p>
          </div>
        </div>
      </section>

      {/* Size Matters Most */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Size Matters Most
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              The biggest factor in demolition cost is square footage:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Single-wide (600-1,200 sq ft):</strong> $3,000-$5,000 typically. These are the most straightforward to demolish. One section, standard construction, usually 12-16 feet wide.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Double-wide (1,000-2,400 sq ft):</strong> $5,000-$8,000 typically. More material to remove, but still a common job. Two sections joined together, usually 24-32 feet wide.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Triple-wide or larger:</strong> $8,000+ depending on size. Less common in the Treasure Valley, but we see them on rural properties occasionally.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These ranges assume standard site conditions. Your specific situation might push you higher or lower.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included in the Price */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What's Included in the Price
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              A complete demolition quote should cover:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Demolition labor:</strong> The crew and equipment to take down the structure</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Debris hauling:</strong> Removing all materials from your property</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Disposal fees:</strong> Landfill and recycling facility charges</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Basic site cleanup:</strong> Leaving your lot ready for its next use</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Ask specifically what's included. Some quotes are for demolition only, with hauling and disposal as add-ons.
            </p>
          </div>
        </div>
      </section>

      {/* Factors That Increase Cost */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Factors That Increase Cost
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Several things can push your price toward the higher end:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Asbestos or lead paint.</strong> Older mobile homes (pre-1980s especially) may contain hazardous materials requiring special handling. Testing costs $200-500, and abatement can add $2,000-5,000+ depending on extent.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Site access problems.</strong> If equipment can't easily reach the mobile home—narrow driveways, fences, trees, slopes—extra labor and time increase costs.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Attached structures.</strong> Decks, porches, additions, sheds, and carports all add to the demolition scope.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Foundation type.</strong> Mobile homes on concrete pads or full foundations cost more to clean up than those on blocks or simple piers.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Contents still inside.</strong> If the home is still full of belongings, furniture, appliances, or debris, cleaning it out first adds cost—whether you do it or we do.
            </p>
          </div>
        </div>
      </section>

      {/* Factors That Decrease Cost */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Factors That Decrease Cost
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Some situations bring the price down:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Good access.</strong> Open lot, wide driveway, no obstacles—equipment moves easily and work goes faster.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Empty and cleaned out.</strong> Nothing inside but the structure itself.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>No hazardous materials.</strong> Newer homes without asbestos or lead concerns.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Utilities already disconnected.</strong> If you've had power, gas, water, and sewer properly disconnected before we arrive.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Flexible scheduling.</strong> If you're not in a rush, we can sometimes fit your job in during a slower period.
            </p>
          </div>
        </div>
      </section>

      {/* What About the Skirting and Foundation */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Skirting, Foundation, and Site Work
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Additional work beyond the mobile home itself:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Skirting removal:</strong> Usually included in the demolition price. Vinyl, metal, or wood skirting comes down with everything else.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Foundation cleanup:</strong> Blocks and piers—usually included. Concrete pads or runners—may cost $500-2,000+ extra to break up and remove.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Site grading:</strong> If you want the lot graded smooth after demolition, that's typically a separate charge. Basic rough grading might add $500-1,500.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Underground utilities:</strong> Capping or removing buried lines is specialized work that may require licensed plumbers or electricians.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Accurate Quotes */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Getting Accurate Quotes
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              To get realistic pricing:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Get on-site estimates.</strong> Phone quotes are rough guesses. Any contractor who gives a firm price without seeing the property is either padding heavily or setting up for surprise add-ons.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Know your mobile home's history.</strong> Year built, single or double-wide, any known hazardous materials, any additions or modifications.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Be clear about what you want.</strong> Just the mobile home? Attached structures too? Foundation removed? Site graded?
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Get at least 2-3 quotes.</strong> Compare not just price but what's included. The lowest bid isn't always the best deal if it doesn't include hauling or disposal.
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
              Most mobile home demolitions in the Boise area fall between $3,000 and $8,000 for the complete job—demolition, hauling, and disposal. Single-wides in good access conditions land on the lower end. Double-wides with complications land higher.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The best way to know your cost? Get a contractor to look at your specific situation. Every property is different, and on-site estimates are always more accurate than online calculators.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Budget a bit of cushion for surprises—especially with older mobile homes where hidden issues sometimes appear during demolition.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Get a Free Estimate
            </h2>
            <p className="text-gray-600 mb-8">
              We'll come look at your mobile home and give you a complete price—no surprises, no hidden fees.
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
