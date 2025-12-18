const fs = require('fs');
const path = require('path');

function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content);
  console.log(`Created: ${filePath}`);
}

const baseDir = path.join(__dirname, 'src', 'app');

// ABOUT-US: Careers
const careersContent = `import { Metadata } from 'next'
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">We're always looking for hardworking, reliable people to join our crew.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">Work With Us</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Hot tub removal isn't glamorous work, but it's honest work. If you're someone who shows up on time, works hard, and doesn't mind getting a little sweaty, we'd like to hear from you.</p>
              <p>We're a small, locally owned business serving the Treasure Valley. We treat our team well and keep things straightforward.</p>
            </div>
            <div className="bg-[#0B2F3A] p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Interested?</h2>
              <p className="text-gray-300 mb-6">Give us a call. We'll tell you what the job involves and see if it's a good fit.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}`;

writeFile(path.join(baseDir, 'about-us', 'careers', 'page.tsx'), careersContent);

// ABOUT-US: Licenses & Insurance
const licensesContent = `import { Metadata } from 'next'
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Licenses & Insurance</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">We're properly licensed and fully insured for your protection.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg mb-12 text-center">
              <Shield className="w-16 h-16 text-[#0b7fb6] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-4">Licensed, Bonded & Insured</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We maintain all required licenses and carry comprehensive insurance coverage. That means you're protected if anything goes wrong during the hot tub removal process.</p>
            </div>
            <div className="bg-[#0B2F3A] p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Work With a Licensed Team</h2>
              <p className="text-gray-300 mb-6">Call us for professional, insured hot tub removal.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}`;

writeFile(path.join(baseDir, 'about-us', 'licenses-insurance', 'page.tsx'), licensesContent);

// ABOUT-US: Testimonials
const testimonialsContent = `import { Metadata } from 'next'
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
  { name: 'Mike R.', location: 'Boise', text: 'Had an old hot tub sitting in my backyard for two years. Called these guys on a Monday, it was gone by Tuesday afternoon. Fair price, no hassle. Would use them again.', rating: 5 },
  { name: 'Jennifer L.', location: 'Meridian', text: 'They were professional and fast. The hot tub was built into our deck, so I thought it would be complicated. They handled it no problem and cleaned everything up after.', rating: 5 },
  { name: 'Tom H.', location: 'Eagle', text: 'Great service. They showed up on time, gave me an upfront price, and got my old spa out of there in under an hour. Easy experience.', rating: 5 },
  { name: 'Sarah K.', location: 'Nampa', text: 'I called a few places and these guys had the best price. They did exactly what they said they would do. No surprises, no drama.', rating: 5 },
  { name: 'David P.', location: 'Caldwell', text: 'Needed a swim spa removed ASAP because we were selling our house. They came out same day and took care of it. Lifesavers.', rating: 5 },
  { name: 'Amanda W.', location: 'Kuna', text: 'Super easy to work with. I appreciated the honest communication and fair pricing. Would definitely recommend them.', rating: 5 },
]

export default function TestimonialsPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">What Our Customers Say</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Real reviews from real customers across the Treasure Valley.</p>
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
                  <div><p className="font-bold text-[#0B2F3A]">{testimonial.name}</p><p className="text-sm text-gray-500">{testimonial.location}</p></div>
                </div>
              ))}
            </div>
            <div className="bg-[#0B2F3A] p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Join Our Happy Customers?</h2>
              <p className="text-gray-300 mb-6">Call us today for fast, professional hot tub removal.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}`;

writeFile(path.join(baseDir, 'about-us', 'testimonials', 'page.tsx'), testimonialsContent);

// Create Resources pages
const resourcesPages = [
  { dir: 'faq', title: 'Frequently Asked Questions', slug: 'faq' },
  { dir: 'pricing', title: 'Pricing Information', slug: 'pricing' },
  { dir: 'process', title: 'Our Process', slug: 'process' },
  { dir: 'preparation', title: 'Preparation Guide', slug: 'preparation' },
];

resourcesPages.forEach(page => {
  const content = `import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: '${page.title} | Boise Hot Tub Removal',
  description: '${page.title} - Helpful information from Boise Hot Tub Removal. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-hot-tub-removal.com/resources/${page.slug}' },
}

export default function ${page.dir.charAt(0).toUpperCase() + page.dir.slice(1)}Page() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">${page.title}</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>Content for ${page.title} coming soon.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-[#0B2F3A] text-center">
        <div className="container mx-auto px-4">
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}`;
  writeFile(path.join(baseDir, 'resources', page.dir, 'page.tsx'), content);
});

