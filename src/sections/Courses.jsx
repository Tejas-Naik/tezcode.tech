import { useState, useEffect } from "react";
// Removed: import { Element, Link as ScrollLink } from "react-scroll";

// Course instructor data
const instructors = [
  {
    name: "Tejas Naik",
    role: "Lead Python Instructor & Founder",
    experience: "5+ years teaching experience",
    credentials:
      "Computer Science graduate, Python expert with modern stack knowledge including FastAPI, Django, AI/ML and DevOps",
    image: "/images/tejas.jpg", // Placeholder, ideally use a professional photo
    social: {
      linkedin: "#", // Replace with actual links
      github: "#", // Replace with actual links
      twitter: "#", // Replace with actual links
    },
  },
];

const courses = [
  {
    title: "100 Days of Python",
    description:
      "Master Python 3.12 with our comprehensive program covering the latest features, modern development environments, Game Development, Web Development and Python specific best practices, Data Visualization integration, and career preparation. Build impressive projects while learning industry best practices.",
    duration: "14 weeks",
    level: "Beginner to Advanced",
    projects: 100,
    studentsHelped: 326,
    image: "/images/Course/python.png",
    badgeText: "Most Popular",
    status: "open", // Added status
    techStack: [
      "Latest Python 3.12 features",
      "PyCharm & GitHub Copilot",
      "Selenium Web Driver",
      "Web Development",
      "Game Development",
      "APIs",
      "Automation"
    ],
    features: [
      "Daily LIVE coding sessions",
      "100 real-world projects",
      "Personal mentorship",
      "WhatsApp & Discord community",
    ],
    courseHighlight:
      "Perfect for college students struggling with Python courses and assignments.",
    bgColor: "bg-blue-600",
    borderColor: "border-blue-100",
    hoverBorderColor: "hover:border-blue-500",
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Become a professional web developer through daily live classes covering frontend, backend, and deployment.",
    duration: "16 weeks",
    level: "Beginner Friendly",
    projects: 50,
    studentsHelped: 184,
    image: "https://placehold.co/800x600/e2e8f0/475569?text=Web+Dev+Course",
    badgeText: "High Demand",
    status: "open", // Added status: closed for this course
    techStack: [
      "HTML5, CSS3 & JavaScript ES6+",
      "React.js & Next.js",
      "Node.js & Express",
      "MongoDB & SQL databases",
      "CI/CD & cloud deployment",
    ],
    features: [
      "Daily LIVE interactive classes",
      "Build 10+ complete websites",
      "Real-world client projects",
      "WhatsApp & Discord community",
    ],
    courseHighlight:
      "Create websites and web apps that can generate income through freelancing.",
    bgColor: "bg-indigo-600",
    borderColor: "border-indigo-100",
    hoverBorderColor: "hover:border-indigo-500",
  },
];

const TechBadge = ({ technology }) => (
  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2 mb-2 flex-shrink-0">
    {technology}
  </span>
);

