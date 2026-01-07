// app/contact/page.tsx
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import Image from "next/image";
import { profileLinks } from "@/lib/content";
import { quietBtn } from "@/components/styles";

const btn =
  "flex items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 transition w-full";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="Contact"
        subtitle="Institutional profile links and address"
      />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <Card className="p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* Left: identity + institution */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground leading-tight">
                  Inga Jonaitytė, Ph.D.
                </h3>
                <p className="text-sm text-foreground-muted mt-1">
                  Principal Investigator — I.COPE.BEST
                </p>
              </div>

              <div className="space-y-2 text-sm text-foreground-muted leading-relaxed">
                <p>Venice School of Management</p>
                <p>Ca’ Foscari University of Venice</p>
              </div>

              <div className="space-y-1 text-sm text-foreground-muted leading-relaxed">
                <p>Cannaregio 873</p>
                <p>Fondamenta San Giobbe</p>
                <p>30121 Venice, Italy</p>
              </div>

              {/* Institutional logos — inline, no frames */}
              <div className="pt-4">
                <div className="text-[10px] font-semibold uppercase tracking-eyebrow text-foreground-muted mb-3">
                  Host institution
                </div>

                <div className="flex items-center gap-8">
                  <a
                    href="https://www.unive.it"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Ca’ Foscari University of Venice"
                    className="opacity-90 hover:opacity-100 transition"
                  >
                    <Image
                      src="/logos/cafoscari.png"
                      alt="Ca’ Foscari University of Venice"
                      width={420}
                      height={200}
                      className="h-10 w-auto object-contain"
                    />
                  </a>

                  <a
                    href="https://www.unive.it/pag/28130/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Venice School of Management"
                    className="opacity-90 hover:opacity-100 transition"
                  >
                    <Image
                      src="/logos/vsm.png"
                      alt="Venice School of Management"
                      width={420}
                      height={200}
                      className="h-9 w-auto object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: profile links (lowered + forced column) */}
            <div className="md:mt-10 flex flex-col gap-3">
              <a
                href={profileLinks.unive}
                target="_blank"
                rel="noreferrer"
                className={`${quietBtn} w-full justify-center`}

              >
                Ca’ Foscari profile ↗
              </a>

              <a
                href={profileLinks.orcid}
                target="_blank"
                rel="noreferrer"
                className={`${quietBtn} w-full justify-center`}

              >
                ORCID ↗
              </a>

              <a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`${quietBtn} w-full justify-center`}

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
