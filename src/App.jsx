import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./styles/animations.css";

// Lazy load all the section components for better performance
const Header = lazy(() => import("./sections/Header"));
const Hero = lazy(() => import("./sections/Hero"));
const TrustStrip = lazy(() => import("./sections/TrustStrip"));
const Problem = lazy(() => import("./sections/Problem"));
const Features = lazy(() => import("./sections/Features")); // Solution section
const WhatYoullLearn = lazy(() => import("./sections/WhatYoullLearn"));
const CurriculumJourney = lazy(() => import("./sections/CurriculumJourney")); // 7-Day Roadmap
const Instructor = lazy(() => import("./sections/Instructor"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const HowItWorks = lazy(() => import("./sections/HowItWorks"));
const Pricing = lazy(() => import("./sections/Pricing"));
const FutureHook = lazy(() => import("./sections/FutureHook"));
const EmailCapture = lazy(() => import("./sections/EmailCapture"));
const Footer = lazy(() => import("./sections/Footer"));
const StickyCTA = lazy(() => import("./components/StickyCTA"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

// Blog Components
const BlogLayout = lazy(() => import("./pages/BlogLayout"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

// Inline separator component — glow gradient line between sections
const Sep = () => <hr className="section-sep" />;

const LandingPage = () => (
  <main className="relative overflow-x-hidden">
    <Header />
    <Hero />
    <Sep />
    <TrustStrip />
    <Sep />
    <Problem />
    <Sep />
    <Features />
    <Sep />
    <WhatYoullLearn />
    <Sep />
    <CurriculumJourney />
    <Sep />
    <Instructor />
    <Sep />
    <Testimonials />
    <Sep />
    <HowItWorks />
    <Sep />
    <Pricing />
    <Sep />
    <FutureHook />
    <Sep />
    <EmailCapture />
    <Footer />
    <StickyCTA />
  </main>
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div className="bg-bg-900 w-full h-screen flex items-center justify-center text-neon-blue">Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/thank-you" element={<ThankYou />} />

          {/* Blog Routes */}
          <Route path="/blog" element={<BlogLayout />}>
            <Route index element={<BlogList />} />
            <Route path=":slug" element={<BlogPost />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
