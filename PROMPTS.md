# ABTalks Redesign — AI Usage Log

## 1. Project Overview

This project is a mobile-first redesign of the **ABTalks 60-day coding challenge platform**, built as a hackathon submission. ABTalks helps Indian college students build real projects every day for 60 days, pushing proof of work to GitHub and LinkedIn to grow a visible, recruiter-friendly portfolio.

The redesign was implemented as a React + TypeScript single-page application (Vite, Tailwind CSS, React Router, lucide-react icons) with a custom dark, premium visual system.

The hackathon brief required three experiences to be designed and built:

- **Landing page** (`/`) — introduces the challenge, how it works, and community voices.
- **Student Dashboard** (`/dashboard`) — the daily home base showing streak, momentum, today's challenge, progress, the interactive 60-day journey, and proof of work.
- **Challenge Day** (`/day/12`) — the focused daily build screen with task, checklist, suggested steps, success criteria, resources, and proof-of-work submission.

Because authentication, persistent accounts, and a production database were out of scope for the hackathon, **mock data** was used throughout. A sample student ("Hetal", on Day 12, 11-day streak) drives the default experience, and onboarding selections are saved to `localStorage` so the chosen track and name carry into the dashboard. No backend or login is required to preview the app.

## 2. AI Tools Used

- **Bolt (bolt.new)** — the AI development environment used to generate, iterate on, and deploy the entire front-end implementation. All code, components, styling, and routing were produced through Bolt's AI-assisted workflow.

No other AI tools were used during development.

## 3. Development Prompts

The following prompts (faithfully summarized) represent the major stages of AI-assisted development. Each entry documents what was asked and what the AI generated or changed as a result.

---

### Prompt 1 — Initial project creation

**Prompt (summary):** "Create a mobile-first redesign of the ABTalks 60-day coding challenge platform using React + TypeScript + Vite + Tailwind. Set up routing for a landing page, a student dashboard, and a challenge day page. Use a premium dark theme."

**What the AI did:**
- Scaffolded the Vite + React + TypeScript project with Tailwind CSS, lucide-react, and react-router-dom.
- Established a dark, premium design system (deep navy `ink` neutrals, orange `accent` ramp, `paper` text tones) in `tailwind.config.js` and `index.css` with custom utilities (`bg-grid`, `bg-radial-glow`, `glass`), the Plus Jakarta Sans font, stagger/fade-up animations, and mobile-first tap-highlight and focus-ring handling.
- Created `App.tsx` with `BrowserRouter` routes for `/`, `/onboarding`, `/dashboard`, `/day/:id`, `/journey`, and a fallback to the landing page.

---

### Prompt 2 — Landing page creation

**Prompt (summary):** "Build the landing page for ABTalks. Hero with the 60-day challenge value prop, a streak visual showing a preview day grid, stats, a how-it-works section, why-ABTalks cards, and a final CTA."

**What the AI did:**
- Built `LandingPage.tsx` with a hero (badge, headline, subtext, feature bullets, dual CTAs) and a streak-preview card rendering a 10-column `DayCell` grid with a legend.
- Added a stats row (students building, builds shipped, days of consistency) with an "illustrative numbers" disclaimer.
- Added "How it works" (3 steps) and "Why ABTalks" (5 value cards) sections.
- Added a final CTA card with radial glow and a footer.

---

### Prompt 3 — Community Intel on the landing page

**Prompt (summary):** "Add a Community Intel section to the landing page where visitors can ask a question and see real-style participant experiences from people who finished the challenge."

**What the AI did:**
- Built `CommunityIntel.tsx` with a search input, quick-question chips ("How do you stay consistent?", "What if I miss a day?", "Is it hard with college?", "What happens by Day 60?"), and a keyword-scoring match function over sample participant experiences (Arjun/consistency, Riya/exams, Kabir/missing days).
- Rendered matched experience cards with a no-match empty state and a clear button.

---

### Prompt 4 — Onboarding flow

