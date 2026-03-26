export const SITE_NAME = "Thinker Maker";
export const SITE_URL = "https://thinkermaker.com.au";
export const SITE_DESCRIPTION =
  "We embed AI into organisations with 40 years of design and product expertise. Boot camps, workflow automation, and full-scale transformation for enterprise and growing businesses.";
export const CONTACT_EMAIL = "abe@thinkermaker.com.au";

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
] as const;

export const SERVICE_TIERS = [
  {
    slug: "ai-boot-camp",
    title: "AI Boot Camp",
    tagline: "Get AI-confident in days, not months.",
    description:
      "Get your leadership team across AI in days, not months. Intensive workshops that cut through the noise — you walk out knowing where AI wins in your business and how to lead it.",
    cta: "Book a Boot Camp",
    ctaParam: "boot-camp",
  },
  {
    slug: "ai-workflows",
    title: "AI Workflow Automation",
    tagline: "Find the friction. Automate it. Move on.",
    description:
      "We audit your operations, identify high-impact opportunities, and design AI-powered workflows that stick. Flexible, project-based, built for growing businesses.",
    cta: "Start a Project",
    ctaParam: "workflows",
  },
  {
    slug: "ai-transformation",
    title: "AI Transformation",
    tagline: "Redesign how your organisation works.",
    description:
      "Full-scale process redesign and platform builds for organisations ready to restructure around AI. Multi-department rollout, vendor integration, sustained outcomes.",
    cta: "Discuss Your Transformation",
    ctaParam: "transformation",
  },
] as const;

export const CASE_STUDIES = [
  {
    headline: "Automating 3M+ annual customer contacts",
    summary:
      "Redesigned guest communications orchestration and overhauled the service desk — automating reservations, customer service, live chat, email, and voice across the hotel group.",
    client: "TFE Hotels",
    tags: ["Enterprise", "Hospitality", "AI Transformation"],
    link: "/blog",
  },
  {
    headline: "Building an autonomous integrative medicine clinic",
    summary:
      "Designed and built an AI-powered platform that removes administrative friction from clinical operations — from booking to billing, patient comms to practitioner workflows.",
    client: "Chapter",
    tags: ["Healthtech", "Platform Build", "AI Automation"],
    link: "/blog",
  },
  {
    headline: "Coming soon",
    summary: "A new case study is on the way. Check back soon for details.",
    client: "TBC",
    tags: [],
    link: null,
  },
] as const;

export const FOUNDERS = [
  {
    name: "Abe Ghani",
    role: "Founder",
    bio: "Abe embeds AI into organisations. 20 years building products, leading digital strategy, and scaling ventures — from startups to enterprise. He\u2019s the person teams bring in when they know AI matters but aren\u2019t sure where to start or how to make it stick.",
    specialisations: [
      "Agentic AI and workflow automation",
      "Product strategy and leadership",
      "Digital transformation and operations",
      "Venture design and scaling",
    ],
    photo: "/images/abe.jpg",
  },
  {
    name: "Lydie Petit",
    role: "Strategic Design Specialist",
    bio: "Lydie works at the point where ambition meets reality — when everyone agrees the experience needs to improve, but the problem isn\u2019t yet clear. 20 years in service design, UX, and digital strategy. She ensures every AI solution is human-centred and organisation-ready.",
    specialisations: [
      "Service design and experience strategy",
      "UX research (qualitative and quantitative)",
      "Brand and communication design",
      "Organisational design and change",
    ],
    photo: "/images/lydie.jpg",
  },
] as const;
