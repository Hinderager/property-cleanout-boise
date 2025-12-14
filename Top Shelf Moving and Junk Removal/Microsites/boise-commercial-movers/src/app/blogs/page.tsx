import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial Moving Pros Blog | Tips & Guides for Commercial moving',
  description: 'Expert tips, guides, and insights about commercial moving in Boise and the Treasure Valley. Learn from the pros at Commercial Moving Pros.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/blogs',
  },
}

const blogPosts = [
  {
    "slug": "planning-office-move-boise",
    "title": "Planning an Office Move in Boise? Start Here",
    "excerpt": "Moving your business doesn't have to be chaotic. Here's a practical timeline and checklist for Boise office relocations.",
    "image": "/generated/hero.webp"
  },
  {
    "slug": "minimize-downtime-during-commercial-move",
    "title": "How to Minimize Downtime During a Commercial Move",
    "excerpt": "Every hour your business is offline costs money. Here's how to keep operations running during your relocation.",
    "image": "/generated/office-moving.webp"
  },
  {
    "slug": "commercial-vs-residential-movers",
    "title": "Commercial vs Residential Movers: What's the Difference?",
    "excerpt": "Not all movers are the same. Here's why commercial moves require different skills and equipment.",
    "image": "/generated/warehouse-relocation.webp"
  },
  {
    "slug": "what-to-look-for-in-commercial-movers",
    "title": "What to Look for When Hiring Commercial Movers in Idaho",
    "excerpt": "Choosing the wrong mover can derail your business. Here are the key questions to ask before signing a contract.",
    "image": "/generated/retail-moving.webp"
  },
  {
    "slug": "employee-communication-during-office-move",
    "title": "How to Keep Employees Informed During an Office Move",
    "excerpt": "Good communication makes all the difference. Here's how to keep your team in the loop during relocation.",
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
          alt="Commercial Moving Pros Blog"
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
            Tips, guides, and insights about commercial moving in the Treasure Valley. Real advice from real professionals.
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
            Contact us today for a free estimate on your commercial moving project.
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
