'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How much does it cost to hire movers in Boise?',
    answer: 'Moving costs vary based on factors like home size, distance, and services needed. Local moves typically start around $100/hour for a 2-man crew and truck. We provide free, no-obligation estimates so you know the cost upfront before your move.'
  },
  {
    question: 'How far in advance should I book my move?',
    answer: 'We recommend booking 2-4 weeks ahead for local moves, especially during summer months. However, we often accommodate last-minute moves too. Call us and we\'ll do our best to fit you in!'
  },
  {
    question: 'Do you provide packing materials?',
    answer: 'Yes! We can bring boxes, tape, bubble wrap, and packing paper. We can also do full packing services if you\'d rather not pack yourself. Just let us know what you need when you book.'
  },
  {
    question: 'Are my belongings insured during the move?',
    answer: 'Yes, we are fully licensed and insured. Basic valuation coverage is included with every move, and additional coverage options are available for valuable items. Ask us about coverage when you get your estimate.'
  },
  {
    question: 'What if my apartment has stairs or no elevator?',
    answer: 'No problem! We handle stairs regularly. Our pricing is transparent—we may add a small fee for flights of stairs, but we\'ll tell you this upfront. Our crews are experienced with all types of buildings.'
  },
  {
    question: 'Can you move just a few heavy items?',
    answer: 'Absolutely! We offer labor-only and single-item moving services. Whether it\'s a piano, gun safe, or just help loading a rental truck, we\'re happy to help with smaller jobs.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve all of the Treasure Valley including Boise, Meridian, Nampa, Caldwell, Eagle, Star, Kuna, and surrounding areas. Contact us if you\'re unsure whether we cover your location.'
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
