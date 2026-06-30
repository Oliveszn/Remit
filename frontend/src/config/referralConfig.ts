export type ReferralCard = {
  icon: string;
  title: string;
  description: string;
};

export const REFERRAL_CARDS: ReferralCard[] = [
  {
    icon: "/certificate-icon.png",
    title: "Help Your Friends Save Smarter",
    description:
      "Introduce them to better financial management and watch them thrive.",
  },
  {
    icon: "/certificate-icon.png",
    title: "Lifetime Earnings",
    description:
      "Earn every time your referees pay an expense or create a utility card — forever.",
  },
  {
    icon: "/certificate-icon.png",
    title: "₦500 Bonus for Referees",
    description: "Your friends get a welcome bonus when they fund their plans.",
  },
  {
    icon: "/certificate-icon.png",
    title: "Easy Tracking",
    description:
      "View your earnings and referral stats right inside the Remit app.",
  },
  {
    icon: "/certificate-icon.png",
    title: "Unlimited Potential",
    description: "The more you refer, the more you earn. There's no cap.",
  },
];

export const STEPS = [
  {
    step: "01",
    title: "Get your link",
    body: "Sign up or log in to Remit and grab your unique referral link from the app.",
  },
  {
    step: "02",
    title: "Share it",
    body: "Send your link to friends via WhatsApp, Instagram, X — anywhere they'll see it.",
  },
  {
    step: "03",
    title: "They sign up",
    body: "Your friend creates an account and funds their first plan using your link.",
  },
  {
    step: "04",
    title: "You earn",
    body: "Collect commissions every time they pay an expense or create a utility card. Forever.",
  },
];
