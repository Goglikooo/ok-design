import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ea9573] shadow-md text-gray-100 fixed w-full  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div
            className="text-2xl font-bold "
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            OK Design
          </div>

          {/* Desktop Menu */}
          <div
            className="hidden md:flex space-x-6 font-extrabold"
            style={{ fontFamily: "Cormorant Garamond", fontSize: "20px" }}
          >
            <a href="#home" className="hover:text-[#2c2c2c]">
              Home
            </a>
            <a href="#about" className="hover:text-[#2c2c2c]">
              About
            </a>
            <a href="#projects" className="hover:text-[#2c2c2c]">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#2c2c2c]">
              Contact
            </a>
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
          className="md:hidden bg-[#ea9573] shadow-md text-gray-100 px-2 pt-2 pb-3 space-y-1"
          style={{ fontFamily: "Cormorant Garamond", fontSize: "20px" }}
        >
          <a href="#home" className="block px-3 py-2 rounded hover:bg-gray-700">
            Home
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
