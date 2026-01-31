import { useTranslation } from "react-i18next";
import { Reveal } from "../utils/reveal";
import { Link } from "react-router-dom";
import ProjectCardsGenerator from "./ProjectCardsGenerator.jsx";
import { projects } from "../data/projects.js";
export default function ProjectsPreview({ id }) {
  const { t, i18n } = useTranslation();
  const threeProjectsArray = projects.slice(0, 3);
  return (
    <section
      className="py-5 bg-[#548780] border-t-[#ea9573] border-t-4 scroll-mt-15.5"
      id={id}
    >
      <div
        className="mx-auto px-4 max-w-7xl  [&_.swiper-pagination-bullet-active]:bg-[#548780]!"
        style={{
          fontOpticalSizing: "auto",
          letterSpacing: "0.1rem",
        }}
      >
        <Reveal>
          <h2
            style={{ fontSize: "40px" }}
            className={`text-4xl pb-5 text-center font-bold text-white ${
              i18n.language == "ge" ? "font-georgian " : ""
            }`}
          >
            {t("ourProjects")}
          </h2>
        </Reveal>
        <div
          className=" grid md:grid-cols-3  gap-5 mb-5 [&_.swiper-button-next]:text-[#548780]!
    [&_.swiper-button-prev]:text-[#548780]! "
        >
          <ProjectCardsGenerator projectsArray={threeProjectsArray} />
        </div>

        <Link to="/projects">
          <button className="bg-[#ea9573] hover:bg-[#f4804e] text-md lg:text-lg rounded-2xl w-full pt-2 pb-2 pl-10 pr-10 text-white font-semibold cursor-pointer">
            {t("viewAllProjects")}
          </button>
        </Link>
      </div>
    </section>
  );
}
