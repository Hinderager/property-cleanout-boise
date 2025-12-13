import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Brain, AlertCircle, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What is Hoarding Disorder? | Understanding Hoarding',
  description: 'Learn about hoarding disorder - what causes it, how it affects people, and why professional help matters. Understanding hoarding is the first step to getting help.',
  keywords: [
    'what is hoarding',
    'hoarding disorder',
    'hoarding definition',
    'hoarding causes',
    'why do people hoard',
    'hoarding mental health',
    'compulsive hoarding',
    'hoarding behavior',
    'understanding hoarding',
  ],
  openGraph: {
    title: 'What is Hoarding Disorder? | Understanding Hoarding',
    description: 'Learn about hoarding disorder - what causes it, how it affects people, and why professional help matters.',
    url: 'https://boise-hoarding-cleanup.com/about-hoarding',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/about-hoarding',
  },
}

export default function AboutHoardingPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">
              What is Hoarding Disorder?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding hoarding is the first step toward helping yourself or a loved one.
              Learn what hoarding disorder is, what causes it, and how to get help.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-fog rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-light-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-light-blue" />
              </div>
              <h3 className="font-bold text-gunmetal mb-2">Mental Health Condition</h3>
              <p className="text-sm text-gray-600">Hoarding is a recognized mental health disorder, not laziness or choice</p>
            </div>
            <div className="bg-fog rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-light-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6 text-light-blue" />
              </div>
              <h3 className="font-bold text-gunmetal mb-2">2-6% of Population</h3>
              <p className="text-sm text-gray-600">Millions of Americans are affected by hoarding disorder</p>
            </div>
            <div className="bg-fog rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-light-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-light-blue" />
              </div>
              <h3 className="font-bold text-gunmetal mb-2">Treatable Condition</h3>
              <p className="text-sm text-gray-600">With proper support, people can recover and maintain clean homes</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-3xl font-bold text-gunmetal">Understanding Hoarding Disorder</h2>

            <p>
              <strong>Hoarding disorder</strong> is a mental health condition characterized by persistent difficulty discarding possessions, regardless of their actual value. According to the{' '}
              <a href="https://www.psychiatry.org/patients-families/hoarding-disorder/what-is-hoarding-disorder" target="_blank" rel="noopener noreferrer" className="text-dark-blue underline hover:text-light-blue">
                American Psychiatric Association
              </a>, people with hoarding disorder experience distress at the thought of getting rid of items and accumulate possessions to the point where living spaces become cluttered and difficult to use.
            </p>

            <p>
              It&apos;s important to understand that hoarding is <em>not</em> the same as being messy, lazy, or simply collecting items. The{' '}
              <a href="https://iocdf.org/about-hoarding/" target="_blank" rel="noopener noreferrer" className="text-dark-blue underline hover:text-light-blue">
                International OCD Foundation
              </a>{' '}
              notes that hoarding is a complex condition that often requires professional help to address effectively.
            </p>

            <h2 className="text-3xl font-bold text-gunmetal mt-10">What Causes Hoarding?</h2>

            <p>
              Researchers believe hoarding disorder results from a combination of factors:
            </p>

            <ul>
              <li><strong>Genetics:</strong> Hoarding often runs in families, suggesting a genetic component</li>
              <li><strong>Brain Function:</strong> Studies show differences in how hoarders&apos; brains process decisions about possessions</li>
              <li><strong>Trauma:</strong> Hoarding can develop after traumatic experiences, loss, or major life changes</li>
              <li><strong>Other Mental Health Conditions:</strong> Hoarding often co-occurs with depression, anxiety, ADHD, or OCD</li>
              <li><strong>Emotional Attachment:</strong> Items may represent security, memories, or identity</li>
            </ul>

            <h2 className="text-3xl font-bold text-gunmetal mt-10">How Hoarding Affects Daily Life</h2>

            <p>
              Hoarding disorder can significantly impact a person&apos;s quality of life and relationships:
            </p>

            <ul>
              <li><strong>Living Spaces:</strong> Rooms become unusable for their intended purpose</li>
              <li><strong>Safety Hazards:</strong> Fire risks, falls, and pest infestations become common</li>
              <li><strong>Health Issues:</strong> Poor air quality, mold, and unsanitary conditions</li>
              <li><strong>Social Isolation:</strong> Shame and embarrassment lead to avoiding visitors</li>
              <li><strong>Family Strain:</strong> Relationships with family members often suffer</li>
              <li><strong>Financial Problems:</strong> Compulsive buying and inability to find bills</li>
            </ul>

            <h2 className="text-3xl font-bold text-gunmetal mt-10">Getting Help for Hoarding</h2>

            <p>
              Recovery from hoarding disorder typically requires a multi-faceted approach:
            </p>

            <ol>
              <li><strong>Professional Therapy:</strong> Cognitive-behavioral therapy (CBT) specifically for hoarding. The{' '}
                <a href="https://adaa.org/understanding-anxiety/hoarding-disorder" target="_blank" rel="noopener noreferrer" className="text-dark-blue underline hover:text-light-blue">
                  Anxiety and Depression Association of America
                </a>{' '}
                provides resources for finding qualified therapists.
              </li>
              <li><strong>Support Groups:</strong> Connecting with others who understand the struggle</li>
              <li><strong>Professional Cleanup:</strong> Working with compassionate cleanup professionals who understand hoarding as a condition</li>
              <li><strong>Ongoing Maintenance:</strong> Developing new habits and coping strategies</li>
            </ol>

            <p>
              The most important thing to remember is that <strong>hoarding is treatable</strong>, and recovery is possible with the right support system in place.
            </p>

            {/* External Resources */}
            <div className="bg-fog rounded-xl p-6 mt-8 not-prose">
              <h3 className="text-lg font-bold text-gunmetal mb-4">Trusted Resources for Hoarding Information</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.psychiatry.org/patients-families/hoarding-disorder" target="_blank" rel="noopener noreferrer" className="text-dark-blue underline hover:text-light-blue">
                    American Psychiatric Association - Hoarding Disorder
                  </a>
                </li>
                <li>
                  <a href="https://iocdf.org/about-hoarding/" target="_blank" rel="noopener noreferrer" className="text-dark-blue underline hover:text-light-blue">
                    International OCD Foundation - About Hoarding
                  </a>
                </li>
                <li>
                  <a href="https://adaa.org/understanding-anxiety/hoarding-disorder" target="_blank" rel="noopener noreferrer" className="text-dark-blue underline hover:text-light-blue">
                    Anxiety and Depression Association of America
                  </a>
                </li>
                <li>
                  <a href="https://www.nimh.nih.gov/health/publications/obsessive-compulsive-disorder-when-unwanted-thoughts-or-repetitive-behaviors-take-over" target="_blank" rel="noopener noreferrer" className="text-dark-blue underline hover:text-light-blue">
                    National Institute of Mental Health
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Related Pages */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/hoarding-signs" className="group bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gunmetal mb-2 flex items-center gap-2">
                Signs of Hoarding
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600">Learn how to recognize the signs that someone may have hoarding disorder.</p>
            </Link>
            <Link href="/helping-a-hoarder" className="group bg-fog rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gunmetal mb-2 flex items-center gap-2">
                How to Help a Hoarder
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600">Practical tips for supporting a loved one who struggles with hoarding.</p>
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help With Hoarding Cleanup?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our compassionate team provides professional hoarding cleanup services throughout the Boise area.
              We treat every client with dignity and respect. No judgment, just help.
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
