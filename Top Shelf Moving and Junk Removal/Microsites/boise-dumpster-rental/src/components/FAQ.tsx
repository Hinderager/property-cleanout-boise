'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How much does dumpster rental cost in Boise?',
    answer: 'Dumpster rental prices depend on the size you need and how long you keep it. Our 10-yard dumpsters start around $275-$350 for a week. 20-yard dumpsters run $350-$450. We include delivery, pickup, and disposal in our pricing. No hidden fees.'
  },
  {
    question: 'What size dumpster do I need?',
    answer: 'For garage cleanouts or small remodels, a 10 or 15 yard is usually enough. Kitchen or bathroom remodels typically need a 20 yard. Major construction or whole-home cleanouts may need a 30 yard. Not sure? Call us and we\'ll help you figure it out.'
  },
  {
    question: 'How fast can you deliver a dumpster?',
    answer: 'We offer same-day delivery in most cases if you call before noon. Next-day delivery is almost always available. We know projects come up fast and we try to be as flexible as possible.'
  },
  {
    question: 'What can I put in the dumpster?',
    answer: 'Most household and construction debris is fine—furniture, appliances, drywall, roofing, wood, metal, concrete, yard waste. We can\'t accept hazardous materials like paint, chemicals, batteries, or tires. Ask us if you\'re not sure about something specific.'
  },
  {
    question: 'How long can I keep the dumpster?',
    answer: 'Standard rental is 7 days, but we can extend if you need more time. Just let us know. We charge a small daily fee for extensions. Many customers keep theirs for 2-3 weeks during larger projects.'
  },
  {
    question: 'Will the dumpster damage my driveway?',
    answer: 'Our drivers are careful and experienced. We place boards under the wheels to protect your concrete or asphalt. If you have concerns about a specific placement, just let us know and we\'ll work with you.'
  },
  {
    question: 'Do I need a permit for a dumpster?',
    answer: 'If the dumpster goes in your driveway or on your property, no permit is needed. If it needs to go on the street, you may need a permit from the city. We can help you figure out what\'s required for your situation.'
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
