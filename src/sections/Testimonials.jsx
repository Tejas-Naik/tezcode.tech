import { useState, useEffect } from "react";
import { Element } from "react-scroll";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Computer Science Student, IIT Bombay",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "TezCode's Python course helped me when I was struggling with my college assignments. The live classes and daily support were crucial for my success. Now I'm confident in my programming skills and have secured an internship at a tech startup.",
    course: "100 Days of Python",
    rating: 5,
    metrics: [
      { label: "College GPA", before: "2.8", after: "3.7" },
      { label: "Projects Completed", value: "12" }
    ]
  },
  {
    name: "Priya Patel",
    role: "Web Developer & Freelancer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Before joining TezCode, I had no coding experience. Their structured curriculum and personalized guidance helped me go from complete beginner to a freelance web developer in just 4 months. I've already built 5 client websites!",
    course: "Web Development Bootcamp",
    rating: 5,
    metrics: [
      { label: "Monthly Income", before: "₹0", after: "₹45,000" },
      { label: "Client Projects", value: "5" }
    ]
  },
  {
    name: "Akash Gupta",
    role: "Data Analyst, Amazon",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    quote: "The Python course's focus on AI/ML and data science was exactly what I needed to transition into a data-focused role. The projects we built using modern libraries like Pandas and scikit-learn directly helped me in my job interviews.",
    course: "100 Days of Python",
    rating: 5,
    metrics: [
      { label: "Salary Increase", before: "₹6L", after: "₹12L" },
      { label: "Data Projects", value: "8" }
    ]
  },
  {
    name: "Meera Joshi",
    role: "Full-Stack Developer",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    quote: "TezCode's daily live classes made all the difference compared to other online courses I tried. The instructors explained complex concepts clearly and were always available for questions. Now I work as a full-stack developer at a tech company.",
    course: "Web Development Bootcamp",
    rating: 5,
    metrics: [
      { label: "Job Applications", before: "15+", after: "1 (Hired!)" },
      { label: "GitHub Contributions", value: "200+" }
    ]
  }
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 ${
        isActive 
          ? "opacity-100 transform scale-100" 
          : "opacity-0 absolute top-0 left-0 transform scale-95 pointer-events-none"
      }`}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center mb-6">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
          />
          <div className="ml-4">
            <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-gray-600">{testimonial.role}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex mb-2">
            {Array(5).fill(0).map((_, i) => (
              <svg 
                key={i} 
                className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-blue-600 text-sm font-medium mb-4">
            Completed: {testimonial.course}
          </div>
        </div>
        
        <blockquote className="italic text-gray-700 mb-6 relative">
          <svg className="absolute top-0 left-0 w-8 h-8 text-blue-100 -mt-3 -ml-3 opacity-50" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="ml-6">{testimonial.quote}</p>
        </blockquote>
        
        <div className="grid grid-cols-2 gap-4">
          {testimonial.metrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-gray-500 text-sm mb-1">{metric.label}</p>
              {metric.before ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="text-red-500 line-through text-sm">{metric.before}</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-green-600 font-bold">{metric.after}</span>
                </div>
              ) : (
                <p className="text-blue-600 font-bold">{metric.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000); // Change testimonial every 8 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Element name="testimonials">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our students come from diverse backgrounds but share one thing in common: they've transformed their careers through our live interactive classes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto relative min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial} 
                isActive={index === activeIndex}
              />
            ))}
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-800 font-medium mb-8 max-w-2xl mx-auto">
              Join hundreds of students who have already transformed their careers with TezCode's live interactive courses
            </p>
            <a 
              href="#pricing" 
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
            >
              Start Your Journey
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Testimonials;
