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


export const repoUrl = "https://github.com/inarts/icopebest";

export const fundingText =
  "Funded by the European Union NextGenerationEU and the Italian MUR “Young Researchers – Seal of Excellence” (SOE_0000193; CUP H73C22001440001).";

export const fullFundingText =
  "This project is funded by the European Union’s NextGenerationEU plan under the Italian Ministry for Universities and Research (MUR) ‘Young Researchers – Seal of Excellence’ grant (Project SOE_0000193, CUP H73C22001440001).";

export const workshop = {
  title: "Online Expert Workshop — Automated Financial Advice, Trust, and Inclusion",
  short:
    "An interactive online workshop bringing together academia, policy, and industry to discuss how automated financial advice systems shape trust, decision-making, and perceptions of fairness—focusing on design choices and feasible safeguards for inclusive digital finance.",
  long:
    "This online expert workshop convenes researchers, policymakers, and industry practitioners to examine how automated and AI-mediated financial advice systems influence investment behavior, trust, understanding, and perceptions of fairness and inclusion. The discussion focuses on institutional design choices and practical safeguards—moving beyond algorithmic accuracy—to reflect on risks of exclusion or over-reliance and feasible policy and organizational responses. The workshop is organized within the I.COPE.BEST research project and is intended as a structured exchange to inform ongoing empirical work and policy-relevant debate.",
};

export const footerLinks = {
  project: "Funding & Acknowledgements",
  nav: siteConfig.navLinks,
  profiles: [
    { name: "Institutional Profile", href: "https://www.unive.it/data/people/13910982" },
    { name: "ORCID Registry", href: "https://orcid.org/0000-0001-6778-4274" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ingaj/" },
    // Optional but very “good research practice”:
    { name: "Source code (GitHub)", href: "https://github.com/inarts/icopebest" },
  ],
};
