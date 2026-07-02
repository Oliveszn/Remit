import { HeroSection, WhyUtilitySection } from "@/components/Utility/Main";
import { Helmet } from "react-helmet-async";

// Page
export default function UtilityCardPage() {
  return (
    <>
      <Helmet>
        <title>Utility Cards | Remit</title>
        <meta
          name="description"
          content="Manage team expenses, subscriptions, and global payments with Remit's secure USD & NGN utility cards with built-in spending controls."
        />
      </Helmet>

      <main>
        <HeroSection />
        <WhyUtilitySection />
      </main>
    </>
  );
}
