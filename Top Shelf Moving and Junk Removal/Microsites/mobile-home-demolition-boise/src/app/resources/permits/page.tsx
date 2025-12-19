import { Metadata } from 'next'
import { Phone, FileText, MapPin, CheckCircle, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Demolition Permits | Boise Mobile Home Demolition',
  description: 'Learn about mobile home demolition permits in Boise and the Treasure Valley. Requirements vary by city. We help navigate the permit process.',
  alternates: { canonical: 'https://mobile-home-demolition-boise.com/resources/permits' },
}

export default function PermitsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Demolition Permits</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">What you need to know about permits for mobile home demolition</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Permit requirements for mobile home demolition vary depending on where you're located in the Treasure Valley. Some cities require permits, others don't. Here's what you need to know.</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-[#FFC845] p-6 mb-12">
              <div className="flex gap-3">
                <AlertTriangle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-2">We Handle the Permit Process</h3>
                  <p className="text-gray-600">Don't stress about permits. We'll help you figure out what's required and handle the paperwork if needed. It's part of our service.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-dark-blue mb-6">Do I Need a Permit?</h2>
            <p className="text-gray-600 mb-8">It depends on your location and the specifics of your project. Here's what typically applies across the Treasure Valley.</p>

            <div className="space-y-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-[#FFC845]" />
                  <h3 className="text-xl font-bold text-dark-blue">City of Boise</h3>
                </div>
                <p className="text-gray-600">Typically requires a demolition permit for mobile home removal. The process is straightforward and usually takes about a week. You'll need to show proof of ownership and provide details about the structure.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-[#FFC845]" />
                  <h3 className="text-xl font-bold text-dark-blue">Meridian</h3>
                </div>
                <p className="text-gray-600">Requires permits for most demolition projects. The city wants to ensure utilities are properly disconnected and the work is done safely. Processing time is usually 5-7 business days.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-[#FFC845]" />
                  <h3 className="text-xl font-bold text-dark-blue">Nampa</h3>
                </div>
                <p className="text-gray-600">Permit requirements depend on whether the mobile home is in city limits or the county. We'll check with the building department to confirm what's needed for your specific address.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-[#FFC845]" />
                  <h3 className="text-xl font-bold text-dark-blue">Caldwell</h3>
                </div>
                <p className="text-gray-600">Generally requires demolition permits. The city also wants verification that utilities have been disconnected before demo work begins.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-[#FFC845]" />
                  <h3 className="text-xl font-bold text-dark-blue">Rural Areas (County Land)</h3>
                </div>
                <p className="text-gray-600">Unincorporated areas often have fewer restrictions. Ada County and Canyon County may not require permits for mobile home demolition, but it's always worth checking.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-dark-blue mb-6">What the Permit Process Involves</h2>

            <div className="space-y-4 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold">1</div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-2">Submit Application</h3>
                  <p className="text-gray-600">Fill out a demolition permit application with the local building department. This includes property information, structure details, and proof of ownership.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold">2</div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-2">Pay Permit Fee</h3>
                  <p className="text-gray-600">Permit fees typically run $50 to $200 depending on the city and project size. This is a one-time cost paid to the city or county.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold">3</div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-2">Wait for Approval</h3>
                  <p className="text-gray-600">Most permits are approved within 5-10 business days. The city may request additional information or clarification before issuing the permit.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold">4</div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-2">Schedule Demolition</h3>
                  <p className="text-gray-600">Once the permit is issued, we can start work. The permit usually needs to be posted on-site during the demolition.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold">5</div>
                <div>
                  <h3 className="font-bold text-dark-blue mb-2">Final Inspection</h3>
                  <p className="text-gray-600">Some cities require a final inspection after demolition to confirm the site is clean and utilities are capped properly. We'll coordinate this if needed.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">We Make It Easy</h2>
              <p className="text-gray-600 mb-4">Dealing with city permits isn't fun, but we've done it hundreds of times. We know what each city requires, how to fill out the paperwork, and how to get it approved quickly.</p>
              <p className="text-gray-600">When you hire us, we'll handle the permit process or guide you through it step by step. You won't be left figuring this out on your own.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Let's Talk About Your Project</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
