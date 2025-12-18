const fs = require('fs');
const path = require('path');

const BASE_PATH = 'C:/Users/Administrator/Top Shelf Storage Dropbox/Eric Hinderager/Online Businesses/Top Shelf Moving and Junk Removal/Microsites/boise-movers/src/app/cities-served';

const cities = [
  { slug: 'boise', name: 'Boise', neighborhoods: ['Downtown Boise', 'North End', 'East End', 'Bench', 'West Boise', 'Southeast Boise', 'Southwest Boise', 'Harris Ranch', 'Warm Springs', 'Boise Highlands'] },
  { slug: 'meridian', name: 'Meridian', neighborhoods: ['Downtown Meridian', 'Paramount', 'Lochsa Falls', 'Settlers Bridge', 'Tuscany', 'Spurwing', 'Victory Commons', 'Silverstone'] },
  { slug: 'nampa', name: 'Nampa', neighborhoods: ['Downtown Nampa', 'Midway', 'Sunny Ridge', 'Centennial', 'Deer Flat', 'Karcher', 'Caldwell Boulevard'] },
  { slug: 'caldwell', name: 'Caldwell', neighborhoods: ['Downtown Caldwell', 'Ustick', 'Cleveland Boulevard', 'Middleton Road', 'Karcher', 'Purple Sage'] },
  { slug: 'eagle', name: 'Eagle', neighborhoods: ['Downtown Eagle', 'Eagle Hills', 'Hidden Springs', 'Avimor', 'Eagle Island', 'Floating Feather', 'Banbury'] },
  { slug: 'garden-city', name: 'Garden City', neighborhoods: ['Downtown Garden City', 'Chinden Boulevard', 'Glenwood Street', '36th Street', 'Adams Street'] },
  { slug: 'kuna', name: 'Kuna', neighborhoods: ['Downtown Kuna', 'Indian Creek', 'Crimson Point', 'Deer Flat', 'Initial Point'] },
  { slug: 'middleton', name: 'Middleton', neighborhoods: ['Downtown Middleton', 'Purple Sage', 'Middleton Road', 'Cemetery Road'] },
  { slug: 'star', name: 'Star', neighborhoods: ['Downtown Star', 'Star Road', 'Floating Feather', 'Can-Ada Road', 'Beacon Light'] }
];

const services = [
  { slug: 'local-moving', name: 'Local Moving', description: 'Same-day local moves in the Treasure Valley' },
  { slug: 'apartment-moving', name: 'Apartment Moving', description: 'Apartment and condo moving services' },
  { slug: 'residential-moving', name: 'Residential Moving', description: 'Full-service home moving' },
  { slug: 'loading-help', name: 'Loading Help', description: 'Professional loading and unloading' },
  { slug: 'packing-services', name: 'Packing Services', description: 'Expert packing and unpacking' },
  { slug: 'furniture-moving', name: 'Furniture Moving', description: 'Heavy furniture and piano moving' }
];

// Generate main city page
function generateCityPage(city) {
  const serviceLinks = services.map(s =>
    `  { name: '${s.name}', href: '/cities-served/${city.slug}/${s.slug}', description: '${s.description}' },`
  ).join('\n');

  const neighborhoodList = city.neighborhoods.map(n => `'${n}'`).join(', ');

  return `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Movers ${city.name} Idaho | Boise Movers',
  description: 'Professional movers in ${city.name}, Idaho. Local and long-distance moves, packing, loading help. Licensed & insured. Call (208) 505-9352.',
  keywords: ['movers ${city.name}', 'moving company ${city.name} Idaho', 'local movers ${city.name}', 'moving services ${city.name}'],
  alternates: {
    canonical: 'https://boise-movers.com/cities-served/${city.slug}',
  },
}

const neighborhoods = [${neighborhoodList}]

const services = [
${serviceLinks}
]

export default function ${city.name.replace(/[- ]/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/${city.slug}-movers.webp"
          alt="Movers in ${city.name}, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Movers in ${city.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional moving services for ${city.name} homes and businesses. Fast, careful, and affordable.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">${city.name} Moving Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Moving in ${city.name}? We've got you covered. Whether you're heading across town or across the state, our team handles your stuff like it's our own.</p>
              <p>We've moved hundreds of ${city.name} families. Apartments, houses, offices - we know the area and we know how to get you settled fast without the stress.</p>
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

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why ${city.name} Residents Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Local Knowledge:</strong> We know ${city.name} streets, buildings, and neighborhoods.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Response:</strong> Same-day and next-day moves often available.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Careful Handling:</strong> Your furniture arrives in the same condition it left.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fair Pricing:</strong> Upfront quotes with no hidden fees or surprises.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Movers in ${city.name}?</h3>
              <p className="text-gray-300 mb-6">Call us for a free moving estimate.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Also Serving Nearby Cities</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/boise" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Boise</Link>
            <Link href="/cities-served/meridian" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Meridian</Link>
            <Link href="/cities-served/nampa" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Nampa</Link>
            <Link href="/cities-served/caldwell" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Caldwell</Link>
            <Link href="/cities-served/eagle" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Eagle</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
`;
}

