const fs = require('fs');
const path = require('path');

const MICROSITES_DIR = __dirname;

// Site configurations with blog topics
const siteConfigs = {
  'boise-appliance-removal': {
    businessName: 'Appliance Removal Pros',
    domain: 'boise-appliance-removal.com',
    service: 'appliance removal',
    phone: '(208) 361-1982',
    blogs: [
      {
        slug: 'what-to-do-with-old-appliances-boise',
        title: 'What to Do With Old Appliances in Boise (Your Complete Guide)',
        excerpt: 'Not sure what to do with that old fridge or washer? Here are your best options for getting rid of appliances in the Treasure Valley.',
        image: '/generated/hero.webp'
      },
      {
        slug: 'how-much-does-appliance-removal-cost',
        title: 'How Much Does Appliance Removal Cost in Boise?',
        excerpt: 'Wondering what you\'ll pay to haul away that old washer or fridge? Here\'s the real breakdown of appliance removal pricing.',
        image: '/generated/appliance-hauling.webp'
      },
      {
        slug: 'can-you-recycle-old-refrigerators',
        title: 'Can You Recycle Old Refrigerators in Idaho?',
        excerpt: 'Yes, you can recycle old fridges - and it\'s actually required in many cases. Here\'s how refrigerator recycling works in the Boise area.',
        image: '/generated/refrigerator-removal.webp'
      },
      {
        slug: 'preparing-appliances-for-removal',
        title: 'How to Prepare Appliances for Pickup (Quick Checklist)',
        excerpt: 'A few simple steps before your appliance removal appointment can save you time and hassle. Here\'s what to do.',
        image: '/generated/washer-dryer-removal.webp'
      },
      {
        slug: 'why-diy-appliance-removal-is-risky',
        title: 'Why DIY Appliance Removal Can Be Risky (And When It Makes Sense)',
        excerpt: 'Thinking about hauling that old fridge yourself? Here\'s what you should consider before you grab your dolly.',
        image: '/generated/hero.webp'
      }
    ]
  },
  'boise-commercial-movers': {
    businessName: 'Commercial Moving Pros',
    domain: 'boise-commercial-movers.com',
    service: 'commercial moving',
    phone: '(208) 361-1982',
    blogs: [
      {
        slug: 'planning-office-move-boise',
        title: 'Planning an Office Move in Boise? Start Here',
        excerpt: 'Moving your business doesn\'t have to be chaotic. Here\'s a practical timeline and checklist for Boise office relocations.',
        image: '/generated/hero.webp'
      },
      {
        slug: 'minimize-downtime-during-commercial-move',
        title: 'How to Minimize Downtime During a Commercial Move',
        excerpt: 'Every hour your business is offline costs money. Here\'s how to keep operations running during your relocation.',
        image: '/generated/office-moving.webp'
      },
      {
        slug: 'commercial-vs-residential-movers',
        title: 'Commercial vs Residential Movers: What\'s the Difference?',
        excerpt: 'Not all movers are the same. Here\'s why commercial moves require different skills and equipment.',
        image: '/generated/warehouse-relocation.webp'
      },
      {
        slug: 'what-to-look-for-in-commercial-movers',
        title: 'What to Look for When Hiring Commercial Movers in Idaho',
        excerpt: 'Choosing the wrong mover can derail your business. Here are the key questions to ask before signing a contract.',
        image: '/generated/retail-moving.webp'
      },
      {
        slug: 'employee-communication-during-office-move',
        title: 'How to Keep Employees Informed During an Office Move',
        excerpt: 'Good communication makes all the difference. Here\'s how to keep your team in the loop during relocation.',
        image: '/generated/hero.webp'
      }
    ]
  },
  'boise-construction-debris-removal': {
    businessName: 'Construction Debris Removal Pros',
    domain: 'boise-construction-debris-removal.com',
    service: 'construction debris removal',
    phone: '(208) 361-1982',
    blogs: [
      {
        slug: 'construction-debris-disposal-rules-boise',
        title: 'Construction Debris Disposal Rules in Boise (What You Need to Know)',
        excerpt: 'Ada County has specific rules about construction waste. Here\'s how to stay compliant and avoid fines.',
        image: '/generated/hero.webp'
      },
      {
        slug: 'types-of-construction-debris',
        title: 'Types of Construction Debris and How Each Is Handled',
        excerpt: 'From concrete to drywall, different materials require different disposal methods. Here\'s the breakdown.',
        image: '/generated/demolition-debris.webp'
      },
      {
        slug: 'dumpster-rental-vs-debris-removal-service',
        title: 'Dumpster Rental vs Debris Removal Service: Which Is Better?',
        excerpt: 'Both options work, but one might save you money depending on your project. Here\'s how to decide.',
        image: '/generated/concrete-removal.webp'
      },
      {
        slug: 'recycling-construction-materials-idaho',
        title: 'Can Construction Materials Be Recycled in Idaho?',
        excerpt: 'A surprising amount of construction debris can be recycled. Here\'s what can be diverted from the landfill.',
        image: '/generated/roofing-debris.webp'
      },
      {
        slug: 'keeping-job-sites-clean',
        title: 'Why Keeping Job Sites Clean Matters More Than You Think',
        excerpt: 'A clean job site isn\'t just about looks. It affects safety, efficiency, and your bottom line.',
        image: '/generated/hero.webp'
      }
    ]
  },
  'boise-demolition': {
    businessName: 'Demolition Pros',
    domain: 'boise-demolition.com',
    service: 'demolition',
    phone: '(208) 361-1982',
    blogs: [
      {
        slug: 'demolition-permits-boise-idaho',
        title: 'Do You Need a Demolition Permit in Boise? (Quick Answer)',
        excerpt: 'The permit question trips up a lot of property owners. Here\'s what Boise requires for demolition projects.',
        image: '/generated/hero.webp'
      },
      {
        slug: 'full-vs-partial-demolition',
        title: 'Full Demolition vs Partial Demolition: Which Do You Need?',
        excerpt: 'Sometimes you need to tear everything down. Sometimes just part. Here\'s how to decide.',
        image: '/generated/residential-demolition.webp'
      },
      {
        slug: 'what-happens-during-demolition',
        title: 'What Actually Happens During a Demolition Project?',
        excerpt: 'Curious about the demolition process? Here\'s a step-by-step look at what goes into tearing down a structure.',
        image: '/generated/commercial-demolition.webp'
      },
      {
        slug: 'preparing-property-for-demolition',
        title: 'How to Prepare Your Property for Demolition',
        excerpt: 'A little prep work goes a long way. Here\'s what to handle before the demo crew arrives.',
        image: '/generated/interior-demolition.webp'
      },
      {
        slug: 'demolition-safety-what-homeowners-should-know',
        title: 'Demolition Safety: What Homeowners Should Know',
        excerpt: 'Demolition involves real risks. Here\'s what to expect and how professionals keep everyone safe.',
        image: '/generated/hero.webp'
      }
    ]
  },
  'boise-dumpster-rental': {
    businessName: 'Dumpster Rental Pros',
    domain: 'boise-dumpster-rental.com',
    service: 'dumpster rental',
    phone: '(208) 361-1982',
    blogs: [
      {
        slug: 'what-size-dumpster-do-i-need',
        title: 'What Size Dumpster Do I Need? (Simple Guide)',
        excerpt: 'Choosing the wrong dumpster size is a common mistake. Here\'s how to get it right the first time.',
        image: '/generated/hero.webp'
      },
      {
        slug: 'dumpster-rental-cost-boise',
        title: 'Dumpster Rental Costs in Boise: What to Expect',
        excerpt: 'Prices vary based on size, duration, and what you\'re tossing. Here\'s a realistic breakdown.',
        image: '/generated/roll-off-dumpster.webp'
      },
      {
        slug: 'what-can-go-in-a-dumpster',
        title: 'What Can (and Can\'t) Go in a Dumpster?',
        excerpt: 'Some items are prohibited for good reason. Here\'s the complete list of what\'s allowed.',
        image: '/generated/construction-dumpster.webp'
      },
      {
        slug: 'where-to-place-dumpster',
        title: 'Where Should You Place Your Dumpster? (Avoid These Mistakes)',
        excerpt: 'The wrong placement can damage your property or violate local rules. Here\'s how to do it right.',
        image: '/generated/residential-dumpster.webp'
      },
      {
        slug: 'how-long-can-i-keep-a-dumpster',
        title: 'How Long Can You Keep a Rental Dumpster?',
        excerpt: 'Rental periods vary, and going over can cost you. Here\'s what to know about timing your rental.',
        image: '/generated/hero.webp'
      }
    ]
  },
  'boise-estate-cleanout': {
    businessName: 'Estate Cleanout Pros',
    domain: 'boise-estate-cleanout.com',
    service: 'estate cleanout',
    phone: '(208) 361-1982',
    blogs: [
      {
        slug: 'how-to-start-estate-cleanout',
        title: 'How to Start an Estate Cleanout (Without Getting Overwhelmed)',
        excerpt: 'Estate cleanouts can feel impossible at first. Here\'s a practical approach to tackle it step by step.',
        image: '/generated/hero.webp'
      },
      {
        slug: 'estate-cleanout-timeline',
        title: 'How Long Does an Estate Cleanout Take?',
        excerpt: 'The timeline depends on several factors. Here\'s a realistic idea of what to expect.',
        image: '/generated/estate-clearing.webp'
      },
      {
        slug: 'what-to-keep-during-estate-cleanout',
        title: 'What to Keep, Donate, and Toss During an Estate Cleanout',
        excerpt: 'Making decisions about a loved one\'s belongings is hard. Here\'s a framework that helps.',
        image: '/generated/home-cleanout.webp'
      },
      {
        slug: 'hiring-estate-cleanout-service',
        title: 'Should You Hire an Estate Cleanout Service? (Honest Assessment)',
        excerpt: 'Sometimes DIY makes sense. Sometimes it doesn\'t. Here\'s how to know when to call for help.',
        image: '/generated/inherited-property.webp'
      },
      {
        slug: 'emotional-side-of-estate-cleanouts',
        title: 'The Emotional Side of Estate Cleanouts (And How to Cope)',
        excerpt: 'Clearing a home isn\'t just physical work. Here\'s how to handle the emotional weight.',
        image: '/generated/hero.webp'
      }
    ]
  },
  'boise-furniture-removal': {
    businessName: 'Furniture Removal Pros',
    domain: 'boise-furniture-removal.com',
    service: 'furniture removal',
    phone: '(208) 361-1982',
    blogs: [
      {
        slug: 'getting-rid-of-old-furniture-boise',
        title: 'Getting Rid of Old Furniture in Boise: Your Options',
        excerpt: 'That old couch has to go somewhere. Here are the best ways to dispose of unwanted furniture.',
        image: '/generated/hero.webp'
      },
      {
        slug: 'furniture-removal-cost-guide',
        title: 'How Much Does Furniture Removal Cost?',
        excerpt: 'Prices depend on what you\'re getting rid of and how much. Here\'s what to budget.',
        image: '/generated/couch-removal.webp'
      },
      {
        slug: 'can-old-furniture-be-donated',
        title: 'Can You Donate Old Furniture in Boise?',
        excerpt: 'Many items can find a second home. Here\'s where to donate and what charities actually accept.',
        image: '/generated/mattress-disposal.webp'
      },
      {
        slug: 'removing-heavy-furniture-safely',
        title: 'How to Remove Heavy Furniture Without Hurting Yourself',
        excerpt: 'Big furniture is awkward and heavy. Here\'s how to move it safely or when to call for backup.',
        image: '/generated/office-furniture.webp'
      },
      {
        slug: 'furniture-disposal-vs-junk-removal',
        title: 'Furniture Disposal vs Full Junk Removal: What\'s the Difference?',
        excerpt: 'Both services haul stuff away, but they work differently. Here\'s which one you actually need.',
        image: '/generated/hero.webp'
      }
    ]
  },
  'boise-hoarding-cleanup': {
    businessName: 'Hoarding Cleanup Pros',
    domain: 'boise-hoarding-cleanup.com',
    service: 'hoarding cleanup',
    phone: '(208) 361-1982',
    blogs: [
      {
        slug: 'understanding-hoarding-disorder',
        title: 'Understanding Hoarding Disorder: What Family Members Should Know',
        excerpt: 'Hoarding isn\'t about being messy. Here\'s what you need to understand before starting a cleanup.',
        image: '/generated/hero.webp'
      },
      {
        slug: 'hoarding-cleanup-process',
        title: 'What to Expect During a Hoarding Cleanup',
        excerpt: 'Professional hoarding cleanup follows a specific process. Here\'s how it typically works.',
        image: '/generated/extreme-hoarding.webp'
      },
      {
        slug: 'helping-hoarder-family-member',
        title: 'How to Help a Family Member Who Hoards',
        excerpt: 'You want to help, but pushing too hard backfires. Here\'s a compassionate approach.',
        image: '/generated/compassionate-cleanup.webp'
      },
      {
        slug: 'hoarding-cleanup-cost-factors',
        title: 'Hoarding Cleanup Costs: What Affects the Price?',
        excerpt: 'Every hoarding situation is different. Here\'s what determines the cost of professional cleanup.',
        image: '/generated/ongoing-maintenance.webp'
      },
      {
        slug: 'after-hoarding-cleanup',
        title: 'After the Cleanup: Preventing Hoarding Relapse',
        excerpt: 'Cleanup is just the first step. Here\'s how to support long-term recovery.',
        image: '/generated/hero.webp'
      }
    ]
  },
  'boise-hot-tub-removal': {
    businessName: 'Hot Tub Removal Pros',
    domain: 'boise-hot-tub-removal.com',
    service: 'hot tub removal',
    phone: '(208) 361-1982',
    blogs: [
      {
        slug: 'hot-tub-removal-process',
        title: 'How Hot Tub Removal Actually Works',
        excerpt: 'Getting rid of a hot tub involves more than just hauling it away. Here\'s the full process.',
        image: '/generated/hero.webp'
      },
      {
        slug: 'hot-tub-removal-cost-boise',
        title: 'Hot Tub Removal Cost in Boise: What to Budget',
        excerpt: 'Prices vary based on access, size, and disposal. Here\'s a realistic cost breakdown.',
        image: '/generated/hot-tub-demolition.webp'
      },
      {
        slug: 'diy-hot-tub-removal',
        title: 'Can You Remove a Hot Tub Yourself? (Honest Answer)',
        excerpt: 'DIY is possible but comes with challenges. Here\'s what you\'d need to do it right.',
        image: '/generated/spa-removal.webp'
      },
      {
        slug: 'preparing-hot-tub-for-removal',
        title: 'How to Prepare Your Hot Tub for Removal',
        excerpt: 'A few steps before removal day makes everything go smoother. Here\'s your checklist.',
        image: '/generated/above-ground-spa.webp'
      },
      {
        slug: 'what-happens-to-old-hot-tubs',
        title: 'What Happens to Hot Tubs After Removal?',
        excerpt: 'Curious where your old spa ends up? Here\'s how hot tubs are typically recycled or disposed.',
        image: '/generated/hero.webp'
      }
    ]
  },
  'boise-junk-removal': {
    businessName: 'Junk Removal Pros',
    domain: 'boise-junk-removal.com',
    service: 'junk removal',
    phone: '(208) 361-1982',
    blogs: [
      {
        slug: 'decluttering-guide-boise',
        title: 'The Boise Homeowner\'s Guide to Decluttering',
        excerpt: 'Finally tackling that clutter? Here\'s a practical room-by-room approach that actually works.',
        image: '/generated/hero.webp'
      },
      {
        slug: 'junk-removal-pricing-explained',
        title: 'Junk Removal Pricing: How It Works',
        excerpt: 'Most people have no idea how junk removal is priced. Here\'s the straightforward explanation.',
        image: '/generated/electronics-ewaste.webp'
      },
      {
        slug: 'what-junk-removal-companies-take',
        title: 'What Will Junk Removal Companies Actually Take?',
        excerpt: 'The short answer: almost everything. Here\'s the full list of items we can haul.',
        image: '/generated/basement-cleanout.webp'
      },
      {
        slug: 'same-day-junk-removal',
        title: 'Same-Day Junk Removal in Boise: When You Need It Gone Now',
        excerpt: 'Sometimes you can\'t wait. Here\'s how same-day junk removal works in the Treasure Valley.',
        image: '/generated/yard-waste.webp'
      },
      {
        slug: 'junk-removal-vs-dumpster-rental',
        title: 'Junk Removal Service vs Dumpster Rental: Which Is Right for You?',
        excerpt: 'Both options get rid of junk, but they work differently. Here\'s how to choose.',
        image: '/generated/hero.webp'
      }
    ]
  },
  'boise-movers': {
    businessName: 'Moving Pros',
    domain: 'boise-movers.com',
    service: 'moving',
    phone: '(208) 361-1982',
    blogs: [
      {
        slug: 'moving-to-boise-guide',
        title: 'Moving to Boise? Here\'s What You Need to Know',
        excerpt: 'Relocating to the Treasure Valley is exciting. Here\'s practical info to help your move go smoothly.',
        image: '/generated/hero.webp'
      },
      {
        slug: 'packing-tips-moving',
        title: 'Packing Tips That Professional Movers Actually Use',
        excerpt: 'Pack like a pro with these techniques we use every day on the job.',
        image: '/generated/local-moving.webp'
      },
      {
        slug: 'how-much-do-movers-cost-boise',
        title: 'How Much Do Movers Cost in Boise?',
        excerpt: 'Moving costs depend on several factors. Here\'s a realistic breakdown of what to expect.',
        image: '/generated/long-distance-moving.webp'
      },
      {
        slug: 'moving-day-checklist',
        title: 'Your Moving Day Checklist (Don\'t Forget These)',
        excerpt: 'Moving day is hectic. This checklist keeps you on track and stress-free.',
        image: '/generated/apartment-moving.webp'
      },
      {
        slug: 'hiring-movers-vs-diy',
        title: 'Hiring Movers vs DIY: The Real Cost Comparison',
        excerpt: 'Renting a truck seems cheaper, but is it really? Here\'s the honest breakdown.',
        image: '/generated/hero.webp'
      }
    ]
  },
  'boise-tire-removal': {
    businessName: 'Tire Removal Pros',
    domain: 'boise-tire-removal.com',
    service: 'tire removal',
    phone: '(208) 361-1982',
    blogs: [
      {
        slug: 'tire-disposal-options-boise',
        title: 'Tire Disposal Options in Boise: What Are Your Choices?',
        excerpt: 'Old tires can\'t just go in the trash. Here are your legal options for tire disposal.',
        image: '/generated/hero.webp'
      },
      {
        slug: 'tire-recycling-idaho',
        title: 'How Tire Recycling Works in Idaho',
        excerpt: 'Old tires get a second life in surprising ways. Here\'s what happens after pickup.',
        image: '/generated/tire-pile.webp'
      },
      {
        slug: 'illegal-tire-dumping-penalties',
        title: 'Illegal Tire Dumping in Idaho: Fines and Consequences',
        excerpt: 'Dumping tires illegally isn\'t worth the risk. Here\'s what you\'re facing if caught.',
        image: '/generated/commercial-tires.webp'
      },
      {
        slug: 'bulk-tire-removal-for-businesses',
        title: 'Bulk Tire Removal for Businesses and Farms',
        excerpt: 'Got a lot of tires to get rid of? Here\'s how bulk tire removal works for commercial clients.',
        image: '/generated/farm-tires.webp'
      },
      {
        slug: 'tire-removal-cost',
        title: 'How Much Does Tire Removal Cost?',
        excerpt: 'Tire disposal fees vary. Here\'s what influences the price and what to budget.',
        image: '/generated/hero.webp'
      }
    ]
  },
  'mobile-home-demolition-boise': {
    businessName: 'Mobile Home Demolition Pros',
    domain: 'mobile-home-demolition-boise.com',
    service: 'mobile home demolition',
    phone: '(208) 361-1982',
    blogs: [
      {
        slug: 'mobile-home-demolition-cost',
        title: 'Mobile Home Demolition Cost: What to Expect in Idaho',
        excerpt: 'Demolishing a mobile home involves several cost factors. Here\'s a realistic breakdown.',
        image: '/generated/hero.webp'
      },
      {
        slug: 'mobile-home-demolition-permits',
        title: 'Do You Need a Permit to Demolish a Mobile Home in Idaho?',
        excerpt: 'Permit requirements vary by location. Here\'s what you need to know in the Treasure Valley.',
        image: '/generated/singlewide-demolition.webp'
      },
      {
        slug: 'preparing-mobile-home-for-demolition',
        title: 'How to Prepare a Mobile Home for Demolition',
        excerpt: 'Several steps happen before the demo crew arrives. Here\'s your preparation checklist.',
        image: '/generated/doublewide-demolition.webp'
      },
      {
        slug: 'what-happens-to-demolished-mobile-homes',
        title: 'What Happens to Materials from Demolished Mobile Homes?',
        excerpt: 'Mobile homes contain recyclable materials. Here\'s how debris is sorted and processed.',
        image: '/generated/manufactured-home.webp'
      },
      {
        slug: 'mobile-home-removal-vs-demolition',
        title: 'Mobile Home Removal vs Demolition: What\'s the Difference?',
        excerpt: 'Both options get the mobile home gone, but they work differently. Here\'s how to choose.',
        image: '/generated/hero.webp'
      }
    ]
  },
  'property-cleanout-boise': {
    businessName: 'Property Cleanout Pros',
    domain: 'property-cleanout-boise.com',
    service: 'property cleanout',
    phone: '(208) 361-1982',
    blogs: [
      {
        slug: 'rental-property-cleanout-guide',
        title: 'Rental Property Cleanout: A Landlord\'s Guide',
        excerpt: 'Tenant left a mess? Here\'s how to get your property ready for the next renter quickly.',
        image: '/generated/hero.webp'
      },
      {
        slug: 'foreclosure-cleanout-process',
        title: 'Foreclosure Cleanout: What Banks and Investors Need to Know',
        excerpt: 'REO properties often need major cleanout work. Here\'s how the process typically works.',
        image: '/generated/foreclosure-cleanout.webp'
      },
      {
        slug: 'property-cleanout-cost-factors',
        title: 'What Affects Property Cleanout Costs?',
        excerpt: 'Every property is different. Here\'s what determines the price of a cleanout.',
        image: '/generated/rental-turnover.webp'
      },
      {
        slug: 'same-day-property-cleanout',
        title: 'Same-Day Property Cleanout: When Time Matters',
        excerpt: 'Sometimes you need a property cleared immediately. Here\'s how rush cleanouts work.',
        image: '/generated/code-violation.webp'
      },
      {
        slug: 'property-cleanout-checklist',
        title: 'Property Cleanout Checklist for Property Managers',
        excerpt: 'Make sure nothing gets missed with this comprehensive cleanout checklist.',
        image: '/generated/hero.webp'
      }
    ]
  }
};

