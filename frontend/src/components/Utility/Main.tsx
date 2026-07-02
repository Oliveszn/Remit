import { Link } from "react-router-dom";
import {
  Globe02Icon,
  CreditCardIcon,
  ViewIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

function VisaLogo() {
  return (
    <svg
      viewBox="0 0 750 471"
      className="w-14 h-auto"
      aria-label="Visa"
      role="img"
    >
      <path
        d="M278.198 334.228L311.9 138.6H361l-33.8 195.628h-49.002zm246.7-191.016c-9.7-3.614-24.8-7.44-43.8-7.44-48.2 0-82.1 24.76-82.4 60.198-.3 26.2 24.3 40.8 42.9 49.5 19 8.9 25.4 14.6 25.3 22.5-.1 12.1-15.2 17.7-29.2 17.7-19.5 0-29.9-2.8-45.9-9.6l-6.3-2.9-6.8 40.8c11.3 5 32.3 9.3 54 9.5 51 0 84.1-24.4 84.5-62.3.2-20.7-12.8-36.5-41.1-49.5-17.1-8.4-27.6-14-27.5-22.5 0-7.5 8.9-15.6 28.1-15.6 16-.3 27.6 3.3 36.6 7l4.4 2 6.6-39.9zm125.4-.6h-37.6c-11.7 0-20.4 3.2-25.5 15l-72.4 166.628h51.2s8.4-22.4 10.2-27.3c5.6 0 55.2.1 62.3.1 1.5 6.4 5.9 27.2 5.9 27.2h45.2L650.3 142.6zm-60.2 115.3c4-10.5 19.3-50.6 19.3-50.6-.3.4 4-10.5 6.4-17.4l3.3 15.7s9.3 43.3 11.3 52.3h-40.3zm-388.3-115.3l-47.8 133.4-5.1-25.2c-8.9-29.2-36.7-60.9-67.8-76.7l43.7 159.5 51.6-.1 76.7-191h-51.3z"
        fill="#fff"
      />
      <path
        d="M187.8 142.5H108l-.6 3.8c62.2 15.3 103.4 52.3 120.5 96.8l-17.4-84.8c-3-11.7-11.5-15.4-22.7-15.8z"
        fill="#fff"
        opacity=".6"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      className="bg-white overflow-hidden"
      aria-labelledby="utility-hero-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)]">
        <div className="flex flex-col justify-center gap-8 px-6 lg:pl-16 xl:pl-24 py-20 lg:py-0 lg:pr-10">
          <div className="flex flex-col gap-3">
            <h1
              id="utility-hero-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-[#1D1D25] leading-[1.06]"
            >
              Expense Cards with Built In Control.
            </h1>
          </div>
          <p className="text-base lg:text-lg text-zinc-500 leading-relaxed max-w-md">
            Manage team expenses, subscriptions, and global payments with secure
            USD &amp; NGN cards.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/auth/signup"
              className="
                flex items-center justify-center
                px-8 py-3.5 rounded-xl
                bg-black text-white text-sm font-semibold
                hover:bg-zinc-800 transition-colors duration-150
                w-full sm:w-auto
              "
            >
              Get started
            </Link>
            <a
              href="#why-utility"
              className="
                flex items-center justify-center
                px-8 py-3.5 rounded-xl
                bg-transparent text-black text-sm font-semibold
                border border-black
                hover:bg-zinc-50 transition-colors duration-150
                w-full sm:w-auto
              "
            >
              Explore features
            </a>
          </div>
        </div>
        <div
          className="
            relative w-full
            h-[340px] lg:h-auto
            bg-zinc-100 lg:rounded-l-3xl overflow-hidden
          "
          aria-hidden="true"
        >
          <img
            src="/hero-uti.png"
            alt="Remit utility card on a phone"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
type WhiteCardProps = {
  icon: React.ReactNode;
  text: string;
};

function PainCard({ icon, text }: WhiteCardProps) {
  return (
    <article
      className="
        group bg-white rounded-2xl
        shadow-[0_4px_20px_rgba(0,0,0,0.07)]
        hover:shadow-[0_8px_36px_rgba(0,0,0,0.13)]
        transition-shadow duration-300
        p-6 flex flex-col gap-5
        lg:flex-row lg:items-center lg:gap-6 cursor-default
      "
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
        {icon}
      </div>
      <p className="text-sm font-medium text-zinc-700 leading-relaxed">
        {text}
      </p>
    </article>
  );
}

// Black Remit card
function RemitCard() {
  return (
    <article
      className="
        w-full group bg-zinc-900 rounded-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.2)]
        hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]
        hover:scale-[1.04]
        transition-all duration-300
        p-7 flex flex-col justify-between
        h-[220px] lg:h-full lg:min-h-[320px]
        cursor-default
      "
      aria-label="Remit Visa card"
    >
      <div className="flex items-start justify-between">
        <span className="text-white font-bold text-lg tracking-tight">
          remit
        </span>
        <VisaLogo />
      </div>

      <div className="flex flex-col gap-3">
        <div
          className="w-10 h-7 rounded-md bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-90"
          aria-hidden="true"
        />
        <p className="text-white/50 text-xs font-mono tracking-widest">
          **** **** **** 2024
        </p>
        <p className="text-white/30 text-[10px] uppercase tracking-widest">
          Utility Card
        </p>
      </div>
    </article>
  );
}

export function WhyUtilitySection() {
  return (
    <section
      id="why-utility"
      className="py-20 lg:py-28 px-6 lg:px-16 bg-[#F6F6FC]"
      aria-labelledby="why-utility-heading"
    >
      <div className="mx-auto max-w-6xl flex flex-col gap-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2
            id="why-utility-heading"
            className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight"
          >
            Why Utility Cards?
          </h2>
          <p className="text-base lg:text-lg text-zinc-500">
            Because traditional banking isn't enough.
          </p>
        </div>

        <div
          className="
            grid grid-cols-1
            lg:grid-cols-[1fr_200px_1fr]
            gap-5 items-stretch
          "
          role="list"
          aria-label="Utility card benefits"
        >
          <div className="flex flex-col gap-5" role="listitem">
            <PainCard
              icon={
                <HugeiconsIcon
                  icon={Globe02Icon}
                  size={22}
                  strokeWidth={1.6}
                  className="text-black"
                />
              }
              text="Exchange rate volatility causes unpredictable global spending."
            />
            <PainCard
              icon={
                <HugeiconsIcon
                  icon={CreditCardIcon}
                  size={22}
                  strokeWidth={1.6}
                  className="text-black"
                />
              }
              text="Subscriptions pile up without visibility."
            />
          </div>

          <div className="flex w-full" role="listitem">
            <RemitCard />
          </div>

          <div className="flex flex-col gap-5" role="listitem">
            <PainCard
              icon={
                <HugeiconsIcon
                  icon={ViewIcon}
                  size={22}
                  strokeWidth={1.6}
                  className="text-black"
                />
              }
              text="Business expense tracking gets messy with shared cards."
            />
            <PainCard
              icon={
                <HugeiconsIcon
                  icon={UserGroupIcon}
                  size={22}
                  strokeWidth={1.6}
                  className="text-black"
                />
              }
              text="Teams overspend without accountability."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
