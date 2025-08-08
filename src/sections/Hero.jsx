import { useState, useEffect } from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";
import { FaPlay, FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";

// Animation for typing effect with multiple phrases
// Using more engaging phrases to improve user connection
const phrases = ["Effective", "Engaging", "Practical", "Career-Ready"];
const typeWriter = (
  phrases,
  phraseIndex,
  charIndex,
  setter,
  erasingState = false
) => {
  // Current phrase being typed
  const currentPhrase = phrases[phraseIndex];

  if (!erasingState) {
    // Typing the current phrase
    if (charIndex < currentPhrase.length) {
      setter(currentPhrase.substring(0, charIndex + 1));
      setTimeout(
        () =>
          typeWriter(phrases, phraseIndex, charIndex + 1, setter, erasingState),
        100
      );
    } else {
      // Start erasing after a delay
      setTimeout(
        () => typeWriter(phrases, phraseIndex, charIndex, setter, true),
        2000
      );
    }
  } else {
    // Erasing the current phrase
    if (charIndex > 0) {
      setter(currentPhrase.substring(0, charIndex - 1));
      setTimeout(
        () =>
          typeWriter(phrases, phraseIndex, charIndex - 1, setter, erasingState),
        50
      );
    } else {
      // Move to the next phrase
      const nextPhraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(
        () => typeWriter(phrases, nextPhraseIndex, 0, setter, false),
        500
      );
    }
  }
};

// Next class time countdown timer
const useCountdown = () => {
  // Generating a time 3 hours from now for demo purposes
  const getTargetDate = () => {
    const now = new Date();
    return new Date(now.getTime() + 3 * 60 * 60 * 1000);
  };

  const [countdown, setCountdown] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = getTargetDate();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown({
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return countdown;
};

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const countdown = useCountdown();
  const studentCount = 520; // This would ideally come from an API or context
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  useEffect(() => {
    typeWriter(phrases, 0, 0, setTypedText, false);
  }, []);

  return (
    <section id="hero" className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-indigo-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url(&apos;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==&apos;)]} opacity-10"></div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-200 to-indigo-200 opacity-30 animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-indigo-200 to-blue-200 opacity-30 animate-float animation-delay-2000"></div>
      <div className="absolute top-1/3 right-10 w-20 h-20 rounded-full bg-gradient-to-r from-blue-200 to-indigo-200 opacity-30 animate-float animation-delay-4000"></div>

      <Element name="hero">
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="relative z-10">
              {/* Live Class Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex px-4 py-2 mb-6 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white items-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <span className="font-bold">LIVE Python Programming Classes</span>
                  <div className="ml-3 border-l border-blue-400 pl-3">
                    <span className="text-xs">Next class in</span>
                    <span className="ml-1 font-semibold">{`${countdown.hours}:${countdown.minutes}:${countdown.seconds}`}</span>
                  </div>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6"
              >
                <div className="mb-2">
                  <span className="text-gray-900">From Failing</span>
                </div>
                <div className="mb-2">
                  <span className="text-gray-900">Python to </span>
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {typedText}
                    <span className="animate-blink">|</span>
                  </span>
                </div>
                <div>
                  <span className="text-gray-900">Skills in Weeks</span>
                </div>
                <div className="mt-2">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-extrabold">
                    TezCode.Tech
                  </span>
                </div>
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl"
              >
                Stop struggling with confusing lectures and overwhelming assignments. Our{" "}
                <strong className="text-blue-700 font-semibold">
                  daily live classes
                </strong>{" "}
                are designed to help you master Python quickly with real-world projects, personalized feedback, and a proven system that's helped {studentCount}+ students turn F's into A's.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <a
                  href="#prerequisite-quiz"
                  className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="absolute right-0 top-0 bg-yellow-400 text-xs font-bold text-blue-900 px-2 py-1 rotate-12 transform translate-x-2 -translate-y-1">94% Success</span>
                  <span className="flex items-center">Get Your Python Breakthrough
                    <FiArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a
                  href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded-full border-2 border-blue-300 text-blue-700 font-semibold text-lg bg-white hover:bg-blue-50 hover:border-blue-400 hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 shadow-md flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Reserve Your Spot <span className="text-xs font-normal">(Limited Seats)</span></span>
                </a>
              </motion.div>

              {/* Key Benefits Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 px-4 py-2 text-sm font-medium text-blue-800 shadow-sm">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Project-Based Learning</span>
                </div>
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 px-4 py-2 text-sm font-medium text-blue-800 shadow-sm">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <span>Live Mentorship</span>
                </div>
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 px-4 py-2 text-sm font-medium text-blue-800 shadow-sm">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Career Guidance</span>
                </div>
              </motion.div>

              {/* Student Enrollment */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap items-center gap-3 mb-8">
                <div className="flex -space-x-3">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${20 + i}.jpg`}
                      alt="Student"
                    />
                  ))}
                  <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-blue-600 text-white text-xs font-medium shadow-md">
                    +{studentCount - 5}
                  </span>
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  <strong className="text-blue-600 text-base">{studentCount}+</strong>{" "}
                  students have enrolled in the last 6 months
                </span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 mb-8"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 text-xs">✓</span>
                  Perfect for:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-xl">
                    <BsCheckCircleFill className="text-blue-600 mr-3 text-lg" />
                    <span className="font-medium">College Students</span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-xl">
                    <BsCheckCircleFill className="text-blue-600 mr-3 text-lg" />
                    <span className="font-medium">Complete Beginners</span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-xl">
                    <BsCheckCircleFill className="text-blue-600 mr-3 text-lg" />
                    <span className="font-medium">Game Developers</span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-xl">
                    <BsCheckCircleFill className="text-blue-600 mr-3 text-lg" />
                    <span className="font-medium">Freelancers</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <LinkScroll
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 font-semibold hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md flex items-center"
                >
                  <span>Explore Courses</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </LinkScroll>
                <a
                  href="#prerequisite-quiz"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 font-semibold hover:from-indigo-200 hover:to-blue-200 transition-all duration-300 shadow-sm hover:shadow-md flex items-center"
                >
                  <span>Prerequisite Quiz</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </motion.div>

              <div className="mt-12">
                <div className="flex flex-wrap justify-between items-center py-4 px-6 bg-gradient-to-t from-indigo-50 to-white rounded-xl border border-indigo-200 shadow-sm">
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Next class starts in:
                    </h4>
                    <p className="text-sm text-gray-500">
                      Python 3.12: Modern Features & Development Environments
                    </p>
                    <p className="text-xs text-green-600 font-semibold mt-1">
                      94% of students improve their grades within 2 weeks
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3 sm:mt-0">
                    <div className="bg-white w-12 h-14 flex flex-col items-center justify-center rounded-lg shadow-sm border border-indigo-100">
                      <span className="text-lg font-bold text-indigo-700">
                        {countdown.hours}
                      </span>
                      <span className="text-xs text-gray-500">hours</span>
                    </div>
                    <div className="text-indigo-400 font-bold">:</div>
                    <div className="bg-white w-12 h-14 flex flex-col items-center justify-center rounded-lg shadow-sm border border-indigo-100">
                      <span className="text-lg font-bold text-indigo-700">
                        {countdown.minutes}
                      </span>
                      <span className="text-xs text-gray-500">mins</span>
                    </div>
                    <div className="text-indigo-400 font-bold">:</div>
                    <div className="bg-white w-12 h-14 flex flex-col items-center justify-center rounded-lg shadow-sm border border-indigo-100">
                      <span className="text-lg font-bold text-indigo-700">
                        {countdown.seconds}
                      </span>
                      <span className="text-xs text-gray-500">secs</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 mt-6">
                  <div className="bg-gradient-to-br from-indigo-50 to-white p-5 rounded-xl shadow-sm border border-indigo-100">
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full p-3 bg-indigo-100">
                        <svg
                          className="w-6 h-6 text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          LIVE Daily Classes
                        </h4>
                        <p className="text-sm text-gray-600">
                          Interactive sessions with real-time feedback
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between space-x-4">
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-4 rounded-xl border border-indigo-100 flex-1">
                      <div className="flex items-center space-x-2">
                        <div className="rounded-full p-2 bg-indigo-100">
                          <svg
                            className="w-5 h-5 text-indigo-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">
                            5x
                          </h4>
                          <p className="text-sm text-gray-600">
                            Weekly Sessions
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-4 rounded-xl border border-indigo-100 flex-1">
                      <div className="flex items-center space-x-2">
                        <div className="rounded-full p-2 bg-indigo-100">
                          <svg
                            className="w-5 h-5 text-indigo-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">
                            24/7
                          </h4>
                          <p className="text-sm text-gray-600">
                            Discord Support
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Video Preview */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              {/* Background blobs */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000"></div>
              <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000"></div>

              {/* Main content card */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
                {/* Live badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md">
                    <span className="relative flex h-3 w-3 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    LIVE Classes
                  </div>
                </div>

                {/* Video preview */}
                <div 
                  className="relative aspect-video overflow-hidden cursor-pointer group"
                  onMouseEnter={() => setIsVideoHovered(true)}
                  onMouseLeave={() => setIsVideoHovered(false)}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1613329671121-5d1cf551cc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Students learning to code at TezCode.Tech" 
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isVideoHovered ? "scale-105" : "scale-100"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg"
                    >
                      <FaPlay className="text-white ml-1 w-7 h-7" />
                    </motion.div>
                    {/* Ripple effect on hover */}
                    {isVideoHovered && (
                      <div className="absolute w-20 h-20 rounded-full bg-blue-600 animate-ping opacity-30"></div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <p className="text-white font-semibold">
                      How to Build a Social Media Dashboard
                    </p>
                    <p className="text-gray-200 text-sm flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 w-4 h-4 mr-1" />
                      ))}
                      Latest workshop recording
                    </p>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-3 rounded-xl border border-blue-100 text-center">
                      <div className="text-sm font-medium text-gray-500">
                        Success Rate
                      </div>
                      <div className="font-bold text-blue-600 text-lg">97%</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-white p-3 rounded-xl border border-blue-100 text-center">
                      <div className="text-sm font-medium text-gray-500">
                        Projects
                      </div>
                      <div className="font-bold text-blue-600 text-lg">
                        125+
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-white p-3 rounded-xl border border-blue-100 text-center">
                      <div className="text-sm font-medium text-gray-500">
                        Placement
                      </div>
                      <div className="font-bold text-blue-600 text-lg">89%</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
                    className="group relative block text-center w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-bold transition overflow-hidden shadow-md hover:shadow-lg hover:translate-y-[-2px]"
                  >
                    <span className="absolute right-0 top-0 h-full w-10 bg-white bg-opacity-20 transform -skew-x-15 translate-x-10 group-hover:translate-x-40 transition-transform duration-700"></span>
                    <span className="relative flex items-center justify-center">
                      <FaPlay className="w-5 h-5 mr-2" />
                      Try Free Class Today
                      <svg
                        className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </a>

                  {/* Testimonial addition */}
                  <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 shadow-sm">
                    <div className="flex items-start">
                      <img
                        src="https://randomuser.me/api/portraits/men/42.jpg"
                        alt="Student testimonial"
                        className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-md"
                      />
                      <div>
                        <div className="flex text-yellow-400 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="w-4 h-4 mr-1" />
                          ))}
                        </div>
                        <p className="text-sm text-gray-700 italic font-medium">
                          &quot;He is very interactive and fun and the lessons are worth it.&quot;
                        </p>
                        <p className="text-xs font-semibold text-blue-600 mt-2">
                          - Aaron
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
