// app/project/page.tsx
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { profileLinks, shortFundingText } from "@/lib/content";

const btn =
  "inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-medium hover:bg-neutral-50 transition";

export default function ProjectPage() {
  return (
    <>
      <PageHeader
        eyebrow="PROJECT OVERVIEW"
        title="About the Project"
        subtitle="Behavioral evidence on digital finance, trust, and inclusion"
      />

      <div className="max-w-5xl mx-auto px-6 py-24 space-y-10">
        <Card className="p-10 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-foreground">Context</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              I.COPE.BEST studies how consumers make decisions in digital financial
              environments, with particular attention to trust, information processing,
              and risks of exclusion when services rely on interfaces, automation,
              and AI-mediated support.
            </p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Rather than treating adoption as purely a function of “accuracy,” the project
              focuses on the institutional and design conditions that shape perceived legitimacy:
              how advice is framed, how explanations are provided, and how access to human
              support is structured.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-foreground">Objectives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-foreground-muted leading-relaxed">
              <li>
                Generate behavioral evidence on reliance, trust, and understanding in automated
                financial advice settings.
              </li>
              <li>
                Study how institutional framings and explanation design affect perceived fairness
                and legitimacy.
              </li>
              <li>
                Examine heterogeneous responses linked to digital skills and financial literacy,
                with attention to inclusion risks.
              </li>
              <li>
                Translate findings into research outputs and practice-oriented guidance for
                responsible digital finance design.
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-foreground">Approach</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              The empirical core combines survey measurement with interactive experimental tasks
              designed to mimic key features of real advice environments (e.g., portfolio allocation,
              recommendation displays, and explanation interfaces). The design emphasizes causal
              identification of how interface and institutional choices influence reliance, confidence,
              perceived inclusion, and legitimacy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="rounded-2xl border border-neutral-200 p-6">
                <h3 className="text-sm font-semibold text-foreground mb-2">What is measured</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Behavioral choices (e.g., allocations) plus perceptions of clarity, competence,
                  trust, procedural/distributive fairness, inclusion, and legitimacy.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-6">
                <h3 className="text-sm font-semibold text-foreground mb-2">What varies</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Advisor identity cues, explanation formats, and “fair access” rules shaping when
                  and how human support is available.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-10 space-y-4">
          <h2 className="text-lg font-serif font-bold text-foreground">Funding</h2>
          <p className="text-sm text-foreground-muted leading-relaxed">{shortFundingText}</p>
          <p className="text-xs text-foreground-muted leading-relaxed">
            (The full legal funding statement is provided in the site footer.)
          </p>
        </Card>

        <Card className="p-10 space-y-4">
          <h2 className="text-lg font-serif font-bold text-foreground">
            Repository &amp; materials
          </h2>
          <p className="text-sm text-foreground-muted leading-relaxed">
            Source code and version history for the I.COPE.BEST public website.
          </p>
          <a href={profileLinks.github} target="_blank" rel="noreferrer" className={btn}>
            View on GitHub ↗
          </a>
        </Card>
      </div>
    </>
  );
}
