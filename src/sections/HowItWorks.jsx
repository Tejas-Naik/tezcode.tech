import { motion } from "framer-motion";

const steps = [
  {
    name: "Step 1",
    description:
      "Join daily live classes and follow the short project walkthroughs.",
  },
  {
    name: "Step 2",
    description: "Get live feedback + join Discord for 1:1 help.",
  },
  {
    name: "Step 3",
    description: "Ship 7 mini projects and fix any assignment you’re stuck on.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-bold">
            How the 7-Day Crash Course Works
          </h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gray-800 border-2 border-blue-500 rounded-full text-blue-400 font-bold text-2xl">
                  {index + 1}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {step.name}
                </h4>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
