import { Element, Link as LinkScroll } from "react-scroll";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]} opacity-30"></div>
      </div>

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
              
              <h1 className="relative text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                College Coding Made <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Simple</span> with {" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  TezCode.Tech
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Struggling with college programming courses? Our <strong>daily live classes</strong> provide the practical skills your college doesn't teach. Build real projects, ask questions in real-time, and start coding confidently.
              </p>
              
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

              <div className="mt-12 flex items-center gap-6 flex-wrap">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-2xl font-bold text-blue-600">LIVE</h4>
                  <p className="text-gray-600">Daily Classes</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-2xl font-bold text-blue-600">5x</h4>
                  <p className="text-gray-600">Weekly Sessions</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-2xl font-bold text-blue-600">24/7</h4>
                  <p className="text-gray-600">Discord Support</p>
                </div>
              </div>
            </div>

            <div className="relative lg:block animate-fade-in">
              <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-sm font-bold py-1.5 px-4 rounded-full">LIVE Classes</div>
                <img
                  src="/hero-image.jpg"
                  alt="Students learning to code at TezCode.Tech"
                  className="rounded-lg w-full mb-4"
                />
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="bg-gray-50 p-2 rounded text-center">
                    <div className="text-sm font-medium text-gray-500">Next Class</div>
                    <div className="font-bold text-gray-900">TODAY</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded text-center">
                    <div className="text-sm font-medium text-gray-500">Projects</div>
                    <div className="font-bold text-gray-900">100+</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded text-center">
                    <div className="text-sm font-medium text-gray-500">Free Trial</div>
                    <div className="font-bold text-green-600">Available</div>
                  </div>
                </div>
                <a href="#free-trial" className="block text-center w-full py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition">
                  Try Free Class
                </a>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
