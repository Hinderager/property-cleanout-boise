import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Property Cleanout Pros Blog | Tips & Guides for Property cleanout',
  description: 'Expert tips, guides, and insights about property cleanout in Boise and the Treasure Valley. Learn from the pros at Property Cleanout Pros.',
  alternates: {
    canonical: 'https://property-cleanout-boise.com/blogs',
  },
}

const blogPosts = [
  {
    "slug": "rental-property-cleanout-guide",
    "title": "Rental Property Cleanout: A Landlord's Guide",
    "excerpt": "Tenant left a mess? Here's how to get your property ready for the next renter quickly.",
    "image": "/generated/rental-cleanout-guide.webp"
  },
  {
    "slug": "foreclosure-cleanout-process",
    "title": "Foreclosure Cleanout: What Banks and Investors Need to Know",
    "excerpt": "REO properties often need major cleanout work. Here's how the process typically works.",
    "image": "/generated/foreclosure-cleanout.webp"
  },
  {
    "slug": "property-cleanout-cost-factors",
    "title": "What Affects Property Cleanout Costs?",
    "excerpt": "Every property is different. Here's what determines the price of a cleanout.",
    "image": "/generated/cleanout-cost-factors.webp"
  },
  {
    "slug": "same-day-property-cleanout",
    "title": "Same-Day Property Cleanout: When Time Matters",
    "excerpt": "Sometimes you need a property cleared immediately. Here's how rush cleanouts work.",
    "image": "/generated/same-day-cleanout.webp"
  },
  {
    "slug": "property-cleanout-checklist",
    "title": "Property Cleanout Checklist for Property Managers",
    "excerpt": "Make sure nothing gets missed with this comprehensive cleanout checklist.",
    "image": "/generated/cleanout-checklist.webp"
  }
]

export default function BlogsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <Image
          src="/generated/hero.webp"
          alt="Property Cleanout Pros Blog"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/80 to-dark-blue/60" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Tips, guides, and insights about property cleanout in the Treasure Valley. Real advice from real professionals.
          </p>
        </div>
      </section>

      <VisibleBreadcrumb />
      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blogs/${post.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gunmetal mb-2 hover:text-dark-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-dark-blue font-semibold">
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your property cleanout project.
          </p>
          <a
            href="tel:2083611982"
            className="inline-block bg-brand-yellow hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Call (208) 361-1982
          </a>
        </div>
      </section>
    </main>
  )
}
