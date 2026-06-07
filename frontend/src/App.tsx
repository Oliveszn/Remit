import { CookieBanner } from "./components/common/CookieBanner";
import { Footer } from "./components/common/Footer";
import { Navbar } from "./components/common/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CookieBanner />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
