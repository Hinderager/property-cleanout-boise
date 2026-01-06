import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Top Shelf Property Cleanout',
  description: 'Common questions about property cleanout services in Boise and the Treasure Valley.',
  alternates: { canonical: 'https://property-cleanout-boise.com/resources/faq' },
}

export default function FaqPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</h1>
        </div>
      </section>
      <VisibleBreadcrumb />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>Have questions about property cleanouts? Here are answers to the most common questions we get.</p>

<h3>How much does a property cleanout cost?</h3>
<p>Cost depends on the amount of stuff to remove. We offer free onsite estimates so you know the exact price before we start.</p>

<h3>How quickly can you do a cleanout?</h3>
<p>Often same-day or next-day. Call us and we'll get you scheduled ASAP.</p>

<h3>Do I need to be there during the cleanout?</h3>
<p>Not necessarily. Many landlords and property managers give us access and we handle everything.</p>

<h3>What do you do with the stuff you remove?</h3>
<p>We donate usable items when possible, recycle what we can, and dispose of the rest responsibly.</p>

<h3>Do you clean the property after removing everything?</h3>
<p>We do a basic sweep-out. If you need deep cleaning, we can recommend local cleaning companies.</p>

<h3>Are you licensed and insured?</h3>
<p>Yes. Fully licensed and insured for your protection.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
