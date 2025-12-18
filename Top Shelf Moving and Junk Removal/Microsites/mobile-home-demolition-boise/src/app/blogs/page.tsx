import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mobile Home Demolition Pros Blog | Tips & Guides for Mobile home demolition',
  description: 'Expert tips, guides, and insights about mobile home demolition in Boise and the Treasure Valley. Learn from the pros at Mobile Home Demolition Pros.',
  alternates: {
    canonical: 'https://mobile-home-demolition-boise.com/blogs',
  },
}

const blogPosts = [
  {
    "slug": "mobile-home-demolition-cost",
    "title": "Mobile Home Demolition Cost: What to Expect in Idaho",
    "excerpt": "Demolishing a mobile home involves several cost factors. Here's a realistic breakdown.",
    "image": "/generated/mobile-home-demo-cost.webp"
  },
  {
    "slug": "mobile-home-demolition-permits",
    "title": "Do You Need a Permit to Demolish a Mobile Home in Idaho?",
    "excerpt": "Permit requirements vary by location. Here's what you need to know in the Treasure Valley.",
    "image": "/generated/demolition-permits.webp"
  },
  {
    "slug": "preparing-mobile-home-for-demolition",
    "title": "How to Prepare a Mobile Home for Demolition",
    "excerpt": "Several steps happen before the demo crew arrives. Here's your preparation checklist.",
    "image": "/generated/preparing-for-demolition.webp"
  },
  {
    "slug": "what-happens-to-demolished-mobile-homes",
    "title": "What Happens to Materials from Demolished Mobile Homes?",
    "excerpt": "Mobile homes contain recyclable materials. Here's how debris is sorted and processed.",
    "image": "/generated/mobile-home-recycling.webp"
  },
  {
    "slug": "mobile-home-removal-vs-demolition",
    "title": "Mobile Home Removal vs Demolition: What's the Difference?",
    "excerpt": "Both options get the mobile home gone, but they work differently. Here's how to choose.",
    "image": "/generated/removal-vs-demolition.webp"
  }
]

export default function BlogsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <Image
          src="/generated/hero.webp"
          alt="Mobile Home Demolition Pros Blog"
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
            Tips, guides, and insights about mobile home demolition in the Treasure Valley. Real advice from real professionals.
          </p>
        </div>
      </section>

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
            Contact us today for a free estimate on your mobile home demolition project.
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
