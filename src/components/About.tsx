import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const features = [
  {
    icon: "📜",
    title: "A brief history of me",
    text: "Nací un viernes. 18 de agosto de 1995. Llegué de noche siendo la quinta de seis hermanos. Quinta hija de mi papá, segunda hija de mi mamá. Me crié en un suburbio de Buenos Aires, donde actualmente vivo. Desde chica me consideré apasionada por aprender cosas nuevas, siempre fui una niña curiosa. Me considero con muchos conocimientos de cultura general y siempre me gustó aprender. Estudié inglés de muy chica, cursé primaria en una escuela bilingüe y secundaria en una religiosa. Me gradué en Derecho y actualmente me encuentro trabajando para el Ministerio Público de Buenos Aires, en la jurisdicción de San Martín.",
  },
  {
    icon: "❤️",
    title: "Pasión",
    text: "A los 14 años abrí mi primer blog online a la vez que llevaba una carpeta conmigo a todos lados donde escribía de muchos tópicos. La carpeta, a la cual bauticé 'Libro de Memorias' formó una gran parte en mi adolescencia y su segundo tomo sigue siendo de la misma importancia en mi vida adulta. Actualmente abrí otro blogger, donde claramente escribo otras cosas que me conciernen, pero considero desde los 14 que es con la misma pasión. También disfruto mucho de escuchar música e ir a distintos recitales; de las veces donde me siento plena y viva. Amo los tatuajes y me gustan casi todos los estilos; hoy llevo un gran porcentaje de mi cuerpo cubierto en tinta contando diferentes historias. Y para terminar de hablar de pasiones, puedo mencionar los deportes ecuestres. Siempre soñé con tener un caballo y espero un día poder realizarlo.",
  },
  {
    icon: "🏋️‍♀️",
    title: "Crossfit",
    text: "Me adentré en esta disciplina a mediados de 2021 cuando la fiebre de la pandemia llegaba a su fin y me disponía a retomar mi actividad física, ya que estaba cansada de entrenar en casa y no encontrar realmente algo que me llene y me nutra como lo venía haciendo el pole dance antes del encierro. Al principio con mil dudas y más dificultades, empecé primero una vez por semana y progesivamente empecé a ir todos los días. Siento que el cambio fue increíble a muchos niveles y actualmente me encuentro haciendo cosas que creí que jamás sería capaz de hacer, como levantar 60 o 70kg.",
  },
  {
    icon: "💃",
    title: "Pole",
    text: "Empecé esta hermosa disciplina allá por 2016, siempre habiendo sentido una inmensa curiosidad por saber qué se sentiría. Pese a que al principio me costó mucho, ya que nunca tuve fuerza en los brazos (para lo cual es primordial) y consideré muchas veces cambiar y hacer otra cosa. Hoy me siento plena, activa y feliz cada vez que voy al estudio, siento que aunque haya pasado mucho tiempo, todavía me sigo superando con cosas que creí imposibles, haciendo figuras difíciles y superando mis propios límites de flexibilidad y fuerza. El handspring está entre mis figuras favoritas y anhelo llegar a un Marchenko algún día.",
  },
  {
    icon: "🤘",
    title: "Metal",
    text: "A los 9 años conocí Metallica y fue literalmente un antes y un después en mi vida entera. A los 10 pensé en tatuármelos, se lo planteé a mi mamá a los 16 y recién pude concretarlo a los 18. Fueron ellos los primeros y siempre van a ser de los más importantes, por lo que hoy los considero mi banda favorita. Iron Maiden fue otro gran pilar al forjar mi personalidad adolescente, siguiéndole Megadeth y Ozzy Osbourne en el mismo período. Años más tarde llegó mi amor por el power metal y otras variantes de metal pesado. Desde Root o The Black Dhalia Murder, hasta Ghost, siento que entro en un amplio abanico de música. Si bien no me encierro solo en el metal (ya que me gustan géneros como el britpop y el post punk pop) siento que es el que más me representa.",
  },
  {
    icon: "🎮",
    title: "Gaming",
    text: "Empecé a adentrarme en este mundo cuando todavía no iba a la escuela primaria, jugando al Commandos II o al Age of Empires. Años más tarde con la llegada de la Play 1 y después la 2, llegó lo que me hizo adentrarme realmente y hacerme pasar horas frente a la consola: Crash Bandicoot, GTA San Andreas y Guitar Hero III entre otros, pero el que más me apasionó es el que hoy en día llevo tatuado: El Shadow of the Colossus. Con la llegada de mi primera pc gamer llegó un universo nuevo que yo desconocía totalmente. Voy por temporadas, desde juegos chill y super relajantes como el Sims o el Stardew Valley, paso por juegos más adrenalínicos como Dark and Darker, Pubg o tácticos como el Valorant.",
  },
];

function About() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 max-w-6xl mx-auto text-gray-200"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-pink-500 mb-12 text-center"
      >
        Sobre mí
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer hover:scale-105 hover:bg-pink-600/20 transition-all duration-500 ease-in-out"
            onClick={() => setSelected(i)}
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-300 line-clamp-4">{f.text}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex justify-center items-start sm:items-center z-50 p-4 overflow-auto"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-xl p-8 max-w-3xl w-full text-gray-200 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-pink-500 text-2xl font-bold"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
              <div className="text-6xl mb-4">{features[selected].icon}</div>
              <h3 className="text-3xl font-bold mb-4">
                {features[selected].title}
              </h3>
              <p className="text-gray-300 whitespace-pre-line">
                {features[selected].text}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default About;
