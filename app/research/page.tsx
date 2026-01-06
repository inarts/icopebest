import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="CORE RESEARCH"
        title="Research"
        subtitle="Experimental methods for automated advice, trust, and inclusion"
      />

      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Methods */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Methodological approach
          </h2>

          <div className="space-y-6 text-foreground-muted leading-relaxed text-lg">
            <p>
              I.COPE.BEST develops and applies behavioral experimental methods to study
              decision-making in digital finance contexts, with a focus on automated and
              AI-mediated advice environments.
            </p>
            <p>
              The empirical core combines structured surveys with interactive tasks (e.g.,
              portfolio allocation under recommendations) to identify how institutional framing,
              explanation design, and access to human support shape reliance, understanding,
              and perceived legitimacy.
            </p>
          </div>
        </div>

        {/* Themes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Trust & reliance",
              subtitle: "Advisor identity and framing",
              desc:
                "How identity cues and institutional descriptions influence acceptance of recommendations and willingness to delegate decisions.",
            },
            {
              title: "Explanation design",
              subtitle: "Clarity and cognitive load",
              desc:
                "How explanation format and complexity affect understanding, confidence, perceived competence, and user experience.",
            },
            {
              title: "Fairness & inclusion",
              subtitle: "Legitimacy perceptions",
              desc:
                "How heterogeneous digital skills and financial literacy relate to perceived fairness, inclusion, and risks of unequal participation.",
            },
            {
              title: "Behavioral measurement",
              subtitle: "Choices + perceptions",
              desc:
                "Integrating incentivized or consequential choices with survey measures to capture reliance, trust, and legitimacy outcomes.",
            },
          ].map((theme, idx) => (
            <Card
              key={idx}
              className="flex flex-col h-full bg-background-muted/50 border-transparent p-10"
            >
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
