const fs = require('fs');
const path = require('path');

// Cities to create pages for
const cities = [
  { slug: 'boise', name: 'Boise', neighborhoods: ['Downtown Boise', 'North End', 'East End', 'Bench', 'West Boise', 'Southeast Boise', 'Harris Ranch', 'Warm Springs'] },
  { slug: 'meridian', name: 'Meridian', neighborhoods: ['Downtown Meridian', 'Lochsa Falls', 'Paramount', 'Bridgetower', 'Tuscany', 'Seven Oaks'] },
  { slug: 'nampa', name: 'Nampa', neighborhoods: ['Downtown Nampa', 'Karcher Mall Area', 'West Nampa', 'South Nampa', 'Greenhurst', 'Centennial'] },
  { slug: 'caldwell', name: 'Caldwell', neighborhoods: ['Downtown Caldwell', 'College of Idaho Area', 'Indian Creek', 'Ustick', 'Canyon Hill'] },
  { slug: 'eagle', name: 'Eagle', neighborhoods: ['Downtown Eagle', 'Eagle Hills', 'Banbury', 'Eagle Island', 'Floating Feather'] },
  { slug: 'garden-city', name: 'Garden City', neighborhoods: ['Glenwood', 'Chinden District', 'Along the Greenbelt', 'Industrial District'] },
  { slug: 'kuna', name: 'Kuna', neighborhoods: ['Downtown Kuna', 'Crimson Point', 'Avalon', 'Initial Point', 'Teed Farms'] },
  { slug: 'star', name: 'Star', neighborhoods: ['Downtown Star', 'Star Acres', 'Colt Ranch', 'Riverside', 'Star Harvest'] },
  { slug: 'middleton', name: 'Middleton', neighborhoods: ['Downtown Middleton', 'Purple Sage', 'Middleton Mill', 'Sage Valley'] },
  { slug: 'mountain-home', name: 'Mountain Home', neighborhoods: ['Downtown Mountain Home', 'Air Force Base Area', 'Mountain Home Heights', 'West Mountain Home'] }
];

// Services for each city
const services = [
  { slug: 'estate-cleanout', name: 'Estate Cleanout', description: 'Complete estate cleanout services' },
  { slug: 'probate-cleanout', name: 'Probate Property Cleanout', description: 'Fast cleanouts for probate properties' },
  { slug: 'senior-downsizing', name: 'Senior Downsizing Help', description: 'Compassionate downsizing assistance' },
  { slug: 'assisted-living-transition', name: 'Assisted Living Transitions', description: 'Help moving to assisted living' },
  { slug: 'inherited-property-cleanout', name: 'Inherited Property Cleanout', description: 'Clear out inherited properties' },
  { slug: 'foreclosure-cleanout', name: 'Foreclosure Cleanout', description: 'Property cleanouts for foreclosures' },
  { slug: 'hoarder-cleanup', name: 'Hoarding Cleanup', description: 'Sensitive hoarding situation cleanup' },
  { slug: 'property-clearing', name: 'Full Property Clearing', description: 'Complete property clearing services' }
];

// Template for city main page
function generateCityPage(city) {
  return `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, MapPin, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Estate Cleanout Services ${city.name} Idaho | Top Shelf',
  description: 'Professional estate cleanout services in ${city.name}, Idaho. Compassionate, respectful service for families. Licensed & insured. Call (208) 505-9352.',
  keywords: ['estate cleanout ${city.name}', 'probate cleanout ${city.name} Idaho', 'senior downsizing ${city.name}', 'property cleanout ${city.name}'],
  alternates: {
    canonical: 'https://boise-estate-cleanout.com/cities-served/${city.slug}',
  },
}

const neighborhoods = ${JSON.stringify(city.neighborhoods)}

const services = [
  { name: 'Estate Cleanout', href: '/cities-served/${city.slug}/estate-cleanout', description: 'Complete estate cleanout services' },
  { name: 'Probate Cleanout', href: '/cities-served/${city.slug}/probate-cleanout', description: 'Fast cleanouts for probate properties' },
  { name: 'Senior Downsizing', href: '/cities-served/${city.slug}/senior-downsizing', description: 'Compassionate downsizing help' },
  { name: 'Inherited Property', href: '/cities-served/${city.slug}/inherited-property-cleanout', description: 'Clear out inherited properties' },
  { name: 'Foreclosure Cleanout', href: '/cities-served/${city.slug}/foreclosure-cleanout', description: 'Property cleanouts' },
  { name: 'Hoarding Cleanup', href: '/cities-served/${city.slug}/hoarder-cleanup', description: 'Sensitive cleanup services' },
]

export default function ${city.name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/estate-cleanout-${city.slug}.webp"
          alt="Estate Cleanout Services in ${city.name}, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Estate Cleanout Services in ${city.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Compassionate estate cleanout services for ${city.name} families. Licensed, insured, and here to help during difficult transitions.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Estate Cleanout Services in ${city.name}</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>When a loved one passes away or needs to transition to assisted living, clearing out a lifetime of belongings can feel overwhelming. That's where we come in. Top Shelf Estate Cleanout serves ${city.name} families with compassionate, professional estate cleanout services.</p>
              <p>We understand this isn't just about removing items—it's about handling memories, making difficult decisions, and moving forward during an emotional time. Our team treats every family and every item with respect and care.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Our Services in ${city.name}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-dark-blue group-hover:text-[#0b7fb6]">{service.name}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">${city.name} Areas We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
              {neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-dark-blue flex-shrink-0" />
                  <span className="text-sm text-gray-700">{neighborhood}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why ${city.name} Families Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Local Service:</strong> We serve ${city.name} and the Treasure Valley regularly.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Compassionate Approach:</strong> We understand the emotional weight of estate cleanouts.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Response:</strong> Same-day and next-day service available.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fair Pricing:</strong> Transparent quotes with no hidden fees.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Estate Cleanout in ${city.name}?</h3>
              <p className="text-gray-300 mb-6">Call us for a free estimate. We'll make this process as easy as possible.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
`;
}

