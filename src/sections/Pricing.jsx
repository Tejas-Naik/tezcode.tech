import { useState } from "react";
import { Element } from "react-scroll";

// Enhanced comparison data for plans
const featureComparisonData = [
  {
    feature: "Daily LIVE Classes (2 hours)",
    basic: true,
    pro: true,
    premium: true
  },
  {
    feature: "Access to Course Materials",
    basic: true,
    pro: true,
    premium: true
  },
  {
    feature: "100+ Coding Projects",
    basic: true,
    pro: true,
    premium: true
  },
  {
    feature: "WhatsApp Community Access",
    basic: true,
    pro: true,
    premium: true
  },
  {
    feature: "Discord Community Access",
    basic: false,
    pro: true,
    premium: true
  },
  {
    feature: "Personalized Mentorship",
    basic: false,
    pro: true,
    premium: true
  },
  {
    feature: "Project Reviews & Feedback",
    basic: false,
    pro: true,
    premium: true
  },
  {
    feature: "Interview Preparation",
    basic: false,
    pro: false,
    premium: true
  },
  {
    feature: "Portfolio Development Support",
    basic: false,
    pro: false,
    premium: true
  },
  {
    feature: "Job Placement Assistance",
    basic: false,
    pro: false,
    premium: true
  },
  {
    feature: "Lifetime Course Updates",
    basic: false,
    pro: false,
    premium: true
  },
  {
    feature: "Certificate of Completion",
    basic: true,
    pro: true,
    premium: true
  }
];

const Pricing = () => {
  const [monthly, setMonthly] = useState(true);
  
  const togglePricing = () => {
    setMonthly(!monthly);
  };

  return (
    <Element name="pricing">
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Flexible Pricing Plans</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Choose the Perfect Plan for Your Learning Journey
            </h2>
            <p className="text-xl text-gray-600">
              Get access to expert-led Python courses with interactive live sessions, real-world projects, and personalized mentorship.
            </p>
            
            <div className="mt-8 inline-flex p-1 rounded-full bg-indigo-100 shadow-inner">
              <button
                onClick={togglePricing}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  monthly ? "bg-blue-600 text-white shadow-sm" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={togglePricing}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  !monthly ? "bg-blue-600 text-white shadow-sm" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Annual <span className="text-xs font-bold text-blue-600 ml-1">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 flex flex-col">
              <div className="p-6 text-center border-b border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Basic Plan</h3>
                <p className="text-gray-600 text-sm mb-4">Perfect for beginners exploring Python</p>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">${monthly ? "49" : "39"}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <div className="text-xs text-gray-500 mb-4">{monthly ? "Cancel anytime" : "Billed annually ($468)"}</div>
                <a 
                  href="#" 
                  className="block w-full py-3 px-6 rounded-lg border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-300"
                >
                  Start Learning
                </a>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {featureComparisonData.map((item, index) => (
                    <li key={index} className="flex items-start">
                      {item.basic ? (
                        <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-gray-300 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span className={item.basic ? "text-gray-700" : "text-gray-400"}>{item.feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-blue-500 flex flex-col transform scale-105 z-10">
              <div className="bg-blue-600 py-2 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-white">Most Popular Choice</span>
              </div>
              <div className="p-6 text-center border-b border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pro Plan</h3>
                <p className="text-gray-600 text-sm mb-4">Comprehensive training with mentorship</p>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">${monthly ? "99" : "79"}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <div className="text-xs text-gray-500 mb-4">{monthly ? "Cancel anytime" : "Billed annually ($948)"}</div>
                <a 
                  href="#" 
                  className="block w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md"
                >
                  Start Learning
                </a>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {featureComparisonData.map((item, index) => (
                    <li key={index} className="flex items-start">
                      {item.pro ? (
                        <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-gray-300 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span className={item.pro ? "text-gray-700" : "text-gray-400"}>{item.feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 flex flex-col">
              <div className="p-6 text-center border-b border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Plan</h3>
                <p className="text-gray-600 text-sm mb-4">Complete career-focused package</p>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">${monthly ? "149" : "119"}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <div className="text-xs text-gray-500 mb-4">{monthly ? "Cancel anytime" : "Billed annually ($1,428)"}</div>
                <a 
                  href="#" 
                  className="block w-full py-3 px-6 rounded-lg border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-300"
                >
                  Start Learning
                </a>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {featureComparisonData.map((item, index) => (
                    <li key={index} className="flex items-start">
                      {item.premium ? (
                        <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-gray-300 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span className={item.premium ? "text-gray-700" : "text-gray-400"}>{item.feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Still have questions?</h3>
            <a href="#" className="inline-flex items-center px-8 py-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors duration-300">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Pricing;
