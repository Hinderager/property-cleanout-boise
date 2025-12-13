import Image from 'next/image'
import { Button } from '@/components/ui/button'

const services = [
  { title: 'Furniture Removal', description: 'Old couches, mattresses, bed frames, tables, chairs, dressers—we haul it all away. Whether you\'re upgrading, downsizing, or just clearing out, we make furniture removal easy. We\'ll even take items from any room in your house, no matter how tight the space.', image: 'https://topshelfpros.com/images/junk-removal/household-junk-removal/Asset-5-50-1.webp', link: 'tel:2083611982', buttonText: 'Call Now' },
  { title: 'Appliance Removal', description: 'Refrigerators, washing machines, dryers, dishwashers, ovens, and more. We handle the heavy lifting and ensure proper disposal. Many appliances contain materials that require special handling—we take care of everything responsibly.', image: 'https://topshelfpros.com/images/cleanouts/Asset-4-50-1.webp', link: 'tel:2083611982', buttonText: 'Call Now' },
  { title: 'Yard Waste Removal', description: 'Tree branches, leaves, dirt, sod, bushes, landscaping debris—we\'ll clear it all out. Perfect for post-storm cleanup, landscaping projects, or general yard maintenance. We haul it away so you don\'t have to make multiple dump runs.', image: 'https://topshelfpros.com/images/moving/residential-moves/Asset-73@4x-1.webp', link: 'tel:2083611982', buttonText: 'Call Now' },
  { title: 'Construction Debris', description: 'Drywall, lumber, flooring, tiles, concrete, and renovation waste. We keep your job site clean so you can focus on the work. Whether you\'re a homeowner doing DIY or a contractor managing multiple sites, we\'ve got you covered.', image: 'https://topshelfpros.com/images/demolition/Asset%2074@4x.png', link: 'tel:2083611982', buttonText: 'Call Now' },
]

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-blue mb-4 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>Serving Boise and Surrounding Areas</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">From Boise to the scenic stretches of the Treasure Valley, we provide fast, affordable junk removal services!</p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] lg:hidden w-full">{service.title}</h3>
              <div className={`relative w-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/3]">
                  <Image src={service.image} alt={service.title} fill loading={index === 0 ? "eager" : "lazy"} className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" quality={85} />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <h3 className="hidden lg:block text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">{service.description}</p>
                <a href={service.link} className="inline-block bg-[#FFC845] hover:bg-[#e5b13d] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide">{service.buttonText}</a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 justify-center mt-16">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2083611982"><span className="md:hidden">Call Now</span><span className="hidden md:inline">(208) 361-1982</span></a>
          </Button>
        </div>
      </div>
    </section>
  )
}
