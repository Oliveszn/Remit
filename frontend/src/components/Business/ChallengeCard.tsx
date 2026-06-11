import type { ReactNode } from "react";

type ChallengeCardProps = {
  bg: string; // background color class or hex
  iconBg: string; // icon circle background
  icon: ReactNode; // icon content (img or svg)
  text: string; // card body copy
  decoration: ReactNode; // decorative SVG in top-right
  textColor?: string; // text color class, defaults to white
};

export function ChallengeCard({
  bg,
  iconBg,
  icon,
  text,
  decoration,
  textColor = "text-white",
}: ChallengeCardProps) {
  return (
    <div
      className="
        flex-1 min-w-0
        h-[250px] lg:h-[300px]
        p-6 lg:p-8
        flex flex-col justify-between items-start
        relative rounded-2xl overflow-hidden
        transition-transform duration-300 ease-out
        hover:-translate-y-1
        focus-within:ring-2 focus-within:ring-white/40
      "
      style={{ backgroundColor: bg }}
    >
      {/* Decorative SVG — top-right, purely visual */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        aria-hidden="true"
      >
        {decoration}
      </div>

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center relative z-10 mb-6 shrink-0"
        style={{ backgroundColor: iconBg }}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Copy */}
      <p
        className={`font-semibold text-base leading-snug relative z-10 ${textColor}`}
      >
        {text}
      </p>
    </div>
  );
}
