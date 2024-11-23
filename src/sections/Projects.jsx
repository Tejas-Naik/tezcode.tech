import { Element } from "react-scroll";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    category: "python",
    image: "https://placehold.co/600x400/e2e8f0/475569?text=E-Commerce+Project",
    tech: ["Python", "Django", "PostgreSQL", "React", "Stripe"]
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time social media analytics dashboard with data visualization and reporting features.",
    category: "webdev",
    image: "https://placehold.co/600x400/e2e8f0/475569?text=Dashboard+Project",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "D3.js"]
  },
  {
    title: "AI Image Generator",
    description: "Machine learning application that generates unique images based on text descriptions.",
    category: "python",
    image: "https://placehold.co/600x400/e2e8f0/475569?text=AI+Project",
    tech: ["Python", "TensorFlow", "Flask", "OpenAI API"]
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features.",
    category: "webdev",
    image: "https://placehold.co/600x400/e2e8f0/475569?text=Task+App+Project",
    tech: ["React", "Firebase", "Material-UI", "Redux"]
  },
  {
    title: "Data Analysis Tool",
    description: "Advanced data analysis tool with interactive visualizations and report generation.",
    category: "python",
    image: "https://placehold.co/600x400/e2e8f0/475569?text=Data+Analysis+Project",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management platform with virtual tour capabilities.",
    category: "webdev",
    image: "https://placehold.co/600x400/e2e8f0/475569?text=Real+Estate+Project",
    tech: ["React", "Next.js", "Prisma", "PostgreSQL"]
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Element name="projects">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-World Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build impressive portfolio projects that showcase your skills to potential employers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white hover:border-blue-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === 'python' ? 'bg-blue-600' : 'bg-green-600'
                    } text-white`}>
                      {project.category === 'python' ? 'Python' : 'Web Dev'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-full transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:bg-blue-700">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
            >
              Start Building
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

export default Projects;
