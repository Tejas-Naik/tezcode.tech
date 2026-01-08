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
          className="fixed bottom-8 md:bottom-6 left-1/2 transform -translate-x-1/2 w-[95%] md:w-auto z-50 pb-safe"
        >
          <div className="glass p-2 rounded-full border border-neon-blue/30 shadow-neon-blue/20 flex items-center gap-4">
             <div className="hidden md:flex items-center gap-2 pl-4 text-white">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium">Spots filling fast!</span>
             </div>
             <a
                href="#pricing"
                onClick={() =>
                trackEvent("hero_cta_click", { source: "sticky_bar" })
                }
                className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-neon-blue px-6 py-3 text-bg-900 font-bold shadow-[0_0_15px_rgba(46,242,255,0.4)] hover:shadow-[0_0_25px_rgba(46,242,255,0.6)] transition-all transform hover:scale-105"
            >
                <span className="md:hidden">Start 7-Day Trial — $49</span>
                <span className="hidden md:inline">Start 7-Day Crash Course — $49</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
