# Preregistration Outline: I.COPE.BEST Behavioral Experiment

**Title:** Advisor Identity, Disclaimers, and Advice-Taking in Digital Financial Services: A Preregistered Experiment  
**Authors:** Inga Jonaityte (Ca' Foscari University of Venice)  
**Version:** 2.0 (Revised per Reviewer Report)  
**Date:** January 2026  
**Registration Platform:** OSF Registries / AsPredicted (to be selected)

---

## Table of Contents

1. [Study Overview](#1-study-overview)
2. [Hypotheses](#2-hypotheses)
3. [Design and Manipulations](#3-design-and-manipulations)
4. [Primary and Secondary Outcomes](#4-primary-and-secondary-outcomes)
5. [Index Construction](#5-index-construction)
6. [Sample Size Justification](#6-sample-size-justification)
7. [Exclusion Rules](#7-exclusion-rules)
8. [Analysis Plan](#8-analysis-plan)
9. [Sensitivity and Robustness Analyses](#9-sensitivity-and-robustness-analyses)
10. [Timeline and Data Handling](#10-timeline-and-data-handling)

---

## 1. Study Overview

### 1.1 Research Questions

This study addresses two related research questions:

**RQ1 (Primary):** How do advisor identity framing and disclaimers affect consumers' adherence to algorithmic investment recommendations?

**RQ2 (Secondary):** How do access policies (wealth-gated vs. equal access) to human financial advisors affect perceived fairness and legitimacy?

### 1.2 Design Summary

The study consists of two experimental modules embedded in a single online survey:

| Module | Design | Factors | Primary DV |
|--------|--------|---------|------------|
| E2 | 2×2 between-subjects | AI_ID × AI_DIS | RA_ADL1 (adherence) |
| E1 | 2-arm between-subjects | E1_EQUAL_ACCESS | FALI (fairness index) |

### 1.3 Platform and Sample

- **Recruitment Platform:** Prolific
- **Target Population:** Adults (18+), any country, basic English fluency
- **Compensation:** €3.20 (~£2.70) for ~18 minutes (~€10.67/hour)
- **Budget-Constrained N:** 198 completions (see Section 6 for justification)

---

## 2. Hypotheses

### 2.1 Confirmatory Hypotheses

The following hypotheses are designated as **confirmatory** and will be subject to formal hypothesis testing with FDR correction for multiple comparisons.

#### H1: Advisor Identity Effect on Adherence

> Participants assigned to the independent advisor framing (AI_ID=1) will exhibit **greater adherence** to the algorithmic recommendation (lower RA_ADL1) compared to participants assigned to the bank advisor framing (AI_ID=0).

**Rationale:** Independent advisors may be perceived as having fewer conflicts of interest (e.g., cross-selling incentives), increasing trust and adherence.

**Directional Prediction:** AI_ID=1 → lower RA_ADL1

#### H2: Disclaimer Effect on Adherence

> Participants shown a disclaimer (AI_DIS=1) will exhibit **reduced adherence** to the algorithmic recommendation (higher RA_ADL1) compared to participants not shown a disclaimer (AI_DIS=0).

**Rationale:** Disclaimers ("general and may not account for your personal financial situation") signal limitations and encourage skepticism, reducing adherence.

**Directional Prediction:** AI_DIS=1 → higher RA_ADL1

#### H5: Access Policy Effect on Perceived Fairness

> Participants assigned to the wealth-gated access policy (E1_EQUAL_ACCESS=0) will perceive the policy as **less fair and legitimate** (lower FALI) compared to participants assigned to the equal access policy (E1_EQUAL_ACCESS=1).

**Rationale:** Wealth-based exclusion from human advice violates fairness norms and may evoke perceptions of being treated as "second-class" customers.

**Directional Prediction:** E1_EQUAL_ACCESS=0 → lower FALI

### 2.2 Secondary / Exploratory Hypotheses

The following hypotheses are designated as **secondary** or **exploratory**. They will be analyzed but not subject to multiple testing correction. Results will be interpreted with appropriate caution.

#### H3: Conflict of Interest as Mechanism (Secondary)

> (a) Independent advisor framing (AI_ID=1) will be associated with **lower perceived conflict of interest** (CONFL_AI) compared to bank framing (AI_ID=0).
>
> (b) Lower perceived conflict of interest (CONFL_AI) will be associated with **greater adherence** (lower RA_ADL1).
>
> (c) CONFL_AI will **mediate** the relationship between AI_ID and RA_ADL1.

**Analysis Approach:** Standard mediation analysis (Baron & Kenny, or bootstrap CI approach). Interpreted as exploratory due to single-item mediator limitation.

#### H4: Interaction Effect (Exploratory)

> The effect of advisor identity (AI_ID) on adherence (RA_ADL1) may be **moderated** by disclaimer presence (AI_DIS).

**Note:** This hypothesis is explicitly exploratory because:
1. No strong theoretical prediction for interaction pattern (crossover vs. ordinal)
2. Study is underpowered for interaction effects (see Section 6)
3. Will be analyzed but not claimed as confirmatory

**Possible Patterns:**
- Disclaimer effect may be stronger for bank framing (amplifies skepticism toward conflicted advisor)
- Disclaimer effect may be weaker for independent framing (less additional information conveyed)
- No interaction (additive effects)

### 2.3 Summary Table

| Hypothesis | Type | IV | DV | Direction |
|------------|------|-----|------|-----------|
| H1 | Confirmatory | AI_ID | RA_ADL1 | AI_ID=1 → lower |
| H2 | Confirmatory | AI_DIS | RA_ADL1 | AI_DIS=1 → higher |
| H3a | Secondary | AI_ID | CONFL_AI | AI_ID=1 → lower |
| H3b | Secondary | CONFL_AI | RA_ADL1 | Lower → lower |
| H3c | Secondary (mediation) | AI_ID → CONFL_AI → RA_ADL1 | — | Indirect effect |
| H4 | Exploratory | AI_ID × AI_DIS | RA_ADL1 | No specific direction |
| H5 | Confirmatory | E1_EQUAL_ACCESS | FALI | E1_EQUAL_ACCESS=0 → lower |

---

## 3. Design and Manipulations

### 3.1 E2: Advisor Identity × Disclaimer (2×2 Factorial)

#### Factor 1: AI_ID (Advisor Identity)

| Level | Value | Treatment Text |
|-------|-------|----------------|
| Bank | AI_ID=0 | "The digital advisor is operated by THE BANK (their own advisory service)." |
| Independent | AI_ID=1 | "The digital advisor is operated by AN INDEPENDENT PROVIDER (not affiliated with the bank)." |

#### Factor 2: AI_DIS (Disclaimer)

| Level | Value | Treatment Text |
|-------|-------|----------------|
| No Disclaimer | AI_DIS=0 | — (no additional text) |
| Disclaimer | AI_DIS=1 | "NOTE: The suggestion is general and may not account for your personal financial situation." |

#### Condition Assignment

Participants are randomly assigned to one of four conditions:

| Condition | AI_ID | AI_DIS | Expected N |
|-----------|-------|--------|------------|
| 1 | 0 | 0 | ~50 |
| 2 | 0 | 1 | ~50 |
| 3 | 1 | 0 | ~50 |
| 4 | 1 | 1 | ~50 |

**Randomization:** Qualtrics evenly-presented randomizer (balanced allocation).

#### Treatment Exposure Guarantee

To ensure treatment exposure:

1. **E2 Intro Page:** Text-only page displaying treatment information before interactive task
2. **Minimum Display Time:** 5 seconds before "Next" button enables
3. **Comprehension Check (MC_ID_CHECK):** Forced-correct question verifying participant understood advisor identity
4. **Logging:** E2_INTRO_TIME recorded for sensitivity analyses

### 3.2 E1: Access Policy (2-Arm)

#### Factor: E1_EQUAL_ACCESS (Access Policy)

| Level | Value | Vignette Summary |
|-------|-------|------------------|
| Wealth-Gated | E1_EQUAL_ACCESS=0 | "Access to a human financial advisor is offered only to clients above a minimum wealth threshold (e.g., €50,000 in financial assets)." |
| Equal Access | E1_EQUAL_ACCESS=1 | "Access to a human financial advisor is offered to all clients regardless of their wealth level." |

#### Condition Assignment

| Condition | E1_EQUAL_ACCESS | Expected N |
|-----------|-----------------|------------|
| A | 0 | ~99 |
| B | 1 | ~99 |

**Randomization:** Qualtrics evenly-presented randomizer (balanced allocation).

**Note:** E1 randomization is independent of E2 randomization. Each participant receives one of 8 possible combinations (4 E2 conditions × 2 E1 conditions), but E1 analyses collapse across E2 conditions and vice versa.

### 3.3 Standardized Recommendation

All participants receive the same recommended allocation in E2:

| Asset | Recommended % | Amount (of €10,000) |
|-------|---------------|---------------------|
| Cash | 20% | €2,000 |
| Bonds | 40% | €4,000 |
| Stocks | 40% | €4,000 |

This is held constant across all conditions to ensure RA_ADL1 comparability.

---

## 4. Primary and Secondary Outcomes

### 4.1 Primary Outcomes

| Module | Variable | Description | Range |
|--------|----------|-------------|-------|
| E2 | RA_ADL1 | L1 distance from recommended allocation | 0–200 |
| E1 | FALI | Fair Access Legitimacy Index | ~-3 to +3 (z-scored) |

#### RA_ADL1 Definition

```
RA_ADL1 = |RA_CASH - 20| + |RA_BOND - 40| + |RA_EQ - 40|
```

Where:
- RA_CASH = participant's final cash allocation (%)
- RA_BOND = participant's final bonds allocation (%)
- RA_EQ = participant's final stocks allocation (%)

**Interpretation:** Lower RA_ADL1 = greater adherence to recommendation (0 = exact match; 200 = maximum deviation)

#### FALI Definition

See Section 5 for detailed index construction.

### 4.2 Secondary Outcomes

| Module | Variable | Description |
|--------|----------|-------------|
| E2 | RA_FOLLOW | Binary: 1 if RA_ADL1 ≤ 2 (approximate exact match) |
| E2 | RA_ADL2 | L2 (Euclidean) distance from recommendation |
| E2 | RA_DEV_EQ | Signed deviation from recommended stocks (RA_EQ - 40) |
| E2 | BTN_SHOW | Binary: 1 if participant viewed suggestion |
| E2 | BTN_APPLY | Binary: 1 if participant clicked "Apply Suggestion" |
| E2 | RA_TPAGE | Time on task page (ms) |
| E2 | RA_MOVES | Number of slider movements |

### 4.3 Mediators / Mechanisms

| Variable | Description | Scale |
|----------|-------------|-------|
| CONFL_AI | Perceived conflict of interest | 0–10 slider |

### 4.4 Perception Items (E2)

| Variable | Construct |
|----------|-----------|
| E2_TRUST | Trust in advisor |
| E2_COMP | Perceived competence |
| E2_CLAR | Clarity of information |
| E2_INCL | Perceived inclusion/accessibility |
| E2_LEGIT | Perceived legitimacy |
| E2_REL_SELF | Self-reported reliance |
| WTP_HUM | Willingness to pay for human advisor (€0–100) |

### 4.5 Covariates

| Variable | Description |
|----------|-------------|
| FINLIT_CORRECT | Financial literacy score (0–3) |
| RISK_TOL | Risk tolerance (0–10) |
| DIGI_COMF | Digital comfort (0–10) |
| INV_EXP | Investment experience (0–10) |
| AGE | Age in years |
| GENDER | Gender (categorical) |
| EDU | Education level (categorical) |
| INCOME_BRACKET | Income bracket (categorical) |

---

## 5. Index Construction

### 5.1 Fair Access Legitimacy Index (FALI)

#### Component Items

| Item | Variable | Scale | Description |
|------|----------|-------|-------------|
| Fairness | E1_FAIR | 0–10 | "How fair is this policy?" |
| Legitimacy | E1_LEGIT | 0–10 | "How legitimate is it for a bank to implement this policy?" |
| Inclusion (reversed) | E1_SEC_CLASS | 0–10 | "To what extent would this policy make some clients feel like 'second-class' customers?" |

#### Construction Procedure

1. **Reverse code E1_SEC_CLASS:**
   ```
   E1_INCL_REV = 10 - E1_SEC_CLASS
   ```

2. **Standardize each component (z-score):**
   ```
   z_FAIR = (E1_FAIR - mean(E1_FAIR)) / sd(E1_FAIR)
   z_LEGIT = (E1_LEGIT - mean(E1_LEGIT)) / sd(E1_LEGIT)
   z_INCL_REV = (E1_INCL_REV - mean(E1_INCL_REV)) / sd(E1_INCL_REV)
   ```

3. **Average standardized components:**
   ```
   FALI = mean(z_FAIR, z_LEGIT, z_INCL_REV)
   ```

#### Missing Data Handling

- If **1 item missing:** FALI = average of 2 available z-scores
- If **≥2 items missing:** FALI = missing (exclude from FALI analyses)

#### Reliability Reporting

Report Cronbach's alpha and McDonald's omega for the three-item index:
- If α ≥ 0.70: Interpret FALI as internally consistent
- If 0.60 ≤ α < 0.70: Report with caution; analyze items separately as robustness
- If α < 0.60: Abandon index; analyze items separately as primary

### 5.2 Financial Literacy Score (FINLIT_CORRECT)

Simple sum of correct responses to Lusardi & Mitchell "Big Three" questions:

```r
# R implementation
FINLIT_CORRECT <- (FINLIT_1 == 1) + (FINLIT_2 == 3) + (FINLIT_3 == 2)

# Equivalent in Stata: egen FINLIT_CORRECT = rowtotal(finlit1_correct finlit2_correct finlit3_correct)
# where finlit*_correct are indicator variables for correct responses
```

Range: 0–3 (count of correct answers)

---

## 6. Sample Size Justification

### 6.1 Budget Constraint

| Parameter | Value |
|-----------|-------|
| Total budget | €845 |
| Compensation per participant | €3.20 |
| Prolific fee (assumed) | 33.3% of reward |
| Cost per completion | €3.20 × 1.333 = €4.27 |
| Maximum completions | €845 ÷ €4.27 ≈ 198 |

**Planned N:** 198 completions (approximately 200)

### 6.2 Power Analysis

**Note:** All power calculations assume α = 0.05 (two-tailed tests) and balanced allocation across conditions.

#### E2 Main Effects (H1, H2)

| Scenario | Effect Size (d) | N per cell | Total N | Power |
|----------|-----------------|------------|---------|-------|
| Optimistic | 0.40 | 50 | 200 | ~75% |
| Realistic | 0.30 | 50 | 200 | ~55% |
| Conservative | 0.25 | 50 | 200 | ~45% |

**Assessment:** With N=200 and 4 cells, power for detecting d=0.30 main effects is approximately 55–60%, which is below the conventional 80% threshold.

#### E2 Interaction (H4)

| Scenario | Effect Size (d) | N per cell | Total N | Power |
|----------|-----------------|------------|---------|-------|
| Realistic | 0.25 | 50 | 200 | ~30% |

**Assessment:** Study is severely underpowered for detecting interaction effects. H4 is designated as exploratory accordingly.

#### E1 Main Effect (H5)

| Scenario | Effect Size (d) | N per group | Total N | Power |
|----------|-----------------|-------------|---------|-------|
| Optimistic | 0.40 | 99 | 198 | ~75% |
| Realistic | 0.35 | 99 | 198 | ~65% |

**Assessment:** Power is marginal but acceptable for a secondary study module.

### 6.3 Justification Statement

> **Sample Size Justification:** The planned sample size of N≈200 is determined by budget constraints (€845 available, €4.27 per completion including Prolific fees). This sample provides approximately 55–75% power to detect main effects of d=0.30–0.40, which is consistent with effect sizes observed in related framing studies (e.g., Dietvorst et al., 2015; Logg et al., 2019). The study is underpowered for interaction effects (H4), which is therefore designated as exploratory. We commit to reporting 95% confidence intervals to characterize effect size uncertainty regardless of p-values.

### 6.4 Alternative Sample Size Strategies

If budget allows adjustment:

| Strategy | Reward | Prolific Fee | Cost/Completion | N Possible |
|----------|--------|--------------|-----------------|------------|
| Current | €3.20 | €1.07 | €4.27 | 198 |
| Reduced reward | €2.80 | €0.93 | €3.73 | 226 |
| Minimal ethical | €2.50 | €0.83 | €3.33 | 254 |

**Recommendation:** If possible, reduce reward to €2.80 to achieve N≈225 without falling below ethical minimum (~€9.00/hour for 18-minute survey).

---

## 7. Exclusion Rules

### 7.1 Preregistered Exclusion Criteria

Confirmatory analyses will **exclude** participants meeting any of the following criteria:

| Criterion | Variable | Condition | Rationale |
|-----------|----------|-----------|-----------|
| Incomplete response | — | Survey not finished | Missing primary DV |
| Failed quality check | RA_QUAL | RA_QUAL = 0 | No slider movement, <5s on task, or >60s to first move |
| Failed attention check | ATTN_7 | ATTN_7 ≠ 7 | Inattentive responding |
| Missing primary DV | RA_ADL1 | RA_ADL1 missing | Cannot test hypotheses |
| Non-consent | CONSENT | CONSENT = 0 | Ethical requirement |

### 7.2 Variables NOT Used for Exclusion

The following are **not** exclusion criteria:

| Variable | Reason |
|----------|--------|
| MC_ID_OP | Manipulation check—analyzed for sensitivity, not exclusion |
| MC_DISCLAIM | Manipulation check—analyzed for sensitivity, not exclusion |
| MC_ID_CHECK | Comprehension gate (forced correct)—all completers pass by design |
| BTN_SHOW | Treatment exposure indicator—analyzed for sensitivity, not exclusion |
| FINLIT_CORRECT | Covariate—no basis for exclusion |

### 7.3 RA_QUAL Definition

```r
# R implementation
RA_QUAL <- ifelse(
  RA_MOVES >= 1 &       # At least one slider movement
  RA_TPAGE >= 5000 &    # At least 5 seconds on task page
  RA_FMOVE <= 60000,    # First move within 60 seconds
  1, 0
)

# Equivalent in Stata:
# gen RA_QUAL = (RA_MOVES >= 1 & RA_TPAGE >= 5000 & RA_FMOVE <= 60000)
```

### 7.4 Expected Exclusion Rates

Based on pilot studies and Prolific quality benchmarks:

| Criterion | Expected Rate |
|-----------|---------------|
| Incomplete | 2–5% |
| RA_QUAL = 0 | 3–5% |
| ATTN_7 ≠ 7 | 5–10% |
| **Total (overlapping)** | **8–15%** |

### 7.5 Reporting Exclusions

We will report:
1. Number of participants per exclusion criterion
2. Overlap between exclusion criteria (Venn diagram or table)
3. Exclusion rates by experimental condition (check for differential attrition)
4. Final analytic sample size for each analysis

---

## 8. Analysis Plan

### 8.1 Primary Analyses

#### H1 and H2: Main Effects on RA_ADL1

**Model:**
```
RA_ADL1 ~ AI_ID + AI_DIS + AI_ID×AI_DIS
```

**Estimation:** OLS regression with robust (HC2) standard errors

**Inference:**
- Two-tailed tests for AI_ID and AI_DIS coefficients
- Benjamini-Hochberg FDR correction applied to p-values for H1 and H2 (2 tests)
- Report β, SE, t, p (raw and FDR-corrected), 95% CI

**Expected Effects:**
- AI_ID: Negative coefficient (AI_ID=1 → lower RA_ADL1)
- AI_DIS: Positive coefficient (AI_DIS=1 → higher RA_ADL1)

#### H5: Main Effect on FALI

**Model:**
```
FALI ~ E1_EQUAL_ACCESS
```

**Estimation:** OLS regression with robust (HC2) standard errors

**Inference:**
- Two-tailed test for E1_EQUAL_ACCESS coefficient
- FDR correction applied jointly with H1 and H2 (3 confirmatory tests total)
- Report β, SE, t, p (raw and FDR-corrected), 95% CI

**Expected Effect:**
- E1_EQUAL_ACCESS: Positive coefficient (E1_EQUAL_ACCESS=1 → higher FALI)

### 8.2 Secondary Analyses

#### H3: Mediation via CONFL_AI

**Approach:** Causal mediation analysis following Imai, Keele, & Tingley (2010)

**Models:**
```
# Mediator model
CONFL_AI ~ AI_ID + AI_DIS + AI_ID×AI_DIS

# Outcome model
RA_ADL1 ~ AI_ID + AI_DIS + AI_ID×AI_DIS + CONFL_AI
```

**Inference:**
- Bootstrap 95% CI for indirect effect (AI_ID → CONFL_AI → RA_ADL1)
- No FDR correction (exploratory)
- Interpret with caution due to single-item mediator

#### H4: Interaction Effect

**Model:** Same as H1/H2

**Inference:**
- Two-tailed test for AI_ID×AI_DIS coefficient
- No FDR correction (exploratory)
- Report regardless of significance
- Visualize interaction pattern (2×2 plot)

### 8.3 Covariates (Robustness)

For each primary analysis, we will report:

**Model with covariates:**
```
DV ~ treatment + FINLIT_CORRECT + RISK_TOL + DIGI_COMF + INV_EXP + AGE + GENDER + EDU
```

Covariates are included for robustness only; not adjusting for multiple comparisons.

### 8.4 Software

- **Primary:** R (version 4.x)
- **Packages:** `estimatr` (robust SEs), `mediation` (causal mediation), `psych` (reliability), `ggplot2` (visualization)
- **Code Availability:** Analysis code will be posted on OSF upon submission

---

## 9. Sensitivity and Robustness Analyses

### 9.1 Per-Protocol Analyses

#### Manipulation Check Sensitivity

Repeat primary analyses on subsamples:

| Subsample | Criterion |
|-----------|-----------|
| Per-protocol (AI_ID) | MC_ID_OP matches assigned AI_ID |
| Per-protocol (AI_DIS) | MC_DISCLAIM matches assigned AI_DIS |
| Per-protocol (both) | Both manipulation checks correct |

#### Treatment Exposure Sensitivity

| Subsample | Criterion |
|-----------|-----------|
| Viewed suggestion | BTN_SHOW = 1 |
| Applied suggestion | BTN_APPLY = 1 |
| Extended intro exposure | E2_INTRO_TIME ≥ 8000 (8 seconds) |

### 9.2 Alternative DV Specifications

| Alternative DV | Analysis |
|----------------|----------|
| log(RA_ADL1 + 1) | Address potential skewness |
| RA_FOLLOW (binary) | Logistic regression on exact-match outcome |
| RA_ADL2 (L2 distance) | Alternative distance metric |
| Individual asset deviations | RA_CASH, RA_BOND, RA_EQ as separate DVs |

### 9.3 Heterogeneous Treatment Effects

Exploratory subgroup analyses (no FDR correction):

| Subgroup | Moderator |
|----------|-----------|
| Financial literacy | FINLIT_CORRECT (0–1 vs. 2–3) |
| Risk tolerance | RISK_TOL (below vs. above median) |
| Investment experience | INV_EXP (below vs. above median) |
| Digital comfort | DIGI_COMF (below vs. above median) |

### 9.4 FALI Robustness

| Alternative | Analysis |
|-------------|----------|
| Individual items | Separate analyses for E1_FAIR, E1_LEGIT, E1_INCL_REV |
| Raw average | Average of raw scores (not z-scored) |
| Cronbach's alpha < 0.60 | Abandon index; primary analysis on individual items |

### 9.5 Attrition and Balance Checks

1. **Attrition rates by condition:** χ² test for differential dropout
2. **Balance on covariates:** F-tests or t-tests for treatment group differences on demographics and covariates
3. **Response quality by condition:** Compare RA_QUAL=0 rates across conditions

---

## 10. Timeline and Data Handling

### 10.1 Timeline

| Phase | Activity | Timing |
|-------|----------|--------|
| 1 | Submit preregistration | Before data collection |
| 2 | Soft launch (N=20–30) | Day 1 |
| 3 | Soft launch review | Day 1–2 |
| 4 | Full data collection | Days 2–5 |
| 5 | Data cleaning | Day 6 |
| 6 | Confirmatory analysis | Days 7–10 |
| 7 | Manuscript preparation | Days 11+ |

### 10.2 Soft Launch Protocol

1. Collect N=20–30 responses
2. Check:
   - Completion time distribution (target: 14–20 minutes)
   - RA_QUAL pass rate (target: >90%)
   - ATTN_7 pass rate (target: >90%)
   - JavaScript app functioning (no missing RA_* variables)
   - Balance across conditions
3. If issues identified: Fix and restart (soft launch data discarded)
4. If no issues: Continue to full collection (soft launch data included in final sample)

### 10.3 Data Storage and Sharing

| Data Type | Storage | Sharing |
|-----------|---------|---------|
| Raw Qualtrics export | University secure server | Not shared (contains Prolific IDs) |
| Anonymized analytic data | University server + OSF | Shared on OSF after publication |
| Analysis code | GitHub + OSF | Shared on OSF at submission |
| Preregistration | OSF Registries | Public from registration date |

### 10.4 GDPR Compliance

- Data controller: Ca' Foscari University of Venice
- Lawful basis: Informed consent (GDPR Art. 6(1)(a))
- Data retention: Prolific IDs deleted after payment verification (~30 days); anonymized data retained indefinitely for scientific purposes
- Data subject rights: Right to access, rectification, erasure (before anonymization)

---

## Appendix A: Deviations from Original Protocol

| Original | Revised | Reason |
|----------|---------|--------|
| RA_MINTIME = 2000ms | RA_MINTIME = 5000ms | Stricter quality threshold |
| No comprehension check | MC_ID_CHECK added | Ensure treatment exposure |
| No intro page timing | E2_INTRO_TIME logged | Exposure sensitivity analysis |
| No FDR correction specified | BH FDR correction for H1, H2, H5 | Multiple testing control |
| H4 confirmatory | H4 exploratory | Underpowered for interaction |
| WTP_HUM 0–50€ | WTP_HUM 0–100€ | Avoid ceiling effects |
| "Please select 7" | "4 + 3" arithmetic | Harder attention check |

---

## Appendix B: Variable Codebook Summary

| Variable | Type | Range | Description |
|----------|------|-------|-------------|
| AI_ID | Binary | 0, 1 | Advisor identity treatment |
| AI_DIS | Binary | 0, 1 | Disclaimer treatment |
| E1_EQUAL_ACCESS | Binary | 0, 1 | Access policy treatment |
| RA_ADL1 | Continuous | 0–200 | Primary E2 DV: L1 adherence |
| FALI | Continuous | ~-3 to +3 | Primary E1 DV: Fairness index |
| CONFL_AI | Continuous | 0–10 | Perceived conflict of interest |
| RA_QUAL | Binary | 0, 1 | Task quality indicator |
| ATTN_7 | Continuous | 0–10 | Attention check response |
| MC_ID_OP | Categorical | 1, 2, 3 | Post-task manipulation check (identity) |
| MC_DISCLAIM | Categorical | 0, 1, 2 | Post-task manipulation check (disclaimer) |
| MC_ID_CHECK | Categorical | 1, 2, 3 | Intro comprehension check (forced correct) |
| BTN_SHOW | Binary | 0, 1 | Viewed suggestion box |
| E2_INTRO_TIME | Continuous | ≥0 | Time on intro page (ms) |

---

## Appendix C: Power Curves

### Main Effects (H1, H2)

```
Effect Size (d) | Power (N=200, 4 cells)
----------------|----------------------
0.20            | ~35%
0.25            | ~45%
0.30            | ~55%
0.35            | ~65%
0.40            | ~75%
0.50            | ~90%
```

### Interaction (H4)

```
Effect Size (d) | Power (N=200, 4 cells)
----------------|----------------------
0.15            | ~15%
0.20            | ~22%
0.25            | ~30%
0.30            | ~40%
```

### E1 Main Effect (H5)

```
Effect Size (d) | Power (N=198, 2 groups)
----------------|------------------------
0.25            | ~50%
0.30            | ~60%
0.35            | ~70%
0.40            | ~78%
0.50            | ~92%
```

---

*End of Preregistration Outline*
