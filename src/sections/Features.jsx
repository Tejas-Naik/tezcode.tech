import { Element } from "react-scroll";
import { features } from "../constants";

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <Element name="features">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TezCode.tech?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our bootcamp is designed to give you the best learning experience with features that set us apart.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-blue-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of students who have already transformed their careers through our comprehensive coding bootcamp
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Start Your Journey
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
