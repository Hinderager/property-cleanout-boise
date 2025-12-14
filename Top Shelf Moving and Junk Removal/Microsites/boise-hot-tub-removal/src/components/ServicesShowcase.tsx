import Image from 'next/image'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Hot Tub Removal',
    description: 'Got an old hot tub sitting in your backyard collecting dust? We handle all types—acrylic spas, wooden hot tubs, inflatable spas, and more. We safely disconnect electrical and plumbing connections, then carefully remove the unit from your property. Whether it\'s accessible or tucked away in a tight spot, we\'ll get it out.',
    image: '/generated/hot-tub-disconnect.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
  {
    title: 'Hot Tub Demolition',
    description: 'Some hot tubs are too big or too heavy to remove in one piece. No problem. We break them down right there in your yard using professional tools. We cut the shell into manageable sections, remove all the components, and haul everything away. When we\'re done, you won\'t even know a hot tub was there.',
    image: '/generated/hot-tub-cutting.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
  {
    title: 'Deck & Platform Removal',
    description: 'Many hot tubs sit on custom decks or concrete pads. If you want it all gone, we can remove the deck, platform, or enclosure too. We handle the full project so you don\'t have to coordinate multiple contractors. One crew, one call, done.',
    image: '/generated/deck-repair.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
  {
    title: 'Eco-Friendly Disposal',
    description: 'Hot tubs contain recyclable materials—plastics, metals, wiring, and more. We sort and recycle what we can instead of dumping everything at the landfill. It\'s better for the environment and helps keep costs down. We\'ll dispose of your old spa responsibly.',
    image: '/generated/spa-removal.webp',
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
            From Boise to the scenic stretches of the Treasure Valley, we help homeowners get rid of old hot tubs and spas quickly and affordably!
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
