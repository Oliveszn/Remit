import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Home01Icon,
  Alert02Icon,
  ViewOffIcon,
  Clock01Icon,
  TableIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { FEATURES } from "@/config/budgetFeatures";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

//  Animated money drop card
function MoneyDropCard() {
  return (
    <article
      className="relative rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-[220px]"
      style={{
        background: "linear-gradient(126deg, #2B2972 29.06%, #0E0D36 105.44%)",
        boxShadow:
          "0 4px 20px -2px rgba(50,50,71,0.08), 0 0 1px 0 rgba(12,26,75,0.10)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      aria-label="Expense accounts help you automate payments and never miss a deadline"
    >
      <img
        src="/money-stack.gif"
        alt="Animation"
        className="w-full h-32 object-contain"
      />
    </article>
  );
}

// Standard pain card

type PainCardProps = {
  icon: React.ReactNode;
  title: string;
  iconColor?: string;
};

function PainCard({
  icon,
  title,
  iconColor = "var(--color-main)",
}: PainCardProps) {
  return (
    <article
      className="
        bg-white rounded-2xl p-6
        flex flex-col gap-5 min-h-[220px] justify-start
        shadow-[0_4px_20px_-2px_rgba(50,50,71,0.08),0_0_1px_0_rgba(12,26,75,0.10)]
        hover:shadow-[0_12px_36px_-2px_rgba(50,50,71,0.14)]
        transition-shadow duration-300
      "
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: `${iconColor}18`, color: iconColor }}
      >
        {icon}
      </div>
      <p className="text-sm font-semibold text-zinc-800 leading-snug">
        {title}
      </p>
    </article>
  );
}

//  Section 2 — Why businesses struggle
const PAIN_CARDS = [
  {
    icon: (
      <HugeiconsIcon
        icon={Home01Icon}
        size={22}
        strokeWidth={1.6}
        className="text-black"
      />
    ),
    title: "Shared bank accounts blur accountability.",
  },
  {
    icon: (
      <HugeiconsIcon
        icon={Alert02Icon}
        size={22}
        strokeWidth={1.6}
        className="text-black"
      />
    ),
    title: "Missed payment deadlines cause late fees.",
  },

  null, // slot 3 = money drop card

  {
    icon: (
      <HugeiconsIcon
        icon={ViewOffIcon}
        size={22}
        strokeWidth={1.6}
        className="text-black"
      />
    ),
    title: "No visibility into which department spends what.",
  },
  {
    icon: (
      <HugeiconsIcon
        icon={Clock01Icon}
        size={22}
        strokeWidth={1.6}
        className="text-black"
      />
    ),
    title: "Approvals take forever, slowing down teams.",
  },
  {
    icon: (
      <HugeiconsIcon
        icon={TableIcon}
        size={22}
        strokeWidth={1.6}
        className="text-black"
      />
    ),
    title: "Manual spreadsheets are messy and error-prone.",
  },
];

export function StruggleSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(grid.children) as HTMLElement[];

    // Set initial slanted state
    gsap.set(cards, { rotateZ: -6, opacity: 0, y: 30 });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: grid,
        start: "top 80%",
        onEnter: () => {
          gsap.to(cards, {
            rotateZ: 0,
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
          });
        },
      });
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="py-20 lg:py-28 px-6 lg:px-16 bg-[#F6F6FC]"
      aria-labelledby="struggle-heading"
    >
      <div className="mx-auto max-w-6xl flex flex-col gap-14">
        <h2
          id="struggle-heading"
          className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight text-center"
        >
          Why Businesses Struggle With Expenses
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:grid-flow-col gap-5"
          role="list"
          aria-label="Common business expense challenges"
        >
          {PAIN_CARDS.map((card, i) =>
            card === null ? (
              <div key={i} role="listitem">
                <MoneyDropCard />
              </div>
            ) : (
              <div key={i} role="listitem">
                <PainCard {...card} />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

//  Section 1 — Hero

export function HeroSection() {
  return (
    <section
      className="bg-white overflow-hidden"
      aria-labelledby="expense-hero-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)]">
        {/* Text */}
        <div className="flex flex-col justify-center gap-8 px-6 lg:pl-16 xl:pl-24 py-20 lg:py-0 lg:pr-10 order-2 lg:order-1">
          <div className="flex flex-col gap-3">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-main)" }}
            >
              Budget &amp; Expenses
            </span>
            <h1
              id="expense-hero-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.06]"
            >
              Speed and Control for All Business Expenses.
            </h1>
          </div>
          <p className="text-base lg:text-lg text-zinc-500 leading-relaxed max-w-md">
            Remit Expense Accounts help you manage recurring expenses, one-time
            payments, and team requests — all in one single dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/auth/signup"
              className="flex items-center justify-center px-8 py-3.5 rounded-xl bg-black text-white text-sm font-semibold hover:bg-zinc-800 transition-colors duration-150 w-full sm:w-auto"
            >
              Get started
            </Link>
            <a
              href="#why-struggle"
              className="flex items-center justify-center px-8 py-3.5 rounded-xl bg-transparent text-black text-sm font-semibold border border-black hover:bg-zinc-50 transition-colors duration-150 w-full sm:w-auto"
            >
              Explore features
            </a>
          </div>
        </div>

        <div
          className="relative w-full h-[340px] lg:h-auto bg-zinc-100 lg:rounded-l-3xl overflow-hidden order-1 lg:order-2"
          aria-hidden="true"
        >
          <img
            src="/hero-be.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

//  Section 3 — Feature highlights

export function FeaturesSection() {
  return (
    <section
      className="py-20 lg:py-28 px-6 lg:px-16 bg-white"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-16 items-start">
        {/* Sticky left label */}
        <div className="lg:sticky lg:top-24 flex flex-col gap-6 lg:w-[360px] shrink-0">
          <h2
            id="features-heading"
            className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight"
          >
            Everything your finance team actually needs.
          </h2>
          <p className="text-base text-zinc-500 leading-relaxed">
            Built for the realities of Nigerian business — fast approvals,
            multi-currency support, and controls that keep teams honest.
          </p>
          <Link
            to="/auth/signup"
            className="inline-flex items-center justify-center w-fit px-8 py-3.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "var(--color-main)" }}
          >
            Start for free
          </Link>
        </div>

        {/* Right — feature list */}
        <div className="flex flex-col divide-y divide-zinc-100 flex-1">
          {FEATURES.map(({ title, body }) => (
            <div key={title} className="py-8 flex gap-5 items-start group">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-zinc-900 group-hover:text-main transition-colors duration-150">
                  {title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
