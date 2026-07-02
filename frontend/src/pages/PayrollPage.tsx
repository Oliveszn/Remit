import { Helmet } from "react-helmet-async";
import {
  HeroSection,
  PayrollFAQ,
  PricingSection,
  TrustSection,
} from "@/components/Payroll/Main";

export default function PayrollPage() {
  return (
    <>
      <Helmet>
        <title>Payroll | Remit</title>
        <meta
          name="description"
          content="Run payroll, file PAYE, and remit pension to every PFA automatically. Fund once — Remit handles the rest."
        />
      </Helmet>
      <main>
        <HeroSection />
        <TrustSection />
        <PricingSection />
        <PayrollFAQ />
      </main>
    </>
  );
}
