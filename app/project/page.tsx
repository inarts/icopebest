import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { fundingText, fullFundingText, repoUrl } from "@/lib/content";

export default function ProjectPage() {
  return (
    <>
      <PageHeader
        eyebrow="PROJECT OVERVIEW"
        title="About the Project"
        subtitle="Behavioral evidence on digital finance, trust, and inclusion"
      />

      <div className="max-w-3xl mx-auto px-6 py-24 space-y-16">
        {/* Context */}
        <section className="space-y-6">
          <h2 className="text-3xl font-serif font-bold text-foreground pb-6 border-b border-border tracking-tight">
            Context
          </h2>
          <div className="text-foreground-muted space-y-5 leading-relaxed text-lg">
            <p>
              I.COPE.BEST studies how consumers make decisions in digital financial
              environments, with particular attention to trust, information processing,
              and risks of exclusion when services rely on interfaces, automation, and
              AI-mediated support.
            </p>
            <p>
              Rather than treating adoption as purely a function of “accuracy,” the project
              focuses on the institutional and design conditions that shape perceived
              legitimacy: how advice is framed, how explanations are provided, and how
              access to human support is structured.
            </p>
          </div>
        </section>

        {/* Objectives */}
        <section className="space-y-6">
          <h2 className="text-3xl font-serif font-bold text-foreground pb-6 border-b border-border tracking-tight">
            Objectives
          </h2>

          <ul className="space-y-4 text-foreground-muted text-lg">
            {[
              "Generate behavioral evidence on reliance, trust, and understanding in automated financial advice settings.",
              "Study how institutional framings and explanation design affect perceived fairness and legitimacy.",
              "Examine heterogeneous responses linked to digital skills and financial literacy, with attention to inclusion risks.",
              "Translate findings into research outputs and practice-oriented guidance for responsible digital finance design.",
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Approach */}
        <section className="space-y-6">
          <h2 className="text-3xl font-serif font-bold text-foreground pb-6 border-b border-border tracking-tight">
            Approach
          </h2>

          <div className="text-foreground-muted space-y-5 leading-relaxed text-lg">
            <p>
              The empirical core combines survey measurement with interactive experimental tasks
              designed to mimic key features of real advice environments (e.g., portfolio allocation,
              recommendation displays, and explanation interfaces).
            </p>
            <p>
              The design emphasizes causal identification of how interface and institutional choices
              influence reliance, confidence, perceived inclusion, and legitimacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <Card className="p-8">
              <h3 className="text-lg font-bold text-foreground mb-2">What is measured</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Behavioral choices (e.g., allocations) plus perceptions of clarity, competence, trust,
                procedural/distributive fairness, inclusion, and legitimacy.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-lg font-bold text-foreground mb-2">What varies</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Advisor identity cues, explanation formats, and “fair access” rules shaping when and how
                human support is available.
              </p>
            </Card>
          </div>
        </section>

        {/* Funding (short, non-duplicative) */}
        <section className="space-y-6">
          <h2 className="text-3xl font-serif font-bold text-foreground pb-6 border-b border-border tracking-tight">
            Funding
          </h2>

          <div className="text-foreground-muted space-y-4 leading-relaxed text-lg">
            <p>{fundingText}</p>
            <p className="text-sm text-foreground-muted">{fullFundingText}</p>
          </div>
        </section>

        {/* Open materials / code */}
        <section className="space-y-6">
          <h2 className="text-3xl font-serif font-bold text-foreground pb-6 border-b border-border tracking-tight">
            Repository & materials
          </h2>

          <Card className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-foreground">Project website repository</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Source code and version history for the I.COPE.BEST public website.
              </p>
            </div>
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium hover:bg-neutral-50"
            >
              View on GitHub ↗
            </a>
          </Card>
        </section>
      </div>
    </>
  );
}
