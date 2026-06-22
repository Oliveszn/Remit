import { useEffect, useRef } from "react";
import gsap from "gsap";

type NavMode = "dark-hero" | "light-page";

/**
 * dark-hero (default — business page):
 *   Nav starts purple (bg-main, white text). Transitions to white bg +
 *   dark text once user scrolls past 20% of the hero.
 *
 * light-page (personal page):
 *   Nav is immediately white with dark text + bg-main buttons.
 *   No scroll transition — just sets the state once on mount.
 */
export function useNavScroll(mode: NavMode = "dark-hero") {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navbar = document.querySelector<HTMLElement>("[data-navbar]");
    if (!navbar) return;

    const lightItems = navbar.querySelectorAll<HTMLElement>("[data-nav-light]");
    const darkItems = navbar.querySelectorAll<HTMLElement>("[data-nav-dark]");

    //  Light page: set white nav immediately, no scroll listener
    if (mode === "light-page") {
      gsap.set(navbar, { backgroundColor: "#ffffff" });
      gsap.set(Array.from(lightItems), { color: "#18181b" });
      gsap.set(Array.from(darkItems), {
        color: "#ffffff",
        backgroundColor: "var(--color-main)",
      });
      return; // no observer needed
    }

    // Dark hero: intersection observer scroll transition
    const hero = heroRef.current;
    if (!hero) return;

    let scrolled = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const nearTop = entry.isIntersecting;

        if (nearTop && scrolled) {
          scrolled = false;
          gsap.to(navbar, {
            backgroundColor: "var(--color-main-foreground)",
            duration: 0.35,
            ease: "power2.out",
          });
          gsap.to(Array.from(lightItems), {
            color: "#ffffff",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(Array.from(darkItems), {
            color: "var(--color-main-foreground)",
            backgroundColor: "#ffffff",
            duration: 0.3,
            ease: "power2.out",
          });
        } else if (!nearTop && !scrolled) {
          scrolled = true;
          gsap.to(navbar, {
            backgroundColor: "#ffffff",
            duration: 0.35,
            ease: "power2.out",
          });
          gsap.to(Array.from(lightItems), {
            color: "#18181b",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(Array.from(darkItems), {
            color: "#ffffff",
            backgroundColor: "var(--color-main-foreground)",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      },
      { threshold: 0.8 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [mode]);

  return heroRef;
}
