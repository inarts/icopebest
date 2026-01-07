// app/resources/page.tsx
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

const btn =
  "inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 transition";

type Resource = {
  title: string;
  description: string;
  viewHref: string;
  downloadHref: string;
  wide?: boolean;
};

const resources: Resource[] = [
  {
    title: "Project factsheet",
    description:
      "One-page public summary of the project (PDF).",
    viewHref: "/documents/factsheet/icopebest_factsheet.pdf",
    downloadHref: "/documents/factsheet/icopebest_factsheet.pdf",
  },
  {
    title: "Presentation slides",
    description:
      "Slides used for public-facing presentations connected to the project (PDF).",
    viewHref: "/documents/slides/icopebest_presentation_slides.pdf",
    downloadHref: "/documents/slides/icopebest_presentation_slides.pdf",
  },
  {
    title: "Workshop slides",
    description:
      "Slides used for the interactive workshop session (PDF).",
    viewHref: "/documents/slides/icopebest_workshop_slides.pdf",
    downloadHref: "/documents/slides/icopebest_workshop_slides.pdf",
    wide: true,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="PUBLIC MATERIALS"
        title="Resources"
        subtitle="Downloadable public materials"
      />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((r) => (
            <Card
              key={r.title}
              className={[
                "flex flex-col h-full bg-background-muted/50 border-transparent",
                "p-8",
                r.wide ? "md:col-span-2" : "",
              ].join(" ")}
            >
              <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                {r.title}
              </h2>

              <p className="text-foreground-muted leading-relaxed text-base">
                {r.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                <a
                  href={r.viewHref}
                  target="_blank"
                  rel="noreferrer"
                  className={btn}
                >
                  View PDF
                </a>
                <a href={r.downloadHref} download className={btn}>
                  Download PDF
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
