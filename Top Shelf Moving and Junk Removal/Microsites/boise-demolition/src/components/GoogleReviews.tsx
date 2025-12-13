'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

// Static reviews for demolition services
const staticReviews = [
  {
    author: 'Mike R.',
    relative_time: '2 months ago',
    rating: 5,
    text: 'Had an old shed that was falling apart. These guys came out, tore it down, and hauled everything away in one day. The site was left clean and ready for our new garage. Couldn\'t be happier with the service.',
  },
  {
    author: 'Jennifer K.',
    relative_time: '1 month ago',
    rating: 5,
    text: 'We needed our kitchen completely gutted for a renovation. They protected everything that needed to stay, removed all the old cabinets, flooring, and drywall, then cleaned up perfectly. Our contractor was impressed.',
  },
  {
    author: 'David S.',
    relative_time: '3 weeks ago',
    rating: 5,
    text: 'Hired them to demolish an old detached garage. They handled the permit, coordinated with utilities, and had the whole thing down and hauled away in two days. Very professional operation.',
  },
  {
    author: 'Sarah T.',
    relative_time: '2 weeks ago',
    rating: 5,
    text: 'Interior demo for our bathroom remodel. They were careful not to damage anything in the hallway or adjacent rooms. Fair price and they finished faster than expected. Will definitely use again.',
  },
  {
    author: 'Robert M.',
    relative_time: '1 month ago',
    rating: 5,
    text: 'Needed a small house demolished to make room for new construction. From start to finish, they were professional and communicative. Debris removal was thorough—the lot was left clean and graded.',
  },
  {
    author: 'Lisa C.',
    relative_time: '3 months ago',
    rating: 5,
    text: 'Old barn on our property was unsafe and had to go. They worked safely around our other structures and even salvaged some of the old wood for us. Great crew and great results.',
  },
  {
    author: 'James W.',
    relative_time: '2 months ago',
    rating: 5,
    text: 'Commercial buildout required interior demolition before our tenant could move in. They worked around our schedule, kept the mess contained, and finished on time. Highly recommend for commercial work.',
  },
  {
    author: 'Amanda B.',
    relative_time: '1 week ago',
    rating: 5,
    text: 'Pool demolition that other companies said was too difficult. These guys tackled it, removed all the concrete, and filled it properly. No issues and the price was fair. Very satisfied.',
  },
]

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expandedReviews, setExpandedReviews] = useState(false)
  const reviewsPerPage = 4
  const rating = 5.0
  const totalReviews = 100

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + reviewsPerPage >= staticReviews.length ? 0 : prev + reviewsPerPage
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - reviewsPerPage < 0
        ? Math.max(0, staticReviews.length - reviewsPerPage)
        : prev - reviewsPerPage
    )
  }

  const visibleReviews = staticReviews.slice(currentIndex, currentIndex + reviewsPerPage)

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/30 to-slate-100/50 relative overflow-hidden">
      {/* Gradient dot pattern background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle, #10477d 3px, transparent 3px)`,
        backgroundSize: '16px 16px',
        maskImage: `radial-gradient(ellipse 85% 65% at 0% 0%, black, transparent 60%), radial-gradient(ellipse 85% 65% at 100% 100%, black, transparent 60%)`,
        WebkitMaskImage: `radial-gradient(ellipse 85% 65% at 0% 0%, black, transparent 60%), radial-gradient(ellipse 85% 65% at 100% 100%, black, transparent 60%)`,
        maskComposite: 'add',
        WebkitMaskComposite: 'source-over',
        opacity: 0.2
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-blue mb-8 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
            What Our Customers Say
          </h2>

          {/* Google Reviews Badge */}
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl font-bold">
                <span className="text-[#4285f4]">G</span>
                <span className="text-[#ea4335]">o</span>
                <span className="text-[#fbbc04]">o</span>
                <span className="text-[#4285f4]">g</span>
                <span className="text-[#34a853]">l</span>
                <span className="text-[#ea4335]">e</span>
              </span>
              <span className="text-2xl font-semibold text-gray-800">Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl font-bold text-gray-900">{rating.toFixed(1)}</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </div>
              <span className="text-gray-600 ml-2">({totalReviews}+)</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleReviews.map((review, index) => (
              <Card key={`${review.author}-${index}`} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  {/* Reviewer Info */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-light-blue to-dark-blue flex items-center justify-center text-white font-semibold text-lg">
                        {review.author.charAt(0)}
                      </div>
                      {/* Google Icon */}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md">
                        <span className="text-xs font-bold">
                          <span className="text-[#4285f4]">G</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <h3 className="font-semibold text-gray-900 truncate">{review.author}</h3>
                        <svg className="w-4 h-4 text-[#4285f4] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-500">{review.relative_time}</p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#fbbc04] text-[#fbbc04]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <div className="relative">
                    <p className={`text-gray-700 leading-relaxed ${!expandedReviews ? 'line-clamp-4' : ''}`}>
                      {review.text}
                    </p>
                    {!expandedReviews && review.text.length > 150 && (
                      <button
                        onClick={() => setExpandedReviews(true)}
                        className="text-[#4285f4] hover:text-dark-blue font-semibold text-sm mt-2 transition-colors"
                      >
                        Read more
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          {staticReviews.length > reviewsPerPage && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentIndex === 0}
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-6 h-6 text-dark-blue" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentIndex + reviewsPerPage >= staticReviews.length}
                aria-label="Next reviews"
              >
                <ChevronRight className="w-6 h-6 text-dark-blue" />
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {staticReviews.length > reviewsPerPage && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(staticReviews.length / reviewsPerPage) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx * reviewsPerPage)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / reviewsPerPage) === idx
                    ? 'bg-light-blue w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review page ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2083611982">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 361-1982</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
