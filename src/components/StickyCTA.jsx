import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "../../utils/analytics";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show CTA when user scrolls past the hero section (e.g., > 90% of viewport height)
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:hidden z-50"
        >
          <a
            href="#pricing"
            onClick={() =>
              trackEvent("hero_cta_click", { source: "sticky_mobile" })
            }
            className="w-full inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-white font-semibold shadow-lg"
          >
            Start 7-Day Crash Course — $49
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
