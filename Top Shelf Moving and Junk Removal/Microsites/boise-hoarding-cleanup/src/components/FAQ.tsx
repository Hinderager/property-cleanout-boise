'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How much does this cost?',
    answer: 'It depends on the size of the job. We give free estimates after seeing the property. Most hoarding cleanups in the Boise area run between $500 and $5,000, but bigger jobs can be more.',
  },
  {
    question: 'How long does it take?',
    answer: 'Smaller jobs might take a few hours. Severe hoarding situations can take several days. We\'ll give you a realistic timeline when we come out for the estimate.',
  },
  {
    question: 'Can family members hire you on someone\'s behalf?',
    answer: 'Yes. We work with family members, estate attorneys, property managers, and social workers all the time. We can coordinate with everyone involved and keep things confidential.',
  },
  {
    question: 'Will you help us sort through things first?',
    answer: 'Absolutely. We can work alongside you to separate valuables, important documents, and sentimental items before anything gets removed. We never throw away anything without permission.',
  },
  {
    question: 'Do you offer same-day service?',
    answer: 'Yes. If you\'re dealing with a health, safety, or legal situation that can\'t wait, call us at (208) 361-1982. We offer emergency service throughout the Treasure Valley.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'Boise, Meridian, Nampa, Caldwell, Eagle, and the surrounding Treasure Valley area. If you\'re not sure whether we serve your location, just give us a call.',
  },
  {
    question: 'Is this confidential?',
    answer: 'Yes. We use unmarked trucks and don\'t advertise what we\'re doing. We understand this is a sensitive situation and we treat it that way.',
  },
  {
    question: 'What do you do with everything?',
    answer: 'We donate usable items to local charities, recycle what we can, and only send actual trash to the landfill. We can provide donation receipts if you need them.',
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
            Common Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Here&apos;s what people usually want to know.
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
            Have other questions? Happy to help.
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
