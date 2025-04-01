import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { navLinks } from "../constants";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const mobileMenuRef = useRef(null);

  // Handle scroll position to apply appropriate styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Throttle scroll event for better performance
    let timeoutId;
    const throttledScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 100);
      }
    };

    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-white shadow-md" : "py-5 bg-transparent"
      }`}
      role="banner"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          aria-label="Go to home section"
          onClick={() => setActiveSection("hero")}
        >
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              T
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                TezCode<span className="text-blue-600">.Tech</span>
              </h1>
              <p className="text-xs text-blue-600 -mt-1 font-medium">
                Learn. Code. Succeed.
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Desktop navigation">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-100}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                activeSection === link.id
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : scrolled
                  ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  : "text-gray-800 hover:text-blue-600"
              }`}
              onClick={() => setActiveSection(link.id)}
              aria-current={activeSection === link.id ? "page" : undefined}
            >
              {link.title}
            </Link>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 relative overflow-hidden group"
            onClick={() => setActiveSection("contact")}
            aria-label="Contact us"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
        </nav>

        {/* Progress Indicator (shows navigation position) */}
        {scrolled && (
          <div className="hidden md:block absolute bottom-0 left-0 w-full h-1 bg-gray-100">
            <div 
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ 
                width: navLinks.findIndex(link => link.id === activeSection) !== -1 
                  ? `${(navLinks.findIndex(link => link.id === activeSection) + 1) * (100 / (navLinks.length + 1))}%` 
                  : "0%" 
              }}
            ></div>
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full transition-transform duration-300 transform translate-y-0 z-50"
          aria-label="Mobile navigation"
        >
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveSection(link.id);
                  }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    activeSection === link.id
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-indigo-50 hover:text-blue-600"
                  }`}
                  aria-current={activeSection === link.id ? "page" : undefined}
                >
                  {link.title}
                </Link>
              ))}
              <a
                href="#contact"
                className="px-4 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveSection("contact");
                }}
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
