import { motion } from "framer-motion";
import {
  VideoCameraIcon,
  CodeBracketIcon,
  MapIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const solutions = [
  {
    icon: VideoCameraIcon,
    title: "Live Daily Classes",
    description:
      "Join live sessions every day for 7 days. Ask questions in real-time and get immediate feedback — not a pre-recorded video dump.",
  },
  {
    icon: CodeBracketIcon,
    title: "Real Coding from Day 1",
    description:
      "No theory overload. You write real Python code from your very first session. Every concept is reinforced with a hands-on mini project.",
  },
  {
    icon: MapIcon,
    title: "Step-by-Step Roadmap",
    description:
      "A structured, day-by-day curriculum designed specifically for beginners. No confusion, no jumping around — just a clear path forward.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Beginner-Friendly",
    description:
      "Zero experience required. This course starts from absolute basics and builds up your confidence gradually so you never feel lost.",
  },
];

const Features = () => {
  return (
    <section id="solution" className="py-20 bg-bg-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-neon-blue font-mono text-sm tracking-widest mb-4 block uppercase">
            // THE SOLUTION
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            A Structured{" "}
            <span className="text-transparent bg-clip-text bg-neon-gradient">
              7-Day Python System
            </span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Not another tutorial. A real system designed to take you from zero
            to writing actual code in one week.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="glass-card p-8 rounded-2xl border border-white/5 text-center hover:border-neon-blue/40 hover:shadow-neon-blue/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-bg-900 border border-white/10 p-4 rounded-full shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-neon-blue group-hover:text-neon-purple transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a
            href="#pricing"
            className="px-8 py-4 bg-neon-blue text-bg-900 font-bold text-lg rounded-full shadow-[0_0_20px_rgba(46,242,255,0.3)] hover:shadow-[0_0_30px_rgba(46,242,255,0.5)] hover:bg-white transition-all transform hover:scale-105"
          >
            Start the Course — $49
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
