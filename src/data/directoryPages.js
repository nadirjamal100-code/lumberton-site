export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Lodging", children: [
    { label: "Hotels & Motels", href: "/lodging/hotels" },
    { label: "Campgrounds & RV Parks", href: "/lodging/campgrounds" },
    { label: "Pet-Friendly Stays", href: "/lodging/pet-friendly" },
    { label: "Suite Stays", href: "/lodging/suites" },
  ] },
  { label: "Dining", href: "/#restaurants" },
  { label: "Shopping", children: [
    { label: "Shopping Centers", href: "/shopping/centers" },
    { label: "Retail & Apparel", href: "/shopping/retail-apparel" },
    { label: "Jewelers", href: "/shopping/jewelers" },
    { label: "Antiques & Thrift", href: "/shopping/antiques-thrift" },
  ] },
  { label: "Attractions", href: "/#programs" },
  { label: "Meeting Facilities", children: [
    { label: "Wedding Venues", href: "/meeting-facilities/weddings" },
    { label: "Banquets & Reunions", href: "/meeting-facilities/banquets" },
    { label: "Meeting Spaces", href: "/meeting-facilities/meeting-spaces" },
    { label: "Group Meetings", href: "/meeting-facilities/group-meetings" },
  ] },
];

const page = (group, title, description, places) => ({ group, title, description, places });

export const DIRECTORY_PAGES = {
  "/lodging/hotels": page("Lodging", "Hotels & Motels", "Find a comfortable place to stay in Lumberton, with convenient access to I-95, local dining and area attractions.", [
    ["Best Western Lumberton", "A convenient full-service hotel stop in Lumberton."], ["Home2 Suites by Hilton Lumberton", "Suite-style rooms with the comforts and flexibility of home."], ["SpringHill Suites Lumberton", "Spacious suites for a relaxed stay near the city’s dining and shopping."]
  ]),
  "/lodging/campgrounds": page("Lodging", "Campgrounds & RV Parks", "Enjoy an outdoor stay around Lumberton, from river recreation to easy RV access just off I-95.", [
    ["Lumber River State Park", "Explore the river, paddling and quiet natural surroundings."], ["Lumberton / I-95 KOA Journey", "A convenient campground stop for road trips and RV travel."], ["Lumber River access", "Plan time on the water and discover the natural scenery around the river."]
  ]),
  "/lodging/pet-friendly": page("Lodging", "Pet-Friendly Stays", "Traveling with a four-legged companion? These local stays are a good place to begin planning. Confirm current pet policies directly before booking.", [
    ["Atkinson Inn & Suites", "A locally listed hotel option in Lumberton."], ["Best Western Lumberton", "A convenient hotel option; ask about current pet room availability."], ["Lumberton / I-95 KOA Journey", "An outdoor-friendly option for travelers with pets; confirm site rules before arrival."]
  ]),
  "/lodging/suites": page("Lodging", "Suite Stays", "Make more room for your trip with suite-style accommodations in Lumberton. Contact each property for current room features and availability.", [
    ["Home2 Suites by Hilton Lumberton", "Suite-style lodging designed with extra room to settle in."], ["SpringHill Suites Lumberton", "A modern all-suite hotel option in Lumberton."], ["Comfort Suites Lumberton", "A local suite-style stay close to the I-95 corridor."]
  ]),
  "/shopping/centers": page("Shopping", "Shopping Centers", "Browse local shopping destinations around Lumberton, from neighborhood plazas to larger retail centers.", [
    ["Biggs Park Mall", "A long-standing Lumberton shopping destination with a mix of local and national retailers."], ["Lumberton Towne Center", "Convenient retail shopping in Lumberton."], ["Twin Oakes Plaza", "A local plaza to include on your shopping trip."]
  ]),
  "/shopping/retail-apparel": page("Shopping", "Retail & Apparel", "Discover clothing, gifts and everyday finds at Lumberton’s local retailers and shopping destinations.", [
    ["Biggs Park Mall", "Browse a variety of stores in one convenient shopping area."], ["Bealls Outlet", "Find apparel, accessories and home goods."], ["Downtown Lumberton", "Explore local businesses and shops in the heart of the city."]
  ]),
  "/shopping/jewelers": page("Shopping", "Jewelers", "Looking for a special gift or a local jeweler? Start with these Lumberton shops.", [
    ["Bob’s Jewel Shop", "A local jewelry shop serving the Lumberton community."], ["McNeill Jewelers", "Browse jewelry and gift selections from a local jeweler."], ["Kay Jewelers", "A national jewelry retailer located in the Lumberton area."]
  ]),
  "/shopping/antiques-thrift": page("Shopping", "Antiques & Thrift", "Take your time browsing vintage finds, pre-loved pieces and one-of-a-kind treasures around Lumberton.", [
    ["Old Timer’z Antique Mall", "Browse antiques and collectibles in Lumberton."], ["Carolina Peddler", "A local stop for antiques, collectibles and unique finds."], ["Second Chance Treasures", "Discover pre-loved items and unexpected finds."]
  ]),
  "/meeting-facilities/weddings": page("Meeting Facilities", "Wedding Venues", "Celebrate your day in Lumberton with venues for ceremonies, receptions and gatherings. Contact each venue for current capacity and availability.", [
    ["Campbelton Grove", "A countryside setting for celebrations and special events."], ["The Barn at Risen Farm", "A barn venue with a relaxed, rural setting."], ["Carolina Ballroom", "An event space for receptions and larger gatherings."]
  ]),
  "/meeting-facilities/banquets": page("Meeting Facilities", "Banquets & Reunions", "Bring family, friends or colleagues together in Lumberton with flexible spaces for shared celebrations.", [
    ["The 402 Venue", "A downtown venue for private events and celebrations."], ["The Kinship NC Event Space", "A welcoming local space for gatherings and community events."], ["Southeastern NC Agricultural Events Center", "A large event facility for gatherings and regional events."]
  ]),
  "/meeting-facilities/meeting-spaces": page("Meeting Facilities", "Meeting Spaces", "Find a practical setting for your next work session, presentation or group gathering in Lumberton.", [
    ["Carolina Ballroom", "Flexible event space for meetings and larger functions."], ["Southeastern NC Agricultural Events Center", "A versatile facility for meetings, exhibitions and events."], ["Holiday Inn Lumberton", "Hotel meeting facilities for business and group events; confirm room options directly."]
  ]),
  "/meeting-facilities/group-meetings": page("Meeting Facilities", "Group Meetings", "Planning a conference, group event or team gathering? These Lumberton venues offer a range of local options.", [
    ["Southeastern NC Agricultural Events Center", "A regional-scale facility for conferences and group events."], ["Carolina Ballroom", "A flexible space for business gatherings and celebrations."], ["Carolina Civic Center Historic Theater", "A distinctive downtown venue for presentations and group programs."]
  ]),
};
