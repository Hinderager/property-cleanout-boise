import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: '5 Signs Your Loved One May Need Hoarding Help',
  description: 'Recognizing when a family member needs professional help with hoarding can be difficult. Learn the 5 key warning signs that indicate it may be time to seek assistance.',
  keywords: [
    'signs of hoarding',
    'hoarding help',
    'family member hoarding',
    'when to get hoarding help',
    'hoarding warning signs',
    'loved one hoarding',
  ],
  openGraph: {
    title: '5 Signs Your Loved One May Need Hoarding Help',
    description: 'Recognizing when a family member needs professional help with hoarding can be difficult. Learn the 5 key warning signs.',
    url: 'https://hoardingcleanupboise.com/blog/5-signs-loved-one-needs-hoarding-help',
  },
  alternates: {
    canonical: 'https://hoardingcleanupboise.com/blog/5-signs-loved-one-needs-hoarding-help',
  },
}

const signs = [
  {
    number: 1,
    title: 'They\'ve Stopped Having People Over',
    content: 'This one sneaks up on you. Maybe your mom used to love hosting Thanksgiving, but now she always wants to meet at a restaurant instead. Or your brother makes excuses every time you suggest stopping by. People dealing with hoarding often feel ashamed of their home, even if they won\'t admit it. They\'ll get defensive if you push, or change the subject. It\'s not that they don\'t want to see you—they just don\'t want you to see their house.',
  },
  {
    number: 2,
    title: 'Rooms Aren\'t Being Used for What They\'re For',
    content: 'A dining room table buried under stuff. A bed you can\'t actually sleep in. A kitchen where making dinner isn\'t really possible anymore. When clutter takes over to the point where rooms lose their purpose, that\'s a red flag. I\'ve seen situations where someone\'s been sleeping on a tiny corner of their couch for months because their bedroom is completely full. That\'s not just being messy—that\'s a problem.',
  },
  {
    number: 3,
    title: 'The Home Has Become Unsafe',
    content: 'This is the one that really worries me. Stacks of newspapers blocking the door. Stuff piled near the furnace. Pathways through rooms that are barely wide enough to walk through. Hoarding creates real dangers—fire hazards, tripping risks, even structural issues if things get heavy enough. If you can\'t easily get out in an emergency, or if you\'re worried about things falling, it\'s time to take action.',
  },
  {
    number: 4,
    title: 'Their Health Is Getting Worse',
    content: 'Hoarding takes a toll on the body, not just the mind. Dust and mold build up. Pests move in. It becomes hard to cook real meals or find medications. I\'ve talked to families who noticed their parent seemed more tired, was getting sick more often, or just looked run down. Sometimes the living situation is making things worse and nobody\'s connected the dots yet.',
  },
  {
    number: 5,
    title: 'Getting Rid of Anything Causes a Meltdown',
    content: 'Look, we all have stuff we\'re attached to. That\'s normal. But if suggesting you throw away an empty yogurt container causes tears or a full-blown argument? That\'s different. People with hoarding disorder feel genuine panic at the thought of losing things—even things most of us would call garbage. It\'s not stubbornness or laziness. There\'s real anxiety there, and it\'s a sign that something deeper is going on.',
  },
]

