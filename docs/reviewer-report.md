# Reviewer Report: I.COPE.BEST Behavioral Experiment

**Manuscript:** I.COPE.BEST – Financial Technology Inclusion in the COVID-19 Pandemic Era: A Behavioral Economics Perspective  
**Target Venues:** JPubE / Management Science / MISQ / JMR / PNAS Nexus  
**Review Date:** January 2026  
**Reviewer Role:** Senior Editor + Reviewer (strictest cross-venue standards)

---

## 1. Summary of Contribution and Novelty

### Contribution Statement

This study addresses two related questions in the emerging literature on digital financial advice:

1. **E2 (Primary):** How do advisor identity framing (bank-affiliated vs. independent) and disclaimers (present vs. absent) affect consumers' adherence to algorithmic investment recommendations?

2. **E1 (Secondary):** How do access policies (wealth-gated vs. equal access) to human advisors affect perceived fairness, legitimacy, and inclusion?

### Gap Addressed

The literature on algorithm aversion/appreciation has predominantly examined generic AI contexts or laboratory tasks with abstract payoffs. This study fills a gap by:

- Testing framing effects in a realistic **personal finance** context with meaningful asset allocation decisions
- Introducing **institutional framing** (bank vs. independent advisor) as a credibility cue
- Examining how **regulatory-style disclaimers** moderate trust and reliance
- Connecting behavioral outcomes (actual allocation choices) to perceived conflict of interest as a mechanism
- Addressing the **inclusion dimension** of fintech access policies—a policy-relevant but under-researched area

### Novelty Assessment

| Dimension | Assessment |
|-----------|------------|
| Theoretical contribution | Moderate—extends algorithm aversion to institutional framing |
| Practical relevance | High—directly applicable to fintech disclosure and access policy |
| Methodological innovation | Low—standard 2×2 factorial with incentive-compatible framing |
| Empirical gap closure | Moderate—novel combination of identity, disclaimer, and conflict-of-interest mechanism |

**Bottom Line:** The contribution is solid for a top field journal if execution is clean and the mechanism story holds. The E1 module adds policy relevance but risks fragmenting the narrative.

---

## 2. Major Concerns (Publishability Blockers)

### MC1: Underpowered Design for Interaction Effect (H4)

**Issue:** With N=198 (approximately 50 per cell in a 2×2), the study is severely underpowered for detecting a meaningful interaction effect. For a typical interaction MDE of d=0.25–0.30 (reasonable given main effects are often overestimated), 80% power requires N≥400–600.

**Why It Matters:** Claiming H4 as "exploratory" does not absolve the study from publishing a null interaction that cannot rule out meaningful effect sizes. Reviewers will flag this as uninformative.

**Recommendation:**
- **Option A (preferred):** Increase budget or reduce compensation to reach N=250+ (consider €2.80 reward → N≈225)
- **Option B:** Drop H4 entirely from prereg; analyze post-hoc only if main effects are significant
- **Option C:** Frame interaction as purely descriptive and commit to pooled analysis

### MC2: Non-Exposure Loophole for E2 Treatment

**Issue:** The treatment text (advisor identity + disclaimer) is embedded inside the "View suggestion" box. Participants who do not click "View suggestion" (BTN_SHOW=0) are never exposed to the treatment manipulation. The proposed text-only intro page mitigates this, but:

