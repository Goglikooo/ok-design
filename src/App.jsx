import { useState } from "react";
import ResponsiveAppBar from "../src/navbar/Navbar.jsx";
import "./App.css";
import mainImage from "../src/assets/Main Picture.jpg";

function App() {
  return (
    <div className="h-screen bg-amber-600 relative ">
      <div className="absolute inset-0 flex z-0">
        <div className="w-1/3 bg-[#548780]"></div>
        <div className="w-2/3 bg-[#f5be9e]"></div>
      </div>
      <div className="relative z-20  text-white w-full h-full">
        <ResponsiveAppBar />
        <div className="pt-15 h-full flex justify-center md:items-center ">
          {/* this is the main window now! */}
          <div className="flex w-xl h-70 md:w-7xl md:h-150 bg-[#548780]">
            {/* <div className="bg-[#f5be9e] w-1/3">
              <h1>OK Design</h1>
              <h2>Lets gooooooo</h2>
            </div> */}
            <img
              src={mainImage}
              alt="main Image of interior"
              className="w-full md:w-full lg:w-2/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
