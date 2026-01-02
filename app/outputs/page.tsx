import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import { outputs } from "@/lib/content";

export default function OutputsPage() {
  return (
    <>
      <PageHeader
        eyebrow="SCIENTIFIC DISSEMINATION"
        title="Research Outputs"
        subtitle="Academic publications and working papers"
      />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="space-y-6">
          {outputs.map((paper) => (
            <Card key={paper.id}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-foreground leading-snug">
                    {paper.title}
                  </h3>
                  <p className="text-foreground-muted text-sm">{paper.authors}</p>
                  <div className="pt-2">
                    <Badge>{paper.badge}</Badge>
                  </div>
                </div>
                {/* PDF Placeholder */}
                <div className="md:text-right shrink-0">
                  <span className="inline-block px-4 py-2 rounded-full bg-background-muted text-xs font-medium text-foreground-muted/50 cursor-not-allowed">
                    PDF Coming Soon
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}