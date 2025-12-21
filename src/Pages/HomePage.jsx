import LandingPage from "../Components/LandingPage";
import ServicesPreview from "../Components/ServicesPreview";
import ProjectsPreview from "../Components/ProjectsPreview";
import ProcessPreview from "../Components/ProcessPreview";
import AboutMePreview from "../Components/AboutMePreview";
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
