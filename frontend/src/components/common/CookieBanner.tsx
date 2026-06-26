import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button } from "../ui/button";

const COOKIE_KEY = "cookie_consent";

type ConsentValue = "accepted" | "rejected";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Show only if no decision has been stored yet
  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) setVisible(true);
  }, []);

  // Slide in when banner becomes visible
  useEffect(() => {
    if (visible && bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      );
    }
  }, [visible]);

  const dismiss = (decision: ConsentValue) => {
    if (!bannerRef.current) return;

    // Slide out, then unmount
    gsap.to(bannerRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.6,
      ease: "power3.in",
      onComplete: () => {
        localStorage.setItem(COOKIE_KEY, decision);
        setVisible(false);
      },
    });
  };

  if (!visible) return null;

  return (
    <div
      ref={bannerRef}
      className="
           fixed bottom-0 left-0 right-0 z-50
          rounded-2xl border border-zinc-200
          bg-white/90 backdrop-blur-md
          shadow-[0_8px_40px_rgba(0,0,0,0.12)]
          px-12 py-6
          flex flex-col gap-4       
        "
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="flex items-center gap-3">
        <h2 className="text-lg leading-snug font-bold text-zinc-800 tracking-tight">
          Can we use optional cookies?
        </h2>
      </div>

      <p className="text-base leading-relaxed text-[#4a5568] hidden lg:flex">
        No, we are not referring to the crunchy, chocolate kind. Cookies are
        tiny text files that help us make our website work better, improve your
        experience, and show you ads that matter. We only turn them on if you
        agree. See our{" "}
        <a
          href="/#"
          className="underline underline-offset-2 text-zinc-700 hover:text-black transition-colors"
        >
          Privacy Policy
        </a>{" "}
        for details.
      </p>
      <p className="flex lg:hidden text-base leading-relaxed text-[#4a5568]">
        We only turn them on if you agree. See our{" "}
        <a
          href="/#"
          className="underline underline-offset-2 text-zinc-700 hover:text-black transition-colors"
        >
          Privacy Policy
        </a>{" "}
        for details.
      </p>

      <div className="flex items-center justify-start gap-3">
        <Button
          onClick={() => dismiss("rejected")}
          className="
            px-4 py-5 rounded-xl text-base font-medium
            text-main hover:text-white
            border border-main border-solid
            bg-transparent hover:bg-main
            transition-colors duration-150
          "
        >
          Decline
        </Button>
        <Button
          onClick={() => dismiss("accepted")}
          className="
            px-4 py-5 rounded-xl text-base font-medium
            bg-main 
            text-white 
            hover:bg-main
            transition-colors duration-150
          "
        >
          Accept all
        </Button>
      </div>
    </div>
  );
}
