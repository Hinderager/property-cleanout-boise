import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Long Does an Estate Cleanout Take in Boise? | Estate Cleanout Pros',
  description: 'Realistic timelines for estate cleanouts in the Treasure Valley. What affects the timeline and how to plan appropriately.',
  alternates: {
    canonical: 'https://boise-estate-cleanout.com/blogs/estate-cleanout-timeline',
  },
}

export default function EstateCleanoutTimeline() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/estate-cleanout-timeline.webp"
          alt="Estate Cleanout Timeline"
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
            How Long Does an Estate Cleanout Take?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              "How long is this going to take?" It's one of the first questions families ask when facing an estate cleanout. The honest answer: it depends on several factors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's a realistic look at estate cleanout timelines for Boise-area homes, what affects the schedule, and how to plan appropriately.
            </p>
          </div>
        </div>
      </section>

      {/* Two Timelines */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Two Different Timelines
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              There's an important distinction between two processes:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>The sorting process:</strong> Going through everything, deciding what to keep, finding important documents, distributing items to family—this often takes weeks or months. It's emotionally intensive and shouldn't be rushed.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>The physical cleanout:</strong> Actually removing everything from the home once decisions are made—this typically takes 1-3 days for a professional crew, or longer if DIY.
            </p>
          </div>
        </div>
      </section>

      {/* DIY Timeline */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              DIY Estate Cleanout Timeline
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              When families handle an estate cleanout themselves, working evenings and weekends around other responsibilities:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Small home (1-2 bedrooms):</strong> 2-4 weeks of part-time work is typical. Add time for emotional processing, coordinating with family members, and arranging donations or sales.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Medium home (3 bedrooms):</strong> 4-8 weeks is common. More space means more items, more decisions, and more trips to donation centers or the dump.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Large home or longtime residence:</strong> 2-4 months isn't unusual. Decades of accumulation take time to sort through properly.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These timelines assume you're not under deadline pressure. If the home needs to be listed for sale or lease ends soon, timelines compress significantly.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Timeline */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Professional Cleanout Timeline
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              When you've done the sorting and a professional crew handles the removal:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Small cleanout:</strong> Half a day to one day. Apartment, small house, or home with minimal contents</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Average cleanout:</strong> 1-2 days. Typical 3-bedroom Boise home with normal accumulation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Large cleanout:</strong> 2-3 days. Large home, extensive accumulation, or difficult access</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Complex situations:</strong> 3-5 days. Hoarding situations, very large homes, or estates requiring extra care</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Professional crews work efficiently because they have the right equipment, enough people, and experience with the process.
            </p>
          </div>
        </div>
      </section>

      {/* What Affects Timeline */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Factors That Affect the Timeline
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Several things can make cleanouts take longer:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Volume of items.</strong> A home where someone lived for 40 years has more stuff than one occupied for 5 years. Collectors, hobbyists, and those who went through the Depression often kept more.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Organization level.</strong> A well-organized home takes less time than one where items are scattered everywhere, stored in random boxes, or piled in rooms.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Decision-making.</strong> If decisions about what to keep haven't been made, or if family members disagree, the process slows significantly.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Access and layout.</strong> Second-floor items, narrow hallways, and lack of elevator access add time. Basement cleanouts often take longer due to years of storage accumulation.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Special items.</strong> Pianos, safes, large furniture, and other heavy items require extra time and sometimes special equipment.
            </p>
          </div>
        </div>
      </section>

      {/* When Deadlines Exist */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When You're Under a Deadline
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Sometimes circumstances require speed:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Real estate closing.</strong> The home is sold and needs to be empty by a specific date. This is the most common deadline we see.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Lease termination.</strong> Rent is due, and there's no reason to keep paying for an empty property.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Family circumstances.</strong> Out-of-town family has limited time to be present, or other life circumstances require quick resolution.
            </p>

            <p className="text-gray-600 leading-relaxed">
              In these situations, professional help often makes sense. A crew can complete in two days what might take a family two months working around other responsibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Planning Suggestions */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Planning Your Timeline
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Some practical suggestions:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Start with high-priority items.</strong> Secure important documents, valuable items, and anything specified in the will first. Then tackle the rest.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Add buffer time.</strong> Whatever you think it will take, add 50%. Things always come up, and emotional processing can't be scheduled.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Separate sorting from removing.</strong> You don't have to do everything at once. Sort and decide first, then handle the physical removal.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Get help for the heavy lifting.</strong> Even if you want to sort through everything yourself, consider professional help for the final removal. It's faster and easier physically.
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
              A full DIY estate cleanout typically takes weeks to months. Professional removal of everything once decisions are made takes 1-3 days.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The right timeline depends on your circumstances—available time, emotional readiness, family coordination, and any deadlines you're working against.
            </p>

            <p className="text-gray-600 leading-relaxed">
              If you're trying to figure out a realistic timeline for your situation, give us a call. We can walk through your specific circumstances and help you plan appropriately.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Help Planning Your Estate Cleanout?
            </h2>
            <p className="text-gray-600 mb-8">
              We can give you a realistic estimate of timeline and cost for your Boise-area estate cleanout. Free consultations, no pressure.
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
