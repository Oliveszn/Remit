import type { DropdownItem } from "@/types/Navtypes/Dropdown";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export function MobileAccordion({
  label,
  items,
  isOpen,
  onToggle,
}: {
  label: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bodyRef.current) return;
    if (isOpen) {
      gsap.fromTo(
        bodyRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.35, ease: "power3.out" },
      );
    } else {
      gsap.to(bodyRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <li className="menu-item border-b border-zinc-100">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          w-full flex items-center justify-between
          py-4 text-lg font-medium text-zinc-800
          hover:text-zinc-500 transition-colors
        "
      >
        {label}
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          size={16}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        ref={bodyRef}
        style={{ height: 0, overflow: "hidden", opacity: 0 }}
        role="region"
        aria-label={`${label} links`}
      >
        <ul className="pb-4 space-y-1" role="list">
          {items.map((item) => (
            <li key={item.title}>
              <a
                href="#"
                className="flex items-start gap-3 px-1 py-2.5 rounded-xl hover:bg-zinc-50 transition-colors"
              >
                <span
                  className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-100 text-base"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed mt-0.5">
                    {item.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
