'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'What types of construction debris do you remove?',
    answer: 'We haul away just about everything from a job site—drywall, lumber, plywood, roofing shingles, concrete, brick, old fixtures, cabinets, flooring, insulation, and more. If you\'re not sure whether we can take something, just give us a call. The only things we can\'t handle are hazardous materials like asbestos or lead paint.'
  },
  {
    question: 'How much does construction debris removal cost?',
    answer: 'Pricing depends on the volume and type of debris. We charge based on how much space your debris takes up in our truck, plus disposal fees for heavy materials like concrete. Most jobs run between $150 and $600. We give you a firm price before we load anything.'
  },
  {
    question: 'Can you do same-day debris removal?',
    answer: 'Yes, we offer same-day service for most jobs if you call before noon. We understand construction projects run on tight schedules and sometimes debris needs to go today. Next-day service is almost always available.'
  },
  {
    question: 'Do you work with contractors?',
    answer: 'Absolutely. Many of our customers are general contractors, roofers, and remodelers. We can set up recurring pickups for ongoing projects or come on-demand when you need us. We also offer contractor pricing for regular customers.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We remove construction debris throughout the Treasure Valley including Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, and surrounding areas. If you\'re not sure if we cover your location, give us a call at (208) 361-1982.'
  },
  {
    question: 'Do you recycle construction materials?',
    answer: 'We do our best to keep materials out of the landfill. Clean wood, metal, cardboard, and concrete can often be recycled. We work with local recycling facilities to divert as much as possible. It\'s better for the environment and often keeps costs down.'
  },
  {
    question: 'How do I prepare for debris pickup?',
    answer: 'Just have the debris accessible and piled in one area if possible. We\'ll handle the loading. If it\'s inside a building, just make sure we have a clear path. You don\'t need to sort anything—we take care of that.'
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
