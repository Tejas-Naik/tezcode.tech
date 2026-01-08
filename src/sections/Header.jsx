import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-bg-900/80 backdrop-blur-md border-b border-white/5 shadow-glass"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="group relative z-50"
          onClick={() => {
            setActiveSection("hero");
            setMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="flex items-center gap-2">
            <div className="bg-bg-900 border border-white/10 w-10 h-10 rounded-lg flex items-center justify-center text-neon-blue font-black text-xl shadow-[0_0_15px_rgba(46,242,255,0.3)] group-hover:shadow-[0_0_25px_rgba(46,242,255,0.5)] transition-all duration-300">
              T
            </div>
            <h1 className="text-xl font-bold text-white tracking-tight">
              TezCode<span className="text-neon-blue">.Tech</span>
            </h1>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? "bg-neon-blue text-bg-900 shadow-[0_0_15px_rgba(46,242,255,0.4)] font-bold"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setActiveSection(link.href.substring(1))}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
           <a
             href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
             target="_blank"
             rel="noopener noreferrer"
             className="px-6 py-2.5 rounded-full border border-neon-purple/50 text-neon-purple hover:bg-neon-purple hover:text-white transition-all duration-300 text-sm font-bold shadow-[0_0_10px_rgba(157,78,221,0.2)] hover:shadow-[0_0_20px_rgba(157,78,221,0.4)]"
           >
             Book a Call
           </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative z-50 p-2 text-white focus:outline-none"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2.5 bg-neon-blue' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-neon-blue' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-bg-900/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveSection(link.href.substring(1));
                  }}
                  className={`text-2xl font-bold ${
                    activeSection === link.href.substring(1)
                      ? "text-neon-blue"
                      : "text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
               <a
                 href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="px-8 py-4 rounded-full bg-neon-purple text-white font-bold text-lg shadow-[0_0_20px_rgba(157,78,221,0.4)]"
               >
                 Book a Call
               </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
