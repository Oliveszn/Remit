import {
  FeaturesSection,
  HeroSection,
  StruggleSection,
} from "@/components/BudgetExpense/Main";
import { Helmet } from "react-helmet-async";

export default function BudgetExpensePage() {
  return (
    <>
      <Helmet>
        <title>Budget & Expenses | Remit</title>
        <meta
          name="description"
          content="Manage recurring expenses, one-time payments, and team requests all in one dashboard with Remit Expense Accounts."
        />
      </Helmet>
      <main>
        <HeroSection />
        <StruggleSection />
        <FeaturesSection />
      </main>
    </>
  );
}
