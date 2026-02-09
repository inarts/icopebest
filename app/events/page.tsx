import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { quietBtn } from "@/components/styles";

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="ACADEMIC EXCHANGE"
        title="Events"
        subtitle="Seminars and workshops connected to the project"
      />

      <div className="max-w-5xl mx-auto px-6 py-24 space-y-12">
        {/* =========================
            RESEARCH SEMINAR (now first, Feb 9)
            ========================= */}
        <Card>
          {/* Meta */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-sm text-foreground-muted">
              <span className="font-medium">9 February 2026</span>
              <span className="mx-2 text-border">•</span>
              <span>Online (Zoom)</span>
              <span className="mx-2 text-border">•</span>
              <span>11:00–12:00</span>
            </div>

            <div className="text-sm text-foreground-muted">
              Audience: <span className="font-medium">Faculty / Researchers</span>
            </div>
          </div>

          <h2 className="mt-4 text-3xl font-serif font-bold text-foreground tracking-tight leading-tight">
            Automated Advice, Trust, and Fairness in Financial Decision-Making
          </h2>

          <p className="mt-4 text-base text-foreground-muted leading-relaxed max-w-3xl">
            Research seminar presenting ongoing work from the I.COPE.BEST project on how people
            understand and use automated investment advice. The focus is on experimental design,
            measurement, and identification strategy; early descriptive patterns may be shared if
            available at the time of the talk.
          </p>

          {/* Details */}
          <div className="mt-8 rounded-2xl border border-border bg-background-muted/50 p-6">
            <div className="text-[10px] font-semibold uppercase tracking-eyebrow text-foreground-muted mb-4">
              Details
            </div>

            <ul className="space-y-2 text-sm text-foreground-muted">
              <li>Language: English</li>
              <li>Audience: Faculty, PhD students, graduate students</li>
              <li>Speaker: Inga Jonaitytė (Venice School of Management)</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-2">
            <a
              href="https://univemanagement.eu.qualtrics.com/jfe/form/SV_eWBQbOif6xHKdSK"
              target="_blank"
              rel="noreferrer"
              className={quietBtn}
            >
              Register (Qualtrics)
            </a>
            <a
              href="/documents/events/20260209_icopebest_seminar.pdf"
              target="_blank"
              rel="noreferrer"
              className={quietBtn}
            >
              Download Flyer (PDF)
            </a>
          </div>
        </Card>

        {/* =========================
            EXPERT WORKSHOP (now second, Feb 10)
            ========================= */}
        <Card>
          {/* Meta */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-sm text-foreground-muted">
              <span className="font-medium">10 February 2026</span>
              <span className="mx-2 text-border">•</span>
              <span>Online (Zoom)</span>
              <span className="mx-2 text-border">•</span>
              <span>18:00–19:00</span>
            </div>

            <div className="text-sm text-foreground-muted">
              Audience: <span className="font-medium">Practitioners / Stakeholders</span>
            </div>
          </div>

          <h2 className="mt-4 text-3xl font-serif font-bold text-foreground tracking-tight leading-tight">
            Consulenza finanziaria digitale nell'era del FinTech: fiducia, disclosure e accesso al supporto umano
          </h2>

          <p className="mt-4 text-base text-foreground-muted leading-relaxed max-w-3xl">
            Workshop online con practitioner e stakeholder su come progettare e governare la
            consulenza finanziaria digitale in modo responsabile. La discussione si concentra su
            trasparenza, presentazione del fornitore e regole di accesso alla consulenza umana, con
            attenzione a fiducia, equità e inclusione.
          </p>

          {/* Details */}
          <div className="mt-8 rounded-2xl border border-border bg-background-muted/50 p-6">
            <div className="text-[10px] font-semibold uppercase tracking-eyebrow text-foreground-muted mb-4">
              Details
            </div>

            <ul className="space-y-2 text-sm text-foreground-muted">
              <li>Language: Italian (bilingual materials possible)</li>
              <li>Format: Interactive, discussion-led</li>
              <li>Facilitator: Inga Jonaitytė (Venice School of Management)</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-2">
            <a
              href="https://univemanagement.eu.qualtrics.com/jfe/form/SV_dg35JkhIczJhi9U"
              target="_blank"
              rel="noreferrer"
              className={quietBtn}
            >
              Register (Qualtrics)
            </a>
            <a
              href="/documents/events/20260210_icopebest_workshop.pdf"
              target="_blank"
              rel="noreferrer"
              className={quietBtn}
            >
              Download Flyer (PDF)
            </a>
            <a
              href="/documents/events/20260210_workshop_agenda.pdf"
              target="_blank"
              rel="noreferrer"
              className={quietBtn}
            >
              Workshop Agenda (PDF)
            </a>
          </div>
        </Card>

        {/* =========================
            BRIDGE NOTE
            ========================= */}
        <div className="text-sm text-foreground-muted max-w-3xl">
          <p>
            <strong>EN:</strong> The seminar focuses on research framing and experimental design,
            while the workshop shifts to practical implications and design trade-offs—using the same
            institutional choices as a shared reference point.
          </p>
          <p className="mt-2">
            <strong>IT:</strong> Il seminario si concentra su quadro concettuale e disegno
            sperimentale, mentre il workshop sposta il focus su implicazioni pratiche e trade-off di
            progettazione, usando le stesse scelte istituzionali come riferimento comune.
          </p>
        </div>
      </div>
    </>
  );
}