// Blog content generator - creates 800-1200 word articles
function generateBlogContent(siteKey, blogConfig, siteConfig) {
  const { slug, title } = blogConfig;
  const { businessName, service, phone, domain } = siteConfig;

  // Generate unique content based on the blog topic
  const contents = getBlogContentBySlug(slug, businessName, service, phone);
  return contents;
}

function getBlogContentBySlug(slug, businessName, service, phone) {
  const contentMap = {
    // APPLIANCE REMOVAL BLOGS
    'what-to-do-with-old-appliances-boise': `
So you've got an old refrigerator taking up space in your garage. Or maybe a washer that finally gave up after fifteen years of faithful service. Now what?

Getting rid of large appliances isn't as simple as dragging them to the curb. In Boise and throughout the Treasure Valley, you've got several options - and some are definitely better than others.

**Your Main Options for Appliance Disposal**

Let's break down what actually works around here.

**Option 1: Retailer Take-Back Programs**

If you're buying a new appliance, this is often the easiest route. Most major retailers in Boise - Home Depot, Lowe's, Best Buy - offer haul-away service when they deliver your new unit. They'll typically charge $15-50 for this service, but it saves you the hassle entirely.

The catch? They usually won't take your old appliance unless you're buying a replacement. And the appliance needs to be disconnected and ready to go.

**Option 2: Utility Company Rebates**

Here's something a lot of Boise residents don't know about: Idaho Power offers rebates for recycling old refrigerators and freezers. You can get $30-50 just for letting them haul away your old unit. They'll even come pick it up for free.

Why do they do this? Old appliances are energy hogs. That refrigerator from 1995 uses three times more electricity than a new one. By getting these old units out of circulation, the utility company reduces overall energy demand.

**Option 3: Donation**

If your appliance still works, donation is a great option. The Salvation Army and Habitat for Humanity ReStore in Boise both accept working appliances. They'll sometimes even pick up from your home.

Key word here: working. These organizations can't accept broken appliances, and they're pretty strict about condition. A few cosmetic scratches are fine, but the appliance needs to actually function.

**Option 4: Scrap Metal Recyclers**

For appliances that are truly dead, scrap metal recyclers will take them. Places like Pacific Steel & Recycling in Boise accept large appliances. You might even get a few dollars for the metal content.

The downside is you'll need to transport the appliance yourself. And for refrigerators and air conditioners, the refrigerant must be properly evacuated first - that's an EPA requirement.

**Option 5: Professional Appliance Removal**

This is where we come in. A professional removal service handles everything - disconnection, hauling, proper disposal, and recycling. It costs more than DIY options, but you don't have to lift a finger or worry about disposal regulations.

**What About the Curb?**

In Ada County, you can't just leave large appliances at the curb for regular trash pickup. The garbage service won't take them, and leaving them out can result in fines.

Some areas do offer bulk pickup days a few times per year. Check with your local waste service to see when these are scheduled.

**A Word About Refrigerators and Freezers**

These appliances need special handling because of the refrigerant inside. It's illegal to just dump a fridge - the refrigerant must be recovered by a certified technician before disposal.

This is one of the main reasons professional removal makes sense for these items. We handle the refrigerant properly and ensure everything is disposed of according to EPA guidelines.

**The Bottom Line**

Your best choice depends on your situation. If you're buying new, use the retailer's haul-away. If you have a working appliance, donate it. If you need something gone quickly with zero hassle, call us.

Whatever you do, don't let that old appliance sit in your garage for another year. Every option beats that.
`,

    'how-much-does-appliance-removal-cost': `
Let's get straight to the numbers.

In Boise, you'll typically pay between $75 and $200 for professional appliance removal. That's a big range, so let me explain what affects the price.

**The Main Cost Factors**

**1. Type and Size of Appliance**

A small microwave costs less to remove than a side-by-side refrigerator. Makes sense - bigger items require more labor and take up more truck space.

Here's a rough breakdown:
- Small appliances (microwaves, window AC units): $50-75
- Medium appliances (washers, dryers, dishwashers): $75-125
- Large appliances (refrigerators, stoves): $100-175
- Extra large (commercial units, built-in appliances): $150-250

**2. Location and Access**

Getting an appliance out of a ground-floor garage is straightforward. Getting a 300-pound refrigerator down a narrow basement staircase with a turn at the bottom? That's a different story.

Difficult access adds to the price because it takes more time and sometimes requires additional crew members. If your appliance is in a tricky spot, let us know when you call so we can give you an accurate quote.

**3. Number of Items**

Here's where you can actually save money. Most removal services (us included) offer better per-item pricing when you're getting rid of multiple appliances at once.

If you've been putting off that basement cleanout because you have three old appliances down there, bundle them together. You'll pay less per item than removing them separately.

**4. Disconnection Requirements**

Most appliance removal services assume the item is already disconnected. If your washer is still hooked up to the water lines, or your stove is connected to gas, that's additional work.

We can handle disconnection, but it adds to the cost. If you're comfortable doing it yourself (electric appliances are usually straightforward), you'll save money.

**Comparing Your Options**

Professional removal isn't the only way to go. Here's how the costs stack up:

**DIY with Truck Rental**: $50-100 plus your time and effort. You'll need someone to help with heavy items. And you'll need to find a proper disposal facility that accepts appliances.

**Retailer Haul-Away**: $15-50 but only when buying new. Can't use this option for getting rid of appliances without a purchase.

**Utility Rebate Programs**: Free (and you get paid) but only for refrigerators and freezers. Idaho Power offers $30-50 for qualifying units.

**Scrap Metal Recyclers**: Free or you might make a few dollars. You need to transport it yourself and handle refrigerant removal for fridges and AC units.

**Professional Removal**: $75-200. We do all the work, handle disposal properly, and you're done in one appointment.

**What's Included in Professional Removal?**

When you hire a legitimate appliance removal service, you should get:
- Pickup from wherever the appliance is located
- All labor and loading
- Proper transportation
- Responsible disposal and recycling
- Same-day or next-day service availability

Some companies charge extra for stairs, long carries, or same-day service. We don't nickel and dime - the price we quote is the price you pay.

**Getting an Accurate Quote**

The best way to know exactly what you'll pay is to describe your situation honestly when you call. Tell us:
- What appliance(s) you have
- Where they're located
- Whether they're connected or disconnected
- Any access challenges

With that information, we can give you a firm price before we show up. No surprises.

**Is Professional Removal Worth It?**

That depends on your situation. If you have a truck, a strong friend, and time to deal with disposal facilities, DIY can save money.

But if you value your time, don't want to risk injury moving heavy items, or just want the problem solved today, professional removal is usually worth every penny.

Most of our customers tell us the same thing: "I should have called sooner."
`,

    'can-you-recycle-old-refrigerators': `
Short answer: yes, you can - and you probably should.

Old refrigerators are actually required to be recycled in most cases because of the refrigerant inside. But beyond the legal requirements, recycling makes sense for environmental and practical reasons.

**What's Inside That Old Fridge?**

A typical refrigerator contains:
- Steel (the case and internal components)
- Plastic (liners, shelves, drawers)
- Copper (tubing and wiring)
- Aluminum (heat exchangers)
- Glass (shelves)
- Refrigerant (the cooling chemical)
- Foam insulation (often containing blowing agents)

About 80% of a refrigerator can be recycled. The steel alone makes it worthwhile - there's about 120 pounds of steel in an average fridge.

**The Refrigerant Issue**

This is the critical part. Old refrigerators contain refrigerant chemicals that damage the ozone layer and contribute to climate change. We're talking about CFCs, HCFCs, or HFCs depending on when the fridge was made.

It's illegal to release these chemicals into the atmosphere. Before any refrigerator can be scrapped or recycled, the refrigerant must be recovered by a certified technician. This isn't optional - it's federal law under the Clean Air Act.

**Your Recycling Options in Idaho**

**Idaho Power Rebate Program**

If you have an old refrigerator or freezer, Idaho Power will:
- Pick it up from your home for free
- Pay you $30-50 for the unit
- Handle all the recycling properly

There are some requirements. The unit must be between 10 and 30 cubic feet, plugged in and working, and you need to be an Idaho Power customer. They don't take commercial units or units with broken seals.

This is genuinely the best deal if you qualify. You get paid to have someone else do all the work.

**Scrap Metal Recyclers**

Facilities like Pacific Steel & Recycling in Boise accept refrigerators. However, you'll need to either have the refrigerant removed first or use a facility that's certified to handle it.

Some scrap yards charge a fee for refrigerator processing because of the refrigerant handling requirement. Others might give you a small payment for the metal value. Call ahead to confirm their policy.

**Professional Removal Services**

We pick up refrigerators all the time and ensure they're recycled properly. The refrigerant gets recovered, the components get sorted, and the materials find new life.

This option makes sense when you don't qualify for the utility rebate or when you have multiple items to remove at once.

**What Happens During Recycling?**

Here's the typical process:

1. **Refrigerant Recovery**: A certified tech connects equipment to extract the refrigerant safely. This is stored for proper disposal or reclamation.

2. **Oil Removal**: The compressor contains oil that also needs to be drained and processed.

3. **Dismantling**: The fridge is taken apart to separate materials.

4. **Foam Processing**: The insulation foam often contains blowing agents that need to be captured. Specialized equipment handles this.

5. **Material Sorting**: Steel goes one direction, copper another, plastic another. Each material stream gets processed appropriately.

6. **Metal Shredding**: The steel and other metals get shredded and sent to mills for melting and reuse.

**What You Shouldn't Do**

- Don't try to cut refrigerant lines yourself
- Don't leave a fridge at the curb (it's illegal in most areas)
- Don't dump it anywhere - illegal dumping of refrigerators carries serious fines
- Don't sell a non-working fridge to someone planning to "fix it up" unless they're actually qualified

**The Environmental Impact**

Getting old refrigerators properly recycled matters more than you might think. An old fridge uses 3-4 times more electricity than a new Energy Star model. The refrigerant in one old unit, if released, can have the same climate impact as driving a car for several months.

By recycling properly, you're preventing refrigerant release, recovering valuable materials, and (if you use the utility program) getting old energy hogs out of circulation.

**Bottom Line**

Refrigerator recycling in Idaho is straightforward. Use the Idaho Power program if you qualify - it's literally free money. If not, call us or another legitimate removal service to make sure it's handled right.
`,

    'preparing-appliances-for-removal': `
A little prep work before your appliance removal appointment makes everything go smoother. Here's a quick checklist to get ready.

**Refrigerators and Freezers**

**Empty it out.** This seems obvious, but you'd be surprised. Remove all food, ice trays, and anything stored inside. Check the back of the freezer too - there's always something hiding back there.

**Defrost if needed.** If there's significant ice buildup, start defrosting 24 hours before pickup. Put towels down to catch the water. A frozen-solid freezer adds weight and makes a mess.

**Unplug it.** Pull the plug at least a few hours before pickup. This lets any remaining ice melt and the compressor oil settle.

**Clean up water.** There will be some water. Mop it up so we're not tracking it through your house.

**Leave the doors slightly open.** This prevents mold and mildew from developing before pickup.

**Washers and Dryers**

**Disconnect water lines.** For washers, turn off the water valves and disconnect the hoses. Have a bucket ready - water will drain out. If you're not comfortable doing this, let us know and we can handle it.

**Unplug from power.** Dryers especially - make sure they're unplugged.

**For gas dryers:** Don't disconnect the gas line yourself unless you know what you're doing. We can handle this, or you can have a plumber do it beforehand.

**Clean out the lint trap.** Not required, but appreciated.

**Check pockets.** Remove any items from the washer drum. We've found everything from socks to car keys.

**Stoves and Ovens**

**Electric stoves:** Just unplug them. If it's hardwired, let us know.

**Gas stoves:** Have the gas line disconnected by a professional, or let us know you need help with this. Never try to disconnect gas yourself if you're not trained.

**Clean out the oven.** Remove any pans, racks, or stored items.

**Remove the drawer.** Take out the bottom storage drawer if there's anything in it.

**Dishwashers**

**Turn off water supply.** There's usually a valve under the sink.

**Disconnect water line.** Have towels ready for dripping water.

**Unplug or turn off the breaker.** Some dishwashers are hardwired.

**Run a drain cycle.** Run the dishwasher empty one last time to clear out standing water.

**Window AC Units**

**Turn off and unplug.** Let it sit for a few hours so condensation can drain.

**Remove from window.** If it's a small unit you can handle, take it out. Otherwise, we'll remove it.

**Let us know the floor level.** A window unit on the third floor takes more work than one at ground level.

**General Tips for All Appliances**

**Clear a path.** Make sure we can get from the appliance to our truck without obstacles. Move furniture, rugs, or other items that are in the way.

**Measure doorways.** If you're not sure your appliance will fit through a door, measure it. Let us know if there might be access challenges.

**Protect your floors.** For heavy items, consider putting down cardboard or old towels on hardwood or tile floors.

**Secure pets.** Dogs especially get excited when strangers come in. Put them in another room during the removal.

**Point out any damage.** If there's existing damage to walls or floors near the appliance, show us before we start. This avoids any confusion later.

**Be home (or have someone there).** We need access to the appliance and someone to confirm the job is done.

**What If You Can't Prep?**

If you're unable to do this prep work - maybe you're elderly, have physical limitations, or just don't have time - that's okay. Let us know when you schedule, and we can discuss handling the disconnection and prep as part of the service.

The goal is a smooth removal with no surprises. A few minutes of preparation helps make that happen.
`,

    'why-diy-appliance-removal-is-risky': `
I get it. You've got a truck, a strong friend, and that old fridge needs to go. Why pay someone when you can do it yourself?

Sometimes DIY makes sense. But before you grab your dolly, let's talk about what you're really getting into.

**The Weight Problem**

A typical side-by-side refrigerator weighs 250-350 pounds. A washer or dryer runs 150-200 pounds. These aren't just heavy - they're awkward heavy.

Professional movers train specifically for this. We use proper lifting techniques, the right equipment, and we do this every day. Your back isn't used to this kind of strain.

I can't count how many times customers have told me they hurt themselves trying to move an appliance. Herniated discs, pulled muscles, dropped appliances on feet - these aren't rare occurrences.

**The Damage Factor**

Heavy appliances moving through your home can damage:
- Hardwood floors (scratches, dents)
- Tile (cracks from impact)
- Door frames (scuffed or dented)
- Walls (holes, scrapes)
- Stairs (damaged treads)

Professional removers use moving blankets, furniture sliders, and techniques to navigate tight spaces. We also have insurance. If something does get damaged, it's covered.

When you do it yourself, any damage is on you. That scratch across your hardwood? That's coming out of your pocket.

**The Disposal Challenge**

Let's say you successfully get the appliance into your truck without injury or damage. Now what?

You can't just take it to the dump. Most transfer stations have specific rules about appliances. Refrigerators and air conditioners need refrigerant removal first. Some facilities charge fees. Some won't take certain items at all.

Have you called ahead to confirm where you can take it? Do you know the hours and fees? Do you have a way to unload it when you get there?

Many people don't think this through until they're sitting in a truck with an old fridge, driving around trying to figure out where to take it.

**The Refrigerant Issue**

If you're removing a refrigerator, freezer, or air conditioner, there's refrigerant inside. It's illegal to release this into the atmosphere - we're talking federal Clean Air Act violations.

The refrigerant must be recovered by a certified technician before disposal. Do you have that certification? Do you have the equipment? Didn't think so.

This is why legitimate recycling facilities either charge a processing fee or have certified staff handle the refrigerant. It's not something you can just ignore.

**When DIY Makes Sense**

All that said, DIY can work in certain situations:

- **Small appliances.** A microwave or window AC unit that you can carry yourself? Go for it.

- **You're already renting a truck.** If you're doing a full cleanout and have a truck anyway, adding an appliance makes sense.

- **The appliance is already outside.** If it's sitting in the garage or on the porch, loading is much simpler.

- **You have the right help.** Two strong adults who've done this before can handle most appliances safely.

- **You know where it's going.** You've already called the recycling facility, confirmed they'll take it, and know their procedures.

**The Real Cost Comparison**

Let's do the math:
- Truck rental: $30-50
- Gas: $10-20
- Disposal fees: $20-50
- Your time: 2-3 hours minimum
- Risk of injury: Priceless (in a bad way)
- Risk of property damage: Potentially hundreds

Professional removal: $75-150, done in 15 minutes, no risk to you.

For many people, the professional route actually costs about the same when you factor in everything - and it costs less in time, stress, and potential medical bills.

**The Bottom Line**

I'm not saying you can't do this yourself. Plenty of people do, successfully.

But go in with your eyes open. Know the weight of what you're dealing with. Have a plan for disposal. Protect your back and your floors.

And if any of this sounds like more than you want to deal with? That's exactly why we're here.
`,

    // COMMERCIAL MOVERS BLOGS
    'planning-office-move-boise': `
Moving your business is a big deal. Unlike a home move where inconvenience is temporary, an office move affects your operations, your employees, and potentially your revenue.

The good news? With proper planning, you can minimize disruption and actually use the move as an opportunity to improve how your business functions.

Here's a practical timeline for planning your Boise office relocation.

**12-16 Weeks Before: The Foundation**

**Assemble your move team.** Identify who's responsible for what. You need someone coordinating IT, someone handling employee communication, someone managing the physical move logistics. For smaller offices, this might be one person wearing multiple hats.

**Assess your current space.** What's coming with you? What's staying behind? This is a great time to purge old equipment, outdated files, and furniture you've been meaning to replace. Less stuff to move means lower costs and a cleaner start.

**Create an inventory.** List everything that needs to move. This helps with getting accurate quotes and ensures nothing gets forgotten.

**Start researching movers.** Get quotes from several commercial moving companies. Look for experience with office moves specifically - they're different from residential moves in important ways.

**8-12 Weeks Before: Planning Details**

**Lock in your moving company.** The good ones book up, especially during summer months and end-of-month dates.

**Plan your IT infrastructure.** This is usually the most complex part. Your network, servers, phone systems - all need to be set up at the new location. Start coordinating with your IT team or provider now.

**Notify vendors and clients.** Anyone who sends you mail, delivers products, or visits your office needs to know about the move. Start this communication early.

**Order new business materials.** Business cards, letterhead, marketing materials with your new address - get these ordered so they're ready when you move.

**Update your online presence.** Plan for updating your website, Google Business listing, social media, and directory listings. These should change the day you move.

**4-8 Weeks Before: Getting Specific**

**Create a floor plan.** Know where everything is going in the new space. This includes furniture placement, workstation assignments, and equipment locations. Share this with your moving company.

**Communicate with employees.** People have questions and concerns about moves. Address them proactively. What changes for them? Will they have the same workspace? What's the parking situation?

**Handle utilities and services.** Schedule disconnection at your old location and connection at the new one. Don't forget internet, phone, security systems, and any specialized services.

**Coordinate building access.** Make sure your moving company can access both buildings when needed. Get loading dock schedules, elevator reservations, and any required insurance certificates.

**1-4 Weeks Before: Final Preparation**

**Pack non-essential items.** Things you won't need until after the move can be boxed up early. This spreads the work out and identifies issues before crunch time.

**Back up everything.** All computer data, all files. Do this even if you think it's already backed up. Then verify the backup works.

**Confirm all arrangements.** Call your moving company, IT provider, and new building management to confirm dates and times. Make sure everyone's on the same page.

**Prepare an "essentials" box.** Important documents, office supplies, and anything you'll need immediately at the new location. Keep this with you, not on the moving truck.

**Moving Week: Execution**

**Have your team ready.** Someone needs to be at the old location when movers arrive and someone at the new location to direct placement.

**Verify IT is operational.** Before employees show up at the new office, confirm internet, phones, and network access are working.

**Do a walkthrough.** At the old location, check every room, closet, and cabinet. At the new location, verify everything arrived and is placed correctly.

**What Often Gets Overlooked**

- Employee parking arrangements at the new location
- Mail forwarding from the old address
- Updating your lease or security deposit status at the old location
- Key and access card collection from employees
- Cleaning requirements for vacating the old space

**A Note on Timing**

Many businesses try to move over a weekend to minimize disruption. This works, but weekend moves often cost more and require extra planning for building access.

Another approach is a phased move - moving departments on different days. This keeps some operations running while others relocate.

Whatever timing you choose, pad your schedule. Things will take longer than expected. Plan for it.
`,

    'minimize-downtime-during-commercial-move': `
Every hour your business is offline costs money. For some companies, that's hundreds of dollars. For others, it's thousands.

The goal isn't to eliminate downtime entirely - that's usually unrealistic. The goal is to minimize it and plan around it intelligently.

Here's how smart businesses handle this.

**Strategy 1: Phase the Move**

Instead of moving everything at once, move in stages. This might look like:

**Phase 1:** Non-essential storage, archived files, extra furniture
**Phase 2:** Individual departments (one at a time, staggered)
**Phase 3:** Critical operations and IT infrastructure

With this approach, most of your business keeps running while portions move. Yes, it takes longer overall. But total downtime is much less.

**Strategy 2: Establish Temporary Operations**

Can essential staff work remotely during the move? Many businesses set up temporary work arrangements:

- Remote work for employees who can do their jobs from anywhere
- A small temporary space for functions that must be on-site
- Forwarded phones and emails to maintain customer communication

Modern cloud-based systems make this easier than ever. If your team can work from laptops with internet access, they can work from almost anywhere.

**Strategy 3: Move IT First (Or Last)**

Your technology infrastructure is usually the bottleneck. There are two approaches:

**IT First:** Set up all technology at the new location before anyone moves. Employees arrive at a fully functional workspace. The downside is you're paying for and maintaining systems in two locations temporarily.

**IT Last:** Move everything except IT, then migrate technology over a weekend. Employees can be in the new space doing non-computer work while IT gets set up. Then flip the switch.

Which works better depends on your business. Talk to your IT team about what's realistic.

**Strategy 4: Weekend and After-Hours Moving**

Moving during business hours is disruptive. Moving at night or on weekends means:
- Employees aren't trying to work around movers
- Building elevators and loading docks are less contested
- You can take your time setting up before Monday

The tradeoff: weekend moves often cost more, and you're asking your coordination team to work odd hours.

**Strategy 5: Pre-Move Preparation**

A lot of "downtime" isn't moving time - it's setup time. Reduce this by preparing in advance:

- Pre-wire the new space for network and phones before the move
- Have furniture and workstations set up before employees arrive
- Pre-install software on any new computers
- Test everything before it needs to work

The more that's done before the actual move, the faster you're operational afterward.

**Practical Tips That Make a Difference**

**Label everything clearly.** Color-coded labels by department or area mean movers know exactly where things go. This cuts setup time dramatically.

**Keep an "open box" policy.** Employees should pack things they can live without for a week. Anything they might need stays accessible until the last possible moment.

**Have IT on standby.** Your IT person (or provider) should be available for the first few days at the new location. Things will go wrong. Quick fixes keep operations moving.

**Test phones first.** Nothing frustrates customers more than calls that don't go through. Verify your phone system works before anything else.

**Have a backup plan for critical functions.** If something goes wrong with the move, what's your plan? Identify your most critical operations and have contingencies ready.

**Communication Is Key**

Your employees need to know what's happening and when. Your customers need to know how to reach you. Your vendors need to know where to deliver.

Create a communication plan that covers:
- What employees should pack and when
- Work-from-home arrangements during the move
- The new address and any changed phone numbers
- Who to contact with questions

Send this out early and repeat it. People miss things. Overcommunicate during a move.

**Realistic Expectations**

Even with perfect planning, expect some hiccups. The internet provider is late. A piece of equipment doesn't fit where planned. Someone's files got misplaced.

Build buffer time into your schedule. Plan for things to take 20% longer than expected. If everything goes smoothly, you're ahead of schedule. If it doesn't, you have room to recover.

**The Cost of Downtime vs. The Cost of Planning**

Aggressive downtime reduction costs money upfront. Weekend moves cost more. Overlapping leases cost more. Extra IT preparation costs more.

But compare that to the cost of lost business, frustrated customers, and unproductive employees.

For most businesses, investing in reduced downtime pays for itself many times over.
`,

    'commercial-vs-residential-movers': `
They're both moving companies. They both put stuff in trucks and take it somewhere else. So what's the difference?

Quite a bit, actually. And choosing the wrong type of mover for your job can create real problems.

**The Fundamental Difference**

Residential movers are optimized for household goods: furniture, boxes of personal items, appliances. They're used to navigating homes, dealing with stairs and tight doorways, and handling fragile personal belongings.

Commercial movers are optimized for business environments: office furniture, equipment, electronics, files. They understand business operations, work around schedules, and deal with things like modular cubicles and server racks.

Can a residential mover move your office? Technically, yes. Will they do it as efficiently and safely as a commercial specialist? Probably not.

**Equipment and Expertise**

Commercial movers bring different equipment to the job:

**Specialized carts and dollies.** Moving a filing cabinet full of documents requires different equipment than moving a dresser. Commercial movers have specialized carts for heavy equipment, electronics, and bulk file boxes.

**Server and electronics handling.** Moving your IT infrastructure isn't like moving a TV. Servers, network equipment, and computer systems require anti-static handling, specific padding, and knowledge of how to reconnect everything.

**Modular furniture expertise.** Office cubicles and modular workstations need to be disassembled, labeled, and reassembled correctly. This is a specific skill that residential movers typically don't have.

**Library and file carts.** Moving boxes of files efficiently requires specific methods. Commercial movers use library carts and specialized systems to move large volumes of paperwork.

**Understanding Business Operations**

Good commercial movers understand that your business needs to keep running. This affects how they approach the job:

**Phased moving.** They can move one department while another keeps working.

**After-hours scheduling.** They're set up to work nights and weekends when it's less disruptive.

**Floor plan coordination.** They'll work from a floor plan to place everything exactly where it needs to go, so employees can start working immediately.

**IT coordination.** They understand the priority of getting technology operational and will sequence the move accordingly.

A residential mover's approach - "let's get everything in the truck and figure out where it goes later" - doesn't work for businesses.

**Insurance and Liability**

Commercial moves involve different risks:

**Higher equipment values.** Business equipment - computers, servers, specialized machinery - can be worth tens of thousands of dollars.

**Business interruption.** Damage that delays your operations affects revenue.

**Confidential information.** Business files and data require secure handling.

Commercial movers carry insurance appropriate to these risks. They also understand chain-of-custody procedures for sensitive materials.

Residential movers' insurance typically covers household goods at replacement value. That may not adequately cover your commercial assets.

**Pricing Structure**

Residential moves are often priced by the hour or by truck load. Commercial moves are more often quoted as a flat project fee based on detailed inventory and scope.

This difference matters. A commercial move bid accounts for the complexity of the job - cubicle disassembly, after-hours work, IT coordination. An hourly rate doesn't capture this accurately and can lead to surprise costs.

**When Each Type Makes Sense**

**Use a residential mover when:**
- You're moving a home office (literally, one room)
- You have very simple needs - just a few desks and no complex equipment
- Budget is the primary constraint and some risk is acceptable

**Use a commercial mover when:**
- You have more than a few employees
- You're moving business equipment, not just furniture
- IT infrastructure needs to be relocated
- Minimizing downtime is important
- You have confidential files or valuable equipment

**Finding the Right Commercial Mover**

When you're evaluating commercial movers, ask about:

- Their experience with your type of business
- How they handle IT equipment
- Their approach to minimizing business disruption
- What insurance coverage they carry for commercial moves
- References from similar businesses

A mover who's done office relocations for years will give you very different answers than a residential company that occasionally does small business moves.

**The Bottom Line**

The right choice depends on your situation. A sole proprietor moving from one small office to another might do fine with a residential mover.

But for most businesses with any complexity - employees, equipment, IT systems - commercial moving expertise is worth the investment. The efficiency, reduced downtime, and proper handling of business assets more than justify the cost difference.
`,

    'what-to-look-for-in-commercial-movers': `
Hiring the wrong moving company can derail your business. Lost equipment, extended downtime, damaged furniture - I've heard horror stories.

Here's what to look for (and watch out for) when choosing commercial movers in the Treasure Valley.

**Verify They Actually Do Commercial Moves**

Some companies say they do commercial moves but are really residential movers who occasionally take on an office. Ask:

- What percentage of your business is commercial moves?
- How many office relocations have you done in the past year?
- Can you describe a recent commercial project similar to mine?

You want a company that does this regularly, not occasionally.

**Check Insurance and Licensing**

This is non-negotiable. Verify:

**Commercial auto insurance.** Covers accidents during transport.

**General liability insurance.** Covers damage to property during the move.

**Workers' compensation.** Covers injuries to moving crew. Without this, you could be liable if a mover gets hurt on your property.

**Cargo insurance.** Covers the value of items being transported.

Ask for certificates of insurance and verify coverage limits are adequate for your equipment values. Don't just take their word for it.

**Ask About Their Process**

Good commercial movers have established procedures. Ask them to walk you through:

**Pre-move planning.** How do they assess the job? Do they do an on-site survey? How detailed is their inventory process?

**Labeling and tracking.** How do they ensure everything ends up in the right place? What's their system for tracking items?

**IT handling.** How do they handle computers, servers, and network equipment? Do they have specialized staff for electronics?

**Day-of coordination.** Who's in charge on moving day? How do they communicate with your team?

**Post-move support.** What happens if something is damaged or missing? How quickly can they respond?

Vague answers or "we figure it out on the day" should be red flags.

**Get References and Check Them**

Any mover can provide references - but do they give you real ones? Ask for:

- Three to five recent commercial clients
- At least one similar in size to your business
- Permission to actually call them

Then follow through. Ask references about:
- Did the move go as planned?
- Were there any surprises with pricing?
- How did they handle problems?
- Would you hire them again?

**Understand Their Pricing**

Commercial move pricing should be transparent. Be wary of:

**Lowball estimates.** If one quote is significantly lower than others, either they're cutting corners or they'll hit you with add-on charges later.

**Hourly-only pricing.** Commercial moves should generally be quoted as a project, not by the hour. Hourly pricing creates incentive for the job to take longer.

**Vague pricing.** "Around $X" isn't good enough. Get specific numbers for specific services.

**Hidden fees.** Ask specifically about charges for stairs, elevators, long carries, after-hours work, and equipment.

Get the quote in writing with a breakdown of what's included.

**Evaluate Their Communication**

How a company treats you during the sales process tells you a lot about how they'll treat you during the move.

Good signs:
- They respond to inquiries promptly
- They ask detailed questions about your needs
- They're willing to do an on-site assessment
- They explain their process clearly
- They provide a detailed written quote

Bad signs:
- Slow or unresponsive to calls and emails
- Rush to give a quote without understanding the job
- Won't commit to specifics
- Pressure tactics to sign immediately

**Consider Local Experience**

A mover who knows Boise understands:
- Building management requirements at different office complexes
- Traffic patterns for scheduling
- Loading dock situations around town
- Local regulations and permit requirements

This local knowledge can prevent logistical headaches.

**Questions to Ask Every Commercial Mover**

1. How many commercial moves have you completed in the past year?
2. Do you have experience with businesses like mine?
3. Who will supervise my move on-site?
4. How do you handle damage claims?
5. What's your timeline for jobs like this?
6. Can you provide proof of insurance?
7. What's included in your quote, and what costs extra?
8. How do you handle IT equipment?
9. Can I see a sample contract?
10. What happens if the move takes longer than expected?

A professional commercial mover will have clear, confident answers to all of these.

**Trust Your Gut**

After all the research, your instinct matters. Do they seem organized? Professional? Do they listen to your concerns?

Moving your business is stressful enough. Work with people who make you feel confident, not anxious.
`,

    'employee-communication-during-office-move': `
Employees always have concerns during an office move. Will my commute change? Where will I sit? Is my job changing too?

Good communication addresses these concerns directly and prevents the rumor mill from filling in the gaps with misinformation.

Here's how to keep your team informed throughout the relocation process.

**Start Early and Be Transparent**

As soon as the move is confirmed, tell your employees. Even if you don't have all the details yet.

Why? Because they're going to find out anyway. When leadership announces a move at the last minute, employees feel blindsided and distrust builds. When they're informed early, they feel respected and included.

Your initial announcement should cover:
- The fact that you're moving
- The general timeframe
- The reason for the move
- What you know so far
- When you'll share more details
- Who to contact with questions

Be honest about what you don't know yet. "We're still finalizing the floor plan" is better than vague promises.

**Address What Employees Actually Care About**

From an employee's perspective, the move isn't about square footage or lease terms. It's about:

**Commute.** How will this affect my drive? Is parking available? What about public transit access?

**Workspace.** Where will I sit? Will I have the same setup? Am I losing my office or window seat?

**The move itself.** What do I need to pack? When? Will I be expected to work during the move?

**Job security.** Is this move a sign of growth or downsizing? Is my position affected?

Address these directly in your communications. Don't make employees ask or guess.

**Create Multiple Communication Channels**

Different people absorb information differently. Use multiple methods:

**All-hands meetings.** Good for initial announcements and major updates. Allows for questions.

**Email updates.** Provides a written record that people can reference. Good for detailed information and timelines.

**FAQ documents.** Compile common questions and answers in one place. Update it as new questions arise.

**Department meetings.** Allows for more specific discussions about how the move affects each team.

**Open door policy.** Make leadership available for individual conversations about concerns.

**Set Up a Timeline of Communication**

Map out when you'll communicate what:

**8+ weeks out:** Initial announcement, general information, opportunity for questions

**6 weeks out:** Floor plan preview, workspace assignments (if known), parking and commute information

**4 weeks out:** Packing instructions, specific timeline, what to expect on moving day

**2 weeks out:** Final details, reminder of key dates, last chance for questions

**1 week out:** Day-by-day schedule, emergency contacts, any last-minute changes

**Day after:** Orientation at new space, where to find things, who to contact for issues

Stick to this schedule. Consistent communication builds confidence.

**Be Specific About Expectations**

Vague instructions create confusion. Be specific:

Instead of "Pack your desk before moving day," say "Place all personal items in the boxes provided by [date]. Label each box with your name and new workspace number. Leave computer equipment on your desk - IT will handle those separately."

Instead of "The move is Friday," say "Our offices will close at 5pm Thursday. Movers will work Friday and Saturday. Report to the new office at 9am Monday. Your badge will work at the new building starting Monday morning."

**Handle Resistance and Concerns Directly**

Some employees won't be happy about the move. Maybe their commute is worse. Maybe they're losing a private office. Maybe they just don't like change.

Acknowledge these concerns rather than dismissing them. "I understand the new location adds time to your commute, and I appreciate that's frustrating" goes a lot further than "Everyone needs to be flexible."

When you can't address a concern, be honest about it. "The new building doesn't have private offices, and I know that's a change for those of you who had them. We've tried to create quiet zones and booking rooms for when you need privacy."

**Designate a Point Person**

Appoint someone to be the go-to person for move-related questions. This gives employees a clear channel for concerns and keeps everyone else from getting constantly interrupted.

This person should:
- Be available and responsive
- Have accurate information (or know where to get it)
- Escalate significant concerns to decision-makers
- Send regular updates to the team

**After the Move**

Communication doesn't stop when boxes are unpacked. The first week at a new location is disorienting.

Provide:
- A map or guide to the new space
- Contact information for building management, IT support, facilities
- Instructions for common questions (how to book rooms, where supplies are, etc.)
- An easy way to report problems

Check in with teams after a few days. What's working? What's frustrating? Small fixes early prevent lasting complaints.

**The Investment Pays Off**

Good communication takes time. Writing updates, holding meetings, answering questions - it adds up.

But the alternative is worse. Employees who feel uninformed are anxious, unproductive, and more likely to look for other jobs. Rumors spread and trust erodes.

Clear, consistent, honest communication makes the difference between a move that disrupts your team and a move that brings them together.
`,
    // Add more blog content...
    // [I'll continue with more blog content for other sites]
  };

  // Default content structure for blogs not yet defined
  if (!contentMap[slug]) {
    return generateDefaultBlogContent(slug, businessName, service, phone);
  }

  return contentMap[slug];
}

