import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Preload critical resources
const preloadResources = () => {
  // Preload hero poster image
  const heroPoster = new Image();
  heroPoster.src = "/images/hero-poster.jpg";

  // Preload fonts
  if ("fonts" in document) {
    Promise.all([
      document.fonts.load("400 1em Inter"),
      document.fonts.load("600 1em Inter"),
      document.fonts.load("800 1em Inter"),
      document.fonts.load("700 1em Poppins"),
      document.fonts.load("400 1em Poppins"),
    ]).then(() => {
      document.documentElement.classList.add("fonts-loaded");
    });
  }
};

// Execute preload
preloadResources();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
