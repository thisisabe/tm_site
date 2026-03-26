import { SITE_NAME, SITE_URL } from "./constants";

export function jsonLdOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.svg`,
    description:
      "AI strategy, design, and execution for enterprise and growing businesses.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressCountry: "AU",
    },
    founder: [
      {
        "@type": "Person",
        name: "Abe Ghani",
        jobTitle: "Founder",
      },
      {
        "@type": "Person",
        name: "Lydie Petit",
        jobTitle: "Strategic Design Specialist",
      },
    ],
  };
}

export function jsonLdLocalBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "AI strategy, design, and execution. Boot camps, workflow automation, and full-scale transformation.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    areaServed: "AU",
  };
}

export function jsonLdService(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
