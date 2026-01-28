# STYLE LOCK — I.COPE.BEST WEBSITE
*(Do not modify without explicit PI approval)*

This document freezes the visual and structural design system of the
I.COPE.BEST public website. It exists to prevent gradual design drift
and to ensure long-term consistency with institutional and EU-funded
research standards.

Any change to these rules must be explicitly approved by the PI.

---

## Global Layout

**Body**
```
font-sans antialiased min-h-screen flex flex-col bg-background
```

**Fonts**
- Sans-serif: Inter (`--font-sans`)
- Serif: Playfair Display (`--font-serif`)
Loaded via Next.js font system.

Source: app/layout.tsx

---

## Navigation (Navbar)

**Navbar container**
```
sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-border
```

**Inner wrapper**
```
max-w-6xl mx-auto px-6 h-16 flex items-center justify-between
```

**Site title**
```
font-serif font-bold text-lg tracking-tight text-foreground
```

**Subtitle**
```
text-[10px] uppercase tracking-eyebrow text-foreground-muted font-medium
```

**Desktop navigation links**
```
text-[11px] font-medium uppercase tracking-eyebrow
```
- Active: `text-foreground`
- Inactive: `text-foreground-muted hover:text-foreground`

**Mobile menu**
```
bg-background border-b border-border shadow-soft py-8 px-6
```

Source: components/Navbar.tsx

---

## Page Header

**Header container**
```
w-full bg-background-muted border-b border-border py-12 md:py-16
```

**Eyebrow**
```
text-[11px] font-semibold tracking-eyebrow text-foreground-muted uppercase
```

**H1 title**
```
text-4xl md:text-5xl lg:text-[56px]
font-serif font-bold text-foreground
tracking-tight leading-[1.1]
```

**Subtitle**
```
text-base md:text-lg text-foreground-muted
max-w-2xl leading-relaxed text-balance
```

Source: components/PageHeader.tsx

---

## Section Headings

**H2**
```
text-3xl font-serif font-bold text-foreground
```

Source: components/SectionHeading.tsx

---

## Cards

**Base card**
```
block bg-white border border-border rounded-lg p-8
transition-all duration-300
hover:shadow-soft hover:-translate-y-[2px]
```

Cards may render as <div> or <Link>, but must always use this base.

Source: components/Card.tsx

---

## Badges

**Base badge**
```
inline-flex items-center px-3 py-1 rounded-md
text-[10px] font-semibold tracking-eyebrow uppercase
```

**Variants (all low-salience)**
- default
```
bg-[rgba(0,0,0,0.04)] text-foreground-muted border border-border
```
- subtle
```
bg-background-muted text-foreground-muted border border-border
```
- outline
```
bg-transparent text-foreground-muted border border-border
```

Source: components/Badge.tsx

---

## Footer (Funding & Institutional Area)

**Footer container**
```
bg-[#1d1d1f] text-[#86868b] py-16 text-[11px]
```

**Section headings**
```
text-[#f5f5f7] font-serif text-[12px] tracking-wide
```

**Primary funding text**
```
text-[#f5f5f7] font-medium leading-snug
```

**Disclaimers / small print**
```
text-[10px] leading-relaxed text-[#86868b]
```

**Bottom line**
```
text-[10px]
```

⚠ The footer is the ONLY place where:
- funding acknowledgements appear
- EU / MUR / NextGenerationEU logos appear
- official disclaimers are shown

Source: components/Footer.tsx

---

## Absolute Rules (Non-Negotiable)

- No black or high-salience buttons
- No ad-hoc typography in pages
- No inline spacing replacing Card or PageHeader rhythm
- No duplication of funding language outside the footer
- No marketing or promotional tone
- No internal administrative material on public pages

---

## Governance Note

This style lock is part of the project’s governance infrastructure.
Breaking it introduces reputational and compliance risk for an
EU-funded academic project.

When in doubt: do nothing, or ask the PI.
