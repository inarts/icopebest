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
    title:
      "Working Paper 1: Digital financial technology use during the COVID-19 pandemic: A behavioral perspective",
    authors: "Jonaitytė, I.",
    badge: "Working paper",
    note: "Provisional title.",
    abstract:
      "This working paper examines how individuals adopted and used digital financial technologies during the COVID-19 pandemic, focusing on behavioral mechanisms such as perceived risk, trust, and habit formation. The analysis highlights heterogeneity across socio-demographic groups and digital skills, and discusses implications for resilient access to financial services during systemic shocks.",
    pdf: "/documents/reports/icopebest_working_paper_1.pdf",
  },
  {
    id: 2,
    title:
      "Working Paper 2: Trust in algorithmic financial decision-making: Experimental evidence",
    authors: "Jonaitytė, I.",
    badge: "Working paper",
    note: "Provisional title.",
    abstract:
      "This working paper investigates how people form trust in algorithmic support for financial decisions and how that trust shapes choices under uncertainty. Using experimental evidence, it explores how features of the algorithmic advisor and the decision context influence reliance, perceived legitimacy, and downstream decision quality.",
    pdf: "/documents/reports/icopebest_working_paper_2.pdf",
  },
  {
    id: "final-report",
    title: "Final Report (placeholder)",
    authors: "I.COPE.BEST Project Team",
    badge: "Project report",
    abstract:
      "This document placeholder will be replaced with the final project report, including research outputs, dissemination activities, and consolidated findings. It is provided to maintain stable referencing and website structure during the reporting phase.",
    pdf: "/documents/reports/icopebest_final_report.pdf",
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