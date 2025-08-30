import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md border-b border-pink-600 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-pink-500">Rocío 🌸</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-gray-200 font-medium">
          <li><a href="#home" className="hover:text-pink-400">Inicio</a></li>
          <li><a href="#about" className="hover:text-pink-400">Sobre mí</a></li>
          <li><a href="#gallery" className="hover:text-pink-400">Galería</a></li>
          <li><a href="#instagram" className="hover:text-pink-400">Instagram</a></li>
          <li><a href="#bandas" className="hover:text-pink-400">Bandas Favoritas</a></li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-pink-500 text-2xl"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-pink-600">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-200 font-medium">
            <li><a href="#home" onClick={toggleMenu} className="hover:text-pink-400">Inicio</a></li>
            <li><a href="#about" onClick={toggleMenu} className="hover:text-pink-400">Sobre mí</a></li>
            <li><a href="#gallery" onClick={toggleMenu} className="hover:text-pink-400">Galería</a></li>
            <li><a href="#instagram" onClick={toggleMenu} className="hover:text-pink-400">Instagram</a></li>
            <li><a href="#bandas" onClick={toggleMenu} className="hover:text-pink-400">Bandas Favoritas</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
