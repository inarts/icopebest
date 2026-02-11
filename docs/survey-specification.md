# Final Survey Specification: I.COPE.BEST Behavioral Experiment

**Version:** 2.0 (Revised per Reviewer Report)  
**Platform:** Qualtrics  
**Target Completion Time:** 14–17 minutes (≤20 minutes maximum)  
**Date:** January 2026

---

## Table of Contents

1. [Survey Flow Overview](#1-survey-flow-overview)
2. [Embedded Data Configuration](#2-embedded-data-configuration)
3. [Block-by-Block Specification](#3-block-by-block-specification)
4. [Variable Reference Table](#4-variable-reference-table)
5. [Qualtrics Implementation Notes](#5-qualtrics-implementation-notes)

---

## 1. Survey Flow Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    QUALTRICS SURVEY FLOW                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. EMBEDDED DATA (set constants + recommendation values)       │
│     ↓                                                           │
│  2. RANDOMIZER: E2 Conditions (4 groups, evenly presented)      │
│     • Group 1: AI_ID=0, AI_DIS=0 (Bank, No Disclaimer)          │
│     • Group 2: AI_ID=0, AI_DIS=1 (Bank, Disclaimer)             │
│     • Group 3: AI_ID=1, AI_DIS=0 (Independent, No Disclaimer)   │
│     • Group 4: AI_ID=1, AI_DIS=1 (Independent, Disclaimer)      │
│     ↓                                                           │
│  3. BLOCK: Consent                                              │
│     ↓                                                           │
│  4. BLOCK: E2 Intro (treatment exposure + comprehension check)  │
│     ↓                                                           │
│  5. BLOCK: E2 Task (JavaScript interactive allocation)          │
│     ↓                                                           │
│  6. BLOCK: E2 Post-Task Measures                                │
│     ↓                                                           │
│  7. RANDOMIZER: E1 Conditions (2 groups, evenly presented)      │
│     • Group A: E1_EQUAL_ACCESS=0 (Wealth-Gated)                 │
│     • Group B: E1_EQUAL_ACCESS=1 (Equal Access)                 │
│     ↓                                                           │
│  8. BLOCK: E1 Vignette                                          │
│     ↓                                                           │
│  9. BLOCK: E1 Items                                             │
│     ↓                                                           │
│  10. BLOCK: Covariates                                          │
│     ↓                                                           │
│  11. BLOCK: Demographics                                        │
│     ↓                                                           │
│  12. BLOCK: Debrief + Completion Code                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Embedded Data Configuration

### 2.1 Constants (Set at Survey Start)

| Variable | Value | Description |
|----------|-------|-------------|
| E2_REC_C | 20 | Recommended Cash allocation (%) |
| E2_REC_B | 40 | Recommended Bonds allocation (%) |
| E2_REC_E | 40 | Recommended Stocks/Equities allocation (%) |
| RA_MTRON | 0 | Risk/return meters auto-open disabled |
| RA_MINTIME | 5000 | Minimum time on task page (ms) — UPDATED from 2000 |
| RA_MAXFIRST | 60000 | Maximum time to first slider move (ms) |
| RA_ASSCORR | 0.60 | Bond-equity correlation parameter |

### 2.2 Randomized Treatment Variables

| Variable | Levels | Description |
|----------|--------|-------------|
| AI_ID | 0, 1 | Advisor identity (0=Bank, 1=Independent) |
| AI_DIS | 0, 1 | Disclaimer (0=Absent, 1=Present) |
| E1_EQUAL_ACCESS | 0, 1 | Access policy (0=Wealth-gated, 1=Equal access) |

### 2.3 Computed/Derived Variables (Set by JavaScript or Qualtrics Logic)

| Variable | Description |
|----------|-------------|
| E2_INTRO_TIME | Time spent on E2 intro page (ms) — NEW |
| FINLIT_CORRECT | Sum of correct financial literacy responses (0–3) |
| E1_INCL_REV | 10 - E1_SEC_CLASS (reverse-coded inclusion) |
| FALI | mean(z(E1_FAIR), z(E1_LEGIT), z(E1_INCL_REV)) |

---

## 3. Block-by-Block Specification

---

### BLOCK 1: Consent

**Block Name:** `B01_CONSENT`  
**Estimated Time:** 1 minute

---

#### Page 1.1: Information Sheet and Consent

**Display Logic:** None (shown to all)

**Content:**

```
INFORMATION SHEET AND CONSENT FORM

Study Title: Decision-Making in Digital Financial Advice

Researcher: Dr. Inga Jonaityte, Ca' Foscari University of Venice

Purpose: This research study examines how people make investment decisions when 
using digital advisory services. You will complete a hypothetical portfolio 
allocation task and answer questions about your perceptions and preferences.

What You Will Do:
• Complete an interactive investment allocation task (~5 minutes)
• Answer questions about your perceptions of the advisory service (~5 minutes)
• Read a short scenario and answer questions (~3 minutes)
• Provide basic demographic information (~3 minutes)

Duration: Approximately 15–18 minutes

Compensation: You will receive £2.70 (approximately €3.20) upon completion.

Risks and Benefits: There are no known risks beyond normal computer use. You 
will not receive direct benefits, but your participation contributes to research 
on financial technology and consumer welfare.

Confidentiality: Your responses are anonymous. Your Prolific ID is used only for 
payment and will be deleted after the study concludes. No IP addresses are 
recorded. Data are stored securely at Ca' Foscari University in compliance with 
GDPR (EU 2016/679).

Data Use: Anonymized data may be shared publicly for scientific transparency.

Voluntary Participation: Participation is voluntary. You may withdraw at any 
time before submitting your responses. After submission, withdrawal is not 
possible because responses are anonymized.

Contact: For questions, contact [PI email]. For concerns about research ethics, 
contact [University Ethics Committee contact].

By clicking "I consent" below, you confirm that:
• You have read and understood this information
• You are 18 years or older
• You agree to participate voluntarily
```

**Question:**

| Variable | Type | Question Text | Options |
|----------|------|---------------|---------|
| CONSENT | Single Choice | **Do you consent to participate in this study?** | 1 = I consent and wish to participate<br>0 = I do not consent |

**Branching:** If CONSENT = 0, skip to end of survey with message: "Thank you for your time. You have chosen not to participate in this study."

---

### BLOCK 2: E2 Intro (Treatment Exposure)

**Block Name:** `B02_E2_INTRO`  
**Estimated Time:** 1 minute  
**Page Timing:** Minimum 5 seconds before Next button enables — NEW

---

#### Page 2.1: Investment Task Introduction

**Display Logic:** Shown to all (treatment text varies by condition)

**Content (AI_ID=0, AI_DIS=0):**

```
INVESTMENT TASK INTRODUCTION

In this study, you will make an investment allocation decision for a 
hypothetical portfolio of €10,000.

A digital advisory service provides a standardized suggested allocation across 
three asset types: cash, bonds, and stocks. You may choose to view the 
suggestion and use it as a starting point, or you may ignore it and decide 
independently.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SOURCE OF THE SUGGESTION:
The digital advisor is operated by THE BANK (their own advisory service).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please read the above information carefully before proceeding.
```

**Content (AI_ID=0, AI_DIS=1):**

```
INVESTMENT TASK INTRODUCTION

In this study, you will make an investment allocation decision for a 
hypothetical portfolio of €10,000.

A digital advisory service provides a standardized suggested allocation across 
three asset types: cash, bonds, and stocks. You may choose to view the 
suggestion and use it as a starting point, or you may ignore it and decide 
independently.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SOURCE OF THE SUGGESTION:
The digital advisor is operated by THE BANK (their own advisory service).

NOTE: The suggestion is general and may not account for your personal 
financial situation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please read the above information carefully before proceeding.
```

**Content (AI_ID=1, AI_DIS=0):**

```
INVESTMENT TASK INTRODUCTION

In this study, you will make an investment allocation decision for a 
hypothetical portfolio of €10,000.

A digital advisory service provides a standardized suggested allocation across 
three asset types: cash, bonds, and stocks. You may choose to view the 
suggestion and use it as a starting point, or you may ignore it and decide 
independently.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SOURCE OF THE SUGGESTION:
The digital advisor is operated by AN INDEPENDENT PROVIDER (not affiliated 
with the bank).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please read the above information carefully before proceeding.
```

**Content (AI_ID=1, AI_DIS=1):**

```
INVESTMENT TASK INTRODUCTION

In this study, you will make an investment allocation decision for a 
hypothetical portfolio of €10,000.

A digital advisory service provides a standardized suggested allocation across 
three asset types: cash, bonds, and stocks. You may choose to view the 
suggestion and use it as a starting point, or you may ignore it and decide 
independently.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SOURCE OF THE SUGGESTION:
The digital advisor is operated by AN INDEPENDENT PROVIDER (not affiliated 
with the bank).

NOTE: The suggestion is general and may not account for your personal 
financial situation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please read the above information carefully before proceeding.
```

**Timing:** Log E2_INTRO_TIME (page submit time - page load time)

---

#### Page 2.2: Comprehension Check (Forced Correct) — NEW

**Display Logic:** Shown to all

**Question:**

| Variable | Type | Question Text | Options |
|----------|------|---------------|---------|
| MC_ID_CHECK | Single Choice (Force Response) | **Based on the information you just read, who operates the digital advisor in this study?** | 1 = The bank (their own advisory service)<br>2 = An independent provider (not affiliated with the bank)<br>3 = Not sure |

**Validation Logic:**
- If AI_ID=0 and MC_ID_CHECK ≠ 1 → Show message: "Please re-read the information. The digital advisor is operated by the bank." → Return to Page 2.1
- If AI_ID=1 and MC_ID_CHECK ≠ 2 → Show message: "Please re-read the information. The digital advisor is operated by an independent provider." → Return to Page 2.1
- If MC_ID_CHECK = 3 → Show message: "Please re-read the information carefully and select the correct answer." → Return to Page 2.1

**Design Rationale:** The "Not sure" option (value 3) is intentionally included to allow participants who did not attend to the information to self-identify, rather than forcing a random guess. However, this response is not accepted—participants must re-read and provide the correct answer to proceed. This forced-choice design ensures treatment exposure while preserving measurement of initial comprehension uncertainty.

---

### BLOCK 3: E2 Task (Interactive Allocation)

**Block Name:** `B03_E2_TASK`  
**Estimated Time:** 3–5 minutes

---

#### Page 3.1: Portfolio Allocation Task

**Display Logic:** Shown to all

**Content:** JavaScript interactive application embedded in Qualtrics (SurveyEngine)

**Interface Description:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     PORTFOLIO ALLOCATION TASK                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  You have €10,000 to allocate across three asset types:                     │
│                                                                             │
│  • CASH: Low risk, low return                                               │
│  • BONDS: Moderate risk, moderate return                                    │
│  • STOCKS: Higher risk, higher return                                       │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  [VIEW SUGGESTION]  ← Collapsible box (click to reveal)                     │
│                                                                             │
│  When expanded:                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │ SUGGESTED ALLOCATION                                                  │  │
│  │ Source: [Bank digital advisory service / Independent digital advisor] │  │
│  │ [Note: The suggestion is general... (if AI_DIS=1)]                    │  │
│  │                                                                       │  │
│  │ Cash:   20%  (€2,000)                                                 │  │
│  │ Bonds:  40%  (€4,000)                                                 │  │
│  │ Stocks: 40%  (€4,000)                                                 │  │
│  │                                                                       │  │
│  │ [APPLY SUGGESTION]  ← Sets sliders to recommended values              │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  STEP 1: How much would you like to keep in cash?                           │
│                                                                             │
│  [═══════════════●═══════════════════════════════════════════]  20%         │
│   0%                                                        100%            │
│                                                                             │
│  Cash: €2,000                                                               │
│  Remaining to invest: €8,000                                                │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  STEP 2: Of the remaining €8,000, what proportion in stocks?                │
│                                                                             │
│  [═══════════════════════════●═══════════════════════════════]  50%         │
│   0%                                                        100%            │
│                                                                             │
│  Stocks: €4,000                                                             │
│  Bonds:  €4,000                                                             │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  YOUR FINAL ALLOCATION:                                                     │
│  Cash:   20%  (€2,000)                                                      │
│  Bonds:  40%  (€4,000)                                                      │
│  Stocks: 40%  (€4,000)                                                      │
│                                                                             │
│  [Optional: View risk/return meters]  ← Opens on click (RA_MTRON=0)         │
│                                                                             │
│  [NEXT] ← Disabled until at least one slider moved                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Behavioral Logic:**

1. **Slider Initialization:** Sliders start at 0% (cash slider) and 50% (stocks-of-invested slider)
2. **Move Requirement:** Next button disabled until RA_MOVES ≥ 1
3. **Warning:** If no move after 8 seconds, show: "Please move at least one slider to continue." (log WARN_SHOWN=1). *Note: Warning delay (8s) is intentionally longer than RA_MINTIME (5s) to provide buffer and avoid confusing UX.*
4. **Suggestion Box:** Collapsed by default; logs BTN_SHOW when opened, BTN_HIDE when closed
5. **Apply Suggestion:** Sets sliders to E2_REC_C, E2_REC_E; logs BTN_APPLY, BTN_APPLYMS

**JavaScript App Outputs (Logged to Embedded Data):**

| Variable | Description |
|----------|-------------|
| RA_CASH | Final cash allocation (%) |
| RA_BOND | Final bonds allocation (%) |
| RA_EQ | Final stocks allocation (%) |
| RA_SI | Stocks-of-invested slider value (%) |
| RA_ADL1 | L1 distance from recommendation: \|RA_CASH-20\| + \|RA_BOND-40\| + \|RA_EQ-40\| |
| RA_ADL2 | L2 distance: sqrt((RA_CASH-20)² + (RA_BOND-40)² + (RA_EQ-40)²) |
| RA_FOLLOW | 1 if RA_ADL1 ≤ 2 (approximate exact match), else 0 |
| RA_DEV_EQ | Signed deviation from recommended stocks: RA_EQ - 40 |
| RA_TPAGE | Total time on task page (ms) |
| RA_MOVES | Number of slider moves |
| RA_FMOVE | Time to first slider move (ms) |
| RA_QUAL | Quality flag: 1 if (RA_MOVES≥1 AND RA_TPAGE≥RA_MINTIME AND RA_FMOVE≤RA_MAXFIRST) |
| BTN_SHOW | 1 if suggestion box opened, else 0 |
| BTN_HIDE | Number of times suggestion box closed |
| BTN_TOG | Total toggle count (open + close) |
| BTN_SHOWMS | Time when suggestion first shown (ms since page load) |
| BTN_APPLY | 1 if "Apply Suggestion" clicked, else 0 |
| BTN_APPLYMS | Time when "Apply Suggestion" clicked (ms) |
| BTN_METR | 1 if risk/return meters opened, else 0 |
| BTN_MHIDE | Number of times meters closed |
| TIP_ASSETS | 1 if asset tooltip viewed, else 0 |
| RA_DIR_FIRST | Direction of first move: "CASH_UP", "CASH_DOWN", "SI_UP", "SI_DOWN" |
| WARN_SHOWN | 1 if "move slider" warning displayed, else 0 |
| RA_REC_C | Logged recommendation: cash (=20) |
| RA_REC_B | Logged recommendation: bonds (=40) |
| RA_REC_E | Logged recommendation: stocks (=40) |
| RA_REC_SI | Logged recommendation: stocks-of-invested (=50) |
| RA_W0 | Initial portfolio value (=10000) |

---

### BLOCK 4: E2 Post-Task Measures

**Block Name:** `B04_E2_POST`  
**Estimated Time:** 3 minutes

---

#### Page 4.1: Manipulation Checks

**Display Logic:** Shown to all

| Variable | Type | Question Text | Options |
|----------|------|---------------|---------|
| MC_ID_OP | Single Choice | **Who operated the digital advisor described in the investment task?** | 1 = The bank (their own advisory service)<br>2 = An independent provider (not affiliated with the bank)<br>3 = Not sure |
| MC_DISCLAIM | Single Choice | **Did the information about the suggestion include a note that it is general and may not account for your personal financial situation?** | 1 = Yes<br>0 = No<br>2 = Not sure |

**Note:** These are post-task manipulation checks for analysis, NOT hard exclusions.

---

#### Page 4.2: Mechanism Mediator

**Display Logic:** Shown to all

| Variable | Type | Question Text | Scale |
|----------|------|---------------|-------|
| CONFL_AI | Slider (0–10) | **To what extent do you think the digital advisory service has incentives that may not align with your best interest?** | 0 = Not at all<br>10 = Very much |

---

#### Page 4.3: Perception Items

**Display Logic:** Shown to all  
**Item Order:** Randomized within block — NEW

| Variable | Type | Question Text | Scale |
|----------|------|---------------|-------|
| E2_TRUST | Slider (0–10) | **How much do you trust this advisor's suggestion?** | 0 = Not at all<br>10 = Completely |
| E2_COMP | Slider (0–10) | **How competent is this advisor for providing investment suggestions?** | 0 = Not at all competent<br>10 = Extremely competent |
| E2_CLAR | Slider (0–10) | **How clear was the information provided about the suggested allocation and its risk?** | 0 = Not clear<br>10 = Extremely clear |
| E2_INCL | Slider (0–10) | **To what extent did the advisory service feel accessible and appropriate for someone in your situation?** | 0 = Not at all<br>10 = Very much |
| E2_LEGIT | Slider (0–10) | **Overall, how legitimate do you find this kind of digital advisory service for supporting investment decisions?** | 0 = Not legitimate<br>10 = Completely legitimate |

---

#### Page 4.4: Self-Report and WTP

**Display Logic:** Shown to all

| Variable | Type | Question Text | Scale |
|----------|------|---------------|-------|
| E2_REL_SELF | Slider (0–10) | **To what extent did you rely on the suggested allocation when making your decision?** | 0 = Not at all<br>10 = Completely |
| WTP_HUM | Slider (0–100) | **If you could obtain a one-time 30-minute consultation with a human financial advisor, what is the maximum you would be willing to pay (in €)?** | 0 = €0<br>100 = €100 or more |

---

### BLOCK 5: E1 Vignette

**Block Name:** `B05_E1_VIGNETTE`  
**Estimated Time:** 1 minute

---

#### Page 5.1: Access Policy Scenario

**Display Logic:** Shown to all (content varies by E1_EQUAL_ACCESS)

**Content (E1_EQUAL_ACCESS=0, Wealth-Gated):**

```
ACCESS TO FINANCIAL ADVICE

Please read the following scenario carefully.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A bank offers a digital advisory service to all clients. However, access to a 
human financial advisor is offered only to clients above a minimum wealth 
threshold (e.g., €50,000 in financial assets).

Clients below the threshold can use the digital service but cannot access a 
human advisor through the bank.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We would like your opinion about this policy.
```

**Content (E1_EQUAL_ACCESS=1, Equal Access):**

```
ACCESS TO FINANCIAL ADVICE

Please read the following scenario carefully.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A bank offers a digital advisory service to all clients. Access to a human 
financial advisor is offered to all clients regardless of their wealth level.

Clients may use the digital service and may also access a human advisor if 
they want.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We would like your opinion about this policy.
```

---

### BLOCK 6: E1 Items

**Block Name:** `B06_E1_ITEMS`  
**Estimated Time:** 1.5 minutes

---

#### Page 6.1: Policy Perception Items

**Display Logic:** Shown to all

| Variable | Type | Question Text | Scale |
|----------|------|---------------|-------|
| E1_FAIR | Slider (0–10) | **How fair is this policy?** | 0 = Very unfair<br>10 = Very fair |
| E1_LEGIT | Slider (0–10) | **How legitimate is it for a bank to implement this policy?** | 0 = Not legitimate<br>10 = Completely legitimate |
| E1_SEC_CLASS | Slider (0–10) | **To what extent would this policy make some clients feel like 'second-class' customers?** | 0 = Not at all<br>10 = Very much |
| E1_REGSUP | Slider (0–10) | **To what extent should financial regulation encourage equal access to human financial advice for clients regardless of wealth?** | 0 = Not at all<br>10 = Very much |

---

### BLOCK 7: Covariates

**Block Name:** `B07_COVARIATES`  
**Estimated Time:** 2 minutes

---

#### Page 7.1: Financial Literacy

**Display Logic:** Shown to all

| Variable | Type | Question Text | Options | Correct |
|----------|------|---------------|---------|---------|
| FINLIT_1 | Single Choice | **Suppose you had €100 in a savings account and the interest rate was 2% per year. After 5 years, how much do you think you would have in the account if you left the money to grow?** | 1 = More than €102<br>2 = Exactly €102<br>3 = Less than €102<br>4 = Don't know | 1 |
| FINLIT_2 | Single Choice | **Imagine that the interest rate on your savings account was 1% per year and inflation was 2% per year. After 1 year, how much would you be able to buy with the money in this account?** | 1 = More than today<br>2 = Exactly the same<br>3 = Less than today<br>4 = Don't know | 3 |
| FINLIT_3 | Single Choice | **"Buying a single company stock usually provides a safer return than a stock mutual fund." Is this statement true or false?** | 1 = True<br>2 = False<br>3 = Don't know | 2 |

**Derived Variable:**
```
FINLIT_CORRECT = (FINLIT_1==1) + (FINLIT_2==3) + (FINLIT_3==2)
```

---

#### Page 7.2: Risk Tolerance and Digital Comfort

**Display Logic:** Shown to all

| Variable | Type | Question Text | Scale |
|----------|------|---------------|-------|
| RISK_TOL | Slider (0–10) | **How willing are you to take risks in financial investments?** | 0 = Not at all willing<br>10 = Very willing |
| DIGI_COMF | Slider (0–10) | **How comfortable are you using digital tools for important decisions?** | 0 = Not at all comfortable<br>10 = Very comfortable |

---

#### Page 7.3: Attention Check

**Display Logic:** Shown to all

| Variable | Type | Question Text | Scale |
|----------|------|---------------|-------|
| ATTN_7 | Slider (0–10) | **This is an attention check. Please select the number that is four plus three (4 + 3).** | 0–10 |

---

### BLOCK 8: Demographics

**Block Name:** `B08_DEMOGRAPHICS`  
**Estimated Time:** 1.5 minutes

---

#### Page 8.1: Basic Demographics

**Display Logic:** Shown to all

| Variable | Type | Question Text | Options |
|----------|------|---------------|---------|
| AGE | Text Entry (Numeric) | **What is your age (in years)?** | Min: 18, Max: 120 |
| GENDER | Single Choice | **What is your gender?** | 1 = Male<br>2 = Female<br>3 = Non-binary / third gender<br>4 = Prefer not to say |
| EDU | Single Choice | **What is the highest level of education you have completed?** | 1 = Less than high school<br>2 = High school diploma or equivalent<br>3 = Some college or vocational training<br>4 = Bachelor's degree<br>5 = Master's degree<br>6 = Doctoral degree (PhD, MD, JD)<br>7 = Prefer not to say |
| COUNTRY | Dropdown | **In which country do you currently reside?** | [ISO 3166-1 country list] |

---

#### Page 8.2: Financial Background

**Display Logic:** Shown to all

| Variable | Type | Question Text | Options |
|----------|------|---------------|---------|
| INV_EXP | Slider (0–10) | **How much experience do you have with investing?** | 0 = No experience<br>10 = Very experienced |
| INCOME_BRACKET | Single Choice | **What is your approximate annual household income?** | 1 = Less than €20,000<br>2 = €20,000 – €39,999<br>3 = €40,000 – €59,999<br>4 = €60,000 – €79,999<br>5 = €80,000 – €99,999<br>6 = €100,000 or more<br>7 = Prefer not to say |

---

### BLOCK 9: Debrief and Completion

**Block Name:** `B09_DEBRIEF`  
**Estimated Time:** 0.5 minutes

---

#### Page 9.1: Debrief

**Display Logic:** Shown to all

**Content:**

```
DEBRIEF

Thank you for completing this study!

STUDY PURPOSE:
This research examines how people make investment decisions when using digital 
advisory services. Specifically, we are studying how different descriptions of 
the advisor (e.g., who operates the service) and different information provided 
(e.g., disclaimers) affect trust, reliance, and decision-making.

We also studied perceptions of access policies for financial advice—whether 
people view different policies as fair and legitimate.

Your responses will help inform policy discussions about financial technology 
and consumer protection.

IMPORTANT NOTES:
• The investment task was hypothetical—no real money was involved
• The digital advisor and suggested allocations were designed for research 
  purposes
• There were no "right" or "wrong" answers

DATA PROTECTION:
Your responses are anonymous and will be analyzed only in aggregate. No 
individual responses will be identifiable in any publication.

If you have questions about this research, please contact:
Dr. Inga Jonaityte
Ca' Foscari University of Venice
[PI email address]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

YOUR COMPLETION CODE:

Please copy the code below and paste it in Prolific to complete your 
participation and receive payment:

[COMPLETION_CODE]
```

**Note:** COMPLETION_CODE is generated by Qualtrics and linked to Prolific workflow.

---

## 4. Variable Reference Table

### 4.1 Treatment Variables

| Variable | Type | Values | Block |
|----------|------|--------|-------|
| AI_ID | Binary | 0=Bank, 1=Independent | Randomizer |
| AI_DIS | Binary | 0=No disclaimer, 1=Disclaimer | Randomizer |
| E1_EQUAL_ACCESS | Binary | 0=Wealth-gated, 1=Equal access | Randomizer |

### 4.2 Primary DVs

| Variable | Type | Range | Block |
|----------|------|-------|-------|
| RA_ADL1 | Continuous | 0–200 | E2 Task |
| FALI | Continuous (z-scored) | ~-3 to +3 | Computed |

### 4.3 Secondary DVs / Process Measures

| Variable | Type | Range | Block |
|----------|------|-------|-------|
| RA_CASH | Continuous | 0–100 | E2 Task |
| RA_BOND | Continuous | 0–100 | E2 Task |
| RA_EQ | Continuous | 0–100 | E2 Task |
| RA_ADL2 | Continuous | 0–~173 | E2 Task |
| RA_FOLLOW | Binary | 0, 1 | E2 Task |
| RA_DEV_EQ | Continuous | -100 to +60 | E2 Task |
| BTN_SHOW | Binary | 0, 1 | E2 Task |
| BTN_APPLY | Binary | 0, 1 | E2 Task |
| RA_TPAGE | Continuous | ≥0 | E2 Task |
| RA_MOVES | Count | ≥0 | E2 Task |
| RA_FMOVE | Continuous | ≥0 | E2 Task |

### 4.4 Manipulation Checks

| Variable | Type | Values | Block |
|----------|------|--------|-------|
| MC_ID_CHECK | Categorical | 1, 2, 3 | E2 Intro |
| MC_ID_OP | Categorical | 1, 2, 3 | E2 Post |
| MC_DISCLAIM | Categorical | 0, 1, 2 | E2 Post |

### 4.5 Mediators / Mechanisms

| Variable | Type | Range | Block |
|----------|------|-------|-------|
| CONFL_AI | Slider | 0–10 | E2 Post |

### 4.6 Perception Items

| Variable | Type | Range | Block |
|----------|------|-------|-------|
| E2_TRUST | Slider | 0–10 | E2 Post |
| E2_COMP | Slider | 0–10 | E2 Post |
| E2_CLAR | Slider | 0–10 | E2 Post |
| E2_INCL | Slider | 0–10 | E2 Post |
| E2_LEGIT | Slider | 0–10 | E2 Post |
| E2_REL_SELF | Slider | 0–10 | E2 Post |
| WTP_HUM | Slider | 0–100 | E2 Post |

### 4.7 E1 Policy Items

| Variable | Type | Range | Block |
|----------|------|-------|-------|
| E1_FAIR | Slider | 0–10 | E1 Items |
| E1_LEGIT | Slider | 0–10 | E1 Items |
| E1_SEC_CLASS | Slider | 0–10 | E1 Items |
| E1_REGSUP | Slider | 0–10 | E1 Items |

### 4.8 Covariates

| Variable | Type | Range | Block |
|----------|------|-------|-------|
| FINLIT_1 | Categorical | 1–4 | Covariates |
| FINLIT_2 | Categorical | 1–4 | Covariates |
| FINLIT_3 | Categorical | 1–3 | Covariates |
| FINLIT_CORRECT | Count | 0–3 | Computed |
| RISK_TOL | Slider | 0–10 | Covariates |
| DIGI_COMF | Slider | 0–10 | Covariates |
| ATTN_7 | Slider | 0–10 | Covariates |

### 4.9 Demographics

| Variable | Type | Values | Block |
|----------|------|--------|-------|
| AGE | Numeric | 18–120 | Demographics |
| GENDER | Categorical | 1–4 | Demographics |
| EDU | Categorical | 1–7 | Demographics |
| COUNTRY | Categorical | ISO codes | Demographics |
| INV_EXP | Slider | 0–10 | Demographics |
| INCOME_BRACKET | Categorical | 1–7 | Demographics |

### 4.10 Quality / Meta Variables

| Variable | Type | Values | Block |
|----------|------|--------|-------|
| CONSENT | Binary | 0, 1 | Consent |
| RA_QUAL | Binary | 0, 1 | E2 Task |
| WARN_SHOWN | Binary | 0, 1 | E2 Task |
| E2_INTRO_TIME | Continuous | ≥0 | E2 Intro |

---

## 5. Qualtrics Implementation Notes

### 5.1 Randomizer Configuration

**E2 Randomizer:**
- Type: Evenly Present Elements
- Elements: 4 condition assignment blocks (each sets AI_ID and AI_DIS)
- Location: Before consent block

**E1 Randomizer:**
- Type: Evenly Present Elements
- Elements: 2 condition assignment blocks (each sets E1_EQUAL_ACCESS)
- Location: After E2 Post block

### 5.2 Display Logic Conditions

| Block/Page | Condition |
|------------|-----------|
| E2 Intro (Bank, No Disclaimer) | AI_ID = 0 AND AI_DIS = 0 |
| E2 Intro (Bank, Disclaimer) | AI_ID = 0 AND AI_DIS = 1 |
| E2 Intro (Independent, No Disclaimer) | AI_ID = 1 AND AI_DIS = 0 |
| E2 Intro (Independent, Disclaimer) | AI_ID = 1 AND AI_DIS = 1 |
| E1 Vignette (Wealth-Gated) | E1_EQUAL_ACCESS = 0 |
| E1 Vignette (Equal Access) | E1_EQUAL_ACCESS = 1 |

### 5.3 Timing Settings

| Page | Minimum Display Time |
|------|---------------------|
| E2 Intro | 5 seconds |
| E2 Task | Controlled by JavaScript (RA_MINTIME = 5000ms) |
| All other pages | No minimum |

### 5.4 JavaScript Integration

The E2 Task page uses embedded JavaScript that:
1. Initializes sliders and embedded data variables
2. Tracks all user interactions (moves, clicks, toggles)
3. Calculates derived variables (RA_ADL1, RA_ADL2, RA_QUAL, etc.)
4. Writes all variables to Qualtrics embedded data on page submit
5. Enforces move requirement before enabling Next button

### 5.5 Question Randomization

| Block | Randomization |
|-------|---------------|
| E2 Post Perception Items (Page 4.3) | Randomize order of E2_TRUST, E2_COMP, E2_CLAR, E2_INCL, E2_LEGIT |
| All other blocks | Fixed order |

### 5.6 Force Response Settings

| Question | Force Response |
|----------|----------------|
| CONSENT | Yes |
| MC_ID_CHECK | Yes (with validation) |
| All slider items | Yes |
| All single choice items | Yes |
| AGE | Yes (with validation 18–120) |
| COUNTRY | Yes |

### 5.7 Anonymization Settings

- **Record IP Address:** Off
- **Record Location Data:** Off
- **Anonymize Response:** On
- **Prevent Ballot Box Stuffing:** On (prevent multiple submissions)

---

## Appendix A: Before → After Variable Changes

| Original | Revised | Change Type | Rationale |
|----------|---------|-------------|-----------|
| RA_MINTIME = 2000 | RA_MINTIME = 5000 | Parameter update | Increased from 2000ms for stricter quality control; 2s was too lenient for meaningful task engagement |
| — | E2_INTRO_TIME | New variable | Track time on intro page for exposure sensitivity |
| — | MC_ID_CHECK | New variable | Comprehension gate to ensure treatment exposure |
| "the advisor" (CONFL_AI) | "the digital advisory service" | Wording | Clarify reference to digital tool |
| "people like you" (E2_INCL) | "someone in your situation" | Wording | Reduce ambiguity |
| WTP_HUM 0–50€ | WTP_HUM 0–100€ | Scale expansion | Avoid ceiling effects |
| "Please select 7" (ATTN_7) | "select the number that is four plus three" | Wording | Harder attention check |
| MC_ID_OP option 1: "The bank" | "The bank (their own advisory service)" | Wording | Equalize option length |

---

## Appendix B: Estimated Time Budget

| Section | Items | Est. Time |
|---------|-------|-----------|
| Consent | 1 page | 1.0 min |
| E2 Intro + Comprehension | 2 pages | 1.0 min |
| E2 Task | Interactive | 3.5 min |
| E2 Post | 10 items | 3.0 min |
| E1 Vignette | 1 page | 0.5 min |
| E1 Items | 4 items | 1.5 min |
| Covariates | 6 items | 2.0 min |
| Demographics | 6 items | 1.5 min |
| Debrief | 1 page | 0.5 min |
| **Total** | — | **14.5 min** |

**Buffer for slow respondents:** +3.5 min = **18 min maximum** (within 20-min constraint)

---

*End of Survey Specification*
