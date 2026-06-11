import {
  DecoBlob,
  DecoCapsule,
  DecoSpiral,
} from "@/components/Business/CardSvg";

function Icon({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      width={32}
      height={32}
      loading="lazy"
      decoding="async"
      className="object-contain"
    />
  );
}

export const CARDS = [
  {
    bg: "#E0DDFB",
    iconBg: "#F6F5FE",
    icon: <Icon src="/public/icon1.svg" alt="" />,
    text: "Missed payroll deadlines lead to unhappy teams.",
    decoration: <DecoSpiral />,
    textColor: "text-[#1A1A1A]",
  },
  {
    bg: "#665BE0",
    iconBg: "rgba(255,255,255,0.3)",
    icon: <Icon src="/public/icon2.svg" alt="" />,
    text: "Subscriptions and expenses slip through the cracks.",
    decoration: <DecoBlob />,
    textColor: "text-white",
  },
  {
    bg: "#1B1B24",
    iconBg: "rgba(255,255,255,0.3)",
    icon: <Icon src="/public/icon3.svg" alt="" />,
    text: "Spreadsheets slow you down, zero insights costs money.",
    decoration: <DecoCapsule />,
    textColor: "text-white",
  },
] as const;
