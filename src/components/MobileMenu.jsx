import React from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-40 flex transition-opacity duration-300 ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="flex-1 bg-black/50 backdrop-blur-sm"
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Sliding Menu */}
      <div
        className={`w-[40%] max-w-sm bg-[#111] shadow-lg transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
        >
          &times;
        </button>

        <div className="flex flex-col items-start p-6 space-y-6 mt-12">
          <a href="#home" onClick={() => setMenuOpen(false)} className="text-white text-xl">
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-white text-xl">
            About
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-white text-xl">
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white text-xl">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
