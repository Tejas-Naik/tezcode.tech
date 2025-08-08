import { useEffect, useState, lazy, Suspense } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { Analytics } from "@vercel/analytics/react";

// Lazy load components for better performance
const Header = lazy(() => import("./sections/Header"));
const Hero = lazy(() => import("./sections/Hero"));
const Features = lazy(() => import("./sections/Features"));
const Courses = lazy(() => import("./sections/Courses"));
const Curriculum = lazy(() => import("./sections/Curriculum"));
const Projects = lazy(() => import("./sections/Projects"));
const Pricing = lazy(() => import("./sections/Pricing"));
const Contact = lazy(() => import("./sections/Contact"));
const Faq = lazy(() => import("./sections/Faq"));
const Footer = lazy(() => import("./sections/Footer"));
const PrerequisiteQuiz = lazy(() => import("./components/PrerequisiteQuiz"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const EmailCapture = lazy(() => import("./components/EmailCapture"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));

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
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-xl font-semibold">Loading...</div></div>}>
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
        </Suspense>
      )}
    </main>
  );
};

export default App;
