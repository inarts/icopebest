import Link from "next/link";
import { fundingText } from "@/lib/content";
import Card from "@/components/Card";
import Badge from "@/components/Badge";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-navy-900 text-white overflow-hidden">
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1020] via-[#0f1730] to-[#0b1020] opacity-100 z-0"></div>
        {/* CSS Noise Texture */}
        <div className="absolute inset-0 bg-noise z-0 mix-blend-overlay opacity-20"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col justify-center min-h-[75vh]">
          <div className="mb-8 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 text-[11px] font-bold tracking-eyebrow uppercase border border-white/10 rounded-full bg-white/5 backdrop-blur-md text-gray-200">
              I.COPE.BEST
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8 max-w-4xl tracking-tight">
            Financial Technology Inclusion in the COVID-19 Pandemic ERA
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-normal mb-12 max-w-2xl leading-relaxed tracking-wide">
            A Behavioral Economics perspective on digital finance adoption and
            resilience in post-pandemic society.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/project"
              className="px-8 py-3.5 bg-white text-navy-900 font-medium rounded-full hover:bg-gray-100 transition-colors text-center text-sm tracking-wide"
            >
              Read about the Project
            </Link>
            <Link
              href="/outputs"
              className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors text-center text-sm tracking-wide"
            >
              View Research Outputs
            </Link>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="bg-background py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="block text-[11px] font-semibold tracking-eyebrow text-foreground-muted uppercase mb-4">
              Overview
            </span>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4 tracking-tight">
              Addressing the Digital Divide
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-foreground-muted leading-relaxed text-lg text-justify md:text-left font-normal">
            <p>
              The rapid digitalization of financial services, accelerated by the
              global COVID-19 pandemic, has fundamentally transformed how
              individuals interact with the economy. However, this shift has
              unevenly impacted different demographics, highlighting significant
              disparities in adoption, trust, and resilience.
            </p>
            <p>
              I.COPE.BEST investigates the behavioral drivers behind these
              disparities. By applying rigorous behavioral economics methodologies,
              the project seeks to understand how perceived complexity, risk
              perception, and cognitive biases influence the uptake of digital
              financial tools, ultimately aiming to inform policy for a more
              inclusive financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-background-muted py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card href="/research">
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                Research Lines
              </h3>
              <p className="text-foreground-muted leading-relaxed text-sm flex-grow">
                Explore the key themes, methodologies, and scientific pillars supporting the project's investigation.
              </p>
              <div className="mt-6 text-xs font-semibold text-foreground uppercase tracking-eyebrow flex items-center gap-1">
                Learn More <span>&rarr;</span>
              </div>
            </div>
          </Card>

          {/* Card 2 */}
          <Card href="/events">
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                Seminars & Workshops
              </h3>
              <p className="text-foreground-muted leading-relaxed text-sm flex-grow">
                Join upcoming dissemination events, workshops, and academic exchanges held by the team.
              </p>
              <div className="mt-6 text-xs font-semibold text-foreground uppercase tracking-eyebrow flex items-center gap-1">
                View Schedule <span>&rarr;</span>
              </div>
            </div>
          </Card>

          {/* Card 3 */}
          <Card href="/contact">
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                The Team
              </h3>
              <p className="text-foreground-muted leading-relaxed text-sm flex-grow">
                Meet the Principal Investigator and the institutional partners involved in the project.
              </p>
              <div className="mt-6 text-xs font-semibold text-foreground uppercase tracking-eyebrow flex items-center gap-1">
                Contact Us <span>&rarr;</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Funding Strip */}
      <section className="bg-background py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs text-foreground-muted leading-relaxed opacity-60">
            {fundingText}
          </p>
        </div>
      </section>
    </div>
  );
}