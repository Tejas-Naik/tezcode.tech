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
import CustomCursor from "./components/CustomCursor";
import PrerequisiteQuiz from "./components/PrerequisiteQuiz";
import Testimonials from "./sections/Testimonials";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative">
      <CustomCursor />
      {!isLoaded ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <Hero />
          <Features />
          <Courses />
          <PrerequisiteQuiz />
          <Curriculum />
          <Projects />
          <Testimonials />
          <Pricing />
          <Contact />
          <Faq />
          <Footer />
        </>
      )}
    </main>
  );
};

export default App;
