const projects = [
  {
    title: "Blackjack Capstone Project",
    description:
      "A complete command-line Blackjack game, focusing on Python fundamentals, logic, and functions.",
    category: "python",
    image: "/images/projects/blackjack.png",
    tech: ["Python"],
    duration: "Day 11"
  },
  {
    title: "Python Data Analysis Suite",
    description:
      "A comprehensive data analysis toolkit using Python, Pandas, and Matplotlib to process, analyze, and visualize real-world datasets.",
    category: "python",
    image: "/images/projects/data visualization suite.webp",
    tech: ["Python", "Pandas", "Matplotlib"],
    duration: "Day 70+"
  },
  {
    title: "Arcade Classics: Snake & Pong",
    description:
      "Recreations of the classic Snake and Pong games, built using Python with the Turtle module for graphics and event handling.",
    category: "python",
    image: "/images/projects/pong.png",
    tech: ["Python", "Turtle Graphics"],
    duration: "Day 20"
  },
  {
    title: "Password Manager GUI App",
    description:
      "A desktop application with a graphical user interface (GUI) for generating and saving passwords securely using Tkinter and JSON file storage.",
    category: "python",
    image: "/images/projects/password.png",
    tech: ["Python", "Tkinter", "JSON"],
    duration: "Day 28"
  },
  {
    title: "Flight Deal Finder & Club",
    description:
      "An automated system to find cheap flight deals using flight search APIs and Google Sheets, notifying users via email. Includes functionality for managing a 'flight club' of subscribers.",
    category: "python",
    image: "https://placehold.co/600x400/e2e8f0/475569?text=Flight+Deal+Finder",
    tech: [
      "Python",
      "APIs (Flight Search, Sheety)",
      "smtplib",
      "datetime",
      "JSON",
    ],
    duration: "Day 48"
  },
  {
    title: "Full-Featured Blog Website",
    description:
      "A dynamic blog platform built with Flask, featuring RESTful routing, user authentication (implied by later course sections), CRUD operations for posts, and templating with Jinja.",
    category: "webdev",
    image: "/images/projects/blog.png",
    tech: [
      "Python",
      "Flask",
      "Jinja",
      "SQLAlchemy",
      "WTForms",
      "HTML",
      "CSS",
      "Bootstrap",
      "REST APIs",
    ],
    duration: "Day 69"
  },
  {
    title: "Automated Data Entry Bot",
    description:
      "A web scraping capstone project that automates data entry tasks by extracting information from websites using BeautifulSoup and interacting with web forms using Selenium.",
    category: "python",
    image: "/images/projects/dataentry.jpeg",
    tech: ["Python", "Selenium", "BeautifulSoup"],
    duration: "Day 62"
  },
  {
    title: "Custom REST API (Cafe & Wifi)",
    description:
      "Develop a custom RESTful API using Flask to manage a database of cafes, allowing for GET, POST, PUT/PATCH, and DELETE requests to interact with cafe data.",
    category: "webdev",
    image: "/images/projects/cafe.png",
    tech: ["Python", "Flask", "SQLAlchemy", "Postman (for testing)"],
    duration: "Day 49"
  },
  {
    title: "Flash Card App (Capstone)",
    description:
      "A GUI application built with Tkinter for learning and memorization. Users can view questions, flip cards for answers, and track known cards, with data managed from a CSV file.",
    category: "python",
    image: "/images/projects/flashcard.png",
    tech: ["Python", "Tkinter", "Pandas (for CSV handling)"],
    duration: "Day 32"
  },
  {
    title: "Top 10 Movies Website",
    description:
      "A web application using Flask and SQLAlchemy to create a personalized website showcasing a user's top 10 movies. Features include adding movies, editing ratings/reviews, and deleting entries from a SQLite database.",
    category: "webdev",
    image: "/images/projects/movies.png",
    tech: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "WTForms",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    duration: "Day 67"
  },
  {
    title: "+ 90 More",
    description:
      "These are few of the hand-picked projects, but you are going to build 90 more projects in the course. Including 20 Professional Portfolio Ready Projects to get you hired as soon as possible.",
    category: "python",
    image: "https://placehold.co/600x400/e2e8f0/475569?text=90+More+Projects",
    tech: [
      "Python",
      "Selenium",
      "APIs",
      "Automation",
      "Bots",
    ],
    duration: "90 Days"
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-blue-50 via-white to-indigo-100"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
            Real-World Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
            Build Impressive Projects for Your Portfolio
          </h2>
          <p className="text-xl text-gray-600">
            Gain practical experience by building these real-world projects that
            demonstrate your Python and web development skills to potential
            employers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 border border-blue-100 flex flex-col h-full group hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50/60"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-0 right-0 p-2">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white shadow-md">
                    {project.category === "python" ? "Python" : "Web Dev"}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
