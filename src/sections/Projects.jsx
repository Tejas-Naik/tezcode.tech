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
    <section id="projects" className="py-20 bg-bg-900 text-white relative">
       {/* Background glow */}
       <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-neon-blue/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-black mb-4">
            Projects you’ll finish <span className="text-transparent bg-clip-text bg-neon-gradient">this week</span>
          </h3>
          <p className="text-lg text-neutral-400 mt-2">No toy apps. These are portfolio-ready.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="group relative glass-card p-4 rounded-xl border border-white/5 hover:border-neon-purple/50 hover:shadow-neon-purple/20 transition-all transform duration-300 cursor-pointer hover:-translate-y-2"
              onClick={() => handleProjectClick(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="rounded-lg overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src={project.image || "/projects/flight-deals-thumb.jpg"}
                  alt={project.title}
                />
              </div>
              <h4 className="text-white font-bold group-hover:text-neon-purple transition-colors">{project.title}</h4>
              <p className="text-neutral-400 text-sm mt-2 line-clamp-2">
                {project.description}
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-neon-blue border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20">
                    <span className="bg-bg-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20">View Details</span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#pricing"
            className="inline-block px-8 py-4 rounded-full bg-white text-bg-900 font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:bg-neutral-100 transition transform hover:scale-105"
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
