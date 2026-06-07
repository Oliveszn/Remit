import { Navigate, Route, Routes } from "react-router-dom";
import { CookieBanner } from "./components/common/CookieBanner";
import { Footer } from "./components/common/Footer";
import { Navbar } from "./components/common/Navbar";
// import { Home } from "./pages/Home";
import { PersonalPage } from "./pages/PersonalPage";
import { BusinessPage } from "./pages/BusinessPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CookieBanner />
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/" element={<Navigate to="/business" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
