import { useState, useEffect } from "react";
import { Element, Link as LinkScroll } from "react-scroll";

// Animation for typing effect
const typeWriter = (text, i, setter) => {
  if (i < text.length) {
    setter(text.substring(0, i + 1));
    setTimeout(() => typeWriter(text, i + 1, setter), 100);
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
    hours: '00',
    minutes: '00',
    seconds: '00'
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
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return countdown;
};

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const countdown = useCountdown();
  const studentCount = 520; // This would ideally come from an API or context

  useEffect(() => {
    typeWriter('Simple', 0, setTypedText);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]} opacity-30"></div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-10 w-12 h-12 rounded-full bg-purple-300 opacity-20 animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-300 opacity-20 animate-float animation-delay-2000"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full bg-green-300 opacity-20 animate-float animation-delay-4000"></div>

      <Element name="hero">
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in-up">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute left-1/2 -top-4 w-24 h-24 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

              <div className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-medium text-indigo-700 bg-indigo-100 border border-indigo-200">
                <div className="flex items-center">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  LIVE Interactive Daily Classes
                </div>
              </div>
              
              <h1 className="relative text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                College Coding Made <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[6px] after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 after:rounded-full">{ typedText }<span className="animate-blink">|</span></span> with {" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  TezCode.Tech
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Struggling with college programming courses? Our <strong>daily live classes</strong> provide the practical skills your college doesn't teach. Build real projects, ask questions in real-time, and start coding confidently.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <img 
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${20 + i}.jpg`}
                      alt="Student"
                    />
                  ))}
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white bg-blue-600 text-white text-xs font-medium">
                    +{studentCount - 5}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  <strong className="text-blue-600">{studentCount}+</strong> students have enrolled in the last 6 months
                </span>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">Perfect for:</h3>
                <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    College Students
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Complete Beginners
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Game Developers
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Freelancers
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <LinkScroll
                  to="courses"
                  className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
                  smooth={true}
                  duration={500}
                >
                  Explore Courses
                </LinkScroll>
                <LinkScroll
                  to="prerequisite-quiz"
                  className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
                  smooth={true}
                  duration={500}
                >
                  Take Quiz
                </LinkScroll>
              </div>

              <div className="mt-12">
                <div className="flex flex-wrap justify-between items-center py-4 px-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-gray-900">Next class starts in:</h4>
                    <p className="text-sm text-gray-500">Python Fundamentals: Variables & Functions</p>
                  </div>
                  <div className="flex items-center gap-2 mt-3 sm:mt-0">
                    <div className="bg-white w-12 h-14 flex flex-col items-center justify-center rounded-lg shadow-sm border border-gray-200">
                      <span className="text-lg font-bold text-gray-900">{countdown.hours}</span>
                      <span className="text-xs text-gray-500">hours</span>
                    </div>
                    <div className="text-gray-400 font-bold">:</div>
                    <div className="bg-white w-12 h-14 flex flex-col items-center justify-center rounded-lg shadow-sm border border-gray-200">
                      <span className="text-lg font-bold text-gray-900">{countdown.minutes}</span>
                      <span className="text-xs text-gray-500">mins</span>
                    </div>
                    <div className="text-gray-400 font-bold">:</div>
                    <div className="bg-white w-12 h-14 flex flex-col items-center justify-center rounded-lg shadow-sm border border-gray-200">
                      <span className="text-lg font-bold text-gray-900">{countdown.seconds}</span>
                      <span className="text-xs text-gray-500">secs</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl shadow-sm border border-blue-100">
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full p-2 bg-blue-100">
                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">LIVE</h4>
                        <p className="text-sm text-gray-600">Daily Classes</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-white p-4 rounded-xl shadow-sm border border-indigo-100">
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full p-2 bg-indigo-100">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">5x</h4>
                        <p className="text-sm text-gray-600">Weekly Sessions</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-xl shadow-sm border border-purple-100">
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full p-2 bg-purple-100">
                        <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">24/7</h4>
                        <p className="text-sm text-gray-600">Discord Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:block animate-fade-in">
              <div className="relative z-20">
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                
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
                  <div className="relative rounded-lg overflow-hidden mb-4 group cursor-pointer">
                    <img
                      src="https://images.unsplash.com/photo-1613329671121-5d1cf551cc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt="Students learning to code at TezCode.Tech"
                      className="rounded-lg w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <p className="text-white font-semibold">How to Build a Social Media Dashboard</p>
                      <p className="text-gray-200 text-sm">Latest live workshop recording</p>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-gradient-to-br from-gray-50 to-white p-3 rounded-xl border border-gray-100 text-center">
                      <div className="text-sm font-medium text-gray-500">Success Rate</div>
                      <div className="font-bold text-blue-600 text-lg">97%</div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-white p-3 rounded-xl border border-gray-100 text-center">
                      <div className="text-sm font-medium text-gray-500">Projects</div>
                      <div className="font-bold text-blue-600 text-lg">125+</div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-white p-3 rounded-xl border border-gray-100 text-center">
                      <div className="text-sm font-medium text-gray-500">Placement</div>
                      <div className="font-bold text-blue-600 text-lg">89%</div>
                    </div>
                  </div>
                  
                  {/* Companies grid */}
                  <div className="mb-5">
                    <p className="text-xs font-medium text-gray-500 mb-2 text-center">OUR STUDENTS WORK AT</p>
                    <div className="grid grid-cols-4 gap-3">
                      {['Google', 'Microsoft', 'Amazon', 'Meta'].map((company, i) => (
                        <div key={i} className="bg-gray-50 p-2 rounded-lg text-center">
                          <p className="text-xs font-semibold text-gray-700">{company}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <a 
                    href="#free-trial" 
                    className="group relative block text-center w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg font-medium transition overflow-hidden shadow-md"
                  >
                    <span className="absolute right-0 top-0 h-full w-10 bg-white bg-opacity-20 transform -skew-x-15 translate-x-10 group-hover:translate-x-40 transition-transform duration-700"></span>
                    Try Free Class Today
                  </a>
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
