import type { TestimonialData } from "@/types/Testimonial";

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  avatar,
  index = 0,
}: TestimonialData) {
  const isOdd = index % 2 === 0;
  return (
    <div
      className={`
  shrink-0 w-[90%] sm:w-[80%] lg:w-[75%]
  rounded-2xl p-7 flex flex-col gap-6 shadow-sm border
  transition-colors duration-300
  ${isOdd ? "bg-main text-white border-transparent" : "bg-white border-zinc-200 text-zinc-900"}
`}
    >
      {/* Quote mark */}
      <svg
        width="32"
        height="24"
        viewBox="0 0 32 24"
        fill="currentColor"
        className={`opacity-30 ${isOdd ? "text-white" : "text-main"}`}
        aria-hidden="true"
      >
        <path d="M0 24V14.4C0 10.08 1.04 6.48 3.12 3.6C5.28 0.72 8.4 0 12 0v3.6C9.84 3.6 8.2 4.32 7.08 5.76C5.96 7.2 5.4 8.88 5.4 10.8H9.6V24H0zm16 0V14.4c0-4.32 1.04-7.92 3.12-10.8C21.28 0.72 24.4 0 28 0v3.6c-2.16 0-3.8.72-4.92 2.16C21.96 4.8 21.4 6.48 21.4 8.4H25.6V24H16z" />
      </svg>

      {/* Quote */}
      <p
        className={`text-base leading-relaxed flex-1 ${isOdd ? "text-white/90" : "text-zinc-700"}`}
      >
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full bg-main/10 flex items-center justify-center text-sm font-semibold shrink-0"
          style={{ color: "var(--color-main)" }}
          aria-hidden="true"
        >
          <img
            src={avatar}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div>
          <p
            className={`text-sm font-semibold ${isOdd ? "text-white" : "text-zinc-900"}`}
          >
            {name}
          </p>
          <p className={`text-xs ${isOdd ? "text-white/70" : "text-zinc-500"}`}>
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
