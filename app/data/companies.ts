const FOUNDERS_BASE_URL = "https://media.proximamumbai.com/founders";
const COMPANIES_BASE_URL = "https://media.proximamumbai.com/comps";

export type CompanyFounder = {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  x?: string;
};

export type Company = {
  slug: string;
  name: string;
  aliases: string[];
  sector: string;
  description: string;
  overview: [string, string];
  highlights: string[];
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
    sector: "AI / Knowledge",
    description: "Supermemory is an AI memory and knowledge layer that helps people and applications collect, organize, and recall information.",
    overview: [
      "Supermemory is building infrastructure for persistent context: a place where knowledge can be captured, connected, and made useful again instead of disappearing across tabs, files, and conversations.",
      "Inside Proxima Mumbai, Supermemory represents the kind of globally ambitious AI company the community exists to support—technically deep, product-led, and built in public by a young founder.",
    ],
    highlights: ["AI memory infrastructure", "Knowledge capture and recall", "Developer and consumer applications"],
    website: "https://supermemory.ai",
    image: `${COMPANIES_BASE_URL}/supermemory.webp`,
    location: "Mumbai, India",
    founders: [{ name: "Dhravya Shah", role: "Founder", image: `${FOUNDERS_BASE_URL}/dhravya.webp`, linkedin: "https://www.linkedin.com/in/dhravyashah/", x: "https://x.com/DhravyaShah" }],
  },
  {
    slug: "huddle01",
    name: "Huddle01",
    aliases: ["Huddle 01", "Huddle01 communication network"],
    sector: "Communication Infrastructure",
    description: "Huddle01 is a decentralized real-time communication network designed to make audio and video communication faster and less expensive.",
    overview: [
      "Huddle01 develops communication infrastructure for real-time audio and video. Its network is designed around open, distributed systems rather than the conventional centralized model used by most calling platforms.",
      "Arush Kurundodi, a founding engineer at Huddle01, is part of the Proxima Mumbai network and brings deep experience in decentralized systems and communication technology to the room.",
    ],
    highlights: ["Real-time audio and video", "Decentralized infrastructure", "Developer communication tooling"],
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
    website: "https://www.anomalybio.com/",
    image: `${COMPANIES_BASE_URL}/anomaly.webp`,
    location: "Singapore / India",
    founders: [{ name: "Armaan Dhanda", role: "Co-founder", image: `${FOUNDERS_BASE_URL}/armaan.webp`, linkedin: "https://www.linkedin.com/in/armaandh/?originalSubdomain=sg", x: "https://x.com/ArmaanDhanda1" }],
  },
  {
    slug: "manicule",
    name: "manicule",
    aliases: ["Manicule AI", "manicule.dev"],
    sector: "AI / Developer Tools",
    description: "Manicule is building AI-native workflow tools that help software teams ship and operate products faster.",
    overview: [
      "Manicule approaches software work as an AI-native system rather than adding a chatbot to an existing workflow. Its tools are built for teams that need to move from intent to reliable execution with less operational friction.",
      "Founders Shreyans Jain and Naman Bansal are members of Proxima Mumbai. Their work sits squarely inside the community’s concentration of AI systems, developer infrastructure, and high-agency product builders.",
    ],
    highlights: ["AI-native software workflows", "Developer productivity", "Product operations"],
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
    aliases: ["litefold AI", "litefold.in"],
    sector: "AI / Drug Discovery",
    description: "LiteFold builds AI infrastructure and copilots for early-stage drug discovery and life-sciences research workflows.",
    overview: [
      "LiteFold applies artificial intelligence to the earliest stages of drug discovery, where researchers need to navigate large scientific search spaces and make expensive experimental decisions.",
      "Founder Anindyadeep Sannigrahi is part of Proxima Mumbai. LiteFold connects the community’s AI talent with a high-impact scientific domain where better research tooling can meaningfully compress discovery timelines.",
    ],
    highlights: ["AI for drug discovery", "Life-sciences research infrastructure", "Scientific copilots"],
    website: "https://www.litefold.in/",
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
    website: "https://hackerfabiitb.github.io/",
    image: `${COMPANIES_BASE_URL}/hackerfab.webp`,
    location: "IIT Bombay, Mumbai",
    founders: [
      { name: "Aryamman Bhatia", role: "Founding team" },
      { name: "Abhineet Agarwal", role: "Founding team" },
      { name: "Kartik U.C.", role: "Founding team" },
    ],
  },
  {
    slug: "dawnar",
    name: "DawnAR",
    aliases: ["Dawn AR", "DawnLabs", "Dawn Augmented Reality"],
    sector: "Augmented Reality",
    description: "DawnAR is building augmented-reality technology and new ways for digital interfaces to inhabit the physical world.",
    overview: [
      "DawnAR explores augmented-reality systems that move computing beyond flat screens and into spatial, real-world experiences. The company is focused on the underlying technology and product possibilities of AR.",
      "Founder Shourya Watwani is part of Proxima Mumbai, contributing to a community strand that spans spatial computing, interface design, and ambitious emerging technology.",
    ],
    highlights: ["Augmented reality technology", "Spatial interfaces", "Emerging computing platforms"],
    website: "https://dawnar.co/",
    location: "Mumbai, India",
    founders: [{ name: "Shourya Watwani", role: "Founder", image: `${FOUNDERS_BASE_URL}/shourya.webp`, linkedin: "https://www.linkedin.com/in/shouryawatwani/", x: "https://x.com/shourshot" }],
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
    website: "https://www.vanarrobots.com/",
    image: `${COMPANIES_BASE_URL}/vanar.webp`,
    location: "Mumbai, India",
    founders: [{ name: "Aryan Wagh", role: "Founder" }],
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
    location: "Singapore / Bengaluru",
    founders: [
      { name: "Sambhav Baid", role: "Co-founder", linkedin: "https://sg.linkedin.com/in/sambhavbaid" },
      { name: "Kushal Chandak", role: "Co-founder", linkedin: "https://www.linkedin.com/in/kushal-chandak-5b52a8286" },
    ],
  },
  {
    slug: "raeth-ai",
    name: "Raeth",
    aliases: ["Raeth AI", "Raeth Industries", "Raeth Industries Private Limited"],
    sector: "AI / Reinforcement Learning",
    description: "Raeth builds reinforcement-learning environments and applied AI systems using high-signal financial and operational data.",
    overview: [
      "Raeth develops training environments that help frontier AI models improve reasoning and decision-making in complex domains, including markets and trading. The work combines proprietary data with evaluation and automation infrastructure.",
      "Raeth’s connection to Proxima runs through Mumbai-based builders working across engineering and growth, extending the community into reinforcement learning and applied frontier-model research.",
    ],
    highlights: ["Reinforcement-learning environments", "Financial reasoning data", "Applied AI and automation"],
    image: `${COMPANIES_BASE_URL}/raeth.webp`,
    location: "India",
    founders: [
      { name: "Vihan Singh", role: "Director" },
      { name: "Amrit Mishra", role: "Growth & engineering", linkedin: "https://in.linkedin.com/in/amrittmishra" },
    ],
  },
  {
    slug: "raisegate",
    name: "RaiseGate",
    aliases: ["Raisegate", "RaiseGate Connect", "raisegate.com"],
    sector: "Venture / Startup Network",
    description: "RaiseGate is a platform for connecting startups and investors and helping venture teams discover relevant companies.",
    overview: [
      "RaiseGate builds discovery and matching infrastructure for the startup and venture ecosystem. It is designed to help founders find relevant investors and help investment teams surface promising companies.",
      "CEO Yash Panditrao and COO Amrit Mishra are part of Proxima Mumbai. RaiseGate is closely connected to the community’s work around founder access, early-stage capital, and high-signal networks.",
    ],
    highlights: ["Startup and investor discovery", "Venture scouting", "Founder-to-VC matching"],
    website: "https://www.raisegate.com/",
    image: `${COMPANIES_BASE_URL}/raisegate.webp`,
    location: "Mumbai, India",
    founders: [
      { name: "Yash Panditrao", role: "CEO", image: `${FOUNDERS_BASE_URL}/yash.webp`, linkedin: "https://www.linkedin.com/in/yashpanditrao/", x: "https://x.com/yashpanditrao" },
      { name: "Amrit Mishra", role: "COO", linkedin: "https://in.linkedin.com/in/amrittmishra" },
    ],
  },
  {
    slug: "placestation",
    name: "placestation",
    aliases: ["Place Station", "placestation India"],
    sector: "Hardware / Manufacturing",
    description: "Placestation provides on-demand hardware prototyping and manufacturing workflows for builders and startups.",
    overview: [
      "Placestation helps hardware teams move from an idea to a physical prototype by reducing the friction across sourcing, fabrication, and manufacturing workflows.",
      "Founder Vishal Tejwani is part of Proxima Mumbai. Placestation gives the community a practical bridge between software-speed iteration and the slower, more fragmented realities of building physical products.",
    ],
    highlights: ["On-demand hardware prototyping", "Manufacturing workflows", "Infrastructure for physical-product teams"],
    website: "https://placestation.in",
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
    website: "https://www.techkareer.com/",
    location: "India",
    founders: [{ name: "Harsh Agrawal", role: "Founder", image: `${FOUNDERS_BASE_URL}/harsh.webp`, linkedin: "https://www.linkedin.com/in/itsharshag/", x: "https://x.com/itsharshag" }],
  },
  {
    slug: "behooked",
    name: "BeHooked",
    aliases: ["Be Hooked", "behooked.co"],
    sector: "AI / Creative Tools",
    description: "BeHooked is an AI creative agent that turns ideas and source material into social-media-ready video content.",
    overview: [
      "BeHooked is building an AI-native workflow for short-form video creation, reducing the time between an idea and a finished piece of social content.",
      "Founder Yash Gawde is part of Proxima Mumbai. BeHooked sits at the intersection of generative AI, creator tooling, and the distribution challenges every modern company faces.",
    ],
    highlights: ["AI video creation", "Social-media content workflows", "Creator and marketing tooling"],
    website: "https://behooked.co/",
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
    website: "https://www.crazehq.com/",
    location: "Mumbai, India",
    founders: [{ name: "Kabir Nagral", role: "Co-founder & CEO", linkedin: "https://in.linkedin.com/in/kabirnagral" }],
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
    website: "https://poster.fun/",
    founders: [{ name: "Shakti", role: "Founder", x: "https://x.com/cyber_shakti" }],
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
    website: "https://svsrecruiting.com/",
    location: "India",
    founders: [{ name: "Siddharth Sharma", role: "Runs SVS Recruiting" }],
  },
  {
    slug: "crave-icraveit",
    name: "Crave",
    aliases: ["iCraveIt", "icrave.it", "Crave Nicotine", "Crave nicotine candies"],
    sector: "Consumer Health",
    description: "Crave is a Mumbai consumer-health company making nicotine candies and gums as a more approachable alternative for people trying to quit smoking.",
    overview: [
      "Crave develops nicotine-replacement products that feel like modern consumer goods rather than clinical cessation aids. Its initial range includes flavored nicotine lozenges designed around the real routines and friction of quitting smoking.",
      "Founded by Tanmay Yadav in Mumbai, Crave combines regulated product development with bold consumer branding and a personal mission to help people move away from smoking.",
    ],
    highlights: ["Nicotine-replacement products", "Consumer health and cessation", "Mumbai-built D2C brand"],
    website: "https://icrave.it/",
    location: "Mumbai, India",
    founders: [{ name: "Tanmay Yadav", role: "Founder", linkedin: "https://in.linkedin.com/in/tanmayy", x: "https://x.com/yeatzus" }],
  },
];

export function getCompany(slug: string) {
  return companies.find((company) => company.slug === slug);
}
