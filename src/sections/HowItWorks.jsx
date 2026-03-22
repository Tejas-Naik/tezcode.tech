import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    name: "Buy the Course",
    description:
      "Enroll for $49 via PayPal. Instant confirmation — no waiting, no fuss.",
    icon: "🛒",
  },
  {
    number: "02",
    name: "Join WhatsApp / Discord",
    description:
      "Get added to the exclusive student group for announcements, resources, and peer support.",
    icon: "💬",
  },
  {
    number: "03",
    name: "Attend Live Daily Classes",
    description:
      "Show up for 7 consecutive live sessions. Ask questions, get real-time help from Tejas directly.",
    icon: "🎓",
  },
  {
    number: "04",
    name: "Build Real Projects",
    description:
      "Apply what you learn each day through hands-on mini projects. Graduate with a working portfolio.",
    icon: "🚀",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-bg-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-neon-blue font-mono text-sm tracking-widest mb-4 block uppercase">
            // HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-5xl font-black">
            From Zero to{" "}
            <span className="text-transparent bg-clip-text bg-neon-gradient">
              Python in 4 Steps
            </span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] w-3/4 h-0.5 bg-gradient-to-r from-neon-blue/20 via-neon-purple/40 to-neon-blue/20"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                className="text-center glass-card p-6 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 bg-bg-900 border-2 border-neon-blue/40 rounded-full text-3xl shadow-neon-blue/20 shadow-lg">
                  {step.icon}
                </div>
                <span className="block text-xs font-mono text-neon-blue uppercase tracking-widest mb-1">
                  Step {step.number}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.name}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
