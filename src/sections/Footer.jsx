import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { trackEvent } from "../../utils/analytics";

const Footer = () => {
  return (
    <footer className="bg-bg-900 text-text-muted">
      <div className="container mx-auto px-6 py-12">
        {/* Final CTA */}
        <div className="text-center py-12 mb-12 border-y border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to stop failing and start building?
          </h2>
          <a
            href="#pricing"
            onClick={() => trackEvent("hero_cta_click", { source: "footer" })}
            className="inline-block mt-4 px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold shadow hover:scale-[1.02] transition transform"
          >
            Start 7-Day Crash Course — $49
          </a>
          <p className="text-sm text-gray-500 mt-4">
            7-Day money-back guarantee · Limited seats
          </p>
        </div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <p className="text-sm">
              Contact:{" "}
              <a
                href="mailto:tejas@tezcode.info"
                className="hover:text-white transition-colors"
              >
                tejas@tezcode.info
              </a>{" "}
              ·{" "}
              <a
                href="tel:+916361125087"
                className="hover:text-white transition-colors"
              >
                +91 6361125087
              </a>
            </p>
            <p className="text-sm mt-2">
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
            <a href="#" className="hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
