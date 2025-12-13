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
    url: 'https://boise-hoarding-cleanup.com/blog',
  },
}

const blogPosts = [
  {
    slug: '5-signs-loved-one-needs-hoarding-help',
    title: '5 Signs Your Loved One May Need Help',
    excerpt: 'How do you know when clutter has become something more serious? Here are five things we see that usually mean it\'s time to step in.',
    date: '2024-12-01',
    readTime: '5 min read',
    category: 'Family Support',
  },
  {
    slug: 'what-to-expect-hoarding-cleanup',
    title: 'What Actually Happens During Hoarding Cleanup',
    excerpt: 'Never been through this before? Here\'s how it works—from the first phone call to when we\'re done.',
    date: '2024-11-15',
    readTime: '7 min read',
    category: 'Cleanup Process',
  },
  {
    slug: 'hoarding-vs-clutter-difference',
    title: 'Is It Clutter or Is It Hoarding?',
    excerpt: 'Everyone has some mess. But there\'s a difference between a cluttered house and a hoarding situation. Here\'s how to tell.',
    date: '2024-11-01',
    readTime: '6 min read',
    category: 'Education',
  },
  {
    slug: 'supporting-family-through-cleanup',
    title: 'Being There for a Family Member During Cleanup',
    excerpt: 'Your loved one finally agreed to cleanup. Now what? Here\'s how to actually help without making things worse.',
    date: '2024-10-15',
    readTime: '8 min read',
    category: 'Family Support',
  },
  {
    slug: 'health-risks-hoarding-cleanup',
    title: 'The Health Dangers of Hoarding',
    excerpt: 'Hoarding isn\'t just clutter. It creates real health hazards—stuff that can make you sick. Here\'s what you\'re actually dealing with.',
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
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answers to questions we get all the time. Info for families dealing with hoarding.
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
              Have Questions?
            </h3>
            <p className="text-gray-300 mb-6">
              We do hoarding cleanup throughout the Treasure Valley. Give us a call.
            </p>
            <a
              href="tel:2083611982"
              className="inline-flex items-center gap-2 bg-brand-yellow text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              (208) 361-1982
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