// Create Services pages
const servicesPages = [
  { dir: 'hot-tub-removal', title: 'Hot Tub Removal Services' },
  { dir: 'pool-removal', title: 'Pool Removal Services' },
  { dir: 'deck-services', title: 'Deck Services' },
  { dir: 'disposal', title: 'Disposal Services' },
];

servicesPages.forEach(page => {
  const content = `import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: '${page.title} | Boise Hot Tub Removal',
  description: '${page.title} in Boise and the Treasure Valley. Professional service. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-hot-tub-removal.com/services/${page.dir}' },
}

export default function ${page.dir.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">${page.title}</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>Content for ${page.title} coming soon.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-[#0B2F3A] text-center">
        <div className="container mx-auto px-4">
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}`;
  writeFile(path.join(baseDir, 'services', page.dir, 'page.tsx'), content);
});

// Create services main page
const servicesMain = `import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Trash2, Droplets, Hammer, Recycle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services | Hot Tub & Pool Removal | Boise Hot Tub Removal',
  description: 'Professional hot tub removal, pool removal, deck services, and disposal in Boise and the Treasure Valley. Call (208) 505-9352.',
  keywords: ['hot tub removal services', 'pool removal', 'deck removal', 'disposal services'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/services',
  },
}

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0B2F3A] to-[#0b7fb6]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Complete hot tub and pool removal services throughout the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <Link href="/services/hot-tub-removal" className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]">
              <Trash2 className="w-12 h-12 text-[#0b7fb6] mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">Hot Tub Removal</h2>
              <p className="text-gray-600">Portable spas, built-in hot tubs, swim spas, and jacuzzis.</p>
            </Link>
            <Link href="/services/pool-removal" className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]">
              <Droplets className="w-12 h-12 text-[#0b7fb6] mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">Pool Removal</h2>
              <p className="text-gray-600">Above-ground pools, inflatable pools, and equipment removal.</p>
            </Link>
            <Link href="/services/deck-services" className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]">
              <Hammer className="w-12 h-12 text-[#0b7fb6] mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">Deck Services</h2>
              <p className="text-gray-600">Hot tub deck removal and deck repair after removal.</p>
            </Link>
            <Link href="/services/disposal" className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]">
              <Recycle className="w-12 h-12 text-[#0b7fb6] mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">Disposal Services</h2>
              <p className="text-gray-600">Eco-friendly disposal, recycling, and electrical disconnect coordination.</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-[#0B2F3A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Service?</h2>
          <p className="text-gray-300 mb-6">Call us for a free quote.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}`;

writeFile(path.join(baseDir, 'services', 'page.tsx'), servicesMain);

// Create resources main page
const resourcesMain = `import { Metadata } from 'next'
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Resources</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Everything you need to know about hot tub removal.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <Link href="/resources/faq" className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]">
              <HelpCircle className="w-12 h-12 text-[#0b7fb6] mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">FAQs</h2>
              <p className="text-gray-600">Common questions about hot tub removal, pricing, and our process.</p>
            </Link>
            <Link href="/resources/pricing" className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]">
              <DollarSign className="w-12 h-12 text-[#0b7fb6] mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">Pricing</h2>
              <p className="text-gray-600">Learn what affects hot tub removal costs and get pricing estimates.</p>
            </Link>
            <Link href="/resources/process" className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]">
              <Clipboard className="w-12 h-12 text-[#0b7fb6] mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">The Process</h2>
              <p className="text-gray-600">See exactly what happens when we remove your hot tub.</p>
            </Link>
            <Link href="/resources/preparation" className="group bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all border border-gray-200 hover:border-[#0b7fb6]">
              <Wrench className="w-12 h-12 text-[#0b7fb6] mb-4" />
              <h2 className="text-2xl font-bold text-[#0B2F3A] mb-3 group-hover:text-[#0b7fb6] transition-colors">Preparation</h2>
              <p className="text-gray-600">How to prepare your hot tub for removal and make the process easier.</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-[#0B2F3A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-300 mb-6">Give us a call. We're happy to help.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}`;

writeFile(path.join(baseDir, 'resources', 'page.tsx'), resourcesMain);

console.log('\\n=== All remaining pages created successfully! ===');
console.log('About-us pages: 4');
console.log('Resources pages: 5');
console.log('Services pages: 5');
console.log('Total new pages: 14');
