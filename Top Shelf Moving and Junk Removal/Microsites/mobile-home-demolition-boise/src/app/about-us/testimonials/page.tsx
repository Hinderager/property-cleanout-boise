import { Metadata } from 'next'
import { Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Testimonials | Boise Mobile Home Demolition',
  description: 'Read reviews from satisfied customers. See why property owners across the Treasure Valley trust Boise Mobile Home Demolition for mobile home removal and demolition.',
  alternates: { canonical: 'https://mobile-home-demolition-boise.com/about-us/testimonials' },
}

export default function TestimonialsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Customer Testimonials</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Real reviews from property owners across the Treasure Valley</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We let our work speak for itself. Here's what customers say about working with us on their mobile home demolition projects.</p>
            </div>

            <div className="space-y-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FFC845]">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-[#FFC845] text-[#FFC845]" />)}
                </div>
                <p className="text-gray-600 mb-3">"These guys did an excellent job removing an old double-wide on our property in Meridian. They showed up when they said they would, got the work done fast, and cleaned everything up. Fair price too."</p>
                <p className="text-sm text-gray-500">- Mike S., Meridian</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FFC845]">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-[#FFC845] text-[#FFC845]" />)}
                </div>
                <p className="text-gray-600 mb-3">"We needed a mobile home removed to clear land for a new build. The crew was professional, handled all the permits, and finished ahead of schedule. Would definitely hire again."</p>
                <p className="text-sm text-gray-500">- Jennifer L., Eagle</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FFC845]">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-[#FFC845] text-[#FFC845]" />)}
                </div>
                <p className="text-gray-600 mb-3">"Great communication from start to finish. They explained the whole process, gave us a detailed quote, and stuck to it. The site looked great when they were done."</p>
                <p className="text-sm text-gray-500">- Tom R., Nampa</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FFC845]">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-[#FFC845] text-[#FFC845]" />)}
                </div>
                <p className="text-gray-600 mb-3">"Inherited a property with an old trailer that needed to come down. These folks made it easy. Handled everything including hauling away the debris. Couldn't be happier."</p>
                <p className="text-sm text-gray-500">- Sarah K., Caldwell</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FFC845]">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-[#FFC845] text-[#FFC845]" />)}
                </div>
                <p className="text-gray-600 mb-3">"Demolished and removed three old mobile homes from our RV park. Big job but they handled it without any issues. Crew was respectful and worked safely."</p>
                <p className="text-sm text-gray-500">- David M., Boise</p>
              </div>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Join Our Satisfied Customers</h2>
              <p className="text-gray-600 mb-6">Ready to clear your property? Let's talk about your project.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Get Your Free Quote</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
