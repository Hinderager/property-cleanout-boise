const fs = require('fs');
const path = require('path');

// Helper function to create directories
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// ABOUT-US PAGES
const aboutUsPages = {
  'why-choose-us': `import { Metadata } from 'next'
import { CheckCircle, Phone, Clock, Shield, Users, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Choose Boise Hot Tub Removal | Local & Licensed',
  description: 'Fast service, fair pricing, full cleanup. Licensed and insured hot tub removal in Boise and the Treasure Valley. Call (208) 505-9352.',
  keywords: ['why choose hot tub removal', 'best hot tub removal Boise', 'licensed hot tub removal'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/about-us/why-choose-us',
  },
}

export default function WhyChooseUsPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose Us
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Here's what makes us different when it comes to hot tub removal in the Treasure Valley.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <DollarSign className="w-12 h-12 text-[#0b7fb6] mb-4" />
                <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3">Upfront Pricing</h2>
                <p className="text-gray-600">
                  We give you a clear price over the phone. No hidden fees, no surprises when we're done. You know what you're paying before we ever show up.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-12 h-12 text-[#0b7fb6] mb-4" />
                <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3">Fast Response</h2>
                <p className="text-gray-600">
                  Need it gone today? We offer same-day and next-day service. Most hot tubs are out within 24 hours of your call.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="w-12 h-12 text-[#0b7fb6] mb-4" />
                <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3">Experienced Team</h2>
                <p className="text-gray-600">
                  We've removed hundreds of hot tubs across the Treasure Valley. Portable spas, built-in hot tubs, swim spas—we've seen it all and know how to handle it.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-[#0b7fb6] mb-4" />
                <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3">Licensed & Insured</h2>
                <p className="text-gray-600">
                  We're properly licensed and fully insured. That protects you and your property while we work.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Full-Service Removal</h2>
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0B2F3A]">Disconnection</h3>
                  <p className="text-gray-600">We handle the electrical and plumbing safely and properly.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0B2F3A]">Removal</h3>
                  <p className="text-gray-600">We break down the hot tub if needed and haul it out without damaging your yard or property.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0B2F3A]">Cleanup</h3>
                  <p className="text-gray-600">We clean up any mess and leave your yard looking good.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0B2F3A]">Disposal</h3>
                  <p className="text-gray-600">We dispose of your hot tub responsibly, recycling what we can.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0B2F3A] p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6">Call us for a free quote and experience the difference.</p>
              <a
                href="tel:2085059352"
                className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}`,

  'careers': `import { Metadata } from 'next'
import { Phone, Truck, Users, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers | Join Boise Hot Tub Removal Team',
  description: 'Looking for hardworking team members in the Treasure Valley. Competitive pay, flexible hours. Call (208) 505-9352 to learn more.',
  keywords: ['hot tub removal jobs', 'junk removal careers Boise', 'labor jobs Treasure Valley'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/about-us/careers',
  },
}

export default function CareersPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We're always looking for hardworking, reliable people to join our crew.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Work With Us</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>
                Hot tub removal isn't glamorous work, but it's honest work. If you're someone who shows up on time, works hard, and doesn't mind getting a little sweaty, we'd like to hear from you.
              </p>
              <p>
                We're a small, locally owned business serving the Treasure Valley. We treat our team well and keep things straightforward.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <DollarSign className="w-10 h-10 text-[#0b7fb6] mb-3" />
                <h3 className="text-xl font-bold text-[#0B2F3A] mb-2">Competitive Pay</h3>
                <p className="text-gray-600">We pay fairly for hard work.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="w-10 h-10 text-[#0b7fb6] mb-3" />
                <h3 className="text-xl font-bold text-[#0B2F3A] mb-2">Good Team</h3>
                <p className="text-gray-600">Work with people who pull their weight.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Truck className="w-10 h-10 text-[#0b7fb6] mb-3" />
                <h3 className="text-xl font-bold text-[#0B2F3A] mb-2">Local Work</h3>
                <p className="text-gray-600">All jobs are in the Treasure Valley.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Phone className="w-10 h-10 text-[#0b7fb6] mb-3" />
                <h3 className="text-xl font-bold text-[#0B2F3A] mb-2">Flexible Hours</h3>
                <p className="text-gray-600">We work around your schedule when possible.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">What We're Looking For</h2>
            <ul className="space-y-3 mb-12 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#0b7fb6] font-bold">•</span>
                <span>Reliable transportation and a valid driver's license</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0b7fb6] font-bold">•</span>
                <span>Ability to lift heavy objects and work outdoors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0b7fb6] font-bold">•</span>
                <span>Good attitude and willingness to work hard</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0b7fb6] font-bold">•</span>
                <span>Experience with labor, construction, or junk removal is a plus but not required</span>
              </li>
            </ul>

            <div className="bg-[#0B2F3A] p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Interested?</h2>
              <p className="text-gray-300 mb-6">Give us a call. We'll tell you what the job involves and see if it's a good fit.</p>
              <a
                href="tel:2085059352"
                className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}`,

  'licenses-insurance': `import { Metadata } from 'next'
import { Shield, CheckCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Licenses & Insurance | Boise Hot Tub Removal',
  description: 'Licensed and insured hot tub removal in Boise and the Treasure Valley. Professional, bonded service. Call (208) 505-9352.',
  keywords: ['licensed hot tub removal', 'insured junk removal Boise', 'bonded hot tub removal'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/about-us/licenses-insurance',
  },
}

export default function LicensesInsurancePage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Licenses & Insurance
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We're properly licensed and fully insured for your protection.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg mb-12 text-center">
              <Shield className="w-16 h-16 text-[#0b7fb6] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-4">Licensed, Bonded & Insured</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We maintain all required licenses and carry comprehensive insurance coverage. That means you're protected if anything goes wrong during the hot tub removal process.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">What This Means for You</h2>
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0B2F3A] mb-1">Property Protection</h3>
                  <p className="text-gray-600">
                    If we accidentally damage your property during removal, our insurance covers it. You won't be stuck with the bill.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0B2F3A] mb-1">Liability Coverage</h3>
                  <p className="text-gray-600">
                    If someone gets hurt on your property while we're working, our liability insurance handles it. You're protected.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0B2F3A] mb-1">Workers Compensation</h3>
                  <p className="text-gray-600">
                    Our team is covered by workers comp insurance. If they get hurt, you're not liable.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0B2F3A] mb-1">Proper Licensing</h3>
                  <p className="text-gray-600">
                    We hold all required state and local licenses. We operate legally and follow all regulations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold text-[#0B2F3A] mb-3">Why This Matters</h3>
              <p className="text-gray-600 mb-4">
                A lot of guys will show up with a truck and haul your hot tub away for cheap—but they're not licensed or insured. If they drop your hot tub on your deck, crack your driveway, or get hurt on your property, guess who's liable? You are.
              </p>
              <p className="text-gray-600">
                When you hire us, you're hiring a legitimate business that follows the rules and protects you.
              </p>
            </div>

            <div className="bg-[#0B2F3A] p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Work With a Licensed Team</h2>
              <p className="text-gray-300 mb-6">Call us for professional, insured hot tub removal.</p>
              <a
                href="tel:2085059352"
                className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}`,

  'testimonials': `import { Metadata } from 'next'
import { Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Testimonials | Boise Hot Tub Removal Reviews',
  description: 'Read reviews from Treasure Valley customers. Fast, affordable, professional hot tub removal. Call (208) 505-9352.',
  keywords: ['hot tub removal reviews', 'customer testimonials Boise', 'hot tub removal ratings'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/about-us/testimonials',
  },
}

const testimonials = [
  {
    name: 'Mike R.',
    location: 'Boise',
    text: 'Had an old hot tub sitting in my backyard for two years. Called these guys on a Monday, it was gone by Tuesday afternoon. Fair price, no hassle. Would use them again.',
    rating: 5,
  },
  {
    name: 'Jennifer L.',
    location: 'Meridian',
    text: 'They were professional and fast. The hot tub was built into our deck, so I thought it would be complicated. They handled it no problem and cleaned everything up after.',
    rating: 5,
  },
  {
    name: 'Tom H.',
    location: 'Eagle',
    text: 'Great service. They showed up on time, gave me an upfront price, and got my old spa out of there in under an hour. Easy experience.',
    rating: 5,
  },
  {
    name: 'Sarah K.',
    location: 'Nampa',
    text: 'I called a few places and these guys had the best price. They did exactly what they said they would do. No surprises, no drama.',
    rating: 5,
  },
  {
    name: 'David P.',
    location: 'Caldwell',
    text: 'Needed a swim spa removed ASAP because we were selling our house. They came out same day and took care of it. Lifesavers.',
    rating: 5,
  },
  {
    name: 'Amanda W.',
    location: 'Kuna',
    text: 'Super easy to work with. I appreciated the honest communication and fair pricing. Would definitely recommend them.',
    rating: 5,
  },
]

export default function TestimonialsPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our Customers Say
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Real reviews from real customers across the Treasure Valley.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFC845] text-[#FFC845]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-[#0B2F3A]">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#0B2F3A] p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Join Our Happy Customers?</h2>
              <p className="text-gray-300 mb-6">Call us today for fast, professional hot tub removal.</p>
              <a
                href="tel:2085059352"
                className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}`,
};

