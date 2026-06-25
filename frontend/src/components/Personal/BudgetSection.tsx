import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CARDS = [
  {
    text: "Automatically save for bills before they're due.",
    img: "/budget1.webp",
    imgAlt: "Illustration of automatic bill savings",
  },
  {
    text: "Get reminded before payments, not after.",
    img: "/budget2.webp",
    imgAlt: "Illustration of payment reminder notification",
  },
  {
    text: "Keep subscriptions running before the drama.",
    img: "/budget3.webp",
    imgAlt: "Illustration of subscription management",
  },
  {
    text: "Finally understand where your money goes.",
    img: "/budget4.webp",
    imgAlt: "Illustration of spending breakdown",
  },
];

const INTERVAL = 3000; // ms between auto-advances

function BudgetCard({ text, img, imgAlt }: (typeof CARDS)[number]) {
  return (
    <div
      className="
        flex flex-col justify-between
        bg-[#E0DDFB] rounded-2xl
        p-6 lg:p-8
        h-[260px] lg:h-[280px]
        w-full
        overflow-hidden
      "
    >
      {/* Text — top */}
      <p className="text-base lg:text-lg font-semibold text-zinc-900 leading-snug max-w-[220px]">
        {text}
      </p>

      {/* Image placeholder — bottom */}
      <div className="mt-4 flex-1 flex items-end">
        <img
          src={img}
          alt={imgAlt}
          className="w-full h-[100px] object-contain object-bottom"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            // graceful fallback if image not yet added
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    </div>
  );
}

export function BudgetSection() {
  // On desktop we show 2 cards at a time, on mobile 1
  // We track the index of the first visible card
  const [index, setIndex] = useState(0);
  const [perPage, setPerPage] = useState(2);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isAnimating = useRef(false);

  // Detect breakpoint
  useEffect(() => {
    const update = () => setPerPage(window.innerWidth >= 1024 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalSteps = CARDS.length - perPage + 1; // how many positions exist

  const goTo = (nextIndex: number, dir: "right" | "left") => {
    if (isAnimating.current) return;
    const track = trackRef.current;
    if (!track) return;

    isAnimating.current = true;
    setDirection(dir);

    const xOut = dir === "right" ? "-60px" : "60px";
    const xIn = dir === "right" ? "60px" : "-60px";

    gsap.to(track, {
      opacity: 0,
      x: xOut,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setIndex(nextIndex);
        gsap.fromTo(
          track,
          { opacity: 0, x: xIn },
          {
            opacity: 1,
            x: 0,
            duration: 0.35,
            ease: "power2.out",
            onComplete: () => {
              isAnimating.current = false;
            },
          },
        );
      },
    });
  };

  // Auto-advance — bounces left↔right
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => {
        const atEnd = prev >= totalSteps - 1;
        const atStart = prev <= 0;

        let nextDir: "right" | "left";
        let next: number;

        if (direction === "right" && atEnd) {
          nextDir = "left";
          next = prev - 1;
        } else if (direction === "left" && atStart) {
          nextDir = "right";
          next = prev + 1;
        } else {
          nextDir = direction;
          next = direction === "right" ? prev + 1 : prev - 1;
        }

        goTo(next, nextDir);
        return prev; // actual state update happens inside goTo → setIndex
      });
    }, INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction, totalSteps]);

  // Dot click — go directly, figure out direction
  const handleDot = (dotIndex: number) => {
    if (dotIndex === index) return;
    const dir = dotIndex > index ? "right" : "left";
    goTo(dotIndex, dir);
    // Reset timer so it doesn't fire mid-animation
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const visibleCards = CARDS.slice(index, index + perPage);

  return (
    <section
      className="bg-[#28266B] py-16 lg:py-24 px-6 lg:px-20 flex items-center justify-center min-h-[500px]"
      aria-labelledby="budget-heading"
    >
      <div className="flex flex-col items-center gap-12 w-full max-w-3xl">
        {/* Heading */}
        <h2
          id="budget-heading"
          className="text-center text-2xl lg:text-4xl font-semibold leading-tight text-white max-w-[600px]"
        >
          Because You've Got Better Things To Do Than Budget.
        </h2>

        {/* Card track */}
        <div
          ref={trackRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full will-change-transform"
          aria-live="polite"
          aria-atomic="true"
          aria-label="Feature cards"
        >
          {visibleCards.map((card, i) => (
            <BudgetCard key={`${index}-${i}`} {...card} />
          ))}
        </div>

        {/* Dot navigation */}
        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Card navigation"
        >
          {Array.from({ length: totalSteps }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to card ${i + 1}`}
              onClick={() => handleDot(i)}
              className="cursor-pointer rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              style={{
                width: i === index ? "20px" : "8px",
                height: "8px",
                backgroundColor:
                  i === index ? "#ffffff" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
