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
    url: 'https://boise-hoarding-cleanup.com/blog/5-signs-loved-one-needs-hoarding-help',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/blog/5-signs-loved-one-needs-hoarding-help',
  },
}

const signs = [
  {
    number: 1,
    title: 'They Don\'t Want Visitors Anymore',
    content: 'Used to be your mom hosted every holiday. Now she wants to meet at Applebee\'s instead. Your brother dodges every time you mention stopping by. This happens a lot with hoarding. People feel embarrassed, even if they\'d never say it out loud. Push too hard and they get defensive or just change the subject. They still want to see you. They just don\'t want you seeing their place.',
  },
  {
    number: 2,
    title: 'Rooms Have Lost Their Purpose',
    content: 'The dining table is buried. The bed has stuff piled on it. The kitchen? Good luck cooking anything in there. When rooms stop working the way they\'re supposed to, that\'s worth paying attention to. We\'ve worked with families where someone had been sleeping on half a couch for months because their bedroom was packed floor to ceiling. That\'s beyond messy.',
  },
  {
    number: 3,
    title: 'It\'s Becoming Dangerous',
    content: 'This one keeps us up at night. Newspapers stacked against the door. Boxes near the water heater. Narrow paths winding through each room. These are real hazards. Fire risks. Tripping risks. Sometimes the floors start sagging from all the weight. If getting out quickly in an emergency would be tough, that\'s serious.',
  },
  {
    number: 4,
    title: 'Their Health Is Slipping',
    content: 'Hoarding affects the body too. Dust builds up. Mold grows. Pests find their way in. Cooking becomes impossible, so nutrition suffers. Medications get lost in the clutter. We hear from families who notice their parent looking more tired lately, catching colds more often, seeming generally worn down. Sometimes the home is part of the problem.',
  },
  {
    number: 5,
    title: 'Throwing Away Anything Is a Crisis',
    content: 'We all hang onto things. That\'s human. But there\'s a difference between sentimental attachment and panic. If tossing an empty butter container leads to tears or a shouting match, something else is going on. People with hoarding disorder feel real fear about losing things. Even stuff that looks like trash to everyone else. It\'s anxiety, not stubbornness.',
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
              When does clutter become something more? Here&apos;s what to watch for.
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p>
              You&apos;ve probably noticed things piling up at their place. Maybe you&apos;ve made excuses for it. They&apos;re collectors. They grew up without much. They&apos;ll clean it up eventually.
            </p>

            <p>
              But something feels off and you can&apos;t shake it.
            </p>

            <p>
              There&apos;s a line between having too much stuff and having a hoarding problem. Figuring out where that line is? That&apos;s hard. Especially when it&apos;s someone you love.
            </p>

            <p>
              Here are five signs that things may have gone past clutter:
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

            <h2>Now What?</h2>

            <p>
              So some of this sounds familiar. What do you do about it?
            </p>

            <p>
              The worst thing you can do is show up and start throwing stuff out. That never works. It usually makes things worse.
            </p>

            <p>
              Hoarding is a mental health thing, not a laziness thing. Treating it like a character flaw just pushes people away.
            </p>

            <p>
              Some things that actually help:
            </p>

            <ul>
              <li><strong>Start with worry, not judgment.</strong> &quot;I&apos;m concerned about you&quot; goes further than &quot;this place is a disaster.&quot;</li>
              <li><strong>Talk about safety.</strong> Blocked exits and fire hazards are hard to argue with.</li>
              <li><strong>Mention therapy.</strong> Therapists who specialize in hoarding exist. They can help in ways family can&apos;t.</li>
              <li><strong>Find the right cleanup help.</strong> Not every cleaning company gets it. You want people who won&apos;t make your loved one feel ashamed.</li>
              <li><strong>Give it time.</strong> This won&apos;t be fixed next week. Or next month. Progress happens slowly.</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-brand-yellow p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gunmetal mt-0 mb-2">When It&apos;s Urgent</h3>
                  <p className="mb-0 text-gray-700">
                    Some situations can&apos;t wait. No water. Pests everywhere. The city threatening to condemn the place. If that&apos;s where things are, call a professional hoarding cleanup crew now. Handle the crisis first, then work on the rest.
                  </p>
                </div>
              </div>
            </div>

            <h2>How We Can Help</h2>

            <p>
              We do hoarding cleanup all over the Treasure Valley. Boise, Meridian, Nampa, Caldwell, Eagle. We&apos;ve seen a lot.
            </p>

            <p>
              The actual cleaning isn&apos;t the hard part. Anyone can haul stuff away. The hard part is doing it without making someone feel terrible about themselves. That&apos;s what we try to get right.
            </p>

            <p>
              If you want to talk about what&apos;s going on, call us. We&apos;re not going to pressure you into anything. Sometimes it just helps to talk to someone who&apos;s been through this before.
            </p>
          </article>

          {/* Related Links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/hoarding-signs" className="bg-fog rounded-lg p-4 hover:shadow-md transition-shadow">
              <span className="text-sm text-light-blue font-medium">Related</span>
              <h3 className="font-bold text-gunmetal">Signs of Hoarding Disorder</h3>
            </Link>
            <Link href="/helping-a-hoarder" className="bg-fog rounded-lg p-4 hover:shadow-md transition-shadow">
              <span className="text-sm text-light-blue font-medium">Related</span>
              <h3 className="font-bold text-gunmetal">How to Help a Hoarder</h3>
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Talk It Through?
            </h3>
            <p className="text-gray-300 mb-6">
              No pressure. Just a conversation.
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
