// FILE: app/research/page.tsx
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="RESEARCH"
        title="Research"
        subtitle="Approach, questions, and evidence strategy"
      />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Research approach
          </h2>

          <div className="space-y-6 text-foreground-muted leading-relaxed text-lg">
            <p>
              The project adopts a behavioural economics and consumer-psychology perspective to
              study how people interpret information, assess risk, and make choices in digital
              financial settings.
            </p>
            <p>
              Empirical work relies on online survey questionnaires and experimental tasks,
              supported by a flexible interactive platform designed to capture key features of
              robo-advisor and personal banking interfaces. The aim is to identify mechanisms
              and estimate causal relationships relevant for inclusion.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
  {
    title: "Trust and reliance",
    subtitle: "Delegation and confidence",
    desc:
      "How people evaluate digital advice and decide whether to rely on it, including perceived competence and confidence in recommendations.",
  },
  {
    title: "Explanations and understanding",
    subtitle: "Clarity and information use",
    desc:
      "How explanation formats and information presentation shape understanding, perceived risk, and decision quality in digital settings.",
  },
  {
    title: "Fairness and inclusion",
    subtitle: "Heterogeneous user needs",
    desc:
      "How differences in digital capability and financial literacy relate to uneven experiences, perceived accessibility, and inclusion.",
  },
  {
    title: "Institutional design",
    subtitle: "Perceived legitimacy",
    desc:
      "How the framing of advice systems and rules governing access to support influence perceived fairness and legitimacy.",
  },
]
.map((theme, idx) => (
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
