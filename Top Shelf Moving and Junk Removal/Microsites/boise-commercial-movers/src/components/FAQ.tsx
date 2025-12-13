'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How much does commercial moving cost?',
    answer: 'Commercial moving costs depend on the size of your office, amount of equipment, distance, and complexity of the move. We provide free, detailed estimates after assessing your specific needs. Most office moves in the Treasure Valley range from $1,500 for small offices to $15,000+ for large commercial relocations.'
  },
  {
    question: 'Can you move us over the weekend to avoid business disruption?',
    answer: 'Absolutely. Weekend and after-hours moves are our specialty for commercial clients. We understand that every hour of downtime costs your business money. We can execute your entire move outside of business hours so you\'re operational when your employees arrive Monday morning.'
  },
  {
    question: 'How do you handle IT equipment and servers?',
    answer: 'We have specialized training for moving IT infrastructure. We properly disconnect, label, pack with anti-static materials, and transport computers, servers, and networking equipment. We can coordinate with your IT team for reconnection, or handle the entire process ourselves.'
  },
  {
    question: 'Do you provide packing services for office moves?',
    answer: 'Yes, we offer complete packing services including boxes, packing materials, and labeling systems. We can pack everything from individual desks to entire departments. Our labeling system ensures everything ends up exactly where it belongs in your new space.'
  },
  {
    question: 'How far in advance should we schedule a commercial move?',
    answer: 'We recommend booking 4-6 weeks in advance for large office moves to ensure availability and allow time for proper planning. However, we can accommodate shorter timelines when needed—even emergency relocations with just a few days notice.'
  },
  {
    question: 'Are you insured for commercial moves?',
    answer: 'Yes, we carry comprehensive commercial liability insurance that covers your equipment, furniture, and property during the move. We can provide certificates of insurance upon request, which many property managers require.'
  },
  {
    question: 'Can you help with furniture installation and setup?',
    answer: 'Yes, we provide complete furniture installation services. We can assemble new cubicle systems, configure workstations, and arrange furniture according to your floor plan. Our team has experience with all major office furniture brands and modular systems.'
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
