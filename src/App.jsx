import Navbar from "./Components/Navbar.jsx";
import LandingPage from "./Components/LandingPage.jsx";
import "./App.css";
import Footer from "./Components/Footer.jsx";
import ServicesPreview from "./Components/ServicesPreview.jsx";
import ProjectsPreview from "./Components/ProjectsPreview.jsx";
import ProcessPreview from "./Components/ProcessPreview.jsx";
import AboutMePreview from "./Components/AboutMePreview.jsx";
function App() {
  return (
    <div className="h-full w-full bg-amber-600 relative">
      <div className="absolute inset-0 flex z-0">
        <div className="w-1/3 bg-[#548780]"></div>
        <div className="w-2/3 bg-[#f5be9e]"></div>
      </div>
      <div className="relative z-20   w-full h-full">
        <Navbar />
        <LandingPage />
        <ProjectsPreview />
        <ServicesPreview />
        <ProcessPreview />
        <AboutMePreview />
        <Footer />
      </div>
    </div>
  );
}

export default App;
