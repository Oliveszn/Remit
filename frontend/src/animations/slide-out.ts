import gsap from "gsap";

export function slideOut(element: HTMLElement) {
  gsap.to(element, {
    opacity: 0,
    y: -40,
    duration: 0.6,
    ease: "power3.in",
  });
}
