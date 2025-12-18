const fs = require('fs');
const path = require('path');

const cities = [
  {
    name: 'Boise',
    slug: 'boise',
    description: 'Idaho\'s capital and largest city',
    neighborhoods: ['Downtown Boise', 'North End', 'East End', 'Bench', 'West Boise', 'Southeast Boise', 'Southwest Boise', 'Harris Ranch', 'Warm Springs', 'Boise Highlands'],
  },
  {
    name: 'Meridian',
    slug: 'meridian',
    description: 'Idaho\'s fastest-growing city',
    neighborhoods: ['Paramount', 'Lochsa Falls', 'Tuscany', 'Victory Village', 'Meridian Ranch', 'Discovery Park', 'South Meridian'],
  },
  {
    name: 'Nampa',
    slug: 'nampa',
    description: 'Canyon County\'s largest city',
    neighborhoods: ['Downtown Nampa', 'Southside', 'Northside', 'West Nampa', 'Centennial', 'Lake Lowell area'],
  },
  {
    name: 'Caldwell',
    slug: 'caldwell',
    description: 'The Canyon County seat',
    neighborhoods: ['Downtown Caldwell', 'Westpark', 'Canyon Hill', 'Sunnyridge', 'Indian Creek'],
  },
  {
    name: 'Eagle',
    slug: 'eagle',
    description: 'Upscale community in Ada County',
    neighborhoods: ['Eagle Hills', 'Banbury', 'Shadow Valley', 'Floating Feather', 'Eagle Springs', 'BanCroft'],
  },
  {
    name: 'Garden City',
    slug: 'garden-city',
    description: 'Small city along the Boise River',
    neighborhoods: ['Glenwood', 'River Run', 'Plantation', 'Riverside Village'],
  },
  {
    name: 'Kuna',
    slug: 'kuna',
    description: 'Growing community south of Boise',
    neighborhoods: ['Swan Falls', 'Crimson Point', 'Alder Creek', 'Kuna Estates', 'Desert Winds'],
  },
  {
    name: 'Star',
    slug: 'star',
    description: 'Rural community northwest of Boise',
    neighborhoods: ['Pearl', 'Riverside', 'Star Center', 'Beacon Light'],
  },
  {
    name: 'Middleton',
    slug: 'middleton',
    description: 'Small town in Canyon County',
    neighborhoods: ['Middleton Center', 'Farmland areas', 'Purple Sage'],
  },
  {
    name: 'Mountain Home',
    slug: 'mountain-home',
    description: 'City in Elmore County',
    neighborhoods: ['Downtown Mountain Home', 'Mountain Home Air Force Base area', 'North Mountain Home'],
  },
];

const services = [
  {
    name: 'Portable Hot Tub Removal',
    slug: 'portable-hot-tub-removal',
    description: 'Removal of portable and above-ground hot tubs',
    problems: ['Need to reclaim yard space', 'Old or broken hot tub', 'Moving to a new home', 'High maintenance costs', 'Costly repairs needed', 'Energy bills too high'],
  },
  {
    name: 'Built-In Hot Tub Removal',
    slug: 'built-in-hot-tub-removal',
    description: 'Removal of in-ground and built-in spa systems',
    problems: ['Cracked or leaking structure', 'Outdated design', 'Deck or patio renovation', 'Want to convert space', 'Expensive to maintain', 'Rarely used anymore'],
  },
  {
    name: 'Swim Spa Removal',
    slug: 'swim-spa-removal',
    description: 'Removal of swim spas and exercise pools',
    problems: ['Large and difficult to remove', 'No longer using it', 'Want a traditional pool instead', 'Mechanical issues', 'Too costly to repair', 'Need yard space'],
  },
  {
    name: 'Jacuzzi Removal',
    slug: 'jacuzzi-removal',
    description: 'Removal of jacuzzi tubs and whirlpool baths',
    problems: ['Jets not working', 'Mold or mildew issues', 'Bathroom remodel', 'Prefer shower instead', 'Leaking or damaged', 'Hard to clean'],
  },
  {
    name: 'Hot Tub Disposal',
    slug: 'hot-tub-disposal',
    description: 'Eco-friendly disposal and recycling services',
    problems: ['Don\'t know where to take it', 'Too heavy to move yourself', 'Landfill won\'t accept it', 'Want to recycle components', 'Need proper disposal', 'Environmental concerns'],
  },
  {
    name: 'Hot Tub Demolition',
    slug: 'hot-tub-demolition',
    description: 'Complete demolition and debris removal',
    problems: ['Built into deck structure', 'Concrete surround', 'Underground plumbing', 'Electrical connections', 'Heavy or oversized', 'Complex removal needed'],
  },
  {
    name: 'Above Ground Pool Removal',
    slug: 'above-ground-pool-removal',
    description: 'Removal of above-ground pools and equipment',
    problems: ['Pool is damaged or leaking', 'Liner needs replacement', 'Rusty or deteriorating', 'Want yard space back', 'Too much maintenance', 'Safety concerns'],
  },
  {
    name: 'Hot Tub Deck Removal',
    slug: 'hot-tub-deck-removal',
    description: 'Removal of hot tub decking and surrounds',
    problems: ['Deck is rotting', 'Want to rebuild differently', 'Need to access hot tub', 'Structural damage', 'Outdated design', 'Complete renovation planned'],
  },
];

