import { Element } from "react-scroll";
import { useState } from "react";
import { faq } from "../constants";
import clsx from "clsx";

const Faq = () => {
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFaq = (index) => {
    setOpenFaqs((prevOpenFaqs) => ({
      ...prevOpenFaqs,
      [index]: !prevOpenFaqs[index],
    }));
  };

  return (
    <section className="py-20 bg-white">
      <Element name="faq">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our bootcamp programs and learning experience.
              </p>
            </div>

            <div className="space-y-4">
              {faq.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-600 transition-colors duration-300"
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={clsx(
                        "w-5 h-5 text-gray-600 transform transition-transform duration-300",
                        openFaqs[index] ? "rotate-180" : ""
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={clsx(
                      "transition-all duration-300 overflow-hidden bg-gray-50",
                      openFaqs[index] ? "max-h-96" : "max-h-0"
                    )}
                  >
                    <div className="p-6 text-gray-600">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Faq;
