import { Element, Link as ScrollLink } from "react-scroll";

const pythonFeatures = [
  {
    title: "Technology Stack",
    points: [
      "Latest Python 3.12 features",
      "Modern dev environments (VS Code, GitHub Copilot)",
      "Advanced frameworks (FastAPI, Django)",
      "Data science libraries (Pandas, NumPy, Matplotlib)"
    ]
  },
  {
    title: "Projects You'll Build",
    points: [
      "Text-based and GUI games",
      "Data visualization dashboards",
      "AI/ML applications",
      "Web applications with Flask/Django",
      "Automation scripts for real-world tasks"
    ]
  },
  {
    title: "Career Opportunities",
    points: [
      "Software Developer",
      "Data Analyst/Scientist",
      "Backend Developer",
      "AI/ML Engineer",
      "Automation Engineer"
    ]
  },
  {
    title: "Learning Path",
    points: [
      "Fundamentals to advanced concepts",
      "Project-based learning",
      "Real-world applications",
      "Cloud & DevOps integration",
      "Portfolio development"
    ]
  }
];

const webDevFeatures = [
  {
    title: "Technology Stack",
    points: [
      "HTML5, CSS3 & JavaScript ES6+",
      "React.js & Next.js",
      "Node.js & Express",
      "MongoDB & SQL databases",
      "Modern tools (Git, GitHub, VSCode)"
    ]
  },
  {
    title: "Projects You'll Build",
    points: [
      "Responsive websites",
      "Interactive web applications",
      "E-commerce platforms",
      "API development",
      "Full-stack applications"
    ]
  },
  {
    title: "Career Opportunities",
    points: [
      "Frontend Developer",
      "Full-Stack Developer",
      "UI/UX Developer",
      "JavaScript Engineer",
      "Freelance Web Developer"
    ]
  },
  {
    title: "Learning Path",
    points: [
      "Frontend to backend development",
      "Modern UI/UX practices",
      "Industry-standard workflows",
      "Deployment & hosting",
      "Portfolio website creation"
    ]
  }
];

const CourseComparison = () => {
  return (
    <Element name="course-comparison">
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Comparison</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Not sure which course to choose? Compare our offerings to find the perfect fit for your goals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Python Course */}
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-blue-600 py-6 px-8 text-white">
                <h3 className="text-2xl font-bold">100 Days of Python</h3>
                <p className="opacity-90 mt-1">From beginner to professional Python developer</p>
              </div>
              
              <div className="p-8">
                <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-100">
                  <div className="flex items-center mb-2">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <h4 className="font-bold text-blue-900">Perfect for students struggling with college Python courses</h4>
                  </div>
                  <p className="text-blue-800 ml-11">Reinforce concepts with practical applications and real-time help</p>
                </div>
                
                <div className="space-y-6">
                  {pythonFeatures.map((feature, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                      <ul className="space-y-2">
                        {feature.points.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <ScrollLink 
                    to="contact" 
                    smooth={true}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-300 shadow-lg cursor-pointer"
                    data-inquiry-type="enroll"
                  >
                    Enroll in Python Course
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </ScrollLink>
                </div>
              </div>
            </div>
            
            {/* Web Dev Course */}
            <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-indigo-600 py-6 px-8 text-white">
                <h3 className="text-2xl font-bold">Web Development Bootcamp</h3>
                <p className="opacity-90 mt-1">Master frontend and backend web development</p>
              </div>
              
              <div className="p-8">
                <div className="bg-indigo-50 rounded-xl p-4 mb-6 border border-indigo-100">
                  <div className="flex items-center mb-2">
                    <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <h4 className="font-bold text-indigo-900">Build websites, web apps, and online businesses</h4>
                  </div>
                  <p className="text-indigo-800 ml-11">Learn to create professional websites that generate income</p>
                </div>
                
                <div className="space-y-6">
                  {webDevFeatures.map((feature, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                      <ul className="space-y-2">
                        {feature.points.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-indigo-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <ScrollLink 
                    to="contact" 
                    smooth={true}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-300 shadow-lg cursor-pointer"
                    data-inquiry-type="enroll"
                  >
                    Enroll in Web Dev Course
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Not Sure Which Course to Choose?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Take our short quiz above to get a personalized recommendation based on your goals and experience level.
            </p>
            <a 
              href="#prerequisite-quiz" 
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-900 transition-colors duration-300"
            >
              Take the Quiz
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default CourseComparison;
