# I.COPE.BEST Experiment 2 – Preregistration Outline

**Project:** I.COPE.BEST  
**PI:** Inga Jonaitytė, Ph.D.  
**Institution:** Ca' Foscari University of Venice – Venice School of Management  
**Registration Venue:** OSF Registries → OSF Preregistration  
**Version:** Final (aligned with Qualtrics/JavaScript implementation)

---

## 1. Study Overview

### 1.1 Research Question
Does the identity disclosure of an AI financial advisor and the messaging around that disclosure affect users' trust, engagement, and allocation decisions?

### 1.2 Registration Information
- **Platform:** OSF Preregistration template
- **Status:** This document reflects the final implementation as deployed in Qualtrics with embedded JavaScript task
- **Compliance:** All variable names match the exported dataset structure
- **ED Field Constraints:** All Qualtrics Embedded Data field names ≤20 characters

---

## 2. Variable Naming Convention

### 2.1 Implemented Variable Names
The following variable names are used throughout this preregistration and match the exported dataset:

**Experiment 2 Treatment Variables:**
- `T_E2_ID`: AI identity disclosure treatment (0=No Disclosure, 1=Disclosure)
- `T_E2_MSG`: Messaging around disclosure (0=Neutral, 1=Positive framing, 2=Warning framing)

**Experiment 1 Treatment Variable:**
- `T_E1_ACCESS`: Equal access treatment from Experiment 1 (0=Unequal, 1=Equal)

### 2.2 Variable Name Mapping (Planned → Implemented)
For transparency, the following table shows the evolution from initial planning to final implementation:

| Planned Name | Implemented Name | Rationale |
|--------------|------------------|-----------|
| AI_ID | T_E2_ID | Clearer treatment prefix; ED character limit |
| AI_DIS | T_E2_MSG | More descriptive; indicates messaging type |
| E1_EQUAL_ACCESS | T_E1_ACCESS | Shorter; consistent prefix; ED limit |

**Note:** All subsequent references in this document use the implemented names (right column).

---

## 3. Experimental Design

### 3.1 Treatment Structure (Experiment 2)

**Factor 1: AI Identity Disclosure (T_E2_ID)**
- 0 = No disclosure
- 1 = Disclosure revealed

**Factor 2: Disclosure Messaging (T_E2_MSG)**
- 0 = Neutral framing
- 1 = Positive framing (emphasizes benefits of AI)
- 2 = Warning framing (emphasizes risks/limitations of AI)

**Design:** 2 × 3 between-subjects factorial with T_E2_ID and T_E2_MSG

**Experiment 1 carryover:**
- `T_E1_ACCESS`: Participants carry forward their Experiment 1 treatment assignment (equal vs. unequal access)

### 3.2 Exposure Guarantee and Gate Design

**Implementation:** An overlay gate is embedded directly inside the interactive JavaScript task (not a separate Qualtrics page).

**Gate Specifications:**
- **Minimum viewing time:** 3 seconds
- **Interaction requirement:** Selection required to continue
- **Visual design:** Overlay that blocks task interaction until conditions met

**Logged Variables:**
- `E2_GATEAT`: Timestamp when gate was first displayed
- `E2_GATEPA`: Gate interaction/selection timestamp  
- `E2_GATEMS`: Total time gate was displayed (milliseconds)
- `MC_IDCHK`: Multiple-choice ID comprehension check response
- `MC_IDCORR`: Whether comprehension check was correct (1=correct, 0=incorrect)
- `E2_EXPOSE_ID`: Confirmed exposure to identity disclosure (based on gate interaction)
- `E2_EXPOSE_MSG`: Confirmed exposure to messaging content
- `E2_EXPOSE_REC`: Exposure record/verification flag

**Purpose:** These variables enable exposure checks, comprehension validation, and attention monitoring for sensitivity analyses and per-protocol analyses only. They are NOT used for confirmatory exclusions (see Section 5.3).

---

## 4. Data Integrity and Flow Control

### 4.1 Fail-Safe Branching with RA_COMPLETE

**Logic:**
- `RA_COMPLETE == 1` → Participant proceeds to survey completion
- `RA_COMPLETE != 1` → Survey terminates with fail-safe message

