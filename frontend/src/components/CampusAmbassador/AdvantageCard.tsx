type AdvantageCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function AdvantageCard({
  icon,
  title,
  description,
}: AdvantageCardProps) {
  return (
    <article
      className="
        bg-white rounded-2xl p-6
        shadow-[0_2px_16px_rgba(0,0,0,0.07)]
        flex flex-col gap-4
        hover:shadow-[0_4px_24px_rgba(0,0,0,0.11)]
        transition-shadow duration-200
      "
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src={icon}
          alt=""
          className="w-7 h-7 object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1.5">
        <h2 className="text-base font-semibold text-zinc-900">{title}</h2>
        <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
