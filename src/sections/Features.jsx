import { useState, useEffect, useRef } from "react";
import { Element } from "react-scroll";
import { features } from "../constants";

// Feature Card Component with expandable details
const FeatureCard = ({ feature, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Feature icons - path elements for the SVG icons
  const featureIcons = [
    // Project-Based Learning
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    />,
    // Live Interactive Sessions
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />,
    // Industry-Ready Skills
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />,
    // Community Support
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />,
    // Career Support
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />,
    // Flexible Learning
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ];
  
  // Feature details for expanded view
  const featureDetails = [
    [
      "Build 100+ real-world projects using Python 3.12",
      "Create portfolio-ready projects for employers",
      "Master practical coding concepts through hands-on work",
      "Daily coding challenges to reinforce concepts"
    ],
    [
      "Daily live classes with expert instructors",
      "Real-time code reviews and feedback",
      "Interactive Q&A during every session",
      "Recorded sessions available for review"
    ],
    [
      "Master modern frameworks like FastAPI and Django",
      "Learn AI/ML integration with practical applications",
      "Cloud & DevOps practices for deployment",
      "GitHub Copilot and VS Code integration"
    ],
    [
      "24/7 Discord community access",
      "WhatsApp groups for each cohort",
      "Peer-to-peer learning and collaboration",
      "Regular community coding events"
    ],
    [
      "Resume and LinkedIn profile reviews",
      "Technical interview preparation",
      "Portfolio development assistance",
      "Job referrals to partner companies"
    ],
    [
      "Classes based on your availability",
      "Access to recorded sessions",
      "Self-paced projects and assignments",
      "Personalized learning paths"
    ]
  ];
  
  // Visual styles for cards with custom gradients
  const gradients = [
    "from-blue-50 to-white border-blue-100",
    "from-indigo-50 to-white border-indigo-100",
    "from-purple-50 to-white border-purple-100",
    "from-pink-50 to-white border-pink-100",
    "from-cyan-50 to-white border-cyan-100",
    "from-emerald-50 to-white border-emerald-100"
  ];
  
  const iconColors = [
    "bg-blue-100 text-blue-600",
    "bg-indigo-100 text-indigo-600",
    "bg-purple-100 text-purple-600",
    "bg-pink-100 text-pink-600",
    "bg-cyan-100 text-cyan-600",
    "bg-emerald-100 text-emerald-600"
  ];
  
  return (
    <div
      className={`rounded-2xl overflow-hidden border transition-all duration-300 bg-gradient-to-br ${gradients[index % gradients.length]} ${isExpanded ? 'shadow-lg transform scale-105 z-10' : 'hover:shadow-xl hover:scale-105 cursor-pointer'}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl ${iconColors[index % iconColors.length]} flex items-center justify-center flex-shrink-0`}>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {featureIcons[index % featureIcons.length]}
            </svg>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <button 
                className={`w-6 h-6 rounded-full flex items-center justify-center ${isExpanded ? 'bg-gray-200' : 'bg-gray-100'}`}
                aria-label={isExpanded ? 'Collapse' : 'Expand'}
              >
                <svg 
                  className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mb-2">{feature.description}</p>
            
            {/* Expandable content */}
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-64 mt-4' : 'max-h-0'}`}>
              <ul className="space-y-2">
                {featureDetails[index % featureDetails.length].map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CountUp hook for animated numbers
function useCountUp(end, duration = 1200, start = 0) {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let startTimestamp = null;
    let req;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        req = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    req = requestAnimationFrame(step);
    return () => cancelAnimationFrame(req);
  }, [end, duration, start]);
  return count;
}

// Reveal on scroll hook
function useReveal(ref) {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);
  return revealed;
}

const Features = () => {
  const sectionRef = useRef();
  const revealed = useReveal(sectionRef);
  // Animated stats
  const students = useCountUp(revealed ? 500 : 0);
  const projects = useCountUp(revealed ? 125 : 0);
  const completion = useCountUp(revealed ? 97 : 0);
  const placement = useCountUp(revealed ? 89 : 0);

  return (
    <section ref={sectionRef} className={`py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Background elements for visual interest */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-50 rounded-full opacity-50 blur-3xl"></div>
      
      <Element name="features">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
              Our Unique Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Students Choose <span className="text-blue-600">TezCode.tech</span>
            </h2>
            <p className="text-xl text-gray-600">
              Unlike traditional learning platforms, we focus on what matters most to help you succeed in today's tech industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>

          {/* Success metrics statistics */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">{students}+</div>
              <p className="text-gray-700">Active Students</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">{projects}+</div>
              <p className="text-gray-700">Projects Built</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">{completion}%</div>
              <p className="text-gray-700">Completion Rate</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">{placement}%</div>
              <p className="text-gray-700">Placement Rate</p>
            </div>
          </div>

          {/* Navigation options */}
          <div className="text-center mt-16">
            <div className="inline-block bg-gray-50 p-1 rounded-full shadow-inner mb-8">
              <a
                href="#courses"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow-md"
              >
                Explore Our Courses
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#testimonials"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-gray-700 font-medium ml-2 hover:bg-gray-100 transition-all duration-300"
              >
                Student Success Stories
              </a>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
