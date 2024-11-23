import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";

const pythonCurriculum = [
  {
    week: "Week 1-2",
    title: "Python Fundamentals",
    topics: [
      "Variables & Data Types",
      "Control Flow & Loops",
      "Functions & Methods",
      "Lists, Tuples & Dictionaries",
      "Object-Oriented Programming",
      "Error Handling"
    ]
  },
  {
    week: "Week 3-4",
    title: "Intermediate Python",
    topics: [
      "File Handling & JSON",
      "Regular Expressions",
      "Decorators & Generators",
      "Working with APIs",
      "Virtual Environments",
      "Package Management"
    ]
  },
  {
    week: "Week 5-8",
    title: "Web Development",
    topics: [
      "HTML & CSS Basics",
      "Flask Framework",
      "Django Framework",
      "Database Integration",
      "RESTful APIs",
      "Authentication & Security"
    ]
  },
  {
    week: "Week 9-12",
    title: "Data Science & AI",
    topics: [
      "NumPy & Pandas",
      "Data Visualization",
      "Machine Learning Basics",
      "Scikit-learn",
      "Natural Language Processing",
      "Computer Vision"
    ]
  }
];

const webDevCurriculum = [
  {
    week: "Week 1-4",
    title: "Frontend Fundamentals",
    topics: [
      "HTML5 & Semantic Markup",
      "CSS3 & Flexbox/Grid",
      "JavaScript ES6+",
      "DOM Manipulation",
      "Responsive Design",
      "Web Accessibility"
    ]
  },
  {
    week: "Week 5-8",
    title: "Frontend Frameworks",
    topics: [
      "React.js Fundamentals",
      "Components & Props",
      "State Management",
      "Hooks & Context",
      "Next.js",
      "Performance Optimization"
    ]
  },
  {
    week: "Week 9-12",
    title: "Backend Development",
    topics: [
      "Node.js & Express",
      "RESTful API Design",
      "Database Design",
      "MongoDB & Mongoose",
      "Authentication & JWT",
      "API Security"
    ]
  },
  {
    week: "Week 13-16",
    title: "Advanced Concepts",
    topics: [
      "TypeScript",
      "Testing & TDD",
      "CI/CD Pipeline",
      "Cloud Deployment",
      "Performance Monitoring",
      "Microservices"
    ]
  }
];

const Curriculum = () => {
  const [activeTrack, setActiveTrack] = useState("python");

  return (
    <section className="py-20 bg-white">
      <Element name="curriculum">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our carefully structured curriculum ensures you learn everything needed to become a professional developer
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center p-1 bg-gray-100 rounded-full">
              <button
                className={clsx(
                  "px-6 py-2 rounded-full transition-all duration-300",
                  activeTrack === "python" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"
                )}
                onClick={() => setActiveTrack("python")}
              >
                Python Track
              </button>
              <button
                className={clsx(
                  "px-6 py-2 rounded-full transition-all duration-300",
                  activeTrack === "webdev" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"
                )}
                onClick={() => setActiveTrack("webdev")}
              >
                Web Development Track
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activeTrack === "python" ? pythonCurriculum : webDevCurriculum).map((module, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-blue-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 font-medium mb-2">{module.week}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{module.title}</h3>
                <ul className="space-y-3">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
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
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
            >
              Start Learning
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Curriculum;
