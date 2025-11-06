import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import FocusTrap from "focus-trap-react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <FocusTrap focusTrapOptions={{ initialFocus: false }}>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-card text-white rounded-2xl max-w-3xl w-full overflow-hidden relative border border-[rgba(255,255,255,0.03)] shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-title"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors z-10"
                aria-label="Close project details"
              >
                <XMarkIcon className="w-8 h-8" />
              </button>

              <div className="aspect-video bg-black">
                <img
                  src={
                    project.image ||
                    `https://placehold.co/1280x720/0B0E1C/2563FF?text=${project.title.replace(" ", "+")}`
                  }
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-8">
                <h3
                  id="project-title"
                  className="text-2xl font-bold text-white mb-2"
                >
                  {project.title}
                </h3>
                <p className="text-brand-500 font-medium">
                  {project.description}
                </p>
                {/* You can add more project details here */}
              </div>
            </motion.div>
          </FocusTrap>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
