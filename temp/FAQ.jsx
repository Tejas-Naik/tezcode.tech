import { Element } from "react-scroll";
import { useState, useRef } from "react";
import { faq } from "../constants";
import clsx from "clsx";

// FAQ categories for organization
const faqCategories = [
  { 
    name: "Classes & Schedule", 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    items: [0, 2, 3] // indexes of FAQs that belong to this category
  },
  { 
    name: "Requirements & Setup", 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [1, 4] // indexes of FAQs that belong to this category
  },
  { 
    name: "Payments & Pricing", 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [5] // indexes of FAQs that belong to this category
  }
];

const Faq = () => {
  const [openFaqs, setOpenFaqs] = useState({});
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const contentRefs = useRef({});

  const toggleFaq = (index) => {
    setOpenFaqs((prevOpenFaqs) => ({
      ...prevOpenFaqs,
      [index]: !prevOpenFaqs[index],
    }));
  };
  
  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? faq.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeCategory === -1 
      ? faq 
      : faq.filter((_, index) => faqCategories[activeCategory].items.includes(index));

  return (
    <section className="py-20 bg-gray-50">
      <Element name="faq">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4">
                Common Questions
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our bootcamp programs and learning experience.
              </p>
            </div>
            
            {/* Search bar */}
            <div className="mb-10 relative">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search for questions..."
                  className="w-full px-5 py-3 pr-12 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setActiveCategory(-1);
                  }}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Category tabs */}
            {!searchQuery && (
              <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
                <button
                  onClick={() => setActiveCategory(-1)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${activeCategory === -1 ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-400'}`}
                >
                  All
                </button>
                {faqCategories.map((category, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(idx)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all flex items-center gap-2 ${activeCategory === idx ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-400'}`}
                  >
                    <span className={activeCategory === idx ? 'text-white' : 'text-indigo-600'}>{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            )}

            {searchQuery && filteredFaqs.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
                <p className="text-gray-600">Try a different search term or browse categories</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-4 py-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Clear search
                </button>
              </div>
            )}
            
            <div className="space-y-5">
              {filteredFaqs.map((faqItem, index) => {
                const faqIndex = faq.indexOf(faqItem);
                return (
                <div
                  key={faqIndex}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-indigo-400 hover:shadow-md transition-all duration-300"
                  ref={el => contentRefs.current[faqIndex] = el}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => toggleFaq(faqIndex)}
                    aria-expanded={openFaqs[faqIndex]}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-indigo-100 p-2 rounded-full text-indigo-600 flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-lg font-medium text-gray-900">{faqItem.question}</span>
                    </div>
                    <div className={`p-2 rounded-full transition-colors duration-300 ${openFaqs[faqIndex] ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}>
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-300 ${openFaqs[faqIndex] ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${openFaqs[faqIndex] ? 'max-h-96 border-t border-gray-100' : 'max-h-0'}`}
                  >
                    <div className="p-6 text-gray-600">{faqItem.answer}</div>
                  </div>
                </div>
              )})}
            </div>

            <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
              <p className="text-white/90 mb-6 max-w-md mx-auto">
                Our team is ready to answer any specific questions you may have about our bootcamp programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-indigo-600 hover:bg-gray-100 transition-colors duration-300 shadow-sm font-medium"
                >
                  Contact Us
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="tel:+916361125087"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-indigo-700 text-white hover:bg-indigo-800 transition-colors duration-300 shadow-sm font-medium"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Faq;
