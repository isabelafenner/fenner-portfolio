import { useEffect } from "react";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // close mobile menu when resizing to md+ (>= 768px)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handleChange = () => {
      if (mq.matches) setMenuOpen(false);
    };

    handleChange(); // run once on mount
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, [setMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="font-mono text-xl font-bold text-white">
              Isabela Fenner
            </a>

            {/* mobile button */}
            <button
              type="button"
              className="md:hidden z-50 text-white text-3xl leading-none w-10 h-10 flex items-center justify-center rounded hover:bg-white/10 transition mr-4"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            {/* desktop links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile overlay menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-200 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* backdrop to hide everything behind */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* menu items */}
        <div className="relative z-50 h-full flex flex-col items-center justify-center gap-8 text-2xl">
          <a href="#home" onClick={() => setMenuOpen(false)} className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-white hover:text-gray-200">
            About
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-white hover:text-gray-200">
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white hover:text-gray-200">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};
