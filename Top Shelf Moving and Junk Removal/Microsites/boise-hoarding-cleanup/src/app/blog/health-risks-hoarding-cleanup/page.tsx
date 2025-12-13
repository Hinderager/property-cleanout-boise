import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Phone, AlertTriangle, Shield, Bug, Wind, Flame } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Health Risks of Hoarding: Why Professional Cleanup Matters',
  description: 'Hoarding creates serious health hazards including mold, pests, fire risks, and more. Learn about the dangers and why professional cleanup is often necessary.',
  keywords: [
    'hoarding health risks',
    'dangers of hoarding',
    'hoarding hazards',
    'why professional hoarding cleanup',
    'hoarding safety risks',
    'hoarding mold pest',
  ],
  openGraph: {
    title: 'The Health Risks of Hoarding: Why Professional Cleanup Matters',
    description: 'Learn about the serious health hazards created by hoarding and why professional cleanup is often necessary.',
    url: 'https://boise-hoarding-cleanup.com/blog/health-risks-hoarding-cleanup',
  },
  alternates: {
    canonical: 'https://boise-hoarding-cleanup.com/blog/health-risks-hoarding-cleanup',
  },
}

const healthRisks = [
  {
    icon: Wind,
    title: 'Poor Air Quality',
    description: 'Dust, mold spores, and allergens accumulate in hoarded environments. Without proper ventilation, these particles concentrate to dangerous levels.',
    dangers: ['Respiratory infections', 'Asthma attacks', 'Allergic reactions', 'Chronic bronchitis'],
  },
  {
    icon: Bug,
    title: 'Pest Infestations',
    description: 'Cluttered spaces provide ideal habitat for rodents, insects, and other pests. Food debris and hiding places allow populations to explode.',
    dangers: ['Disease transmission', 'Bites and stings', 'Food contamination', 'Property damage'],
  },
  {
    icon: Flame,
    title: 'Fire Hazards',
    description: 'Accumulated items near heat sources, blocked exits, and combustible materials create extreme fire risk. Hoarded homes burn faster and are harder to escape.',
    dangers: ['Rapid fire spread', 'Blocked escape routes', 'Delayed firefighter response', 'Structural collapse'],
  },
  {
    icon: AlertTriangle,
    title: 'Fall & Injury Risks',
    description: 'Narrow pathways, unstable piles, and hidden hazards make falls common. Items can collapse, causing serious injuries.',
    dangers: ['Tripping hazards', 'Falling objects', 'Unstable furniture', 'Hidden sharp objects'],
  },
]

