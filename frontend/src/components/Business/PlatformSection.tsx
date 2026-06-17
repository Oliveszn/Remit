import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cards, PANELS, staff } from "@/config/business/platformsection";
import type { CardData } from "@/types/PlatformSectiontypes";

gsap.registerPlugin(ScrollTrigger);

const totalStaff = staff.length;

const totalSalaries = staff.reduce((sum, member) => sum + member.salary, 0);

//  Shared pieces

function CTAButton({ label }: { label: string }) {
  return (
    <button
      className="
      inline-flex items-center justify-center
      border border-black rounded-lg
      bg-transparent py-3 px-8 text-sm font-medium
      transition-colors duration-200 whitespace-nowrap
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30
      cursor-pointer appearance-none select-none
      h-[2.5rem] min-w-[2.5rem] w-fit
    "
    >
      {label}
    </button>
  );
}

function VisualShell({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className="
        bg-[linear-gradient(135deg,_#F3F0FF_0%,_#E9E5FF_100%)]
        h-[450px] lg:h-[500px] w-full
        relative overflow-hidden border border-[#EDF2F7]
        flex items-center justify-center rounded-3xl
      "
    >
      {children}
    </div>
  );
}

// Section1
//  Payroll visual

export function PayrollVisual() {
  return (
    <div className="w-full h-full flex flex-col relative">
      {/* Decorative blob */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="478"
          height="523"
          viewBox="0 0 478 523"
          fill="none"
        >
          <path
            d="M123.745 11.522C163.65 -30.1441 208.161 -24.7673 237.988 -2.18885C267.546 20.186 274.225 74.1901 240.556 128.307C250.284 113.892 293.302 75.6928 336.759 87.9572C381.8 100.669 393.225 136.937 390 171.744C384.941 226.359 357.384 274.001 331.313 313.696C358.57 295.78 403.221 273.366 442.456 289.908C481.69 306.45 496.676 360.99 443.376 423.126C390.076 485.262 259.866 586.453 187.61 497.842C158.636 462.31 171.321 407.979 181.892 378.442C186.468 365.656 201.309 328.275 229.306 279.74C190.677 335.01 112.632 410.468 51.6949 381.293C-70.1787 322.942 52.3441 86.0727 123.745 11.522Z"
            fill="#C5C2F3"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col p-4 lg:p-6 h-full">
        <div className="bg-white rounded-2xl flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 flex flex-col justify-center divide-y divide-zinc-100 px-4">
            {staff.map((m) => (
              <div
                key={m.name}
                className="flex items-center justify-between py-2.5"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${m.color}`}
                  >
                    <span className="text-xs font-semibold text-white">
                      {m.initials}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-zinc-800">
                    {m.name}
                  </span>
                </div>
                <span className="text-sm font-semibold text-zinc-900">
                  ₦{m.salary.toLocaleString()}.00
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-zinc-100 px-4 lg:px-6 py-5 bg-zinc-50 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-500">Total Staff</span>
              <span className="text-sm font-semibold text-zinc-900">
                {totalStaff}
              </span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-zinc-500">Total Salaries</span>
              <span
                className="text-sm font-bold"
                style={{ color: "var(--color-main)" }}
              >
                ₦{totalSalaries.toLocaleString()}.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// /  Section 2 visual — Cards

function CorporateCard({
  label,
  last4,
  expiry,
  color,
  textLight = true,
}: CardData) {
  const text = textLight ? "text-white" : "text-zinc-800";
  const sub = textLight ? "text-white/60" : "text-zinc-500";

  return (
    <article
      className={`${color} rounded-2xl p-5 flex flex-col justify-between h-full`}
      aria-label={`${label} card ending in ${last4}`}
    >
      {/* Top row: label + network logo */}
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-semibold uppercase tracking-widest ${sub}`}
        >
          {label}
        </span>
        <img
          src="/public/mastercard.png"
          alt="Mastercard"
          className="h-5 w-auto opacity-80"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      {/* Chip placeholder */}
      <div
        className={`w-8 h-6 rounded-md border ${textLight ? "border-white/30 bg-white/20" : "border-zinc-300 bg-zinc-200"}`}
        aria-hidden="true"
      />

      {/* PAN */}
      <div>
        <p className={`text-xs mb-1 ${sub}`}>Card Number</p>
        <p
          className={`text-sm font-mono font-semibold tracking-widest ${text}`}
        >
          **** **** **** {last4}
        </p>
      </div>

      {/* Expiry */}
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-[10px] uppercase ${sub}`}>Exp. Date</p>
          <p className={`text-sm font-semibold ${text}`}>{expiry}</p>
        </div>
      </div>
    </article>
  );
}

export function CardsVisual() {
  // 2×2 grid, slight scale on back row to suggest depth
  const top = cards.slice(0, 2);
  const bottom = cards.slice(2, 4);

  return (
    <div className="w-full h-full flex flex-col p-4 lg:p-6 gap-3 relative z-10">
      {/* Top row — full size */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        {top.map((c) => (
          <CorporateCard key={c.label} {...c} />
        ))}
      </div>
      {/* Bottom row — slightly scaled to create a layered depth feel */}
      <div className="grid grid-cols-2 gap-3 flex-1 scale-[0.92] origin-bottom opacity-80">
        {bottom.map((c) => (
          <CorporateCard key={c.label} {...c} />
        ))}
      </div>
    </div>
  );
}

// Section 3 visual — Expenses

type BudgetProps = {
  label: string;
  currency: string;
  total: string;
  spent: number; // 0–100 percentage
  allocated: string;
};

function BudgetCard({ label, currency, total, spent, allocated }: BudgetProps) {
  return (
    <div className="gap-3 lg:gap-4 p-4 lg:p-5 flex flex-col w-full bg-white rounded-xl">
      <p className="text-[#7E7E99] text-sm">{label}</p>
      <div className="flex flex-col gap-2">
        <div className="flex items-baseline gap-[2px]">
          <span className="text-[#1B1B24] font-semibold text-sm">
            {currency}
          </span>
          <span className="text-lg font-semibold text-[#1B1B24]">{total}</span>
        </div>
        {/* Progress bar */}
        <div
          className="overflow-hidden relative bg-[#EDF2F7] h-3 rounded-full"
          role="progressbar"
          aria-valuenow={spent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${label} — ${spent}% used`}
        >
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${spent}%`,
              backgroundColor: "var(--color-main)",
            }}
          />
        </div>
        <p className="text-xs text-zinc-500 mt-1">
          <span className="font-medium text-zinc-700">
            {currency}
            {allocated}
          </span>{" "}
          allocated
        </p>
      </div>
    </div>
  );
}

type VendorRowProps = {
  name: string;
  due: string;
  amount: string;
  logoSrc: string;
  logoBg?: string;
};

function VendorRow({
  name,
  due,
  amount,
  logoSrc,
  logoBg = "#232F3E",
}: VendorRowProps) {
  return (
    <div className="flex items-center justify-between bg-white py-3.5 px-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      <div className="flex gap-3 items-center">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-[#E2E8F0]"
          style={{ backgroundColor: logoBg }}
          aria-hidden="true"
        >
          <img src={logoSrc} alt="" className="object-contain w-8 h-8" />
        </div>
        <div>
          <p className="font-semibold text-sm text-[#1A202C]">{name}</p>
          <p className="text-[#718096] text-xs">{due}</p>
        </div>
      </div>
      <p className="text-sm font-bold text-[#171923]">{amount}</p>
    </div>
  );
}

export function ExpensesVisual() {
  return (
    <div className="w-full h-full flex flex-col relative">
      {/* Corner blob */}
      <div
        className="z-0 absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="500"
          viewBox="0 0 500 500"
          fill="none"
        >
          <path
            d="M85.7864 0C30.8583 54.9281 4.01326e-07 129.427 0 207.107C-4.01326e-07 284.787 30.8583 359.285 85.7864 414.214C140.715 469.142 215.213 500 292.893 500C370.573 500 445.072 469.142 500 414.214L85.7864 0Z"
            fill="#C5C2F3"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col p-4 lg:p-6 h-full gap-3">
        {/* Budget cards — side by side */}
        <div className="flex gap-3">
          <BudgetCard
            label="Naira Budget"
            currency="₦"
            total="30,000.00"
            spent={20}
            allocated="6,000.00"
          />
          <BudgetCard
            label="Dollar Budget"
            currency="$"
            total="5,000.00"
            spent={55}
            allocated="2,750.00"
          />
        </div>

        {/* Vendor subscription rows */}
        <div className="flex flex-col gap-2.5 flex-1 justify-center">
          <VendorRow
            name="Amazon Web Services"
            due="Due 12th May"
            amount="$50"
            logoSrc="/public/aws.png"
            logoBg="#232F3E"
          />
          <VendorRow
            name="Google Workspace"
            due="Due 18th May"
            amount="$18"
            logoSrc="/public/google.png"
            logoBg="#FFFFFF"
          />
          <VendorRow
            name="Mailchimp"
            due="Due 24th May"
            amount="$35"
            logoSrc="/public/mailchimp.png"
            logoBg="#FFE01B"
          />
        </div>
      </div>
    </div>
  );
}

export default function PlatformSection() {
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const panels = panelRefs.current.filter((p): p is HTMLDivElement =>
      Boolean(p),
    );
    if (panels.length < 2) return;

    const ctx = gsap.context(() => {
      panels.forEach((panel, i) => {
        // Pin each panel (except the last) while the next slides over it
        if (i < panels.length - 1) {
          ScrollTrigger.create({
            trigger: panel,
            start: "top top+=64", // 64px = navbar h-16
            end: () => `+=${panels[i + 1].offsetHeight}`,
            pin: true,
            pinSpacing: false,
          });
        }

        // Slide-up reveal for panels 2 and 3
        if (i > 0) {
          gsap.fromTo(
            panel,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            },
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="py-20 px-6 bg-[#FFFFFF]"
      aria-labelledby="platform-heading"
    >
      <div className="mx-auto max-w-6xl flex flex-col gap-12">
        {/* Heading */}
        <div className="flex items-center w-full">
          <h2
            id="platform-heading"
            className="text-left lg:text-center max-w-full mx-auto lg:max-w-[80%] text-3xl md:text-4xl lg:text-6xl leading-[114%] capitalize tracking-[-2%] text-[#000000] font-bold"
          >
            Everything You Need, All in One{" "}
            <span className="text-[#665BE0] font-medium italic tracking-[-1.28px] leading-[140%]">
              Platform
            </span>
            .
          </h2>
        </div>

        {/* Stacking panels */}
        <div className="relative flex flex-col gap-6">
          {PANELS.map((p, i) => (
            <div
              key={p.id}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className="w-full rounded-3xl overflow-hidden"
              style={{ backgroundColor: p.bg, zIndex: i + 1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-12">
                {/* Copy */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl md:text-3xl lg:text-5xl leading-[114%] tracking-[-2%] font-semibold text-[#000000]">
                      {p.heading}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed max-w-[420px] text-[#4A485F]">
                      {p.body}
                    </p>
                  </div>
                  <CTAButton label={p.cta} />
                </div>

                {/* Visual */}
                <VisualShell label={p.visualLabel}>{p.visual}</VisualShell>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
