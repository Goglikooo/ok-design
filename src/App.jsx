import Navbar from "./components/Navbar.jsx";
import "./App.css";

import { useTranslation } from "react-i18next";

import HomePage from "./pages/HomePage.jsx";

function App() {
  const { i18n } = useTranslation();
  return (
    <div className="h-full w-full bg-amber-600 relative">
      <div className="absolute inset-0 flex z-0">
        <div className="w-1/3 bg-[#548780]"></div>
        <div className="w-2/3 bg-[#f5be9e]"></div>
      </div>
      <div
        className={`relative z-20   w-full h-full ${
          i18n.language == "ge" ? "font-georgian" : ""
        }`}
      >
        <Navbar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
