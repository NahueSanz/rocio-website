import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import igPerfil from "../assets/IgPerfil.png";
import igPol1 from "../assets/IgPol1.png";
import igPol2 from "../assets/IgPol2.png";
import igDescanso from "../assets/IgDescanso.png";

const posts = [
  {
    img: igPerfil,
    desc: "Fancy",
    link: "https://www.instagram.com/argentinelioness/p/DFtqyVXsyXh/",
  },
  {
    img: igPol1,
    desc: "Pole day",
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTAxMTQ2OTMzODUxOTI1?story_media_id=3200007039902367324_1098780577&igsh=c2FnbWQ0aHpreWRj",
  },
  {
    img: igPol2,
    desc: "Corvas",
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTA3OTcwODA1MjU1NDM5?story_media_id=2715564860708833242_1098780577&igsh=YjJtMnFlYmgxZmFu",
  },
  {
    img: igDescanso,
    desc: "Día de descanso 😎",
    link: "https://www.instagram.com/p/C46oX6mu6Yp/?igsh=MXNpandsaWxheGp5Mw%3D%3D&img_index=1",
  },
];

function Instagram() {
  return (
    <section
      id="instagram"
      className="flex flex-col justify-center items-center px-6 py-16 max-w-6xl mx-auto text-gray-200 relative"
    >
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative flex justify-center mb-8"
      >
        <h2 className="text-4xl font-bold text-pink-500">Instagram</h2>
        <a
          href="https://www.instagram.com/argentinelioness/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -top-1 right-[-10%]"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <FaInstagram size={20} className="text-pink-500" />
          </motion.div>
        </a>
      </motion.div>

      {/* Carrusel */}
      <div className="w-full overflow-x-auto">
        <div className="flex space-x-6">
          {posts.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-64 h-64 rounded-xl overflow-hidden relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={p.img}
                alt={p.desc}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center text-white p-4">
                <p className="font-bold text-lg">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Instagram;
