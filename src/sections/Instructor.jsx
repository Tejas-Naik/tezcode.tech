import { motion } from "framer-motion";
import { trackEvent } from "../../utils/analytics";

const Instructor = () => {
  return (
    <section id="instructor" className="py-24 bg-bg-900 text-white relative">
       {/* Background graphic */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-blue/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
             {/* Decorative grid */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

          <div className="grid lg:grid-cols-5 gap-12 items-center relative z-10">
            {/* Image */}
            <motion.div
              className="lg:col-span-2 relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden aspect-square border-2 border-white/10">
                <img
                  src="/images/tejas3.jpeg"
                  alt="Tejas Naik, Instructor at TezCode.Tech"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="lg:col-span-3">
              <span className="text-neon-blue font-mono text-sm tracking-widest mb-2 block">// THE INSTRUCTOR</span>
              <motion.h3 
                className="text-4xl md:text-5xl font-black mb-6 text-white"
              >
                Meet Tejas Naik
              </motion.h3>
              <motion.div className="space-y-6 text-lg text-neutral-300">
                <p>
                  I'm not an academic. I'm a <span className="text-white font-bold">Full-Stack Developer</span> who knows what the industry actually wants.
                </p>
                <p>
                  Most professors have never shipped production code. I've built real products and trained <span className="text-neon-purple font-bold">500+ students</span> to do the same. My goal is to get you hired, not just pass a test.
                </p>
              </motion.div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                 <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="block text-2xl font-bold text-white">5+</span>
                    <span className="text-xs text-neutral-500 uppercase">Years XP</span>
                 </div>
                 <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="block text-2xl font-bold text-white">500+</span>
                    <span className="text-xs text-neutral-500 uppercase">Graduates</span>
                 </div>
              </div>

              <motion.div className="mt-10">
                <a
                  href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
                  onClick={() => trackEvent("book_call_click", { source: "instructor" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white hover:text-bg-900 transition-all"
                >
                  Book a Free 15-min Career Call
                  <span className="ml-2">→</span>
                </a>
              </motion.div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;