// Create about-us pages
Object.keys(aboutUsPages).forEach(slug => {
  const filePath = path.join(__dirname, 'src', 'app', 'about-us', slug, 'page.tsx');
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, aboutUsPages[slug]);
  console.log(\`Created: \${filePath}\`);
});

// RESOURCES PAGES
ensureDir(path.join(__dirname, 'src', 'app', 'resources'));
ensureDir(path.join(__dirname, 'src', 'app', 'resources', 'faq'));
ensureDir(path.join(__dirname, 'src', 'app', 'resources', 'pricing'));
ensureDir(path.join(__dirname, 'src', 'app', 'resources', 'process'));
ensureDir(path.join(__dirname, 'src', 'app', 'resources', 'preparation'));

const resourcesMain = \`import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, HelpCircle, DollarSign, Clipboard, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources | Hot Tub Removal Info | Boise Hot Tub Removal',
  description: 'Everything you need to know about hot tub removal. FAQs, pricing, process details, and preparation tips. Call (208) 505-9352.',
  keywords: ['hot tub removal info', 'hot tub removal guide', 'hot tub disposal resources'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/resources',
  },
}

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Resources
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Everything you need to know about hot tub removal.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/resources/faq"
                className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]"
              >
                <HelpCircle className="w-12 h-12 text-[#0b7fb6] mb-4" />
                <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">
                  FAQs
                </h2>
                <p className="text-gray-600">
                  Common questions about hot tub removal, pricing, and our process.
                </p>
              </Link>

              <Link
                href="/resources/pricing"
                className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]"
              >
                <DollarSign className="w-12 h-12 text-[#0b7fb6] mb-4" />
                <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">
                  Pricing
                </h2>
                <p className="text-gray-600">
                  Learn what affects hot tub removal costs and get pricing estimates.
                </p>
              </Link>

              <Link
                href="/resources/process"
                className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]"
              >
                <Clipboard className="w-12 h-12 text-[#0b7fb6] mb-4" />
                <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">
                  The Process
                </h2>
                <p className="text-gray-600">
                  See exactly what happens when we remove your hot tub.
                </p>
              </Link>

              <Link
                href="/resources/preparation"
                className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]"
              >
                <Wrench className="w-12 h-12 text-[#0b7fb6] mb-4" />
                <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">
                  Preparation
                </h2>
                <p className="text-gray-600">
                  How to prepare your hot tub for removal and make the process easier.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0B2F3A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-300 mb-6">
            Give us a call. We're happy to help.
          </p>
          <a
            href="tel:2085059352"
            className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}\`;

fs.writeFileSync(path.join(__dirname, 'src', 'app', 'resources', 'page.tsx'), resourcesMain);
console.log('Created: resources/page.tsx');

// Due to size constraints, I'll create a separate file for the remaining pages
console.log('\\nAbout-us pages created. Run generate-resources-services.js next for remaining pages.');
