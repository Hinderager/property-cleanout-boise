import { Button } from '@/components/ui/button'
import { Phone, ShieldCheck, Heart, Clock, CheckCircle } from 'lucide-react'

type HeroSectionProps = {
  city?: string
  headline?: string
  subheadline?: string
}

export function HeroSection({
  city = 'Boise',
  headline,
  subheadline
}: HeroSectionProps) {
  const defaultHeadline = city === 'Boise'
    ? 'Hoarding Cleanup Services in Boise & Treasure Valley'
    : `Hoarding Cleanup Services in ${city}, Idaho`

  const defaultSubheadline = 'Compassionate, Professional Hoarder Cleanout Services'

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-dark-blue via-[#0d3a5c] to-gunmetal flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat bg-[length:100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm">
              <ShieldCheck className="w-5 h-5 text-brand-yellow" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm">
              <Heart className="w-5 h-5 text-cta-rose" />
              <span>Compassionate Service</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm">
              <Clock className="w-5 h-5 text-light-blue" />
              <span>Same-Day Available</span>
            </div>
          </div>

          {/* Main Headline - H1 for SEO */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {headline || defaultHeadline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {subheadline || defaultSubheadline}
          </p>

          {/* Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-white">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Free Estimates</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Discreet Service</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No Judgment</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" className="text-lg">
              <a href="#schedule-form">
                Schedule Free Estimate
              </a>
            </Button>
            <Button asChild variant="outline" size="xl" className="text-lg">
              <a href="tel:2083611982" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                (208) 361-1982
              </a>
            </Button>
          </div>

          {/* Phone CTA */}
          <p className="mt-6 text-gray-300">
            Call now for immediate assistance or scroll down to schedule online
          </p>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
