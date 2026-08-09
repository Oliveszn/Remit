import type { DropdownItem } from "@/types/Navtypes/Dropdown";

export const dropdownData: Record<string, DropdownItem[]> = {
  Products: [
    {
      icon: "💸",
      title: "Payroll",
      description: "Automated Payroll Without the Stress",
      link: "/payroll",
    },
    // {
    //   icon: "🏦",
    //   title: "Virtual Accounts",
    //   description: "Get local bank details in multiple currencies instantly.",
    //   link: "",
    // },
    {
      icon: "💳",
      title: "Utility Cards",
      description: "Smart Corporate Cards for your Teams.",
      link: "/utility-cards",
    },
    {
      icon: "📊",
      title: "Budget & Expense Management",
      description: "Stay in Control of Every Expense.",
      link: "/budget-expenses",
    },
  ],
  Resources: [
    // {
    //   icon: "📖",
    //   title: "Documentation",
    //   description: "Integrate Remit's API into your product with clear guides.",
    //   link: "",
    // },
    // {
    //   icon: "✍️",
    //   title: "Blog",
    //   description: "Insights on fintech, remittances, and building for Africa.",
    //   link: "",
    // },
    {
      icon: "🎓",
      title: "Campus Ambassador",
      description: "Earn while you earn on as a Remit ambassador",
      link: "/campus-ambassadors",
    },
    {
      icon: "🤝",
      title: "Referral Program",
      description: "Refer friends and earn rewards",
      link: "/referrals",
    },
  ],
};

export const navLinks = [
  { label: "Products", href: "#products", hasDropdown: true },
  { label: "Resources", href: "#resources", hasDropdown: true },
  { label: "Support", href: "https://wa.me/2348130695389", external: true },
];
