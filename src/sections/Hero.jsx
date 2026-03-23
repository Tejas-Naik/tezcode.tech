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

// Floating particles — subtle, drift upward
const PARTICLES = [
  { size: 3, left: "8%",  top: "65%", delay: 0,   duration: 11 },
  { size: 2, left: "18%", top: "80%", delay: 2,   duration: 14 },
  { size: 4, left: "30%", top: "70%", delay: 4,   duration: 10 },
  { size: 2, left: "48%", top: "85%", delay: 1,   duration: 13 },
  { size: 3, left: "62%", top: "75%", delay: 3,   duration: 12 },
  { size: 2, left: "75%", top: "82%", delay: 5,   duration: 11 },
  { size: 4, left: "88%", top: "68%", delay: 0.5, duration: 15 },
  { size: 2, left: "55%", top: "60%", delay: 6,   duration: 9  },
];

const FloatingParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
    {PARTICLES.map((p, i) => (
      <motion.span
        key={i}
        className="absolute rounded-full"
        style={{
          width: p.size,
          height: p.size,
          left: p.left,
          top: p.top,
          background: i % 2 === 0
            ? "rgba(0, 245, 255, 0.6)"
            : "rgba(140, 0, 255, 0.5)",
          boxShadow: i % 2 === 0
            ? "0 0 6px 2px rgba(0,245,255,0.4)"
            : "0 0 6px 2px rgba(140,0,255,0.35)",
        }}
        animate={{
          y: [0, -130, -260],
          x: [0, p.size * 6, -p.size * 3],
          opacity: [0, 0.8, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: p.duration,
          delay: p.delay,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    ))}
  </div>
);

const Hero = () => {
  const [nextClassStartTime] = useState(() => new Date("2026-04-01T12:00:00Z"));
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(nextClassStartTime));
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
      const playBtn = document.getElementById("heroPlayBtn");
      if (playBtn) {
        playBtn.style.opacity = "1";
        const playVideo = () => {
          video.controls = true;
          video.play();
          playBtn.style.display = "none";
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
    <header className="relative min-h-screen flex items-center justify-center px-6 py-28 overflow-hidden">
      {/* ── Background radial glows ── */}
      <div
        className="absolute top-0 left-1/4 w-[700px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,245,255,0.12) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(140,0,255,0.1) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      {/* ── Floating particles ── */}
      <FloatingParticles />

      <div className="relative mx-auto max-w-7xl w-full text-center z-10">

        {/* ── Countdown Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <div className="glass px-5 py-2.5 rounded-full flex items-center gap-3"
               style={{ border: "1px solid rgba(0,245,255,0.25)", boxShadow: "0 0 20px rgba(0,245,255,0.1)" }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-blue" />
            </span>
            <span className="text-sm font-medium text-white/90 tracking-wide uppercase">
              Limited Batch Closing In:{" "}
              <span className="text-neon-blue font-bold font-mono">{countdownString}</span>
            </span>
          </div>
        </motion.div>

        {/* ── Heading ── */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight text-white mb-6"
        >
          Learn Python in 7 Days —{" "}
          <br className="hidden md:block" />
          <span
            className="text-transparent bg-clip-text text-glow"
            style={{ backgroundImage: "linear-gradient(135deg, #00f5ff, #ffffff, #8c00ff)" }}
          >
            Even If You've Never Coded Before
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A live, structured Python crash course by{" "}
          <span className="text-white font-semibold">Tejas Naik</span> designed to help beginners build{" "}
          <span className="text-white font-semibold">real coding skills</span> from Day 1.
        </motion.p>

        {/* ── Video Container — animated glowing border ── */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto max-w-5xl w-full group"
        >
          {/* Animated rotating gradient border */}
          <div
            className="absolute -inset-[2px] rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #00f5ff, #0044ff, #8c00ff, #00f5ff)",
              backgroundSize: "300% 300%",
              animation: "borderSpin 4s linear infinite",
              borderRadius: "18px",
              opacity: 0.85,
            }}
          />
          {/* Outer glow behind the border */}
          <div
            className="absolute -inset-3 rounded-3xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0,245,255,0.15) 0%, transparent 70%)",
              filter: "blur(12px)",
            }}
          />
          {/* Inner video container */}
          <div
            className="relative w-full aspect-video rounded-2xl overflow-hidden group"
            style={{
              background: "rgba(5,8,22,0.9)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <video
              id="heroVideo"
              ref={videoRef}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              poster="/images/hero-poster.jpg"
              playsInline
              muted
              loop
              preload="metadata"
            >
              <source src="/course-intro.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent pointer-events-none" />

            {/* Play Button */}
            <button
              id="heroPlayBtn"
              className="absolute inset-0 m-auto size-24 rounded-full backdrop-blur-md flex items-center justify-center z-20 transition-all hover:scale-110 border border-white/20"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(0,245,255,0.15)" }} />
              <svg className="w-10 h-10 text-white fill-current relative z-10 ml-1" viewBox="0 0 24 24">
                <path d="M5 3v18l15-9L5 3z" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* ── CTAs ── */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#pricing"
            onClick={() => trackEvent("hero_cta_click")}
            className="btn-glow group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-bg-900 rounded-full w-full sm:w-auto overflow-hidden focus:outline-none"
            style={{
              background: "linear-gradient(135deg, #00f5ff, #0066ff)",
            }}
          >
            <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #fff, transparent)" }} />
            Join the 7-Day Python Course — $49
            <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>

          <a
            href="#learn"
            onClick={() => trackEvent("hero_secondary_cta_click", { source: "hero" })}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white rounded-full w-full sm:w-auto transition-all duration-300"
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.borderColor = "rgba(0,245,255,0.3)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            }}
          >
            See What You'll Learn
          </a>
        </div>

        {/* ── Mini Pricing Badge ── */}
        <div className="mt-8 flex items-center justify-center">
          <div
            className="inline-flex items-center divide-x overflow-hidden rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              divideColor: "rgba(255,255,255,0.08)",
            }}
          >
            {[
              { label: "FORMAT", value: "7-Day Live Course", color: "text-white" },
              { label: "PRICE",  value: "Only $49",          color: "text-neon-blue font-black" },
              { label: "AVAILABILITY", value: "Limited Seats", color: "text-neon-purple font-bold", pulse: true },
            ].map((item) => (
              <div key={item.label} className="px-5 py-3 text-center" style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-[10px] text-neutral-600 uppercase tracking-widest mb-1">{item.label}</p>
                <p className={`text-sm ${item.color} flex items-center justify-center gap-1.5`}>
                  {item.pulse && <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse inline-block" />}
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Hero;
