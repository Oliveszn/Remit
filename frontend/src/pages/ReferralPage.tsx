import { Helmet } from "react-helmet-async";
import { AdvantageCard } from "@/components/CampusAmbassador/AdvantageCard";
import { REFERRAL_CARDS, STEPS } from "@/config/referralConfig";

// Section 1 — Hero

function ReferralHero() {
  return (
    <section
      className="py-20 lg:py-28 px-6 lg:px-8 bg-white"
      aria-labelledby="referral-hero-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6 justify-center">
            <h1
              id="referral-hero-heading"
              className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.08]"
            >
              Earn More While Helping Friends Stay Financially Sound.
            </h1>
            <p className="text-base lg:text-lg text-zinc-500 leading-relaxed max-w-lg">
              Help your friends budget better and stay on track financially
              while earning extra cash! With Remit, you earn commissions every
              time your referrals pay expenses or create utility cards —
              forever.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="/auth/signup"
                className="
                  inline-flex items-center justify-center
                  px-8 py-3.5 rounded-xl
                  text-white text-sm font-semibold
                  hover:opacity-90 transition-opacity duration-150
                "
                style={{ backgroundColor: "var(--color-main)" }}
              >
                Invite friends now
              </a>
              <a
                href="#how-it-works"
                className="
                  inline-flex items-center justify-center
                  px-8 py-3.5 rounded-xl
                  text-zinc-800 text-sm font-semibold
                  border border-zinc-300
                  hover:bg-zinc-50 transition-colors duration-150
                "
              >
                Learn more
              </a>
            </div>
          </div>

          <img
            src="hero.webp"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

// Section 2 — Why refer grid

function WhyReferSection() {
  return (
    <section
      className="py-20 lg:py-28 px-6 lg:px-8 bg-[#F6F6FC]"
      aria-labelledby="why-refer-heading"
    >
      <div className="mx-auto max-w-6xl">
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Reasons to refer"
        >
          {/* Heading cell — styled as a card slot */}
          <li className="flex items-center">
            <h2
              id="why-refer-heading"
              className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight"
            >
              Why Should <br className="hidden lg:block" /> You Refer?
            </h2>
          </li>

          {REFERRAL_CARDS.map((card) => (
            <li key={card.title}>
              <AdvantageCard {...card} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Section 3 — How it works (CTA banner) ───────────────────────────────────

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 px-6 lg:px-8 bg-white"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-6xl flex flex-col gap-16">
        {/* Heading */}
        <div className="flex flex-col gap-4 max-w-xl">
          <h2
            id="how-heading"
            className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight"
          >
            How It Works
          </h2>
          <p className="text-base lg:text-lg text-zinc-500 leading-relaxed">
            Four simple steps stand between you and passive income.
          </p>
        </div>

        {/* Steps */}
        <ol
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          aria-label="Referral steps"
        >
          {STEPS.map(({ step, title, body }) => (
            <li key={step} className="flex flex-col gap-4">
              {/* Step number */}
              <span
                className="text-5xl font-black leading-none"
                style={{ color: "var(--color-main)", opacity: 0.2 }}
                aria-hidden="true"
              >
                {step}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-zinc-900">
                  {title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{body}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA banner */}
        <div
          className="
            rounded-3xl p-10 lg:p-16
            flex flex-col lg:flex-row items-center justify-between gap-8
            text-white
          "
          style={{ backgroundColor: "var(--color-main)" }}
        >
          <div className="flex flex-col gap-3 max-w-lg text-center lg:text-left">
            <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
              Ready to start earning?
            </h3>
            <p className="text-white/70 text-base leading-relaxed">
              Join thousands of Remit users already making money by helping
              their friends get their finances sorted.
            </p>
          </div>
          <a
            href="/auth/signup"
            className="
              inline-flex items-center justify-center shrink-0
              px-10 py-4 rounded-xl
              bg-white font-semibold text-sm
              hover:bg-white/90 transition-colors duration-150
              shadow-lg shadow-black/10
            "
            style={{ color: "var(--color-main)" }}
          >
            Get my referral link
          </a>
        </div>
      </div>
    </section>
  );
}

// Page

export default function ReferralPage() {
  return (
    <>
      <Helmet>
        <title>Referral Program | Remit</title>
        <meta
          name="description"
          content="Earn commissions forever by referring friends to Remit. Help them manage money better while you earn every time they pay an expense or create a utility card."
        />
      </Helmet>

      <main>
        <ReferralHero />
        <WhyReferSection />
        <HowItWorksSection />
      </main>
    </>
  );
}
