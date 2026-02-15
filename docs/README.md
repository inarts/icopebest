# I.COPE.BEST Preregistration Documents

This directory contains the preregistration documents for Experiment 2 of the I.COPE.BEST research project.

## Files

### `preregistration-outline.md`
Markdown version of the preregistration, suitable for:
- Version control and diff tracking
- Quick reference during analysis
- Online viewing (GitHub, OSF)

### `main.tex`
LaTeX version of the preregistration, suitable for:
- Generating formal PDF documents
- Submission to journals or archives
- Professional typesetting with tables and references

## Key Information

**Registration Venue:** OSF Registries → OSF Preregistration  
**Version:** Final (aligned with Qualtrics/JavaScript implementation)  
**Date:** 2026-02-15

## Variable Naming

All variable names in these documents match the exported dataset exactly:
- `T_E2_ID`: AI identity disclosure treatment
- `T_E2_MSG`: Messaging around disclosure  
- `T_E1_ACCESS`: Equal access treatment from Experiment 1

See Section 2 in either document for complete variable mapping.

## Confirmatory Sample

**Definition:** `Finished = 1 AND RA_COMPLETE = 1`

**NO confirmatory exclusions** based on:
- Quality flags (RA_QUAL, RA_QUALS, RA_QUALL)
- Attention checks (ATTN_7)
- Exposure/comprehension variables

These are reserved for sensitivity analyses only.

## Multiplicity Control

**Method:** Holm-Bonferroni sequential procedure  
**Family:** Three confirmatory tests (H1, H2, H5)  
**Alpha:** 0.05 (family-wise)

## Compiling LaTeX

To generate PDF from `main.tex`:

```bash
pdflatex main.tex
pdflatex main.tex  # Run twice for references
```

## Internal Use Only

These documents are internal working documents for the research team. For public-facing materials, see the `public/documents/` directory in the project website repository.

---

**Contact:** Via [icopebest.eu](https://www.icopebest.eu)  
**PI:** Inga Jonaitytė, Ph.D.
