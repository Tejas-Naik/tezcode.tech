import { Element } from "react-scroll";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <Element name="hero">
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in-up">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute left-1/2 -top-4 w-24 h-24 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

              <h1 className="relative text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Master Coding with Expert-Led 
                <span className="relative inline-block px-2">
                  Live Classes
                  <div className="absolute inset-x-0 bottom-0 h-3 bg-blue-200/30 -z-10 transform skew-x-12"></div>
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our intensive bootcamps and transform your career with hands-on projects, live mentoring, and industry-relevant curriculum.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#courses"
                  className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
                >
                  Explore Courses
                </a>
                <a
                  href="#curriculum"
                  className="px-8 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
                >
                  View Curriculum
                </a>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Built</div>
                </div>
              </div>
            </div>
            <div className="relative lg:h-[600px] animate-fade-in-left">
              <img
                src="https://placehold.co/800x600/e2e8f0/475569?text=Coding+Bootcamp+Hero+Image"
                alt="Coding Bootcamp"
                className="w-full h-full object-cover rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-fade-in-up">
                <div className="flex items-center gap-4">
                  <img
                    src="https://placehold.co/80x80/e2e8f0/475569?text=Student"
                    alt="Student"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-600">Full-Stack Developer @ Google</div>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  "TezCode transformed my career. I went from zero coding knowledge to a full-time developer role in 6 months!"
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
