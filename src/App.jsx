import { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import FirstCard from "./Components/FirstCard.jsx";
import "./App.css";

function App() {
  return (
    <div className="h-screen w-screen bg-amber-600 relative">
      <div className="absolute inset-0 flex z-0">
        <div className="w-1/3 bg-[#548780]"></div>
        <div className="w-2/3 bg-[#f5be9e]"></div>
      </div>
      <div className="relative z-20  text-white w-full h-full">
        <Navbar />
        <FirstCard />
      </div>
    </div>
  );
}

export default App;
