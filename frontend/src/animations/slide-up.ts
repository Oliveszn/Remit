import gsap from "gsap";

export function slideUp(element: HTMLElement) {
  gsap.from(element, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
  });
}
