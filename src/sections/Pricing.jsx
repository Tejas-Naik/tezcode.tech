import { useState } from "react";
import { Element, Link as ScrollLink } from "react-scroll";
  //  import PayPalHostedButton from "../components/PayPalHostedButton";

// Enhanced comparison data for plans
const featureComparisonData = [
  {
    feature: "Live Interactive Classes",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Recorded Session Access",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Hands-on Projects",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Career Guidance",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Interview Preparation",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Resume Building",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Personalized Mentorship",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Project Reviews & Feedback",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "1-on-1 Weekly Coaching Sessions",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Portfolio Development Support",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Job Placement Assistance",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Lifetime Course Updates",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Industry Partner Networking",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Capstone Project Mentorship",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "AI Tools & Advanced Resources",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Certificate of Completion",
    basic: true,
    pro: true,
    premium: true,
  },
];

const Pricing = () => {
  // Calculate course completion stats
  const courseCompletionRate = 94;
  const employmentRate = 87;
  const avgSalaryIncrease = 42;

  // Paypal
  const [checkout, setCheckOut] = useState(false);

  return (
    <Element name="pricing">
      <section
        id="pricing"
        className="py-20 bg-gradient-to-b from-indigo-50 to-white"
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
              Flexible Pricing Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Choose Your Path to Python Success
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Stop struggling with Python assignments. Our proven system has helped 520+ students 
              go from failing grades to acing their programming courses. Join them today.
            </p>
            
            {/* Trial Offer Banner */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 mb-8 shadow-lg">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Stop Failing Today!</h3>
                  <p className="text-green-100">7-Day Trial for just $49 - See Results in 7 Days</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  7-Day Money Back Guarantee
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Full Access to Live Classes
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cancel Anytime
                </div>
              </div>
            </div>
            
            <a
              href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule a Free Consultation
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Trial Plan */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-green-500 flex flex-col">
              <div className="bg-green-600 py-2 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Start Here
                </span>
              </div>
              <div className="p-6 text-center border-b border-green-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  7-Day Trial
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Try our live classes risk-free
                </p>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">
                    $49
                  </span>
                  <span className="text-gray-500 ml-1">/week</span>
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  Full access to live classes & community
                </div>
                <a
                  href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Start Trial Now
                </a>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">7 days of live interactive classes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Access to Discord community</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Recorded session access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">7-day money-back guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Cancel anytime</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Monthly Plan */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 flex flex-col">
              <div className="p-6 text-center border-b border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Monthly Plan
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Pay monthly and learn at your own pace
                </p>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">
                    $499
                  </span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  4-month program (Total: $1,996)
                </div>
                <a
                  href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 rounded-lg border-2 border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                >
                  Start Your Journey
                </a>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {featureComparisonData.map((item, index) => (
                    <li key={index} className="flex items-start">
                      {item.basic ? (
                        <svg
                          className="h-5 w-5 text-blue-500 mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 text-gray-300 mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                      <span
                        className={
                          item.basic ? "text-gray-700" : "text-gray-400"
                        }
                      >
                        {item.feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Full Course Plan */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-blue-500 flex flex-col transform scale-105 z-10">
              <div className="bg-blue-600 py-2 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Best Value
                </span>
              </div>
              <div className="p-6 text-center border-b border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Full Course
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Pay once and save 25%
                </p>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">
                    $1,499
                  </span>
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  One-time payment for full 4-month program
                </div>
                <a
                  href="https://calendar.app.google/7cqRrikvBjMEsY2s8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Get Full Access
                </a>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {featureComparisonData.map((item, index) => (
                    <li key={index} className="flex items-start">
                      {item.basic ? (
                        <svg
                          className="h-5 w-5 text-blue-500 mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 text-gray-300 mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                      <span
                        className={
                          item.basic ? "text-gray-700" : "text-gray-400"
                        }
                      >
                        {item.feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Outcome Statistics */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
              Our Graduates' Success
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-blue-50 hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {courseCompletionRate}%
                </div>
                <p className="text-gray-700">Course Completion Rate</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-blue-50 hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {employmentRate}%
                </div>
                <p className="text-gray-700">Employment Rate</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-blue-50 hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {avgSalaryIncrease}%
                </div>
                <p className="text-gray-700">Average Salary Increase</p>
              </div>
            </div>
          </div>

          {/* Course Comparison */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                How We Compare
              </h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                See how our Python course stacks up against other options in the
                market.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-indigo-50">
                    <th className="px-6 py-4 text-left text-gray-900 font-semibold border-b border-indigo-100 min-w-[200px]">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center text-blue-700 font-bold border-b border-indigo-100 min-w-[160px] bg-blue-50">
                      <div className="relative">
                        <div className="absolute -top-3 left-0 right-0 text-xs font-semibold text-white bg-blue-600 rounded-full py-0.5 px-2 mx-auto w-fit">
                          Best Value
                        </div>
                        TezCode.Tech
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-gray-700 font-semibold border-b border-indigo-100 min-w-[160px]">
                      University Courses
                    </th>
                    <th className="px-6 py-4 text-center text-gray-700 font-semibold border-b border-indigo-100 min-w-[160px]">
                      Online Platforms
                    </th>
                    <th className="px-6 py-4 text-center text-gray-700 font-semibold border-b border-indigo-100 min-w-[160px]">
                      Bootcamps
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium text-gray-800">
                      Live Interactive Classes
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      <svg
                        className="w-6 h-6 text-green-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      <svg
                        className="w-6 h-6 text-green-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      <svg
                        className="w-6 h-6 text-red-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      <svg
                        className="w-6 h-6 text-green-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium text-gray-800">
                      Industry-Relevant Curriculum
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      <svg
                        className="w-6 h-6 text-green-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      <svg
                        className="w-6 h-6 text-yellow-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      <svg
                        className="w-6 h-6 text-green-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      <svg
                        className="w-6 h-6 text-green-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium text-gray-800">
                      1-on-1 Mentorship
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      <svg
                        className="w-6 h-6 text-green-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      <svg
                        className="w-6 h-6 text-yellow-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      <svg
                        className="w-6 h-6 text-red-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      <svg
                        className="w-6 h-6 text-yellow-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium text-gray-800">
                      Job Placement Support
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      <svg
                        className="w-6 h-6 text-green-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      <svg
                        className="w-6 h-6 text-red-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      <svg
                        className="w-6 h-6 text-red-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      <svg
                        className="w-6 h-6 text-green-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium text-gray-800">
                      Cost-to-Value Ratio
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center text-green-600 font-bold">
                      Excellent
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center text-yellow-600">
                      Moderate
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center text-green-600">
                      Good
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center text-red-600">
                      Expensive
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium text-gray-800">
                      Average Price
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center font-bold text-blue-600">
                      $499/month or $1,499
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      $3,000-$30,000
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      $15-$50/month
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-center">
                      $10,000-$20,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Still have questions?
            </h3>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
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
