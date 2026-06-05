import { CookieBanner } from "./components/common/CookieBanner";
import { Footer } from "./components/common/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CookieBanner />
      {/* <h1 className="text-5xl">hell</h1> */}
      <Footer />
    </div>
  );
}

export default App;
