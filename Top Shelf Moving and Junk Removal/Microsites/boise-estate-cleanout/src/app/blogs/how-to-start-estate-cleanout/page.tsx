import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClipboardList, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Start an Estate Cleanout in Boise | Estate Cleanout Pros',
  description: 'Step-by-step guide to beginning an estate cleanout without getting overwhelmed. Practical advice for Boise families.',
  alternates: {
    canonical: 'https://boise-estate-cleanout.com/blogs/how-to-start-estate-cleanout',
  },
}

export default function HowToStartEstateCleanout() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/start-estate-cleanout.webp"
          alt="How to Start an Estate Cleanout"
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
            How to Start an Estate Cleanout
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You're standing in a home full of someone's lifetime of belongings. Where do you even start? The whole thing feels impossible.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The good news: you don't have to figure it all out at once. You just need to know the first few steps. The rest unfolds from there.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's how to begin an estate cleanout without getting overwhelmed.
            </p>
          </div>
        </div>
      </section>

      {/* Before You Touch Anything */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Before You Touch Anything
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Before moving or sorting a single item:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Check the will and estate documents.</strong> Are there specific items bequeathed to specific people? Are there instructions about what to do with certain belongings? Know this before you start.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Coordinate with family.</strong> Who needs to be involved? Who wants what? Having these conversations upfront prevents conflict later.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Secure the property.</strong> Make sure the home is safe—change locks if needed, secure valuables, check that utilities are on (or properly winterized if off).
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Take photos.</strong> Document the home's condition before you start. This protects you legally and helps remember what was there.
            </p>
          </div>
        </div>
      </section>

      {/* The First Day */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Your First Day: The Walk-Through
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Don't try to sort everything on day one. Instead:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Walk through every room.</strong> Open every closet, look in every drawer, check the garage, basement, and attic. Get a complete picture of what you're dealing with.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Note the obvious high-priority items.</strong> Important documents, valuables, items mentioned in the will, things that need immediate attention.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Identify problem areas.</strong> Is there a room stuffed floor to ceiling? A shed full of mystery items? Knowing where the hard parts are helps you plan.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Make rough categories.</strong> Mentally note areas of similar items—tools, clothes, paperwork, kitchen items. You'll tackle these systematically later.
            </p>
          </div>
        </div>
      </section>

      {/* Priority One */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Priority One: Important Documents and Valuables
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Before any major sorting begins, secure these items:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Financial documents:</strong> Bank statements, investment accounts, insurance policies, tax returns, property deeds</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Legal documents:</strong> Will, trust documents, power of attorney, birth/death certificates, marriage certificates</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Bills and accounts:</strong> Any accounts that need to be closed or transferred, ongoing bills that need attention</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Cash and valuables:</strong> Check everywhere—books, pockets, drawers, safes, hidden spots. Older generations often kept cash in unusual places</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Jewelry and collectibles:</strong> Secure anything of significant value until proper appraisal or distribution</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Put these in a safe place or take them with you. Don't leave them in the home during the cleanout process.
            </p>
          </div>
        </div>
      </section>

      {/* Creating a System */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Creating a Sorting System
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Once important items are secured, set up your sorting system. Most people use some version of:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Keep.</strong> Items you or family members want. This might have sub-categories for different people.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Donate.</strong> Items in good condition that can help others. Goodwill, Salvation Army, and local Boise charities will take usable items.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Sell.</strong> Items with value that are worth the effort to sell. Be realistic—most household items have less resale value than people expect.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Trash.</strong> Items that can't be donated or sold. This is usually more than people anticipate.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Decide later.</strong> Items you can't decide about right now. Keep this pile small—don't let it become an excuse to postpone decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Working Through Room by Room */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Working Through the Home
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Once your system is set up:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Start with easier areas.</strong> Build momentum with spaces that don't carry as much emotional weight—bathrooms, kitchen pantry, utility rooms.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Work one room at a time.</strong> Finish an area before starting the next. Partial progress everywhere is demoralizing; completed rooms show accomplishment.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Handle each item once.</strong> Pick it up, make a decision, put it in the appropriate pile. Coming back to items repeatedly wastes time and energy.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Set realistic daily goals.</strong> Two or three hours of sorting is about what most people can handle at a stretch. Plan breaks and stopping points.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Unstuck */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When You Get Stuck
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Getting stuck is normal. Here's how to move forward:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Switch areas.</strong> If a room is too emotional, work somewhere else for a while. Come back when you're ready.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Bring in fresh eyes.</strong> A friend or family member who wasn't as close to the person can often help with decisions you're stuck on.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Set a timer for hard decisions.</strong> Give yourself 30 seconds to decide. If you can't, put it in the "decide later" pile and move on.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Remember the purpose.</strong> You're not erasing the person. You're handling their belongings so you can move forward. They'd want you to be okay.
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
              Starting is the hardest part. Once you've taken inventory, secured important items, and begun sorting one room, the process becomes more manageable.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Don't try to do it all at once. Work in sessions. Take breaks. Ask for help when you need it.
            </p>

            <p className="text-gray-600 leading-relaxed">
              And remember—you can always call in professional help for the heavy lifting once the sorting is done.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Help With Your Estate Cleanout?
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you need full-service cleanout or just help with the removal after you've sorted, we're here. Serving Boise, Meridian, Nampa, and the Treasure Valley.
            </p>
            <a
              href="tel:2085059352"
              className="inline-block bg-dark-blue hover:bg-light-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Call (208) 505-9352
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
