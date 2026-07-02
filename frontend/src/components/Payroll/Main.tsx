import { FAQS, PRICING, TRUST_CARDS } from "@/config/payrollconfig";
import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";

export function HeroSection() {
  return (
    <section
      className="bg-[#E9E8FB] w-full"
      aria-labelledby="payroll-hero-heading"
    >
      <div className="flex flex-col items-center text-center gap-8 px-6 pt-20 lg:pt-28 pb-14 max-w-3xl mx-auto">
        <h1
          id="payroll-hero-heading"
          className="text-4xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.06]"
        >
          Payroll, tax, and pension handled in one run.
        </h1>

        <p className="text-base lg:text-lg text-zinc-600 leading-relaxed max-w-xl">
          Pay your team, deduct PAYE under the Nigeria Tax Act 2025, remit
          pension to every PFA, and clear salary advances — automatically. Fund
          once. We handle the rest.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            to="/auth/signup"
            className="flex items-center justify-center px-8 py-3.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto"
            style={{ backgroundColor: "var(--color-main)" }}
          >
            Get started
          </Link>
          <button
            type="button"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-transparent text-zinc-900 text-sm font-semibold border border-zinc-900 hover:bg-zinc-900/5 transition-colors w-full sm:w-auto"
          >
            Watch demo
          </button>
        </div>
      </div>

      {/* Hero image — full viewport width, no padding */}
      <div
        className="w-full h-[340px] lg:h-[520px] bg-zinc-200 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/payroll-hero.png"
          alt="Payrol Hero Image"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}

//Section 2 — Trust & transparency cards

export type TrustCardProps = {
  icon: React.ReactNode;
  heading: string;
  body: string;
  bg: string;
  textDark?: boolean;
};

function TrustCard({
  icon,
  heading,
  body,
  bg,
  textDark = true,
}: TrustCardProps) {
  const text = textDark ? "text-zinc-900" : "text-white";
  const sub = textDark ? "text-zinc-500" : "text-white/70";
  const iconBg = textDark ? "bg-white/60" : "bg-white/15";

  return (
    <article
      className="
        rounded-2xl p-7 flex flex-col gap-5
        h-full
        shadow-[0_2px_12px_rgba(0,0,0,0.06)]
        hover:shadow-[0_12px_36px_rgba(0,0,0,0.13)]
        hover:-translate-y-1.5
        transition-all duration-300
      "
      style={{ backgroundColor: bg }}
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}
        style={{ color: textDark ? "var(--color-main)" : "#fff" }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className={`text-base font-semibold leading-snug ${text}`}>
          {heading}
        </h3>
        <p className={`text-sm leading-relaxed ${sub}`}>{body}</p>
      </div>
    </article>
  );
}

export function TrustSection() {
  return (
    <section
      className="py-20 lg:py-28 px-6 lg:px-16 bg-white"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-7xl flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-2xl mx-auto text-center">
          <h2
            id="trust-heading"
            className="text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight"
          >
            Where your tax money goes, you can verify.
          </h2>
          <p className="text-base lg:text-lg text-zinc-500 leading-relaxed">
            Tax and pension money belongs to your staff and the state, not to
            us. We treat it that way.
          </p>
        </div>
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 items-stretch"
          role="list"
          aria-label="Trust and transparency features"
        >
          {TRUST_CARDS.slice(0, 3).map((card) => (
            <li key={card.heading} className="lg:col-span-2">
              <TrustCard {...card} />
            </li>
          ))}
          {TRUST_CARDS.slice(3).map((card) => (
            <li key={card.heading} className="lg:col-span-3">
              <TrustCard {...card} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

//Section 3 — Pricing

export type PricingCardProps = {
  tier: string;
  price: string;
  unit: string;
  features: string[];
  bg: string;
  cta?: string;
};

function PricingCard({
  tier,
  price,
  unit,
  features,
  bg,
  cta = "Get started",
}: PricingCardProps) {
  return (
    <article
      className="rounded-2xl p-8 lg:p-10 flex flex-col gap-8 hover:-translate-y-1 transition-transform duration-300"
      style={{ backgroundColor: bg }}
    >
      <div className="flex flex-col gap-3">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
          {tier}
        </span>
        <div className="flex items-end gap-1.5">
          <span className="text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900">
            {price}
          </span>
          <span className="text-sm text-zinc-500 pb-1.5">{unit}</span>
        </div>
      </div>

      <ul className="flex flex-col gap-3" role="list">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <HugeiconsIcon
              icon={Tick02Icon}
              size={16}
              strokeWidth={2.5}
              className="shrink-0 mt-0.5 text-zinc-900"
            />
            <span className="text-sm text-zinc-700 leading-snug">{f}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/auth/signup"
        className="mt-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-700 transition-colors"
      >
        {cta}
      </Link>
    </article>
  );
}

export function PricingSection() {
  return (
    <section
      className="py-20 lg:py-28 px-6 lg:px-16 bg-[#F6F6FC]"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-5xl flex flex-col gap-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            id="pricing-heading"
            className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight"
          >
            Simple Per-Employee Pricing
          </h2>
          <p className="text-base text-zinc-500 max-w-md leading-relaxed">
            No monthly subscriptions, no surprises. You only pay when you run
            payroll.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PRICING.map((p) => (
            <PricingCard key={p.tier} {...p} />
          ))}
        </div>

        <p className="text-center text-xs text-zinc-400">
          All prices exclude VAT. Pension remittance is subject to PFA
          processing timelines. PAYE is filed per FIRS schedule.
        </p>
      </div>
    </section>
  );
}

//Section 4 — FAQ + CTA

export function PayrollFAQ() {
  return (
    <section
      className="py-20 lg:py-28 px-6 lg:px-16 bg-white"
      aria-labelledby="payroll-faq-heading"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left — CTA */}
        <div className="lg:sticky lg:top-24 flex flex-col gap-6">
          <h2
            id="payroll-faq-heading"
            className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight"
          >
            Questions we get asked a lot.
          </h2>
          <p className="text-base text-zinc-500 leading-relaxed">
            Can't find what you need? Talk to our payroll team directly.
          </p>
          <a
            href="https://wa.me/2348130695389"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-xl border border-zinc-300 text-zinc-800 text-sm font-semibold hover:bg-zinc-50 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with us on WhatsApp
          </a>
        </div>

        {/* Right — FAQ list */}
        <dl className="flex flex-col divide-y divide-zinc-100">
          {FAQS.map(({ q, a }) => (
            <div key={q} className="py-7">
              <dt className="text-base font-semibold text-zinc-900 mb-2">
                {q}
              </dt>
              <dd className="text-sm text-zinc-500 leading-relaxed">{a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
