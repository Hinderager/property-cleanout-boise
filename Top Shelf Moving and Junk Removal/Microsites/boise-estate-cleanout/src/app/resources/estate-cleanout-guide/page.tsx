import { Metadata } from 'next'
import { Phone, Heart, FileText, Users, Home, Trash2, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Estate Cleanout Guide | Boise Estate Services',
  description: 'Complete guide to estate cleanouts in Boise and the Treasure Valley. Learn what to expect, how to plan, and how we can help.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/resources/estate-cleanout-guide' },
}

export default function EstateCleanoutGuidePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Estate Cleanout Guide</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Everything you need to know about clearing out an estate in the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Estate cleanouts are never easy. Whether you're dealing with the loss of a loved one, handling probate, or helping an aging parent downsize, there's a lot to figure out. This guide walks you through the process.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What Is an Estate Cleanout?</h2>
            <p className="text-gray-600 mb-8">An estate cleanout is the process of clearing out a home after someone has passed away, moved to assisted living, or can no longer manage the property. It involves sorting through belongings, identifying valuable items, donating or disposing of the rest, and leaving the property clean and empty.</p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">When You Might Need an Estate Cleanout</h2>
            <div className="space-y-4 mb-12">
              <div className="flex gap-4 items-start">
                <Heart className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-1">After a loved one passes</h3>
                  <p className="text-gray-600">Clearing the home as part of settling the estate or preparing to sell the property</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Home className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-1">Moving to assisted living</h3>
                  <p className="text-gray-600">When a family member moves to a care facility and the home needs to be cleared</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <FileText className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-1">Probate situations</h3>
                  <p className="text-gray-600">Court-ordered cleanouts to settle an estate and prepare property for sale</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Users className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-1">Family transitions</h3>
                  <p className="text-gray-600">Divorce, downsizing, or other major life changes requiring a full cleanout</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">The Estate Cleanout Process</h2>

            <div className="space-y-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-lg">1</div>
                  <h3 className="text-xl font-bold text-dark-blue pt-1">Assess and Plan</h3>
                </div>
                <p className="text-gray-600 mb-3">Walk through the property and get a sense of what's there. How many rooms? Is there a basement, attic, garage? Are there vehicles, outdoor equipment, storage sheds?</p>
                <p className="text-gray-600">This helps you (or us) estimate time, labor, and cost.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-lg">2</div>
                  <h3 className="text-xl font-bold text-dark-blue pt-1">Sort and Identify Valuables</h3>
                </div>
                <p className="text-gray-600 mb-3">Go through belongings systematically. Look for:</p>
                <ul className="text-gray-700 space-y-1 ml-6 list-disc">
                  <li>Important documents (wills, deeds, bank statements, insurance policies)</li>
                  <li>Valuables (jewelry, coins, antiques, collectibles)</li>
                  <li>Sentimental items family members want to keep</li>
                  <li>Items that can be donated or sold</li>
                </ul>
                <p className="text-gray-600 mt-3">This is the most time-consuming part, but it's important not to rush.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-lg">3</div>
                  <h3 className="text-xl font-bold text-dark-blue pt-1">Coordinate with Family</h3>
                </div>
                <p className="text-gray-600">Give family members a chance to claim items they want. Set a deadline so things keep moving. Be prepared for emotions and disagreements—this stuff happens.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-lg">4</div>
                  <h3 className="text-xl font-bold text-dark-blue pt-1">Donate, Sell, or Dispose</h3>
                </div>
                <p className="text-gray-600 mb-3">Once valuables and keepsakes are set aside, decide what to do with the rest:</p>
                <ul className="text-gray-700 space-y-1 ml-6 list-disc">
                  <li><strong>Donate:</strong> Usable furniture, clothes, household items go to local charities</li>
                  <li><strong>Sell:</strong> Estate sales or consignment for higher-value items</li>
                  <li><strong>Dispose:</strong> Broken, unusable, or unwanted items hauled away</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FFC845] rounded-full flex items-center justify-center text-dark-blue font-bold text-lg">5</div>
                  <h3 className="text-xl font-bold text-dark-blue pt-1">Final Cleaning</h3>
                </div>
                <p className="text-gray-600">After everything is removed, the property should be swept clean. If you're selling, consider a deep clean or minor repairs to maximize sale price.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Common Challenges</h2>

            <div className="space-y-4 mb-12">
              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Emotional Difficulty</h4>
                <p className="text-gray-600">Going through a loved one's belongings is hard. It's okay to take breaks, ask for help, or hire someone to handle it.</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Overwhelming Volume</h4>
                <p className="text-gray-600">Decades of accumulated belongings can feel impossible to tackle. Breaking it down room by room helps.</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Family Disagreements</h4>
                <p className="text-gray-600">Siblings or relatives may have different ideas about what to keep, sell, or throw away. Communication and compromise are key.</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Time Constraints</h4>
                <p className="text-gray-600">If the property is being sold or there's a probate deadline, you may be working against the clock.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">How We Can Help</h2>
            <p className="text-gray-600 mb-6">We've helped hundreds of families with estate cleanouts in Boise, Meridian, Nampa, and throughout the Treasure Valley. Here's what we do:</p>

            <div className="space-y-3 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Full-service cleanouts:</strong> We sort, pack, haul, donate, and dispose of everything</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Identify valuables:</strong> We help you find important documents and items of value</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Donation coordination:</strong> We deliver usable items to local charities and provide receipts</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Respectful service:</strong> We treat your family's belongings with care and dignity</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Flexible scheduling:</strong> We work around probate timelines and family availability</span>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6">
              <h3 className="font-bold text-dark-blue mb-3">Estate Cleanout Timeline</h3>
              <p className="text-gray-600 mb-2">How long does it take?</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Small apartment or condo: 1-2 days</li>
                <li>• Standard house: 2-4 days</li>
                <li>• Large estate with multiple outbuildings: 5-10 days</li>
              </ul>
              <p className="text-gray-600 mt-3 text-sm">Timelines vary based on volume, family involvement, and how much sorting needs to happen.</p>
            </div>

            <div className="mt-12 bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">We're Here to Help</h2>
              <p className="text-gray-300 mb-6">Estate cleanouts are tough. Let us handle the hard work so you can focus on your family.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
