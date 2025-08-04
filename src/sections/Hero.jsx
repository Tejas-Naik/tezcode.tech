import { useState, useEffect, useRef } from "react";
import { Element, Link as LinkScroll } from "react-scroll";

// Animation for typing effect with multiple phrases
// Using shorter phrases to prevent layout shifts
const phrases = ["Easy", "Fun", "Fast", "Pro"];
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
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    typeWriter(phrases, 0, 0, setTypedText, false);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white opacity-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]} opacity-10"></div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-10 w-12 h-12 rounded-full bg-indigo-100 opacity-20 animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-100 opacity-20 animate-float animation-delay-2000"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full bg-indigo-100 opacity-20 animate-float animation-delay-4000"></div>

      <Element name="hero">
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in-up">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute left-1/2 -top-4 w-24 h-24 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

              <div className="inline-flex px-4 py-1.5 mb-6 rounded-full text-sm font-medium text-indigo-700 bg-indigo-100 border border-indigo-200 items-center animate-fade-in-up animation-delay-200 hover:bg-indigo-200 transition-colors duration-300 shadow-sm">
                <div className="flex items-center">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  <span>LIVE Python Programming Classes</span>
                  <div className="ml-3 border-l border-indigo-200 pl-3">
                    <span className="text-xs font-normal">Next class in</span>
                    <span className="ml-1 font-semibold">{`${countdown.hours}:${countdown.minutes}:${countdown.seconds}`}</span>
                  </div>
                </div>
              </div>

              <h1 className="relative text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up animation-delay-400">
                College Coding Made{" "}
                <span className="inline-block min-w-[70px] bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[6px] after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 after:rounded-full">
                  {typedText}
                  <span className="animate-blink">|</span>
                </span>{" "}
                with{" "}
                <span className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  TezCode.Tech
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2 text-blue-600"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,0 Q50,12 100,0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 animate-fade-in-up animation-delay-600 leading-relaxed">
                Struggling with college programming courses? Our{" "}
                <strong className="text-blue-700 font-semibold">
                  daily live classes
                </strong>{" "}
                provide the practical skills your college doesn't teach. Build
                real projects, ask questions in real-time, and start coding
                confidently.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up animation-delay-800">
                <a
                  href="#prerequisite-quiz"
                  className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Stop Failing Python Now
                </a>
                <a
                  href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded-full border-2 border-blue-200 text-blue-700 font-semibold text-lg bg-white hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 shadow-md flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule 1:1 Call
                </a>
              </div>

              {/* Added badges for key benefits */}
              <div className="flex flex-wrap gap-2 mb-8 animate-fade-in-up animation-delay-800">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  <svg
                    className="w-4 h-4 mr-1"
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
                  Project-Based Learning
                </span>
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  <svg
                    className="w-4 h-4 mr-1"
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
                  Live Mentorship
                </span>
                <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
                  <svg
                    className="w-4 h-4 mr-1"
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
                  Career Guidance
                </span>
                <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Flexible Schedule
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${20 + i}.jpg`}
                      alt="Student"
                    />
                  ))}
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white bg-blue-600 text-white text-xs font-medium">
                    +{studentCount - 5}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  <strong className="text-blue-600">{studentCount}+</strong>{" "}
                  students have enrolled in the last 6 months
                </span>
              </div>

              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Perfect for:
                </h3>
                <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    College Students
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Complete Beginners
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Game Developers
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Freelancers
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <LinkScroll
                  to="courses"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-md flex items-center animate-fade-in-up animation-delay-1000"
                  smooth={true}
                  duration={500}
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </LinkScroll>
                <LinkScroll
                  to="prerequisite-quiz"
                  className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 flex items-center animate-fade-in-up animation-delay-1200 shadow-sm"
                  smooth={true}
                  duration={500}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Take Quiz</span>
                </LinkScroll>
              </div>

              <div className="mt-12">
                <div className="flex flex-wrap justify-between items-center py-4 px-6 bg-gradient-to-t from-indigo-50 to-white rounded-xl border border-indigo-200 shadow-sm">
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Next class starts in:
                    </h4>
                    <p className="text-sm text-gray-500">
                      Python 3.12: Modern Features & Development Environments
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

            <div className="relative lg:block animate-fade-in">
              <div className="relative z-20">
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

                {/* Main content card */}
                <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  {/* Live badge with animated dot */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg flex items-center">
                    <span className="relative flex h-3 w-3 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    LIVE Classes
                  </div>

                  {/* Video preview with play button overlay */}
                  <div
                    className="relative rounded-lg overflow-hidden mb-4 group cursor-pointer"
                    onMouseEnter={() => setIsVideoHovered(true)}
                    onMouseLeave={() => setIsVideoHovered(false)}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1613329671121-5d1cf551cc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt="Students learning to code at TezCode.Tech"
                      className={`rounded-lg w-full object-cover aspect-video transition-transform duration-500 ${isVideoHovered ? "scale-105" : "scale-100"}`}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                      <div
                        className={`w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center shadow-lg transition-all duration-500 ${isVideoHovered ? "scale-110 bg-indigo-600" : "scale-100"}`}
                      >
                        <svg
                          className={`w-8 h-8 ml-1 transition-colors duration-500 ${isVideoHovered ? "text-white" : "text-blue-600"}`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Animated ripple effect */}
                    {isVideoHovered && (
                      <div className="absolute inset-0 pointer-events-none">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex rounded-full h-24 w-24 bg-indigo-400 opacity-75 animate-ping"></span>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <p className="text-white font-semibold">
                        How to Build a Social Media Dashboard
                      </p>
                      <p className="text-gray-200 text-sm flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-500 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-500 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-500 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-500 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-500 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                        </svg>
                        Latest workshop recording
                      </p>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-gradient-to-br from-gray-50 to-white p-3 rounded-xl border border-gray-100 text-center">
                      <div className="text-sm font-medium text-gray-500">
                        Success Rate
                      </div>
                      <div className="font-bold text-blue-600 text-lg">97%</div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-white p-3 rounded-xl border border-gray-100 text-center">
                      <div className="text-sm font-medium text-gray-500">
                        Projects
                      </div>
                      <div className="font-bold text-blue-600 text-lg">
                        125+
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-white p-3 rounded-xl border border-gray-100 text-center">
                      <div className="text-sm font-medium text-gray-500">
                        Placement
                      </div>
                      <div className="font-bold text-blue-600 text-lg">89%</div>
                    </div>
                  </div>

                  
                  {/* CTA Button */}
                  <a
                    href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
                    className="group relative block text-center w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg font-medium transition overflow-hidden shadow-md"
                  >
                    <span className="absolute right-0 top-0 h-full w-10 bg-white bg-opacity-20 transform -skew-x-15 translate-x-10 group-hover:translate-x-40 transition-transform duration-700"></span>
                    <span className="relative flex items-center justify-center">
                      <svg
                        className="w-5 h-5 mr-2"
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
                  <div className="mt-4 bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-3 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://randomuser.me/api/portraits/men/42.jpg"
                        alt="Student testimonial"
                        className="w-10 h-10 rounded-full border-2 border-indigo-100"
                      />
                      <div>
                        <div className="flex text-yellow-400 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-xs text-gray-700 italic">
                          "He is very interactive and fun and the lessons are worth it."
                        </p>
                        <p className="text-xs font-semibold text-indigo-800 mt-1">
                          - Aaron
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
