import { useRef } from "react";
import gsap from "gsap";

export function useMobileMenuAnimation(setMenuOpen: (v: boolean) => void) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const openMenu = () => {
    setMenuOpen(true);

    requestAnimationFrame(() => {
      if (!drawerRef.current || !overlayRef.current || !itemsRef.current)
        return;

      // Overlay fade in
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" },
      );

      // Drawer slide in
      gsap.fromTo(
        drawerRef.current,
        { x: "-100%" },
        { x: "0%", duration: 0.45, ease: "power3.out" },
      );

      // Stagger items
      const items =
        itemsRef.current.querySelectorAll<HTMLElement>(".menu-item");

      gsap.fromTo(
        items,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.35,
          stagger: 0.07,
          ease: "power2.out",
          delay: 0.2,
        },
      );
    });
  };

  const closeMenu = () => {
    if (!drawerRef.current || !overlayRef.current) return;

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    });

    gsap.to(drawerRef.current, {
      x: "-100%",
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => setMenuOpen(false),
    });
  };

  return {
    drawerRef,
    overlayRef,
    itemsRef,
    openMenu,
    closeMenu,
  };
}