- The intro text is passive (participants may skim or skip)
- No comprehension gate or forced attention
- Differential exposure creates confounding (participants who don't click differ systematically)

**Why It Matters:** If 20–30% of participants never click "View suggestion," ITT estimates are diluted and potentially biased. Per-protocol analyses (BTN_SHOW=1 only) introduce selection bias.

**Recommendation:**
- Add a **comprehension check** after the E2 intro (e.g., "Who operates the advisor in this study?") with forced correct response before proceeding
- Alternatively, make the treatment text visible **outside** the collapsible suggestion box (always on screen)
- At minimum, log exposure time on intro page and preregister exposure-time exclusion threshold

### MC3: Confounding of AI_ID with Institutional Trust

**Issue:** "Bank digital advisory service" vs. "independent digital advisor" conflates:
- Advisor identity (who provides the advice)
- Institutional backing (bank = regulated, insured, established)
- Conflict of interest expectations (bank = potential cross-selling incentives)

CONFL_AI measures perceived conflict, but if AI_ID=0 (bank) generates higher CONFL_AI, it could be due to institutional characteristics rather than identity per se.

**Why It Matters:** Mediation claims via CONFL_AI may be conceptually muddled. Reviewers from marketing/HCI will scrutinize construct validity.

**Recommendation:**
- Explicitly acknowledge this in limitations
- Consider adding a brief mediator: "Institutional Trust in the Advisor" (single item) to disentangle
- Frame CONFL_AI as the **primary** mechanism and institutional trust as robustness check

### MC4: E1 Module Fragmentation

**Issue:** E1 (access policy vignette) is thematically related but experimentally separate from E2. It uses a different DV (FALI), different manipulation (E1_EQUAL_ACCESS), and different theoretical framing (fairness/inclusion). This risks:

- Diluting the main narrative
- Reviewer fatigue ("two studies in one")
- Measurement contamination (E1 priming affecting E2 responses if order were reversed)

**Why It Matters:** Top journals prefer focused contributions. E1 may feel like a "bonus" study that should be in supplementary materials or a separate paper.

**Recommendation:**
- Present E1 as a **secondary study** in a dedicated section (Study 2 or Supplementary Study)
- Lead with E2 as the main contribution
- If E1 is essential, strengthen the theoretical link: "The same institutional framing that affects advice-taking (E2) also shapes perceived legitimacy of access policies (E1)"

---

## 3. Minor Concerns (Wording/UX/Measurement)

### MN1: MC_ID_OP Response Options

**Current:** "1 The bank / 2 An independent provider (not affiliated with the bank) / 3 Not sure"

**Issue:** Option 2 is much longer than option 1, potentially cueing participants toward the independent condition.

**Fix:** Equalize length: "The bank (their own advisory service)" vs. "An independent provider (not affiliated with the bank)"

### MN2: CONFL_AI Item Wording

**Current:** "To what extent do you think the advisor has incentives that may not align with the client's best interest?"

**Issue:** "The advisor" is ambiguous—does it refer to the digital tool or an implicit human behind it?

**Fix:** "To what extent do you think **the digital advisory service** has incentives that may not align with your best interest?"

### MN3: E2_INCL Item Clarity

**Current:** "To what extent did the advisory service feel inclusive and appropriate for people like you?"

**Issue:** "People like you" is vague and may invoke different dimensions (income, tech literacy, demographics).

**Fix:** "To what extent did the advisory service feel **accessible and appropriate for someone in your situation**?"

### MN4: WTP_HUM Scale Anchors

**Current:** "0–50€ preferred"

**Issue:** €50 ceiling may truncate high-WTP respondents, especially if they anchor on full consultation fees (€100–300).

**Fix:** Expand to 0–100€ or use open-ended numeric with soft cap. Alternatively, frame as "one-time 30-minute consultation" to anchor expectations.

### MN5: ATTN_7 Attention Check Visibility

**Issue:** "Please select 7" may be too easy for inattentive participants using browser auto-fill or random clicking on midpoint.

**Fix:** Use "Please select the number that is 4 plus 3" or randomize target number per participant.

### MN6: E2 Intro Page Duration

**Issue:** No minimum forced time on E2 intro page. Participants can click through in <1 second.

**Fix:** Implement 5-second minimum display time before "Next" button enables. Log intro page time as E2_INTRO_TIME.

### MN7: RA_QUAL Threshold Stringency

**Current:** RA_MINTIME=2000ms (2 seconds), RA_MAXFIRST=60000ms (60 seconds)

**Issue:** 2 seconds is very lenient; 60 seconds for first move may be too generous (speeding participants could click through intro and wait).

**Fix:** Consider RA_MINTIME=5000ms (5 seconds). Keep RA_MAXFIRST=60000ms but log distribution for post-hoc sensitivity.

---

## 4. Actionable Fixes: Before → After Mappings

### 4.1 MC_ID_OP Response Options

**Before:**
```
1 The bank
2 An independent provider (not affiliated with the bank)
3 Not sure
```

**After:**
```
1 The bank (their own advisory service)
2 An independent provider (not affiliated with the bank)
3 Not sure
```

### 4.2 CONFL_AI Item

**Before:**
> "To what extent do you think the advisor has incentives that may not align with the client's best interest?"

**After:**
> "To what extent do you think the digital advisory service has incentives that may not align with your best interest?"

### 4.3 E2_INCL Item

**Before:**
> "To what extent did the advisory service feel inclusive and appropriate for people like you?"

**After:**
> "To what extent did the advisory service feel accessible and appropriate for someone in your situation?"

### 4.4 WTP_HUM Scale

**Before:**
> Slider 0–50€

**After:**
> Slider 0–100€ with label: "Maximum you would pay for a one-time 30-minute consultation with a human financial advisor"

### 4.5 ATTN_7 Attention Check

**Before:**
> "This is an attention check. Please select 7."

**After:**
> "This is an attention check. Please select the number that is four plus three (4 + 3)."

### 4.6 E2 Intro Forced Exposure

**Before:**
> Descriptive text only, no minimum time, no comprehension gate

**After:**
> - Minimum 5-second display before "Next" enables
> - Add comprehension check (MC_ID_CHECK): "In this study, the digital advisor is operated by: [The bank / An independent provider / Not sure]" — correct answer required to proceed
> - Log E2_INTRO_TIME

### 4.7 Variable Name Additions

| New Variable | Description |
|--------------|-------------|
| E2_INTRO_TIME | Time spent on E2 intro page (ms) |
| MC_ID_CHECK | Comprehension check response on intro (forced correct) |

---

## 5. Threats to Internal Validity

### 5.1 Demand Effects

**Threat:** Participants may infer the hypothesis that independent advisors are more trustworthy and adjust responses accordingly.

**Mitigation:**
- The intro page states facts, not preferences
- Behavioral DV (RA_ADL1) is less susceptible than self-report
- Include demand-awareness item in debrief (optional): "What do you think this study was trying to measure?"

**Assessment:** LOW-MODERATE. Behavioral DV provides some protection.

### 5.2 Non-Exposure

**Threat:** Participants who skip "View suggestion" (BTN_SHOW=0) never see treatment text inside the box.

**Mitigation:**
- Text-only intro page with treatment text (current plan)
- Comprehension check before task (recommended addition)
- Per-protocol sensitivity analysis (BTN_SHOW=1 subsample)

**Assessment:** MODERATE without comprehension check; LOW with comprehension check.

### 5.3 Confounds: AI_ID × Institutional Trust

**Threat:** Bank framing invokes broader institutional associations beyond identity.

**Mitigation:**
- CONFL_AI measures perceived conflict directly
- Acknowledge in limitations
- Consider adding institutional trust item

**Assessment:** MODERATE. Conceptual overlap is inherent to the manipulation.

### 5.4 Experimenter Demand (PI Affiliation)

**Threat:** Participants may know the study is from a university and adjust responses to appear thoughtful.

**Mitigation:**
- Standard Prolific anonymity
- No mention of PI hypotheses in consent

**Assessment:** LOW.

### 5.5 Differential Attrition

**Threat:** Participants in one condition may drop out more (e.g., if bank framing feels less engaging).

**Mitigation:**
- Monitor completion rates by condition during soft launch
- Preregister attrition analysis

**Assessment:** LOW. Conditions are similar in length and complexity.

---

## 6. Threats to External Validity

### 6.1 Ecological Validity of Allocation Task

**Threat:** Hypothetical €10,000 portfolio with abstract sliders may not capture real financial decision-making.

**Mitigation:**
- Sliders are intuitive and commonly used
- Fixed recommendation (20/40/40) standardizes experience
- Acknowledge hypothetical nature in limitations

**Assessment:** MODERATE. Standard for online experiments but limits generalization to real stakes.

### 6.2 Sample Composition (Prolific)

**Threat:** Prolific participants are more educated, tech-savvy, and survey-experienced than general population.

**Mitigation:**
- Screen for basic criteria only (no heavy rejection)
- Report sample characteristics against population benchmarks
- Acknowledge in limitations

**Assessment:** MODERATE. Common limitation for behavioral economics studies.

### 6.3 Realism of Advisor Framing

**Threat:** "Digital advisory service" may evoke different mental models (chatbot, robo-advisor, automated portfolio).

**Mitigation:**
- Keep description minimal and consistent
- Avoid detailed feature descriptions that could vary interpretations

**Assessment:** LOW-MODERATE. Abstraction is intentional for clean manipulation.

### 6.4 Generalizability Across Cultures

**Threat:** Trust in banks vs. independent providers may vary by country (e.g., post-2008 crisis attitudes).

**Mitigation:**
- Report country distribution
- Consider post-hoc subgroup analyses by financial crisis exposure (exploratory)

**Assessment:** MODERATE. Single-country samples would be cleaner but Prolific is multinational.

---

## 7. Measurement Validity and Psychometrics

### 7.1 Primary DV: RA_ADL1 (L1 Distance)

**Construct:** Adherence to algorithmic recommendation (lower = more adherence)

**Assessment:**
- Operationalization is clean: sum of absolute deviations from recommended allocation
- Range: 0 (exact match) to 200 (maximum possible deviation for 3-asset allocation)
- Floor effects possible if most participants follow recommendation
- Consider log-transformation for skewed distributions

**Recommendation:** Preregister RA_ADL1 as primary; report RA_FOLLOW (exact match dummy) as robustness.

### 7.2 Manipulation Checks: MC_ID_OP and MC_DISCLAIM

**Purpose:** Verify treatment exposure and comprehension

**Assessment:**
- Single items, categorical responses
- "Not sure" option captures uncertainty without forcing incorrect guesses
- Do NOT use as hard exclusion—preregister per-protocol sensitivity analysis

**Recommendation:** Report manipulation check pass rates by condition. Flag if pass rates differ significantly between conditions (potential confound).

### 7.3 Mechanism Mediator: CONFL_AI

**Construct:** Perceived conflict of interest

**Assessment:**
- Single item, 0–10 slider
- Clear face validity
- Potential ceiling/floor effects (participants may anchor on extremes)
- Reliability cannot be assessed (single item)

**Recommendation:** Interpret mediation with caution due to single-item limitation. Frame as "exploratory mediation" unless prior validation exists.

### 7.4 Perception Items: E2_TRUST, E2_COMP, E2_CLAR, E2_INCL, E2_LEGIT

**Assessment:**
- Five items covering trust, competence, clarity, inclusion, legitimacy
- No index formed (correctly—they capture distinct constructs)
- All use 0–10 sliders with labeled anchors
- Item order may create halo effects (trust → competence → clarity)

**Recommendation:** Randomize item order within block. Report intercorrelations but analyze separately.

### 7.5 Fair Access Legitimacy Index (FALI)

**Construct:** Perceived fairness and legitimacy of access policy (E1)

**Composition:**
- E1_FAIR (0–10): Fairness
- E1_LEGIT (0–10): Legitimacy
- E1_INCL_REV = 10 - E1_SEC_CLASS: Reversed inclusion/second-class item

**Index Construction:**
```
FALI = mean( z(E1_FAIR), z(E1_LEGIT), z(E1_INCL_REV) )
```

**Assessment:**
- Three items is minimal for an index; alpha may be low (<0.70)
- Reverse-coded item (E1_SEC_CLASS) may introduce method variance
- Z-scoring before averaging is appropriate for combining items with different distributions

**Recommendation:**
- Report Cronbach's alpha and omega
- If alpha < 0.60, analyze items separately instead of using FALI
- Consider reporting both FALI and individual items for transparency

### 7.6 Financial Literacy (FINLIT)

**Construct:** Basic financial literacy (Lusardi & Mitchell "Big Three")

**Assessment:**
- Standard validated items
- Correct coding: FINLIT_CORRECT = sum of correct responses (0–3)
- Well-established in the literature

**Recommendation:** Use as covariate in robustness checks. Do not exclude based on FINLIT scores.

---

## 8. Statistical Plan Critique

### 8.1 Primary DV Choice

**DV:** RA_ADL1 (L1 distance from recommendation)

**Critique:**
- Appropriate for continuous measure of adherence
- May be right-skewed (many near-zero, some large deviations)
- Consider Tobit or log-transformed models if floor effects are severe

**Recommendation:** Preregister log(RA_ADL1 + 1) as sensitivity analysis. Report both raw and log-transformed results.

### 8.2 Multiple Testing

**Current Plan:** "Primary vs secondary outcomes declared"

**Critique:**
- RA_ADL1 and FALI are primary—good
- But H1-H3 for E2 and H5 for E1 imply 4 confirmatory tests
- No explicit correction stated

**Recommendation:**
- Apply Benjamini-Hochberg FDR correction to p-values for confirmatory tests (H1, H2, H5)
- Treat H3 (mediation) and H4 (interaction) as secondary/exploratory with uncorrected p-values
- Clearly label in results: "Confirmatory (FDR-corrected)" vs. "Exploratory"

### 8.3 Power and MDE Realism

**Current Plan:** N=198, rule-of-thumb justification

**Critique:**
| Test | Effect Size | Power (N=198) | Assessment |
|------|-------------|---------------|------------|
| Main effect AI_ID | d=0.30 | ~60% | Underpowered |
| Main effect AI_DIS | d=0.30 | ~60% | Underpowered |
| Interaction AI_ID×AI_DIS | d=0.25 | ~30% | Severely underpowered |
| E1 main effect | d=0.40 | ~75% | Marginal |

**Recommendation:**
- For d=0.30 (realistic for framing effects), N=350 needed for 80% power
- For d=0.40 (optimistic), N=200 is marginal
- If budget-constrained, acknowledge power limitations explicitly and commit to reporting 95% CIs

### 8.4 Interaction Interpretability

**Issue:** H4 tests AI_ID × AI_DIS interaction. Possible patterns:

- Crossover: Independent + disclaimer > bank + disclaimer
- Ordinal: Disclaimer effect stronger for bank than independent
- No interaction: Additive effects

Without clear theoretical prediction, interaction is exploratory.

**Recommendation:** Preregister specific interaction pattern predicted (if any) or clearly label as exploratory.

### 8.5 Exclusion Rules

**Current Plan:**
- Exclude: incomplete, RA_QUAL=0, ATTN_7≠7
- Do NOT exclude on manipulation checks

**Critique:**
- Appropriate conservative approach
- RA_QUAL=0 is reasonable (no slider move or <2s on page)
- ATTN_7≠7 is clear

**Recommendation:**
- Preregister expected exclusion rate (e.g., "anticipate 5–10% exclusions")
- Report exclusion counts by condition to check for differential attrition

---

## 9. Ethics/GDPR/Participant Burden

### 9.1 Completion Time

**Target:** ≤ 20 minutes  
**Proposed Compensation:** €3.20 for ~18 minutes = €10.67/hour

**Assessment:** Above Prolific's recommended minimum (£6.00/hour ≈ €7.20/hour). Acceptable.

### 9.2 GDPR Compliance

**Checklist:**
- [ ] Consent form specifies data controller (Ca' Foscari University)
- [ ] Purpose of data collection stated
- [ ] Data retention period specified
- [ ] Right to withdraw stated (with deadline for data deletion)
- [ ] No IP address collection beyond Prolific's standard
- [ ] Pseudonymization: link via Prolific ID only

**Recommendation:** Ensure Qualtrics settings anonymize IP addresses. Include GDPR-compliant consent language per EU university IRB template.

### 9.3 Deception

**Assessment:** No deception involved. Participants are told they will make a hypothetical investment decision with digital advisor suggestions. All framing is transparent.

**Recommendation:** Include debrief explaining study purpose (after data collection).

### 9.4 Participant Burden by Section

| Section | Estimated Time | Items |
|---------|----------------|-------|
| Consent | 1 min | 1 page |
| E2 Intro | 0.5 min | 1 page |
| E2 Task | 3–5 min | Interactive sliders |
| E2 Post | 3 min | 8 items |
| E1 Vignette | 1 min | 1 page |
| E1 Items | 1.5 min | 4 items |
| Covariates | 2 min | 6 items |
| Demographics | 1.5 min | 5 items |
| Debrief | 0.5 min | 1 page |
| **Total** | **14–17 min** | — |

**Assessment:** Within 20-minute budget. Comfortable margin for slower respondents.

---

## 10. Ready-to-Field Checklist

| # | Item | Status | Notes |
|---|------|--------|-------|
| 1 | Power analysis documented | ⚠️ WARN | N=198 underpowered for interaction; acknowledge in prereg |
| 2 | Treatment exposure guaranteed | ⚠️ WARN | Intro page helps but needs comprehension check |
| 3 | Randomization documented | ✅ PASS | 2×2 for E2, 2-arm for E1 via Qualtrics |
| 4 | Primary DV preregistered | ✅ PASS | RA_ADL1 |
| 5 | Exclusion criteria preregistered | ✅ PASS | Incomplete, RA_QUAL=0, ATTN_7≠7 |
| 6 | Multiple testing addressed | ⚠️ WARN | Need explicit FDR correction statement |
| 7 | Manipulation checks specified | ✅ PASS | MC_ID_OP, MC_DISCLAIM (not hard exclusions) |
| 8 | Index reliability plan | ✅ PASS | Alpha/omega for FALI |
| 9 | Sensitivity analyses specified | ✅ PASS | Per-protocol with BTN_SHOW=1, correct MC |
| 10 | Completion time ≤ 20 min | ✅ PASS | Estimated 14–17 min |
| 11 | Compensation ethical | ✅ PASS | €10.67/hour exceeds minimum |
| 12 | GDPR consent documented | ⚠️ WARN | Verify consent language includes GDPR elements |
| 13 | Debrief included | ✅ PASS | Study purpose revealed post-completion |
| 14 | No deception | ✅ PASS | Hypothetical framing is transparent |
| 15 | Soft launch planned | ✅ PASS | Pilot as exploratory QA |

### Overall Assessment: **REVISE AND RESUBMIT**

The study is well-conceived but requires:

1. **Critical:** Add comprehension check for treatment exposure
2. **Critical:** Acknowledge power limitations explicitly (or increase N)
3. **Important:** Specify FDR correction for multiple testing
4. **Important:** Clarify H4 as exploratory
5. **Minor:** Implement wording fixes per Section 4

With these revisions, the study meets standards for top behavioral economics/fintech venues.

---

## Appendix: Reviewer Checklist Summary

### Must-Fix Before Fielding

- [ ] Add comprehension check after E2 intro (MC_ID_CHECK)
- [ ] Add minimum display time on E2 intro page (5 seconds)
- [ ] Log E2_INTRO_TIME
- [ ] Specify FDR correction in preregistration
- [ ] Acknowledge power limitations for H4 in preregistration
- [ ] Update MC_ID_OP response options for equal length
- [ ] Update CONFL_AI wording ("digital advisory service")
- [ ] Update E2_INCL wording ("someone in your situation")
- [ ] Update ATTN_7 to simple arithmetic

### Recommended Enhancements

- [ ] Expand WTP_HUM scale to 0–100€
- [ ] Randomize E2 perception item order
- [ ] Add institutional trust item (robustness)
- [ ] Add demand-awareness item in debrief
- [ ] Increase sample size if budget allows

---

*End of Reviewer Report*
