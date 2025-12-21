import LandingPage from "../components/LandingPage.jsx";
import ServicesPreview from "../components/ServicesPreview.jsx";
import ProjectsPreview from "../components/ProjectsPreview.jsx";
import ProcessPreview from "../components/ProcessPreview.jsx";
import AboutMePreview from "../components/AboutMePreview.jsx";
import { SECTIONS } from "../../sections.config.js";

export default function HomePage() {
  return (
    <div>
      <LandingPage id={SECTIONS.HOME} />
      <ProjectsPreview id={SECTIONS.PROJECTS} />
      <ServicesPreview id={SECTIONS.SERVICES} />
      <ProcessPreview id={SECTIONS.PROCESS} />
      <AboutMePreview id={SECTIONS.ABOUT_ME} />
    </div>
  );
}
