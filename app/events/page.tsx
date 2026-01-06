import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import Badge from "@/components/Badge";

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="ACADEMIC EXCHANGE"
        title="Events"
        subtitle="Seminars, workshops, and dissemination"
      />

      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Featured Event Card */}
        <div className="border border-border rounded-lg overflow-hidden shadow-soft bg-white mb-20">
          <div className="bg-background-muted/50 px-8 py-5 border-b border-border flex justify-between items-center">
            <span className="text-[10px] font-bold tracking-eyebrow text-foreground-muted uppercase">
              Upcoming
            </span>
            <Badge>Dissemination Event</Badge>
          </div>
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <span className="block text-navy-900 font-bold mb-2 text-xs uppercase tracking-eyebrow">
                29 January
              </span>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-3">
                FinTech Inclusion: Research Seminar & Workshop
              </h3>
              <p className="text-foreground-muted">Format: Online (Zoom)</p>
            </div>
            <div className="mt-6 text-foreground-muted leading-relaxed text-sm space-y-3">
  <p>
    This online expert workshop brings together academic, policy, and industry perspectives
    to discuss how automated and AI-mediated financial advice systems shape trust, understanding,
    and perceived fairness—focusing on design choices and institutional safeguards for inclusive
    participation in digital finance.
  </p>
  <p>
    The discussion is anchored in an experimental research design examining advisor framing,
    explanation interfaces, and access to human support, with attention to heterogeneous digital skills
    and financial literacy.
  </p>
</div>


            <div className="bg-background-muted rounded-lg p-8 mb-8 border border-border">
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
    className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium hover:bg-neutral-50"
  >
    View agenda (PDF)
  </a>

  <a
    href="/documents/slides/icopebest_workshop_slides.pdf"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium hover:bg-neutral-50"
  >
    Workshop slides (PDF)
  </a>
</div>

            <p className="text-xs text-foreground-muted italic">
              Materials will be updated after the event.
            </p>
          </div>
        </div>

        {/* Registration Placeholder */}
        <div className="text-center py-16 border-t border-border">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
            Registration
          </h3>
          <p className="text-foreground-muted">Registration will open soon.</p>
        </div>
      </div>
    </>
  );
}