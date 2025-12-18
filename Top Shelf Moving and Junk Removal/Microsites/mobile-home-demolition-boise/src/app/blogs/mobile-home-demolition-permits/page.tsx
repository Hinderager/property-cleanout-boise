import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile Home Demolition Permits in Idaho: What You Need | Mobile Home Demolition Pros',
  description: 'Do you need a permit to demolish a mobile home in Boise? Here\'s what Idaho and local jurisdictions require.',
  alternates: {
    canonical: 'https://mobile-home-demolition-boise.com/blogs/mobile-home-demolition-permits',
  },
}

export default function MobileHomeDemolitionPermits() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/demolition-permits.webp"
          alt="Mobile Home Demolition Permits"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Mobile Home Demolition Permits in Idaho
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Before tearing down a mobile home, you need to know if your jurisdiction requires a permit. The answer varies depending on where you're located in the Treasure Valley—and skipping permits when they're required can cause real problems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's what you need to know about demolition permits for mobile homes in Idaho.
            </p>
          </div>
        </div>
      </section>

      {/* The Short Answer */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                The Short Answer
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              In most of the Treasure Valley: yes, you need a demolition permit. The requirements and fees vary by jurisdiction.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>City of Boise:</strong> Requires a demolition permit. Application fee around $100-200. You'll also need to demonstrate that utilities have been disconnected.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Meridian:</strong> Requires a demolition permit through the building department. Similar process and fees to Boise.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Nampa:</strong> Demolition permit required. Contact their building services department.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Caldwell:</strong> Check with Canyon County building department for requirements.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Unincorporated areas:</strong> Ada County and Canyon County have their own permit requirements. Rural properties may have different (sometimes fewer) requirements than city properties.
            </p>
          </div>
        </div>
      </section>

      {/* What the Permit Process Involves */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What the Permit Process Involves
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Typical requirements for a mobile home demolition permit:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Application form:</strong> Basic information about the property and planned demolition</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Proof of ownership:</strong> Deed, tax records, or authorization from the property owner</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Utility disconnection:</strong> Documentation that gas, electric, water, and sewer have been disconnected</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Asbestos survey:</strong> Some jurisdictions require testing for asbestos before demolition</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Permit fee:</strong> Typically $75-250 depending on jurisdiction</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Processing time is usually 3-10 business days. Some jurisdictions offer expedited processing for additional fees.
            </p>
          </div>
        </div>
      </section>

      {/* Utility Disconnection */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Utility Disconnection
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Before demolition—and usually before a permit is issued—all utilities must be properly disconnected:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Electricity:</strong> Contact Idaho Power to disconnect service and remove the meter. This isn't just turning off the breaker—the connection to the power grid must be severed.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Natural gas:</strong> Contact Intermountain Gas to disconnect service and cap the line. Gas lines must be properly terminated to prevent leaks.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Water:</strong> Contact your water provider to shut off service at the meter. The line to the mobile home should be capped.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Sewer/septic:</strong> City sewer connections need to be properly capped. Septic systems have their own decommissioning requirements.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Propane:</strong> If the home uses propane, the tank must be emptied and removed before demolition.
            </p>
          </div>
        </div>
      </section>

      {/* Asbestos Requirements */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Asbestos Survey Requirements
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Idaho DEQ and EPA regulations require asbestos inspection before demolition in many cases:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Older mobile homes.</strong> Units built before 1980 are more likely to contain asbestos in flooring, insulation, siding, or duct tape. Testing is usually required.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>The inspection process.</strong> A certified asbestos inspector takes samples and sends them to a lab. Cost is typically $200-500 for a mobile home.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>If asbestos is found.</strong> Materials containing asbestos must be removed by licensed abatement contractors before general demolition can proceed. This adds cost and time.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Documentation.</strong> Keep the inspection report—you may need to show it to get your demolition permit or for future property sales.
            </p>
          </div>
        </div>
      </section>

      {/* What Happens If You Skip the Permit */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What Happens If You Skip the Permit
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Some people think they can just tear down a mobile home without permits. Here's why that's risky:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Fines.</strong> Demolishing without required permits can result in fines from the city or county. These often exceed what the permit would have cost.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Title issues.</strong> If the mobile home has a separate title (many do), demolishing it improperly can create problems when you try to sell the property.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Tax assessment problems.</strong> The county assessor needs to know the structure is gone. Without proper documentation, you might keep paying taxes on a nonexistent building.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Future building issues.</strong> If you want to build something new on the site, unpermitted demolition can complicate your building permit application.
            </p>
          </div>
        </div>
      </section>

      {/* Who Handles the Permit */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Who Handles the Permit—You or the Contractor?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Either option works:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>You pull the permit.</strong> Property owners can usually apply for demolition permits themselves. You'll need to gather the documentation and visit the building department.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Contractor pulls the permit.</strong> Many demolition contractors will handle permitting as part of their service. This is convenient and ensures nothing gets missed.
            </p>

            <p className="text-gray-600 leading-relaxed">
              If your contractor offers to handle permits, make sure you understand what's included in their price and who's responsible if there are delays or additional requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Yes, you probably need a permit to demolish a mobile home in the Treasure Valley. The exact requirements depend on your jurisdiction, but the process is usually straightforward—application, fee, utility disconnection documentation, and possibly an asbestos survey.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Contact your local building department to confirm requirements before starting any demolition work. The permit fee is a small part of the overall project cost and avoids potential headaches down the road.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We can help you understand what's required for your specific property and jurisdiction. Give us a call with questions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Questions About Permits?
            </h2>
            <p className="text-gray-600 mb-8">
              We've handled mobile home demolitions throughout the Treasure Valley and know the local requirements. Let us help you navigate the process.
            </p>
            <a
              href="tel:2083611982"
              className="inline-block bg-dark-blue hover:bg-light-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Call (208) 361-1982
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Mobile Home Demolition Resources
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-light-blue transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