**Prompt (summary):** "Add an onboarding step where a new student picks a coding track and enters their name before reaching the dashboard. Save the choice locally."

**What the AI did:**
- Built `OnboardingPage.tsx` with a name input and a selectable list of 5 tracks (Full Stack, AI/ML, Cybersecurity, App Dev, UI/UX), each with an icon and description.
- Added `src/lib/storage.ts` with `saveTrack` / `getSavedTrack` / `getSavedName` / `getOnboardedStudent` helpers backed by `localStorage`, so the dashboard greets the student by name and shows their chosen track.

---

### Prompt 5 — Dashboard creation (momentum, today's task, progress)

**Prompt (summary):** "Build the student dashboard. Greet the student, show their streak and momentum, today's challenge with a continue button, progress toward 60 days, achievements, and a proof-of-work timeline."

**What the AI did:**
- Built `DashboardPage.tsx` with a sticky header (logo, notification bell with dropdown, avatar initials), a time-based greeting, and a state-aware main layout constrained to `max-w-2xl` for mobile-first reading.
- Created `MomentumCard.tsx` (streak number, streak-freeze row with info + confirm modals, recovery CTA, 14-day mini grid), `MomentumSummary.tsx` (streak / projects shipped / progress with an adaptive motivational message), and `ProofTimeline.tsx` (recent builds with GitHub/LinkedIn proof badges and a "View My Journey" link).
- Added today's-task card, a progress bar card (`Day X of 60` + `% complete`), a standing/achievements card with empty states, and a "Tonight's Game Plan" card derived from the current challenge's steps.

---

### Prompt 6 — Consistency Trend chart

**Prompt (summary):** "Add a consistency trend chart to the dashboard showing daily focus minutes and commits over time, with time-range filters and a hover tooltip."

**What the AI did:**
- Built `ConsistencyTrend.tsx` as a hand-rolled SVG line chart with smooth cardinal-spline paths, 7/30/ALL filter toggles, animated line-draw on filter change, a hover/touch guide line, and a positioned tooltip showing focus minutes and commits for the nearest day. Included grid lines, axis ticks, and a legend.

---

### Prompt 7 — Challenge Day page (`/day/12`)

**Prompt (summary):** "Build the challenge day page for `/day/:id`. Show the day's title, description, what to build, an interactive checklist, suggested steps, success criteria, resources, and a proof-of-work section with GitHub and LinkedIn URL inputs and a verify flow. Gate the submit button until the checklist is done and at least one proof is verified. Show a celebration screen on submit."

**What the AI did:**
- Built `DayPage.tsx` with a back header and a `DAY X / 60` badge.
- Rendered the task, "What you're building" with a tappable checklist (toggle with check/circle icons and line-through), numbered suggested steps, success criteria, and resource link chips.
- Added GitHub and LinkedIn submission cards with URL inputs, a simulated verify flow (idle → verifying → verified with spinner/check), and contextual helper messages.
- Gated the submit button on `allChecked && proofReady`, and added a celebratory completion screen (party-popper icon, streak-alive message, "Back to Dashboard" and "Start Day N+1" buttons), plus a day-not-found fallback.

---

### Prompt 8 — Mock data: 60-day challenge content and student profiles

**Prompt (summary):** "Create mock data for 60 unique daily challenges and a sample student on Day 12 with an 11-day streak, completed projects, and proof-of-work history."

**What the AI did:**
- In `src/data/mockData.ts`, defined 60 unique `ChallengeSeed` entries (title, description, what to build, checklist, success criteria, estimated time, steps, resources), each success-criteria item explicitly requiring 390px responsiveness where relevant.
- Generated the `challengeDays` array with `statusFor(day)` (completed < 12, current = 12, upcoming > 12).
- Built a default student ("Hetal", Day 12, 11-day streak, top 18%, 3 achievements, 11 completed projects with GitHub/LinkedIn URLs) via `buildStudent()`, plus derived helpers (`getCompletion`, `getProjectsShipped`, `getProofTimeline`, `getTodayChallenge`, `getGamePlan`).

