'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How much does demolition cost?',
    answer: 'Demolition costs vary based on the size and type of structure, accessibility, materials involved, and disposal requirements. We provide free, detailed estimates after assessing your project. Small shed demolitions might start around $500, while larger structures can range from $3,000 to $15,000+.'
  },
  {
    question: 'Do I need a permit for demolition?',
    answer: 'Most demolition projects in Boise require permits, especially for larger structures. We can help you navigate the permit process and ensure all requirements are met. We handle permit applications for many of our clients as part of our service.'
  },
  {
    question: 'What happens to the debris?',
    answer: 'We haul away all demolition debris as part of our service. Materials are sorted—concrete and metal are recycled when possible, and the rest is properly disposed of at licensed facilities. Your site is left clean and ready for whatever comes next.'
  },
  {
    question: 'How long does a demolition project take?',
    answer: 'Timeline depends on the project size. A small shed can be demolished and removed in a few hours. A house demolition typically takes 2-5 days including debris removal. We\'ll give you a realistic timeline during your estimate.'
  },
  {
    question: 'Do you handle utility disconnection?',
    answer: 'Yes, we can coordinate with utility companies to ensure gas, electric, water, and sewer are properly disconnected before demolition begins. This is an important safety step that\'s included in our full-service approach.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, we are fully licensed and carry comprehensive liability insurance. We can provide certificates of insurance upon request. Your property and our workers are protected throughout the project.'
  },
  {
    question: 'Can you demolish just part of a structure?',
    answer: 'Absolutely. We specialize in selective demolition—removing specific sections while preserving what remains. This is common for renovation projects like kitchen or bathroom tearouts, room additions, or removing attached garages.'
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
            <a href="tel:2083611982">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 361-1982</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