export default function BlogPost() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-dark-blue underline hover:text-light-blue mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-light-blue/10 text-light-blue text-sm font-medium px-3 py-1 rounded-full">
                Family Support
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  December 1, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  5 min read
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              5 Signs Your Loved One May Need Hoarding Help
            </h1>

            <p className="text-xl text-gray-600">
              It&apos;s hard to watch someone you care about struggle with hoarding. Here&apos;s how to tell when it&apos;s gone beyond &quot;messy&quot; and into territory where they really need help.
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p>
              Nobody wants to admit their parent, sibling, or friend has a hoarding problem. It&apos;s easy to make excuses—they&apos;re just a collector, they&apos;ve always been a bit of a pack rat, they&apos;ll get around to cleaning eventually. I get it. It&apos;s a tough thing to face.
            </p>

            <p>
              But there&apos;s a difference between someone who has too much stuff and someone who genuinely needs help. And the longer you wait, the harder it gets—both for them and for you. So how do you know when it&apos;s crossed that line?
            </p>

            <p>
              Here are five things to watch for:
            </p>

            {signs.map((sign) => (
              <div key={sign.number} className="my-8 bg-fog rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cta-rose text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {sign.number}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gunmetal mt-0 mb-3">{sign.title}</h2>
                    <p className="text-gray-600 mb-0">{sign.content}</p>
                  </div>
                </div>
              </div>
            ))}

            <h2>So What Do You Actually Do?</h2>

            <p>
              Okay, so you&apos;ve read through this list and you&apos;re thinking, &quot;yep, that sounds like my dad.&quot; Now what?
            </p>

            <p>
              First off, don&apos;t go in guns blazing. Seriously. Showing up and demanding they throw everything away is only going to backfire. Hoarding is a mental health issue, not a character flaw, and approaching it with judgment will just make them shut down.
            </p>

            <p>
              Instead, try something like:
            </p>

            <ol>
              <li><strong>Lead with concern, not criticism.</strong> &quot;I&apos;m worried about you&quot; lands a lot better than &quot;this place is disgusting.&quot;</li>
              <li><strong>Focus on safety.</strong> Talk about blocked exits or fire hazards. It&apos;s harder to argue with concrete dangers.</li>
              <li><strong>Suggest they talk to someone.</strong> A therapist who specializes in hoarding can help in ways you can&apos;t.</li>
              <li><strong>Offer to help find professional cleaners.</strong> Not just any cleaning service—people who actually understand hoarding and won&apos;t shame them.</li>
              <li><strong>Be patient.</strong> This isn&apos;t going to get fixed in a weekend. There will probably be setbacks. That&apos;s just how it goes.</li>
            </ol>

            <div className="bg-yellow-50 border-l-4 border-brand-yellow p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gunmetal mt-0 mb-2">When You Can&apos;t Wait</h3>
                  <p className="mb-0 text-gray-700">
                    Sometimes the situation is urgent. No running water. Pests everywhere. Health inspectors threatening to condemn the property. If it&apos;s gotten to that point, you need to act fast. Call a professional hoarding cleanup service to deal with the immediate crisis while you figure out the longer-term stuff.
                  </p>
                </div>
              </div>
            </div>

            <h2>We Can Help</h2>

            <p>
              We&apos;ve been doing this for a while now, all across the Treasure Valley—Boise, Meridian, Nampa, Caldwell, Eagle. We&apos;ve seen just about every situation you can imagine.
            </p>

            <p>
              What we&apos;ve learned is that the cleanup part is actually the easy part. The hard part is doing it in a way that respects your loved one and doesn&apos;t make them feel like garbage themselves. That&apos;s what we focus on.
            </p>

            <p>
              If you want to talk through what you&apos;re dealing with, just give us a call. No sales pitch, no pressure. Sometimes people just need to hear from someone who&apos;s seen this before and can tell them it&apos;s going to be okay.
            </p>
          </article>

          {/* Related Links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/hoarding-signs" className="bg-fog rounded-lg p-4 hover:shadow-md transition-shadow">
              <span className="text-sm text-light-blue font-medium">Related Resource</span>
              <h3 className="font-bold text-gunmetal">Signs of Hoarding Disorder</h3>
            </Link>
            <Link href="/helping-a-hoarder" className="bg-fog rounded-lg p-4 hover:shadow-md transition-shadow">
              <span className="text-sm text-light-blue font-medium">Related Resource</span>
              <h3 className="font-bold text-gunmetal">How to Help a Hoarder</h3>
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Worried About Someone You Love?
            </h3>
            <p className="text-gray-300 mb-6">
              We&apos;re happy to talk it through with you. No obligation.
            </p>
            <a
              href="tel:2083611982"
              className="inline-flex items-center gap-2 bg-brand-yellow text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              (208) 361-1982
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
