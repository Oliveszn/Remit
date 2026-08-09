import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { CookieBanner } from "./components/common/CookieBanner";
import { Footer } from "./components/common/Footer";
import { Navbar } from "./components/common/Navbar";
import { PersonalPage } from "./pages/PersonalPage";
import { BusinessPage } from "./pages/BusinessPage";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import CampusAmbassadorPage from "./pages/CampusAmbasaddorPage";
import ReferralPage from "./pages/ReferralPage";
import UtilityCardPage from "./pages/UtilityCard";
import BudgetExpensePage from "./pages/BudgetExpensePage";
import PayrollPage from "./pages/PayrollPage";
import { ScrollToTop } from "./components/common/SCrolltoTop";

function App() {
  const { pathname } = useLocation();
  const isAuthRoute = pathname.startsWith("/auth");

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <CookieBanner />
      {!isAuthRoute && <Navbar />}
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>

        <Route path="/campus-ambassadors" element={<CampusAmbassadorPage />} />
        <Route path="/referrals" element={<ReferralPage />} />
        <Route path="/utility-cards" element={<UtilityCardPage />} />
        <Route path="/budget-expenses" element={<BudgetExpensePage />} />
        <Route path="/payroll" element={<PayrollPage />} />

        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/" element={<Navigate to="/business" replace />} />
      </Routes>

      {!isAuthRoute && <Footer />}
    </div>
  );
}

export default App;
