import Image from 'next/image'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Foreclosure Cleanouts',
    description: 'We specialize in clearing bank-owned and REO properties quickly and thoroughly. From abandoned furniture to personal belongings, we remove everything so the property is ready for sale. We work with banks, asset managers, and real estate agents on tight timelines.',
    image: 'https://topshelfpros.com/images/cleanouts/Asset-4-50-1.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
  {
    title: 'Rental Property Turnovers',
    description: 'Get your rental property ready for the next tenant fast. We clear out abandoned belongings, furniture, appliances, and debris left behind. Our team works efficiently to minimize vacancy time and maximize your return on investment.',
    image: 'https://topshelfpros.com/images/cleanouts/Asset-5-50-1.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
  {
    title: 'Eviction Cleanouts',
    description: 'When tenants leave suddenly or are evicted, they often leave behind significant belongings. We handle the entire cleanout process—documenting items as required, storing valuables per legal requirements, and clearing the property for your next tenant.',
    image: 'https://topshelfpros.com/images/moving/residential-moves/Asset-73@4x-1.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
  {
    title: 'Estate & Hoarding Cleanouts',
    description: 'We handle sensitive situations with care and respect. Whether you\'re clearing an inherited property or helping a family member with a hoarding situation, we work at your pace, sort valuables, and ensure nothing important is discarded without approval.',
    image: 'https://topshelfpros.com/images/demolition/Asset%2074@4x.png',
    link: 'tel:2083611982',
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
            From Boise to the scenic stretches of the Treasure Valley, we provide fast, professional property cleanout services!
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
            <a href="tel:2083611982">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 361-1982</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
