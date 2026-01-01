import { Metadata } from 'next'
import { Phone, Truck, Users, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers | Join Boise Hot Tub Removal Team',
  description: 'Looking for hardworking team members in the Treasure Valley. Competitive pay, flexible hours. Call (208) 943-5231 to learn more.',
  keywords: ['hot tub removal jobs', 'junk removal careers Boise', 'labor jobs Treasure Valley'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/about-us/careers',
  },
}

export default function CareersPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">We're always looking for hardworking, reliable people to join our crew.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Work With Us</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Hot tub removal isn't glamorous work, but it's honest work. If you're someone who shows up on time, works hard, and doesn't mind getting a little sweaty, we'd like to hear from you.</p>
              <p>We're a small, locally owned business serving the Treasure Valley. We treat our team well and keep things straightforward.</p>
            </div>
            <div className="bg-[#0B2F3A] p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Interested?</h2>
              <p className="text-gray-300 mb-6">Give us a call. We'll tell you what the job involves and see if it's a good fit.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}