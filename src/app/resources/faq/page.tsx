import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone } from 'lucide-react'
import { FaqSchema } from '@/components/FaqSchema'

/**
 * The questions this page shows. The FAQPage schema below is built from this
 * same array, so the markup Google and the LLMs read can never describe
 * something different from what a visitor sees.
 */
const FAQS: { question: string; answer: string[] }[] = [
  {
    question: "How much does a property cleanout cost?",
    answer: [
      "Cost depends on the amount of stuff to remove. We offer free onsite estimates so you know the exact price before we start.",
    ],
  },
  {
    question: "How quickly can you do a cleanout?",
    answer: [
      "Often same-day or next-day. Call us and we'll get you scheduled ASAP.",
    ],
  },
  {
    question: "Do I need to be there during the cleanout?",
    answer: [
      "Not necessarily. Many landlords and property managers give us access and we handle everything.",
    ],
  },
  {
    question: "What do you do with the stuff you remove?",
    answer: [
      "We donate usable items when possible, recycle what we can, and dispose of the rest responsibly.",
    ],
  },
  {
    question: "Do you clean the property after removing everything?",
    answer: [
      "We do a basic sweep-out. If you need deep cleaning, we can recommend local cleaning companies.",
    ],
  },
  {
    question: "Are you licensed and insured?",
    answer: [
      "Yes. Fully licensed and insured for your protection.",
    ],
  },
]


export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Property Cleanout Boise',
  description: 'Common questions about property cleanout services in Boise and the Treasure Valley.',
  alternates: { canonical: 'https://property-cleanout-boise.com/resources/faq' },
}

export default function FaqPage() {
  return (
    <main className="pt-20">
      <FaqSchema faqs={FAQS.map((f) => ({ question: f.question, answer: f.answer.join(' ') }))} />
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</h1>
        </div>
      </section>
      <VisibleBreadcrumb />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>Have questions about property cleanouts? Here are answers to the most common questions we get.</p>

{FAQS.map((faq) => (
              <div key={faq.question}>
                <h3>{faq.question}</h3>
                {faq.answer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
