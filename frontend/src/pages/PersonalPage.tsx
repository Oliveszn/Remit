import SecuritySection from "@/components/Business/SecuritySection";
import { TestimonialSection } from "@/components/Business/TestimonialSection";
import { FAQSection } from "@/components/common/FAQSection";
import { BudgetSection } from "@/components/Personal/BudgetSection";
import { DownloadSection } from "@/components/Personal/DownloadSection";
import { ExperienceSection } from "@/components/Personal/ExperienceSection";
import { HeroSection } from "@/components/Personal/HeroSection";
import { myTestimonials } from "@/config/business/Testimonial";
import { PERSONAL_FAQS } from "@/config/personal/faq";
import { Helmet } from "react-helmet-async";

export function PersonalPage() {
  return (
    <>
      <Helmet>
        <title>Personal Finance Management | Remit</title>
        <meta name="description" content="Manage your personal funds" />
      </Helmet>
      <main className="flex-1">
        <HeroSection />
        <ExperienceSection />
        <div className="h-16 lg:h-24 bg-white" aria-hidden="true" />
        <BudgetSection />
        <SecuritySection />
        <TestimonialSection items={myTestimonials} />
        <DownloadSection />
        <FAQSection items={PERSONAL_FAQS} />
      </main>
    </>
  );
}
