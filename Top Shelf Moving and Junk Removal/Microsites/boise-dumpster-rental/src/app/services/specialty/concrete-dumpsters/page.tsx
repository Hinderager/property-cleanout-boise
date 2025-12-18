import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Concrete Dumpster Rental Boise | Top Shelf Dumpster Rental',
  description: 'Rent concrete dumpsters in Boise for heavy material disposal. Perfect for concrete, brick, and masonry debris. Call (208) 505-9352.',
  alternates: { canonical: 'https://boisedumpsterrental.com/services/specialty/concrete-dumpsters' },
}

export default function ConcreteDumpsterPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="relative h-[300px] md:h-[400px] flex items-center bg-gradient-to-r from-dark-blue to-[#1a5a9e]">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('/patterns/texture.svg')]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-gray-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Concrete Dumpsters</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Heavy-duty dumpsters for concrete and masonry.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Dumpsters for Heavy Materials</h2>
              <p className="text-lg text-gray-600 mb-6">
                Concrete weighs a lot. Like, really a lot. You can't just toss it in a regular dumpster and call it good.
              </p>
              <p className="text-lg text-gray-600">
                We rent dumpsters specifically for concrete, brick, block, and other heavy masonry materials. They're built to handle the weight without falling apart.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">What Goes in Concrete Dumpsters</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Concrete slabs and chunks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Brick and block</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Asphalt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Stone and rock</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Tile and ceramic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Cement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Stucco</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Gravel and dirt (small amounts)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Important: Keep concrete separate from other materials. Mixed loads cost more to dispose of.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">What Size Concrete Dumpster?</h2>
              <p className="text-lg text-gray-600 mb-4">
                For concrete, size isn't the main issue - weight is. Here's what usually works:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li><strong>10 yard:</strong> Small concrete projects (patio, sidewalk section)</li>
                <li><strong>20 yard:</strong> Medium concrete removal (driveway, larger patio)</li>
                <li><strong>30 yard:</strong> Large concrete projects (but watch the weight)</li>
              </ul>
              <p className="text-lg text-gray-600 mt-4">
                Concrete is so heavy that you'll usually hit the weight limit before you fill the dumpster. That's normal. We can swap it out for a fresh one if you need more space.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Weight Limits and Pricing</h2>
              <p className="text-lg text-gray-600 mb-4">
                Concrete dumpsters have strict weight limits because, well, concrete is ridiculously heavy. We'll tell you the limit when you rent.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                If you go over, there's a per-ton overage charge. We're not trying to nickel-and-dime you - disposal facilities charge us by weight, so we have to pass that along.
              </p>
              <p className="text-lg text-gray-600">
                Call us before you start loading if you're not sure how much you've got. We can help you estimate the weight and avoid surprises.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Why You Can't Mix Concrete with Other Stuff</h2>
              <p className="text-lg text-gray-600 mb-4">
                Concrete gets recycled differently than regular trash. If you mix it with wood, drywall, or other junk, the whole load becomes "mixed debris" and costs way more to dispose of.
              </p>
              <p className="text-lg text-gray-600">
                Keep your concrete clean and you'll save money. If you need to get rid of other stuff too, rent a second dumpster for the mixed debris.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need a Concrete Dumpster?</h2>
          <p className="text-gray-300 mb-6">Call us and we'll help you figure out the right size and weight limit.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" /> (208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
