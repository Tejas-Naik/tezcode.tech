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
import CustomCursor from './components/CustomCursor';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200); // Matches the loading screen duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative">
      <LoadingScreen />
      <div className="relative z-0">
        <CustomCursor />
        <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Header />
          <Hero />
          <Features />
          <Courses />
          <Curriculum />
          <Projects />
          <Pricing />
          <Contact />
          <Faq />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
