import { Metadata } from 'next'
import { Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Testimonials | Boise Hot Tub Removal Reviews',
  description: 'Read reviews from Treasure Valley customers. Fast, affordable, professional hot tub removal. Call (208) 505-9352.',
  keywords: ['hot tub removal reviews', 'customer testimonials Boise', 'hot tub removal ratings'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/about-us/testimonials',
  },
}

const testimonials = [
  { name: 'Mike R.', location: 'Boise', text: 'Had an old hot tub sitting in my backyard for two years. Called these guys on a Monday, it was gone by Tuesday afternoon. Fair price, no hassle. Would use them again.', rating: 5 },
  { name: 'Jennifer L.', location: 'Meridian', text: 'They were professional and fast. The hot tub was built into our deck, so I thought it would be complicated. They handled it no problem and cleaned everything up after.', rating: 5 },
  { name: 'Tom H.', location: 'Eagle', text: 'Great service. They showed up on time, gave me an upfront price, and got my old spa out of there in under an hour. Easy experience.', rating: 5 },
  { name: 'Sarah K.', location: 'Nampa', text: 'I called a few places and these guys had the best price. They did exactly what they said they would do. No surprises, no drama.', rating: 5 },
  { name: 'David P.', location: 'Caldwell', text: 'Needed a swim spa removed ASAP because we were selling our house. They came out same day and took care of it. Lifesavers.', rating: 5 },
  { name: 'Amanda W.', location: 'Kuna', text: 'Super easy to work with. I appreciated the honest communication and fair pricing. Would definitely recommend them.', rating: 5 },
]

export default function TestimonialsPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">What Our Customers Say</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Real reviews from real customers across the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFC845] text-[#FFC845]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div><p className="font-bold text-[#0B2F3A]">{testimonial.name}</p><p className="text-sm text-gray-500">{testimonial.location}</p></div>
                </div>
              ))}
            </div>
            <div className="bg-[#0B2F3A] p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Join Our Happy Customers?</h2>
              <p className="text-gray-300 mb-6">Call us today for fast, professional hot tub removal.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}