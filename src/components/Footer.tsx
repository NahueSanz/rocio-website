function Footer() {
  return (
    <footer
      id="contact"
      className=" text-gray-400 py-6 mt-20 border-t border-pink-600"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Rocío - Todos los derechos reservados
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/argentinelioness/"
            className="hover:text-pink-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a href="#" className="hover:text-pink-400">
            Twitch
          </a>
          <a
            href="https://argentinelioness.blogspot.com/2025/"
            className="hover:text-pink-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
