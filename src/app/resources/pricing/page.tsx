import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing Information | Top Shelf Property Cleanout',
  description: 'Learn about property cleanout pricing in Boise and the Treasure Valley.',
  alternates: { canonical: 'https://property-cleanout-boise.com/resources/pricing' },
}

export default function PricingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Pricing Information</h1>
        </div>
      </section>
      <VisibleBreadcrumb />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>We price property cleanouts based on volume—how much space your stuff takes up in our truck.</p>

<h3>How We Price Cleanouts</h3>
<p>Our truck is divided into sections. We charge based on how many sections your items fill. It's straightforward and fair.</p>

<h3>Free Estimates</h3>
<p>We offer free onsite estimates. We'll look at what needs to go and give you an upfront price. No hourly rates, no surprises.</p>

<h3>What Affects the Cost?</h3>
<ul>
<li>Volume of items to remove</li>
<li>Type of items (appliances, furniture, general junk, etc.)</li>
<li>Access to the property (stairs, narrow hallways, etc.)</li>
</ul>

<h3>Get Your Free Quote</h3>
<p>Call us today for a free estimate on your property cleanout.</p>
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
