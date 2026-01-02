import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Property Cleanout Checklist | Top Shelf Property Cleanout',
  description: 'Step-by-step checklist for property cleanouts in Boise and the Treasure Valley.',
  alternates: { canonical: 'https://property-cleanout-boise.com/resources/checklist' },
}

export default function ChecklistPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Property Cleanout Checklist</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>Planning a property cleanout? Use this checklist to make sure you're ready.</p>

<h3>Before the Cleanout</h3>
<ul>
<li>Identify items to keep vs. items to remove</li>
<li>Remove any personal valuables or important documents</li>
<li>Take photos for insurance or records if needed</li>
<li>Arrange access to the property</li>
<li>Schedule your cleanout appointment</li>
</ul>

<h3>During the Cleanout</h3>
<ul>
<li>Point out any items that must stay</li>
<li>Let the team know about any access issues</li>
<li>Ask questions if you're not sure about something</li>
</ul>

<h3>After the Cleanout</h3>
<ul>
<li>Do a final walkthrough</li>
<li>Arrange for any additional cleaning if needed</li>
<li>Get your property ready for the next tenant or sale</li>
</ul>
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
