export interface ServiceTier {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  cta: string;
  ctaParam: string;
}

export interface CaseStudy {
  headline: string;
  summary: string;
  client: string;
  tags: readonly string[];
  link: string | null;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  specialisations: readonly string[];
  photo: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  photo?: string;
}
