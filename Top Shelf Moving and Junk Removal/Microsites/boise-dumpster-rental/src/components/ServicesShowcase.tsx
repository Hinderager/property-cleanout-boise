import Image from 'next/image'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Residential Dumpster Rental',
    description: 'Cleaning out the garage, remodeling a bathroom, or tackling a big home project? Our residential dumpsters make it easy. We drop it off, you fill it up, and we haul it away. No hassle, no mess in your yard. Most customers keep the dumpster for 7-10 days, but we can work with your timeline.',
    image: '/generated/residential-dumpster.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
  {
    title: 'Construction Dumpsters',
    description: 'Contractors and builders rely on us for reliable roll-off service. Whether it\'s a kitchen remodel, new construction, or demolition project, we have the right size dumpster. We understand construction schedules—that\'s why we offer flexible rental periods and quick swaps when you fill one up.',
    image: '/generated/construction-dumpster.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
  {
    title: 'Roofing Dumpsters',
    description: 'Roofing debris is heavy and awkward to handle. Our dumpsters can handle the weight of shingles, underlayment, and other roofing materials. We work with roofing crews all over Boise—same-day delivery means your project stays on schedule. Clean driveway when we leave, guaranteed.',
    image: '/generated/roofing-dumpster.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
  {
    title: 'Estate & Cleanout Projects',
    description: 'Dealing with an estate cleanout or major decluttering project? A dumpster makes the job so much easier. Just toss everything in and we take care of the rest. We can provide multiple sizes depending on how much stuff needs to go. One call and the container shows up at your door.',
    image: '/generated/cleanout-dumpster.webp',
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
            From Boise to the scenic stretches of the Treasure Valley, we deliver affordable roll-off dumpsters for any project!
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
