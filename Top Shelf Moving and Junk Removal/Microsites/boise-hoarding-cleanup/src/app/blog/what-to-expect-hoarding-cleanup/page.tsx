import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What to Expect During a Professional Hoarding Cleanup',
  description: 'Wondering what happens during a professional hoarding cleanup? We walk you through the entire process from initial consultation to final cleaning.',
  keywords: [
    'hoarding cleanup process',
    'what to expect hoarding cleanup',
    'professional hoarding cleanup',
    'hoarding cleanup steps',
    'how hoarding cleanup works',
  ],
  openGraph: {
    title: 'What to Expect During a Professional Hoarding Cleanup',
    description: 'We walk you through the entire hoarding cleanup process from initial consultation to final cleaning.',
    url: 'https://boise-hoarding-cleanup.com/blog/what-to-expect-hoarding-cleanup',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/blog/what-to-expect-hoarding-cleanup',
  },
}

const steps = [
  {
    phase: 'Phase 1',
    title: 'Initial Consultation',
    description: 'The process begins with a confidential phone call where we learn about your situation. We\'ll ask about the size of the property, the level of hoarding, any special concerns, and your goals. This call is free and there\'s no obligation.',
  },
  {
    phase: 'Phase 2',
    title: 'On-Site Assessment',
    description: 'We\'ll schedule a time to visit the property and assess the situation in person. During this visit, we evaluate the scope of work, identify any safety hazards, and discuss the cleanup approach. We provide a detailed quote after the assessment.',
  },
  {
    phase: 'Phase 3',
    title: 'Planning & Preparation',
    description: 'Before cleanup begins, we work with you to identify items that must be saved—important documents, valuables, sentimental items. We also coordinate logistics like dumpster delivery and cleaning supplies.',
  },
  {
    phase: 'Phase 4',
    title: 'Sorting & Removal',
    description: 'Our team systematically works through the property, sorting items into categories: keep, donate, recycle, and dispose. We work at a pace that\'s comfortable for the homeowner if they choose to be involved.',
  },
  {
    phase: 'Phase 5',
    title: 'Deep Cleaning',
    description: 'Once items are removed, we thoroughly clean the space. This includes cleaning floors, walls, and surfaces, addressing any odors, and making the space livable again.',
  },
  {
    phase: 'Phase 6',
    title: 'Follow-Up Support',
    description: 'After cleanup, we can provide resources for ongoing support, including organizing tips and referrals to therapists who specialize in hoarding if needed.',
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
                Cleanup Process
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  November 15, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  7 min read
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              What to Expect During a Professional Hoarding Cleanup
            </h1>

            <p className="text-xl text-gray-600">
              Wondering what happens during a hoarding cleanup? We walk you through the entire process from initial consultation to final cleaning.
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p>
              If you&apos;ve never been through a professional hoarding cleanup, the process can seem mysterious or even intimidating. You might wonder: Will strangers be judging the home? Will important items get thrown away? How long will it take?
            </p>

            <p>
              Understanding what to expect can help ease anxiety and prepare you for the process. Here&apos;s a detailed walkthrough of how professional hoarding cleanup works.
            </p>

            <h2>The Hoarding Cleanup Process</h2>

            {steps.map((step, index) => (
              <div key={index} className="my-6 border-l-4 border-light-blue pl-6">
                <span className="text-light-blue font-bold text-sm">{step.phase}</span>
                <h3 className="text-xl font-bold text-gunmetal mt-1 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-0">{step.description}</p>
              </div>
            ))}

            <h2>What Makes Our Approach Different</h2>

            <p>
              Not all hoarding cleanup services are the same. Here&apos;s what sets compassionate, professional services apart:
            </p>

            <ul>
              <li className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>No Judgment:</strong> We understand hoarding is a mental health condition, not a character flaw</span>
              </li>
              <li className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>Respect for Possessions:</strong> We never throw away items without permission</span>
              </li>
              <li className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>Discreet Service:</strong> Unmarked vehicles and confidential handling</span>
              </li>
              <li className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>Eco-Friendly:</strong> We donate usable items and recycle whenever possible</span>
              </li>
              <li className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>Flexible Pace:</strong> We work at a speed that&apos;s comfortable for everyone involved</span>
              </li>
            </ul>

            <h2>How Long Does Hoarding Cleanup Take?</h2>

            <p>
              The timeline varies significantly based on several factors:
            </p>

            <ul>
              <li><strong>Size of the property:</strong> A small apartment takes less time than a large house</li>
              <li><strong>Severity of hoarding:</strong> Level 1-2 hoarding may take hours; Level 4-5 may take days</li>
              <li><strong>Homeowner involvement:</strong> Having the homeowner sort items adds time but can be therapeutic</li>
              <li><strong>Special circumstances:</strong> Biohazards, pest infestations, or structural issues add complexity</li>
            </ul>

            <p>
              Most residential hoarding cleanups in the Boise area take between 1-5 days. We&apos;ll provide a realistic timeline estimate during your consultation.
            </p>

            <h2>How Much Does Hoarding Cleanup Cost?</h2>

            <p>
              Hoarding cleanup costs depend on the scope of work. Factors include square footage, volume of items to remove, disposal fees, and any specialized cleaning needed. Most residential projects in our area range from $500 for minor cleanouts to $5,000+ for severe hoarding situations.
            </p>

            <p>
              We provide detailed quotes after our on-site assessment so there are no surprises. We also offer payment plans for larger projects.
            </p>

            <h2>Ready to Take the First Step?</h2>

            <p>
              If you or a loved one needs help with a hoarding situation, we&apos;re here to assist. Our initial consultation is free and completely confidential. We&apos;ll answer your questions, explain the process, and help you understand your options—with no pressure to commit.
            </p>
          </article>

          {/* CTA */}
          <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6">
              Free, no-obligation consultations. We&apos;ll answer all your questions.
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
