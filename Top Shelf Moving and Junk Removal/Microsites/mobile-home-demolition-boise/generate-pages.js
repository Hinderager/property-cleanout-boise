const fs = require('fs');
const path = require('path');

// Service structure configuration
const serviceStructure = {
  'mobile-home-demolition': {
    title: 'Mobile Home Demolition',
    services: [
      { slug: 'single-wide', name: 'Single-Wide Demolition', desc: 'Complete demolition and removal of single-wide mobile homes' },
      { slug: 'double-wide', name: 'Double-Wide Demolition', desc: 'Full service demolition for double-wide manufactured homes' },
      { slug: 'triple-wide', name: 'Triple-Wide Demolition', desc: 'Large-scale demolition for triple-wide mobile homes' }
    ]
  },
  'manufactured-home': {
    title: 'Manufactured Home Removal',
    services: [
      { slug: 'hud-homes', name: 'HUD Home Removal', desc: 'Removal of HUD-certified manufactured homes' },
      { slug: 'modular-homes', name: 'Modular Home Demolition', desc: 'Demolition services for modular home structures' }
    ]
  },
  'site-services': {
    title: 'Site Services',
    services: [
      { slug: 'foundation-removal', name: 'Foundation Removal', desc: 'Complete removal of concrete foundations and piers' },
      { slug: 'utility-disconnect', name: 'Utility Disconnection', desc: 'Safe disconnection of water, electric, gas, and septic' },
      { slug: 'site-grading', name: 'Site Grading', desc: 'Final grading and leveling of cleared property' }
    ]
  },
  'additional': {
    title: 'Additional Services',
    services: [
      { slug: 'trailer-removal', name: 'Trailer Removal', desc: 'Removal and disposal of old trailers' },
      { slug: 'rv-removal', name: 'RV Removal', desc: 'Demolition and removal of old RVs and campers' },
      { slug: 'shed-demolition', name: 'Shed Demolition', desc: 'Small structure demolition including sheds and outbuildings' }
    ]
  }
};

// Cities configuration
const cities = [
  { slug: 'boise', name: 'Boise', desc: 'the heart of the Treasure Valley' },
  { slug: 'meridian', name: 'Meridian', desc: 'Idaho\'s fastest-growing city' },
  { slug: 'nampa', name: 'Nampa', desc: 'Canyon County\'s largest city' },
  { slug: 'caldwell', name: 'Caldwell', desc: 'the county seat of Canyon County' },
  { slug: 'eagle', name: 'Eagle', desc: 'known for its scenic beauty' },
  { slug: 'garden-city', name: 'Garden City', desc: 'a vibrant community along the Boise River' },
  { slug: 'kuna', name: 'Kuna', desc: 'a growing community south of Boise' },
  { slug: 'star', name: 'Star', desc: 'a charming small town' },
  { slug: 'middleton', name: 'Middleton', desc: 'a quiet community in Canyon County' },
  { slug: 'mountain-home', name: 'Mountain Home', desc: 'serving the Mountain Home area' }
];

// City services configuration
const cityServices = [
  { slug: 'mobile-home-demolition', name: 'Mobile Home Demolition', desc: 'Complete mobile home demolition and removal' },
  { slug: 'single-wide-removal', name: 'Single-Wide Removal', desc: 'Single-wide mobile home demolition' },
  { slug: 'double-wide-demolition', name: 'Double-Wide Demolition', desc: 'Double-wide mobile home removal' },
  { slug: 'manufactured-home-removal', name: 'Manufactured Home Removal', desc: 'Manufactured and modular home demolition' },
  { slug: 'foundation-removal', name: 'Foundation Removal', desc: 'Concrete foundation and pier removal' },
  { slug: 'site-clearing', name: 'Site Clearing', desc: 'Complete site clearing and grading' },
  { slug: 'trailer-removal', name: 'Trailer Removal', desc: 'Old trailer demolition and disposal' },
  { slug: 'rv-removal', name: 'RV Removal', desc: 'RV and camper removal services' }
];

function createServicePage(category, service) {
  return `import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: '${service.name} Services | Boise Mobile Home Demolition',
  description: '${service.desc}. Licensed, insured professionals serving the Treasure Valley. Call (208) 505-9352 for a free quote.',
  alternates: { canonical: 'https://boise-mobile-home-demolition.com/services/${category}/${service.slug}' },
}

export default function ${service.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">${service.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">${service.desc}</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>We provide professional ${service.name.toLowerCase()} services throughout the Treasure Valley. Our licensed and insured team handles every aspect of the job, from permits to final cleanup.</p>
            <p>Call us today for a free, no-obligation quote.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Get Your Free Quote</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
`;
}

function createCityPage(city) {
  return `import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile Home Demolition in ${city.name} | Boise Mobile Home Demolition',
  description: 'Professional mobile home demolition services in ${city.name}. Licensed, insured, and serving ${city.desc}. Free quotes. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-mobile-home-demolition.com/cities-served/${city.slug}' },
}

const services = ${JSON.stringify(cityServices.map(s => ({ name: s.name, href: `/cities-served/${city.slug}/${s.slug}`, description: s.desc })), null, 2)};

export default function ${city.name.replace(/[- ]/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Mobile Home Demolition in ${city.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Professional demolition services serving ${city.desc}</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We provide complete mobile home demolition services in ${city.name}. Whether you're clearing land for new construction or removing an old mobile home, we handle everything from permits to final cleanup.</p>
            </div>
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Our ${city.name} Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-[#0b7fb6] transition-colors">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-dark-blue font-semibold group-hover:text-[#0b7fb6]">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Serving ${city.name}</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
`;
}

function createCityServicePage(city, service) {
  return `import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: '${service.name} in ${city.name} | Boise Mobile Home Demolition',
  description: '${service.desc} in ${city.name}. Licensed professionals serving ${city.desc}. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-mobile-home-demolition.com/cities-served/${city.slug}/${service.slug}' },
}

export default function ${city.name.replace(/[- ]/g, '')}${service.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">${service.name} in ${city.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">${service.desc}</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>We provide professional ${service.name.toLowerCase()} services in ${city.name}. Our licensed and insured team handles every aspect of your project efficiently and safely.</p>
            <p>Serving homeowners and property owners in ${city.name} and throughout the Treasure Valley.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Call for ${city.name} Service</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
`;
}

// Generate service pages
console.log('Generating service pages...');
let serviceCount = 0;

Object.entries(serviceStructure).forEach(([category, data]) => {
  data.services.forEach(service => {
    const dir = path.join(__dirname, 'src', 'app', 'services', category, service.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'page.tsx'), createServicePage(category, service));
    serviceCount++;
  });
});

console.log(`Created ${serviceCount} service pages`);

// Generate city pages
console.log('Generating city pages...');
let cityPageCount = 0;

cities.forEach(city => {
  // Create city main page
  const cityDir = path.join(__dirname, 'src', 'app', 'cities-served', city.slug);
  fs.mkdirSync(cityDir, { recursive: true });
  fs.writeFileSync(path.join(cityDir, 'page.tsx'), createCityPage(city));
  cityPageCount++;

  // Create city service pages
  cityServices.forEach(service => {
    const serviceDir = path.join(cityDir, service.slug);
    fs.mkdirSync(serviceDir, { recursive: true });
    fs.writeFileSync(path.join(serviceDir, 'page.tsx'), createCityServicePage(city, service));
    cityPageCount++;
  });
});

console.log(`Created ${cityPageCount} city and city-service pages`);
console.log(`Total pages generated: ${serviceCount + cityPageCount}`);
