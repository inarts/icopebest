// FILE: app/contact/page.tsx
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { hostInstitution, profileLinks } from "@/lib/content";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="Contact"
        subtitle="Minimal contact details and official profiles"
      />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="flex flex-col h-full bg-background-muted/50 border-transparent p-10">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
              Principal Investigator
            </h2>
            <p className="text-foreground-muted leading-relaxed text-sm">Inga Jonaitytė</p>
            <p className="text-foreground-muted leading-relaxed text-sm">{hostInstitution}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profileLinks.unive}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background-muted/40 transition-colors"
              >
                Institutional profile
              </a>
              <a
                href={profileLinks.orcid}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background-muted/40 transition-colors"
              >
                ORCID
              </a>
              <a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background-muted/40 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </Card>

          <Card className="flex flex-col h-full bg-background-muted/50 border-transparent p-10">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
              Repository
            </h2>
            <p className="text-foreground-muted leading-relaxed text-sm mb-6">
              Website source and materials.
            </p>
            <a
              href={profileLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background-muted/40 transition-colors"
            >
              Open GitHub
            </a>
          </Card>
        </div>
      </div>
    </>
  );
}
