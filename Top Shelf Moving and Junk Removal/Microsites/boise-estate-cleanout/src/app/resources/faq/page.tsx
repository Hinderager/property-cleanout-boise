import { Metadata } from 'next'
import { Phone, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Estate Cleanout | Boise',
  description: 'Common questions about estate cleanouts in the Treasure Valley answered by Top Shelf Estate Cleanout.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/resources/faq' },
}

const faqs = [
  {
    question: 'How much does an estate cleanout cost?',
    answer: 'The cost depends on the size of the property, amount of items, and what needs to be done. Most residential estate cleanouts range from $500 to $5,000. We provide free, no-obligation quotes after seeing the property.',
  },
  {
    question: 'How long does an estate cleanout take?',
    answer: 'A typical estate cleanout takes 1-3 days depending on the size of the home and the amount of belongings. Smaller apartments might take just a few hours, while larger homes with full basements and garages can take several days.',
  },
  {
    question: 'Do I need to be present during the cleanout?',
    answer: 'It is up to you. Some families prefer to be there to make decisions about sentimental items. Others find it emotionally difficult and prefer to let us handle everything. We can work either way.',
  },
  {
    question: 'What happens to the items you remove?',
    answer: 'We donate usable items to local charities, recycle what we can, and dispose of the rest responsibly. We will work with you to identify items you want to keep, sell, or donate to specific organizations.',
  },
  {
    question: 'Can you help identify valuable items?',
    answer: 'Yes. While we are not professional appraisers, our team has experience recognizing antiques, collectibles, and valuable items that families often overlook. We will point these out so you can make informed decisions.',
  },
  {
    question: 'Do you clean the property after removing everything?',
    answer: 'Basic cleanup is included - sweeping, removing debris, and leaving the space broom-clean. If you need deep cleaning for a sale or rental, we can arrange that as an add-on service.',
  },
  {
    question: 'What if there are items I want to keep but do not have room for?',
    answer: 'We can coordinate temporary storage if needed, or we can help you decide what to keep and what to let go. Many families find this part overwhelming, and we are here to help think through it.',
  },
  {
    question: 'Can you help with probate cleanouts?',
    answer: 'Absolutely. We work with executors, estate attorneys, and families dealing with probate properties all the time. We understand the legal timelines and can work quickly when needed.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve the entire Treasure Valley including Boise, Meridian, Nampa, Caldwell, Eagle, Garden City, Kuna, Star, Middleton, and Mountain Home.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, we carry full liability insurance and workers compensation coverage. You will not be held liable if something gets damaged or someone gets hurt on the job.',
  },
  {
    question: 'Do you offer same-day service?',
    answer: 'We often can, depending on our schedule. Call us in the morning and we will do our best to get to you the same day. At minimum, we can usually schedule within 24-48 hours.',
  },
  {
    question: 'What if I am not in Idaho but need to handle my parents estate?',
    answer: 'We work with out-of-state family members all the time. We can handle everything remotely with phone and email communication, photos for decisions, and coordination with local estate attorneys or realtors.',
  },
]

export default function FAQPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Common questions about estate cleanouts in the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-dark-blue mb-3 flex items-start gap-2">
                    <ChevronDown className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#FFC845]" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 ml-7">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="text-gray-300 mb-6">Call us. We are happy to answer any questions you have.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
