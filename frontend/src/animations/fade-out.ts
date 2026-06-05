import gsap from "gsap";

export function fadeOut(element: HTMLElement) {
  gsap.to(element, {
    opacity: 0,
    duration: 0.5,
    ease: "power2.in",
  });
}
