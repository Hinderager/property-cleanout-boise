import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Same-Day Property Cleanout: When Time Matters | Property Cleanout Pros',
  description: 'Sometimes you need a property cleared today. Here\'s how rush cleanouts work and when same-day service is available.',
  alternates: {
    canonical: 'https://property-cleanout-boise.com/blogs/same-day-property-cleanout',
  },
}

export default function SameDayPropertyCleanout() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/same-day-cleanout.webp"
          alt="Same-Day Property Cleanout"
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
            Same-Day Property Cleanout: When Time Matters
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You need a property cleared today. Maybe a closing is scheduled for tomorrow. Maybe contractors are arriving in hours. Maybe there's a code violation deadline. Whatever the reason, you can't wait.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Same-day property cleanouts are possible in the Treasure Valley—with the right planning and a responsive team. Here's how rush cleanouts work and when we can help.
            </p>
          </div>
        </div>
      </section>

      {/* When Same-Day Is Needed */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                When Same-Day Service Is Needed
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Common urgent cleanout situations:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Real estate closings.</strong> Property must be vacant by closing. Sometimes issues aren't discovered until the final walkthrough.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Code violations.</strong> City or county deadline to address a nuisance property. Fines compound daily.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Contractor schedules.</strong> Renovation crew is starting tomorrow. Every day of delay costs money.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>New tenant move-in.</strong> Previous tenant's items still in the unit, new tenant arriving today.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Emergency situations.</strong> Fire, flood, or other damage requiring immediate clearing before restoration can begin.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Same-Day Possible */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What Makes Same-Day Service Possible
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Several factors determine if we can get to you today:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Our current schedule:</strong> If trucks and crews are available, same-day is often possible</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Time of day you call:</strong> Morning calls have better same-day odds than late afternoon calls</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Job size:</strong> Small to medium cleanouts are easier to fit in. Large jobs may need next-day</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Location:</strong> Central Treasure Valley locations are easier to reach quickly than outlying areas</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Day of week:</strong> Weekdays typically have more scheduling flexibility than weekends</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Call us and tell us your situation. If same-day is possible, we'll make it happen. If not, we'll get you scheduled for the earliest available time.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Need */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What You'll Need Ready
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              To make same-day service work, have these things prepared:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Property access.</strong> Someone needs to let us in, or arrangements made for lockbox/key access.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Clear direction.</strong> Know what stays and what goes. If everything goes, that's simple. If some items stay, have them clearly marked or separated.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Authorization.</strong> If you're not the property owner, have authorization from whoever has legal authority over the contents.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Parking access.</strong> Make sure we can get a truck close to the property. If permits are needed, have them arranged.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Payment ready.</strong> Rush jobs are typically paid upon completion. Have payment method available.
            </p>
          </div>
        </div>
      </section>

      {/* Rush Pricing */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Does Same-Day Cost More?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              It depends on the situation:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>During business hours.</strong> If we have availability and can fit your job into our normal schedule, same-day service doesn't cost extra.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>After hours or weekends.</strong> Emergency service outside normal business hours may have a premium. We'll tell you upfront.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Rescheduling other jobs.</strong> If we need to shuffle our schedule significantly to accommodate you, there may be an urgency fee.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We always quote the total price before starting work. No surprises on the bill.
            </p>
          </div>
        </div>
      </section>

      {/* What We Can Do Same-Day */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What Can Be Done Same-Day
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Realistic expectations for rush cleanouts:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Apartment or small house cleanout:</strong> Typically completable same day if we start by mid-afternoon.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Large house or heavy cleanout:</strong> May require full day or extend into next day depending on when we can start.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Multiple properties:</strong> Usually need to be scheduled across multiple days unless they're all small jobs.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Hoarding situations:</strong> These almost always require multiple days regardless of urgency—the volume simply takes time.
            </p>
          </div>
        </div>
      </section>

      {/* Alternatives When Same-Day Isn't Possible */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When Same-Day Isn't Possible
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              If we can't get there today, here are your options:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>First thing tomorrow.</strong> We can often schedule you as the first job the next day, starting early.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Partial same-day.</strong> If your deadline is for a specific area (like emptying one room for contractors), we might be able to handle that portion today.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>After-hours option.</strong> Depending on the situation, evening or weekend work may be available.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Negotiate your deadline.</strong> Sometimes the closing can be pushed back a day, or contractors can start elsewhere. Knowing when we can definitely complete may help your planning.
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
              Same-day property cleanouts are often possible in the Treasure Valley—especially for small to medium jobs and when you call early in the day. The sooner you call, the better your chances.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              We understand that deadlines are real and missing them has consequences. When you call with an urgent situation, we'll tell you honestly whether we can help and when.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Don't wait until the last minute if you can avoid it—but if you're already there, call us and let's see what we can do.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need It Done Today?
            </h2>
            <p className="text-gray-600 mb-8">
              Call now and tell us your situation. We'll let you know if same-day service is available and give you a quote on the spot.
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
            More Property Cleanout Resources
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
