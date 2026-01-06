// app/page.tsx
import Link from "next/link";
import Card from "@/components/Card";

const quickLinks = [
  {
    title: "Project overview",
    desc: "Context, objectives, and research approach.",
    href: "/project",
  },
  {
    title: "Research outputs",
    desc: "Working papers and report PDFs, with abstracts.",
    href: "/outputs",
  },
  {
    title: "Events",
    desc: "Seminars and workshop materials.",
    href: "/events",
  },
];

const btn =
  "inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-medium hover:bg-neutral-50 transition";

export default function HomePage() {
  return (
    <>
      <section className="w-full bg-background-muted border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
          <span className="block text-[11px] font-semibold tracking-eyebrow text-foreground-muted uppercase mb-3">
            I.COPE.BEST
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-bold text-foreground mb-4 tracking-tight leading-[1.1]">
            Financial Technology Inclusion in the COVID-19 Pandemic Era
          </h1>

          <p className="text-base md:text-lg text-foreground-muted font-normal max-w-3xl text-balance leading-relaxed">
            The project examines trust, understanding, and perceived legitimacy in digital and
            automated financial advice—particularly where heterogeneous digital skills and
            financial literacy can create inclusion risks.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/project" className={btn}>
              About the project →
            </Link>
            <Link href="/outputs" className={btn}>
              Read outputs →
            </Link>
            <Link href="/resources" className={btn}>
              Resources →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((l) => (
            <Card key={l.title} className="p-8">
              <h2 className="text-xl font-serif font-bold text-foreground mb-2">
                {l.title}
              </h2>
              <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                {l.desc}
              </p>
              <Link href={l.href} className={btn}>
                Open →
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
