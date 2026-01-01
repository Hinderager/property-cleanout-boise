'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How much does hot tub removal cost?',
    answer: 'Hot tub removal typically costs between $200 and $500, depending on the size, type, and accessibility of the spa. Larger units or hot tubs in difficult locations may cost more. We provide free quotes over the phone or onsite before any work begins.'
  },
  {
    question: 'Can you remove a hot tub the same day?',
    answer: 'In most cases, yes. If you call us in the morning, we can often get to you the same day. Next-day service is almost always available. We understand that old hot tubs are eyesores and try to get them gone fast.'
  },
  {
    question: 'Do you need to disconnect the hot tub from electrical and plumbing?',
    answer: 'We handle disconnection of basic electrical and plumbing connections as part of our service. However, if the hot tub is hardwired into your electrical panel, you may need an electrician to disconnect it first. We\'ll let you know during the quote if that\'s the case.'
  },
  {
    question: 'Will you remove the hot tub in one piece or break it down?',
    answer: 'It depends on the situation. If we can easily move the hot tub out in one piece, we will. If it\'s too large, in a tight space, or heavy, we\'ll break it down onsite using saws and other tools. Either way, we haul away everything.'
  },
  {
    question: 'What types of hot tubs do you remove?',
    answer: 'We remove all types—acrylic spas, wooden hot tubs, inflatable spas, swim spas, and fiberglass units. We also remove hot tub covers, steps, and any accessories. If it\'s related to your hot tub, we\'ll take it.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve the entire Treasure Valley including Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, and surrounding communities. If you\'re not sure if we cover your area, just give us a call at (208) 943-5231.'
  },
  {
    question: 'What happens to the hot tub after you remove it?',
    answer: 'We try to recycle as much as possible—plastics, metals, wiring, and other materials. If the hot tub is still functional, we may be able to resell or donate it. Only materials that can\'t be recycled go to the landfill.'
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
