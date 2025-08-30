import { motion } from "framer-motion";
import British from "../assets/British.jpg";
import Iron from "../assets/ironm.jpg";
import Metallica from "../assets/metall.jpg";
import Ozzy from "../assets/ozzy.png";

// 🎸 Ejemplo de datos
const bandas = [
  {
    nombre: "British Lion",
    desc: "British Lion es una banda de hard rock inglesa formada por Steve Harris. Canciones: This Is My God, Lost Worlds, Karma Killer.",
    img: British,
    link: "https://www.youtube.com/watch?v=pGjI6PORqCA&list=RDpGjI6PORqCA&start_radio=1",
  },
  {
    nombre: "Iron Maiden",
    desc: "Iron Maiden es una banda británica de heavy metal fundada en Londres en 1975 por el bajista Steve Harris.",
    img: Iron,
    link: "https://youtu.be/FhBnW7bZHEE?list=RDFhBnW7bZHEE",
  },
  {
    nombre: "Metallica",
    desc: "Metallica es una banda estadounidense de heavy metal fundada en 1981 en Los Ángeles, aunque ha estado radicada en San Francisco durante la mayor parte de su carrera.​",
    img: Metallica,
    link: "https://youtu.be/WM8bTdBs-cw?list=RDWM8bTdBs-cw",
  },
  {
    nombre: "Ozzy",
    desc: "John Michael Osbourne (3 de diciembre de 1948 - 22 de julio de 2025) fue un cantante, compositor y personalidad mediática inglés. Cofundó la banda pionera de heavy metal Black Sabbath en 1968 y saltó a la fama en la década de 1970 como su vocalista principal.",
    img: Ozzy,
    link: "https://youtu.be/FVovq9TGBw0?list=RDFVovq9TGBw0",
  },
];

function BandasFavoritas() {
  return (
    <section id="bandas" className="relative  py-20 px-6">
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center text-white mb-12 tracking-wide"
      >
        🎸 Bandas Favoritas
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {bandas.map((banda, i) => (
          <motion.a
            key={i}
            href={banda.link}
            target="_blank" // Abre en nueva pestaña
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ rotateY: 10, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/80 rounded-2xl shadow-lg overflow-hidden group cursor-pointer relative"
          >
            {/* Imagen */}
            <div className="h-48 w-full flex items-center justify-center bg-black">
              <img
                src={banda.img}
                alt={banda.nombre}
                className="max-h-36 max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Contenido */}
            <div className="p-4">
              <h3 className="text-xl font-bold text-pink-400 mb-2">
                {banda.nombre}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {banda.desc}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default BandasFavoritas;
