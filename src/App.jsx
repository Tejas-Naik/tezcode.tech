import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./styles/animations.css";

// Lazy load all the section components for better performance
const Header = lazy(() => import("./sections/Header"));
const Hero = lazy(() => import("./sections/Hero"));
const TrustStrip = lazy(() => import("./sections/TrustStrip"));
const Features = lazy(() => import("./sections/Features")); // Renamed to "Why It Works"
const HowItWorks = lazy(() => import("./sections/HowItWorks"));
const CrashCourseSnapshot = lazy(
  () => import("./sections/CrashCourseSnapshot")
);
const Projects = lazy(() => import("./sections/Projects"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Pricing = lazy(() => import("./sections/Pricing"));
const Instructor = lazy(() => import("./sections/Instructor"));
const Faq = lazy(() => import("./sections/Faq"));
const Footer = lazy(() => import("./sections/Footer"));
const StickyCTA = lazy(() => import("./components/StickyCTA"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

const LandingPage = () => (
  <main className="relative bg-gradient-to-b from-bg-900 to-bg-800">
    <Header />
    <Hero />
    <TrustStrip />
    <Features />
    <HowItWorks />
    <CrashCourseSnapshot />
    <Projects />
    <Testimonials />
    <Pricing />
    <Instructor />
    <Faq />
    <Footer />
    <StickyCTA />
  </main>
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div className="bg-black w-full h-screen" />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
