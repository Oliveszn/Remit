import { CardSection } from "@/components/Business/CardSection";
import { FAQSection } from "@/components/common/FAQSection";
import { HeroSection } from "@/components/Business/HeroSection";
import { BUSINESS_FAQS } from "@/config/business/faqs";
import SecuritySection from "@/components/Business/SecuritySection";

export function BusinessPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <CardSection />
      <SecuritySection />
      <FAQSection items={BUSINESS_FAQS} />
    </main>
  );
}
