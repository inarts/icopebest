// FILE: lib/content.ts
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

export const hostInstitution = "Ca’ Foscari University of Venice";

export const projectFullTitle =
  "Financial Technology Inclusion in the COVID-19 Pandemic Era: a Behavioral Economics Perspective";

export const fundingText =
  "This project is funded by the European Union’s NextGenerationEU plan under the Italian Ministry of Universities and Research (MUR) “Young Researchers – Seal of Excellence” grant (Project SOE_0000193; CUP H73C22001440001).";

export const euFundingStatement = "Funded by the European Union – NextGenerationEU.";

export const euDisclaimer =
  "Funded by the European Union – NextGenerationEU. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Commission. Neither the European Union nor the European Commission can be held responsible for them.";

export const profileLinks = {
  unive: "https://www.unive.it/data/people/13910982",
  orcid: "https://orcid.org/0000-0001-6778-4274",
  linkedin: "https://www.linkedin.com/in/ingaj/",
  github: "https://github.com/inarts/icopebest",
  website: "https://icopebest.eu",
};

export const publicDocuments = {
  factsheet: {
    title: "Project factsheet (PDF)",
    href: "/documents/factsheet/icopebest_factsheet.pdf",
    note: "Concise public overview of aims, methods, and funding.",
  },
  slides: {
    title: "Project slides (PDF)",
    href: "/documents/slides/icopebest_slides.pdf",
    note: "Introductory slides presenting the project scope and research questions.",
  },
  workshopSlides: {
    title: "Workshop slides (PDF)",
    href: "/documents/slides/icopebest_workshop_slides.pdf",
    note: "Slides used during the project workshop (when publicly available).",
  },
};


export const footerLinks = {
  nav: siteConfig.navLinks,
  profiles: [
    { name: "Institutional Profile", href: profileLinks.unive },
    { name: "ORCID Registry", href: profileLinks.orcid },
    { name: "LinkedIn", href: profileLinks.linkedin },
    { name: "Source code (GitHub)", href: profileLinks.github },
  ],
};

// Optional: used by Project page
export const shortFundingText =
  "Funded by the European Union’s NextGenerationEU plan under the Italian Ministry of Universities and Research (MUR) ‘Young Researchers – Seal of Excellence’ grant (Project SOE_0000193; CUP H73C22001440001).";
