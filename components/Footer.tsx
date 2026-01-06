import Link from "next/link";
import Image from "next/image";
import {
  footerLinks,
  euFundingStatement,
  euDisclaimer,
  fundingText,
} from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-[#86868b] py-16 text-[11px]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#424245] pb-12 mb-8">
          {/* =========================
              FUNDING & ACKNOWLEDGEMENTS
              ========================= */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-[#f5f5f7] font-serif text-[12px] tracking-wide">
              Funding &amp; Acknowledgements
            </h3>

            {/* Text block */}
            <div className="space-y-2 max-w-[560px]">
              <p className="text-[#f5f5f7] font-medium leading-snug">
                {euFundingStatement}
              </p>

              <p className="leading-relaxed text-[#86868b] text-balance">
                {fundingText}
              </p>

              {/* Official disclaimer wording (kept small but readable) */}
              <p className="text-[10px] leading-relaxed text-[#86868b]">
                {euDisclaimer}
              </p>

              <p className="text-[10px] leading-relaxed text-[#86868b]">
                Host institution: Ca’ Foscari University of Venice
              </p>
            </div>

            {/* Docked PNRR band (bigger on desktop, smaller on mobile) */}
            <div className="pt-2 max-w-[560px]">
              <div className="border-t border-[#2f2f31] pt-4">
                <div className="relative w-full h-[44px] sm:h-[56px] lg:h-[72px]">
                  <Image
                    src="/logos/pnrr-band.png"
                    alt="PNRR – NextGenerationEU – MUR – Italia Domani"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 560px"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ==========
              NAVIGATION
              ========== */}
          <div className="space-y-6">
            <h3 className="text-[#f5f5f7] font-serif text-[12px] tracking-wide">
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

          {/* ========
              PROFILES
              ======== */}
          <div className="space-y-6">
            <h3 className="text-[#f5f5f7] font-serif text-[12px] tracking-wide">
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

        {/* ===========
            BOTTOM LINE
            =========== */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px]">
          <div className="flex flex-col md:flex-row gap-3 items-center md:items-start text-center md:text-left">
            <span>© 2026 I.COPE.BEST</span>
            <span className="hidden md:inline text-[#424245]">|</span>
            <span>Project SOE_0000193</span>
            <span className="hidden md:inline text-[#424245]">|</span>
            <span>CUP H73C22001440001</span>
          </div>

          <div className="text-[10px]">
            <a
              href="https://icopebest.eu"
              className="hover:text-[#f5f5f7] transition-colors"
            >
              icopebest.eu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
