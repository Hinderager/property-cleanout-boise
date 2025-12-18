import { Metadata } from 'next'
import { Phone, Heart, Clock, Shield, Users, ThumbsUp, DollarSign, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Choose Us | Boise Estate Cleanout',
  description: 'Discover what makes Top Shelf Estate Cleanout different. Compassionate service, local expertise, and respect for your family.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/about-us/why-choose-us' },
}

export default function WhyChooseUsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Top Shelf Estate Cleanout</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">We're not just clearing out homes—we're helping families through difficult transitions.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Estate cleanouts are different from regular junk removal. They happen during life transitions—after someone passes away, when downsizing, or when helping aging parents move to assisted living. These moments require more than just muscle and a truck. They require compassion, respect, and understanding.</p>
              <p>That's what makes us different.</p>
            </div>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <Heart className="w-12 h-12 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Compassionate Service</h3>
                  <p className="text-gray-600">We understand you're dealing with more than just stuff. You're processing memories, making difficult decisions, and handling a lot of emotions. Our team treats every item—and every family—with respect and sensitivity.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="w-12 h-12 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Local Team You Can Trust</h3>
                  <p className="text-gray-600">We're not a national chain. We're your neighbors in the Treasure Valley. We live here, work here, and care about the families we serve. When you call, you'll talk to a real person, not a call center.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-12 h-12 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Fast, Flexible Scheduling</h3>
                  <p className="text-gray-600">Estate cleanouts often have tight deadlines—property sales, lease expirations, or just the need to move forward. We work around your schedule and can often provide same-day or next-day service when you need it.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-12 h-12 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Licensed & Insured</h3>
                  <p className="text-gray-600">We carry full liability insurance and workers' compensation coverage. You won't be held liable if something gets damaged or someone gets hurt. We handle everything properly and professionally.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <ThumbsUp className="w-12 h-12 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">We Handle Everything</h3>
                  <p className="text-gray-600">Sorting, hauling, donating, recycling, disposal—we take care of it all. You don't have to lift a finger unless you want to be involved. We'll work at whatever pace feels right for your family.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <DollarSign className="w-12 h-12 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Fair, Transparent Pricing</h3>
                  <p className="text-gray-600">No hidden fees, no surprise charges. We'll walk through the property with you, give you an honest quote, and stick to it. You'll know exactly what you're paying before we start.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Truck className="w-12 h-12 text-[#FFC845] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Donate What We Can</h3>
                  <p className="text-gray-600">If there are items in good condition, we'll donate them to local charities whenever possible. It's a way to honor your loved one's belongings and help others in the community.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6 mb-12">
              <h3 className="text-lg font-bold text-dark-blue mb-2">The Bottom Line</h3>
              <p className="text-gray-700">Estate cleanouts are hard. You shouldn't have to do it alone, and you shouldn't have to deal with a company that treats it like just another job. We're here to help, to listen, and to make this process as easy as we possibly can.</p>
            </div>

            <div className="bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Work With a Team That Cares?</h2>
              <p className="text-gray-300 mb-6">Call us today. We'll answer your questions and explain how we can help.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