// Template for city service subpage
function generateCityServicePage(city, service) {
  return `import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: '${service.name} ${city.name} Idaho | Top Shelf Estate Cleanout',
  description: '${service.description} in ${city.name}, Idaho. Fast, compassionate service. Call (208) 505-9352 for a free quote.',
  alternates: {
    canonical: 'https://boise-estate-cleanout.com/cities-served/${city.slug}/${service.slug}',
  },
}

export default function ${city.name.replace(/[^a-zA-Z]/g, '')}${service.name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">${service.name} in ${city.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">${service.description} for ${city.name} families.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Top Shelf Estate Cleanout provides ${service.name.toLowerCase()} services throughout ${city.name} and the Treasure Valley. We understand these situations require sensitivity, professionalism, and fast response times.</p>
              <p>Whether you're dealing with a tight probate deadline, helping aging parents downsize, or clearing an inherited property, our team handles every job with compassion and respect.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Clock className="w-10 h-10 text-[#FFC845] mx-auto mb-3" />
                <h3 className="font-bold text-dark-blue mb-2">Fast Service</h3>
                <p className="text-gray-600 text-sm">Same-day and next-day service available in ${city.name}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Shield className="w-10 h-10 text-[#FFC845] mx-auto mb-3" />
                <h3 className="font-bold text-dark-blue mb-2">Licensed & Insured</h3>
                <p className="text-gray-600 text-sm">Full insurance coverage for your peace of mind</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <CheckCircle className="w-10 h-10 text-[#FFC845] mx-auto mb-3" />
                <h3 className="font-bold text-dark-blue mb-2">Compassionate Crew</h3>
                <p className="text-gray-600 text-sm">Respectful handling of your family's belongings</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-dark-blue mb-6">What We Do</h2>
            <ul className="space-y-3 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Complete property cleanout from top to bottom</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Sorting, organizing, and identifying valuable items</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Donation of usable items to local charities</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Proper disposal and recycling</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Final cleanup leaving property broom-clean</span>
              </li>
            </ul>

            <div className="bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Serving ${city.name} Families</h2>
              <p className="text-gray-300 mb-6">Call us today for a free quote on your ${service.name.toLowerCase()} project.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>

            <div className="mt-12 text-center">
              <Link href="/cities-served/${city.slug}" className="text-dark-blue underline hover:text-[#0b7fb6]">
                ← Back to ${city.name} Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
`;
}

// Main function to generate all pages
function generateAllPages() {
  const basePath = path.join(__dirname, 'src', 'app', 'cities-served');

  // Create base cities-served directory
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath, { recursive: true });
  }

  let totalPages = 0;

  // Generate pages for each city
  cities.forEach(city => {
    const cityPath = path.join(basePath, city.slug);

    // Create city directory
    if (!fs.existsSync(cityPath)) {
      fs.mkdirSync(cityPath, { recursive: true });
    }

    // Create main city page
    const cityPagePath = path.join(cityPath, 'page.tsx');
    fs.writeFileSync(cityPagePath, generateCityPage(city));
    console.log(`✓ Created ${city.slug}/page.tsx`);
    totalPages++;

    // Create service subpages
    services.forEach(service => {
      const servicePath = path.join(cityPath, service.slug);

      // Create service directory
      if (!fs.existsSync(servicePath)) {
        fs.mkdirSync(servicePath, { recursive: true });
      }

      // Create service page
      const servicePagePath = path.join(servicePath, 'page.tsx');
      fs.writeFileSync(servicePagePath, generateCityServicePage(city, service));
      console.log(`✓ Created ${city.slug}/${service.slug}/page.tsx`);
      totalPages++;
    });
  });

  console.log(`\n✅ Successfully created ${totalPages} pages!`);
  console.log(`   - ${cities.length} city main pages`);
  console.log(`   - ${cities.length * services.length} city service pages`);
}

// Run the generator
generateAllPages();
