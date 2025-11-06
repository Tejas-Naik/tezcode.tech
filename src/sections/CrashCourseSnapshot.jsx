import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlusIcon,
  MinusIcon,
  LockClosedIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/solid";
import { crashCourseSnapshot } from "../constants";

const CrashCourseSnapshot = () => {
  const [openIndex, setOpenIndex] = useState(0); // Keep the first item open by default
  const id = useId();

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="curriculum" className="py-20 bg-black text-white">
      <div
        className="container mx-auto px-6"
        style={{ backgroundColor: "var(--bg-900)" }}
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-3xl md:text-4xl font-bold">
            What you’ll do in 7 days
          </h3>
          <p className="text-lg text-text-muted mt-2">
            (Crash Course highlights)
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="border border-[rgba(255,255,255,0.03)] rounded-2xl">
            {crashCourseSnapshot.map((item, index) => (
              <div
                key={item.day}
                className={`border-b border-gray-700 ${index === crashCourseSnapshot.length - 1 ? "border-b-0" : ""}`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                  aria-expanded={openIndex === index}
                  aria-controls={`${id}-content-${index}`}
                >
                  <div className="flex items-center gap-3">
                    {item.isProject && (
                      <CubeTransparentIcon className="w-6 h-6 text-brand-500 flex-shrink-0" />
                    )}
                    <span className="text-lg font-semibold text-white">
                      {item.day} — {item.topic}
                    </span>
                    {item.status === "locked" && (
                      <LockClosedIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <MinusIcon className="w-6 h-6 text-brand-500" />
                    ) : (
                      <PlusIcon className="w-6 h-6 text-gray-500" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                      id={`${id}-content-${index}`}
                    >
                      <div className="px-6 pb-6 text-text-muted">
                        <ul className="space-y-2 mb-4">
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <span className="text-brand-500 mr-2 mt-1 flex-shrink-0">
                                {detail.startsWith("Build:") ? "🔨" : "•"}
                              </span>
                              <span
                                className={
                                  detail.startsWith("Build:")
                                    ? "font-semibold text-gray-200"
                                    : ""
                                }
                              >
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center justify-between text-sm border-t border-white/10 pt-4">
                          <div className="flex items-center gap-2">
                            {item.tags &&
                              item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="bg-[rgba(255,255,255,0.05)] text-text-muted px-2 py-1 rounded-md text-xs font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                          </div>
                          <span className="text-gray-500">{item.duration}</span>
                        </div>
                      </div>
                      {item.status === "locked" && (
                        <p className="px-6 pb-6 text-accent-500 font-medium">
                          Enroll in the Crash Course to unlock full details!
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-text-muted mb-6">
            Each day is a 60–90 minute live session with code walkthrough, Q&A,
            and homework.
          </p>
          <a
            href="#pricing"
            className="inline-block px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold shadow hover:scale-[1.02] transition transform"
          >
            Start 7-Day Crash Course — $49
          </a>
        </div>
      </div>
    </section>
  );
};

export default CrashCourseSnapshot;
