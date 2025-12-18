'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How fast can you turn around a rental property?',
    answer: 'Most rental cleanouts take 4-8 hours depending on what was left behind. We can usually have your unit cleared and broom-clean within 24-48 hours of your call. Need it faster? We offer same-day service for urgent turnovers—just let us know your timeline.'
  },
  {
    question: 'What\'s included in a property cleanout?',
    answer: 'We remove everything—furniture, appliances, boxes, trash, you name it. Then we sweep up and leave it broom-clean. If you need deep cleaning after that, we can arrange it, but our standard service gets the property empty and ready for the next step.'
  },
  {
    question: 'How do you handle eviction cleanouts legally?',
    answer: 'We follow Idaho\'s requirements to the letter. That means documenting items, storing valuables for the required period, and keeping records. We work with your legal process, not against it. Lots of landlords and property managers use us because we know what we\'re doing on this front.'
  },
  {
    question: 'What do you do with the stuff you haul out?',
    answer: 'Good stuff goes to local charities—furniture, working appliances, clothes, household items. Scrap metal gets recycled. We only dump what can\'t be reused or recycled. Most cleanouts are about 60-70% diverted from the landfill, which is better for everyone.'
  },
  {
    question: 'What does a property cleanout cost?',
    answer: 'Depends on how much is there and how long it takes. Small apartments usually run $300-600. Bigger houses with more stuff can be $800-2,000+. We give free estimates—call us at (208) 505-9352 or send us photos and we\'ll quote it.'
  },
  {
    question: 'Do you work with real estate agents and investors?',
    answer: 'All the time. Agents call us for foreclosure cleanouts so properties can get listed fast. Investors use us between flips. We get that time is money in your world, so we move quick and stay on schedule. Volume discounts available if you\'ve got multiple properties.'
  },
  {
    question: 'Can you clear a property the same day?',
    answer: 'Usually, yes. If you call us in the morning and the property isn\'t huge, we can often get a crew out that afternoon. Best bet is to call (208) 505-9352 and we\'ll see what we can do. We\'re pretty flexible when people are in a bind.'
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
