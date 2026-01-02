import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="CORE RESEARCH"
        title="Research"
        subtitle="Methodological Approach and Key Themes"
      />

      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Methods Section */}
        <div className="max-w-3xl mb-24">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Methodological Approach
          </h2>
          <div className="space-y-6 text-foreground-muted leading-relaxed text-lg">
            <p>
              I.COPE.BEST employs a mixed-methods approach, combining
              quantitative data analysis with behavioral experimentation. We draw
              upon principles from Behavioral Economics and Social Psychology to
              construct a comprehensive picture of financial decision-making under
              uncertainty.
            </p>
            <p>
              Our experimental designs utilize incentivized tasks to elicit true
              preferences regarding risk, ambiguity, and trust. These are
              complemented by survey data that captures subjective perceptions of
              complexity and user experience with digital platforms.
            </p>
          </div>
        </div>

        {/* Research Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Trust & Adoption",
              subtitle: "Digital Financial Tools",
              desc: "Investigating the determinants of trust in new technologies vs traditional banking methods.",
            },
            {
              title: "Complexity",
              subtitle: "User Friction",
              desc: "Analyzing how cognitive load and interface design impact the willingness to use digital services.",
            },
            {
              title: "Risk Perception",
              subtitle: "Economic Resilience",
              desc: "Understanding how external shocks (like the pandemic) alter long-term risk aversion.",
            },
            {
              title: "Algorithms",
              subtitle: "Decision Support",
              desc: "Studying behavioral responses to automated financial advice and robo-advisors.",
            },
          ].map((theme, idx) => (
            <Card key={idx} className="flex flex-col h-full bg-background-muted/50 border-transparent">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-1">
                {theme.title}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-eyebrow text-foreground-muted mb-4 block">
                {theme.subtitle}
              </span>
              <p className="text-foreground-muted leading-relaxed text-sm">
                {theme.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}