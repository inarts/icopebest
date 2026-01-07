// app/project/page.tsx
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import Image from "next/image";
import { profileLinks, shortFundingText } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import { quietBtn } from "@/components/styles";

const btn =
  "inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 transition";

const fundingLogos = [
  { src: "/logos/eu-nextgeneration.png", alt: "European Union — NextGenerationEU" },
  { src: "/logos/mur.png", alt: "Ministero dell’Università e della Ricerca (MUR)" },
  { src: "/logos/italia_domani.png", alt: "Italia Domani — PNRR" },
];

export default function ProjectPage() {
  return (
    <>
      <PageHeader
        eyebrow="PROJECT OVERVIEW"
        title="About the Project"
        subtitle="Context, objectives, and approach"
      />

      <div className="max-w-5xl mx-auto px-6 py-24 space-y-16">
        {/* Narrative — NO frame */}
        <div className="space-y-12">
          <section className="space-y-4">
            <SectionHeading>Context</SectionHeading>
            <p className="text-base text-foreground-muted leading-relaxed">
              I.COPE.BEST studies how consumers make decisions in digital financial
              environments, focusing on trust, understanding, inclusion, and perceived
              legitimacy in the use of digital and automated financial advice.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading>Objectives</SectionHeading>
            <ul className="list-disc pl-5 space-y-2 text-base text-foreground-muted leading-relaxed">
            <li>
                Generate evidence on adoption, reliance, and understanding in automated
                advice settings.
              </li>
              <li>
                Study how system framing and information presentation affect perceived
                legitimacy and fairness.
              </li>
              <li>
                Examine heterogeneity linked to digital skills and financial literacy,
                with attention to inclusion risks.
              </li>
              <li>
                Translate findings into public-facing research outputs and dissemination
                materials.
              </li>

            </ul>
          </section>

          <section className="space-y-4">
            <SectionHeading>Approach</SectionHeading>
            <p className="text-base text-foreground-muted leading-relaxed">
              The project combines literature synthesis and empirical analyses (including
              surveys and interactive tasks) to study how institutional cues and interface
              design shape user outcomes.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading>Host institution</SectionHeading>
            <p className="text-base text-foreground-muted leading-relaxed">
              Ca’ Foscari University of Venice — Venice School of Management.
            </p>
          </section>
        </div>

        {/* Funding — framed */}
        <Card className="p-10 space-y-6">
          <SectionHeading>Funding</SectionHeading>
          <p className="text-base text-foreground-muted leading-relaxed">
            {shortFundingText}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {fundingLogos.map((logo) => (
              <div key={logo.src} className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={520}
                  height={200}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Repository — framed */}
        <Card className="p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <SectionHeading>Repository</SectionHeading>
              <p className="text-base text-foreground-muted mt-1">
                Source code and version history for the public website.
              </p>
            </div>
            <a
              href={profileLinks.github}
              target="_blank"
              rel="noreferrer"
              className={quietBtn}
            >
              View on GitHub ↗
            </a>
          </div>
        </Card>

        {/* Factsheet — framed, bottom */}
        <Card className="p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <SectionHeading>Factsheet</SectionHeading>
              <p className="text-base text-foreground-muted mt-1">
                One-page public summary (PDF).
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href="/documents/factsheet/icopebest_factsheet.pdf"
                target="_blank"
                rel="noreferrer"
                className={quietBtn}
              >
                View PDF
              </a>
              <a
                href="/documents/factsheet/icopebest_factsheet.pdf"
                download
                className={quietBtn}
              >
                Download PDF
              </a>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
