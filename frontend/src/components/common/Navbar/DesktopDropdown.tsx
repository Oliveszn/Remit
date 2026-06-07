import type { DropdownItem } from "@/types/Navtypes/Dropdown";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function DesktopDropdown({
  label,
  items,
  visible,
}: {
  label: string;
  items: DropdownItem[];
  visible: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (visible) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" },
      );
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={ref}
      role="region"
      aria-label={`${label} menu`}
      className="
        absolute top-full left-1/2 -translate-x-1/2
        w-[52vw] min-w-[480px]
        mt-0 pt-3
        z-50
      "
    >
      {/* Arrow tip */}
      <div className="flex justify-center -mb-1.5">
        <div className="w-3 h-3 rotate-45 bg-white border-l border-t border-zinc-200" />
      </div>

      <div className="bg-white rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-900/10 p-5">
        <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold mb-4 px-1">
          {label}
        </p>
        <ul className="grid grid-cols-2 gap-2" role="list">
          {items.map((item) => (
            <li key={item.title}>
              <a
                href="#"
                className="
                  flex items-start gap-3
                  p-3 rounded-xl
                  hover:bg-zinc-50
                  transition-colors duration-150
                  group
                "
              >
                <span
                  className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-100 text-base"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-900 group-hover:text-zinc-600 transition-colors truncate">
                    {item.title}
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed mt-0.5 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
