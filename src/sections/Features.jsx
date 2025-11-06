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
    <section id="features" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-bold">
            Why the $49 Crash Course Actually Works
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <motion.div
                key={feature.title}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 text-center hover:border-blue-500 hover:bg-gray-700/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-600/20 p-4 rounded-full">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <a
            href="#pricing" // Link to pricing section
            className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-md shadow-lg hover:bg-blue-700 transition-transform hover:scale-105"
          >
            Start Trial — $49
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
