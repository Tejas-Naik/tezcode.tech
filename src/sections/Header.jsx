import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";

const navLinks = [
  { to: "features", text: "Features" },
  { to: "courses", text: "Courses" },
  { to: "curriculum", text: "Curriculum" },
  { to: "pricing", text: "Pricing" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            smooth={true}
            className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300"
          >
            TezCode
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <LinkScroll
                key={link.to}
                to={link.to}
                smooth={true}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                {link.text}
              </LinkScroll>
            ))}
            <LinkScroll
              to="contact"
              smooth={true}
              className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </LinkScroll>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <LinkScroll
                key={link.to}
                to={link.to}
                smooth={true}
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </LinkScroll>
            ))}
            <LinkScroll
              to="contact"
              smooth={true}
              className="block px-6 py-2 text-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </LinkScroll>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
