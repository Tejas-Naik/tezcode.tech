import { motion } from "framer-motion";
import {
  VideoCameraIcon,
  CodeBracketIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { features } from "../constants";

const featureIcons = [VideoCameraIcon, CodeBracketIcon, UserGroupIcon];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-bg-900 text-white relative overflow-hidden">
      {/* Background glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-black mb-4">
            Why the $49 Crash Course <span className="text-transparent bg-clip-text bg-neon-gradient">Actually Works</span>
          </h3>
          <p className="text-neutral-400 text-lg">Most courses fail because they are passive. We are aggressive.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <motion.div
                key={feature.title}
                className="glass-card p-8 rounded-2xl border border-white/5 text-center hover:border-neon-blue/40 hover:shadow-neon-blue/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-bg-900 border border-white/10 p-4 rounded-full shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-neon-blue group-hover:text-neon-purple transition-colors duration-300" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {feature.title}
                </h4>
                <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <a
            href="#pricing" 
            className="px-8 py-4 bg-neon-blue text-bg-900 font-bold text-lg rounded-full shadow-[0_0_20px_rgba(46,242,255,0.3)] hover:shadow-[0_0_30px_rgba(46,242,255,0.5)] hover:bg-white transition-all transform hover:scale-105"
          >
            Start Trial — $49
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
