import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import { pricing } from "../constants";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="py-20 bg-white">
      <Element name="pricing">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your learning goals. All plans include lifetime access to course materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={clsx(
                  "rounded-2xl p-8 transition-all duration-300",
                  index === 1
                    ? "border-2 border-blue-600 bg-white shadow-lg"
                    : "border border-gray-200 bg-white hover:border-blue-600 hover:shadow-lg"
                )}
              >
                {index === 1 && (
                  <div className="inline-block px-4 py-1 rounded-full text-sm font-medium text-blue-600 bg-blue-50 mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isMonthly ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span className="text-gray-600">
                    /{isMonthly ? "month" : "year"}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={clsx(
                    "w-full py-3 px-6 rounded-full text-center font-medium transition-colors duration-300",
                    index === 1
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  )}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              Need a custom plan? <a href="#contact" className="text-blue-600 hover:underline">Contact us</a>
            </p>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
