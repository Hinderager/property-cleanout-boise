const fs = require('fs');
const path = require('path');

// ============================================================================
// NEIGHBORHOOD DATA - Real, researched neighborhoods for Boise metro area
// ============================================================================

const neighborhoodData = {
  boise: {
    'north-end': {
      name: 'North End',
      population: '~15,000',
      landmarks: ['Camels Back Park', 'Hyde Park', 'North End Historic District'],
      streets: ['Harrison Boulevard', '13th Street', 'Bogus Basin Road'],
      features: [
        'Tree-lined historic streets with early 1900s homes',
        'Hyde Park commercial district with local shops and restaurants',
        'Direct access to the Boise Foothills trail system',
        'Annual Hyde Park Street Fair'
      ],
      vibe: 'walkable, historic, artsy',
      uniqueContent: {
        'junk-removal': `The North End's charming historic homes often come with attics, basements, and garages full of decades worth of belongings. Whether you're clearing out a craftsman bungalow near Hyde Park or a larger home off Harrison Boulevard, we handle the heavy lifting so you don't have to.`,
        'hoarding-cleanup': `Many North End homes are older properties with limited storage, which can make clutter accumulate quickly. We've helped families throughout the North End address hoarding situations with discretion. Our unmarked trucks and respectful approach mean your neighbors won't know why we're there.`,
        'estate-cleanout': `Estate cleanouts in the North End often involve homes that have been in families for generations. We take extra care with these properties, understanding that every item might have historical or sentimental significance. We work at your pace to sort through belongings.`,
        'demolition': `North End properties sometimes need interior demolition for renovations or selective exterior demo for additions. We work carefully around historic structures, following all city guidelines for properties in or near the Historic District.`,
        'movers': `Moving into or out of a North End home? The narrow streets, mature trees, and historic architecture require experienced movers who know how to navigate tight spaces without damaging your belongings or the property.`,
        'furniture-removal': `Whether it's a vintage piece that's seen better days or modern furniture that no longer fits your North End cottage, we'll haul it away. Many items get donated to local charities rather than going to the landfill.`,
        'dumpster-rental': `Renovating your North End home? We provide dumpsters in sizes that work for properties with limited driveway space. We'll help you choose the right size and handle any permit requirements for street placement.`,
        'construction-debris-removal': `North End renovation projects generate plenty of debris from old plaster, hardwood flooring, and other materials. We haul away construction waste so you can focus on the renovation, not the cleanup.`,
        'appliance-removal': `Old appliances from North End homes often include vintage pieces that need proper disposal. We handle refrigerators, washers, water heaters, and more with proper recycling and disposal.`,
        'hot-tub-removal': `Hot tub removal in the North End requires careful navigation around mature landscaping and older decks. We disassemble and haul away hot tubs and spas from even the trickiest backyard locations.`,
        'shed-removal': `That old shed behind your North End bungalow has seen better days? We tear down and haul away sheds, playhouses, and small outbuildings throughout the neighborhood.`,
        'carpet-removal': `Pulling up old carpet in your North End home? We'll remove and dispose of your old flooring, including padding and tack strips, leaving you with a clean surface for whatever comes next.`,
        'tire-removal': `Need old tires removed from your North End property? We properly dispose of tires, keeping them out of local waterways and the Boise River nearby.`,
        'commercial-movers': `North End businesses along 13th Street and Hyde Park rely on us for office moves and equipment relocation. We work around your business hours to minimize disruption.`,
        'roofing': `Many North End homes have original or aging roofs that need attention. Our roofing team is experienced with the variety of roof styles found on historic and mid-century homes throughout the neighborhood.`,
        'roof-repair': `From missing shingles to flashing issues, North End roofs face Idaho weather year-round. We provide repairs that protect your historic home without compromising its character.`,
        'roof-replacement': `When your North End home needs a new roof, we offer materials and styles that complement the neighborhood's historic aesthetic while providing modern protection.`
      }
    },
    'bench': {
      name: 'The Bench',
      population: '~25,000',
      landmarks: ['Ann Morrison Park', 'Bench Golf Course', 'Morris Hill Cemetery'],
      streets: ['Vista Avenue', 'Latah Street', 'Roosevelt Street'],
      features: [
        'Elevated plateau with panoramic views of downtown and foothills',
        'Mix of mid-century homes and newer construction',
        'Close proximity to Boise Airport',
        'Direct routes to downtown via Capitol Boulevard'
      ],
      vibe: 'affordable, up-and-coming, diverse',
      uniqueContent: {
        'junk-removal': `The Bench has become one of Boise's most popular neighborhoods for families and first-time buyers. Whether you're moving into a fixer-upper or clearing out a house that's been in the family for years, we're here to help you deal with the junk.`,
        'hoarding-cleanup': `We've worked with Bench families dealing with hoarding situations in homes of all sizes. The neighborhood's mid-century homes often have plenty of storage space where items can accumulate over time. We approach every situation with compassion and discretion.`,
        'estate-cleanout': `Estate cleanouts on the Bench often involve homes where families have lived for decades. We help sort through a lifetime of belongings, coordinating with estate sales companies when needed and ensuring usable items find new homes.`,
        'demolition': `From garage teardowns to full interior gut jobs, we handle demolition projects across the Bench. The area's mix of home ages means we see everything from removing original kitchens to tearing down additions that didn't stand the test of time.`,
        'movers': `Moving to or from the Bench? The neighborhood's central location means shorter trips to most Boise destinations. We know the best routes and can handle moves of any size, from apartments to large family homes.`,
        'furniture-removal': `Couches, mattresses, dressers, entertainment centers - we remove it all from Bench homes. Our team handles the heavy lifting while you focus on what's next.`,
        'dumpster-rental': `Bench homeowners tackling DIY projects or renovations trust us for reliable dumpster delivery. We offer various sizes to fit your driveway and your project needs.`,
        'construction-debris-removal': `Whether you're flipping a Bench house or updating your forever home, we haul away the construction debris so you don't have to make multiple dump runs.`,
        'appliance-removal': `Out with the old, in with the new. We remove old appliances from Bench homes and dispose of them properly, including handling refrigerant removal on cooling units.`,
        'hot-tub-removal': `That hot tub seemed like a good idea years ago, but now it's just taking up space in your Bench backyard. We disconnect, disassemble, and haul away hot tubs of all sizes.`,
        'shed-removal': `Old storage sheds and outbuildings across the Bench have reached the end of their useful life. We demolish and remove these structures, leaving your yard clean.`,
        'carpet-removal': `Updating your Bench home's flooring? We remove old carpet, laminate, and vinyl so you're ready for new flooring installation.`,
        'tire-removal': `Stack of old tires in your Bench garage? We pick up and properly dispose of tires, ensuring they're recycled or disposed of according to regulations.`,
        'commercial-movers': `Vista Avenue businesses rely on us for commercial moving services. We work efficiently to get your business relocated with minimal downtime.`,
        'roofing': `Bench homes face the same Idaho weather as everywhere else, but the neighborhood's elevation means more wind exposure. We provide roofing solutions built to last.`,
        'roof-repair': `From Vista to Latah, Bench homeowners trust us for roof repairs that protect their investment. We address issues quickly before they become bigger problems.`,
        'roof-replacement': `When your Bench home needs a new roof, we provide quality materials and expert installation at fair prices.`
      }
    },
    'downtown': {
      name: 'Downtown Boise',
      population: '~8,000 residents',
      landmarks: ['Idaho State Capitol', 'Boise Centre', 'The Grove', 'Freak Alley Gallery'],
      streets: ['Main Street', 'Capitol Boulevard', 'Idaho Street', '8th Street'],
      features: [
        'Urban core with mix of historic buildings and modern development',
        'Boise River Greenbelt access',
        'Restaurants, nightlife, and cultural venues',
        'Growing residential population in lofts and condos'
      ],
      vibe: 'urban, walkable, vibrant',
      uniqueContent: {
        'junk-removal': `Downtown living is great until you need to get rid of old furniture or accumulated stuff. Hauling junk out of condos, lofts, and apartment buildings downtown comes with its own challenges - elevators, parking, and building rules. We handle all of it.`,
        'hoarding-cleanup': `Downtown apartments and condos can become overwhelmed with clutter just like single-family homes. We've helped downtown residents address hoarding situations discreetly, working within building schedules and access restrictions.`,
        'estate-cleanout': `When a downtown resident passes, their condo or loft often needs to be cleared quickly for building requirements or sale. We coordinate with building management and work efficiently to complete estate cleanouts.`,
        'demolition': `Downtown commercial spaces and older buildings sometimes need interior demolition for tenant improvements or renovations. We handle demo work in compliance with city requirements for the downtown core.`,
        'movers': `Moving downtown means dealing with loading zones, elevators, and tight spaces. Our team has experience navigating downtown's unique challenges, whether you're moving into a new loft or relocating your business.`,
        'furniture-removal': `That sectional that fit your old place doesn't work in your downtown loft. We remove furniture from high-rise buildings, handling stairs, elevators, and tight hallways.`,
        'dumpster-rental': `Downtown businesses and residents can access our dumpster rental services with proper permitting for street placement. We help navigate the requirements for downtown container placement.`,
        'construction-debris-removal': `Tenant improvements and downtown renovations generate debris that needs to go somewhere. We provide efficient hauling for downtown construction sites.`,
        'appliance-removal': `Removing appliances from downtown units requires coordination with building staff. We schedule appropriately and handle the logistics.`,
        'hot-tub-removal': `Rooftop or patio hot tubs in downtown condos require specialized removal. We coordinate access and equipment for these unique situations.`,
        'shed-removal': `While sheds aren't common downtown, we do handle removal of storage structures from properties on the edges of the downtown core.`,
        'carpet-removal': `Updating flooring in your downtown condo? We remove old carpet and flooring materials, working within your building's contractor requirements.`,
        'tire-removal': `Downtown businesses sometimes accumulate tires that need proper disposal. We pick up and recycle tires from commercial properties.`,
        'commercial-movers': `From Main Street retail to Capitol Boulevard offices, we help downtown businesses relocate. We understand the importance of minimizing disruption in the urban core.`,
        'roofing': `Downtown commercial roofing requires specialized expertise. We work on flat roofs, built-up roofing, and membrane systems common on downtown buildings.`,
        'roof-repair': `Leaking flat roof on your downtown building? We respond quickly to prevent water damage to commercial spaces.`,
        'roof-replacement': `Downtown commercial roof replacements require careful planning and execution. We minimize disruption to your business during the project.`
      }
    },
    'harris-ranch': {
      name: 'Harris Ranch',
      population: '~12,000',
      landmarks: ['Idaho Shakespeare Festival', 'Barber Park', 'Boise River'],
      streets: ['Warm Springs Avenue', 'Harris Ranch Road', 'Parkcenter Boulevard'],
      features: [
        'Master-planned community with newer homes',
        'Extensive trail system and parks',
        'Proximity to Lucky Peak and outdoor recreation',
        'Pedestrian-friendly design with community events'
      ],
      vibe: 'family-friendly, outdoor-oriented, upscale',
      uniqueContent: {
        'junk-removal': `Harris Ranch homes are newer, but that doesn't mean they're junk-free. From garage cleanouts to construction debris from upgrades, we help Harris Ranch homeowners keep their properties looking sharp.`,
        'hoarding-cleanup': `Even newer homes in master-planned communities can develop clutter issues. We've helped Harris Ranch families address hoarding situations with the discretion their community expects.`,
        'estate-cleanout': `Harris Ranch estate cleanouts often involve well-maintained homes that need careful handling. We respect the community's standards while efficiently clearing properties.`,
        'demolition': `Harris Ranch homeowners sometimes need demo work for remodeling projects or removing outdoor structures. We work within HOA guidelines and community standards.`,
        'movers': `Moving to Harris Ranch? We know the community's layout and can help you get settled in your new home. Moving out? We'll get you to your next destination efficiently.`,
        'furniture-removal': `Upgrading your Harris Ranch home's furniture? We haul away old pieces, including large sectionals, bedroom sets, and outdoor furniture.`,
        'dumpster-rental': `Home projects in Harris Ranch often require dumpsters. We provide clean containers and respect HOA guidelines for placement and duration.`,
        'construction-debris-removal': `Remodeling your Harris Ranch home? We keep your jobsite clean by hauling away debris regularly throughout your project.`,
        'appliance-removal': `Upgrading appliances in your Harris Ranch kitchen? We remove the old ones, including proper disposal of refrigerants and recycling of metals.`,
        'hot-tub-removal': `Ready to reclaim your Harris Ranch patio? We remove hot tubs and spas, hauling them away so you can enjoy your outdoor space differently.`,
        'shed-removal': `That storage shed in your Harris Ranch backyard no longer fits your needs. We demolish and remove sheds while respecting adjacent landscaping.`,
        'carpet-removal': `Updating flooring in your Harris Ranch home? We remove old carpet and prepare the space for new installation.`,
        'tire-removal': `Accumulated tires from vehicles or landscaping projects? We pick them up and ensure proper disposal.`,
        'commercial-movers': `Harris Ranch area businesses trust us for office relocations and commercial moves. We work around your schedule to minimize business disruption.`,
        'roofing': `Harris Ranch roofs are generally newer but still need maintenance and eventual replacement. We provide roofing services that match the community's quality standards.`,
        'roof-repair': `Storm damage or wear on your Harris Ranch roof? We respond quickly with repairs that protect your investment.`,
        'roof-replacement': `When your Harris Ranch home needs a new roof, we install quality materials that complement the neighborhood's aesthetics.`
      }
    },
    'southeast-boise': {
      name: 'Southeast Boise',
      population: '~20,000',
      landmarks: ['Boise River Greenbelt', 'Warm Springs Golf Course', 'Table Rock'],
      streets: ['Federal Way', 'Warm Springs Avenue', 'Eckert Road'],
      features: [
        'Mix of established neighborhoods and newer development',
        'Easy access to I-84 and highway system',
        'Boise River frontage in many areas',
        'Growing commercial development along Federal Way'
      ],
      vibe: 'convenient, growing, diverse housing options',
      uniqueContent: {
        'junk-removal': `Southeast Boise's mix of older homes and new construction means we see all kinds of junk removal needs. From clearing out established homes near Warm Springs to helping new homeowners deal with move-in debris, we handle it all.`,
        'hoarding-cleanup': `We've worked with Southeast Boise families dealing with hoarding in homes of all types. Whether it's a riverside property or a home near Table Rock, we approach each situation with care and respect.`,
        'estate-cleanout': `Southeast Boise estate cleanouts range from modest homes to larger properties along the river. We tailor our approach to each situation, working with families to handle belongings appropriately.`,
        'demolition': `From garage removals to interior demolition for renovations, we serve Southeast Boise properties with professional demo services. We handle permits and debris removal.`,
        'movers': `Southeast Boise's convenient location makes it a popular choice for families and professionals. We help people move in and out of the area efficiently.`,
        'furniture-removal': `Old furniture cluttering your Southeast Boise home? We remove it all, from basement finds to patio furniture that's seen better days.`,
        'dumpster-rental': `Southeast Boise renovation and cleanout projects get done faster with our dumpster rental services. We deliver and pick up on your schedule.`,
        'construction-debris-removal': `Building or renovating in Southeast Boise? We keep your site clean with regular debris hauling throughout your project.`,
        'appliance-removal': `Replacing appliances in your Southeast Boise home? We haul away the old ones with proper disposal and recycling.`,
        'hot-tub-removal': `Hot tub taking up space in your Southeast Boise backyard? We remove and dispose of spas and hot tubs of all sizes.`,
        'shed-removal': `Old sheds and outbuildings in Southeast Boise get torn down and hauled away. We leave your property clean and ready.`,
        'carpet-removal': `Updating your Southeast Boise home's flooring? We remove old carpet and prepare surfaces for new installation.`,
        'tire-removal': `Tire disposal in Southeast Boise is easy when you call us. We pick up and properly recycle old tires.`,
        'commercial-movers': `Federal Way businesses and Southeast Boise commercial properties trust us for office moves and equipment relocation.`,
        'roofing': `Southeast Boise roofs face the same weather challenges as the rest of the valley. We provide quality roofing services for homes and businesses.`,
        'roof-repair': `Quick roof repairs for Southeast Boise properties. We address issues before they become expensive problems.`,
        'roof-replacement': `Full roof replacement for Southeast Boise homes. Quality materials and expert installation at competitive prices.`
      }
    },
    'west-boise': {
      name: 'West Boise',
      population: '~30,000',
      landmarks: ['Kleiner Park', 'State Street Corridor', 'Boise State University (nearby)'],
      streets: ['State Street', 'Glenwood Street', 'Gary Lane', 'Five Mile Road'],
      features: [
        'Diverse mix of residential and commercial areas',
        'State Street commercial corridor',
        'Proximity to Eagle and Garden City',
        'Growing population with new development'
      ],
      vibe: 'suburban, convenient, family-oriented',
      uniqueContent: {
        'junk-removal': `West Boise keeps growing, and so does the need for junk removal services. From State Street to Five Mile, we help West Boise residents clear out garages, basements, and entire homes.`,
        'hoarding-cleanup': `West Boise families dealing with hoarding situations can count on us for compassionate, professional cleanup services. We work discreetly throughout all West Boise neighborhoods.`,
        'estate-cleanout': `Estate cleanouts in West Boise cover everything from apartments to large family homes. We handle each situation with care, coordinating with families and estate representatives.`,
        'demolition': `West Boise demolition projects range from residential to commercial. We handle tear-downs along State Street and throughout the surrounding neighborhoods.`,
        'movers': `Moving to or from West Boise? Our team knows the area well and can handle moves of any size. We serve the full State Street corridor and surrounding communities.`,
        'furniture-removal': `West Boise furniture removal is what we do. Couches, beds, desks, outdoor sets - if it's too big for your trash, we'll take it.`,
        'dumpster-rental': `West Boise home projects need dumpsters, and we deliver. Various sizes available for renovation, cleanout, or construction debris.`,
        'construction-debris-removal': `West Boise construction sites stay clean with our debris removal services. We haul away materials regularly so you can focus on building.`,
        'appliance-removal': `Old appliances removed from West Boise homes with proper disposal. We handle refrigerators, washers, dryers, water heaters, and more.`,
        'hot-tub-removal': `West Boise hot tub removal made easy. We disconnect, disassemble, and haul away your old spa.`,
        'shed-removal': `Sheds, playhouses, and outbuildings in West Boise demolished and removed. We leave your property clean.`,
        'carpet-removal': `West Boise carpet removal for homeowners updating their flooring. Old carpet, padding, and tack strips all go.`,
        'tire-removal': `Tire pickup and disposal for West Boise properties. We ensure proper recycling of old tires.`,
        'commercial-movers': `State Street businesses trust us for commercial moves. We minimize your downtime and get you operational quickly.`,
        'roofing': `West Boise roofing services for homes and businesses. From repairs to full replacements, we handle it all.`,
        'roof-repair': `Quick response for West Boise roof repairs. We fix issues before they cause interior damage.`,
        'roof-replacement': `New roofs for West Boise homes installed by experienced professionals. Quality work at fair prices.`
      }
    }
  },
  meridian: {
    'ten-mile': {
      name: 'Ten Mile Area',
      population: '~35,000',
      landmarks: ['Ten Mile Crossing', 'The Village at Meridian', 'Settlers Park'],
      streets: ['Ten Mile Road', 'Franklin Road', 'McMillan Road'],
      features: [
        'Rapid growth area with new subdivisions',
        'Major retail and entertainment district',
        'Mix of affordable and upscale housing',
        'Good freeway access via I-84'
      ],
      vibe: 'new, growing, convenient',
      uniqueContent: {
        'junk-removal': `Ten Mile is one of Meridian's fastest-growing areas, with new families moving in regularly. Whether you're dealing with move-in boxes, garage clutter, or need a full cleanout, we're the team to call.`,
        'hoarding-cleanup': `Even new homes in the Ten Mile area can develop hoarding issues. We provide discreet, professional cleanup services that respect our clients' privacy in this close-knit community.`,
        'estate-cleanout': `Estate cleanouts in Ten Mile often involve newer homes that families need cleared quickly. We work efficiently while treating belongings with respect.`,
        'demolition': `Ten Mile area demolition work includes interior demo for remodels and removal of outdoor structures. We handle everything from small projects to major tear-downs.`,
        'movers': `Moving to Ten Mile? You're joining one of Meridian's most popular areas. We'll help you get settled in your new home quickly and efficiently.`,
        'furniture-removal': `Ten Mile furniture removal for old pieces being replaced or items that didn't survive the move. We haul it all away.`,
        'dumpster-rental': `Ten Mile home projects get done with our dumpster rentals. We deliver the right size container for your project.`,
        'construction-debris-removal': `New construction and renovation debris in Ten Mile gets hauled away fast. We keep your jobsite organized.`,
        'appliance-removal': `Upgrading appliances in your Ten Mile home? We remove the old ones with proper recycling and disposal.`,
        'hot-tub-removal': `Ten Mile hot tub removal including disconnect and haul-away. Reclaim your backyard space.`,
        'shed-removal': `Shed and outbuilding removal throughout the Ten Mile area. Demo and hauling included.`,
        'carpet-removal': `Ten Mile carpet removal for homeowners updating floors. We take the old flooring so you're ready for installation.`,
        'tire-removal': `Tire disposal for Ten Mile properties. Proper recycling of all tire types.`,
        'commercial-movers': `Ten Mile Crossing and area businesses trust us for commercial relocations. We work around your schedule.`,
        'roofing': `Ten Mile roofing services for the area's newer homes. Repairs, maintenance, and replacements.`,
        'roof-repair': `Storm damage repairs for Ten Mile homes. We respond quickly to protect your property.`,
        'roof-replacement': `New roof installation for Ten Mile properties. Quality materials and expert workmanship.`
      }
    },
    'lochsa-falls': {
      name: 'Lochsa Falls',
      population: '~7,400',
      landmarks: ['Lochsa Falls Waterfall Features', 'Community Pool', 'Walking Paths'],
      streets: ['Lochsa Falls Loop', 'Timberfalls Way', 'Black Cat Road'],
      features: [
        'Premier planned community in Northwest Meridian',
        'Extensive walking paths and parks',
        'Multiple waterfalls and water features',
        'Family-friendly atmosphere with community amenities'
      ],
      vibe: 'upscale, family-friendly, walkable',
      uniqueContent: {
        'junk-removal': `Lochsa Falls residents take pride in their community, and so do we. We provide clean, professional junk removal services that match the neighborhood's high standards.`,
        'hoarding-cleanup': `When Lochsa Falls families need hoarding cleanup assistance, we provide discreet, respectful service. Our unmarked trucks and professional approach protect your privacy.`,
        'estate-cleanout': `Lochsa Falls estate cleanouts are handled with the care and attention this community expects. We work efficiently while respecting family wishes.`,
        'demolition': `Interior demolition for Lochsa Falls home renovations. We work within HOA guidelines and keep properties clean during the process.`,
        'movers': `Moving into Lochsa Falls? You've chosen one of Meridian's finest communities. We'll help you settle in with professional moving services.`,
        'furniture-removal': `Lochsa Falls furniture removal done right. We take care of your property while removing unwanted items.`,
        'dumpster-rental': `Dumpster rentals for Lochsa Falls home projects, placed according to HOA guidelines. We handle the details.`,
        'construction-debris-removal': `Renovation debris removal for Lochsa Falls homeowners. Keep your project on track with regular hauling.`,
        'appliance-removal': `Professional appliance removal for Lochsa Falls homes. Old units disposed of properly.`,
        'hot-tub-removal': `Hot tub removal in Lochsa Falls with care for surrounding landscaping. We leave your yard clean.`,
        'shed-removal': `Shed removal that respects Lochsa Falls property standards. Demo and cleanup included.`,
        'carpet-removal': `Carpet removal for Lochsa Falls home updates. Old flooring out, ready for new.`,
        'tire-removal': `Tire pickup and proper disposal for Lochsa Falls residents. Quick and easy.`,
        'commercial-movers': `Nearby commercial moves handled professionally. We serve businesses throughout the Meridian area.`,
        'roofing': `Quality roofing for Lochsa Falls homes. Materials and workmanship that match community standards.`,
        'roof-repair': `Prompt roof repairs for Lochsa Falls properties. Protect your investment.`,
        'roof-replacement': `New roofs that complement Lochsa Falls architecture. Expert installation.`
      }
    },
    'paramount': {
      name: 'Paramount',
      population: '~5,000',
      landmarks: ['Paramount Community Park', 'Discovery Park'],
      streets: ['Paramount Lane', 'Linder Road', 'Ustick Road'],
      features: [
        'Established planned community',
        'Well-maintained common areas',
        'Close to Meridian schools',
        'Mix of single-family and townhomes'
      ],
      vibe: 'established, family-oriented, convenient',
      uniqueContent: {
        'junk-removal': `Paramount has been a Meridian favorite for years, and many homes have accumulated plenty of stuff. We help Paramount residents clear out and reclaim their space.`,
        'hoarding-cleanup': `Paramount families dealing with hoarding can count on us for compassionate, professional help. We've served this community with discretion and respect.`,
        'estate-cleanout': `Estate cleanouts in Paramount handled with care. We work with families to clear homes while preserving what matters.`,
        'demolition': `Paramount home renovation often requires demo work. We tear out what needs to go and haul away the debris.`,
        'movers': `Moving to or from Paramount? We know the neighborhood and handle moves of all sizes.`,
        'furniture-removal': `Paramount furniture removal - couches, beds, tables, whatever needs to go. We haul it away.`,
        'dumpster-rental': `Dumpster rentals for Paramount home projects. Right size, right place, on time.`,
        'construction-debris-removal': `Renovation debris removed from Paramount job sites. Regular hauling keeps projects moving.`,
        'appliance-removal': `Old appliances removed from Paramount homes. Proper disposal and recycling.`,
        'hot-tub-removal': `Paramount hot tub removal with full disconnect and haul-away service.`,
        'shed-removal': `Shed and outbuilding removal in Paramount. Complete demo and cleanup.`,
        'carpet-removal': `Paramount carpet removal for flooring updates. Ready for new installation.`,
        'tire-removal': `Tire disposal for Paramount residents. Quick pickup and proper recycling.`,
        'commercial-movers': `Commercial moves near Paramount handled efficiently. Minimal business disruption.`,
        'roofing': `Paramount roofing services from a local team. Repairs and replacements.`,
        'roof-repair': `Fast roof repairs for Paramount homes. Stop leaks before damage spreads.`,
        'roof-replacement': `New roofs for Paramount properties. Quality materials, expert installation.`
      }
    },
    'tuscany': {
      name: 'Tuscany',
      population: '~4,000',
      landmarks: ['Tuscany Subdivision Parks', 'Meridian Elementary Schools'],
      streets: ['Tuscany Drive', 'Eagle Road', 'Victory Road'],
      features: [
        'Italian-inspired planned community',
        'Tree-lined streets',
        'Community pool and parks',
        'Convenient location near Eagle Road'
      ],
      vibe: 'elegant, quiet, well-established',
      uniqueContent: {
        'junk-removal': `Tuscany's elegant homes deserve clean spaces. We help Tuscany residents keep their properties looking their best by hauling away junk, debris, and unwanted items.`,
        'hoarding-cleanup': `When Tuscany families need hoarding cleanup, we provide the discrete, professional service this community expects. Your privacy is protected.`,
        'estate-cleanout': `Tuscany estate cleanouts handled with care and respect. We work with families to clear properties properly.`,
        'demolition': `Interior demo for Tuscany renovations. We work carefully in these quality homes.`,
        'movers': `Moving to Tuscany? Welcome to one of Meridian's most beautiful communities. We'll get you moved in right.`,
        'furniture-removal': `Tuscany furniture removal with care for your property. Old furniture out, space reclaimed.`,
        'dumpster-rental': `Dumpster service for Tuscany home projects. HOA-compliant placement.`,
        'construction-debris-removal': `Renovation debris hauled from Tuscany properties. Clean sites, happy neighbors.`,
        'appliance-removal': `Appliance removal for Tuscany homeowners. Old units properly disposed.`,
        'hot-tub-removal': `Tuscany hot tub removal with landscape protection. Complete service.`,
        'shed-removal': `Shed removal in Tuscany. Demo and haul-away included.`,
        'carpet-removal': `Carpet removal for Tuscany flooring upgrades. Quick and clean.`,
        'tire-removal': `Tire disposal for Tuscany properties. Easy pickup.`,
        'commercial-movers': `Commercial moves in the Meridian area. Professional service.`,
        'roofing': `Quality roofing for Tuscany's elegant homes. Materials that match.`,
        'roof-repair': `Tuscany roof repairs done right. Protect your investment.`,
        'roof-replacement': `New roofs for Tuscany properties. Craftsmanship you can see.`
      }
    }
  },
  nampa: {
    'downtown-nampa': {
      name: 'Downtown Nampa',
      population: '~5,000',
      landmarks: ['Nampa Train Depot', 'Karcher Mall (historic site)', 'Flying M Coffee'],
      streets: ['1st Street South', '11th Avenue', 'Front Street'],
      features: [
        'Historic downtown core',
        'Mix of older homes and commercial buildings',
        'Revitalization efforts bringing new businesses',
        'Canyon County courthouse nearby'
      ],
      vibe: 'historic, revitalizing, community-focused',
      uniqueContent: {
        'junk-removal': `Downtown Nampa's older buildings and homes often need serious cleanouts. We've helped property owners, landlords, and residents clear years worth of accumulated stuff from downtown properties.`,
        'hoarding-cleanup': `Downtown Nampa hoarding situations require special care due to older building layouts. We've helped families address these situations throughout the historic core.`,
        'estate-cleanout': `Many downtown Nampa homes have been in families for generations. We handle estate cleanouts with respect for history while working efficiently.`,
        'demolition': `Downtown Nampa demolition work including interior demo for building renovations. We follow all city requirements for the historic area.`,
        'movers': `Moving to downtown Nampa? You're joining a revitalizing community. We handle moves of all sizes in the downtown area.`,
        'furniture-removal': `Old furniture removed from downtown Nampa properties. We navigate narrow streets and older buildings.`,
        'dumpster-rental': `Dumpsters for downtown Nampa projects, with proper permitting for street placement when needed.`,
        'construction-debris-removal': `Building renovation debris hauled from downtown Nampa sites. We keep projects moving.`,
        'appliance-removal': `Appliance removal from downtown Nampa buildings, including older units from historic properties.`,
        'hot-tub-removal': `Hot tub removal from downtown Nampa properties with tight access handled.`,
        'shed-removal': `Outbuilding removal from downtown Nampa lots. Demo and cleanup included.`,
        'carpet-removal': `Carpet removed from downtown Nampa properties. Ready for new floors.`,
        'tire-removal': `Tire disposal for downtown Nampa. Quick and proper recycling.`,
        'commercial-movers': `Downtown Nampa business relocations. We help the commercial district thrive.`,
        'roofing': `Downtown Nampa roofing for older buildings and homes. Experienced with various roof types.`,
        'roof-repair': `Repairs for downtown Nampa roofs. Stop problems early.`,
        'roof-replacement': `New roofs for downtown Nampa properties. Quality that lasts.`
      }
    },
    'karcher': {
      name: 'Karcher',
      population: '~15,000',
      landmarks: ['Karcher Mall site', 'Northwest Nazarene University (nearby)'],
      streets: ['Karcher Road', 'Midland Boulevard', 'Caldwell Boulevard'],
      features: [
        'Commercial corridor along Karcher Road',
        'Mix of residential neighborhoods',
        'Growing retail and dining options',
        'Easy access to I-84'
      ],
      vibe: 'commercial, convenient, growing',
      uniqueContent: {
        'junk-removal': `The Karcher area sees constant activity, and residents and businesses alike need junk removal services. We serve the entire Karcher Road corridor and surrounding neighborhoods.`,
        'hoarding-cleanup': `Karcher area families dealing with hoarding can count on us for discreet, professional help. We've worked throughout the area.`,
        'estate-cleanout': `Estate cleanouts along Karcher Road and in surrounding neighborhoods. We handle each situation appropriately.`,
        'demolition': `Commercial and residential demo work in the Karcher area. Interior tear-outs to structure removals.`,
        'movers': `Moving to the Karcher area? Great freeway access and plenty of amenities. We'll help you get settled.`,
        'furniture-removal': `Furniture hauled away from Karcher area homes and businesses. Quick and easy.`,
        'dumpster-rental': `Dumpsters for Karcher area projects of all sizes. Delivery and pickup on schedule.`,
        'construction-debris-removal': `Construction debris removed from Karcher area sites. Contractors trust us.`,
        'appliance-removal': `Appliance disposal for Karcher area properties. Proper recycling.`,
        'hot-tub-removal': `Hot tub removal in the Karcher area. Full service.`,
        'shed-removal': `Shed demo and removal for Karcher properties. Clean results.`,
        'carpet-removal': `Carpet removed from Karcher area homes. Prep for new flooring.`,
        'tire-removal': `Tire pickup along the Karcher corridor. Businesses and residents served.`,
        'commercial-movers': `Commercial moves along Karcher Road. Professional service.`,
        'roofing': `Roofing for Karcher area homes and businesses. All types served.`,
        'roof-repair': `Karcher area roof repairs. Quick response.`,
        'roof-replacement': `New roofs for Karcher properties. Quality guaranteed.`
      }
    },
    'lake-lowell': {
      name: 'Lake Lowell',
      population: '~3,000',
      landmarks: ['Lake Lowell', 'Deer Flat National Wildlife Refuge', 'Lake Lowell Park'],
      streets: ['Lake Lowell Avenue', 'Lone Star Road', 'Midway Road'],
      features: [
        'Close to Treasure Valley\'s largest lake',
        'Rural and semi-rural properties',
        'Wildlife and nature access',
        'Growing area with new development'
      ],
      vibe: 'rural, scenic, outdoor-oriented',
      uniqueContent: {
        'junk-removal': `Lake Lowell area properties often have more space and more stuff. Barns, outbuildings, garages - we clear them all. We serve the lake area and surrounding rural properties.`,
        'hoarding-cleanup': `Rural properties near Lake Lowell can hide significant hoarding situations. We've helped families throughout the area address these challenges.`,
        'estate-cleanout': `Lake Lowell estate cleanouts often involve larger properties with multiple buildings. We handle comprehensive cleanouts for the entire property.`,
        'demolition': `Demo work near Lake Lowell including old barns, sheds, and structures. We handle rural property demolition.`,
        'movers': `Moving to the Lake Lowell area for outdoor living? We'll help you relocate to your rural or lakeside property.`,
        'furniture-removal': `Furniture removal from Lake Lowell properties. Even large pieces from rural locations.`,
        'dumpster-rental': `Dumpsters delivered to Lake Lowell area properties. Rural deliveries no problem.`,
        'construction-debris-removal': `Construction cleanup for Lake Lowell new builds and renovations. We haul it away.`,
        'appliance-removal': `Old appliances removed from Lake Lowell homes. Proper disposal always.`,
        'hot-tub-removal': `Hot tub removal near Lake Lowell. Full service including hauling.`,
        'shed-removal': `Old barns, sheds, and outbuildings near Lake Lowell demolished and removed.`,
        'carpet-removal': `Carpet removal for Lake Lowell homes being updated.`,
        'tire-removal': `Tire disposal for Lake Lowell rural properties. Farm tires included.`,
        'commercial-movers': `Commercial equipment moves in the Lake Lowell area. Agricultural and business.`,
        'roofing': `Roofing for Lake Lowell homes. Built to handle weather exposure.`,
        'roof-repair': `Roof repairs for Lake Lowell properties. Storm damage addressed.`,
        'roof-replacement': `New roofs for Lake Lowell homes. Durable materials.`
      }
    },
    'midway': {
      name: 'Midway',
      population: '~8,000',
      landmarks: ['Midway Park', 'Huckleberry Dog Park', 'Southwest Nampa growth area'],
      streets: ['Midway Road', 'Lone Star Road', 'Iowa Avenue'],
      features: [
        'Growing residential area',
        'New development and subdivisions',
        'Community parks and recreation',
        'Future mixed-use development planned'
      ],
      vibe: 'growing, family-oriented, suburban',
      uniqueContent: {
        'junk-removal': `Midway is growing fast, and new homeowners need help clearing out previous owners\' junk or dealing with move-in debris. We serve all the new subdivisions in the Midway area.`,
        'hoarding-cleanup': `Even new communities like those in Midway can develop hoarding situations. We provide discreet cleanup services for Midway families.`,
        'estate-cleanout': `Estate cleanouts in Midway's newer homes and established properties. Professional handling every time.`,
        'demolition': `Demo work for Midway home renovations and property improvements. Clean, efficient work.`,
        'movers': `Moving to one of Midway's new subdivisions? We'll help you get settled in your new Nampa home.`,
        'furniture-removal': `Furniture removal from Midway homes. Old stuff out, new space in.`,
        'dumpster-rental': `Dumpster rentals for Midway construction and cleanout projects. On-time delivery.`,
        'construction-debris-removal': `New construction debris hauled from Midway job sites. Keep building moving.`,
        'appliance-removal': `Midway appliance removal with proper disposal and recycling.`,
        'hot-tub-removal': `Hot tub removal in Midway's growing neighborhoods.`,
        'shed-removal': `Shed removal for Midway properties. Demo and cleanup.`,
        'carpet-removal': `Carpet removal for Midway homeowners updating their floors.`,
        'tire-removal': `Tire pickup for Midway properties. Proper disposal.`,
        'commercial-movers': `Commercial moves in the Midway area. Professional handling.`,
        'roofing': `Midway roofing for new and existing homes. Quality materials.`,
        'roof-repair': `Roof repairs for Midway homes. Quick service.`,
        'roof-replacement': `New roofs for Midway properties. Expert installation.`
      }
    }
  }
};

