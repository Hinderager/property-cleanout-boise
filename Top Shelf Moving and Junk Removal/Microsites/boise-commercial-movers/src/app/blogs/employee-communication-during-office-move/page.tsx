import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Keep Employees Informed During an Office Move | Commercial Moving Pros',
  description: 'Good communication makes all the difference. Here\'s how to keep your team in the loop during relocation.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/blogs/employee-communication-during-office-move',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/hero.webp"
          alt="How to Keep Employees Informed During an Office Move"
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
            How to Keep Employees Informed During an Office Move
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">Employees always have concerns during an office move. Will my commute change? Where will I sit? Is my job changing too?</p>
            <p className="text-gray-600 leading-relaxed">Good communication addresses these concerns directly and prevents the rumor mill from filling in the gaps with misinformation.</p>
            <p className="text-gray-600 leading-relaxed">Here's how to keep your team informed throughout the relocation process.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Start Early and Be Transparent</h2>
            <p className="text-gray-600 leading-relaxed">As soon as the move is confirmed, tell your employees. Even if you don't have all the details yet.</p>
            <p className="text-gray-600 leading-relaxed">Why? Because they're going to find out anyway. When leadership announces a move at the last minute, employees feel blindsided and distrust builds. When they're informed early, they feel respected and included.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Your initial announcement should cover:</li>
              <li>The fact that you're moving</li>
              <li>The general timeframe</li>
              <li>The reason for the move</li>
              <li>What you know so far</li>
              <li>When you'll share more details</li>
              <li>Who to contact with questions</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">Be honest about what you don't know yet. "We're still finalizing the floor plan" is better than vague promises.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Address What Employees Actually Care About</h2>
            <p className="text-gray-600 leading-relaxed">From an employee's perspective, the move isn't about square footage or lease terms. It's about:</p>
            <p className="text-gray-600 leading-relaxed"><strong>Commute.</strong> How will this affect my drive? Is parking available? What about public transit access?</p>
            <p className="text-gray-600 leading-relaxed"><strong>Workspace.</strong> Where will I sit? Will I have the same setup? Am I losing my office or window seat?</p>
            <p className="text-gray-600 leading-relaxed"><strong>The move itself.</strong> What do I need to pack? When? Will I be expected to work during the move?</p>
            <p className="text-gray-600 leading-relaxed"><strong>Job security.</strong> Is this move a sign of growth or downsizing? Is my position affected?</p>
            <p className="text-gray-600 leading-relaxed">Address these directly in your communications. Don't make employees ask or guess.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Create Multiple Communication Channels</h2>
            <p className="text-gray-600 leading-relaxed">Different people absorb information differently. Use multiple methods:</p>
            <p className="text-gray-600 leading-relaxed"><strong>All-hands meetings.</strong> Good for initial announcements and major updates. Allows for questions.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Email updates.</strong> Provides a written record that people can reference. Good for detailed information and timelines.</p>
            <p className="text-gray-600 leading-relaxed"><strong>FAQ documents.</strong> Compile common questions and answers in one place. Update it as new questions arise.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Department meetings.</strong> Allows for more specific discussions about how the move affects each team.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Open door policy.</strong> Make leadership available for individual conversations about concerns.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Set Up a Timeline of Communication</h2>
            <p className="text-gray-600 leading-relaxed">Map out when you'll communicate what:</p>
            <p className="text-gray-600 leading-relaxed"><strong>8+ weeks out:</strong> Initial announcement, general information, opportunity for questions</p>
            <p className="text-gray-600 leading-relaxed"><strong>6 weeks out:</strong> Floor plan preview, workspace assignments (if known), parking and commute information</p>
            <p className="text-gray-600 leading-relaxed"><strong>4 weeks out:</strong> Packing instructions, specific timeline, what to expect on moving day</p>
            <p className="text-gray-600 leading-relaxed"><strong>2 weeks out:</strong> Final details, reminder of key dates, last chance for questions</p>
            <p className="text-gray-600 leading-relaxed"><strong>1 week out:</strong> Day-by-day schedule, emergency contacts, any last-minute changes</p>
            <p className="text-gray-600 leading-relaxed"><strong>Day after:</strong> Orientation at new space, where to find things, who to contact for issues</p>
            <p className="text-gray-600 leading-relaxed">Stick to this schedule. Consistent communication builds confidence.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Be Specific About Expectations</h2>
            <p className="text-gray-600 leading-relaxed">Vague instructions create confusion. Be specific:</p>
            <p className="text-gray-600 leading-relaxed">Instead of "Pack your desk before moving day," say "Place all personal items in the boxes provided by [date]. Label each box with your name and new workspace number. Leave computer equipment on your desk - IT will handle those separately."</p>
            <p className="text-gray-600 leading-relaxed">Instead of "The move is Friday," say "Our offices will close at 5pm Thursday. Movers will work Friday and Saturday. Report to the new office at 9am Monday. Your badge will work at the new building starting Monday morning."</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Handle Resistance and Concerns Directly</h2>
            <p className="text-gray-600 leading-relaxed">Some employees won't be happy about the move. Maybe their commute is worse. Maybe they're losing a private office. Maybe they just don't like change.</p>
            <p className="text-gray-600 leading-relaxed">Acknowledge these concerns rather than dismissing them. "I understand the new location adds time to your commute, and I appreciate that's frustrating" goes a lot further than "Everyone needs to be flexible."</p>
            <p className="text-gray-600 leading-relaxed">When you can't address a concern, be honest about it. "The new building doesn't have private offices, and I know that's a change for those of you who had them. We've tried to create quiet zones and booking rooms for when you need privacy."</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Designate a Point Person</h2>
            <p className="text-gray-600 leading-relaxed">Appoint someone to be the go-to person for move-related questions. This gives employees a clear channel for concerns and keeps everyone else from getting constantly interrupted.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>This person should:</li>
              <li>Be available and responsive</li>
              <li>Have accurate information (or know where to get it)</li>
              <li>Escalate significant concerns to decision-makers</li>
              <li>Send regular updates to the team</li>
            </ul>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">After the Move</h2>
            <p className="text-gray-600 leading-relaxed">Communication doesn't stop when boxes are unpacked. The first week at a new location is disorienting.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Provide:</li>
              <li>A map or guide to the new space</li>
              <li>Contact information for building management, IT support, facilities</li>
              <li>Instructions for common questions (how to book rooms, where supplies are, etc.)</li>
              <li>An easy way to report problems</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">Check in with teams after a few days. What's working? What's frustrating? Small fixes early prevent lasting complaints.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">The Investment Pays Off</h2>
            <p className="text-gray-600 leading-relaxed">Good communication takes time. Writing updates, holding meetings, answering questions - it adds up.</p>
            <p className="text-gray-600 leading-relaxed">But the alternative is worse. Employees who feel uninformed are anxious, unproductive, and more likely to look for other jobs. Rumors spread and trust erodes.</p>
            <p className="text-gray-600 leading-relaxed">Clear, consistent, honest communication makes the difference between a move that disrupts your team and a move that brings them together.</p>
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
