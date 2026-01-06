// app/contact/page.tsx
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { profileLinks } from "@/lib/content";

const btn =
  "inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-medium hover:bg-neutral-50 transition w-full";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="Contact"
        subtitle="Institutional profile links"
      />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <Card className="p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* Left: static facts */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-foreground">
                Inga Jonaitytė
              </h3>

              <div className="space-y-2 text-sm text-foreground-muted leading-relaxed">
                <p>Venice School of Management</p>
                <p>Ca’ Foscari University of Venice</p>
                <p>Venice, Italy</p>
              </div>
            </div>

            {/* Right: links */}
            <div className="space-y-3">
              <a
                href={profileLinks.unive}
                target="_blank"
                rel="noreferrer"
                className={btn}
              >
                Ca’ Foscari profile ↗
              </a>
              <a
                href={profileLinks.orcid}
                target="_blank"
                rel="noreferrer"
                className={btn}
              >
                ORCID ↗
              </a>
              <a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className={btn}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
