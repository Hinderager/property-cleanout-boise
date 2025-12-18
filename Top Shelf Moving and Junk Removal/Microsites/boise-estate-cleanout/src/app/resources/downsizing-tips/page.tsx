import { Metadata } from 'next'
import { Phone, Heart, Home, Package, Users, CheckCircle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Downsizing Tips for Seniors | Boise',
  description: 'Practical downsizing advice for seniors moving to smaller homes or assisted living in Boise and the Treasure Valley.',
  alternates: { canonical: 'https://boise-estate-cleanout.com/resources/downsizing-tips' },
}

export default function DownsizingTipsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Downsizing Tips</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Making the move to a smaller space easier for you or your loved ones.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Downsizing from a longtime family home to a smaller place or assisted living facility isn't easy. There's a lifetime of memories and belongings to sort through. These tips can help make the process less overwhelming.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Why People Downsize</h2>

            <div className="space-y-4 mb-12">
              <div className="flex gap-4 items-start">
                <Home className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-1">Moving to Assisted Living</h3>
                  <p className="text-gray-600">Transitioning to a care facility means a much smaller living space—typically one room or a small apartment.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Users className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-1">Empty Nest or Retirement</h3>
                  <p className="text-gray-600">Kids are grown and gone. A big house feels too much to manage. Downsizing makes daily life simpler.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Heart className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-1">Health or Mobility Issues</h3>
                  <p className="text-gray-600">Stairs, large yards, and multi-level homes become difficult to navigate. A smaller, single-level space is safer.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Package className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark-blue mb-1">Simplifying Life</h3>
                  <p className="text-gray-600">Less maintenance, lower costs, and fewer belongings to manage means more time and energy for what matters.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Getting Started</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-dark-blue mb-4 flex items-center gap-3">
                <Lightbulb className="w-7 h-7 text-[#FFC845]" />
                Start Early and Take Your Time
              </h3>
              <p className="text-gray-600 mb-3">Don't wait until a week before the move. Give yourself at least 2-3 months if possible. Rushing leads to stress and regret over items you got rid of too quickly.</p>
              <p className="text-gray-600">Work in small chunks—an hour or two at a time. It's not a race.</p>
            </div>

            <div className="space-y-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-dark-blue mb-4">Measure the New Space</h3>
                <p className="text-gray-600 mb-3">Before you decide what to keep, know what will fit. Measure rooms, doorways, closets, and storage areas in the new place.</p>
                <p className="text-gray-600">Will your dining table fit? What about the sofa? Knowing this upfront helps you make realistic decisions.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-dark-blue mb-4">Decide What's Most Important</h3>
                <p className="text-gray-600 mb-3">You can't take everything. Focus on:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Daily essentials (bed, clothes, toiletries, kitchen basics)</li>
                  <li>• Sentimental items that bring joy (photos, heirlooms, favorite pieces)</li>
                  <li>• Comfortable furniture that fits the new space</li>
                </ul>
                <p className="text-gray-600 mt-3">Everything else is negotiable.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-dark-blue mb-4">Involve Family Early</h3>
                <p className="text-gray-600 mb-3">If you have kids or grandkids, let them know you're downsizing. Give them a chance to claim items they want.</p>
                <p className="text-gray-600">Set a deadline. If they don't pick it up by then, you're free to donate or sell it. Be firm but fair.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Sorting Through Belongings</h2>
            <p className="text-gray-600 mb-6">Go room by room. Use these categories to stay organized:</p>

            <div className="space-y-4 mb-12">
              <div className="border-l-4 border-green-500 bg-green-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Keep</h4>
                <p className="text-gray-600">Items you use regularly, need in the new place, or can't imagine parting with.</p>
              </div>

              <div className="border-l-4 border-blue-500 bg-blue-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Give to Family</h4>
                <p className="text-gray-600">Heirlooms, family photos, items with sentimental value that relatives might want.</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-yellow-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Donate</h4>
                <p className="text-gray-600">Usable items in good condition. Furniture, clothes, kitchen goods, books, decor.</p>
              </div>

              <div className="border-l-4 border-purple-500 bg-purple-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Sell</h4>
                <p className="text-gray-600">Higher-value items like antiques, jewelry, collectibles, quality furniture.</p>
              </div>

              <div className="border-l-4 border-red-500 bg-red-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Toss</h4>
                <p className="text-gray-600">Broken, worn out, or unusable items. Be honest—if it's garbage, let it go.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Room-by-Room Tips</h2>

            <div className="space-y-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Kitchen</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Keep one set of dishes, not three</li>
                  <li>• Donate duplicate gadgets and appliances</li>
                  <li>• Toss expired food, spices, and pantry items</li>
                  <li>• Keep only the cookware you actually use</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Bedroom</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Donate clothes you haven't worn in a year</li>
                  <li>• Keep seasonal items that fit your new climate and lifestyle</li>
                  <li>• Consolidate jewelry—keep favorites, give away or sell the rest</li>
                  <li>• Old bedding and linens take up space—keep one or two spare sets max</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Living Room</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Downsize furniture to fit the new space</li>
                  <li>• Keep meaningful photos and decor, donate the rest</li>
                  <li>• Books you've already read can go unless they're favorites</li>
                  <li>• Electronics you don't use—donate or recycle them</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Garage, Attic, Basement</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Be ruthless—this is where clutter lives</li>
                  <li>• Tools and yard equipment: keep what fits your new situation</li>
                  <li>• Holiday decorations: keep a small box of favorites</li>
                  <li>• Storage bins full of "maybe someday" items—let them go</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Dealing with Sentimental Items</h2>
            <p className="text-gray-600 mb-6">This is the hardest part. Here's how to handle it:</p>

            <div className="space-y-3 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Take photos:</strong> If you can't keep it but want to remember it, take a picture before letting it go</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Keep the best, not all:</strong> You don't need every baby toy or school project—just a few favorites</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Pass items on with stories:</strong> Give things to family and tell them why it matters</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>It's okay to feel sad:</strong> Letting go is hard. Take breaks when you need to.</span>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What to Do with Everything</h2>

            <div className="space-y-4 mb-12">
              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Donate Locally</h4>
                <p className="text-gray-600">Goodwill, Salvation Army, St. Vincent de Paul, and local thrift stores in Boise will take furniture, clothes, and household goods. Some offer pickup for large items.</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Sell High-Value Items</h4>
                <p className="text-gray-600">Estate sale companies can help sell furniture and collectibles. Facebook Marketplace and Craigslist work for quick sales.</p>
              </div>

              <div className="border-l-4 border-[#FFC845] bg-gray-50 p-5">
                <h4 className="font-bold text-dark-blue mb-2">Hire Help</h4>
                <p className="text-gray-600">If it's too much to handle alone, call us. We'll sort, haul, donate, and dispose of everything you don't want to keep.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6">
              <h3 className="font-bold text-dark-blue mb-3">Moving Day Essentials for Seniors</h3>
              <p className="text-gray-600 mb-3">Pack a separate bag with:</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Medications and medical equipment</li>
                <li>• Important documents (ID, insurance, medical records)</li>
                <li>• Change of clothes and toiletries</li>
                <li>• Phone charger</li>
                <li>• Comfort items (favorite blanket, photos, small keepsakes)</li>
              </ul>
            </div>

            <div className="mt-12 bg-dark-blue p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">We Can Help You Downsize</h2>
              <p className="text-gray-300 mb-6">Downsizing is emotional and exhausting. Let us handle the heavy lifting and hauling so you can focus on the transition.</p>
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
