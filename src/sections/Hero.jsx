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
  // In a real app, this would come from a backend or a fixed schedule
  // Example target: next class start time (UTC ISO)
  const [nextClassStartTime] = useState(() => {
    const targetDate = new Date("2025-12-01T12:00:00Z");
    return targetDate;
  });
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(nextClassStartTime)
  );

  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        clearTimeout(timer);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [nextClassStartTime, timeLeft]);

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
          // When the user clicks play on mobile, we want to show the native controls
          // and start the video.
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
    <header className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-bg-900 to-bg-800">
      <div className="mx-auto max-w-6xl w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[rgba(37,99,255,0.08)] border border-[rgba(37,99,255,0.12)] text-sm text-white/90">
            <span className="text-xs text-accent-500 font-medium">Next Batch Starts In</span>
            <span id="hero-countdown" className="ml-2 font-semibold text-white">{countdownString}</span>
          </div>
        </div>

        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15, duration: 0.5 }} className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Stop Failing Python — Try Our <span className="text-brand-500">$49 Crash Course</span>
        </motion.h1>
        <p className="text-text-muted mt-3 max-w-2xl mx-auto">
          7 days of live daily classes, hands-on projects, and real-time mentorship to fix your Python grades fast.
        </p>

        {/* Centered framed video */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-10 max-w-[980px] w-full aspect-video rounded-2xl overflow-hidden shadow-glow-blue border border-[rgba(255,255,255,0.04)] relative p-1 bg-transparent"
        >
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <video id="heroVideo" ref={videoRef} className="w-full h-full object-cover" poster="/images/hero-poster.jpg" playsInline muted loop preload="metadata">
              <source src="/course-intro.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            <button id="heroPlayBtn" className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center z-20 transition-opacity opacity-100 md:opacity-0 group-hover:opacity-100">
              <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3v18l15-9L5 3z" /></svg>
            </button>
          </div>
        </motion.div>

        {/* CTAs below */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" onClick={() => trackEvent("hero_cta_click")} className="inline-block px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold shadow hover:scale-[1.02] transition transform">
            Start 7-Day Crash Course — $49
          </a>
          <a href="https://calendar.app.google/7cqRrikvBjMEsY2s8" onClick={() => trackEvent("book_call_click", { source: "hero" })} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 rounded-full border border-white/10 text-white/90 hover:bg-white/5 transition-colors">
            Book a Free 15-min Call
          </a>
        </div>
        <div className="mt-4 space-y-1 text-sm text-text-muted">
            <p>Only <span id="seatsLeft" className="text-white font-medium">12</span> seats left</p>
            <p>7-Day money-back guarantee · Full access to live classes & recordings</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
