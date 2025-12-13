import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Signs of Hoarding Disorder | How to Recognize Hoarding',
  description: 'Learn how to recognize the signs and symptoms of hoarding disorder. Understanding warning signs helps you know when professional help is needed.',
  keywords: [
    'signs of hoarding',
    'hoarding symptoms',
    'hoarding warning signs',
    'how to tell if someone is a hoarder',
    'hoarding disorder symptoms',
    'hoarding red flags',
    'is my parent a hoarder',
    'hoarding vs collecting',
    'levels of hoarding',
  ],
  openGraph: {
    title: 'Signs of Hoarding Disorder | Recognize the Warning Signs',
    description: 'Learn how to recognize the signs and symptoms of hoarding disorder to help yourself or a loved one.',
    url: 'https://boise-hoarding-cleanup.com/hoarding-signs',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/hoarding-signs',
  },
}

const warningSigns = [
  {
    sign: 'Difficulty discarding items',
    description: 'Extreme distress when asked to throw away items, even those with no practical value',
  },
  {
    sign: 'Cluttered living spaces',
    description: 'Rooms that can no longer be used for their intended purpose due to accumulated items',
  },
  {
    sign: 'Acquiring excessive items',
    description: 'Compulsive buying, collecting free items, or inability to pass up "deals"',
  },
  {
    sign: 'Social isolation',
    description: 'Avoiding having people over due to embarrassment about the home\'s condition',
  },
  {
    sign: 'Emotional attachment to objects',
    description: 'Treating inanimate objects as if they have feelings or sentimental value',
  },
  {
    sign: 'Denial of the problem',
    description: 'Inability to see that the accumulation has become a problem',
  },
  {
    sign: 'Difficulty organizing',
    description: 'Items piled randomly rather than organized, with no system in place',
  },
  {
    sign: 'Anxiety about possessions',
    description: 'Excessive worry about needing items "someday" or fear of running out',
  },
]

const hoardingLevels = [
  {
    level: 'Level 1 - Mild',
    description: 'Light clutter, all doors and stairs accessible, no odors or sanitation issues',
    color: 'bg-green-100 border-green-500',
  },
  {
    level: 'Level 2 - Moderate',
    description: 'One room unusable, some odors present, evidence of housekeeping neglect',
    color: 'bg-yellow-100 border-yellow-500',
  },
  {
    level: 'Level 3 - Significant',
    description: 'Multiple unusable rooms, visible clutter outside, light pest evidence',
    color: 'bg-orange-100 border-orange-500',
  },
  {
    level: 'Level 4 - Severe',
    description: 'Structural damage, hazardous materials, poor ventilation, pet waste or infestations',
    color: 'bg-red-100 border-red-500',
  },
  {
    level: 'Level 5 - Extreme',
    description: 'No running water/electricity, human/animal waste, severe structural damage, fire hazard',
    color: 'bg-red-200 border-red-700',
  },
]

export default function HoardingSignsPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">
              Signs of Hoarding Disorder
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognizing the warning signs of hoarding is the first step toward getting help.
              Learn what to look for and when professional intervention may be needed.
            </p>
          </div>

          {/* Warning Signs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Common Warning Signs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {warningSigns.map((item, index) => (
                <div key={index} className="bg-fog rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-cta-rose flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gunmetal mb-1">{item.sign}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hoarding vs Collecting */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Hoarding vs. Collecting: What&apos;s the Difference?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Collecting (Healthy)
                </h3>
                <ul className="space-y-2 text-green-900">
                  <li>Items are organized and displayed</li>
                  <li>Collection brings joy and pride</li>
                  <li>Living spaces remain functional</li>
                  <li>Can discuss collection openly</li>
                  <li>Selective about what to acquire</li>
                  <li>Can part with items if needed</li>
                </ul>
              </div>

              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Hoarding (Problematic)
                </h3>
                <ul className="space-y-2 text-red-900">
                  <li>Items are piled and disorganized</li>
                  <li>Accumulation causes distress</li>
                  <li>Rooms become unusable</li>
                  <li>Shame and secrecy about home</li>
                  <li>Difficulty saying no to free items</li>
                  <li>Extreme distress when discarding</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Hoarding Levels */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The 5 Levels of Hoarding</h2>
            <p className="text-gray-600 mb-6">
              Mental health professionals use a 5-level scale to assess hoarding severity.
              Understanding the level helps determine what type of intervention is needed.
            </p>

            <div className="space-y-4">
              {hoardingLevels.map((level, index) => (
                <div key={index} className={`${level.color} border-l-4 rounded-r-lg p-4`}>
                  <h3 className="font-bold text-gunmetal">{level.level}</h3>
                  <p className="text-gray-700">{level.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* When to Get Help */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">When to Seek Professional Help</h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Consider seeking professional help if you or someone you know:
              </p>
              <ul>
                <li>Cannot use rooms for their intended purpose</li>
                <li>Has safety concerns (fire hazards, blocked exits, fall risks)</li>
                <li>Is receiving complaints from neighbors or landlords</li>
                <li>Has health issues related to living conditions</li>
                <li>Is experiencing relationship problems due to hoarding</li>
                <li>Has been threatened with eviction or code violations</li>
                <li>Cannot prepare for a move or home sale</li>
              </ul>
              <p>
                Early intervention is key. The longer hoarding continues, the more difficult
                it becomes to address. There is no shame in asking for help.
              </p>
            </div>
          </section>

          {/* Related Pages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link href="/about-hoarding" className="group bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gunmetal mb-2 flex items-center gap-2">
                What is Hoarding?
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600">Learn more about hoarding disorder and what causes it.</p>
            </Link>
            <Link href="/helping-a-hoarder" className="group bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gunmetal mb-2 flex items-center gap-2">
                How to Help a Hoarder
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600">Practical tips for supporting someone who hoards.</p>
            </Link>
          </div>

          {/* CTA */}
          <div className="p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Recognize These Signs? We Can Help.
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our compassionate team provides professional hoarding cleanup services in Boise and the Treasure Valley.
              Free, confidential consultations. No judgment.
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
