import gsap from "gsap";

export function fadeIn(element: HTMLElement) {
  gsap.from(element, {
    opacity: 0,
    duration: 0.8,
    y: 20,
  });
}
