// FILE: app/events/page.tsx
import PageHeader from "@/components/PageHeader";
import Badge from "@/components/Badge";

const btn =
  "inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-medium hover:bg-neutral-50 transition";

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="ACADEMIC EXCHANGE"
        title="Events"
        subtitle="Seminars and workshops connected to the project"
      />

      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Event block (no outer frame/shadow to match site style) */}
        <div className="mb-20">
          <div className="bg-background-muted/50 px-8 py-5 border border-border rounded-lg flex justify-between items-center">
            <span className="text-[10px] font-bold tracking-eyebrow text-foreground-muted uppercase">
              Upcoming
            </span>
            <Badge>Workshop</Badge>
          </div>

          <div className="px-8 pt-10 md:px-12 md:pt-12">
            <div className="mb-8">
              <span className="block text-navy-900 font-bold mb-2 text-xs uppercase tracking-eyebrow">
                29 January 2026
              </span>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-3">
                FinTech Inclusion: Research Seminar &amp; Workshop
              </h3>

              <p className="text-foreground-muted">
                Format: Online (Zoom)
                <br />
                <span className="text-xs">Time zone: Europe/Rome</span>
              </p>
            </div>

            <div className="mt-6 text-foreground-muted leading-relaxed text-sm space-y-3 max-w-3xl">
              <p>
                The seminar presents findings from the project’s experimental research (WP4),
                focusing on trust, understanding, and perceived fairness in automated and
                AI-mediated financial advice. Participation is open to all interested
                audiences.
              </p>
              <p>
                The workshop is designed for discussion with stakeholders, addressing design
                and institutional considerations for inclusive digital finance, including
                explanation formats and access to human support.
              </p>
            </div>

            <div className="bg-background-muted rounded-lg p-8 mb-8 border border-border mt-10 max-w-3xl">
              <h4 className="text-[10px] font-bold uppercase tracking-eyebrow text-foreground-muted mb-6">
                Schedule
              </h4>
              <ul className="space-y-6">
                <li className="flex flex-col sm:flex-row gap-2 sm:gap-10">
                  <span className="text-sm font-mono text-foreground-muted w-24 shrink-0">
                    16:00–17:00
                  </span>
                  <span className="text-foreground font-medium text-sm">
                    Research seminar
                  </span>
                </li>
                <li className="flex flex-col sm:flex-row gap-2 sm:gap-10">
                  <span className="text-sm font-mono text-foreground-muted w-24 shrink-0">
                    17:00–18:00
                  </span>
                  <span className="text-foreground font-medium text-sm">
                    Interactive workshop
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="/documents/events/icopebest_event_agenda.pdf"
                target="_blank"
                rel="noreferrer"
                className={btn}
              >
                View agenda (PDF)
              </a>

              <a
                href="/documents/slides/icopebest_workshop_slides.pdf"
                target="_blank"
                rel="noreferrer"
                className={btn}
              >
                Workshop slides (PDF)
              </a>
            </div>

            <p className="text-xs text-foreground-muted italic">
              Materials may be updated after the event.
            </p>
          </div>
        </div>

        <div className="text-center py-16 border-t border-border">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
            Registration
          </h3>
          <p className="text-foreground-muted">
            Registration details will be posted when available.
          </p>
        </div>
      </div>
    </>
  );
}
