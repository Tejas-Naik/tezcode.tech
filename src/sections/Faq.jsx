import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { faq } from "../constants";
import { trackEvent } from "../../utils/analytics";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const id = useId();

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-bg-900 text-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-3xl md:text-4xl font-black mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-neon-gradient">Questions</span>
          </h3>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faq.map((faqItem, index) => (
              <div
                key={index}
                className={`glass-card rounded-xl overflow-hidden border transition-all duration-300 ${openIndex === index ? 'border-neon-blue/50 shadow-neon-blue/10' : 'border-white/5 hover:border-white/10'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                  aria-expanded={openIndex === index}
                  aria-controls={`${id}-content-${index}`}
                >
                  <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-neon-blue' : 'text-white'}`}>
                    {faqItem.question}
                  </span>
                  {openIndex === index ? (
                    <MinusIcon className="w-6 h-6 text-neon-blue" />
                  ) : (
                    <PlusIcon className="w-6 h-6 text-neutral-500 group-hover:text-white" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                      id={`${id}-content-${index}`}
                    >
                      <p className="px-6 pb-6 text-neutral-300 leading-relaxed border-t border-white/5 pt-4">
                        {faqItem.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 bg-white/5 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 blur-[80px] rounded-full pointer-events-none"></div>
          <h4 className="text-2xl font-bold mb-3 text-white">Still have questions?</h4>
          <p className="text-lg text-neutral-400 mb-6 max-w-lg mx-auto">
            Get personalized answers from Tejas directly. Parent and student consultations are always free.
          </p>
          <a
            href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("book_call_click", { source: "faq" })}
            className="inline-flex items-center px-8 py-4 rounded-full bg-neon-purple text-white font-bold shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(157,78,221,0.6)] hover:bg-purple-600 transition transform hover:-translate-y-1 relative z-10"
          >
            Book a Free 15-Min Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
