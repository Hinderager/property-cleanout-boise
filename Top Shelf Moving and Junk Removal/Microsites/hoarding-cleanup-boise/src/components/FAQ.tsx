'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How much does hoarding cleanup cost?',
    answer: 'Hoarding cleanup costs vary based on the severity, square footage, and specific needs of each situation. We provide free, no-obligation estimates after assessing your property. Most residential hoarding cleanups in the Boise area range from $500 to $5,000+, depending on scope.',
  },
  {
    question: 'How long does hoarding cleanup take?',
    answer: 'The timeline depends on the level of hoarding and size of the property. Small jobs may take a few hours, while severe hoarding situations can take several days. We\'ll provide a realistic timeline during your free estimate.',
  },
  {
    question: 'Do you work with family members of hoarders?',
    answer: 'Absolutely. We frequently work with concerned family members, estate attorneys, property managers, and social workers. We can coordinate with all parties involved and maintain complete confidentiality.',
  },
  {
    question: 'Will you help sort through items before removing them?',
    answer: 'Yes! We can work alongside you or your family to sort through items, separating valuables, sentimental items, and documents before removal. We never throw away anything without approval.',
  },
  {
    question: 'Do you offer same-day or emergency hoarding cleanup?',
    answer: 'Yes, we offer same-day and emergency services throughout the Treasure Valley. If you need immediate help due to health, safety, or legal concerns, call us at (208) 361-1982.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide hoarding cleanup services in Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding Treasure Valley communities. If you\'re unsure if we serve your area, give us a call.',
  },
  {
    question: 'Is your service discreet and confidential?',
    answer: 'Absolutely. We understand the sensitive nature of hoarding situations. We use unmarked vehicles, maintain strict confidentiality, and treat every client with compassion and respect.',
  },
  {
    question: 'What happens to the items you remove?',
    answer: 'We take an eco-friendly approach: usable items are donated to local charities, recyclables are properly recycled, and only true waste goes to the landfill. We can provide donation receipts upon request.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Common questions about our hoarding cleanup services in Boise and the Treasure Valley.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-fog hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gunmetal pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">
            Have more questions? We&apos;re here to help.
          </p>
          <a
            href="tel:2083611982"
            className="inline-flex items-center gap-2 text-dark-blue font-bold underline hover:text-light-blue text-lg"
          >
            Call (208) 361-1982
          </a>
        </div>
      </div>
    </section>
  )
}
