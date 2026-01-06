import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="RESOURCES"
        title="Resources"
        subtitle="Supplementary materials for researchers and public"
      />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1 */}
          <Card className="flex flex-col items-center text-center p-12">
            <div className="w-16 h-16 bg-background-muted rounded-full flex items-center justify-center mb-8 text-foreground-muted">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              Project Factsheet
            </h3>
            <p className="text-foreground-muted text-sm mb-8 max-w-xs mx-auto">
              A summary of the project goals and funding details.
            </p>
            <a
  href="/documents/deliverables/icopebest_deliverables_list.pdf"
  target="_blank"
  rel="noreferrer"
  className="px-6 py-2.5 bg-background-muted text-foreground text-xs font-semibold uppercase tracking-eyebrow rounded-full hover:bg-neutral-200"
>
  Download PDF
</a>

          </Card>

          {/* Card 2 */}
          <Card className="flex flex-col items-center text-center p-12">
            <div className="w-16 h-16 bg-background-muted rounded-full flex items-center justify-center mb-8 text-foreground-muted">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              Presentation Slides
            </h3>
            <p className="text-foreground-muted text-sm mb-8 max-w-xs mx-auto">
              Overview slides presented at the kickoff meeting.
            </p>
            <a
  href="/documents/slides/icopebest_presentation_slides.pdf"
  target="_blank"
  rel="noreferrer"
  className="px-6 py-2.5 bg-background-muted text-foreground text-xs font-semibold uppercase tracking-eyebrow rounded-full hover:bg-neutral-200"
>
  Download PDF
</a>

          </Card>
          {/* Card 3 */}
<Card className="flex flex-col items-center text-center p-12">
  <div className="w-16 h-16 bg-background-muted rounded-full flex items-center justify-center mb-8 text-foreground-muted">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h3l2-2h4l2 2h3a2 2 0 012 2v12a2 2 0 01-2 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11v6m0 0l-2-2m2 2l2-2" />
    </svg>
  </div>

  <h3 className="text-lg font-bold text-foreground mb-2">Workshop Slides</h3>
  <p className="text-foreground-muted text-sm mb-8 max-w-xs mx-auto">
    Slides for the online expert workshop (placeholder file until the final deck is uploaded).
  </p>

  <a
    href="/documents/slides/icopebest_workshop_slides.pdf"
    target="_blank"
    rel="noreferrer"
    className="px-6 py-2.5 bg-background-muted text-foreground text-xs font-semibold uppercase tracking-eyebrow rounded-full hover:bg-neutral-200"
  >
    Download PDF
  </a>
</Card>

        </div>
      </div>
    </>
  );
}