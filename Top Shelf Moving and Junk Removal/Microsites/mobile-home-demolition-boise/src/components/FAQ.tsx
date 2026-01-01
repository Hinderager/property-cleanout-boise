'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How much does mobile home demolition cost in Boise?',
    answer: 'Cost depends on size, location, and what you need removed. Single wides usually run $3,500-$6,500. Double wides range from $6,000-$12,000. If you need foundation removal, add another $1,500-$3,500 depending on the setup. We give free quotes after looking at your specific situation.'
  },
  {
    question: 'Do I need a permit to demolish a mobile home in Idaho?',
    answer: 'Yes, you need a demolition permit in most areas. Ada County, Canyon County, Meridian, Nampa—they all have their own rules. We know what each jurisdiction requires and can handle the permit application for you. It\'s part of what we do.'
  },
  {
    question: 'How long does a mobile home demo take?',
    answer: 'Single wides take 1-2 days from start to finish. Double wides need 2-3 days. That includes teardown, loading, and hauling everything away. Foundation removal adds another day or so. Weather and site access can affect timing.'
  },
  {
    question: 'What\'s included in mobile home demolition service?',
    answer: 'We handle the whole thing. Utility coordination, demolition, debris hauling, metal recycling, and site cleanup. You get a bare lot when we\'re done. Foundation removal is separate but we do that too if you need it.'
  },
  {
    question: 'Who disconnects the utilities before demo?',
    answer: 'We coordinate with the utility companies but you\'ll need to request disconnection as the property owner. We make sure gas, electric, water, and sewer are properly shut off and capped before we touch anything. Safety first.'
  },
  {
    question: 'Can you remove the foundation and piers?',
    answer: 'Yes. We pull concrete piers, remove tie-down anchors, take out skirting, and haul it all away. Some folks want a completely level lot and we can do that. Foundation work is quoted separately from the demo.'
  },
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
            <a href="tel:2089435231">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 943-5231</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
