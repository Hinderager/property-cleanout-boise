import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClipboardList, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Prepare a Mobile Home for Demolition | Mobile Home Demolition Pros',
  description: 'Several steps need to happen before the demolition crew arrives. Here\'s your complete preparation checklist.',
  alternates: {
    canonical: 'https://mobile-home-demolition-boise.com/blogs/preparing-mobile-home-for-demolition',
  },
}

export default function PreparingMobileHomeForDemolition() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/preparing-for-demolition.webp"
          alt="Preparing Mobile Home for Demolition"
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
            How to Prepare a Mobile Home for Demolition
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've scheduled your mobile home demolition. Now what? Several things need to happen before the crew shows up with their equipment. Some you'll handle yourself, some require professional help, and some the demolition company may handle.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's your complete preparation checklist to make demolition day go smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Utilities First */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Disconnect Utilities First
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              This is non-negotiable. All utilities must be disconnected before demolition:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Electricity:</strong> Contact Idaho Power to disconnect and remove the meter. Schedule this at least a week before demolition—utility companies aren't always quick.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Natural gas:</strong> Call Intermountain Gas to shut off service and cap the line at the meter. Never try to disconnect gas yourself.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Water:</strong> Contact your water provider to turn off service. The line should be capped at the meter or where it enters the property.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Sewer:</strong> If connected to city sewer, you may need the connection capped. Check with your local utility.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Propane:</strong> If the home has a propane tank, have it emptied and removed by your propane supplier before demolition.
            </p>
          </div>
        </div>
      </section>

      {/* Remove Personal Property */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Remove Personal Property
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Everything inside needs to come out:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Furniture and belongings:</strong> Take what you want, donate what's usable, dispose of the rest</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Appliances:</strong> Refrigerators, stoves, washers, dryers—remove them or confirm the demo company will handle them</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Hazardous materials:</strong> Paint, chemicals, propane tanks, batteries—these need proper disposal, not demolition</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Important documents:</strong> Check every drawer and closet. Once it's demolished, it's gone</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              If you can't clean out the home yourself, some demolition companies offer cleanout services for an additional fee. Ask when getting quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Clear the Perimeter */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Clear the Perimeter
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Equipment needs room to work. Clear the area around the mobile home:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Move vehicles.</strong> Cars, trucks, trailers, ATVs—anything within the work zone needs to be relocated.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Clear outbuildings if needed.</strong> Sheds, carports, or other structures in the way may need to be moved or demolished first.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Remove loose items.</strong> Landscaping ornaments, portable fire pits, outdoor furniture, hoses, and tools should be moved clear.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Identify obstacles.</strong> Note low-hanging branches, power lines, fences, or other obstacles the crew should know about.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Ensure access.</strong> Equipment typically needs a clear path at least 12 feet wide. Remove gates, unlock access points, and make sure the driveway can handle heavy equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Handle Permits and Inspections */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Handle Permits and Inspections
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Before demolition can legally proceed:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Demolition permit.</strong> Most Treasure Valley jurisdictions require one. Either you or your contractor can apply—confirm who's handling it.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Asbestos inspection.</strong> Required for many older mobile homes. A certified inspector takes samples and provides documentation. Schedule this at least 1-2 weeks before planned demolition.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Utility disconnect verification.</strong> Keep documentation from each utility company showing service was terminated. You may need this for the permit.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>HOA or park approval.</strong> If the mobile home is in a park or community with rules, make sure you have necessary approvals.
            </p>
          </div>
        </div>
      </section>

      {/* Notify Neighbors */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Notify Neighbors
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Demolition creates noise, dust, and truck traffic. Giving neighbors a heads up is good etiquette:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Let them know the date.</strong> A quick knock on the door or note in the mailbox goes a long way.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Warn about noise.</strong> Heavy equipment isn't quiet. Neighbors with pets, babies, or work-from-home situations will appreciate advance notice.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Mention truck traffic.</strong> Debris hauling means multiple trucks in and out. If there's a shared driveway, coordinate timing.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Discuss any shared concerns.</strong> Fences on property lines, shared utilities, trees near the work area—address these before demolition day.
            </p>
          </div>
        </div>
      </section>

      {/* Day Before Checklist */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Day Before Demolition
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Final checks before the crew arrives:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Verify utility disconnections.</strong> Double-check that everything is off and documented.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Walk through the home one last time.</strong> Make sure nothing valuable got missed during cleanout.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Confirm arrival time with the contractor.</strong> Know when to expect the crew.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Check the weather.</strong> Heavy rain can delay demolition. Confirm the schedule if weather looks questionable.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Plan your day.</strong> Decide if you'll be on site or prefer to be elsewhere during demolition. Both are fine—just let the contractor know.
            </p>
          </div>
        </div>
      </section>

      {/* What the Contractor Handles */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What the Contractor Usually Handles
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              You don't have to do everything yourself. Most demolition contractors will:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Handle permits.</strong> Many contractors include permit acquisition in their services.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Coordinate asbestos testing.</strong> They often have relationships with certified inspectors.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Remove appliances.</strong> Most include appliance removal in the demolition price.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Handle debris disposal.</strong> This should be part of any complete demolition quote.
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
              Preparing for mobile home demolition isn't complicated, but it does require advance planning. The key steps—utility disconnection, cleanout, permits, and site access—need to happen before the crew arrives.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Start the utility disconnection process early. Utility companies often need a week or more of notice, and their schedules don't always align with yours.
            </p>

            <p className="text-gray-600 leading-relaxed">
              A good demolition contractor will walk you through what needs to happen and what they'll take care of. Don't hesitate to ask questions about responsibilities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Ready to Schedule Demolition?
            </h2>
            <p className="text-gray-600 mb-8">
              We'll walk you through exactly what needs to happen to prepare your mobile home for demolition. Free estimates throughout the Treasure Valley.
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