function generateDefaultBlogContent(slug, businessName, service, phone) {
  // Generate placeholder content based on slug patterns
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return `
If you're looking for ${service} services in Boise and the Treasure Valley, you've probably got questions. Let's answer the most common ones.

**Understanding ${title}**

When it comes to ${service}, there's a lot of conflicting information out there. Some websites make it sound complicated. Others oversimplify. Here's the real deal.

First, let's establish what we're actually talking about. ${service.charAt(0).toUpperCase() + service.slice(1)} in the Boise area involves professional handling of your project from start to finish. That means proper equipment, trained crews, and responsible disposal or handling of materials.

**Why This Matters in the Treasure Valley**

Boise, Meridian, Nampa, and the surrounding cities have grown rapidly. With that growth comes more demand for quality ${service} services. But not all providers are created equal.

Some companies cut corners. They might not be properly insured. They might dispose of materials improperly. Or they simply might not have the experience to handle your specific situation.

**What to Look for in a ${service.charAt(0).toUpperCase() + service.slice(1)} Service**

Here's what separates quality providers from the rest:

**Proper licensing and insurance.** This protects you if something goes wrong. Always verify before hiring.

**Clear pricing.** You should know what you're paying before work begins. Surprises are never fun.

**Experience with your type of project.** A company that's done this before will work more efficiently and avoid common mistakes.

**Good communication.** You should be able to reach someone when you have questions.

**Local knowledge.** Understanding Boise-area regulations and facilities makes everything run smoother.

**Common Questions We Get**

**How much does it cost?**

This varies based on the scope of work, access to the area, and other factors. We provide free estimates so you know exactly what to expect before committing.

**How long does it take?**

Most residential projects can be completed in a few hours to a day. Larger commercial projects may take longer. We'll give you a realistic timeline during the estimate.

**Do I need to be there?**

For most jobs, you just need to provide access. We can work around your schedule.

**What areas do you serve?**

We cover Boise, Meridian, Nampa, Caldwell, Eagle, Garden City, Kuna, Star, and surrounding communities in the Treasure Valley.

**Ready to Get Started?**

If you need ${service} services in Boise, we're here to help. Give us a call at ${phone} for a free estimate. No pressure, no obligation - just honest answers to your questions.

We've been serving the Treasure Valley for years, and we treat every job like it's our own property. That's not marketing talk - it's how we've built our reputation.

**The Bottom Line**

Whether you're dealing with a simple project or something more complex, having the right team makes all the difference. We've seen firsthand what happens when people try to cut corners or hire the cheapest option available.

Do your research. Get multiple quotes. Ask questions. And when you're ready, we'd love to earn your business.
`;
}

