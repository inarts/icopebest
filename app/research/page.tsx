// app/research/page.tsx
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="CORE RESEARCH"
        title="Research"
        subtitle="Approach, themes, and evidence base"
      />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Research approach
          </h2>

          <div className="space-y-6 text-foreground-muted leading-relaxed text-lg">
            <p>
              I.COPE.BEST studies consumer decision-making in digital financial environments,
              focusing on trust, understanding, inclusion, and perceived legitimacy.
            </p>
            <p>
              The evidence base combines multiple research components, including conceptual work
              and empirical analyses (e.g., surveys and interactive tasks), to examine how design
              and institutional choices shape user outcomes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Trust & reliance",
              subtitle: "Framing and institutional cues",
              desc:
                "How descriptions of advice systems and institutional context influence adoption, delegation, and confidence.",
            },
            {
              title: "Information & explanations",
              subtitle: "Clarity and usability",
              desc:
                "How users interpret recommendations and supporting information, and how interface features affect understanding.",
            },
            {
              title: "Fairness & inclusion",
              subtitle: "Participation and legitimacy",
              desc:
                "How heterogeneity in skills and literacy relates to perceived fairness, inclusion, and legitimacy.",
            },
            {
              title: "Behavioral outcomes",
              subtitle: "Choices and evaluations",
              desc:
                "Integration of observed decisions with survey measures capturing perceptions and downstream intentions.",
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
              <p className="text-foreground-muted leading-relaxed text-sm">{theme.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
