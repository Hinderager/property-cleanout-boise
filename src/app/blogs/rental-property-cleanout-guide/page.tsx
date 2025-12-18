import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Home, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rental Property Cleanout: A Guide for Landlords | Property Cleanout Pros',
  description: 'Tenant left a mess? Here\'s how landlords can get rental properties cleaned out and ready for the next renter quickly.',
  alternates: {
    canonical: 'https://property-cleanout-boise.com/blogs/rental-property-cleanout-guide',
  },
}

export default function RentalPropertyCleanoutGuide() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/rental-cleanout-guide.webp"
          alt="Rental Property Cleanout Guide"
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
            Rental Property Cleanout: A Landlord's Guide
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Your tenant moved out and left stuff behind. Maybe just a few items. Maybe the entire contents of the apartment. Now you're stuck dealing with it before you can get the unit ready for the next renter.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's what Treasure Valley landlords need to know about handling rental property cleanouts—the legal requirements, practical considerations, and how to get it done efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Considerations */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Legal Considerations First
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Before disposing of anything, understand Idaho's abandoned property rules:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Proper notice required.</strong> If the tenant hasn't officially surrendered the property, you may need to provide written notice and wait a specified period before disposing of belongings.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Lease termination matters.</strong> How the tenancy ended—normal move-out, eviction, abandonment—affects your legal obligations regarding their property.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Document everything.</strong> Take photos and make an inventory of left-behind items before removing anything. This protects you if disputes arise.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Consult your attorney.</strong> For high-value situations or when you're unsure about the legal status, get professional advice before proceeding.
            </p>
          </div>
        </div>
      </section>

      {/* Common Rental Cleanout Scenarios */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Common Rental Cleanout Scenarios
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              What we typically see from landlords:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Minor items left behind:</strong> A few boxes, some furniture the tenant didn't want, random personal items. Quick cleanup</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Abandoned unit:</strong> Tenant disappeared, left most or all belongings. Full cleanout needed</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Eviction aftermath:</strong> Contents removed after legal process completed. Often includes trash and damage</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Deceased tenant:</strong> Estate must be handled, but sometimes family doesn't claim belongings. Sensitive situation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Hoarding situations:</strong> Tenant accumulated excessive belongings. Major cleanout required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Turnover Timeline */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Turnover Timeline
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Every day the unit sits empty costs you money. Here's how cleanout fits into turnover:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Day 1: Initial assessment.</strong> Walk the unit, document condition, inventory left-behind items, determine scope of work needed.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Days 1-3: Cleanout.</strong> Remove all contents, trash, and debris. Most apartment cleanouts can be completed in one day.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Days 2-5: Cleaning and repairs.</strong> Deep clean, paint touch-ups, any necessary repairs. Can start before cleanout is complete if separate crews.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Days 5-7: Final prep.</strong> Final inspection, professional photos, listing preparation.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Delays at the cleanout stage push everything back. Getting this done quickly gets your unit earning again.
            </p>
          </div>
        </div>
      </section>

      {/* What Gets Removed */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What Gets Removed
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Typical items in a rental cleanout:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Furniture.</strong> Beds, couches, tables, chairs, desks—whatever was left behind.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Personal belongings.</strong> Clothing, books, kitchenware, decorations, miscellaneous items.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Appliances (if tenant-owned).</strong> Portable air conditioners, small appliances, sometimes washers/dryers.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Trash and debris.</strong> Accumulated garbage, packaging, cleaning supplies.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Outdoor items.</strong> Patio furniture, grills, plants, storage items from balconies or assigned areas.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Hazardous materials.</strong> Paint, cleaning chemicals, automotive fluids—these require proper disposal.
            </p>
          </div>
        </div>
      </section>

      {/* Security Deposit Considerations */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Security Deposit and Cost Recovery
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              How cleanout costs relate to deposits:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Deduct from deposit.</strong> In most cases, cleanout costs for tenant-abandoned property can be deducted from the security deposit with proper documentation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Get itemized invoices.</strong> You need documented proof of costs if you're withholding deposit funds. We provide detailed invoices for this purpose.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Costs exceeding deposit.</strong> If cleanout costs more than the deposit covers, you may need to pursue the former tenant for the balance—often not worth the effort for moderate amounts.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Normal wear vs. excessive damage.</strong> Standard turnover cleaning is typically your expense. Excessive mess or abandoned belongings is the tenant's responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* DIY vs Professional */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              DIY vs. Professional Cleanout
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              When does it make sense to hire help?
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>DIY makes sense when:</strong> Only a few items, you have time and a vehicle, no heavy furniture, no hazardous materials.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Hire professionals when:</strong> Significant volume, time pressure to get unit re-rented, heavy items, multiple units, you manage remotely, or the situation is overwhelming.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>The real calculation:</strong> Your time has value. If you can re-rent the unit faster by hiring help, the cleanout cost often pays for itself in avoided vacancy.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Multiple properties:</strong> Property managers with regular turnovers often establish ongoing relationships with cleanout services for consistent, reliable results.
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
              Tenant-left belongings are a hassle, but they're a solvable problem. Follow proper legal procedures, document everything, and get the cleanout done efficiently so you can minimize vacancy time.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              For landlords managing multiple properties in the Treasure Valley, having a reliable cleanout partner saves time and keeps your units turning over quickly.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We work with landlords and property managers throughout Boise, Meridian, and Nampa. Quick response, documented work, straightforward pricing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need a Rental Unit Cleaned Out?
            </h2>
            <p className="text-gray-600 mb-8">
              We can usually get there within 24-48 hours and have your unit ready for turnover. Call for a fast quote.
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
            More Property Cleanout Resources
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