// Generate blog landing page
function generateBlogLandingPage(siteConfig, blogs) {
  const { businessName, service } = siteConfig;

  return `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '${businessName} Blog | Tips & Guides for ${service.charAt(0).toUpperCase() + service.slice(1)}',
  description: 'Expert tips, guides, and insights about ${service} in Boise and the Treasure Valley. Learn from the pros at ${businessName}.',
  alternates: {
    canonical: 'https://${siteConfig.domain}/blogs',
  },
}

const blogPosts = ${JSON.stringify(blogs, null, 2)}

export default function BlogsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <Image
          src="/generated/hero.webp"
          alt="${businessName} Blog"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/80 to-dark-blue/60" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Tips, guides, and insights about ${service} in the Treasure Valley. Real advice from real professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={\`/blogs/\${post.slug}\`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gunmetal mb-2 hover:text-dark-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-dark-blue font-semibold">
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your ${service} project.
          </p>
          <a
            href="tel:${siteConfig.phone.replace(/[^0-9]/g, '')}"
            className="inline-block bg-brand-yellow hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Call ${siteConfig.phone}
          </a>
        </div>
      </section>
    </main>
  )
}
`;
}

// Generate individual blog post page
function generateBlogPostPage(siteConfig, blog) {
  const { businessName, service, phone } = siteConfig;
  const content = generateBlogContent(siteConfig.domain.split('.')[0].replace('boise-', '').replace('-boise', ''), blog, siteConfig);

  // Convert content to JSX-safe format
  const contentParagraphs = content.trim().split('\n\n').map(p => {
    // Handle headers
    if (p.startsWith('**') && p.endsWith('**')) {
      const headerText = p.replace(/\*\*/g, '');
      return `<h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">${headerText}</h2>`;
    }
    // Handle bullet lists
    if (p.includes('\n- ')) {
      const items = p.split('\n- ').filter(Boolean);
      const listItems = items.map(item => `<li>${item.replace(/\*\*/g, '<strong>').replace(/\*\*/g, '</strong>')}</li>`).join('\n              ');
      return `<ul className="list-disc pl-6 space-y-2 text-gray-600">\n              ${listItems}\n            </ul>`;
    }
    // Regular paragraphs
    const processed = p
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\n- /g, '</p><ul className="list-disc pl-6 space-y-2 text-gray-600"><li>')
      .replace(/\n/g, ' ');
    return `<p className="text-gray-600 leading-relaxed">${processed}</p>`;
  }).join('\n            ');

  return `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '${blog.title.replace(/'/g, "\\'")} | ${businessName}',
  description: '${blog.excerpt.replace(/'/g, "\\'")}',
  alternates: {
    canonical: 'https://${siteConfig.domain}/blogs/${blog.slug}',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="${blog.image}"
          alt="${blog.title.replace(/"/g, '\\"')}"
          fill
          priority
          className="object-cover"
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
            ${blog.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              ${contentParagraphs}
            </div>

            {/* CTA Box */}
            <div className="mt-12 bg-gray-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gunmetal mb-4">
                Need ${service.charAt(0).toUpperCase() + service.slice(1)} Help?
              </h3>
              <p className="text-gray-600 mb-6">
                ${businessName} is here to help with all your ${service} needs in the Treasure Valley.
              </p>
              <a
                href="tel:${phone.replace(/[^0-9]/g, '')}"
                className="inline-block bg-dark-blue hover:bg-light-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call ${phone}
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Articles
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
`;
}

