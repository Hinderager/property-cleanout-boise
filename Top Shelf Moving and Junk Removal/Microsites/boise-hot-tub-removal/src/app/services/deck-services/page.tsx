import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Deck Services | Boise Hot Tub Removal',
  description: 'Deck Services in Boise and the Treasure Valley. Professional service. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-hot-tub-removal.com/services/deck-services' },
}

export default function DeckServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Deck Services</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>Content for Deck Services coming soon.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-[#0B2F3A] text-center">
        <div className="container mx-auto px-4">
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}