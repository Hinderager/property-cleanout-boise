import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dumpster Rental Pros Blog | Tips & Guides for Dumpster rental',
  description: 'Expert tips, guides, and insights about dumpster rental in Boise and the Treasure Valley. Learn from the pros at Dumpster Rental Pros.',
  alternates: {
    canonical: 'https://boise-dumpster-rental.com/blogs',
  },
}

const blogPosts = [
  {
    "slug": "what-size-dumpster-do-i-need",
    "title": "What Size Dumpster Do I Need? (Simple Guide)",
    "excerpt": "Choosing the wrong dumpster size is a common mistake. Here's how to get it right the first time.",
    "image": "/generated/dumpster-size-guide.webp"
  },
  {
    "slug": "dumpster-rental-cost-boise",
    "title": "Dumpster Rental Costs in Boise: What to Expect",
    "excerpt": "Prices vary based on size, duration, and what you're tossing. Here's a realistic breakdown.",
    "image": "/generated/dumpster-rental-cost-boise.webp"
  },
  {
    "slug": "what-can-go-in-a-dumpster",
    "title": "What Can (and Can't) Go in a Dumpster?",
    "excerpt": "Some items are prohibited for good reason. Here's the complete list of what's allowed.",
    "image": "/generated/dumpster-allowed-items.webp"
  },
  {
    "slug": "where-to-place-dumpster",
    "title": "Where Should You Place Your Dumpster? (Avoid These Mistakes)",
    "excerpt": "The wrong placement can damage your property or violate local rules. Here's how to do it right.",
    "image": "/generated/dumpster-placement-guide.webp"
  },
  {
    "slug": "how-long-can-i-keep-a-dumpster",
    "title": "How Long Can You Keep a Rental Dumpster?",
    "excerpt": "Rental periods vary, and going over can cost you. Here's what to know about timing your rental.",
    "image": "/generated/dumpster-rental-duration.webp"
  }
]

export default function BlogsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <Image
          src="/generated/hero.webp"
          alt="Dumpster Rental Pros Blog"
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
            Tips, guides, and insights about dumpster rental in the Treasure Valley. Real advice from real professionals.
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
            Contact us today for a free estimate on your dumpster rental project.
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
