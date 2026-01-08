import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { trackEvent } from "../../utils/analytics";

const Footer = () => {
  return (
    <footer className="bg-bg-900 text-neutral-400 border-t border-white/5 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Final CTA */}
        <div className="text-center py-8 md:py-12 mb-8 md:mb-12 border-b border-white/5">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6">
            Ready to stop failing and <span className="text-transparent bg-clip-text bg-neon-gradient">start building?</span>
          </h2>
          <a
            href="#pricing"
            onClick={() => trackEvent("hero_cta_click", { source: "footer" })}
            className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-bg-900 font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition transform hover:scale-105 text-sm md:text-base"
          >
            Start 7-Day Crash Course — $49
          </a>
          <p className="text-xs md:text-sm text-neutral-500 mt-4 md:mt-6 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            7-Day money-back guarantee · Limited seats
          </p>
        </div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div className="mb-6 md:mb-0">
            <p className="text-sm font-semibold text-white">
              Contact:{" "}
              <a
                href="mailto:tejas@tezcode.info"
                className="hover:text-neon-blue transition-colors"
              >
                tejas@tezcode.info
              </a>{" "}
              ·{" "}
              <a
                href="tel:+916361125087"
                className="hover:text-neon-blue transition-colors"
              >
                +91 6361125087
              </a>
            </p>
            <p className="text-xs mt-3 text-neutral-600">
              © {new Date().getFullYear()} TezCode.Tech — All rights reserved.
              <a href="#" className="ml-2 hover:text-white transition-colors">
                Privacy
              </a>{" "}
              ·
              <a href="#" className="ml-2 hover:text-white transition-colors">
                Terms
              </a>
            </p>
          </div>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-neutral-500 hover:text-neon-blue transition-colors transform hover:-translate-y-1">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-neutral-500 hover:text-red-500 transition-colors transform hover:-translate-y-1">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-neutral-500 hover:text-pink-500 transition-colors transform hover:-translate-y-1">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
