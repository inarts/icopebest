// app/events/page.tsx
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { quietBtn } from "@/components/styles";

const btn =
  "inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 transition";

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="ACADEMIC EXCHANGE"
        title="Events"
        subtitle="Seminars and workshops connected to the project"
      />

      <div className="max-w-5xl mx-auto px-6 py-24 space-y-10">
        <Card className="p-10">
          {/* Meta line */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-sm text-foreground-muted">
              <span className="font-medium">29 January</span>
              <span className="mx-2 text-border">•</span>
              <span>Online (Zoom)</span>
              <span className="mx-2 text-border">•</span>
              <span>16:00–18:00</span>
            </div>

            <div className="text-sm text-foreground-muted">
              Status: <span className="font-medium">Scheduled</span>
            </div>
          </div>

          <h2 className="mt-4 text-3xl font-serif font-bold text-foreground tracking-tight leading-tight">
            FinTech Inclusion: Research Seminar &amp; Workshop
          </h2>

          <p className="mt-4 text-base text-foreground-muted leading-relaxed max-w-3xl">
            An online session bringing together academic and applied perspectives on how automated
            and AI-mediated financial advice systems shape trust, understanding, and perceived
            fairness—focusing on interface choices and institutional safeguards for inclusive
            participation in digital finance.
          </p>

          {/* Schedule (muted; no black emphasis) */}
          <div className="mt-8 rounded-2xl border border-border bg-background-muted/50 p-6">
            <div className="text-[10px] font-semibold uppercase tracking-eyebrow text-foreground-muted mb-4">
              Schedule
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                <div className="text-sm font-mono text-foreground-muted w-28 shrink-0">
                  16:00–17:00
                </div>
                <div className="text-base text-foreground-muted leading-relaxed">
                  Research seminar
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                <div className="text-sm font-mono text-foreground-muted w-28 shrink-0">
                  17:00–18:00
                </div>
                <div className="text-base text-foreground-muted leading-relaxed">
                  Interactive workshop
                </div>
              </div>
            </div>
          </div>

          {/* Materials */}
          <div className="mt-8 flex flex-wrap gap-2">
            <a
              href="/documents/events/icopebest_event_agenda.pdf"
              target="_blank"
              rel="noreferrer"
              className={quietBtn}
            >
              View agenda (PDF)
            </a>

            <a
              href="/documents/slides/icopebest_workshop_slides.pdf"
              target="_blank"
              rel="noreferrer"
              className={quietBtn}

            >
              Workshop slides (PDF)
            </a>
          </div>

          {/* Micro-notes */}
          <div className="mt-4 space-y-1">
            <p className="text-xs text-foreground-muted">
              Materials will be updated after the event.
            </p>
            <p className="text-xs text-foreground-muted">
              Registration details will be posted when available.
            </p>
          </div>
        </Card>

        <Card className="p-10">
          <h2 className="text-2xl font-serif font-bold text-foreground">Past events</h2>
          <p className="mt-2 text-base text-foreground-muted leading-relaxed">
            Past event listings will be added as materials become available.
          </p>
        </Card>
      </div>
    </>
  );
}
