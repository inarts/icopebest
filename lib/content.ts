export const siteConfig = {
  name: "I.COPE.BEST",
  subtitle: "RESEARCH PROJECT",
  navLinks: [
    { name: "HOME", href: "/" },
    { name: "PROJECT", href: "/project" },
    { name: "RESEARCH", href: "/research" },
    { name: "OUTPUTS", href: "/outputs" },
    { name: "EVENTS", href: "/events" },
    { name: "RESOURCES", href: "/resources" },
    { name: "CONTACT", href: "/contact" },
  ],
};

export const outputs = [
  {
    id: 1,
    title: "Digital financial technology use during the COVID-19 pandemic: A behavioral perspective",
    authors: "Jonaitytė, I. et al.",
    badge: "MANUSCRIPT IN PREPARATION",
  },
  {
    id: 2,
    title: "Trust in algorithmic financial decision-making: Experimental evidence",
    authors: "TBD",
    badge: "WORKING PAPER",
  },
];

export const fundingText = "This project is funded by the European Union’s NextGenerationEU plan under the Italian Ministry for Universities and Research (MUR) ‘Young Researchers – Seal of Excellence’ grant (Project SOE_0000193, CUP H73C22001440001).";

export const footerLinks = {
  project: "Project Overview",
  nav: siteConfig.navLinks,
  profiles: [
    { name: "Institutional Profile", href: "#" },
    { name: "ORCID Registry", href: "#" },
  ],
};