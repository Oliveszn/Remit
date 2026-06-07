import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Hook to watch the hero section and changes the navbr backgorund and text color
 * once the user has scrolled past a certain threshold
 */
export function useNavScroll() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const navbar = document.querySelector<HTMLElement>("[data-navbar]");
    if (!hero || !navbar) return;

    // Grab every element inside the nav that needs a colour flip
    const lightItems = navbar.querySelectorAll<HTMLElement>("[data-nav-light]");
    const darkItems = navbar.querySelectorAll<HTMLElement>("[data-nav-dark]");

    let scrolled = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // isIntersecting = hero 80%+ still visible → we're near the top
        const nearTop = entry.isIntersecting;

        if (nearTop && scrolled) {
          //Back to top → restore purple bg, white text
          scrolled = false;
          gsap.to(navbar, {
            backgroundColor: "var(--color-main)",
            duration: 0.35,
            ease: "power2.out",
          });
          gsap.to(Array.from(lightItems), {
            color: "#ffffff",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(Array.from(darkItems), {
            color: "var(--color-main)",
            backgroundColor: "#ffffff",
            duration: 0.3,
            ease: "power2.out",
          });
        } else if (!nearTop && !scrolled) {
          //  Scrolled past 20% → white bg, dark text
          scrolled = true;
          gsap.to(navbar, {
            backgroundColor: "#ffffff",
            duration: 0.35,
            ease: "power2.out",
          });
          gsap.to(Array.from(lightItems), {
            color: "#18181b", // zinc-900
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(Array.from(darkItems), {
            color: "#ffffff",
            backgroundColor: "var(--color-main)",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      },
      {
        // Fire when 80% of the hero is still visible (i.e. user is in top 20%)
        threshold: 0.8,
      },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return heroRef;
}
