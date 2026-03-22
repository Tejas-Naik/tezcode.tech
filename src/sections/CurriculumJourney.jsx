import { motion } from "framer-motion";

const days = [
  {
    day: "1",
    title: "Python Basics",
    description:
      "Start from scratch. Variables, data types, strings, and user input. You'll write your first real program on day one.",
    icon: "🐍",
  },
  {
    day: "2",
    title: "Variables & Logic",
    description:
      "Learn to store and manipulate data. Master conditional logic (if/else) and mathematical operators.",
    icon: "🧠",
  },
  {
    day: "3",
    title: "Loops",
    description:
      "Automate repetitive tasks with for and while loops. Build a text-based game using everything you've learned so far.",
    icon: "🔄",
  },
  {
    day: "4",
    title: "Functions",
    description:
      "Write reusable, clean code with functions. Understand how to structure your programs like a professional developer.",
    icon: "⚙️",
  },
  {
    day: "5",
    title: "Mini Project",
    description:
      "Apply Days 1-4 in a complete mini-project. Build something meaningful and add it to your portfolio.",
    icon: "🛠️",
  },
  {
    day: "6",
    title: "Real-World Script",
    description:
      "Write a script that solves a real problem — automation, file handling, or working with data.",
    icon: "🌍",
  },
  {
    day: "7",
    title: "Final Challenge",
    description:
      "Combine all skills in the capstone: a fully functional Hangman game built from scratch. Graduate with confidence.",
    icon: "🏆",
  },
];

const DayCard = ({ day, title, description, icon, isLeft, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className={`relative flex items-center w-full mb-8 ${
      isLeft ? "md:flex-row-reverse" : "md:flex-row"
    }`}
  >
    {/* Spacer for desktop alternating layout */}
    <div className="hidden md:block w-5/12"></div>

    {/* Timeline Circle */}
    <div className="z-20 flex items-center justify-center bg-neon-blue shadow-neon-blue w-10 h-10 rounded-full shrink-0 absolute left-0 md:left-1/2 md:-ml-5">
      <span className="font-black text-lg text-bg-900 leading-none">{day}</span>
    </div>

    {/* Card */}
    <div className="glass-card flex-1 md:w-5/12 md:flex-none px-6 py-6 rounded-2xl border border-white/10 hover:border-neon-blue/30 transition-all duration-300 ml-14 md:ml-0">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-bold text-white text-lg">
          <span className="text-neon-purple">Day {day}: </span>
          {title}
        </h3>
      </div>
      <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const CurriculumJourney = () => {
  return (
    <section className="relative py-24 bg-bg-900 overflow-hidden" id="roadmap">
      {/* Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-neon-blue/5 blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-neon-blue font-mono text-sm tracking-widest mb-4 block uppercase">
            // THE ROADMAP
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-neon-gradient">
              7-Day Plan
            </span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            One day at a time. Each session builds on the last — no confusion, no
            jumps, no fluff.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div
            className="absolute border-white/10 h-full border left-5 md:left-1/2 top-0"
            style={{ borderWidth: "1px" }}
          ></div>

          {days.map((d, i) => (
            <DayCard
              key={d.day}
              {...d}
              index={i}
              isLeft={i % 2 === 0}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neon-blue text-bg-900 font-bold rounded-full hover:bg-white transition-all hover:scale-105 shadow-neon-blue"
          >
            Start Day 1 Today — $49
          </a>
        </div>
      </div>
    </section>
  );
};

export default CurriculumJourney;