**RA_COMPLETE Definition:**
`RA_COMPLETE` is set to 1 at the commit moment when the "Next" button becomes enabled in the reallocation task. This indicates the participant has made a valid allocation decision.

**Purpose:**
- Ensures only participants who complete the core experimental task reach the end of the survey
- Prevents incomplete or invalid data from entering the dataset
- `RA_COMPLETE` is part of the confirmatory sample definition (see Section 5.1)

---

## 5. Sample Definition and Exclusions

### 5.1 Confirmatory Sample Definition (Experiment 2)

**Rule:** A participant is in the confirmatory sample if and only if:
```
Finished = 1 AND RA_COMPLETE = 1
```

**Where:**
- `Finished = 1`: Qualtrics survey completion flag
- `RA_COMPLETE = 1`: Valid reallocation task completion (as defined in Section 4.1)

### 5.2 Primary Dependent Variable (E2)
- **Primary DV:** `RA_ADL1` (reallocation decision towards AI advisor, scaled 0-100)

### 5.3 Confirmatory Exclusions

**NO confirmatory exclusions based on:**
- Quality flags: `RA_QUAL`, `RA_QUALS`, `RA_QUALL` (see Section 6)
- Attention checks: `ATTN_7` (see Section 6)
- Exposure/comprehension variables: `E2_EXPOSE_ID`, `E2_EXPOSE_MSG`, `MC_IDCHK`, `MC_IDCORR`

**Rationale:** These measures are reserved for sensitivity and per-protocol analyses only (Section 8).

---

## 6. Quality Flags (Sensitivity Use Only)

### 6.1 Quality Flag Variables

**RA_QUALS (Strict Quality Flag):**
- Strict quality criteria for reallocation task behavior
- 1 = Pass strict quality check
- 0 = Fail strict quality check

**RA_QUALL (Lenient Quality Flag):**
- Lenient quality criteria for reallocation task behavior
- 1 = Pass lenient quality check
- 0 = Fail lenient quality check

**RA_QUAL (3-Level Aggregate Quality Flag):**
- 2 = Strict pass (passes both strict and lenient)
- 1 = Lenient-only pass (passes lenient but not strict)
- 0 = Fail (fails both lenient and strict)

### 6.2 ATTN_7 (Attention Check)
- Standard attention check item in survey
- Response coded as pass/fail
- **Not used for confirmatory exclusions**

### 6.3 Usage
All quality flags and attention checks are for:
- **Sensitivity analyses:** Testing robustness of main results to different quality thresholds
- **Per-protocol analyses:** Examining effects among high-quality respondents
- **NOT for confirmatory hypothesis testing**

---

## 7. Timing Parameters

### 7.1 Task Timing Thresholds

**RA_MINTIME:** 5000 milliseconds (5 seconds)
- Minimum time required for valid task engagement
- Used in quality flag calculations

**RA_MAXFIRST:** 180000 milliseconds (180 seconds = 3 minutes)
- Maximum time for first interaction/decision
- Used in quality flag calculations to detect inattentive or distracted behavior

### 7.2 Implementation
These timing parameters are enforced in the JavaScript task logic and recorded in the dataset for quality assessment.

---

## 8. Hypotheses and Analysis Plan

### 8.1 Confirmatory Hypotheses

**H1 (Main Effect of Identity Disclosure):**
Participants assigned to T_E2_ID=1 (disclosure) will show different allocation behavior (RA_ADL1) compared to T_E2_ID=0 (no disclosure).

**H2 (Main Effect of Messaging):**
Participants will show different allocation behavior (RA_ADL1) across T_E2_MSG levels (neutral vs. positive vs. warning framing).

**H5 (Interaction Effect):**
The effect of T_E2_ID on RA_ADL1 will differ by T_E2_MSG level (T_E2_ID × T_E2_MSG interaction).

### 8.2 Statistical Approach

**Model:**
Linear regression (OLS) with RA_ADL1 as dependent variable:
```
RA_ADL1 ~ T_E2_ID + T_E2_MSG + T_E2_ID × T_E2_MSG + controls
```

