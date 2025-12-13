'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, Clock, Shield, Award, Zap, ChevronDown, Plus, Mail, Star } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    title: 'Hoarding Cleanup',
    description: 'Full-service hoarding cleanup for homes of any size. We sort, remove, and dispose of items while treating your belongings with respect. No judgment, just help.',
    image: 'https://topshelfpros.com/_next/image?url=%2Fimages%2Fcleanouts%2FAsset-4-50-1.webp&w=640&q=75',
    href: '/boise',
  },
  {
    title: 'Estate Cleanouts',
    description: 'Dealing with a loved one\'s estate is hard enough. We handle the heavy lifting—sorting valuables from trash, donating usable items, and clearing the property completely.',
    image: 'https://topshelfpros.com/_next/image?url=%2Fimages%2Fcleanouts%2FAsset-5-50-1.webp&w=640&q=75',
    href: '/boise',
  },
  {
    title: 'Deep Cleaning',
    description: 'After the stuff is gone, we deep clean the space. Floors, walls, surfaces—everything. We deal with odors too. The goal is making it livable again.',
    image: 'https://topshelfpros.com/_next/image?url=%2Fimages%2Fmoving%2Fresidential-moves%2FAsset-73%404x-1.webp&w=640&q=75',
    href: '/boise',
  },
  {
    title: 'Emergency Services',
    description: 'Code violations, eviction deadlines, or urgent situations—we can mobilize fast. Same-day service available for emergencies throughout the Treasure Valley.',
    image: 'https://topshelfpros.com/_next/image?url=%2Fimages%2Fdemolition%2FAsset%2074%404x.png&w=640&q=75',
    href: '/boise',
  },
]

const itemCategories = [
  {
    name: 'GENERAL ITEMS',
    items: ['Boxes & containers', 'Newspapers & magazines', 'Old mail & documents', 'Books & publications', 'Collectibles', 'Decorations', 'Toys & games', 'Craft supplies'],
  },
  {
    name: 'FURNITURE',
    items: ['Sofas & couches', 'Mattresses & box springs', 'Tables & chairs', 'Dressers & wardrobes', 'Bookshelves', 'Desks', 'Recliners', 'Bed frames'],
  },
  {
    name: 'CLOTHING & TEXTILES',
    items: ['Clothing', 'Shoes', 'Linens & bedding', 'Towels', 'Curtains & drapes', 'Rugs & carpets', 'Fabric & sewing materials'],
  },
  {
    name: 'APPLIANCES',
    items: ['Refrigerators', 'Washers & dryers', 'Microwaves', 'Space heaters', 'Fans', 'Vacuum cleaners', 'Small kitchen appliances'],
  },
  {
    name: 'ELECTRONICS',
    items: ['TVs & monitors', 'Computers & laptops', 'Printers', 'Stereos', 'VCRs & DVD players', 'Old phones', 'Cables & cords'],
  },
  {
    name: 'HAZARDOUS (SPECIAL HANDLING)',
    items: ['Cleaning chemicals', 'Paint & solvents', 'Batteries', 'Expired medications', 'Pest-contaminated items', 'Mold-affected materials'],
  },
]

const faqs = [
  {
    question: 'How long does a hoarding cleanup take?',
    answer: 'It depends on the size and condition of the home. Small apartments might take a day or two. Larger homes with severe hoarding can take a week or more. We\'ll give you a realistic timeline after we see the property.',
  },
  {
    question: 'Will you throw away my stuff without asking?',
    answer: 'No. We work with you (or your designated family member) to sort items into keep, donate, and discard piles. Important items like photos, documents, and valuables are always set aside. Nothing goes without permission.',
  },
  {
    question: 'Do you work with people who have hoarding disorder?',
    answer: 'Yes. We understand hoarding is a mental health condition, not a character flaw. Our team is trained to be patient, non-judgmental, and respectful. We go at a pace that works for the individual.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve the entire Treasure Valley including Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, Garden City, and surrounding areas.',
  },
  {
    question: 'How much does hoarding cleanup cost?',
    answer: 'Every situation is different. Factors include home size, amount of items, condition, and whether biohazard cleanup is needed. We provide free on-site estimates. Most residential jobs range from $500 to $5,000+.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer payment plans for larger jobs. We want to make sure cost isn\'t a barrier to getting help. Let\'s talk about what works for your situation.',
  },
  {
    question: 'Is your service confidential?',
    answer: 'Absolutely. We use unmarked vehicles, maintain strict confidentiality, and never discuss our clients\' situations. Your privacy matters.',
  },
]

