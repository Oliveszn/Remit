import type { DropdownItem } from "@/types/Navtypes/Dropdown";

export const dropdownData: Record<string, DropdownItem[]> = {
  Products: [
    {
      icon: "💸",
      title: "Instant Transfers",
      description:
        "Send money across borders in seconds with real-time FX rates.",
    },
    {
      icon: "🏦",
      title: "Virtual Accounts",
      description: "Get local bank details in multiple currencies instantly.",
    },
    {
      icon: "💳",
      title: "Remit Card",
      description:
        "Spend anywhere in the world with zero foreign transaction fees.",
    },
    {
      icon: "📊",
      title: "Business Payments",
      description: "Automate bulk payouts and manage multi-currency balances.",
    },
  ],
  Resources: [
    {
      icon: "📖",
      title: "Documentation",
      description: "Integrate Remit's API into your product with clear guides.",
    },
    {
      icon: "✍️",
      title: "Blog",
      description: "Insights on fintech, remittances, and building for Africa.",
    },
    {
      icon: "🎓",
      title: "Campus Ambassador",
      description: "Join our ambassador program and earn on your campus.",
    },
    {
      icon: "🤝",
      title: "Referral Program",
      description:
        "Invite friends and earn rewards for every successful signup.",
    },
  ],
};

export const navLinks = [
  { label: "Products", href: "#products", hasDropdown: true },
  { label: "Resources", href: "#resources", hasDropdown: true },
  { label: "Support", href: "https://wa.me/2348130695389", external: true },
];
