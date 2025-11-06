import { motion } from "framer-motion";
import { trackEvent } from "../../utils/analytics";

const Instructor = () => {
  return (
    <section id="instructor" className="py-20 bg-[#050712] text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            className="lg:col-span-2 aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/30 glow-border"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/images/tejas3.jpeg"
              alt="Tejas Naik, Instructor at TezCode.Tech"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-3">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Meet Your Instructor
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-300 mb-6"
            >
              Tejas Naik
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-gray-400 mb-8"
            >
              I'm a self-taught full-stack developer and passionate trainer. With over 5 years of experience and having trained 500+ students, I specialize in creating career-focused curriculums that dramatically improve grades and build impressive portfolios.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a
                href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
                onClick={() => trackEvent("book_call_click", { source: "instructor" })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition"
              >
                Book a Free 15-min Call
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;