import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hot Tub Removal Pros Blog | Tips & Guides for Hot tub removal',
  description: 'Expert tips, guides, and insights about hot tub removal in Boise and the Treasure Valley. Learn from the pros at Hot Tub Removal Pros.',
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/blogs',
  },
}

const blogPosts = [
  {
    "slug": "hot-tub-removal-process",
    "title": "How Hot Tub Removal Actually Works",
    "excerpt": "Getting rid of a hot tub involves more than just hauling it away. Here's the full process.",
    "image": "/generated/hero.webp"
  },
  {
    "slug": "hot-tub-removal-cost-boise",
    "title": "Hot Tub Removal Cost in Boise: What to Budget",
    "excerpt": "Prices vary based on access, size, and disposal. Here's a realistic cost breakdown.",
    "image": "/generated/hot-tub-demolition.webp"
  },
  {
    "slug": "diy-hot-tub-removal",
    "title": "Can You Remove a Hot Tub Yourself? (Honest Answer)",
    "excerpt": "DIY is possible but comes with challenges. Here's what you'd need to do it right.",
    "image": "/generated/spa-removal.webp"
  },
  {
    "slug": "preparing-hot-tub-for-removal",
    "title": "How to Prepare Your Hot Tub for Removal",
    "excerpt": "A few steps before removal day makes everything go smoother. Here's your checklist.",
    "image": "/generated/above-ground-spa.webp"
  },
  {
    "slug": "what-happens-to-old-hot-tubs",
    "title": "What Happens to Hot Tubs After Removal?",
    "excerpt": "Curious where your old spa ends up? Here's how hot tubs are typically recycled or disposed.",
    "image": "/generated/hero.webp"
  }
]

export default function BlogsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <Image
          src="/generated/hero.webp"
          alt="Hot Tub Removal Pros Blog"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/80 to-dark-blue/60" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Tips, guides, and insights about hot tub removal in the Treasure Valley. Real advice from real professionals.
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
            Contact us today for a free estimate on your hot tub removal project.
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
