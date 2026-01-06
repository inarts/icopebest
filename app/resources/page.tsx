// app/resources/page.tsx
import PageHeader from "@/components/PageHeader";

const btn =
  "inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-medium hover:bg-neutral-50 transition";

type ResourceRow = {
  title: string;
  desc: string;
  viewHref: string;
  downloadHref?: string;
  note?: string;
};

const resources: ResourceRow[] = [
  {
    title: "Project factsheet",
    desc: "One-page public summary (scope, methods, themes).",
    viewHref: "/documents/factsheet/icopebest_factsheet.pdf",
    downloadHref: "/documents/factsheet/icopebest_factsheet.pdf",
  },
  {
    title: "Presentation slides",
    desc: "Public-facing presentation deck (PDF).",
    viewHref: "/documents/slides/icopebest_presentation_slides.pdf",
    downloadHref: "/documents/slides/icopebest_presentation_slides.pdf",
  },
  {
    title: "Workshop slides",
    desc: "Workshop deck (PDF).",
    viewHref: "/documents/slides/icopebest_workshop_slides.pdf",
    downloadHref: "/documents/slides/icopebest_workshop_slides.pdf",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="MATERIALS"
        title="Resources"
        subtitle="Public-facing PDFs and workshop materials"
      />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="space-y-4">
          {resources.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-border bg-white shadow-soft p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="min-w-0">
                  <h2 className="text-lg font-serif font-bold text-foreground">
                    {r.title}
                  </h2>
                  <p className="text-sm text-foreground-muted leading-relaxed mt-1">
                    {r.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 shrink-0">
                  <a
                    href={r.viewHref}
                    target="_blank"
                    rel="noreferrer"
                    className={btn}
                  >
                    View PDF
                  </a>
                  {r.downloadHref ? (
                    <a href={r.downloadHref} download className={btn}>
                      Download PDF
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
