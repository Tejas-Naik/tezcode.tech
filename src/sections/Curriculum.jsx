import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon, CommandLineIcon, BeakerIcon, RocketLaunchIcon, SparklesIcon } from "@heroicons/react/24/outline";

const crashCourseCurriculum = [
  {
    day: "Day 1: Python Fundamentals",
    title: "Mastering the Basics",
    description: "Setting up your professional development environment and mastering Python's core syntax for building robust applications.",
    topics: [
      "Python 3.12 Features & Setup",
      "Variables & Data Types",
      "Control Flow (IF/ELIF/ELSE)",
      "Loops & Randomisation",
    ],
    project: "Project 1: Automated Mad Libs Generator",
    icon: CodeBracketIcon,
  },
  {
    day: "Day 2: Data Structures",
    title: "Organizing and Storing Data",
    description: "Learn how to work with complex data structures, a crucial skill for any real-world Python project.",
    topics: [
      "Lists, Tuples, and Dictionaries",
      "List & Dictionary Comprehensions",
      "Working with JSON data",
      "File I/O Operations",
    ],
    project: "Project 2: Contact Book Application",
    icon: CommandLineIcon,
  },
  {
    day: "Day 3: Functions & OOP",
    title: "Writing Reusable Code",
    description: "Understand the principles of Object-Oriented Programming (OOP) to write modular, scalable, and maintainable code.",
    topics: [
      "Functions & Arguments",
      "OOP: Creating Classes & Objects",
      "Inheritance & Methods",
      "Error Handling & Debugging",
    ],
    project: "Project 3: Simple Role-Playing Game (RPG)",
    icon: BeakerIcon,
  },
  {
    day: "Day 4-5: Web Scraping & Automation",
    title: "Automating the Web",
    description: "Build powerful bots to scrape data from websites and automate repetitive tasks using Selenium.",
    topics: [
      "Introduction to Web Scraping",
      "HTML Structure & CSS Selectors",
      "Browser Automation with Selenium",
      "Handling Dynamic Websites",
    ],
    project: "Project 4: Automated Job Application Bot",
    icon: RocketLaunchIcon,
  },
  {
    day: "Day 6-7: API Integration & Final Project",
    title: "Building a Full-Fledged Application",
    description: "Integrate with external APIs to fetch data and build a complete, portfolio-ready project from scratch.",
    topics: [
      "API Integrations & Requests",
      "Web Development with Flask",
      "Building a RESTful API",
      "Final Project Deployment",
    ],
    project: "Project 5: Personal Portfolio Website Generator",
    icon: SparklesIcon,
  },
];

const AccordionItem = ({ item, isOpen, onToggle }) => {
  const { day, title, description, topics, project, icon: Icon } = item;

  return (
    <div
      className={`border border-gray-800 rounded-xl transition-all duration-300 ${isOpen ? "bg-gray-900/50 glow-border" : "bg-gray-900/30"}`}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left p-6 cursor-pointer">
        <div className="flex items-center">
          <Icon className="w-6 h-6 mr-4 text-[#2563FF]" />
          <div>
            <p className="text-sm font-medium text-gray-400">{day}</p>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
        <ChevronDownIcon
          className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}>
        </ChevronDownIcon>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden">
            <div className="p-6 border-t border-gray-800">
              <p className="text-gray-400 mb-4">{description}</p>
              <ul className="grid md:grid-cols-2 gap-3 mb-4">
                {topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <svg
                      className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
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
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-sm font-semibold text-yellow-400">{project}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Curriculum = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="curriculum" className="py-20 bg-[#050712] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">7-Day Crash Course Curriculum</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A hands-on, project-based curriculum designed to get you building real applications in just one week.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {crashCourseCurriculum.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;