'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How much does mobile home demolition cost?',
    answer: 'Mobile home demolition costs depend on the size (single wide vs double wide), location, accessibility, and whether foundation removal is included. Most single wide demolitions in the Boise area run $3,000-$6,000, while double wides typically range $5,000-$10,000. We provide free on-site estimates.'
  },
  {
    question: 'Do I need a permit to demolish a mobile home?',
    answer: 'Yes, most jurisdictions in Idaho require a demolition permit. Ada County, Canyon County, and local cities each have their own requirements. We help navigate the permit process and can handle the paperwork for you. This is included in our service.'
  },
  {
    question: 'How long does mobile home demolition take?',
    answer: 'A typical single wide demolition takes 1-2 days. Double wides usually take 2-3 days. This includes teardown, debris removal, and basic site cleanup. Foundation removal adds another day depending on the type of foundation.'
  },
  {
    question: 'Do you handle utility disconnections?',
    answer: 'We coordinate with utility companies to ensure gas, electric, water, and sewer are properly disconnected before demolition begins. This is a critical safety step and we handle the scheduling and verification.'
  },
  {
    question: 'What happens to the debris after demolition?',
    answer: 'We haul all debris to appropriate disposal facilities. Metals are separated and recycled. Wood and other materials go to licensed disposal sites. You don\'t have to worry about any of it—we leave your site clean and clear.'
  },
  {
    question: 'Can you remove the foundation too?',
    answer: 'Absolutely. We remove concrete piers, blocks, tie-down anchors, and skirting. If you want a completely clear lot ready for new construction, we can make that happen. Foundation removal is quoted separately based on the type and size.'
  },
  {
    question: 'Do you work in mobile home parks?',
    answer: 'Yes. We frequently work in mobile home parks throughout the Treasure Valley. We understand the space constraints and neighbor considerations. We work efficiently and keep the area clean to minimize disruption to surrounding residents.'
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
