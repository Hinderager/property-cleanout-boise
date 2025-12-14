import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Planning an Office Move in Boise? Start Here | Commercial Moving Pros',
  description: 'Moving your business doesn\'t have to be chaotic. Here\'s a practical timeline and checklist for Boise office relocations.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/blogs/planning-office-move-boise',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/hero.webp"
          alt="Planning an Office Move in Boise? Start Here"
          fill
          priority
          className="object-cover"
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
            Planning an Office Move in Boise? Start Here
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">Moving your business is a big deal. Unlike a home move where inconvenience is temporary, an office move affects your operations, your employees, and potentially your revenue.</p>
            <p className="text-gray-600 leading-relaxed">The good news? With proper planning, you can minimize disruption and actually use the move as an opportunity to improve how your business functions.</p>
            <p className="text-gray-600 leading-relaxed">Here's a practical timeline for planning your Boise office relocation.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">12-16 Weeks Before: The Foundation</h2>
            <p className="text-gray-600 leading-relaxed"><strong>Assemble your move team.</strong> Identify who's responsible for what. You need someone coordinating IT, someone handling employee communication, someone managing the physical move logistics. For smaller offices, this might be one person wearing multiple hats.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Assess your current space.</strong> What's coming with you? What's staying behind? This is a great time to purge old equipment, outdated files, and furniture you've been meaning to replace. Less stuff to move means lower costs and a cleaner start.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Create an inventory.</strong> List everything that needs to move. This helps with getting accurate quotes and ensures nothing gets forgotten.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Start researching movers.</strong> Get quotes from several commercial moving companies. Look for experience with office moves specifically - they're different from residential moves in important ways.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">8-12 Weeks Before: Planning Details</h2>
            <p className="text-gray-600 leading-relaxed"><strong>Lock in your moving company.</strong> The good ones book up, especially during summer months and end-of-month dates.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Plan your IT infrastructure.</strong> This is usually the most complex part. Your network, servers, phone systems - all need to be set up at the new location. Start coordinating with your IT team or provider now.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Notify vendors and clients.</strong> Anyone who sends you mail, delivers products, or visits your office needs to know about the move. Start this communication early.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Order new business materials.</strong> Business cards, letterhead, marketing materials with your new address - get these ordered so they're ready when you move.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Update your online presence.</strong> Plan for updating your website, Google Business listing, social media, and directory listings. These should change the day you move.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">4-8 Weeks Before: Getting Specific</h2>
            <p className="text-gray-600 leading-relaxed"><strong>Create a floor plan.</strong> Know where everything is going in the new space. This includes furniture placement, workstation assignments, and equipment locations. Share this with your moving company.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Communicate with employees.</strong> People have questions and concerns about moves. Address them proactively. What changes for them? Will they have the same workspace? What's the parking situation?</p>
            <p className="text-gray-600 leading-relaxed"><strong>Handle utilities and services.</strong> Schedule disconnection at your old location and connection at the new one. Don't forget internet, phone, security systems, and any specialized services.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Coordinate building access.</strong> Make sure your moving company can access both buildings when needed. Get loading dock schedules, elevator reservations, and any required insurance certificates.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">1-4 Weeks Before: Final Preparation</h2>
            <p className="text-gray-600 leading-relaxed"><strong>Pack non-essential items.</strong> Things you won't need until after the move can be boxed up early. This spreads the work out and identifies issues before crunch time.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Back up everything.</strong> All computer data, all files. Do this even if you think it's already backed up. Then verify the backup works.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Confirm all arrangements.</strong> Call your moving company, IT provider, and new building management to confirm dates and times. Make sure everyone's on the same page.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Prepare an "essentials" box.</strong> Important documents, office supplies, and anything you'll need immediately at the new location. Keep this with you, not on the moving truck.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Moving Week: Execution</h2>
            <p className="text-gray-600 leading-relaxed"><strong>Have your team ready.</strong> Someone needs to be at the old location when movers arrive and someone at the new location to direct placement.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Verify IT is operational.</strong> Before employees show up at the new office, confirm internet, phones, and network access are working.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Do a walkthrough.</strong> At the old location, check every room, closet, and cabinet. At the new location, verify everything arrived and is placed correctly.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">What Often Gets Overlooked</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>- Employee parking arrangements at the new location</li>
              <li>Mail forwarding from the old address</li>
              <li>Updating your lease or security deposit status at the old location</li>
              <li>Key and access card collection from employees</li>
              <li>Cleaning requirements for vacating the old space</li>
            </ul>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">A Note on Timing</h2>
            <p className="text-gray-600 leading-relaxed">Many businesses try to move over a weekend to minimize disruption. This works, but weekend moves often cost more and require extra planning for building access.</p>
            <p className="text-gray-600 leading-relaxed">Another approach is a phased move - moving departments on different days. This keeps some operations running while others relocate.</p>
            <p className="text-gray-600 leading-relaxed">Whatever timing you choose, pad your schedule. Things will take longer than expected. Plan for it.</p>
            </div>

            {/* CTA Box */}
            <div className="mt-12 bg-gray-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gunmetal mb-4">
                Need Commercial moving Help?
              </h3>
              <p className="text-gray-600 mb-6">
                Commercial Moving Pros is here to help with all your commercial moving needs in the Treasure Valley.
              </p>
              <a
                href="tel:2083611982"
                className="inline-block bg-dark-blue hover:bg-light-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call (208) 361-1982
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Articles
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
