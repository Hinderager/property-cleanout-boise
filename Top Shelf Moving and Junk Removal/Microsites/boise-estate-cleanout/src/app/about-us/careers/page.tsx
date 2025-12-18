import { Metadata } from 'next'
import { Phone, Mail, Briefcase, Heart, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers | Join Our Team | Boise Estate Cleanout',
  description: 'Join the Top Shelf Estate Cleanout team. We are hiring compassionate, hardworking people in the Treasure Valley. Apply today!',
  alternates: { canonical: 'https://boise-estate-cleanout.com/about-us/careers' },
}

export default function CareersPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Looking for a meaningful career helping families during important transitions?</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Top Shelf Estate Cleanout is growing, and we are looking for compassionate, hardworking people to join our team. This is not your typical job - you will be helping families during some of the most difficult moments of their lives, and that requires someone special.</p>
              <p>If you are respectful, detail-oriented, and can handle both the physical demands and emotional sensitivity this work requires, we would love to hear from you.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Heart className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Meaningful Work</h3>
                <p className="text-gray-600">Help families during important transitions.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Room to Grow</h3>
                <p className="text-gray-600">We promote from within and value our team.</p>
              </div>
              <div className="text-center">
                <Briefcase className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Competitive Pay</h3>
                <p className="text-gray-600">We pay well for quality work and dedication.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">What We Are Looking For</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Compassionate people who can handle emotionally sensitive situations</li>
                <li>• Physically capable of lifting heavy items and working on your feet</li>
                <li>• Detail-oriented with respect for belongings</li>
                <li>• Reliable transportation and valid drivers license</li>
                <li>• Ability to pass a background check</li>
                <li>• Professional appearance and communication skills</li>
              </ul>
            </div>

            <div className="bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Interested in Joining Us?</h2>
              <p className="text-gray-300 mb-6">Call us to learn more about current openings, or send your resume to discuss opportunities.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:2085059352" className="inline-flex items-center justify-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                  <Phone className="w-5 h-5" />(208) 505-9352
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
