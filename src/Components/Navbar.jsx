import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Gb, Ge } from "react-flags-select";
import { SECTIONS } from "../../sections.config.js";
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
              fontFamily: "Cinzel",
              fontOpticalSizing: "auto",
              letterSpacing: "0.1rem",
            }}
          >
            OK Design
          </div>

          {/* Desktop Menu */}
          <div
            className="hidden md:flex space-x-6 font-semibold"
            style={{
              fontSize: `${language ? "20px" : "17px"}`,
            }}
          >
            <a href={`#${SECTIONS.HOME}`} className="hover:text-[#2c2c2c]">
              {t("homeButton")}
            </a>
            <a href={`#${SECTIONS.PROJECTS}`} className="hover:text-[#2c2c2c]">
              {t("projectsButton")}
            </a>
            <a href={`#${SECTIONS.ABOUT_ME}`} className="hover:text-[#2c2c2c]">
              {t("aboutButton")}
            </a>

            <a href={`#${SECTIONS.CONTACT}`} className="hover:text-[#2c2c2c]">
              {t("contactButton")}
            </a>
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
          <a
            href={`#${SECTIONS.HOME}`}
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            {t("homeButton")}
          </a>
          <a
            href={`#${SECTIONS.PROJECTS}`}
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            {t("projectsButton")}
          </a>
          <a
            href={`#${SECTIONS.ABOUT_ME}`}
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            {t("aboutButton")}
          </a>

          <a
            href={`#${SECTIONS.CONTACT}`}
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            {t("contactButton")}
          </a>
          <button
            className="block px-3 py-2 rounded hover:bg-gray-700 "
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
