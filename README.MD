# Remit Finance Landing Page

A high-fidelity frontend clone of [Lint Finance](https://www.lint.finance), rebuilt as **Remit Finance**. This is a portfolio project demonstrating modern React frontend architecture, animation engineering, and component-driven design across a multi-page fintech landing site.

---

## Tech Stack

| Layer      | Choice                |
| ---------- | --------------------- |
| Framework  | React 18 + TypeScript |
| Routing    | React Router v6       |
| Styling    | Tailwind CSS v4       |
| Components | shadcn/ui             |
| Animation  | GSAP + ScrollTrigger  |
| Forms      | React Hook Form + Zod |
| Icons      | HugeIcons             |
| SEO        | react-helmet-async    |

---

## Project Structure

```
src/
├── components/
│   ├── common/           # Navbar, Footer, Logo, CookieBanner
│   │   └── Navbar/       # DesktopDropdown, MobileAccordion, NavAuthButtons, NavTabs
│   ├── auth/             # LoginForm, SignupForm
│   ├── Business/         # HeroSection, CardSection, PlatformSection, TestimonialSection…
│   ├── Personal/         # HeroSection, ExperienceSection, BudgetSection, DownloadSection…
│   └── CampusAmbassador/ # HeroSplit, AdvantageCard
├── pages/
│   ├── auth/             # LoginPage, SignupPage
│   ├── BusinessPage.tsx
│   ├── PersonalPage.tsx
│   ├── CampusAmbassadorPage.tsx
│   ├── ReferralPage.tsx
│   ├── UtilityCardPage.tsx
│   └── PayrollPage.tsx
├── layouts/
│   └── AuthLayout.tsx
├── hooks/
│   ├── useNavScroll.ts         # IntersectionObserver + GSAP navbar transition
│   └── useMobileMenuNavigation.ts
├── config/
│   ├── navigation.ts
│   ├── ambassadorConfig.ts
│   └── referralConfig.ts
└── App.tsx
```

---

## Pages

| Route                 | Page                       |
| --------------------- | -------------------------- |
| `/business`           | Business landing (default) |
| `/personal`           | Personal landing           |
| `/campus-ambassadors` | Campus Ambassador Program  |
| `/referrals`          | Referral Program           |
| `/utility-cards`      | Utility / Expense Cards    |
| `/payroll`            | Payroll product page       |
| `/auth/login`         | Login                      |
| `/auth/signup`        | Sign up                    |

---

## Notable Implementation Details

### Navbar scroll transition

The navbar starts transparent over the purple hero and transitions to a white background with dark text once the user scrolls past 20% of the hero section. This is handled by an `IntersectionObserver` with a `threshold: 0.8` watching the hero element — when the hero is less than 80% visible, GSAP transitions `backgroundColor`, `color`, and `border` on the navbar and its child elements. GSAP's inline style writes are used throughout (not Tailwind classes) so that specificity never fights the animation.

### PlatformSection — scroll-pinned stacking

The three feature panels in the business platform section use GSAP `ScrollTrigger` with `pin: true` and `pinSpacing: false`. Each panel pins at the top of the viewport while the next one slides up underneath it, creating a stacking card effect. The pin releases once the next panel has fully covered it, then normal scroll resumes.

### ExperienceSection — horizontal scroll

The personal page experience section hijacks vertical scroll and converts it to a horizontal card track using GSAP ScrollTrigger's `scrub` mode. The section pins for the duration of the horizontal travel, then unpins and hands scroll back to the page. Card width is set to `92vw` so exactly one slide occupies the viewport at a time.

### Form validation

Auth forms use `react-hook-form` with `zodResolver`. Validation runs in `onChange` mode so errors surface as the user types. The submit button is disabled until the schema is satisfied. The signup form includes a four-criteria password strength meter that updates in real time.

### Cookie consent

A `localStorage`-backed cookie banner slides up from the bottom on first visit using GSAP. Accept or decline writes `"accepted"` or `"rejected"` to `cookie_consent` in localStorage and the banner is never shown again. No backend involved.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

> Requires Node 18+.

---

## What This Project Demonstrates

- Component architecture and code splitting across a large multi-page site
- GSAP animation patterns: scroll-triggered pinning, horizontal hijack, stagger reveals, per-element transitions
- Intersection Observer for scroll-state detection without scroll event listeners
- Responsive layout engineering: every section handles mobile, tablet, and desktop
- Form UX with live validation, password strength feedback, and accessible error states
- Reusable component design: `HeroSplit`, `AdvantageCard`, `FAQSection`, `TestimonialSection` are all data-driven and page-agnostic
- Accessibility throughout: semantic HTML, ARIA labels, keyboard navigation, `role` attributes, live regions

---
