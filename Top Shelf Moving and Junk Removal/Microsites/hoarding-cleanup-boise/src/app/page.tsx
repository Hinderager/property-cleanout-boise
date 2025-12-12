import { HeroSection } from '@/components/HeroSection'
import { SchedulingForm } from '@/components/SchedulingForm'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { ServiceProcess } from '@/components/ServiceProcess'
import { ServiceAreas } from '@/components/ServiceAreas'
import { FAQ } from '@/components/FAQ'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SchedulingForm />
      <WhyChooseUs />
      <ServiceProcess />
      <ServiceAreas />
      <FAQ />
    </main>
  )
}
