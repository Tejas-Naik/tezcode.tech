import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Preload critical resources
const preloadResources = () => {
  // Preload hero image
  const heroImage = new Image();
  heroImage.src = '/images/hero.png';
  
  // Preload fonts
  if ('fonts' in document) {
    Promise.all([
      document.fonts.load('700 1em Poppins'),
      document.fonts.load('600 1em Poppins'),
      document.fonts.load('500 1em Poppins'),
      document.fonts.load('400 1em Poppins')
    ]).then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });
  }
};

// Execute preload
preloadResources();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
