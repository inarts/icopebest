import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { profileLinks } from "@/lib/content";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="Contact"
        subtitle="Academic profile links and workshop-related inquiries"
      />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-10">
            <h3 className="text-lg font-serif font-bold text-foreground mb-3">
              Institutional profile
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed mb-6">
              Ca’ Foscari University of Venice — Venice School of Management.
            </p>
            <a
              href={profileLinks.unive}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium hover:bg-neutral-50"
            >
              View profile ↗
            </a>
          </Card>

          <Card className="p-10">
            <h3 className="text-lg font-serif font-bold text-foreground mb-3">
              Research identifiers
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed mb-6">
              ORCID is the preferred identifier for publications and research outputs.
            </p>
            <a
              href={profileLinks.orcid}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium hover:bg-neutral-50"
            >
              ORCID 0000-0001-6778-4274 ↗
            </a>
          </Card>

          <Card className="p-10 md:col-span-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-3">
                  Professional contact
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  For workshop participation, dissemination, or collaboration inquiries, LinkedIn is a convenient channel.
                </p>
              </div>

              <a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium hover:bg-neutral-50"
                aria-label="LinkedIn profile"
              >
                {/* Minimal LinkedIn icon */}
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H7.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452z" />
                </svg>
                LinkedIn ↗
              </a>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
