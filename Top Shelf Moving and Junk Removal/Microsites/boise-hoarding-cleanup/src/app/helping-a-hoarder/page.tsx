import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Heart, MessageCircle, Shield, Clock, CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Help a Hoarder | Supporting a Loved One',
  description: 'Learn how to help a family member or friend who struggles with hoarding. Practical tips for approaching the conversation and supporting recovery.',
  keywords: [
    'how to help a hoarder',
    'helping a hoarder',
    'how to help someone who hoards',
    'supporting a hoarder',
    'talking to a hoarder',
    'hoarder intervention',
    'family member hoarding',
    'parent is a hoarder',
    'hoarding family support',
  ],
  openGraph: {
    title: 'How to Help a Hoarder | Supporting a Loved One',
    description: 'Practical tips for helping a family member or friend who struggles with hoarding disorder.',
    url: 'https://boise-hoarding-cleanup.com/helping-a-hoarder',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/helping-a-hoarder',
  },
}

const dosAndDonts = {
  dos: [
    'Approach with empathy and compassion',
    'Listen without judgment',
    'Focus on safety concerns, not the mess',
    'Respect their attachment to items',
    'Offer to help, don\'t take over',
    'Celebrate small victories',
    'Be patient - recovery takes time',
    'Encourage professional help',
  ],
  donts: [
    'Throw away items without permission',
    'Use shame or guilt tactics',
    'Threaten or give ultimatums',
    'Compare them to TV shows',
    'Clean up behind their back',
    'Expect overnight change',
    'Make it about you',
    'Give up after setbacks',
  ],
}

const conversationTips = [
  {
    icon: Heart,
    title: 'Lead with Love',
    description: 'Express that you care about them, not just the state of their home. "I love you and I\'m worried about you."',
  },
  {
    icon: MessageCircle,
    title: 'Use "I" Statements',
    description: 'Instead of "Your house is a disaster," try "I feel worried when I see blocked exits."',
  },
  {
    icon: Shield,
    title: 'Focus on Safety',
    description: 'Express concerns about their health and safety, not the appearance of the home.',
  },
  {
    icon: Clock,
    title: 'Be Patient',
    description: 'One conversation rarely changes things. Be prepared for an ongoing dialogue over time.',
  },
]

export default function HelpingAHoarderPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">
              How to Help a Hoarder
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watching a loved one struggle with hoarding is painful. Learn how to approach the situation
              with compassion and provide meaningful support without damaging your relationship.
            </p>
          </div>

          {/* Understanding Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Understanding Their Perspective</h2>

            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>
                Before trying to help, it&apos;s important to understand what your loved one is experiencing.
                Hoarding is not about being lazy or messy—it&apos;s a mental health condition that causes
                genuine distress when parting with possessions.
              </p>
              <p>
                For someone with hoarding disorder:
              </p>
              <ul>
                <li>Every item may feel valuable or irreplaceable</li>
                <li>Discarding items can feel like losing a part of themselves</li>
                <li>They may not see the clutter the same way you do</li>
                <li>Shame often prevents them from asking for help</li>
                <li>Past attempts to clean may have felt traumatic</li>
              </ul>
            </div>
          </section>

          {/* Do's and Don'ts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Do&apos;s and Don&apos;ts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Do
                </h3>
                <ul className="space-y-3">
                  {dosAndDonts.dos.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-green-900">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Don&apos;t
                </h3>
                <ul className="space-y-3">
                  {dosAndDonts.donts.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-red-900">
                      <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Starting the Conversation */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Starting the Conversation</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {conversationTips.map((tip, index) => (
                <div key={index} className="bg-fog rounded-xl p-6">
                  <div className="w-12 h-12 bg-light-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <tip.icon className="w-6 h-6 text-light-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gunmetal mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-fog rounded-xl p-6">
              <h3 className="text-xl font-bold text-gunmetal mb-4">Sample Conversation Starters</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-light-blue pl-4">
                  &quot;I&apos;ve noticed you seem stressed lately. Is there anything I can help with?&quot;
                </li>
                <li className="border-l-4 border-light-blue pl-4">
                  &quot;I care about you and want to make sure you&apos;re safe. Can we talk about what&apos;s going on?&quot;
                </li>
                <li className="border-l-4 border-light-blue pl-4">
                  &quot;I found a company that helps people in situations like this. Would you be open to learning more?&quot;
                </li>
                <li className="border-l-4 border-light-blue pl-4">
                  &quot;I&apos;m not here to judge. I just want to understand how I can support you.&quot;
                </li>
              </ul>
            </div>
          </section>

          {/* When Professional Help is Needed */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">When to Involve Professionals</h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Sometimes family support isn&apos;t enough, and professional help becomes necessary.
                Consider involving professionals when:
              </p>
              <ul>
                <li><strong>Safety is at risk:</strong> Fire hazards, structural damage, or health concerns</li>
                <li><strong>Legal issues arise:</strong> Eviction notices, code violations, or custody concerns</li>
                <li><strong>Health is declining:</strong> The person&apos;s physical or mental health is suffering</li>
                <li><strong>Family attempts have failed:</strong> Previous cleanup efforts haven&apos;t worked</li>
                <li><strong>The situation is severe:</strong> Level 3-5 hoarding typically requires professional intervention</li>
              </ul>
              <p>
                Professional hoarding cleanup services can work alongside therapists and family members
                to provide compassionate, effective help while preserving the person&apos;s dignity.
              </p>
            </div>
          </section>

          {/* Taking Care of Yourself */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Taking Care of Yourself</h2>

            <div className="bg-fog rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Supporting someone with hoarding disorder can be emotionally draining. Remember:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>You cannot force someone to change—they must want it themselves</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Set healthy boundaries for your own wellbeing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Consider joining a support group for families of hoarders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>It&apos;s okay to feel frustrated—this is hard</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Seek your own therapy or counseling if needed</span>
                </li>
              </ul>
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
            <Link href="/hoarding-signs" className="group bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gunmetal mb-2 flex items-center gap-2">
                Signs of Hoarding
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600">Recognize the warning signs of hoarding disorder.</p>
            </Link>
          </div>

          {/* CTA */}
          <div className="p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Help Your Loved One?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our compassionate team works with families throughout the Boise area. We can help you
              navigate the cleanup process while treating your loved one with dignity and respect.
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
