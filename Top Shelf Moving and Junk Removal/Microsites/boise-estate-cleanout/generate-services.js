const fs = require('fs');
const path = require('path');

const serviceCategories = [
  {
    slug: 'estate-cleanout',
    name: 'Estate Cleanout Services',
    description: 'Complete estate cleanout services for homes, apartments, and properties throughout the Treasure Valley.',
    intro: 'When someone passes away or moves to assisted living, clearing out their home is one of the hardest tasks families face. We handle estate cleanouts with compassion and professionalism, treating your loved one\'s belongings with respect while making the process as stress-free as possible.',
    subservices: [
      { slug: 'full-estate-cleanout', name: 'Full Estate Cleanout', description: 'Complete property clearing from top to bottom' },
      { slug: 'partial-estate-cleanout', name: 'Partial Estate Cleanout', description: 'Selective cleanout of specific areas or rooms' },
      { slug: 'rush-estate-services', name: 'Rush Estate Services', description: 'Expedited service when time is critical' }
    ]
  },
  {
    slug: 'probate-services',
    name: 'Probate Services',
    description: 'Fast, efficient cleanouts for probate properties with legal deadlines.',
    intro: 'Probate properties often have tight timelines. Whether you\'re an executor managing an estate or working with an attorney to close out probate, we provide fast, thorough cleanouts that meet legal deadlines without compromising quality.',
    subservices: [
      { slug: 'executor-assistance', name: 'Executor Assistance', description: 'Help for executors managing estate cleanouts' },
      { slug: 'probate-property-clearing', name: 'Probate Property Clearing', description: 'Fast clearing to meet legal deadlines' },
      { slug: 'legal-coordination', name: 'Legal Coordination', description: 'Work with attorneys and courts' }
    ]
  },
  {
    slug: 'senior-services',
    name: 'Senior Services',
    description: 'Compassionate downsizing and moving help for seniors and their families.',
    intro: 'Downsizing after decades in a home can be overwhelming. We help seniors and their families make the transition to smaller homes or assisted living with patience, respect, and care. This isn\'t just about moving stuff—it\'s about honoring a lifetime of memories.',
    subservices: [
      { slug: 'downsizing-help', name: 'Downsizing Help', description: 'Assistance reducing belongings for a move' },
      { slug: 'senior-moving', name: 'Senior Moving', description: 'Gentle moving services for older adults' },
      { slug: 'assisted-living-transitions', name: 'Assisted Living Transitions', description: 'Help moving to assisted living or memory care' }
    ]
  },
  {
    slug: 'property-cleanout',
    name: 'Property Cleanout Services',
    description: 'Complete property clearing for inherited properties, rentals, and foreclosures.',
    intro: 'Not all property cleanouts are estate-related. Whether you\'ve inherited a property, need to turn over a rental, or manage a foreclosure, we handle complete property clearing quickly and professionally.',
    subservices: [
      { slug: 'inherited-property', name: 'Inherited Property Cleanout', description: 'Clear out properties you\'ve inherited' },
      { slug: 'rental-turnover', name: 'Rental Property Turnover', description: 'Fast cleanouts between tenants' },
      { slug: 'foreclosure-cleanouts', name: 'Foreclosure Cleanouts', description: 'Property clearing for banks and investors' }
    ]
  }
];

function generateCategoryPage(category) {
  return `import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '${category.name} | Boise Estate Cleanout',
  description: '${category.description} Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/services/${category.slug}' },
}

export default function ${category.name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">${category.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">${category.description}</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>${category.intro}</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-8">Our ${category.name}</h2>

            <div className="grid md:grid-cols-${category.subservices.length === 3 ? '3' : '2'} gap-6 mb-12">
              ${category.subservices.map(service => `<Link
                href="/services/${category.slug}/${service.slug}"
                className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-[#FFC845]"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark-blue group-hover:text-[#0b7fb6]">${service.name}</h3>
                  <ArrowRight className="w-5 h-5 text-dark-blue group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-600">${service.description}</p>
              </Link>`).join('\n              ')}
            </div>

            <div className="bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Get Started Today</h2>
              <p className="text-gray-300 mb-6">Call us for a free quote and compassionate guidance through this process.</p>
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

function generateSubservicePage(category, service) {
  return `import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, Clock, Shield, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: '${service.name} | ${category.name} | Boise',
  description: '${service.description}. Professional, compassionate service in the Treasure Valley. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/services/${category.slug}/${service.slug}' },
}

export default function ${service.name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">${service.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">${service.description} throughout the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Top Shelf Estate Cleanout provides ${service.name.toLowerCase()} services with compassion, professionalism, and respect. We understand this is more than just clearing out a space—it's about handling memories, making tough decisions, and moving forward during a difficult time.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Heart className="w-10 h-10 text-[#FFC845] mx-auto mb-3" />
                <h3 className="font-bold text-dark-blue mb-2">Compassionate</h3>
                <p className="text-gray-600 text-sm">We treat your family and belongings with respect</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Clock className="w-10 h-10 text-[#FFC845] mx-auto mb-3" />
                <h3 className="font-bold text-dark-blue mb-2">Fast Service</h3>
                <p className="text-gray-600 text-sm">Same-day and next-day service available</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Shield className="w-10 h-10 text-[#FFC845] mx-auto mb-3" />
                <h3 className="font-bold text-dark-blue mb-2">Fully Insured</h3>
                <p className="text-gray-600 text-sm">Licensed and insured for your protection</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-dark-blue mb-6">What's Included</h2>
            <ul className="space-y-3 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Complete sorting and organizing of all belongings</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Identification of valuable items you may want to keep or sell</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Donation of usable items to local charities</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Proper disposal and recycling of remaining items</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Final cleanup leaving property broom-clean</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Documentation for tax purposes when applicable</span>
              </li>
            </ul>

            <div className="bg-dark-blue p-8 rounded-xl text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6">Call us for a free quote. We'll make this process as easy as possible.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>

            <div className="text-center">
              <Link href="/services/${category.slug}" className="text-dark-blue underline hover:text-[#0b7fb6]">
                ← Back to ${category.name}
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

function generateAllServicePages() {
  const basePath = path.join(__dirname, 'src', 'app', 'services');
  let totalPages = 0;

  serviceCategories.forEach(category => {
    const categoryPath = path.join(basePath, category.slug);

    // Create category directory
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath, { recursive: true });
    }

    // Create main category page
    const categoryPagePath = path.join(categoryPath, 'page.tsx');
    fs.writeFileSync(categoryPagePath, generateCategoryPage(category));
    console.log(`✓ Created services/${category.slug}/page.tsx`);
    totalPages++;

    // Create subservice pages
    category.subservices.forEach(service => {
      const servicePath = path.join(categoryPath, service.slug);

      // Create service directory
      if (!fs.existsSync(servicePath)) {
        fs.mkdirSync(servicePath, { recursive: true });
      }

      // Create service page
      const servicePagePath = path.join(servicePath, 'page.tsx');
      fs.writeFileSync(servicePagePath, generateSubservicePage(category, service));
      console.log(`✓ Created services/${category.slug}/${service.slug}/page.tsx`);
      totalPages++;
    });
  });

  console.log(`\n✅ Successfully created ${totalPages} service pages!`);
  console.log(`   - ${serviceCategories.length} main category pages`);
  console.log(`   - ${serviceCategories.reduce((sum, cat) => sum + cat.subservices.length, 0)} subservice pages`);
}

generateAllServicePages();