function createCityPage(city) {
  const content = `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, MapPin, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hot Tub Removal ${city.name} Idaho | Spa Removal | Boise Hot Tub Removal',
  description: 'Professional hot tub removal in ${city.name}, Idaho. Fast, affordable spa disposal and removal. Licensed & insured. Same-day service. Call (208) 505-9352.',
  keywords: ['hot tub removal ${city.name}', 'spa removal ${city.name} Idaho', 'jacuzzi removal ${city.name}'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/cities-served/${city.slug}',
  },
}

const neighborhoods = ${JSON.stringify(city.neighborhoods)}

const services = [
  { name: 'Portable Hot Tub Removal', href: '/cities-served/${city.slug}/portable-hot-tub-removal', description: 'Above-ground spa removal' },
  { name: 'Built-In Hot Tub Removal', href: '/cities-served/${city.slug}/built-in-hot-tub-removal', description: 'In-ground spa removal' },
  { name: 'Swim Spa Removal', href: '/cities-served/${city.slug}/swim-spa-removal', description: 'Exercise spa removal' },
  { name: 'Jacuzzi Removal', href: '/cities-served/${city.slug}/jacuzzi-removal', description: 'Whirlpool tub removal' },
  { name: 'Hot Tub Disposal', href: '/cities-served/${city.slug}/hot-tub-disposal', description: 'Eco-friendly disposal' },
  { name: 'Hot Tub Demolition', href: '/cities-served/${city.slug}/hot-tub-demolition', description: 'Complete demolition' },
  { name: 'Above Ground Pool Removal', href: '/cities-served/${city.slug}/above-ground-pool-removal', description: 'Pool removal service' },
  { name: 'Hot Tub Deck Removal', href: '/cities-served/${city.slug}/hot-tub-deck-removal', description: 'Deck & surround removal' },
]

export default function ${city.name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/hot-tub-removal-process.webp"
          alt="Hot Tub Removal in ${city.name}, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Hot Tub Removal in ${city.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional hot tub removal services for ${city.name} homes and businesses. Licensed, insured, and ready to help.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">${city.name} Hot Tub Removal Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Got an old hot tub taking up space in your ${city.name} backyard? Whether it's broken, unused, or you're just ready for a change, we'll get it out of there fast.</p>
              <p>We handle everything—disconnecting power and plumbing, breaking it down if needed, hauling it away, and leaving your yard clean. No guesswork, no hassle. Just straightforward hot tub removal in ${city.name}.</p>
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Our Services in ${city.name}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-[#0B2F3A] group-hover:text-[#0b7fb6]">{service.name}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">${city.name} Areas We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
              {neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-[#0b7fb6] flex-shrink-0" />
                  <span className="text-sm text-gray-700">{neighborhood}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Why ${city.name} Homeowners Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Local Service:</strong> We're based in the Treasure Valley and know ${city.name} well.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Full Service:</strong> We handle disconnection, removal, and cleanup—everything.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Response:</strong> Same-day service available for ${city.name} residents.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fair Pricing:</strong> Upfront quotes with no hidden fees.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Hot Tub Removal in ${city.name}?</h3>
              <p className="text-gray-300 mb-6">Call us for a free estimate. We'll handle the hard work.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0B2F3A] mb-6">Also Serving Nearby Cities</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/boise" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Boise</Link>
            <Link href="/cities-served/meridian" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Meridian</Link>
            <Link href="/cities-served/nampa" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Nampa</Link>
            <Link href="/cities-served/caldwell" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Caldwell</Link>
            <Link href="/cities-served/eagle" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Eagle</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
`;

  return content;
}

