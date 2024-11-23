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
          {/* Logo */}
          <LinkScroll
            to="hero"
            className="text-2xl font-bold cursor-pointer"
            smooth={true}
            duration={500}
          >
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              TezCode
            </span>
            <span className="text-gray-700">.Tech</span>
          </LinkScroll>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <LinkScroll
                key={link.to}
                to={link.to}
                className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"
                smooth={true}
                duration={500}
              >
                {link.text}
              </LinkScroll>
            ))}
            <LinkScroll
              to="contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              smooth={true}
              duration={500}
            >
              Contact Us
            </LinkScroll>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={clsx(
            "md:hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 invisible"
          )}
        >
          <div className="pt-4 pb-2 space-y-4">
            {navLinks.map((link) => (
              <LinkScroll
                key={link.to}
                to={link.to}
                className="block text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </LinkScroll>
            ))}
            <LinkScroll
              to="contact"
              className="block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-center"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </LinkScroll>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
