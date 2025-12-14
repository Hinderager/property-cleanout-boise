import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What to Look for When Hiring Commercial Movers in Idaho | Commercial Moving Pros',
  description: 'Choosing the wrong mover can derail your business. Here are the key questions to ask before signing a contract.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/blogs/what-to-look-for-in-commercial-movers',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/retail-moving.webp"
          alt="What to Look for When Hiring Commercial Movers in Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            What to Look for When Hiring Commercial Movers in Idaho
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">Hiring the wrong moving company can derail your business. Lost equipment, extended downtime, damaged furniture - I've heard horror stories.</p>
            <p className="text-gray-600 leading-relaxed">Here's what to look for (and watch out for) when choosing commercial movers in the Treasure Valley.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Verify They Actually Do Commercial Moves</h2>
            <p className="text-gray-600 leading-relaxed">Some companies say they do commercial moves but are really residential movers who occasionally take on an office. Ask:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>- What percentage of your business is commercial moves?</li>
              <li>How many office relocations have you done in the past year?</li>
              <li>Can you describe a recent commercial project similar to mine?</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">You want a company that does this regularly, not occasionally.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Check Insurance and Licensing</h2>
            <p className="text-gray-600 leading-relaxed">This is non-negotiable. Verify:</p>
            <p className="text-gray-600 leading-relaxed"><strong>Commercial auto insurance.</strong> Covers accidents during transport.</p>
            <p className="text-gray-600 leading-relaxed"><strong>General liability insurance.</strong> Covers damage to property during the move.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Workers' compensation.</strong> Covers injuries to moving crew. Without this, you could be liable if a mover gets hurt on your property.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Cargo insurance.</strong> Covers the value of items being transported.</p>
            <p className="text-gray-600 leading-relaxed">Ask for certificates of insurance and verify coverage limits are adequate for your equipment values. Don't just take their word for it.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Ask About Their Process</h2>
            <p className="text-gray-600 leading-relaxed">Good commercial movers have established procedures. Ask them to walk you through:</p>
            <p className="text-gray-600 leading-relaxed"><strong>Pre-move planning.</strong> How do they assess the job? Do they do an on-site survey? How detailed is their inventory process?</p>
            <p className="text-gray-600 leading-relaxed"><strong>Labeling and tracking.</strong> How do they ensure everything ends up in the right place? What's their system for tracking items?</p>
            <p className="text-gray-600 leading-relaxed"><strong>IT handling.</strong> How do they handle computers, servers, and network equipment? Do they have specialized staff for electronics?</p>
            <p className="text-gray-600 leading-relaxed"><strong>Day-of coordination.</strong> Who's in charge on moving day? How do they communicate with your team?</p>
            <p className="text-gray-600 leading-relaxed"><strong>Post-move support.</strong> What happens if something is damaged or missing? How quickly can they respond?</p>
            <p className="text-gray-600 leading-relaxed">Vague answers or "we figure it out on the day" should be red flags.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Get References and Check Them</h2>
            <p className="text-gray-600 leading-relaxed">Any mover can provide references - but do they give you real ones? Ask for:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>- Three to five recent commercial clients</li>
              <li>At least one similar in size to your business</li>
              <li>Permission to actually call them</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Then follow through. Ask references about:</li>
              <li>Did the move go as planned?</li>
              <li>Were there any surprises with pricing?</li>
              <li>How did they handle problems?</li>
              <li>Would you hire them again?</li>
            </ul>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Understand Their Pricing</h2>
            <p className="text-gray-600 leading-relaxed">Commercial move pricing should be transparent. Be wary of:</p>
            <p className="text-gray-600 leading-relaxed"><strong>Lowball estimates.</strong> If one quote is significantly lower than others, either they're cutting corners or they'll hit you with add-on charges later.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Hourly-only pricing.</strong> Commercial moves should generally be quoted as a project, not by the hour. Hourly pricing creates incentive for the job to take longer.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Vague pricing.</strong> "Around $X" isn't good enough. Get specific numbers for specific services.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Hidden fees.</strong> Ask specifically about charges for stairs, elevators, long carries, after-hours work, and equipment.</p>
            <p className="text-gray-600 leading-relaxed">Get the quote in writing with a breakdown of what's included.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Evaluate Their Communication</h2>
            <p className="text-gray-600 leading-relaxed">How a company treats you during the sales process tells you a lot about how they'll treat you during the move.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Good signs:</li>
              <li>They respond to inquiries promptly</li>
              <li>They ask detailed questions about your needs</li>
              <li>They're willing to do an on-site assessment</li>
              <li>They explain their process clearly</li>
              <li>They provide a detailed written quote</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Bad signs:</li>
              <li>Slow or unresponsive to calls and emails</li>
              <li>Rush to give a quote without understanding the job</li>
              <li>Won't commit to specifics</li>
              <li>Pressure tactics to sign immediately</li>
            </ul>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Consider Local Experience</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>A mover who knows Boise understands:</li>
              <li>Building management requirements at different office complexes</li>
              <li>Traffic patterns for scheduling</li>
              <li>Loading dock situations around town</li>
              <li>Local regulations and permit requirements</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">This local knowledge can prevent logistical headaches.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Questions to Ask Every Commercial Mover</h2>
            <p className="text-gray-600 leading-relaxed">1. How many commercial moves have you completed in the past year? 2. Do you have experience with businesses like mine? 3. Who will supervise my move on-site? 4. How do you handle damage claims? 5. What's your timeline for jobs like this? 6. Can you provide proof of insurance? 7. What's included in your quote, and what costs extra? 8. How do you handle IT equipment? 9. Can I see a sample contract? 10. What happens if the move takes longer than expected?</p>
            <p className="text-gray-600 leading-relaxed">A professional commercial mover will have clear, confident answers to all of these.</p>
            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Trust Your Gut</h2>
            <p className="text-gray-600 leading-relaxed">After all the research, your instinct matters. Do they seem organized? Professional? Do they listen to your concerns?</p>
            <p className="text-gray-600 leading-relaxed">Moving your business is stressful enough. Work with people who make you feel confident, not anxious.</p>
            </div>

            {/* CTA Box */}
            <div className="mt-12 bg-gray-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gunmetal mb-4">
                Need Commercial moving Help?
              </h3>
              <p className="text-gray-600 mb-6">
                Commercial Moving Pros is here to help with all your commercial moving needs in the Treasure Valley.
              </p>
              <a
                href="tel:2083611982"
                className="inline-block bg-dark-blue hover:bg-light-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call (208) 361-1982
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Articles
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-light-blue transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
