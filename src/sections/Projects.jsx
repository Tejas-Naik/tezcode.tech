import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import ProjectModal from "../components/ProjectModal";
import { trackEvent } from "../../utils/analytics";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    trackEvent("project_view", { project_title: project.title });
  };

  return (
    <section id="projects" className="py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-bold">
            Projects you’ll finish during the week
          </h3>
          <p className="text-lg text-text-muted mt-2">(examples)</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="group relative bg-card p-4 rounded-xl border border-[rgba(255,255,255,0.03)] hover:scale-[1.02] hover:shadow-glow-blue transition-all transform duration-300 cursor-pointer"
              onClick={() => handleProjectClick(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  className="w-full h-40 object-cover"
                  src={project.image || "/projects/flight-deals-thumb.jpg"}
                  alt={project.title}
                />
              </div>
              <h4 className="text-white font-semibold">{project.title}</h4>
              <p className="text-text-muted text-sm mt-1">
                {project.description}
              </p>
              <div className="mt-3 flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-[rgba(37,99,255,0.08)] text-brand-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-white font-semibold">
                View project
              </button>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#pricing"
            className="inline-block px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold shadow hover:scale-[1.02] transition transform"
          >
            Start Trial — $49
          </a>
        </div>
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
