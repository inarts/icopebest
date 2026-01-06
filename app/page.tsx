// FILE: app/page.tsx
import Link from "next/link";
import Card from "@/components/Card";
import { projectFullTitle } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="w-full bg-background-muted border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="block text-[11px] font-semibold tracking-eyebrow text-foreground-muted uppercase mb-4">
              Research project
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-[50px] font-serif font-bold text-foreground tracking-tight leading-[1.05]">
              {projectFullTitle}
            </h1>

            <p className="mt-5 text-lg md:text-xl text-foreground-muted leading-relaxed text-balance">
              I.COPE.BEST
            </p>

            <p className="mt-7 text-lg text-foreground-muted leading-relaxed max-w-2xl text-balance">
              This research project examines how people make financial decisions in increasingly digital
              environments in the COVID-19 era, with a specific focus on inclusion and on
              differences in digital capability and financial literacy.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/project"
                className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background-muted/40 transition-colors"
              >
                Project overview
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background-muted/40 transition-colors"
              >
                Research
              </Link>
              <Link
                href="/outputs"
                className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background-muted/40 transition-colors"
              >
                Outputs
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background-muted/40 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="flex flex-col h-full bg-background-muted/50 border-transparent p-10">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
              Focus
            </h2>
            <p className="text-foreground-muted leading-relaxed text-sm">
              Financial technology adoption and use during the pandemic period, and the
              implications for consumers who differ in skills, access, and confidence.
            </p>
          </Card>

          <Card className="flex flex-col h-full bg-background-muted/50 border-transparent p-10">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
              Approach
            </h2>
            <p className="text-foreground-muted leading-relaxed text-sm">
              A behavioral economics and consumer-psychology perspective, combining conceptual
              work with empirical evidence from surveys and experimental tasks.
            </p>
          </Card>

          <Card className="flex flex-col h-full bg-background-muted/50 border-transparent p-10">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
              Method tools
            </h2>
            <p className="text-foreground-muted leading-relaxed text-sm">
              Online survey questionnaires and crowdsourcing, supported by an interactive
              platform designed to mimic key features of digital banking and robo-advisor
              environments.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
