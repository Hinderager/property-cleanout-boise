import { Metadata } from 'next'
import { Phone, FileText, AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dumpster Permit Information | Boise Dumpster Rental',
  description: 'Do you need a permit for a dumpster in Boise? Learn about dumpster permits, when you need one, and how to get one.',
  alternates: { canonical: 'https://boisedumpsterrental.com/resources/permits' },
}

export default function PermitsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dumpster Permit Information</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">What you need to know about permits in Boise and the Treasure Valley.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>The permit question is simple: if the dumpster goes on your property, you probably don't need one. If it goes on the street or sidewalk, you probably do.</p>
              <p>Here's what you need to know for Boise and surrounding cities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark-blue mb-2">No Permit Needed</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Dumpster on your driveway</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Dumpster on your lawn or yard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Dumpster in your parking lot (if you own it)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Private property in general</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark-blue mb-2">Permit Usually Required</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">!</span>
                    <span>Dumpster on the street</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">!</span>
                    <span>Dumpster on the sidewalk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">!</span>
                    <span>Dumpster blocking a bike lane</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">!</span>
                    <span>Any city right-of-way</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-8">Permit Requirements by City</h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Boise</h3>
                <p className="text-gray-600 mb-2">Contact: Boise Public Works</p>
                <p className="text-gray-600 mb-2">Phone: (208) 384-3900</p>
                <p className="text-gray-600">Permit required for any dumpster in the public right-of-way. Application typically takes 1-3 business days. Fee varies by duration.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Meridian</h3>
                <p className="text-gray-600 mb-2">Contact: City of Meridian Public Works</p>
                <p className="text-gray-600 mb-2">Phone: (208) 888-4433</p>
                <p className="text-gray-600">Permit needed for street placement. Usually processed same-day or next-day.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Nampa</h3>
                <p className="text-gray-600 mb-2">Contact: Nampa Street Department</p>
                <p className="text-gray-600 mb-2">Phone: (208) 468-5420</p>
                <p className="text-gray-600">Permit required for city streets. Application available online or in-person.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Caldwell</h3>
                <p className="text-gray-600 mb-2">Contact: Caldwell Public Works</p>
                <p className="text-gray-600 mb-2">Phone: (208) 455-4656</p>
                <p className="text-gray-600">Street permits required. Contact public works for current fees and application.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Eagle, Kuna, Star, Other Cities</h3>
                <p className="text-gray-600">Most smaller cities also require permits for street placement. We can help you figure out who to call.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">How to Get a Permit</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p><strong>Step 1:</strong> Contact the city where you're placing the dumpster (not necessarily where you live).</p>
              <p><strong>Step 2:</strong> Tell them you need a dumpster placement permit and give them the dates you'll have it.</p>
              <p><strong>Step 3:</strong> Fill out their application (usually simple—just your name, address, dates).</p>
              <p><strong>Step 4:</strong> Pay the fee. Usually $25-$75 depending on the city and duration.</p>
              <p><strong>Step 5:</strong> Keep the permit with you or posted where required.</p>
              <p className="font-bold text-dark-blue">We can help walk you through this if it's your first time. Just ask when you call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">What if I Don't Get a Permit?</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>Cities can (and do) issue fines for unpermitted dumpsters on public streets. We're talking $100-$500 depending on the city.</p>
              <p>It's not worth the risk. If you need it on the street, get the permit.</p>
              <p>That said, 90% of residential dumpsters go on driveways and don't need permits at all.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Permits?</h2>
          <p className="text-gray-300 mb-6">We've dealt with this a thousand times. Call and we'll help you figure it out.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
