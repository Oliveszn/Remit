import { useRef, useState } from "react";
import gsap from "gsap";
import type { TestimonialData } from "@/types/Testimonial";
import { ArrowButton } from "../common/ArrowuButton";
import { TestimonialCard } from "../common/TestimonialCard";
import { myTestimonials } from "@/config/business/Testimonial";

type TestimonialSectionProps = {
  items?: TestimonialData[];
  className?: string;
};

export function TestimonialSection({
  items = myTestimonials,
  className = "",
}: TestimonialSectionProps) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const canGoLeft = index > 0;
  const canGoRight = index < items.length - 1;

  const slide = (dir: "left" | "right") => {
    if (isAnimating.current) return;
    if (dir === "right" && !canGoRight) return;
    if (dir === "left" && !canGoLeft) return;

    const track = trackRef.current;
    if (!track) return;

    isAnimating.current = true;
    const nextIndex = dir === "right" ? index + 1 : index - 1;

    // Card width + gap in px — read from DOM for accuracy
    const firstCard = track.children[0] as HTMLElement;
    const cardW = firstCard ? firstCard.offsetWidth + 24 : 400; // 24 = gap-6

    const xTarget = dir === "right" ? -cardW : cardW;

    gsap.to(track, {
      x: `+=${xTarget}`,
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: () => {
        isAnimating.current = false;
        setIndex(nextIndex);
      },
    });
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className={`py-20 px-6 min-h-[calc(100vh-64px)] bg-[#F6F6FC] overflow-hidden ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — heading + controls */}
          <div className="flex flex-col gap-8 items-start text-left max-w-3xl">
            <div className="flex flex-col gap-4 ">
              <h2
                id="testimonials-heading"
                className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-[#1B1B24]"
              >
                Trusted by Businesses of Every Size
              </h2>
              <p className="text-base lg:text-lg font-normal text-[#4A485F] leading-relaxed">
                From kitchen startups to established corporations, thousands of
                businesses rely on Remit to stay financially disciplined and
                future-ready.
              </p>
            </div>

            {/* Arrow controls */}
            <div
              className="flex items-center gap-3"
              role="group"
              aria-label="Testimonial navigation"
            >
              <ArrowButton
                direction="left"
                onClick={() => slide("left")}
                disabled={!canGoLeft}
                label="Previous testimonial"
              />
              <ArrowButton
                direction="right"
                onClick={() => slide("right")}
                disabled={!canGoRight}
                label="Next testimonial"
              />
            </div>
          </div>

          {/* Right — carousel */}
          <div
            className="overflow-hidden w-full"
            aria-live="polite"
            aria-atomic="true"
          >
            <div
              ref={trackRef}
              className="flex gap-6"
              style={{ willChange: "transform" }}
            >
              {items.map((item, i) => (
                <TestimonialCard key={i} {...item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
