import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import { ClipboardList, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Property Cleanout Checklist for Property Managers | Property Cleanout Pros',
  description: 'A comprehensive checklist to make sure nothing gets missed during your property cleanout. For landlords and property managers.',
  alternates: {
    canonical: 'https://property-cleanout-boise.com/blogs/property-cleanout-checklist',
  },
}

export default function PropertyCleanoutChecklist() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/cleanout-checklist.webp"
          alt="Property Cleanout Checklist"
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
            Property Cleanout Checklist
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Whether you're turning over a rental, clearing an estate, or preparing a property for sale, a systematic approach ensures nothing gets missed. Use this checklist to make sure your property cleanout is thorough and complete.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This guide is designed for property managers, landlords, and anyone overseeing a property cleanout in the Boise area.
            </p>
          </div>
        </div>
      </section>

      {/* Before the Cleanout */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Before the Cleanout
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Preparation steps before work begins:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Document the starting condition.</strong> Walk through and photograph every room. Note damage, items left behind, and overall condition. This documentation protects you if disputes arise.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Secure the property.</strong> Make sure you have legal access and proper authority to remove contents. For tenant situations, verify that abandonment procedures have been properly followed.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Check for valuables and documents.</strong> Look for items that may need special handling—cash, jewelry, important documents, medications, firearms. These shouldn't just be thrown away.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Identify hazardous materials.</strong> Note any paint, chemicals, propane tanks, or other materials requiring special disposal.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Verify utility status.</strong> Know whether electricity and water are on. This affects equipment options and cleaning capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Room-by-Room Checklist */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Room-by-Room Checklist
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              What to address in each area:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Kitchen:</strong> Appliances (remove or clean), cabinets and drawers emptied, pantry cleared, under sink checked, refrigerator cleaned out</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Bathrooms:</strong> Medicine cabinets emptied, under vanity cleared, shower/tub checked, toiletries removed, towel bars and hooks cleared</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Bedrooms:</strong> Closets completely emptied (including top shelves), furniture removed, under beds checked, window treatments if damaged</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Living areas:</strong> All furniture, entertainment equipment, wall hangings, blinds/curtains if necessary</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Garage/storage:</strong> All contents, shelving if damaged, chemicals and paint properly disposed, ceiling/rafters checked</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Exterior:</strong> Yard debris, patio furniture, grills, storage sheds, trash cans, garden hoses, planters</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Often Overlooked Areas */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Commonly Overlooked Areas
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Don't forget these spots:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Attic or crawl space.</strong> Previous occupants often store items and forget about them. Check for boxes, holiday decorations, old furniture.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Behind appliances.</strong> Items fall behind refrigerators, washers, and dryers. Pull them out and check.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Utility room or water heater area.</strong> Stored items, cleaning supplies, pet items often accumulate here.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Built-in storage.</strong> Hall closets, linen closets, coat closets—every shelf and corner.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Mailbox.</strong> Check for accumulated mail, which may contain important documents or clues to forwarding addresses.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Outdoor structures.</strong> Sheds, detached garages, carports—anything on the property.
            </p>
          </div>
        </div>
      </section>

      {/* What to Do With Items */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Sorting and Disposal
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Items typically fall into categories:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Trash.</strong> Broken items, garbage, damaged goods—straight to disposal.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Donation.</strong> Usable furniture, clothing, household goods can often go to local charities. Idaho Youth Ranch, Goodwill, and Salvation Army all accept donations in the Treasure Valley.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Recycling.</strong> Metals, electronics, cardboard can be recycled rather than landfilled.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Hazardous materials.</strong> Paint, chemicals, batteries, medications need proper disposal through Ada County or Canyon County hazardous waste programs.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Items requiring storage or return.</strong> Depending on circumstances, some items may need to be held for the previous occupant per Idaho abandoned property laws.
            </p>
          </div>
        </div>
      </section>

      {/* Final Walkthrough */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Final Walkthrough Checklist
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Before calling the cleanout complete:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Every room empty.</strong> Nothing left in any closet, cabinet, or storage area.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Broom-clean condition.</strong> Floors swept, major debris removed. (Deep cleaning is typically a separate service.)
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Appliances addressed.</strong> Either removed, cleaned out, or noted as needing attention.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Exterior clear.</strong> No items remaining on porches, patios, in yard, or in outbuildings.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Windows and doors secure.</strong> Property can be properly locked.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Photo documentation.</strong> After photos showing completed cleanout condition.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              A thorough property cleanout requires systematic attention to every area. Using a checklist prevents callbacks, disputes, and the embarrassment of showing a "cleaned" property that still has items in it.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Whether you're handling the cleanout yourself or hiring professionals, this checklist ensures nothing gets missed.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Need help with a property cleanout in the Treasure Valley? We follow this same systematic approach on every job—so you know the property will be truly ready when we're done.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Professional Cleanout Help?
            </h2>
            <p className="text-gray-600 mb-8">
              We handle complete property cleanouts throughout Boise, Meridian, Nampa, and the Treasure Valley. Thorough, documented, and efficient.
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
