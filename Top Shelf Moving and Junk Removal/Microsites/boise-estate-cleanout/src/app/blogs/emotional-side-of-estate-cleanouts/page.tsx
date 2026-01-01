import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Emotional Side of Estate Cleanouts in Boise | Estate Cleanout Pros',
  description: 'Estate cleanouts aren\'t just physical work—they\'re emotionally difficult. Here\'s how Boise families cope with the process.',
  alternates: {
    canonical: 'https://boise-estate-cleanout.com/blogs/emotional-side-of-estate-cleanouts',
  },
}

export default function EmotionalSideOfEstateCleanouts() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/emotional-estate-cleanout.webp"
          alt="Emotional Side of Estate Cleanouts"
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
            The Emotional Side of Estate Cleanouts
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              An estate cleanout isn't like cleaning out a garage. You're not just dealing with stuff—you're dealing with someone's entire life, their memories, and often your grief.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We've helped hundreds of Boise families through this process. The physical work is straightforward. The emotional weight is the hard part.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's what we've learned about coping with the emotional side of estate cleanouts.
            </p>
          </div>
        </div>
      </section>

      {/* It's Normal to Feel Overwhelmed */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                It's Normal to Feel Overwhelmed
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Estate cleanouts often happen during difficult times—after losing a parent, helping an aging relative transition to care, or settling affairs after an unexpected death.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Grief doesn't follow a schedule.</strong> You might be fine one moment and hit with a wave of emotion when you find something unexpected. That's completely normal.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>The volume is overwhelming.</strong> A lifetime of possessions is a lot. Even if you've been in the home many times, seeing everything that needs to be sorted is different.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Decision fatigue is real.</strong> After making hundreds of keep/donate/discard decisions, your brain gets tired. It's not weakness—it's how humans work.
            </p>
          </div>
        </div>
      </section>

      {/* Give Yourself Time */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Give Yourself Permission
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Some things that help people get through:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Permission to take breaks.</strong> You don't have to power through. If you need to stop and come back tomorrow, do that. If you need to cry in the middle of sorting, that's okay too.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Permission to keep things.</strong> Not everything has to be practical. Keeping your grandmother's tea set that you'll never use but can't bear to part with is valid.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Permission to let things go.</strong> You're not dishonoring someone by not keeping every item they owned. They would want their belongings to help you, not burden you.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Permission to ask for help.</strong> You don't have to do this alone. That might mean family members, friends, or professional help.
            </p>
          </div>
        </div>
      </section>

      {/* Strategies That Help */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Strategies That Help Families Cope
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              From what we've observed helping Boise families:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Start with low-emotion areas.</strong> Begin with things that don't carry emotional weight—expired food, obvious trash, duplicates. Build momentum before tackling the hard stuff</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Set time limits.</strong> Work for 2-3 hours, then stop. Emotional exhaustion is different from physical tiredness</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Take photos.</strong> You can photograph items you're letting go of. The memory doesn't require the physical object</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Have a "maybe" box.</strong> If you can't decide, set it aside. Come back to it later with fresh eyes</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Share stories.</strong> When sorting with family, share memories as you go. It can turn a difficult task into a time of connection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Dynamics */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When Family Is Involved
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Estate cleanouts can bring up family tensions. Different people handle grief differently, and different people have different attachments to items.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Communicate early about meaningful items.</strong> Before the cleanout, talk about what matters to each person. It's easier to plan than to fight over something in the moment.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Respect different timelines.</strong> Some people need to move quickly. Others need more time. Try to find middle ground.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Consider a neutral party.</strong> Sometimes having someone outside the family coordinate decisions reduces conflict. That could be a professional organizer or a cleanout service.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Remember the goal.</strong> The goal is to handle the estate in a way that honors the person who's gone and works for everyone living. Keep that in focus when disagreements arise.
            </p>
          </div>
        </div>
      </section>

      {/* When Professional Help Helps */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When Hiring Help Makes Sense Emotionally
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Sometimes bringing in professionals isn't about the physical work—it's about the emotional weight:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Physical distance makes it harder.</strong> If you live outside the Treasure Valley and have limited time, doing an estate cleanout during a short visit is intensely stressful. Help lets you focus on what matters most.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Trauma in the home.</strong> If the death was unexpected or traumatic, being in the space can be difficult. Having others handle most of the work can be necessary for mental health.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Strained family relationships.</strong> If family members can't work together productively, a neutral service can complete the work without the conflict.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Simple emotional exhaustion.</strong> Sometimes you've just run out of capacity. There's no shame in that.
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
              Estate cleanouts are hard in ways that have nothing to do with the physical work. Acknowledging that doesn't make it easier, but it does make it more manageable.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Take the time you need. Ask for help when you need it. And remember that getting through this—however you do it—is an act of love and service to someone who mattered.
            </p>

            <p className="text-gray-600 leading-relaxed">
              If you need help with the physical side while you focus on the emotional side, we're here. We've been through this with many Boise families and understand what you're going through.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Help With an Estate Cleanout?
            </h2>
            <p className="text-gray-600 mb-8">
              We handle estate cleanouts throughout Boise, Meridian, Nampa, and the Treasure Valley with care and respect. Call for a free consultation.
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
