'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How quickly can you complete a property cleanout?',
    answer: 'Most property cleanouts can be completed within 1-3 days, depending on the size and condition of the property. For urgent situations like foreclosures with tight deadlines, we offer same-day and next-day service. We work efficiently to minimize vacancy time.'
  },
  {
    question: 'What types of properties do you clean out?',
    answer: 'We handle all types of property cleanouts including foreclosure properties, rental turnovers, eviction cleanouts, inherited properties, estate cleanouts, and REO properties. We work with property managers, landlords, banks, real estate agents, and homeowners.'
  },
  {
    question: 'Do you handle legal requirements for eviction cleanouts?',
    answer: 'Yes. We understand the legal requirements for handling tenant belongings after an eviction. We document all items, store valuables as required by Idaho law, and provide proper documentation. We work closely with property managers to ensure compliance.'
  },
  {
    question: 'What happens to items left in the property?',
    answer: 'We sort through everything carefully. Items in good condition are donated to local charities. Recyclables are properly recycled. We only send to the landfill what truly can\'t be salvaged. For estate cleanouts, we\'ll help identify valuables and sentimental items before removal.'
  },
  {
    question: 'How much does a property cleanout cost?',
    answer: 'Cost depends on the size of the property, amount of items, and specific requirements. We provide free, no-obligation estimates. Most residential property cleanouts in the Boise area range from $300 for small units to $3,000+ for larger homes with significant contents.'
  },
  {
    question: 'Do you offer broom-clean service?',
    answer: 'Yes! Our standard service leaves properties broom-clean and ready for the next tenant, sale, or renovation. This includes removing all items, sweeping floors, and basic cleanup. Deep cleaning services are available upon request.'
  },
  {
    question: 'Can you work with tight timelines for bank-owned properties?',
    answer: 'Absolutely. We regularly work with banks, asset managers, and REO agents who need fast turnarounds. We understand the urgency of clearing foreclosure properties and can often accommodate same-day or next-day scheduling.'
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
