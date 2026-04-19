import { motion } from "framer-motion";

const problems = [
  {
    emoji: "😵",
    title: "Too Many Tutorials, No Structure",
    description:
      "YouTube has 10,000 Python tutorials. But you jump from one to another and never actually finish anything. No roadmap = no progress.",
  },
  {
    emoji: "📚",
    title: "No Real Projects",
    description:
      "Most courses teach you syntax. But reading about loops doesn't make you a programmer. You need to actually build things to understand.",
  },
  {
    emoji: "🤯",
    title: "Confusing Explanations",
    description:
      "Academic courses are taught by people who've never shipped real code. The explanations are complicated, slow, and hard to follow.",
  },
  {
    emoji: "🧍",
    title: "Zero Guidance or Feedback",
    description:
      "When you get stuck, there's no one to help. You feel alone, frustrated, and eventually quit. That's not a you problem — it's a system problem.",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-24 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-400 font-mono text-sm tracking-widest mb-4 block uppercase">
            // THE PROBLEM
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Why Most People Fail{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-neon-purple">
              to Learn Python
            </span>
          </h2>
          <p className="text-neutral-400 text-lg">
            It's not about intelligence. Most people fail because the system is
            broken — not them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((item, index) => (
            <motion.div
              key={item.title}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-red-400/30 transition-all duration-300 group flex gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl shrink-0 mt-1">{item.emoji}</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bridge to solution */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-neon-blue font-semibold text-lg">
            There's a better way. ↓
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
