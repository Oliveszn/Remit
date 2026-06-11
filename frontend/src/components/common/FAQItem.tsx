import { useRef, useState } from "react";
import gsap from "gsap";

export type FAQItemData = {
  question: string;
  answer: string;
};

type FAQItemProps = FAQItemData;

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const el = bodyRef.current;
    if (!el) return;

    if (!open) {
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.35, ease: "power3.out" },
      );
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power3.in",
      });
    }

    setOpen((prev) => !prev);
  };

  return (
    <div
      className="rounded-2xl overflow-hidden transition-colors duration-300 border border-[#F6F6FC]"
      style={{ backgroundColor: open ? "var(--color-main)" : "#F6F6FC" }}
    >
      <button
        onClick={toggle}
        aria-expanded={open}
        className="
          w-full flex items-center justify-between
          p-6 text-left 
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-white/50 focus-visible:ring-offset-2
          focus-visible:ring-offset-transparent
          rounded-2xl cursor-pointer
        "
      >
        <span
          className="text-base font-semibold pr-4 transition-colors duration-300"
          style={{ color: open ? "#ffffff" : "#4A485F" }}
        >
          {question}
        </span>

        {/* Plus / Minus icon */}
        <span
          className="
            shrink-0 w-8 h-8 rounded-full
            flex items-center justify-center
            transition-colors duration-300
          "
          style={{
            backgroundColor: open ? "rgba(255,255,255,0.15)" : "#ffffff",
          }}
          aria-hidden="true"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Horizontal bar — always visible */}
            <rect
              x="0"
              y="6.25"
              width="14"
              height="1.5"
              rx="0.75"
              fill={open ? "#ffffff" : "var(--color-main)"}
              className="transition-colors duration-300"
            />
            {/* Vertical bar — rotates out when open */}
            <rect
              x="6.25"
              y="0"
              width="1.5"
              height="14"
              rx="0.75"
              fill={open ? "#ffffff" : "var(--color-main)"}
              className="transition-all duration-300"
              style={{
                transformOrigin: "center",
                transform: open ? "scaleY(0)" : "scaleY(1)",
              }}
            />
          </svg>
        </span>
      </button>

      {/* Answer body*/}
      <div
        ref={bodyRef}
        style={{ height: 0, overflow: "hidden", opacity: 0 }}
        role="region"
        aria-label={question}
      >
        <p className="px-6 pb-6 text-sm leading-relaxed text-white/80">
          {answer}
        </p>
      </div>
    </div>
  );
}
