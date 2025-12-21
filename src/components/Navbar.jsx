import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Gb, Ge } from "react-flags-select";
import { SECTIONS } from "../../sections.config.js";
import { Link } from "react-router-dom";
export default function Navbar({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(true);
  const languageToggle = () => {
    setLanguage(!language);
    i18n.changeLanguage(`${language ? "en" : "ge"}`);
  };
  return (
    <nav
      id={id}
      className={`bg-[#ea9573] shadow-md text-gray-100 fixed w-full relativ z-25 `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div
            className="text-3xl font-bold "
            style={{
              fontOpticalSizing: "auto",
              letterSpacing: "0.1rem",
            }}
          >
            OK Design
          </div>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex space-x-4 font-semibold text-lg ${
              i18n.language == "ge" ? "font-georgian " : ""
            }`}
          >
            <Link to="/" className="hover:text-[#2c2c2c]">
              {t("homeButton")}
            </Link>

            <Link to="/projects" className="hover:text-[#2c2c2c]">
              {t("projectsButton")}
            </Link>
            <Link to="/services" className="hover:text-[#2c2c2c]">
              {t("servicesButton")}
            </Link>

            <Link to="/processes" className="hover:text-[#2c2c2c]">
              {t("processesButton")}
            </Link>
            <Link to="/contact" className="hover:text-[#2c2c2c]">
              {t("contactButton")}
            </Link>
            <button
              className="cursor-pointer text-2xl "
              onClick={languageToggle}
            >
              {language ? <Gb /> : <Ge />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden  top-0 left-0 w-full bg-[#ea9573] shadow-md text-gray-100 px-2 pt-2 pb-3 space-y-1 "
          style={{ fontFamily: "Cormorant Garamond", fontSize: "20px" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-700">
            {t("homeButton")}
          </Link>
          <Link
            to="/projects"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            {t("projectsButton")}
          </Link>
          <Link
            to="/services"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            {t("servicesButton")}
          </Link>
          <Link
            to="/processes"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            {t("processesButton")}
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            {t("contactButton")}
          </Link>
          <button
            className="block px-3 py-2 rounded hover:bg-gray-700 w-full cursor-pointer"
            onClick={() => {
              languageToggle();
            }}
          >
            {language ? <Gb /> : <Ge />}
          </button>
        </div>
      )}
    </nav>
  );
}
