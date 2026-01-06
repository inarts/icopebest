// app/outputs/page.tsx
"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import { outputs } from "@/lib/content";

type OutputId = string | number;

type OutputItem = {
  id: OutputId;
  title: string;
  authors: string;
  badge: string;
  note?: string;
  abstract?: string;
  pdf?: string;
};

export default function OutputsPage() {
  const [openId, setOpenId] = useState<OutputId | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="SCIENTIFIC DISSEMINATION"
        title="Research Outputs"
        subtitle="Working papers, manuscripts, and reports"
      />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="space-y-6">
          {(outputs as OutputItem[]).map((paper) => {
            const isOpen = openId === paper.id;
            const absId = `abs-${paper.id}`;

            return (
              <Card key={paper.id}>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-serif font-bold text-foreground leading-snug">
                        {paper.title}
                      </h3>

                      <p className="text-foreground-muted text-sm">{paper.authors}</p>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Badge>{paper.badge}</Badge>

                        {paper.note ? (
                          <span className="text-xs text-foreground-muted">
                            {paper.note}
                          </span>
                        ) : null}

                        {paper.abstract ? (
                          <button
                            type="button"
                            onClick={() => setOpenId(isOpen ? null : paper.id)}
                            className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium hover:bg-neutral-50"
                            aria-expanded={isOpen}
                            aria-controls={absId}
                          >
                            <span className="mr-2" aria-hidden="true">
                              {isOpen ? "−" : "+"}
                            </span>
                            Abstract
                          </button>
                        ) : null}
                      </div>
                    </div>

                    <div className="md:text-right shrink-0">
                      {paper.pdf ? (
                        <div className="flex flex-wrap md:justify-end gap-2">
                          <a
                            href={paper.pdf}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium hover:bg-neutral-50"
                          >
                            View PDF
                          </a>

                          <a
                            href={paper.pdf}
                            download
                            className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium hover:bg-neutral-50"
                          >
                            Download PDF
                          </a>
                        </div>
                      ) : (
                        <span className="inline-block px-4 py-2 rounded-full bg-background-muted text-xs font-medium text-foreground-muted/50">
                          PDF forthcoming
                        </span>
                      )}
                    </div>
                  </div>

                  {paper.abstract && isOpen ? (
                    <div
                      id={absId}
                      className="border-t border-neutral-200 pt-4"
                      role="region"
                      aria-label={`Abstract for ${paper.title}`}
                    >
                      <p className="text-sm text-foreground-muted leading-relaxed">
                        {paper.abstract}
                      </p>
                    </div>
                  ) : null}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
