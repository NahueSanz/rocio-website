import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Pol1 from "../assets/Pol1.jpeg";
import Cross2 from "../assets/Cross2.jpg";
import workout from "../assets/workout.jpeg";
import workout2 from "../assets/workout2.jpeg";
import workout4 from "../assets/workout4.jpeg";
import workout5 from "../assets/workout5.jpeg";
import workout6 from "../assets/workout6.jpeg";
import workout7 from "../assets/workout7.jpeg";
import workout8 from "../assets/workout8.jpeg";

const photos = [
  { src: workout, category: "Crossfit", desc: "Vertical vencida" },
  { src: Cross2, category: "Crossfit", desc: "Al revés" },
  { src: Pol1, category: "Pole Dance", desc: "Handspring pateado" },
  { src: workout2, category: "Pole Dance", desc: "Arm day" },
  { src: workout4, category: "Pole Dance", desc: "Amplitud" },
  { src: workout5, category: "Crossfit", desc: "Puentecito" },
  { src: workout6, category: "Crossfit", desc: "Power snatch" },
  { src: workout7, category: "Pole Dance", desc: "Pegasus" },
  { src: workout8, category: "Pole Dance", desc: "Vertical split" },
];

const categories = ["All", "Crossfit", "Pole Dance"];

function Gallery() {
  const [filter, setFilter] = useState("All");

  const filteredPhotos =
    filter === "All"
      ? photos
      : photos.filter((photo) => photo.category === filter);

  return (
    <section
      id="gallery"
      className="px-6 py-16 max-w-6xl mx-auto text-gray-200"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-4xl font-bold text-pink-500 mb-12"
      >
        Galería
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                filter === cat
                  ? "bg-pink-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredPhotos.map((photo, i) => (
              <motion.div
                key={photo.src}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <img
                    src={photo.src}
                    alt={photo.desc}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center text-white p-4">
                  <h3 className="font-bold text-lg">{photo.category}</h3>
                  <p className="text-sm mt-1">{photo.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

export default Gallery;
