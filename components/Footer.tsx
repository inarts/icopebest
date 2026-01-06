import Link from "next/link";
import { footerLinks, fundingText } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-[#86868b] py-20 text-xs">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#424245] pb-12 mb-8">
          {/* Column 1: Funding (Wider) */}
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
              {footerLinks.profiles.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#f5f5f7] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left">
            <span>Copyright © 2026 I.COPE.BEST</span>
            <span className="hidden md:inline text-[#424245]">|</span>
            <span>PROJECT SOE_0000193</span>
            <span className="hidden md:inline text-[#424245]">|</span>
            <span>CUP H73C22001440001</span>
          </div>

          {/* Optional placeholders: keep or remove */}
          <div className="flex gap-6">
            <span className="hover:text-[#f5f5f7] cursor-not-allowed transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-[#f5f5f7] cursor-not-allowed transition-colors">
              Accessibility
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
