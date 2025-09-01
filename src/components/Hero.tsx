import { motion } from "framer-motion";
import Main from "../assets/Main.png";

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen max-w-6xl mx-auto px-6 pt-20 gap-10 text-gray-200"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        <h2 className="text-5xl font-extrabold text-pink-500 mb-4">
          Rocío: Fuerza & Pasión
        </h2>
        <p className="text-lg text-gray-400 mb-6">
          Hola soy Rocio, tengo 30 años, soy abogada ⚖️ y hablo tres idiomas. Me
          apasiona el heavy metal 🤘🏻, la escritura, pole dance y el crossfit 💪🏻.
          Me gustan los perros 🐶, el chocolate con leche 🍫y andar en bici🚲.
          No sabría si considerarme gamer pero me gusta pasar tiempo en la
          pc🎮🎧🖱. Llevo varias modificaciones corporales temporarias y
          permanentes💉. Me gusta el invierno y viajar ✈️❄️
        </p>
        <a
          className="bg-pink-500 text-white px-4 py-2 rounded-full font-medium cursor-pointer hover:bg-gray-800 hover:text-gray-300 transition-colors"
          href="https://argentinelioness.blogspot.com/2025/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mí blog
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        className="flex-1 flex justify-center items-center"
      >
        <img
          src={Main}
          alt="Rocío"
          className="rounded-full shadow-[0_0_20px_#ec4899] object-cover w-[250px] h-[250px] md:w-[350px] md:h-[350px]"
        />
      </motion.div>
    </section>
  );
}
export default Hero;
