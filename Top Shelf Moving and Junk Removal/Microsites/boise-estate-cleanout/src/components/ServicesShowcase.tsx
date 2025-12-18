import Image from 'next/image'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Full Estate Cleanouts',
    description: 'We handle complete estate cleanouts from start to finish. Furniture, appliances, personal items, clothing, garage contents—everything is removed. We sort through belongings carefully, set aside valuables and sentimental items, and ensure nothing important is discarded. Our team works efficiently while remaining respectful of your family\'s memories.',
    image: '/generated/whole-house-cleanout.webp',
    link: 'tel:2085059352',
    buttonText: 'Call Now',
  },
  {
    title: 'Probate Property Services',
    description: 'Settling an estate involves many moving parts. We work directly with attorneys, executors, and family members to clear probate properties on your timeline. We understand the legal requirements and documentation needs, and can provide receipts for donated items to support estate valuations.',
    image: '/generated/garage-cleanout.webp',
    link: 'tel:2085059352',
    buttonText: 'Call Now',
  },
  {
    title: 'Donation & Recycling',
    description: 'Your loved one\'s belongings deserve a second life. We sort and organize usable items for donation to local charities, shelters, and thrift stores. Electronics, metals, and recyclables are properly recycled. Only true waste goes to the landfill—typically less than 30% of what we collect.',
    image: '/generated/donation-sorting.webp',
    link: 'tel:2085059352',
    buttonText: 'Call Now',
  },
  {
    title: 'Property Preparation',
    description: 'Getting a property ready for sale or new tenants? We clear out the entire space and can coordinate with cleaning services to get it market-ready. Whether you\'re selling, renting, or preparing for renovation, we\'ll leave the property empty and clean so you can move forward with your plans.',
    image: '/generated/basement-cleanout.webp',
    link: 'tel:2085059352',
    buttonText: 'Call Now',
  },
]

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-blue mb-4 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
            Serving Boise and Surrounding Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From Boise to the scenic stretches of the Treasure Valley, we provide compassionate estate cleanout and property clearing services!
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Title - Mobile/Tablet only */}
              <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] lg:hidden w-full">
                {service.title}
              </h3>

              {/* Image - Second on mobile, alternates on desktop */}
              <div className={`relative w-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              </div>

              {/* Text Content - Alternates on desktop */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                {/* Title - Desktop only */}
                <h3 className="hidden lg:block text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-block bg-[#FFC845] hover:bg-[#e5b13d] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide"
                >
                  {service.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-16">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2085059352">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 505-9352</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
