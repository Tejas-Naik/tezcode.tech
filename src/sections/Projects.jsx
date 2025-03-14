import { useState } from "react";
import { Element } from "react-scroll";

const projects = [
  {
    title: "Ecommerce Platform",
    description: "A full-stack online store with payment processing, user accounts, and inventory management.",
    category: "python",
    image: "https://placehold.co/600x400/e2e8f0/475569?text=Ecommerce+Platform",
    tech: ["Python", "Django", "PostgreSQL", "React", "Stripe"]
  },
  {
    title: "2D Games (Snake and Pong)",
    description: "Interactive classic arcade games built with Python and modern game development libraries.",
    category: "python",
    image: "https://placehold.co/600x400/e2e8f0/475569?text=2D+Games",
    tech: ["Python", "Pygame", "Tkinter", "Numpy"]
  },
  {
    title: "Blog Website",
    description: "Fully-featured blog with admin panel, content management system, and responsive design.",
    category: "webdev",
    image: "https://placehold.co/600x400/e2e8f0/475569?text=Blog+Website",
    tech: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Data Entry Automation",
    description: "Build scripts to automate repetitive data tasks using modern Python libraries and tools.",
    category: "python",
    image: "https://placehold.co/600x400/e2e8f0/475569?text=Data+Automation",
    tech: ["Python", "Pandas", "Selenium", "BeautifulSoup"]
  },
  {
    title: "Data Visualization with Data Science Libraries",
    description: "Create interactive dashboards using pandas, matplotlib, seaborn and other modern visualization tools.",
    category: "python",
    image: "https://placehold.co/600x400/e2e8f0/475569?text=Data+Visualization",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly"]
  },
  {
    title: "Personal Portfolio Website",
    description: "Design and develop your own professional portfolio website to showcase your skills and projects.",
    category: "webdev",
    image: "https://placehold.co/600x400/e2e8f0/475569?text=Portfolio+Website",
    tech: ["HTML", "CSS", "JavaScript", "React"]
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Real-World Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
            Build Impressive Projects for Your Portfolio
          </h2>
          <p className="text-xl text-gray-600">
            Gain practical experience by building these real-world projects that demonstrate your Python and web development skills to potential employers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-indigo-100 flex flex-col h-full group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-0 right-0 p-2">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white">
                    {project.category === "python" ? "Python" : "Web Dev"}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg font-medium transition-colors duration-200"
                >
                  <span>View Project</span>
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
