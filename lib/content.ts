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

// FULL legal sentence (keep this in the footer)
export const fundingText =
  "This project is funded by the European Union’s NextGenerationEU plan under the Italian Ministry for Universities and Research (MUR) ‘Young Researchers – Seal of Excellence’ grant (Project SOE_0000193, CUP H73C22001440001).";

// Short version (use this on the Project page Funding section)
export const shortFundingText =
  "Funded by the European Union NextGenerationEU and the Italian Ministry for Universities and Research (MUR) “Young Researchers – Seal of Excellence” (SOE_0000193; CUP H73C22001440001).";

// Your links
export const profileLinks = {
  unive: "https://www.unive.it/data/people/13910982",
  orcid: "https://orcid.org/0000-0001-6778-4274",
  linkedin: "https://www.linkedin.com/in/ingaj/",
  github: "https://github.com/inarts/icopebest",
};

export const outputs = [
  {
    id: 1,
    title:
      "Working Paper 1: Digital financial technology use during the COVID-19 pandemic: A behavioral perspective",
    authors: "Jonaitytė, I.",
    badge: "Working paper",
    note: "Working title (may change)",
    abstract:
      "This paper examines patterns of digital financial technology use during the COVID-19 period through a behavioral lens, focusing on how uncertainty, constraints, and information frictions shape adoption and reliance. The analysis emphasizes heterogeneity in digital skills and financial literacy, highlighting potential channels through which digitalization can amplify inclusion gaps. The goal is to generate careful descriptive and behavioral evidence without conflating uptake with welfare improvements.",
    pdf: "/documents/reports/icopebest_working_paper_1.pdf",
  },
  {
    id: 2,
    title:
      "Working Paper 2: Trust in algorithmic financial decision-making: Experimental evidence",
    authors: "Jonaitytė, I.",
    badge: "Working paper",
    note: "Working title (may change)",
    abstract:
      "This paper reports experimental evidence on how individuals respond to algorithmic and AI-mediated financial recommendations, with attention to trust, comprehension, and perceived legitimacy. The design isolates the role of advisor identity cues, explanation format, and institutional access rules to human support. The analysis focuses on behavioral choices and perceived fairness/inclusion, particularly for participants with heterogeneous literacy and digital capability.",
    pdf: "/documents/reports/icopebest_working_paper_2.pdf",
  },
  {
    id: "final-report",
    title: "Final Report (placeholder)",
    authors: "I.COPE.BEST Project Team",
    badge: "Project report",
    abstract:
      "This placeholder will be replaced by the final project report. The report will summarize the research motivation, methods, key empirical findings, and dissemination activities, and will document outputs in line with project reporting requirements.",
    pdf: "/documents/reports/icopebest_final_report.pdf",
  },
];

export const footerLinks = {
  nav: siteConfig.navLinks,
  profiles: [
    { name: "Institutional Profile", href: profileLinks.unive },
    { name: "ORCID Registry", href: profileLinks.orcid },
    { name: "LinkedIn", href: profileLinks.linkedin },
    { name: "Source code (GitHub)", href: profileLinks.github },
  ],
};
