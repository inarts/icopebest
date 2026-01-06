// FILE: app/resources/page.tsx
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { publicDocuments } from "@/lib/content";

function PdfActions({ href }: { href: string }) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-fit items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background-muted/40 transition-colors"
      >
        View PDF
      </a>
      <a
        href={href}
        download
        className="inline-flex w-fit items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background-muted/40 transition-colors"
      >
        Download
      </a>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="RESOURCES"
        title="Resources"
        subtitle="Downloadable public materials"
      />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="flex flex-col h-full bg-background-muted/50 border-transparent p-10">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
              {publicDocuments.factsheet.title}
            </h2>
            <p className="text-foreground-muted leading-relaxed text-sm">
              {publicDocuments.factsheet.note}
            </p>
            <PdfActions href={publicDocuments.factsheet.href} />
          </Card>

          {"slides" in publicDocuments && (
            <Card className="flex flex-col h-full bg-background-muted/50 border-transparent p-10">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                {publicDocuments.slides.title}
              </h2>
              <p className="text-foreground-muted leading-relaxed text-sm">
                {publicDocuments.slides.note}
              </p>
              <PdfActions href={publicDocuments.slides.href} />
            </Card>
          )}

          {"workshopSlides" in publicDocuments && (
            <Card className="flex flex-col h-full bg-background-muted/50 border-transparent p-10 md:col-span-2">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                {publicDocuments.workshopSlides.title}
              </h2>
              <p className="text-foreground-muted leading-relaxed text-sm max-w-3xl">
                {publicDocuments.workshopSlides.note}
              </p>
              <PdfActions href={publicDocuments.workshopSlides.href} />
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
