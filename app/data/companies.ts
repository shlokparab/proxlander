const FOUNDERS_BASE_URL = "https://media.proximamumbai.com/founders";
const COMPANIES_BASE_URL = "https://media.proximamumbai.com/comps";

export type CompanyFounder = {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  x?: string;
};

export type CompanySource = {
  label: string;
  url: string;
};

export type Company = {
  slug: string;
  name: string;
  aliases: string[];
  sector: string;
  description: string;
  overview: [string, string];
  highlights: string[];
  focus: {
    problem: string;
    approach: string;
  };
  stage?: string;
  funding?: string;
  traction?: string[];
  sources: CompanySource[];
  seoKeywords: string[];
  website?: string;
  image?: string;
  location?: string;
  founders: CompanyFounder[];
};

export const companies: Company[] = [
  {
    slug: "supermemory",
    name: "Supermemory",
    aliases: ["supermemory.ai", "Supermemory AI"],
    sector: "AI Agent Memory / Context Infrastructure",
    description: "Supermemory is a context cloud for AI agents, combining persistent memory, RAG, user profiles, connectors, and content extraction behind one model-agnostic API.",
    overview: [
      "Supermemory gives AI agents persistent, structured context instead of forcing product teams to stitch together separate memory, retrieval, profile, connector, and extraction systems. Its current platform includes a graph-based memory engine, SuperRAG, user profiles, connectors, and document extractors.",
      "Inside Proxima Mumbai, Supermemory represents the kind of globally ambitious AI company the community exists to support—technically deep, product-led, and built in public by a young founder.",
    ],
    highlights: ["Persistent memory for AI agents", "Sub-300ms graph retrieval", "Model-agnostic context API"],
    focus: {
      problem: "AI agents lose useful user and application context across sessions, while engineering teams must integrate multiple vendors for memory, retrieval, profiles, connectors, and extraction.",
      approach: "Supermemory unifies those capabilities in a low-latency context cloud that can ingest changing information, build structured user understanding, and retrieve relevant memories for any model or agent framework.",
    },
    stage: "Seed",
    funding: "$3M first funding round announced in October 2025",
    traction: ["100B+ tokens processed per month", "10,000+ personal-product power users", "28,000+ GitHub stars"],
    sources: [
      { label: "Supermemory product site", url: "https://supermemory.ai/" },
      { label: "Supermemory funding announcement", url: "https://supermemory.ai/blog/supermemory-raises-3-million-and-building-the-best-memory-engine-for-llms/" },
    ],
    seoKeywords: ["AI agent memory API", "context infrastructure for AI agents", "RAG and memory platform", "Supermemory funding", "Dhravya Shah startup"],
    website: "https://supermemory.ai",
    image: `${COMPANIES_BASE_URL}/supermemory.webp`,
    location: "Mumbai, India",
    founders: [{ name: "Dhravya Shah", role: "Founder", image: `${FOUNDERS_BASE_URL}/dhravya.webp`, linkedin: "https://www.linkedin.com/in/dhravyashah/", x: "https://x.com/DhravyaShah" }],
  },
  {
    slug: "huddle01",
    name: "Huddle01",
    aliases: ["Huddle 01", "Huddle01 Cloud", "Huddle01 communication network"],
    sector: "Cloud Infrastructure",
    description: "Huddle01 Cloud provides virtual machines, GPUs, managed Docker and Kubernetes, and AI-agent infrastructure with bare-metal performance and cloud flexibility.",
    overview: [
      "Huddle01’s current product is a cloud infrastructure platform built around a direct performance-and-control proposition: virtual machines, managed containers and Kubernetes, GPUs, and infrastructure for AI agents without the usual trade-off between bare-metal performance and cloud operations.",
      "The company previously built decentralized real-time audio and video infrastructure. Arush Kurundodi, a founding engineer at Huddle01, is part of the Proxima Mumbai network and brings that distributed-systems experience to the room.",
    ],
    highlights: ["Virtual machines and GPU compute", "Managed Docker and Kubernetes", "Bare-metal cloud performance"],
    focus: {
      problem: "Infrastructure teams often pay opaque cloud premiums while giving up the control and predictable performance of dedicated hardware.",
      approach: "Huddle01 Cloud packages high-performance compute, GPUs, containers, Kubernetes, and AI-agent infrastructure behind a cloud-style operating experience and transparent pricing.",
    },
    stage: "Seed-funded",
    funding: "$4.5M total publicly announced as of April 2023",
    sources: [
      { label: "Huddle01 Cloud", url: "https://huddle01.com/" },
      { label: "April 2023 funding announcement", url: "https://www.prnewswire.com/news-releases/huddle01-raises-2-8m-led-by-hivemind-to-build-the-1st-decentralized-communication-network-301791707.html" },
    ],
    seoKeywords: ["Huddle01 Cloud", "bare metal cloud", "GPU cloud infrastructure", "managed Kubernetes India", "Huddle01 funding"],
    website: "https://huddle01.com",
    image: `${COMPANIES_BASE_URL}/huddle.webp`,
    location: "India",
    founders: [{ name: "Arush Kurundodi", role: "Founding engineer", image: `${FOUNDERS_BASE_URL}/arush.webp`, linkedin: "https://www.linkedin.com/in/arushkurundodi/", x: "https://x.com/arcinston" }],
  },
  {
    slug: "anomaly-bio",
    name: "Anomaly Bio",
    aliases: ["AnomalyBio", "Anomaly Bio India"],
    sector: "Biotechnology",
    description: "Anomaly Bio turns microbes into micro-factories to rebuild and strengthen global ingredient supply chains.",
    overview: [
      "Anomaly Bio works at the intersection of biology and manufacturing, using engineered microbes to produce ingredients through fermentation rather than relying only on traditional supply chains.",
      "Co-founder Armaan Dhanda is part of Proxima Mumbai. The company reflects the community’s growing deep-tech signal: ambitious science paired with a concrete industrial application.",
    ],
    highlights: ["Microbial manufacturing", "Biotechnology and fermentation", "Ingredient supply chains"],
    focus: {
      problem: "Ingredient supply chains for nutrition, crop protection, and personal care remain exposed to biological limits, climate pressure, and geopolitical disruption.",
      approach: "Anomaly Bio engineers microbes into fermentation-based micro-factories that convert simple sugars into functional ingredients with scalable, on-demand production.",
    },
    funding: "US$2.6M funding round publicly announced",
    sources: [{ label: "Anomaly Bio funding and product overview", url: "https://www.anomalybio.com/raise" }],
    seoKeywords: ["Anomaly Bio funding", "precision fermentation startup", "microbial manufacturing", "functional ingredients biotechnology", "Armaan Dhanda"],
    website: "https://www.anomalybio.com/",
    image: `${COMPANIES_BASE_URL}/anomaly.webp`,
    location: "Singapore / India",
    founders: [{ name: "Armaan Dhanda", role: "Co-founder", image: `${FOUNDERS_BASE_URL}/armaan.webp`, linkedin: "https://www.linkedin.com/in/armaandh/?originalSubdomain=sg", x: "https://x.com/ArmaanDhanda1" }],
  },
  {
    slug: "manicule",
    name: "manicule",
    aliases: ["Manicule AI", "manicule.dev", "Manicule AgentRel", "Manicule YC P26"],
    sector: "AgentRel / Developer Marketing",
    description: "Manicule is building AgentRel: documentation, GEO, social distribution, and usage intelligence designed to help developer products get discovered and used by AI agents.",
    overview: [
      "Manicule treats AI agents as a new class of software user. It audits how agents read a developer product, then owns the documentation architecture, writing, code verification, media, GEO, SEO, social content, and distribution needed to make that product understandable and usable by agents.",
      "Founders Shreyans Jain and Naman Bansal are members of Proxima Mumbai. Their work sits squarely inside the community’s concentration of AI systems, developer infrastructure, and high-agency product builders.",
    ],
    highlights: ["Technical documentation for agents", "GEO and developer distribution", "Agent usage and discovery analytics"],
    focus: {
      problem: "Developer products are still documented and distributed for human readers even as AI agents increasingly choose integrations, write code, and open pull requests.",
      approach: "Manicule combines agent-led audits with human-reviewed documentation, tested code examples, GEO, SEO, and social distribution so agents can discover, understand, and correctly use developer tools.",
    },
    stage: "Y Combinator P26",
    traction: ["Five-person team on its YC profile", "End-to-end documentation engagements designed to ship in 14 days"],
    sources: [
      { label: "Manicule product site", url: "https://manicule.dev/" },
      { label: "Manicule at Y Combinator", url: "https://www.ycombinator.com/companies/manicule" },
    ],
    seoKeywords: ["Manicule YC P26", "AgentRel", "AI agent developer relations", "GEO for developer tools", "technical documentation agency"],
    website: "https://manicule.dev",
    image: `${COMPANIES_BASE_URL}/manicule.webp`,
    location: "India",
    founders: [
      { name: "Shreyans Jain", role: "Founder", image: `${FOUNDERS_BASE_URL}/shreyans.webp`, linkedin: "https://www.linkedin.com/in/sjain07", x: "https://x.com/CodeWShreyans" },
      { name: "Naman Bansal", role: "Founder & CEO", image: `${FOUNDERS_BASE_URL}/naman.webp`, linkedin: "https://www.linkedin.com/in/namban/", x: "https://x.com/NamanBansal0611" },
    ],
  },
  {
    slug: "litefold",
    name: "LiteFold",
    aliases: ["litefold AI", "litefold.ai", "LiteFold Inc"],
    sector: "AI / Drug Discovery",
    description: "LiteFold is an applied AI-for-science lab building research-agent infrastructure and precision drug-design systems for next-generation therapeutics.",
    overview: [
      "LiteFold is focused on the gap between a promising therapeutic idea and a candidate that can move forward. Its current positioning combines autonomous research agents, structural biology, machine learning, and precision drug design.",
      "Founder Anindyadeep Sannigrahi is part of Proxima Mumbai. LiteFold connects the community’s AI talent with a high-impact scientific domain where better research tooling can meaningfully compress discovery timelines.",
    ],
    highlights: ["Autonomous research agents", "Precision drug design", "AI4Science infrastructure"],
    focus: {
      problem: "Early drug discovery teams must search large scientific spaces and translate promising ideas into candidates before expensive experiments can begin.",
      approach: "LiteFold is building autonomous research-agent and AI4Science infrastructure to connect structural biology, machine learning, and therapeutic design workflows.",
    },
    stage: "Backed by 3F.VC",
    sources: [
      { label: "LiteFold product site", url: "https://www.litefold.ai/" },
      { label: "LiteFold at 3F.VC", url: "https://www.3f.vc/portfolio/litefold" },
    ],
    seoKeywords: ["LiteFold AI drug discovery", "AI4Science startup", "autonomous research agents", "precision drug design", "Anindyadeep Sannigrahi"],
    website: "https://www.litefold.ai/",
    image: `${COMPANIES_BASE_URL}/litefold.webp`,
    location: "India",
    founders: [{ name: "Anindyadeep Sannigrahi", role: "Founder", image: `${FOUNDERS_BASE_URL}/anindya.webp`, linkedin: "https://www.linkedin.com/in/anindyadeep-sannigrahi-38683b1b6", x: "https://x.com/anindyadeeps" }],
  },
  {
    slug: "hackerfab-iitb",
    name: "HackerFab IITB",
    aliases: ["HackerFab", "Hacker Fab IIT Bombay", "HackerFab IIT Bombay"],
    sector: "Semiconductors / Education",
    description: "HackerFab IITB is India’s first student-built semiconductor fab, creating open-source fabrication tools at IIT Bombay.",
    overview: [
      "Founded at IIT Bombay in 2025, HackerFab IITB is making hands-on semiconductor fabrication more accessible to students by building tools such as maskless lithography systems, spin coaters, furnaces, and deposition equipment.",
      "The team’s open-source, student-led model expands access to semiconductor process education and helps develop practical fabrication talent from Mumbai for the wider Indian ecosystem.",
    ],
    highlights: ["Student-built semiconductor fab", "Open-source fabrication tools", "IIT Bombay semiconductor education"],
    focus: {
      problem: "Hands-on semiconductor process education is constrained by the cost, complexity, and limited availability of conventional fabrication equipment.",
      approach: "HackerFab IITB is building an open-source microfabrication lab at IIT Bombay, including maskless lithography, spin-coating, furnace, and deposition tools that students can build, operate, and improve.",
    },
    stage: "Student-built research lab",
    traction: ["India’s first student-built semiconductor fab", "Founded at IIT Bombay in 2025"],
    sources: [
      { label: "HackerFab IITB project site", url: "https://hackerfabiitb.github.io/" },
      { label: "HackerFab global project documentation", url: "https://docs.hackerfab.org/home/individual-fab-information/indian-institute-of-technology-bombay" },
    ],
    seoKeywords: ["HackerFab IITB", "student semiconductor fab India", "open source microfabrication", "IIT Bombay semiconductor lab", "semiconductor education India"],
    website: "https://hackerfabiitb.github.io/",
    image: `${COMPANIES_BASE_URL}/hackerfab.webp`,
    location: "IIT Bombay, Mumbai",
    founders: [
      { name: "Aryamman Bhatia", role: "Founding team", image: `${FOUNDERS_BASE_URL}/aryamman.webp`, linkedin: "https://www.linkedin.com/in/aryamman-bhatia-2818b1280/", x: "https://x.com/aryamman_bhatia" },
    ],
  },
  {
    slug: "vanar-robots",
    name: "Vanar Robots",
    aliases: ["Vanar Robotics", "Vanar Robot", "Vanar Gen 1"],
    sector: "Humanoid Robotics",
    description: "Vanar Robots is a Mumbai robotics company building general-purpose humanoid robots for physical work in human environments.",
    overview: [
      "Vanar Robots is developing vertically integrated humanoid robots that can operate with the tools and infrastructure people already use. Its first platform combines an in-house structure, actuators, manipulators, and software.",
      "Founded by Aryan Wagh in Mumbai, Vanar represents Proxima’s physical-intelligence frontier: a team attempting to expand the world’s capacity to engineer, manufacture, and construct.",
    ],
    highlights: ["General-purpose humanoid robotics", "In-house actuators and manipulators", "Physical intelligence for industry"],
    focus: {
      problem: "Human intelligence can design far faster than people and conventional automation can build, move, and operate in the physical world.",
      approach: "Vanar is developing vertically integrated, human-form robots that can work with existing tools and spaces, with its first generation built around in-house structure, actuation, manipulation, and software.",
    },
    stage: "Bootstrapped",
    sources: [
      { label: "Vanar Robots product site", url: "https://www.vanarrobots.com/" },
      { label: "Vanar Robots company profile", url: "https://www.linkedin.com/company/vanar-robots" },
    ],
    seoKeywords: ["Vanar Robots", "humanoid robotics startup India", "Mumbai robotics company", "general purpose humanoid robot", "Aryan Wagh"],
    website: "https://www.vanarrobots.com/",
    image: `${COMPANIES_BASE_URL}/vanar.webp`,
    location: "Mumbai, India",
    founders: [{ name: "Aryan Wagh", role: "Founder", image: `${FOUNDERS_BASE_URL}/aryan.webp`, linkedin: "https://www.linkedin.com/in/aryanwagh/", x: "https://x.com/ironwagh" }],
  },
  {
    slug: "illume-bio",
    name: "Illume Bio",
    aliases: ["illume Bio", "IllumeBio", "Illume Bio AMR"],
    sector: "Biotechnology / Diagnostics",
    description: "Illume Bio develops rapid, low-cost molecular diagnostics for detecting antimicrobial resistance directly from patient samples.",
    overview: [
      "Illume Bio is creating portable molecular diagnostics that can detect antimicrobial resistance at the point of care. Its approach uses smart molecular probes to make testing faster and more accessible.",
      "Co-founders Sambhav Baid and Kushal Chandak are part of the Proxima Mumbai network. Their work connects chemistry, diagnostics, and global health around one of medicine’s most urgent challenges.",
    ],
    highlights: ["Rapid AMR diagnostics", "Portable molecular testing", "Point-of-care biotechnology"],
    focus: {
      problem: "Slow or inaccessible antimicrobial-resistance diagnostics can force clinicians into trial-and-error antibiotic prescribing, delaying effective treatment and worsening resistance.",
      approach: "Illume Bio is developing rapid, low-cost, portable molecular diagnostics designed to detect antimicrobial resistance directly from patient samples.",
    },
    stage: "Backed by 3F.VC",
    sources: [
      { label: "Why 3F.VC backed Illume Bio", url: "https://www.3f.vc/blog/why-we-backed-illume-bio" },
      { label: "Illume Bio at 3F.VC", url: "https://www.3f.vc/portfolio/illume-bio" },
    ],
    seoKeywords: ["Illume Bio", "antimicrobial resistance diagnostics", "portable molecular diagnostics", "AMR startup", "rapid point of care testing"],
    image: `${COMPANIES_BASE_URL}/illumebio.webp`,
    location: "Singapore / Bengaluru",
    founders: [
      { name: "Sambhav Baid", role: "Co-founder", image: `${FOUNDERS_BASE_URL}/sambhav.webp`, linkedin: "https://www.linkedin.com/in/sambhavbaid/" },
      { name: "Kushal Chandak", role: "Co-founder", image: `${FOUNDERS_BASE_URL}/kushal.webp`, linkedin: "https://www.linkedin.com/in/kushal-chandak24/" },
    ],
  },
  {
    slug: "raeth-ai",
    name: "Raeth",
    aliases: ["Raeth AI", "Raeth Industries", "Omnibook", "omnibook.xyz"],
    sector: "Prediction Markets / Financial Software",
    description: "Raeth’s current public product is Omnibook, a live one-minute Bitcoin prediction market with continuously settling yes-or-no contracts.",
    overview: [
      "Omnibook runs a continuous market on a narrow, legible question: whether Bitcoin will close higher or lower 60 seconds from now. Participants buy Yes or No contracts, and the winning contract settles at one dollar when each round ends.",
      "Raeth’s connection to Proxima runs through Mumbai-based builders Vihan Singh and Amrit Mishra, working at the intersection of markets, software, and real-time internet products.",
    ],
    highlights: ["60-second Bitcoin markets", "Continuous yes-or-no contracts", "Real-time market settlement"],
    focus: {
      problem: "Most prediction markets resolve over hours, days, or months, leaving little room for an immediate, repeatable view on the next market move.",
      approach: "Omnibook compresses prediction into continuously running 60-second Bitcoin rounds with simple Yes and No contracts and a fixed one-dollar winning payout.",
    },
    sources: [{ label: "Omnibook live product", url: "https://omnibook.xyz/" }],
    seoKeywords: ["Omnibook prediction market", "Raeth AI", "Bitcoin prediction market", "60 second Bitcoin market", "BTC yes no contracts"],
    website: "https://omnibook.xyz/",
    image: `${COMPANIES_BASE_URL}/raeth.webp`,
    location: "India",
    founders: [
      { name: "Vihan Singh", role: "Director", image: `${FOUNDERS_BASE_URL}/vihan.webp`, linkedin: "https://www.linkedin.com/in/vihan13singh/", x: "https://x.com/vihan13singh" },
      { name: "Amrit Mishra", role: "Growth & engineering", image: `${FOUNDERS_BASE_URL}/amrit.webp`, linkedin: "https://in.linkedin.com/in/amrittmishra", x: "https://x.com/amrittmishra" },
    ],
  },
  {
    slug: "raisegate",
    name: "RaiseGate",
    aliases: ["Raisegate", "RaiseGate Connect", "raisegate.com"],
    sector: "Private Markets / Intelligence",
    description: "RaiseGate Tracker monitors public internet signals across private markets and alerts investors when a tracked company, founder, competitor, or theme materially changes.",
    overview: [
      "RaiseGate’s current flagship product is Tracker. It collects public signals across private markets, compares what changed, and emails a concise alert only when the change is relevant to a company, founder, keyword, sector, competitor, or thesis the user follows.",
      "The wider RaiseGate product family also includes Compass for investor fit and Connect for venture discovery. CEO Yash Panditrao is part of Proxima Mumbai, connecting the company to the community’s work around early-stage capital and high-signal networks.",
    ],
    highlights: ["Private-market signal tracking", "Company and founder monitoring", "Relevance-filtered email alerts"],
    focus: {
      problem: "Private-market investors must monitor fragmented public information while separating material company and founder changes from a large volume of low-value noise.",
      approach: "RaiseGate Tracker collects public signals, compares changes against a user’s watchlist and themes, and sends a compact email only when a relevant event is detected.",
    },
    sources: [
      { label: "RaiseGate Tracker", url: "https://www.raisegate.com/" },
      { label: "RaiseGate Compass", url: "https://compass.raisegate.com/" },
      { label: "RaiseGate Connect", url: "https://connect.raisegate.com/" },
    ],
    seoKeywords: ["RaiseGate Tracker", "private market intelligence", "startup signal monitoring", "venture capital company tracking", "RaiseGate Compass"],
    website: "https://www.raisegate.com/",
    image: `${COMPANIES_BASE_URL}/raisegate.webp`,
    location: "Mumbai, India",
    founders: [{ name: "Yash Panditrao", role: "CEO", image: `${FOUNDERS_BASE_URL}/yash.webp`, linkedin: "https://www.linkedin.com/in/yashpanditrao/", x: "https://x.com/yashpanditrao" }],
  },
  {
    slug: "placestation",
    name: "PlaceStation",
    aliases: ["Place Station", "placestation India", "Tejwani Industries PlaceStation"],
    sector: "Electronics Manufacturing / SMT",
    description: "PlaceStation builds a desktop SMT assembly ecosystem in India, including a pick-and-place machine, stencil tooling, and reflow equipment for electronics prototyping and production.",
    overview: [
      "PlaceStation is a home-grown desktop electronics assembly system designed, engineered, and manufactured in India by Tejwani Industries. Its lineup spans pick-and-place, stencil, soldering, and reflow equipment, with the placement machine supporting components down to 0402 and fine-pitch ICs.",
      "Founder Vishal Tejwani is part of Proxima Mumbai. The company is backed through WTFund’s non-dilutive grant program and gives the community a practical bridge between software-speed iteration and physical-product manufacturing.",
    ],
    highlights: ["Desktop SMT pick-and-place", "India-built electronics tooling", "Stencil, placement, and reflow workflow"],
    focus: {
      problem: "Small electronics teams in India often depend on imported SMT equipment that is expensive to acquire, difficult to support locally, and poorly matched to rapid prototyping.",
      approach: "PlaceStation manufactures a locally supported desktop SMT line in Kalyan, combining stencil preparation, precise component placement, soldering, and reflow into one accessible workflow.",
    },
    stage: "WTFund portfolio company",
    funding: "Non-dilutive WTFund backing; no equity taken",
    sources: [
      { label: "PlaceStation product site", url: "https://www.placestation.in/" },
      { label: "PlaceStation company story", url: "https://www.placestation.in/pages/about" },
    ],
    seoKeywords: ["PlaceStation India", "desktop SMT pick and place machine", "electronics manufacturing equipment India", "WTFund portfolio", "Vishal Tejwani"],
    website: "https://www.placestation.in/",
    image: `${COMPANIES_BASE_URL}/placestation.webp`,
    location: "Mumbai, India",
    founders: [{ name: "Vishal Tejwani", role: "Founder", image: `${FOUNDERS_BASE_URL}/vishal.webp`, linkedin: "https://www.linkedin.com/in/ivishaltejwani", x: "https://x.com/ivishaltejwani" }],
  },
  {
    slug: "techkareer",
    name: "TechKareer",
    aliases: ["Tech Kareer", "techkareer.com"],
    sector: "Technology Talent",
    description: "TechKareer helps ambitious startups and founders build strong technology teams from exceptional talent networks.",
    overview: [
      "TechKareer works on the hiring side of company building, helping early-stage teams find engineers and operators who match the speed, ownership, and technical bar startups require.",
      "Founder Harsh Agrawal is a member of Proxima Mumbai. The company turns community and talent density into a practical service for founders building their first high-leverage teams.",
    ],
    highlights: ["Startup technology hiring", "Curated talent networks", "Early-team building"],
    focus: {
      problem: "Early-stage companies need high-signal engineers quickly, but traditional recruiting can produce large, weakly matched candidate funnels and charge double-digit percentage fees.",
      approach: "TechKareer evaluates work history, projects, open-source contributions, hackathons, and technical depth, then gives clients a focused shortlist of roughly five to ten candidates per opening.",
    },
    stage: "Operating since 2024",
    traction: ["20+ companies supported", "Five to ten profiles reviewed per opening", "Flat 5% success fee after a retainer"],
    sources: [{ label: "TechKareer hiring platform", url: "https://www.techkareer.com/" }],
    seoKeywords: ["TechKareer", "startup engineering recruitment India", "technology hiring for startups", "curated developer talent", "Harsh Agrawal TechKareer"],
    website: "https://www.techkareer.com/",
    location: "India",
    founders: [{ name: "Harsh Agrawal", role: "Founder", image: `${FOUNDERS_BASE_URL}/harsh.webp`, linkedin: "https://www.linkedin.com/in/itsharshag/", x: "https://x.com/itsharshag" }],
  },
  {
    slug: "behooked",
    name: "BeHooked",
    aliases: ["Be Hooked", "behooked.ai", "BeHooked AI"],
    sector: "AI / Creative Tools",
    description: "BeHooked is an AI creative agent that turns ideas and source material into social-media-ready video content.",
    overview: [
      "BeHooked is building an AI-native workflow for short-form video creation, reducing the time between an idea and a finished piece of social content.",
      "Founder Yash Gawde is part of Proxima Mumbai. BeHooked sits at the intersection of generative AI, creator tooling, and the distribution challenges every modern company faces.",
    ],
    highlights: ["AI video creation", "Social-media content workflows", "Creator and marketing tooling"],
    focus: {
      problem: "Producing a consistent stream of short-form video requires scripting, voice, editing, and platform-specific formatting across several separate tools.",
      approach: "BeHooked combines script generation, audio synthesis, automated editing, and short-form formatting in one AI workflow for YouTube Shorts, Instagram Reels, and TikTok.",
    },
    sources: [{ label: "BeHooked AI product site", url: "https://behooked.ai/" }],
    seoKeywords: ["BeHooked AI", "AI short form video creator", "AI Reels maker", "YouTube Shorts automation", "Yash Gawde"],
    website: "https://behooked.ai/",
    image: `${COMPANIES_BASE_URL}/behooked.webp`,
    location: "India",
    founders: [{ name: "Yash Gawde", role: "Founder", image: `${FOUNDERS_BASE_URL}/yashgawde.webp`, linkedin: "https://www.linkedin.com/in/yashgawde/", x: "https://x.com/bizibeast" }],
  },
  {
    slug: "craze",
    name: "Craze",
    aliases: ["Craze HQ", "crazehq.com", "Craze YC S22"],
    sector: "AI / Video Editing",
    description: "Craze is an AI video editor that helps teams turn creative direction into polished, engaging videos in minutes.",
    overview: [
      "Craze is building an AI-native video editor that plans and edits around a creator’s direction, shortening the path from an idea to a finished video people want to watch.",
      "Co-founder and CEO Kabir Nagral is part of Proxima Mumbai. Craze brings the community’s concentration of AI builders into creative software and modern video production.",
    ],
    highlights: ["AI video editing", "Creative direction and planning", "Fast video production"],
    focus: {
      problem: "Turning creative direction and raw footage into a coherent final video still requires time-consuming planning, assembly, sound, music, graphics, and editing decisions.",
      approach: "Craze plans and researches a video, watches the supplied footage, builds the cut, and can generate supporting video, audio, music, and motion graphics from a creator’s direction.",
    },
    stage: "Y Combinator S22",
    traction: ["Eight-person team listed by Y Combinator", "Founded in 2022"],
    sources: [
      { label: "Craze AI video maker", url: "https://www.craze.ai/" },
      { label: "Craze at Y Combinator", url: "https://www.ycombinator.com/companies/craze" },
    ],
    seoKeywords: ["Craze AI video maker", "Craze YC S22", "AI video editing agent", "Kabir Nagral", "AI creative direction video"],
    website: "https://www.craze.ai/",
    image: `${COMPANIES_BASE_URL}/craze.webp`,
    location: "Mumbai, India",
    founders: [{ name: "Kabir Nagral", role: "Co-founder & CEO", image: `${FOUNDERS_BASE_URL}/kabir.webp`, linkedin: "https://in.linkedin.com/in/kabirnagral", x: "https://x.com/kabirnagral" }],
  },
  {
    slug: "poster-fun",
    name: "Poster.fun",
    aliases: ["Poster", "poster.fun", "Poster dot fun"],
    sector: "AI / Creative Tools",
    description: "Poster.fun is an AI-powered creative platform for making memes, images, and videos without design skills.",
    overview: [
      "Poster.fun gives creators fast, approachable tools for generating and remixing memes, images, and videos. Its creative studio combines AI generation with templates, brand assets, and familiar editing controls.",
      "Founder Shakti is part of Proxima Mumbai. Poster.fun connects the community to creator tooling, internet culture, and new ways for creators and brands to produce and share visual work.",
    ],
    highlights: ["AI memes, images, and video", "Templates and brand tools", "Creator marketplace"],
    focus: {
      problem: "Creators and brand teams need to respond to internet culture quickly, but conventional design workflows make high-volume meme and campaign production slow or inaccessible.",
      approach: "Poster.fun combines AI generation, remixing, templates, brand assets, and familiar editing controls so creators can produce memes, images, and campaign visuals without specialist design skills.",
    },
    traction: ["1M+ users across 190+ countries, company-reported", "75+ brand collaborations, company-reported"],
    sources: [
      { label: "Poster.fun creative platform", url: "https://poster.fun/" },
      { label: "Poster.fun company profile", url: "https://www.linkedin.com/company/posterdotfun/" },
    ],
    seoKeywords: ["Poster.fun", "AI meme generator", "AI image generator for creators", "brand meme campaigns", "Shakti Poster fun"],
    website: "https://poster.fun/",
    image: `${COMPANIES_BASE_URL}/posterfun.webp`,
    founders: [{ name: "Shakti", role: "Founder", image: `${FOUNDERS_BASE_URL}/shakti.webp`, x: "https://x.com/CyberShakti" }],
  },
  {
    slug: "svs-recruiting",
    name: "SVS Recruiting",
    aliases: ["SVS Recruit", "SVS tech recruiting", "svsrecruiting.com"],
    sector: "Technology Recruiting",
    description: "SVS Recruiting connects high-calibre Indian technology talent with vetted, ambitious teams in India and around the world.",
    overview: [
      "SVS Recruiting is a focused technology recruiting firm built around high-context matching rather than high-volume resumes. It meets and vets teams, curates roles, and helps candidates identify companies where their skills can compound.",
      "Run by engineering leader Siddharth Sharma, SVS Recruiting extends Proxima Mumbai’s talent network into practical hiring infrastructure for startups and technology companies.",
    ],
    highlights: ["Curated technology recruiting", "Vetted startup roles", "Indian engineering talent"],
    focus: {
      problem: "High-volume recruiting reduces people to keywords and funnels, making it difficult for strong engineers and ambitious teams to find a durable, high-context match.",
      approach: "SVS maps a candidate’s work, craft, and ambition, vets startup roles, and uses a human-led boutique search process to introduce a small number of relevant teams.",
    },
    sources: [{ label: "SVS Recruiting", url: "https://svsrecruiting.com/" }],
    seoKeywords: ["SVS Recruiting", "boutique technology recruiting India", "startup engineering headhunter", "vetted startup jobs India", "Siddharth Sharma recruiter"],
    website: "https://svsrecruiting.com/",
    image: `${COMPANIES_BASE_URL}/svsrecruiting.webp`,
    location: "India",
    founders: [{ name: "Siddharth Sharma", role: "Runs SVS Recruiting", image: `${FOUNDERS_BASE_URL}/siddharth.webp`, x: "https://x.com/_svs_" }],
  },
  {
    slug: "crave-icraveit",
    name: "Crave",
    aliases: ["iCraveIt", "icrave.it", "Crave Nicotine", "Crave nicotine candies"],
    sector: "Adult Nicotine Products",
    description: "Crave is a Mumbai consumer brand making smoke-free nicotine candies and gums for adults, including flavored 1.5 mg nicotine lozenges.",
    overview: [
      "Crave makes adult-only, smoke-free nicotine products in candy and gum formats. Its current range includes flavored 1.5 mg nicotine lozenges and presents the category with modern consumer branding rather than a cigarette-like format.",
      "Founded by Tanmay Yadav in Mumbai, Crave sits at the intersection of regulated consumer products, product formulation, and direct-to-consumer brand building. Nicotine is addictive, and the products are intended only for adults.",
    ],
    highlights: ["Smoke-free nicotine formats", "1.5 mg flavored lozenges", "Adult-only Mumbai consumer brand"],
    focus: {
      problem: "Adult nicotine consumers looking for a smoke-free format have few products designed with the portability, flavor, and brand experience of modern consumer goods.",
      approach: "Crave formulates nicotine candies and gums in measured adult-only formats, including 1.5 mg flavored lozenges, and sells them through a direct consumer experience.",
    },
    sources: [{ label: "Crave product site", url: "https://icrave.it/" }],
    seoKeywords: ["Crave nicotine candy India", "iCraveIt", "smoke free nicotine lozenges", "1.5 mg nicotine candy", "Tanmay Yadav Crave"],
    website: "https://icrave.it/",
    image: `${COMPANIES_BASE_URL}/crave.webp`,
    location: "Mumbai, India",
    founders: [{ name: "Tanmay Yadav", role: "Founder", image: `${FOUNDERS_BASE_URL}/tanmay%20yadav.webp`, linkedin: "https://in.linkedin.com/in/tanmayy", x: "https://x.com/yeatzus" }],
  },
];

export function getCompany(slug: string) {
  return companies.find((company) => company.slug === slug);
}
