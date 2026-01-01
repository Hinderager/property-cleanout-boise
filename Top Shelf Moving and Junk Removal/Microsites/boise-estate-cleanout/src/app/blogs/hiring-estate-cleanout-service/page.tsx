import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Users, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Should You Hire an Estate Cleanout Service in Boise? | Estate Cleanout Pros',
  description: 'Honest assessment of when DIY makes sense and when to hire help for your Boise estate cleanout. Factors to consider.',
  alternates: {
    canonical: 'https://boise-estate-cleanout.com/blogs/hiring-estate-cleanout-service',
  },
}

export default function HiringEstateCleanoutService() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/hiring-estate-cleanout.webp"
          alt="Hiring Estate Cleanout Service"
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
            Should You Hire an Estate Cleanout Service?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Not every estate cleanout needs professional help. Some families handle it themselves and it works fine. Others try DIY, realize they're in over their heads, and call for help.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's an honest look at when DIY makes sense and when hiring a Boise estate cleanout service is worth the cost.
            </p>
          </div>
        </div>
      </section>

      {/* When DIY Works */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When DIY Makes Sense
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              You can probably handle it yourself if:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>You have time.</strong> Not under deadline pressure, and you can work on this over weeks or months at your own pace.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>The home is manageable.</strong> Small to medium home without decades of heavy accumulation. You can see a realistic end point.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>You're local.</strong> You live in the Treasure Valley and can make multiple trips to the home without major disruption.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Family is cooperative.</strong> Multiple people available to help, and there's agreement on how to handle things.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>You're physically able.</strong> You can handle the lifting, carrying, and hauling. Or you have family members who can.
            </p>
          </div>
        </div>
      </section>

      {/* When to Hire Help */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                When Hiring Help Makes More Sense
              </h2>
            </div>

            <p className="text-blue-100 leading-relaxed mb-6">
              Consider professional help when:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>You're under time pressure.</strong> Home needs to be sold, lease is ending, or you have limited time to be present</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>You live far away.</strong> Coming from outside Idaho makes repeated trips impractical and expensive</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>The volume is overwhelming.</strong> Large homes, hoarding situations, or decades of accumulation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Physical limitations.</strong> Age, health issues, or lack of able-bodied helpers make the work impractical</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Emotional difficulty.</strong> Being in the space is too hard, or you need distance from the process</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Family conflict.</strong> A neutral third party makes the process easier for everyone</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Real Cost Comparison
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              DIY seems cheaper on the surface, but consider:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Your time has value.</strong> If you're taking time off work, add up the lost wages or vacation days. If you're doing this instead of other things, consider that cost too.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>DIY has direct costs.</strong> Dumpster rental or multiple dump trips, truck rental, packing supplies, donation hauling—it adds up quickly.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Travel expenses.</strong> If you're flying in, add airfare, rental car, and hotel. Multiple trips multiply these costs.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Ongoing property costs.</strong> Every month the estate cleanout isn't done, you're paying utilities, property taxes, insurance, and possibly a mortgage on an empty home.
            </p>

            <p className="text-gray-600 leading-relaxed">
              For many families, professional help actually costs less when you factor everything in—and gets the property ready for sale or rental faster.
            </p>
          </div>
        </div>
      </section>

      {/* What to Look For */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What to Look for in an Estate Cleanout Service
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              If you decide to hire help, here's what matters:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Experience with estates specifically.</strong> Estate cleanout is different from regular junk removal. You need someone who understands the emotional aspect, can identify potentially valuable items, and works respectfully.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Clear pricing.</strong> Get a quote in writing before work begins. Understand what's included and what might cause additional charges.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Proper insurance.</strong> Workers compensation and liability insurance protect you if something goes wrong.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Donation and recycling practices.</strong> A good service will donate usable items rather than landfill everything. Ask about their process.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>References from estate cleanouts.</strong> Ask specifically about estate work, not just general junk removal experience.
            </p>
          </div>
        </div>
      </section>

      {/* The Middle Ground */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Middle Ground: Partial Help
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              It doesn't have to be all or nothing. Many families find a middle approach:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Handle the sorting yourself.</strong> Go through everything personally, identify keepsakes, distribute items to family, make all the decisions.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Hire help for the removal.</strong> Once you've sorted, a cleanout service can come in and handle everything that's leaving in a day or two.
            </p>

            <p className="text-gray-600 leading-relaxed">
              This approach lets you maintain control over the personal decisions while offloading the physically demanding and time-consuming removal work.
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
              There's no single right answer. DIY works great for some families. Professional help is essential for others. Most fall somewhere in between.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Consider your specific situation: time available, physical ability, emotional readiness, distance, family dynamics, and overall cost including your time.
            </p>

            <p className="text-gray-600 leading-relaxed">
              If you want to talk through your situation, we're happy to give an honest assessment of whether you need help or not. Sometimes the answer is "you've got this." We'll tell you that.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Want an Honest Assessment?
            </h2>
            <p className="text-gray-600 mb-8">
              We'll tell you straight whether you need help or can handle it yourself. Free consultation, no sales pressure.
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
