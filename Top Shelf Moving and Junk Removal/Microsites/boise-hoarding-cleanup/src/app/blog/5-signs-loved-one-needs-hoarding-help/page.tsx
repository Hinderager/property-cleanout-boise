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
    title: 'They No Longer Invite People Over',
    content: 'One of the earliest signs of a hoarding problem is social withdrawal. If your loved one used to host gatherings but now always makes excuses or insists on meeting elsewhere, it could be because they\'re embarrassed about the state of their home. They may decline help with repairs, refuse to let family visit, or become defensive when asked about their living situation.',
  },
  {
    number: 2,
    title: 'Living Spaces Are No Longer Usable',
    content: 'When rooms can no longer be used for their intended purpose, it\'s a serious warning sign. A dining room buried under boxes, a bedroom where the bed is covered in items, or a kitchen where cooking is impossible all indicate that hoarding has progressed beyond simple clutter. If your loved one is sleeping on a couch because their bedroom is full, it\'s time to seek help.',
  },
  {
    number: 3,
    title: 'There Are Safety Hazards',
    content: 'Hoarding creates dangerous conditions including blocked exits, fire hazards from items near heaters or stoves, tripping hazards from piled items, and structural stress from weight. If you notice blocked doorways, pathways through rooms, or items stacked precariously high, these are serious safety concerns that warrant immediate attention.',
  },
  {
    number: 4,
    title: 'Their Health Is Declining',
    content: 'Hoarding environments can cause or worsen health problems. Watch for signs like respiratory issues from dust or mold, pest infestations, inability to prepare healthy meals, missed medications buried under clutter, or declining personal hygiene. If your loved one seems more tired, sick, or generally unwell, their living environment could be a contributing factor.',
  },
  {
    number: 5,
    title: 'They Get Extremely Distressed About Discarding Items',
    content: 'While most of us have some attachment to possessions, people with hoarding disorder experience extreme anxiety at the thought of letting things go. If your loved one becomes angry, tearful, or panicked when discussing getting rid of items—even obvious trash like empty containers or junk mail—this emotional response indicates hoarding disorder rather than simple collecting or messiness.',
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
              Recognizing when a family member needs professional help with hoarding can be difficult.
              Here are the key warning signs that indicate it may be time to seek assistance.
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p>
              Watching a loved one struggle with hoarding is heartbreaking. You may have noticed changes over time—more clutter, less willingness to have visitors, increased anxiety about possessions. But how do you know when it&apos;s crossed the line from &quot;a bit messy&quot; to a serious problem requiring professional help?
            </p>

            <p>
              Here are five key signs that your loved one may need hoarding help:
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

            <h2>What to Do If You Recognize These Signs</h2>

            <p>
              If you&apos;ve identified one or more of these signs in your loved one, here are some steps you can take:
            </p>

            <ol>
              <li><strong>Approach with compassion.</strong> Remember that hoarding is a mental health condition, not a choice or character flaw.</li>
              <li><strong>Express concern, not criticism.</strong> Focus on their wellbeing and safety rather than the mess.</li>
              <li><strong>Encourage professional help.</strong> A therapist specializing in hoarding can address the underlying issues.</li>
              <li><strong>Consider professional cleanup.</strong> Compassionate hoarding cleanup services can help restore the home safely.</li>
              <li><strong>Be patient.</strong> Recovery from hoarding takes time and often involves setbacks.</li>
            </ol>

            <div className="bg-yellow-50 border-l-4 border-brand-yellow p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gunmetal mt-0 mb-2">When It&apos;s an Emergency</h3>
                  <p className="mb-0 text-gray-700">
                    If there are immediate safety concerns—no running water, blocked exits, pest infestations, or health code violations—don&apos;t wait. Contact professional hoarding cleanup services immediately to address the urgent issues while working on long-term solutions.
                  </p>
                </div>
              </div>
            </div>

            <h2>We&apos;re Here to Help</h2>

            <p>
              At Hoarding Cleanup Pros, we understand the sensitive nature of hoarding situations. We work with families throughout Boise, Meridian, Nampa, Caldwell, and Eagle to provide compassionate, discreet cleanup services that treat your loved one with dignity.
            </p>

            <p>
              If you&apos;re concerned about a family member and would like to discuss options, we offer free, confidential consultations. There&apos;s no pressure—just honest advice about how we can help.
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
              Concerned About a Loved One?
            </h3>
            <p className="text-gray-300 mb-6">
              Free, confidential consultations. We can help you understand your options.
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
