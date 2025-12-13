'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'How much does tire removal cost?',
    answer: 'Pricing depends on the number of tires and your location. For small quantities (1-10 tires), expect to pay around $3-5 per tire. Bulk pickups of 50+ tires get better per-tire rates. We provide free quotes over the phone so you know exactly what to expect.'
  },
  {
    question: 'Do you pick up tires on rims?',
    answer: 'Yes, we take tires with or without rims. Tires on rims are a bit heavier to handle, so there may be a small additional charge. Just let us know what you have when you call and we\'ll give you an accurate quote.'
  },
  {
    question: 'How fast can you pick up my tires?',
    answer: 'In most cases, we can schedule pickup within 24-48 hours. For urgent situations, same-day service is often available. Give us a call and we\'ll work with your schedule.'
  },
  {
    question: 'What types of tires do you accept?',
    answer: 'We accept all types: car tires, truck tires, tractor tires, ATV tires, lawn mower tires, and more. Whether it\'s a few passenger tires or a pile of large agricultural tires, we can handle it.'
  },
  {
    question: 'What happens to the tires after you pick them up?',
    answer: 'We work with certified recycling facilities. Most tires get shredded and repurposed into rubber mulch, playground surfaces, athletic tracks, or used as fuel in industrial processes. We never dump illegally—proper disposal is a core part of what we do.'
  },
  {
    question: 'Do you serve commercial businesses?',
    answer: 'Absolutely. We work with auto shops, tire dealers, car dealerships, and fleet managers throughout the Treasure Valley. We offer scheduled recurring pickups so you don\'t have to think about tire disposal.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve the entire Treasure Valley including Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, and surrounding areas. If you\'re not sure if we cover your area, just give us a call.'
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
