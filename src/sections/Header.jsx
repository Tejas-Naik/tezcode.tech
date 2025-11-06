import { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const mobileMenuRef = useRef(null);

  // Handle scroll position to apply appropriate styling and detect active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Get approximate header height (adjust if your header's actual height varies)
      const headerHeight = 80; // A fixed height is better for calculations

      // Logic for active navigation link highlighting
      let newActiveSection = "hero"; // Default to 'hero'

      // Iterate through nav links to find the currently active section
      // We check sections from top to bottom
      const sections = ["features", "projects", "testimonials", "faq"]; // Add other section IDs
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionBottom = rect.bottom;

          // A section is considered active if its top edge is at or above the header's bottom,
          // and its bottom edge is still below the header's bottom.
          // This means the section is currently "under" the header or just passed it.
          if (
            sectionTop <= headerHeight + 20 &&
            sectionBottom > headerHeight + 20
          ) {
            newActiveSection = id;
            break; // Found the most prominent active section, break loop
          }
        }
      }

      // Special handling for the very top of the page
      if (window.scrollY < 50) {
        // If very close to the top
        newActiveSection = "hero";
      }
      // Special handling for the very bottom of the page
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      if (window.scrollY + viewportHeight >= documentHeight - 10) {
        newActiveSection = "faq"; // Set active to the last link
      }

      setActiveSection(newActiveSection);
    };

    // Throttle scroll event for better performance
    let timeoutId;
    const throttledScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 100); // Adjust throttle delay as needed
      }
    };

    window.addEventListener("scroll", throttledScroll);
    handleScroll(); // Initial check on component mount

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(timeoutId);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        mobileMenuOpen
      ) {
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
        scrolled
          ? "py-3 bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-700"
          : "py-5 bg-transparent"
      }`}
      role="banner"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo/Home link */}
        <a
          href="#hero"
          className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          aria-label="Go to home section"
          onClick={() => {
            setActiveSection("hero");
            window.scrollTo({ top: 0, behavior: "smooth" }); // Optional: Add smooth scroll for home
          }}
        >
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              T
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                TezCode<span className="text-blue-400">.Tech</span>
              </h1>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-2"
          aria-label="Desktop navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
                activeSection === link.href.substring(1)
                  ? "text-white bg-gray-700"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
              onClick={() => setActiveSection(link.href.substring(1))}
              aria-current={
                activeSection === link.href.substring(1) ? "page" : undefined
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 rounded-md bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors duration-300 shadow-md"
          >
            <span>Book a Call</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="md:hidden bg-gray-900 shadow-lg absolute top-full left-0 w-full transition-transform duration-300 transform translate-y-0 z-50"
          aria-label="Mobile navigation"
        >
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveSection(link.href.substring(1));
                  }}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "bg-gray-800 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                  aria-current={
                    activeSection === link.href.substring(1)
                      ? "page"
                      : undefined
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
