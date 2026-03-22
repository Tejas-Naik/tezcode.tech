import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const outcomes = [
  {
    title: "Write Real Python Programs",
    description:
      "Build working programs from scratch — not just copy-paste snippets.",
  },
  {
    title: "Understand Logic and Loops",
    description:
      "Master control flow, conditionals, and repetition — the core of all programming.",
  },
  {
    title: "Build Mini Projects",
    description:
      "Ship 7 actual projects across 7 days. From calculators to mini-games.",
  },
  {
    title: "Think Like a Developer",
    description:
      "Learn to break down problems, debug your own code, and approach challenges systematically.",
  },
];

const WhatYoullLearn = () => {
  return (
    <section id="learn" className="py-24 bg-bg-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-blue/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-neon-blue font-mono text-sm tracking-widest mb-4 block uppercase">
                // WHAT YOU GAIN
              </span>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                What You'll Be Able To Do{" "}
                <span className="text-transparent bg-clip-text bg-neon-gradient">
                  After 7 Days
                </span>
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                By the end of this course, you won't just know Python syntax.
                You'll have the confidence and skills to keep building on your own.
              </p>
              <a
                href="#pricing"
                className="inline-flex items-center px-7 py-3.5 bg-neon-blue text-bg-900 font-bold rounded-full hover:bg-white transition-all hover:scale-105 shadow-neon-blue"
              >
                Start Learning — $49
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>

            {/* Right: Outcome Cards */}
            <div className="space-y-4">
              {outcomes.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass-card p-6 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-all duration-300 flex items-start gap-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="shrink-0 mt-0.5">
                    <CheckCircleIcon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;
