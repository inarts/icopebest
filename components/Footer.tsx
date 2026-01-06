import Link from "next/link";
import { footerLinks, fundingText } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-[#86868b] py-20 text-xs">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#424245] pb-12 mb-8">
          {/* Column 1: Funding */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-[#f5f5f7] font-serif text-sm tracking-wide">
              Funding &amp; Acknowledgements
            </h3>
            <p className="leading-relaxed text-[#86868b] max-w-md text-balance">
              {fundingText}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <h3 className="text-[#f5f5f7] font-serif text-sm tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.nav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#f5f5f7] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Profiles */}
          <div className="space-y-6">
            <h3 className="text-[#f5f5f7] font-serif text-sm tracking-wide">
              Profiles
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.unive.it/data/people/13910982"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#f5f5f7] transition-colors"
                >
                  Institutional Profile <span className="opacity-60">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://orcid.org/0000-0001-6778-4274"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#f5f5f7] transition-colors"
                >
                  ORCID Registry <span className="opacity-60">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left">
            <span>Copyright © {new Date().getFullYear()} I.COPE.BEST</span>
            <span className="hidden md:inline text-[#424245]">|</span>
            <span>PROJECT SOE_0000193</span>
            <span className="hidden md:inline text-[#424245]">|</span>
            <span>CUP H73C22001440001</span>
          </div>

          {/* Keep commented until you actually create these pages */}
          {/*
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#f5f5f7] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="hover:text-[#f5f5f7] transition-colors">
              Accessibility
            </Link>
          </div>
          */}
        </div>
      </div>
    </footer>
  );
}
