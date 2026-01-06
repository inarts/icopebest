// FILE: app/project/page.tsx
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { projectFullTitle, shortFundingText } from "@/lib/content";

export default function ProjectPage() {
  return (
    <>
      <PageHeader
        eyebrow="PROJECT"
        title="Project"
        subtitle="Scope, objectives, and design principles"
      />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-18">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Overview
          </h2>

          <div className="space-y-6 text-foreground-muted leading-relaxed text-lg">
            <p>
              I.COPE.BEST is a 24-month research project titled “{projectFullTitle}”. It studies
              how consumers navigate digital financial technologies under pandemic-era
              conditions, when uncertainty and constraints can reshape financial behaviour.
            </p>

            <p>
              A central concern is inclusion: digital finance can widen access, but it can also
              amplify gaps when individuals differ in digital skills, confidence, and financial
              literacy. The project therefore emphasizes heterogeneity—particularly for less
              tech-savvy users and groups commonly affected by capability gaps.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Objectives
          </h2>

          <ul className="space-y-3 text-foreground-muted text-lg leading-relaxed">
            <li>
              <span className="font-semibold text-foreground">O1.</span>{" "}
              Map the risks and practical challenges consumers face when using FinTech for
              financial decision-making.
            </li>
            <li>
              <span className="font-semibold text-foreground">O2.</span>{" "}
              Clarify how FinTech interacts with behavioural processes that shape consumer
              financial behaviour.
            </li>
            <li>
              <span className="font-semibold text-foreground">O3.</span>{" "}
              Examine the potential of FinTech to support financial inclusion and improve
              economic decisions.
            </li>
            <li>
              <span className="font-semibold text-foreground">O4.</span>{" "}
              Produce experimental evidence and translate it into careful, usable guidance for
              FinTech promoters and consumers.
            </li>
          </ul>
        </div>

        <div className="mt-18 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="flex flex-col h-full bg-background-muted/50 border-transparent p-10">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
              Methods in brief
            </h3>
            <ul className="space-y-3 text-foreground-muted leading-relaxed text-sm">
              <li>Behavioural economics and consumer psychology framing.</li>
              <li>Surveys and experimental tasks implemented online.</li>
              <li>
                Crowdsourcing and an interactive platform that mimics key elements of
                robo-advisors and personal banking environments.
              </li>
            </ul>
          </Card>

          <Card className="flex flex-col h-full bg-background-muted/50 border-transparent p-10">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
              Funding
            </h3>
            <p className="text-foreground-muted leading-relaxed text-sm">{shortFundingText}</p>
          </Card>
        </div>
      </div>
    </>
  );
}
