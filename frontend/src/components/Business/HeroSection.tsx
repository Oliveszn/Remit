import { useNavScroll } from "@/hooks/useNavScroll";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { LogoPill } from "./LogoPill";
import { LOGOS } from "@/config/business/HeroLogos";

export function HeroSection() {
  const heroRef = useNavScroll();
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    pillRefs.current.forEach((el, i) => {
      if (!el) return;
      const { amp, dur, delay } = LOGOS[i];

      // Fade + slide in on mount
      gsap.fromTo(
        el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4 + delay * 0.15,
          ease: "power2.out",
        },
      );

      // Continuous autonomous float — each pill independently phased
      gsap.to(el, {
        y: `-=${amp}`,
        duration: dur,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: delay * 0.3,
      });
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-main-foreground min-h-[calc(100vh-64px)] flex items-center justify-center px-6 relative overflow-hidden"
    >
      {LOGOS.map((logo, i) => (
        <LogoPill
          key={logo.name}
          name={logo.name}
          icon={logo.icon}
          style={{ ...logo.pos, opacity: 0 }}
          floatRef={(el) => {
            pillRefs.current[i] = el;
          }}
        />
      ))}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Heading */}
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
          Automate Payroll, Control Expenses, Grow Without Worry.
        </h1>

        {/* Subtext */}
        <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl">
          Whether you run a bakery from home or manage a finance department,
          Remit gives you the tools to pay teams, manage expenses, and stay in
          control of cash flow.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/signup"
            className="
              inline-flex items-center justify-center
              px-8 py-3.5 rounded-xl
              bg-white text-black font-semibold text-base
              hover:bg-white/90 transition-colors duration-150
              shadow-lg shadow-black/10
            "
          >
            Get started
          </a>
          <a
            href="#features"
            className="
              inline-flex items-center justify-center
              px-8 py-3.5 rounded-xl
              bg-white/10 text-white font-semibold text-base
              hover:bg-white/20 transition-colors duration-150
              border border-white/20
            "
          >
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
}
