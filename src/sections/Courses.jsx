import { Element } from "react-scroll";

const courses = [
  {
    title: "100 Days of Python",
    description: "Master Python programming through 100 days of practical projects and hands-on coding exercises.",
    duration: "14 weeks",
    level: "Beginner to Advanced",
    projects: 15,
    image: "https://placehold.co/800x600/e2e8f0/475569?text=Python+Course",
    features: [
      "Live coding sessions",
      "Real-world projects",
      "Personal mentorship",
      "Job placement assistance"
    ]
  },
  {
    title: "Full-Stack Web Development",
    description: "Become a professional web developer with our comprehensive full-stack development bootcamp.",
    duration: "16 weeks",
    level: "Beginner Friendly",
    projects: 12,
    image: "https://placehold.co/800x600/e2e8f0/475569?text=Web+Dev+Course",
    features: [
      "Frontend & Backend",
      "Modern frameworks",
      "Database design",
      "Deployment & DevOps"
    ]
  }
];

const Courses = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Element name="courses">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Bootcamp Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your path to becoming a professional developer with our intensive, project-based bootcamps
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white hover:border-blue-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-blue-600">{course.level}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-900 font-semibold">{course.duration}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900">What you'll learn:</h4>
                    <ul className="grid grid-cols-2 gap-3">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
                          <svg
                            className="w-5 h-5 text-blue-600 flex-shrink-0"
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
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <a
                      href="#pricing"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                    >
                      Enroll Now
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
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Courses;
