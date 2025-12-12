import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hoarding Cleanup Blog | Tips, Guides & Resources',
  description: 'Expert advice on hoarding cleanup, tips for helping hoarders, and resources for families. Read our blog for helpful information on hoarding disorder.',
  keywords: [
    'hoarding blog',
    'hoarding cleanup tips',
    'hoarding resources',
    'hoarding help articles',
    'hoarder help guide',
    'hoarding disorder blog',
  ],
  openGraph: {
    title: 'Hoarding Cleanup Blog | Tips, Guides & Resources',
    description: 'Expert advice on hoarding cleanup, tips for helping hoarders, and resources for families.',
    url: 'https://hoardingcleanupboise.com/blog',
  },
}

const blogPosts = [
  {
    slug: '5-signs-loved-one-needs-hoarding-help',
    title: '5 Signs Your Loved One May Need Hoarding Help',
    excerpt: 'Recognizing when a family member needs professional help with hoarding can be difficult. Learn the key warning signs that indicate it may be time to seek assistance.',
    date: '2024-12-01',
    readTime: '5 min read',
    category: 'Family Support',
  },
  {
    slug: 'what-to-expect-hoarding-cleanup',
    title: 'What to Expect During a Professional Hoarding Cleanup',
    excerpt: 'Wondering what happens during a hoarding cleanup? We walk you through the entire process from initial consultation to final cleaning.',
    date: '2024-11-15',
    readTime: '7 min read',
    category: 'Cleanup Process',
  },
  {
    slug: 'hoarding-vs-clutter-difference',
    title: 'Hoarding vs Clutter: Understanding the Difference',
    excerpt: 'Is it just clutter or is it hoarding? Learn how to tell the difference and understand when messiness crosses the line into a mental health concern.',
    date: '2024-11-01',
    readTime: '6 min read',
    category: 'Education',
  },
  {
    slug: 'supporting-family-through-cleanup',
    title: 'How to Support a Family Member Through Hoarding Cleanup',
    excerpt: 'Hoarding cleanup is an emotional process. Learn how to provide meaningful support to your loved one during and after the cleanup process.',
    date: '2024-10-15',
    readTime: '8 min read',
    category: 'Family Support',
  },
  {
    slug: 'health-risks-hoarding-cleanup',
    title: 'The Health Risks of Hoarding: Why Professional Cleanup Matters',
    excerpt: 'Hoarding creates serious health hazards. Learn about the risks of hoarding environments and why professional cleanup is often necessary.',
    date: '2024-10-01',
    readTime: '6 min read',
    category: 'Health & Safety',
  },
]

export default function BlogPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gunmetal mb-6">
              Hoarding Cleanup Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice, helpful guides, and resources for families dealing with hoarding.
              Learn how to help yourself or a loved one.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`} className="block p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="bg-light-blue/10 text-light-blue text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gunmetal mb-3 group-hover:text-light-blue transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-light-blue font-medium hover:underline">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Professional Hoarding Cleanup?
            </h3>
            <p className="text-gray-300 mb-6">
              We serve Boise, Meridian, Nampa, Caldwell, and Eagle with compassionate hoarding cleanup services.
            </p>
            <a
              href="tel:2083611982"
              className="inline-flex items-center gap-2 bg-brand-yellow text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Call (208) 361-1982
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
