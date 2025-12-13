import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone, Heart, MessageCircle, Users, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Support a Family Member Through Hoarding Cleanup',
  description: 'Hoarding cleanup is an emotional process. Learn how to provide meaningful support to your loved one during and after the cleanup process.',
  keywords: [
    'supporting hoarder during cleanup',
    'family hoarding cleanup',
    'help family member hoarding',
    'hoarding cleanup support',
    'emotional support hoarding',
    'family hoarding recovery',
  ],
  openGraph: {
    title: 'How to Support a Family Member Through Hoarding Cleanup',
    description: 'Learn how to provide meaningful support to your loved one during and after the hoarding cleanup process.',
    url: 'https://hoardingcleanupboise.com/blog/supporting-family-through-cleanup',
  },
  alternates: {
    canonical: 'https://hoardingcleanupboise.com/blog/supporting-family-through-cleanup',
  },
}

const supportStrategies = [
  {
    icon: Heart,
    title: 'Lead with Empathy',
    description: 'Remember that every item being removed may feel like a loss to them. Acknowledge their feelings without minimizing them.',
  },
  {
    icon: MessageCircle,
    title: 'Maintain Communication',
    description: 'Check in regularly but not obsessively. Ask open-ended questions about how they\'re feeling rather than focusing on progress.',
  },
  {
    icon: Users,
    title: 'Be Present, Not Pushy',
    description: 'Offer to be there during cleanup if they want, but respect if they need space. Your presence should comfort, not pressure.',
  },
  {
    icon: Shield,
    title: 'Protect Their Dignity',
    description: 'Keep the situation private. Don\'t share details with extended family or friends without permission.',
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
                  October 15, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  8 min read
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              How to Support a Family Member Through Hoarding Cleanup
            </h1>

            <p className="text-xl text-gray-600">
              Hoarding cleanup is an emotional process for everyone involved. Learn how to provide meaningful support to your loved one during and after the cleanup.
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p>
              When a family member finally agrees to hoarding cleanup, it&apos;s natural to feel relieved. But the cleanup process itself can be incredibly difficult for the person with hoarding disorder. Your role as a supportive family member is crucial to helping them get through it—and preventing relapse afterward.
            </p>

            <h2>Understanding the Emotional Journey</h2>

            <p>
              For someone with hoarding disorder, cleanup isn&apos;t just about removing items—it&apos;s an emotional journey that may include:
            </p>

            <ul>
              <li><strong>Grief:</strong> Each item removed can feel like losing a friend or memory</li>
              <li><strong>Anxiety:</strong> Worry about needing items later or making wrong decisions</li>
              <li><strong>Shame:</strong> Embarrassment about letting others see the full extent</li>
              <li><strong>Fear:</strong> Concern about judgment from cleanup workers or family</li>
              <li><strong>Relief:</strong> Often mixed with guilt about feeling relieved</li>
              <li><strong>Exhaustion:</strong> Decision fatigue from choosing what stays and goes</li>
            </ul>

            <p>
              Understanding these emotions helps you respond with compassion rather than frustration when the process gets difficult.
            </p>

            <h2>Before the Cleanup: Setting Up for Success</h2>

            <h3>Have Honest Conversations</h3>
            <p>
              Before cleanup begins, talk with your family member about their concerns and fears. What are they most worried about? Are there specific items they&apos;re particularly anxious about? Understanding their concerns helps you and the cleanup team be sensitive to their needs.
            </p>

            <h3>Establish Clear Boundaries</h3>
            <p>
              Decide together what role you&apos;ll play. Will you be present during cleanup? Will you help make decisions, or just provide moral support? Setting these expectations prevents conflict during the process.
            </p>

            <h3>Identify &quot;Must Save&quot; Items</h3>
            <p>
              Work with your family member to identify categories of items that should never be discarded without their explicit approval—important documents, photos, specific sentimental items. Share this list with the cleanup team.
            </p>

            <h2>During the Cleanup: Being Present Effectively</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
              {supportStrategies.map((strategy, index) => (
                <div key={index} className="bg-fog rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-light-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <strategy.icon className="w-5 h-5 text-light-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gunmetal mb-1">{strategy.title}</h4>
                      <p className="text-sm text-gray-600">{strategy.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3>What to Say (and Not Say)</h3>

            <p><strong>Helpful things to say:</strong></p>
            <ul>
              <li>&quot;I&apos;m proud of you for doing this.&quot;</li>
              <li>&quot;How are you feeling right now?&quot;</li>
              <li>&quot;Would you like to take a break?&quot;</li>
              <li>&quot;I&apos;m here if you need me.&quot;</li>
              <li>&quot;This is hard, and you&apos;re handling it.&quot;</li>
            </ul>

            <p><strong>Things to avoid:</strong></p>
            <ul>
              <li>&quot;Finally! I can&apos;t believe you kept all this.&quot;</li>
              <li>&quot;Why would you want to keep that?&quot;</li>
              <li>&quot;This is so much better already!&quot; (can feel dismissive)</li>
              <li>&quot;Just throw it all away.&quot;</li>
              <li>Taking photos without permission</li>
            </ul>

            <h2>After the Cleanup: Preventing Relapse</h2>

            <p>
              The work doesn&apos;t end when the cleanup is complete. Hoarding disorder is a chronic condition, and without ongoing support, the space may gradually return to its previous state.
            </p>

            <h3>Support Ongoing Treatment</h3>
            <p>
              Encourage continued therapy with a mental health professional who specializes in hoarding. Cleanup addresses the symptoms, but therapy addresses the underlying causes.
            </p>

            <h3>Celebrate Progress Without Policing</h3>
            <p>
              Acknowledge how far they&apos;ve come, but avoid becoming the &quot;clutter police.&quot; Constant monitoring can damage your relationship and actually increase anxiety around possessions.
            </p>

            <h3>Offer Practical Help</h3>
            <p>
              Help with systems to prevent re-accumulation: regular donation runs, help sorting mail, organizing seasonal items. Make it collaborative rather than supervisory.
            </p>

            <h3>Be Patient with Setbacks</h3>
            <p>
              Some backsliding is normal and doesn&apos;t mean failure. Respond to setbacks with compassion rather than criticism. Recovery is rarely linear.
            </p>

            <h2>Taking Care of Yourself</h2>

            <p>
              Supporting someone through hoarding cleanup is emotionally taxing. Remember to:
            </p>

            <ul>
              <li>Set boundaries on how much you can give</li>
              <li>Take breaks when you need them</li>
              <li>Seek your own support (therapy, support groups)</li>
              <li>Acknowledge your own complex feelings</li>
              <li>Celebrate your own resilience</li>
            </ul>

            <p>
              You can&apos;t pour from an empty cup. Taking care of yourself enables you to better support your loved one.
            </p>
          </article>

          {/* Related Links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/helping-a-hoarder" className="bg-fog rounded-lg p-4 hover:shadow-md transition-shadow">
              <span className="text-sm text-light-blue font-medium">Related Resource</span>
              <h3 className="font-bold text-gunmetal">How to Help a Hoarder</h3>
            </Link>
            <Link href="/blog/what-to-expect-hoarding-cleanup" className="bg-fog rounded-lg p-4 hover:shadow-md transition-shadow">
              <span className="text-sm text-light-blue font-medium">Related Post</span>
              <h3 className="font-bold text-gunmetal">What to Expect During Cleanup</h3>
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Compassionate Hoarding Cleanup?
            </h3>
            <p className="text-gray-300 mb-6">
              Our team works with families to provide supportive, dignified cleanup services.
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
