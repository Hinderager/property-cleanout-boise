import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, HelpCircle, DollarSign, ClipboardCheck, Clock } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Property Cleanout Resources | Property Cleanout Boise',
  description: 'Planning a property cleanout in the Treasure Valley? Here is how pricing works, how long a cleanout takes, a step-by-step checklist, and answers to common questions.',
  alternates: { canonical: 'https://property-cleanout-boise.com/resources' },
}

const resources = [
  {
    icon: HelpCircle,
    name: 'Frequently Asked Questions',
    href: '/resources/faq',
    description: 'Do you need to be there? What happens to the stuff? Is the place cleaned afterward? Answered here.',
  },
  {
    icon: DollarSign,
    name: 'Pricing Information',
    href: '/resources/pricing',
    description: 'How we price a cleanout, what changes the cost, and how to get a free estimate.',
  },
  {
    icon: ClipboardCheck,
    name: 'Cleanout Checklist',
    href: '/resources/checklist',
    description: 'What to handle before, during, and after the crew shows up so nothing gets missed.',
  },
  {
    icon: Clock,
    name: 'Cleanout Timeline',
    href: '/resources/timeline',
    description: 'How long a typical cleanout runs, what slows one down, and how scheduling works.',
  },
]

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Property Cleanout Resources</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Practical answers for landlords, agents, and families dealing with a full property.</p>

          <QuickQuoteBar />
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Most cleanouts land on someone at a bad time &mdash; a tenant left everything behind, a listing needs to go live, or a family member passed and the house is full.</p>
              <p>These pages cover the practical side: what it costs, how long it takes, and what you should do before we arrive. Everything here reflects how we work in Boise, Meridian, Nampa, Caldwell, and the rest of the valley.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {resources.map((resource) => {
                const Icon = resource.icon
                return (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="group bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-12 h-12 text-[#FFC845] mb-4" />
                    <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">{resource.name}</h2>
                    <p className="text-gray-600">{resource.description}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need a Property Cleared Out?</h2>
          <p className="text-gray-300 mb-6">Call for a free estimate anywhere in the Treasure Valley.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
