import { useState } from "react";
import { Element, Link as ScrollLink } from "react-scroll";

// Enhanced comparison data for plans
const featureComparisonData = [
  {
    feature: "Daily LIVE Classes (2 hours)",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Access to Course Materials",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "100+ Coding Projects",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "WhatsApp Community Access",
    basic: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Discord Community Access",
    basic: false,
    pro: true,
    premium: true,
  },
  {
    feature: "Personalized Mentorship",
    basic: false,
    pro: true,
    premium: true,
  },
  {
    feature: "Project Reviews & Feedback",
    basic: false,
    pro: true,
    premium: true,
  },
  {
    feature: "1-on-1 Weekly Coaching Sessions",
    basic: false,
    pro: false,
    premium: true,
  },
  {
    feature: "Interview Preparation",
    basic: false,
    pro: false,
    premium: true,
  },
  {
    feature: "Portfolio Development Support",
    basic: false,
    pro: true,
    premium: true,
  },
  {
    feature: "Job Placement Assistance",
    basic: false,
    pro: false,
    premium: true,
  },
  {
    feature: "Lifetime Course Updates",
    basic: false,
    pro: false,
    premium: true,
  },
  {
    feature: "Industry Partner Networking",
    basic: false,
    pro: false,
    premium: true,
  },
  {
    feature: "Capstone Project Mentorship",
    basic: false,
    pro: true,
    premium: true,
  },
  {
    feature: "AI Tools & Advanced Resources",
    basic: false,
    pro: false,
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

  return (
    <Element name="pricing">
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
              Flexible Pricing Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Invest in Your Tech Future Today
            </h2>
            <p className="text-xl text-gray-600">
              Get access to expert-led Python courses with interactive live
              sessions, real-world projects, and personalized mentorship
              tailored to accelerate your career.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 flex flex-col">
              <div className="p-6 text-center border-b border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Starter Plan
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Perfect for beginners exploring Python
                </p>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">
                    $299
                  </span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  12-month program
                </div>
                <a
                  href="#contact"
                  className="block w-full py-3 px-6 rounded-lg border-2 border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                  aria-label="Contact us about Starter Plan"
                  data-inquiry-type="enroll"
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

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-blue-500 flex flex-col transform scale-105 z-10">
              <div className="bg-blue-600 py-2 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular Choice
                </span>
              </div>
              <div className="p-6 text-center border-b border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Pro Plan
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive training with mentorship
                </p>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">
                    $399
                  </span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  12-month program
                </div>
                <a
                  href="#contact"
                  className="block w-full py-3 px-6 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-label="Contact us about Pro Plan"
                  data-inquiry-type="enroll"
                >
                  Advance Your Skills
                </a>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {featureComparisonData.map((item, index) => (
                    <li key={index} className="flex items-start">
                      {item.pro ? (
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
                        className={item.pro ? "text-gray-700" : "text-gray-400"}
                      >
                        {item.feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-200 flex flex-col bg-gradient-to-b from-white to-indigo-50">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-2 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Complete Career Package
                </span>
              </div>
              <div className="p-6 text-center border-b border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Career Accelerator
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Full course with career placement
                </p>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    $999
                  </span>
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  One-time payment (lifetime access)
                </div>
                <a
                  href="#contact"
                  className="block w-full py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                  aria-label="Contact us about Career Accelerator Plan"
                  data-inquiry-type="enroll"
                >
                  Transform Your Career
                </a>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {featureComparisonData.map((item, index) => (
                    <li key={index} className="flex items-start">
                      {item.premium ? (
                        <svg
                          className="h-5 w-5 text-indigo-500 mt-0.5 mr-2"
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
                          item.premium ? "text-gray-700" : "text-gray-400"
                        }
                      >
                        {item.feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 py-3 px-4 bg-purple-50 rounded-lg border border-purple-100">
                  <p className="text-sm text-purple-700 font-medium">
                    <span className="font-bold">BONUS:</span> Includes exclusive
                    access to industry networking events and job placement
                    services!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Referral Program */}
          <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <img
                  src="/images/refer-friend.svg"
                  alt="Refer a friend illustration"
                  className="w-full h-auto"
                  width="200"
                  height="200"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Refer a Friend, Both Get Rewarded
                </h3>
                <p className="text-gray-700 mb-4">
                  When you refer a friend who enrolls in any of our courses,
                  both of you receive a $100 credit towards your course fee.
                  There's no limit to how many friends you can refer!
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-5 py-2 rounded-lg border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 0112 0 4 4 0 0112 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                  Get Your Referral Link
                </a>
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

          {/* Community Integration */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Join Our Thriving Community
              </h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Connect with fellow students, alumni, and instructors in our
                active learning communities. Share resources, collaborate on
                projects, and grow together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Discord Community */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-indigo-100 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <svg
                      className="w-8 h-8 text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Discord Community
                    </h4>
                    <p className="text-gray-600 mb-3">
                      24/7 access to our Discord server with dedicated channels
                      for each course topic, project collaboration, career
                      advice, and general discussion.
                    </p>
                    <div className="flex items-center text-sm text-indigo-600">
                      <span className="font-medium">3,254 members</span>
                      <span className="mx-2">•</span>
                      <span>Active now: 182</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-medium rounded-full">
                    #python-help
                  </span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-medium rounded-full">
                    #career-advice
                  </span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-medium rounded-full">
                    #project-showcase
                  </span>
                </div>
              </div>

              {/* WhatsApp Group */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-green-100 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      WhatsApp Learning Groups
                    </h4>
                    <p className="text-gray-600 mb-3">
                      Join our topic-focused WhatsApp groups for quick help,
                      daily coding challenges, and announcements about upcoming
                      events and job opportunities.
                    </p>
                    <div className="flex items-center text-sm text-green-600">
                      <span className="font-medium">15 active groups</span>
                      <span className="mx-2">•</span>
                      <span>1,872 members</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                    Python Beginners
                  </span>
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                    Web Development
                  </span>
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                    Data Science
                  </span>
                </div>
              </div>
            </div>

            {/* Community Benefits */}
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Community Benefits
              </h4>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-0.5 mr-2"
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
                  <span className="text-gray-700">24/7 Peer Support</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-0.5 mr-2"
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
                  <span className="text-gray-700">Live Coding Sessions</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-0.5 mr-2"
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
                  <span className="text-gray-700">Project Collaboration</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-0.5 mr-2"
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
                  <span className="text-gray-700">Code Reviews</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-0.5 mr-2"
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
                  <span className="text-gray-700">Networking Events</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-0.5 mr-2"
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
                  <span className="text-gray-700">Job Opportunity Sharing</span>
                </div>
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
                      $299-$999
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
