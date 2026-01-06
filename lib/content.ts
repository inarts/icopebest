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

/**
 * RRF / NextGenerationEU visibility (keep the EU statement as its own fixed line).
 * NOTE: The EU statement must remain exactly:
 * “Funded by the European Union – NextGenerationEU”.
 */
export const euFundingStatement = "Funded by the European Union – NextGenerationEU";

/**
 * A concise disclaimer line (web-friendly).
 * If you prefer the longer standard disclaimer, replace this with the official wording
 * from the Commission guidance you are following.
 */
export const euDisclaimer =
  "Funded by the European Union – NextGenerationEU. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Commission. Neither the European Union nor the European Commission can be held responsible for them.";

/**
 * Additional acknowledgement (national/institutional), kept separate from the fixed EU statement.
 */
export const fundingText =
  "Supported by the Italian Ministry of Universities and Research (MUR) through the ‘Young Researchers – Seal of Excellence’ grant (Project SOE_0000193; CUP H73C22001440001).";

/**
 * Short version for compact placements (e.g., Project page).
 */
export const shortFundingText =
  "Funded by the European Union – NextGenerationEU; supported by the Italian Ministry of Universities and Research (MUR) via ‘Young Researchers – Seal of Excellence’ (SOE_0000193; CUP H73C22001440001).";

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
    authors: "I.COPE.BEST",
    badge: "Project report",
    abstract:
      "This placeholder will be replaced by the final project report. The report will summarize the research motivation, methods, key empirical findings, and dissemination activities.",
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
