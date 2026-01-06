import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="INSTITUTIONAL CHANNELS"
        title="Contact"
        subtitle="Principal investigator and profiles"
      />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <Card className="p-10 md:p-16 flex flex-col md:flex-row gap-12">
          {/* Main Info */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground tracking-tight">
                Inga Jonaitytė
              </h2>
              <p className="text-foreground-muted uppercase tracking-eyebrow text-[10px] font-bold mt-2">
                Principal Investigator
              </p>
            </div>

            <div className="text-foreground-muted leading-relaxed text-sm space-y-1">
              <p className="font-semibold text-foreground">
                Ca’ Foscari University of Venice
              </p>
              <p>Venice School of Management (VSM)</p>
              <p>San Giobbe, Cannaregio 873</p>
              <p>30121 Venice, Italy</p>
            </div>

            <div className="pt-2">
              <a
                href="mailto:Inga.Jonaityte@unive.it"
                className="text-navy-900 font-medium text-sm border-b border-navy-900/20 hover:border-navy-900 transition-colors pb-0.5"
              >
                Inga.Jonaityte@unive.it
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:w-64 space-y-8 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-12">
            <h3 className="text-[10px] font-bold uppercase tracking-eyebrow text-foreground-muted">
              Academic Profiles
            </h3>

            <div className="space-y-4 flex flex-col">
              <a
                href="https://orcid.org/0000-0001-6778-4274"
                target="_blank"
                rel="noreferrer"
                className="text-foreground-muted hover:text-foreground transition-colors text-sm font-medium flex items-center gap-2"
              >
                ORCID Registry <span className="text-xs opacity-50">↗</span>
              </a>

              <a
                href="https://www.unive.it/data/people/13910982"
                target="_blank"
                rel="noreferrer"
                className="text-foreground-muted hover:text-foreground transition-colors text-sm font-medium flex items-center gap-2"
              >
                Institutional Profile <span className="text-xs opacity-50">↗</span>
              </a>

              {/* Optional: add LinkedIn later (only if you want it public)
              <a
                href="https://www.linkedin.com/in/your-handle"
                target="_blank"
                rel="noreferrer"
                className="text-foreground-muted hover:text-foreground transition-colors text-sm font-medium flex items-center gap-2"
              >
                LinkedIn <span className="text-xs opacity-50">↗</span>
              </a>
              */}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
