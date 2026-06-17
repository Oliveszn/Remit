import { CardSection } from "@/components/Business/CardSection";
import { FAQSection } from "@/components/common/FAQSection";
import { HeroSection } from "@/components/Business/HeroSection";
import { BUSINESS_FAQS } from "@/config/business/faqs";
import SecuritySection from "@/components/Business/SecuritySection";
import { TestimonialSection } from "@/components/Business/TestimonialSection";
import { myTestimonials } from "@/config/business/Testimonial";
import PlatformSection from "@/components/Business/PlatformSection";

export function BusinessPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <CardSection />
      <PlatformSection />
      <SecuritySection />
      <TestimonialSection items={myTestimonials} />
      <FAQSection items={BUSINESS_FAQS} />
    </main>
  );
}
