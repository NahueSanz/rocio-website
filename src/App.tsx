import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Instagram from "./components/Instagram";
import BandasFavoritas from "./components/BandasFavoritas";

function App() {
  return (
    <div className="font-sans text-white min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-900/20 to-blue-900/30 animate-gradient" />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Instagram />
      <BandasFavoritas />
      <Footer />
    </div>
  );
}

export default App;