// ============================================================================
// MICROSITE CONFIGURATIONS
// ============================================================================

const microsites = {
  'boise-junk-removal': {
    domain: 'boise-junk-removal.com',
    serviceName: 'Junk Removal',
    serviceKey: 'junk-removal',
    phone: '(208) 943-5231',
    primaryColor: 'dark-blue',
    accentColor: '[#FFC845]',
    hasQuickQuoteBar: true
  },
  'boise-hoarding-cleanup': {
    domain: 'boise-hoarding-cleanup.com',
    serviceName: 'Hoarding Cleanup',
    serviceKey: 'hoarding-cleanup',
    phone: '(208) 943-5231',
    primaryColor: 'gunmetal',
    accentColor: 'brand-yellow',
    hasQuickQuoteBar: true
  },
  'boise-estate-cleanout': {
    domain: 'boise-estate-cleanout.com',
    serviceName: 'Estate Cleanout',
    serviceKey: 'estate-cleanout',
    phone: '(208) 943-5231',
    primaryColor: 'dark-blue',
    accentColor: '[#FFC845]',
    hasQuickQuoteBar: true
  },
  'boise-demolition': {
    domain: 'boise-demolition.com',
    serviceName: 'Demolition',
    serviceKey: 'demolition',
    phone: '(208) 943-5231',
    primaryColor: 'dark-blue',
    accentColor: '[#FFC845]',
    hasQuickQuoteBar: true
  },
  'boise-movers': {
    domain: 'boise-movers.com',
    serviceName: 'Moving',
    serviceKey: 'movers',
    phone: '(208) 943-5231',
    primaryColor: 'dark-blue',
    accentColor: '[#FFC845]',
    hasQuickQuoteBar: true
  },
  'boise-furniture-removal': {
    domain: 'boise-furniture-removal.com',
    serviceName: 'Furniture Removal',
    serviceKey: 'furniture-removal',
    phone: '(208) 943-5231',
    primaryColor: 'dark-blue',
    accentColor: '[#FFC845]',
    hasQuickQuoteBar: true
  },
  'boise-dumpster-rental': {
    domain: 'boise-dumpster-rental.com',
    serviceName: 'Dumpster Rental',
    serviceKey: 'dumpster-rental',
    phone: '(208) 943-5231',
    primaryColor: 'dark-blue',
    accentColor: '[#FFC845]',
    hasQuickQuoteBar: true
  },
  'boise-construction-debris-removal': {
    domain: 'boise-construction-debris-removal.com',
    serviceName: 'Construction Debris Removal',
    serviceKey: 'construction-debris-removal',
    phone: '(208) 943-5231',
    primaryColor: 'dark-blue',
    accentColor: '[#FFC845]',
    hasQuickQuoteBar: true
  },
  'boise-appliance-removal': {
    domain: 'boise-appliance-removal.com',
    serviceName: 'Appliance Removal',
    serviceKey: 'appliance-removal',
    phone: '(208) 943-5231',
    primaryColor: 'dark-blue',
    accentColor: '[#FFC845]',
    hasQuickQuoteBar: true
  },
  'boise-hot-tub-removal': {
    domain: 'boise-hot-tub-removal.com',
    serviceName: 'Hot Tub Removal',
    serviceKey: 'hot-tub-removal',
    phone: '(208) 943-5231',
    primaryColor: 'dark-blue',
    accentColor: '[#FFC845]',
    hasQuickQuoteBar: true
  },
  'boise-shed-removal': {
    domain: 'boise-shed-removal.com',
    serviceName: 'Shed Removal',
    serviceKey: 'shed-removal',
    phone: '(208) 943-5231',
    primaryColor: 'dark-blue',
    accentColor: '[#FFC845]',
    hasQuickQuoteBar: true
  },
  'boise-carpet-removal': {
    domain: 'boise-carpet-removal.com',
    serviceName: 'Carpet Removal',
    serviceKey: 'carpet-removal',
    phone: '(208) 943-5231',
    primaryColor: 'dark-blue',
    accentColor: '[#FFC845]',
    hasQuickQuoteBar: true
  },
  'boise-tire-removal': {
    domain: 'boise-tire-removal.com',
    serviceName: 'Tire Removal',
    serviceKey: 'tire-removal',
    phone: '(208) 943-5231',
    primaryColor: 'dark-blue',
    accentColor: '[#FFC845]',
    hasQuickQuoteBar: true
  },
  'boise-commercial-movers': {
    domain: 'boise-commercial-movers.com',
    serviceName: 'Commercial Moving',
    serviceKey: 'commercial-movers',
    phone: '(208) 943-5231',
    primaryColor: 'dark-blue',
    accentColor: '[#FFC845]',
    hasQuickQuoteBar: true
  },
  'boise-roofing-company': {
    domain: 'boise-roofing-company.com',
    serviceName: 'Roofing',
    serviceKey: 'roofing',
    phone: '(208) 943-5231',
    primaryColor: 'dark-blue',
    accentColor: '[#FFC845]',
    hasQuickQuoteBar: true
  },
  'boise-roof-repair': {
    domain: 'boise-roof-repair.com',
    serviceName: 'Roof Repair',
    serviceKey: 'roof-repair',
    phone: '(208) 943-5231',
    primaryColor: 'dark-blue',
    accentColor: '[#FFC845]',
    hasQuickQuoteBar: true
  },
  'boise-roof-replacement': {
    domain: 'boise-roof-replacement.com',
    serviceName: 'Roof Replacement',
    serviceKey: 'roof-replacement',
    phone: '(208) 943-5231',
    primaryColor: 'dark-blue',
    accentColor: '[#FFC845]',
    hasQuickQuoteBar: true
  }
};