function createServicePage(city, service) {
  const content = `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: '${service.name} ${city.name} ID | Boise Hot Tub Removal',
  description: '${service.description} in ${city.name}, Idaho. Fast, reliable service. Licensed & insured. Same-day appointments available. Call (208) 505-9352.',
  keywords: ['${service.slug.replace(/-/g, ' ')} ${city.name}', 'hot tub removal ${city.name}'],
  alternates: {
    canonical: 'https://boise-hot-tub-removal.com/cities-served/${city.slug}/${service.slug}',
  },
}

const commonProblems = ${JSON.stringify(service.problems)}

export default function ${city.name.replace(/[^a-zA-Z]/g, '')}${service.name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/hot-tub-removal-process.webp"
          alt="${service.name} in ${city.name}, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F3A]/90 to-[#0B2F3A]/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-[#0b7fb6] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Same-Day Service Available</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">${service.name} in ${city.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">${service.description} in ${city.name}. Professional, efficient, and hassle-free.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B2F3A] mb-6">${service.name} Services in ${city.name}</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Need ${service.slug.replace(/-/g, ' ')} in ${city.name}? We've got you covered. Whether your hot tub is ancient, broken, or you just want it gone, we'll handle the whole process.</p>
              <p>We show up on time, disconnect everything safely, break it down if needed, haul it away, and clean up after ourselves. No stress, no guessing what it'll cost. Just straightforward ${service.slug.replace(/-/g, ' ')}.</p>
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Common Reasons for ${service.name}</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {commonProblems.map((problem) => (
                <div key={problem} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#0B2F3A] mb-6">Why ${city.name} Residents Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast ${city.name} Service:</strong> We respond quickly to ${city.name} service calls.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start any work.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Full Service:</strong> We handle disconnection, removal, and cleanup.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Professional, trustworthy service.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-[#0B2F3A] rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need ${service.name} in ${city.name}?</h3>
              <p className="text-gray-300 mb-6">Call now for fast, professional service.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-[#0B2F3A] px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0B2F3A] mb-6">Other Services in ${city.name}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/${city.slug}" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">All ${city.name} Services</Link>
            <Link href="/cities-served/${city.slug}/portable-hot-tub-removal" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Portable Hot Tub Removal</Link>
            <Link href="/cities-served/${city.slug}/hot-tub-disposal" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Hot Tub Disposal</Link>
            <Link href="/cities-served/${city.slug}/hot-tub-demolition" className="text-[#0b7fb6] underline hover:text-[#0B2F3A] font-medium">Hot Tub Demolition</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
`;

  return content;
}

// Create all city pages and service subpages
cities.forEach(city => {
  const cityDir = path.join(__dirname, 'src', 'app', 'cities-served', city.slug);

  // Create city directory
  if (!fs.existsSync(cityDir)) {
    fs.mkdirSync(cityDir, { recursive: true });
  }

  // Create city page
  const cityPagePath = path.join(cityDir, 'page.tsx');
  fs.writeFileSync(cityPagePath, createCityPage(city));
  console.log(`Created: ${cityPagePath}`);

  // Create service subpages
  services.forEach(service => {
    const serviceDir = path.join(cityDir, service.slug);
    if (!fs.existsSync(serviceDir)) {
      fs.mkdirSync(serviceDir, { recursive: true });
    }

    const servicePagePath = path.join(serviceDir, 'page.tsx');
    fs.writeFileSync(servicePagePath, createServicePage(city, service));
    console.log(`Created: ${servicePagePath}`);
  });
});

console.log('\nAll city pages and service subpages created successfully!');
console.log(`Total cities: ${cities.length}`);
console.log(`Total services per city: ${services.length}`);
console.log(`Total pages created: ${cities.length + (cities.length * services.length)}`);
