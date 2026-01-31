import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import { motion } from "framer-motion";
export default function ProjectsPage() {
  const { t, i18n } = useTranslation();
  return (
    <div className="min-h-screen w-full bg-[#548780] border-b-3 border-[#548780]">
      <h1
        className={`text-4xl font-bold text-center pt-20 text-amber-50 lg:transform lg:-translate-x-1/3 lg:translate-y-5  ${
          i18n.language == "ge" ? "font-georgian " : ""
        }`}
        style={{ fontSize: "40px" }}
      >
        {t("ourProjects")}
      </h1>

      <motion.section
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        initial="hidden"
        animate="show"
        className="p-4 md:p-8 gap-7 mb-5 grid lg:grid-cols-2 "
      >
        {projects.map((project, index) => (
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className={`relative  cursor-pointer  group ${
              index % 2 === 0 ? "lg:translate-y-10" : "lg:translate-y-0"
            }`}
            key={index}
          >
            <Link to={`/projects/${project.id}`}>
              <img
                src={project.images[0]}
                alt="project main image"
                className="transition duration-500 lg:grayscale-30 brightness-70 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-102"
              />

              <button
                className={`absolute top-[55%] left-[50%] transform w-full -translate-x-1/2 -translate-y-1/2  text-white cursor-pointer text-3xl md:text-4xl lg:text-5xl ${
                  i18n.language == "ge" ? "font-georgian " : ""
                }`}
              >
                {t(`${project.title}`)}
                <span className="block text-[1.6rem] mt-2">
                  {t(`${project.city}`)}
                </span>
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