---

### Prompt 9 — Edge-case states (first day, missed day, empty profile, protected streak)

**Prompt (summary):** "Support different student states on the dashboard: a brand-new student on Day 1 with no streak, a student who missed a day and is in recovery, an empty/unonboarded profile, and a student whose streak was protected by a freeze. Let me switch between them."

**What the AI did:**
- Added `firstDayStudent` (Aarav, Day 1, no streak/achievements), `missedDayStudent` (Priya, Day 13, recovery mode, missed Day 11), `emptyStudent` (no name, Day 0), and `protectedStudent` (Rohan, streak freeze used) to `mockData.ts`.
- Wired `DashboardPage` to read a `?state=first|missed|empty|protected` query param via `useSearchParams` and select the matching profile.
- Made the dashboard state-aware: hides momentum/timeline/progress blocks when `currentDay === 0`, shows a "Let's set up your challenge" greeting for empty profiles, and renders the `RecoverySection` when recovery is active.

---

### Prompt 10 — Recovery Mode and Streak Freeze interactions

**Prompt (summary):** "Make the momentum card interactive: a Streak Freeze the student can use (with a how-it-works modal and a confirm modal), and a Recovery Mode section with a 2-day recovery checklist that can be marked complete."

**What the AI did:**
- In `MomentumCard.tsx`, added a "How Streak Freeze works" info modal and a "Use your Streak Freeze?" confirm modal, with the freeze row updating to a used state and the card switching to the "protected" momentum state.
- Built `RecoverySection.tsx` with a 48-hour recovery framing, a progress bar (`recoveryProgress / recoveryTotal`), a 2-step checklist (missed day + current day) with "Mark done" buttons, and a completion message that restores the streak to active when both steps are done. Connected all state updates through `DashboardPage`'s `setS` so the card, recovery section, and summary stay in sync.

---

### Prompt 11 — Interactive 60-day Journey Timeline with day details

**Prompt (summary):** "Add an interactive 60-day journey timeline to the dashboard. Make each day cell clickable, and show a details panel for the selected day with its mission, task, time committed vs. actual, work completed, GitHub/LinkedIn proof counts, technology tags, and a learning note."

**What the AI did:**
- Built `JourneyTimeline.tsx` with a clickable 60-day `DayCell` grid (10 columns, selected-day ring highlight) and a `DayDetailsPanel` below it.
- Added `dayDetails` records for Days 1–12 in `mockData.ts` (mission, task, timeCommitted, actualTime, workCompleted[], githubCommits, linkedinPosts, tags[], learning).
- The details panel renders distinct states: completed (full detail), missed (danger banner), upcoming with no detail (neutral banner), and current/in-progress (accent banner), each with a `StatusBadge`.

---

### Prompt 12 — Journey page (full proof timeline)

**Prompt (summary):** "Add a full Journey page that shows all proof-of-work builds in a vertical timeline with GitHub/LinkedIn status, linked from the dashboard."

**What the AI did:**
- Built `JourneyPage.tsx` with a stats row (days, projects shipped, proofs submitted) and a vertical timeline of every completed project (day badge, date, title, GitHub/LinkedIn submitted indicators), plus a back-to-dashboard button.

---

### Prompt 13 — Mobile-first / 390px optimization

**Prompt (summary):** "Make everything mobile-first at 390px. No horizontal scroll, tappable targets, readable type, and responsive grids that stack on small screens."

**What the AI did:**
- Constrained dashboard, day, onboarding, and journey pages to `max-w-2xl` with `px-5` gutters.
- Used responsive grids (`grid-cols-3`, `grid-cols-10`, `sm:grid-cols-2/3`) that reflow on mobile, and hid the landing nav link on small screens.
- Added `-webkit-tap-highlight-color: transparent`, focus-visible rings, `active:scale-95` press feedback, `touch-action: pan-y` on the chart, and `text-balance` for headlines. Many daily challenge success criteria explicitly reference the 390px constraint.