export default function Home() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    details: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission will be connected later
    console.log('Form submitted:', formData)
    alert('Thanks! We\'ll be in touch soon.')
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[580px] md:h-[800px] lg:h-[900px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://topshelfpros.com/images/best-of-all/hero-desktop.webp"
            alt="Professional hoarding cleanup service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="bg-black/70 border-[6px] border-dark-blue p-6 md:p-10 lg:p-12 max-w-2xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading tracking-tight">
              Hoarding Cleanup Pros
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-2">
              Boise | Meridian | Nampa | Eagle
            </p>
            <p className="text-lg md:text-xl text-brand-yellow italic mb-8">
              Restoring Homes with Compassion
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5 text-brand-yellow" />
                <span className="text-sm">Locally Owned</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Award className="w-5 h-5 text-brand-yellow" />
                <span className="text-sm">Licensed</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Shield className="w-5 h-5 text-brand-yellow" />
                <span className="text-sm">Insured</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Zap className="w-5 h-5 text-brand-yellow" />
                <span className="text-sm">Same Day Service</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="tel:2083611982"
              className="inline-flex items-center gap-2 bg-brand-yellow text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              <Phone className="w-6 h-6" />
              Call Now (208) 361-1982
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-fog">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-4 font-heading">
                Get a Free Quote
              </h2>
              <p className="text-lg text-gray-600">
                Tell us about your situation. We&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gunmetal mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gunmetal mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue focus:border-transparent"
                    placeholder="(208) 555-1234"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gunmetal mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gunmetal mb-2">
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue focus:border-transparent"
                    placeholder="123 Main St, Boise, ID"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="details" className="block text-sm font-medium text-gunmetal mb-2">
                  Tell us about your situation
                </label>
                <textarea
                  id="details"
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue focus:border-transparent"
                  placeholder="Describe the property size, condition, and any specific concerns..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-yellow text-dark-blue py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                Get My Free Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-4 font-heading">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We handle the whole process—from sorting to hauling to cleaning. Here&apos;s what we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-fog rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 bg-brand-yellow text-dark-blue px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Items We Handle Section */}
      <section className="py-16 bg-fog">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-4 font-heading">
              Items We Handle
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We can remove just about anything from your home. Here&apos;s a sample of what we typically deal with.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {itemCategories.map((category) => (
              <div key={category.name} className="bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenCategory(openCategory === category.name ? null : category.name)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold text-gunmetal hover:bg-gray-50 transition-colors"
                >
                  <span>{category.name}</span>
                  <Plus className={`w-5 h-5 transition-transform ${openCategory === category.name ? 'rotate-45' : ''}`} />
                </button>
                {openCategory === category.name && (
                  <div className="px-4 pb-4">
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="bg-fog px-3 py-1 rounded-full text-sm text-gray-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Badge */}
      <section className="py-8 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-brand-yellow text-brand-yellow" />
              ))}
            </div>
            <p className="text-lg text-gunmetal">
              <span className="font-bold">5.0</span> rating from <span className="font-bold">100+</span> satisfied customers
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Got questions? We&apos;ve got answers. Here are the things people ask us most.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-fog rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold text-gunmetal hover:bg-gray-100 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Find Us Section */}
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-xl overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186193.95472088594!2d-116.35412454843748!3d43.61787039999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aef172e947b49d%3A0x9a2c4e6e4e9d8c8f!2sBoise%2C%20ID!5e0!3m2!1sen!2sus!4v1702500000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service area map"
              />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading">
                Find Us
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg">Phone</p>
                    <a href="tel:2083611982" className="text-white/80 hover:text-white transition-colors">
                      (208) 361-1982
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg">Email</p>
                    <a href="mailto:info@boise-hoarding-cleanup.com" className="text-white/80 hover:text-white transition-colors">
                      info@boise-hoarding-cleanup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg">Hours</p>
                    <p className="text-white/80">Mon - Sat: 8am - 9pm</p>
                    <p className="text-white/80">Sun: 12pm - 9pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg">Service Areas</p>
                    <p className="text-white/80">
                      Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, Garden City, Middleton
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="tel:2083611982"
                  className="inline-flex items-center gap-2 bg-brand-yellow text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  Call Now (208) 361-1982
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
