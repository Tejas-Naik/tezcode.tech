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
    <section id="faq" className="py-20 bg-gray-900 text-white">
      <div
        className="container mx-auto px-6"
        style={{ backgroundColor: "var(--bg-900)" }}
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faq.map((faqItem, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden border border-[rgba(255,255,255,0.03)]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                  aria-expanded={openIndex === index}
                  aria-controls={`${id}-content-${index}`}
                >
                  <span className="text-lg font-medium text-white">
                    {faqItem.question}
                  </span>
                  {openIndex === index ? (
                    <MinusIcon className="w-6 h-6 text-brand-500" />
                  ) : (
                    <PlusIcon className="w-6 h-6 text-gray-500" />
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
                      <p className="px-6 pb-6 text-text-muted">
                        {faqItem.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-text-muted">
            Still unsure?{" "}
            <a
              href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("book_call_click", { source: "faq" })}
              className="text-brand-500 font-semibold hover:underline"
            >
              Book a free 15-min call.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