// City to neighborhood mapping
const cityNeighborhoods = {
  boise: ['north-end', 'bench', 'downtown', 'harris-ranch', 'southeast-boise', 'west-boise'],
  meridian: ['ten-mile', 'lochsa-falls', 'paramount', 'tuscany'],
  nampa: ['downtown-nampa', 'karcher', 'lake-lowell', 'midway']
};

// ============================================================================
// PAGE TEMPLATE GENERATOR
// ============================================================================

function generateNeighborhoodPage(microsite, city, neighborhoodSlug, neighborhood, config) {
  const cityCapitalized = city.charAt(0).toUpperCase() + city.slice(1);
  const phoneClean = config.phone.replace(/[^0-9]/g, '');

  const uniqueContent = neighborhood.uniqueContent[config.serviceKey] ||
    `Professional ${config.serviceName.toLowerCase()} services in ${neighborhood.name}. We serve the entire ${neighborhood.name} area with reliable, affordable service.`;

  // Generate different intro variations to avoid templated feel
  const intros = [
    `Looking for ${config.serviceName.toLowerCase()} in ${neighborhood.name}? You've found the right team.`,
    `Need ${config.serviceName.toLowerCase()} services in the ${neighborhood.name} area? We can help.`,
    `${neighborhood.name} residents trust us for ${config.serviceName.toLowerCase()}. Here's why.`,
    `Serving ${neighborhood.name} with professional ${config.serviceName.toLowerCase()} services.`
  ];
  const intro = intros[Math.floor(Math.random() * intros.length)];

  return `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, MapPin, ArrowRight } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: '${config.serviceName} ${neighborhood.name} ${cityCapitalized} | Top Shelf',
  description: '${config.serviceName} services in ${neighborhood.name}, ${cityCapitalized}, Idaho. Local team, fair prices, same-day service available. Call ${config.phone}.',
  keywords: ['${config.serviceName.toLowerCase()} ${neighborhood.name}', '${config.serviceName.toLowerCase()} ${neighborhood.name} ${cityCapitalized}', '${neighborhood.name} ${city} ${config.serviceName.toLowerCase()}'],
  alternates: {
    canonical: 'https://${config.domain}/cities-served/${city}/${neighborhoodSlug}',
  },
}

export default function ${neighborhood.name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-${config.primaryColor}">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/cities-served" className="hover:text-white">Cities Served</Link>
            <span className="mx-2">/</span>
            <Link href="/cities-served/${city}" className="hover:text-white">${cityCapitalized}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">${neighborhood.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            ${config.serviceName} in ${neighborhood.name}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-6">
            ${intro}
          </p>
          <a
            href="tel:${phoneClean}"
            className="inline-flex items-center gap-2 bg-${config.accentColor} text-${config.primaryColor} px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
          >
            <Phone className="w-5 h-5" />
            ${config.phone}
          </a>
        </div>
      </section>

      <QuickQuoteBar />

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* About the Neighborhood */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-${config.primaryColor} mb-4">
                ${config.serviceName} in ${neighborhood.name}, ${cityCapitalized}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>${uniqueContent}</p>
                <p>
                  ${neighborhood.name} is known for its ${neighborhood.vibe} atmosphere.
                  With about ${neighborhood.population} residents, it's one of ${cityCapitalized}'s most distinctive areas.
                </p>
              </div>
            </div>

            {/* Neighborhood Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-${config.primaryColor} mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Local Landmarks
                </h3>
                <ul className="space-y-2">
                  ${neighborhood.landmarks.map(l => `<li className="text-gray-700">${l}</li>`).join('\n                  ')}
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-${config.primaryColor} mb-4">
                  Key Streets We Serve
                </h3>
                <ul className="space-y-2">
                  ${neighborhood.streets.map(s => `<li className="text-gray-700">${s}</li>`).join('\n                  ')}
                </ul>
              </div>
            </div>

            {/* What We Offer */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-${config.primaryColor} mb-6">
                What We Offer in ${neighborhood.name}
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                ${neighborhood.features.map(f => `
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">${f}</span>
                </li>`).join('')}
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Same-day and next-day service available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Upfront pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Licensed and insured local team</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Free estimates for ${neighborhood.name} residents</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-${config.primaryColor} rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Get a Free Quote in ${neighborhood.name}
              </h3>
              <p className="text-gray-300 mb-6">
                Call now or request a quote online. We'll get back to you quickly.
              </p>
              <a
                href="tel:${phoneClean}"
                className="inline-flex items-center gap-2 bg-${config.accentColor} text-${config.primaryColor} px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                ${config.phone}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Back to City Page */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/cities-served/${city}"
            className="inline-flex items-center gap-2 text-${config.primaryColor} font-medium hover:underline"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to ${cityCapitalized} ${config.serviceName}
          </Link>
        </div>
      </section>
    </main>
  )
}
`;
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

async function generateAllPages() {
  const baseDir = __dirname;
  let totalPages = 0;
  let errors = [];

  console.log('Starting sub-region page generation...\n');

  for (const [micrositeName, config] of Object.entries(microsites)) {
    const micrositeDir = path.join(baseDir, micrositeName);

    // Check if microsite exists
    if (!fs.existsSync(micrositeDir)) {
      console.log(`Skipping ${micrositeName} - directory not found`);
      continue;
    }

    const citiesServedDir = path.join(micrositeDir, 'src', 'app', 'cities-served');

    if (!fs.existsSync(citiesServedDir)) {
      console.log(`Skipping ${micrositeName} - cities-served directory not found`);
      continue;
    }

    console.log(`Processing ${micrositeName}...`);

    // Process each city that has neighborhoods defined
    for (const [city, neighborhoods] of Object.entries(cityNeighborhoods)) {
      const cityDir = path.join(citiesServedDir, city);

      if (!fs.existsSync(cityDir)) {
        console.log(`  Creating city directory: ${city}`);
        fs.mkdirSync(cityDir, { recursive: true });
      }

      // Generate neighborhood pages
      for (const neighborhoodSlug of neighborhoods) {
        const neighborhoodData_entry = neighborhoodData[city]?.[neighborhoodSlug];

        if (!neighborhoodData_entry) {
          console.log(`  Warning: No data for ${city}/${neighborhoodSlug}`);
          continue;
        }

        const neighborhoodDir = path.join(cityDir, neighborhoodSlug);

        try {
          // Create neighborhood directory
          if (!fs.existsSync(neighborhoodDir)) {
            fs.mkdirSync(neighborhoodDir, { recursive: true });
          }

          // Generate page content
          const pageContent = generateNeighborhoodPage(
            micrositeName,
            city,
            neighborhoodSlug,
            neighborhoodData_entry,
            config
          );

          // Write page file
          const pagePath = path.join(neighborhoodDir, 'page.tsx');
          fs.writeFileSync(pagePath, pageContent);
          totalPages++;
          console.log(`  Created: ${city}/${neighborhoodSlug}/page.tsx`);
        } catch (err) {
          errors.push(`${micrositeName}/${city}/${neighborhoodSlug}: ${err.message}`);
          console.error(`  Error creating ${city}/${neighborhoodSlug}: ${err.message}`);
        }
      }
    }
  }

  console.log('\n========================================');
  console.log(`Generation complete!`);
  console.log(`Total pages created: ${totalPages}`);
  if (errors.length > 0) {
    console.log(`Errors: ${errors.length}`);
    errors.forEach(e => console.log(`  - ${e}`));
  }
  console.log('========================================\n');
}

// Run the generator
generateAllPages().catch(console.error);
