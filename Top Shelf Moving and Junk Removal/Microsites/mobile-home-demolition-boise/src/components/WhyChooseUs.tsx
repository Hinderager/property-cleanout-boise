import { Home, Shield, Clock, Leaf, Users, Award, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Home,
    title: 'Mobile Home Specialists',
    description: 'We focus on mobile home demolition. Single wides, double wides, manufactured homes - we know how to safely take them down and haul them away. This is what we do.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed with $1M liability coverage. We handle permits, coordinate utilities, and follow all local regulations. Everything is done right.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Most mobile home demos are done in 1-3 days. We work efficiently and get the job done quickly so you can move on to the next phase of your project.',
  },
  {
    icon: Award,
    title: 'Professional Crew',
    description: 'Our crew is experienced, background-checked, and OSHA trained. They show up on time, work hard, and clean up when they\'re done.',
  },
  {
    icon: Leaf,
    title: 'Responsible Disposal',
    description: 'We recycle metal, donate usable materials, and dispose of debris properly. Over 60% of what we remove stays out of the landfill.',
  },
  {
    icon: Users,
    title: 'Local & Family-Owned',
    description: 'We\'re based right here in Boise. Been serving the Treasure Valley since 2022. We treat every property like it\'s our own.',
  },
]

const credentials = [
  'Background-checked team',
  'OSHA safety trained',
  'Licensed demolition contractor',
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
            Why Work With Us?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We do mobile home demolition in Boise, Meridian, Nampa, Caldwell, and Eagle. Here&apos;s what makes us different.
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
            We&apos;ve helped hundreds of property owners in the Treasure Valley. Every project is different, and we work with you to figure out what makes sense.
          </p>
        </div>
      </div>
    </section>
  )
}
