import { useEffect, useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Courses from "./sections/Courses";
import Curriculum from "./sections/Curriculum";
import Projects from "./sections/Projects";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import LoadingScreen from "./components/LoadingScreen";
import PrerequisiteQuiz from "./components/PrerequisiteQuiz";
import Testimonials from "./sections/Testimonials";
import EmailCapture from "./components/EmailCapture";
import WhatsAppButton from "./components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);

    // Show Back to Top button after scrolling 400px
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative">
      {!isLoaded ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <Hero />
          <PrerequisiteQuiz />
          <Features />
          <Courses />
          <Curriculum />
          <Projects />
          <Testimonials />
          <Pricing />
          <Contact />
          <Faq />
          <Footer />
          
          {/* Email Capture Popup */}
          <EmailCapture />
          
          {/* WhatsApp Floating Button */}
          <WhatsAppButton />
          
          {/* Back to Top Button */}
          {showBackToTop && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Back to top"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          )}
          <Analytics />
        </>
      )}
    </main>
  );
};

export default App;
