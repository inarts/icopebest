import PageHeader from "@/components/PageHeader";

export default function ProjectPage() {
  return (
    <>
      <PageHeader
        eyebrow="PROJECT OVERVIEW"
        title="About the Project"
        subtitle="I.COPE.BEST: Context, Objectives, and Impact"
      />
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-20">
        {/* Context */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6 pb-6 border-b border-border tracking-tight">
            Project Context
          </h2>
          <div className="text-foreground-muted space-y-6 leading-relaxed text-lg">
            <p>
              The COVID-19 pandemic acted as a catalyst for digital transformation,
              pushing financial services away from physical branches and towards
              digital interfaces. While this transition offered continuity for
              many, it also exacerbated the digital divide, leaving vulnerable
              groups behind.
            </p>
            <p>
              Understanding the behavioral mechanisms that facilitate or hinder
              technology adoption is crucial. Traditional economic models often
              assume rational adoption based on utility; however, real-world
              behavior is influenced by cognitive biases, trust deficits, and
              emotional responses to uncertainty.
            </p>
          </div>
        </section>

        {/* Objectives */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6 pb-6 border-b border-border tracking-tight">
            Objectives
          </h2>
          <ul className="space-y-4 text-foreground-muted text-lg">
            {[
              "Analyze the shift in consumer financial behavior during and after the pandemic.",
              "Identify psychological barriers to the adoption of FinTech solutions among underrepresented demographics.",
              "Evaluate the role of trust and risk perception in the use of algorithmic financial tools.",
              "Develop evidence-based recommendations to improve financial inclusion strategies.",
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Work Packages */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 pb-6 border-b border-border tracking-tight">
            Work Packages
          </h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                WP1: Behavioral Analysis
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                Quantitative analysis of large-scale datasets to map changes in
                spending and saving behaviors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                WP2: Experimental Studies
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                Controlled lab and online experiments to test hypotheses
                regarding trust in algorithms versus human advisors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                WP3: Dissemination & Policy
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                Translating research findings into actionable policy briefs and
                academic publications.
              </p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6 pb-6 border-b border-border tracking-tight">
            Expected Impact
          </h2>
          <p className="text-foreground-muted leading-relaxed text-lg">
            The project aims to provide a granular understanding of digital
            financial exclusion. By highlighting the human factor in technology
            adoption, the findings will assist policymakers and financial
            institutions in designing more inclusive interfaces and educational
            programs, ultimately fostering a more resilient digital economy.
          </p>
        </section>
      </div>
    </>
  );
}