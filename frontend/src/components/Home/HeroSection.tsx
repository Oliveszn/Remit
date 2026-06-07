import { useNavScroll } from "@/hooks/useNavScroll";

export function HeroSection() {
  const heroRef = useNavScroll();
  return (
    <section ref={heroRef} className="bg-main min-h-[calc(100vh-80px)]">
      {/* Hero content goes here later */}
    </section>
  );
}
