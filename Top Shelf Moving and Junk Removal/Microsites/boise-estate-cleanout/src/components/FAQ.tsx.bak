'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How long does an estate cleanout take?',
    answer: 'Most estate cleanouts can be completed in 1-3 days depending on the size of the property and amount of belongings. A typical 3-bedroom home usually takes 1-2 days. We\'ll provide a realistic timeline during your free estimate.'
  },
  {
    question: 'Do you help sort through items before removing them?',
    answer: 'Absolutely. We work alongside family members to sort items into categories: keep, donate, and dispose. We understand that inherited belongings often have sentimental value, and we take the time to help you identify keepsakes, valuables, and important documents.'
  },
  {
    question: 'What happens to items we don\'t want to keep?',
    answer: 'Usable items are donated to local charities and shelters. We coordinate with organizations like Goodwill, Salvation Army, and local churches. Electronics and metals are recycled properly. Only true waste goes to the landfill—typically less than 30% of what we collect.'
  },
  {
    question: 'Can you work with probate attorneys and executors?',
    answer: 'Yes, we frequently work with probate attorneys, estate executors, and real estate professionals. We can provide documentation of items removed, donation receipts for estate records, and work around court timelines and deadlines.'
  },
  {
    question: 'How much does estate cleanout cost?',
    answer: 'Costs vary based on property size and contents. Most estate cleanouts in the Boise area range from $500 for small apartments to $3,000+ for larger homes with extensive contents. We provide free, no-obligation estimates before any work begins.'
  },
  {
    question: 'Do I need to be present during the cleanout?',
    answer: 'No, you don\'t need to be present. Many families live out of state and can\'t be there in person. We communicate throughout the process with photos and updates, and can coordinate key pickup and lockbox access for your convenience.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide estate cleanout services throughout the Treasure Valley including Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, Garden City, and surrounding communities. If you\'re unsure if we serve your area, give us a call.'
  }
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-dark-blue">Frequently Asked Questions</span>
        </h2>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 last:border-b-0">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-xl md:text-2xl font-bold text-dark-blue pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-dark-blue flex-shrink-0 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2085059352">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 505-9352</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
