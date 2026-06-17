import {
  CardsVisual,
  ExpensesVisual,
  PayrollVisual,
} from "@/components/Business/PlatformSection";
import type { CardData } from "@/types/PlatformSectiontypes";

export const staff = [
  {
    initials: "PT",
    name: "Panshak Thomas",
    salary: 520000,
    color: "bg-[rgb(63,189,241)]",
  },
  {
    initials: "CO",
    name: "Chiamaka Okafor",
    salary: 380000,
    color: "bg-[#665BE0]",
  },
  {
    initials: "IM",
    name: "Ibrahim Musa",
    salary: 450000,
    color: "bg-[#34D399]",
  },
  {
    initials: "TA",
    name: "Temitope Adewale",
    salary: 295000,
    color: "bg-[#F59E0B]",
  },
  {
    initials: "AN",
    name: "Adaobi Nwosu",
    salary: 610000,
    color: "bg-[#EF4444]",
  },
];

export const cards: CardData[] = [
  {
    label: "Marketing",
    last4: "2311",
    expiry: "15/27",
    color: "bg-[#665BE0]",
    textLight: true,
  },
  {
    label: "Engineering",
    last4: "8842",
    expiry: "09/26",
    color: "bg-[#1B1B24]",
    textLight: true,
  },
  {
    label: "Operations",
    last4: "5190",
    expiry: "03/28",
    color: "bg-[#F3F0FF]",
    textLight: false,
  },
  {
    label: "HR",
    last4: "3374",
    expiry: "11/27",
    color: "bg-[#E9E5FF]",
    textLight: false,
  },
];

export const PANELS = [
  {
    id: "payroll",
    heading: "Payroll, tax, and pension — handled in one run.",
    body: "Pay your team, deduct PAYE under the Nigeria Tax Act 2025, remit pension to PFAs, and clear salary advances — automatically. ₦500 per employee per run.",
    cta: "Explore Payroll",
    visual: <PayrollVisual />,
    visualLabel: "Payroll dashboard showing staff list and total salaries",
    bg: "#FFFFFF",
  },
  {
    id: "cards",
    heading: "Smart Corporate Cards for Teams.",
    body: "Track subscriptions, assign cards to teams, set spending/vendor limits, and make global payments securely with PCI DSS-compliant cards.",
    cta: "Explore Cards",
    visual: <CardsVisual />,
    visualLabel:
      "Four corporate cards for Marketing, Engineering, Operations, and HR teams",
    // bg: "#FAFAFA",
    bg: "#FFFFFF",
  },
  {
    id: "expenses",
    heading: "Stay in Control of Every Expense.",
    body: "Create budgets, add one-time or recurring expenses, approve team requests, automate bills & vendor payments, track monthly spending.",
    cta: "Explore Budgeting & Expenses",
    visual: <ExpensesVisual />,
    visualLabel:
      "Expense dashboard showing budget progress bars and vendor subscriptions",
    // bg: "#F7F6FF",
    bg: "#FFFFFF",
  },
];
