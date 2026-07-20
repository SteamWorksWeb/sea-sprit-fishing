export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // "Month D, YYYY" display format
  dateISO: string; // "YYYY-MM-DD" for sorting & SEO
  image: string;
  imageAlt: string;
  readTime: string; // e.g. "6 min read"
  body: string; // Full article — markdown-style paragraphs separated by \n\n
};

export const blogPosts: BlogPost[] = [
  {
    slug: "half-day-vs-full-day-fishing-charter-ponce-inlet",
    title: "Half-Day vs. Full-Day Charter: Which One Should You Book?",
    excerpt:
      "Not sure whether to book a 5-hour or 8-hour trip? We break down the differences, who each trip is best for, and why most first-timers end up wishing they booked the full day.",
    category: "Fishing Tips",
    date: "July 10, 2026",
    dateISO: "2026-07-10",
    image: "/images/large-group-charter-fishing-catch.jpg",
    imageAlt:
      "Large group of anglers on the Sea Spirit charter boat showing off their catch from a full-day trip",
    readTime: "5 min read",
    body: `When people call us at Sea Spirit Fishing, the first question is almost always the same: "What's the difference between the half-day and the full-day?" It's a great question — and the honest answer is that they're two different experiences, not just two different durations.

## The Half-Day Charter (5 Hours)

Our half-day trips run 5 hours — mornings from 7am to noon, and afternoons from 1pm to 6pm. We depart from Sea Love Marina in Ponce Inlet, run offshore about 12–15 miles, and work the nearshore reefs and hard bottom for whatever's biting.

Half-day trips are ideal for:

- **First-timers and families with young kids.** Five hours is the sweet spot — long enough to get a real offshore experience, short enough that kids don't get restless and adults don't worry about seasickness wearing them out.
- **Folks on a budget.** Starting at $75 per person, the half-day is the most accessible way to experience Florida offshore fishing.
- **People with a packed itinerary.** If you're visiting Daytona Beach for a long weekend and have other plans, a morning half-day lets you fish and still have the afternoon free.

What you'll typically catch on a half-day: red snapper, mangrove snapper, lane snapper, black sea bass, grouper, and triggerfish — depending on the season and conditions.

## The Full-Day Charter (8 Hours)

Our full-day trips run 8 hours, typically departing at 7am and returning by mid-afternoon. The extra time means we can run farther offshore — 25 to 40 miles — to reach the deeper ledges and live bottom where the bigger fish live.

Full-day trips are ideal for:

- **Serious anglers** who want to target larger grouper, amberjack, cobia, and king mackerel.
- **Groups who want more variety.** With more time, we cover more water and more species.
- **People who have never been offshore.** Counter-intuitively, a lot of experienced anglers say the full day is actually the better introduction because you have time to settle in, learn the techniques, and start really catching fish before the day is over.

What you'll typically catch on a full-day: everything from the half-day list, plus bigger red grouper, gag grouper, amberjack, mahi-mahi (when they're running), and king mackerel.

## The Real Difference: Time on the Water

Here's the thing nobody tells you: on any offshore fishing trip, a significant chunk of your time is the run out and the run back. On a half-day, that's roughly 45 minutes each way, leaving about 3.5 hours of actual fishing time. On a full-day, we run farther — but the fishing window expands to 5–6 hours.

More fishing time = more bites = more fish = happier anglers.

## Which Should You Book?

**Book the half-day if:** you're bringing kids under 10, it's your first time offshore and you're uncertain about seasickness, or you have schedule constraints.

**Book the full-day if:** you want to maximize your catch, you're targeting larger species, or you want the full offshore experience without compromise.

**Our honest recommendation:** if you can swing the full day, do it. Almost every angler who's done both says the same thing: "I wish I'd booked the full day sooner."

Ready to pick your trip? Check availability and book online — both trips fill up fast, especially on weekends.`,
  },
  {
    slug: "best-times-fish-ponce-inlet-all-year",
    title: "Best Times to Fish Off Ponce Inlet All Year",
    excerpt:
      "Spring and fall bring the hottest action off the Volusia coast — but the Sea Spirit runs trips all year. Here's what to target by season and why some of our best days happen in January.",
    category: "Fishing Tips",
    date: "June 28, 2026",
    dateISO: "2026-06-28",
    image: "/images/anglers-bottom-fishing-offshore-daytona.jpg",
    imageAlt:
      "Anglers bottom fishing offshore out of Daytona Beach on the Sea Spirit charter",
    readTime: "6 min read",
    body: `Ponce Inlet sits at one of the most productive points on Florida's Atlantic coast. The warm Gulf Stream runs close to shore, the reefs are stacked with fish year-round, and the inlet itself gives us quick access to some of the best bottom structure in the Southeast. But fishing isn't equal all 12 months — here's what to expect by season.

## Winter (December–February): Underrated and Uncrowded

Most people skip winter charters. That's their loss. Water temperatures in December and January still hover in the mid-60s off Ponce Inlet, and that's cold enough to push baitfish schools tight to the reefs — which means the predators follow.

**Best targets:** Sheepshead (peak season), black sea bass, red and mangrove snapper, flounder. On warmer days, grouper stays active deep.

**Why we love winter trips:** No crowds. Calmer seas (generally). More personal service on the boat because it's smaller groups. Some of our most consistent bottom fishing trips of the year happen in January and February.

## Spring (March–May): The Reawakening

This is when things start getting exciting. Water warms, pelagic species start moving north along the Gulf Stream, and the nearshore reefs explode with life.

**Best targets:** King mackerel (March–April is outstanding), Spanish mackerel, cobia (one of the most exciting fights in Florida fishing), mahi-mahi start appearing in April–May, along with consistent snapper and grouper action.

**April and May are arguably our two best months** of the entire year. If you're planning a trip specifically to target variety and volume, these are the months.

## Summer (June–August): Heat, Mahi & Snapper Season

Summer is our busiest season — and for good reason. The water is warm, the Gulf Stream is pumping, and mahi-mahi are often running thick along the weedlines 25–40 miles offshore.

**Best targets:** Mahi-mahi (dolphin fish), red snapper (when season is open), king mackerel, amberjack, and wahoo for our full-day trips that run farthest offshore.

**Note on red snapper season:** Federal red snapper season in the South Atlantic is typically brief — sometimes just a handful of weekends in the summer. We'll fish these aggressively when season opens. Check current regulations or call us for the latest.

**Seasickness note:** Summer seas are generally calmer in the morning but afternoon thunderstorms are common June through September. Our morning departures are strongly recommended during summer.

## Fall (September–November): The Secret Season

Fall is the secret that most visitors never discover. The crowds thin out, prices soften, and the fish are often better than anything you'll see in summer.

**Best targets:** Cobia (second peak run in October–November), king mackerel (trophy season), mahi-mahi still running, and the full suite of bottom fish — snapper, grouper, triggerfish, sea bass.

**October is our staff's personal favorite month** to fish. Water temperature, weather, fish activity, and manageable crowds all align in October in a way that rarely happens the rest of the year.

## Year-Round Species

No matter when you book, you'll have a shot at: mangrove snapper, lane snapper, vermilion snapper, red grouper, black sea bass, and triggerfish. These species live on the reefs year-round and form the backbone of every trip we run.

## The Bottom Line

There's no bad month to fish out of Ponce Inlet — only different experiences. If you're chasing mahi, come in summer. If you want cobia and king mackerel, plan for spring or fall. If you want uncrowded boats and excellent bottom fishing, January is hiding a secret.

Book your trip and let us put you on them.`,
  },
  {
    slug: "what-to-expect-first-deep-sea-charter",
    title: "What to Expect on Your First Deep Sea Charter",
    excerpt:
      "Never been offshore? Here's everything first-timers ask before boarding — what to wear, what to bring, when to be at the dock, and why the 7am departure time is not negotiable.",
    category: "Trip Reports",
    date: "June 14, 2026",
    dateISO: "2026-06-14",
    image: "/images/multiple-anglers-snapper-grouper-catch.jpg",
    imageAlt:
      "Multiple anglers holding snapper and grouper caught on the Sea Spirit fishing charter",
    readTime: "7 min read",
    body: `First offshore fishing trip? Welcome to one of the best decisions you'll make on your Florida vacation. Here's everything nobody tells you until you ask — and some things you're glad you asked before you stepped on the boat.

## What Time Do I Need to Be There?

We depart at 7am sharp. That means you should arrive at Sea Love Marina in Ponce Inlet by 6:30–6:45am. Why? Because we need time to get everyone settled, hand out gear, give the safety briefing, and cast off on schedule. We leave at 7:00am whether everyone is on board or not — we have a full boat of other anglers whose trip doesn't wait for late arrivals.

**How to find us:** 4884 Front St, Ponce Inlet, FL 32127. GPS the marina, not the general Ponce Inlet area. Parking is free and plentiful at the marina.

## What Should I Bring?

**Absolutely bring:**
- Sunscreen (SPF 50+). Reapply every 2 hours. The sun on the water is brutal.
- Polarized sunglasses. Essential for comfort and for spotting fish.
- Seasickness medication if you're prone — take it the night before and morning of, not when you're already sick.
- Food and non-alcoholic drinks. We're offshore for 5–8 hours. Pack a lunch, snacks, and plenty of water.
- A hat with a brim.
- Non-slip shoes or sandals with straps. No flip-flops that can fall off on a moving deck.

**We provide:**
- All fishing gear — rods, reels, bait, tackle
- Ice cooler for your catch
- Life jackets (required by USCG, worn on departure)
- Fish cleaning and filleting at the dock after the trip (for a small fee)

**Don't bring:** Alcohol (not permitted on Florida charter vessels). You can celebrate at dinner with your fillets.

## Will I Get Seasick?

Maybe. Honestly. About 10–15% of first-timers experience some seasickness. Here's how to minimize your chances dramatically:

1. **Take Dramamine or Bonine the night before** your trip and again the morning of. This is the #1 thing experienced anglers do.
2. **Eat a full breakfast** — not a heavy greasy one, but something substantial. An empty stomach makes seasickness worse.
3. **Stay on deck and look at the horizon** once we're underway. Below-deck environments make motion sickness worse.
4. **Stay hydrated.** Dehydration exacerbates nausea.
5. **Wear a Sea-Band acupressure wristband** if you're especially prone.

If you do feel sick: tell a crew member immediately. We've seen it before. We're not judging. We'll get you positioned and comfortable.

## Do I Need Any Experience?

Zero experience required. Our crew is there to bait your hook, show you how to hold the rod, explain when to set the hook, and help you land the fish. Your job is to have fun. We take families with young kids, seniors, and total beginners every single day.

If you've fished before, you'll slot right in. If you haven't, by the end of the trip you'll know more about offshore fishing than most people who've been doing it for years.

## What Will We Catch?

That depends on the season and conditions (see our seasonal guide), but on a typical trip you can expect a mix of: red snapper, mangrove snapper, lane snapper, black sea bass, red grouper, and triggerfish. On full-day trips we also have shots at amberjack, king mackerel, mahi-mahi, and cobia.

**Important:** Florida has size and bag limits on virtually every species we catch. Our crew knows the regulations and enforces them. Everything you take home is legal, measured, and properly documented.

## What Happens With My Fish?

At the end of the trip, your catch stays in our cooler on ice until we return to the dock. For a small fee, the dock crew will fillet your fish — which means you get restaurant-quality portions vacuum-bagged and iced for the drive home.

Yes, you can take your fish home on the plane. IATA allows fish in checked luggage in sealed bags packed in a cooler with ice packs. We recommend calling your airline directly to confirm their specific policy, but it's completely standard.

## The One Thing People Always Say

After their first charter, almost every first-timer says the same thing: "I didn't expect to catch that many fish." And then: "When can we come back?"

That's what we're here for. Book your trip today.`,
  },
  {
    slug: "red-snapper-season-florida-east-coast",
    title: "Red Snapper Season on Florida's East Coast: Your Guide",
    excerpt:
      "Red snapper season is one of the most anticipated events on the Daytona Beach calendar. Learn the dates, limits, regulations, and why the Sea Spirit's reef access puts you right on them every trip.",
    category: "Seasonal",
    date: "May 30, 2026",
    dateISO: "2026-05-30",
    image: "/images/happy-angler-red-snapper-offshore-catch.jpg",
    imageAlt:
      "Happy angler holding a large red snapper caught offshore on the Sea Spirit",
    readTime: "5 min read",
    body: `Of all the fish we chase off Ponce Inlet, none generates more excitement than the red snapper. Bright crimson, firm white flesh, and absolutely delicious on the grill — red snapper is the crown jewel of Florida's offshore fishing calendar. But the season is short, regulated, and competitive. Here's everything you need to know.

## Why Is Red Snapper Season So Restricted?

Red snapper (Lutjanus campechanus) was severely overfished throughout the 20th century, leading to a population collapse in the South Atlantic. NOAA has been managing a recovery program since the 1990s, and it's working — stocks are recovering — but the harvest window remains tightly controlled to protect that progress.

In the South Atlantic (which includes Florida's Atlantic coast), red snapper season is managed separately from the Gulf of Mexico and is typically brief — sometimes just a handful of weekends or designated days during the summer months.

## Current Regulations (Always Verify Before You Fish)

Regulations change year to year, so we always verify with NOAA before the season opens. Generally:

- **Minimum size:** 16 inches total length
- **Bag limit:** 1 fish per person per day during open season on charter/for-hire vessels (this can differ from private boat regulations)
- **Season:** Typically a limited number of days in summer — dates are set annually by NOAA's South Atlantic Fishery Management Council

**Important:** We monitor NOAA announcements closely and notify our guests when season opens. If red snapper season is open on the date of your trip, we absolutely target them. If it's closed, we have plenty of other snapper species to keep the coolers full.

## What Makes Ponce Inlet Perfect for Red Snapper?

The reef structure off Ponce Inlet is exceptional for red snapper. The fish live on hard bottom and artificial reefs at depths of 40–200 feet, and we have decades of local knowledge of exactly where to find them. When the season opens, we go straight to the spots where they stack up — no searching required.

Our 65-foot vessel also lets us run offshore comfortably in conditions that smaller boats can't handle, which means even if there's a light chop, we get to the fish.

## Snapper Alternatives When Season Is Closed

Here's the good news: "snapper fishing" at Ponce Inlet doesn't begin and end with red snapper. We have multiple species running year-round:

- **Mangrove snapper** (gray snapper) — excellent table fare, no federal season restrictions, aggressive biters
- **Lane snapper** — smaller but incredibly fun on light tackle, beautiful pink color
- **Vermilion snapper** (beeliner) — schools up thick on deeper reefs, fast and furious action
- **Yellowtail snapper** — present seasonally, prized eating fish

When red snapper season is closed, these species more than fill the void. Many of our guests who come specifically for mangrove snapper leave with limits of beautiful fish.

## Plan Your Red Snapper Trip

To maximize your chances of fishing during open season:

1. **Book flexible dates if possible.** Since season dates aren't announced until close to summer, flexible travelers have an advantage.
2. **Sign up for our email list** — we notify subscribers immediately when NOAA announces season dates.
3. **Book the full-day trip** for red snapper. The deeper reefs where they concentrate are best reached on our longer offshore runs.

Ready to chase the most prized fish in the South Atlantic? Book your trip and let's go get them.`,
  },
  {
    slug: "family-fishing-charter-tips-kids-daytona-beach",
    title: "Family Fishing Charters: Tips for Bringing Kids Offshore",
    excerpt:
      "Bringing the kids? Great choice. Here's how to prepare your crew for a successful offshore trip — from keeping little ones entertained to making sure everyone comes home with a smile.",
    category: "Fishing Tips",
    date: "May 12, 2026",
    dateISO: "2026-05-12",
    image: "/images/kids-fishing-on-sea-spirit-charter.jpg",
    imageAlt:
      "Kids fishing and having fun on the Sea Spirit charter boat out of Ponce Inlet, FL",
    readTime: "5 min read",
    body: `Some of our favorite trips are the family ones — three generations on the boat, a grandparent helping a grandkid reel in their first fish, the look on a 7-year-old's face when a snapper hits. It never gets old.

But a successful family fishing trip requires a little planning. Here's what we recommend.

## Minimum Age: 3 Years Old

We welcome children as young as 3 years old aboard the Sea Spirit. We do require life jackets for all children, which we supply on board. Kids 12 and under are also required by Florida law to wear life jackets while the boat is underway.

## Choose the Right Trip Length

For families with kids under 8, we strongly recommend the **half-day charter (5 hours)**. This is the sweet spot: long enough for everyone to catch fish and have a real experience, short enough that you get home before anyone's patience runs out.

For older kids and teenagers, the full-day is often a better choice. Teenagers who are into fishing (or who become into fishing about 30 minutes after their first bite) usually want the full-day experience.

## Prepare for Motion Sickness

Kids, like adults, can get seasick. The same rules apply:

- **Bonine or Dramamine Children's Formula** — give it the night before and morning of the trip
- **Light breakfast** — avoid greasy or heavy food the morning of the trip
- **Fresh air and horizon focus** — if a child starts feeling off, get them on deck immediately looking at the horizon
- **Ginger chews** are a natural option many families swear by

Don't skip this step. A seasick child (or adult) makes the whole trip harder for everyone.

## Pack for Kids

Beyond the standard gear adults need, bring for kids:

- **Extra sunscreen** and a spare hat. Kids burn faster and sweat off sunscreen faster.
- **Small snacks they actually like.** Hunger amplifies seasickness. Keep everyone fed.
- **A small handheld game or book** for slow periods. Even on a great fishing day, there are lulls between bites.
- **Waterproof sandals with straps.** Flip-flops fall off on moving decks.
- **Motion sickness bags** — just in case. Our crew has them, but having one in your pocket is smart.

## What to Tell Kids Before the Trip

Set expectations before you board:

- "We're going far offshore on the ocean — it might feel a little wavy"
- "You'll have your own fishing rod and the crew will help you"
- "We might see dolphins, flying fish, and sea turtles on the way out"
- "When a fish grabs your bait, the rod will pull down hard — that's when you reel!"

The dolphin thing is real, by the way. We see dolphins almost every trip, often riding our bow wake. Kids lose their minds over it.

## Safety on the Water

The Sea Spirit is USCG-certified for 48–50 passengers and carries all required safety equipment. Our crew conducts a full safety briefing before departure. Life jackets are required for children and available in all sizes.

Kids love the boat. They love the crew. They love the fish. The #1 thing parents tell us at the dock after a family trip: "When can we come back?"

Book your family charter today. We'll take care of the rest.`,
  },
  {
    slug: "what-fish-can-you-catch-ponce-inlet-charter",
    title: "What Fish Can You Catch on a Ponce Inlet Charter?",
    excerpt:
      "From red snapper to mahi-mahi to grouper, the waters off Ponce Inlet hold an incredible variety. Here's a breakdown of the species you can realistically target — and when.",
    category: "Fishing Tips",
    date: "April 22, 2026",
    dateISO: "2026-04-22",
    image: "/images/full-catch-grouper-snapper-on-boat.jpg",
    imageAlt:
      "Full catch of grouper and snapper displayed on the Sea Spirit charter boat deck",
    readTime: "6 min read",
    body: `One of the first questions people ask when booking a charter is: "What will we actually catch?" It's a fair question. Here's an honest, detailed answer — species by species, with notes on when each is at its best.

## Bottom Fish (Year-Round)

These species live on the reef and hard bottom structure that makes Ponce Inlet so productive. They're available every month of the year and form the backbone of most trips.

**Red Snapper** — The crown jewel. Bright red, firm white flesh, excellent eating. Federal season on the South Atlantic is limited, but when it's open, the bites are fast and the fish are beautiful. Minimum 16".

**Mangrove Snapper (Gray Snapper)** — No season restrictions. Aggressive biters on nearshore and offshore reefs alike. One of the best-eating fish in Florida. Average 12–20" on the reefs offshore.

**Lane Snapper** — Pink and white striped, smaller than mangrove snapper (8–14"), but incredibly fun on light tackle. Schools up thick on the reef.

**Vermilion Snapper (Beeliner)** — Fast, furious action on deeper structure. School fish that hit fast on the drop. Excellent table fare.

**Red Grouper** — The staple of Florida deep sea fishing. Powerful, determined fighters that live in deep rock ledges. Average 2–8 lbs on nearshore structure, much larger offshore. Excellent eating.

**Gag Grouper** — Larger cousin of the red grouper. Typically found deeper (50–120+ feet). A trophy catch.

**Black Sea Bass** — Small but scrappy. Excellent eating. Prolific on nearshore reefs, especially in cooler months.

**Triggerfish** — One of the best-eating fish in the Atlantic, seriously underrated. Pearly white meat, mild flavor. Found on nearly every reef trip.

## Pelagic Species (Seasonal)

These are the roamers — species that follow the Gulf Stream and baitfish and are highly seasonal but thrilling when they're here.

**Mahi-Mahi (Dolphin Fish)** — Late spring through summer. Follow weedlines 25–40 miles offshore. Explosive fighters and absolutely delicious. Full-day trips only.

**King Mackerel** — Spring and fall peak runs. Fast, aggressive predators that can clear 20+ lbs. One of the most exciting strikes in fishing when they cut a bait in half.

**Cobia** — Spring (April–May) and fall (October–November). Follow rays and sharks near the surface. Trophy fish that can hit 60–80 lbs. Once-in-a-season-caliber fish.

**Spanish Mackerel** — Spring and fall. Smaller than king mackerel but extremely fast and fun on light tackle. Often caught in schools.

**Amberjack** — Deep structure dwellers, year-round presence but best targeting in summer and fall. Serious fighters — often called "reef donkeys" for how hard they pull.

**Wahoo** — Occasional, mostly in late fall and winter on our deep runs. One of the fastest fish in the ocean. Rare but special when they show up.

## What to Expect on Your Trip

On a typical **half-day trip** you'll target bottom fish — snapper, grouper, sea bass, triggerfish. Most trips result in mixed bags of 3–6 species depending on the season.

On a **full-day trip**, the same bottom fish apply, plus we have time and range to target pelagic species like mahi, kings, and cobia when they're running.

**Best variety of the year?** April–May and October. Both months have active bottom fish and active pelagic species running simultaneously. It's hard to beat.

Ready to see what's biting? Book your charter and let's go find out.`,
  },
  {
    slug: "grouper-fishing-florida-tips-regulations",
    title: "Grouper Fishing in Florida: Regulations, Tips & Best Spots",
    excerpt:
      "Grouper is one of the most prized catches off Ponce Inlet — and one of the most regulated. Here's what every angler needs to know about seasons, bag limits, and how to maximize your grouper fishing.",
    category: "Fishing Tips",
    date: "April 5, 2026",
    dateISO: "2026-04-05",
    image: "/images/angler-holding-large-grouper-offshore.jpg",
    imageAlt:
      "Angler holding a large grouper caught offshore on the Sea Spirit deep sea fishing charter",
    readTime: "6 min read",
    body: `Few fish in Florida draw anglers offshore like grouper. They're big, they fight hard, they live on structure, and they're outstanding on the table. But grouper are also among the most regulated fish in the South Atlantic — and for good reason. Here's what you need to know before you book.

## Species of Grouper Off Ponce Inlet

**Red Grouper (Epinephelus morio)** — The most common grouper caught on our trips. Reddish-brown, powerful, found on hard bottom from 40–300 feet. Minimum 20" in the South Atlantic on charter boats.

**Gag Grouper (Mycteroperca microlepis)** — Larger and found deeper. One of the most prized table fish in Florida. Brownish-gray with a marble pattern. Minimum 24" in the South Atlantic.

**Black Grouper** — Similar to gag, found on deeper structure. Large fish, excellent eating.

**Scamp Grouper** — Often caught as bycatch, highly regulated.

## Current Regulations (Verify Annually — They Change)

Grouper regulations in the South Atlantic are some of the most complex in recreational fishing. Key points:

- **Red Grouper:** Minimum 20" total length. Bag limit is 3 fish per person per day (included in the 5-fish deepwater grouper aggregate).
- **Gag Grouper:** Minimum 24" total length. Included in the 5-fish aggregate.
- **Combined Deepwater Grouper Aggregate:** The 5-fish bag limit covers multiple grouper species combined — not 5 of each.
- **Seasonal closures** apply for some species at certain times of year.

Our crew knows the regulations cold and enforces them on every trip. You never have to worry about an illegal catch on the Sea Spirit.

## When Is Grouper Best Off Ponce Inlet?

Grouper are present year-round on our offshore reefs — but they're most active and most catchable during certain windows:

- **Winter (Dec–Feb):** Grouper tend to move to deeper water in cooler months but remain catchable. Full-day trips targeting deep structure (80–120 feet) are most productive.
- **Spring (March–May):** Grouper become more active as water warms. One of our best seasons for mixed grouper/snapper bags.
- **Summer (June–August):** Grouper remain on structure but can be more finicky. Early morning trips and deep water produce best.
- **Fall (Sept–Nov):** Often excellent grouper action as fish feed aggressively before winter temperature drops.

## How We Target Grouper

Grouper fishing is all about the structure. These fish don't roam — they live on specific pieces of hard bottom, ledges, and artificial reefs, and they guard their territory jealously.

**Live bait** is king for grouper. We use pinfish, grunts, and squid depending on what's available. A live bait dropped straight to the bottom on the right structure is the most reliable grouper method there is.

**Heavy tackle** is a must. A big grouper that grabs your bait is going to immediately try to run back into the rock. If you don't stop that run in the first 3 seconds, you're not getting that fish. Our crew will coach you through this — it requires a specific technique.

**Deep drops** on full-day trips reach structure at 80–150 feet where the largest grouper live. These trips require more patience but produce bigger fish.

## Can I Keep What I Catch?

Yes. Within legal limits, everything you catch is yours to take home. Our dock crew offers filleting and packaging services for a small fee, leaving you with restaurant-quality vacuum-sealed fillets ready for the drive home — or for the freezer.

Grouper is one of the best fish you'll ever eat — firm, white, mild, and versatile. If you go home with a grouper fillet, you're going home happy.

Book your offshore grouper trip today.`,
  },
  {
    slug: "ponce-inlet-fishing-daytona-beach-guide",
    title: "Ponce Inlet: Florida's Best Fishing Spot Near Daytona Beach",
    excerpt:
      "Why do the serious anglers skip the Daytona Beach piers and head straight to Ponce Inlet? We explain what makes this little inlet one of Florida's most productive offshore fishing departures.",
    category: "Local Guide",
    date: "March 18, 2026",
    dateISO: "2026-03-18",
    image: "/images/sea-spirit-fishing-boat-ponce-inlet.jpg",
    imageAlt:
      "The Sea Spirit fishing charter boat at Ponce Inlet marina, Daytona Beach area, Florida",
    readTime: "5 min read",
    body: `Ask any serious angler in Volusia County where they launch, and they'll point south of Daytona Beach — to Ponce Inlet. Here's why this small, historic inlet is one of Florida's most productive offshore fishing departure points, and why the Sea Spirit has called it home for decades.

## What Makes Ponce Inlet Special?

**Location on the Gulf Stream.** The Gulf Stream — the massive ocean current that runs along Florida's Atlantic coast — passes relatively close to shore at Ponce Inlet. Closer than at most other Central Florida departure points. This matters because the Gulf Stream brings warm, blue water loaded with baitfish and the pelagic predators that chase them. Mahi-mahi, king mackerel, wahoo, and sailfish follow that current.

**World-class reef structure.** The nearshore and offshore reefs off Ponce Inlet are among the most productive in the South Atlantic. Natural ledges, artificial reefs, and live hard bottom provide habitat for everything from black sea bass in 30 feet to deepwater grouper at 200 feet. The fish are there because the structure is exceptional.

**The inlet itself.** Ponce Inlet is one of the best-maintained inlets on Florida's east coast — wide, deep, and navigable in a wide range of sea conditions. This allows the Sea Spirit to depart safely in conditions that would pin smaller boats at other inlets.

## Ponce Inlet vs. New Smyrna vs. Daytona

**Ponce Inlet** offers the best access to offshore structure and the Gulf Stream from the Daytona Beach area. It's where the professional captains operate.

**New Smyrna** — just north of Ponce — has its own productive fishing (surf and nearshore especially) but fewer offshore charter operations.

**Daytona Beach proper** has pier fishing and some nearshore charters, but the piers target different species (pompano, whiting, bluefish) and can't match the offshore experience.

If offshore fishing is your goal — grouper, snapper, mahi, kings — Ponce Inlet is the departure point.

## The History of Fishing at Ponce Inlet

Ponce Inlet has been a fishing hub since the 1800s. The lighthouse — the second-tallest in the United States — was built in 1887 in part to guide fishing vessels safely in and out of the inlet. The Sea Love Marina, where the Sea Spirit docks, has been a center of the local fishing community for generations.

Commercial fishing, sport fishing, and charter fishing have all flourished here because the ocean simply delivers at this latitude and with this access.

## Sea Love Marina: Your Home Base

The Sea Spirit operates out of **Sea Love Marina at 4884 Front St, Ponce Inlet, FL 32127**. The marina offers:

- Free parking for charter guests
- Bait and tackle shop
- Fish cleaning station (dock crew available for filleting)
- Easy access from US-1 and I-95

Arrive 15–20 minutes before your trip, enjoy the sunrise over the inlet, and watch the pelicans work the pilings while you wait to board. It's a great way to start a fishing day.

## How Far Is Ponce Inlet from Daytona Beach?

Ponce Inlet is approximately 10 miles south of Daytona Beach on A1A — about a 15–20 minute drive depending on traffic. It's well worth the drive.

**From the Orlando area:** About 1 hour via I-4 East and US-92. Many of our guests are Disney or Universal visitors adding a fishing day to their trip. A 7am departure gets you back to Orlando by 5–6pm if needed.

**From Jacksonville:** About 90 minutes south on I-95.

Ready to experience what makes Ponce Inlet special? The Sea Spirit is waiting. Book your trip today.`,
  },
];

/** Return posts sorted newest-first */
export function getSortedPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );
}

/** Return a single post by slug */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** All unique categories */
export function getCategories(): string[] {
  return Array.from(new Set(blogPosts.map((p) => p.category))).sort();
}
