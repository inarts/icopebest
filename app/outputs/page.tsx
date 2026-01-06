// FILE: app/outputs/page.tsx
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { profileLinks } from "@/lib/content";

export default function OutputsPage() {
  return (
    <>
      <PageHeader
        eyebrow="OUTPUTS"
        title="Outputs"
        subtitle="Public research outputs (as available)"
      />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="flex flex-col h-full bg-background-muted/50 border-transparent p-10">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
              Publications
            </h2>
            <p className="text-foreground-muted leading-relaxed text-sm">
              Peer-reviewed publications and manuscripts will be listed here once publicly
              available.
            </p>
          </Card>

          <Card className="flex flex-col h-full bg-background-muted/50 border-transparent p-10">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
              Repository
            </h2>
            <p className="text-foreground-muted leading-relaxed text-sm mb-6">
              Website source and public materials.
            </p>
            <a
              href={profileLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background-muted/40 transition-colors"
            >
              View repository
            </a>
          </Card>
        </div>
      </div>
    </>
  );
}
