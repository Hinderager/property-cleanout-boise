import { Heart, Shield, Clock, Leaf, Users, Lock, Award, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Compassionate Approach',
    description: 'We understand hoarding is a mental health condition, not a choice. Our team is trained to work with clients experiencing hoarding disorder with dignity, respect, and zero judgment.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your protection. $1M liability coverage. We handle hazardous materials, biohazards, and heavy debris safely and legally.',
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Emergency situations can\'t wait. We offer same-day response and flexible scheduling to work around your needs throughout the Treasure Valley.',
  },
  {
    icon: Lock,
    title: 'Discreet Service',
    description: 'We use unmarked vehicles and maintain complete confidentiality. No signage, no judgment from neighbors. Your privacy is protected.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Disposal',
    description: 'We partner with local donation centers and recycling facilities. We divert over 60% of items from landfills through responsible disposal practices.',
  },
  {
    icon: Users,
    title: 'Local Family Business',
    description: 'Family-owned and operated, serving the Boise area since 2022. We\'re your neighbors, and we treat your home like we\'d treat our own family\'s.',
  },
]

const credentials = [
  'Background-checked employees',
  'OSHA safety trained',
  'Biohazard cleanup certified',
  'BBB Accredited',
  'Fully bonded',
  '5-star Google rating',
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-4">
            Why Choose Our Hoarding Cleanup Services?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We specialize in compassionate hoarding cleanup throughout Boise, Meridian, Nampa, Caldwell, and Eagle. Here&apos;s what sets us apart from other cleanup services.
          </p>
        </div>

        {/* Credentials Bar */}
        <div className="bg-dark-blue rounded-xl p-6 mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-brand-yellow" />
            <h3 className="text-white font-bold text-lg">Our Credentials</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {credentials.map((credential) => (
              <div key={credential} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-brand-yellow" />
                <span className="text-white text-sm">{credential}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-fog rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-light-blue/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-light-blue" />
              </div>
              <h3 className="text-xl font-bold text-gunmetal mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            We&apos;ve helped hundreds of families in the Treasure Valley reclaim their homes from hoarding.
            Our approach combines professional cleanup expertise with genuine compassion for the people we serve.
            Every situation is unique, and we tailor our services to meet your specific needs.
          </p>
        </div>
      </div>
    </section>
  )
}