// Generate service subpage for a city
function generateServicePage(city, service) {
  const challenges = {
    'local-moving': ['Last-minute move', 'Tight schedule', 'Multiple stops needed', 'Third-floor walkup', 'No elevator access', 'Long carry distance'],
    'apartment-moving': ['Narrow hallways', 'Elevator reservations', 'Building rules and hours', 'Parking restrictions', 'Stairs only', 'Small doorways'],
    'residential-moving': ['Large home with many rooms', 'Piano or heavy items', 'Delicate antiques', 'Garage full of stuff', 'Storage unit pickup', 'Two-story with stairs'],
    'loading-help': ['Rental truck needs loading', 'POD or container', 'Storage unit transfer', 'Heavy furniture only', 'Just need muscle', 'Quick turnaround needed'],
    'packing-services': ['Not enough time to pack', 'Fragile items', 'Kitchen full of dishes', 'Art and mirrors', 'Full-service needed', 'Just boxes and tape'],
    'furniture-moving': ['Piano moving', 'Gun safe', 'Pool table', 'Heavy armoire', 'Sectional sofa', 'Antique furniture']
  };

  const challengeList = challenges[service.slug] || challenges['local-moving'];

  return `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: '${service.name} ${city.name} ID | Boise Movers',
  description: 'Professional ${service.name.toLowerCase()} in ${city.name}, Idaho. Fast, careful service at fair prices. Licensed & insured. Call (208) 505-9352.',
  keywords: ['${service.name.toLowerCase()} ${city.name}', 'movers ${city.name} Idaho', 'moving services ${city.name}'],
  alternates: {
    canonical: 'https://boise-movers.com/cities-served/${city.slug}/${service.slug}',
  },
}

const commonChallenges = ${JSON.stringify(challengeList)}

export default function ${city.name.replace(/[- ]/g, '')}${service.name.replace(/[- ]/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/${service.slug}.webp"
          alt="${service.name} in ${city.name}, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Same-Day Service Available</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">${service.name} in ${city.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">${service.description} for ${city.name} residents. Professional, reliable, stress-free.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">${service.name} Services in ${city.name}</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Need ${service.name.toLowerCase()} in ${city.name}? We make moving simple. You've got enough to worry about - let us handle the heavy lifting.</p>
              <p>Our crew has helped hundreds of ${city.name} families with ${service.name.toLowerCase()}. We show up on time, work efficiently, and treat your belongings with care.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Common Challenges We Handle</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {commonChallenges.map((challenge) => (
                <div key={challenge} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{challenge}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why ${city.name} Residents Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast ${city.name} Service:</strong> We respond quickly to moving requests in ${city.name}.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start. No surprises.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-Day Service:</strong> Often available for urgent moves.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Professional, trustworthy service you can count on.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need ${service.name} in ${city.name}?</h3>
              <p className="text-gray-300 mb-6">Call now for a free moving estimate.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Other Services in ${city.name}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/${city.slug}" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">All ${city.name} Services</Link>
            <Link href="/cities-served/${city.slug}/local-moving" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Local Moving</Link>
            <Link href="/cities-served/${city.slug}/packing-services" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Packing</Link>
            <Link href="/cities-served/${city.slug}/loading-help" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Loading Help</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
`;
}

// Main execution
console.log('Generating movers city pages...');

cities.forEach(city => {
  const cityPath = path.join(BASE_PATH, city.slug);

  // Ensure city directory exists
  if (!fs.existsSync(cityPath)) {
    fs.mkdirSync(cityPath, { recursive: true });
  }

  // Write main city page
  const cityPageContent = generateCityPage(city);
  fs.writeFileSync(path.join(cityPath, 'page.tsx'), cityPageContent);
  console.log(`Created ${city.slug}/page.tsx`);

  // Create service subfolders and pages
  services.forEach(service => {
    const servicePath = path.join(cityPath, service.slug);
    if (!fs.existsSync(servicePath)) {
      fs.mkdirSync(servicePath, { recursive: true });
    }
    const servicePageContent = generateServicePage(city, service);
    fs.writeFileSync(path.join(servicePath, 'page.tsx'), servicePageContent);
    console.log(`Created ${city.slug}/${service.slug}/page.tsx`);
  });
});

console.log('Done! Generated all movers city pages.');
