import { useState, useEffect, useRef } from "react";

const navLinks = [
  { id: "courses", title: "Courses" },
  { id: "curriculum", title: "Curriculum" },
  { id: "projects", title: "Projects" },
  { id: "testimonials", title: "Testimonials" },
  { id: "pricing", title: "Pricing" },
  { id: "faq", title: "FAQ" },
  { id: "contact", title: "Contact Us" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero"); // Default active section
  const [scrollProgress, setScrollProgress] = useState(0); // State for overall scroll progress
  const mobileMenuRef = useRef(null);

  // Handle scroll position to apply appropriate styling and detect active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Get approximate header height (adjust if your header's actual height varies)
      const headerHeight = scrolled ? 60 : 80;

      // Calculate overall scroll progress for the progress bar
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Logic for active navigation link highlighting
      let newActiveSection = "hero"; // Default to 'hero'

      // Iterate through nav links to find the currently active section
      // We check sections from top to bottom
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionBottom = rect.bottom;

          // A section is considered active if its top edge is at or above the header's bottom,
          // and its bottom edge is still below the header's bottom.
          // This means the section is currently "under" the header or just passed it.
          if (sectionTop <= headerHeight && sectionBottom > headerHeight) {
            newActiveSection = link.id;
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
        // Small buffer for bottom
        newActiveSection = navLinks[navLinks.length - 1].id; // Set active to the last link
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
    };
  }, [scrolled]); // Re-run effect if scrolled state changes (header height changes)

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
        scrolled ? "py-3 bg-white shadow-md" : "py-5 bg-transparent"
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
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-2"
          aria-label="Desktop navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                activeSection === link.id
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : scrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-gray-800 hover:text-blue-600"
              }`}
              onClick={() => setActiveSection(link.id)} // Keep onClick for immediate active state update
              aria-current={activeSection === link.id ? "page" : undefined}
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Progress Indicator (shows navigation position) */}
        {scrolled && (
          <div className="hidden md:block absolute bottom-0 left-0 w-full h-1 bg-gray-100">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${scrollProgress}%` }} // Use scrollProgress for width
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
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
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
