import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Property Cleanout Timeline | Top Shelf Property Cleanout',
  description: 'How long does a property cleanout take? Timeline and process information.',
  alternates: { canonical: 'https://property-cleanout-boise.com/resources/timeline' },
}

export default function TimelinePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Property Cleanout Timeline</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>Wondering how long a property cleanout takes? Here's what to expect.</p>

<h3>Typical Timeline</h3>
<p><strong>Small cleanout (1-2 rooms):</strong> 1-2 hours<br />
<strong>Medium cleanout (whole apartment or small house):</strong> 2-4 hours<br />
<strong>Large cleanout (full house or multiple units):</strong> 4-8 hours or full day</p>

<h3>Factors That Affect Timeline</h3>
<ul>
<li>Amount of stuff to remove</li>
<li>Size of the property</li>
<li>Access (stairs, narrow doorways, parking distance)</li>
<li>Type of items (heavy furniture takes longer than boxes)</li>
</ul>

<h3>Scheduling</h3>
<p>We're often available same-day or next-day. Call us in the morning and we'll often be there that afternoon.</p>

<h3>Need It Done Fast?</h3>
<p>We understand deadlines. Let us know your timeline and we'll do everything we can to meet it.</p>
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
