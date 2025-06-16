import { Element, Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";

const pythonCurriculum = [
  {
    week: "Days 1-15",
    title: "Beginner Python",
    topics: [
      "Python 3.12 Features & Setup",
      "Variables & Data Types",
      "Control Flow (IF/ELIF/ELSE)",
      "Loops & Randomisation",
      "Functions & Arguments",
      "Lists & Dictionaries",
    ],
    icon: "code",
  },
  {
    week: "Days 16-31",
    title: "Intermediate Python",
    topics: [
      "OOP & Creating Classes",
      "VS Code & GitHub Copilot Integration",
      "Inheritance & Methods",
      "File I/O & CSV Data",
      "Error Handling & Debugging",
      "List & Dictionary Comprehensions",
    ],
    icon: "tool",
  },
  {
    week: "Days 32-58",
    title: "Intermediate+ Python",
    topics: [
      "API Integrations & Requests",
      "Web Scraping with Beautiful Soup",
      "Browser Automation with Selenium",
      "Web Development with Flask",
      "Modern GUI Apps with Tkinter",
      "Python Decorators & WTForms",
    ],
    icon: "cloud",
  },
  {
    week: "Days 59-80",
    title: "Advanced Python & Data Science",
    topics: [
      "FastAPI & RESTful Services",
      "Database Design with SQLite",
      "Pandas & NumPy for Data Analysis",
      "Data Visualization (Matplotlib/Plotly)",
      "Statistical Analysis & Regression",
      "DevOps & Cloud Deployment",
    ],
    icon: "chip",
  },
  {
    week: "Days 81-111",
    title: "Professional Portfolio Projects",
    topics: [
      "Full-Stack Applications",
      "Game Development in Python",
      "Automation Projects",
      "Data Analysis & Machine Learning",
      "Web Applications & APIs",
      "Custom Tool Development",
    ],
    icon: "briefcase",
  },
];

const webDevCurriculum = [
  {
    week: "Week 1-3",
    title: "Modern Frontend Foundations",
    topics: [
      "HTML5 Semantic Elements & SEO",
      "CSS3, Flexbox, Grid & Animations",
      "JavaScript ES6+ & TypeScript",
      "Responsive Design Principles",
      "Web Accessibility (WCAG)",
      "Modern CSS Frameworks",
    ],
    icon: "layout",
  },
  {
    week: "Week 4-7",
    title: "React & UI Development",
    topics: [
      "React 18 Fundamentals",
      "Hooks, Context & Advanced Patterns",
      "State Management (Redux/Zustand)",
      "UI/UX Best Practices",
      "Animation & Micro-interactions",
      "Performance Optimization",
    ],
    icon: "react",
  },
  {
    week: "Week 8-11",
    title: "Full-Stack Integration",
    topics: [
      "Next.js 13+ & App Router",
      "Node.js & Express APIs",
      "Database Design & Integration",
      "Authentication & Authorization",
      "API Security & Best Practices",
      "Payment Integration",
    ],
    icon: "server",
  },
  {
    week: "Week 12-14",
    title: "DevOps & Deployment",
    topics: [
      "Git Workflow & Collaboration",
      "Testing (Unit, Integration, E2E)",
      "CI/CD with GitHub Actions",
      "Cloud Deployment (Vercel/Netlify)",
      "Performance Monitoring",
      "SEO & Web Vitals Optimization",
    ],
    icon: "deploy",
  },
  {
    week: "Week 15-16",
    title: "Professional Development",
    topics: [
      "Portfolio Website Creation",
      "GitHub Profile Optimization",
      "Freelancing Setup",
      "Client Communication",
      "Technical Interview Preparation",
      "Job Application Strategy",
    ],
    icon: "briefcase",
  },
];

// Icons for the curriculum modules
const ModuleIcon = ({ icon }) => {
  switch (icon) {
    case "code":
      return (
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
      );
    case "tool":
      return (
        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      );
    case "cloud":
      return (
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
        </div>
      );
    case "chip":
      return (
        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
        </div>
      );
    case "briefcase":
      return (
        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
          <svg
            className="w-5 h-5"
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
      );
    case "layout":
      return (
        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-4">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            />
          </svg>
        </div>
      );
    case "react":
      return (
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="3" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
      );
    case "server":
      return (
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            />
          </svg>
        </div>
      );
    case "deploy":
      return (
        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </div>
      );
    default:
      return null;
  }
};

const Curriculum = () => {
  const [activeTrack, setActiveTrack] = useState("python");
  const activeCurriculum =
    activeTrack === "python" ? pythonCurriculum : webDevCurriculum;

  return (
    <section id="curriculum" className="py-20 bg-white">
      <Element name="curriculum">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry-Focused Curriculum
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our curriculum is constantly updated with the{" "}
              <span className="text-blue-600 font-medium">
                latest technologies and practices
              </span>{" "}
              to ensure you're job-ready from day one
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center p-1 bg-gray-100 rounded-full shadow-inner">
              <button
                className={clsx(
                  "px-8 py-3 rounded-full font-medium transition-all duration-300",
                  activeTrack === "python"
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                )}
                onClick={() => setActiveTrack("python")}
              >
                Python & AI Track
              </button>
              <button
                className={clsx(
                  "px-8 py-3 rounded-full font-medium transition-all duration-300",
                  activeTrack === "webdev"
                    ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                )}
                onClick={() => setActiveTrack("webdev")}
              >
                Web Development Track
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 ml-5"></div>

              {/* Module cards */}
              <div className="space-y-12">
                {activeCurriculum.map((module, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-10 h-10 rounded-full border-4 border-white bg-blue-600 z-10 flex items-center justify-center text-white font-bold shadow-md">
                      {index + 1}
                    </div>

                    {/* Module card */}
                    <div className="ml-16 p-6 rounded-xl border border-gray-200 bg-white hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                      <ModuleIcon icon={module.icon} />
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <div>
                          <div className="text-blue-600 font-medium text-sm">
                            {module.week}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {module.title}
                          </h3>
                        </div>
                      </div>

                      <div className="mt-4">
                        <ul className="grid md:grid-cols-2 gap-3">
                          {module.topics.map((topic, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-gray-700"
                            >
                              <svg
                                className={`w-5 h-5 ${activeTrack === "python" ? "text-blue-600" : "text-indigo-600"} flex-shrink-0 mt-0.5`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              All courses include{" "}
              <span className="font-semibold">daily live classes</span>,{" "}
              <span className="font-semibold">personalized feedback</span>, and{" "}
              <span className="font-semibold">project-based learning</span> to
              ensure you master these skills
            </p>
            <div className="flex justify-center mt-12">
              <a
                href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300 font-medium text-lg inline-flex items-center cursor-pointer"
                data-inquiry-type="enroll"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                Enroll Now and Transform Your Career
              </a>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Curriculum;