---

### Prompt 14 — UI/UX polish (animations, empty states, micro-interactions)

**Prompt (summary):** "Polish the UI: add entrance animations, hover states, good empty states, and consistent visual feedback across all screens."

**What the AI did:**
- Added `animate-fade-up`, `animate-scale-in`, `animate-pop`, and `animate-fade-in` animations with staggered `animationDelay` values across dashboard and day cards.
- Added empty states for no achievements, no proof entries, empty profiles, and no community-intel matches.
- Added hover/active states on buttons, cards, day cells (`hover:scale-110`), and resource chips; a pulsing ring on the current day cell; and a notification dropdown with sample messages.

---

### Prompt 15 — Bug fixes and navigation wiring

**Prompt (summary):** "Fix navigation so every CTA and button routes correctly between landing, onboarding, dashboard, day, and journey pages, and make sure the day-not-found case is handled."

**What the AI did:**
- Verified all `Link`/`Button to=` targets resolve to defined routes (`/onboarding`, `/dashboard`, `/day/:id`, `/journey`).
- Added a day-not-found fallback screen on `DayPage` for out-of-range day numbers, and a wildcard route redirecting unknown paths to the landing page.
- Ensured the dashboard "Continue Day X" and "Start Day 1" buttons route to the correct day based on `currentDay`, and the completion screen's "Start Day N+1" clamps at Day 60.

---

## 4. Major Changes Made

Chronological summary of the major changes to the project:

1. **Initial ABTalks redesign scaffold** — Vite + React + TypeScript + Tailwind project with a custom dark, premium design system and React Router routing.
2. **Three required routes** — Landing (`/`), Dashboard (`/dashboard`), and Challenge Day (`/day/:id`), plus supporting Onboarding (`/onboarding`) and Journey (`/journey`) routes.
3. **Mock student and challenge data** — 60 unique daily challenges, a default "Hetal" student on Day 12 with an 11-day streak and 11 completed projects, and derived helpers for completion, projects shipped, proof timeline, and game plan.
4. **Landing page experience** — hero with streak-preview grid, stats, how-it-works, why-ABTalks, searchable Community Intel, and final CTA.
5. **Onboarding flow** — track selection (5 tracks) and name entry, persisted to `localStorage`.
6. **Dashboard and progress/streak experience** — greeting, momentum card with streak, today's task, progress bar, consistency trend chart, momentum summary, standing/achievements, proof timeline, and tonight's game plan.
7. **Challenge Day experience** — task, interactive checklist, suggested steps, success criteria, resources, GitHub/LinkedIn proof submission with verify flow, gated submit, and a celebration screen.
8. **Edge-case states** — first-day, missed-day (recovery), empty-profile, and protected-streak (freeze used) student profiles, switchable via a `?state=` query param, with the dashboard hiding/ showing sections accordingly.
9. **Interactive 60-day Journey Timeline** — clickable day grid with a details panel showing mission, task, time committed vs. actual, work completed, proof counts, technology tags, and learning notes for completed days.
10. **Upcoming-day and missed-day states** — distinct visual treatments (banners and status badges) in the timeline details panel for days with no activity and days that were missed.
11. **Recovery Mode and Streak Freeze** — interactive modals and a 2-day recovery checklist that restores momentum when complete.
12. **Full Journey page** — vertical proof-of-work timeline with summary stats.
13. **Mobile-first 390px design** — responsive grids, constrained content width, tap-friendly targets, no horizontal scroll, touch support on the chart.
14. **UI/UX refinements** — entrance animations, hover/active micro-interactions, pulsing current-day indicator, and consistent empty states across all screens.

## 5. Product Decisions

The redesign intentionally goes beyond a basic coding-challenge dashboard. Key product/design decisions:

- **Momentum over raw progress.** Instead of only showing "% complete," the dashboard centers on *streak* and *momentum state* (active / protected / recovery). The student's emotional relationship with the challenge — am I on track, did I slip, can I recover — is treated as a first-class UI concern, not an afterthought.
- **Streak Freeze and Recovery Mode.** Real students miss days because of exams, assignments, or rough days. Rather than punishing a miss with a reset, the design offers a one-time Streak Freeze (a limited safety net) and a guided 2-day Recovery Mode that helps the student get back on track without shame. This keeps motivation intact, which is the single biggest predictor of finishing 60 days.
- **Interactive Journey Timeline with day-level detail.** The 60-day grid is clickable, and selecting a completed day reveals what was actually built: mission, task, time committed vs. actual, work completed, commit/post counts, technology tags, and a learning note. This turns a flat progress bar into a reflective portfolio-in-progress and gives the student a reason to scroll back through their own work.
- **Proof of work as the core unit.** Every daily build is tied to GitHub and LinkedIn proof. The Challenge Day page gates submission until the checklist is done and at least one proof is verified, reinforcing the "show, don't tell" philosophy that makes the challenge recruiter-visible.
- **Community Intel.** The landing page lets prospective students ask questions and hear from participants who have finished, addressing the anxiety of "what will this actually feel like?" before they commit.
- **Mobile-first, dark, premium aesthetic.** College students live on their phones, often late at night. The 390px-first layout, dark theme, and "Tonight's Game Plan" framing match the real context in which the challenge gets done.

## 6. AI-Assisted Development Approach

AI (via Bolt) was used as a development partner throughout:

- **Generating the initial implementation** — project scaffold, design system, routing, and the first versions of each page were AI-generated from high-level prompts.
- **Iterating on UI/UX** — prompts refined layouts, added animations, improved empty states, and tuned the visual hierarchy and spacing.
- **Debugging** — when navigation, state sync, or responsive issues arose, prompts described the problem and the AI diagnosed and fixed the root cause.
- **Implementing requested features** — the interactive timeline, recovery mode, streak freeze, consistency chart, and community intel were each added via targeted prompts.
- **Handling responsive behavior** — prompts requested 390px-first layouts, no horizontal scroll, and touch support, and the AI applied responsive classes and touch handlers.
- **Refining interactions** — hover/active states, modal flows, checklist toggles, and the chart tooltip were iterated through prompt-and-review cycles.

The team directed the work, reviewed every change, tested the flows in the browser, and refined the output. AI accelerated implementation, but product decisions, visual taste, and correctness checks were human-driven.

## 7. Final Verification

The following checks were performed during development:

- **Required routes** — confirmed `/`, `/dashboard`, and `/day/12` (and `/day/:id` generally) all render the correct pages; `/onboarding` and `/journey` also resolve; unknown paths fall back to the landing page.
- **Mobile viewport** — reviewed layouts at a 390px mobile width for no horizontal scroll, readable type, tappable targets, and reflowing grids.
- **Navigation** — verified all CTAs and buttons route correctly between landing → onboarding → dashboard → day → journey, and that the day completion screen's "next day" button clamps at Day 60.
- **Interactive timeline** — confirmed clicking any day cell in the 60-day grid updates the details panel with the correct completed / current / upcoming / missed state.
- **Edge cases** — confirmed the `?state=first`, `?state=missed`, `?state=empty`, and `?state=protected` dashboard variants render correctly, including hidden sections for the empty profile and the recovery section for the missed-day profile.
- **Day page flow** — confirmed the checklist toggles, the GitHub/LinkedIn verify states, the gated submit button, and the celebration screen all work.
- **Build** — ran `npm run build` to confirm the project compiles without errors before submission.

## 8. Final Note

This project was developed through an iterative AI-assisted workflow using Bolt. Prompts were used to guide initial implementation, UI/UX refinement, feature addition, debugging, and responsive behavior. The team reviewed, tested, and refined every change, directing the product decisions and visual direction while AI served as the implementation partner.
