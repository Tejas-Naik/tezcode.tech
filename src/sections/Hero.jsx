import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { trackEvent } from "../../utils/analytics";

// Helper function to calculate time remaining
const calculateTimeLeft = (targetDate) => {
  const now = new Date();
  const difference = targetDate - now;

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return timeLeft;
};

const Hero = () => {
  // For demonstration, let's set a target date 24 hours from now
  const [nextClassStartTime] = useState(() => {
    const targetDate = new Date("2026-02-01T12:00:00Z");
    return targetDate;
  });
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(nextClassStartTime)
  );

  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(nextClassStartTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [nextClassStartTime]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile) {
      video.removeAttribute("autoplay");
      video.pause();
      video.controls = false;
      const playBtn = document.getElementById('heroPlayBtn');
      if (playBtn) {
        playBtn.style.opacity = '1';
        const playVideo = () => {
          video.controls = true;
          video.play();
          playBtn.style.display = 'none';
        };
        playBtn.addEventListener("click", playVideo);
        return () => playBtn.removeEventListener("click", playVideo);
      }
    } else {
      video.muted = true;
      video.loop = true;
      video.play().catch(() => {});
    }
  }, []);

  const countdownString = `${String(timeLeft.hours).padStart(2, "0")}:${String(timeLeft.minutes).padStart(2, "0")}:${String(timeLeft.seconds).padStart(2, "0")}`;

  return (
    <header className="relative min-h-screen flex items-center justify-center px-6 py-28 overflow-hidden bg-bg-900">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neon-blue/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-purple/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full text-center z-10">
        
        {/* Badge */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
        >
          <div className="glass px-4 py-2 rounded-full flex items-center gap-3 border border-neon-blue/30 shadow-neon-blue/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-blue"></span>
            </span>
            <span className="text-sm font-medium text-white/90 tracking-wide uppercase">
              Limited Batch Closing In: <span className="text-neon-blue font-bold font-mono">{countdownString}</span>
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.1, duration: 0.6 }} 
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight text-white mb-6"
        >
          Master Python <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple text-glow">
            In Just 7 Days
          </span>
        </motion.h1>

        <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Stop watching endless tutorials. Build <span className="text-white font-semibold">Real Apps</span>, solve <span className="text-white font-semibold">Real Problems</span>, and get <span className="text-white font-semibold">Real Feedback</span>. 
          <br className="hidden md:block"/> Join the only crash course with a 94% completion rate.
        </motion.p>

        {/* Video Container - Glass Card */}
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto max-w-5xl w-full aspect-video rounded-2xl overflow-hidden glass-card p-2 neon-border group"
        >
          <div className="w-full h-full rounded-xl overflow-hidden relative bg-black">
            <video id="heroVideo" ref={videoRef} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" poster="/images/hero-poster.jpg" playsInline muted loop preload="metadata">
              <source src="/course-intro.mp4" type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-t from-bg-900/80 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Play Button Overlay */}
            <button id="heroPlayBtn" className="absolute inset-0 m-auto size-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center z-20 transition-all hover:scale-110 hover:bg-neon-blue/20 border border-white/20">
              <div className="absolute inset-0 rounded-full bg-neon-blue/20 animate-ping"></div>
              <svg className="w-10 h-10 text-white fill-current relative z-10" viewBox="0 0 24 24"><path d="M5 3v18l15-9L5 3z" /></svg>
            </button>
          </div>
        </motion.div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#pricing" 
            onClick={() => trackEvent("hero_cta_click")} 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-bg-900 transition-all duration-200 bg-neon-blue rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-blue w-full sm:w-auto overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full -mt-10 transition-all duration-700 ease-out transform translate-x-0 -rotate-180 bg-white opacity-0 group-hover:opacity-30 group-start:translate-x-0"></span>
            Start Now — $49
            <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </motion.a>

          <a 
            href="https://calendar.app.google/7cqRrikvBjMEsY2s8" 
            onClick={() => trackEvent("book_call_click", { source: "hero" })} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-300 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white w-full sm:w-auto"
          >
            Book a Free 15-min Call
          </a>
        </div>
        
        <p className="mt-6 text-neutral-500 text-sm font-medium">
          <span className="text-neon-purple">●</span> Join 500+ students · <span className="text-neon-purple">●</span> 7-Day Money Back Guarantee
        </p>

      </div>
    </header>
  );
};

export default Hero;