// Main execution
async function main() {
  console.log('Starting blog generation for all microsites...\n');

  let totalBlogs = 0;
  let totalPages = 0;

  for (const [siteKey, siteConfig] of Object.entries(siteConfigs)) {
    const siteDir = path.join(MICROSITES_DIR, siteKey);

    // Check if site directory exists
    if (!fs.existsSync(siteDir)) {
      console.log(`Skipping ${siteKey} - directory not found`);
      continue;
    }

    console.log(`\nProcessing ${siteKey}...`);

    // Create blogs directory
    const blogsDir = path.join(siteDir, 'src', 'app', 'blogs');
    if (!fs.existsSync(blogsDir)) {
      fs.mkdirSync(blogsDir, { recursive: true });
    }

    // Generate blog landing page
    const landingPageContent = generateBlogLandingPage(siteConfig, siteConfig.blogs);
    fs.writeFileSync(path.join(blogsDir, 'page.tsx'), landingPageContent);
    console.log(`  Created blog landing page`);
    totalPages++;

    // Generate individual blog post pages
    for (const blog of siteConfig.blogs) {
      const blogDir = path.join(blogsDir, blog.slug);
      if (!fs.existsSync(blogDir)) {
        fs.mkdirSync(blogDir, { recursive: true });
      }

      const blogContent = generateBlogPostPage(siteConfig, blog);
      fs.writeFileSync(path.join(blogDir, 'page.tsx'), blogContent);
      console.log(`  Created blog: ${blog.slug}`);
      totalBlogs++;
    }
  }

  console.log(`\n========================================`);
  console.log(`Blog generation complete!`);
  console.log(`Total landing pages created: ${totalPages}`);
  console.log(`Total blog posts created: ${totalBlogs}`);
}

main().catch(console.error);
