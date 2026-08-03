export type Category = {
  slug: string
  title: string
  short: string
  description: string
}

export type ProjectSection = {
  eyebrow?: string
  heading: string
  text: string[]
  images?: string[]
  video?: string
  imageLayout?: 'full' | 'pair' | 'triple'
}

export type Project = {
  slug: string
  category: string
  title: string
  subtitle: string
  year: string
  role: string
  tags: string[]
  cover: string
  gallery: string[]
  summary: string
  body: string[]
  sections?: ProjectSection[]
  featured?: boolean
  behanceUrl?: string
  awardUrl?: string
  awardLabel?: string
  /** When 'emboss', the project card renders `coverMark` as a logo
   * embossed into a dark material instead of a plain photo crop. Use only
   * for projects with a clean transparent logo mark available — never for
   * photography or dense illustration. `cover` is left untouched so the
   * Home hero carousel and other photo-based usages are unaffected. */
  coverTreatment?: 'photo' | 'emboss'
  coverMark?: string
}

const A = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`

export const categories: Category[] = [
  {
    slug: 'brand-identity',
    title: 'Brand Identity',
    short: 'Systems, marks & tools',
    description:
      'Logo systems, color and typography standards, and the internal tools built to keep a fast-moving hardware brand consistent.',
  },
  {
    slug: 'ui-ux-awards',
    title: 'UI/UX & Awards',
    short: 'Dashboards & competitions',
    description:
      'Command-center interface design for counter-drone systems, and the award submissions built around them.',
  },
  {
    slug: 'exhibitions-events',
    title: 'Exhibitions & Events',
    short: 'Booths, campaigns & KVs',
    description:
      'Booth graphics for international defense and space trade shows, plus recurring internal event and campaign visuals.',
  },
  {
    slug: 'editorial-print',
    title: 'Editorial & Print',
    short: 'Catalogs & packaging',
    description:
      'Long-format layout work — multilingual product catalogs, technical DMs, and physical packaging design.',
  },
  {
    slug: 'product-visuals',
    title: 'Product Visuals',
    short: '3D renders & campaigns',
    description:
      'Product renders and campaign graphics across the radar, satellite, and counter-drone product lines.',
  },
]

export const projects: Project[] = [
  {
    slug: 'award-submissions',
    category: 'ui-ux-awards',
    title: 'iF · Red Dot · Golden Pin Submissions',
    subtitle: 'Competition presentation design for three international design awards',
    year: '2024 – 2025',
    role: 'Presentation Design, Art Direction',
    tags: ['Award Submission', 'Presentation Design'],
    cover: A('ui-ux-awards/reddot-board-01.jpg'),
    gallery: [
      A('ui-ux-awards/reddot-board-01.jpg'),
      A('ui-ux-awards/reddot-board-02.jpg'),
      A('ui-ux-awards/reddot-board-03.jpg'),
      A('ui-ux-awards/reddot-board-04.jpg'),
      A('ui-ux-awards/goldenpin-01.jpg'),
      A('ui-ux-awards/goldenpin-02.jpg'),
      A('ui-ux-awards/if-imac-mockup.png'),
    ],
    summary:
      'Turning a defense-tech UI system into competition-ready presentation boards for iF Design Award, Red Dot Award, and Taiwan\'s Golden Pin Design Award.',
    body: [
      'Award submissions live or die on the first five seconds of a judge\'s attention — before any of the underlying product story gets read. For each award I re-cut the T.Meta interface work into a distinct presentation narrative: problem framing, system overview, then a close-up on the interaction details that don\'t show up in a product photo.',
      'iF\'s submission leaned on device mockups (iMac, iPhone, multi-device spreads) to show the system working across form factors. Red Dot\'s board format called for a tighter, more editorial single-image story per panel. Golden Pin, judged by a domestic panel, let the narrative go deeper into the defense-specific problem the system solves.',
      'Three different formats, one underlying design system — the discipline was knowing what to cut for each audience.',
    ],
    sections: [
      {
        eyebrow: 'The Challenge',
        heading: 'Three panels, three judging cultures',
        text: [
          'Award submissions live or die in the first five seconds of a judge\'s attention, before any of the underlying product story gets read. For each award I re-cut the same T.Meta interface work into a distinct presentation narrative: problem framing, system overview, then a close-up on the interaction details that don\'t show up in a plain product photo.',
        ],
      },
      {
        eyebrow: 'iF Design Award',
        heading: 'Selling the system across devices',
        text: [
          'iF\'s submission leaned on device mockups — iMac, iPhone, multi-device spreads — to show the interface working consistently across form factors, since the judging panel evaluates digital interface work partly on how coherent a system feels across screens.',
        ],
        images: [A('ui-ux-awards/if-imac-mockup.png')],
      },
      {
        eyebrow: 'Red Dot Award',
        heading: 'A tighter, editorial single-image story',
        text: [
          'Red Dot\'s board format rewards a single strong image per panel over a busy collage. Each board isolates one idea — the tactical map, the target list, the edge device — so a judge flipping through dozens of entries an hour gets the point without reading a paragraph.',
        ],
        images: [
          A('ui-ux-awards/reddot-board-01.jpg'),
          A('ui-ux-awards/reddot-board-02.jpg'),
          A('ui-ux-awards/reddot-board-03.jpg'),
          A('ui-ux-awards/reddot-board-04.jpg'),
        ],
        imageLayout: 'pair',
      },
      {
        eyebrow: 'Golden Pin Design Award',
        heading: 'Going deeper for a domestic panel',
        text: [
          'Golden Pin is judged by a Taiwanese panel already familiar with the defense-tech context, which let the narrative go deeper into the specific operational problem the system solves rather than re-explaining the industry from scratch.',
        ],
        images: [A('ui-ux-awards/goldenpin-01.jpg'), A('ui-ux-awards/goldenpin-02.jpg')],
        imageLayout: 'pair',
      },
    ],
  },
  {
    slug: 'technical-explainer-graphics',
    category: 'ui-ux-awards',
    title: 'System Explainer Graphics',
    subtitle: 'Technical diagrams explaining satellite and anti-drone systems for exhibition use',
    year: '2023 – 2025',
    role: 'Information Design, Technical Illustration',
    tags: ['Information Design', 'Technical Illustration', 'Defense Tech'],
    cover: A('ui-ux-awards/explainer-surveillance-area.jpg'),
    gallery: [
      A('ui-ux-awards/explainer-surveillance-area.jpg'),
      A('ui-ux-awards/explainer-bigpicture-city.jpg'),
      A('ui-ux-awards/explainer-product-grid.jpg'),
      A('ui-ux-awards/explainer-system-diagram.jpg'),
      A('ui-ux-awards/explainer-tsar.jpg'),
      A('ui-ux-awards/explainer-b5g.jpg'),
      A('ui-ux-awards/explainer-utcpl.jpg'),
    ],
    summary:
      'Concept and technical diagrams that explain how satellite communication, radar, and anti-drone hardware connect into a single system — built for exhibition presentations and sales decks.',
    body: [
      'Deep technical products need a way to explain themselves to an audience that ranges from a general at a trade show booth to an engineer doing procurement due diligence. These diagrams work at both levels: a clean concept image at a glance, with the underlying technical detail (frequency bands, protocols, coverage radius) available for whoever needs it.',
      'The set spans two registers. A dark, thin-line 3D style handles the technical slides — SATCOM terminal, SAR radar, the full anti-drone system map — using a single accent color for signal paths so a viewer never has to re-learn how to read the image between slides. A lighter, wireframe "big picture" illustration takes the same system and drops it into a real city skyline — satellites, a soldier on a rooftop, armored vehicles on the road — to sell the scenario before the spec sheet.',
      'The full anti-drone system diagram in particular had to reconcile five different hardware products (T.Sensor, T.Radar Pro, T.Jammer, T.Meta, T.SpaceRouter) into one legible chain, from field sensor to satellite backhaul to command center.',
    ],
    sections: [
      {
        eyebrow: 'The Problem',
        heading: 'Explaining a system a spec sheet can\'t',
        text: [
          'Deep technical products need a way to explain themselves to an audience that ranges from a general at a trade show booth to an engineer doing procurement due diligence. These diagrams work at both levels: a clean concept image at a glance, with the underlying technical detail — frequency bands, protocols, coverage radius — available for whoever needs it.',
        ],
        images: [A('ui-ux-awards/explainer-surveillance-area.jpg')],
      },
      {
        eyebrow: 'Two Registers',
        heading: 'A spec-sheet mode and a scenario mode',
        text: [
          'The set spans two visual registers. A dark, thin-line 3D style handles the technical slides — SATCOM terminal, SAR radar, the full anti-drone system map — using a single accent color for signal paths so a viewer never has to re-learn how to read the image between slides.',
          'A lighter, wireframe "big picture" illustration takes the same system and drops it into a real city skyline — satellites, a soldier on a rooftop, armored vehicles on the road — to sell the scenario before the spec sheet. Same underlying system, told as a story instead of a diagram.',
        ],
        images: [A('ui-ux-awards/explainer-bigpicture-city.jpg'), A('ui-ux-awards/explainer-product-grid.jpg')],
        imageLayout: 'pair',
      },
      {
        eyebrow: 'System Deep Dive',
        heading: 'T.SAR, satellite, and the full stack',
        text: [
          'The full anti-drone system diagram had to reconcile five different hardware products — T.Sensor, T.Radar Pro, T.Jammer, T.Meta, T.SpaceRouter — into one legible chain, from field sensor to satellite backhaul to command center. The T.SAR explainer video below walks through the same idea in motion: a satellite radar picking targets out of cloud cover in real time.',
        ],
        video: A('videos/tsar-explainer.mp4'),
        images: [A('ui-ux-awards/explainer-system-diagram.jpg'), A('ui-ux-awards/explainer-tsar.jpg'), A('ui-ux-awards/explainer-b5g.jpg')],
        imageLayout: 'triple',
      },
      {
        eyebrow: 'Bringing It to Life',
        heading: 'From diagram to brand film',
        text: [
          'The same system-thinking extends into motion: a cinematic brand film puts the whole anti-drone stack into a real command-center scene — operators reading live radar and tracking data across a wall of screens — so the diagrams above aren\'t just explaining an abstract system, they\'re explaining something a viewer just watched work.',
        ],
        video: A('videos/tronfuture-brand-film.mp4'),
      },
    ],
  },
  {
    slug: 'brand-identity-system',
    category: 'brand-identity',
    title: 'Tron Future Brand Identity System',
    subtitle: 'Logo system, color, and typography standards for a defense-tech brand',
    year: '2021 – ongoing',
    role: 'Brand Identity, Design Systems',
    tags: ['Brand Identity', 'Design Systems'],
    cover: A('brand-identity/logo-black-bg.jpg'),
    coverTreatment: 'emboss',
    coverMark: A('brand-identity/logo-icon-mark.png'),
    gallery: [
      A('brand-identity/logo-primary.png'),
      A('brand-identity/logo-black-bg.jpg'),
      A('brand-identity/logo-solid-black.jpg'),
      A('brand-identity/logo-outline-white.png'),
      A('brand-identity/color-system.png'),
      A('brand-identity/logo-guidelines.png'),
    ],
    summary:
      'The logo, color, and typography system that holds together every touchpoint of the brand — from a business card to a five-meter exhibition wall.',
    body: [
      'Tron Future\'s identity needed to work across an unusually wide range of contexts: sterile B2B spec sheets, defense trade-show booths, internal culture campaigns, and product packaging. A system built for just one of those would break in the others.',
      'The mark itself is a reduction — a continuous, infinite line that reads at both icon scale (16px, on a UI status bar) and building scale (a five-meter booth backdrop). I built out solid, outline, and reversed variants, then locked usage rules for clear space, minimum size, and the situations where each variant applies.',
      'Color and type standards followed the same logic: a restrained palette that stays legible on both dark technical renders and light print collateral, paired with a type system that scales from dense spec tables to headline-size trade-show graphics.',
      'This system is what every other project in this portfolio is built inside of.',
    ],
    sections: [
      {
        eyebrow: 'The Brief',
        heading: 'One brand, two audiences',
        text: [
          'Tron Future needed an identity that could work across an unusually wide range of contexts: sterile B2B spec sheets read by procurement engineers, dramatic defense trade-show booths meant to stop foot traffic, internal culture campaigns for a team that skews young, and product packaging that has to survive freight shipping. A system designed for just one of those contexts would break in the others.',
          'My job was to build a single set of rules flexible enough to hold all of it together — so that whether someone meets the brand on a five-meter booth wall in Singapore or a 16px status icon in a command dashboard, it reads as the same company.',
        ],
        images: [A('brand-identity/logo-black-bg.jpg')],
      },
      {
        eyebrow: 'The Mark',
        heading: 'A continuous, infinite line',
        text: [
          'The mark is a reduction — a single unbroken line that folds into an infinity form, chosen to suggest continuous operation and always-on defense coverage rather than a literal icon of hardware. It had to survive being shrunk to a 16px UI glyph and blown up to a five-meter booth backdrop without losing its shape or clarity.',
          'I built out solid, outline, and reversed variants of the mark, then locked usage rules for clear space, minimum size, and which variant applies on dark versus light backgrounds — so no one downstream has to guess.',
        ],
        images: [
          A('brand-identity/logo-primary.png'),
          A('brand-identity/logo-solid-black.jpg'),
          A('brand-identity/logo-outline-white.png'),
        ],
        imageLayout: 'triple',
      },
      {
        eyebrow: 'Color & Type',
        heading: 'A palette that survives both extremes',
        text: [
          'Color and type standards follow the same logic as the mark: a restrained palette that stays legible on both dark technical 3D renders and light printed collateral, paired with a type system that scales from dense spec tables to headline-size trade-show graphics without needing a second set of rules.',
        ],
        images: [A('brand-identity/color-system.png')],
      },
      {
        eyebrow: 'In Use',
        heading: 'Guidelines the whole team can follow',
        text: [
          'Because I\'m not the only person touching brand assets day to day, the system had to be documented, not just designed — clear space, minimum sizes, and explicit "don\'t do this" examples for the most common mistakes (stretching the mark, using it on a busy background, recoloring it outside the palette).',
          'This system is the foundation every other project in this portfolio is built inside of — the exhibitions, the packaging, the internal tools all inherit these same rules.',
        ],
        images: [A('brand-identity/logo-guidelines.png')],
      },
    ],
    featured: true,
  },
  {
    slug: 'efficiency-tools',
    category: 'brand-identity',
    title: 'T.BADGE & Name Card Generators',
    subtitle: 'Internal automation tools that cut manual production time by roughly 80%',
    year: '2025',
    role: 'Product & Tool Design',
    tags: ['Product Thinking', 'Automation', 'Print'],
    cover: A('brand-identity/tbadge-flow.png'),
    gallery: [A('brand-identity/tbadge-flow.png'), A('brand-identity/namecard-generator-flow.png')],
    summary:
      'Two internal tools that turned a repetitive, error-prone production task — badges and business cards for a fast-growing company — into a five-step automated flow.',
    body: [
      'Every new hire needs an ID badge. Every new hire also needs a business card. At a company growing as fast as Tron Future, producing both by hand meant the same layout work, repeated dozens of times, with a high chance of a typo slipping into a print run.',
      'T.BADGE started as a question: what\'s the minimum input a designer actually needs to provide, versus what can the template handle on its own? After six iterations, the tool went from "open Illustrator, manually place text and photo, export, check, repeat" to a guided five-step flow — enter data, drop in a photo, generate, proof, print.',
      'The result was roughly an 80% reduction in time spent per badge, and — just as important — a proofing step built into the flow that catches data errors before they hit print. The name-card generator followed the same pattern for business cards.',
      'This is the project I\'m proudest of for a specific reason: it\'s not a poster or a render, it\'s a small piece of product thinking that changed how a team actually works day to day.',
    ],
    featured: true,
  },
  {
    slug: 'egg-design-studio',
    category: 'brand-identity',
    title: 'Egg Design Studio Identity',
    subtitle: 'Wordmark and visual identity for a student design studio',
    year: '2019',
    role: 'Student Project — Brand Identity',
    tags: ['Student Work', 'Brand Identity'],
    cover: A('brand-identity/student-eggdesign-01.jpg'),
    gallery: [A('brand-identity/student-eggdesign-01.jpg')],
    summary:
      'A wordmark and identity concept for "Egg Design," built around a single geometric egg mark, designed as a team project during my design degree.',
    body: [
      'A university branding exercise: design an identity for a fictional design studio from scratch. I worked on this with three classmates — 江宇雯, 王靖蓉, and 曲書毓 — under instructor 鄭司維.',
      'The mark reduces the studio\'s name to a single geometric egg shape sitting inside the Chinese character 蛋 (egg), paired with a clean wordmark and a vertical "EGG DESIGN" tag for smaller applications.',
    ],
    behanceUrl: 'https://www.behance.net/gallery/87081361/-Egg-Desgn-',
  },
  {
    slug: 'international-exhibitions',
    category: 'exhibitions-events',
    title: 'International Exhibitions, 2024 – 2026',
    subtitle: 'Booth visuals across defense and space trade shows worldwide',
    year: '2024 – 2026',
    role: 'Exhibition Design, Large-Format Graphics',
    tags: ['Exhibition Design', 'Large Format'],
    cover: A('exhibitions-events/singapore-airshow-2026.jpg'),
    gallery: [
      A('exhibitions-events/tadte-2025-entrance.jpg'),
      A('exhibitions-events/singapore-airshow-2026.jpg'),
      A('exhibitions-events/singapore-2024-wall.jpg'),
      A('exhibitions-events/dsei-jp-2025-01.jpg'),
      A('exhibitions-events/dsei-jp-2025-02.jpg'),
      A('exhibitions-events/idex-2025.jpg'),
      A('exhibitions-events/tadte-2025-floor.jpg'),
      A('exhibitions-events/tadte-2025-drone.jpg'),
    ],
    summary:
      'Booth walls, banners, and key visuals for World Defense Show, DSEI Japan, Paris Air Show, Singapore Airshow, TADTE, IDEX, and more — over ten shows across three years.',
    body: [
      'Every trade show has its own booth footprint, local-language requirements, and shipping constraints, but the brand has to read as the same company at all of them. That meant building a flexible system of wall layouts, KV crops, and banner formats that could be reassembled for a 2×2.5m pop-up or a 5×2.5m structural wall without starting from zero each time.',
      'DSEI Japan required a fully Japanese-localized banner set alongside the English originals. Singapore Airshow\'s key visual — a tactical map rendered as a wide-format banner — became one of the strongest single images to come out of this whole body of work.',
      'Across three years and ten-plus shows, this became less "design a booth" and more "maintain a system that scales to whatever booth footprint we get assigned this quarter."',
    ],
    sections: [
      {
        eyebrow: 'The Challenge',
        heading: 'One brand, ten-plus booth footprints',
        text: [
          'Every trade show has its own booth footprint, local-language requirements, and shipping constraints, but the brand has to read as the same company at all of them. That meant building a flexible system of wall layouts, KV crops, and banner formats that could be reassembled for a 2×2.5m pop-up or a 5×2.5m structural wall without starting from zero each time.',
          'Across three years and ten-plus shows, this became less "design a booth" and more "maintain a system that scales to whatever booth footprint we get assigned this quarter."',
        ],
      },
      {
        eyebrow: 'TADTE 2025 · Taipei',
        heading: 'From lamppost banner to show floor',
        text: [
          'For the Taipei Aerospace & Defense Technology Exhibition, the same key visual had to extend from entrance totems and lamppost banners outside the hall to the booth itself — hanging drone hardware, a wall-mounted T.Meta display, and signage, all photographed live on the floor rather than staged.',
        ],
        images: [
          A('exhibitions-events/tadte-2025-entrance.jpg'),
          A('exhibitions-events/tadte-2025-floor.jpg'),
          A('exhibitions-events/tadte-2025-drone.jpg'),
        ],
        imageLayout: 'triple',
      },
      {
        eyebrow: 'Singapore Airshow',
        heading: 'A tactical map as the key visual',
        text: [
          'Singapore Airshow\'s key visual — a tactical map rendered as a wide-format banner — became one of the strongest single images to come out of this whole body of work, extended across a full booth wall system for the 2024 and 2026 shows.',
        ],
        images: [A('exhibitions-events/singapore-airshow-2026.jpg'), A('exhibitions-events/singapore-2024-wall.jpg')],
        imageLayout: 'pair',
      },
      {
        eyebrow: 'DSEI Japan & IDEX',
        heading: 'Localizing for a second language',
        text: [
          'DSEI Japan required a fully Japanese-localized banner set alongside the English originals — same grid, same hierarchy, new typesetting rules for a language with very different line-length and character-spacing needs. IDEX called for the same wall system rebuilt at a different structural footprint.',
        ],
        images: [
          A('exhibitions-events/dsei-jp-2025-01.jpg'),
          A('exhibitions-events/dsei-jp-2025-02.jpg'),
          A('exhibitions-events/idex-2025.jpg'),
        ],
        imageLayout: 'triple',
      },
    ],
    featured: true,
  },
  {
    slug: 'internship-campaign',
    category: 'exhibitions-events',
    title: 'Summer Internship Brand Campaign',
    subtitle: 'A multi-year onboarding kit and key visual system',
    year: '2023 – 2025',
    role: 'Campaign Design, Illustration',
    tags: ['Campaign', 'Onboarding', 'Illustration'],
    cover: A('exhibitions-events/internship-2024-kv.jpg'),
    gallery: [
      A('exhibitions-events/internship-2024-kv.jpg'),
      A('exhibitions-events/internship-2025-01.jpg'),
      A('exhibitions-events/internship-2025-02.jpg'),
    ],
    summary:
      'Three consecutive years of key visuals, onboarding kits, and identity badges for Tron Future\'s summer internship program.',
    body: [
      'Unlike the defense-hardware side of the brand, the internship campaign gets to be warm and a little playful — it\'s the first impression a batch of new interns gets of the company. Each year got its own key visual and illustration style, while staying recognizably part of the same annual tradition.',
      'The onboarding kit itself — welcome card, lanyard, ID badge, a kraft-paper box to hold it all — was treated as a small packaging project in its own right, designed to be opened on day one as a first, tangible "welcome" moment.',
    ],
  },
  {
    slug: 'company-events',
    category: 'exhibitions-events',
    title: 'Engineer\'s Day & Annual Party',
    subtitle: 'Recurring internal event campaigns, year over year',
    year: '2023 – 2026',
    role: 'Event Design, Key Visual',
    tags: ['Event Design', 'Key Visual'],
    cover: A('exhibitions-events/engineers-day-2026.jpg'),
    gallery: [
      A('exhibitions-events/engineers-day-2026.jpg'),
      A('exhibitions-events/engineers-day-2024.jpg'),
      A('exhibitions-events/annual-party-2026.png'),
    ],
    summary:
      'Key visuals, stage backdrops, and print collateral for Tron Future\'s recurring internal culture events.',
    body: [
      'Recurring annual events are a different design problem from a one-off campaign: the visual has to feel fresh every year while still being unmistakably "Engineer\'s Day" or "the annual party" to employees who\'ve seen four years of them. Each cycle got a new key visual concept, extended across stage backdrops, seating charts, posters, and social posts.',
    ],
  },
  {
    slug: 'taipei-riverside-music-festival',
    category: 'exhibitions-events',
    title: 'Taipei Riverside Music Festival',
    subtitle: 'Key visual and event identity for a riverside summer music festival',
    year: '2019',
    role: 'Student Project — Event Identity',
    tags: ['Student Work', 'Illustration', 'Event Identity'],
    cover: A('cover-updates/taipei-riverside.jpg'),
    gallery: [
      A('exhibitions-events/student-taipeimusic-01.jpg'),
      A('exhibitions-events/student-taipeimusic-02.jpg'),
      A('exhibitions-events/student-taipeimusic-03.jpg'),
      A('exhibitions-events/student-taipeimusic-04.jpg'),
    ],
    summary:
      'A key visual for an outdoor summer music festival along the Dadaocheng riverside, built from layered illustrated forms and instruments.',
    body: [
      'A university event-identity project imagining the visual system for "Sounds from the River," a riverside music market at Dadaocheng Wharf. The key visual layers loose, painterly shapes with silhouettes of instruments and performers to read as movement and sound rather than a literal stage photo — designed to scale from a large-format poster down to a Facebook event cover.',
    ],
    behanceUrl: 'https://www.behance.net/gallery/86480807/_',
  },
  {
    slug: 'guitar-camp-identity',
    category: 'exhibitions-events',
    title: 'Guitar Winter Camp Key Visual',
    subtitle: 'Illustrated main visual system for a joint university guitar camp',
    year: '2019',
    role: 'Student Project — Event Identity, Illustration',
    tags: ['Student Work', 'Illustration', 'Event Identity'],
    cover: A('exhibitions-events/student-guitarcamp-01.jpg'),
    gallery: [A('exhibitions-events/student-guitarcamp-01.jpg')],
    summary:
      'A fairy-tale-themed key visual for a joint winter guitar camp between NTUST and NTUB, built around a "Snow White and the Seven Dwarfs" narrative hook.',
    body: [
      'A university project for the guitar clubs of two schools, National Taiwan University of Science and Technology and National Taipei University of Business. The concept borrows the "Snow White and the Seven Dwarfs" story as a framing device — the camp\'s tagline invites participants to help a fictional band resolve a breakup before their concert — illustrated as a full cast inside a guitar-shaped frame, extended into the event\'s full main visual system.',
    ],
    behanceUrl: 'https://www.behance.net/gallery/87021363/_',
  },
  {
    slug: 'sunmoon-lake-swim-identity',
    category: 'exhibitions-events',
    title: 'Sun Moon Lake International Swimming — Concept Identity',
    subtitle: 'Conceptual rebrand of Taiwan\'s largest open-water swimming event',
    year: '2019',
    role: 'Student Project — Event Identity',
    tags: ['Student Work', 'Event Identity', 'Concept'],
    cover: A('exhibitions-events/student-sunmoon-01.jpg'),
    gallery: [
      A('exhibitions-events/student-sunmoon-01.jpg'),
      A('exhibitions-events/student-sunmoon-02.jpg'),
      A('exhibitions-events/student-sunmoon-03.jpg'),
      A('exhibitions-events/student-sunmoon-04.jpg'),
      A('exhibitions-events/student-sunmoon-05.jpg'),
      A('exhibitions-events/student-sunmoon-06.jpg'),
    ],
    summary:
      'A conceptual identity redesign for the 37th Sun Moon Lake International Swimming carnival — logo, typography, and event merchandise, done as coursework, not an official commission.',
    body: [
      'A university branding exercise using Taiwan\'s Sun Moon Lake swim carnival as a real-world case to redesign against. This is a conceptual student project only — not official identity work for the actual event organizers. The system covers a new lockup combining the lake\'s name with layered mountain-and-water forms, extended across event merchandise mockups, signage, and poster applications.',
    ],
    behanceUrl: 'https://www.behance.net/gallery/86472289/37-',
  },
  {
    slug: 'product-catalog',
    category: 'editorial-print',
    title: 'Product Catalog & Technical DM',
    subtitle: 'A 48-page multilingual product catalog and supporting DM layouts',
    year: '2025 – 2026',
    role: 'Editorial Layout, Information Design',
    tags: ['Editorial', 'Layout', 'Multilingual'],
    cover: A('editorial-print/catalog-cover.png'),
    gallery: [
      A('editorial-print/catalog-cover.png'),
      A('editorial-print/catalog-spread-tsar.jpg'),
      A('editorial-print/catalog-spread-system.jpg'),
      A('editorial-print/catalog-spread-smallsat.jpg'),
    ],
    summary:
      'A full-line product catalog spanning radar, satellite, and counter-drone systems, produced in parallel Chinese, English, and Japanese editions.',
    body: [
      'This catalog carries the full weight of the product line — every spec sheet, every system diagram, every use case — in a format that has to work equally well printed at a trade show and read on a tablet during a sales call.',
      'The biggest constraint was consistency across three languages with very different text lengths and typesetting conventions. Every spread was built on a grid flexible enough that a Japanese caption and its English equivalent could sit in the same frame without one of them looking like an afterthought.',
    ],
    sections: [
      {
        eyebrow: 'The Brief',
        heading: '48 pages, three languages, one grid',
        text: [
          'This catalog carries the full weight of the product line — every spec sheet, every system diagram, every use case — in a format that has to work equally well printed at a trade show and read on a tablet during a sales call.',
          'The biggest constraint was consistency across three languages with very different text lengths and typesetting conventions. Every spread was built on a grid flexible enough that a Japanese caption and its English equivalent could sit in the same frame without one of them looking like an afterthought.',
        ],
        images: [A('editorial-print/catalog-cover.png')],
      },
      {
        eyebrow: 'Dark Spreads',
        heading: 'Full-bleed system maps for the flagship pages',
        text: [
          'The lead spread for each major system — T.SAR, the multi-site anti-drone network — gets a full-bleed dark tactical map rather than a product photo, so the catalog opens with the scenario before it opens with the spec table.',
        ],
        images: [A('editorial-print/catalog-spread-tsar.jpg'), A('editorial-print/catalog-spread-system.jpg')],
        imageLayout: 'pair',
      },
      {
        eyebrow: 'Product Pages',
        heading: 'A repeatable template for 15+ products',
        text: [
          'Underneath the flagship spreads, every individual product — like T.SmallSat here — follows the same repeatable template: hero render, name and one-line position, then three short paragraphs of plain-language explanation before the technical appendix. Building this as a strict template, not a one-off layout per product, is what let the catalog scale to 48 pages without the schedule blowing up.',
        ],
        images: [A('editorial-print/catalog-spread-smallsat.jpg')],
      },
    ],
  },
  {
    slug: 'packaging-design',
    category: 'editorial-print',
    title: 'Protective Packaging Design',
    subtitle: 'Structural and graphic design for product shipping packaging',
    year: '2023 – 2024',
    role: 'Packaging & Structural Design',
    tags: ['Packaging', 'Structural Design'],
    cover: A('editorial-print/packaging-01.jpg'),
    gallery: [
      A('editorial-print/packaging-01.jpg'),
      A('editorial-print/packaging-02.jpg'),
      A('editorial-print/packaging-03.jpg'),
    ],
    summary:
      'Bubble-lined shipping packaging designed and iterated through multiple structural rounds before landing on the final production version.',
    body: [
      'Hardware packaging has a harder job than most retail packaging — it has to protect an expensive, sensitive device through freight shipping, not just look good on a shelf. This went through several structural iterations, testing fold patterns and cushioning placement before the graphic layer was finalized.',
    ],
  },
  {
    slug: 'ilook-cereal-packaging',
    category: 'editorial-print',
    title: 'I Look — Organic Crispy Cereal Packaging',
    subtitle: 'Illustrated brand and packaging system for an organic cereal line',
    year: '2021',
    role: 'Student / Personal Project — Packaging Design',
    tags: ['Student Work', 'Packaging', 'Illustration'],
    cover: A('cover-updates/ilook-cereal.png'),
    gallery: [A('editorial-print/ilook-scene-01.jpg'), A('editorial-print/student-ilook-01.jpg')],
    summary:
      'A full packaging system for a fictional organic cereal brand, "I Look 路可" — logo, flavor illustrations, box, and bag design.',
    body: [
      'Each of four flavors gets its own watercolor character illustration, peeking out from a torn-paper window on the box front — matcha almond, chocolate strawberry, strawberry berry, and honey. The brand line, "Life is not lacking in beauty, but lacking in discovery," carries through onto the outer carry bag and gift box.',
    ],
    behanceUrl: 'https://www.behance.net/gallery/119401963/-I-Look-',
  },
  {
    slug: 'guogan-fang-packaging',
    category: 'editorial-print',
    title: 'Guogan Fang — Dried Fruit Packaging',
    subtitle: 'Art nouveau illustrated packaging for a dried fruit brand',
    year: '2026',
    role: 'Personal Project — Packaging & Illustration',
    tags: ['Illustration', 'Packaging', 'Art Nouveau'],
    cover: A('cover-updates/guogan-fang.jpeg'),
    gallery: [A('editorial-print/guogan-dried-fruit.jpg'), A('editorial-print/guogan-boxes.jpg')],
    summary:
      'A three-flavor dried fruit line — candied orange, peach, and mango — each box built around a full-length illustrated portrait framed in an art nouveau arch.',
    body: [
      'Each flavor gets its own girl, drawn in a Mucha-inspired art nouveau frame with a halo of small icons — the fruit, the season, small motifs tied to that flavor\'s story. Orange, peach, and mango each carry a distinct color world within the same decorative structure, so the three boxes read as a set on a shelf while staying individually collectible.',
    ],
  },
  {
    slug: 'one-kilogram-weight',
    category: 'editorial-print',
    title: 'One Kilogram\'s Weight',
    subtitle: 'An illustrated short story and editorial layout about a rescued kitten',
    year: '2019',
    role: 'Student Project — Illustration, Editorial Layout',
    tags: ['Student Work', 'Illustration', 'Editorial'],
    cover: A('editorial-print/student-onekg-01.jpg'),
    gallery: [A('editorial-print/student-onekg-01.jpg')],
    summary:
      'A short illustrated editorial piece telling the true story of a one-kilogram kitten rescued from a night market, set in quiet vertical typesetting.',
    body: [
      'A personal illustration and typesetting project, built around a short true story about a starving kitten found at a night market weighing exactly one kilogram. The layout uses sparse, vertical Chinese typesetting and negative space to hold the weight of the story rather than illustrating it literally.',
    ],
    behanceUrl: 'https://www.behance.net/gallery/86465137/_',
  },
  {
    slug: 'product-visuals-gallery',
    category: 'product-visuals',
    title: 'Product Visualization Gallery',
    subtitle: 'Renders and campaign graphics across the full product line',
    year: '2022 – 2026',
    role: '3D Visualization, Art Direction',
    tags: ['3D Visualization', 'Product Design'],
    cover: A('product-visuals/tmicrosat-01.jpg'),
    gallery: [
      A('product-visuals/tmicrosat-01.jpg'),
      A('product-visuals/tradar-pro-01.png'),
      A('product-visuals/tradar-pro-white.png'),
      A('product-visuals/tspacehub-mini.png'),
      A('product-visuals/tsar-01.png'),
      A('product-visuals/tjammer-render.png'),
      A('product-visuals/tjammer-scene.jpg'),
      A('product-visuals/product-lineup.jpg'),
    ],
    summary:
      'A running gallery of product renders and campaign graphics — T.Radar Pro, T.SpaceHub, T.SAR, T.Jammer, and the wider product family — built for spec sheets, social, and trade-show use.',
    body: [
      'Every product in Tron Future\'s line needs a consistent visual treatment across dozens of use cases: a hero render for the catalog, a colorway variant for regional markets, a scene shot showing the device in context, a flattened graphic for a social post. This gallery is the accumulated output of keeping that pipeline running across five-plus product lines.',
    ],
    featured: true,
  },
  {
    slug: 'power-hardware-internship',
    category: 'editorial-print',
    title: 'Power Hardware — Internship Project',
    subtitle: 'Manual layout and advertising collateral created during a 2022 design internship',
    year: '2021',
    role: 'Design Intern — Editorial Design, Advertising Collateral',
    tags: ['Internship', 'Editorial', 'Advertising'],
    cover: A('cover-updates/power-hardware.png'),
    gallery: [],
    summary:
      'A selection of manual layouts and advertising materials created during an internship at Power Hardware.',
    body: [
      'Project background, design process, and final applications will be added after the remaining materials are organized.',
    ],
  },
  {
    slug: 'zooler-ruler-set',
    category: 'product-visuals',
    title: 'Zooler — Animal Fact Ruler Set',
    subtitle: 'A children\'s educational stationery set combining rulers with animal facts',
    year: '2021',
    role: 'Student / Personal Project — Product & Packaging Design',
    tags: ['Student Work', 'Product Design', 'Packaging', 'Golden Pin New Design Award'],
    cover: A('product-visuals/student-zooler-01.jpg'),
    gallery: [A('product-visuals/student-zooler-01.jpg'), A('product-visuals/student-zooler-02.jpg')],
    summary:
      'A set of six rulers, triangles, and a protractor that teach kids animal facts through comparison — designed and prototyped with Pinnhua Chen. Selected for the Golden Pin New Design Award.',
    body: [
      'Zooler combines "animal facts" with interactive structure: each ruler, triangle, and protractor uses an animal\'s size, speed, or angle as a reference point instead of raw numbers, so abstract units of measurement become something a child can compare and picture. Six tools shipped in a kraft-paper box with a matching activity booklet.',
      'Co-designed and prototyped with Pinnhua Chen, using Illustrator for the graphics and Rhino for the physical form.',
      'Selected for the 2021 Golden Pin New Design Award, Communication Design category.',
    ],
    behanceUrl: 'https://www.behance.net/gallery/119157261/-Zooler',
    awardUrl: 'https://www2.goldenpin.org.tw/project/%E5%8B%95%E5%B0%BA%E5%8B%95%E5%B0%BA/',
    awardLabel: 'View on Golden Pin Design Award',
  },
]

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function projectsByCategory(slug: string) {
  return projects.filter((p) => p.category === slug)
}

export function featuredProjects() {
  return projects.filter((p) => p.featured)
}