const Courses = () => {
  const [freeTrialEmail, setFreeTrialEmail] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleFreeTrialSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this to your backend
    console.log("Free trial requested for:", freeTrialEmail);
    setShowThankYou(true);
    setFreeTrialEmail("");
    // Reset after 5 seconds
    setTimeout(() => setShowThankYou(false), 5000);
  };

  // State for filtering courses
  const [activeTab, setActiveTab] = useState("all");
  const [filteredCourses, setFilteredCourses] = useState(courses);

  // Filter courses based on active tab
  useEffect(() => {
    let currentFiltered = courses;

    if (activeTab === "python") {
      currentFiltered = courses.filter((course) =>
        course.title.includes("Python")
      );
    } else if (activeTab === "web") {
      currentFiltered = courses.filter((course) =>
        course.title.includes("Web")
      );
    } else if (activeTab === "beginner") {
      currentFiltered = courses.filter((course) =>
        course.level.includes("Beginner")
      );
    }
    // Prioritize showing open courses first if "all" is selected, or if any filter
    // ensures the "closed" course appears at the end or is visually distinct.
    // For simplicity, we'll let the visual graying handle it.
    setFilteredCourses(currentFiltered);
  }, [activeTab]);

  return (
    <section id="courses" className="py-20 bg-gray-50">
      {/* Replaced Element with a div */}
      <div id="courses" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Learn Modern{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Technology Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our daily{" "}
            <span className="font-bold text-blue-600">
              LIVE interactive classes
            </span>{" "}
            teach you in-demand skills through hands-on projects with
            personalized feedback.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              // Conditional styling for closed courses
              className={`group relative overflow-hidden rounded-3xl border ${course.borderColor} bg-white ${course.hoverBorderColor} hover:shadow-xl transition-all duration-300
              ${course.status === "closed" ? "opacity-50 grayscale pointer-events-none cursor-not-allowed" : ""}`}
            >
              {/* Course Badge (e.g., Most Popular, High Demand) */}
              <div
                className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-white ${course.bgColor}`}
              >
                {course.badgeText}
              </div>

              {/* Admissions Closed Badge (Conditional) */}
              {course.status === "closed" && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-red-600 text-white text-lg font-bold px-4 py-2 rounded-lg rotate-[-15deg] shadow-lg border-2 border-red-800">
                  Admissions Closed
                </div>
              )}

              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-sm uppercase tracking-wider mb-1 opacity-90">
                      LIVE Daily Classes
                    </p>
                    <h3 className="text-2xl font-bold">{course.title}</h3>
                  </div>
                </div>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-blue-600 flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {course.level}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {course.projects}+
                      </div>
                      <p className="text-xs text-gray-600">Projects</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {course.duration}
                      </div>
                      <p className="text-xs text-gray-600">Duration</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl mb-6 border border-gray-100">
                  <p className="font-medium text-gray-900">
                    {course.courseHighlight}
                  </p>
                </div>

                <p className="text-gray-600 mb-6">{course.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Technologies You'll Learn
                  </h4>
                  <div className="flex flex-wrap">
                    {course.techStack.map((tech, i) => (
                      <TechBadge key={i} technology={tech} />
                    ))}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <h4 className="text-lg font-semibold text-gray-900">
                    What you'll get:
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                    {course.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <svg
                          className={`w-5 h-5 ${index === 0 ? "text-blue-600" : "text-indigo-600"} flex-shrink-0 mt-0.5`}
                          fill="currentColor"
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
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  {course.status === "open" ? (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="#pricing"
                        className={`flex-1 text-center items-center justify-center gap-2 px-6 py-3 rounded-xl ${index === 0 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-indigo-600 hover:bg-indigo-700'} text-white font-medium transition-colors duration-300`}
                      >
                        View Pricing
                      </a>
                      <a
                        href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-300"
                      >
                        Schedule Free Consultation
                      </a>
                    </div>
                  ) : (
                    <button
                      className="inline-flex items-center px-6 py-3 bg-gray-400 text-gray-800 rounded-lg cursor-not-allowed font-semibold text-lg"
                      disabled
                    >
                      Admissions Closed
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Meet Our Instructors Section */}
        <div className="mt-24 mb-12">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold mb-4">
              Expert Guidance
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Your Instructor
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from an industry professional with years of teaching and
              modern development experience.
            </p>
          </div>

          <div className="flex justify-center">
            {instructors.map((instructor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-indigo-200 group hover:shadow-xl hover:border-indigo-300 transition-all duration-300 max-w-sm w-full"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            {instructor.name}
                          </h3>
                          <p className="text-gray-200 text-lg">
                            {instructor.role}
                          </p>
                        </div>
                        <div className="flex gap-3">
                          {Object.keys(instructor.social).map((platform) => (
                            <a
                              key={platform}
                              href={instructor.social[platform]}
                              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-all"
                              aria-label={`${instructor.name}'s ${platform}`}
                              target="_blank" // Open social links in new tab
                              rel="noopener noreferrer"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                {platform === "linkedin" && (
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59z"
                                    clipRule="evenodd"
                                  />
                                )}
                                {platform === "github" && (
                                  <path
                                    fillRule="evenodd"
                                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                    clipRule="evenodd"
                                  />
                                )}
                                {platform === "twitter" && (
                                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.615 11.615 0 006.29 1.84" />
                                )}
                              </svg>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-700 font-medium">
                      {instructor.experience}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{instructor.credentials}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      Python Expert
                    </span>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      AI/ML & Modern Development
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            <span className="font-semibold">Start Your Journey Today!</span> Choose between our flexible monthly plan or save 25% with our full course package.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View Pricing Plans
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
