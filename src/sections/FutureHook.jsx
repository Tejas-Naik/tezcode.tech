import { motion } from "framer-motion";

const FutureHook = () => {
  return (
    <section id="future" className="py-24 bg-bg-900 text-white relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-neon-purple/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-neon-purple font-mono text-sm tracking-widest mb-4 block uppercase">
              // WHAT'S NEXT
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              What Happens{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                After 7 Days?
              </span>
            </h2>

            <div className="glass-card rounded-3xl p-10 md:p-14 border border-neon-purple/20 shadow-neon-purple/10 shadow-2xl relative overflow-hidden">
              {/* Decorative code line */}
              <div className="absolute top-4 left-6 text-xs font-mono text-neon-purple/40">
                // day_8.py
              </div>

              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-8">
                The 7-Day Python Course is just the beginning. It's the{" "}
                <span className="text-white font-semibold">first module</span>{" "}
                of the full{" "}
                <span className="text-neon-purple font-black text-xl md:text-2xl">
                  111 Days of Code Bootcamp
                </span>{" "}
                — where you go from beginner to{" "}
                <span className="text-white font-semibold">
                  job-ready advanced developer
                </span>
                .
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[
                  "🐍 Python Fundamentals",
                  "🌐 Web Development",
                  "🤖 Automation & APIs",
                  "🗄️ Databases",
                  "🚀 Full-Stack Projects",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-sm font-medium text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="text-neutral-500 text-sm mb-8">
                Complete the 7-day course first. Then decide if you want to go
                all the way.
              </p>

              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-bold rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-neon-purple/20 shadow-lg"
              >
                Start Your Journey — $49
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FutureHook;
