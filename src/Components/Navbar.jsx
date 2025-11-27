import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Gb, Ge } from "react-flags-select";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(true);

  return (
    <nav className="bg-[#ea9573] shadow-md text-gray-100 fixed w-full relativ  z-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
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
            className="hidden md:flex space-x-6 font-extrabold"
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: `${language ? "20px" : "17px"}`,
            }}
          >
            <a href="#home" className="hover:text-[#2c2c2c]">
              {t("homeButton")}
            </a>
            <a href="#projects" className="hover:text-[#2c2c2c]">
              {t("projectsButton")}
            </a>
            <a href="#about" className="hover:text-[#2c2c2c]">
              {t("aboutButton")}
            </a>

            <a href="#contact" className="hover:text-[#2c2c2c]">
              {t("contactButton")}
            </a>
            <button
              className="cursor-pointer text-2xl "
              onClick={() => {
                setLanguage(!language);
                i18n.changeLanguage(`${language ? "ge" : "en"}`);
              }}
            >
              {language ? <Ge /> : <Gb />}
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
        >
          <a href="#home" className="block px-3 py-2 rounded hover:bg-gray-700">
            {t("homeButton")}
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            {t("projectsButton")}
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            {t("aboutButton")}
          </a>

          <a
            href="#contact"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            {t("contactButton")}
          </a>
          <button
            className="block px-3 py-2 rounded hover:bg-gray-700 "
            onClick={() => {
              setLanguage(!language);
              i18n.changeLanguage(`${language ? "ge" : "en"}`);
            }}
          >
            {language ? <Ge /> : <Gb />}
          </button>
        </div>
      )}
    </nav>
  );
}
