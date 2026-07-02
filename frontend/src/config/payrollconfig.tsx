import { HugeiconsIcon } from "@hugeicons/react";
import {
  Shield01Icon,
  HashtagIcon,
  RefreshIcon,
  Activity01Icon,
  LinkSquare02Icon,
} from "@hugeicons/core-free-icons";
import type {
  PricingCardProps,
  TrustCardProps,
} from "@/components/Payroll/Main";
export const FAQS = [
  {
    q: "What happens if I fund late?",
    a: "Payroll runs only disburse after the trust account is funded and reconciled. Late funding delays the run — we'll notify you with enough lead time to act.",
  },
  {
    q: "Which PFAs do you remit to?",
    a: "All PENCOM-licensed PFAs operating in Nigeria. Your employees choose their PFA during onboarding and we route accordingly.",
  },
  {
    q: "How do I handle new hires mid-month?",
    a: "Add them any time. Remit pro-rates their first payroll run automatically based on their start date.",
  },
  {
    q: "Can I run payroll in multiple currencies?",
    a: "NGN payroll is live now. USD payroll is in private beta — join the waitlist from your dashboard.",
  },
];

export const TRUST_CARDS: TrustCardProps[] = [
  {
    icon: (
      <HugeiconsIcon
        icon={Shield01Icon}
        size={24}
        strokeWidth={1.6}
        className="text-black"
      />
    ),
    heading: "Segregated trust account",
    body: "Tax and pension funds sit in a ring-fenced bank account. Never mixed with operating cash, never used for anything else.",
    bg: "#F7F7FC",
  },

  {
    icon: (
      <HugeiconsIcon
        icon={HashtagIcon}
        size={24}
        strokeWidth={1.6}
        className="text-black"
      />
    ),
    heading: "Cryptographic receipts",
    body: "Every PAYE filing and pension remittance is hash-anchored. Your records, our records, and the state IRS records all match.",
    bg: "#F7F7FC",
  },
  {
    icon: (
      <HugeiconsIcon
        icon={RefreshIcon}
        size={24}
        strokeWidth={1.6}
        className="text-black"
      />
    ),
    heading: "Daily reconciliation",
    body: "Trust account balance vs ledger, every day. Drift triggers an alert and pauses new disbursements until resolved.",
    bg: "#F7F7FC",
  },
  {
    icon: (
      <HugeiconsIcon
        icon={Activity01Icon}
        size={24}
        strokeWidth={1.6}
        className="text-black"
      />
    ),
    heading: "Filing status in your dashboard",
    body: "Every payroll run shows real-time filing and remittance status — funded, filed, confirmed. Track every PAYE schedule and pension remittance without asking us.",
    bg: "#DCD8FF",
  },
  {
    icon: (
      <HugeiconsIcon
        icon={LinkSquare02Icon}
        size={24}
        strokeWidth={1.6}
        className="text-white"
      />
    ),
    heading: "Independent verification",
    body: "One-click verification on the state IRS portal for every remittance. You don't have to take our word for it.",
    bg: "#5952E7",
    textDark: false,
  },
];

export const PRICING: PricingCardProps[] = [
  {
    tier: "Basic",
    price: "₦40",
    unit: "per employee / run",
    features: [
      "Payslips",
      "Employee portal",
      "Free salary disbursement to a Remit account",
    ],
    bg: "#DDD8FF",
  },
  {
    tier: "Professional",
    price: "₦500",
    unit: "per employee / run",
    features: [
      "PAYE computation",
      "Pension remittance to all PFAs",
      "Payslips",
      "Employee portal",
      "No remittance transfer fees",
    ],
    bg: "#D8F4FF",
    cta: "Start free trial",
  },
];