export default function BlogPost() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-dark-blue underline hover:text-light-blue mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-light-blue/10 text-light-blue text-sm font-medium px-3 py-1 rounded-full">
                Health &amp; Safety
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  October 1, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  6 min read
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              The Health Risks of Hoarding: Why Professional Cleanup Matters
            </h1>

            <p className="text-xl text-gray-600">
              Hoarding creates serious health hazards that can affect not just the person living there, but neighbors and first responders too. Understanding these risks highlights why professional cleanup is so important.
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p>
              Hoarding disorder is more than a mental health concern—it creates very real physical dangers. The environments that develop in hoarded homes can cause immediate harm and long-term health consequences that most people don&apos;t fully appreciate until they see the conditions firsthand.
            </p>

            <p>
              Let&apos;s examine the specific health risks and why attempting DIY cleanup of a severely hoarded home can actually make things worse.
            </p>

            <h2>Major Health Hazards in Hoarded Homes</h2>

            <div className="not-prose space-y-6 my-8">
              {healthRisks.map((risk, index) => (
                <div key={index} className="bg-fog rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cta-rose/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <risk.icon className="w-6 h-6 text-cta-rose" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gunmetal mb-2">{risk.title}</h3>
                      <p className="text-gray-600 mb-3">{risk.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {risk.dangers.map((danger, i) => (
                          <span key={i} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                            {danger}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>Additional Hazards</h2>

            <h3>Biological Hazards</h3>
            <p>
              In severe cases, hoarded homes may contain human or animal waste, decomposing food, or even deceased pets. These create serious biohazard conditions requiring specialized cleanup protocols that protect workers and prevent cross-contamination.
            </p>

            <h3>Structural Concerns</h3>
            <p>
              The sheer weight of accumulated items can stress floors, walls, and foundations. We&apos;ve seen sagging floors, bowed walls, and doors that no longer close properly. In extreme cases, structural failure becomes a real risk.
            </p>

            <h3>Mold Growth</h3>
            <p>
              Items blocking airflow and covering walls create perfect conditions for mold, especially in Idaho&apos;s fluctuating humidity. Black mold and other dangerous species can grow hidden behind clutter for years, releasing spores that cause serious respiratory problems.
            </p>

            <h3>Chemical Hazards</h3>
            <p>
              Old cleaning supplies, automotive fluids, expired medications, and other hazardous materials often accumulate in hoarded homes. These can leak, mix dangerously, or create toxic fumes.
            </p>

            <h2>Why DIY Cleanup Is Risky</h2>

            <p>
              When families discover the extent of a hoarding situation, the natural instinct is often to start cleaning immediately. However, DIY cleanup of severely hoarded homes carries significant risks:
            </p>

            <ul>
              <li><strong>Exposure to hazards:</strong> Without proper PPE and training, you may expose yourself to mold, pests, and pathogens</li>
              <li><strong>Improper disposal:</strong> Hazardous materials require specific disposal methods—putting them in regular trash is illegal and dangerous</li>
              <li><strong>Missing hidden dangers:</strong> Professionals know where to look for mold, structural damage, and other hidden hazards</li>
              <li><strong>Emotional harm:</strong> Forcing cleanup without professional support can traumatize the person with hoarding disorder</li>
              <li><strong>Incomplete remediation:</strong> Cleaning surfaces without addressing root causes (like moisture sources for mold) means problems return</li>
            </ul>

            <h2>What Professional Cleanup Provides</h2>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Professional Standards
              </h3>
              <ul className="space-y-2 text-green-900">
                <li>Personal protective equipment (PPE) for all workers</li>
                <li>Training in biohazard handling and disposal</li>
                <li>Proper containment to prevent cross-contamination</li>
                <li>Licensed disposal of hazardous materials</li>
                <li>Inspection for hidden mold and structural issues</li>
                <li>Deep cleaning and sanitization after item removal</li>
                <li>Documentation for insurance or legal purposes</li>
              </ul>
            </div>

            <h2>When Emergency Cleanup Is Needed</h2>

            <p>
              Some situations require immediate professional intervention:
            </p>

            <ul>
              <li>No running water or working toilet</li>
              <li>Evidence of human or animal waste</li>
              <li>Active pest infestations</li>
              <li>Visible mold growth</li>
              <li>Structural damage (sagging floors, water damage)</li>
              <li>Health code violations or eviction notices</li>
              <li>The resident has been hospitalized</li>
            </ul>

            <p>
              If you encounter any of these situations, don&apos;t attempt cleanup yourself. Contact professional hoarding cleanup services immediately.
            </p>

            <h2>Protecting Everyone&apos;s Health</h2>

            <p>
              Professional hoarding cleanup isn&apos;t just about making a space look better—it&apos;s about eliminating genuine health hazards and creating a safe, livable environment. The investment in professional help protects the person with hoarding disorder, their family members, neighbors, and future occupants of the home.
            </p>
          </article>

          {/* CTA */}
          <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Concerned About Health Hazards?
            </h3>
            <p className="text-gray-300 mb-6">
              Our trained team handles hazardous hoarding situations safely. Free assessments available.
            </p>
            <a
              href="tel:2083611982"
              className="inline-flex items-center gap-2 bg-brand-yellow text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              (208) 361-1982
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
