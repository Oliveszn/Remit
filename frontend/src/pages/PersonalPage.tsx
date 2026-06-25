import SecuritySection from "@/components/Business/SecuritySection";
import { BudgetSection } from "@/components/Personal/BudgetSection";
import { DownloadSection } from "@/components/Personal/DownloadSection";
import { ExperienceSection } from "@/components/Personal/ExperienceSection";
import { HeroSection } from "@/components/Personal/HeroSection";

export function PersonalPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ExperienceSection />
      <div className="h-16 lg:h-24 bg-white" aria-hidden="true" />
      <BudgetSection />
      <SecuritySection />
      <DownloadSection />
    </main>
  );
}
