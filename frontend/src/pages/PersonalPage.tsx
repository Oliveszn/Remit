import SecuritySection from "@/components/Business/SecuritySection";
import { ExperienceSection } from "@/components/Personal/ExperienceSection";
import { HeroSection } from "@/components/Personal/HeroSection";

export function PersonalPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ExperienceSection />
      <SecuritySection />
    </main>
  );
}
