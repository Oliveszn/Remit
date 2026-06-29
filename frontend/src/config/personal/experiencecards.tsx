import {
  DecoBlob,
  DecoCapsule,
  DecoSpiral,
} from "../../components/Business/CardSvg";
export const CARDS = [
  {
    bg: "#E0DDFB",
    text: "You get paid, you promise yourself this month will be different, then boom — you're broke by week two.",
    decoration: <DecoSpiral />,
    textColor: "text-[#1A1A1A]",
    img: "/pp1.webp",
    imgAlt: "Person checking their phone looking stressed about money",
  },
  {
    bg: "#665BE0",
    text: "Bills pile up, subscriptions renew, and you're left wondering what happened.",
    decoration: <DecoBlob />,
    textColor: "text-white",
    img: "/pp2.webp",
    imgAlt: "Overwhelmed by notifications and payment reminders",
  },
  {
    bg: "#1B1B24",
    text: "We get it. That's why we built Remit: so you can stop stressing and start automating.",
    decoration: <DecoCapsule />,
    textColor: "text-white",
    img: "/pp3.webp",
    imgAlt: "Person relaxed with finances on autopilot",
  },
];
