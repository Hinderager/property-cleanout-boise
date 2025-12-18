import { Metadata } from 'next'
import { Phone, Star, Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Testimonials | Boise Estate Cleanout',
  description: 'Read reviews from families who have worked with Top Shelf Estate Cleanout in the Treasure Valley.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/about-us/testimonials' },
}

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Boise, ID',
    rating: 5,
    text: 'After my father passed, I was overwhelmed by the thought of clearing out his house. The Top Shelf team was so compassionate and respectful. They treated everything like it mattered, because to us, it did. I cannot thank them enough.',
  },
  {
    name: 'Robert K.',
    location: 'Meridian, ID',
    rating: 5,
    text: 'We needed to downsize my mother\'s home before her move to assisted living. The crew was patient, professional, and genuinely kind. They made a difficult process so much easier for our whole family.',
  },
  {
    name: 'Jennifer L.',
    location: 'Nampa, ID',
    rating: 5,
    text: 'I inherited my grandmother\'s estate and had no idea where to start. Top Shelf handled everything with such care and professionalism. They even helped us identify valuable items we almost donated by mistake.',
  },
  {
    name: 'Mark T.',
    location: 'Eagle, ID',
    rating: 5,
    text: 'Fast, respectful service. The team showed up on time, worked efficiently, and treated our family\'s belongings with respect. Highly recommend them for estate cleanouts.',
  },
  {
    name: 'Linda W.',
    location: 'Caldwell, ID',
    rating: 5,
    text: 'What a relief to find a company that understands this is not just about clearing out a house. They were sensitive to the emotions involved and made sure we felt comfortable every step of the way.',
  },
  {
    name: 'David H.',
    location: 'Boise, ID',
    rating: 5,
    text: 'Professional, compassionate, and thorough. Top Shelf Estate Cleanout made a tough situation much more manageable. I would recommend them to anyone dealing with an estate cleanout.',
  },
]

export default function TestimonialsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Customer Testimonials</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Hear from families we have helped throughout the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12 text-center">
              <p>Estate cleanouts are deeply personal. We are grateful that families trust us during some of their most difficult moments. Here is what they have to say about working with us.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg relative">
                  <Quote className="w-8 h-8 text-[#FFC845] opacity-50 mb-4" />
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFC845] text-[#FFC845]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-dark-blue">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Experience the Difference</h2>
              <p className="text-gray-300 mb-6">Join the families who have trusted us with their estate cleanout needs.</p>
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
