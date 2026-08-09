import { CardSection } from "@/components/Business/CardSection";
import { FAQSection } from "@/components/common/FAQSection";
import { HeroSection } from "@/components/Business/HeroSection";
import { BUSINESS_FAQS } from "@/config/business/faqs";
import SecuritySection from "@/components/Business/SecuritySection";
import { TestimonialSection } from "@/components/Business/TestimonialSection";
import { myTestimonials } from "@/config/business/Testimonial";
import PlatformSection from "@/components/Business/PlatformSection";
import { Helmet } from "react-helmet-async";

export function BusinessPage() {
  return (
    <>
      <Helmet>
        <title>Remit for business | Remit</title>
        <meta
          name="description"
          content="Payroll, Cards, Let remit manage your business"
        />
      </Helmet>
      <main className="flex-1">
        <HeroSection />
        <CardSection />
        <PlatformSection />
        <SecuritySection />
        <TestimonialSection items={myTestimonials} />
        <FAQSection items={BUSINESS_FAQS} />
      </main>
    </>
  );
}