**Controls may include:**
- `T_E1_ACCESS`: Experiment 1 treatment carryover
- Demographics (age, gender, education, financial literacy)
- Prior trust measures from Experiment 1

### 8.3 Multiplicity Control

**Family-Wise Error Rate (FWER) Control:**
- **Method:** Holm-Bonferroni sequential procedure
- **Family:** Three confirmatory tests (H1, H2, H5)
- **Alpha level:** α = 0.05 (family-wise)

**Procedure:**
1. Rank p-values: p₁ ≤ p₂ ≤ p₃
2. Test sequentially:
   - Compare p₁ to α/3
   - Compare p₂ to α/2 (if p₁ ≤ α/3)
   - Compare p₃ to α/1 (if p₂ ≤ α/2)
3. Stop at first non-significant test

**Note:** Holm-Bonferroni controls FWER while being more powerful than Bonferroni correction.

---

## 9. Secondary and Exploratory Analyses

### 9.1 Secondary Outcomes
Additional dependent variables may include:
- Trust measures
- Engagement metrics
- Confidence ratings
- Follow-up decision measures

### 9.2 Exploratory Analyses
- Heterogeneous treatment effects by participant characteristics
- Mediation analyses (trust → allocation)
- Per-protocol analyses using quality flags (RA_QUAL levels)
- Sensitivity analyses excluding low-attention respondents (ATTN_7, exposure checks)

### 9.3 Statistical Note
Secondary and exploratory analyses are not subject to the same FWER control as confirmatory tests. Results will be interpreted with appropriate caution regarding multiple comparisons.

---

## 10. Data Management

### 10.1 Data Export
- Qualtrics exports include all Embedded Data fields
- Variable names in export match this preregistration exactly
- Raw data retained with all quality and timing variables

### 10.2 Data Cleaning
- Apply confirmatory sample definition (Section 5.1)
- Retain excluded cases for sensitivity analyses
- Document all data transformations

### 10.3 Reproducibility
- Analysis scripts will be version-controlled
- All analyses will be reproducible from raw exported data
- Quality flags and timing variables preserved for sensitivity checks

---

## Appendix A: Complete Variable List

### Treatment Assignment
- `T_E2_ID`: Identity disclosure (0/1)
- `T_E2_MSG`: Messaging frame (0/1/2)
- `T_E1_ACCESS`: E1 carryover (0/1)

### Task Completion
- `RA_COMPLETE`: Task completion flag (0/1)
- `Finished`: Survey completion (0/1)

### Primary Outcome
- `RA_ADL1`: Allocation to AI advisor (0-100)

### Exposure and Comprehension
- `E2_GATEAT`: Gate display timestamp
- `E2_GATEPA`: Gate interaction timestamp
- `E2_GATEMS`: Gate display duration (ms)
- `MC_IDCHK`: Comprehension check response
- `MC_IDCORR`: Comprehension correctness (0/1)
- `E2_EXPOSE_ID`: ID exposure confirmation
- `E2_EXPOSE_MSG`: Message exposure confirmation
- `E2_EXPOSE_REC`: Exposure record

### Quality and Timing
- `RA_MINTIME`: Minimum time threshold (5000ms)
- `RA_MAXFIRST`: Max first-interaction time (180000ms)
- `RA_QUALS`: Strict quality flag (0/1)
- `RA_QUALL`: Lenient quality flag (0/1)
- `RA_QUAL`: Aggregate quality (0/1/2)
- `ATTN_7`: Attention check response

---

## Appendix B: Registration History

**Version:** Final  
**Date:** 2026-02-15  
**Status:** Aligned with Qualtrics/JavaScript FINALv2 implementation  
**Previous versions:** Planning documents used AI_ID, AI_DIS, E1_EQUAL_ACCESS (see Section 2.2)

---

## Document Control

**Last updated:** 2026-02-15  
**Approved by:** Inga Jonaitytė, Ph.D. (PI)  
**Contact:** [project contact through icopebest.eu]

---

*This preregistration uses the OSF Preregistration template and adheres to behavioral/experimental economics standards for confirmatory vs. exploratory analyses.*
