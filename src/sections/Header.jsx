import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { navLinks } from "../constants";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-white shadow-md" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          className="cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              T
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">TezCode</h1>
              <p className="text-xs text-blue-600 -mt-1 font-medium">Learn. Code. Succeed.</p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-100}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
                scrolled ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" : "text-gray-800 hover:text-blue-600"
              }`}
            >
              {link.title}
            </Link>
          ))}
          <a 
            href="#contact" 
            className="ml-2 px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300 shadow-sm"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:bg-indigo-50 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-blue-600 transition-colors duration-200"
                >
                  {link.title}
                </Link>
              ))}
              <a 
                href="#contact" 
                className="px-4 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
